# Client

Modern React SPA powered by Vite. This frontend connects to the Express API to manage todos with filtering, stats, and inline editing.

## Features

- Responsive layout with task filters and stats
- Create, edit, toggle, and delete todos
- Form validation with inline error messaging
- Configurable API base URL via environment variable

## Getting Started

```bash
npm install
npm run dev
```

Visit the printed localhost URL (default `http://localhost:5173`).

### Building for Production

```bash
npm run build
```

## Environment Variables

Create a `.env` file in the `client/` directory:

```
VITE_API_URL=http://localhost:4000/api
```

Point `VITE_API_URL` at the running Express API if it differs from the default.
