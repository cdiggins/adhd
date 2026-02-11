# Agent Driven Hyper-Development

## Summary

**Agent Driven Hyper-Development (ADHD)** is an approach to coordinating agentic AIs for rapidly creating high-quality, well-engineered software.

This repository maintains documentation and scripts for the methodology.

## Overview

ADHD advocates spinning up agents with specific roles, creating work logs, and using markdown documents to pass work off to new agents.

ADHD is an alternative to other approaches for coordinating agentic AI for coding:

- Gastown
- Beads
- Flywheel
- Wiggums Loop

## Goals

- Enable more agents to work in parallel
- Allow agents to do more complex work
- Make more efficient use of context window by providing specific agent-based prompts
- Provide clear goalposts for accepting work
- Enable humans to track and review work in a meaningful way
- Ensure commits and pull requests happen at reasonable intervals
- Ensure initial work is well-scoped
- Minimize the amount of context required by agents
- Clear hand-off of work between agents

## Quick reference (for agents)

| Item | Detail |
|------|--------|
| **Roles** | CEO (human), Product Manager, DevOps, Product Designer, Developer — see [Agents.md](Agents.md) |
| **Feature folders** | `work/feature/<id>-<slug>` (one per feature) |
| **Key files** | `feature.md` (instructions for next agent), `plan.md` (developer’s plan) |
| **Branches** | `feature-group/<id>-<slug>`, `feature/<id>-<slug>` |
| **Worktrees** | `../wt/<branch-with-slashes-replaced-by-dashes>/` |

## Documents

- **CEO**
  - [Mission.md](CEO/Mission.md)
  - [Vision.md](CEO/Vision.md)
  - [Users.md](CEO/Users.md)
  - [Goals.md](CEO/Goals.md)
- **Product Manager** — (to be added)

## Roles

- **CEO** — Human — Describes business goals and vision.
- **Product Manager** — Agent and/or Human — Proposes features that meet the business goals and vision.

See [Agents.md](Agents.md) for full role descriptions and hand-offs.

## Multi-Feature Work

(To be expanded.)

## Technology Stack

ADHD is a methodology. This repository is built around the following technology stack:

- Cursor CLI (Agent)
- ripgrep
- NPM + Node.js
- TypeScript

## Installation Instructions

### Windows 11

From PowerShell:

```powershell
irm 'https://cursor.com/install?win32=true' | iex
winget install -e --id BurntSushi.ripgrep.MSVC
```

See [todo.md](todo.md) for missing installation instructions and other tasks.

## Workflow

### DevOps (DevOps role)

- This agent works on the repository structure and updates packages.

### Feature Group Proposal (Product Designer role)

- An agent is created and assigned the “product designer” role.
- It proposes one or more features based on the initial prompt.
- A human must explicitly approve these features before continuing. (TBD: how to explicitly approve; how to track and manage work logs.)
- One folder is created for each feature under a folder named `work` in the root: `work/feature/<id>-<slug>`.
  - `<slug>` is kebab-case, short (3–8 words), and descriptive.
  - `<id>` is a guaranteed unique ID (see [Agents.md](Agents.md) for the scheme).
- In each folder the agent creates a high-level set of instructions for the next agent in `feature.md`.
- This work is committed to a new branch named `feature-group/<id>-<slug>`.
- A PR is submitted for review on GitHub.
- Upon completion, a developer agent is spun up by a script to commence work on each feature.

### Commence Feature Work (Developer role)

- An agent is created and assigned the “developer” role and a specific feature (by folder name).
- A branch is created with the same name as the folder: `feature/<id>-<slug>`.
- A unique worktree is created at `../wt/<branch-with-slashes-replaced-by-dashes>/`.
- The agent creates a plan and stores it in `plan.md`.

## To-do

See [todo.md](todo.md) for current tasks.
