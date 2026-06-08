# Efektif Skills

This is the active prefixed skill set.

Every skill name starts with **`efektif-`** so it is easy to identify in local agent skill pickers.

## Core Set

1. **efektif-setup-skills**
   - Bootstraps repo-specific agent config, docs, validation commands, and handoff style.

2. **efektif-repo-grounding**
   - Forces inspection of files, scripts, git state, and current checkout.

3. **efektif-memory-grounding**
   - Checks memory when prior context matters, while separating memory-derived facts from current verification.

4. **efektif-grill-with-evidence**
   - Clarifies risky work using local files, tests, docs, and runtime evidence first.

5. **efektif-safe-implementation**
   - Makes scoped edits while protecting user work.

6. **efektif-verification-before-done**
   - Requires explicit verification before claiming completion.

7. **efektif-code-review**
   - Reviews diffs with findings first.

8. **efektif-handoff**
   - Writes concise continuation notes for another agent or future session.

## Engineering Set

9. **efektif-diagnose**
   - Uses a systematic reproduce, minimize, hypothesize, instrument, fix, and regression-test loop.

10. **efektif-tdd**
    - Uses pragmatic red-green-refactor when a meaningful test seam exists.

11. **efektif-qa**
    - Runs user-facing smoke checks after implementation.

12. **efektif-triage**
    - Turns issues, failures, and TODOs into clear states.

13. **efektif-to-prd**
    - Converts rough intent into a lean implementation-aware PRD.

14. **efektif-to-issues**
    - Breaks a PRD or plan into small verifiable issues.

15. **efektif-prd-to-plan**
    - Converts a PRD into a practical execution plan.

16. **efektif-zoom-out**
    - Checks whether the current fix targets the right problem.

17. **efektif-improve-codebase-architecture**
    - Finds architecture improvements from current code evidence.

18. **efektif-request-refactor-plan**
    - Produces a scoped refactor plan before risky edits.

## Ops Set

19. **efektif-deployment-readiness**
    - Checks build, config, docs, deploy path, and service health.

20. **efektif-machine-cleanup**
    - Inventories local tools, apps, skills, and config safely.

21. **efektif-commit-often**
    - Guides small verified commit checkpoints.

22. **efektif-branch-summary**
    - Explains the current branch from git state, diffs, and recent commits.

23. **efektif-agent-docs-init**
    - Creates concise repo-specific `AGENTS.md`.

24. **efektif-install-skill-package**
    - Validates, dry-runs, installs, and verifies skill packages.

## Product And Writing Set

25. **efektif-design-interface**
    - Designs practical interfaces that match product context.

26. **efektif-prototype**
    - Builds small interactive prototypes when interaction beats prose.

27. **efektif-write-skill**
    - Creates small token-light skills with validation-ready structure.

28. **efektif-edit-article**
    - Edits writing for clarity, structure, and voice.

## Build Order

1. **efektif-setup-skills**
2. **efektif-repo-grounding**
3. **efektif-memory-grounding**
4. **efektif-safe-implementation**
5. **efektif-verification-before-done**
6. **efektif-diagnose**
7. **efektif-code-review**
8. **efektif-deployment-readiness**
9. **efektif-machine-cleanup**
10. **efektif-write-skill**
