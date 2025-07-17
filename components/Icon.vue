<script lang="ts" setup>
import { useIcon } from '../composables/icons';

const props = defineProps<{
  name: string;
  size?: string;
  pre?: string;
  post?: string;
}>();
const { src, color } = useIcon(props.name);
</script>

<template>
  <div :class="`Icon Icon--size-${size}`" :style="`color: ${color}`">
    <div v-if="pre" class="Icon__pre">{{ pre }}</div>
    <img class="Icon__img" :src="src" :title="props.name" :alt="props.name" />
    <div v-if="post" class="Icon__post">{{ post }}</div>
  </div>
</template>

<style lang="scss">
  .Icon {
    display: flex;
    font-weight: 700;
    place-content: center;
    place-items: center;
    &__pre {
      left: 2px;
      position: relative;
    }
    &__post {
      position: relative;
      right: 2px;
    }

    &__img {
      min-width: var(--size);
      height: var(--size);
    }
    &--dim {
      opacity: 10%;
    }
    &--size-small {
      --size: 20px;
    }
    &--size-medium &__img {
      --size: 40px;
    }
    &--size-big &__img {
      --size: 40px;
    }
  }
</style>
