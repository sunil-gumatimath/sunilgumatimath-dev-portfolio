# 🚀 Sunil Gumatimath - Portfolio

A modern, responsive portfolio website showcasing my work as a full-stack developer. Built with cutting-edge technologies including React 19, TypeScript, and TailwindCSS V4, featuring a clean design with ShadCN UI components and robust backend integration.

## ✨ Features

- **Modern Tech Stack**: React 19, TypeScript, TailwindCSS V4
- **Responsive Design**: Mobile-first approach with beautiful UI components
- **Backend Integration**: AWS S3 for file management, Express & Hono APIs
- **Performance Optimized**: Fast loading with Vite build tool
- **Developer Experience**: Hot reload, ESLint, and comprehensive tooling
- **Cloud Ready**: Configured for deployment on various platforms

## 🛠️ Technologies Used

**Frontend:**
- React 19 - Latest React with concurrent features
- TypeScript - Type-safe JavaScript
- TailwindCSS V4 - Utility-first CSS framework
- ShadCN UI - Modern component library
- Lucide React - Beautiful icons
- Vite - Lightning-fast build tool

**Backend & Tools:**
- AWS S3 - File storage and management
- Express.js - Node.js web framework
- Hono - Fast web framework for Cloudflare Workers
- ESLint - Code quality and linting

## 🚀 Getting Started

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

## 📁 Project Structure

```
sunil-portfolio/
├── public/                 # Static assets
│   ├── favicon.png        # Site favicon
│   └── vite.svg          # Vite logo
├── src/
│   ├── components/       # React components
│   │   └── ui/          # ShadCN UI components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── backend/         # Backend API code
│   │   └── api.ts       # AWS S3 and API logic
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # App entry point
│   └── index.css        # Global styles and Tailwind config
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── components.json      # ShadCN UI configuration
└── package.json         # Dependencies and scripts
```

## 🚀 Deployment

This portfolio is optimized for deployment on various platforms:

### Static Hosting (Recommended)
- **Vercel** - Zero configuration deployment
- **Netlify** - Git-based deployments with custom domains
- **GitHub Pages** - Free hosting for public repositories

### Build Commands
```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Environment Setup
For production deployment, consider setting up:
- AWS S3 bucket for file uploads
- Environment variables for API keys
- Custom domain configuration

## 🔮 Future Enhancements

- **Content Management**: Add CMS integration for easy content updates
- **Blog Section**: Personal blog with markdown support
- **Dark Mode**: Theme toggle with system preference detection
- **Internationalization**: Multi-language support
- **Analytics**: Integration with Google Analytics or similar
- **SEO Optimization**: Meta tags and structured data
- **Performance**: Image optimization and lazy loading

## 📞 Contact

**Sunil Gumatimath** - Full Stack Developer

- 💼 [LinkedIn](https://linkedin.com/in/your-profile)
- 🐙 [GitHub](https://github.com/sunil-gumatimath)
- 📧 [Email](mailto:your.email@example.com)
- 🌐 [Portfolio Website](https://your-portfolio-url.com)

---

⭐ **Star this repository if you find it helpful!**

Built with ❤️ using React 19, TypeScript, and modern web technologies.
