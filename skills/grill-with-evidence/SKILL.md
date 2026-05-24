---
name: grill-with-evidence
description: Use before risky or ambiguous implementation work. Clarifies requirements using repository evidence, not long speculative interviews.
---

# Grill With Evidence

Use this skill when the request is ambiguous or high impact.

## Principle

Ask fewer questions by checking the repo first.

## Workflow

1. **Gather evidence**
   - Read local instructions.
   - Inspect relevant code paths.
   - Check tests, scripts, and docs.

2. **Map decisions**
   - What is already decided by the repo?
   - What is still ambiguous?
   - Which ambiguity can cause rework or data loss?

3. **Ask only blocking questions**
   - Ask at most 1-3 questions.
   - Offer a recommended default.
   - Do not ask questions that local evidence can answer.

4. **Produce a small plan**
   - Include files to touch.
   - Include verification.
   - Include rollback or safety notes when relevant.

