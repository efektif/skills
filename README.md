# Efektif Skills

Small, safe agent skills for real code work.

This repo contains **prefixed Efektif skills** for agent-led engineering workflows:

- **Repo-grounded answers**
- **Memory-aware continuity**
- **Small verified commits**
- **Deployment and ops checks**
- **Dyslexia-friendly output**
- **Safe machine-local cleanup**

## Current State

- **Active skills:** 28
- **Prefix:** `efektif-`
- **Validation:** `bun run skills:validate`
- **Install target:** `~/.codex/skills/efektif`

## Skills

- **efektif-setup-skills**
- **efektif-repo-grounding**
- **efektif-memory-grounding**
- **efektif-grill-with-evidence**
- **efektif-safe-implementation**
- **efektif-verification-before-done**
- **efektif-code-review**
- **efektif-handoff**
- **efektif-diagnose**
- **efektif-tdd**
- **efektif-qa**
- **efektif-triage**
- **efektif-to-prd**
- **efektif-to-issues**
- **efektif-prd-to-plan**
- **efektif-zoom-out**
- **efektif-improve-codebase-architecture**
- **efektif-request-refactor-plan**
- **efektif-deployment-readiness**
- **efektif-machine-cleanup**
- **efektif-commit-often**
- **efektif-branch-summary**
- **efektif-agent-docs-init**
- **efektif-install-skill-package**
- **efektif-design-interface**
- **efektif-prototype**
- **efektif-write-skill**
- **efektif-edit-article**

## Local Commands

```sh
bun run skills:validate
bun run skills:install:dry
bun run skills:install
```

Raw scripts:

```sh
./scripts/validate-skills.sh
./scripts/install.sh
./scripts/install.sh --apply
```

Regenerate skills from the local source of truth:

```sh
node scripts/sync-skills.mjs
```

## Design Rules

- Keep `SKILL.md` files **small and token-light**.
- Move detailed examples into `references/` only when needed.
- Prefer scripts for repeatable checks.
- Default installers to **dry-run**.
- Never include secrets.
- Never require destructive commands.
