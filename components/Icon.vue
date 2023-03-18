<script lang="ts" setup>
  import { icon } from "../data/icons";
  const props = defineProps<{
    name: string;
    size?: string;
  }>();
  let src = icon(props.name);
  const visible = inject("visible");
</script>

<template>
  <img
    @mouseover="visible = [props.name]"
    @mouseleave="visible = ['all']"
    :class="`Icon Icon--size-${size}`"
    :src="src"
    :title="props.name"
    :alt="props.name"
    v-bind="$attrs"
  />
</template>

<style lang="scss">
  .Icon {
    &--dim {
      opacity: 10%;
    }
    &--size-small {
      width: 20px;
      height: 20px;
    }
    &--size-medium {
      width: 45px;
      height: 45px;
    }
    &--size-big {
      width: 45px;
      height: 45px;
    }
  }
</style>
