import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { checkFormAccess, updateFormData } from "@/lib/db/queries/forms";
import { getVersionById } from "@/lib/db/queries/versions";
import type { DAData } from "@/types/da.types";

/**
 * POST /api/da/[id]/versions/[versionId]/restore — Restaurer un snapshot
 * Remplace les données du DA par celles du snapshot.
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; versionId: string }> },
) {
  const session = await auth();
  if (!session?.user?.dbUserId) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  if (!session.user.isAdmin) {
    return NextResponse.json(
      { error: "Seuls les administrateurs peuvent restaurer un snapshot" },
      { status: 403 },
    );
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

  // Restaurer : écraser forms.data avec les données du snapshot (sans optimistic locking)
  const updated = await updateFormData(id, version.data as DAData);

  if (!updated) {
    return NextResponse.json(
      { error: "Erreur lors de la restauration" },
      { status: 500 },
    );
  }

  return NextResponse.json({
    id: updated.id,
    nom: updated.nom,
    updatedAt: updated.updatedAt,
  });
}
