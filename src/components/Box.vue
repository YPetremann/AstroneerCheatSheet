<script lang="ts" setup>
  defineProps<{
    type?: string;
  }>();
</script>
<template>
  <div :class="{ Box: true, [`Box--${type}`]: !!type }">
    <slot />
  </div>
</template>

<style lang="scss">
  .Box--recipe {
    --separator: 5px;
    --height: calc(40px + var(--separator));
    padding: var(--separator);
    min-height: var(--height);
  }
  .Box--process {
    display: flex;
    flex-direction: column;
    --separator: 10px;
    padding-left: var(--separator);
    padding-right: var(--separator);
    padding-bottom: var(--separator);
    gap: var(--separator);
  }
  .Box--divider {
    display: flex;
    flex-direction: column;
    --separator: 10px;
    gap: var(--separator);
  }
</style>
