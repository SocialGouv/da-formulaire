import Image from "next/image";
import { auth } from "@/auth";
import { getFormsForUser, getAllForms } from "@/lib/db/queries/forms";
import { getVersionCountsForForms } from "@/lib/db/queries/versions";
import ProConnectLoginButton from "./_components/ProConnectLoginButton";
import DATable from "./_components/DATable";
import CreateDAModal from "./_components/CreateDAModal";

export default async function Home() {
  const session = await auth();

  const daList =
    session?.user?.dbUserId
      ? await getFormsForUser(session.user.dbUserId, session.user.isAdmin)
      : [];

  const allDaList =
    session?.user?.dbUserId && !session.user.isAdmin
      ? await getAllForms()
      : [];

  // IDs des DA partagés pour les exclure de la liste "tous les DA"
  const sharedIds = new Set(daList.map((da) => da.id));
  const otherDaList = allDaList.filter((da) => !sharedIds.has(da.id));

  // Compteurs de versions pour tous les DA affichés
  const allDisplayedIds = session?.user?.isAdmin
    ? daList.map((da) => da.id)
    : [...daList.map((da) => da.id), ...otherDaList.map((da) => da.id)];

  const versionCounts =
    allDisplayedIds.length > 0
      ? await getVersionCountsForForms(allDisplayedIds)
      : {};

  return (
    <>
      {session?.user ? (
        /* Utilisateur connecté : accès direct aux DA */
        <main className="fr-container fr-my-6w">
          <div className="fr-grid-row fr-grid-row--center">
            <div className="fr-col-12">
              {session.user.isAdmin ? (
                /* --- Admin: une seule liste avec toutes les actions --- */
                <>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <h1 className="fr-h1" style={{ marginBottom: 0 }}>
                      Documents d&apos;Architecture
                    </h1>
                    <CreateDAModal />
                  </div>
                  {daList.length > 0 ? (
                    <DATable
                      daList={daList.map((da) => ({
                        ...da,
                        createdAt: da.createdAt.toISOString(),
                        updatedAt: da.updatedAt.toISOString(),
                      }))}
                      versionCounts={versionCounts}
                      mode="admin"
                    />
                  ) : (
                    <div className="fr-callout fr-callout--info fr-mt-6w">
                      <p className="fr-callout__text">
                        Aucun document d&apos;architecture trouvé. Créez votre
                        premier DA !
                      </p>
                    </div>
                  )}
                </>
              ) : (
                /* --- Non-admin: deux listes --- */
                <>
                  {/* Section 1 : DA partagés avec moi */}
                  <h2 className="fr-h3" style={{ marginBottom: "1.5rem" }}>
                    DA partagés avec moi
                  </h2>
                  {daList.length > 0 ? (
                    <DATable
                      daList={daList.map((da) => ({
                        ...da,
                        createdAt: da.createdAt.toISOString(),
                        updatedAt: da.updatedAt.toISOString(),
                      }))}
                      versionCounts={versionCounts}
                      mode="editor"
                    />
                  ) : (
                    <div className="fr-callout fr-callout--info">
                      <p className="fr-callout__text">
                        Aucun document d&apos;architecture ne vous a été partagé
                        pour le moment.
                      </p>
                    </div>
                  )}

                  {/* Section 2 : Tous les autres DA (readonly) */}
                  <h2
                    className="fr-h3 fr-mt-4w"
                    style={{ marginBottom: "1.5rem" }}
                  >
                    Tous les Documents d&apos;Architecture
                  </h2>
                  {otherDaList.length > 0 ? (
                    <DATable
                      daList={otherDaList.map((da) => ({
                        ...da,
                        createdAt: da.createdAt.toISOString(),
                        updatedAt: da.updatedAt.toISOString(),
                      }))}
                      versionCounts={versionCounts}
                      mode="viewer"
                    />
                  ) : (
                    <div className="fr-callout fr-callout--info">
                      <p className="fr-callout__text">
                        Aucun autre document d&apos;architecture disponible.
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </main>
      ) : (
        /* Utilisateur non connecté : hero marketing */
        <div className="fr-container fr-py-12w">
          <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle">
            <div className="fr-col-12 fr-col-md-6">
              <h1 className="fr-h1">Documents d&apos;Architecture</h1>
              <p className="fr-text--lead fr-mb-3w">
                Créez, éditez et exportez vos Documents d&apos;Architecture (DA)
                conformes aux standards de l&apos;État.
              </p>
              <p className="fr-text--sm fr-mb-5w">
                Structurez votre architecture SI en 12 cadres détaillés : projet,
                fonctionnalités, contraintes, exigences, architectures (acteurs,
                fonctionnelle, applicative, technique), serveurs, flux,
                dimensionnement et annexes.
              </p>
              <ProConnectLoginButton />
            </div>
            <div className="fr-col-12 fr-col-md-6">
              <Image
                src="/hero-api.svg"
                alt="Illustration API"
                width={600}
                height={600}
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
