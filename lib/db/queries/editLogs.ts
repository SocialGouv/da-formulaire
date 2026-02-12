import { db } from "@/lib/db";
import { editLogs, users } from "@/lib/db/schema";
import { eq, desc } from "drizzle-orm";

/**
 * Crée une entrée de log d'édition (léger, sans données JSON).
 */
export async function createEditLog(formId: string, userId: string) {
  const [log] = await db
    .insert(editLogs)
    .values({
      formId,
      userId,
    })
    .returning();
  return log;
}

/**
 * Liste les logs d'édition d'un DA (les 50 derniers).
 * Inclut le nom de l'utilisateur via jointure.
 */
export async function getEditLogsForForm(formId: string, limit = 50) {
  return db
    .select({
      id: editLogs.id,
      createdAt: editLogs.createdAt,
      userName: users.usualName,
      userGivenName: users.givenName,
      userEmail: users.email,
    })
    .from(editLogs)
    .leftJoin(users, eq(editLogs.userId, users.id))
    .where(eq(editLogs.formId, formId))
    .orderBy(desc(editLogs.createdAt))
    .limit(limit);
}
