<script lang="ts" setup>
import Box from "./Box.vue";
import Icon from "./Icon.vue";

const planets = usePlanets();
const props = defineProps<{
  name: string;
  scrap?: string;
  ingredients?: string[];
  machines?: string[];
}>();
</script>

<template>
  <Box type="recipe">
    <Icon :name="name" size="big" class="Box__icon" />
    <div class="Box__top">
      <div class="Box__text">{{ name }}</div>
      <hr class="Box__filler" />
      <Icon v-if="scrap" name="Scrap" size="small" :pre="scrap" />
      <Icon v-for="(name, i) in machines" :key="i" :name="name" size="small" />
    </div>
    <div class="Box__bottom">
      <hr class="Box__filler" />
      <Icon
        v-for="(name, i) in ingredients"
        :key="i"
        :name="name"
        size="small"
      />
    </div>
  </Box>
</template>
