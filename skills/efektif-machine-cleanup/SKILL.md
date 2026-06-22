---
name: efektif-machine-cleanup
description: "Use for local cleanup of tools, skills, apps, caches, and config after the user scopes the cleanup; inventory first and default to dry-run."
---

# Machine Cleanup

## Use When

Use for local cleanup of tools, skills, apps, caches, and config after the user scopes the cleanup; inventory first and default to dry-run.

## Steps

- List current state before deleting or changing anything.
- Prefer dry-run and reversible operations.
- Avoid vendor, marketplace, and plugin cache paths unless explicitly scoped.
- Ask before destructive cleanup when scope is unclear.

## Output

- Keep responses short, structured, and evidence-backed.
- Name exact files, commands, screenshots, or logs used as evidence.
- Separate verified facts from assumptions, blockers, and next actions.
