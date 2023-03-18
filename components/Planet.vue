<script lang="ts" setup>
  import Box from "./Box.vue";
  import Icon from "./Icon.vue";
  const props = defineProps<{
    name: string;
    gateway: string;
    solar: string;
    wind: string;
    minerals: string[];
    gases: string[];
  }>();
  function removeDash(name: string) {
    return name.startsWith("-") ? name.slice(1) : name;
  }
</script>

<template>
  <Box type="recipe" class="Planet">
    <Icon :name="name" class="Planet__Icon" />
    <div class="Planet__Name">
      <Icon :name="`Gateway_${name}`" class="Planet__Gateway" />{{ name }}
    </div>
    <div v-if="minerals" class="Planet__Minerals">
      <template v-for="(name, i) in minerals" :key="i">
        <Icon
          :name="removeDash(name)"
          size="20px"
          :class="{ mineral: true, 'mineral--secondary': name.startsWith('-') }"
        />
      </template>
    </div>
    <div class="Planet__Properties">
      <Icon :name="gateway" size="20px" />
      <div :class="`energy energy--solar-${solar}  energy--wind-${wind}`">
        <Icon name="Solar Panel" size="20px" class="energy energy__solar" />
        <Icon name="Wind Turbine" size="20px" class="energy energy__wind" />
      </div>
    </div>
    <div class="Planet__Gases">
      <template v-for="(name, i) in gases" :key="i">
        <Icon
          :name="removeDash(name)"
          size="20px"
          :class="{ mineral: true, 'mineral--secondary': name.startsWith('-') }"
        />
      </template>
    </div>
  </Box>
</template>

<style lang="scss">
  .energy {
    display: flex;
    border-radius: 5px;
    border: 2px solid transparent;

    &--solar-worst &__solar,
    &--wind-worst &__wind {
      opacity: 10%;
    }
    &--solar-bad &__solar,
    &--wind-bad &__wind {
      opacity: 50%;
    }
    &--solar-good &__solar,
    &--wind-good &__wind {
      border: 2px solid #099bf077;
    }
    &--solar-great &__solar,
    &--wind-great &__wind {
      border: 2px solid #099bf0;
    }
    &--solar-good.energy--wind-good &__solar {
      border-right-width: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      padding-left: 2px;
    }
    &--solar-good.energy--wind-good &__wind {
      border-left-width: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      padding-left: 2px;
    }
  }
  .Planet {
    display: grid;
    grid-template:
      "icon name minerals" 20px
      "icon properties gases" 20px
      / min-content auto auto;
    gap: var(--separator);
    align-items: center;

    &__Icon {
      grid-area: icon;
      height: 100%;
      align-self: center;
    }
    &__Name {
      grid-area: name;
      display: flex;
      align-items: center;
    }
    &__Gateway {
      width: 20px;
      height: 20px;
    }
    &__Properties {
      grid-area: properties;
      display: flex;
      align-self: center;
      align-items: center;
    }
    &__Minerals {
      grid-area: minerals;
      justify-self: end;
      display: flex;
    }
    &__Gases {
      grid-area: gases;
      justify-self: end;
      display: flex;
    }
    &__Scrap {
      display: flex;
      align-items: flex-end;
    }
  }
</style>
