import { mkdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const skillsRoot = join(root, "skills");

const commonOutput = [
  "Keep responses short, structured, and evidence-backed.",
  "Name exact files, commands, screenshots, or logs used as evidence.",
  "Separate verified facts from assumptions, blockers, and next actions.",
];

const skills = [
  {
    slug: "efektif-repo-agent-setup",
    title: "Repo Agent Setup",
    description: "Use when bootstrapping a repo for repeatable agent work: context files, validation commands, issue flow, and handoff rules.",
    steps: [
      "Inspect README, package scripts, docs, issue links, and existing agent guidance.",
      "Record only durable repo rules future agents must reuse.",
      "Create or refresh AGENTS.md only when the guidance will outlive the current session.",
      "Verify documented commands against the current checkout or label them unverified.",
    ],
  },
  {
    slug: "efektif-repo-grounding",
    title: "Repo Grounding",
    description: "Use when a request depends on the current checkout; inspect files, scripts, branch state, and docs before answering.",
    steps: [
      "Confirm cwd, git status, branch, package scripts, and relevant files.",
      "Use exact paths and commands instead of framework guesses.",
      "Separate confirmed facts from inferred context.",
      "Re-check after edits when the answer depends on changed files.",
    ],
  },
  {
    slug: "efektif-memory-grounding",
    title: "Memory Grounding",
    description: "Use when prior sessions or saved memory may affect the work, while treating memory as a lead rather than proof.",
    steps: [
      "Search memory or past notes only when history can change the answer.",
      "Use memory to find likely files, decisions, or constraints.",
      "Verify stale or risky facts against the live repo.",
      "Say plainly when context came from memory and what was re-verified.",
    ],
  },
  {
    slug: "efektif-clarify-with-evidence",
    title: "Clarify With Evidence",
    description: "Use when scope is risky or ambiguous; gather local evidence first, then ask only the blocking questions.",
    steps: [
      "Inspect files, logs, docs, issues, or runtime state before questioning the user.",
      "State what the evidence already suggests.",
      "Ask only questions that change the next action.",
      "Offer a conservative default when evidence supports one.",
    ],
  },
  {
    slug: "efektif-safe-implementation",
    title: "Safe Implementation",
    description: "Use when modifying a shared checkout; make scoped edits, protect user work, and verify the narrowest useful path.",
    steps: [
      "Check git status before editing.",
      "Keep the patch inside the requested ownership boundary.",
      "Do not revert unrelated changes or cleanup user work by accident.",
      "Run the smallest meaningful verification before finishing.",
    ],
  },
  {
    slug: "efektif-verification-before-done",
    title: "Verification Before Done",
    description: "Use before claiming work is complete; prove the result with tests, builds, lint, smoke checks, or documented blockers.",
    steps: [
      "Pick the verification that matches the actual change.",
      "Run it and capture the exact command and result.",
      "Separate done, blocked, and unverified items.",
      "Never replace failed verification with a confident summary.",
    ],
  },
  {
    slug: "efektif-code-review",
    title: "Code Review",
    description: "Use when reviewing changes; lead with actionable findings, evidence, risk, and missing verification.",
    steps: [
      "Inspect the diff and nearby code paths, not only changed lines.",
      "Prioritize bugs, regressions, security issues, and missing tests.",
      "Reference files and lines where possible.",
      "Keep praise and summaries secondary to findings.",
    ],
  },
  {
    slug: "efektif-handoff",
    title: "Handoff",
    description: "Use when another agent or future session must continue; create concise state, evidence, blockers, and next actions.",
    steps: [
      "Capture goal, current status, changed files, and commands run.",
      "Name blockers, risks, and the next concrete action.",
      "Keep it short enough to paste into a new thread.",
      "Do not include stale speculation as fact.",
    ],
  },
  {
    slug: "efektif-diagnose",
    title: "Diagnose",
    description: "Use when debugging failures; reproduce, minimize, hypothesize, instrument, fix, and add a regression check.",
    steps: [
      "Reproduce the failure before changing code.",
      "Minimize the failing surface and identify the boundary.",
      "Test one hypothesis at a time with evidence.",
      "After the fix, run a regression check that would have caught it.",
    ],
  },
  {
    slug: "efektif-tdd",
    title: "Pragmatic TDD",
    description: "Use when a practical test seam exists; write the smallest failing test, pass it, then refactor safely.",
    steps: [
      "Find the smallest behavior worth protecting.",
      "Make the test fail for the right reason first.",
      "Implement only enough to pass.",
      "Refactor after behavior is protected; skip forced TDD when no reasonable seam exists.",
    ],
  },
  {
    slug: "efektif-user-workflow-qa",
    title: "User Workflow QA",
    description: "Use after implementation to check real user workflows, viewports, states, logs, and residual risk.",
    steps: [
      "Identify the workflow a real user would exercise.",
      "Run focused smoke checks across relevant states, roles, and viewports.",
      "Capture screenshots, logs, or reproduction notes when useful.",
      "Report what passed, what failed, and what remains risky.",
    ],
  },
  {
    slug: "efektif-crazy-story",
    title: "Crazy Story",
    description: "Use when explicitly asked for a Crazy Story app audit: inventory features, write user stories, track test/error/fix/retest status in one canonical Markdown table, and fix only approved UX or logistics issues.",
    steps: [
      "Create one canonical tracker, for example docs/crazy-story.md, unless the repo already has a better planning location.",
      "Inventory every visible and code-backed feature by domain, role, route, command, API, or workflow.",
      "Write one user story per feature with actor, goal, expected behavior, acceptance checks, and evidence.",
      "Test each story, document every error, fix approved UX or logistics issues, then retest affected stories.",
      "Ask before product, data, security, destructive, or unclear fixes.",
    ],
    notes: [
      "Default tracker columns: Feature, Role, Story, Expected behavior, Acceptance checks, Test status, Error, Fix status, Retest result, Evidence.",
      "Let the project admin decide categories such as domain, persona, role, module, or uncategorized.",
    ],
  },
  {
    slug: "efektif-triage",
    title: "Triage",
    description: "Use when issues, TODOs, failures, or feedback need sorting into states, causes, owners, and next actions.",
    steps: [
      "Group items into done, active, blocked, and not started.",
      "Separate symptoms from likely causes.",
      "Identify owner, priority, dependency, and next action where possible.",
      "Keep the output scannable and decision-ready.",
    ],
  },
  {
    slug: "efektif-intent-to-prd",
    title: "Intent To PRD",
    description: "Use when rough product intent needs a lean, implementation-aware PRD with scope, non-goals, states, and success criteria.",
    steps: [
      "State the user problem and measurable success criteria.",
      "Define scope, non-goals, states, permissions, and edge cases.",
      "Call out dependencies, risks, and open questions.",
      "Keep it short enough to drive implementation.",
    ],
  },
  {
    slug: "efektif-plan-to-issues",
    title: "Plan To Issues",
    description: "Use when a plan or PRD should become small, verifiable issues with acceptance checks and dependencies.",
    steps: [
      "Split work by independently testable outcomes.",
      "Include acceptance criteria, verification commands, and dependencies.",
      "Keep each issue narrow enough for a small commit or PR.",
      "Mark sequencing and blockers explicitly.",
    ],
  },
  {
    slug: "efektif-prd-to-plan",
    title: "PRD To Plan",
    description: "Use when a PRD needs a dependency-aware implementation plan with phases, risks, and verification gates.",
    steps: [
      "Map requirements to code areas, data, UI, and operations.",
      "Sequence phases by dependency and risk.",
      "Add verification gates for each phase.",
      "Keep rollback and cutover notes where relevant.",
    ],
  },
  {
    slug: "efektif-zoom-out",
    title: "Zoom Out",
    description: "Use when a fix or plan may be solving the wrong problem; reassess goal, path, tradeoffs, and simpler options.",
    steps: [
      "Restate the user goal and current approach.",
      "Look for cheaper, safer, or more direct paths.",
      "Name tradeoffs before broad refactors or pivots.",
      "Return a recommendation with evidence, not a vague brainstorm.",
    ],
  },
  {
    slug: "efektif-architecture-review",
    title: "Architecture Review",
    description: "Use when improving architecture from code evidence; find boundaries, dependencies, duplication, and small high-payoff refactors.",
    steps: [
      "Inspect actual dependencies, data flow, ownership, and change hotspots.",
      "Prefer small refactors with clear payoff and verification.",
      "Avoid vague rewrites without migration and rollback paths.",
      "Tie each recommendation to evidence in the repo.",
    ],
  },
  {
    slug: "efektif-refactor-plan",
    title: "Refactor Plan",
    description: "Use before risky refactors; produce a scoped, staged plan with rollback points and validation after each stage.",
    steps: [
      "Describe the current shape and pain point with file evidence.",
      "Define safe stages, invariants, and rollback points.",
      "List validation after each stage.",
      "Stop before editing unless the user asked for implementation too.",
    ],
  },
  {
    slug: "efektif-deployment-readiness",
    title: "Deployment Readiness",
    description: "Use before deploys or release claims; check build, config, migrations, docs, service health, and known blockers.",
    steps: [
      "Read deployment docs and environment templates first.",
      "Separate local build success from live deploy readiness.",
      "Check migrations, config, secrets requirements, logs, and health endpoints when available.",
      "Report go/no-go status with evidence.",
    ],
  },
  {
    slug: "efektif-machine-cleanup",
    title: "Machine Cleanup",
    description: "Use for local cleanup of tools, skills, apps, caches, and config after the user scopes the cleanup; inventory first and default to dry-run.",
    steps: [
      "List current state before deleting or changing anything.",
      "Prefer dry-run and reversible operations.",
      "Avoid vendor, marketplace, and plugin cache paths unless explicitly scoped.",
      "Ask before destructive cleanup when scope is unclear.",
    ],
  },
  {
    slug: "efektif-checkpoint-commits",
    title: "Checkpoint Commits",
    description: "Use only when the user asked for commits during multi-step work; create small, verified checkpoints without mixing unrelated user changes.",
    steps: [
      "Group related changes only.",
      "Verify before staging.",
      "Review staged diff before commit.",
      "Use concise imperative or conventional commit messages.",
    ],
  },
  {
    slug: "efektif-branch-summary",
    title: "Branch Summary",
    description: "Use when explaining a branch from git state, recent commits, changed files, diffs, risks, and verification.",
    steps: [
      "Check branch, upstream, status, and recent commits.",
      "Inspect diff stats and key changed files.",
      "Summarize purpose, risk, and verification status.",
      "Call out uncommitted work separately.",
    ],
  },
  {
    slug: "efektif-install-skill-package",
    title: "Install Skill Package",
    description: "Use when installing a skill package safely: validate, dry-run, apply only when intended, then verify target files.",
    steps: [
      "Run package validation first.",
      "Run dry-run install before apply.",
      "Confirm the exact install target.",
      "Verify installed files and report count and path.",
    ],
  },
  {
    slug: "efektif-design-interface",
    title: "Design Interface",
    description: "Use when designing product UI; match existing tokens, components, workflows, accessibility, and responsive behavior.",
    steps: [
      "Study existing design system, tokens, and product patterns first.",
      "Prioritize the real workflow over decorative mockups.",
      "Design states: empty, loading, error, success, disabled, and permission limits.",
      "Verify responsive layout and readable text.",
    ],
  },
  {
    slug: "efektif-prototype",
    title: "Prototype",
    description: "Use when a small interactive artifact will clarify behavior faster than prose or static screenshots.",
    steps: [
      "Define the target workflow and interaction fidelity.",
      "Reuse project conventions and avoid unnecessary dependencies.",
      "Keep the prototype disposable unless asked to productionize it.",
      "Run browser or runtime verification when applicable.",
    ],
  },
  {
    slug: "efektif-write-skill",
    title: "Write Skill",
    description: "Use when authoring small token-light skills with clear triggers, safe steps, validation, and install-ready structure.",
    steps: [
      "Keep SKILL.md focused and short.",
      "Use a strong trigger description and concrete steps.",
      "Move detailed examples into references only when needed.",
      "Run package validation before finishing.",
    ],
  },
  {
    slug: "efektif-gsd",
    title: "GSD Execution",
    description: "Use when a task needs GSD-style execution: ground in the repo, split the work into small verifiable steps, execute with checkpoints, verify, and commit when requested.",
    steps: [
      "Inspect the real repo state first: files, scripts, branch, and any existing guidance.",
      "Translate the request into a short sequence of concrete, testable steps.",
      "Keep edits scoped, verify the narrowest useful path, and checkpoint progress when the task is multi-step.",
      "Report evidence, blockers, and remaining risk instead of vague progress.",
    ],
  },
  {
    slug: "efektif-uiuxpromax",
    title: "UIUX Pro Max",
    description: "Use when a UI needs strong product polish: tune hierarchy, spacing, states, accessibility, and motion against the real workflow and design tokens.",
    steps: [
      "Inspect the actual interface, product context, and existing tokens or component system before changing anything.",
      "Prioritize the primary workflow, visual hierarchy, and readable density over decorative flourishes.",
      "Cover empty, loading, error, success, disabled, and responsive states with the same care as the happy path.",
      "Verify the result in a browser or screenshot and report concrete UI deltas.",
    ],
  },
];

const sectionMarkdown = (title, items) => `## ${title}\n\n${items.map((item) => `- ${item}`).join("\n")}`;

const skillMarkdown = (skill) => {
  const sections = [
    `## Use When\n\n${skill.description}`,
    sectionMarkdown("Steps", skill.steps),
  ];

  if (skill.notes?.length) {
    sections.push(sectionMarkdown("Notes", skill.notes));
  }

  sections.push(sectionMarkdown("Output", commonOutput));

  return `---
name: ${skill.slug}
description: ${JSON.stringify(skill.description)}
---

# ${skill.title}

${sections.join("\n\n")}
`;
};

const agentYaml = (skill) => {
  const prompt = `Use ${skill.slug}. ${skill.description} Follow the Steps in SKILL.md, keep one evidence-backed output, and report verification or blockers.`;
  return `display_name: ${JSON.stringify(skill.title)}
short_description: ${JSON.stringify(skill.description)}
default_prompt: ${JSON.stringify(prompt)}
`;
};

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
