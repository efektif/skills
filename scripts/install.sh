#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
source_dir="$root/skills"
target_dir="${CODEX_SKILLS_DIR:-$HOME/.codex/skills/efektif}"
apply="false"

if [[ "${1:-}" == "--apply" ]]; then
  apply="true"
elif [[ $# -gt 0 ]]; then
  echo "Usage: $0 [--apply]" >&2
  exit 2
fi

"$root/scripts/validate-skills.sh"

echo "Source: $source_dir"
echo "Target: $target_dir"

if [[ "$apply" != "true" ]]; then
  echo "Dry run only. Re-run with --apply to install."
  find "$source_dir" -mindepth 2 -maxdepth 2 -name SKILL.md -print | sort
  exit 0
fi

mkdir -p "$target_dir"

while IFS= read -r skill_file; do
  skill_dir="$(dirname "$skill_file")"
  name="$(basename "$skill_dir")"
  dest="$target_dir/$name"
  tmp_parent="$(mktemp -d "$target_dir/.install.XXXXXX")"
  tmp="$tmp_parent/$name"

  cp -R "$skill_dir" "$tmp"
  if [[ -e "$dest" ]]; then
    backup="$target_dir/$name.backup.$(date +%Y%m%d%H%M%S)"
    mv "$dest" "$backup"
    echo "Backed up existing $name to $backup"
  fi
  mv "$tmp" "$dest"
  rmdir "$tmp_parent"
  echo "Installed $name"
done < <(find "$source_dir" -mindepth 2 -maxdepth 2 -name SKILL.md | sort)

echo "Done"
