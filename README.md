# My Portfolio

This project is a personal portfolio site built with **React** and **Vite**. It showcases my background, skills and projects through a set of simple pages.
Routing between pages is managed with **React Router DOM** for a smooth, single-page application experience.

## Pages

- **Home** – Landing page with a short introduction.
- **About** – Information about my professional background and interests.
- **Resume** – A downloadable PDF of my resume.
- **Projects** – Highlights of selected work with images and descriptions.
- **Contact** – Formspree-powered contact form to reach me directly.

## Common Commands

```bash
npm install      # install dependencies
npm run dev      # start a local development server
npm run lint     # run ESLint on the project
npm run build    # create a production build
npm run preview  # preview the built app locally
```

## Directory Structure

- `src/` – React components, styles and entry point.
- `public/` – static assets including images and resume.pdf.
- `index.html` – main HTML file loaded by Vite.
- `vite.config.js` – Vite configuration.

The contact page posts form submissions to Formspree so messages can be delivered to my email without a custom backend.


