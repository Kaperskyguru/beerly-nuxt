
<template>
  <Container
    class="flex w-full flex-col mt-4 items-center justify-center text-center"
  >
    <div class="text-sm font-bold tracking-wider text-indigo-600 uppercase">
      {{ props.pretitle }}
    </div>

    <h2
      class="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white"
    >
      {{ props.title }}
    </h2>

    <p
      class="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300"
    >
      <slot />
    </p>
  </Container>
</template>

<script setup>
const props = defineProps({
  pretitle: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});
</script>

<style>
</style>

