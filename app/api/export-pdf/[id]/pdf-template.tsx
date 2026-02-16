import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import type { DAData, SensibiliteDonnees } from "@/types/da.types";

// ============================================================================
// COULEURS
// ============================================================================
const COLORS = {
  bleu: "#000091",
  bleuClair: "#e3e3fd",
  gris50: "#f6f6f6",
  gris100: "#eeeeee",
  gris200: "#dddddd",
  gris400: "#929292",
  gris600: "#666666",
  blanc: "#ffffff",
  noir: "#161616",
  rouge: "#e1000f",
  rougeClair: "#ffe9e6",
  jaune: "#ffca00",
  jauneClair: "#fef7da",
  vert: "#18753c",
  vertClair: "#b8fec9",
};

// ============================================================================
// STYLES
// ============================================================================
const s = StyleSheet.create({
  // Page
  page: {
    paddingTop: 60,
    paddingBottom: 50,
    paddingHorizontal: 40,
    fontSize: 9,
    fontFamily: "Helvetica",
    color: COLORS.noir,
  },

  // En-tête fixe
  pageHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 40,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.bleu,
  },
  pageHeaderText: {
    fontSize: 7,
    color: COLORS.gris600,
    flex: 1,
  },
  pageNumber: {
    fontSize: 7,
    color: COLORS.gris600,
  },

  // Pied de page
  pageFooter: {
    position: "absolute",
    bottom: 15,
    left: 40,
    right: 40,
    textAlign: "center",
    fontSize: 7,
    color: COLORS.gris400,
  },

  // Page de garde
  coverBanner: {
    backgroundColor: COLORS.bleu,
    marginHorizontal: -40,
    marginTop: -60,
    paddingVertical: 30,
    paddingHorizontal: 40,
    marginBottom: 40,
  },
  coverBannerText: {
    fontSize: 11,
    color: COLORS.blanc,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 2,
  },
  coverTitle: {
    fontSize: 28,
    color: COLORS.bleu,
    fontFamily: "Helvetica-Bold",
    textAlign: "center",
    marginTop: 80,
    marginBottom: 15,
  },
  coverProject: {
    fontSize: 18,
    color: COLORS.noir,
    textAlign: "center",
    marginBottom: 60,
  },
  coverInfoBox: {
    backgroundColor: COLORS.gris50,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.bleu,
    padding: 15,
    marginTop: "auto",
    marginBottom: 20,
  },
  coverInfoText: {
    fontSize: 9,
    color: COLORS.gris600,
    lineHeight: 1.6,
  },

  // Sommaire
  tocTitle: {
    fontSize: 20,
    color: COLORS.bleu,
    fontFamily: "Helvetica-Bold",
    marginBottom: 30,
  },
  tocItem: {
    flexDirection: "row",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gris100,
  },
  tocNumber: {
    fontSize: 11,
    color: COLORS.bleu,
    fontFamily: "Helvetica-Bold",
    width: 30,
  },
  tocText: {
    fontSize: 11,
    color: COLORS.noir,
  },

  // Bandeau section
  sectionBanner: {
    backgroundColor: COLORS.bleu,
    marginHorizontal: -40,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginBottom: 15,
    marginTop: 5,
  },
  sectionBannerText: {
    fontSize: 14,
    color: COLORS.blanc,
    fontFamily: "Helvetica-Bold",
  },

  // Sous-titre
  subsection: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: COLORS.bleu,
    marginTop: 15,
    marginBottom: 6,
    paddingLeft: 8,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.bleu,
  },

  // Champ texte avec callout
  callout: {
    backgroundColor: COLORS.gris50,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.bleu,
    padding: 8,
    marginBottom: 8,
  },
  calloutText: {
    fontSize: 9,
    lineHeight: 1.5,
  },

  // Texte vide
  emptyText: {
    fontSize: 9,
    color: COLORS.gris400,
    fontStyle: "italic",
  },

  // Tableaux
  table: {
    width: "100%",
    marginTop: 6,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.gris200,
  },
  thRow: {
    flexDirection: "row",
    backgroundColor: COLORS.bleu,
    minHeight: 26,
    alignItems: "center",
  },
  thCell: {
    padding: 5,
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: COLORS.blanc,
  },
  tdRow: {
    flexDirection: "row",
    minHeight: 22,
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.gris200,
  },
  tdRowAlt: {
    flexDirection: "row",
    minHeight: 22,
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.gris200,
    backgroundColor: COLORS.gris50,
  },
  tdCell: {
    padding: 5,
    fontSize: 8,
  },
  tdCellCenter: {
    padding: 5,
    fontSize: 8,
    textAlign: "center",
  },
  tdCellBold: {
    padding: 5,
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
  },

  // Key-value
  kvRow: {
    flexDirection: "row",
    marginBottom: 4,
  },
  kvLabel: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: COLORS.gris600,
    width: "40%",
  },
  kvValue: {
    fontSize: 9,
    flex: 1,
  },

  // Image
  diagramImage: {
    marginVertical: 10,
    marginHorizontal: "auto",
    maxWidth: "100%",
    maxHeight: 380,
  },
  diagramCaption: {
    fontSize: 8,
    color: COLORS.gris600,
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: 10,
  },

  // Sensibilité matrix
  sensGrid: {
    flexDirection: "row",
    marginTop: 6,
    marginBottom: 10,
  },
  sensCol: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.gris200,
  },
  sensHeader: {
    paddingVertical: 5,
    paddingHorizontal: 6,
    alignItems: "center",
  },
  sensHeaderText: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: COLORS.blanc,
  },
  sensItem: {
    paddingVertical: 2,
    paddingHorizontal: 6,
    fontSize: 8,
  },
  sensItemEmpty: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    fontSize: 8,
    color: COLORS.gris400,
    fontStyle: "italic",
  },

  // Serveur card
  serverCard: {
    borderWidth: 1,
    borderColor: COLORS.gris200,
    borderRadius: 2,
    padding: 10,
    marginBottom: 12,
  },
  serverName: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: COLORS.bleu,
    marginBottom: 6,
  },

  // Inline group
  inlineGroup: {
    flexDirection: "row",
    marginBottom: 4,
    gap: 20,
  },

  // Small label
  label: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: COLORS.gris600,
    marginBottom: 2,
  },
  value: {
    fontSize: 9,
    marginBottom: 6,
  },
});

// ============================================================================
// COMPOSANTS HELPERS
// ============================================================================

const PageHeader = ({ projectName }: { projectName: string }) => (
  <View style={s.pageHeader} fixed>
    <Text style={s.pageHeaderText}>Document d'Architecture — {projectName}</Text>
    <Text
      style={s.pageNumber}
      render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
    />
  </View>
);

const PageFooter = ({ projectName }: { projectName: string }) => (
  <Text style={s.pageFooter} fixed>
    Document d'Architecture — {projectName}
  </Text>
);

