# Phase 01 — Project Foundation

Version: 2.0

---

# Objective

Build the production-ready foundation for a premium developer portfolio using a **pnpm workspace**.

This phase establishes the workspace, project architecture, application shell, development tooling, and the foundation for both the Next.js application and Sanity Studio.

**Do not build any portfolio features or reusable design system components in this phase.**

---

# Read Before Starting

Before making any changes, read the following documents in order:

* AGENTS.md
* docs/PROJECT_CONTEXT.md
* docs/RULES.md
* docs/ARCHITECTURE.md

Follow all engineering rules defined in those documents.

---

# Tech Stack

Workspace

* pnpm Workspace

Web

* Next.js 16 (App Router)
* React 19
* TypeScript
* Tailwind CSS v4
* shadcn/ui
* Framer Motion
* next-themes
* React Hook Form
* Zod
* Server Actions

CMS

* Sanity Studio

Deployment

* Vercel

---

# Engineering Principles

Always follow these principles.

* Server Components by default.
* Client Components only when required.
* Strict TypeScript.
* Mobile-first.
* Accessibility-first.
* Composition over inheritance.
* Feature-based architecture.
* No business logic inside UI components.
* No duplicated code.
* Keep the project simple and maintainable.

---

# Workspace Structure

Create the following workspace.

```text
portfolio/

├── docs/
│
├── .agents/
│   └── skills/
│
├── .nvmrc          # Node.js v24.15.0 (required for Sanity CLI v6)
├── .env.local      # Shared env vars for both packages
│
├── studio/
│   └── app/        # Sanity Studio v6 (Next.js app)
│
├── web/
│   └── app/        # Next.js App Router
│
├── package.json
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
├── .gitignore
└── README.md
```

**Node version**: Use `nvm use "$(cat .nvmrc)"` before running studio dev. Sanity CLI v6 requires Node >= 22.

---

# pnpm Workspace

Create

```text
pnpm-workspace.yaml
```

```yaml
packages:
  - web
  - studio
```

The repository root should act only as the workspace.

Application code should never live in the root.

---

# Web Application

Create the following structure.

```text
web/

├── app/
│   ├── actions/
│   │
│   ├── globals.css
│   └── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── footer/
│   ├── layout/
│   ├── navigation/
│   └── ui/
│
├── hooks/
│
├── lib/
│   ├── constants/
│   ├── motion/
│   ├── sanity/
│   │   ├── client.ts
│   │   ├── env.ts
│   │   ├── fetch.ts
│   │   ├── image.ts
│   │   └── index.ts
│   │
│   ├── utils/
│   └── utils.ts
│
├── providers/
│   ├── index.ts
│   └── theme-provider.tsx
│
├── public/
│
├── styles/
│
├── types/
│
├── package.json
├── next.config.ts
├── tsconfig.json
└── eslint.config.mjs
```

**Note**: `eslint.config.mjs` lives in `web/` (not the workspace root) because the root ESLint config cannot resolve `eslint-config-next` from the pnpm store. The root `package.json` includes `next` as a devDependency so ESLint can find the config.

---

# Studio

Initialize a standalone Sanity Studio (v6).

Create only the project foundation. Sanity Studio v6 runs as a standalone Next.js app.

```text
studio/

├── app/
│   └── studio/
│       └── [[...tool]]/
│           └── page.tsx
│
├── package.json
├── sanity.config.ts
├── sanity.cli.ts
├── tsconfig.json
└── node_modules/
```

Do not implement schemas yet.

Do not create content.

Do not create custom desk structures.

Only initialize the Studio.

**Note**: `styled-components@6` and `@rolldown/binding-darwin-arm64` are required devDependencies for the Sanity Studio v6 build on macOS ARM64.

---

# Application Shell

Create only the application shell inside the **web** application.

This includes:

* Root Layout
* Marketing Layout
* Navigation Shell
* Footer Shell
* Theme Provider
* Providers entry point

Do not build any page sections.

---

# Server Actions

All future Server Actions should live inside:

```text
web/app/actions/
```

Example:

```text
contact.ts

newsletter.ts
```

Rules

* Validate using Zod.
* Return typed responses.
* Never import Client Components.
* Keep business logic outside UI components.

