---
name: repo-grounding
description: Use when answering questions about a repository, module, file, command, or current implementation state. Forces local evidence before conclusions.
---

# Repo Grounding

Use this skill before giving repo-specific answers.

## Workflow

1. **Find the root**
   - Run `pwd`.
   - Check `git status -sb`.
   - Look for repo instructions: `AGENTS.md`, `README.md`, package config, build files.

2. **Inspect the real path**
   - Use `rg --files` for file discovery.
   - Use `rg` for symbols, commands, and config.
   - Read only the files needed for the answer.

3. **Separate evidence from inference**
   - Say what the repo proves.
   - Mark assumptions clearly.
   - Avoid claiming current behavior without checking code, tests, or runtime output.

4. **Answer with commands first**
   - If the user asks how to run something, give exact repo-local commands.
   - Mention required cwd.

## Output Shape

- **Current state**: what exists.
- **Relevant files**: short list with paths.
- **Next step**: command or change.

