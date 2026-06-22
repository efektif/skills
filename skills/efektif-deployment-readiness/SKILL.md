---
name: efektif-deployment-readiness
description: "Use before deploys or release claims; check build, config, migrations, docs, service health, and known blockers."
---

# Deployment Readiness

## Use When

Use before deploys or release claims; check build, config, migrations, docs, service health, and known blockers.

## Steps

- Read deployment docs and environment templates first.
- Separate local build success from live deploy readiness.
- Check migrations, config, secrets requirements, logs, and health endpoints when available.
- Report go/no-go status with evidence.

## Output

- Keep responses short, structured, and evidence-backed.
- Name exact files, commands, screenshots, or logs used as evidence.
- Separate verified facts from assumptions, blockers, and next actions.
