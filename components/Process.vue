<script lang="ts" setup>
import Box from "./Box.vue";
import Icon from "./Icon.vue";

defineProps<{
  name?: string;
  icon?: string;
  compact?: boolean;
}>();
</script>

<template>
  <Box type="process" filled :compact="compact">
    <header v-if="icon || name" class="Process__title">
      <Icon :name="icon ?? name ?? ''" size="big" class="Process__icon" />
      {{ name }}
    </header>
    <slot />
  </Box>
</template>

<style lang="scss">
  .Process {
    &__title {
      flex-basis: 100%;
      display: flex;
      align-items: center;
      color: white;
      font-weight: bolder;
      gap: 10px;
    }

    &__icon {
      border-radius: 100px;
      overflow: hidden;
    }
  }
</style>
