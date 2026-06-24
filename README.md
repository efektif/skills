# Efektif Skills

Small, safe agent skills for real code work.

This repo contains **prefixed Efektif skills** for agent-led engineering workflows:

- **Repo-grounded answers**
- **Memory-aware continuity**
- **Evidence-backed clarification**
- **Small verified commits when requested**
- **Deployment and ops checks**
- **User workflow QA and app audits**
- **Safe machine-local cleanup**

## Current State

- **Active skills:** 29
- **Prefix:** `efektif-`
- **Validation:** `bun run skills:validate`
- **Install target:** `~/.codex/skills/efektif`

## Skills

- **efektif-repo-agent-setup** — Repo Agent Setup
- **efektif-repo-grounding** — Repo Grounding
- **efektif-memory-grounding** — Memory Grounding
- **efektif-clarify-with-evidence** — Clarify With Evidence
- **efektif-safe-implementation** — Safe Implementation
- **efektif-verification-before-done** — Verification Before Done
- **efektif-code-review** — Code Review
- **efektif-handoff** — Handoff
- **efektif-diagnose** — Diagnose
- **efektif-tdd** — Pragmatic TDD
- **efektif-user-workflow-qa** — User Workflow QA
- **efektif-crazy-story** — Crazy Story
- **efektif-triage** — Triage
- **efektif-intent-to-prd** — Intent To PRD
- **efektif-plan-to-issues** — Plan To Issues
- **efektif-prd-to-plan** — PRD To Plan
- **efektif-zoom-out** — Zoom Out
- **efektif-architecture-review** — Architecture Review
- **efektif-refactor-plan** — Refactor Plan
- **efektif-deployment-readiness** — Deployment Readiness
- **efektif-machine-cleanup** — Machine Cleanup
- **efektif-checkpoint-commits** — Checkpoint Commits
- **efektif-branch-summary** — Branch Summary
- **efektif-install-skill-package** — Install Skill Package
- **efektif-gsd** — GSD Execution
- **efektif-uiuxpromax** — UIUX Pro Max
- **efektif-design-interface** — Design Interface
- **efektif-prototype** — Prototype
- **efektif-write-skill** — Write Skill

## Local Commands

```sh
bun run skills:validate
bun run skills:install:dry
bun run skills:install
```

## Deployment

The docs site is built as a static Astro subpath at `https://efektif.app/skills/`.

```sh
bun run build
sudo rsync -a --delete dist/ /var/www/efektif.app/skills/
```

Caddy serves it from the same `/var/www/efektif.app` root as the main Efektif landing page.

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
