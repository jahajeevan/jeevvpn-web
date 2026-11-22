# JeevVPN Web

Public website for JeevVPN — [jeevvpn.vercel.app](https://jeevvpn.vercel.app)

## Stack
- **Next.js 15** (static export)
- **TypeScript**
- **Tailwind CSS v3**
- **Framer Motion** (optional animations)

## Pages
| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/downloads` | Browser extension download + install guide |
| `/about` | Project introduction, privacy & infrastructure info |

## Development
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

## Deployment
Push to `main` → auto-deploys to Vercel.

Or manually:
```bash
npm run build
vercel deploy --prod
```

## Adding the extension ZIP
1. Build the browser extension and zip it.
2. Place the ZIP at `public/downloads/JeevVPN-extension.zip`.
3. Uncomment the download link in `src/app/downloads/page.tsx`.
