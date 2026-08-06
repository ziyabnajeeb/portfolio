# Phase 02 — Design System

Version: 2.0

---

# Objective

Build the shared design system that the entire application will use.

This phase is responsible only for creating reusable UI primitives, shared layout components, and design tokens.

No portfolio-specific UI should be implemented during this phase.

The goal is to establish a strong design foundation before building any sections.

---

# Read Before Starting

Before making changes, read:

- AGENTS.md
- docs/PROJECT_CONTEXT.md
- docs/RULES.md
- docs/ARCHITECTURE.md

Follow all engineering rules defined there.

---

# Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- next-themes

---

# Scope

Create only reusable UI.

Do not build:

- Hero
- About
- Projects
- Blog
- Contact
- Experience
- Skills

Those belong to later phases.

---

# Folder Structure

All paths are relative to the `web/` package directory.

```text
web/
├── app/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── navigation/
│   ├── footer/
│   └── providers/
├── lib/
│   ├── sanity/
│   ├── motion/
│   ├── constants/
│   └── utils/
├── providers/
├── styles/
├── types/
├── package.json
├── next.config.ts
├── tsconfig.json
└── eslint.config.mjs
```

---

# Layout Components

Create reusable layout primitives under `web/components/layout/`.

```text
web/components/layout/

Container.tsx

Section.tsx

PageHeader.tsx

SectionHeader.tsx

PageTransition.tsx

index.ts
```

Responsibilities

Container

- responsive width
- horizontal padding
- max-width handling

Section

- vertical spacing
- consistent spacing
- optional background variants

SectionHeader

- title
- subtitle
- description
- alignment variants

PageTransition

- shared page animation wrapper

---

# Navigation

Create only the reusable navigation shell under `web/components/navigation/`.

```text
web/components/navigation/

Navbar.tsx

DesktopNavigation.tsx

MobileNavigation.tsx

ThemeToggle.tsx

NavLink.tsx

index.ts
```

Do not hardcode navigation items.

Navigation must support configuration.

---

# Footer

Create reusable footer components under `web/components/footer/`.

```text
web/components/footer/

Footer.tsx

FooterLinks.tsx

FooterSocials.tsx

FooterCopyright.tsx

index.ts
```

No portfolio content.

Only reusable layout.

---

# Shared UI

Use shadcn where appropriate.

Create wrappers when needed.

All paths are under `web/components/ui/`.

```text
web/components/ui/

Button

Card

Badge

Input

Textarea

Separator

Avatar

Tooltip

Dialog

Tabs

Accordion

Skeleton

Spinner

EmptyState

ErrorState

LoadingState

SectionDivider

```

Do not duplicate shadcn components unnecessarily.

Extend them only when adding value.

---

# Typography

Create reusable typography components under `web/components/ui/typography/`.

```text
web/components/ui/typography/

Heading.tsx

Text.tsx

Label.tsx

Caption.tsx

Code.tsx

index.ts
```

Support variants.

Example

Heading

- hero
- h1
- h2
- h3
- h4

Text

- body
- small
- muted
- lead

---

# Icons

Create one centralized icon module under `web/components/ui/icons/`.

```text
web/components/ui/icons/

index.ts
```

Never import lucide icons throughout the application.

Import once.

Export once.

---

# Theme

Configure

next-themes

Support

- Light
- Dark
- System

No additional themes.

---

# Motion

Create reusable animation helpers under `web/lib/motion/`.

```text
web/lib/motion/

fade.ts

slide.ts

scale.ts

stagger.ts

index.ts
```

Keep animations subtle.

---

# Constants

Create shared constants under `web/lib/constants/`.

```text
web/lib/constants/

navigation.ts

socials.ts

site.ts
```

No magic strings.

---

# Utilities

Create shared utility functions under `web/lib/utils/`.

```text
web/lib/utils/

cn.ts

formatDate.ts

slugify.ts

readingTime.ts

index.ts
```

Only utilities.

No React code.

---

# Providers

Application-wide providers live at `web/providers/`.

```text
web/providers/

ThemeProvider.tsx

index.ts
```

Keep providers minimal.

---

# Accessibility

Every component must support

Keyboard

Focus

ARIA when required

Semantic HTML

Proper labels

---

# Responsive Requirements

Support

Mobile

Tablet

Desktop

Ultra-wide

Do not optimize only for desktop.

---

# Performance

Use Server Components whenever possible.

Do not introduce unnecessary Client Components.

Keep hydration minimal.

---

# Design Language

Inspired by

- Vercel
- Linear
- Apple
- Raycast

Characteristics

Minimal

Elegant

Comfortable spacing

Strong typography

Subtle motion

No visual clutter

---

# Out of Scope

Do not build

Hero

About

Projects

Blog

Contact

Experience

Skills

CMS

Server Actions

SEO

Metadata

Forms

---

# Acceptance Criteria

The phase is complete when

✓ Shared layout exists

✓ Navigation shell exists

✓ Footer shell exists

✓ Typography system exists

✓ Shared UI primitives exist

✓ Theme switching works

✓ Motion helpers exist

✓ Barrel exports exist

✓ TypeScript passes

✓ ESLint passes

✓ Build succeeds

✓ No duplicated components

✓ Documentation remains accurate

---

# Deliverable

At the end of this phase the project should have a reusable design system ready for feature development.

No feature-specific UI should exist.

The next phase will consume these components without modification.