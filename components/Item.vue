<script lang="ts" setup>
  import Icon from "./Icon.vue";
  import planets from "../data/planets";
  import Box from "./Box.vue";
  const props = defineProps<{
    name: string;
    icon?: string;
    title?: boolean;
    ingredients?: string[];
    unlock?: number | string;
  }>();
  const icon = props.icon ?? props.name;
</script>

<template>
  <Box type="Item" :class="{ Item: true, 'Item--title': title }">
    <Icon :name="icon" size="20px" class="Item__Icon icon20" />
    <div class="Item__Name">{{ name }}</div>
    <div v-if="unlock == 'Mission'" class="Item__Unlock">
      <Icon name="Mission Log" class="icon20" />
    </div>
    <div v-else-if="unlock" class="Item__Unlock">
      {{ unlock }}<Icon name="Research" size="20px" />
    </div>
    <div v-if="ingredients" class="Item__Ingredients">
      <template v-for="(name, i) in ingredients" :key="i">
        <Icon :name="name" size="20px" />
      </template>
    </div>
  </Box>
</template>

<style lang="scss">
  .icon20 {
    width: 20px;
    height: 20px;
  }
  .Item {
    display: flex;
    align-items: center;

    background-color: white;
    border-radius: 1000px 1000px;
    overflow: hidden;
    &--title {
      flex-basis: 100%;
    }

    &__Name {
      white-space: nowrap;
    }
    &:after {
      content: "";
      flex-grow: 1;
    }
    &__Unlock {
      order: 1;
      color: #099bf0;
      display: flex;
      align-items: flex-end;
      padding-left: 1px;
    }
    &__Ingredients {
      order: 1;
      display: flex;
      align-items: flex-end;
    }
  }
</style>
