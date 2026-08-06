# Task 04 — Layout & Navigation

Version: 1.0

---

# Objective

Build the global application shell for the portfolio.

This task is responsible for the overall layout, navigation, footer, theme switching, and page structure.

No portfolio-specific sections should be implemented.

The goal is to establish a reusable application shell that all pages can use.

---

# Read Before Starting

Read the following documentation before implementation.

- AGENTS.md
- docs/PROJECT_CONTEXT.md
- docs/RULES.md
- docs/ARCHITECTURE.md
- docs/DESIGN-SYSTEM.md

Follow all engineering principles defined there.

---

# Scope

Build the application's global layout.

This includes:

- Root Layout
- Marketing Layout
- Navigation
- Footer
- Theme Toggle
- Navigation Configuration
- Page Transitions
- Global Providers

Do not build homepage content.

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

# Folder Structure

Create or complete the following structure.

```text
components/

layout/
    Container.tsx
    Section.tsx
    PageTransition.tsx
    index.ts

navigation/
    Navbar.tsx
    DesktopNavigation.tsx
    MobileNavigation.tsx
    NavLink.tsx
    ThemeToggle.tsx
    index.ts

footer/
    Footer.tsx
    FooterLinks.tsx
    FooterSocials.tsx
    FooterCopyright.tsx
    index.ts

lib/

constants/
    navigation.ts
    site.ts
```

---

# Root Layout

Configure:

- HTML Language
- Theme Provider
- Metadata
- Global Fonts
- Global Styles
- Providers

Root layout should remain lightweight.

---

# Marketing Layout

Create a reusable layout for all marketing pages.

Responsibilities:

- Navbar
- Main Content
- Footer

All public pages should use this layout.

---

# Navigation

Build a reusable responsive navigation.

Requirements:

Desktop

- Horizontal navigation
- Logo
- Navigation links
- Theme toggle
- CTA button

Mobile

- Slide-over menu
- Accessible navigation
- Keyboard support
- Smooth open/close animation

Navigation must not contain hardcoded links.

Links should come from:

```text
lib/constants/navigation.ts
```

---

# Theme Toggle

Support

- Light
- Dark
- System

Persist theme preference.

Respect system preferences.

---

# Footer

Footer should contain:

- Logo
- Copyright
- Navigation
- Social Links
- Resume Link

Social links should be configurable.

No hardcoded URLs.

---

# Container

Create a reusable layout container.

Responsibilities

- Responsive width
- Horizontal padding
- Max width
- Center alignment

All sections should use Container.

---

# Section

Create a reusable section wrapper.

Support:

- Vertical spacing
- Background variants
- Optional container
- Optional ID

---

# Page Transition

Create a reusable page transition wrapper.

Requirements

- Fade
- Small translate animation
- Respect reduced motion

Do not create complex page transitions.

Subtle only.

---

# Navigation Configuration

Create

```text
lib/constants/navigation.ts
```

Example structure

```ts
[
  {
    label: "About",
    href: "#about"
  }
]
```

Navigation components should render from configuration.

---

# Site Configuration

Create

```text
lib/constants/site.ts
```

Store

- Site Name
- Description
- Author
- Default Metadata

Avoid magic strings.

---

# Metadata

Configure

- title template
- description
- OpenGraph defaults
- Twitter defaults
- robots
- metadataBase

This should be global only.

Per-page metadata comes later.

---

# Motion

Navigation should include subtle motion.

Examples

- Hover
- Active indicator
- Mobile menu animation

Keep animations lightweight.

---

# Accessibility

Navigation must support

Keyboard navigation

Visible focus

ARIA labels

Screen readers

Semantic HTML

Escape closes mobile menu.

---

# Responsive

Support

Mobile

Tablet

Desktop

Large Desktop

Navigation should adapt naturally.

---

# Performance

Prefer Server Components.

Only interactive components should use Client Components.

Do not make the entire navigation client-side unnecessarily.

---

# AI Guardrails

Do not build Hero.

Do not build About.

Do not build Skills.

Do not build Experience.

Do not build Projects.

Do not build Blog.

Do not build Contact.

Do not add placeholder portfolio content.

Do not hardcode navigation links.

Do not fetch CMS data.

Do not create reusable UI primitives beyond layout components.

---

# Acceptance Criteria

✓ Root Layout complete

✓ Marketing Layout complete

✓ Responsive Navigation

✓ Mobile Navigation

✓ Footer

✓ Theme Toggle

✓ Navigation Configuration

✓ Site Configuration

✓ Metadata configured

✓ Page Transition wrapper

✓ Responsive

✓ Accessible

✓ Build passes

✓ ESLint passes

✓ Ready for Homepage implementation

---

# Deliverable

At the end of this task the application should have a fully functional application shell.

Every future page should be able to reuse this layout without modification.