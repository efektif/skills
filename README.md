# Efektif Skills

Small, safe agent skills for real code work.

This repo is inspired by `mattpocock/skills`, but it is tuned for:

- **Codex-first workflows**
- **Repo-grounded answers**
- **Shorter prompts**
- **Safer shell and git behavior**
- **Dyslexia-friendly output**

## Skills

- **`repo-grounding`**: inspect the real repo before answering.
- **`safe-implementation`**: make scoped changes without overwriting user work.
- **`token-lean`**: keep communication compact without losing accuracy.
- **`grill-with-evidence`**: clarify risky work using files, tests, and runtime evidence.
- **`code-review`**: review diffs with findings first.
- **`handoff`**: create concise continuation notes.
- **`write-skill`**: create new skills with progressive disclosure.
- **`anti-redundant`**: search first and update the source of truth.

## Install

Fast install with `npx skills`:

```sh
npx skills@latest add efektif/skills
```

Local package scripts:

```sh
npm run skills:validate
npm run skills:install:dry
npm run skills:install
```

Clone or open this repo:

```sh
cd /Users/morizkay/Developer/efektif/efektif-skills
```

Dry run first:

```sh
pnpm skills:install:dry
```

By default, skills are installed into:

```text
~/.codex/skills/efektif
```

Set a custom target:

```sh
CODEX_SKILLS_DIR="$HOME/.codex/skills/team" pnpm skills:install
```

After install:

- Restart Codex if the new skills do not appear.
- Use a skill by naming it in your prompt, for example `Use token-lean`.
- Re-run `pnpm skills:install` after editing skills.

## Validate

```sh
pnpm skills:validate
```

## Example Prompts

Call a skill by naming it directly:

```text
Use repo-grounding. Tell me how this app starts locally. Check the real scripts and ports first.
```

```text
Use safe-implementation. Add a dry-run option to this script, keep the patch small, then verify it.
```

```text
Use token-lean compact mode. Summarize the failing build in bullets and include only the next command.
```

```text
Use anti-redundant. Search existing docs and scripts first, then update the source of truth instead of creating another file.
```

For UI work and animation:

```text
Use frontend-app-builder. Make this docs page feel alive with subtle node reveal animation, hover lift, and reduced-motion support.
```

```text
Use frontend-app-builder. Add an animated mindmap that explains the workflow, but keep the UI calm and readable.
```

## Astro Page

Run the local docs page:

```sh
pnpm install
pnpm dev
```

Build it:

```sh
pnpm build
```

## Design Rules

- **Keep `SKILL.md` short**.
- **Move detailed examples into `references/` only when needed**.
- **Prefer scripts for repeatable checks**.
- **Default to dry-run for installers**.
- **Never include secrets**.
- **Never require destructive commands**.
