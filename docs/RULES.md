# RULES.md

Version: 2.0

---

# Purpose

This document defines the mandatory engineering rules for the repository.

These rules apply to every implementation regardless of the current task.

They are non-negotiable unless explicitly changed by the repository owner.

---

# General Rules

Always:

* Keep implementations simple.
* Prefer readability over cleverness.
* Reuse existing code before creating new code.
* Keep files focused on a single responsibility.
* Follow the existing architecture.
* Build incrementally.

Never:

* Rewrite working code without justification.
* Create unnecessary abstractions.
* Duplicate logic.
* Guess missing requirements.

---

# Workspace Rules

The repository is a pnpm workspace.

Applications:

* `web`
* `studio`

The repository root is for:

* Workspace configuration
* Documentation
* AI configuration

Never place application code in the repository root.

Do not introduce shared packages unless duplication becomes a real problem.

---

# Task Rules

Only implement the current task.

Do not implement future tasks.

Do not leave placeholder implementations for future work.

If the current task depends on missing functionality, stop and explain the issue.

---

# Server Component Rules

Server Components are the default.

Use Client Components only when required.

Examples:

* Event handlers
* Forms
* Theme switching
* Browser APIs
* Local state
* Interactive animations

Never convert an entire page into a Client Component because of a single interactive element.

---

# Server Action Rules

Prefer Server Actions for all mutations.

Route Handlers should only be used for:

* Webhooks
* OAuth
* External integrations

Every Server Action must:

* Validate with Zod
* Return typed responses
* Handle success and failure consistently

---

# Sanity Rules

Sanity is the single source of truth.

Studio owns:

* Schemas
* Validation
* Content

Web owns:

* Rendering
* Presentation
* User Experience

Never duplicate CMS content.

Never write inline GROQ queries.

All CMS access must go through:

```text
web/lib/sanity/
```

---

# Folder Rules

Each folder has one responsibility.

Feature folders own:

* Components
* Types
* Hooks
* Utilities (if required)
* Barrel exports

Shared functionality belongs in shared locations.

Never mix unrelated features.

---

# Component Rules

Components should:

* Be small
* Be composable
* Be reusable
* Have one responsibility

Business logic should remain outside presentation components.

Prefer composition over inheritance.

---

# Import Rules

Always import through public APIs.

Good:

```ts
import { Navbar } from "@/components/navigation";
```

Avoid:

```ts
import { Navbar } from "@/components/navigation/Navbar";
```

Every public folder should expose an `index.ts`.

---

# Styling Rules

Approved styling:

* Tailwind CSS v4
* shadcn/ui

Avoid:

* Inline styles
* Duplicate utility combinations
* Large custom CSS files

Extract repeated UI patterns into reusable components.

---

# TypeScript Rules

Strict mode.

Never use:

* `any`
* `@ts-ignore`
* `eslint-disable` without justification

Model business concepts with explicit types.

---

# State Management Rules

Prefer state in this order:

1. Server State
2. URL State
3. Component State
4. Context

Avoid global state unless there is a clear architectural need.

---

# Accessibility Rules

Accessibility is mandatory.

Every feature must:

* Use semantic HTML
* Preserve keyboard navigation
* Maintain visible focus
* Include descriptive labels
* Maintain sufficient color contrast

Do not remove accessibility for visual convenience.

---

# Performance Rules

Performance is a feature.

Prefer:

* Server Components
* Static rendering
* Lazy loading
* Optimized images
* Minimal JavaScript

Avoid unnecessary hydration.

---

# Dependency Rules

Before adding a dependency:

1. Can the platform already solve this?
2. Can an existing dependency solve it?
3. Is the new dependency actively maintained?
4. Is it worth the additional bundle size?

Avoid unnecessary packages.

---

# File Creation Rules

Before creating a new file:

* Search for an existing implementation.
* Reuse existing patterns.
* Keep naming consistent.
* Keep folder structure consistent.

Do not create files that are not required.

---

# Code Quality Rules

Every change should:

* Compile successfully
* Pass ESLint
* Pass TypeScript
* Avoid duplicate logic
* Follow repository conventions
* Preserve architecture

No debugging code should remain.

Examples:

* `console.log`
* commented-out code
* unused imports
* unused variables

---

# Review Checklist

Before completing any task, verify:

* Build passes
* ESLint passes
* TypeScript passes
* No duplicate code
* No dead code
* Responsive
* Accessible
* Server Components preferred
* Client Components minimized
* Existing patterns reused

---

# When Unsure

If requirements are unclear:

* Stop implementation.
* Explain the uncertainty.
* Present reasonable options if appropriate.
* Wait for clarification.

Never guess architecture or business requirements.

---

# Final Rule

Leave the repository in a better state than you found it.

Every change should improve clarity, consistency, maintainability, or performance.
