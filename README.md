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

## Asset Gallery

The backend/command center store project and service media in the `gallery`
field as asset-link tuples:

```ts
type AssetLink = [
  assetId: string,
  fileName: string,
  fileUrl: string,
  assetType: "image" | "video" | "document" | "diagram",
];
```

Use the shared helpers in:

```txt
app/utils/asset-images.ts
```

Those helpers resolve:

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
  Helpers for gallery asset-link tuples and featured image links.

lib/api
  Axios instance, API request helper, and execution wrapper.
```

## Defensive Rendering Rules

- Treat project/service `gallery` as the media array.
- Use `getAssetImageSrc` for gallery and featured image rendering.
