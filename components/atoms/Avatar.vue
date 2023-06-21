<template>
  <div class="flex items-center mt-8 space-x-3">
    <div class="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
      <img
        :src="props.image"
        width="40"
        height="40"
        alt="Avatar"
        placeholder="blur"
      />
    </div>
    <div>
      <div class="text-lg font-medium">{{ props.name }}</div>
      <div class="text-gray-600 dark:text-gray-400">{{ props.title }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: String,
  name: String,
  title: String,
});
</script>

<style>
</style>