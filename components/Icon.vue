<script lang="ts" setup>
  import { icon } from "../data/icons";
  const props = defineProps<{
    name?: string;
    size?: string;
  }>();
  let src = icon(props.name, props.size);
</script>

<template>
  <img
    :src="src"
    :title="`${props.name}`"
    :alt="`${props.name}`"
    v-bind="$attrs"
  />
</template>
