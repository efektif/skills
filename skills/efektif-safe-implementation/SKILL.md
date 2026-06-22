---
name: efektif-safe-implementation
description: "Use when modifying a shared checkout; make scoped edits, protect user work, and verify the narrowest useful path."
---

# Safe Implementation

## Use When

Use when modifying a shared checkout; make scoped edits, protect user work, and verify the narrowest useful path.

## Steps

- Check git status before editing.
- Keep the patch inside the requested ownership boundary.
- Do not revert unrelated changes or cleanup user work by accident.
- Run the smallest meaningful verification before finishing.

## Output

- Keep responses short, structured, and evidence-backed.
- Name exact files, commands, screenshots, or logs used as evidence.
- Separate verified facts from assumptions, blockers, and next actions.
