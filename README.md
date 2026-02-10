# Agent Driven Hyper-Development

## Goal 

Decrease chaos, increase productivity, improve quality. 

### Subgoals 

- increase the amount of work done in parallel by agents 
- enable more agents to work in parallel
- providing clear goalposts to accept 
- enable humans to track and review work done in a meaningful way.
- make sure that commits occur in a reasonable manner, as do pull requests. 
- make sure that the initial work 
- minimize the amount of context required by agents 
We want agents to receieve sufficient and appropriate contextual information based on the task at hand. 
We want agents to 

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

## Prerequisites

- Cursor CLI (Agent)

## Installation Instructions

### Windows 11

From Powershell

```
irm 'https://cursor.com/install?win32=true' | iex
winget install -e --id BurntSushi.ripgrep.MSVC
```

### Mac OS

TBD

## Example Workflow

An initial agent is assigned the "product designer" role. 
It will propose a number of features based on an initial prompt. 
A human must explicitly approve these features, before continuing. 
One folder is created for each feature under a folder named "work" in the root folder
In each folder it will create a high-level set of instructions for the next agent in a file called "prompt.md".
This work is commited to a new branch named `/feature-group/<slug>`
A PR is submitted to be reviewed from Github 

//==

For example the product design proposes some features, for approval by management (me) if I approve them, it goes ahead and creates enough context for each agent to start planning its work. I would probably want to create 10 different folders each one with an initial prompt (created by the product designer). Each folder Then I want to launch one agent for each feature. I want each agent to create a plan, and   

## Notes

`<slug>` must be kebab-case, short (3–8 words), and descriptive.
