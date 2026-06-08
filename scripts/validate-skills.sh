#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
skills_dir="$root/skills"

if [[ ! -d "$skills_dir" ]]; then
  echo "Missing skills directory: $skills_dir" >&2
  exit 1
fi

status=0

while IFS= read -r skill_file; do
  rel="${skill_file#$root/}"
  dir="$(dirname "$skill_file")"
  name="$(basename "$dir")"

  if ! grep -q '^---$' "$skill_file"; then
    echo "FAIL $rel: missing YAML frontmatter fence" >&2
    status=1
  fi

  if ! grep -q '^name: '"$name"'$' "$skill_file"; then
    echo "FAIL $rel: frontmatter name must match directory '$name'" >&2
    status=1
  fi

  if ! grep -q '^description: ' "$skill_file"; then
    echo "FAIL $rel: missing description" >&2
    status=1
  fi

  lines="$(wc -l < "$skill_file" | tr -d ' ')"
  if [[ "$lines" -gt 160 ]]; then
    echo "WARN $rel: $lines lines; consider moving details to references/" >&2
  fi

  agent_file="$dir/agents/openai.yaml"
  agent_rel="${agent_file#$root/}"
  if [[ ! -f "$agent_file" ]]; then
    echo "FAIL $rel: missing agents/openai.yaml" >&2
    status=1
  else
    for field in display_name short_description default_prompt; do
      if ! grep -q "^$field: " "$agent_file"; then
        echo "FAIL $agent_rel: missing $field" >&2
        status=1
      fi
    done
  fi

  if grep -RInE '(sk-[A-Za-z0-9]|OPENAI_API_KEY=|password=|secret=)' "$dir" >/dev/null; then
    echo "FAIL $rel: possible secret-like text found in skill directory" >&2
    status=1
  fi
done < <(find "$skills_dir" -mindepth 2 -maxdepth 2 -name SKILL.md | sort)

count="$(find "$skills_dir" -mindepth 2 -maxdepth 2 -name SKILL.md | wc -l | tr -d ' ')"

if [[ "$count" -eq 0 ]]; then
  echo "Validated 0 skills"
  echo "No active skills found. This is allowed while the package is being redesigned."
else
  echo "Validated $count skills"
fi

exit "$status"
