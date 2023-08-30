<script setup>
import { useRoute } from 'vue-router';
import usePetFetch from '../composables/petFetch.js';
import PrimaryButton from '../components/PrimaryButton.vue'

const route = useRoute();
const { gifUrl, gifId, isLoading, refresh } = usePetFetch("cat");

let fetchCat = async function () {
  refresh()
}

let initCatGif = function(initalGifId) {
  gifUrl.value = `https://media.tenor.com/${initalGifId}/`; 
  gifId.value = initalGifId;
}

if(route.params.id) {
  initCatGif(route.params.id);
}
</script>

<template>
  <main>
    <div
      class="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
      <div class="flex flex-col w-full md:w-1/2 text-right items-center">
        <h1 class="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">Cat GIFs</h1>

        <PrimaryButton :loading="isLoading" @click="fetchCat">
            Fetch
        </PrimaryButton>
      </div>
      <div class="flex items-center justify-center w-full h-96 md:w-1/2">
        <section class="text-center">
          <img :src="gifUrl" class="object-cover w-full h-full max-w-2xl rounded-md" />
          <p class="mt-4">ID: {{ gifId }}</p>
        </section>
      </div>
    </div>
  </main>
</template>
