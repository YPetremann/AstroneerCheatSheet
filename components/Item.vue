<script lang="ts" setup>
  import Icon from "./Icon.vue";
  import Box from "./Box.vue";
  const props = defineProps<{
    name: string;
    icon?: string;
    title?: boolean;
    unlock?: number | string;
    ingredients?: string[];
    machines?: string[];
  }>();
  const icon = props.icon ?? props.name;
  const clv = Object.fromEntries(
    [props.name, ...(props.ingredients ?? [])].map((name) => [
      `is-visible-with-${name}`,
      true,
    ])
  );
  function isNumber(val: number | string) {
    if (typeof val === "number") return true;
    if (/^(?=,?\.?[0-9])[0-9]+(\,[0-9]+)?(\.[0-9]+)?k?$/.test(val)) return true;
    return false;
  }
  const visible = inject("visible");
  const cl = `${
    visible.value.includes("all") || visible.value.includes(props.name)
      ? ""
      : "Icon--dim"
  }`;
</script>

<template>
  <Box type="Item" :class="{ Item: true, 'Item--title': title, ...clv }">
    <div class="Item__Icons">
      <Icon :name="icon" size="small" />
      {{ name }}
    </div>
    <div v-if="unlock == 'Mission'" class="Item__Icons">
      <Icon name="Mission Log" size="small" />
    </div>
    <div v-else-if="unlock" class="Item__Icons Item__Unlock">
      {{ unlock }}<Icon v-if="isNumber(unlock)" name="Research" size="small" />
    </div>
    <div v-if="machines" class="Item__Icons">
      <template v-for="name in machines" :key="name">
        <Icon :name="name" size="small" />
      </template>
    </div>
    <div v-if="ingredients" class="Item__Icons">
      <template v-for="(name, i) in ingredients" :key="i">
        <Icon :name="name" size="small" />
      </template>
    </div>
  </Box>
</template>

<style lang="scss">
  .Item {
    display: flex;
    align-items: center;

    background-color: white;
    border-radius: 1000px 1000px;
    overflow: hidden;
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
