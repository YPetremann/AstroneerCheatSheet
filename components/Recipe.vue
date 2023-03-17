<script lang="ts" setup>
  import Icon from "./Icon.vue";
  import planets from "../data/planets";
  import Box from "./Box.vue";
  const props = defineProps<{
    name: string;
    scrap?: string;
    ingredients?: string[];
    machines?: string[];
  }>();
</script>

<template>
  <Box type="recipe" class="Recipe">
    <Icon :name="name" class="Recipe__Icon" />
    <div class="Recipe__Name">{{ name }}</div>
    <div class="Recipe__Machines">
      <div v-if="scrap" class="Recipe__Scrap">
        {{ scrap }}<Icon name="Scrap" size="20px" />
      </div>
      <template v-if="machines" v-for="(name, i) in machines" :key="i">
        <Icon :name="name" size="20px" />
      </template>
    </div>
    <div class="Recipe__Planets">
      <template v-for="(name, i) in ingredients" :key="i">
        <Icon :name="name" size="20px" />
      </template>
    </div>
  </Box>
</template>

<style lang="scss">
  .Recipe {
    display: grid;
    grid-template:
      "icon name machines" 20px
      "icon planets planets" 20px
      / min-content auto auto;
    gap: var(--separator);
    align-items: center;
    background: #fff;
    outline: 10px solid #099bf0;
    border-radius: 13px;

    &__Icon {
      grid-area: icon;
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
      align-items: end;
      grid-area: machines;
    }
    &__Scrap {
      display: flex;
      align-items: end;
    }
    &__Planets {
      grid-area: planets;
      display: flex;
      align-self: self-start;
      justify-self: end;
      gap: 4px;
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
