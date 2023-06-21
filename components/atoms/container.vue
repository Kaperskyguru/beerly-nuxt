<template>
  <div class="container p-8 mx-auto xl:px-0" :class="classes">
    <slot />
  </div>
</template>

<script setup>
const { classes } = defineProps({
  classes: {
    type: String,
    default: "",
  },
});
</script>

<style>
</style>