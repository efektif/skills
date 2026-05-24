---
name: write-skill
description: Use when creating or improving an agent skill. Enforces concise SKILL.md files, progressive disclosure, metadata, and validation.
---

# Write Skill

Use this skill to create or improve skills.

## Structure

Each skill should have:

```text
skill-name/
├── SKILL.md
└── agents/
    └── openai.yaml
```

Add `references/`, `scripts/`, or `assets/` only when they directly reduce repeated work.

## SKILL.md Rules

- Include YAML frontmatter.
- `name` must match the directory.
- `description` must say when to use the skill.
- Keep the body under 160 lines when possible.
- Put optional details in `references/`.
- Avoid generic advice that the model already knows.

## Safety Rules

- Do not include secrets.
- Do not require destructive commands.
- Make installers dry-run by default.
- Prefer validation scripts over manual checklists.

## Done Criteria

- Skill has clear trigger metadata.
- Instructions are short and actionable.
- `agents/openai.yaml` matches the skill.
- `./scripts/validate-skills.sh` passes.

