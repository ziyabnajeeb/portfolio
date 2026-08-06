# CMS Content Draft

Draft copy for every Sanity document, written from your resume. Field names match the Studio exactly — copy/paste into `pnpm dev:studio` → `/studio`, then edit to taste.

Flagged with **⚠️** wherever I made a judgment call or need something from you (a URL, an image, a date) — check those before publishing.

---

## Site Settings (singleton)

| Field | Value |
|---|---|
| Site Title | `Ziyab Najeeb — Senior UI/UX Engineer` |
| Site Description | `Portfolio of Ziyab Najeeb, a Senior UI/UX Engineer with 14+ years building scalable React, Next.js, and Salesforce Commerce Cloud experiences.` |
| Full Name | `Ziyab Najeeb` |
| Email | `ziyabnajeeb@gmail.com` |
| Phone | `+92 321 2388177` |
| Location | `Karachi, Pakistan` |
| Resume File | ⚠️ upload your resume PDF here |
| Logo / Favicon | ⚠️ optional — upload if you have a personal mark |
| Social Links | ⚠️ only email is on your resume. Add LinkedIn/GitHub URLs if you want them in the footer — platform: `email`, url: `mailto:ziyabnajeeb@gmail.com` |

---

## Hero (singleton)

| Field | Value |
|---|---|
| Greeting | `Hi, I'm` |
| Name | `Ziyab Najeeb` |
| Rotating Roles | `Senior UI/UX Engineer` · `React.js & Next.js Developer` · `Salesforce SFRA Specialist` · `Full-Stack MERN Developer` |
| Summary | `14+ years building scalable, high-performance web applications — from pixel-perfect React and Next.js interfaces to full-stack Salesforce Commerce Cloud storefronts. I turn complex requirements into fast, accessible, production-ready products.` |
| Years of Experience | `14` |
| Portrait | ⚠️ upload a headshot |
| CTAs | `View Projects` → `#projects`  ·  `Download Resume` → link this to the Site Settings resume file once uploaded |

---

## About (singleton)

**Headline:** `About Me`

**Biography** (portable text — 3 paragraphs):

> I'm a Senior UI/UX Engineer with over 14 years of experience building scalable, responsive web applications — from early jQuery and HTML5/CSS3 work to modern React, Next.js, and TypeScript architectures.
>
> Most of that time has been spent inside Salesforce Commerce Cloud (SFRA/SiteGenesis), optimizing storefront performance and user experience for enterprise eCommerce clients, alongside full-stack MERN projects built with Express.js and MongoDB.
>
> I care about clean component architecture, functional programming practices, and interfaces that are as fast as they are polished — working across design systems like Tailwind CSS, shadcn/ui, React Bootstrap, and Material UI, with Photoshop and Illustrator rounding out the workflow from wireframe to shipped product.

**Engineering Philosophy** (portable text):

> Good frontend engineering should be invisible — it just feels fast, clear, and trustworthy. I favor efficient RESTful APIs, functional programming patterns, and design systems that keep a codebase consistent as it scales, and I like adapting quickly to whatever stack a project actually calls for.

**Photo:** ⚠️ upload

**Stats:** ⚠️ verify these — I derived them from your resume, adjust as needed
- `14+` — Years of Experience
- `7+` — Client Projects Delivered
- `MERN` — Full-Stack Capable

---

## Experience (collection — 1 entry from your resume)

| Field | Value |
|---|---|
| Company | `Royal Cyber Inc.` |
| Company Description | `A globally recognized, award-winning technology partner helping companies imagine, execute, and accelerate their digital transformation journey for over 20 years.` |
| Role | `Senior UI Frontend Developer` |
| Location | `Karachi, Pakistan` |
| Start Date | `2012-12-01` |
| End Date | — (leave empty) |
| Current Position | ✅ true |
| Description | `Leading frontend development across multiple client engagements, specializing in React.js, Next.js, and Salesforce Commerce Cloud (SFRA/SiteGenesis). Responsible for building scalable, responsive UIs, optimizing storefront performance, and delivering full-stack features across the MERN stack.` |
| Technologies | `React`, `Next.js`, `TypeScript`, `JavaScript (ES6)`, `Salesforce SFRA`, `Tailwind CSS`, `Node.js`, `Express.js`, `MongoDB`, `jQuery`, `SCSS` |
| Order | `1` |

