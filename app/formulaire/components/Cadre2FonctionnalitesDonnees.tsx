import type { DAData } from "@/types/da.types";
import { Input } from "@codegouvfr/react-dsfr/Input";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { Checkbox } from "@codegouvfr/react-dsfr/Checkbox";
import { RadioButtons } from "@codegouvfr/react-dsfr/RadioButtons";
import { Table } from "@codegouvfr/react-dsfr/Table";

interface CadreProps {
  daData: DAData;
  setDAData: (data: DAData) => void;
}

export default function Cadre2FonctionnalitesDonnees({ daData, setDAData }: CadreProps) {
  return (
    <div>
      <h2 className="fr-h2">Cadre 2 : Fonctionnalités - Données</h2>

      {/* Fonctionnalités du SI applicatif */}
      <h3 className="fr-h3">Fonctionnalités du SI applicatif</h3>
      <p className="fr-text--sm">M = Ministère, R = Réseau Interministériel, E = Extranet, P = Public</p>
      <Table
        headers={["Fonctionnalité", "M", "R", "E", "P", "Actions"]}
        data={[
          ...daData.cadre2_FonctionnalitesDonnees.fonctionnalitesDuSIApplicatif.map((item, index) => [
            <Input
              key={`fonc-input-${index}`}
              nativeInputProps={{
                value: item.fonctionnalite,
                onChange: (e) => {
                  const newItems = [...daData.cadre2_FonctionnalitesDonnees.fonctionnalitesDuSIApplicatif];
                  newItems[index].fonctionnalite = e.target.value;
                  setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, fonctionnalitesDuSIApplicatif: newItems}});
                }
              }}
            />,
            <Checkbox
              key={`fonc-m-${index}`}
              options={[{
                label: "",
                nativeInputProps: {
                  checked: item.M,
                  onChange: (e) => {
                    const newItems = [...daData.cadre2_FonctionnalitesDonnees.fonctionnalitesDuSIApplicatif];
                    newItems[index].M = e.target.checked;
                    setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, fonctionnalitesDuSIApplicatif: newItems}});
                  }
                }
              }]}
            />,
            <Checkbox
              key={`fonc-r-${index}`}
              options={[{
                label: "",
                nativeInputProps: {
                  checked: item.R,
                  onChange: (e) => {
                    const newItems = [...daData.cadre2_FonctionnalitesDonnees.fonctionnalitesDuSIApplicatif];
                    newItems[index].R = e.target.checked;
                    setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, fonctionnalitesDuSIApplicatif: newItems}});
                  }
                }
              }]}
            />,
            <Checkbox
              key={`fonc-e-${index}`}
              options={[{
                label: "",
                nativeInputProps: {
                  checked: item.E,
                  onChange: (e) => {
                    const newItems = [...daData.cadre2_FonctionnalitesDonnees.fonctionnalitesDuSIApplicatif];
                    newItems[index].E = e.target.checked;
                    setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, fonctionnalitesDuSIApplicatif: newItems}});
                  }
                }
              }]}
            />,
            <Checkbox
              key={`fonc-p-${index}`}
              options={[{
                label: "",
                nativeInputProps: {
                  checked: item.P,
                  onChange: (e) => {
                    const newItems = [...daData.cadre2_FonctionnalitesDonnees.fonctionnalitesDuSIApplicatif];
                    newItems[index].P = e.target.checked;
                    setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, fonctionnalitesDuSIApplicatif: newItems}});
                  }
                }
              }]}
            />,
            <Button
              key={`fonc-btn-${index}`}
              size="small"
              priority="secondary"
              onClick={() => {
                const newItems = daData.cadre2_FonctionnalitesDonnees.fonctionnalitesDuSIApplicatif.filter((_, i) => i !== index);
                setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, fonctionnalitesDuSIApplicatif: newItems}});
              }}
            >
              Supprimer
            </Button>
          ]),
          [
            <div key="total-label" style={{ backgroundColor: '#e8edff', fontWeight: 'bold', padding: '8px' }}>Total fonctionnalités</div>,
            <div key="total-m" style={{ backgroundColor: '#e8edff', fontWeight: 'bold', textAlign: 'center', padding: '8px' }}>
              {daData.cadre2_FonctionnalitesDonnees.fonctionnalitesDuSIApplicatif.filter(item => item.M).length}
            </div>,
            <div key="total-r" style={{ backgroundColor: '#e8edff', fontWeight: 'bold', textAlign: 'center', padding: '8px' }}>
              {daData.cadre2_FonctionnalitesDonnees.fonctionnalitesDuSIApplicatif.filter(item => item.R).length}
            </div>,
            <div key="total-e" style={{ backgroundColor: '#e8edff', fontWeight: 'bold', textAlign: 'center', padding: '8px' }}>
              {daData.cadre2_FonctionnalitesDonnees.fonctionnalitesDuSIApplicatif.filter(item => item.E).length}
            </div>,
            <div key="total-p" style={{ backgroundColor: '#e8edff', fontWeight: 'bold', textAlign: 'center', padding: '8px' }}>
              {daData.cadre2_FonctionnalitesDonnees.fonctionnalitesDuSIApplicatif.filter(item => item.P).length}
            </div>,
            <div key="total-actions" style={{ backgroundColor: '#e8edff', padding: '8px' }}></div>
          ]
        ]}
      />
      <Button
        size="small"
        className="fr-mt-2w"
        onClick={() => {
          setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, fonctionnalitesDuSIApplicatif: [
            ...daData.cadre2_FonctionnalitesDonnees.fonctionnalitesDuSIApplicatif,
            {fonctionnalite: "", M: false, R: false, E: false, P: false}
          ]}});
        }}
      >
        + Ajouter une fonctionnalité
      </Button>

      {/* Données métier du SI Applicatif */}
      <h3 className="fr-h3 fr-mt-6w">Données métier du SI Applicatif</h3>
      <Table
        headers={["Donnée", "M", "R", "E", "P", "Actions"]}
        data={[
          ...daData.cadre2_FonctionnalitesDonnees.donneesMetierDuSIApplicatif.map((item, index) => [
            <Input
              key={`donnee-input-${index}`}
              nativeInputProps={{
                value: item.donnee,
                onChange: (e) => {
                  const newItems = [...daData.cadre2_FonctionnalitesDonnees.donneesMetierDuSIApplicatif];
                  newItems[index].donnee = e.target.value;
                  setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, donneesMetierDuSIApplicatif: newItems}});
                }
              }}
            />,
            <Checkbox
              key={`donnee-m-${index}`}
              options={[
                {
                  label: "",
                  nativeInputProps: {
                    checked: item.M,
                    onChange: (e) => {
                      const newItems = [...daData.cadre2_FonctionnalitesDonnees.donneesMetierDuSIApplicatif];
                      newItems[index].M = e.target.checked;
                      setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, donneesMetierDuSIApplicatif: newItems}});
                    }
                  }
                }
              ]}
            />,
            <Checkbox
              key={`donnee-r-${index}`}
              options={[
                {
                  label: "",
                  nativeInputProps: {
                    checked: item.R,
                    onChange: (e) => {
                      const newItems = [...daData.cadre2_FonctionnalitesDonnees.donneesMetierDuSIApplicatif];
                      newItems[index].R = e.target.checked;
                      setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, donneesMetierDuSIApplicatif: newItems}});
                    }
                  }
                }
              ]}
            />,
            <Checkbox
              key={`donnee-e-${index}`}
              options={[
                {
                  label: "",
                  nativeInputProps: {
                    checked: item.E,
                    onChange: (e) => {
                      const newItems = [...daData.cadre2_FonctionnalitesDonnees.donneesMetierDuSIApplicatif];
                      newItems[index].E = e.target.checked;
                      setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, donneesMetierDuSIApplicatif: newItems}});
                    }
                  }
                }
              ]}
            />,
            <Checkbox
              key={`donnee-p-${index}`}
              options={[
                {
                  label: "",
                  nativeInputProps: {
                    checked: item.P,
                    onChange: (e) => {
                      const newItems = [...daData.cadre2_FonctionnalitesDonnees.donneesMetierDuSIApplicatif];
                      newItems[index].P = e.target.checked;
                      setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, donneesMetierDuSIApplicatif: newItems}});
                    }
                  }
                }
              ]}
            />,
            <Button
              key={`donnee-btn-${index}`}
              size="small"
              priority="secondary"
              onClick={() => {setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, donneesMetierDuSIApplicatif: daData.cadre2_FonctionnalitesDonnees.donneesMetierDuSIApplicatif.filter((_, i) => i !== index)}});}}
            >
              Supprimer
            </Button>
          ])
        ]}
      />
      <Button
        size="small"
        className="fr-mt-2w"
        onClick={() => {setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, donneesMetierDuSIApplicatif: [...daData.cadre2_FonctionnalitesDonnees.donneesMetierDuSIApplicatif, {donnee: "", M: false, R: false, E: false, P: false}]}});}}
      >
        + Ajouter une donnée
      </Button>

      {/* Fichiers métiers du SI applicatif */}
      <h3 className="fr-h3 fr-mt-6w">Fichiers métiers du SI applicatif</h3>
      <Table
        headers={["Fichier", "M", "R", "E", "P", "Actions"]}
        data={[
          ...daData.cadre2_FonctionnalitesDonnees.fichiersMetiersDuSIApplicatif.map((item, index) => [
            <Input
              key={`fichier-input-${index}`}
              nativeInputProps={{
                value: item.fichier,
                onChange: (e) => {
                  const newItems = [...daData.cadre2_FonctionnalitesDonnees.fichiersMetiersDuSIApplicatif];
                  newItems[index].fichier = e.target.value;
                  setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, fichiersMetiersDuSIApplicatif: newItems}});
                }
              }}
            />,
            <Checkbox
              key={`fichier-m-${index}`}
              options={[
                {
                  label: "",
                  nativeInputProps: {
                    checked: item.M,
                    onChange: (e) => {
                      const newItems = [...daData.cadre2_FonctionnalitesDonnees.fichiersMetiersDuSIApplicatif];
                      newItems[index].M = e.target.checked;
                      setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, fichiersMetiersDuSIApplicatif: newItems}});
                    }
                  }
                }
              ]}
            />,
            <Checkbox
              key={`fichier-r-${index}`}
              options={[
                {
                  label: "",
                  nativeInputProps: {
                    checked: item.R,
                    onChange: (e) => {
                      const newItems = [...daData.cadre2_FonctionnalitesDonnees.fichiersMetiersDuSIApplicatif];
                      newItems[index].R = e.target.checked;
                      setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, fichiersMetiersDuSIApplicatif: newItems}});
                    }
                  }
                }
              ]}
            />,
            <Checkbox
              key={`fichier-e-${index}`}
              options={[
                {
                  label: "",
                  nativeInputProps: {
                    checked: item.E,
                    onChange: (e) => {
                      const newItems = [...daData.cadre2_FonctionnalitesDonnees.fichiersMetiersDuSIApplicatif];
                      newItems[index].E = e.target.checked;
                      setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, fichiersMetiersDuSIApplicatif: newItems}});
                    }
                  }
                }
              ]}
            />,
            <Checkbox
              key={`fichier-p-${index}`}
              options={[
                {
                  label: "",
                  nativeInputProps: {
                    checked: item.P,
                    onChange: (e) => {
                      const newItems = [...daData.cadre2_FonctionnalitesDonnees.fichiersMetiersDuSIApplicatif];
                      newItems[index].P = e.target.checked;
                      setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, fichiersMetiersDuSIApplicatif: newItems}});
                    }
                  }
                }
              ]}
            />,
            <Button
              key={`fichier-btn-${index}`}
              size="small"
              priority="secondary"
              onClick={() => {setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, fichiersMetiersDuSIApplicatif: daData.cadre2_FonctionnalitesDonnees.fichiersMetiersDuSIApplicatif.filter((_, i) => i !== index)}});}}
            >
              Supprimer
            </Button>
          ])
        ]}
      />
      <Button
        size="small"
        className="fr-mt-2w"
        onClick={() => {setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, fichiersMetiersDuSIApplicatif: [...daData.cadre2_FonctionnalitesDonnees.fichiersMetiersDuSIApplicatif, {fichier: "", M: false, R: false, E: false, P: false}]}});}}
      >
        + Ajouter un fichier
      </Button>

      {/* Référentiel données (hors SI) */}
      <h3 className="fr-h3 fr-mt-6w">Référentiel données (hors SI)</h3>
      <Table
        headers={["Référentiel", "Mode échange", "M", "R", "E", "P", "Actions"]}
        data={daData.cadre2_FonctionnalitesDonnees.referentielsDonneesHorsSI.map((item, index) => [
          <Input
            key={`referentiel-input-${index}`}
            nativeInputProps={{
              value: item.referentiel,
              onChange: (e) => {
                const newItems = [...daData.cadre2_FonctionnalitesDonnees.referentielsDonneesHorsSI];
                newItems[index].referentiel = e.target.value;
                setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, referentielsDonneesHorsSI: newItems}});
              }
            }}
          />,
          <Input
            key={`referentiel-mode-${index}`}
            nativeInputProps={{
              value: item.modeEchange,
              onChange: (e) => {
                const newItems = [...daData.cadre2_FonctionnalitesDonnees.referentielsDonneesHorsSI];
                newItems[index].modeEchange = e.target.value;
                setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, referentielsDonneesHorsSI: newItems}});
              }
            }}
          />,
          <Checkbox
            key={`referentiel-m-${index}`}
            options={[
              {
                label: "",
                nativeInputProps: {
                  checked: item.M,
                  onChange: (e) => {
                    const newItems = [...daData.cadre2_FonctionnalitesDonnees.referentielsDonneesHorsSI];
                    newItems[index].M = e.target.checked;
                    setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, referentielsDonneesHorsSI: newItems}});
                  }
                }
              }
            ]}
          />,
          <Checkbox
            key={`referentiel-r-${index}`}
            options={[
              {
                label: "",
                nativeInputProps: {
                  checked: item.R,
                  onChange: (e) => {
                    const newItems = [...daData.cadre2_FonctionnalitesDonnees.referentielsDonneesHorsSI];
                    newItems[index].R = e.target.checked;
                    setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, referentielsDonneesHorsSI: newItems}});
                  }
                }
              }
            ]}
          />,
          <Checkbox
            key={`referentiel-e-${index}`}
            options={[
              {
                label: "",
                nativeInputProps: {
                  checked: item.E,
                  onChange: (e) => {
                    const newItems = [...daData.cadre2_FonctionnalitesDonnees.referentielsDonneesHorsSI];
                    newItems[index].E = e.target.checked;
                    setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, referentielsDonneesHorsSI: newItems}});
                  }
                }
              }
            ]}
          />,
          <Checkbox
            key={`referentiel-p-${index}`}
            options={[
              {
                label: "",
                nativeInputProps: {
                  checked: item.P,
                  onChange: (e) => {
                    const newItems = [...daData.cadre2_FonctionnalitesDonnees.referentielsDonneesHorsSI];
                    newItems[index].P = e.target.checked;
                    setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, referentielsDonneesHorsSI: newItems}});
                  }
                }
              }
            ]}
          />,
          <Button
            key={`referentiel-btn-${index}`}
            size="small"
            priority="secondary"
            onClick={() => {setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, referentielsDonneesHorsSI: daData.cadre2_FonctionnalitesDonnees.referentielsDonneesHorsSI.filter((_, i) => i !== index)}});}}
          >
            Supprimer
          </Button>
        ])}
      />
      <Button
        size="small"
        className="fr-mt-2w"
        onClick={() => {setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, referentielsDonneesHorsSI: [...daData.cadre2_FonctionnalitesDonnees.referentielsDonneesHorsSI, {referentiel: "", modeEchange: "", M: false, R: false, E: false, P: false}]}});}}
      >
        + Ajouter un référentiel
      </Button>

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
                <Checkbox
                  key={`tresSensible-${key}`}
                  options={[
                    {
                      label,
                      nativeInputProps: {
                        checked: value === "Très sensible",
                        onChange: (e) => {
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
                        }
                      }
                    }
                  ]}
                />
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
                  <Checkbox
                    key={`sensible-${key}`}
                    options={[
                      {
                        label,
                        nativeInputProps: {
                          checked: value === "Sensible",
                          onChange: (e) => {
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
                          }
                        }
                      }
                    ]}
                  />
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
                  <Checkbox
                    key={`public-${key}`}
                    options={[
                      {
                        label,
                        nativeInputProps: {
                          checked: value !== "",
                          onChange: (e) => {
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
                          }
                        }
                      }
                    ]}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Services utilisés par application */}
      <h3 className="fr-h3 fr-mt-6w">Services utilisés par application (externes au SI applicatif)</h3>
      <h4 className="fr-h4">SI SOURCE</h4>
      <Table
        headers={["Service", "Mode échange", "M", "R", "E", "P", "Actions"]}
        data={daData.cadre2_FonctionnalitesDonnees.servicesUtilisesParApplication.map((item, index) => [
          <Input
            key={`service-input-${index}`}
            nativeInputProps={{
              value: item.service,
              onChange: (e) => {
                const newItems = [...daData.cadre2_FonctionnalitesDonnees.servicesUtilisesParApplication];
                newItems[index].service = e.target.value;
                setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, servicesUtilisesParApplication: newItems}});
              }
            }}
          />,
          <Input
            key={`service-mode-${index}`}
            nativeInputProps={{
              value: item.modeEchange,
              onChange: (e) => {
                const newItems = [...daData.cadre2_FonctionnalitesDonnees.servicesUtilisesParApplication];
                newItems[index].modeEchange = e.target.value;
                setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, servicesUtilisesParApplication: newItems}});
              }
            }}
          />,
          <Checkbox
            key={`service-m-${index}`}
            options={[
              {
                label: "",
                nativeInputProps: {
                  checked: item.M,
                  onChange: (e) => {
                    const newItems = [...daData.cadre2_FonctionnalitesDonnees.servicesUtilisesParApplication];
                    newItems[index].M = e.target.checked;
                    setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, servicesUtilisesParApplication: newItems}});
                  }
                }
              }
            ]}
          />,
          <Checkbox
            key={`service-r-${index}`}
            options={[
              {
                label: "",
                nativeInputProps: {
                  checked: item.R,
                  onChange: (e) => {
                    const newItems = [...daData.cadre2_FonctionnalitesDonnees.servicesUtilisesParApplication];
                    newItems[index].R = e.target.checked;
                    setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, servicesUtilisesParApplication: newItems}});
                  }
                }
              }
            ]}
          />,
          <Checkbox
            key={`service-e-${index}`}
            options={[
              {
                label: "",
                nativeInputProps: {
                  checked: item.E,
                  onChange: (e) => {
                    const newItems = [...daData.cadre2_FonctionnalitesDonnees.servicesUtilisesParApplication];
                    newItems[index].E = e.target.checked;
                    setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, servicesUtilisesParApplication: newItems}});
                  }
                }
              }
            ]}
          />,
          <Checkbox
            key={`service-p-${index}`}
            options={[
              {
                label: "",
                nativeInputProps: {
                  checked: item.P,
                  onChange: (e) => {
                    const newItems = [...daData.cadre2_FonctionnalitesDonnees.servicesUtilisesParApplication];
                    newItems[index].P = e.target.checked;
                    setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, servicesUtilisesParApplication: newItems}});
                  }
                }
              }
            ]}
          />,
          <Button
            key={`service-btn-${index}`}
            size="small"
            priority="secondary"
            onClick={() => {setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, servicesUtilisesParApplication: daData.cadre2_FonctionnalitesDonnees.servicesUtilisesParApplication.filter((_, i) => i !== index)}});}}
          >
            Supprimer
          </Button>
        ])}
      />
      <Button
        size="small"
        className="fr-mt-2w"
        onClick={() => {setDAData({...daData, cadre2_FonctionnalitesDonnees: {...daData.cadre2_FonctionnalitesDonnees, servicesUtilisesParApplication: [...daData.cadre2_FonctionnalitesDonnees.servicesUtilisesParApplication, {service: "", modeEchange: "", M: false, R: false, E: false, P: false}]}});}}
      >
        + Ajouter un service
      </Button>
    </div>
  );
}
