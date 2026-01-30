import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";

interface DA {
  id: string;
  nom: string;
  dateCreation: string;
  dateModification: string;
}

async function getDAList(): Promise<DA[]> {
  try {
    const filePath = path.join(process.cwd(), "public/da/index.json");
    const fileContents = await fs.readFile(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Erreur lors du chargement de la liste des DA:", error);
    return [];
  }
}

export default async function Home() {
  const daList = await getDAList();

  return (
    <main className="fr-container fr-my-6w">
      <div className="fr-grid-row fr-grid-row--center">
        <div className="fr-col-12">
          <h1 className="fr-h1">Gestionnaire de Documents d'Architecture</h1>
          <p className="fr-text--lead">
            Créez et gérez vos Documents d'Architecture de manière structurée.
          </p>

          <div className="fr-mt-4w">
            <Link href="/formulaire?id=new" className="fr-btn fr-btn--lg fr-icon-add-line fr-btn--icon-left">
              Nouveau DA
            </Link>
          </div>

          {daList.length > 0 ? (
            <div className="fr-mt-6w">
              <h2 className="fr-h2">Mes Documents d'Architecture</h2>
              <div className="fr-table" style={{ marginTop: "2rem" }}>
                <table>
                  <thead>
                    <tr>
                      <th>Nom du projet</th>
                      <th>Date de création</th>
                      <th>Dernière modification</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {daList.map((da) => (
                      <tr key={da.id}>
                        <td>
                          <strong>{da.nom}</strong>
                        </td>
                        <td>{new Date(da.dateCreation).toLocaleDateString("fr-FR")}</td>
                        <td>{new Date(da.dateModification).toLocaleDateString("fr-FR")}</td>
                        <td>
                          <Link
                            href={`/formulaire?id=${da.id}`}
                            className="fr-btn fr-btn--sm fr-icon-edit-line fr-btn--icon-left"
                          >
                            Éditer
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="fr-callout fr-callout--info fr-mt-6w">
              <p className="fr-callout__text">
                Aucun document d'architecture trouvé. Créez votre premier DA !
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
