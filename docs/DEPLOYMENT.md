# DEPLOYMENT.md

Version: 2.0

---

# Purpose

This document defines the deployment strategy for the portfolio, and is the concrete, step-by-step runbook for deploying it — entirely on free tiers.

---

# What's Free

| Piece | Provider | Free tier covers |
|---|---|---|
| Web app hosting | Vercel (Hobby plan) | Unlimited personal projects, generous bandwidth, serverless functions, auto preview deployments |
| Sanity dataset/API | Sanity | Free tier — plenty for a personal portfolio's traffic and content volume |
| Sanity Studio hosting | Sanity Hosted Studio | Free, unlimited |
| CI | GitHub Actions | Unlimited minutes on public repos |
| Source control | GitHub | Free for public repos |

Nothing in this stack requires a paid plan. The only thing that ever costs money is an optional custom domain (a registrar fee, unrelated to Vercel/Sanity/GitHub themselves).

---

# Repository Structure

```text
portfolio/
├── web/        # Next.js app → deploys to Vercel
├── studio/     # Sanity Studio → deploys to Sanity Hosted Studio
├── docs/
└── .github/workflows/
```

Both applications deploy independently, from the same repo, via different mechanisms.

---

# One-Time Setup — Vercel (Web App)

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account (`ziyabnajeeb`).
2. **Add New → Project**, select the `portfolio` repo.
3. Vercel will try to auto-detect the framework at the repo root — it won't find one, because this is a pnpm workspace. Set:
   - **Root Directory**: `web`
   - Framework Preset: Next.js (should auto-detect once Root Directory is set)
4. Add Environment Variables (see the [table below](#environment-variables)):
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION` (optional — defaults to `2025-01-01` if omitted)
5. Click **Deploy**.

That's it — Vercel now auto-deploys on every push to `main` (production) and creates a preview URL for every pull request, for free, with no YAML config needed. This is Vercel's native Git integration, not something driven by the GitHub Actions workflows in this repo (see [Continuous Deployment](#continuous-deployment) below for why).

Your site will be live at `<project-name>.vercel.app`. A custom domain can be attached later, for free, from the Vercel project's Domains tab (you'd only pay a registrar if you don't already own the domain).

---

# One-Time Setup — Sanity Studio

Already done. Studio is live at **https://ziyabnajeeb.sanity.studio**.

For reference, this was set up by running `sanity deploy` from `studio/` once, which:
- Claimed the `ziyabnajeeb.sanity.studio` hostname (configured permanently in `studio/sanity.cli.ts` via `studioHost`)
- Registered an `appId` (also pinned in `sanity.cli.ts`), so every future deploy — including from CI — runs non-interactively with no prompts

If the Studio ever needs to be redeployed manually:

```bash
pnpm --filter portfolio-studio exec sanity deploy
```

---

# Continuous Deployment

Two different mechanisms, one per app:

**Web** deploys via **Vercel's native GitHub integration** — not a custom GitHub Action. Every push to `main` triggers a production build; every PR gets its own preview URL. Vercel's own build step already fails the deployment if `next build` fails, so there's no separate "deploy" step to script — reimplementing this with a GitHub Action + Vercel CLI would just duplicate what Vercel already does for free, with more secrets to manage and a real risk of double-deploying.

**Studio** deploys via `.github/workflows/deploy-studio.yml` — runs `sanity deploy` automatically whenever something under `studio/` changes on `main` (or can be triggered manually from the Actions tab). This exists because Studio deployment isn't something Vercel's Git integration handles — it's Sanity's own hosting.

**Both apps** are verified by `.github/workflows/ci.yml` on every push and pull request — lint, typecheck, and a full production build for both `web` and `studio`. This is a safety net independent of either deployment path: if it fails, you'll know before (or regardless of whether) anything ships.

---

# Required GitHub Secrets

Both workflows need these set under the repo's **Settings → Secrets and variables → Actions**:

| Secret | Used by | Notes |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Both workflows | Not actually sensitive (it's public in the client bundle anyway), but stored as a secret for convenience |
| `NEXT_PUBLIC_SANITY_DATASET` | Both workflows | Same as above |
| `SANITY_AUTH_TOKEN` | `deploy-studio.yml` only | **Sensitive.** Create at [sanity.io/manage](https://sanity.io/manage) → your project → API → Tokens → Editor permission (the same permission level used for the local content-seeding token) |

These are separate from Vercel's own environment variables (set in the Vercel dashboard, not GitHub) — the two systems don't share config.

---

# Environment Variables

| Variable | Where it's needed | Sensitive? |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `web/.env.local`, `studio/.env.local`, Vercel, GitHub Secrets | No — public by design |
| `NEXT_PUBLIC_SANITY_DATASET` | `web/.env.local`, `studio/.env.local`, Vercel, GitHub Secrets | No |
| `NEXT_PUBLIC_SANITY_API_VERSION` | `web/.env.local`, Vercel (optional) | No |
| `SANITY_STUDIO_PROJECT_ID` / `SANITY_STUDIO_DATASET` | `studio/.env.local` (falls back to the `NEXT_PUBLIC_*` versions if unset) | No |
| `SANITY_API_TOKEN` | `studio/.env.local` only — local content-seeding script | **Yes** — never commit, never add to Vercel or GitHub Secrets unless a specific server-side write path needs it |
| `SANITY_AUTH_TOKEN` | GitHub Secrets only — Studio deploy workflow | **Yes** |

Never commit `.env.local` files (already covered by `.gitignore`).

---

# Verifying a Deployment

After the first Vercel deploy:

* Visit `<project-name>.vercel.app/` — Hero, About, Skills, Experience, and the Projects carousel should render with real content.
* Visit `/projects` and a couple of `/projects/[slug]` pages.
* Visit `https://ziyabnajeeb.sanity.studio` — log in, confirm content is editable.
* Check the repo's **Actions** tab — `CI` should be green on the latest commit.

---

# Branch Strategy

This repo currently deploys straight from `main` — every push triggers CI and, for `web`, a production Vercel deployment. Feature branches and PRs get Vercel preview deployments automatically; adopt a `develop`/`feature/*` branching model later only if the workflow actually needs it.

---

# Pull Requests

Every pull request should:

* Pass the `CI` workflow (lint, typecheck, build — both apps)
* Be reviewed before merging

---

# Performance Targets

Aim for:

* Lighthouse Performance ≥ 95
* Accessibility = 100
* Best Practices = 100
* SEO = 100

(Tracked as part of Task 09 — SEO & Performance, not yet audited.)

---

# Rollback Strategy

**Web**: Vercel keeps every deployment. From the project dashboard → Deployments, any previous deployment can be promoted to production instantly.

**Studio**: re-running `sanity deploy` (manually or via the `Deploy Studio` GitHub Action) always deploys the current state of `studio/` on `main` — to roll back, revert the offending commit and redeploy.

---

# Future Improvements

Potential future additions, only if they provide clear value:

* Automated Lighthouse CI checks
* Visual regression testing
* End-to-end testing
* Bundle size analysis

---

# Final Principle

Every deployment should be repeatable, reliable, and production-ready.

Deployment should be a routine operation rather than a risky event.
