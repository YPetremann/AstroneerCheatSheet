<script lang="ts" setup>
  const all_planets = usePlanets();
  const props = defineProps<{ name: string }>();
  const {
    scrap = undefined,
    machines = [],
    planets,
    ingredients = [],
  } = useResource(props.name);
</script>

<template>
  <Box type="recipe">
    <Icon :name="name" size="big" class="Box__icon" />
    <div class="Box__top">
      <div class="Box__text">{{ name }}</div>
      <hr class="Box__filler" />
      <Icon v-if="scrap" name="Scrap" size="small" :pre="scrap" />
      <Icon
        v-for="(name, i) in machines"
        :key="name"
        :name="name"
        size="small"
      />
    </div>
    <div class="Box__bottom">
      <template v-if="planets">
        <Icon
          v-for="name in all_planets"
          :key="name"
          :name="name"
          size="small"
          :class="{
            planet: true,
            'planet--secondary': planets?.includes(`-${name}`),
            'planet--primary': planets?.includes(name),
          }"
        />
      </template>
      <hr class="Box__filler" />
      <Icon
        v-for="(name, i) in ingredients"
        :key="name"
        :name="name"
        size="small"
      />
    </div>
  </Box>
</template>

<style lang="scss">
  .planet {
    opacity: 5%;
    &--secondary {
      opacity: 50%;
    }
    &--primary {
      opacity: 100%;
    }
  }
</style>
