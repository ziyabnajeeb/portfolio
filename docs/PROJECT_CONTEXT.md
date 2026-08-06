# PROJECT_CONTEXT.md

Version: 2.0

---

# Project Identity

This repository contains a premium personal portfolio for a **Senior Full Stack Engineer**.

The primary expertise showcased is modern frontend engineering, complemented by backend architecture, API design, and full-stack application development.

This is **not** a template.

This is **not** a résumé website.

This project is intended to demonstrate engineering quality, architectural thinking, user experience, maintainability, accessibility, and modern web engineering best practices.

Every implementation decision should reinforce that goal.

---

# Repository Structure

The repository is organized as a **pnpm workspace**.

```text
portfolio/
├── web/       # Next.js Application
├── studio/    # Sanity Studio
├── docs/
└── .agents/
```

The workspace contains two independent applications.

**web**

Responsible for the portfolio website.

**studio**

Responsible for content management.

Documentation and AI instructions live at the repository root and apply to the entire workspace.

---

# Target Audience

The primary audiences are:

* Engineering Managers
* Hiring Managers
* CTOs
* Technical Recruiters
* Startup Founders
* Freelance Clients
* Senior Engineers
* Staff Engineers

The portfolio should communicate engineering maturity within the first few seconds.

---

# Primary Objective

Visitors should immediately understand:

* who the engineer is
* what they specialize in
* the quality of their work
* how they solve problems
* why they should hire them

The portfolio should build confidence.

---

# User Experience Philosophy

The experience should feel:

* calm
* confident
* minimal
* premium
* modern
* purposeful

Every interaction should have intent.

Nothing should exist only because it looks interesting.

---

# Design Inspiration

The overall design language should take inspiration from products such as:

* Vercel
* Linear
* Raycast
* Stripe
* Apple
* Framer

Do not imitate them.

Instead, adopt similar design principles.

---

# Visual Language

The interface should prioritize:

* Large typography
* Strong hierarchy
* Comfortable spacing
* Clean layouts
* Subtle gradients
* High contrast
* Soft shadows
* Consistent border radius
* Minimal visual noise

Avoid unnecessary decoration.

---

# Color Philosophy

Use a neutral-first palette.

Accent colors should be limited.

Avoid rainbow gradients.

Avoid overly saturated colors.

The accent color should reinforce branding rather than dominate the interface.

---

# Typography

Typography is one of the most important design elements.

Prefer:

* Large headings
* Comfortable line height
* Clear hierarchy
* Excellent readability
* Generous spacing

---

# Motion Philosophy

Motion exists to:

* Guide attention
* Communicate hierarchy
* Provide feedback
* Improve perceived performance

Motion must never:

* Delay interaction
* Be distracting
* Feel excessive
* Become the primary visual focus

Every animation should have a purpose.

---

# Performance Goals

The site should feel instant.

Target metrics:

* Lighthouse Performance ≥ 95
* Accessibility = 100
* Best Practices = 100
* SEO = 100

Interaction should remain smooth even on slower devices.

---

# Accessibility Philosophy

Accessibility is a feature.

Keyboard users should receive the same experience.

Screen readers should receive meaningful content.

Focus states must never be removed.

Semantic HTML should always be preferred.

---

# Engineering Philosophy

Architecture is more important than implementation speed.

Prefer solutions that are:

* Simple
* Predictable
* Composable
* Testable
* Maintainable

Avoid unnecessary abstractions.

Avoid premature optimization.

---

# Workspace Philosophy

The repository consists of two independent applications.

## web

Responsible for:

* Presentation
* Routing
* User Experience
* SEO
* Performance
* Rendering
* Server Actions

## studio

Responsible for:

* Content Management
* Schemas
* Validation
* Editorial Experience

Both applications should evolve independently.

Communication between them should happen only through the Sanity Content API.

Do not duplicate responsibilities.

---

# Component Philosophy

Components should be:

* Small
* Focused
* Reusable
* Predictable
* Stateless whenever possible

Business logic should remain outside presentation components.

---

# Data Philosophy

Sanity is the single source of truth for all content.

The web application owns presentation.

The studio owns content.

The web application should never hardcode content that belongs in the CMS.

The studio should never contain presentation logic.

Maintain a clear separation of concerns.

---

# Content Philosophy

The portfolio should tell a story.

Instead of listing technologies, explain:

* What was built
* Why it mattered
* What problems were solved
* What architectural decisions were made

Case studies are preferred over project lists.

---

# Project Sections

The site is a 2-page experience: **Home** (`/`) and **Projects** (`/projects`).

Home sections, in order:

* Hero
* About
* Skills
* Experience
* Featured/Infinite Projects Carousel
* Footer

Projects page — a single unified grid covering both coding/engineering case studies and visual/design work (logos, branding, illustration), distinguished by a `category` field:

* Project Grid (`/projects`)
* Dynamic Project Detail (`/projects/[slug]`)

Contact is not a section or page — it lives as direct links (email, LinkedIn, GitHub, resume) in the Hero and Footer. Blog is deferred.

Each section should have a clear purpose.

---

# Hero Goals

Within five seconds, visitors should know:

* Who the engineer is
* Their specialization
* Their experience
* Their value proposition
* The next action to take

The Hero section is the most important section on the site.

---

# About Goals

Explain the engineer rather than repeating the résumé.

Focus on:

* Experience
* Problem solving
* Engineering philosophy
* Collaboration
* Leadership
* Technical growth

---

# Projects Philosophy

Projects should not resemble GitHub repositories.

Each project should answer:

* What problem existed?
* Why was this solution chosen?
* What technologies were used?
* What challenges occurred?
* What was learned?
* What business impact was achieved?

---

# Skills Philosophy

Do not display progress bars.

Instead:

* Group technologies
* Show expertise
* Highlight real-world usage
* Connect skills to projects

Depth is more valuable than quantity.

---

# Contact Philosophy

Contact should feel effortless.

* Minimal fields
* Fast submission
* Clear confirmation
* Professional tone

---

# Responsive Philosophy

The mobile experience is equally important.

Design mobile-first.

Desktop enhancements should never compromise mobile usability.

---

# SEO Philosophy

Every page should provide value.

Metadata should be meaningful.

Structured data should be implemented.

Images should be optimized.

URLs should remain clean.

---

# Future Growth

The architecture should allow future additions such as:

* Speaking engagements
* Conference talks
* Podcasts
* YouTube content
* Open-source work
* Certifications
* Awards
* Shared packages
* Shared TypeScript configuration
* Shared ESLint configuration

without requiring architectural changes.

---

# AI Instructions

Before implementing any feature:

Read:

* AGENTS.md
* PROJECT_CONTEXT.md
* ARCHITECTURE.md
* Relevant task documentation
* Relevant skill documentation

Do not make assumptions.

Prefer consistency over creativity.

Reuse existing solutions whenever possible.

Avoid rewriting working code.

If requirements are unclear, explain the trade-offs and request clarification instead of guessing.

---

# Success Criteria

A successful implementation should make another experienced engineer think:

> "This feels like a product, not a portfolio."

That is the quality standard for this repository.
