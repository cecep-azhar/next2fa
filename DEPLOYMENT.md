# Deployment Guide

## Setup Turso Database

1. Pastikan tabel sudah dibuat di Turso database production:

```bash
# Generate migration files
npm run db:generate

# Push schema ke Turso (perlu confirm manual)
npm run db:push
```

Atau bisa manual via SQL:

```sql
CREATE TABLE `copies` (
  `id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  `created_at` integer DEFAULT (unixepoch())
);

CREATE TABLE `visits` (
  `id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  `created_at` integer DEFAULT (unixepoch())
);
```

## Deploy ke Vercel

1. Set environment variables di Vercel Project Settings:
   - `TURSO_DATABASE_URL`: URL Turso database (e.g., `libsql://xxx.turso.io`)
   - `TURSO_AUTH_TOKEN`: Authentication token dari Turso

2. Push code ke GitHub dan Vercel akan auto-deploy

3. Pastikan build berhasil (Next.js 15.5.6)

## Verifikasi

- Homepage: `https://your-domain.vercel.app`
- Test TOTP dengan query param: `?key=YOUR_SECRET` atau `?secret=YOUR_SECRET`
- Statistik API: `/api/stats`

## Notes

- `drizzle.config.ts` menggunakan dialect `turso` untuk production
- Suspense wrapper added untuk `useSearchParams()` 
- Build menghasilkan static page dengan dynamic API routes
