<script lang="ts" setup>
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
      display: flex;
      align-items: center;
    }
    &--type-recipe {
      width: 200px;
      height: 40px;
      overflow: hidden;
      display: grid;
      grid-template:
        "icon top" auto
        "icon bottom" auto
        / min-content auto;
      &:not(:empty) {
        background: #fff;
        border-radius: 11px;
        border-top-left-radius: 22px;
        border-bottom-left-radius: 22px;
      }
    }
    &--type-process {
      display: flex;
      flex-direction: column;
      padding: 10px;
      gap: 20px;
      border-radius: 22px;
      border-top-left-radius: 32px;
      border-bottom-left-radius: 32px;
    }
    &--filled {
      background: #099bf0;
    }

    &--compact {
      box-sizing: border-box;
      border-radius: 0;
      flex-direction: row;
      flex-wrap: wrap;
      margin: -20px;
      margin-left: -15px;
      padding: 20px;
      padding-left: 15px;
      height: 1080px;
      gap: 5px;
      align-content: center;
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
      flex-grow: 1;
      //border: 1px solid silver;
      border-width: 1px 0;
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
