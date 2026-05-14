# Vestige App

Static Next.js site prepared for GitHub Pages deployment at:

```text
https://emperorkundis.github.io/snuffs/
```

## Local Development

```bash
npm install
npm run dev
```

Because the app uses the GitHub Pages base path, open:

```text
http://localhost:3000/snuffs
```

## Build

```bash
npm run build
```

The static export is written to `out/`.

## GitHub Pages Deploy

Deploy is configured in `.github/workflows/deploy.yml`.

1. Push to `main`.
2. In GitHub repository settings, set Pages source to **GitHub Actions**.
3. The workflow builds the app and deploys `out/` to GitHub Pages.
