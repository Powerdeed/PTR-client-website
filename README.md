# PTR Client Website

Public client website for PTR/PowerDeed.

The site renders company content from the backend API: homepage sections,
services, projects, testimonials, contact details, articles, and about-page
content. It also supports the newer asset-link format produced by the command
center and backend media-management flow.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Axios
- Font Awesome

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Run lint:

```bash
npm run lint
```

Build:

```bash
npm run build
```

Note: production builds use `next/font` Google Fonts. If the machine cannot
reach `fonts.googleapis.com`, the build can fail before application code is
compiled.

## Environment

The API client expects:

```txt
NEXT_PUBLIC_API_BASE_URL
```

Example:

```txt
NEXT_PUBLIC_API_BASE_URL=http://localhost:5500
```

The Axios client appends `/api/v1`.

## Asset Images

The backend/command center now store project and service images as asset-link
tuples:

```ts
type AssetLink = [assetId: string, fileName: string, fileUrl: string];
```

The public website still supports older dummy image keys while the site is being
migrated. Use the shared helpers in:

```txt
app/utils/asset-images.ts
```

Those helpers resolve either:

```ts
"solarPower"
```

or:

```ts
["asset-123", "before.jpg", "https://storage.googleapis.com/..."]
```

into a renderable image URL.

Remote Google Cloud Storage images are allowed in:

```txt
next.config.ts
```

## Important Areas

```txt
app/home
  Homepage rendering and homepage API integration.

app/projects
  Public project listing, top projects, and project detail panel.

app/services
  Public service listing.

app/contact
  Contact content and reach-us form.

app/utils/asset-images.ts
  Compatibility layer for old image keys and new asset-link tuples.

lib/api
  Axios instance, API request helper, and execution wrapper.
```

## Defensive Rendering Rules

- Treat project/service `images` as optional arrays.
- Use `getAssetImageSrc` instead of indexing `projectImages` directly.
- Keep a fallback image for missing or malformed image data.
- Normalize API results before setting state where possible.

