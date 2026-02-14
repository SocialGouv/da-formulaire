"use client";

import { useState } from "react";
import Link from "next/link";
import DeleteDAButton from "./DeleteDAButton";

interface DAItem {
  id: string;
  nom: string;
  createdAt: string;
  updatedAt: string;
  authorGivenName?: string | null;
  authorUsualName?: string | null;
}

interface VersionEntry {
  id: string;
  versionNumber: number;
  name: string | null;
  createdAt: string;
  authorGivenName: string | null;
  authorUsualName: string | null;
}

interface AdminDATableProps {
  daList: DAItem[];
  versionCounts: Record<string, number>;
}

function formatAuthorName(item: {
  authorGivenName?: string | null;
  authorUsualName?: string | null;
}): string {
  if (item.authorGivenName || item.authorUsualName) {
    return `${item.authorGivenName || ""} ${item.authorUsualName || ""}`.trim();
  }
  return "\u2014";
}

export default function AdminDATable({
  daList,
  versionCounts,
}: AdminDATableProps) {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const [versionsData, setVersionsData] = useState<
    Record<string, VersionEntry[]>
  >({});
  const [loadingRows, setLoadingRows] = useState<Set<string>>(new Set());

  const toggleRow = async (daId: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(daId)) {
      newExpanded.delete(daId);
      setExpandedRows(newExpanded);
      return;
    }

    newExpanded.add(daId);
    setExpandedRows(newExpanded);

    if (!versionsData[daId]) {
      setLoadingRows((prev) => new Set(prev).add(daId));
      try {
        const res = await fetch(`/api/da/${daId}/versions`);
        if (res.ok) {
          const data = await res.json();
          setVersionsData((prev) => ({ ...prev, [daId]: data }));
        }
      } catch {
        // Silently fail
      } finally {
        setLoadingRows((prev) => {
          const next = new Set(prev);
          next.delete(daId);
          return next;
        });
      }
    }
  };

  return (
    <div className="fr-table fr-table--layout-fixed fr-table--no-caption">
      <div className="fr-table__content">
        <table>
          <caption>Liste des Documents d&apos;Architecture</caption>
          <thead>
            <tr>
              <th scope="col">Nom du projet</th>
              <th scope="col">Auteur</th>
              <th
                scope="col"
                style={{ textAlign: "right" }}
              >
                Date de création
              </th>
              <th
                scope="col"
                style={{ textAlign: "right" }}
              >
                Dernière modification
              </th>
              <th
                scope="col"
                style={{ textAlign: "right" }}
              ></th>
            </tr>
          </thead>
          <tbody>
            {daList.map((da) => {
              const isExpanded = expandedRows.has(da.id);
              const isLoading = loadingRows.has(da.id);
              const versions = versionsData[da.id];
              const count = versionCounts[da.id] || 0;

              return (
                <ExpandableRow
                  key={da.id}
                  da={da}
                  isExpanded={isExpanded}
                  isLoading={isLoading}
                  versions={versions}
                  versionCount={count}
                  onToggle={toggleRow}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ExpandableRow({
  da,
  isExpanded,
  isLoading,
  versions,
  versionCount,
  onToggle,
}: {
  da: DAItem;
  isExpanded: boolean;
  isLoading: boolean;
  versions: VersionEntry[] | undefined;
  versionCount: number;
  onToggle: (id: string) => void;
}) {
  return (
    <>
      {/* Ligne DA parent */}
      <tr>
        <td>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {versionCount > 0 ? (
              <span
                role="button"
                tabIndex={0}
                className={
                  isExpanded
                    ? "fr-icon-arrow-down-s-line"
                    : "fr-icon-arrow-right-s-line"
                }
                aria-expanded={isExpanded}
                aria-controls={`versions-${da.id}`}
                onClick={() => onToggle(da.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onToggle(da.id);
                  }
                }}
                title={`${versionCount} version(s)`}
                style={{ cursor: "pointer", fontSize: "1rem" }}
              />
            ) : (
              <span
                style={{
                  display: "inline-block",
                  width: "1rem",
                }}
              />
            )}
            <Link href={`/view/${da.id}`}>
              <strong>{da.nom}</strong>
            </Link>
          </div>
        </td>
        <td>{formatAuthorName(da)}</td>
        <td style={{ textAlign: "right" }}>
          {new Date(da.createdAt).toLocaleDateString("fr-FR")}
        </td>
        <td style={{ textAlign: "right" }}>
          {new Date(da.updatedAt).toLocaleDateString("fr-FR")}
        </td>
        <td style={{ textAlign: "right" }}>
          <div
            style={{
              display: "flex",
              gap: "0.25rem",
              justifyContent: "flex-end",
            }}
          >
            <Link
              href={`/da/${da.id}`}
              className="fr-btn fr-btn--sm fr-icon-edit-line"
              title="Éditer"
            />
            <Link
              href={`/api/export-pdf/${da.id}`}
              target="_blank"
              className="fr-btn fr-btn--sm fr-btn--secondary fr-icon-download-line"
              title="Télécharger en PDF"
            />
            <Link
              href={`/da/${da.id}/versions`}
              className="fr-btn fr-btn--sm fr-btn--tertiary fr-icon-git-branch-line"
              title="Versions"
            />
            <Link
              href={`/da/${da.id}/logs`}
              className="fr-btn fr-btn--sm fr-btn--tertiary fr-icon-time-line"
              title="Historique"
            />
            <Link
              href={`/da/${da.id}/access`}
              className="fr-btn fr-btn--sm fr-btn--tertiary fr-icon-team-line"
              title="Accès"
            />
            <DeleteDAButton daId={da.id} daNom={da.nom} />
          </div>
        </td>
      </tr>

      {/* Sous-lignes versions */}
      {isExpanded && (
        isLoading ? (
          <tr>
            <td
              colSpan={5}
              style={{
                background: "var(--background-alt-grey)",
                paddingLeft: "3rem",
              }}
            >
              <span className="fr-text--sm">Chargement des versions...</span>
            </td>
          </tr>
        ) : versions && versions.length > 0 ? (
          versions.map((v) => (
            <tr
              key={v.id}
              style={{ background: "var(--background-alt-grey)" }}
            >
              <td style={{ paddingLeft: "3rem" }}>
                <Link
                  href={`/view/${da.id}/versions/${v.id}`}
                  className="fr-text--sm"
                >
                  v{v.versionNumber}
                  {v.name ? ` \u2014 ${v.name}` : ""}
                </Link>
              </td>
              <td>
                <span className="fr-text--sm">{formatAuthorName(v)}</span>
              </td>
              <td style={{ textAlign: "right" }}>
                <span className="fr-text--sm">
                  {new Date(v.createdAt).toLocaleString("fr-FR")}
                </span>
              </td>
              <td></td>
              <td style={{ textAlign: "right" }}>
                <Link
                  href={`/api/export-pdf/${da.id}/versions/${v.id}`}
                  target="_blank"
                  className="fr-btn fr-btn--sm fr-btn--secondary fr-icon-download-line"
                  title="Télécharger en PDF"
                />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan={5}
              style={{
                background: "var(--background-alt-grey)",
                paddingLeft: "3rem",
              }}
            >
              <span className="fr-text--sm fr-text--mention-grey">
                Aucune version enregistrée.
              </span>
            </td>
          </tr>
        )
      )}
    </>
  );
}
