import { db } from "@/lib/db";
import { versions } from "@/lib/db/schema";
import { eq, desc, isNull, and, sql } from "drizzle-orm";
import type { DAData } from "@/types/da.types";

/**
 * Crée un snapshot nommé (version figée).
 */
export async function createNamedVersion(
  formId: string,
  name: string,
  data: DAData,
  userId: string,
) {
  // Calculer le prochain numéro de version
  const [lastVersion] = await db
    .select({ versionNumber: versions.versionNumber })
    .from(versions)
    .where(eq(versions.formId, formId))
    .orderBy(desc(versions.versionNumber))
    .limit(1);

  const nextNumber = (lastVersion?.versionNumber ?? 0) + 1;

  const [version] = await db
    .insert(versions)
    .values({
      formId,
      versionNumber: nextNumber,
      name,
      data,
      createdBy: userId,
    })
    .returning();

  return version;
}

/**
 * Crée une version auto-save (sans nom, throttlée : max 1 par heure).
 */
export async function createAutoSaveVersion(
  formId: string,
  data: DAData,
  userId: string,
) {
  // Vérifier s'il existe déjà une auto-save récente (< 1 heure)
  const [recentAutoSave] = await db
    .select({ id: versions.id })
    .from(versions)
    .where(
      and(
        eq(versions.formId, formId),
        isNull(versions.name),
        sql`${versions.createdAt} > now() - interval '1 hour'`,
      ),
    )
    .limit(1);

  if (recentAutoSave) {
    // Mettre à jour la version auto-save existante
    return;
  }

  // Calculer le prochain numéro de version
  const [lastVersion] = await db
    .select({ versionNumber: versions.versionNumber })
    .from(versions)
    .where(eq(versions.formId, formId))
    .orderBy(desc(versions.versionNumber))
    .limit(1);

  const nextNumber = (lastVersion?.versionNumber ?? 0) + 1;

  const [version] = await db
    .insert(versions)
    .values({
      formId,
      versionNumber: nextNumber,
      name: null,
      data,
      createdBy: userId,
    })
    .returning();

  return version;
}

/**
 * Liste les snapshots d'un DA (triés par date desc).
 */
export async function getVersionsForForm(formId: string) {
  return db
    .select({
      id: versions.id,
      versionNumber: versions.versionNumber,
      name: versions.name,
      createdAt: versions.createdAt,
      createdBy: versions.createdBy,
    })
    .from(versions)
    .where(eq(versions.formId, formId))
    .orderBy(desc(versions.createdAt));
}

/**
 * Récupère une version spécifique (avec données complètes).
 */
export async function getVersionById(versionId: string) {
  const [version] = await db
    .select()
    .from(versions)
    .where(eq(versions.id, versionId))
    .limit(1);
  return version ?? null;
}

/**
 * Supprime un snapshot.
 */
export async function deleteVersion(versionId: string) {
  await db.delete(versions).where(eq(versions.id, versionId));
}
