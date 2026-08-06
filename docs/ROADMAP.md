# ROADMAP.md

Version: 2.0

---

# Objective

Build a premium developer portfolio that showcases engineering excellence, architecture, performance, accessibility, and user experience.

The project follows an incremental, production-ready approach where each task builds upon the previous one.

---

# Site Structure

The site is a **2-page experience**:

* **Home (`/`)** — Hero, About, Skills, Experience, and a Featured/Infinite Projects Carousel, all as sections on one scrollable page with anchor-based smooth scroll navigation.
* **Projects (`/projects`)** — A single unified project grid with dynamic pages at `/projects/[slug]`, covering both engineering case studies and visual/design work (logos, branding, illustration). Each project has a `category` field distinguishing the two — design-category entries typically skip the tech-stack/challenge-solution narrative fields and lean on the image gallery instead.

Navigation contains only **Home** and **Projects**. Contact is handled via direct links (email, LinkedIn, GitHub, resume) in the Hero and Footer — no dedicated contact page or form.

Blog and a standalone Contact page (Tasks 07–08 below) are **deferred** and out of scope for v1.

---

# Repository Structure

The project is organized as a **pnpm workspace**.

```text
portfolio/
├── web/       # Next.js Application
├── studio/    # Sanity Studio
├── docs/
└── .agents/
```

The **web** application is responsible for the frontend.

The **studio** application is responsible for content management.

---

# Tech Stack

Workspace

* pnpm Workspace

Web

* Next.js 16
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
* GROQ

Deployment

* Vercel

---

# Development Tasks

## Task 01 — Project Foundation

Status

✅ Completed

Goals

* Initialize pnpm workspace
* Create `web`
* Create `studio`
* Configure TypeScript
* Configure Tailwind CSS v4
* Configure shadcn/ui
* Configure next-themes
* Configure Framer Motion
* Initialize Sanity Studio
* Configure Sanity client
* Create application shell
* Configure providers
* Configure workspace structure

Deliverable

A clean production-ready workspace foundation.

---

## Task 02 — Design System

Goals

Create reusable UI primitives.

Deliverables

* Container
* Section
* Typography
* Button
* Card
* Badge
* Link
* Spinner
* Skeleton
* Empty State
* Error State
* Shared Layout Components

No portfolio sections should be created.

---

## Task 03 — Sanity CMS

Goals

Configure the CMS.

Deliverables

Studio

* Schemas
* Singleton Documents
* Collections
* Validation
* Preview
* Structure

Web

* GROQ Queries
* Fetch Helpers
* Image Helpers
* Type-safe CMS Layer

The CMS should be fully functional before building pages.

---

## Task 04 — Layout & Navigation

Goals

Build the reusable application shell.

Deliverables

* Root Layout
* Marketing Layout
* Navbar
* Mobile Navigation
* Footer
* Theme Toggle
* Metadata
* Navigation Configuration
* Page Transition

No homepage content.

---

## Task 05 — Landing Page

Status

✅ Completed

Goals

Build the landing page using real CMS data.

Deliverables

* Hero
* About
* Skills
* Experience

Every section must consume data from Sanity.

---

## Task 06 — Projects

Status

✅ Completed

Goals

Build the unified project showcase — both engineering case studies and visual/design work, distinguished by a `category` field on the same `project` schema.

Deliverables

* Infinite Projects Carousel (Home)
* Project Grid (`/projects`)
* Filters (optionally by category)
* Dynamic Project Pages
* Image Gallery with required alt text per image
* Technology Stack (engineering) / Category display (design)
* GitHub Links
* Live Demo Links

Engineering-category projects should focus on case studies (problem, solution, impact) rather than simple project cards. Design-category projects (Logo Design, Branding, Illustration, UI Mockup) lean on the image gallery and skip the tech-stack/challenge-solution narrative.

---

## Task 07 — Blog

Status

⏸️ Deferred — out of scope for v1 (2-page site)

---

## Task 08 — Contact

Status

⏸️ Deferred — out of scope for v1. Contact is handled via direct links (email, LinkedIn, GitHub, resume) in the Hero and Footer, not a dedicated page.

---

## Task 09 — SEO & Performance

Goals

Optimize the application.

Deliverables

* Metadata
* OpenGraph
* Twitter Cards
* Sitemap
* Robots.txt
* Structured Data
* Image Optimization
* Performance Optimization
* Accessibility Improvements

---

## Task 10 — Testing & Deployment

Goals

Prepare the application for production.

Deliverables

* Final QA
* Responsive Testing
* Lighthouse Audit
* Accessibility Audit
* Broken Link Check
* Environment Variables
* Production Sanity Configuration
* Vercel Deployment
* Production Build Verification

---

# Engineering Rules

Every task must:

* Build successfully
* Pass TypeScript
* Pass ESLint
* Preserve accessibility
* Remain responsive
* Follow the documented architecture
* Avoid duplicate code
* Prefer Server Components
* Keep Client Components minimal

Do not begin a new task until the previous task is complete.

---

# Definition of Success

At the end of the roadmap, the project should:

* Demonstrate senior-level frontend engineering
* Be fully CMS-driven
* Be highly performant
* Be fully responsive
* Be accessible
* Be SEO optimized
* Be easy to maintain
* Be easy to extend
* Be production-ready

---

# Final Principle

Quality over speed.

Every completed task should leave the repository in a deployable state.
