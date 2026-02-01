import type { DAData } from "@/types/da.types";

interface CadreProps {
  daData: DAData;
  setDAData: (data: DAData) => void;
}

export default function Cadre2FonctionnalitesDonnees({ daData, setDAData }: CadreProps) {
  return (
    <div>
      {/* Fonctionnalités du SI applicatif */}
      <h3 className="fr-h3">Fonctionnalités du SI applicatif</h3>
      <p className="fr-text--sm">M = Ministère, R = Réseau Interministériel, E = Extranet, P = Public</p>
      <div className="fr-table fr-table--no-caption fr-table--bordered fr-table--sm">
        <div className="fr-table__wrapper">
          <div className="fr-table__container">
            <div className="fr-table__content">
              <table>
                <caption>Fonctionnalités du SI applicatif</caption>
                <thead>
                  <tr>
                    <th scope="col" className="fr-col--lg">Fonctionnalité</th>
                    <th scope="col" className="fr-col--sm" style={{ textAlign: 'center' }}>M</th>
                    <th scope="col" className="fr-col--sm" style={{ textAlign: 'center' }}>R</th>
                    <th scope="col" className="fr-col--sm" style={{ textAlign: 'center' }}>E</th>
                    <th scope="col" className="fr-col--sm" style={{ textAlign: 'center' }}>P</th>
                    <th scope="col" className="fr-col--xs" style={{ textAlign: 'right' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {daData.cadre2_FonctionnalitesDonnees.fonctionnalitesDuSIApplicatif.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          className="fr-input"
                          type="text"
                          value={item.fonctionnalite}
                          onChange={(e) => {
                            const newItems = [...daData.cadre2_FonctionnalitesDonnees.fonctionnalitesDuSIApplicatif];
                            newItems[index].fonctionnalite = e.target.value;
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, fonctionnalitesDuSIApplicatif: newItems}});
                          }}
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={item.M}
                          onChange={(e) => {
                            const newItems = [...daData.cadre2_FonctionnalitesDonnees.fonctionnalitesDuSIApplicatif];
                            newItems[index].M = e.target.checked;
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, fonctionnalitesDuSIApplicatif: newItems}});
                          }}
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={item.R}
                          onChange={(e) => {
                            const newItems = [...daData.cadre2_FonctionnalitesDonnees.fonctionnalitesDuSIApplicatif];
                            newItems[index].R = e.target.checked;
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, fonctionnalitesDuSIApplicatif: newItems}});
                          }}
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={item.E}
                          onChange={(e) => {
                            const newItems = [...daData.cadre2_FonctionnalitesDonnees.fonctionnalitesDuSIApplicatif];
                            newItems[index].E = e.target.checked;
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, fonctionnalitesDuSIApplicatif: newItems}});
                          }}
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={item.P}
                          onChange={(e) => {
                            const newItems = [...daData.cadre2_FonctionnalitesDonnees.fonctionnalitesDuSIApplicatif];
                            newItems[index].P = e.target.checked;
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, fonctionnalitesDuSIApplicatif: newItems}});
                          }}
                        />
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <button
                          className="fr-btn fr-btn--sm fr-btn--secondary"
                          type="button"
                          onClick={() => {
                            const newItems = daData.cadre2_FonctionnalitesDonnees.fonctionnalitesDuSIApplicatif.filter((_, i) => i !== index);
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, fonctionnalitesDuSIApplicatif: newItems}});
                          }}
                        >
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td style={{ backgroundColor: '#e8edff', fontWeight: 'bold', padding: '8px' }}>Total fonctionnalités</td>
                    <td style={{ backgroundColor: '#e8edff', fontWeight: 'bold', textAlign: 'center', padding: '8px' }}>
                      {daData.cadre2_FonctionnalitesDonnees.fonctionnalitesDuSIApplicatif.filter(item => item.M).length}
                    </td>
                    <td style={{ backgroundColor: '#e8edff', fontWeight: 'bold', textAlign: 'center', padding: '8px' }}>
                      {daData.cadre2_FonctionnalitesDonnees.fonctionnalitesDuSIApplicatif.filter(item => item.R).length}
                    </td>
                    <td style={{ backgroundColor: '#e8edff', fontWeight: 'bold', textAlign: 'center', padding: '8px' }}>
                      {daData.cadre2_FonctionnalitesDonnees.fonctionnalitesDuSIApplicatif.filter(item => item.E).length}
                    </td>
                    <td style={{ backgroundColor: '#e8edff', fontWeight: 'bold', textAlign: 'center', padding: '8px' }}>
                      {daData.cadre2_FonctionnalitesDonnees.fonctionnalitesDuSIApplicatif.filter(item => item.P).length}
                    </td>
                    <td style={{ backgroundColor: '#e8edff', padding: '8px' }}></td>
                  </tr>
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
                    setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, fonctionnalitesDuSIApplicatif: [
                      ...daData.cadre2_FonctionnalitesDonnees.fonctionnalitesDuSIApplicatif,
                      {fonctionnalite: "", M: false, R: false, E: false, P: false}
                    ]}});
                  }}
                >
                  <span className="fr-icon-add-line" aria-hidden="true"></span>
                  Ajouter une fonctionnalité
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Données métier du SI Applicatif */}
      <h3 className="fr-h3 fr-mt-6w">Données métier du SI Applicatif</h3>
      <div className="fr-table fr-table--no-caption fr-table--bordered fr-table--sm">
        <div className="fr-table__wrapper">
          <div className="fr-table__container">
            <div className="fr-table__content">
              <table>
                <caption>Données métier du SI Applicatif</caption>
                <thead>
                  <tr>
                    <th scope="col" className="fr-col--lg">Donnée</th>
                    <th scope="col" className="fr-col--sm" style={{ textAlign: 'center' }}>M</th>
                    <th scope="col" className="fr-col--sm" style={{ textAlign: 'center' }}>R</th>
                    <th scope="col" className="fr-col--sm" style={{ textAlign: 'center' }}>E</th>
                    <th scope="col" className="fr-col--sm" style={{ textAlign: 'center' }}>P</th>
                    <th scope="col" className="fr-col--xs" style={{ textAlign: 'right' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {daData.cadre2_FonctionnalitesDonnees.donneesMetierDuSIApplicatif.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          className="fr-input"
                          type="text"
                          value={item.donnee}
                          onChange={(e) => {
                            const newItems = [...daData.cadre2_FonctionnalitesDonnees.donneesMetierDuSIApplicatif];
                            newItems[index].donnee = e.target.value;
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, donneesMetierDuSIApplicatif: newItems}});
                          }}
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={item.M}
                          onChange={(e) => {
                            const newItems = [...daData.cadre2_FonctionnalitesDonnees.donneesMetierDuSIApplicatif];
                            newItems[index].M = e.target.checked;
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, donneesMetierDuSIApplicatif: newItems}});
                          }}
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={item.R}
                          onChange={(e) => {
                            const newItems = [...daData.cadre2_FonctionnalitesDonnees.donneesMetierDuSIApplicatif];
                            newItems[index].R = e.target.checked;
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, donneesMetierDuSIApplicatif: newItems}});
                          }}
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={item.E}
                          onChange={(e) => {
                            const newItems = [...daData.cadre2_FonctionnalitesDonnees.donneesMetierDuSIApplicatif];
                            newItems[index].E = e.target.checked;
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, donneesMetierDuSIApplicatif: newItems}});
                          }}
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={item.P}
                          onChange={(e) => {
                            const newItems = [...daData.cadre2_FonctionnalitesDonnees.donneesMetierDuSIApplicatif];
                            newItems[index].P = e.target.checked;
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, donneesMetierDuSIApplicatif: newItems}});
                          }}
                        />
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <button
                          className="fr-btn fr-btn--sm fr-btn--secondary"
                          type="button"
                          onClick={() => {
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, donneesMetierDuSIApplicatif: daData.cadre2_FonctionnalitesDonnees.donneesMetierDuSIApplicatif.filter((_, i) => i !== index)}});
                          }}
                        >
                          Supprimer
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
                    setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, donneesMetierDuSIApplicatif: [...daData.cadre2_FonctionnalitesDonnees.donneesMetierDuSIApplicatif, {donnee: "", M: false, R: false, E: false, P: false}]}});
                  }}
                >
                  <span className="fr-icon-add-line" aria-hidden="true"></span>
                  Ajouter une donnée
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Fichiers métiers du SI applicatif */}
      <h3 className="fr-h3 fr-mt-6w">Fichiers métiers du SI applicatif</h3>
      <div className="fr-table fr-table--no-caption fr-table--bordered fr-table--sm">
        <div className="fr-table__wrapper">
          <div className="fr-table__container">
            <div className="fr-table__content">
              <table>
                <caption>Fichiers métiers du SI applicatif</caption>
                <thead>
                  <tr>
                    <th scope="col" className="fr-col--lg">Fichier</th>
                    <th scope="col" className="fr-col--sm" style={{ textAlign: 'center' }}>M</th>
                    <th scope="col" className="fr-col--sm" style={{ textAlign: 'center' }}>R</th>
                    <th scope="col" className="fr-col--sm" style={{ textAlign: 'center' }}>E</th>
                    <th scope="col" className="fr-col--sm" style={{ textAlign: 'center' }}>P</th>
                    <th scope="col" className="fr-col--xs" style={{ textAlign: 'right' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {daData.cadre2_FonctionnalitesDonnees.fichiersMetiersDuSIApplicatif.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          className="fr-input"
                          type="text"
                          value={item.fichier}
                          onChange={(e) => {
                            const newItems = [...daData.cadre2_FonctionnalitesDonnees.fichiersMetiersDuSIApplicatif];
                            newItems[index].fichier = e.target.value;
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, fichiersMetiersDuSIApplicatif: newItems}});
                          }}
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={item.M}
                          onChange={(e) => {
                            const newItems = [...daData.cadre2_FonctionnalitesDonnees.fichiersMetiersDuSIApplicatif];
                            newItems[index].M = e.target.checked;
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, fichiersMetiersDuSIApplicatif: newItems}});
                          }}
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={item.R}
                          onChange={(e) => {
                            const newItems = [...daData.cadre2_FonctionnalitesDonnees.fichiersMetiersDuSIApplicatif];
                            newItems[index].R = e.target.checked;
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, fichiersMetiersDuSIApplicatif: newItems}});
                          }}
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={item.E}
                          onChange={(e) => {
                            const newItems = [...daData.cadre2_FonctionnalitesDonnees.fichiersMetiersDuSIApplicatif];
                            newItems[index].E = e.target.checked;
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, fichiersMetiersDuSIApplicatif: newItems}});
                          }}
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={item.P}
                          onChange={(e) => {
                            const newItems = [...daData.cadre2_FonctionnalitesDonnees.fichiersMetiersDuSIApplicatif];
                            newItems[index].P = e.target.checked;
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, fichiersMetiersDuSIApplicatif: newItems}});
                          }}
                        />
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <button
                          className="fr-btn fr-btn--sm fr-btn--secondary"
                          type="button"
                          onClick={() => {
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, fichiersMetiersDuSIApplicatif: daData.cadre2_FonctionnalitesDonnees.fichiersMetiersDuSIApplicatif.filter((_, i) => i !== index)}});
                          }}
                        >
                          Supprimer
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
                    setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, fichiersMetiersDuSIApplicatif: [...daData.cadre2_FonctionnalitesDonnees.fichiersMetiersDuSIApplicatif, {fichier: "", M: false, R: false, E: false, P: false}]}});
                  }}
                >
                  <span className="fr-icon-add-line" aria-hidden="true"></span>
                  Ajouter un fichier
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Référentiel données (hors SI) */}
      <h3 className="fr-h3 fr-mt-6w">Référentiel données (hors SI)</h3>
      <div className="fr-table fr-table--no-caption fr-table--bordered fr-table--sm">
        <div className="fr-table__wrapper">
          <div className="fr-table__container">
            <div className="fr-table__content">
              <table>
                <caption>Référentiel données (hors SI)</caption>
                <thead>
                  <tr>
                    <th scope="col" className="fr-col--md">Référentiel</th>
                    <th scope="col" className="fr-col--md">Mode échange</th>
                    <th scope="col" className="fr-col--sm" style={{ textAlign: 'center' }}>M</th>
                    <th scope="col" className="fr-col--sm" style={{ textAlign: 'center' }}>R</th>
                    <th scope="col" className="fr-col--sm" style={{ textAlign: 'center' }}>E</th>
                    <th scope="col" className="fr-col--sm" style={{ textAlign: 'center' }}>P</th>
                    <th scope="col" className="fr-col--xs" style={{ textAlign: 'right' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {daData.cadre2_FonctionnalitesDonnees.referentielsDonneesHorsSI.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          className="fr-input"
                          type="text"
                          value={item.referentiel}
                          onChange={(e) => {
                            const newItems = [...daData.cadre2_FonctionnalitesDonnees.referentielsDonneesHorsSI];
                            newItems[index].referentiel = e.target.value;
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, referentielsDonneesHorsSI: newItems}});
                          }}
                        />
                      </td>
                      <td>
                        <input
                          className="fr-input"
                          type="text"
                          value={item.modeEchange}
                          onChange={(e) => {
                            const newItems = [...daData.cadre2_FonctionnalitesDonnees.referentielsDonneesHorsSI];
                            newItems[index].modeEchange = e.target.value;
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, referentielsDonneesHorsSI: newItems}});
                          }}
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={item.M}
                          onChange={(e) => {
                            const newItems = [...daData.cadre2_FonctionnalitesDonnees.referentielsDonneesHorsSI];
                            newItems[index].M = e.target.checked;
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, referentielsDonneesHorsSI: newItems}});
                          }}
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={item.R}
                          onChange={(e) => {
                            const newItems = [...daData.cadre2_FonctionnalitesDonnees.referentielsDonneesHorsSI];
                            newItems[index].R = e.target.checked;
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, referentielsDonneesHorsSI: newItems}});
                          }}
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={item.E}
                          onChange={(e) => {
                            const newItems = [...daData.cadre2_FonctionnalitesDonnees.referentielsDonneesHorsSI];
                            newItems[index].E = e.target.checked;
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, referentielsDonneesHorsSI: newItems}});
                          }}
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={item.P}
                          onChange={(e) => {
                            const newItems = [...daData.cadre2_FonctionnalitesDonnees.referentielsDonneesHorsSI];
                            newItems[index].P = e.target.checked;
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, referentielsDonneesHorsSI: newItems}});
                          }}
                        />
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <button
                          className="fr-btn fr-btn--sm fr-btn--secondary"
                          type="button"
                          onClick={() => {
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, referentielsDonneesHorsSI: daData.cadre2_FonctionnalitesDonnees.referentielsDonneesHorsSI.filter((_, i) => i !== index)}});
                          }}
                        >
                          Supprimer
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
                    setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, referentielsDonneesHorsSI: [...daData.cadre2_FonctionnalitesDonnees.referentielsDonneesHorsSI, {referentiel: "", modeEchange: "", M: false, R: false, E: false, P: false}]}});
                  }}
                >
                  <span className="fr-icon-add-line" aria-hidden="true"></span>
                  Ajouter un référentiel
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

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
      <div className="fr-table fr-table--no-caption fr-table--bordered fr-table--sm">
        <div className="fr-table__wrapper">
          <div className="fr-table__container">
            <div className="fr-table__content">
              <table>
                <caption>Services utilisés par application</caption>
                <thead>
                  <tr>
                    <th scope="col" className="fr-col--md">Service</th>
                    <th scope="col" className="fr-col--md">Mode échange</th>
                    <th scope="col" className="fr-col--sm" style={{ textAlign: 'center' }}>M</th>
                    <th scope="col" className="fr-col--sm" style={{ textAlign: 'center' }}>R</th>
                    <th scope="col" className="fr-col--sm" style={{ textAlign: 'center' }}>E</th>
                    <th scope="col" className="fr-col--sm" style={{ textAlign: 'center' }}>P</th>
                    <th scope="col" className="fr-col--xs" style={{ textAlign: 'right' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {daData.cadre2_FonctionnalitesDonnees.servicesUtilisesParApplication.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          className="fr-input"
                          type="text"
                          value={item.service}
                          onChange={(e) => {
                            const newItems = [...daData.cadre2_FonctionnalitesDonnees.servicesUtilisesParApplication];
                            newItems[index].service = e.target.value;
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, servicesUtilisesParApplication: newItems}});
                          }}
                        />
                      </td>
                      <td>
                        <input
                          className="fr-input"
                          type="text"
                          value={item.modeEchange}
                          onChange={(e) => {
                            const newItems = [...daData.cadre2_FonctionnalitesDonnees.servicesUtilisesParApplication];
                            newItems[index].modeEchange = e.target.value;
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, servicesUtilisesParApplication: newItems}});
                          }}
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={item.M}
                          onChange={(e) => {
                            const newItems = [...daData.cadre2_FonctionnalitesDonnees.servicesUtilisesParApplication];
                            newItems[index].M = e.target.checked;
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, servicesUtilisesParApplication: newItems}});
                          }}
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={item.R}
                          onChange={(e) => {
                            const newItems = [...daData.cadre2_FonctionnalitesDonnees.servicesUtilisesParApplication];
                            newItems[index].R = e.target.checked;
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, servicesUtilisesParApplication: newItems}});
                          }}
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={item.E}
                          onChange={(e) => {
                            const newItems = [...daData.cadre2_FonctionnalitesDonnees.servicesUtilisesParApplication];
                            newItems[index].E = e.target.checked;
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, servicesUtilisesParApplication: newItems}});
                          }}
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={item.P}
                          onChange={(e) => {
                            const newItems = [...daData.cadre2_FonctionnalitesDonnees.servicesUtilisesParApplication];
                            newItems[index].P = e.target.checked;
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, servicesUtilisesParApplication: newItems}});
                          }}
                        />
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <button
                          className="fr-btn fr-btn--sm fr-btn--secondary"
                          type="button"
                          onClick={() => {
                            setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, servicesUtilisesParApplication: daData.cadre2_FonctionnalitesDonnees.servicesUtilisesParApplication.filter((_, i) => i !== index)}});
                          }}
                        >
                          Supprimer
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
                    setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, servicesUtilisesParApplication: [...daData.cadre2_FonctionnalitesDonnees.servicesUtilisesParApplication, {service: "", modeEchange: "", M: false, R: false, E: false, P: false}]}});
                  }}
                >
                  <span className="fr-icon-add-line" aria-hidden="true"></span>
                  Ajouter un service
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
