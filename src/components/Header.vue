<template>
    <header class="bg-white">

        <nav class="bg-white">

            <div class="container p-6 mx-auto">

                <a class="block text-2xl font-bold text-center text-gray-800 lg:text-3xl hover:text-gray-700"
                    href="/">CatGIF</a>

                <div class="flex items-center justify-center mt-6 text-gray-600 capitalize">

                    <RouterLink to="/" class="border-b-2 border-transparent hover:border-blue-500 mx-1.5 sm:mx-6">Home
                    </RouterLink>

                    <RouterLink to="/cat" class="border-b-2 border-transparent hover:border-blue-500 mx-1.5 sm:mx-6">Cat
                    </RouterLink>

                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'

</script>

<style scoped>
.router-link-active {
    border-bottom: 2px solid blue;
}
</style>