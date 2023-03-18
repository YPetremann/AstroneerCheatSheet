const provider = "https://astroneer.wiki.gg/images";
const icons = {
  // Resource
  Aluminum: { hash: "ac", color: "" },
  Aluminum_Alloy: { hash: "30", color: "" },
  Ammonium: { hash: "30", color: "" },
  Argon: { hash: "24", color: "" },
  Astronium: { hash: "3c", color: "" },
  Carbon: { hash: "d1", color: "" },
  Ceramic: { hash: "03", color: "" },
  Clay: { hash: "4e", color: "" },
  Compound: { hash: "9a", color: "" },
  Copper: { hash: "db", color: "" },
  Diamond: { hash: "af", color: "" },
  EXO_Chip: { hash: "fa", color: "" },
  Explosive_Powder: { hash: "8f", color: "" },
  Glass: { hash: "76", color: "" },
  Graphene: { hash: "af", color: "" },
  Graphite: { hash: "c1", color: "" },
  Helium: { hash: "79", color: "" },
  Hematite: { hash: "75", color: "" },
  Hydrazine: { hash: "fb", color: "" },
  Hydrogen: { hash: "42", color: "" },
  Iron: { hash: "71", color: "" },
  Laterite: { hash: "05", color: "" },
  Lithium: { hash: "20", color: "" },
  Malachite: { hash: "3b", color: "" },
  Methane: { hash: "14", color: "" },
  Nitrogen: { hash: "e2", color: "" },
  Organic: { hash: "90", color: "" },
  Oxygen: { hash: "ac", color: "" },
  Plastic: { hash: "c8", color: "" },
  Power: { hash: "50", color: "#cbcd0a" },
  Quartz: { hash: "fc", color: "" },
  Resin: { hash: "e0", color: "" },
  Scrap: { hash: "74", color: "silver" },
  Soil: { hash: "57", color: "" },
  Sphalerite: { hash: "5d", color: "" },
  Titanite: { hash: "d8", color: "" },
  Titanium: { hash: "2a", color: "" },
  Tungsten: { hash: "91", color: "" },
  Wolframite: { hash: "ae", color: "" },
  Zinc: { hash: "85", color: "" },
  Sulfur: { hash: "45", color: "" },
  Silicone: { hash: "11", color: "" },
  Rubber: { hash: "a5", color: "" },
  Tungsten_Carbide: { hash: "06", color: "" },
  Steel: { hash: "38", color: "" },
  Nanocarbon_Alloy: { hash: "0c", color: "" },
  Titanium_Alloy: { hash: "85", color: "" },

  // Planets
  Sylva: { hash: "d2", color: "" },
  Desolo: { hash: "0e", color: "" },
  Calidor: { hash: "f6", color: "" },
  Vesania: { hash: "fd", color: "" },
  Novus: { hash: "1c", color: "" },
  Glacio: { hash: "dc", color: "" },
  Atrox: { hash: "5c", color: "" },

  //gateway
  Gateway_Sylva: { hash: "74", color: "" },
  Gateway_Desolo: { hash: "95", color: "" },
  Gateway_Calidor: { hash: "3f", color: "" },
  Gateway_Vesania: { hash: "c6", color: "" },
  Gateway_Novus: { hash: "3a", color: "" },
  Gateway_Glacio: { hash: "b5", color: "" },
  Gateway_Atrox: { hash: "a3", color: "" },
  Mission_Log: { hash: "58", color: "" },

  // Tier
  Backpack: { hash: "68", color: "" },
  Atmospheric_Condenser: { hash: "80", color: "" },
  Augment: { hash: "6b", color: "" },
  Auto_Extractor: { hash: "37", color: "" },
  Battery: { hash: "31", color: "" },
  Beacon: { hash: "09", color: "" },
  Canister: { hash: "1c", color: "" },
  Chemistry_Lab: { hash: "3e", color: "" },
  Crane: { hash: "f3", color: "" },
  Drill: { hash: "56", color: "" },
  Dynamite: { hash: "08", color: "" },
  Figurine: { hash: "10", color: "" },
  Fireworks: { hash: "d0", color: "" },
  Generator: { hash: "a7", color: "" },
  Horn: { hash: "11", color: "" },
  Hoverboard: { hash: "ff", color: "" },
  Landing_Pad: { hash: "fb", color: "" },
  Leveling_Block: { hash: "4b", color: "" },
  Oxygen_Tank: { hash: "10", color: "" },
  Oxygenator: { hash: "ef", color: "" },
  Packager: { hash: "e9", color: "" },
  Paver: { hash: "55", color: "" },
  Platforms: { hash: "bf", color: "" },
  Power_Cells: { hash: "9b", color: "" },
  Power_Extenders: { hash: "3f", color: "" },
  Probe_Scanner: { hash: "ca", color: "" },
  Rail_Engine: { hash: "83", color: "" },
  Rail_Post: { hash: "64", color: "" },
  Rail_Station: { hash: "1a", color: "" },
  Recreational_Sphere: { hash: "b8", color: "" },
  Research: { hash: "2a", color: "#099bf0" },
  Rover_Seat: { hash: "70", color: "" },
  Rover: { hash: "ad", color: "" },
  Sensor: { hash: "95", color: "" },
  Shelter: { hash: "23", color: "" },
  Shredder: { hash: "cc", color: "" },
  Shuttle: { hash: "47", color: "" },
  Small_Camera: { hash: "1e", color: "" },
  Smelting_Furnace: { hash: "51", color: "" },
  Soil_Centrifuge: { hash: "49", color: "" },
  Solar_Panel: { hash: "77", color: "" },
  Splitter: { hash: "d6", color: "" },
  Storage: { hash: "3e", color: "" },
  Tether: { hash: "ec", color: "" },
  Thruster: { hash: "ea", color: "" },
  Tier_Extra_Large: { hash: "78", color: "" },
  Tier_Large: { hash: "d1", color: "" },
  Tier_Medium: { hash: "a3", color: "" },
  Trade_Platform: { hash: "22", color: "" },
  VTOL: { hash: "0b", color: "" },
  Winch: { hash: "0e", color: "" },
  Wind_Turbine: { hash: "14", color: "" },
  Worklight: { hash: "d3", color: "" },
};
const normalize = (name) => String(name).replaceAll(" ", "_");
const getHash = (norm) => icons[norm].hash?.[0] + "/" + icons[norm].hash;
const getPath = (norm) => `${provider}/${getHash(norm)}/Icon_${norm}.png`;
const getColor = (norm) => icons[norm].color ?? "#000000";

export function useIcon(name?: string): { src: string; color: string } {
  const norm = normalize(name);
  if (!(norm in icons)) return useIcon("Packager");
  const src = getPath(norm);
  const color = getColor(norm);
  return { src, color };
}