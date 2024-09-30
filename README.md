## NY Times Clone Boilerplate

A scalable, modular, and highly customizable boilerplate for building high-traffic news websites, inspired by the New York Times. The project is built using Next.js 14, TypeScript, TailwindCSS, and follows best practices for modular architecture and clean separation of concerns. It’s optimized for AWS hosting and can easily integrate Redis, Elasticsearch, and PostgreSQL with TypeORM for managing user subscriptions and content.

## Getting Started

First, clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/ny-times-clone-boilerplate.git
cd ny-times-clone-boilerplate
npm install

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Project Structure

├── src
│   ├── app                # Main application files (layout, pages)
│   │   ├── fonts          # Custom fonts (GeistVF, GeistMonoVF)
│   │   ├── globals.css    # Global styles using TailwindCSS
│   │   ├── layout.tsx     # Root layout with fonts and global styles
│   │   └── page.tsx       # Main page importing HomePage component
│   ├── components         # Shared components (e.g., Header)
│   │   └── Header.tsx
│   └── webpages           # Page components (e.g., HomePage)
│       └── HomePage.tsx
├── public                 # Public static files (e.g., favicon)
├── styles                 # Custom global styles (optional)
├── .gitignore             # Git ignore configuration
├── next.config.mjs        # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file

## Features

- Next.js 14: Leverages the latest version of Next.js for SSR and static generation.
- TypeScript: Typed JavaScript to ensure maintainability and scalability.
- TailwindCSS: Custom theme using Tailwind for fast, utility-first styling.
- Local Fonts: Optimized with next/font/local, using GeistVF and GeistMonoVF from Vercel.
- Hexagonal Architecture: Implements a clean separation of concerns with core domain logic isolated from external systems like databases and APIs.
- API Routes: Modular API routes for users and articles.
- Responsive Design: Tailwind’s responsive utilities ensure the design works across different devices.
- Alias Import Support: Uses @/ alias to simplify imports throughout the project.

## TailwindCSS Customization

We’ve customized TailwindCSS for a clean, scalable design. The tailwind.config.ts includes:
- Custom Colors: Extended with primary, secondary, background, and text colors.
- Responsive Breakpoints: Supporting up to 4k screens.
- Font Configuration: Custom fonts for sans and mono.


## Font Configuration

We use next/font/local to load custom fonts from the src/app/fonts/ directory.

## Additional Features Planned
- Hexagonal Architecture: Modular structure for scalable and maintainable code.
- Newspaper Website Component: CSR and SSR optimizations for content loading.
- SEO Optimization: Built-in SEO best practices.
- Redis: For caching high-traffic pages and data.
- Elasticsearch: For efficient content indexing and search functionality.
- PostgreSQL with TypeORM: For managing user subscriptions and storing content.
- Deployment on AWS: Optimized for high-traffic and scalability on AWS services.

## License

This project is licensed under the terms of the MIT license.