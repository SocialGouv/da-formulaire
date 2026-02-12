"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface SnapshotEntry {
  id: string;
  versionNumber: number;
  name: string;
  createdAt: string;
}

interface SnapshotManagerProps {
  formId: string;
}

export default function SnapshotManager({ formId }: SnapshotManagerProps) {
  const router = useRouter();
  const [snapshots, setSnapshots] = useState<SnapshotEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [newSnapshotName, setNewSnapshotName] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const loadSnapshots = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/da/${formId}/versions`);
      if (response.ok) {
        const data = await response.json();
        setSnapshots(data);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des snapshots:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadSnapshots();
    }
  }, [isOpen, formId]);

  const handleCreate = async () => {
    if (!newSnapshotName.trim()) return;

    setIsCreating(true);
    try {
      const response = await fetch(`/api/da/${formId}/versions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newSnapshotName.trim() }),
      });

      if (response.ok) {
        setNewSnapshotName("");
        await loadSnapshots();
      } else {
        const data = await response.json();
        alert(data.error || "Erreur lors de la création du snapshot");
      }
    } catch {
      alert("Erreur lors de la création du snapshot");
    } finally {
      setIsCreating(false);
    }
  };

  const handleRestore = async (snapshotId: string, snapshotName: string) => {
    if (
      !confirm(
        `Restaurer le snapshot "${snapshotName}" ?\n\nLes données actuelles du DA seront remplacées par celles de ce snapshot.`,
      )
    ) {
      return;
    }

    try {
      const response = await fetch(
        `/api/da/${formId}/versions/${snapshotId}/restore`,
        { method: "POST" },
      );
      if (response.ok) {
        alert("Snapshot restauré avec succès.");
        router.refresh();
      } else {
        const data = await response.json();
        alert(data.error || "Erreur lors de la restauration");
      }
    } catch {
      alert("Erreur lors de la restauration du snapshot");
    }
  };

  const handleDelete = async (snapshotId: string, snapshotName: string) => {
    if (
      !confirm(
        `Supprimer le snapshot "${snapshotName}" ?\n\nCette action est irréversible.`,
      )
    ) {
      return;
    }

    try {
      const response = await fetch(
        `/api/da/${formId}/versions/${snapshotId}`,
        { method: "DELETE" },
      );
      if (response.ok) {
        await loadSnapshots();
      } else {
        const data = await response.json();
        alert(data.error || "Erreur lors de la suppression");
      }
    } catch {
      alert("Erreur lors de la suppression du snapshot");
    }
  };

  return (
    <div>
      <button
        className="fr-btn fr-btn--tertiary fr-btn--sm fr-btn--icon-left fr-icon-git-branch-line"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        Snapshots
      </button>

      {isOpen && (
        <div
          className="fr-mt-2w fr-p-3w"
          style={{
            border: "1px solid var(--border-default-grey)",
            borderRadius: "0.25rem",
          }}
        >
          <h3 className="fr-h6 fr-mb-2w">Snapshots</h3>

          {/* Formulaire de création */}
          <div
            className="fr-mb-3w"
            style={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "flex-end",
            }}
          >
            <div className="fr-input-group" style={{ flex: 1 }}>
              <label className="fr-label" htmlFor={`snapshot-name-${formId}`}>
                Créer un snapshot
              </label>
              <input
                className="fr-input"
                type="text"
                id={`snapshot-name-${formId}`}
                placeholder="Ex: V1 - Validation comité"
                value={newSnapshotName}
                onChange={(e) => setNewSnapshotName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleCreate();
                }}
              />
            </div>
            <button
              className="fr-btn fr-btn--sm"
              type="button"
              onClick={handleCreate}
              disabled={!newSnapshotName.trim() || isCreating}
            >
              {isCreating ? "Création..." : "Créer"}
            </button>
          </div>

          {isLoading ? (
            <p>Chargement...</p>
          ) : snapshots.length > 0 ? (
            <div>
              {snapshots.map((snapshot) => (
                <div
                  key={snapshot.id}
                  className="fr-p-2w fr-mb-1w"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "var(--background-alt-blue-france)",
                    borderRadius: "0.25rem",
                  }}
                >
                  <div>
                    <span className="fr-text--bold">{snapshot.name}</span>
                    <br />
                    <span className="fr-text--xs fr-text--mention-grey">
                      v{snapshot.versionNumber} —{" "}
                      {new Date(snapshot.createdAt).toLocaleString("fr-FR")}
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "0.25rem" }}>
                    <button
                      className="fr-btn fr-btn--sm fr-btn--tertiary"
                      type="button"
                      onClick={() => handleRestore(snapshot.id, snapshot.name)}
                      title="Restaurer ce snapshot"
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
                      onClick={() => handleDelete(snapshot.id, snapshot.name)}
                      title="Supprimer ce snapshot"
                    >
                      <span
                        className="fr-icon-delete-line fr-icon--sm"
                        aria-hidden="true"
                      ></span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="fr-text--sm fr-text--mention-grey">
              Aucun snapshot. Créez-en un pour figer une version du document.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
