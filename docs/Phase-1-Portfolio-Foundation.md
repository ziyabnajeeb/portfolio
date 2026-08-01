# Phase 1 -- Foundation & Architecture

## Objective

Build only the production-ready foundation for a premium developer
portfolio.

## Tech Stack

-   Next.js 16 (App Router)
-   TypeScript
-   Tailwind CSS v4
-   shadcn/ui
-   Framer Motion
-   Sanity CMS
-   next-themes
-   React Hook Form
-   Zod
-   Server Actions
-   Vercel

## Principles

-   Server Components by default.
-   Client Components only when required.
-   Feature-based architecture.
-   Strict TypeScript.
-   Accessibility-first.
-   Mobile-first.
-   Reusable, composable components.
-   No business logic inside UI components.

## Folder Structure

``` text
app/
  (marketing)/
    page.tsx
    projects/
    blog/
    contact/
  actions/
  api/
  layout.tsx
  globals.css

components/
  layout/
  navigation/
  footer/
  ui/
  hero/
  about/
  skills/
  experience/
  projects/
  blog/
  contact/

lib/
  sanity/
    client.ts
    image.ts
    queries.ts
  motion/
  utils/

providers/
hooks/
types/
sanity/
public/
styles/
```

## Server Actions

Place all server actions under:

``` text
app/actions/
```

Example: - contact.ts - newsletter.ts

Server actions must: - Validate with Zod. - Never import client
components. - Return typed results.

## Feature Rules

Each feature owns its implementation.

``` text
components/projects/
  ProjectCard.tsx
  ProjectGrid.tsx
  Projects.tsx
  index.ts
```

Expose only public APIs through `index.ts`.

## UI Foundation

Create only: - Root layout - Header - Footer - Theme provider -
Navigation - Container - Section wrapper - Typography primitives -
Button, Card, Badge wrappers

No page content yet.

## Sanity

Configure: - client - image helper - query folder - placeholder schema
folder

Do not implement schemas yet.

## Motion

Create reusable motion utilities only.

## OpenCode Tasks

1.  Initialize project.
2.  Install dependencies.
3.  Configure Tailwind v4.
4.  Configure shadcn/ui.
5.  Configure next-themes.
6.  Configure Framer Motion.
7.  Configure Sanity client.
8.  Create folder structure.
9.  Create providers.
10. Create reusable layout primitives.
11. Create barrel exports.
12. Ensure project builds without warnings.

## Acceptance Criteria

-   Clean architecture.
-   Zero duplicated components.
-   Type-safe.
-   Build passes.
-   Ready for Phase 2.
