<div align="center">
  <h1>Portfolio Website</h1>
  <p>
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-v16-black?style=flat-sharp&logo=nextdotjs&logoColor=white" alt="Next.js Version" /></a>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-v19-blue?style=flat-sharp&logo=react&logoColor=white" alt="React Version" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-v5-blue?style=flat-sharp&logo=typescript&logoColor=white" alt="TypeScript" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-v3-38bdf8?style=flat-sharp&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
    <a href="https://www.framer.com/motion/"><img src="https://img.shields.io/badge/Framer_Motion-v11-f107a3?style=flat-sharp&logo=framer&logoColor=white" alt="Framer Motion" /></a>
  </p>
</div>

## Description

This repository contains the source code for a modern, responsive, and bilingual developer portfolio website. Built using Next.js (App Router), React, TypeScript, and Tailwind CSS, the application serves as an interactive curriculum vitae showcasing professional experiences, educational background, skills, certifications, training, and projects. It features seamless light and dark mode toggling, dynamic language switching between English and Indonesian, and animated page transitions.

## Key Features

- Bilingual Support: Dual-language capability (English and Indonesian) managed via React Context, enabling immediate text and layout translation.
- Interactive Project Catalog: Filterable project showcase categorizing works into Web Development, UI/UX Design, and Machine Learning.
- Modular Project Cards: Clean grids displaying details with expandable descriptions, technology badges, and integration with dynamic preview/prototype modals.
- GitHub Integration: Live rendering of GitHub contribution history using a clean calendar grid interface.
- Theme Management: Full integration of system, dark, and light modes with optimized smooth color shifts.
- Responsive Layout: Adaptable grid layouts optimized for mobile, tablet, and desktop viewports.
- Micro-interactions: Fluid entrance animations and element transitions driven by Framer Motion.

## Directory Structure

```text
portfolio/
├── .eslintrc.json              # Linting configurations for code quality
├── components.json             # Shadcn UI configuration file
├── next.config.mjs             # Next.js framework configuration
├── package.json                # Project dependencies and script runner configurations
├── postcss.config.mjs          # PostCSS configuration for Tailwind CSS
├── tailwind.config.ts          # Tailwind CSS design system configurations
├── tsconfig.json               # TypeScript compiler options
├── public/                     # Static assets (images, icons, etc.)
└── src/
    ├── app/                    # Routing, layouts, and page definitions
    │   ├── globals.css         # Global style declarations and theme variable maps
    │   ├── layout.tsx          # Main root layout wrapper
    │   ├── not-found.tsx       # Custom 404 page component
    │   └── page.tsx            # Main application entry point page
    ├── components/             # Reusable UI components
    │   ├── cards/              # Cards for projects, achievements, and certifications
    │   ├── layout/             # Shared layouts, navbar, and theme providers
    │   ├── magicui/            # Specialized animation components (e.g. BlurFade)
    │   ├── modals/             # Modals for media zoom and prototype testing
    │   ├── ui/                 # Atomic design components (Badges, Buttons, Cards)
    │   └── sections/           # Individual profile sections (Hero, About, Skills, etc.)
    ├── context/                # Global React Context providers (Language Provider)
    ├── data/                   # Content database defining resume information
    ├── lib/                    # Helper utility functions and constants
    └── types/                  # TypeScript interfaces and type definitions
```

## System Requirements

- Runtime: Node.js 20.x or higher
- Package Manager: npm 10.x or higher (or yarn/pnpm equivalent)
- Operating System: Cross-platform (Windows, macOS, Linux)

## Environment Setup

1. Verify Node.js is installed on your local machine:
   ```bash
   node --version
   ```
2. Clone this repository to your local workspace:
   ```bash
   git clone https://github.com/azharangga/portfolio.git
   ```
3. Navigate into the cloned directory:
   ```bash
   cd portfolio
   ```
4. Install all package dependencies:
   ```bash
   npm install
   ```

## Development and Build Scripts

The following commands are configured inside the package.json file for usage during development, production builds, and verification phases:

- Start the development server (runs with Turbopack enabled for faster HMR compilation):
  ```bash
  npm run dev
  ```
- Build the production-ready bundle (compiles TypeScript, transpiles JavaScript, optimizes assets, and generates static pages):
  ```bash
  npm run build
  ```
- Start the server using the compiled production build:
  ```bash
  npm run start
  ```
- Run ESLint to analyze static codebase quality and syntax patterns:
  ```bash
  npm run lint
  ```

## Local Execution

To review or work on the project locally:

1. Execute the installation steps described in the Environment Setup section.
2. Run the development command:
   ```bash
   npm run dev
   ```
3. Open your web browser and navigate to the address:
   ```text
   http://localhost:3000
   ```

## Deployment

### Vercel Deployment

The application is structured to support seamless deployment to the Vercel platform:

1. Import the repository directly in the Vercel dashboard.
2. Set the framework preset to Next.js.
3. Keep the build command as `npm run build` and output directory as `.next`.
4. Click Deploy.

### Static HTML Export

If static page generation is preferred, update `next.config.mjs` to output static pages:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export'
};

export default nextConfig;
```

Running `npm run build` will then generate a static directory named `out` containing HTML, CSS, and JS assets that can be hosted on platforms like GitHub Pages, Netlify, or Amazon S3.

## Testing

The project uses Next.js integrated linting configurations. Validate code standards by running:

```bash
npm run lint
```

Ensure all TypeScript types compile correctly before preparing commits:

```bash
npx tsc --noEmit
```

## Contributions

Contributions to improve design, optimization, and additional features are welcome. Please adhere to the following workflow:

1. Fork the repository.
2. Create a new branch describing your modifications.
3. Commit your updates with clear messages.
4. Push your changes and submit a pull request against the main branch.

## Creator

Created and maintained by [Azharangga Kusuma](https://github.com/azharangga).