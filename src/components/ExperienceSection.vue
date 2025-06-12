<template>
  <section id="experience" class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-5 max-w-6xl">
      <div class="mb-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4"
        >
          WORK EXPERIENCE
        </h2>
        <div class="w-16 h-1 bg-black dark:bg-white"></div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(experience, index) in experiences"
          :key="index"
          class="animate-on-scroll bg-white dark:bg-gray-900 p-8 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white hover:transform hover:-translate-y-2 transition-all duration-300 shadow-lg"
        >
          <h3 class="text-xl font-bold text-black dark:text-white mb-2">
            {{ experience.title }} @ {{ experience.company }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
            {{ experience.period }}
          </p>
          <ul class="space-y-2">
            <li
              v-for="(detail, detailIndex) in experience.details"
              :key="detailIndex"
              class="text-gray-700 dark:text-gray-300 text-sm flex items-start"
            >
              <span class="text-black dark:text-white mr-2 mt-1">•</span>
              {{ detail }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { experiences } from "../data/portfolio";
</script>
