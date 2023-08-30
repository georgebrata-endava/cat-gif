<script setup>
import { useRouter } from 'vue-router';
import PrimaryButton from '../components/PrimaryButton.vue'

const router = useRouter();

let goToCatView = function() {
  // router.push('/cat')
  router.go(-1)
}
</script>

<template>
  <main>
      <div class="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
        <div class="flex flex-col w-full md:w-1/2 text-right items-center">
          <h1 class="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">Home</h1>
          
          <PrimaryButton @click="goToCatView" class="red-btn">
            Get started
          </PrimaryButton>
        </div>
        <div class="flex items-center justify-center w-full h-96 md:w-1/2">
          <img src="https://media.giphy.com/media/ule4vhcY1xEKQ/giphy.gif" class="object-cover w-full h-full max-w-2xl rounded-md"/>
        </div>
      </div>
  </main>
</template>