Do not implement any Server Actions yet.

---

# Sanity Client

Configure only the client layer inside the **web** application.

Create

```text
web/lib/sanity/

client.ts

env.ts

fetch.ts

image.ts

index.ts
```

Do not create:

* GROQ queries
* Schemas
* Content models
* Seed data
* Preview mode

Those belong to Task 03.

---

# Motion

Create only:

```text
web/lib/motion/
```

Do not implement animations.

---

# Constants

Create

```text
web/lib/constants/
```

No implementation required.

---

# Utilities

Create

```text
web/lib/utils/
```

Only generic project utilities if required.

Additionally, `web/lib/utils.ts` may contain shared utility functions (e.g., `cn` for class name merging).

---

# Providers

Create

```text
web/providers/

ThemeProvider.tsx

index.ts
```

Only configure next-themes.

No additional providers.

---

# Barrel Exports

Every public folder should expose an `index.ts`.

Examples

```text
web/components/layout/index.ts

web/components/navigation/index.ts

web/components/footer/index.ts

web/providers/index.ts

web/lib/sanity/index.ts
```

Never import private implementation files directly.

Always import through the public entry point.

---

# OpenCode Tasks

Complete the following tasks.

1. Initialize the pnpm workspace.
2. Create the `web` application.
3. Create the `studio` application.
4. Configure TypeScript.
5. Configure Tailwind CSS v4.
6. Configure shadcn/ui.
7. Configure next-themes.
8. Configure Framer Motion.
9. Initialize Sanity Studio.
10. Configure the Sanity client.
11. Create the workspace folder structure.
12. Configure Providers.
13. Create the application shell.
14. Configure barrel exports.
15. Ensure the workspace builds successfully.

---

# Root Package.json Scripts

The workspace root `package.json` provides parallel execution scripts:

```json
{
  "scripts": {
    "dev": "pnpm -r --parallel dev",
    "dev:web": "pnpm --filter portfolio-web dev",
    "dev:studio": "pnpm --filter portfolio-studio dev",
    "build": "pnpm -r --parallel build",
    "start": "pnpm -r --parallel start",
    "lint": "pnpm --filter portfolio-web lint",
    "clean": "rm -rf node_modules web/node_modules studio/node_modules .next web/.next studio/.next"
  }
}
```

**Note**: `next` is a root devDependency so ESLint can resolve `eslint-config-next` from the pnpm store.

---

# Out of Scope

Do not implement:

* Hero
* About
* Skills
* Experience
* Projects
* Blog
* Contact
* Shared UI components
* Typography
* Buttons
* Cards
* Forms
* SEO
* Metadata
* Server Actions
* Sanity Schemas
* GROQ Queries
* Content Models
* Seed Data
* Preview Mode
* Animations
* Responsive page layouts beyond the application shell

Those belong to later tasks.

---

# AI Guardrails

Do not create files that are not listed.

Do not install additional dependencies unless required by the stack.

Do not generate placeholder pages.

Do not generate placeholder content.

Do not build future tasks.

Do not guess missing business requirements.

Keep implementations minimal, production-ready, and extensible.

If an architectural decision is unclear, explain the trade-offs before proceeding.

---

# Acceptance Criteria

This phase is complete when:

* ✅ pnpm workspace is configured.
* ✅ `web` application is initialized.
* ✅ `studio` application is initialized.
* ✅ TypeScript compiles without errors.
* ✅ ESLint passes.
* ✅ Workspace builds successfully.
* ✅ Theme Provider is configured.
* ✅ Navigation shell exists.
* ✅ Footer shell exists.
* ✅ Providers are configured.
* ✅ Sanity client foundation exists.
* ✅ Studio foundation exists.
* ✅ Folder structure is complete.
* ✅ Barrel exports are configured.
* ✅ No feature components exist.
* ✅ No placeholder content exists.
* ✅ Ready for Task 02 — Design System.

---

# Deliverable

At the end of this phase, the repository should contain a clean, production-ready pnpm workspace with two applications:

* **web** — Next.js portfolio
* **studio** — Sanity Studio

Both applications should be initialized, build successfully, and provide a solid foundation for future implementation.
