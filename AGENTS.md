# AGENTS.md — Operational Manual for Triole IT

## 1. Architecture Map & Folder Breakdown
Client-side Single Page Application built with React 19, Vite 8, React Router 7, and Framer Motion. Zero server runtime; leverages FormSubmit API with mailto fallbacks for lead intake.

```
triole-it/
├── public/                 # Static web root (sitemap.xml, robots.txt, favicon, logo)
├── src/
│   ├── assets/             # Bundled SVG icons and media assets
│   ├── components/         # Reusable UI elements (Navbar, Footer, CookieBanner, ScrollToTop)
│   │   ├── icons/          # Inline custom SVG icon wrappers (InstagramIcon)
│   │   └── SEO.jsx         # Central metadata hub: OpenGraph, Twitter, Breadcrumbs, JSON-LD Schema
│   ├── data/
│   │   ├── company.js      # Business constants, contact addresses, and FormSubmit tokens
│   │   └── services.jsx    # Service catalog data and category options
│   ├── pages/              # Route views (Home, About, Services, Contacts, Privacy, Terms, DMCA, NotFound)
│   ├── templates/
│   │   └── emailTemplates.js # CASL/CAN-SPAM compliant transactional & marketing HTML mail templates
│   ├── utils/
│   │   └── consentManager.js # Privacy governance engine (GDPR/CCPA/CalOPPA/CIPA cookie & script controller)
│   ├── App.jsx             # Top-level routing and layout orchestrator
│   ├── index.css           # Design tokens, utility classes, and glassmorphic styling
│   └── main.jsx            # React root mount and local font initialization
├── graphify-out/           # Knowledge graph database, AST nodes, and architectural health metrics
├── index.html              # HTML shell with static LD+JSON fallback and viewport configuration
└── vite.config.js          # Vite build config with @vitejs/plugin-react
```

## 2. Storage & Database Locations
Stateless SPA with persistent data confined to browser storage, static assets, and external webhooks:

- **Browser LocalStorage (`triole_cookie_consent_v1`)**:
  - Stores user privacy state: `essential`, `analytics`, `marketing`, `doNotSell`, `recordByDefault`, `hasConsented`, `updatedAt`.
  - **Live Rule**: Never mutate schema or bypass `getStoredConsent()`. Must preserve backward compatibility.
- **Form Intake Gateway**:
  - Configured in `src/data/company.js` via `COMPANY_INFO.formSubmitToken` (`84721cd2e9504c59aaa2028425dd5e15`).
  - **Live Rule**: This token routes production customer inquiries directly to `admin@triole-it.com`. Never overwrite with test tokens in production.
- **Critical Static Assets (`public/`)**:
  - `public/sitemap.xml`, `public/robots.txt`, `public/favicon.ico`, `public/logo.png`.
  - **Live Rule**: Production SEO depends on these remaining at root. Never relocate without updating `src/components/SEO.jsx` and `index.html`.
- **Knowledge Graph Database (`graphify-out/`)**:
  - Persistent AST and community graph (`graph.json`, `manifest.json`). Do not delete or clobber during feature development.

## 3. Inviolable Constraints & Operational Gotchas
- **Zero Third-Party Font CDNs (GDPR Rule)**:
  - Typography is served locally via `@fontsource/outfit` in `src/main.jsx`.
  - Never insert Google Fonts `<link>` or foreign CSS font imports into `index.html` (prevents German/EU court font IP leaks).
- **Affirmative Privacy & CIPA Wiretap Prohibition**:
  - Non-essential tracking must be gated behind `executeWithConsent(category, callback)` in `src/utils/consentManager.js`.
  - `recordByDefault` MUST remain `false`. Never enable session replay scripts without explicit, affirmative opt-in.
  - All form inputs capturing customer details in `Contacts.jsx` must retain `data-private="true"` and `data-mask="true"`.
- **Form Legal Affirmations**:
  - Submissions in `Contacts.jsx` are strictly disabled until both `isAgeVerified` (16+) and `agreedToTerms` (Terms & Privacy agreement) are checked.
  - Always maintain the direct `mailto:` fallback in `handleSubmit` in case FormSubmit network calls are blocked or rate-limited.
- **Single Page App Routing (Web Server Requirement)**:
  - React Router 7 relies on browser history routing. Production web servers (Nginx, Netlify, Vercel, Cloudflare Pages) MUST rewrite all unknown routes to `/index.html` (HTTP 200). Failing to do so causes 404 errors on direct navigation to `/services`, `/contacts`, etc.
- **CASL & CAN-SPAM Footer Requirements**:
  - Any email template in `src/templates/emailTemplates.js` MUST contain `COMPANY_LEGAL_INFO.address` (Vancouver, BC, Canada) and a functional unsubscribe mechanism.

## 4. Key Verification Commands
All commands run from project root:

```bash
# Start local development server (http://localhost:5173)
npm run dev

# Run code style and syntax checks (ESLint)
npm run lint

# Compile optimized production bundle to dist/
npm run build

# Preview production build locally
npm run preview
```
