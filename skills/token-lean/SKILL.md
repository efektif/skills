---
name: token-lean
description: Use when the user asks for shorter, safer, token-efficient communication or when context is large and answers must stay concise.
---

# Token Lean

Use this skill to reduce token usage while preserving correctness.

## Rules

- **Lead with the answer**.
- Use short bullets.
- Drop filler and praise.
- Keep reasoning brief.
- Prefer file paths and commands over prose.
- Do not repeat context the user already gave.
- Summarize large outputs instead of pasting them.

## Compression Levels

- **Normal**: concise, readable, complete.
- **Compact**: bullets only, minimal explanation.
- **Trace**: command/result/status only.

Default to **Normal** unless the user asks for stronger compression.

## Never Compress Away

- Risks.
- Failed checks.
- Security concerns.
- Data-loss warnings.
- Commands the user must run.

