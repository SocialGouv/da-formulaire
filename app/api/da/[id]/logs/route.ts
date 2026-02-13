import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { checkFormAccess } from "@/lib/db/queries/forms";
import { getEditLogsForForm } from "@/lib/db/queries/editLogs";

/**
 * GET /api/da/[id]/logs — Liste des logs d'édition d'un DA
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await auth();
  if (!session?.user?.dbUserId) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  const { id } = await params;

  const access = await checkFormAccess(
    id,
    session.user.dbUserId,
    session.user.isAdmin,
  );
  if (!access) {
    return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
  }

  const logs = await getEditLogsForForm(id);

  return NextResponse.json(logs);
}
