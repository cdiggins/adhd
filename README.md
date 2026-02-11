# Agent Driven Hyper-Development

## Summary

**Agent Driven Hyper-Development (ADHD)** is an approach to coordinating agentic AIs for rapidly create high-quality well-engineered software. 

This repository is being used to maintain documentation and scripts. 

## Overview 

ADHD advocates spinning up agents with specific roles, creating work logs, and using markdown 
documents to pass work off to new agents. 

ADHD is an alternative to other approaches for coordinating agentic AI for coding:
- Gastown
- Beads
- Flywheel
- Wiggums Loop

## Goals 

- enable more agents to work in parallel
- allow agents to do more complex work  
- make more efficient usage of context window by providing specific agent-based prompts  
- providing clear goalposts for accepting work 
- enable humans to track and review work done in a meaningful way.
- make sure that commits and pull-requests happen at reasonable amounts of time. 
- make sure that the initial work 
- minimize the amount of context required by agents 
- clear hand-off of work between agents

# Documents 

- CEO 
  - Mission.md 
  - Vision.md 
  - Users.md
  - Goals.md
- Product Manager
-   
# Roles 

- **CEO** - Human - Describes business goals, and vision.  
- **Product Manager** - Agent and/or Human - proposes features that will meet the business goals and vision.      

# Multi-Feature Work

# Technology Stack

ADHD is a methodology. This repository is built around the following technology stack  

- Cursor CLI (Agent)
- ripgrep
- NPM + Node.JS
- TypeScript

## Installation Instructions

### Windows 11

From Powershell

```
irm 'https://cursor.com/install?win32=true' | iex
winget install -e --id BurntSushi.ripgrep.MSVC
```

TODO: add missing installation instructions stack 

## Workflow

### Devops (Devops Role)

- This agent works on the repository structure
- Updates packages 

### Feature Group Proposal (Product Designer Role)

- An initial agent is created using that is assigned "product designer" role. 
- It proposes one or more features based on the initial prompt 
- A human must explicitly approve these features, before continuing.
- TODO: how to explicitly approve the features?
- TODO: how to track and manage worklogs 
- One folder is created for each feature under a folder named "work" in the root folder
- The folder is named `feature/<id>-<slug>`
- where `<slug>` is kebab-case, short (3–8 words), and descriptive
- where `<id>` is a guaranteed unique ID
- In each folder it will create a high-level set of instructions for the next agent in a file called "feature.md"
- This work is commited to a new branch named `feature-group/<id>-<slug>`
- A PR is submitted to be reviewed from Github
- Upon completeion a developer agent is spun up by a script to commence work on each feature 

### Commence Feature Work (Developer Role) 

- An agent is created and assigned the "developer" role
- They are assigned to work on a specific feature identified by the name of the
- A branch is created with the same name as the folder `folder/<id>-<slug>` 
- A unique worktree is created in the location `../wt/<branch-with-slashes-replaced-by-dashes>/`` 
- The agent creates a plan and stores it in the folder "plan.md"

## To-do:

- Review the readme
  - Make grammatical fixes
  - Add missing links
  - Convert all to-dos into a `todo.md`
  - Make it more appealing for users
  - Keep it simple and approachable
  - Make it more useful for AI agents 
- Create an Agents.md
- Make a decision about how to name and number them
- Find a way to generate short but unique ids for features, 
- Add typescript scripts to help automate the workflows
- Create a package.json
- Add a .gitignore
- Github actions?
