import type { DAData } from "@/types/da.types";

export default function ReadonlyCadre4({ daData }: { daData: DAData }) {
  const cadre = daData.cadre4_ExigencesContextuelles;
  const dict = cadre.echelleDICT_EBIOS_1a4_GlobalSI;
  const impact = cadre.echelleIMPACT_EBIOS_GlobalSI;
  const garantie = cadre.garantieDeService;
  const temps = cadre.tempsDeReponse;

  const filteredPreuves = cadre.exigencePREUVE_ParFonctionnalite.filter(
    (row) => row.fonctionnalite.trim() !== "" || row.descriptionExigencePreuve.trim() !== ""
  );

  const filteredPeriodes = cadre.periodesApplicatives.filter(
    (row) =>
      row.periode.trim() !== "" ||
      row.dateDebut.trim() !== "" ||
      row.dateFin.trim() !== "" ||
      row.nuc_NombreUtilisateursConnectes.trim() !== "" ||
      row.nrs_NombreRequetesSimultaneesParSec.trim() !== ""
  );

  const filteredTraitements = cadre.traitementsAutomatises.filter(
    (row) =>
      row.batchsApplicatifs.trim() !== "" ||
      row.plage.trim() !== "" ||
      row.frequence.trim() !== "" ||
      row.impactMetier.trim() !== "" ||
      row.impactCharge.trim() !== ""
  );

  const exigences = [
    {
      label: "Disponibilit\u00e9",
      frontNiveau: dict.exigenceDisponibilite_NiveauFront,
      frontPrecisions: dict.exigenceDisponibilite_PrecisionsFront,
      backNiveau: dict.exigenceDisponibilite_NiveauBack,
      backPrecisions: dict.exigenceDisponibilite_PrecisionsBack,
    },
    {
      label: "Int\u00e9grit\u00e9",
      frontNiveau: dict.exigenceIntegrite_NiveauFront,
      frontPrecisions: dict.exigenceIntegrite_PrecisionsFront,
      backNiveau: dict.exigenceIntegrite_NiveauBack,
      backPrecisions: dict.exigenceIntegrite_PrecisionsBack,
    },
    {
      label: "Confidentialit\u00e9",
      frontNiveau: dict.exigenceConfidentialite_NiveauFront,
      frontPrecisions: dict.exigenceConfidentialite_PrecisionsFront,
      backNiveau: dict.exigenceConfidentialite_NiveauBack,
      backPrecisions: dict.exigenceConfidentialite_PrecisionsBack,
    },
    {
      label: "Tra\u00e7abilit\u00e9",
      frontNiveau: dict.exigenceTracabilite_NiveauFront,
      frontPrecisions: dict.exigenceTracabilite_PrecisionsFront,
      backNiveau: dict.exigenceTracabilite_NiveauBack,
      backPrecisions: dict.exigenceTracabilite_PrecisionsBack,
    },
  ];

  const tempsRows = [
    {
      label: "Affichage Page d'accueil",
      standard: temps.affichagePageAccueil_PeriodeStandard,
      charge: temps.affichagePageAccueil_PeriodeDeCharge,
    },
    {
      label: "Affichage Page simple",
      standard: temps.affichagePageSimple_PeriodeStandard,
      charge: temps.affichagePageSimple_PeriodeDeCharge,
    },
    {
      label: "Affichage Page complexe",
      standard: temps.affichagePageComplexe_PeriodeStandard,
      charge: temps.affichagePageComplexe_PeriodeDeCharge,
    },
    {
      label: "Traitement requ\u00eate simple",
      standard: temps.traitementRequeteSimple_PeriodeStandard,
      charge: temps.traitementRequeteSimple_PeriodeDeCharge,
    },
    {
      label: "Traitement requ\u00eate complexe",
      standard: temps.traitementRequeteComplexe_PeriodeStandard,
      charge: temps.traitementRequeteComplexe_PeriodeDeCharge,
    },
  ];

  return (
    <div>
      {/* Echelle DICT EBIOS */}
      <h3 className="fr-h3 fr-mt-6w">Echelle DICT EBIOS (1 &agrave; 4) &ndash; global SI</h3>

      {exigences.map((exigence) => (
        <div className="fr-readonly-group" key={exigence.label}>
          <h4 className="fr-readonly-group__title">{exigence.label}</h4>
          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-3">
              <h5 className="fr-h4">Niveau Front</h5>
              <div className="fr-readonly-value">
                {exigence.frontNiveau || <span className="fr-readonly-value--empty">—</span>}
              </div>
            </div>
            <div className="fr-col-9">
              <h5 className="fr-h4">Pr&eacute;cisions Front</h5>
              <div className="fr-readonly-value">
                {exigence.frontPrecisions || <span className="fr-readonly-value--empty">—</span>}
              </div>
            </div>
            <div className="fr-col-3">
              <h5 className="fr-h4">Niveau Back</h5>
              <div className="fr-readonly-value">
                {exigence.backNiveau || <span className="fr-readonly-value--empty">—</span>}
              </div>
            </div>
            <div className="fr-col-9">
              <h5 className="fr-h4">Pr&eacute;cisions Back</h5>
              <div className="fr-readonly-value">
                {exigence.backPrecisions || <span className="fr-readonly-value--empty">—</span>}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Exigence PREUVE par fonctionnalit\u00e9 */}
      {filteredPreuves.length > 0 && (
        <>
          <h3 className="fr-h3 fr-mt-6w">Exigence PREUVE par fonctionnalit&eacute;</h3>
          <div className="fr-table fr-table--no-scroll fr-table--no-caption fr-table--bordered fr-table--sm">
            <div className="fr-table__wrapper">
              <div className="fr-table__container">
                <div className="fr-table__content">
                  <table>
                    <caption>Exigence PREUVE par fonctionnalit&eacute;</caption>
                    <thead>
                      <tr>
                        <th scope="col">Fonctionnalit&eacute;</th>
                        <th scope="col">Description Exigence Preuve</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredPreuves.map((item, index) => (
                        <tr key={index}>
                          <td>{item.fonctionnalite}</td>
                          <td>{item.descriptionExigencePreuve}</td>
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

      {/* Echelle IMPACT EBIOS */}
      <h3 className="fr-h3 fr-mt-6w">Echelle IMPACT EBIOS &ndash; global SI</h3>
      <div className="fr-readonly-group">
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-6">
            <h4 className="fr-h4">Domaine</h4>
            <div className="fr-readonly-value">
              {impact.domaine || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
          <div className="fr-col-6">
            <h4 className="fr-h4">Niveau</h4>
            <div className="fr-readonly-value">
              {impact.niveau || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
          <div className="fr-col-12">
            <h4 className="fr-h4">Description</h4>
            <div className="fr-readonly-value">
              {impact.description || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
          <div className="fr-col-12">
            <h4 className="fr-h4">Contexte applicatif</h4>
            <div className="fr-readonly-value">
              {impact.contexteApplicatif || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
        </div>
      </div>

      {/* P\u00e9riodes applicatives */}
      {filteredPeriodes.length > 0 && (
        <>
          <h3 className="fr-h3 fr-mt-6w">P&eacute;riodes applicatives</h3>
          <div className="fr-table fr-table--no-scroll fr-table--no-caption fr-table--bordered fr-table--sm">
            <div className="fr-table__wrapper">
              <div className="fr-table__container">
                <div className="fr-table__content">
                  <table>
                    <caption>P&eacute;riodes applicatives</caption>
                    <thead>
                      <tr>
                        <th scope="col">P&eacute;riode</th>
                        <th scope="col">Date D&eacute;but</th>
                        <th scope="col">Date Fin</th>
                        <th scope="col" style={{ textAlign: "right" }}>NUC</th>
                        <th scope="col" style={{ textAlign: "right" }}>NRS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredPeriodes.map((item, index) => (
                        <tr key={index}>
                          <td>{item.periode}</td>
                          <td>{item.dateDebut}</td>
                          <td>{item.dateFin}</td>
                          <td style={{ textAlign: "right" }}>{item.nuc_NombreUtilisateursConnectes}</td>
                          <td style={{ textAlign: "right" }}>{item.nrs_NombreRequetesSimultaneesParSec}</td>
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

      {/* Garantie de service */}
      <h3 className="fr-h3 fr-mt-6w">Garantie de service</h3>
      <div className="fr-readonly-group">
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-6">
            <h4 className="fr-h4">Plan de Continuit&eacute; d&apos;Activit&eacute; (PCA)</h4>
            <div className="fr-readonly-value">
              {garantie.planDeContinuiteActivite_PCA || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
          <div className="fr-col-6">
            <h4 className="fr-h4">Plan de Reprise d&apos;Activit&eacute; (PRA)</h4>
            <div className="fr-readonly-value">
              {garantie.planDeRepriseActivite_PRA || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
          <div className="fr-col-6">
            <h4 className="fr-h4">Perte de Donn&eacute;es Maximale Admissible (PDMA)</h4>
            <div className="fr-readonly-value">
              {garantie.perteDeDonneesNonAdmissible || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
          <div className="fr-col-6">
            <h4 className="fr-h4">Dur&eacute;e Maximale d&apos;Interruption Admissible (DMIA)</h4>
            <div className="fr-readonly-value">
              {garantie.dureMaximaleInterruptionAdmissible_DMIA || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
          <div className="fr-col-12">
            <h4 className="fr-h4">Impact M&eacute;tier en cas de perte de donn&eacute;es</h4>
            <div className="fr-readonly-value">
              {garantie.impactMetierEnCasDePerteDeDonnees || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
          <div className="fr-col-12">
            <h4 className="fr-h4">Impact M&eacute;tier en cas de d&eacute;faillance service</h4>
            <div className="fr-readonly-value">
              {garantie.impactMetierEnCasDeDefaillanceService || <span className="fr-readonly-value--empty">—</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Temps de r\u00e9ponse */}
      <h3 className="fr-h3 fr-mt-6w">Temps de r&eacute;ponse</h3>
      <div className="fr-table fr-table--no-scroll fr-table--no-caption fr-table--bordered fr-table--sm">
        <div className="fr-table__wrapper">
          <div className="fr-table__container">
            <div className="fr-table__content">
              <table>
                <caption>Temps de r&eacute;ponse</caption>
                <thead>
                  <tr>
                    <th scope="col">Type d&apos;affichage/traitement</th>
                    <th scope="col" style={{ textAlign: "right" }}>P&eacute;riode Standard (s)</th>
                    <th scope="col" style={{ textAlign: "right" }}>P&eacute;riode de charge (s)</th>
                  </tr>
                </thead>
                <tbody>
                  {tempsRows.map((row, index) => (
                    <tr key={index}>
                      <td>{row.label}</td>
                      <td style={{ textAlign: "right" }}>{row.standard}</td>
                      <td style={{ textAlign: "right" }}>{row.charge}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Traitements automatis\u00e9s */}
      {filteredTraitements.length > 0 && (
        <>
          <h3 className="fr-h3 fr-mt-6w">Traitements automatis&eacute;s</h3>
          <div className="fr-table fr-table--no-scroll fr-table--no-caption fr-table--bordered fr-table--sm">
            <div className="fr-table__wrapper">
              <div className="fr-table__container">
                <div className="fr-table__content">
                  <table>
                    <caption>Traitements automatis&eacute;s</caption>
                    <thead>
                      <tr>
                        <th scope="col">Batch(s) applicatifs</th>
                        <th scope="col">Plage</th>
                        <th scope="col">Fr&eacute;quence</th>
                        <th scope="col">Impact M&eacute;tier</th>
                        <th scope="col">Impact Charge</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredTraitements.map((item, index) => (
                        <tr key={index}>
                          <td>{item.batchsApplicatifs}</td>
                          <td>{item.plage}</td>
                          <td>{item.frequence}</td>
                          <td>{item.impactMetier}</td>
                          <td>{item.impactCharge}</td>
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

      {/* Impact m\u00e9tier en cas d'anomalie */}
      <h3 className="fr-h4 fr-mt-4w">Impact m&eacute;tier en cas d&apos;anomalie</h3>
      <div className="fr-readonly-value">
        {cadre.impactMetierEnCasDAnomalie || <span className="fr-readonly-value--empty">—</span>}
      </div>

      {/* Impact de charge sur les performances */}
      <h3 className="fr-h4 fr-mt-4w">Impact de charge sur les performances de l&apos;application</h3>
      <div className="fr-readonly-value">
        {cadre.impactDeChargeSurPerformances || <span className="fr-readonly-value--empty">—</span>}
      </div>
    </div>
  );
}
