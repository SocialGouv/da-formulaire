import { nanoid } from "nanoid";
import type {
  Cadre5_ArchitectureActeurs,
  Cadre6_ArchitectureFonctionnelle,
  Cadre10_MatricesFlux
} from "@/types/da.types";
import type { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";

/**
 * Génère un template Excalidraw pour le Cadre 5 - Architecture Acteurs
 */
export function generateCadre5Template(data: Cadre5_ArchitectureActeurs) {
  const elements: ExcalidrawElement[] = [];
  const centerX = 500;
  const centerY = 300;

  // 1. Système central (rectangle bleu)
  const systemId = nanoid();
  elements.push({
    type: "rectangle",
    id: systemId,
    x: centerX - 100,
    y: centerY - 50,
    width: 200,
    height: 100,
    angle: 0,
    backgroundColor: "#a5d8ff",
    strokeColor: "#1971c2",
    strokeWidth: 2,
    strokeStyle: "solid",
    roughness: 1,
    opacity: 100,
    fillStyle: "solid",
    strokeSharpness: "sharp",
    seed: Math.floor(Math.random() * 1000000),
    version: 1,
    versionNonce: 1,
    isDeleted: false,
    groupIds: [],
    boundElements: [],
    updated: Date.now(),
    link: null,
    locked: false,
  } as any);

  // 2. Texte du système central
  elements.push({
    type: "text",
    id: nanoid(),
    x: centerX - 80,
    y: centerY - 10,
    width: 160,
    height: 25,
    angle: 0,
    backgroundColor: "transparent",
    strokeColor: "#1971c2",
    strokeWidth: 1,
    strokeStyle: "solid",
    roughness: 1,
    opacity: 100,
    fillStyle: "solid",
    strokeSharpness: "sharp",
    seed: Math.floor(Math.random() * 1000000),
    version: 1,
    versionNonce: 1,
    isDeleted: false,
    groupIds: [],
    boundElements: [],
    updated: Date.now(),
    link: null,
    locked: false,
    text: "Système Information",
    fontSize: 16,
    fontFamily: 1,
    textAlign: "center",
    verticalAlign: "middle",
    baseline: 18,
    containerId: null,
    originalText: "Système Information",
  } as any);

  // 3. Acteurs consommateurs (côté gauche)
  data.acteursConsommateurs.forEach((actor, i) => {
    const y = 100 + (i * 140);
    const isHuman = actor.type === "Humain (IHM)";
    const actorId = nanoid();

    // Shape (ellipse pour humain, rectangle pour SI)
    if (isHuman) {
      elements.push({
        type: "ellipse",
        id: actorId,
        x: 50,
        y: y,
        width: 120,
        height: 80,
        angle: 0,
        backgroundColor: "#ffc9c9",
        strokeColor: "#fa5252",
        strokeWidth: 2,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        fillStyle: "solid",
        strokeSharpness: "sharp",
        seed: Math.floor(Math.random() * 1000000),
        version: 1,
        versionNonce: 1,
        isDeleted: false,
        groupIds: [],
        boundElements: [],
        updated: Date.now(),
        link: null,
        locked: false,
      } as any);
    } else {
      elements.push({
        type: "rectangle",
        id: actorId,
        x: 50,
        y: y,
        width: 120,
        height: 80,
        angle: 0,
        backgroundColor: "#b2f2bb",
        strokeColor: "#2f9e44",
        strokeWidth: 2,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        fillStyle: "solid",
        strokeSharpness: "sharp",
        seed: Math.floor(Math.random() * 1000000),
        version: 1,
        versionNonce: 1,
        isDeleted: false,
        groupIds: [],
        boundElements: [],
        updated: Date.now(),
        link: null,
        locked: false,
      } as any);
    }

    // Texte de l'acteur
    elements.push({
      type: "text",
      id: nanoid(),
      x: 60,
      y: y + 28,
      width: 100,
      height: 25,
      angle: 0,
      backgroundColor: "transparent",
      strokeColor: "#000000",
      strokeWidth: 1,
      strokeStyle: "solid",
      roughness: 1,
      opacity: 100,
      fillStyle: "solid",
      strokeSharpness: "sharp",
      seed: Math.floor(Math.random() * 1000000),
      version: 1,
      versionNonce: 1,
      isDeleted: false,
      groupIds: [],
      boundElements: [],
      updated: Date.now(),
      link: null,
      locked: false,
      text: actor.nom || "Acteur",
      fontSize: 14,
      fontFamily: 1,
      textAlign: "center",
      verticalAlign: "middle",
      baseline: 18,
      containerId: null,
      originalText: actor.nom || "Acteur",
    } as any);

    // Flèche vers le système
    elements.push({
      type: "arrow",
      id: nanoid(),
      x: 170,
      y: y + 40,
      width: centerX - 270,
      height: centerY - y,
      angle: 0,
      backgroundColor: "transparent",
      strokeColor: "#000000",
      strokeWidth: 2,
      strokeStyle: "solid",
      roughness: 1,
      opacity: 100,
      fillStyle: "solid",
      strokeSharpness: "round",
      seed: Math.floor(Math.random() * 1000000),
      version: 1,
      versionNonce: 1,
      isDeleted: false,
      groupIds: [],
      boundElements: [],
      updated: Date.now(),
      link: null,
      locked: false,
      startBinding: null,
      endBinding: null,
      lastCommittedPoint: null,
      startArrowhead: null,
      endArrowhead: "arrow",
      points: [[0, 0], [centerX - 270, centerY - y]],
    } as any);
  });

  // 4. Acteurs fournisseurs (côté droit)
  data.acteursFournisseurs.forEach((actor, i) => {
    const y = 100 + (i * 140);
    const isHuman = actor.type === "Humain (IHM)";
    const actorId = nanoid();

    // Shape
    if (isHuman) {
      elements.push({
        type: "ellipse",
        id: actorId,
        x: 830,
        y: y,
        width: 120,
        height: 80,
        angle: 0,
        backgroundColor: "#ffc9c9",
        strokeColor: "#fa5252",
        strokeWidth: 2,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        fillStyle: "solid",
        strokeSharpness: "sharp",
        seed: Math.floor(Math.random() * 1000000),
        version: 1,
        versionNonce: 1,
        isDeleted: false,
        groupIds: [],
        boundElements: [],
        updated: Date.now(),
        link: null,
        locked: false,
      } as any);
    } else {
      elements.push({
        type: "rectangle",
        id: actorId,
        x: 830,
        y: y,
        width: 120,
        height: 80,
        angle: 0,
        backgroundColor: "#b2f2bb",
        strokeColor: "#2f9e44",
        strokeWidth: 2,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        fillStyle: "solid",
        strokeSharpness: "sharp",
        seed: Math.floor(Math.random() * 1000000),
        version: 1,
        versionNonce: 1,
        isDeleted: false,
        groupIds: [],
        boundElements: [],
        updated: Date.now(),
        link: null,
        locked: false,
      } as any);
    }

    // Texte de l'acteur
    elements.push({
      type: "text",
      id: nanoid(),
      x: 840,
      y: y + 28,
      width: 100,
      height: 25,
      angle: 0,
      backgroundColor: "transparent",
      strokeColor: "#000000",
      strokeWidth: 1,
      strokeStyle: "solid",
      roughness: 1,
      opacity: 100,
      fillStyle: "solid",
      strokeSharpness: "sharp",
      seed: Math.floor(Math.random() * 1000000),
      version: 1,
      versionNonce: 1,
      isDeleted: false,
      groupIds: [],
      boundElements: [],
      updated: Date.now(),
      link: null,
      locked: false,
      text: actor.nom || "Acteur",
      fontSize: 14,
      fontFamily: 1,
      textAlign: "center",
      verticalAlign: "middle",
      baseline: 18,
      containerId: null,
      originalText: actor.nom || "Acteur",
    } as any);

    // Flèche depuis le système
    elements.push({
      type: "arrow",
      id: nanoid(),
      x: centerX + 100,
      y: centerY,
      width: 730 - centerX,
      height: y + 40 - centerY,
      angle: 0,
      backgroundColor: "transparent",
      strokeColor: "#000000",
      strokeWidth: 2,
      strokeStyle: "solid",
      roughness: 1,
      opacity: 100,
      fillStyle: "solid",
      strokeSharpness: "round",
      seed: Math.floor(Math.random() * 1000000),
      version: 1,
      versionNonce: 1,
      isDeleted: false,
      groupIds: [],
      boundElements: [],
      updated: Date.now(),
      link: null,
      locked: false,
      startBinding: null,
      endBinding: null,
      lastCommittedPoint: null,
      startArrowhead: null,
      endArrowhead: "arrow",
      points: [[0, 0], [730 - centerX, y + 40 - centerY]],
    } as any);
  });

  return {
    type: "excalidraw",
    version: 2,
    source: "https://excalidraw.com",
    elements: elements,
    appState: {
      viewBackgroundColor: "#ffffff",
      currentItemStrokeColor: "#000000",
      currentItemBackgroundColor: "transparent",
      currentItemFillStyle: "solid",
      currentItemStrokeWidth: 2,
      currentItemRoughness: 1,
      currentItemOpacity: 100,
      gridSize: null,
      colorPalette: {},
    },
    scrollToContent: true,
  };
}

// Placeholders pour les autres cadres
export function generateCadre6Template(data: Cadre6_ArchitectureFonctionnelle) {
  // TODO: À implémenter plus tard
  return {
    type: "excalidraw",
    version: 2,
    source: "https://excalidraw.com",
    elements: [],
    appState: { viewBackgroundColor: "#ffffff" },
    scrollToContent: true,
  };
}

export function generateCadre10Template(data: Cadre10_MatricesFlux) {
  // TODO: À implémenter plus tard
  return {
    type: "excalidraw",
    version: 2,
    source: "https://excalidraw.com",
    elements: [],
    appState: { viewBackgroundColor: "#ffffff" },
    scrollToContent: true,
  };
}
