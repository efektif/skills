# Efektif Skills

This is the active prefixed skill set.

Every skill name starts with **`efektif-`** so it is easy to identify in local agent skill pickers.

## Core Set

1. **efektif-repo-agent-setup**
   - Bootstraps repo-specific agent context, validation commands, issue flow, and durable guidance.

2. **efektif-repo-grounding**
   - Forces inspection of files, scripts, git state, and current checkout.

3. **efektif-memory-grounding**
   - Checks memory when prior context matters, while separating memory-derived facts from current verification.

4. **efektif-clarify-with-evidence**
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

11. **efektif-user-workflow-qa**
    - Runs user-facing smoke checks after implementation.

12. **efektif-crazy-story**
    - Inventories app features, turns them into stories, tracks tests and errors, fixes approved UX/logistics issues, and retests.

13. **efektif-triage**
    - Turns issues, failures, and TODOs into clear states.

14. **efektif-architecture-review**
    - Finds architecture improvements from current code evidence.

15. **efektif-refactor-plan**
    - Produces a scoped refactor plan before risky edits.

## Planning Set

16. **efektif-intent-to-prd**
    - Converts rough intent into a lean implementation-aware PRD.

17. **efektif-plan-to-issues**
    - Breaks a PRD or plan into small verifiable issues.

18. **efektif-prd-to-plan**
    - Converts a PRD into a practical execution plan.

19. **efektif-zoom-out**
    - Checks whether the current fix targets the right problem.

## Ops Set

20. **efektif-deployment-readiness**
    - Checks build, config, docs, deploy path, and service health.

21. **efektif-machine-cleanup**
    - Inventories local tools, apps, skills, and config safely.

22. **efektif-checkpoint-commits**
    - Guides small verified commit checkpoints only when the user asked for commits.

23. **efektif-branch-summary**
    - Explains the current branch from git state, diffs, and recent commits.

24. **efektif-install-skill-package**
    - Validates, dry-runs, installs, and verifies skill packages.

## Product Set

25. **efektif-design-interface**
    - Designs practical interfaces that match product context.

26. **efektif-prototype**
    - Builds small interactive prototypes when interaction beats prose.

27. **efektif-write-skill**
    - Creates small token-light skills with validation-ready structure.

## Build Order

1. **efektif-repo-agent-setup**
2. **efektif-repo-grounding**
3. **efektif-memory-grounding**
4. **efektif-safe-implementation**
5. **efektif-verification-before-done**
6. **efektif-diagnose**
7. **efektif-code-review**
8. **efektif-deployment-readiness**
9. **efektif-machine-cleanup**
10. **efektif-write-skill**
