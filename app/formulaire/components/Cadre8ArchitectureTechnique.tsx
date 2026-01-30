"use client";

import type { DAData } from "@/types/da.types";
import ExcalidrawSchemaEditor from "./ExcalidrawSchemaEditor";

interface CadreProps {
  daData: DAData;
  setDAData: (data: DAData) => void;
}

export default function Cadre8ArchitectureTechnique({ daData, setDAData }: CadreProps) {
  return (
    <div>
      <h2 className="fr-h2">Cadre 8 : Architecture Technique</h2>

      <ExcalidrawSchemaEditor
        cadreData={daData.cadre8_ArchitectureTechnique}
        cadreType={8}
        initialData={daData.cadre8_ArchitectureTechnique.schemaArchitectureTechniqueJSON}
        onSave={(jsonData, imageData) => {
          setDAData({
            ...daData,
            cadre8_ArchitectureTechnique: {
              ...daData.cadre8_ArchitectureTechnique,
              schemaArchitectureTechniqueJSON: jsonData,
              schemaArchitectureTechniqueImage: imageData,
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
