

<template>
  <Container>
    <div
      class="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl"
    >
      <div class="flex-grow text-center lg:text-left">
        <h2 class="text-2xl font-medium lg:text-3xl">
          Ready to try-out Beerly?
        </h2>
        <p class="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
          Drink your beers right
        </p>
      </div>
      <div class="flex-shrink-0 w-full text-center lg:w-auto">
        <nuxt-link
          to="/beers"
          class="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5"
        >
          Get Started
        </nuxt-link>
      </div>
    </div>
  </Container>
</template>

<script setup>
</script>

<style>
</style>