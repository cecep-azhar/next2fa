import { sqliteTable, integer } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

// Tabel visits: menyimpan setiap kali halaman dilihat
export const visits = sqliteTable("visits", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`(unixepoch())`),
});

// Tabel copies: menyimpan setiap kali kode dicopy
export const copies = sqliteTable("copies", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`(unixepoch())`),
});

export type Visit = typeof visits.$inferSelect;
export type Copy = typeof copies.$inferSelect;
