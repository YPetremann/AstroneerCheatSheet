<script lang="ts" setup>
  import { provide } from "vue";
  import Process from "../components/Process.vue";
  import Arrow from "../components/Arrow.vue";
  import ArrowGroup from "../components/ArrowGroup.vue";
  import CheatSheet from "../components/CheatSheet.vue";
  import Page from "../components/Page.vue";
  import Resource from "../components/Resource.vue";
  import Recipe from "../components/Recipe.vue";
  import Planet from "../components/Planet.vue";
  import Box from "../components/Box.vue";
  import Item from "../components/Item.vue";
  const all_planets = [
    "Sylva",
    "Desolo",
    "Calidor",
    "Vesania",
    "Novus",
    "Glacio",
    "Atrox",
  ];
  const visible = ref(["all"]);
  provide("visible", visible);
</script>

<template>
  <Page>
    <svg
      style="position: absolute; left: 0px; top: 0px; pointer-events: none"
      :width="1920"
      :height="1080"
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
          :machines="['Soil Centrifuge', 'Trade Platform']"
        />
        <Resource
          name="Malachite"
          :planets="['-Sylva', 'Calidor']"
          :machines="['Trade Platform']"
        />
        <Resource
          name="Laterite"
          :planets="all_planets"
          :machines="['Trade Platform']"
        />
        <Resource
          name="Quartz"
          scrap=".25"
          :planets="all_planets"
          :machines="['Soil Centrifuge', 'Trade Platform']"
        />
        <Resource
          name="Lithium"
          :planets="['Vesania', '-Novus']"
          scrap="2"
          :machines="['Trade Platform']"
        />
        <Resource
          name="Resin"
          :planets="all_planets"
          scrap=".25"
          :machines="['Soil Centrifuge', 'Trade Platform']"
        />
        <Resource
          name="Organic"
          :planets="all_planets"
          scrap=".25"
          :machines="['Soil Centrifuge', 'Trade Platform']"
        />
        <Resource
          name="Compound"
          :planets="all_planets"
          scrap=".25"
          :machines="['Soil Centrifuge', 'Trade Platform']"
        />
        <Resource
          name="Wolframite"
          :planets="['Desolo', '-Calidor']"
          :machines="['Trade Platform']"
        />
        <Resource
          name="Hematite"
          :planets="['Novus', '-Glacio']"
          :machines="['Trade Platform']"
        />
        <Resource
          name="Sphalerite"
          :planets="['Sylva', '-Desolo']"
          :machines="['Trade Platform']"
        />
        <Resource
          name="Titanite"
          :planets="['-Vesania', 'Glacio']"
          :machines="['Trade Platform']"
        />
        <Resource
          name="Graphite"
          :planets="all_planets"
          scrap=".25"
          :machines="['Soil Centrifuge', 'Trade Platform']"
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
          :machines="['Soil Centrifuge', 'Trade Platform']"
        />
      </Process>
    </Box>
    <Box>
      <Process name="Smelting Furnace">
        <Recipe
          name="Ceramic"
          scrap=".5"
          :ingredients="['Clay']"
          :machines="['Smelting Furnace']"
        />
        <Recipe
          name="Copper"
          scrap="1"
          :ingredients="['Malachite']"
          :machines="['Smelting Furnace']"
        />
        <Recipe
          name="Aluminum"
          scrap="1"
          :ingredients="['Laterite']"
          :machines="['Smelting Furnace']"
        />
        <Recipe
          name="Glass"
          scrap=".5"
          :ingredients="['Quartz']"
          :machines="['Smelting Furnace']"
        />
        <Box type="recipe" />
        <Box type="recipe" />
        <Recipe
          name="Carbon"
          :ingredients="['Organic']"
          :machines="['Smelting Furnace']"
        />
        <Box type="recipe" />
        <Recipe
          name="Tungsten"
          scrap="1.5"
          :ingredients="['Wolframite']"
          :machines="['Smelting Furnace']"
        />
        <Recipe
          name="Iron"
          scrap="1.5"
          :ingredients="['Hematite']"
          :machines="['Smelting Furnace']"
        />
        <Recipe
          name="Zinc"
          scrap="1.5"
          :ingredients="['Sphalerite']"
          :machines="['Smelting Furnace']"
        />
        <Recipe
          name="Titanium"
          scrap="1.5"
          :ingredients="['Titanium']"
          :machines="['Smelting Furnace']"
        />
      </Process>
      <Box type="process">
        <Box type="recipe" />
        <Recipe
          name="EXO Chip"
          scrap="3"
          :machines="['Reward', 'Trade Platform']"
        />
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
          :machines="['Chemistry Lab']"
        />
        <Recipe
          name="Silicone"
          scrap="1"
          :ingredients="['Quartz', 'Resin']"
          :machines="['Chemistry Lab']"
        />
        <Recipe
          name="Rubber"
          scrap="1"
          :ingredients="['Resin', 'Organic']"
          :machines="['Chemistry Lab']"
        />
        <Recipe
          name="Explosive Powder"
          :ingredients="['Carbon', 'Carbon', 'Sulfur']"
          :machines="['Chemistry Lab']"
        />
        <Recipe
          name="Plastic"
          scrap=".5"
          :ingredients="['Carbon', 'Compound']"
          :machines="['Chemistry Lab']"
        />
        <Recipe
          name="Tungsten Carbide"
          scrap="1.5"
          :ingredients="['Carbon', 'Tungsten']"
          :machines="['Chemistry Lab']"
        />
        <Recipe
          name="Steel"
          scrap="1.5"
          :ingredients="['Carbon', 'Iron']"
          :machines="['Chemistry Lab']"
        />
        <Recipe
          name="Nanocarbon Alloy"
          scrap="2"
          :ingredients="['Steel', 'Titanium Alloy', 'Helium']"
          :machines="['Chemistry Lab']"
        />
        <Recipe
          name="Titanium Alloy"
          scrap="1.5"
          :ingredients="['Titanium', 'Nitrogen', 'Graphene']"
          :machines="['Chemistry Lab']"
        />
        <Recipe
          name="Graphene"
          :ingredients="['Graphite', 'Hydrazine']"
          :machines="['Chemistry Lab']"
        />
        <Recipe
          name="Diamond"
          scrap="2"
          :ingredients="['Graphene', 'Graphene']"
          :machines="['Chemistry Lab']"
        />
        <Recipe
          name="Hydrazine"
          :ingredients="['Hydrogen', 'Ammonium', 'Ammonium']"
          :machines="['Reward', 'Trade Platform', 'Chemistry Lab']"
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
        <Resource
          name="Methane"
          :planets="['-Novus', 'Atrox']"
          :machines="['Atmospheric Condenser']"
        />
        <Box type="recipe" />
        <Resource
          name="Sulfur"
          :planets="['Calidor', '-Atrox']"
          :machines="['Atmospheric Condenser']"
        />
        <Box type="recipe" />
        <Box type="recipe" />
        <Resource
          name="Argon"
          :planets="['-Vesania', 'Glacio']"
          :machines="['Atmospheric Condenser']"
        />
        <Resource
          name="Helium"
          :planets="['Atrox']"
          :machines="['Atmospheric Condenser']"
        />
        <Resource
          name="Nitrogen"
          :planets="['Sylva', '-Vesania', '-Atrox']"
          :machines="['Atmospheric Condenser']"
        />
        <Box type="recipe" />
        <Box type="recipe" />
        <Resource
          name="Hydrogen"
          :planets="['-Sylva', '-Calidor', 'Vesania', '-Novus']"
          :machines="['Atmospheric Condenser']"
        />
      </Process>
    </Box>
    <Box type="divider">
      <Process compact>
