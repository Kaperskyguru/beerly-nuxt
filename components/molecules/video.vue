<template>
  <Container>
    <div class="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl">
      <div
        @click="() => (playVideo = !playVideo)"
        class="relative bg-indigo-300 cursor-pointer aspect-w-16 aspect-h-9 bg-gradient-to-tr from-purple-400 to-indigo-700"
      >
        <button
          v-if="!playVideo"
          class="absolute inset-auto w-16 h-16 text-white transform -translate-x-1/2 -translate-y-1/2 lg:w-28 lg:h-28 top-1/2 left-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-16 h-16 lg:w-28 lg:h-28"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
          <span class="sr-only">Play Video</span>
        </button>

        <iframe
          v-else
          src="https://www.youtube-nocookie.com/embed/aOq49euWnIo?controls=0&autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </Container>
</template>

<script setup>
let playVideo = ref(false);

// const setPlayVideo = () => (playVideo.value = !playVideo.value);
</script>


<style>
</style>
