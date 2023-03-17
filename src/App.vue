<script lang="ts" setup>
  import { ref } from "vue";
  import { useElementSize } from "@vueuse/core";

  import Process from "./components/Process.vue";
  import Arrow from "./components/Arrow.vue";
  import ArrowGroup from "./components/ArrowGroup.vue";
  import CheatSheet from "./components/CheatSheet.vue";
  import Page from "./components/Page.vue";
  import Resource from "./components/Resource.vue";
  import Recipe from "./components/Recipe.vue";
  import Planet from "./components/Planet.vue";
  import Box from "./components/Box.vue";
  import Item from "./components/Item.vue";
  const all_planets = [
    "Sylva",
    "Desolo",
    "Calidor",
    "Vesania",
    "Novus",
    "Glacio",
    "Atrox",
  ];
  const page = ref(null);
  const { width, height } = useElementSize(page);
</script>

<template>
  <CheatSheet>
    <Page ref="page">
      <svg
        style="position: absolute; left: 0px; top: 0px; pointer-events: none"
        :width="width"
        :height="height"
      >
        <ArrowGroup>
          <Arrow from="1;2;R" to="2;2;L" />
          <Arrow from="1;3;R" to="2;3;L" />
          <Arrow from="1;4;R" to="2;4;L" />
          <Arrow from="1;5;R" to="2;5;L" />
          <Arrow from="1;8;R" to="2;8;L" />
          <Arrow from="4;8;L" to="3;8;R" />
          <Arrow from="1;5;R" to="3;6;L" />
          <Arrow from="1;7;R" to="3;6;L" />
          <Arrow from="1;7;R" to="3;7;L" />
          <Arrow from="1;8;R" to="3;7;L" />
          <Arrow from="1;9;RD" to="3;9;LD" />
          <Arrow from="1;10;R" to="2;10;L" />
          <Arrow from="1;11;R" to="2;11;L" />
          <Arrow from="1;12;R" to="2;12;L" />
          <Arrow from="1;13;R" to="2;13;L" />
          <Arrow from="2;10;RD" to="3;10;LD" />
          <Arrow from="1;14;RU" to="3;14;LU" />
          <Arrow from="1;16;RD" to="3;16;LD" />
        </ArrowGroup>
        <ArrowGroup>
          <Arrow from="2;8;RU" to="3;8;LU" />
          <Arrow from="2;8;RU" to="3;9;LU" />
          <Arrow from="2;8;RU" to="3;10;LU" />
          <Arrow from="2;8;RU" to="3;11;LU" />
          <Arrow from="3;16;LU" to="3;14;LD" />
          <Arrow from="4;6;L" to="3;6;R" />
          <Arrow from="4;11;LU" to="3;11;RU" />
          <Arrow from="3;11;RD" to="3;12;RU" />
          <Arrow from="4;12;LD" to="3;12;RD" />
          <Arrow from="4;13;LU" to="3;13;RU" />
          <Arrow from="3;14;RU" to="3;13;RD" />
          <Arrow from="3;14;RD" to="3;15;RU" />
          <Arrow from="4;16;L" to="3;16;R" />
        </ArrowGroup>
        <ArrowGroup>
          <Arrow from="2;3;R" to="3;5;L" />
          <Arrow from="2;4;R" to="3;5;L" />
          <Arrow from="2;11;RD" to="3;11;LD" />
          <Arrow from="2;13;RD" to="3;13;LD" />
          <Arrow from="3;13;LU" to="3;12;LU" />
        </ArrowGroup>
      </svg>
      <Box>
        <Process name="Mining" icon="Drill">
          <Resource
            name="Clay"
            :planets="all_planets"
            :machines="['Soil_Centrifuge', 'Trade_Platform']"
          />
          <Resource
            name="Malachite"
            :planets="['-Sylva', 'Calidor']"
            :machines="['Trade_Platform']"
          />
          <Resource
            name="Laterite"
            :planets="all_planets"
            :machines="['Trade_Platform']"
          />
          <Resource
            name="Quartz"
            scrap=".25"
            :planets="all_planets"
            :machines="['Soil_Centrifuge', 'Trade_Platform']"
          />
          <Resource
            name="Lithium"
            :planets="['Vesania', '-Novus']"
            scrap="2"
            :machines="['Trade_Platform']"
          />
          <Resource
            name="Resin"
            :planets="all_planets"
            scrap=".25"
            :machines="['Soil_Centrifuge', 'Trade_Platform']"
          />
          <Resource
            name="Organic"
            :planets="all_planets"
            scrap=".25"
            :machines="['Soil_Centrifuge', 'Trade_Platform']"
          />
          <Resource
            name="Compound"
            :planets="all_planets"
            scrap=".25"
            :machines="['Soil_Centrifuge', 'Trade_Platform']"
          />
          <Resource
            name="Wolframite"
            :planets="['Desolo', '-Calidor']"
            :machines="['Trade_Platform']"
          />
          <Resource
            name="Hematite"
            :planets="['Novus', '-Glacio']"
            :machines="['Trade_Platform']"
          />
          <Resource
            name="Sphalerite"
            :planets="['Sylva', '-Desolo']"
            :machines="['Trade_Platform']"
          />
          <Resource
            name="Titanite"
            :planets="['-Vesania', 'Glacio']"
            :machines="['Trade_Platform']"
          />
          <Resource
            name="Graphite"
            :planets="all_planets"
            scrap=".25"
            :machines="['Soil_Centrifuge', 'Trade_Platform']"
          />
          <Resource
            name="Astronium"
            :planets="all_planets"
            scrap=".5"
            :machines="[]"
          />
          <Resource
            name="Ammonium"
            :planets="all_planets"
            scrap=".5"
            :machines="['Soil_Centrifuge', 'Trade_Platform']"
          />
        </Process>
      </Box>
      <Box>
        <Process name="Smelting Furnace">
          <Recipe name="Ceramic" scrap=".5" :ingredients="['Clay']" />
          <Recipe name="Copper" scrap="1" :ingredients="['Malachite']" />
          <Recipe name="Aluminum" scrap="1" :ingredients="['Laterite']" />
          <Recipe name="Glass" scrap=".5" :ingredients="['Quartz']" />
          <Box type="recipe" />
          <Box type="recipe" />
          <Recipe name="Carbon" :ingredients="['Organic']" />
          <Box type="recipe" />
          <Recipe name="Tungsten" scrap="1.5" :ingredients="['Wolframite']" />
          <Recipe name="Iron" scrap="1.5" :ingredients="['Hematite']" />
          <Recipe name="Zinc" scrap="1.5" :ingredients="['Sphalerite']" />
          <Recipe name="Titanium" scrap="1.5" :ingredients="['Titanium']" />
        </Process>
        <Box type="process">
          <Box type="recipe" />
          <Recipe name="EXO Chip" scrap="3" :machines="['Trade_Platform']" />
        </Box>
      </Box>
      <Box>
        <Box type="process">
          <Planet
            name="Sylva"
            gateway="Quartz"
            solar="normal"
            wind="normal"
            :minerals="['Sphalerite', '-Malachite']"
            :gases="['Nitrogen', '-Hydrogen']"
          />
          <Planet
            name="Desolo"
            gateway="Sphalerite"
            solar="good"
            wind="low"
            :minerals="['Wolframite', '-Sphalerite']"
            :gases="[]"
          />
          <Planet
            name="Calidor"
            gateway="Explosive Powder"
            solar="great"
            wind="low"
            :minerals="['Malachite', '-Wolframite']"
            :gases="['Sulfur', '-Hydrogen']"
          />
        </Box>
        <Process name="Chemistry Lab">
          <Recipe
            name="Aluminum Alloy"
            scrap="1.5"
            :ingredients="['Copper', 'Aluminum']"
          />
          <Recipe
            name="Silicone"
            scrap="1"
            :ingredients="['Quartz', 'Resin']"
          />
          <Recipe name="Rubber" scrap="1" :ingredients="['Resin', 'Organic']" />
          <Recipe
            name="Explosive Powder"
            :ingredients="['Carbon', 'Carbon', 'Sulfur']"
          />
          <Recipe
            name="Plastic"
            scrap=".5"
            :ingredients="['Carbon', 'Compound']"
          />
          <Recipe
            name="Tungsten Carbide"
            scrap="1.5"
            :ingredients="['Carbon', 'Tungsten']"
          />
          <Recipe name="Steel" scrap="1.5" :ingredients="['Carbon', 'Iron']" />
          <Recipe
            name="Nanocarbon Alloy"
            scrap="2"
            :ingredients="['Steel', 'Titanium Alloy', 'Helium']"
          />
          <Recipe
            name="Titanium Alloy"
            scrap="1.5"
            :ingredients="['Titanium', 'Nitrogen', 'Graphene']"
          />
          <Recipe name="Graphene" :ingredients="['Graphite', 'Hydrazine']" />
          <Recipe
            name="Diamond"
            scrap="2"
            :ingredients="['Graphene', 'Graphene']"
          />
          <Recipe
            name="Hydrazine"
            :ingredients="['Hydrogen', 'Ammonium', 'Ammonium']"
            :machines="['Trade_Platform']"
          />
        </Process>
      </Box>
      <Box>
        <Box type="process">
          <Planet
            name="Vesania"
            gateway="Quartz"
            solar="bad"
            wind="good"
            :minerals="['Sphalerite', '-Malachite']"
            :gases="['Hydrogen', '-Nitrogen', '-Argon']"
          />
          <Planet
            name="Novus"
            gateway="Quartz"
            solar="good"
            wind="good"
            :minerals="['Sphalerite', '-Malachite']"
            :gases="['-Methane', '-Hydrogen']"
          />
          <Planet
            name="Glacio"
            gateway="Quartz"
            solar="worst"
            wind="great"
            :minerals="['Sphalerite', '-Malachite']"
            :gases="['Argon']"
          />
          <Planet
            name="Atrox"
            gateway="Quartz"
            solar="bad"
            wind="bad"
            :minerals="['Sphalerite', '-Malachite']"
            :gases="['Methane', 'Helium', '-Sulfur', '-Nitrogen']"
          />
        </Box>
        <Process name="Atmospheric Condenser">
          <Resource name="Methane" :planets="['-Novus', 'Atrox']" />
          <Box type="recipe" />
          <Resource name="Sulfur" :planets="['Calidor', '-Atrox']" />
          <Box type="recipe" />
          <Box type="recipe" />
          <Resource name="Argon" :planets="['-Vesania', 'Glacio']" />
          <Resource name="Helium" :planets="['Atrox']" />
          <Resource
            name="Nitrogen"
            :planets="['Sylva', '-Vesania', '-Atrox']"
          />
          <Box type="recipe" />
          <Box type="recipe" />
          <Resource
            name="Hydrogen"
            :planets="['-Sylva', '-Calidor', 'Vesania', '-Novus']"
          />
        </Process>
      </Box>
      <Box type="divider">
        <Process compact>
          <Item name="Backpack" title />
          <Item
            icon="Tier_Medium"
            name="Sm Printer"
            :ingredients="['Compound']"
          />
          <Item name="Tether" :ingredients="['Compound']" />
          <Item
            icon="Oxygen_Tank"
            name="Oxygen Filters"
            :ingredients="['Resin']"
          />
          <Item icon="Canister" name="Sm Can." :ingredients="['Resin']" />
          <Item icon="Beacon" name="Beacon" :ingredients="['Quartz']" />
          <Item icon="Worklight" name="Worklight" :ingredients="['Copper']" />
          <Item
            icon="Generator"
            name="Sm Generator"
            :ingredients="['Compound']"
          />
          <Item name="Packager" unlock="1k" :ingredients="['Graphite']" />
          <Item
            name="Leveling Block"
            unlock="500"
            :ingredients="['Canister']"
          />
          <Item
            icon="Oxygen_Tank"
            name="Oxygen Tank"
            unlock="2k"
            :ingredients="['Glass']"
          />
          <Item
            icon="Oxygenator"
            name="Port. Oxygenator"
            unlock="10k"
            :ingredients="['Nanocarbon Alloy']"
          />
          <Item
            icon="Worklight"
            name="Glowsticks"
            unlock="350"
            :ingredients="['Organic']"
          />
          <Item
            icon="Worklight"
            name="Floodlight"
            unlock="2k"
            :ingredients="['Tungsten']"
          />
          <Item
            icon="Power_Cells"
            name="Power Cells"
            unlock="800"
            :ingredients="['Graphite']"
          />
          <Item
            icon="Solar"
            name="Sm Solar Panel"
            unlock="300"
            :ingredients="['Copper']"
          />
          <Item
            icon="Wind_Turbine"
            name="Sm Wind Turb."
            unlock="300"
            :ingredients="['Ceramic']"
          />
          <Item
            icon="Battery"
            name="Sm Battery"
            unlock="2k"
            :ingredients="['Zinc']"
          />
          <Item
            icon="Augment"
            name="Boost Mod"
            unlock="1k"
            :ingredients="['Zinc']"
          />
          <Item
            icon="Augment"
            name="Wide Mod"
            unlock="1k"
            :ingredients="['Zinc']"
          />
          <Item
            icon="Augment"
            name="Narrow Mod"
            unlock="1k"
            :ingredients="['Zinc']"
          />
          <Item
            icon="Augment"
            name="Inhibitor Mod"
            unlock="1k"
            :ingredients="['Zinc']"
          />
          <Item
            icon="Augment"
            name="Alignment Mod"
            unlock="1k"
            :ingredients="['Zinc']"
          />
          <Item
            icon="Augment"
            name="Drill Mod 1"
            unlock="1k"
            :ingredients="['Ceramic']"
          />
          <Item
            icon="Augment"
            name="Drill Mod 2"
            unlock="2,5k"
            :ingredients="['Tungsten Carbide']"
          />
          <Item
            icon="Augment"
            name="Drill Mod 3"
            unlock="~4k"
            :ingredients="['Diamond']"
          />
          <Item
            icon="Dynamite"
            name="Dynamite"
            unlock="~4k"
            :ingredients="['Explosive Powder']"
          />
          <Item
            icon="Fireworks"
            name="Fireworks"
            unlock="~4k"
            :ingredients="['Explosive Powder']"
          />
          <Item
            icon="Sm_Camera"
            name="Sm Camera"
            unlock="2,5k"
            :ingredients="['EXO Chip']"
          />
          <Item
            icon="Horn"
            name="Sm Trumpet Horn"
            unlock="1k"
            :ingredients="['Resin']"
          />
          <Item
            icon="Figurine"
            name="Holographic Figurine"
            unlock="3k"
            :ingredients="['Plastic']"
          />
          <Item
            icon="Augment"
            name="Terrain Analyzer"
            unlock="2k"
            :ingredients="['Zinc']"
          />
          <Item
            icon="Probe_Scanner"
            name="Probe Scanner"
            unlock="4k"
            :ingredients="['Steel']"
          />
          <Item
            icon="Thruster"
            name="Solid-Fuel Jump Jet"
            unlock="5k"
            :ingredients="['Aluminum Alloy']"
          />
          <Item
            icon="Thruster"
            name="Hydrazine Jet Pack"
            unlock="15k"
            :ingredients="['Titanium Alloy']"
          />
          <Item
            icon="Hoverboard"
            name="Hoverboard"
            unlock="Mission"
            :ingredients="['EXO Chip']"
          />
          <Item icon="Generator" name="QT-RTG" unlock="Mission" />
          <Item name="Tier Medium" title />
          <Item
            icon="Tier_Large"
            name="Md Printer"
            :ingredients="['Compound', 'Compound']"
          />
          <Item
            icon="Oxygenator"
            name="Oxygenator"
            unlock="1,8k"
            :ingredients="['Aluminum', 'Ceramic']"
          />
          <Item
            icon="Shredder"
            name="Md Shredder"
            unlock="1,25k"
            :ingredients="['Iron', 'Iron']"
          />
          <Item
            icon="Shelter"
            name="Field Shelter"
            unlock="8k"
            :ingredients="['Silicone', 'Graphene']"
          />
          <Item
            icon="Crane"
            name="Auto Arm"
            unlock="1,5k"
            :ingredients="['Aluminum', 'Graphite']"
          />
          <Item
            icon="Canister"
            name="Md Res. Can."
            unlock="2k"
            :ingredients="['Plastic', 'Glass']"
          />
          <Item
            icon="Canister"
            name="Md Fluid Can."
            unlock="2,5k"
            :ingredients="['Plastic', 'Glass']"
          />
          <Item
            icon="Canister"
            name="Md Gas Can."
            unlock="4k"
            :ingredients="['Silicone', 'Glass']"
          />
          <Item
            icon="Sensor"
            name="Power Sens."
            unlock="500"
            :ingredients="['Zinc', 'Copper']"
          />
          <Item
            icon="Sensor"
            name="Storage Sens."
            unlock="750"
            :ingredients="['Zinc', 'Quartz']"
          />
          <Item
            icon="Sensor"
            name="Battery Sens."
            unlock="750"
            :ingredients="['Zinc', 'Graphite']"
          />
          <Item
            icon="Sensor"
            name="Button Repeater"
            unlock="300"
            :ingredients="['Zinc']"
          />
          <Item
            icon="Sensor"
            name="Proximity Repeater"
            unlock="700"
            :ingredients="['Zinc']"
          />
          <Item
            icon="Sensor"
            name="Delay Repeater"
            unlock="1k"
            :ingredients="['Zinc']"
          />
          <Item
            icon="Sensor"
            name="Count Repeater"
            unlock="1k"
            :ingredients="['Zinc']"
          />
          <Item
            icon="Power_Extenders"
            name="Power Extenders"
            unlock="500"
            :ingredients="['Copper']"
          />
          <Item
            icon="Splitter"
            name="Power Switch"
            unlock="750"
            :ingredients="['Copper']"
          />
          <Item
            icon="Splitter"
            name="Splitter"
            unlock="1k"
            :ingredients="['Copper', 'Graphite']"
          />
          <Item
            icon="Generator"
            name="Md Generator"
            unlock="2k"
            :ingredients="['Aluminum', 'Tungsten']"
          />
          <Item
            icon="Solar"
            name="Md Solar Panel"
            unlock="2k"
            :ingredients="['Copper', 'Glass']"
          />
          <Item
            icon="Wind_Turbine"
            name="Md Wind Turb."
            unlock="2,5k"
            :ingredients="['Aluminum', 'Ceramic']"
          />
          <Item
            icon="Battery"
            name="Md Battery"
            unlock="~4k"
            :ingredients="['Lithium', 'Zinc']"
          />
          <Item
            icon="Generator"
            name="RTG"
            unlock="12,5k"
            :ingredients="['Nanocarbon Alloy', 'Lithium']"
          />
          <Item icon="Platforms" name="Md Plat. A" :ingredients="['Resin']" />
          <Item
            icon="Platforms"
            name="Md Plat. B"
            unlock="250"
            :ingredients="['Resin', 'Resin']"
          />
          <Item
            icon="Platforms"
            name="Md Plat. C"
            unlock="400"
            :ingredients="['Resin']"
          />
          <Item
            icon="Platforms"
            name="Tall Plat."
            unlock="750"
            :ingredients="['Ceramic']"
          />
          <Item
            icon="Platforms"
            name="Md T-Platform"
            unlock="400"
            :ingredients="['Resin', 'Resin']"
          />
          <Item
            icon="Storage"
            name="Md Stor."
            :ingredients="['Resin', 'Resin']"
          />
          <Item
            icon="Storage"
            name="Md Stor. Silo"
            unlock="3k"
            :ingredients="['Titanium', 'Titanium']"
          />
          <Item
            icon="Storage"
            name="Tall Stor."
            unlock="400"
            :ingredients="['Ceramic']"
          />
          <Item
            icon="Rover_Seat"
            name="Rover Seat"
            :ingredients="['Compound', 'Compound']"
          />
          <Item
            icon="Rover"
            name="Tractor"
            unlock="1k"
            :ingredients="['Aluminum', 'Aluminum']"
          />
          <Item
            icon="Rover"
            name="Trailer"
            unlock="1,5k"
            :ingredients="['Compound', 'Aluminum']"
          />
          <Item
            icon="Horn"
            name="Md Buggy Horn"
            unlock="2k"
            :ingredients="['Plastic', 'Rubber']"
          />
          <Item
            icon="Winch"
            name="Winch"
            unlock="~4k"
            :ingredients="['EXO Chip', 'Rubber']"
          />
          <Item
            icon="Paver"
            name="Paver"
            unlock="5k"
            :ingredients="['Aluminum Alloy', 'Silicone']"
          />
          <Item
            icon="Drill"
            name="Drill Strength 1"
            unlock="2,5k"
            :ingredients="['Tungsten Carbide', 'Ceramic']"
          />
          <Item
            icon="Drill"
            name="Drill Strength 2"
            unlock="5k"
            :ingredients="['Titanium Alloy', 'Tungsten Carbide']"
          />
          <Item
            icon="Drill"
            name="Drill Strength 3"
            unlock="7,5k"
            :ingredients="['Diamond', 'Titanium Alloy']"
          />
          <Item
            icon="Thruster"
            name="Solid-Fuel Thr."
            unlock="500"
            :ingredients="['Aluminum', 'Ammonium']"
          />
          <Item
            icon="Thruster"
            name="Hydrazine Thr."
            unlock="~4k"
            :ingredients="['EXO Chip', 'Steel']"
          />
          <Item
            icon="Rail_Post"
            name="Rail Post"
            unlock="750"
            :ingredients="['Resin', 'Steel']"
          />
          <Item
            icon="Rail_Post"
            name="Tall Rail Post"
            unlock="750"
            :ingredients="['Resin', 'Steel']"
          />
          <Item
            icon="Rail_Post"
            name="Rail Junction"
            unlock="1k"
            :ingredients="['Aluminum', 'Aluminum']"
          />
          <Item name="Tier Large" title />
          <Item
            icon="Tier_Extra_Large"
            name="L Printer"
            :ingredients="['Compound', 'Compound', 'Compound']"
          />
          <Item
            icon="Smelting_Furnace"
            name="Smelt. Furn."
            unlock="250"
            :ingredients="['Compound', 'Resin', 'Resin']"
          />
          <Item
            icon="Soil_Centrifuge"
            name="Soil Centr."
            unlock="750"
            :ingredients="['Compound', 'Compound', 'Aluminum']"
          />
          <Item
            icon="Chemistry_Lab"
            name="Chem. Lab"
            unlock="1,6k"
            :ingredients="['Ceramic', 'Glass', 'Tungsten']"
          />
          <Item
            icon="Atmospheric_Condenser"
            name="Atmos. Cond."
            unlock="2,2k"
            :ingredients="['Plastic', 'Glass', 'Iron']"
          />
          <Item
            icon="Research"
            name="Research Chamber"
            :ingredients="['Compound', 'Compound', 'Resin']"
          />
          <Item
            icon="Trade_Platform"
            name="EXO Request Plat."
            :ingredients="['Resin', 'Resin', 'Ceramic']"
          />
          <Item
            icon="Trade_Platform"
            name="Trade Plat."
            unlock="2,5k"
            :ingredients="['Iron', 'Tungsten', 'EXO Chip']"
          />
          <Item
            icon="Shredder"
            name="L Shredder"
            unlock="2,5k"
            :ingredients="['Tungsten Carbide', 'Iron', 'EXO Chip']"
          />
          <Item
            icon="Solar"
            name="L Solar Panel"
            unlock="4k"
            :ingredients="['Aluminum Alloy', 'Glass', 'Copper']"
          />
          <Item
            icon="Wind_Turbine"
            name="L Wind Turb."
            unlock="3,5k"
            :ingredients="['Aluminum Alloy', 'Glass', 'Ceramic']"
          />
          <Item
            icon="Platforms"
            name="L Plat. A"
            :ingredients="['Resin', 'Resin']"
          />
          <Item
            icon="Platforms"
            name="L Plat. B"
            unlock="500"
            :ingredients="['Resin', 'Resin', 'Resin']"
          />
          <Item
            icon="Platforms"
            name="L Plat. C"
            unlock="1k"
            :ingredients="['Resin', 'Ceramic', 'Iron']"
          />
          <Item
            icon="Platforms"
            name="L T-Platform"
            unlock="1k"
            :ingredients="['Aluminum', 'Aluminum', 'Resin']"
          />
          <Item
            icon="Platforms"
            name="L Curved Plat."
            unlock="1k"
            :ingredients="['Compound', 'Ceramic', 'Ceramic']"
          />
          <Item
            icon="Platforms"
            name="L Extended Plat."
            unlock="500"
            :ingredients="['Resin', 'Resin']"
          />
          <Item
            icon="Canister"
            name="L Res. Can."
            unlock="5k"
            :ingredients="['Glass', 'Titanium', 'Nanocarbon Alloy']"
          />
          <Item
            icon="Storage"
            name="L Stor."
            unlock="2k"
            :ingredients="['Ceramic', 'Ceramic', 'Ceramic']"
          />
          <Item
            icon="Storage"
            name="L Stor. Silo A"
            unlock="5k"
            :ingredients="['Aluminum', 'Aluminum', 'Steel']"
          />
          <Item
            icon="Storage"
            name="L Stor. Silo B"
            unlock="7,5k"
            :ingredients="['Steel', 'Steel', 'Steel']"
          />
          <Item
            icon="Storage"
            name="L Active Stor."
            unlock="2k"
            :ingredients="['Zinc', 'Aluminum', 'Resin']"
          />
          <Item
            icon="Rover"
            name="Buggy"
            unlock="1,5k"
            :ingredients="['Compound', 'Aluminum']"
          />
          <Item
            icon="Rover_Seat"
            name="L Rover Seat"
            unlock="2k"
            :ingredients="['Plastic', 'Plastic', 'Compound']"
          />
          <Item
            icon="Rover"
            name="Md Rover"
            unlock="~4k"
            :ingredients="['Plastic', 'Plastic', 'Rubber']"
          />
          <Item
            icon="VTOL"
            name="VTOL"
            unlock="Mission"
            :ingredients="['Tungsten Carbide', 'Silicone', 'EXO Chip']"
          />
          <Item
            icon="Crane"
            name="Crane"
            unlock="4,5k"
            :ingredients="['Steel', 'Silicone', 'Titanium']"
          />
          <Item
            icon="Horn"
            name="L Fog Horn"
            unlock="4k"
            :ingredients="['Plastic', 'Rubber', 'Steel']"
          />
          <Item icon="Horn" name="L Starship Horn" />
          <Item
            icon="Rail_Engine"
            name="Rail Engine"
            unlock="1k"
            :ingredients="['Resin', 'Aluminum', 'Copper']"
          />
          <Item
            icon="Rail_Engine"
            name="Rail Car"
            unlock="1,5k"
            :ingredients="['Resin', 'Resin', 'Aluminum']"
          />
          <Item
            icon="Recreational_Sphere"
            name="Recr. Sphere"
            unlock="4,5k"
            :ingredients="['Aluminum Alloy', 'Rubber']"
          />
          <Item name="Tier Extra Large" title />
          <Item
            icon="Shelter"
            name="Shelter"
            :ingredients="['Plastic', 'Plastic', 'Silicone', 'Silicone']"
          />
          <Item
            icon="Auto_Extractor"
            name="Auto Extr."
            unlock="7,5k"
            :ingredients="['Tungsten Carbide', 'Rubber', 'Steel', 'EXO Chip']"
          />
          <Item
            icon="Shredder"
            name="XL Shredder"
            unlock="5k"
            :ingredients="['Tungsten Carbide', 'Steel', 'EXO Chip', 'EXO Chip']"
          />
          <Item
            icon="Solar"
            name="Solar Array"
            unlock="6k"
            :ingredients="['Copper', 'Glass', 'Graphene', 'Aluminum Alloy']"
          />
          <Item
            icon="Wind_Turbine"
            name="XL Wind T."
            unlock="4,5k"
            :ingredients="['Iron', 'Ceramic', 'Graphene', 'Aluminum Alloy']"
          />
          <Item
            icon="Sensor"
            name="Md S. Arch"
            unlock="500"
            :ingredients="['Zinc', 'Quartz']"
          />
          <Item
            icon="Sensor"
            name="XL S. Arch"
            unlock="1k"
            :ingredients="['Zinc', 'Zinc', 'Quartz', 'Quartz']"
          />
          <Item
            icon="Sensor"
            name="XL Canopy"
            unlock="1k"
            :ingredients="['Zinc', 'Zinc', 'Quartz', 'Quartz']"
          />
          <Item
            icon="Sensor"
            name="L Sens. Ring"
            unlock="500"
            :ingredients="['Zinc', 'Quartz']"
          />
          <Item
            icon="Sensor"
            name="L Hoop A"
            unlock="750"
            :ingredients="['Zinc', 'Quartz', 'Quartz']"
          />
          <Item
            icon="Sensor"
            name="L Hoop B"
            unlock="750"
            :ingredients="['Zinc', 'Zinc', 'Quartz']"
          />
          <Item
            icon="Sensor"
            name="XL Hoop A"
            unlock="750"
            :ingredients="['Zinc', 'Zinc', 'Quartz', 'Quartz']"
          />
          <Item
            icon="Sensor"
            name="XL Hoop B"
            unlock="1k"
            :ingredients="['Zinc', 'Zinc', 'Zinc', 'Quartz']"
          />
          <Item
            icon="Platforms"
            name="XL Plat. A"
            unlock="2k"
            :ingredients="['Iron', 'Iron', 'Ceramic', 'Ceramic']"
          />
          <Item
            icon="Platforms"
            name="XL Plat. B"
            unlock="3k"
            :ingredients="['Iron', 'Iron', 'Iron', 'Iron']"
          />
          <Item
            icon="Platforms"
            name="XL Plat. C"
            unlock="2k"
            :ingredients="['Resin', 'Resin', 'Resin', 'Iron']"
          />
          <Item
            icon="Platforms"
            name="XL C. Plat."
            unlock="2k"
            :ingredients="['Ceramic', 'Ceramic', 'Compound', 'Compound']"
          />
          <Item
            icon="Platforms"
            name="XL Ext. Plat."
            unlock="750"
            :ingredients="['Resin', 'Resin', 'Resin']"
          />
          <Item
            icon="Platforms"
            name="Fig. Plat."
            unlock="3k"
            :ingredients="['Iron', 'Iron', 'Iron', 'Iron']"
          />
          <Item
            icon="Storage"
            name="XL Stor."
            unlock="2k"
            :ingredients="['Iron', 'Iron', 'Ceramic', 'Ceramic']"
          />
          <Item
            icon="Rover"
            name="L Rover"
            unlock="5k"
            :ingredients="['Aluminum Alloy', 'Rubber', 'EXO Chip', 'EXO Chip']"
          />
          <Item
            icon="Landing_Pad"
            name="Landing Pad"
            unlock="750"
            :ingredients="['Aluminum', 'Ceramic', 'Ceramic']"
          />
          <Item
            icon="Shuttle"
            name="Sm Shuttle"
            unlock="1,5k"
            :ingredients="['Aluminum', 'Aluminum']"
          />
          <Item
            icon="Shuttle"
            name="Md Shuttle"
            unlock="~4k"
            :ingredients="['Aluminum Alloy', 'Ceramic', 'Ceramic']"
          />
          <Item
            icon="Shuttle"
            name="L Shuttle"
            unlock="5k"
            :ingredients="['Titanium Alloy', 'Ceramic', 'EXO Chip', 'EXO Chip']"
          />
          <Item
            icon="Rail_Station"
            name="Rail Stop."
            unlock="2,5k"
            :ingredients="['Titanium', 'Titanium', 'Copper', 'Quartz']"
          />
        </Process>
      </Box>
    </Page>
  </CheatSheet>
  <CheatSheet style="display: none">
    <img
      src="/assets/image_cheatsheet.png?url"
      alt="Old Astroneer CheatSheet"
    />
  </CheatSheet>
</template>

<style>
  :root {
    font-family: sans-serif;
    font-size: 14px;
    overflow: hidden;
  }

  body {
    margin: 0;
    display: flex;
    place-items: center;
  }

  #app {
    margin: 0 auto;
  }
</style>
