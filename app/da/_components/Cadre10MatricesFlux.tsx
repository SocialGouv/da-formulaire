import type { DAData } from "@/types/da.types";

interface CadreProps {
  daData: DAData;
  setDAData: (data: DAData) => void;
}

export default function Cadre10MatricesFlux({ daData, setDAData }: CadreProps) {
  return (
    <div>
      <div className="fr-table fr-table--no-scroll fr-table--no-caption fr-table--bordered fr-table--sm">
        <div className="fr-table__wrapper">
          <div className="fr-table__container">
            <div className="fr-table__content">
              <table>
                <caption>Matrices des flux applicatifs</caption>
                <thead>
                  <tr>
                    <th scope="col" className="fr-col--sm">Numéro Flux</th>
                    <th scope="col" className="fr-col--md">Source</th>
                    <th scope="col" className="fr-col--md">Destination</th>
                    <th scope="col" className="fr-col--sm">Protocole</th>
                    <th scope="col" className="fr-col--md">Commentaires</th>
                    <th scope="col" className="fr-col--xs" style={{ textAlign: "right" }}></th>
                  </tr>
                </thead>
                <tbody>
                  {daData.cadre10_MatricesFlux.fluxApplicatifs.map((flux, index) => (
                    <tr key={index}>
                      <td className="fr-bg-info">
                        <input
                          className="fr-table-input"
                          type="text"
                          value={flux.numeroFlux}
                          onChange={(e) => {
                            const newFlux = [...daData.cadre10_MatricesFlux.fluxApplicatifs];
                            newFlux[index].numeroFlux = e.target.value;
                            setDAData({
                              ...daData,
                              cadre10_MatricesFlux: {
                                fluxApplicatifs: newFlux,
                              },
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          className="fr-table-input"
                          type="text"
                          value={flux.source}
                          onChange={(e) => {
                            const newFlux = [...daData.cadre10_MatricesFlux.fluxApplicatifs];
                            newFlux[index].source = e.target.value;
                            setDAData({
                              ...daData,
                              cadre10_MatricesFlux: {
                                fluxApplicatifs: newFlux,
                              },
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          className="fr-table-input"
                          type="text"
                          value={flux.destination}
                          onChange={(e) => {
                            const newFlux = [...daData.cadre10_MatricesFlux.fluxApplicatifs];
                            newFlux[index].destination = e.target.value;
                            setDAData({
                              ...daData,
                              cadre10_MatricesFlux: {
                                fluxApplicatifs: newFlux,
                              },
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          className="fr-table-input"
                          type="text"
                          value={flux.protocole}
                          onChange={(e) => {
                            const newFlux = [...daData.cadre10_MatricesFlux.fluxApplicatifs];
                            newFlux[index].protocole = e.target.value;
                            setDAData({
                              ...daData,
                              cadre10_MatricesFlux: {
                                fluxApplicatifs: newFlux,
                              },
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          className="fr-table-input"
                          type="text"
                          value={flux.commentaires}
                          onChange={(e) => {
                            const newFlux = [...daData.cadre10_MatricesFlux.fluxApplicatifs];
                            newFlux[index].commentaires = e.target.value;
                            setDAData({
                              ...daData,
                              cadre10_MatricesFlux: {
                                fluxApplicatifs: newFlux,
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
                            const newFlux = daData.cadre10_MatricesFlux.fluxApplicatifs.filter(
                              (_, i) => i !== index
                            );
                            setDAData({
                              ...daData,
                              cadre10_MatricesFlux: {
                                fluxApplicatifs: newFlux,
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
                      cadre10_MatricesFlux: {
                        fluxApplicatifs: [
                          ...daData.cadre10_MatricesFlux.fluxApplicatifs,
                          {
                            numeroFlux: "",
                            source: "",
                            destination: "",
                            protocole: "",
                            commentaires: "",
                          },
                        ],
                      },
                    });
                  }}
                >
                  <span className="fr-icon-add-line" aria-hidden="true"></span>
                  Ajouter un flux applicatif
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
