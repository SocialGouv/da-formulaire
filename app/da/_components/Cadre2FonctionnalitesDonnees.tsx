import type { DAData } from "@/types/da.types";
import EditableTable from "./EditableTable";

interface CadreProps {
  daData: DAData;
  setDAData: (data: DAData) => void;
}

const CHECKBOX_COLUMNS_MREP = [
  { key: "M" as const, label: "M", type: "checkbox" as const, headerClass: "fr-th--red", totalClass: "fr-td--red" },
  { key: "R" as const, label: "R", type: "checkbox" as const, headerClass: "fr-th--orange", totalClass: "fr-td--orange" },
  { key: "E" as const, label: "E", type: "checkbox" as const, headerClass: "fr-th--yellow", totalClass: "fr-td--yellow" },
  { key: "P" as const, label: "P", type: "checkbox" as const, headerClass: "fr-th--green", totalClass: "fr-td--green" },
];

export default function Cadre2FonctionnalitesDonnees({ daData, setDAData }: CadreProps) {
  return (
    <div>
      {/* Fonctionnalités du SI applicatif */}
      <h3 className="fr-h3">Fonctionnalités du SI applicatif</h3>
      <p className="fr-text--sm">M = Ministère, R = Réseau Interministériel, E = Extranet, P = Public</p>
      <EditableTable
        caption="Fonctionnalités du SI applicatif"
        textColumns={[{ key: "fonctionnalite", label: "Fonctionnalité" }]}
        columns={CHECKBOX_COLUMNS_MREP}
        rows={daData.cadre2_FonctionnalitesDonnees.fonctionnalitesDuSIApplicatif}
        totalLabel="Total fonctionnalités"
        addLabel="Ajouter une fonctionnalité"
        defaultRow={{ fonctionnalite: "", M: false, R: false, E: false, P: false }}
        onRowsChange={(rows) =>
          setDAData({
            ...daData,
            cadre2_FonctionnalitesDonnees: {
              ...daData.cadre2_FonctionnalitesDonnees,
              fonctionnalitesDuSIApplicatif: rows,
            },
          })
        }
      />

      {/* Données métier du SI Applicatif */}
      <h3 className="fr-h3 fr-mt-6w">Données métier du SI Applicatif</h3>
      <EditableTable
        caption="Données métier du SI Applicatif"
        textColumns={[{ key: "donnee", label: "Donnée" }]}
        columns={CHECKBOX_COLUMNS_MREP}
        rows={daData.cadre2_FonctionnalitesDonnees.donneesMetierDuSIApplicatif}
        addLabel="Ajouter une donnée"
        defaultRow={{ donnee: "", M: false, R: false, E: false, P: false }}
        onRowsChange={(rows) =>
          setDAData({
            ...daData,
            cadre2_FonctionnalitesDonnees: {
              ...daData.cadre2_FonctionnalitesDonnees,
              donneesMetierDuSIApplicatif: rows,
            },
          })
        }
      />

      {/* Fichiers métiers du SI applicatif */}
      <h3 className="fr-h3 fr-mt-6w">Fichiers métiers du SI applicatif</h3>
      <EditableTable
        caption="Fichiers métiers du SI applicatif"
        textColumns={[{ key: "fichier", label: "Fichier" }]}
        columns={CHECKBOX_COLUMNS_MREP}
        rows={daData.cadre2_FonctionnalitesDonnees.fichiersMetiersDuSIApplicatif}
        addLabel="Ajouter un fichier"
        defaultRow={{ fichier: "", M: false, R: false, E: false, P: false }}
        onRowsChange={(rows) =>
          setDAData({
            ...daData,
            cadre2_FonctionnalitesDonnees: {
              ...daData.cadre2_FonctionnalitesDonnees,
              fichiersMetiersDuSIApplicatif: rows,
            },
          })
        }
      />

      {/* Référentiel données (hors SI) */}
      <h3 className="fr-h3 fr-mt-6w">Référentiel données (hors SI)</h3>
      <EditableTable
        caption="Référentiel données (hors SI)"
        textColumns={[
          { key: "referentiel", label: "Référentiel" },
          { key: "modeEchange", label: "Mode échange" },
        ]}
        columns={CHECKBOX_COLUMNS_MREP}
        rows={daData.cadre2_FonctionnalitesDonnees.referentielsDonneesHorsSI}
        addLabel="Ajouter un référentiel"
        defaultRow={{ referentiel: "", modeEchange: "", M: false, R: false, E: false, P: false }}
        onRowsChange={(rows) =>
          setDAData({
            ...daData,
            cadre2_FonctionnalitesDonnees: {
              ...daData.cadre2_FonctionnalitesDonnees,
              referentielsDonneesHorsSI: rows,
            },
          })
        }
      />

      {/* Sensibilité des données */}
      <h3 className="fr-h3 fr-mt-6w">Sensibilité des données dans le SI Applicatif</h3>
      <p className="fr-text--sm fr-mb-2w">Cocher les données concernées et compléter si manquantes</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', border: '1px solid #ddd' }}>
        {/* Colonne gauche - Très sensible */}
        <div>
          <div style={{ backgroundColor: '#ff0000', color: 'white', padding: '0.5rem', textAlign: 'center', fontWeight: 'bold' }}>
            Très sensible
          </div>
          <div style={{ padding: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {[
              { key: 'NIR', label: 'NIR' },
              { key: 'medicales', label: 'Médicales' },
              { key: 'viePrivee', label: 'Vie privée' },
              { key: 'justice', label: 'Justice' },
              { key: 'identite', label: 'Identité' },
              { key: 'biometrique', label: 'Biométrique' },
              { key: 'mecanismeFraude', label: 'Mécanisme fraude' },
              { key: 'faillesVulnerabilite', label: 'Architecture sécurité' },
              { key: 'patrimoine', label: 'Patrimoine' },
              { key: 'appartenanceSyndicale', label: 'Appartenance syndicale' },
            ].map(({ key, label }) => {
              const value = daData.cadre2_FonctionnalitesDonnees.sensibiliteDesDonnees[key as keyof typeof daData.cadre2_FonctionnalitesDonnees.sensibiliteDesDonnees];
              return (
                <div key={`tresSensible-${key}`} className="fr-checkbox-group">
                  <input
                    type="checkbox"
                    id={`tresSensible-${key}`}
                    checked={value === "Très sensible"}
                    onChange={(e) => {
                      const newValue = e.target.checked ? "Très sensible" : "";
                      setDAData({
                        ...daData,
                        cadre2_FonctionnalitesDonnees: {
                          ...daData.cadre2_FonctionnalitesDonnees,
                          sensibiliteDesDonnees: {
                            ...daData.cadre2_FonctionnalitesDonnees.sensibiliteDesDonnees,
                            [key]: newValue
                          }
                        }
                      });
                    }}
                  />
                  <label className="fr-label" htmlFor={`tresSensible-${key}`}>
                    {label}
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        {/* Colonne droite */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Sensible */}
          <div style={{ flex: 1 }}>
            <div style={{ backgroundColor: '#ffff99', padding: '0.5rem', textAlign: 'center', fontWeight: 'bold' }}>
              Sensible
            </div>
            <div style={{ padding: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {[
                { key: 'architectureTechnique', label: 'Architecture technique' },
                { key: 'organisationnel', label: 'Organisationnel' },
                { key: 'etatCivil', label: 'État civil' },
                { key: 'adressePostale', label: 'Adresse postale' },
                { key: 'viePersonnelle', label: 'Vie personnelle' },
                { key: 'vieProfessionnelle', label: 'Vie professionnelle' },
                { key: 'mouvementsSalariaux', label: 'Mouvements salariaux' },
                { key: 'santeEconomique', label: 'Santé économique' },
              ].map(({ key, label }) => {
                const value = daData.cadre2_FonctionnalitesDonnees.sensibiliteDesDonnees[key as keyof typeof daData.cadre2_FonctionnalitesDonnees.sensibiliteDesDonnees];
                return (
                  <div key={`sensible-${key}`} className="fr-checkbox-group">
                    <input
                      type="checkbox"
                      id={`sensible-${key}`}
                      checked={value === "Sensible"}
                      onChange={(e) => {
                        const newValue = e.target.checked ? "Sensible" : "";
                        setDAData({
                          ...daData,
                          cadre2_FonctionnalitesDonnees: {
                            ...daData.cadre2_FonctionnalitesDonnees,
                            sensibiliteDesDonnees: {
                              ...daData.cadre2_FonctionnalitesDonnees.sensibiliteDesDonnees,
                              [key]: newValue
                            }
                          }
                        });
                      }}
                    />
                    <label className="fr-label" htmlFor={`sensible-${key}`}>
                      {label}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Public */}
          <div style={{ flex: 1 }}>
            <div style={{ backgroundColor: '#66cc66', color: 'white', padding: '0.5rem', textAlign: 'center', fontWeight: 'bold' }}>
              Public
            </div>
            <div style={{ padding: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {[
                { key: 'editoriaux', label: 'Éditoriaux' },
                { key: 'publicationExtranet', label: 'Publication Extranet' },
                { key: 'campagneDeCom', label: 'Campagne de com' },
                { key: 'statistiquesPubliables', label: 'Statistiques publiables' },
              ].map(({ key, label }) => {
                const value = daData.cadre2_FonctionnalitesDonnees.sensibiliteDesDonnees[key as keyof typeof daData.cadre2_FonctionnalitesDonnees.sensibiliteDesDonnees];
                return (
                  <div key={`public-${key}`} className="fr-checkbox-group">
                    <input
                      type="checkbox"
                      id={`public-${key}`}
                      checked={value !== ""}
                      onChange={(e) => {
                        const newValue = e.target.checked ? "Sensible" : "";
                        setDAData({
                          ...daData,
                          cadre2_FonctionnalitesDonnees: {
                            ...daData.cadre2_FonctionnalitesDonnees,
                            sensibiliteDesDonnees: {
                              ...daData.cadre2_FonctionnalitesDonnees.sensibiliteDesDonnees,
                              [key]: newValue
                            }
                          }
                        });
                      }}
                    />
                    <label className="fr-label" htmlFor={`public-${key}`}>
                      {label}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Services utilisés par application */}
      <h3 className="fr-h3 fr-mt-6w">Services utilisés par application (externes au SI applicatif)</h3>
      <h4 className="fr-h4">SI SOURCE</h4>
      <EditableTable
        caption="Services utilisés par application"
        textColumns={[
          { key: "service", label: "Service" },
          { key: "modeEchange", label: "Mode échange" },
        ]}
        columns={CHECKBOX_COLUMNS_MREP}
        rows={daData.cadre2_FonctionnalitesDonnees.servicesUtilisesParApplication}
        addLabel="Ajouter un service"
        defaultRow={{ service: "", modeEchange: "", M: false, R: false, E: false, P: false }}
        onRowsChange={(rows) =>
          setDAData({
            ...daData,
            cadre2_FonctionnalitesDonnees: {
              ...daData.cadre2_FonctionnalitesDonnees,
              servicesUtilisesParApplication: rows,
            },
          })
        }
      />
    </div>
  );
}
