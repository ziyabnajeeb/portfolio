# Task 05 — Landing Page

Version: 1.0

---

# Objective

Build the complete landing page of the portfolio using reusable components and real content from Sanity CMS.

This page should immediately communicate who the engineer is, what they specialize in, and why visitors should continue exploring.

Every section must consume data from Sanity.

Do not hardcode content.

---

# Read Before Starting

Read:

- AGENTS.md
- docs/PROJECT_CONTEXT.md
- docs/RULES.md
- docs/ARCHITECTURE.md
- docs/DESIGN-SYSTEM.md

---

# Scope

Build only the landing page.

Sections:

- Hero
- About
- Skills
- Experience

Do not build:

- Project Listing
- Blog
- Contact Form

---

# Folder Structure

```text
components/

hero/
    Hero.tsx
    HeroContent.tsx
    HeroImage.tsx
    HeroActions.tsx
    HeroSocials.tsx
    index.ts

about/
    About.tsx
    AboutContent.tsx
    AboutImage.tsx
    AboutStats.tsx
    index.ts

skills/
    Skills.tsx
    SkillCategory.tsx
    SkillCard.tsx
    index.ts

experience/
    Experience.tsx
    Timeline.tsx
    TimelineItem.tsx
    index.ts
```

---

# Hero

Purpose

Introduce the engineer within five seconds.

Content

- Name
- Role
- Short Introduction
- CTA Buttons
- Social Links
- Hero Image

CTA

- View Projects
- Download Resume

The Hero should consume data from Sanity.

---

# About

Purpose

Tell the engineering story.

Include

- Biography
- Professional Summary
- Years of Experience
- Engineering Philosophy
- Personal Photo

Avoid copying the resume.

Focus on the story.

---

# Skills

Purpose

Show technical expertise.

Group skills by category.

Examples

Frontend

Backend

Database

Cloud

DevOps

Tools

Do not use percentage bars.

Do not rate yourself.

Each skill should display:

- Name
- Icon

Data comes from Sanity.

---

# Experience

Display a vertical timeline.

Each item includes:

- Company
- Role
- Duration
- Description
- Technologies

Support current positions.

Data comes from Sanity.

---

# Layout

Each section should use:

Container

Section

Section Header

Maintain consistent spacing.

---

# Motion

Subtle only.

Allowed

- Fade
- Slide
- Scale

Avoid

- Bounce
- Rotation
- Long delays

Respect reduced motion.

---

# Responsive

Support

Mobile

Tablet

Desktop

Ultra-wide

Sections should stack naturally.

---

# Accessibility

Every section must:

- Use semantic HTML
- Have heading hierarchy
- Support keyboard navigation
- Provide descriptive alt text
- Maintain sufficient color contrast

---

# Performance

Prefer Server Components.

Only interactive elements should use Client Components.

Optimize images.

Use lazy loading where appropriate.

---

# Data

Every section must fetch data through:

```text
lib/sanity/fetch.ts
```

Never query Sanity directly inside components.

Never duplicate queries.

---

# AI Guardrails

Do not hardcode content.

Do not create mock data.

Do not build Projects.

Do not build Blog.

Do not build Contact.

Do not add decorative animations.

Do not duplicate layout components.

Reuse the design system created in previous tasks.

---

# Acceptance Criteria

✓ Hero implemented

✓ About implemented

✓ Skills implemented

✓ Experience implemented

✓ Responsive

✓ Accessible

✓ Uses Sanity

✓ Uses reusable layout

✓ Uses shared UI

✓ Build passes

✓ ESLint passes

✓ TypeScript passes

---

# Deliverable

A production-ready landing page powered entirely by Sanity CMS.

The page should feel premium, fast, and maintainable while remaining easy to extend in future tasks.