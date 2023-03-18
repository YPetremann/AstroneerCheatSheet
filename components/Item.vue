<script lang="ts" setup>
  import Icon from "./Icon.vue";
  import Box from "./Box.vue";
  defineProps<{
    name: string;
    icon?: string;
    title?: boolean;
    unlock?: number | string;
    ingredients?: string[];
    machines?: string[];
  }>();
  const el = ref(null);
  const { width } = useElementSize(el);
</script>

<template>
  <Box type="item" class="Item" ref="el" :data-width="Math.floor(width)">
    <Icon :name="icon ?? name" size="small" />
    {{ name }}
    <Icon v-if="unlock" name="Research" size="small" :pre="`${unlock}`" />
    <div class="Box__filler" />
    <div v-if="machines" class="Item__machines">
      <Icon v-for="name in machines" :key="name" :name="name" size="small" />
    </div>
    <div v-if="ingredients" class="Item__ingredients">
      <Icon
        v-for="(name, i) in ingredients"
        :key="i"
        :name="name"
        size="small"
      />
    </div>
  </Box>
</template>

<style lang="scss">
  .Item {
    flex-grow: 1;
    position: relative;
    background-color: white;
    border-radius: 10px 10px;
    &::before {
      position: absolute;
      top: 0;
      right: 0px;
      height: 20px;
      padding: 0 5px;
      display: flex;
      place-content: center;
      border-radius: 10px;
      place-items: center;
      //content: attr(data-width);
      background: silver;
    }
    //min-width: 200px;
    &__machines,
    &__ingredients {
      display: flex;
    }
    &--title {
      flex-basis: 100%;
    }
    &__Icons {
      display: flex;
      white-space: nowrap;
      align-items: center;
    }
    &__Unlock {
      color: #099bf0;
      padding-left: 4px;
    }
  }
</style>
