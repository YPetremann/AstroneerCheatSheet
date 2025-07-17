<script lang="ts" setup>
import { usePlanet } from "../composables/planets";
import Box from "./Box.vue";
import Energy from "./Energy.vue";
import Icon from "./Icon.vue";

const props = defineProps<{ name: string }>();
const planet = usePlanet(props.name);
const removeDash = (v: string) => (v.startsWith("-") ? v.slice(1) : v);
</script>

<template>
  <Box type="recipe">
    <Icon class="Box__icon" size="big" :name="name" />
    <div class="Box__top">
      <span class="Box__text">{{ name }}</span>
      <hr class="Box__filler" />

      <Icon name="Power" size="small" :pre="`${planet.gateway.energy}`" />
      <Icon :name="planet.gateway.item" size="small" />
      <Icon :name="`Gateway ${name}`" size="small" />
    </div>
    <div class="Box__bottom">
      <Energy :solar="planet.energy.solar" :wind="planet.energy.wind" />
      <hr class="Box__filler" />
      <Icon
        v-for="(name, i) in planet.gases"
        :key="i"
        :name="removeDash(name)"
        size="small"
        :class="{ mineral: true, 'mineral--secondary': name.startsWith('-') }"
      />
      <Icon
        v-for="(name, i) in planet.minerals"
        :key="name"
        :name="removeDash(name)"
        size="small"
        :class="{ mineral: true, 'mineral--secondary': name.startsWith('-') }"
      />
    </div>
  </Box>
</template>
