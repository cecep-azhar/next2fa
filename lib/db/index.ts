import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "@/lib/db/schema";

// Inisialisasi klien Turso/libsql
const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

if (!url) {
  console.warn("[DB] TURSO_DATABASE_URL tidak terdefinisi. Pastikan .env sudah diisi.");
}

export const client = createClient({
  url: url ?? "file:local.db", // fallback untuk dev lokal tanpa Turso
  authToken,
});

export const db = drizzle(client, { schema });
