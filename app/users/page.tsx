export default function Users() {
  return (
    <div className="fr-container">
      <div className="fr-grid-row fr-grid-row--middle">
        <div className="fr-col-12">
          <h1 className="fr-h1">Gestion des utilisateurs</h1>
          <p className="fr-text--lead">Liste des utilisateurs du système</p>
        </div>
      </div>

      <div className="fr-table fr-table--no-scroll fr-table--no-caption fr-table--bordered fr-table--sm">
        <div className="fr-table__wrapper">
          <div className="fr-table__container">
            <div className="fr-table__content">
              <table>
                <caption>Planning projet</caption>
                <thead>
                  <tr>
                    <th scope="col" className="fr-col--md">
                      Nom
                    </th>
                    <th scope="col" className="fr-col--md">
                      Email
                    </th>
                    <th scope="col" className="fr-col--xs">
                      Date de creation
                    </th>
                    <th
                      scope="col"
                      className="fr-col--xs"
                      style={{ textAlign: "right" }}
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {/* {daData.cadre1_ProjetActeurs.planningProjet.map(
                    (item, index) => (
                      <tr key={index}>
                        <td className="fr-bg-info">
                          <input
                            className="fr-table-input"
                            type="text"
                            value={item.version}
                            onChange={(e) => {
                              const newPlanning = [
                                ...daData.cadre1_ProjetActeurs.planningProjet,
                              ];
                              newPlanning[index].version = e.target.value;
                              setDAData({
                                ...daData,
                                cadre1_ProjetActeurs: {
                                  ...daData.cadre1_ProjetActeurs,
                                  planningProjet: newPlanning,
                                },
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            className="fr-table-input"
                            type="text"
                            value={item.date}
                            onChange={(e) => {
                              const newPlanning = [
                                ...daData.cadre1_ProjetActeurs.planningProjet,
                              ];
                              newPlanning[index].date = e.target.value;
                              setDAData({
                                ...daData,
                                cadre1_ProjetActeurs: {
                                  ...daData.cadre1_ProjetActeurs,
                                  planningProjet: newPlanning,
                                },
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            className="fr-table-input"
                            type="text"
                            value={item.commentaires}
                            // onChange={(e) => {
                            //   const newPlanning = [
                            //     ...daData.cadre1_ProjetActeurs.planningProjet,
                            //   ];
                            //   newPlanning[index].commentaires = e.target.value;
                            //   setDAData({
                            //     ...daData,
                            //     cadre1_ProjetActeurs: {
                            //       ...daData.cadre1_ProjetActeurs,
                            //       planningProjet: newPlanning,
                            //     },
                            //   });
                            // }}
                          />
                        </td>
                        <td style={{ textAlign: "right" }}>
                          <button
                            className="fr-btn fr-btn--tertiary-no-outline"
                            type="button"
                            title="Supprimer"
                            // onClick={() => {
                            //   const newPlanning =
                            //     daData.cadre1_ProjetActeurs.planningProjet.filter(
                            //       (_, i) => i !== index,
                            //     );
                            //   setDAData({
                            //     ...daData,
                            //     cadre1_ProjetActeurs: {
                            //       ...daData.cadre1_ProjetActeurs,
                            //       planningProjet: newPlanning,
                            //     },
                            //   });
                            // }}
                          >
                            <span
                              className="fr-icon-close-line"
                              aria-hidden="true"
                            ></span>
                          </button>
                        </td>
                      </tr>
                    ),
                  )} */}
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
                  //   onClick={() => {
                  //     setDAData({
                  //       ...daData,
                  //       cadre1_ProjetActeurs: {
                  //         ...daData.cadre1_ProjetActeurs,
                  //         planningProjet: [
                  //           ...daData.cadre1_ProjetActeurs.planningProjet,
                  //           {
                  //             version: "",
                  //             date: "",
                  //             commentaires: "",
                  //           },
                  //         ],
                  //       },
                  //     });
                  //   }}
                >
                  <span className="fr-icon-add-line" aria-hidden="true"></span>
                  Ajouter un utilisateur
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
