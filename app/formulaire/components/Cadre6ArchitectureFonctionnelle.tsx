"use client";

import type { DAData } from "@/types/da.types";
import ExcalidrawSchemaEditor from "./ExcalidrawSchemaEditor";

interface CadreProps {
  daData: DAData;
  setDAData: (data: DAData) => void;
}

export default function Cadre6ArchitectureFonctionnelle({ daData, setDAData }: CadreProps) {
  return (
    <div>
      <h2 className="fr-h2">Cadre 6 : Architecture Fonctionnelle du SI</h2>

      <ExcalidrawSchemaEditor
        cadreData={daData.cadre6_ArchitectureFonctionnelle}
        cadreType={6}
        initialData={daData.cadre6_ArchitectureFonctionnelle.schemaArchitectureFonctionnelleJSON}
        onSave={(jsonData, imageData) => {
          setDAData({
            ...daData,
            cadre6_ArchitectureFonctionnelle: {
              ...daData.cadre6_ArchitectureFonctionnelle,
              schemaArchitectureFonctionnelleJSON: jsonData,
              schemaArchitectureFonctionnelleImage: imageData,
            },
          });
        }}
        onCancel={() => {
          // Rien à faire, pas de fermeture possible
        }}
      />
    </div>
  );
}
