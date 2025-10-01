# Sunil Portfolio

A personal portfolio website built with React 19, TypeScript, and TailwindCSS V4 using Vite as the build tool and ShadCN UI for components. Includes backend API integration with AWS S3, Express, and Hono.

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
# or
bun install

# Then start the development server
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/App.tsx`. The page auto-updates as you edit the file.

### Development Configuration

The development server runs on **port 3000** by default (configured in `vite.config.ts`). To use a different port:

**Using npm:**
```bash
PORT=4000 npm run dev
```

**Using Bun:**
```bash
PORT=4000 bun dev
```

**Environment Variables:**
- `PORT`: Set custom development port (default: 3000)
- `HOST`: Set to `true` to expose to network (configured in `vite.config.ts`)

## Project Configuration

### Package Management

This project supports both [npm](https://www.npmjs.com/) and [Bun](https://bun.sh/) package managers. Both lock files are present in the project:

**Using npm:**
- Install dependencies: `npm install`
- Run scripts: `npm run <script-name>`
- Install packages: `npm install <package-name>`

**Using Bun:**
- Install dependencies: `bun install`
- Run scripts: `bun <script-name>`
- Install packages: `bun add <package-name>`

### Theme Customization

The project uses Tailwind CSS V4 with a theme defined in:

- `src/index.css` - For CSS variables including colors in OKLCH format and custom theming
- Tailwind V4 uses the new `@theme` directive for configuration

### ShadCN UI Components

This project uses [ShadCN UI](https://ui.shadcn.com) for styled components. The components are incorporated directly into the codebase (not as dependencies), making them fully customizable. All components have been installed:

- accordion
- alert-dialog
- alert
- aspect-ratio
- avatar
- badge
- breadcrumb
- button
- calendar
- card
- carousel
- chart
- checkbox
- collapsible
- command
- context-menu
- dialog
- drawer
- dropdown-menu
- form
- hover-card
- input-otp
- input
- label
- menubar
- navigation-menu
- pagination
- popover
- progress
- radio-group
- scroll-area
- select
- separator
- sheet
- skeleton
- slider
- sonner
- switch
- table
- tabs
- textarea
- toast
- toggle-group
- toggle

### Icon Library

[Lucide React](https://lucide.dev/) is the preferred icon library for this project, as specified in components.json. Always use Lucide icons to maintain consistency:

```tsx
import { ArrowRight } from "lucide-react";

// Use in components
<Button>
  <span>Click me</span>
  <ArrowRight />
</Button>;
```

### Font Configuration

This project uses Google Fonts with:

- Inter (sans-serif)
- Playfair Display (serif)

The font is imported via Google Fonts CDN in `src/index.css` and configured in the Tailwind theme:

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");

@theme inline {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Playfair Display", ui-serif, Georgia, serif;
}
```

To change or update fonts:

1. Update the Google Fonts import in `src/index.css`
2. Modify the `--font-sans` variable in the `@theme` directive

### Backend Integration

This project includes backend API capabilities with the following technologies:

**AWS Integration:**
- **AWS S3**: For file storage and asset management
- Located in `src/backend/api.ts`

**Server Frameworks:**
- **Express.js**: Traditional Node.js web server framework
- **Hono**: Fast, lightweight web framework for Cloudflare Workers and Node.js

**API Features:**
- File upload and management via AWS S3
- RESTful API endpoints
- Cloudflare Workers compatibility

## Build and Deploy

Build the project for production:

```bash
npm run build
# or
bun run build
```

Preview the production build locally:

```bash
npm run preview
# or
bun run preview
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

### Additional Scripts

- **Lint code**: `npm run lint` or `bun lint` - Runs ESLint for code quality checks
