export interface Resource {
  machines: string[];
  scrap?: string;
  planets?: string[];
  ingredients?: string[];
}

const all_planets = [
  "Sylva",
  "Desolo",
  "Calidor",
  "Vesania",
  "Novus",
  "Glacio",
  "Atrox",
];

const resources = {
  Clay: {
    planets: all_planets,
    machines: ["Soil Centrifuge", "Trade Platform", "Drill"],
  },
  Malachite: {
    planets: ["-Sylva", "Calidor"],
    machines: ["Trade Platform", "Drill"],
  },
  Laterite: {
    planets: all_planets,
    machines: ["Trade Platform", "Drill"],
  },
  Quartz: {
    scrap: ".25",
    planets: all_planets,
    machines: ["Soil Centrifuge", "Trade Platform", "Drill"],
  },
  Lithium: {
    planets: ["Vesania", "-Novus"],
    scrap: "2",
    machines: ["Trade Platform", "Drill"],
  },
  Resin: {
    planets: all_planets,
    scrap: ".25",
    machines: ["Soil Centrifuge", "Trade Platform", "Drill"],
  },
  Organic: {
    planets: all_planets,
    scrap: ".25",
    machines: ["Soil Centrifuge", "Trade Platform", "Drill"],
  },
  Compound: {
    planets: all_planets,
    scrap: ".25",
    machines: ["Soil Centrifuge", "Trade Platform", "Drill"],
  },
  Wolframite: {
    planets: ["Desolo", "-Calidor"],
    machines: ["Trade Platform", "Drill"],
  },
  Hematite: {
    planets: ["Novus", "-Glacio"],
    machines: ["Trade Platform", "Drill"],
  },
  Sphalerite: {
    planets: ["Sylva", "-Desolo"],
    machines: ["Trade Platform", "Drill"],
  },
  Titanite: {
    planets: ["-Vesania", "Glacio"],
    machines: ["Trade Platform", "Drill"],
  },
  Graphite: {
    planets: all_planets,
    scrap: ".25",
    machines: ["Soil Centrifuge", "Trade Platform", "Drill"],
  },
  Astronium: {
    planets: all_planets,
    scrap: ".5",
    machines: ["Drill"],
  },
  Ammonium: {
    planets: all_planets,
    scrap: ".5",
    machines: ["Soil Centrifuge", "Trade Platform", "Drill"],
  },
  Ceramic: {
    scrap: ".5",
    machines: ["Smelting Furnace"],
    ingredients: ["Clay"],
  },
  Copper: {
    scrap: "1",
    ingredients: ["Malachite"],
    machines: ["Smelting Furnace"],
  },
  Aluminum: {
    scrap: "1",
    ingredients: ["Laterite"],
    machines: ["Smelting Furnace"],
  },
  Glass: {
    scrap: ".5",
    ingredients: ["Quartz"],
    machines: ["Smelting Furnace"],
  },
  Carbon: {
    ingredients: ["Organic"],
    machines: ["Smelting Furnace"],
  },
  Tungsten: {
    scrap: "1.5",
    ingredients: ["Wolframite"],
    machines: ["Smelting Furnace"],
  },
  Iron: {
    scrap: "1.5",
    ingredients: ["Hematite"],
    machines: ["Smelting Furnace"],
  },
  Zinc: {
    scrap: "1.5",
    ingredients: ["Sphalerite"],
    machines: ["Smelting Furnace"],
  },
  Titanium: {
    scrap: "1.5",
    ingredients: ["Titanium"],
    machines: ["Smelting Furnace"],
  },
  Scrap: {
    machines: ["Reward", "Shredder"],
  },
  EXO_Chip: {
    scrap: "3",
    machines: ["Reward", "Trade Platform"],
  },
  Aluminum_Alloy: {
    scrap: "1.5",
    ingredients: ["Copper", "Aluminum"],
    machines: ["Chemistry Lab"],
  },
  Silicone: {
    scrap: "1",
    ingredients: ["Quartz", "Resin"],
    machines: ["Chemistry Lab"],
  },
  Rubber: {
    scrap: "1",
    ingredients: ["Resin", "Organic"],
    machines: ["Chemistry Lab"],
  },
  Explosive_Powder: {
    ingredients: ["Carbon", "Carbon", "Sulfur"],
    machines: ["Chemistry Lab"],
  },
  Plastic: {
    scrap: ".5",
    ingredients: ["Carbon", "Compound"],
    machines: ["Chemistry Lab"],
  },
  Tungsten_Carbide: {
    scrap: "1.5",
    ingredients: ["Carbon", "Tungsten"],
    machines: ["Chemistry Lab"],
  },
  Steel: {
    scrap: "1.5",
    ingredients: ["Carbon", "Iron"],
    machines: ["Chemistry Lab"],
  },
  Nanocarbon_Alloy: {
    scrap: "2",
    ingredients: ["Steel", "Titanium Alloy", "Helium"],
    machines: ["Chemistry Lab"],
  },
  Titanium_Alloy: {
    scrap: "1.5",
    ingredients: ["Titanium", "Nitrogen", "Graphene"],
    machines: ["Chemistry Lab"],
  },
  Graphene: {
    ingredients: ["Graphite", "Hydrazine"],
    machines: ["Chemistry Lab"],
  },
  Diamond: {
    scrap: "2",
    ingredients: ["Graphene", "Graphene"],
    machines: ["Chemistry Lab"],
  },
  Hydrazine: {
    ingredients: ["Hydrogen", "Ammonium", "Ammonium"],
    machines: ["Reward", "Trade Platform", "Chemistry Lab"],
  },
  Methane: {
    planets: ["-Novus", "Atrox"],
    machines: ["Atmospheric Condenser"],
  },
  Sulfur: {
    planets: ["Calidor", "-Atrox"],
    machines: ["Atmospheric Condenser"],
  },
  Argon: {
    planets: ["-Vesania", "Glacio"],
    machines: ["Atmospheric Condenser"],
  },
  Helium: {
    planets: ["Atrox"],
    machines: ["Atmospheric Condenser"],
  },
  Nitrogen: {
    planets: ["Sylva", "-Vesania", "-Atrox"],
    machines: ["Atmospheric Condenser"],
  },
  Hydrogen: {
    planets: ["-Sylva", "-Calidor", "Vesania", "-Novus"],
    machines: ["Atmospheric Condenser"],
  },
};
const normalize = (name) => String(name).replaceAll(" ", "_");
const excluded = [
  "Drill",
  "Chemistry Lab",
  "Atmospheric Condenser",
  "Smelting Furnace",
];
export function useResource(name: string): Resource {
  const norm = normalize(name);
  if (!(norm in resources)) return {};
  const res = resources[norm];
  if (!res.postprocess) {
    res.machines = res.machines.filter((m) => !excluded.includes(m));
    res.postprocess = true;
  }
  return res;
}
