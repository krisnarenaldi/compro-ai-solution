import { createClient } from "@libsql/client";

export const db = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

export async function initDb() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id         INTEGER PRIMARY KEY AUTOINCREMENT,
      name       TEXT NOT NULL,
      company    TEXT,
      email      TEXT NOT NULL,
      problem    TEXT NOT NULL,
      budget     TEXT,
      created_at TEXT NOT NULL
    )
  `);
}
