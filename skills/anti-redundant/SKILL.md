---
name: anti-redundant
description: Use when adding docs, skills, features, abstractions, summaries, or refactors where duplicate files, repeated text, parallel commands, or repeated decisions are likely.
---

# Anti Redundant

Use this skill to keep one source of truth.

## Workflow

1. **Search first**
   - Use `rg --files` for file discovery.
   - Use `rg` for names, commands, concepts, and similar wording.
   - Check docs, scripts, config, and existing helpers before creating anything.

2. **Identify overlap**
   - Existing source of truth.
   - Repeated commands or copy.
   - Parallel helpers that do the same job.
   - Similar abstractions or components.

3. **Choose the smallest change**
   - Patch the existing file when possible.
   - Reuse current commands, helpers, and components.
   - Create a new file only when it removes real complexity.

4. **Make duplication explicit**
   - Say what was reused.
   - Say what was merged.
   - Say what new source of truth remains.

## Avoid

- Duplicate README sections.
- Extra summary docs that repeat existing docs.
- Parallel install commands with different behavior.
- New abstractions that wrap existing abstractions without reducing complexity.
- Repeating the user's full request in the answer.

## Final Response

Keep the answer delta-focused:

- **Created**
- **Merged or reused**
- **Removed redundancy**
- **Verification**

