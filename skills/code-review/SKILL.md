---
name: code-review
description: Use when reviewing uncommitted changes, a branch, a pull request, or a patch. Prioritizes bugs, regressions, risk, and missing tests.
---

# Code Review

Use this skill for review requests.

## Review Order

1. Understand the target:
   - uncommitted changes
   - branch diff
   - PR diff
   - specific file

2. Inspect real changes:
   - `git status -sb`
   - `git diff`
   - `git diff --stat`
   - relevant tests and docs

3. Prioritize findings:
   - correctness bugs
   - security or data-loss risk
   - behavior regressions
   - missing tests for risky paths

## Output Shape

Start with findings.

For each finding:

- **Severity**
- **File and line**
- **Problem**
- **Why it matters**
- **Suggested fix**

If no issues are found, say that clearly and note remaining risk.