d        <Item icon="Scrap" name="Scrap" :machines="['Reward', 'Shredder']" />
        <Item
          icon="Tier Medium"
          name="Sm Printer"
          :ingredients="['Compound']"
          :machines="['Reward', 'Backpack']"
        />
        <Item
          name="Tether"
          :ingredients="['Compound']"
          :machines="['Reward', 'Backpack']"
        />
        <Item
          icon="Oxygen Tank"
          name="Oxygen Filters"
          :ingredients="['Resin']"
          :machines="['Reward', 'Backpack']"
        />
        <Item
          icon="Canister"
          name="Sm Can."
          :ingredients="['Resin']"
          :machines="['Reward', 'Backpack']"
        />
        <Item
          icon="Beacon"
          name="Beacon"
          :ingredients="['Quartz']"
          :machines="['Reward', 'Backpack']"
        />
        <Item
          icon="Worklight"
          name="Worklight"
          :ingredients="['Copper']"
          :machines="['Reward', 'Backpack']"
        />
        <Item
          icon="Generator"
          name="Sm Generator"
          :ingredients="['Compound']"
          :machines="['Backpack']"
        />
        <Item
          name="Packager"
          unlock="1k"
          :ingredients="['Graphite']"
          :machines="['Backpack']"
        />
        <Item
          name="Leveling Block"
          unlock="500"
          :ingredients="['Canister']"
          :machines="['Backpack']"
        />
        <Item
          icon="Oxygen Tank"
          name="Oxygen Tank"
          unlock="2k"
          :ingredients="['Glass']"
          :machines="['Backpack']"
        />
        <Item
          icon="Oxygenator"
          name="Port. Oxygenator"
          unlock="10k"
          :ingredients="['Nanocarbon Alloy']"
          :machines="['Reward', 'Mission Log', 'Backpack']"
        />
        <Item
          icon="Worklight"
          name="Glowsticks"
          unlock="350"
          :ingredients="['Organic']"
          :machines="['Backpack']"
        />
        <Item
          icon="Worklight"
          name="Floodlight"
          unlock="2k"
          :ingredients="['Tungsten']"
          :machines="['Mission Log', 'Backpack']"
        />
        <Item
          icon="Power Cells"
          name="Power Cells"
          unlock="800"
          :ingredients="['Graphite']"
          :machines="['Reward', 'Backpack']"
        />
        <Item
          icon="Solar Panel"
          name="Sm Solar Panel"
          unlock="300"
          :ingredients="['Copper']"
          :machines="['Backpack']"
        />
        <Item
          icon="Wind Turbine"
          name="Sm Wind Turb."
          unlock="300"
          :ingredients="['Ceramic']"
          :machines="['Backpack']"
        />
        <Item
          icon="Battery"
          name="Sm Bat."
          unlock="2k"
          :ingredients="['Zinc']"
          :machines="['Reward', 'Mission Log', 'Backpack']"
        />
        <Item
          icon="Augment"
          name="Boost Mod"
          unlock="1k"
          :ingredients="['Zinc']"
          :machines="['Backpack']"
        />
        <Item
          icon="Augment"
          name="Wide Mod"
          unlock="1k"
          :ingredients="['Zinc']"
          :machines="['Backpack']"
        />
        <Item
          icon="Augment"
          name="Narrow Mod"
          unlock="1k"
          :ingredients="['Zinc']"
          :machines="['Backpack']"
        />
        <Item
          icon="Augment"
          name="Inhibitor Mod"
          unlock="1k"
          :ingredients="['Zinc']"
          :machines="['Backpack']"
        />
        <Item
          icon="Augment"
          name="Alignment Mod"
          unlock="1k"
          :ingredients="['Zinc']"
          :machines="['Backpack']"
        />
        <Item
          icon="Augment"
          name="Drill Mod 1"
          unlock="1k"
          :ingredients="['Ceramic']"
          :machines="['Backpack']"
        />
        <Item
          icon="Augment"
          name="Drill Mod 2"
          unlock="2,5k"
          :ingredients="['Tungsten Carbide']"
          :machines="['Backpack']"
        />
        <Item
          icon="Augment"
          name="Drill Mod 3"
          unlock="~4k"
          :ingredients="['Diamond']"
          :machines="['Reward', 'Backpack']"
        />
        <Item
          icon="Dynamite"
          name="Dynamite"
          unlock="~4k"
          :ingredients="['Explosive Powder']"
          :machines="['Backpack']"
        />
        <Item
          icon="Fireworks"
          name="Fireworks"
          unlock="~4k"
          :ingredients="['Explosive Powder']"
          :machines="['Reward', 'Backpack']"
        />
        <Item
          icon="Sm Camera"
          name="Sm Camera"
          unlock="2,5k"
          :ingredients="['EXO Chip']"
          :machines="['Reward', 'Backpack']"
        />
        <Item
          icon="Horn"
          name="Sm Trumpet Horn"
          unlock="1k"
          :ingredients="['Resin']"
          :machines="['Reward', 'Mission Log', 'Backpack']"
        />
        <Item
          icon="Figurine"
          name="Holographic Figurine"
          unlock="3k"
          :ingredients="['Plastic']"
          :machines="['Backpack']"
        />
        <Item
          icon="Augment"
          name="Terrain Analyzer"
          unlock="2k"
          :ingredients="['Zinc']"
          :machines="['Backpack']"
        />
        <Item
          icon="Probe Scanner"
          name="Probe Scanner"
          unlock="4k"
          :ingredients="['Steel']"
          :machines="['Backpack']"
        />
        <Item
          icon="Thruster"
          name="Solid-Fuel Jump Jet"
          unlock="5k"
          :ingredients="['Aluminum Alloy']"
          :machines="['Reward', 'Backpack']"
        />
        <Item
          icon="Thruster"
          name="Hydrazine Jet Pack"
          unlock="15k"
          :ingredients="['Titanium Alloy']"
          :machines="['Reward', 'Mission Log', 'Backpack']"
        />
        <Item
          icon="Hoverboard"
          name="Hoverboard"
          unlock="Mission"
          :ingredients="['EXO Chip']"
          :machines="['Reward', 'Mission Log', 'Backpack']"
        />
        <Item icon="Generator" name="QT-RTG" :machines="['Reward']" />
        <Item
          icon="Tier Large"
          name="Md Printer"
          :ingredients="['Compound', 'Compound']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Oxygenator"
          name="Oxygenator"
          unlock="1,8k"
          :ingredients="['Aluminum', 'Ceramic']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Shredder"
          name="Md Shredder"
          unlock="1,25k"
          :ingredients="['Iron', 'Iron']"
          :machines="['Reward', 'Mission Log', 'Tier Medium']"
        />
        <Item
          icon="Shelter"
          name="Field Shelter"
          unlock="8k"
          :ingredients="['Silicone', 'Graphene']"
          :machines="['Reward', 'Tier Medium']"
        />
        <Item
          icon="Crane"
          name="Auto Arm"
          unlock="1,5k"
          :ingredients="['Aluminum', 'Graphite']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Canister"
          name="Md Res. Can."
          unlock="2k"
          :ingredients="['Plastic', 'Glass']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Canister"
          name="Md Fluid Can."
          unlock="2,5k"
          :ingredients="['Plastic', 'Glass']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Canister"
          name="Md Gas Can."
          unlock="4k"
          :ingredients="['Silicone', 'Glass']"
          :machines="['Reward', 'Mission Log', 'Tier Medium']"
        />
        <Item
          icon="Sensor"
          name="Power Sens."
          unlock="500"
          :ingredients="['Zinc', 'Copper']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Sensor"
          name="Storage Sens."
          unlock="750"
          :ingredients="['Zinc', 'Quartz']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Sensor"
          name="Battery Sens."
          unlock="750"
          :ingredients="['Zinc', 'Graphite']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Sensor"
          name="Button Repeater"
          unlock="300"
          :ingredients="['Zinc']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Sensor"
          name="Proximity Repeater"
          unlock="700"
          :ingredients="['Zinc']"
          :machines="['Reward', 'Tier Medium']"
        />
        <Item
          icon="Sensor"
          name="Delay Repeater"
          unlock="1k"
          :ingredients="['Zinc']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Sensor"
          name="Count Repeater"
          unlock="1k"
          :ingredients="['Zinc']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Power Extenders"
          name="Power Ext."
          unlock="500"
          :ingredients="['Copper']"
          :machines="['Mission Log', 'Tier Medium']"
        />
        <Item
          icon="Splitter"
          name="Power Switch"
          unlock="750"
          :ingredients="['Copper']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Splitter"
          name="Splitter"
          unlock="1k"
          :ingredients="['Copper', 'Graphite']"
          :machines="['Mission Log', 'Tier Medium']"
        />
        <Item
          icon="Generator"
          name="Md Generator"
          unlock="2k"
          :ingredients="['Aluminum', 'Tungsten']"
          :machines="['Mission Log', 'Tier Medium']"
        />
        <Item
          icon="Solar Panel"
          name="Md Solar Panel"
          unlock="2k"
          :ingredients="['Copper', 'Glass']"
          :machines="['Reward', 'Tier Medium']"
        />
        <Item
          icon="Wind Turbine"
          name="Md Wind Turb."
          unlock="2,5k"
          :ingredients="['Aluminum', 'Ceramic']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Battery"
          name="Md Battery"
          unlock="~4k"
          :ingredients="['Lithium', 'Zinc']"
          :machines="['Reward', 'Tier Medium']"
        />
        <Item
          icon="Generator"
          name="RTG"
          unlock="12,5k"
          :ingredients="['Nanocarbon Alloy', 'Lithium']"
          :machines="['Reward', 'Tier Medium']"
        />
        <Item
          icon="Platforms"
          name="Md Plat. A"
          :ingredients="['Resin']"
          :machines="['Reward', 'Tier Medium']"
        />
        <Item
          icon="Platforms"
          name="Md Plat. B"
          unlock="250"
          :ingredients="['Resin', 'Resin']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Platforms"
          name="Md Plat. C"
          unlock="400"
          :ingredients="['Resin']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Platforms"
          name="Tall Plat."
          unlock="750"
          :ingredients="['Ceramic']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Platforms"
          name="Md T-Platform"
          unlock="400"
          :ingredients="['Resin', 'Resin']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Storage"
          name="Md Stor."
          :ingredients="['Resin', 'Resin']"
          :machines="['Reward', 'Tier Medium']"
        />
        <Item
          icon="Storage"
          name="Md Stor. Silo"
          unlock="3k"
          :ingredients="['Titanium', 'Titanium']"
          :machines="['Reward', 'Tier Medium']"
        />
        <Item
          icon="Storage"
          name="Tall Stor."
          unlock="400"
          :ingredients="['Ceramic']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Rover Seat"
          name="Rover Seat"
          :ingredients="['Compound', 'Compound']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Rover"
          name="Tractor"
          unlock="1k"
          :ingredients="['Aluminum', 'Aluminum']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Rover"
          name="Trailer"
          unlock="1,5k"
          :ingredients="['Compound', 'Aluminum']"
          :machines="['Reward', 'Mission Log', 'Tier Medium']"
        />
        <Item
          icon="Horn"
          name="Md Buggy Horn"
          unlock="2k"
          :ingredients="['Plastic', 'Rubber']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Winch"
          name="Winch"
          unlock="~4k"
          :ingredients="['EXO Chip', 'Rubber']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Paver"
          name="Paver"
          unlock="5k"
          :ingredients="['Aluminum Alloy', 'Silicone']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Drill"
          name="Drill Strength 1"
          unlock="2,5k"
          :ingredients="['Tungsten Carbide', 'Ceramic']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Drill"
          name="Drill Strength 2"
          unlock="5k"
          :ingredients="['Titanium Alloy', 'Tungsten Carbide']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Drill"
          name="Drill Strength 3"
          unlock="7,5k"
          :ingredients="['Diamond', 'Titanium Alloy']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Thruster"
          name="Solid-Fuel Thr."
          unlock="500"
          :ingredients="['Aluminum', 'Ammonium']"
          :machines="['Reward', 'Tier Medium']"
        />
        <Item
          icon="Thruster"
          name="Hydrazine Thr."
          unlock="~4k"
          :ingredients="['EXO Chip', 'Steel']"
          :machines="['Reward', 'Mission Log', 'Tier Medium']"
        />
        <Item
          icon="Rail Post"
          name="Rail Post"
          unlock="750"
          :ingredients="['Resin', 'Steel']"
          :machines="['Reward', 'Mission Log', 'Tier Medium']"
        />
        <Item
          icon="Rail Post"
          name="Tall Rail Post"
          unlock="750"
          :ingredients="['Resin', 'Steel']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Rail Post"
          name="Rail Junction"
          unlock="1k"
          :ingredients="['Aluminum', 'Aluminum']"
          :machines="['Reward', 'Mission Log', 'Tier Medium']"
        />
        <Item
          icon="Tier Extra Large"
          name="L Printer"
          :ingredients="['Compound', 'Compound', 'Compound']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Smelting Furnace"
          name="Smelt. Furn."
          unlock="250"
          :ingredients="['Compound', 'Resin', 'Resin']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Soil Centrifuge"
          name="Soil Centr."
          unlock="750"
          :ingredients="['Compound', 'Compound', 'Aluminum']"
          :machines="['Reward', 'Mission Log', 'Tier Large']"
        />
        <Item
          icon="Chemistry Lab"
          name="Chem. Lab"
          unlock="1,6k"
          :ingredients="['Ceramic', 'Glass', 'Tungsten']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Atmospheric Condenser"
          name="Atmos. Cond."
          unlock="2,2k"
          :ingredients="['Plastic', 'Glass', 'Iron']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Research"
          name="Research Chamber"
          :ingredients="['Compound', 'Compound', 'Resin']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Trade Platform"
          name="EXO Request Plat."
          :ingredients="['Resin', 'Resin', 'Ceramic']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Trade Platform"
          name="Trade Plat."
          unlock="2,5k"
          :ingredients="['Iron', 'Tungsten', 'EXO Chip']"
          :machines="['Reward', 'Mission Log', 'Tier Large']"
        />
        <Item
          icon="Shredder"
          name="L Shredder"
          unlock="2,5k"
          :ingredients="['Tungsten Carbide', 'Iron', 'EXO Chip']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Solar Panel"
          name="L Solar Panel"
          unlock="4k"
          :ingredients="['Aluminum Alloy', 'Glass', 'Copper']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Wind Turbine"
          name="L Wind Turb."
          unlock="3,5k"
          :ingredients="['Aluminum Alloy', 'Glass', 'Ceramic']"
          :machines="['Reward', 'Tier Large']"
        />
        <Item
          icon="Platforms"
          name="L Plat. A"
          :ingredients="['Resin', 'Resin']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Platforms"
          name="L Plat. B"
          unlock="500"
          :ingredients="['Resin', 'Resin', 'Resin']"
          :machines="['Reward', 'Mission Log', 'Tier Large']"
        />
        <Item
          icon="Platforms"
          name="L Plat. C"
          unlock="1k"
          :ingredients="['Resin', 'Ceramic', 'Iron']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Platforms"
          name="L T-Platform"
          unlock="1k"
          :ingredients="['Aluminum', 'Aluminum', 'Resin']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Platforms"
          name="L Curved Plat."
          unlock="1k"
          :ingredients="['Compound', 'Ceramic', 'Ceramic']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Platforms"
          name="L Extended Plat."
          unlock="500"
          :ingredients="['Resin', 'Resin']"
          :machines="['Reward', 'Mission Log', 'Tier Large']"
        />
        <Item
          icon="Canister"
          name="L Res. Can."
          unlock="5k"
          :ingredients="['Glass', 'Titanium', 'Nanocarbon Alloy']"
          :machines="['Reward', 'Tier Large']"
        />
        <Item
          icon="Storage"
          name="L Stor."
          unlock="2k"
          :ingredients="['Ceramic', 'Ceramic', 'Ceramic']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Storage"
          name="L Stor. Silo A"
          unlock="5k"
          :ingredients="['Aluminum', 'Aluminum', 'Steel']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Storage"
          name="L Stor. Silo B"
          unlock="7,5k"
          :ingredients="['Steel', 'Steel', 'Steel']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Storage"
          name="L Active Stor."
          unlock="2k"
          :ingredients="['Zinc', 'Aluminum', 'Resin']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Rover"
          name="Buggy"
          unlock="1,5k"
          :ingredients="['Compound', 'Aluminum']"
          :machines="['Reward', 'Mission Log', 'Tier Large']"
        />
        <Item
          icon="Rover Seat"
          name="L Rover Seat"
          unlock="2k"
          :ingredients="['Plastic', 'Plastic', 'Compound']"
          :machines="['Reward', 'Tier Large']"
        />
        <Item
          icon="Rover"
          name="Md Rover"
          unlock="~4k"
          :ingredients="['Plastic', 'Plastic', 'Rubber']"
          :machines="['Tier Large']"
        />
        <Item
          icon="VTOL"
          name="VTOL"
          unlock="Mission"
          :ingredients="['Tungsten Carbide', 'Silicone', 'EXO Chip']"
          :machines="['Reward', 'Mission Log', 'Tier Large']"
        />
        <Item
          icon="Crane"
          name="Crane"
          unlock="4,5k"
          :ingredients="['Steel', 'Silicone', 'Titanium']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Horn"
          name="L Fog Horn"
          unlock="4k"
          :ingredients="['Plastic', 'Rubber', 'Steel']"
          :machines="['Tier Large']"
        />
        <Item icon="Horn" name="L Starship Horn" :machines="['Tier Large']" />
        <Item
          icon="Rail Engine"
          name="Rail Engine"
          unlock="1k"
          :ingredients="['Resin', 'Aluminum', 'Copper']"
          :machines="['Reward', 'Mission Log', 'Tier Large']"
        />
        <Item icon="Rail Engine" name="C.O.L.E." :machines="['Reward']" />
        <Item
          icon="Rail Engine"
          name="Rail Car"
          unlock="1,5k"
          :ingredients="['Resin', 'Resin', 'Aluminum']"
          :machines="['Reward', 'Mission Log', 'Tier Large']"
        />
        <Item
          icon="Recreational Sphere"
          name="Recr. Sphere"
          unlock="4,5k"
          :ingredients="['Aluminum Alloy', 'Rubber']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Shelter"
          name="Shelter"
          :ingredients="['Plastic', 'Plastic', 'Silicone', 'Silicone']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Auto Extractor"
          name="Auto Extr."
          unlock="7,5k"
          :ingredients="['Tungsten Carbide', 'Rubber', 'Steel', 'EXO Chip']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Shredder"
          name="XL Shredder"
          unlock="5k"
          :ingredients="['Tungsten Carbide', 'Steel', 'EXO Chip', 'EXO Chip']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Solar Panel"
          name="Solar Array"
          unlock="6k"
          :ingredients="['Copper', 'Glass', 'Graphene', 'Aluminum Alloy']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Wind Turbine"
          name="XL Wind T."
          unlock="4,5k"
          :ingredients="['Iron', 'Ceramic', 'Graphene', 'Aluminum Alloy']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Sensor"
          name="Md S. Arch"
          unlock="500"
          :ingredients="['Zinc', 'Quartz']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Sensor"
          name="XL S. Arch"
          unlock="1k"
          :ingredients="['Zinc', 'Zinc', 'Quartz', 'Quartz']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Sensor"
          name="XL Canopy"
          unlock="1k"
          :ingredients="['Zinc', 'Zinc', 'Quartz', 'Quartz']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Sensor"
          name="L Sens. Ring"
          unlock="500"
          :ingredients="['Zinc', 'Quartz']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Sensor"
          name="L Hoop A"
          unlock="750"
          :ingredients="['Zinc', 'Quartz', 'Quartz']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Sensor"
          name="L Hoop B"
          unlock="750"
          :ingredients="['Zinc', 'Zinc', 'Quartz']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Sensor"
          name="XL Hoop A"
          unlock="750"
          :ingredients="['Zinc', 'Zinc', 'Quartz', 'Quartz']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Sensor"
          name="XL Hoop B"
          unlock="1k"
          :ingredients="['Zinc', 'Zinc', 'Zinc', 'Quartz']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Platforms"
          name="XL Plat. A"
          unlock="2k"
          :ingredients="['Iron', 'Iron', 'Ceramic', 'Ceramic']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Platforms"
          name="XL Plat. B"
          unlock="3k"
          :ingredients="['Iron', 'Iron', 'Iron', 'Iron']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Platforms"
          name="XL Plat. C"
          unlock="2k"
          :ingredients="['Resin', 'Resin', 'Resin', 'Iron']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Platforms"
          name="XL C. Plat."
          unlock="2k"
          :ingredients="['Ceramic', 'Ceramic', 'Compound', 'Compound']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Platforms"
          name="XL Ext. Plat."
          unlock="750"
          :ingredients="['Resin', 'Resin', 'Resin']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Platforms"
          name="Fig. Plat."
          unlock="3k"
          :ingredients="['Iron', 'Iron', 'Iron', 'Iron']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Storage"
          name="XL Stor."
          unlock="2k"
          :ingredients="['Iron', 'Iron', 'Ceramic', 'Ceramic']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Rover"
          name="L Rover"
          unlock="5k"
          :ingredients="['Aluminum Alloy', 'Rubber', 'EXO Chip', 'EXO Chip']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Landing Pad"
          name="Landing Pad"
          unlock="750"
          :ingredients="['Aluminum', 'Ceramic', 'Ceramic']"
          :machines="['Reward', 'Tier Extra Large']"
        />
        <Item
          icon="Shuttle"
          name="Sm Shuttle"
          unlock="1,5k"
          :ingredients="['Aluminum', 'Aluminum']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Shuttle"
          name="Md Shuttle"
          unlock="~4k"
          :ingredients="['Aluminum Alloy', 'Ceramic', 'Ceramic']"
          :machines="['Mission Log', 'Tier Extra Large']"
        />
        <Item
          icon="Shuttle"
          name="L Shuttle"
          unlock="5k"
          :ingredients="['Titanium Alloy', 'Ceramic', 'EXO Chip', 'EXO Chip']"
          :machines="['Reward', 'Mission Log', 'Tier Extra Large']"
        />
        <Item
          icon="Rail Station"
          name="Rail Station"
          unlock="2,5k"
          :ingredients="['Titanium', 'Titanium', 'Copper', 'Quartz']"
          :machines="['Reward', 'Mission Log', 'Tier Extra Large']"
        />
        <Item
          icon="Fault Finder"
          name="Fault Finder"
          :ingredients="['Astronium', 'Scrap']"
          :machines="['Reward', 'Mission Log', 'Tier Medium']"
        />
      </Process>
    </Box>
  </Page>
</template>

<style>
  :root {
    font-family: sans-serif;
    font-size: 14px;
  }
  /*
  * {
    outline: 1px solid red;
  }
  svg * {
    outline: none;
  }
  */
  body {
    margin: 0;
    display: flex;
    place-items: center;
  }

  #app {
    margin: 0 auto;
  }
</style>
