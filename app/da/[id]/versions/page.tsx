"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface VersionEntry {
  id: string;
  versionNumber: number;
  name: string;
  createdAt: string;
}

export default function VersionsPage() {
  const params = useParams();
  const router = useRouter();
  const formId = params.id as string;

  const [daNom, setDaNom] = useState<string>("");
  const [versions, setVersions] = useState<VersionEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newVersionName, setNewVersionName] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      try {
        const [daRes, versionsRes] = await Promise.all([
          fetch(`/api/da/${formId}`),
          fetch(`/api/da/${formId}/versions`),
        ]);
        if (daRes.ok) {
          const da = await daRes.json();
          setDaNom(da.nom);
        }
        if (versionsRes.ok) {
          const data = await versionsRes.json();
          setVersions(data);
        }
      } catch (error) {
        console.error("Erreur lors du chargement:", error);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, [formId]);

  const handleCreate = async () => {
    if (!newVersionName.trim()) return;

    setIsCreating(true);
    try {
      const response = await fetch(`/api/da/${formId}/versions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newVersionName.trim() }),
      });

      if (response.ok) {
        setNewVersionName("");
        const versionsRes = await fetch(`/api/da/${formId}/versions`);
        if (versionsRes.ok) {
          setVersions(await versionsRes.json());
        }
      } else {
        const data = await response.json();
        alert(data.error || "Erreur lors de la création de la version");
      }
    } catch {
      alert("Erreur lors de la création de la version");
    } finally {
      setIsCreating(false);
    }
  };

  const handleRestore = async (versionId: string, versionName: string) => {
    if (
      !confirm(
        `Restaurer la version "${versionName}" ?\n\nLes données actuelles du DA seront remplacées par celles de cette version.`,
      )
    ) {
      return;
    }

    try {
      const response = await fetch(
        `/api/da/${formId}/versions/${versionId}/restore`,
        { method: "POST" },
      );
      if (response.ok) {
        alert("Version restaurée avec succès.");
        router.refresh();
      } else {
        const data = await response.json();
        alert(data.error || "Erreur lors de la restauration");
      }
    } catch {
      alert("Erreur lors de la restauration de la version");
    }
  };

  const handleDelete = async (versionId: string, versionName: string) => {
    if (
      !confirm(
        `Supprimer la version "${versionName}" ?\n\nCette action est irréversible.`,
      )
    ) {
      return;
    }

    try {
      const response = await fetch(
        `/api/da/${formId}/versions/${versionId}`,
        { method: "DELETE" },
      );
      if (response.ok) {
        setVersions((prev) => prev.filter((v) => v.id !== versionId));
      } else {
        const data = await response.json();
        alert(data.error || "Erreur lors de la suppression");
      }
    } catch {
      alert("Erreur lors de la suppression de la version");
    }
  };

  return (
    <main className="fr-container fr-my-6w">
      <div className="fr-grid-row fr-grid-row--center">
        <div className="fr-col-12 fr-col-md-10 fr-col-lg-8">
          <Link href="/" className="fr-link fr-icon-arrow-left-line fr-link--icon-left fr-mb-3w" style={{ display: "inline-block" }}>
            Retour à la liste des DA
          </Link>

          <h1 className="fr-h2 fr-mb-1w">Versions</h1>
          {daNom && (
            <p className="fr-text--lg fr-text--bold fr-mb-4w">{daNom}</p>
          )}

          {/* Formulaire de création */}
          <div
            className="fr-mb-4w fr-p-3w"
            style={{
              border: "1px solid var(--border-default-grey)",
              borderRadius: "0.25rem",
              background: "var(--background-alt-grey)",
            }}
          >
            <h2 className="fr-h6 fr-mb-2w">Créer une version</h2>
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "flex-end",
              }}
            >
              <div className="fr-input-group" style={{ flex: 1, marginBottom: 0 }}>
                <label className="fr-label" htmlFor="version-name">
                  Nom de la version
                </label>
                <input
                  className="fr-input"
                  type="text"
                  id="version-name"
                  placeholder="Ex: V1 - Validation comité"
                  value={newVersionName}
                  onChange={(e) => setNewVersionName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleCreate();
                  }}
                />
              </div>
              <button
                className="fr-btn"
                type="button"
                onClick={handleCreate}
                disabled={!newVersionName.trim() || isCreating}
              >
                {isCreating ? "Création..." : "Créer"}
              </button>
            </div>
          </div>

          {/* Liste des versions */}
          {isLoading ? (
            <p>Chargement...</p>
          ) : versions.length > 0 ? (
            <div>
              <h2 className="fr-h6 fr-mb-2w">
                Versions existantes ({versions.length})
              </h2>
              {versions.map((version) => (
                <div
                  key={version.id}
                  className="fr-p-3w fr-mb-2w"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "var(--background-alt-blue-france)",
                    borderRadius: "0.25rem",
                  }}
                >
                  <div>
                    <span className="fr-text--bold">{version.name}</span>
                    <br />
                    <span className="fr-text--xs fr-text--mention-grey">
                      v{version.versionNumber} —{" "}
                      {new Date(version.createdAt).toLocaleString("fr-FR")}
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button
                      className="fr-btn fr-btn--sm fr-btn--tertiary"
                      type="button"
                      onClick={() =>
                        handleRestore(version.id, version.name)
                      }
                    >
                      <span
                        className="fr-icon-refresh-line"
                        aria-hidden="true"
                      ></span>
                      Restaurer
                    </button>
                    <button
                      className="fr-btn fr-btn--sm fr-btn--tertiary-no-outline"
                      type="button"
                      onClick={() =>
                        handleDelete(version.id, version.name)
                      }
                      title="Supprimer cette version"
                    >
                      <span
                        className="fr-icon-delete-line"
                        aria-hidden="true"
                      ></span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="fr-callout fr-callout--info">
              <p className="fr-callout__text">
                Aucune version. Créez-en une pour figer une version du document.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
