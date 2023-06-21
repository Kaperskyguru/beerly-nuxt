<template>
  <div class="flex items-start mt-8 space-x-3">
    <div
      class="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11"
    >
      <img :src="props.icon" alt="" class="w-7 h-7 text-indigo-50" />
      <!-- {{React.cloneElement(, { class: "w-7 h-7 text-indigo-50", })}} -->
    </div>
    <div>
      <h4 class="text-xl font-medium text-gray-800 dark:text-gray-200">
        {{ props.title }}
      </h4>
      <p class="mt-1 text-gray-500 dark:text-gray-400"><slot /></p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  icon: String,
});
</script>

<style>
</style>