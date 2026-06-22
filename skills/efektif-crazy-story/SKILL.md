---
name: efektif-crazy-story
description: "Use when explicitly asked for a Crazy Story app audit: inventory features, write user stories, track test/error/fix/retest status in one canonical Markdown table, and fix only approved UX or logistics issues."
---

# Crazy Story

## Use When

Use when explicitly asked for a Crazy Story app audit: inventory features, write user stories, track test/error/fix/retest status in one canonical Markdown table, and fix only approved UX or logistics issues.

## Steps

- Create one canonical tracker, for example docs/crazy-story.md, unless the repo already has a better planning location.
- Inventory every visible and code-backed feature by domain, role, route, command, API, or workflow.
- Write one user story per feature with actor, goal, expected behavior, acceptance checks, and evidence.
- Test each story, document every error, fix approved UX or logistics issues, then retest affected stories.
- Ask before product, data, security, destructive, or unclear fixes.

## Notes

- Default tracker columns: Feature, Role, Story, Expected behavior, Acceptance checks, Test status, Error, Fix status, Retest result, Evidence.
- Let the project admin decide categories such as domain, persona, role, module, or uncategorized.

## Output

- Keep responses short, structured, and evidence-backed.
- Name exact files, commands, screenshots, or logs used as evidence.
- Separate verified facts from assumptions, blockers, and next actions.
