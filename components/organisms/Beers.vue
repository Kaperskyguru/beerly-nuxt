<template>
  <SectionTitle pretitle="Beerly">
    Search through collection best sorted Beers with the right ingredients.
  </SectionTitle>
  <div class="flex flex-wrap -mx-2">
    <Beer v-for="(item, i) in beers" :item="item" :key="i" />
  </div>
</template>

<script setup>
const { data } = await useFetch(
  "https://api.punkapi.com/v2/beers?brewed_after=11-2012"
);

const beers = computed(() => {
  return filterAndSortBeers(data.value);
});

function filterAndSortBeers(beers) {
  const filteredBeers = beers.filter((beer) => {
    const hops = beer.ingredients.hops;
    if (!hops.some((hop) => hop.name.includes("Centennial"))) return beer;
  });
  return sortByABV(filteredBeers);
}

function sortByABV(beers) {
  return beers.sort((a, b) => b.abv - a.abv);
}
</script>

<style>
</style>
