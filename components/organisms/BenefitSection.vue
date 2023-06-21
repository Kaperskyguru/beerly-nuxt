<template>
  <SectionTitle pretitle="Beerly Benefits" title="Why should you use Beerly">
    Beerly allows you to search through collection best sorted Beers with the
    right ingredients.
  </SectionTitle>
  <Benefits :data="benefitOne" />
  <Benefits imgPos="right" :data="benefitTwo" />
</template>

<script setup>
const benefitOne = reactive({
  title: "Don't drink what you don't know",
  desc: "Seach through our collection of beers and see the ingredients they are made of. Don't drink or buy unless it aligns with your health.",
  image: "/img/benefit-one.png",
  bullets: [
    {
      title: "Easy Search Catelogue",
      desc: "Search fast. Gain knowledge now",
      icon: "",
    },
    {
      title: "Don't guess your next beer",
      desc: "Don't guess with your health, know what's inside the beer you want to drink",
      icon: "",
    },
    {
      title: "Drink with your full chess",
      desc: "Pick only the beer that good with your health",
      icon: "",
    },
  ],
});

const benefitTwo = reactive({
  title: "More benefits of using Beerly",
  desc: "You can easily spot if your bear contains Lactose or not. You can decide to go forward with that beer brand or switch.",
  image: "/img/benefit-two.png",
  bullets: [
    {
      title: "Sort by ABV",
      desc: "Easy spot high rated beer based on the ABV",
      icon: "",
    },
    {
      title: "Easily see the IBU percentage",
      desc: "You can spot the IBU percentage easily.",
      icon: "",
    },
    {
      title: "Lactose Beer or not",
      desc: "Spot beer that contains Lactose fast.",
      icon: "",
    },
  ],
});
</script>

<style>
</style>