# ADHD agents and roles

This document describes each role used in the ADHD workflow, their purpose, and how work is handed off.

## CEO (human)

- **Purpose:** Define business goals and vision.
- **Inputs:** None (human-driven).
- **Outputs:** Documents such as Mission.md, Vision.md, Users.md, Goals.md (see [README](README.md#documents)).
- **Hand-off:** Product Manager (and/or humans) use these documents to propose features.

## Product Manager (agent and/or human)

- **Purpose:** Propose features that meet the business goals and vision.
- **Inputs:** CEO documents (Mission, Vision, Users, Goals).
- **Outputs:** Feature proposals and prioritization; may feed into the Product Designer role.
- **Hand-off:** Product Designer is spun up to turn proposals into concrete feature folders and `feature.md` instructions.

## DevOps (agent)

- **Purpose:** Maintain repository structure and update packages.
- **Inputs:** Repo state, dependency updates, tooling needs.
- **Outputs:** Updated repo layout, package.json, tooling, CI/config.
- **Hand-off:** Works across the repo; no direct hand-off to a single next agent.

## Product Designer (agent)

- **Purpose:** Turn an initial prompt (and PM/CEO context) into one or more concrete features with instructions for developers.
- **Inputs:** Initial prompt, approved feature ideas (human approval required).
- **Outputs:**
  - One folder per feature: `work/feature/<id>-<slug>`.
  - In each folder: `feature.md` (high-level instructions for the next agent).
- **Hand-off:** Commits to branch `feature-group/<id>-<slug>`, opens a PR. After merge/approval, a developer agent is spun up per feature (e.g. by script).

## Developer (agent)

- **Purpose:** Implement a single feature in isolation.
- **Inputs:** A specific feature folder (e.g. `work/feature/<id>-<slug>`) and its `feature.md`.
- **Outputs:**
  - Branch `feature/<id>-<slug>`.
  - Worktree at `../wt/<branch-with-slashes-replaced-by-dashes>/`.
  - `plan.md` in the feature folder (or worktree) with the implementation plan.
  - Code and commits on the feature branch.
- **Hand-off:** Pushes branch, opens PR; review and merge follow normal process.

## Conventions

- **Feature folder name:** `work/feature/<id>-<slug>`.
  - **`<id>`:** Short, unique identifier: `YYMMDD-XXXX` (date + 4-char alphanumeric). Generate with `npm run generate-feature-id` or `npm run generate-feature-id -- <slug>` to print the full path.
  - **`<slug>`:** Kebab-case, 3–8 words, descriptive (e.g. `user-auth-login`).
- **Branches:** `feature-group/<id>-<slug>` (Product Designer), `feature/<id>-<slug>` (Developer).
- **Worktrees:** `../wt/<branch-name-with-slashes-replaced-by-dashes>/`.
