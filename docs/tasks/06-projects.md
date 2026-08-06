# Task 06 — Projects

Version: 1.0

---

# Objective

Build a premium, CMS-driven Projects experience that demonstrates engineering depth rather than simply listing completed work.

Projects should communicate:

* Problem solving
* Engineering decisions
* Technical challenges
* Business impact
* Technologies used
* Final outcome

The Projects section is one of the most important parts of the portfolio.

---

# Read Before Starting

Before making any changes, read:

* AGENTS.md
* docs/PROJECT_CONTEXT.md
* docs/ARCHITECTURE.md
* docs/RULES.md
* docs/DESIGN_SYSTEM.md

Follow all engineering rules defined in those documents.

---

# Goals

Create a fully CMS-driven Projects experience.

Everything should be rendered from Sanity.

No hardcoded project data.

---

# Scope

Build:

* Infinite Projects Carousel (Home)
* Projects Listing page
* Dynamic Project Details page
* Reusable project components
* Sanity integration
* Navigation between projects

---

# Folder Structure

Only create the following structure inside the web application.

```text
web/

app/
└── (marketing)/
    └── projects/
        ├── page.tsx
        └── [slug]/
            └── page.tsx

components/
└── projects/
    ├── ProjectsCarousel.tsx
    ├── ProjectsGrid.tsx
    ├── ProjectCard.tsx
    ├── ProjectHero.tsx
    ├── ProjectGallery.tsx
    ├── ProjectOverview.tsx
    ├── ProjectTechStack.tsx
    ├── ProjectLinks.tsx
    ├── ProjectNavigation.tsx
    └── index.ts
```

Do not create additional feature folders unless required.

---

# Project Listing

The listing page should display:

* Featured image
* Project title
* Short description
* Technology badges
* Project category
* Completion year

Each card should link to the project details page.

---

# Dynamic Project Page

Create:

```text
/projects/[slug]
```

The page should fetch its content from Sanity using the project slug.

Do not use mock data.

---

# Project Page Sections

Build reusable sections for:

* Hero
* Overview
* Challenge
* Solution
* Tech Stack
* Key Features
* Image Gallery
* Results
* Lessons Learned
* External Links
* Next / Previous Project navigation

Each section should only render if corresponding data exists.

---

# Project Links

Support optional links for:

* Live Demo
* GitHub Repository
* Case Study
* App Store
* Play Store

Hide links that are not available.

---

# Technologies

Display technologies as reusable badges.

Do not hardcode colors for individual technologies.

---

# Gallery

Support multiple project images.

Requirements:

* Responsive layout
* Optimized images
* Lightbox support can be added later
* Lazy loading

Do not implement complex animations.

---

# Sanity Integration

Use centralized queries.

Do not write inline GROQ.

All CMS access should remain inside:

```text
web/lib/sanity/
```

---

# Server Components

Pages should remain Server Components.

Only create Client Components when interactivity is required.

Examples:

* Image gallery interactions
* Carousel
* Tabs

---

# Reusable Components

Every reusable component should remain generic.

Avoid project-specific implementations.

Expose public components through:

```text
components/projects/index.ts
```

---

# Accessibility

Ensure:

* Semantic headings
* Accessible links
* Keyboard navigation
* Descriptive alt text
* Visible focus states

---

# Performance

Prefer:

* Server Components
* Optimized images
* Lazy loading
* Minimal client-side JavaScript

Avoid unnecessary hydration.

---

# Out of Scope

Do not implement:

* Search
* Filtering
* Pagination
* Sorting
* Lightbox
* Related projects algorithm
* Analytics

The Home carousel is the one exception to "subtle transitions only": it uses continuous, seamless-loop motion (marquee-style). It must pause on hover/focus and respect `prefers-reduced-motion`.

These belong to future tasks.

---

# OpenCode Tasks

1. Create the projects route.
2. Create the dynamic project route.
3. Build reusable project components.
4. Integrate Sanity queries.
5. Render project listing.
6. Render project details.
7. Add project navigation.
8. Ensure accessibility.
9. Ensure responsive layouts.
10. Verify the production build.

---

# Acceptance Criteria

This task is complete when:

* Project listing is fully functional.
* Dynamic project pages render correctly.
* All project content comes from Sanity.
* Components are reusable.
* TypeScript passes.
* ESLint passes.
* Production build succeeds.
* Accessibility is preserved.
* Responsive layouts work correctly.
* No placeholder content exists.

---

# Deliverable

At the end of this task, the portfolio should provide a production-ready, CMS-driven Projects experience that presents engineering work as detailed case studies instead of simple project cards.
