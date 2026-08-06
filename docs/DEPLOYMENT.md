# DEPLOYMENT.md

Version: 1.0

---

# Purpose

This document defines the deployment strategy for the portfolio.

The project should be easy to deploy, maintain, and scale.

---

# Deployment Platform

Production:

* Vercel

CMS:

* Sanity Hosted Studio

Package Manager:

* pnpm

---

# Repository Structure

```text
portfolio/
├── web/
├── studio/
├── docs/
└── .agents/
```

Both applications are deployed independently.

---

# Web Deployment

Application:

* Next.js 16

Deployment Target:

* Vercel

Root Directory:

```text
web/
```

Build Command:

```bash
pnpm build
```

Output:

Managed automatically by Next.js.

---

# Studio Deployment

Application:

* Sanity Studio

Deployment:

* Sanity Hosted Studio

Root Directory:

```text
studio/
```

Deployment should use the official Sanity deployment workflow.

---

# Environment Variables

Web

Examples:

```text
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION=
SANITY_API_TOKEN=
```

Studio

Examples:

```text
SANITY_STUDIO_PROJECT_ID=
SANITY_STUDIO_DATASET=
```

Never commit secrets.

Use environment variables for sensitive values.

---

# Branch Strategy

Recommended branches:

```text
main
develop
feature/*
bugfix/*
```

Only deploy production from `main`.

---

# Pull Requests

Every pull request should:

* Build successfully
* Pass TypeScript
* Pass ESLint
* Be reviewed before merging

---

# CI Expectations

Every commit should verify:

* TypeScript
* ESLint
* Production Build

Future enhancements may include automated testing.

---

# Performance Targets

Aim for:

* Lighthouse Performance ≥ 95
* Accessibility = 100
* Best Practices = 100
* SEO = 100

---

# Monitoring

Before every production deployment verify:

* No TypeScript errors
* No ESLint errors
* No console errors
* Responsive layouts
* Accessibility
* Metadata
* Sitemap
* Robots.txt

---

# Rollback Strategy

Deployments should be reversible.

Use Vercel's deployment history to roll back if necessary.

---

# Future Improvements

Potential future additions:

* GitHub Actions
* Automated Lighthouse audits
* Visual regression testing
* End-to-end testing
* Bundle size analysis

These should only be introduced when they provide clear value.

---

# Final Principle

Every deployment should be repeatable, reliable, and production-ready.

Deployment should be a routine operation rather than a risky event.
