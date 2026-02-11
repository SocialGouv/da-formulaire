"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteDAButton({
  daId,
  daNom,
}: {
  daId: string;
  daNom: string;
}) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    const confirmed = confirm(
      `Êtes-vous sûr de vouloir supprimer le DA "${daNom}" ?\n\nCette action est irréversible et supprimera toutes les versions et les accès associés.`,
    );
    if (!confirmed) return;

    setIsDeleting(true);
    try {
      const response = await fetch(`/api/da/${daId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const data = await response.json();
        alert(data.error || "Erreur lors de la suppression");
        return;
      }

      router.refresh();
    } catch {
      alert("Erreur réseau lors de la suppression");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button
      type="button"
      className="fr-btn fr-btn--sm fr-btn--tertiary"
      onClick={handleDelete}
      disabled={isDeleting}
      title={`Supprimer ${daNom}`}
    >
      <span className="fr-icon-delete-line" aria-hidden="true"></span>
      {isDeleting ? "Suppression…" : "Supprimer"}
    </button>
  );
}
