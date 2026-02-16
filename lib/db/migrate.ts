import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import path from "path";
import postgres from "postgres";

// Admins par défaut, créés à chaque démarrage s'ils n'existent pas encore.
// Quand ils se connecteront via ProConnect, findOrCreateUser matchera par
// proconnect_sub — on utilise un placeholder en attendant.
const DEFAULT_ADMINS = [
  { email: "igor.renquin@sg.social.gouv.fr", givenName: "Igor", usualName: "Renquin" },
  { email: "remi.fresko@sg.social.gouv.fr", givenName: "Rémi", usualName: "Fresko" },
];

export async function runMigrations() {
  const client = postgres(process.env.DATABASE_URL!, { max: 1 });
  const db = drizzle(client);

  await migrate(db, { migrationsFolder: path.join(process.cwd(), "drizzle") });
  console.log("Drizzle migrations applied successfully");

  // Seed des admins par défaut
  for (const admin of DEFAULT_ADMINS) {
    await client`
      INSERT INTO users (id, proconnect_sub, email, given_name, usual_name, is_admin)
      VALUES (gen_random_uuid(), ${"seed-" + admin.email}, ${admin.email}, ${admin.givenName}, ${admin.usualName}, true)
      ON CONFLICT (proconnect_sub) DO UPDATE SET is_admin = true
    `;
  }
  // Aussi promouvoir admin si le user existe déjà (connecté via ProConnect avant le seed)
  for (const admin of DEFAULT_ADMINS) {
    await client`
      UPDATE users SET is_admin = true WHERE email = ${admin.email}
    `;
  }
  console.log("Default admins seeded successfully");

  await client.end();
}
