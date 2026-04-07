# Vishal Kesharwani - Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## Live

- Primary domain: [https://vishalkesharwani.in](https://vishalkesharwani.in)
- Fallback preview: [https://vishal-portfolio-flax.vercel.app/](https://vishal-portfolio-flax.vercel.app/)

## Features

- Responsive design
- Dark and light theme
- Smooth animations with Framer Motion
- Project, skills, achievements, and education sections
- Custom domain support

## Local Development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Deployment

This repo is set up for static export, so it can be deployed to GitHub Pages or Vercel.

For GitHub Pages:

1. Push the repository to `main`.
2. Enable GitHub Pages with GitHub Actions in the repository settings.
3. Point the domain `vishalkesharwani.in` to the published site.
4. Keep the `public/CNAME` file so the exported site carries the custom domain.

For Vercel:

1. Import the repo.
2. Add the custom domain `vishalkesharwani.in`.
3. Update DNS records as instructed by Vercel.

## Customization

- Update personal data in `lib/data.ts`
- Replace images in `public/`
- Adjust section content in `components/`