const SectionBanner = ({ number, title }: { number: number; title: string }) => (
  <View style={s.sectionBanner}>
    <Text style={s.sectionBannerText}>
      {number}. {title}
    </Text>
  </View>
);

const Subsection = ({ title }: { title: string }) => (
  <Text style={s.subsection}>{title}</Text>
);

const TextField = ({ value, label }: { value: string | undefined; label?: string }) => (
  <View wrap={false}>
    {label && <Text style={s.label}>{label}</Text>}
    <View style={s.callout}>
      <Text style={value ? s.calloutText : s.emptyText}>
        {value || "Non renseigné"}
      </Text>
    </View>
  </View>
);

const KV = ({ label, value }: { label: string; value: string | number | undefined }) => (
  <View style={s.kvRow}>
    <Text style={s.kvLabel}>{label}</Text>
    <Text style={value ? s.kvValue : s.emptyText}>{value || "—"}</Text>
  </View>
);

// ============================================================================
// TABLE HELPERS
// ============================================================================

interface Column {
  key: string;
  label: string;
  width: string;
  align?: "center" | "left" | "right";
  bold?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function DataTable({
  columns,
  data,
  filterKey,
  emptyMessage,
}: {
  columns: Column[];
  data: any[];
  filterKey?: string;
  emptyMessage?: string;
}) {
  const filtered = filterKey
    ? data.filter((row) => {
        const val = row[filterKey];
        return typeof val === "string" ? val.trim() !== "" : !!val;
      })
    : data;

  if (filtered.length === 0) {
    return (
      <View style={s.callout}>
        <Text style={s.emptyText}>{emptyMessage || "Aucune donnée"}</Text>
      </View>
    );
  }

  return (
    <View style={s.table}>
      <View style={s.thRow}>
        {columns.map((col) => (
          <Text
            key={col.key}
            style={[s.thCell, { width: col.width, textAlign: col.align || "left" }]}
          >
            {col.label}
          </Text>
        ))}
      </View>
      {filtered.map((row, i) => (
        <View key={i} style={i % 2 === 0 ? s.tdRow : s.tdRowAlt} wrap={false}>
          {columns.map((col) => (
            <Text
              key={col.key}
              style={[
                col.bold ? s.tdCellBold : col.align === "center" ? s.tdCellCenter : s.tdCell,
                { width: col.width },
              ]}
            >
              {formatCellValue(row[col.key])}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
}

function formatCellValue(val: unknown): string {
  if (val === true) return "✓";
  if (val === false || val === undefined || val === null) return "";
  if (typeof val === "number") return String(val);
  if (typeof val === "string") return val;
  if (Array.isArray(val)) return val.join(", ");
  return String(val);
}

// ============================================================================
// SENSIBILITE DES DONNEES
// ============================================================================

const SENSIBILITE_FIELDS: { key: keyof SensibiliteDonnees; label: string }[] = [
  { key: "NIR", label: "NIR (N° Sécurité Sociale)" },
  { key: "medicales", label: "Données médicales" },
  { key: "viePrivee", label: "Vie privée" },
  { key: "justice", label: "Justice" },
  { key: "identite", label: "Identité" },
  { key: "biometrique", label: "Données biométriques" },
  { key: "mecanismeFraude", label: "Mécanisme de fraude" },
  { key: "faillesVulnerabilite", label: "Failles / Vulnérabilité" },
  { key: "patrimoine", label: "Patrimoine" },
  { key: "appartenanceSyndicale", label: "Appartenance syndicale" },
  { key: "architectureTechnique", label: "Architecture technique" },
  { key: "organisationnel", label: "Organisationnel" },
  { key: "etatCivil", label: "État civil" },
  { key: "adressePostale", label: "Adresse postale" },
  { key: "viePersonnelle", label: "Vie personnelle" },
  { key: "vieProfessionnelle", label: "Vie professionnelle" },
  { key: "mouvementsSalariaux", label: "Mouvements salariaux" },
  { key: "santeEconomique", label: "Santé économique" },
  { key: "publicDonnees", label: "Données publiques" },
  { key: "editoriaux", label: "Éditoriaux" },
  { key: "publicationExtranet", label: "Publication Extranet" },
  { key: "campagneDeCom", label: "Campagne de communication" },
  { key: "statistiquesPubliables", label: "Statistiques publiables" },
];

function SensibiliteMatrix({ sensibilite }: { sensibilite: SensibiliteDonnees }) {
  const tresSensible = SENSIBILITE_FIELDS.filter((f) => sensibilite[f.key] === "Très sensible");
  const sensible = SENSIBILITE_FIELDS.filter((f) => sensibilite[f.key] === "Sensible");
  const publicItems = SENSIBILITE_FIELDS.filter(
    (f) => sensibilite[f.key] !== "Très sensible" && sensibilite[f.key] !== "Sensible" && sensibilite[f.key] !== ""
  );

  // Also show items explicitly marked with a non-empty value that isn't one of the above
  const hasAny = tresSensible.length > 0 || sensible.length > 0 || publicItems.length > 0;

  if (!hasAny) {
    return (
      <View style={s.callout}>
        <Text style={s.emptyText}>Aucune sensibilité renseignée</Text>
      </View>
    );
  }

  return (
    <View style={s.sensGrid}>
      {/* Très sensible */}
      <View style={s.sensCol}>
        <View style={[s.sensHeader, { backgroundColor: COLORS.rouge }]}>
          <Text style={s.sensHeaderText}>Très sensible</Text>
        </View>
        {tresSensible.length > 0 ? (
          tresSensible.map((f) => (
            <Text key={f.key} style={s.sensItem}>
              ✓ {f.label}
            </Text>
          ))
        ) : (
          <Text style={s.sensItemEmpty}>Aucune</Text>
        )}
      </View>

      {/* Sensible */}
      <View style={s.sensCol}>
        <View style={[s.sensHeader, { backgroundColor: COLORS.jaune }]}>
          <Text style={[s.sensHeaderText, { color: COLORS.noir }]}>Sensible</Text>
        </View>
        {sensible.length > 0 ? (
          sensible.map((f) => (
            <Text key={f.key} style={s.sensItem}>
              ✓ {f.label}
            </Text>
          ))
        ) : (
          <Text style={s.sensItemEmpty}>Aucune</Text>
        )}
      </View>

      {/* Public */}
      <View style={s.sensCol}>
        <View style={[s.sensHeader, { backgroundColor: COLORS.vert }]}>
          <Text style={s.sensHeaderText}>Public</Text>
        </View>
        {publicItems.length > 0 ? (
          publicItems.map((f) => (
            <Text key={f.key} style={s.sensItem}>
              ✓ {f.label}
            </Text>
          ))
        ) : (
          <Text style={s.sensItemEmpty}>Aucune</Text>
        )}
      </View>
    </View>
  );
}

// ============================================================================
// SECTIONS DU SOMMAIRE
// ============================================================================

const SECTIONS = [
  "Projet - Acteurs",
  "Fonctionnalités - Données",
  "Contraintes - Volumétrie",
  "Exigences Contextuelles",
  "Architecture Acteurs du SI",
  "Architecture Fonctionnelle du SI",
  "Architecture Applicative",
  "Architecture Technique",
  "Serveurs & Composants Applicatifs",
  "Matrices des Flux Applicatifs",
  "Dimensionnement du SI Applicatif",
  "URLs Applicatives",
];

// ============================================================================
// DOCUMENT PRINCIPAL
// ============================================================================

interface DADocumentProps {
  data: DAData;
}

export const DADocument: React.FC<DADocumentProps> = ({ data }) => {
  const projectName =
    data.cadre1_ProjetActeurs.nomDuProjet || "Document d'Architecture";
  const dateStr = new Date().toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Document>
      {/* ================================================================ */}
      {/* PAGE DE GARDE                                                    */}
      {/* ================================================================ */}
      <Page size="A4" style={[s.page, { paddingTop: 0 }]}>
        <View style={s.coverBanner}>
          <Text style={s.coverBannerText}>RÉPUBLIQUE FRANÇAISE</Text>
        </View>

        <Text style={s.coverTitle}>Document d'Architecture</Text>
        <Text style={s.coverProject}>{projectName}</Text>

        <View style={{ flex: 1 }} />

        <View style={s.coverInfoBox}>
          <Text style={s.coverInfoText}>Généré le {dateStr}</Text>
          <Text style={s.coverInfoText}>
            Ce document décrit l'architecture du système d'information
            applicatif selon le cadre méthodologique ministériel.
          </Text>
        </View>
      </Page>

      {/* ================================================================ */}
      {/* SOMMAIRE                                                         */}
      {/* ================================================================ */}
      <Page size="A4" style={s.page}>
        <PageHeader projectName={projectName} />
        <Text style={s.tocTitle}>Sommaire</Text>
        {SECTIONS.map((title, i) => (
          <View key={i} style={s.tocItem}>
            <Text style={s.tocNumber}>{i + 1}.</Text>
            <Text style={s.tocText}>{title}</Text>
          </View>
        ))}
        <PageFooter projectName={projectName} />
      </Page>

      {/* ================================================================ */}
      {/* CADRE 1 : PROJET - ACTEURS                                       */}
      {/* ================================================================ */}
      <Page size="A4" style={s.page} wrap>
        <PageHeader projectName={projectName} />

        <SectionBanner number={1} title="Projet - Acteurs" />

        <Subsection title="Nom du projet" />
        <TextField value={data.cadre1_ProjetActeurs.nomDuProjet} />

        <Subsection title="Contexte du projet applicatif" />
        <TextField value={data.cadre1_ProjetActeurs.contexteProjetApplicatif} />

        <Subsection title="Objectifs du projet applicatif" />
        <TextField value={data.cadre1_ProjetActeurs.objectifsProjetApplicatif} />

        <Subsection title="Enjeux du projet applicatif" />
        <TextField value={data.cadre1_ProjetActeurs.enjeuxProjetApplicatif} />

        <Subsection title="Planning du projet" />
        <DataTable
          columns={[
            { key: "version", label: "Version", width: "20%" },
            { key: "date", label: "Date", width: "25%" },
            { key: "commentaires", label: "Commentaires", width: "55%" },
          ]}
          data={data.cadre1_ProjetActeurs.planningProjet}
          filterKey="version"
        />

        <Subsection title="Acteurs du projet" />
        <DataTable
          columns={[
            { key: "role", label: "Rôle", width: "25%", bold: true },
            { key: "nom", label: "Nom", width: "25%" },
            { key: "fonction", label: "Fonction", width: "25%" },
            { key: "entite", label: "Entité", width: "25%" },
          ]}
          data={data.cadre1_ProjetActeurs.acteursDuProjet}
          filterKey="nom"
        />

        <Subsection title="Acteurs métiers du SI Applicatif" />
        <DataTable
          columns={[
            { key: "profilsActeurs", label: "Profils Acteurs", width: "36%" },
            { key: "nombreUtilisateursM", label: "Ministère (M)", width: "16%", align: "center" },
            { key: "nombreUtilisateursR", label: "RIE (R)", width: "16%", align: "center" },
            { key: "nombreUtilisateursE", label: "Extranet (E)", width: "16%", align: "center" },
            { key: "nombreUtilisateursP", label: "Public (P)", width: "16%", align: "center" },
          ]}
          data={data.cadre1_ProjetActeurs.acteursMetiersDuSIApplicatif}
          filterKey="profilsActeurs"
          emptyMessage="Aucun acteur métier défini"
        />

        <PageFooter projectName={projectName} />
      </Page>

      {/* ================================================================ */}
      {/* CADRE 2 : FONCTIONNALITÉS - DONNÉES                              */}
      {/* ================================================================ */}
      <Page size="A4" style={s.page} wrap>
        <PageHeader projectName={projectName} />

        <SectionBanner number={2} title="Fonctionnalités - Données" />

        <Subsection title="Fonctionnalités du SI Applicatif" />
        <DataTable
          columns={[
            { key: "fonctionnalite", label: "Fonctionnalité", width: "52%" },
            { key: "M", label: "M", width: "12%", align: "center" },
            { key: "R", label: "R", width: "12%", align: "center" },
            { key: "E", label: "E", width: "12%", align: "center" },
            { key: "P", label: "P", width: "12%", align: "center" },
          ]}
          data={data.cadre2_FonctionnalitesDonnees.fonctionnalitesDuSIApplicatif}
          filterKey="fonctionnalite"
          emptyMessage="Aucune fonctionnalité définie"
        />

        <Subsection title="Données métier du SI Applicatif" />
        <DataTable
          columns={[
            { key: "donnee", label: "Donnée", width: "52%" },
            { key: "M", label: "M", width: "12%", align: "center" },
            { key: "R", label: "R", width: "12%", align: "center" },
            { key: "E", label: "E", width: "12%", align: "center" },
            { key: "P", label: "P", width: "12%", align: "center" },
          ]}
          data={data.cadre2_FonctionnalitesDonnees.donneesMetierDuSIApplicatif}
          filterKey="donnee"
          emptyMessage="Aucune donnée métier définie"
        />

        <Subsection title="Fichiers métiers du SI Applicatif" />
        <DataTable
          columns={[
            { key: "fichier", label: "Fichier", width: "52%" },
            { key: "M", label: "M", width: "12%", align: "center" },
            { key: "R", label: "R", width: "12%", align: "center" },
            { key: "E", label: "E", width: "12%", align: "center" },
            { key: "P", label: "P", width: "12%", align: "center" },
          ]}
          data={data.cadre2_FonctionnalitesDonnees.fichiersMetiersDuSIApplicatif}
          filterKey="fichier"
          emptyMessage="Aucun fichier métier défini"
        />

        <Subsection title="Référentiels de données hors SI" />
        <DataTable
          columns={[
            { key: "referentiel", label: "Référentiel", width: "35%" },
            { key: "modeEchange", label: "Mode d'échange", width: "17%" },
            { key: "M", label: "M", width: "12%", align: "center" },
            { key: "R", label: "R", width: "12%", align: "center" },
            { key: "E", label: "E", width: "12%", align: "center" },
            { key: "P", label: "P", width: "12%", align: "center" },
          ]}
          data={data.cadre2_FonctionnalitesDonnees.referentielsDonneesHorsSI}
          filterKey="referentiel"
          emptyMessage="Aucun référentiel défini"
        />

        <Subsection title="Sensibilité des données" />
        <SensibiliteMatrix sensibilite={data.cadre2_FonctionnalitesDonnees.sensibiliteDesDonnees} />

        <Subsection title="Services utilisés par l'application" />
        <DataTable
          columns={[
            { key: "service", label: "Service", width: "35%" },
            { key: "modeEchange", label: "Mode d'échange", width: "17%" },
            { key: "M", label: "M", width: "12%", align: "center" },
            { key: "R", label: "R", width: "12%", align: "center" },
            { key: "E", label: "E", width: "12%", align: "center" },
            { key: "P", label: "P", width: "12%", align: "center" },
          ]}
          data={data.cadre2_FonctionnalitesDonnees.servicesUtilisesParApplication}
          filterKey="service"
          emptyMessage="Aucun service défini"
        />

        <PageFooter projectName={projectName} />
      </Page>

      {/* ================================================================ */}
      {/* CADRE 3 : CONTRAINTES - VOLUMÉTRIE                               */}
      {/* ================================================================ */}
      <Page size="A4" style={s.page} wrap>
        <PageHeader projectName={projectName} />

        <SectionBanner number={3} title="Contraintes - Volumétrie" />

        <Subsection title="Contraintes légales" />
        <TextField value={data.cadre3_ContraintesVolumetrie.contraintesLegales} />

        <Subsection title="Contraintes métiers" />
        <TextField value={data.cadre3_ContraintesVolumetrie.contraintesMetiers} />

        <Subsection title="Dépendances avec d'autres SI" />
        <DataTable
          columns={[
            { key: "systemeInformation", label: "Système d'information", width: "50%" },
            { key: "fournisseur", label: "Fournisseur", width: "25%", align: "center" },
            { key: "consommateur", label: "Consommateur", width: "25%", align: "center" },
          ]}
          data={data.cadre3_ContraintesVolumetrie.dependancesAvecDautresSI}
          filterKey="systemeInformation"
          emptyMessage="Aucune dépendance définie"
        />

        <Subsection title="Dépendances avec le poste de travail" />
        <TextField value={data.cadre3_ContraintesVolumetrie.dependancesAvecLePosteDeTravail} />

        <Subsection title="Utilisabilité en mode Tablette" />
        <View style={s.callout} wrap={false}>
          <View style={s.inlineGroup}>
            <View style={{ flex: 1 }}>
              <Text style={s.label}>Mode connecté</Text>
              <Text style={s.calloutText}>
                {data.cadre3_ContraintesVolumetrie.niveauUtilisabiliteSecuriteEnModeTablette.modeConnecte || "—"}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.label}>Mode déconnecté</Text>
              <Text style={s.calloutText}>
                {data.cadre3_ContraintesVolumetrie.niveauUtilisabiliteSecuriteEnModeTablette.modeDeconnecte || "—"}
              </Text>
            </View>
          </View>
          {data.cadre3_ContraintesVolumetrie.niveauUtilisabiliteSecuriteEnModeTablette.precisions ? (
            <View style={{ marginTop: 4 }}>
              <Text style={s.label}>Précisions</Text>
              <Text style={s.calloutText}>
                {data.cadre3_ContraintesVolumetrie.niveauUtilisabiliteSecuriteEnModeTablette.precisions}
              </Text>
            </View>
          ) : null}
        </View>

        <Subsection title="Utilisabilité en mode Smartphone" />
        <View style={s.callout} wrap={false}>
          <View style={s.inlineGroup}>
            <View style={{ flex: 1 }}>
              <Text style={s.label}>Mode connecté</Text>
              <Text style={s.calloutText}>
                {data.cadre3_ContraintesVolumetrie.niveauUtilisabiliteSecuriteEnModeSmartphone.modeConnecte || "—"}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.label}>Mode déconnecté</Text>
              <Text style={s.calloutText}>
                {data.cadre3_ContraintesVolumetrie.niveauUtilisabiliteSecuriteEnModeSmartphone.modeDeconnecte || "—"}
              </Text>
            </View>
          </View>
          {data.cadre3_ContraintesVolumetrie.niveauUtilisabiliteSecuriteEnModeSmartphone.precisions ? (
            <View style={{ marginTop: 4 }}>
              <Text style={s.label}>Précisions</Text>
              <Text style={s.calloutText}>
                {data.cadre3_ContraintesVolumetrie.niveauUtilisabiliteSecuriteEnModeSmartphone.precisions}
              </Text>
            </View>
          ) : null}
        </View>

        <Subsection title="Nombre d'appareils mobiles" />
        <View style={s.callout} wrap={false}>
          <View style={s.inlineGroup}>
            <View style={{ flex: 1 }}>
              <Text style={s.label}>Tablette Ministère</Text>
              <Text style={s.calloutText}>{data.cadre3_ContraintesVolumetrie.mobile.tabletteMinistere || "—"}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.label}>Tablette Personnel</Text>
              <Text style={s.calloutText}>{data.cadre3_ContraintesVolumetrie.mobile.tablettePersonnel || "—"}</Text>
            </View>
          </View>
          <View style={[s.inlineGroup, { marginTop: 4 }]}>
            <View style={{ flex: 1 }}>
              <Text style={s.label}>Smartphone Ministère</Text>
              <Text style={s.calloutText}>{data.cadre3_ContraintesVolumetrie.mobile.smartphoneMinistere || "—"}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.label}>Smartphone Personnel</Text>
              <Text style={s.calloutText}>{data.cadre3_ContraintesVolumetrie.mobile.smartphonePersonnel || "—"}</Text>
            </View>
          </View>
        </View>

        <Subsection title="Volumétrie des données" />
        <View style={s.callout}>
          <KV label="D1 - Enregistrements à récupérer" value={data.cadre3_ContraintesVolumetrie.volumetrieDonneesDuSIApplicatif.d1_NombreEnregistrementsARecuperer} />
          <KV label="D2 - Enregistrements par an" value={data.cadre3_ContraintesVolumetrie.volumetrieDonneesDuSIApplicatif.d2_NombreEnregistrementsParAn} />
          <KV label="D3 - Taille moyenne enregistrement (KO)" value={data.cadre3_ContraintesVolumetrie.volumetrieDonneesDuSIApplicatif.d3_TailleMoyenneEnregistrementKO} />
          <KV label="D4 - Années en base BDD" value={data.cadre3_ContraintesVolumetrie.volumetrieDonneesDuSIApplicatif.d4_NombreAnneesEnregistrementsEnBaseBDD} />
          <KV label="D5 - Volume BDD initial (GO)" value={data.cadre3_ContraintesVolumetrie.volumetrieDonneesDuSIApplicatif.d5_VolumeBDDInitialGO} />
          <KV label="D6 - Volume BDD actuel (GO)" value={data.cadre3_ContraintesVolumetrie.volumetrieDonneesDuSIApplicatif.d6_VolumeBDDActuelGO} />
          <KV label="D7 - Volume BDD total (GO)" value={data.cadre3_ContraintesVolumetrie.volumetrieDonneesDuSIApplicatif.d7_VolumeBDDTotalGO} />
          {data.cadre3_ContraintesVolumetrie.volumetrieDonneesDuSIApplicatif.commentaires ? (
            <View style={{ marginTop: 4 }}>
              <Text style={s.label}>Commentaires</Text>
              <Text style={s.calloutText}>{data.cadre3_ContraintesVolumetrie.volumetrieDonneesDuSIApplicatif.commentaires}</Text>
            </View>
          ) : null}
        </View>

        <Subsection title="Volumétrie des fichiers" />
        <View style={s.callout}>
          <KV label="F1 - Fichiers à récupérer" value={data.cadre3_ContraintesVolumetrie.volumetrieFichiersDuSIApplicatif.f1_NombreDeFichiersARecuperer} />
          <KV label="F2 - Fichiers par an" value={data.cadre3_ContraintesVolumetrie.volumetrieFichiersDuSIApplicatif.f2_NombreDeFichiersParAn} />
          <KV label="F3 - Taille moyenne fichier (MO)" value={data.cadre3_ContraintesVolumetrie.volumetrieFichiersDuSIApplicatif.f3_TailleMoyenneDunFichierMO} />
          <KV label="F4 - Années fichiers en FS" value={data.cadre3_ContraintesVolumetrie.volumetrieFichiersDuSIApplicatif.f4_NombreAnneesFichiersEnFileSystemFS} />
          <KV label="F5 - Volume FS initial (GO)" value={data.cadre3_ContraintesVolumetrie.volumetrieFichiersDuSIApplicatif.f5_VolumeFSInitialGO} />
          <KV label="F6 - Volume FS actuel (GO)" value={data.cadre3_ContraintesVolumetrie.volumetrieFichiersDuSIApplicatif.f6_VolumeFSActuelGO} />
          <KV label="F7 - Volume FS total (GO)" value={data.cadre3_ContraintesVolumetrie.volumetrieFichiersDuSIApplicatif.f7_VolumeFSTotalGO} />
        </View>

        <Subsection title="Réduction volume données et fichiers" />
        <View style={s.callout} wrap={false}>
          <Text style={s.calloutText}>
            {data.cadre3_ContraintesVolumetrie.reductionVolumeDonneesEtFichiers.purgeDonneesDansBDDApplicatif ? "✓" : "✗"}{" "}
            Purge données dans BDD applicatif
          </Text>
          <Text style={s.calloutText}>
            {data.cadre3_ContraintesVolumetrie.reductionVolumeDonneesEtFichiers.purgeFichiersDansFSApplicatif ? "✓" : "✗"}{" "}
            Purge fichiers dans FS applicatif
          </Text>
          <Text style={s.calloutText}>
            {data.cadre3_ContraintesVolumetrie.reductionVolumeDonneesEtFichiers.archivageDonneesHorsApplicatif ? "✓" : "✗"}{" "}
            Archivage données hors applicatif
          </Text>
          <Text style={s.calloutText}>
            {data.cadre3_ContraintesVolumetrie.reductionVolumeDonneesEtFichiers.archivageFichiersHorsApplicatif ? "✓" : "✗"}{" "}
            Archivage fichiers hors applicatif
          </Text>
        </View>

        <PageFooter projectName={projectName} />
      </Page>

      {/* ================================================================ */}
      {/* CADRE 4 : EXIGENCES CONTEXTUELLES                                */}
      {/* ================================================================ */}
      <Page size="A4" style={s.page} wrap>
        <PageHeader projectName={projectName} />

        <SectionBanner number={4} title="Exigences Contextuelles" />

        <Subsection title="Échelle DICT (EBIOS) — Front-end" />
        <View style={s.table}>
          <View style={s.thRow}>
            <Text style={[s.thCell, { width: "30%" }]}>Critère</Text>
            <Text style={[s.thCell, { width: "15%", textAlign: "center" }]}>Niveau</Text>
            <Text style={[s.thCell, { width: "55%" }]}>Précisions</Text>
          </View>
          {[
            { label: "Disponibilité", niveau: data.cadre4_ExigencesContextuelles.echelleDICT_EBIOS_1a4_GlobalSI.exigenceDisponibilite_NiveauFront, precisions: data.cadre4_ExigencesContextuelles.echelleDICT_EBIOS_1a4_GlobalSI.exigenceDisponibilite_PrecisionsFront },
            { label: "Intégrité", niveau: data.cadre4_ExigencesContextuelles.echelleDICT_EBIOS_1a4_GlobalSI.exigenceIntegrite_NiveauFront, precisions: data.cadre4_ExigencesContextuelles.echelleDICT_EBIOS_1a4_GlobalSI.exigenceIntegrite_PrecisionsFront },
            { label: "Confidentialité", niveau: data.cadre4_ExigencesContextuelles.echelleDICT_EBIOS_1a4_GlobalSI.exigenceConfidentialite_NiveauFront, precisions: data.cadre4_ExigencesContextuelles.echelleDICT_EBIOS_1a4_GlobalSI.exigenceConfidentialite_PrecisionsFront },
            { label: "Traçabilité", niveau: data.cadre4_ExigencesContextuelles.echelleDICT_EBIOS_1a4_GlobalSI.exigenceTracabilite_NiveauFront, precisions: data.cadre4_ExigencesContextuelles.echelleDICT_EBIOS_1a4_GlobalSI.exigenceTracabilite_PrecisionsFront },
          ].map((row, i) => (
            <View key={i} style={i % 2 === 0 ? s.tdRow : s.tdRowAlt} wrap={false}>
              <Text style={[s.tdCellBold, { width: "30%" }]}>{row.label}</Text>
              <Text style={[s.tdCellCenter, { width: "15%" }]}>{row.niveau || "—"}</Text>
              <Text style={[s.tdCell, { width: "55%" }]}>{row.precisions || "—"}</Text>
            </View>
          ))}
        </View>

        <Subsection title="Échelle DICT (EBIOS) — Back-end" />
        <View style={s.table}>
          <View style={s.thRow}>
            <Text style={[s.thCell, { width: "30%" }]}>Critère</Text>
            <Text style={[s.thCell, { width: "15%", textAlign: "center" }]}>Niveau</Text>
            <Text style={[s.thCell, { width: "55%" }]}>Précisions</Text>
          </View>
          {[
            { label: "Disponibilité", niveau: data.cadre4_ExigencesContextuelles.echelleDICT_EBIOS_1a4_GlobalSI.exigenceDisponibilite_NiveauBack, precisions: data.cadre4_ExigencesContextuelles.echelleDICT_EBIOS_1a4_GlobalSI.exigenceDisponibilite_PrecisionsBack },
            { label: "Intégrité", niveau: data.cadre4_ExigencesContextuelles.echelleDICT_EBIOS_1a4_GlobalSI.exigenceIntegrite_NiveauBack, precisions: data.cadre4_ExigencesContextuelles.echelleDICT_EBIOS_1a4_GlobalSI.exigenceIntegrite_PrecisionsBack },
            { label: "Confidentialité", niveau: data.cadre4_ExigencesContextuelles.echelleDICT_EBIOS_1a4_GlobalSI.exigenceConfidentialite_NiveauBack, precisions: data.cadre4_ExigencesContextuelles.echelleDICT_EBIOS_1a4_GlobalSI.exigenceConfidentialite_PrecisionsBack },
            { label: "Traçabilité", niveau: data.cadre4_ExigencesContextuelles.echelleDICT_EBIOS_1a4_GlobalSI.exigenceTracabilite_NiveauBack, precisions: data.cadre4_ExigencesContextuelles.echelleDICT_EBIOS_1a4_GlobalSI.exigenceTracabilite_PrecisionsBack },
          ].map((row, i) => (
            <View key={i} style={i % 2 === 0 ? s.tdRow : s.tdRowAlt} wrap={false}>
              <Text style={[s.tdCellBold, { width: "30%" }]}>{row.label}</Text>
              <Text style={[s.tdCellCenter, { width: "15%" }]}>{row.niveau || "—"}</Text>
              <Text style={[s.tdCell, { width: "55%" }]}>{row.precisions || "—"}</Text>
            </View>
          ))}
        </View>

        <Subsection title="Échelle IMPACT (EBIOS)" />
        <View style={s.callout} wrap={false}>
          <KV label="Domaine" value={data.cadre4_ExigencesContextuelles.echelleIMPACT_EBIOS_GlobalSI.domaine} />
          <KV label="Niveau" value={data.cadre4_ExigencesContextuelles.echelleIMPACT_EBIOS_GlobalSI.niveau} />
          <KV label="Description" value={data.cadre4_ExigencesContextuelles.echelleIMPACT_EBIOS_GlobalSI.description} />
          <KV label="Contexte applicatif" value={data.cadre4_ExigencesContextuelles.echelleIMPACT_EBIOS_GlobalSI.contexteApplicatif} />
        </View>

        <Subsection title="Exigence de PREUVE par fonctionnalité" />
        <DataTable
          columns={[
            { key: "fonctionnalite", label: "Fonctionnalité", width: "40%" },
            { key: "descriptionExigencePreuve", label: "Description exigence de preuve", width: "60%" },
          ]}
          data={data.cadre4_ExigencesContextuelles.exigencePREUVE_ParFonctionnalite}
          filterKey="fonctionnalite"
          emptyMessage="Aucune exigence de preuve définie"
        />

        <Subsection title="Garantie de service" />
        <View style={s.callout}>
          <KV label="PCA" value={data.cadre4_ExigencesContextuelles.garantieDeService.planDeContinuiteActivite_PCA} />
          <KV label="PRA" value={data.cadre4_ExigencesContextuelles.garantieDeService.planDeRepriseActivite_PRA} />
          <KV label="DMIA" value={data.cadre4_ExigencesContextuelles.garantieDeService.dureMaximaleInterruptionAdmissible_DMIA} />
          <KV label="Perte de données non admissible" value={data.cadre4_ExigencesContextuelles.garantieDeService.perteDeDonneesNonAdmissible} />
          <KV label="Impact métier en cas de perte de données" value={data.cadre4_ExigencesContextuelles.garantieDeService.impactMetierEnCasDePerteDeDonnees} />
          <KV label="Impact métier en cas de défaillance service" value={data.cadre4_ExigencesContextuelles.garantieDeService.impactMetierEnCasDeDefaillanceService} />
        </View>

        <Subsection title="Périodes applicatives" />
        <DataTable
          columns={[
            { key: "periode", label: "Période", width: "25%" },
            { key: "dateDebut", label: "Début", width: "15%" },
            { key: "dateFin", label: "Fin", width: "15%" },
            { key: "nuc_NombreUtilisateursConnectes", label: "NUC", width: "20%", align: "center" },
            { key: "nrs_NombreRequetesSimultaneesParSec", label: "NRS/s", width: "25%", align: "center" },
          ]}
          data={data.cadre4_ExigencesContextuelles.periodesApplicatives}
          filterKey="periode"
          emptyMessage="Aucune période définie"
        />

        <Subsection title="Temps de réponse" />
        <View style={s.table}>
          <View style={s.thRow}>
            <Text style={[s.thCell, { width: "40%" }]}>Type</Text>
            <Text style={[s.thCell, { width: "30%", textAlign: "center" }]}>Période standard (s)</Text>
            <Text style={[s.thCell, { width: "30%", textAlign: "center" }]}>Période de charge (s)</Text>
          </View>
          {[
            { label: "Affichage page d'accueil", standard: data.cadre4_ExigencesContextuelles.tempsDeReponse.affichagePageAccueil_PeriodeStandard, charge: data.cadre4_ExigencesContextuelles.tempsDeReponse.affichagePageAccueil_PeriodeDeCharge },
            { label: "Affichage page simple", standard: data.cadre4_ExigencesContextuelles.tempsDeReponse.affichagePageSimple_PeriodeStandard, charge: data.cadre4_ExigencesContextuelles.tempsDeReponse.affichagePageSimple_PeriodeDeCharge },
            { label: "Affichage page complexe", standard: data.cadre4_ExigencesContextuelles.tempsDeReponse.affichagePageComplexe_PeriodeStandard, charge: data.cadre4_ExigencesContextuelles.tempsDeReponse.affichagePageComplexe_PeriodeDeCharge },
            { label: "Traitement requête simple", standard: data.cadre4_ExigencesContextuelles.tempsDeReponse.traitementRequeteSimple_PeriodeStandard, charge: data.cadre4_ExigencesContextuelles.tempsDeReponse.traitementRequeteSimple_PeriodeDeCharge },
            { label: "Traitement requête complexe", standard: data.cadre4_ExigencesContextuelles.tempsDeReponse.traitementRequeteComplexe_PeriodeStandard, charge: data.cadre4_ExigencesContextuelles.tempsDeReponse.traitementRequeteComplexe_PeriodeDeCharge },
          ].map((row, i) => (
            <View key={i} style={i % 2 === 0 ? s.tdRow : s.tdRowAlt} wrap={false}>
              <Text style={[s.tdCellBold, { width: "40%" }]}>{row.label}</Text>
              <Text style={[s.tdCellCenter, { width: "30%" }]}>{row.standard || "—"}</Text>
              <Text style={[s.tdCellCenter, { width: "30%" }]}>{row.charge || "—"}</Text>
            </View>
          ))}
        </View>

        <Subsection title="Traitements automatisés" />
        <DataTable
          columns={[
            { key: "batchsApplicatifs", label: "Batchs applicatifs", width: "25%" },
            { key: "plage", label: "Plage", width: "15%" },
            { key: "frequence", label: "Fréquence", width: "15%" },
            { key: "impactMetier", label: "Impact métier", width: "22.5%" },
            { key: "impactCharge", label: "Impact charge", width: "22.5%" },
          ]}
          data={data.cadre4_ExigencesContextuelles.traitementsAutomatises}
          filterKey="batchsApplicatifs"
          emptyMessage="Aucun traitement automatisé défini"
        />

        <Subsection title="Impact métier en cas d'anomalie" />
        <TextField value={data.cadre4_ExigencesContextuelles.impactMetierEnCasDAnomalie} />

        <Subsection title="Impact de charge sur les performances" />
        <TextField value={data.cadre4_ExigencesContextuelles.impactDeChargeSurPerformances} />

        <PageFooter projectName={projectName} />
      </Page>

      {/* ================================================================ */}
      {/* CADRE 5 : ARCHITECTURE ACTEURS                                   */}
      {/* ================================================================ */}
      <Page size="A4" style={s.page} wrap>
        <PageHeader projectName={projectName} />

        <SectionBanner number={5} title="Architecture Acteurs du SI" />

        <Subsection title="Description" />
        <TextField value={data.cadre5_ArchitectureActeurs.description} />

        {data.cadre5_ArchitectureActeurs.schemaActeursImage ? (
          <View wrap={false}>
            <Subsection title="Schéma des acteurs" />
            <Image
              src={data.cadre5_ArchitectureActeurs.schemaActeursImage}
              style={s.diagramImage}
            />
          </View>
        ) : null}

        <Subsection title="Acteurs consommateurs" />
        <DataTable
          columns={[
            { key: "nom", label: "Nom", width: "25%" },
            { key: "type", label: "Type", width: "25%" },
            { key: "description", label: "Description", width: "50%" },
          ]}
          data={data.cadre5_ArchitectureActeurs.acteursConsommateurs}
          filterKey="nom"
          emptyMessage="Aucun acteur consommateur défini"
        />

        <Subsection title="Acteurs fournisseurs" />
        <DataTable
          columns={[
            { key: "nom", label: "Nom", width: "25%" },
            { key: "type", label: "Type", width: "25%" },
            { key: "description", label: "Description", width: "50%" },
          ]}
          data={data.cadre5_ArchitectureActeurs.acteursFournisseurs}
          filterKey="nom"
          emptyMessage="Aucun acteur fournisseur défini"
        />

        <PageFooter projectName={projectName} />
      </Page>

      {/* ================================================================ */}
      {/* CADRE 6 : ARCHITECTURE FONCTIONNELLE                             */}
      {/* ================================================================ */}
      <Page size="A4" style={s.page} wrap>
        <PageHeader projectName={projectName} />

        <SectionBanner number={6} title="Architecture Fonctionnelle du SI" />

        <Subsection title="Description" />
        <TextField value={data.cadre6_ArchitectureFonctionnelle.description} />

        {data.cadre6_ArchitectureFonctionnelle.schemaArchitectureFonctionnelleImage ? (
          <View wrap={false}>
            <Subsection title="Schéma de l'architecture fonctionnelle" />
            <Image
              src={data.cadre6_ArchitectureFonctionnelle.schemaArchitectureFonctionnelleImage}
              style={s.diagramImage}
            />
          </View>
        ) : null}

        <Subsection title="Blocs fonctionnels" />
        <DataTable
          columns={[
            { key: "nom", label: "Nom", width: "30%" },
            { key: "typeActeurs", label: "Type acteurs", width: "20%" },
            { key: "usages", label: "Usages", width: "50%" },
          ]}
          data={data.cadre6_ArchitectureFonctionnelle.blocsFonctionnels}
          filterKey="nom"
          emptyMessage="Aucun bloc fonctionnel défini"
        />

        <Subsection title="Convention de flux" />
        <TextField value={data.cadre6_ArchitectureFonctionnelle.conventionFlux} />

        <PageFooter projectName={projectName} />
      </Page>

      {/* ================================================================ */}
      {/* CADRE 7 : ARCHITECTURE APPLICATIVE                               */}
      {/* ================================================================ */}
      <Page size="A4" style={s.page} wrap>
        <PageHeader projectName={projectName} />

        <SectionBanner number={7} title="Architecture Applicative" />

        <Subsection title="Description" />
        <TextField value={data.cadre7_ArchitectureApplicative.description} />

        {data.cadre7_ArchitectureApplicative.schemaArchitectureApplicativeImage ? (
          <View wrap={false}>
            <Subsection title="Schéma de l'architecture applicative" />
            <Image
              src={data.cadre7_ArchitectureApplicative.schemaArchitectureApplicativeImage}
              style={s.diagramImage}
            />
          </View>
        ) : null}

        <Subsection title="Piles de composants" />
        {data.cadre7_ArchitectureApplicative.pilesComposants.filter(
          (p) => p.fonctionnalite.trim() !== ""
        ).length > 0 ? (
          <View style={s.table}>
            <View style={s.thRow}>
              <Text style={[s.thCell, { width: "35%" }]}>Fonctionnalité</Text>
              <Text style={[s.thCell, { width: "65%" }]}>Composants</Text>
            </View>
            {data.cadre7_ArchitectureApplicative.pilesComposants
              .filter((p) => p.fonctionnalite.trim() !== "")
              .map((pile, i) => (
                <View key={i} style={i % 2 === 0 ? s.tdRow : s.tdRowAlt} wrap={false}>
                  <Text style={[s.tdCellBold, { width: "35%" }]}>{pile.fonctionnalite}</Text>
                  <Text style={[s.tdCell, { width: "65%" }]}>{pile.composants.join(", ")}</Text>
                </View>
              ))}
          </View>
        ) : (
          <View style={s.callout}>
            <Text style={s.emptyText}>Aucune pile de composants définie</Text>
          </View>
        )}

        <PageFooter projectName={projectName} />
      </Page>

      {/* ================================================================ */}
      {/* CADRE 8 : ARCHITECTURE TECHNIQUE                                 */}
      {/* ================================================================ */}
      <Page size="A4" style={s.page} wrap>
        <PageHeader projectName={projectName} />

        <SectionBanner number={8} title="Architecture Technique" />

        <Subsection title="Description" />
        <TextField value={data.cadre8_ArchitectureTechnique.description} />

        {data.cadre8_ArchitectureTechnique.schemaArchitectureTechniqueImage ? (
          <View wrap={false}>
            <Subsection title="Schéma de l'architecture technique" />
            <Image
              src={data.cadre8_ArchitectureTechnique.schemaArchitectureTechniqueImage}
              style={s.diagramImage}
            />
          </View>
        ) : null}

        <Subsection title="Notes" />
        <TextField value={data.cadre8_ArchitectureTechnique.notes} />

        <PageFooter projectName={projectName} />
      </Page>

      {/* ================================================================ */}
      {/* CADRE 9 : SERVEURS & COMPOSANTS                                  */}
      {/* ================================================================ */}
      <Page size="A4" style={s.page} wrap>
        <PageHeader projectName={projectName} />

        <SectionBanner number={9} title="Serveurs & Composants Applicatifs" />

        {data.cadre9_ServeursComposants.serveurs.filter(
          (srv) => srv.nomServeur.trim() !== ""
        ).length === 0 ? (
          <View style={s.callout}>
            <Text style={s.emptyText}>Aucun serveur défini</Text>
          </View>
        ) : (
          data.cadre9_ServeursComposants.serveurs
            .filter((srv) => srv.nomServeur.trim() !== "")
            .map((serveur, idx) => (
              <View key={idx} style={s.serverCard} wrap={false}>
                <Text style={s.serverName}>{serveur.nomServeur}</Text>
                <View style={s.inlineGroup}>
                  <View style={{ flex: 1 }}>
                    <Text style={s.label}>Type</Text>
                    <Text style={s.value}>{serveur.type || "—"}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={s.label}>Rôle</Text>
                    <Text style={s.value}>{serveur.role || "—"}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={s.label}>vCPU</Text>
                    <Text style={s.value}>{serveur.vCPU || "—"}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={s.label}>RAM (GO)</Text>
                    <Text style={s.value}>{serveur.ramGO || "—"}</Text>
                  </View>
                </View>

                {serveur.composantsLogiciels.filter((c) => c.composant.trim() !== "").length > 0 && (
                  <View style={[s.table, { marginTop: 6 }]}>
                    <View style={s.thRow}>
                      <Text style={[s.thCell, { width: "25%" }]}>Catégorie</Text>
                      <Text style={[s.thCell, { width: "30%" }]}>Composant</Text>
                      <Text style={[s.thCell, { width: "15%" }]}>Version</Text>
                      <Text style={[s.thCell, { width: "30%" }]}>Rôle</Text>
                    </View>
                    {serveur.composantsLogiciels
                      .filter((c) => c.composant.trim() !== "")
                      .map((comp, ci) => (
                        <View key={ci} style={ci % 2 === 0 ? s.tdRow : s.tdRowAlt}>
                          <Text style={[s.tdCell, { width: "25%" }]}>{comp.categorie}</Text>
                          <Text style={[s.tdCell, { width: "30%" }]}>{comp.composant}</Text>
                          <Text style={[s.tdCell, { width: "15%" }]}>{comp.version}</Text>
                          <Text style={[s.tdCell, { width: "30%" }]}>{comp.role}</Text>
                        </View>
                      ))}
                  </View>
                )}
              </View>
            ))
        )}

        <PageFooter projectName={projectName} />
      </Page>

      {/* ================================================================ */}
      {/* CADRE 10 : MATRICES DES FLUX                                     */}
      {/* ================================================================ */}
      <Page size="A4" style={s.page} wrap>
        <PageHeader projectName={projectName} />

        <SectionBanner number={10} title="Matrices des Flux Applicatifs" />

        <DataTable
          columns={[
            { key: "numeroFlux", label: "N° Flux", width: "10%", bold: true },
            { key: "source", label: "Source", width: "22.5%" },
            { key: "destination", label: "Destination", width: "22.5%" },
            { key: "protocole", label: "Protocole", width: "15%" },
            { key: "commentaires", label: "Commentaires", width: "30%" },
          ]}
          data={data.cadre10_MatricesFlux.fluxApplicatifs}
          filterKey="source"
          emptyMessage="Aucun flux défini"
        />

        <PageFooter projectName={projectName} />
      </Page>

      {/* ================================================================ */}
      {/* CADRE 11 : DIMENSIONNEMENT                                       */}
      {/* ================================================================ */}
      <Page size="A4" style={s.page} wrap>
        <PageHeader projectName={projectName} />

        <SectionBanner number={11} title="Dimensionnement du SI Applicatif" />

        <Subsection title="Justifications PDMA / DMIA / Performances" />
        <TextField
          label="Perte de données maximale admissible (PDMA)"
          value={data.cadre11_Dimensionnement.justificationsPDMA_DMIA_Performances.perteDeDonneesMaximaleAdmissible}
        />
        <TextField
          label="Durée maximale d'interruption admissible (DMIA)"
          value={data.cadre11_Dimensionnement.justificationsPDMA_DMIA_Performances.dureeMaximaleInterruptionAdmissible}
        />
        <TextField
          label="Performances applicatives"
          value={data.cadre11_Dimensionnement.justificationsPDMA_DMIA_Performances.performancesApplicatives}
        />

        <Subsection title="Justifications allocations ressources matérielles" />
        <DataTable
          columns={[
            { key: "nom", label: "Nom", width: "25%", bold: true },
            { key: "detailsHypotheses", label: "Détails / Hypothèses", width: "45%" },
            { key: "nombreCPU", label: "Nb CPU", width: "15%", align: "center" },
            { key: "nombreServeurs", label: "Nb Serveurs", width: "15%", align: "center" },
          ]}
          data={data.cadre11_Dimensionnement.justificationsAllocationsRessourcesMaterielles}
          filterKey="nom"
          emptyMessage="Aucune ressource définie"
        />

        <PageFooter projectName={projectName} />
      </Page>

      {/* ================================================================ */}
      {/* CADRE 12 : URLs APPLICATIVES                                     */}
      {/* ================================================================ */}
      <Page size="A4" style={s.page} wrap>
        <PageHeader projectName={projectName} />

        <SectionBanner number={12} title="URLs Applicatives" />

        <DataTable
          columns={[
            { key: "libelleURL", label: "Libellé URL", width: "18%" },
            { key: "acteurAppelant", label: "Acteur appelant", width: "14%" },
            { key: "ressourceAppelee", label: "Ressource appelée", width: "14%" },
            { key: "fonctionnaliteOuServiceFourni", label: "Fonctionnalité", width: "22%" },
            { key: "donneesTransitent", label: "Données", width: "16%" },
            { key: "precisions", label: "Précisions", width: "16%" },
          ]}
          data={data.cadre12_URLs.urls}
          filterKey="libelleURL"
          emptyMessage="Aucune URL définie"
        />

        <PageFooter projectName={projectName} />
      </Page>
    </Document>
  );
};
