type Level = "low" | "bad" | "normal" | "good" | "great";
export interface Planet {
  gateway: { item: string; energy: number };
  energy: { solar: Level; wind: Level };
  minerals: string[];
  gases: string[];
}

const planets = {
  Sylva: {
    gateway: { item: "Quartz", energy: 5 },
    energy: { solar: "normal", wind: "normal" },
    minerals: ["Sphalerite", "-Malachite"],
    gases: ["Nitrogen", "-Hydrogen"],
  },
  Desolo: {
    gateway: { item: "Zinc", energy: 8 },
    energy: { solar: "good", wind: "low" },
    minerals: ["Wolframite", "-Sphalerite"],
    gases: [],
  },
  Calidor: {
    gateway: { item: "Explosive Powder", energy: 12 },
    energy: { solar: "great", wind: "low" },
    minerals: ["Malachite", "-Wolframite"],
    gases: ["Sulfur", "-Hydrogen"],
  },
  Vesania: {
    gateway: { item: "Graphene", energy: 16 },
    energy: { solar: "bad", wind: "good" },
    minerals: ["Sphalerite", "-Malachite"],
    gases: ["Hydrogen", "-Nitrogen", "-Argon"],
  },
  Novus: {
    gateway: { item: "Silicone", energy: 21 },
    energy: { solar: "good", wind: "good" },
    minerals: ["Sphalerite", "-Malachite"],
    gases: ["-Methane", "-Hydrogen"],
  },
  Glacio: {
    gateway: { item: "Diamond", energy: 26 },
    energy: { solar: "worst", wind: "great" },
    minerals: ["Sphalerite", "-Malachite"],
    gases: ["Argon"],
  },
  Atrox: {
    gateway: { item: "Hydrogen", energy: 30 },
    energy: { solar: "bad", wind: "bad" },
    minerals: ["Sphalerite", "-Malachite"],
    gases: ["Methane", "Helium", "-Sulfur", "-Nitrogen"],
  },
};
export function usePlanet(name: string): Planet {
  return planets[name];
}
export function usePlanets() {
  return Object.keys(planets);
}
