# Task 03 — Sanity CMS

Version: 1.0

---

# Objective

Integrate Sanity CMS into the project and establish a clean, scalable content architecture.

This task is responsible only for CMS configuration, schemas, queries, and utilities.

Do not build any UI or portfolio sections.

---

# Read Before Starting

Read the following documentation before implementation.

- AGENTS.md
- docs/PROJECT_CONTEXT.md
- docs/RULES.md
- docs/ARCHITECTURE.md
- docs/DESIGN-SYSTEM.md

---

# Scope

Configure a production-ready Sanity CMS.

The result should allow the website to fetch content from Sanity without requiring any UI implementation.

---

# Tech Stack

- Sanity Studio
- GROQ
- Next.js 16
- TypeScript

---

# Folder Structure

```
sanity/
├── schemaTypes/
├── singleton/
├── plugins/
├── structure/
├── env.ts
├── schema.ts
└── sanity.config.ts

lib/
└── sanity/
    ├── client.ts
    ├── image.ts
    ├── fetch.ts
    ├── queries/
    ├── live.ts
    ├── preview.ts
    └── index.ts
```

---

# Configure

Install and configure:

- Sanity Studio
- Image URL Builder
- Vision Plugin
- Presentation Plugin (optional if using live preview)
- Environment configuration

---

# CMS Documents

Create the following schemas.

## Singleton Documents

- Site Settings
- Hero
- About
- SEO

Only one document should exist for each. Contact is out of scope (v1 uses direct links from Site Settings, not a dedicated document).

---

## Collection Documents

Create collections for:

- Projects
- Experience
- Skills
- Skill Categories
- Social Links

Blog Posts are deferred and out of scope for v1.

---

# Project Schema

Each project should support:

- title
- slug
- excerpt
- description
- thumbnail
- gallery
- technologies
- githubUrl
- liveUrl
- featured
- order
- publishedDate

---

# Experience Schema

Fields

- company
- role
- description
- technologies
- startDate
- endDate
- current
- order

---

# Skill Category

Fields

- title
- icon
- order

---

# Skill

Fields

- name
- category
- icon
- order

Avoid percentage-based skill ratings.

---

# Site Settings

Store

- site title
- description
- email
- phone
- location
- resume
- favicon
- logo
- social links

---

# SEO

Store

- default title
- default description
- OpenGraph image
- keywords

---

# Queries

Create centralized GROQ queries.

```
lib/sanity/queries/

site.ts

hero.ts

about.ts

projects.ts

experience.ts

skills.ts
```

Never write inline GROQ queries.

---

# Image Helper

Configure

```
lib/sanity/image.ts
```

Use a reusable image builder.

---

# Fetch Utility

Create one fetch helper.

```
lib/sanity/fetch.ts
```

All CMS requests should pass through this helper.

---

# TypeScript

Create proper types for every document.

Avoid `any`.

---

# Validation

Add validation rules for required fields.

Use slugs correctly.

Validate URLs.

Validate image requirements.

---

# Preview

Configure previews inside Studio.

Documents should be easy to identify.

---

# Ordering

Support manual ordering where appropriate.

Examples

Projects

Experience

Skills

---

# AI Guardrails

Do not create UI.

Do not create pages.

Do not create React components.

Do not fetch data inside components.

Do not create placeholder content.

Do not hardcode any data.

Keep all CMS logic inside the Sanity layer.

---

# Acceptance Criteria

✓ Studio starts successfully

✓ All schemas compile

✓ Singleton documents exist

✓ Collection documents exist

✓ Queries are centralized

✓ Image helper exists

✓ Fetch helper exists

✓ Strong TypeScript

✓ Validation rules added

✓ Ready for Homepage implementation

---

# Deliverable

A production-ready Sanity CMS capable of powering the entire portfolio without requiring future architectural changes.