"use client";

import { useState, useEffect } from "react";

interface LogEntry {
  id: string;
  createdAt: string;
  userName: string | null;
  userGivenName: string | null;
  userEmail: string | null;
}

interface EditLogViewerProps {
  formId: string;
}

export default function EditLogViewer({ formId }: EditLogViewerProps) {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const loadLogs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/da/${formId}/logs`);
      if (response.ok) {
        const data = await response.json();
        setLogs(data);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des logs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadLogs();
    }
  }, [isOpen, formId]);

  const formatUserName = (log: LogEntry) => {
    if (log.userGivenName || log.userName) {
      return `${log.userGivenName || ""} ${log.userName || ""}`.trim();
    }
    return log.userEmail || "Utilisateur inconnu";
  };

  return (
    <div>
      <button
        className="fr-btn fr-btn--tertiary fr-btn--sm fr-btn--icon-left fr-icon-time-line"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        Historique
      </button>

      {isOpen && (
        <div
          className="fr-mt-2w fr-p-3w"
          style={{
            border: "1px solid var(--border-default-grey)",
            borderRadius: "0.25rem",
          }}
        >
          <h3 className="fr-h6 fr-mb-2w">Historique des modifications</h3>

          {isLoading ? (
            <p>Chargement...</p>
          ) : logs.length > 0 ? (
            <div style={{ maxHeight: "300px", overflowY: "auto" }}>
              {logs.map((log) => (
                <div
                  key={log.id}
                  className="fr-p-1w fr-mb-1v"
                  style={{
                    borderBottom: "1px solid var(--border-default-grey)",
                  }}
                >
                  <span className="fr-text--xs">
                    <strong>{formatUserName(log)}</strong>
                    {" — "}
                    {new Date(log.createdAt).toLocaleString("fr-FR")}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="fr-text--sm fr-text--mention-grey">
              Aucune modification enregistrée.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
