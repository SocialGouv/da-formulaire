import { NextRequest, NextResponse } from "next/server";
import { renderToStream } from "@react-pdf/renderer";
import { createElement } from "react";
import { DADocument } from "../../pdf-template";
import { auth } from "@/auth";
import { checkFormAccess } from "@/lib/db/queries/forms";
import { getVersionById } from "@/lib/db/queries/versions";
import type { DAData } from "@/types/da.types";

/**
 * GET /api/export-pdf/[id]/versions/[versionId] — Export PDF d'une version
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; versionId: string }> },
) {
  try {
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

    const daData = version.data as DAData;

    const stream = await renderToStream(
      createElement(DADocument, { data: daData }) as any,
    );

    const projectName =
      daData.cadre1_ProjetActeurs?.nomDuProjet || "Document";
    const versionLabel = version.name || `v${version.versionNumber}`;

    return new NextResponse(stream as any, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="DA-${projectName}-${versionLabel}.pdf"`,
      },
    });
  } catch (error) {
    console.error("Erreur lors de la génération du PDF:", error);
    return NextResponse.json(
      { error: "Erreur lors de la génération du PDF" },
      { status: 500 },
    );
  }
}
