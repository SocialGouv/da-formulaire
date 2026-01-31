"use client";

import type { DAData } from "@/types/da.types";
import ExcalidrawSchemaEditor from "./ExcalidrawSchemaEditor";

interface CadreProps {
  daData: DAData;
  setDAData: (data: DAData) => void;
}

export default function Cadre7ArchitectureApplicative({ daData, setDAData }: CadreProps) {
  return (
    <div>
      <ExcalidrawSchemaEditor
        cadreData={daData.cadre7_ArchitectureApplicative}
        cadreType={7}
        initialData={daData.cadre7_ArchitectureApplicative.schemaArchitectureApplicativeJSON}
        onSave={(jsonData, imageData) => {
          setDAData({
            ...daData,
            cadre7_ArchitectureApplicative: {
              ...daData.cadre7_ArchitectureApplicative,
              schemaArchitectureApplicativeJSON: jsonData,
              schemaArchitectureApplicativeImage: imageData,
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
