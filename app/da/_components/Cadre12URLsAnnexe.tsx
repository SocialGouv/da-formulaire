import type { DAData } from "@/types/da.types";

interface CadreProps {
  daData: DAData;
  setDAData: (data: DAData) => void;
}

export default function Cadre12URLsAnnexe({ daData, setDAData }: CadreProps) {
  return (
    <div>
      {/* URLs Applicatives */}
      <h3 className="fr-h3">URLs Applicatives</h3>
      <div className="fr-table fr-table--no-scroll fr-table--no-caption fr-table--bordered fr-table--sm">
        <div className="fr-table__wrapper">
          <div className="fr-table__container">
            <div className="fr-table__content">
              <table>
                <caption>URLs Applicatives</caption>
                <thead>
                  <tr>
                    <th scope="col" className="fr-col--md">Libellé URL</th>
                    <th scope="col" className="fr-col--sm">Acteur Appelant</th>
                    <th scope="col" className="fr-col--sm">Ressource Appelée</th>
                    <th scope="col" className="fr-col--md">Fonctionnalité/Service Fourni</th>
                    <th scope="col" className="fr-col--sm">Données Transitent</th>
                    <th scope="col" className="fr-col--md">Précisions</th>
                    <th scope="col" className="fr-col--xs" style={{ textAlign: "right" }}></th>
                  </tr>
                </thead>
                <tbody>
                  {daData.cadre12_URLs.urls.map((url, index) => (
                    <tr key={index}>
                      <td className="fr-bg-info">
                        <input
                          className="fr-table-input"
                          type="text"
                          value={url.libelleURL}
                          onChange={(e) => {
                            const newURLs = [...daData.cadre12_URLs.urls];
                            newURLs[index].libelleURL = e.target.value;
                            setDAData({
                              ...daData,
                              cadre12_URLs: {
                                urls: newURLs,
                              },
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          className="fr-table-input"
                          type="text"
                          value={url.acteurAppelant}
                          onChange={(e) => {
                            const newURLs = [...daData.cadre12_URLs.urls];
                            newURLs[index].acteurAppelant = e.target.value;
                            setDAData({
                              ...daData,
                              cadre12_URLs: {
                                urls: newURLs,
                              },
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          className="fr-table-input"
                          type="text"
                          value={url.ressourceAppelee}
                          onChange={(e) => {
                            const newURLs = [...daData.cadre12_URLs.urls];
                            newURLs[index].ressourceAppelee = e.target.value;
                            setDAData({
                              ...daData,
                              cadre12_URLs: {
                                urls: newURLs,
                              },
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          className="fr-table-input"
                          type="text"
                          value={url.fonctionnaliteOuServiceFourni}
                          onChange={(e) => {
                            const newURLs = [...daData.cadre12_URLs.urls];
                            newURLs[index].fonctionnaliteOuServiceFourni = e.target.value;
                            setDAData({
                              ...daData,
                              cadre12_URLs: {
                                urls: newURLs,
                              },
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          className="fr-table-input"
                          type="text"
                          value={url.donneesTransitent}
                          onChange={(e) => {
                            const newURLs = [...daData.cadre12_URLs.urls];
                            newURLs[index].donneesTransitent = e.target.value;
                            setDAData({
                              ...daData,
                              cadre12_URLs: {
                                urls: newURLs,
                              },
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          className="fr-table-input"
                          type="text"
                          value={url.precisions}
                          onChange={(e) => {
                            const newURLs = [...daData.cadre12_URLs.urls];
                            newURLs[index].precisions = e.target.value;
                            setDAData({
                              ...daData,
                              cadre12_URLs: {
                                urls: newURLs,
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
                            const newURLs = daData.cadre12_URLs.urls.filter((_, i) => i !== index);
                            setDAData({
                              ...daData,
                              cadre12_URLs: {
                                urls: newURLs,
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
                  onClick={() => {
                    setDAData({
                      ...daData,
                      cadre12_URLs: {
                        urls: [
                          ...daData.cadre12_URLs.urls,
                          {
                            libelleURL: "",
                            acteurAppelant: "",
                            ressourceAppelee: "",
                            fonctionnaliteOuServiceFourni: "",
                            donneesTransitent: "",
                            precisions: "",
                          },
                        ],
                      },
                    });
                  }}
                >
                  <span className="fr-icon-add-line" aria-hidden="true"></span>
                  Ajouter une URL applicative
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}
