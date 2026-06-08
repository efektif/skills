import { mkdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const skillsRoot = join(root, "skills");

const skills = [
  {
    slug: "efektif-setup-skills",
    title: "Efektif Setup Skills",
    description: "Bootstrap repo-specific agent context, validation commands, and handoff rules.",
    steps: [
      "Inspect repo docs, package scripts, issue links, and validation commands.",
      "Identify the repo-specific rules future agents should reuse.",
      "Write or update the smallest durable guidance file.",
      "Verify the documented commands still match the checkout.",
    ],
  },
  {
    slug: "efektif-repo-grounding",
    title: "Efektif Repo Grounding",
    description: "Inspect the current checkout before answering repo-dependent questions.",
    steps: [
      "Check cwd, git status, relevant files, scripts, and docs.",
      "Prefer exact file paths and commands over subsystem guesses.",
      "Separate confirmed repo facts from inferred context.",
    ],
  },
  {
    slug: "efektif-memory-grounding",
    title: "Efektif Memory Grounding",
    description: "Use saved memory carefully when prior context affects current work.",
    steps: [
      "Search memory only when history can change the answer.",
      "Treat memory as a pointer, not proof.",
      "Verify stale or risky facts against the current checkout.",
      "Say when an answer relies on memory-derived context.",
    ],
  },
  {
    slug: "efektif-grill-with-evidence",
    title: "Efektif Grill With Evidence",
    description: "Clarify risky work with local evidence before asking questions.",
    steps: [
      "Inspect the relevant files, logs, docs, or runtime state first.",
      "Ask only blocking questions.",
      "Offer a conservative default when evidence supports one.",
    ],
  },
  {
    slug: "efektif-safe-implementation",
    title: "Efektif Safe Implementation",
    description: "Make scoped changes while protecting user work in shared checkouts.",
    steps: [
      "Check git status before editing.",
      "Keep the patch inside the requested ownership boundary.",
      "Do not revert unrelated user changes.",
      "Run the narrowest useful verification before finishing.",
    ],
  },
  {
    slug: "efektif-verification-before-done",
    title: "Efektif Verification Before Done",
    description: "Verify work before claiming it is complete.",
    steps: [
      "Run the relevant test, build, lint, smoke, or docs command.",
      "Separate done, blocked, and unverified items.",
      "Report the exact commands and outcomes.",
    ],
  },
  {
    slug: "efektif-code-review",
    title: "Efektif Code Review",
    description: "Review changes with findings first and evidence-backed risk.",
    steps: [
      "Inspect the diff and nearby code paths.",
      "Lead with bugs, regressions, security issues, and missing tests.",
      "Use file and line references where possible.",
      "Keep summaries secondary to actionable findings.",
    ],
  },
  {
    slug: "efektif-handoff",
    title: "Efektif Handoff",
    description: "Create concise continuation notes for another agent or later session.",
    steps: [
      "Capture the goal, current status, changed files, and commands run.",
      "Name blockers and the next concrete action.",
      "Keep the handoff short enough to paste into a new thread.",
    ],
  },
  {
    slug: "efektif-diagnose",
    title: "Efektif Diagnose",
    description: "Debug failures with a systematic evidence loop.",
    steps: [
      "Reproduce the issue before changing code.",
      "Minimize the failure surface.",
      "Form and test one hypothesis at a time.",
      "Add a regression check after the fix.",
    ],
  },
  {
    slug: "efektif-tdd",
    title: "Efektif TDD",
    description: "Use pragmatic red-green-refactor when a test seam exists.",
    steps: [
      "Find the smallest meaningful failing test.",
      "Implement only enough to pass.",
      "Refactor after behavior is protected.",
      "Do not force TDD where the repo lacks a reasonable test seam.",
    ],
  },
  {
    slug: "efektif-qa",
    title: "Efektif QA",
    description: "Check user-facing behavior after implementation.",
    steps: [
      "Identify the workflow a real user would exercise.",
      "Run focused smoke checks across relevant viewport or runtime states.",
      "Capture screenshots or logs when they add confidence.",
      "Report residual risk plainly.",
    ],
  },
  {
    slug: "efektif-triage",
    title: "Efektif Triage",
    description: "Turn issues, failures, and TODOs into clear states.",
    steps: [
      "Group items into done, active, blocked, and not started.",
      "Separate symptoms from likely causes.",
      "Name the next action and owner when possible.",
    ],
  },
  {
    slug: "efektif-to-prd",
    title: "Efektif To PRD",
    description: "Convert rough product intent into a lean implementation-aware PRD.",
    steps: [
      "State the user problem and success criteria.",
      "Define scope, non-goals, states, and edge cases.",
      "Keep the PRD short and directly useful for implementation.",
    ],
  },
  {
    slug: "efektif-to-issues",
    title: "Efektif To Issues",
    description: "Break a plan or PRD into small verifiable issues.",
    steps: [
      "Split work by independently testable outcomes.",
      "Include acceptance checks and dependencies.",
      "Keep each issue narrow enough for a small commit or PR.",
    ],
  },
  {
    slug: "efektif-prd-to-plan",
    title: "Efektif PRD To Plan",
    description: "Convert a PRD into a practical execution plan.",
    steps: [
      "Map requirements to implementation areas.",
      "Sequence the work by dependency and risk.",
      "Add verification gates for each phase.",
    ],
  },
  {
    slug: "efektif-zoom-out",
    title: "Efektif Zoom Out",
    description: "Check whether the current fix targets the right problem.",
    steps: [
      "Restate the goal and current approach.",
      "Look for cheaper, safer, or more direct paths.",
      "Name tradeoffs before broad refactors or pivots.",
    ],
  },
  {
    slug: "efektif-improve-codebase-architecture",
    title: "Efektif Improve Codebase Architecture",
    description: "Find architecture improvements from current code evidence.",
    steps: [
      "Inspect actual dependencies and ownership boundaries.",
      "Prefer small refactors with clear payoff.",
      "Avoid vague rewrites without a verification path.",
    ],
  },
  {
    slug: "efektif-request-refactor-plan",
    title: "Efektif Request Refactor Plan",
    description: "Produce a scoped refactor plan before editing risky code.",
    steps: [
      "Describe the current shape and pain point.",
      "Define safe stages and rollback points.",
      "List validation after each stage.",
    ],
  },
  {
    slug: "efektif-deployment-readiness",
    title: "Efektif Deployment Readiness",
    description: "Check whether build, config, docs, and service health are deploy-ready.",
    steps: [
      "Read deployment docs and environment templates first.",
      "Separate local build success from live deploy success.",
      "Check service health, logs, and known blockers when available.",
    ],
  },
  {
    slug: "efektif-machine-cleanup",
    title: "Efektif Machine Cleanup",
    description: "Inventory local tools, skills, apps, and config before cleanup.",
    steps: [
      "List current state before deleting or changing anything.",
      "Default to dry-run and reversible operations.",
      "Avoid vendor, marketplace, and plugin cache paths unless explicitly scoped.",
    ],
  },
  {
    slug: "efektif-commit-often",
    title: "Efektif Commit Often",
    description: "Create small verified commits at useful checkpoints.",
    steps: [
      "Group related changes only.",
      "Verify before staging.",
      "Use conventional commit messages.",
      "Do not include unrelated user work.",
    ],
  },
  {
    slug: "efektif-branch-summary",
    title: "Efektif Branch Summary",
    description: "Explain a branch from git state, recent commits, and diffs.",
    steps: [
      "Check branch, upstream, status, and recent commits.",
      "Inspect diff stats and key changed files.",
      "Summarize purpose, risk, and verification status.",
    ],
  },
  {
    slug: "efektif-agent-docs-init",
    title: "Efektif Agent Docs Init",
    description: "Create concise repo-specific AGENTS.md guidance.",
    steps: [
      "Inspect the live tree before writing.",
      "Document commands, structure, style, and verification gates.",
      "Keep the guide short and repo-specific.",
    ],
  },
  {
    slug: "efektif-install-skill-package",
    title: "Efektif Install Skill Package",
    description: "Validate, dry-run, install, and verify skill packages safely.",
    steps: [
      "Run package validation first.",
      "Run dry-run install before apply.",
      "Verify installed files in the target skills directory.",
      "Report exact target path and installed count.",
    ],
  },
  {
    slug: "efektif-design-interface",
    title: "Efektif Design Interface",
    description: "Design practical interfaces that match the product context.",
    steps: [
      "Use existing design systems, tokens, and product patterns first.",
      "Prioritize the real workflow over decorative landing pages.",
      "Verify responsive layout and readable text.",
    ],
  },
  {
    slug: "efektif-prototype",
    title: "Efektif Prototype",
    description: "Build small interactive prototypes when interaction beats prose.",
    steps: [
      "Define the target workflow and interaction level.",
      "Reuse project conventions and avoid unnecessary dependencies.",
      "Run browser verification when applicable.",
    ],
  },
  {
    slug: "efektif-write-skill",
    title: "Efektif Write Skill",
    description: "Write small token-light skills with validation-ready structure.",
    steps: [
      "Keep SKILL.md focused and short.",
      "Move examples into references only when needed.",
      "Include safe defaults and validation commands.",
    ],
  },
  {
    slug: "efektif-edit-article",
    title: "Efektif Edit Article",
    description: "Edit writing for clarity, structure, and voice.",
    steps: [
      "Preserve the writer's intent.",
      "Tighten structure before polishing sentences.",
      "Return concise edits with reasons when useful.",
    ],
  },
];

const skillMarkdown = (skill) => `---
name: ${skill.slug}
description: ${skill.description}
---

# ${skill.title}

Use this skill when you need to ${skill.description.toLowerCase()}

## Steps

${skill.steps.map((step) => `- ${step}`).join("\n")}

## Output

- Keep responses short and evidence-backed.
- Name verification performed or explain why it was not run.
- Prefer concrete next actions over broad advice.
`;

const agentYaml = (skill) => `display_name: ${skill.title}
short_description: ${skill.description}
default_prompt: Use ${skill.slug}. ${skill.description}
`;

await rm(skillsRoot, { recursive: true, force: true });
await mkdir(skillsRoot, { recursive: true });
await writeFile(join(skillsRoot, ".gitkeep"), "");

for (const skill of skills) {
  const skillDir = join(skillsRoot, skill.slug);
  await mkdir(join(skillDir, "agents"), { recursive: true });
  await writeFile(join(skillDir, "SKILL.md"), skillMarkdown(skill));
  await writeFile(join(skillDir, "agents", "openai.yaml"), agentYaml(skill));
}

console.log(`Synced ${skills.length} skills`);
