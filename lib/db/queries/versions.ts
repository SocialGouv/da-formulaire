import { db } from "@/lib/db";
import { versions, users } from "@/lib/db/schema";
import { eq, desc, sql, inArray } from "drizzle-orm";
import type { DAData } from "@/types/da.types";

/**
 * Crée une version nommée (version figée).
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
 * Liste les versions d'un DA (triées par date desc).
 * Inclut le nom de l'auteur via jointure.
 */
export async function getVersionsForForm(formId: string) {
  return db
    .select({
      id: versions.id,
      versionNumber: versions.versionNumber,
      name: versions.name,
      createdAt: versions.createdAt,
      createdBy: versions.createdBy,
      authorGivenName: users.givenName,
      authorUsualName: users.usualName,
    })
    .from(versions)
    .leftJoin(users, eq(versions.createdBy, users.id))
    .where(eq(versions.formId, formId))
    .orderBy(desc(versions.createdAt));
}

/**
 * Compte le nombre de versions par DA (batch).
 */
export async function getVersionCountsForForms(
  formIds: string[],
): Promise<Record<string, number>> {
  if (formIds.length === 0) return {};

  const results = await db
    .select({
      formId: versions.formId,
      count: sql<number>`count(*)::int`,
    })
    .from(versions)
    .where(inArray(versions.formId, formIds))
    .groupBy(versions.formId);

  return Object.fromEntries(results.map((r) => [r.formId, r.count]));
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
 * Supprime une version.
 */
export async function deleteVersion(versionId: string) {
  await db.delete(versions).where(eq(versions.id, versionId));
}
