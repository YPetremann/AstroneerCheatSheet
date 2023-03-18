<script lang="ts" setup>
  import { provide } from "vue";
  import Process from "../components/Process.vue";
  import Arrow from "../components/Arrow.vue";
  import ArrowGroup from "../components/ArrowGroup.vue";
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
        <Resource name="Clay" />
        <Resource name="Malachite" />
        <Resource name="Laterite" />
        <Resource name="Quartz" />
        <Resource name="Lithium" />
        <Resource name="Resin" />
        <Resource name="Organic" />
        <Resource name="Compound" />
        <Resource name="Wolframite" />
        <Resource name="Hematite" />
        <Resource name="Sphalerite" />
        <Resource name="Titanite" />
        <Resource name="Graphite" />
        <Resource name="Astronium" />
        <Resource name="Ammonium" />
      </Process>
    </Box>
    <Box>
      <Process name="Smelting Furnace">
        <Resource name="Ceramic" />
        <Resource name="Copper" />
        <Resource name="Aluminum" />
        <Resource name="Glass" />
        <Box type="recipe" />
        <Box type="recipe" />
        <Resource name="Carbon" />
        <Box type="recipe" />
        <Resource name="Tungsten" />
        <Resource name="Iron" />
        <Resource name="Zinc" />
        <Resource name="Titanium" />
      </Process>
      <div style="height: 30px"></div>
      <Process>
        <Resource name="EXO Chip" />
        <Resource name="Scrap" />
      </Process>
    </Box>
    <Box>
      <Box type="process">
        <Planet name="Sylva" />
        <Planet name="Desolo" />
        <Planet name="Calidor" />
      </Box>
      <Process name="Chemistry Lab">
        <Resource name="Aluminum Alloy" />
        <Resource name="Silicone" />
        <Resource name="Rubber" />
        <Resource name="Explosive Powder" />
        <Resource name="Plastic" />
        <Resource name="Tungsten Carbide" />
        <Resource name="Steel" />
        <Resource name="Nanocarbon Alloy" />
        <Resource name="Titanium Alloy" />
        <Resource name="Graphene" />
        <Resource name="Diamond" />
        <Resource name="Hydrazine" />
      </Process>
    </Box>
    <Box>
      <Box type="process">
        <Planet name="Vesania" />
        <Planet name="Novus" />
        <Planet name="Glacio" />
        <Planet name="Atrox" />
      </Box>
      <Process name="Atmospheric Condenser">
        <Resource name="Methane" />
        <Box type="recipe" />
        <Resource name="Sulfur" />
        <Box type="recipe" />
        <Box type="recipe" />
        <Resource name="Argon" />
        <Resource name="Helium" />
        <Resource name="Nitrogen" />
        <Box type="recipe" />
        <Box type="recipe" />
        <Resource name="Hydrogen" />
      </Process>
    </Box>
    <Box type="divider">
      <Box type="process" filled compact>
        <Item
          icon="Tier Medium"
          name="Small Printer"
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
          name="Small Canister"
          :ingredients="['Resin']"
          :machines="['Reward', 'Backpack']"
        />
        <Item
          name="Beacon"
          :ingredients="['Quartz']"
          :machines="['Reward', 'Backpack']"
        />
        <Item
          name="Worklight"
          :ingredients="['Copper']"
          :machines="['Reward', 'Backpack']"
        />
        <Item
          icon="Generator"
          name="Small Generator"
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
          name="Oxygen Tank"
          unlock="2k"
          :ingredients="['Glass']"
          :machines="['Backpack']"
        />
        <Item
          icon="Oxygenator"
          name="Portable Oxygenator"
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
          name="Small Solar Panel"
          unlock="300"
          :ingredients="['Copper']"
          :machines="['Backpack']"
        />
        <Item
          icon="Wind Turbine"
          name="Small Wind Turbine"
          unlock="300"
          :ingredients="['Ceramic']"
          :machines="['Backpack']"
        />
        <Item
          icon="Battery"
          name="Small Battery"
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
          unlock="3.75k"
          :ingredients="['Diamond']"
          :machines="['Reward', 'Backpack']"
        />
        <Item
          icon="Small Camera"
          name="Small Camera"
          unlock="2,5k"
          :ingredients="['EXO Chip']"
          :machines="['Reward', 'Backpack']"
        />
        <Item
          icon="Horn"
          name="Small Trumpet Horn"
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
          icon="Dynamite"
          name="Dynamite"
          unlock="3.75k"
          :ingredients="['Explosive Powder']"
          :machines="['Backpack']"
        />
        <Item
          icon="Fireworks"
          name="Fireworks"
          unlock="3.75k"
          :ingredients="['Explosive Powder']"
          :machines="['Reward', 'Backpack']"
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
        <Item icon="Generator" name="QT-RTG" :machines="['Reward']" />
        <Item
          icon="Hoverboard"
          name="Hoverboard"
          :ingredients="['EXO Chip']"
          :machines="['Reward', 'Mission Log', 'Backpack']"
        />
        <Item
          icon="Tier Large"
          name="Medium Printer"
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
          name="Medium Shredder"
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
          name="Medium Resource Canister"
          unlock="2k"
          :ingredients="['Plastic', 'Glass']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Canister"
          name="Medium Fluid & Soil Canister"
          unlock="2,5k"
          :ingredients="['Plastic', 'Glass']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Canister"
          name="Medium Gas Canister"
          unlock="4k"
          :ingredients="['Silicone', 'Glass']"
          :machines="['Reward', 'Mission Log', 'Tier Medium']"
        />
        <Item
          icon="Sensor"
          name="Power Sensor"
          unlock="500"
          :ingredients="['Zinc', 'Copper']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Sensor"
          name="Storage Sensor"
          unlock="750"
          :ingredients="['Zinc', 'Quartz']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Sensor"
          name="Battery Sensor"
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
          name="Power Extender"
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
          name="Medium Generator"
          unlock="2k"
          :ingredients="['Aluminum', 'Tungsten']"
          :machines="['Mission Log', 'Tier Medium']"
        />
        <Item
          icon="Solar Panel"
          name="Medium Solar Panel"
          unlock="2k"
          :ingredients="['Copper', 'Glass']"
          :machines="['Reward', 'Tier Medium']"
        />
        <Item
          icon="Wind Turbine"
          name="Medium Wind Turbine"
          unlock="2,5k"
          :ingredients="['Aluminum', 'Ceramic']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Battery"
          name="Medium Battery"
          unlock="3.75k"
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
          name="Medium Platform A"
          :ingredients="['Resin']"
          :machines="['Reward', 'Tier Medium']"
        />
        <Item
          icon="Platforms"
          name="Medium Platform B"
          unlock="250"
          :ingredients="['Resin', 'Resin']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Platforms"
          name="Medium Platform C"
          unlock="400"
          :ingredients="['Resin']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Platforms"
          name="Tall Platform"
          unlock="750"
          :ingredients="['Ceramic']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Platforms"
          name="Medium T-Platform"
          unlock="400"
          :ingredients="['Resin', 'Resin']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Storage"
          name="Medium Storage"
          :ingredients="['Resin', 'Resin']"
          :machines="['Reward', 'Tier Medium']"
        />
        <Item
          icon="Storage"
          name="Medium Storage Silo"
          unlock="3k"
          :ingredients="['Titanium', 'Titanium']"
          :machines="['Reward', 'Tier Medium']"
        />
        <Item
          icon="Storage"
          name="Tall Storage"
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
          name="Medium Buggy Horn"
          unlock="2k"
          :ingredients="['Plastic', 'Rubber']"
          :machines="['Tier Medium']"
        />
        <Item
          icon="Winch"
          name="Winch"
          unlock="3.75k"
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
          name="Solid-Fuel Thruster"
          unlock="500"
          :ingredients="['Aluminum', 'Ammonium']"
          :machines="['Reward', 'Tier Medium']"
        />
        <Item
          icon="Thruster"
          name="Hydrazine Thruster"
          unlock="3.75k"
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
          name="Large Printer"
          :ingredients="['Compound', 'Compound', 'Compound']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Smelting Furnace"
          name="Smelting Furnace"
          unlock="250"
          :ingredients="['Compound', 'Resin', 'Resin']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Soil Centrifuge"
          name="Soil Centrifuge"
          unlock="750"
          :ingredients="['Compound', 'Compound', 'Aluminum']"
          :machines="['Reward', 'Mission Log', 'Tier Large']"
        />
        <Item
          icon="Chemistry Lab"
          name="Chemistry Lab"
          unlock="1,6k"
          :ingredients="['Ceramic', 'Glass', 'Tungsten']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Atmospheric Condenser"
          name="Atmospheric Condenser"
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
          name="EXO Request Platform"
          :ingredients="['Resin', 'Resin', 'Ceramic']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Trade Platform"
          name="Trade Platform"
          unlock="2,5k"
          :ingredients="['Iron', 'Tungsten', 'EXO Chip']"
          :machines="['Reward', 'Mission Log', 'Tier Large']"
        />
        <Item
          icon="Shredder"
          name="Large Shredder"
          unlock="2,5k"
          :ingredients="['Tungsten Carbide', 'Iron', 'EXO Chip']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Solar Panel"
          name="Large Solar Panel"
          unlock="4k"
          :ingredients="['Aluminum Alloy', 'Glass', 'Copper']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Wind Turbine"
          name="Large Wind Turbine"
          unlock="3,5k"
          :ingredients="['Aluminum Alloy', 'Glass', 'Ceramic']"
          :machines="['Reward', 'Tier Large']"
        />
        <Item
          icon="Platforms"
          name="Large Platform A"
          :ingredients="['Resin', 'Resin']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Platforms"
          name="Large Platform B"
          unlock="500"
          :ingredients="['Resin', 'Resin', 'Resin']"
          :machines="['Reward', 'Mission Log', 'Tier Large']"
        />
        <Item
          icon="Platforms"
          name="Large Platform C"
          unlock="1k"
          :ingredients="['Resin', 'Ceramic', 'Iron']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Platforms"
          name="Large T-Platform"
          unlock="1k"
          :ingredients="['Aluminum', 'Aluminum', 'Resin']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Platforms"
          name="Large Curved Platform"
          unlock="1k"
          :ingredients="['Compound', 'Ceramic', 'Ceramic']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Platforms"
          name="Large Extended Platform"
          unlock="500"
          :ingredients="['Resin', 'Resin']"
          :machines="['Reward', 'Mission Log', 'Tier Large']"
        />
        <Item
          icon="Canister"
          name="Large Resource Canister"
          unlock="5k"
          :ingredients="['Glass', 'Titanium', 'Nanocarbon Alloy']"
          :machines="['Reward', 'Tier Large']"
        />
        <Item
          icon="Storage"
          name="Large Storage"
          unlock="2k"
          :ingredients="['Ceramic', 'Ceramic', 'Ceramic']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Storage"
          name="Large Storage Silo A"
          unlock="5k"
          :ingredients="['Aluminum', 'Aluminum', 'Steel']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Storage"
          name="Large Storage Silo B"
          unlock="7,5k"
          :ingredients="['Steel', 'Steel', 'Steel']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Storage"
          name="Large Active Storage"
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
          name="Large Rover Seat"
          unlock="2k"
          :ingredients="['Plastic', 'Plastic', 'Compound']"
          :machines="['Reward', 'Tier Large']"
        />
        <Item
          icon="Rover"
          name="Medium Rover"
          unlock="3.75k"
          :ingredients="['Plastic', 'Plastic', 'Rubber']"
          :machines="['Tier Large']"
        />
        <Item
          icon="VTOL"
          name="VTOL"
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
          name="Large Fog Horn"
          unlock="4k"
          :ingredients="['Plastic', 'Rubber', 'Steel']"
          :machines="['Tier Large']"
        />
        <Item
          icon="Horn"
          name="Large Starship Horn"
          :machines="['Tier Large']"
        />
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
          name="Recreational Sphere"
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
          name="Auto Extractor"
          unlock="7,5k"
          :ingredients="['Tungsten Carbide', 'Rubber', 'Steel', 'EXO Chip']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Shredder"
          name="Extra Large Shredder"
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
          name="Extra Large Wind T."
          unlock="4,5k"
          :ingredients="['Iron', 'Ceramic', 'Graphene', 'Aluminum Alloy']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Sensor"
          name="Medium Sensor Arch"
          unlock="500"
          :ingredients="['Zinc', 'Quartz']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Sensor"
          name="Extra Large Sensor Arch"
          unlock="1k"
          :ingredients="['Zinc', 'Zinc', 'Quartz', 'Quartz']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Sensor"
          name="Extra Large Canopy"
          unlock="1k"
          :ingredients="['Zinc', 'Zinc', 'Quartz', 'Quartz']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Sensor"
          name="Large Sensor Ring"
          unlock="500"
          :ingredients="['Zinc', 'Quartz']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Sensor"
          name="Large Hoop A"
          unlock="750"
          :ingredients="['Zinc', 'Quartz', 'Quartz']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Sensor"
          name="Large Hoop B"
          unlock="750"
          :ingredients="['Zinc', 'Zinc', 'Quartz']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Sensor"
          name="Extra Large Hoop A"
          unlock="750"
          :ingredients="['Zinc', 'Zinc', 'Quartz', 'Quartz']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Sensor"
          name="Extra Large Hoop B"
          unlock="1k"
          :ingredients="['Zinc', 'Zinc', 'Zinc', 'Quartz']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Platforms"
          name="Extra Large Platform A"
          unlock="2k"
          :ingredients="['Iron', 'Iron', 'Ceramic', 'Ceramic']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Platforms"
          name="Extra Large Platform B"
          unlock="3k"
          :ingredients="['Iron', 'Iron', 'Iron', 'Iron']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Platforms"
          name="Extra Large Platform C"
          unlock="2k"
          :ingredients="['Resin', 'Resin', 'Resin', 'Iron']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Platforms"
          name="Extra Large Curved Platform"
          unlock="2k"
          :ingredients="['Ceramic', 'Ceramic', 'Compound', 'Compound']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Platforms"
          name="Extra Large Extended Platform"
          unlock="750"
          :ingredients="['Resin', 'Resin', 'Resin']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Platforms"
          name="Figure Platform"
          unlock="3k"
          :ingredients="['Iron', 'Iron', 'Iron', 'Iron']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Storage"
          name="Extra Large Storage"
          unlock="2k"
          :ingredients="['Iron', 'Iron', 'Ceramic', 'Ceramic']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Rover"
          name="Large Rover"
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
          name="Small Shuttle"
          unlock="1,5k"
          :ingredients="['Aluminum', 'Aluminum']"
          :machines="['Tier Extra Large']"
        />
        <Item
          icon="Shuttle"
          name="Medium Shuttle"
          unlock="3.75k"
          :ingredients="['Aluminum Alloy', 'Ceramic', 'Ceramic']"
          :machines="['Mission Log', 'Tier Extra Large']"
        />
        <Item
          icon="Shuttle"
          name="Large Shuttle"
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
      </Box>
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
