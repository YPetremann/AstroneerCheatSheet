<script lang="ts" setup>
import { useBem } from "../composables/useBem";

const props = defineProps<{
  type?: string;
  filled?: boolean;
  compact?: boolean;
}>();
const box = useBem("Box");
</script>
<template>
  <div :class="box(props)">
    <slot />
  </div>
</template>

<style lang="scss">
  .Box {
    &--type-item {
      align-items: center;
      display: flex;
      min-width: 230px;
    }
    &--type-recipe {
      border-radius: 22px 11px 11px 22px;
      display: grid;
      grid-template:
        "icon top" auto
        "icon bottom" auto
        / min-content auto;
      height: 40px;
      overflow: hidden;
      width: 180px;
      &:not(:empty) {
        background: #fff;
      }
    }
    &--type-process {
      border-radius: 32px 22px 22px 32px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 10px;
    }
    &--filled {
      background: #099bf0;
    }

    &--compact {
      align-content: center;
      border-radius: 0;
      box-sizing: border-box;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 5px;
      height: 1080px;
      margin: -20px -20px -20px 0;
      padding: 20px 20px 20px 15px;
      & > * { flex-grow: 1; }
    }

    &--type-divider {
      display: flex;
      flex-direction: column;
    }

    &__icon {
      grid-area: icon;
    }

    &__top {
      grid-area: top;
    }
    &__bottom {
      grid-area: bottom;
    }
    &__bottom,
    &__top {
      height: 20px;
      display: flex;
      justify-content: center;
      place-items: center;
    }

    &__filler {
      border: 0 solid silver;
      flex-grow: 1;
    }

    &__text {
      padding: 0 4px;
      white-space: nowrap;
    }
    .Icon + &__text,
    &__text:first-child {
      padding-left: 0;
    }
    &__text:has(+ .Icon),
    &__text:has(+ &__filler + .Icon),
    &__text:last-child {
      padding-right: 0;
    }
  }
</style>
