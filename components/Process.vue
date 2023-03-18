<script lang="ts" setup>
  import Box from "./Box.vue";
  import Icon from "./Icon.vue";
  const props = defineProps<{
    name?: string;
    icon?: string;
    compact?: boolean;
  }>();
  const icon = props.icon ?? props.name;
</script>

<template>
  <Box type="process" :class="{ Process: true, 'Process--compact': compact }">
    <header v-if="name || icon" class="Process__Title">
      <Icon :name="icon" class="Process__Icon" />
      {{ name }}
    </header>
    <slot />
  </Box>
</template>

<style lang="scss">
  .Process {
    min-width: 220px;
    padding-top: var(--separator);
    background: #099bf0;
    border-radius: 13px;
    &--compact {
      box-sizing: border-box;
      border-radius: 0;
      flex-direction: row;
      flex-wrap: wrap;
      margin: -15px;
      height: 1080px;
      gap: 5px;
      align-content: center;
    }
    hr {
      flex-basis: 100%;
      margin: 0;
      border: 1px solid white;
    }
    &__Title {
      flex-basis: 100%;
      display: flex;
      align-items: center;
      color: white;
      font-weight: bolder;
      gap: var(--separator);
    }

    &__Icon {
      width: 35px;
      height: 35px;
      outline: 2px solid #099bf0;
      border-radius: 8px;
    }
  }
</style>
