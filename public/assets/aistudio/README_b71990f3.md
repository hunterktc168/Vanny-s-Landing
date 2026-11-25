# Vanny’s Peaceful Guesthouse

Static, mobile-first Astro landing page. No backend, database, booking engine, payment system, CMS, analytics, cookies, or third-party scripts.

## Setup

```sh
npm install
npm run check
npm run build
npm run dev
```

## Before launch

- Replace `SITE_URL` in `src/data/site.ts` with the final canonical deployment URL.
- Replace the image placeholders under `public/images/` with approved guesthouse photos and a verified map image. Current image references are placeholders; no photos have been supplied.
- Confirm all displayed business details and contact channels before publication.
- Do not publish or import `src/data/qrPresets.ts`. It contains private WiFi credentials and is for internal QR Studio use only.
- Verify the QR preset isolation with `grep -R "qrPresets" src/pages src/components src/layouts`; expected output is empty.
- The vCard surname `Hou` is an unverified assumption inferred from the email local-part. Confirm before generating or distributing that contact QR.

## Deploy

Build output is in `dist/`. Deploy that directory as a static site on Cloudflare Pages or Vercel. Configure the build command as `npm run build` and output directory as `dist`.
