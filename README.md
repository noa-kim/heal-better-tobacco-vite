# Heal Better Tobacco Vite

This project uses [Vite](https://vitejs.dev/) with React. The production build is generated in the `dist/` directory, which is not committed to version control.

## Development

```bash
npm install
npm run dev
```

## Build and Deploy

Run the build command to create the `dist/` directory:

```bash
npm run build
```

Deployment to GitHub Pages can be automated using the provided GitHub Actions workflow. It installs dependencies, builds the project and publishes the contents of `dist/` to the `gh-pages` branch.

To trigger the workflow manually, push changes to the `main` branch.
