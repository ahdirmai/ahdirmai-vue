<template>
  <section id="education" class="py-20">
    <div class="container mx-auto px-5 max-w-6xl">
      <div class="mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
          EDUCATION
        </h2>
        <div class="w-16 h-1 bg-black dark:bg-white"></div>
      </div>

      <div class="animate-on-scroll bg-white dark:bg-gray-900 p-8 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white hover:transform hover:-translate-y-2 transition-all duration-300 shadow-lg">
        <div class="flex gap-6 items-start">
          <div class="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
            <i class="fas fa-graduation-cap text-2xl text-black dark:text-white"></i>
          </div>
          <div class="flex-grow">
            <h3 class="text-2xl font-bold text-black dark:text-white mb-2">
              {{ education.degree }}
            </h3>
            <p class="text-lg text-gray-600 dark:text-gray-400 mb-3">
              {{ education.institution }}
            </p>
            <div class="flex items-center gap-2 mb-4">
              <i class="fas fa-award text-black dark:text-white"></i>
              <span class="font-semibold text-black dark:text-white">GPA {{ education.gpa }}</span>
            </div>
            <ul class="space-y-2">
              <li
                v-for="(achievement, index) in education.achievements"
                :key="index"
                class="text-gray-700 dark:text-gray-300 flex items-start"
              >
                <span class="text-black dark:text-white mr-2 mt-1">•</span>
                {{ achievement }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { education } from '@/data/portfolio'
</script>