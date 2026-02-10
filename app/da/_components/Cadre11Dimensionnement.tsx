import type { DAData } from "@/types/da.types";

interface CadreProps {
  daData: DAData;
  setDAData: (data: DAData) => void;
}

export default function Cadre11Dimensionnement({ daData, setDAData }: CadreProps) {
  return (
    <div>
      <h3 className="fr-h3">Justifications PDMA / DMIA / Performances</h3>

      <div className="fr-input-group">
        <label className="fr-label" htmlFor="pdma">
          Perte de Données Maximale Admissible (PDMA)
        </label>
        <textarea
          className="fr-input"
          id="pdma"
          rows={4}
          value={daData.cadre11_Dimensionnement.justificationsPDMA_DMIA_Performances.perteDeDonneesMaximaleAdmissible}
          onChange={(e) =>
            setDAData({
              ...daData,
              cadre11_Dimensionnement: {
                ...daData.cadre11_Dimensionnement,
                justificationsPDMA_DMIA_Performances: {
                  ...daData.cadre11_Dimensionnement.justificationsPDMA_DMIA_Performances,
                  perteDeDonneesMaximaleAdmissible: e.target.value,
                },
              },
            })
          }
        />
      </div>

      <div className="fr-input-group">
        <label className="fr-label" htmlFor="dmia">
          Durée Maximale d'Interruption Admissible (DMIA)
        </label>
        <textarea
          className="fr-input"
          id="dmia"
          rows={4}
          value={daData.cadre11_Dimensionnement.justificationsPDMA_DMIA_Performances.dureeMaximaleInterruptionAdmissible}
          onChange={(e) =>
            setDAData({
              ...daData,
              cadre11_Dimensionnement: {
                ...daData.cadre11_Dimensionnement,
                justificationsPDMA_DMIA_Performances: {
                  ...daData.cadre11_Dimensionnement.justificationsPDMA_DMIA_Performances,
                  dureeMaximaleInterruptionAdmissible: e.target.value,
                },
              },
            })
          }
        />
      </div>

      <div className="fr-input-group">
        <label className="fr-label" htmlFor="performances">
          Performances Applicatives
        </label>
        <textarea
          className="fr-input"
          id="performances"
          rows={4}
          value={daData.cadre11_Dimensionnement.justificationsPDMA_DMIA_Performances.performancesApplicatives}
          onChange={(e) =>
            setDAData({
              ...daData,
              cadre11_Dimensionnement: {
                ...daData.cadre11_Dimensionnement,
                justificationsPDMA_DMIA_Performances: {
                  ...daData.cadre11_Dimensionnement.justificationsPDMA_DMIA_Performances,
                  performancesApplicatives: e.target.value,
                },
              },
            })
          }
        />
      </div>

      <h3 className="fr-h3 fr-mt-6w">Justifications Allocations Ressources Matérielles</h3>

      <div className="fr-table fr-table--no-scroll fr-table--no-caption fr-table--bordered fr-table--sm">
        <div className="fr-table__wrapper">
          <div className="fr-table__container">
            <div className="fr-table__content">
              <table>
                <caption>Justifications Allocations Ressources Matérielles</caption>
                <thead>
                  <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Détail des hypothèses de calcul et résultats pour le dimensionnement</th>
                    <th scope="col">Nombre CPU</th>
                    <th scope="col">Nombre serveurs</th>
                    <th scope="col" style={{ textAlign: "right" }}></th>
                  </tr>
                </thead>
                <tbody>
                  {daData.cadre11_Dimensionnement.justificationsAllocationsRessourcesMaterielles.map((ressource, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          className="fr-table-input"
                          type="text"
                          value={ressource.nom}
                          onChange={(e) => {
                            const newRessources = [...daData.cadre11_Dimensionnement.justificationsAllocationsRessourcesMaterielles];
                            newRessources[index] = { ...newRessources[index], nom: e.target.value };
                            setDAData({
                              ...daData,
                              cadre11_Dimensionnement: {
                                ...daData.cadre11_Dimensionnement,
                                justificationsAllocationsRessourcesMaterielles: newRessources,
                              },
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          className="fr-table-input"
                          type="text"
                          value={ressource.detailsHypotheses}
                          onChange={(e) => {
                            const newRessources = [...daData.cadre11_Dimensionnement.justificationsAllocationsRessourcesMaterielles];
                            newRessources[index] = { ...newRessources[index], detailsHypotheses: e.target.value };
                            setDAData({
                              ...daData,
                              cadre11_Dimensionnement: {
                                ...daData.cadre11_Dimensionnement,
                                justificationsAllocationsRessourcesMaterielles: newRessources,
                              },
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          className="fr-table-input"
                          type="text"
                          value={ressource.nombreCPU}
                          onChange={(e) => {
                            const newRessources = [...daData.cadre11_Dimensionnement.justificationsAllocationsRessourcesMaterielles];
                            newRessources[index] = { ...newRessources[index], nombreCPU: e.target.value };
                            setDAData({
                              ...daData,
                              cadre11_Dimensionnement: {
                                ...daData.cadre11_Dimensionnement,
                                justificationsAllocationsRessourcesMaterielles: newRessources,
                              },
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          className="fr-table-input"
                          type="text"
                          value={ressource.nombreServeurs}
                          onChange={(e) => {
                            const newRessources = [...daData.cadre11_Dimensionnement.justificationsAllocationsRessourcesMaterielles];
                            newRessources[index] = { ...newRessources[index], nombreServeurs: e.target.value };
                            setDAData({
                              ...daData,
                              cadre11_Dimensionnement: {
                                ...daData.cadre11_Dimensionnement,
                                justificationsAllocationsRessourcesMaterielles: newRessources,
                              },
                            });
                          }}
                        />
                      </td>
                      <td style={{ textAlign: "right" }}>
                        <button
                          className="fr-btn fr-btn--tertiary-no-outline"
                          type="button"
                          title="Supprimer"
                          onClick={() => {
                            const newRessources = daData.cadre11_Dimensionnement.justificationsAllocationsRessourcesMaterielles.filter(
                              (_, i) => i !== index
                            );
                            setDAData({
                              ...daData,
                              cadre11_Dimensionnement: {
                                ...daData.cadre11_Dimensionnement,
                                justificationsAllocationsRessourcesMaterielles: newRessources,
                              },
                            });
                          }}
                        >
                          <span className="fr-icon-close-line" aria-hidden="true"></span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="fr-table__footer">
          <div className="fr-table__footer--end">
            <ul className="fr-btns-group fr-btns-group--right fr-btns-group--inline-reverse fr-btns-group--inline-md">
              <li>
                <button
                  className="fr-btn fr-btn--secondary"
                  type="button"
                  onClick={() => {
                    setDAData({
                      ...daData,
                      cadre11_Dimensionnement: {
                        ...daData.cadre11_Dimensionnement,
                        justificationsAllocationsRessourcesMaterielles: [
                          ...daData.cadre11_Dimensionnement.justificationsAllocationsRessourcesMaterielles,
                          { nom: "", detailsHypotheses: "", nombreCPU: "", nombreServeurs: "" },
                        ],
                      },
                    });
                  }}
                >
                  <span className="fr-icon-add-line" aria-hidden="true"></span>
                  Ajouter une ressource
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
