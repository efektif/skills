---
name: safe-implementation
description: Use when editing code, docs, scripts, or configuration in a shared working tree. Keeps changes scoped and protects user work.
---

# Safe Implementation

Use this skill when making changes.

## Guardrails

- **Check worktree first** with `git status -sb`.
- **Do not revert user changes** unless explicitly asked.
- **Keep edits scoped** to the request.
- **Avoid destructive commands**.
- **Use `apply_patch`** for manual edits.
- **Run focused verification** before saying done.

## Implementation Loop

1. Inspect the relevant files.
2. Identify the smallest safe change.
3. Explain the edit briefly before writing.
4. Patch files.
5. Run the narrowest useful check.
6. Report what changed and what passed.

## If Verification Fails

- Distinguish **your bug** from **environment/tooling failure**.
- Fix your bug if it is in scope.
- If blocked by missing deps, network, or secrets, say exactly what blocked it.

## Final Response

Include:

- **Changed files**
- **Verification**
- **Known limits**, if any

