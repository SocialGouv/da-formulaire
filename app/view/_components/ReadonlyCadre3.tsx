import type { DAData } from "@/types/da.types";

export default function ReadonlyCadre3({ daData }: { daData: DAData }) {
  const cadre = daData.cadre3_ContraintesVolumetrie;

  const filteredDependances = cadre.dependancesAvecDautresSI.filter(
    (row) => row.systemeInformation.trim() !== ""
  );

  const vol = cadre.volumetrieDonneesDuSIApplicatif;
  const fichiers = cadre.volumetrieFichiersDuSIApplicatif;
  const reduction = cadre.reductionVolumeDonneesEtFichiers;

  return (
    <div>
      {/* Contraintes l\u00e9gales */}
      <h3 className="fr-h4 fr-mt-4w">Contraintes l&eacute;gales</h3>
      <div className="fr-readonly-value">
        {cadre.contraintesLegales || <span className="fr-readonly-value--empty">—</span>}
      </div>

      {/* Contraintes m\u00e9tiers */}
      <h3 className="fr-h4 fr-mt-4w">Contraintes m&eacute;tiers</h3>
      <div className="fr-readonly-value">
        {cadre.contraintesMetiers || <span className="fr-readonly-value--empty">—</span>}
      </div>

      {/* D\u00e9pendances avec d'autres SI */}
      {filteredDependances.length > 0 && (
        <>
          <h3 className="fr-h3 fr-mt-6w">D&eacute;pendances avec d&apos;autres SI</h3>
          <div className="fr-table fr-table--no-scroll fr-table--no-caption fr-table--bordered fr-table--sm">
            <div className="fr-table__wrapper">
              <div className="fr-table__container">
                <div className="fr-table__content">
                  <table>
                    <caption>D&eacute;pendances avec d&apos;autres SI</caption>
                    <thead>
                      <tr>
                        <th scope="col">Syst&egrave;me d&apos;information</th>
                        <th scope="col" style={{ textAlign: "center" }}>Fournisseur</th>
                        <th scope="col" style={{ textAlign: "center" }}>Consommateur</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredDependances.map((item, index) => (
                        <tr key={index}>
                          <td>{item.systemeInformation}</td>
                          <td style={{ textAlign: "center" }}>
                            {item.fournisseur ? (
                              <span className="fr-icon-check-line" aria-hidden="true"></span>
                            ) : (
                              "\u2014"
                            )}
                          </td>
                          <td style={{ textAlign: "center" }}>
                            {item.consommateur ? (
                              <span className="fr-icon-check-line" aria-hidden="true"></span>
                            ) : (
                              "\u2014"
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* D\u00e9pendances avec le poste de travail */}
      <h3 className="fr-h4 fr-mt-4w">D&eacute;pendances avec le poste de travail</h3>
      <div className="fr-readonly-value">
        {cadre.dependancesAvecLePosteDeTravail || <span className="fr-readonly-value--empty">—</span>}
      </div>

      {/* Niveau utilisabilité/sécurité en mode Tablette */}
      <div className="fr-readonly-group">
        <h3 className="fr-readonly-group__title">
          Niveau d&apos;utilisabilit&eacute;/s&eacute;curit&eacute; en mode Tablette
        </h3>
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-6">
            <h4 className="fr-h4">Mode Connect&eacute;</h4>
            <div className="fr-readonly-value">
              {cadre.niveauUtilisabiliteSecuriteEnModeTablette.modeConnecte || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
          <div className="fr-col-6">
            <h4 className="fr-h4">Mode D&eacute;connect&eacute;</h4>
            <div className="fr-readonly-value">
              {cadre.niveauUtilisabiliteSecuriteEnModeTablette.modeDeconnecte || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
        </div>
        {cadre.niveauUtilisabiliteSecuriteEnModeTablette.precisions && (
          <>
            <h4 className="fr-h4 fr-mt-2w">Pr&eacute;cisions</h4>
            <div className="fr-readonly-value">
              {cadre.niveauUtilisabiliteSecuriteEnModeTablette.precisions}
            </div>
          </>
        )}
      </div>

      {/* Niveau utilisabilité/sécurité en mode Smartphone */}
      <div className="fr-readonly-group">
        <h3 className="fr-readonly-group__title">
          Niveau d&apos;utilisabilit&eacute;/s&eacute;curit&eacute; en mode Smartphone
        </h3>
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-6">
            <h4 className="fr-h4">Mode Connect&eacute;</h4>
            <div className="fr-readonly-value">
              {cadre.niveauUtilisabiliteSecuriteEnModeSmartphone.modeConnecte || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
          <div className="fr-col-6">
            <h4 className="fr-h4">Mode D&eacute;connect&eacute;</h4>
            <div className="fr-readonly-value">
              {cadre.niveauUtilisabiliteSecuriteEnModeSmartphone.modeDeconnecte || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
        </div>
        {cadre.niveauUtilisabiliteSecuriteEnModeSmartphone.precisions && (
          <>
            <h4 className="fr-h4 fr-mt-2w">Pr&eacute;cisions</h4>
            <div className="fr-readonly-value">
              {cadre.niveauUtilisabiliteSecuriteEnModeSmartphone.precisions}
            </div>
          </>
        )}
      </div>

      {/* Mobile - Nombre d'appareils */}
      <div className="fr-readonly-group">
        <h3 className="fr-readonly-group__title">Nombre d&apos;appareils mobiles</h3>
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-6">
            <h4 className="fr-h4">Tablette Minist&egrave;re</h4>
            <div className="fr-readonly-value">
              {cadre.mobile.tabletteMinistere || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
          <div className="fr-col-6">
            <h4 className="fr-h4">Tablette Personnel</h4>
            <div className="fr-readonly-value">
              {cadre.mobile.tablettePersonnel || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
          <div className="fr-col-6">
            <h4 className="fr-h4">Smartphone Minist&egrave;re</h4>
            <div className="fr-readonly-value">
              {cadre.mobile.smartphoneMinistere || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
          <div className="fr-col-6">
            <h4 className="fr-h4">Smartphone Personnel</h4>
            <div className="fr-readonly-value">
              {cadre.mobile.smartphonePersonnel || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Volumétrie données du SI Applicatif */}
      <div className="fr-readonly-group">
        <h3 className="fr-readonly-group__title">Volum&eacute;trie donn&eacute;es du SI Applicatif</h3>
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-6">
            <h4 className="fr-h4">D1 - Nombre enregistrements &agrave; r&eacute;cup&eacute;rer</h4>
            <div className="fr-readonly-value">
              {vol.d1_NombreEnregistrementsARecuperer || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
          <div className="fr-col-6">
            <h4 className="fr-h4">D2 - Nombre enregistrements / an</h4>
            <div className="fr-readonly-value">
              {vol.d2_NombreEnregistrementsParAn || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
          <div className="fr-col-6">
            <h4 className="fr-h4">D3 - Taille moyenne enregistrement (KO)</h4>
            <div className="fr-readonly-value">
              {vol.d3_TailleMoyenneEnregistrementKO || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
          <div className="fr-col-6">
            <h4 className="fr-h4">D4 - Nombre ann&eacute;es enregistrements en base (BDD)</h4>
            <div className="fr-readonly-value">
              {vol.d4_NombreAnneesEnregistrementsEnBaseBDD || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
          <div className="fr-col-6">
            <h4 className="fr-h4">D5 - Volume BDD Initial (GO)</h4>
            <div className="fr-readonly-value">
              {vol.d5_VolumeBDDInitialGO || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
          <div className="fr-col-6">
            <h4 className="fr-h4">D6 - Volume BDD Annuel (GO)</h4>
            <div className="fr-readonly-value">
              {vol.d6_VolumeBDDActuelGO || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
          <div className="fr-col-6">
            <h4 className="fr-h4">D7 - Volume BDD TOTAL (GO)</h4>
            <div className="fr-readonly-value">
              {vol.d7_VolumeBDDTotalGO || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
          {vol.commentaires && (
            <div className="fr-col-6">
              <h4 className="fr-h4">Commentaires</h4>
              <div className="fr-readonly-value">
                {vol.commentaires}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Volumétrie Fichiers du SI Applicatif */}
      <div className="fr-readonly-group">
        <h3 className="fr-readonly-group__title">Volum&eacute;trie Fichiers du SI Applicatif</h3>
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-6">
            <h4 className="fr-h4">F1 - Nombre de fichiers &agrave; r&eacute;cup&eacute;rer</h4>
            <div className="fr-readonly-value">
              {fichiers.f1_NombreDeFichiersARecuperer || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
          <div className="fr-col-6">
            <h4 className="fr-h4">F2 - Nombre de fichiers / an</h4>
            <div className="fr-readonly-value">
              {fichiers.f2_NombreDeFichiersParAn || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
          <div className="fr-col-6">
            <h4 className="fr-h4">F3 - Taille moyenne d&apos;un fichier (MO)</h4>
            <div className="fr-readonly-value">
              {fichiers.f3_TailleMoyenneDunFichierMO || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
          <div className="fr-col-6">
            <h4 className="fr-h4">F4 - Nombre ann&eacute;es fichiers en File System (FS)</h4>
            <div className="fr-readonly-value">
              {fichiers.f4_NombreAnneesFichiersEnFileSystemFS || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
          <div className="fr-col-6">
            <h4 className="fr-h4">F5 - Volume FS initial (GO)</h4>
            <div className="fr-readonly-value">
              {fichiers.f5_VolumeFSInitialGO || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
          <div className="fr-col-6">
            <h4 className="fr-h4">F6 - Volume annuel (GO)</h4>
            <div className="fr-readonly-value">
              {fichiers.f6_VolumeFSActuelGO || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
          <div className="fr-col-6">
            <h4 className="fr-h4">F7 - Volume FS TOTAL (GO)</h4>
            <div className="fr-readonly-value">
              {fichiers.f7_VolumeFSTotalGO || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Réduction volume données et fichiers */}
      <div className="fr-readonly-group">
        <h3 className="fr-readonly-group__title">R&eacute;duction volume donn&eacute;es et fichiers</h3>
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-6">
            <p className="fr-text--sm">
              {reduction.purgeDonneesDansBDDApplicatif ? "\u2713" : "\u2717"} Purge donn&eacute;es dans BDD applicatif
            </p>
          </div>
          <div className="fr-col-6">
            <p className="fr-text--sm">
              {reduction.purgeFichiersDansFSApplicatif ? "\u2713" : "\u2717"} Purge fichiers dans FS applicatif
            </p>
          </div>
          <div className="fr-col-6">
            <p className="fr-text--sm">
              {reduction.archivageDonneesHorsApplicatif ? "\u2713" : "\u2717"} Archivage donn&eacute;es hors applicatif
            </p>
          </div>
          <div className="fr-col-6">
            <p className="fr-text--sm">
              {reduction.archivageFichiersHorsApplicatif ? "\u2713" : "\u2717"} Archivage fichiers hors applicatif
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
