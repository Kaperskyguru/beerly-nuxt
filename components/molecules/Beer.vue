<template>
  <div class="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">
    <div class="rounded shadow-md hover:shadow-lg h-full">
      <a href="#">
        <div
          class="flex items-center justify-content-center shadow"
          style="width: 100%; height: 250px"
        >
          <div
            class="w-full flex h-full bg-gray-100 items-center justify-content-center"
          >
            <img
              class="w-full object-contain max-w-full max-h-full py-3"
              :src="item.image_url"
              alt="This post thumbnail"
            />
          </div>
        </div>
      </a>
      <div class="px-6 py-5">
        <div class="pb-3">
          <div class="font-semibold text-lg">
            <a class="text-slate-900 hover:text-slate-700" href="#"
              ><p>{{ item.name }}</p></a
            >
          </div>
          <p class="text-slate-700 text-sm">
            {{ item.tagline }}
          </p>
        </div>

        <p class="text-slate-700 mb-1" title="Published date">
          {{ item.first_brewed }}
        </p>
        <p class="text-slate-800">
          {{ excerpt }}
        </p>
      </div>

      <div class="px-6 py-5">
        <span
          v-if="containLactose"
          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-red-600 bg-red-200 uppercase last:mr-0 mr-1"
        >
          Lactose
        </span>
        <span
          v-if="shouldAddDryHop"
          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-yellow-600 bg-yellow-200 uppercase last:mr-0 mr-1"
        >
          Dry Hopped
        </span>

        <span
          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-blue-600 bg-blue-200 uppercase last:mr-0 mr-1"
        >
          ABV: {{ item.abv }}
        </span>

        <span
          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-sky-600 bg-sky-200 uppercase last:mr-0 mr-1"
        >
          IBU:{{ item.ibu }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
});

const containLactose = computed(() => {
  const item = props?.item;

  const hops = item["ingredients"]["hops"];

  return !!hops.find((hop) => hop.name === "Lactose");
});

const shouldAddDryHop = computed(() => {
  const item = props?.item;

  const hops = item["ingredients"]["hops"];

  return !!hops.find((hop) => hop.add === "dry hop");
});

const excerpt = computed(() => {
  const text = props?.item?.description;
  if (text && text.length <= 120) return text;

  return text?.substring(0, 120) + "...";
});
const item = computed(() => props?.item);
</script>

<style>
</style>