⚠️ Your resume only shows one employer with a date range (Dec 2012–Present) even though it states 14+ years of experience. If there's earlier employment before Royal Cyber, add it as additional Experience entries with its own `order`.

---

## Skill Categories & Skills (collections)

Create categories first, then skills referencing them. `icon` is a free-text key you'll wire up to actual icon components in Task 05 — suggested slugs below (they match common icon-set naming so they'll be easy to map later).

### 1. Frontend
`React` (react) · `Next.js` (nextjs) · `TypeScript` (typescript) · `JavaScript` (javascript) · `HTML5` (html5) · `CSS3` (css3) · `Sass/SCSS` (sass) · `Tailwind CSS` (tailwindcss) · `Material UI` (materialui) · `React Bootstrap` (bootstrap) · `Bootstrap 5` (bootstrap)

### 2. Backend
`Node.js` (nodejs) · `Express.js` (express) · `MongoDB` (mongodb)

### 3. Platforms
`Salesforce Commerce Cloud (SFRA)` (salesforce)

### 4. Design Tools
`Photoshop` (photoshop) · `Illustrator` (illustrator)

### 5. Tools & Workflow
`Git` (git) · `Source Tree` (sourcetree) · `Webpack` (webpack) · `npm` (npm) · `GSAP` (gsap)

---

## Projects (collection)

⚠️ Your resume's "Brambleberry" section is ambiguous — it names "White-Cap" as a sub-project with a modern React/TypeScript/GSAP stack, then separately describes a broader SFCC/SFRA storefront build (Home, Product, Cart, Checkout, Sort & Filter, Page Designer, etc.) for what looks like the same client. I've split them into two projects below — **merge them back into one if that's not accurate.**

I set `featured: true` on the two most portfolio-worthy, modern-stack projects for the Home carousel — toggle others on/off as you like. All need a **thumbnail** image and a **slug** (auto-generated from title) — those aren't in your resume, add them in Studio.

### 1. FilmTastic — *Featured*
- **Role:** Fullstack
- **Company:** Royal Cyber
- **Excerpt:** `A web scraping application that gathers and displays movie data from multiple sources, built with server-side rendering for performance and SEO.`
- **Overview:** `Contributing to the development of FilmTastic, a web scraping application that gathers and displays movie data from multiple sources using Puppeteer.`
- **Solution:** `Built the frontend with Next.js and React.js leveraging server-side rendering, styled with Tailwind CSS and shadcn/ui for a responsive, consistent UI, and typed end-to-end with TypeScript. The project was structured as an Nx Monorepo for shared libraries and dependency management. Backend services were built with Express.js, with JWT authentication securing user access and MongoDB handling data storage. API endpoints serve dynamic scraped movie data in real time.`
- **Key Features:** `Server-side rendering for SEO`, `Puppeteer-based scraping pipeline`, `JWT authentication`, `Nx Monorepo structure`, `MongoDB-backed movie data API`
- **Technologies:** `React.js`, `Next.js`, `Puppeteer`, `Tailwind CSS`, `Shadcn UI`, `TypeScript`, `Express.js`, `MongoDB`, `JWT`
- **GitHub / Live URL:** ⚠️ add if available

### 2. White-Cap — *Featured*
- **Role:** UI Developer
- **Company:** Brambleberry
- **Excerpt:** `An interactive product visualization feature with animated, contextual image markers built for a Salesforce Commerce Cloud storefront.`
- **Overview:** `Developed the White-Cap project, focusing on dynamic image handling and interactive user experience — animated markers on images, categorized to surface contextual information based on user interaction.`
- **Solution:** `Used GSAP (GreenSock Animation Platform) to animate the markers smoothly, React.js with TypeScript for a type-safe, maintainable structure, and a responsive layout built with Tailwind CSS and shadcn/ui. Users can switch between images while corresponding markers update accordingly.`
- **Key Features:** `Animated, categorized image markers`, `Image-switching with synced marker state`, `GSAP-driven micro-interactions`
- **Technologies:** `React.js`, `TypeScript`, `Tailwind CSS`, `Shadcn UI`, `GSAP`
- **GitHub / Live URL:** ⚠️ add if available

