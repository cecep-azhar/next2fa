# 2FA Generator — Next.js 15 + Turso

Aplikasi generator TOTP 6-digit dengan UI elegan, dark mode, statistik real-time (Drizzle + Turso), dan fitur share link.

## Fitur

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- Dark mode (next-themes)
- Drizzle ORM + Turso (@libsql/client)
- TOTP (otplib) + countdown 30 detik dengan progress circle
- Statistik: Dilihat dan Kode dicopy (real-time via API)

## Setup

1. Salin env

   ```powershell
   Copy-Item .env.example .env
   ```

   Isi nilai:

   ```env
   TURSO_DATABASE_URL=
   TURSO_AUTH_TOKEN=
   ```

2. Install dependencies

   ```powershell
   npm install
   ```

3. Generate dan migrate Drizzle

   ```powershell
   npx drizzle-kit generate
   npx drizzle-kit migrate
   ```

4. Jalankan dev server

   ```powershell
   npm run dev
   ```

Buka <http://localhost:3000>

## Catatan

- Share link prod default: <https://2fa.fath.my.id/?secret=...>
- Saat di localhost, tombol share otomatis memakai origin lokal.
- Jika tidak mengisi Turso, fallback SQLite file: `file:local.db` (untuk dev/testing lokal).

## Deploy

- Vercel + Turso: set env `TURSO_DATABASE_URL` dan `TURSO_AUTH_TOKEN` di Project Settings.
- Jalankan migrasi di lokal lalu deploy, atau gunakan Turso migrations sesuai alur CI Anda.

## Lisensi

Proyek ini dibuat untuk kebutuhan demo/pribadi. Gunakan seperlunya.

