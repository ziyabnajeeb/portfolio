# AGENTS.md

Version: 2.0

---

# Purpose

This repository contains a premium personal portfolio built as a **pnpm workspace**.

The objective is not simply to build a portfolio website.

The objective is to demonstrate professional software engineering through architecture, maintainability, accessibility, performance, scalability, and user experience.

Every implementation should improve the overall quality of the repository.

---

# Repository Structure

The repository consists of two independent applications.

```text
portfolio/
├── web/        # Next.js Application
├── studio/     # Sanity Studio
├── docs/
└── .agents/
```

Responsibilities:

**web**

* Presentation
* Routing
* Server Actions
* UI
* Performance
* SEO

**studio**

* Content
* Schemas
* Validation
* Editorial Experience

Never mix responsibilities between applications.

---

# Read Before Every Task

Before making any changes, always read:

1. docs/ROADMAP.md
2. docs/PROJECT_CONTEXT.md
3. docs/ARCHITECTURE.md
4. docs/RULES.md
5. The current task document
6. Any relevant skill from `.agents/skills`

Never begin implementation without understanding the current task.

---

# Task Execution Rules

Only implement the current task.

Do not implement future tasks.

Do not skip ahead.

Do not generate placeholder implementations for future features.

If a required dependency from a previous task is missing, stop and explain the issue before proceeding.

---

# Workspace Rules

The root of the repository is for workspace configuration only.

Application code belongs inside:

* `web/`
* `studio/`

Do not place application code in the repository root.

Shared packages should only be introduced when there is a real need for shared code.

Avoid premature abstraction.

---

# Engineering Principles

Always prefer:

1. Server Components
2. Composition
3. Reusable Components
4. Performance
5. Accessibility
6. Simplicity
7. Maintainability

Architecture is more important than implementation speed.

---

# Server Components

Server Components are the default.

Client Components are exceptions.

Only use `"use client"` when required.

Examples:

* Event handlers
* Browser APIs
* Theme switching
* Forms
* Local state
* Animations

Never convert an entire page into a Client Component unnecessarily.

---

# Server Actions

Server Actions are the preferred mechanism for mutations.

API Routes should only exist when required for:

* Third-party webhooks
* OAuth callbacks
* External integrations

Validate all input using Zod.

Return typed responses.

---

# Sanity Rules

Sanity is the single source of truth for content.

The Studio owns:

* Schemas
* Validation
* Editorial workflow

The Web application owns:

* Rendering
* User Experience
* Presentation

Never duplicate CMS content inside the application.

Never write inline GROQ queries.

Centralize all CMS access.

---

# Component Rules

Components should be:

* Small
* Focused
* Reusable
* Predictable

Each component should have one responsibility.

Business logic should remain outside presentation components.

Prefer composition over inheritance.

---

# Folder Rules

Every feature should own its implementation.

Public modules should expose an `index.ts`.

Import through folder entry points.

Do not import private implementation files directly.

Keep folder structures consistent across features.

---

# Styling Rules

Use:

* Tailwind CSS v4
* shadcn/ui

Avoid:

* Inline styles
* Duplicated utility combinations
* Unnecessary custom CSS

Promote repeated patterns into reusable components.

---

# Accessibility Rules

Accessibility is mandatory.

Every implementation should:

* Use semantic HTML
* Support keyboard navigation
* Preserve visible focus
* Provide descriptive labels
* Maintain sufficient color contrast

Accessibility is not optional.

---

# Performance Rules

Performance is a feature.

Prefer:

* Server rendering
* Static rendering where appropriate
* Optimized images
* Minimal JavaScript
* Lazy loading when beneficial

Avoid unnecessary hydration.

---

# TypeScript Rules

Strict mode.

Never use:

* `any`
* `@ts-ignore`
* unnecessary type assertions

Model business concepts with clear types.

---

# State Management

Prefer state in the following order:

1. Server State
2. URL State
3. Component State
4. Context

Avoid global state unless there is a clear architectural reason.

---

# Dependency Rules

Dependencies should always flow downward.

Features may depend on:

* Shared Components
* UI Components
* Utilities

Avoid circular dependencies.

Never introduce unnecessary packages.

---

# Code Quality Checklist

Before completing any task, verify:

* TypeScript passes
* ESLint passes
* Production build succeeds
* No duplicated logic
* Accessible
* Responsive
* Server Components preferred
* Client Components minimized
* No dead code
* No debugging code
* No unused imports

---

# AI Behavior

Always:

* Reuse existing code before creating new code
* Search the project before adding components
* Follow existing patterns
* Keep implementations simple
* Explain architectural trade-offs when relevant

Never:

* Rewrite working code without reason
* Create unnecessary abstractions
* Add dependencies without justification
* Guess requirements
* Implement future tasks

If requirements are unclear, stop and ask for clarification instead of making assumptions.

---

# Definition of Done

A task is complete only when:

* The implementation satisfies the current task
* The build succeeds
* ESLint passes
* TypeScript passes
* Documentation remains accurate
* No placeholder code exists
* No TODO comments remain
* The repository is ready for the next task

---

# Final Principle

Every change should leave the repository cleaner, simpler, and easier to maintain than before.

When multiple valid solutions exist, choose the one that is easiest for another experienced engineer to understand six months from now.