### 3. Brambleberry — SFCC Storefront
- **Role:** UI Developer
- **Company:** Brambleberry
- **Excerpt:** `Multiple storefront modules for an eCommerce site built on Salesforce Commerce Cloud (SFRA), from Home through Checkout.`
- **Overview:** `Designed and developed various modules of an eCommerce site using SFCC SFRA architecture — Home Page, Product, Cart, Checkout, Sort & Filter, Article, Mobile Navigation, and Quick View, built from scratch on ISML, SCSS, and client-side JS.`
- **Solution:** `Implemented Google AVS 2.0 and reCAPTCHA as reusable components usable across checkout and account pages. Followed functional JavaScript best practices, blending ES6 with jQuery where needed. Built required pages in Page Designer, set up npm/Webpack for linting and prod/dev builds, and upgraded the project's Node version from 6 to 14.`
- **Key Features:** `Reusable Google AVS 2.0 & reCAPTCHA components`, `Page Designer authoring`, `Npm/Webpack build pipeline`, `Node 6 → 14 upgrade`
- **Technologies:** `Salesforce SFRA`, `jQuery`, `JavaScript`, `HTML5`, `SCSS`, `Bootstrap 4`, `ISML`, `Webpack`
- **GitHub / Live URL:** ⚠️ likely none (client eCommerce site)

### 4. Covid-19 Dashboard
- **Role:** Frontend Developer
- **Excerpt:** `A COVID-19 data dashboard built from scratch with React, featuring live data via REST API.`
- **Overview:** `Complete UI built with React, HTML5, JavaScript ES6, Tailwind CSS, and Styled Components, consuming a REST API with Axios and managing state with Redux, in an organized component structure.`
- **Technologies:** `React`, `JavaScript (ES6)`, `Tailwind CSS`, `Styled Components`, `Axios`, `Redux`

### 5. Memories App
- **Role:** Fullstack
- **Excerpt:** `A full-stack MERN application with a clean, MVC-structured REST API.`
- **Overview:** `Built the complete UI with React, JavaScript ES6, and React-Bootstrap, backed by an Express.js REST API following an MVC approach for clean, maintainable code, with MongoDB and Mongoose for data.`
- **Technologies:** `React`, `React-Bootstrap`, `Redux`, `Express.js`, `MongoDB`, `Mongoose`

### 6. WinZone Intranet
- **Role:** UI Developer
- **Excerpt:** `An intranet portal built from scratch with HTML5, SCSS, and Angular.`
- **Overview:** `Developed the UI from scratch using HTML5, Flexgrid, and SCSS, then implemented interactive components with Angular, TypeScript, and SCSS, in an organized component structure.`
- **Technologies:** `HTML5`, `CSS3`, `SCSS`, `Angular`, `TypeScript`

### 7. Aramark Supplier Marketplace
- **Role:** UI Developer
- **Excerpt:** `A supplier marketplace UI built for a WebSphere Portal environment.`
- **Overview:** `Developed the UI from scratch using HTML5, Bootstrap, and SCSS, with jQuery handling client-side scripting.`
- **Technologies:** `HTML5`, `Bootstrap`, `SCSS`, `jQuery`, `WebSphere Portal`

---

## What I couldn't fill in from the resume

- Project thumbnails/gallery images — none exist yet, need real screenshots or you can use placeholder art per project until you have real ones.
- GitHub/Live URLs — none listed on the resume.
- LinkedIn/GitHub profile URLs for Site Settings social links.
- Exact end dates for any earlier roles (resume shows only one continuous role).
