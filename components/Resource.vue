<script lang="ts" setup>
  import Icon from "./Icon.vue";
  import planets from "../data/planets";
  import Box from "./Box.vue";
  const props = defineProps<{
    name: string;
    scrap?: string;
    planets?: string[];
    machines?: string[];
  }>();
</script>

<template>
  <Box type="recipe" class="Mineral">
    <Icon :name="name" size="medium" class="Mineral__Icon" />
    <div class="Mineral__Name">{{ name }}</div>
    <div class="Mineral__Machines">
      <div v-if="scrap" class="Mineral__Scrap">
        {{ scrap }}<Icon name="Scrap" size="small" />
      </div>
      <template v-if="machines" v-for="(name, i) in machines" :key="i">
        <Icon :name="name" size="small" />
      </template>
    </div>
    <div v-if="planets" class="Mineral__Planets">
      <template v-for="(name, i) in planets" :key="i">
        <Icon
          :name="name"
          size="small"
          :class="{
            planet: true,
            'planet--secondary': props.planets?.includes(`-${name}`),
            'planet--primary': props.planets?.includes(name),
          }"
        />
      </template>
    </div>
  </Box>
</template>

<style lang="scss">
  .Mineral {
    display: grid;
    grid-template:
      "icon name machines" 20px
      "icon planets planets" 20px
      / min-content auto auto;
    gap: var(--separator);
    align-items: center;
    background: #fff;
    border-radius: 13px;

    &__Icon {
      grid-area: icon;
      height: 100%;
      height: 100%;
      align-self: center;
    }
    &__Name {
      grid-area: name;
    }
    &__Machines {
      color: silver;
      justify-self: end;
      display: flex;
      align-items: flex-end;
      grid-area: machines;
    }
    &__Scrap {
      display: flex;
      align-items: flex-end;
    }
    &__Planets {
      grid-area: planets;
      display: flex;
      align-self: start;
      justify-self: end;

      gap: 3px;
    }
  }
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
