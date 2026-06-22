---
name: efektif-repo-grounding
description: "Use when a request depends on the current checkout; inspect files, scripts, branch state, and docs before answering."
---

# Repo Grounding

## Use When

Use when a request depends on the current checkout; inspect files, scripts, branch state, and docs before answering.

## Steps

- Confirm cwd, git status, branch, package scripts, and relevant files.
- Use exact paths and commands instead of framework guesses.
- Separate confirmed facts from inferred context.
- Re-check after edits when the answer depends on changed files.

## Output

- Keep responses short, structured, and evidence-backed.
- Name exact files, commands, screenshots, or logs used as evidence.
- Separate verified facts from assumptions, blockers, and next actions.
