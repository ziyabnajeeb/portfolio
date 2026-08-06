# ARCHITECTURE.md

Version: 2.0

---

# Purpose

This document defines the technical architecture of the repository.

Its purpose is to ensure every implementation follows a consistent, scalable, maintainable, and production-ready architecture.

This document describes **how the system is organized**, not how individual features should be implemented.

---

# High-Level Architecture

The repository is organized as a **pnpm workspace** consisting of two independent applications.

```text
portfolio/
├── web/        # Next.js Application
├── studio/     # Sanity Studio
├── docs/
└── .agents/
```

Responsibilities are intentionally separated.

* **web** owns presentation.
* **studio** owns content.

The applications communicate through the Sanity Content API.

---

# System Architecture

```text
                ┌─────────────────────┐
                │     Sanity Studio   │
                │  (Content Authoring)│
                └──────────┬──────────┘
                           │
                    Published Content
                           │
                           ▼
                ┌─────────────────────┐
                │   Sanity Content API│
                └──────────┬──────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │   Next.js Web App   │
                │ Server Components   │
                └──────────┬──────────┘
                           │
                 Feature Components
                           │
                           ▼
                  Shared UI Components
                           │
                           ▼
                        Browser
```

---

# Repository Structure

```text
portfolio/
│
├── docs/
├── .agents/
│
├── studio/
│
└── web/
```

The repository root contains only:

* Workspace configuration
* Documentation
* AI configuration

No application code should exist in the root.

---

# Web Application

```text
web/
│
├── app/
├── components/
├── hooks/
├── lib/
├── providers/
├── public/
├── styles/
├── types/
│
├── package.json
└── next.config.ts
```

The web application is responsible for:

* Routing
* Rendering
* User Experience
* Server Actions
* SEO
* Performance

---

# Studio

```text
studio/
│
├── schemaTypes/
├── plugins/
├── structure/
│
├── sanity.config.ts
├── schema.ts
└── package.json
```

The Studio is responsible for:

* Schemas
* Validation
* Editorial Workflow
* Content Modeling

No presentation logic belongs in the Studio.

---

# Application Layers

The web application follows this architecture:

```text
App Router
        │
        ▼
Server Components
        │
        ▼
Feature Components
        │
        ▼
Shared Components
        │
        ▼
UI Primitives
```

Each layer has a single responsibility.

---

# Folder Responsibilities

## app/

Contains:

* Routes
* Layouts
* Metadata
* Server Actions

Never place reusable UI inside `app`.

---

## components/

Organized by feature.

Example:

```text
components/

hero/
about/
skills/
experience/
projects/
blog/
contact/

layout/
navigation/
footer/

ui/
```

Each feature owns its implementation.

Only expose public APIs through `index.ts`.

---

## lib/

Contains application logic.

```text
lib/

sanity/
motion/
constants/
utils/
```

Never place React components inside `lib`.

---

## lib/sanity/

Contains only the client layer.

```text
client.ts
fetch.ts
image.ts
queries/
index.ts
```

Schemas belong inside the Studio, not the web application.

---

## providers/

Contains application-wide providers.

Examples:

* Theme Provider

Keep providers minimal.

---

## hooks/

Contains reusable application hooks.

Feature-specific hooks should remain inside their feature folder.

---

## styles/

Contains only global styling.

Examples:

```text
globals.css
fonts.css
```

Avoid feature-specific stylesheets.

---

## types/

Contains shared application types.

Feature-specific types remain inside their respective feature.

---

# Data Flow

Content should flow in one direction.

```text
Sanity Studio
        │
        ▼
Sanity Content API
        │
        ▼
Server Components
        │
        ▼
Feature Components
        │
        ▼
Shared Components
        │
        ▼
Browser
```

Never bypass this flow.

---

# Rendering Strategy

Default to **Server Components**.

Use **Client Components** only when required.

Examples:

* Forms
* Theme Toggle
* Browser APIs
* Event handlers
* Local state
* Interactive animations

Avoid unnecessary client-side rendering.

---

# Server Actions

Server Actions are the preferred mechanism for mutations.

Location:

```text
web/app/actions/
```

Examples:

* Contact Form
* Newsletter Subscription

Rules:

* Validate with Zod.
* Return typed responses.
* Keep business logic outside UI components.

Use Route Handlers only for external integrations such as webhooks or OAuth callbacks.

---

# CMS Architecture

The Studio owns:

* Schemas
* Validation
* Editorial Experience

The Web application owns:

* Rendering
* User Experience
* SEO
* Performance

Never duplicate CMS content inside the application.

Never write inline GROQ queries inside React components.

All CMS access should be centralized inside:

```text
web/lib/sanity/
```

---

# Component Hierarchy

```text
Page
    ↓
Feature
    ↓
Section
    ↓
Shared Component
    ↓
UI Primitive
```

Do not skip layers unnecessarily.

---

# Shared Components

Reusable UI belongs inside:

```text
components/ui/
```

Examples:

* Button
* Card
* Badge
* Container
* Section
* Heading
* Input
* Textarea
* Dialog
* Tabs
* Accordion

These components should remain generic.

---

# Feature Components

Every feature owns its own implementation.

Example:

```text
projects/

Projects.tsx
ProjectCard.tsx
ProjectGallery.tsx
ProjectMeta.tsx
ProjectLinks.tsx
index.ts
```

Avoid coupling between unrelated features.

---

# Dependency Direction

Dependencies should always point downward.

```text
Pages
    ↓
Features
    ↓
Shared Components
    ↓
UI Components
    ↓
Utilities
```

Avoid circular dependencies.

---

# Performance Strategy

Prefer:

* Server Components
* Static rendering where appropriate
* Image optimization
* Lazy loading
* Minimal hydration

Performance should be considered during implementation, not after.

---

# Definition of Done

A task is complete only when:

* The architecture remains consistent.
* TypeScript passes.
* ESLint passes.
* The production build succeeds.
* Components are reusable where appropriate.
* Accessibility is preserved.
* Existing patterns are followed.
* No duplicate implementations exist.

---

# Final Principle

Keep the architecture boring.

Predictable architecture scales better than clever architecture.

Optimize for maintainability and clarity rather than novelty.
