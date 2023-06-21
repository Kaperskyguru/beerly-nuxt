

<template>
  <Container class="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
    <div
      class="flex items-center justify-center w-full lg:w-1/2"
      :class="props.imgPos === 'right' ? 'lg:order-1' : ''"
    >
      <div>
        <img
          :src="image"
          width="521"
          height="auto"
          alt="Benefits"
          classe="object-cover"
          placeholder="blur"
        />
      </div>
    </div>

    <div class="flex flex-wrap items-center w-full lg:w-1/2 lg:justify-end">
      <div>
        <div class="flex flex-col w-full mt-4">
          <h3
            class="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white"
          >
            {{ title }}
          </h3>

          <p
            class="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300"
          >
            {{ desc }}
          </p>
        </div>

        <div class="w-full mt-5">
          <Benefit
            v-for="(bullet, i) in bullets"
            :key="i"
            :title="bullet.title"
            :icon="bullet.icon"
          >
            {{ bullet.desc }}</Benefit
          >
        </div>
      </div>
    </div>
  </Container>
</template>

      <script setup>
const props = defineProps({
  imgPos: String,
  data: {
    type: Object,
    default: () => {},
  },
});

const title = computed(() => props.data?.title);
const bullets = computed(() => props.data?.bullets);
const desc = computed(() => props.data?.desc);
const image = computed(() => props.data?.image);
</script>
