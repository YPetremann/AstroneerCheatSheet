<script setup lang="ts">
  const props = defineProps<{
    solar: string;
    wind: string;
  }>();
  const bem = useBem("Energy");
</script>

<template>
  <div :class="bem(props)">
    <Icon name="Solar Panel" size="small" :class="bem('solar')" />
    <Icon name="Wind Turbine" size="small" :class="bem('wind')" />
  </div>
</template>

<style lang="scss">
  .Energy {
    display: flex;
    &__solar,
    &__wind {
      border-radius: 5px;
      & img {
        mix-blend-mode: darken;
      }
    }
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
      background: #099bf044;
    }
    &--solar-great &__solar,
    &--wind-great &__wind {
      background: #099bf099;
    }
    &--solar-good.energy--wind-good &__solar {
      border-right-width: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &--solar-good.energy--wind-good &__wind {
      border-left-width: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
</style>
