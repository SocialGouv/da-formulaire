import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { checkFormAccess } from "@/lib/db/queries/forms";
import { getVersionById, deleteVersion } from "@/lib/db/queries/versions";

/**
 * GET /api/da/[id]/versions/[versionId] — Récupérer les données d'une version
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; versionId: string }> },
) {
  const session = await auth();
  if (!session?.user?.dbUserId) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  const { id, versionId } = await params;

  const access = await checkFormAccess(
    id,
    session.user.dbUserId,
    session.user.isAdmin,
  );
  if (!access) {
    return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
  }

  const version = await getVersionById(versionId);
  if (!version || version.formId !== id) {
    return NextResponse.json(
      { error: "Version introuvable" },
      { status: 404 },
    );
  }

  return NextResponse.json(version);
}

/**
 * DELETE /api/da/[id]/versions/[versionId] — Supprimer un snapshot (admin uniquement)
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; versionId: string }> },
) {
  const session = await auth();
  if (!session?.user?.dbUserId) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  if (!session.user.isAdmin) {
    return NextResponse.json(
      { error: "Seuls les administrateurs peuvent supprimer un snapshot" },
      { status: 403 },
    );
  }

  const { id, versionId } = await params;

  const version = await getVersionById(versionId);
  if (!version || version.formId !== id) {
    return NextResponse.json(
      { error: "Version introuvable" },
      { status: 404 },
    );
  }

  await deleteVersion(versionId);

  return NextResponse.json({ success: true });
}
