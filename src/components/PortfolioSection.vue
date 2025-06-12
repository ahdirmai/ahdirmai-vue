<template>
  <section id="portfolio" class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-5 max-w-6xl">
      <div class="mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
          PORTFOLIO
        </h2>
        <div class="w-16 h-1 bg-black dark:bg-white"></div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="animate-on-scroll bg-white dark:bg-gray-900 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white hover:transform hover:-translate-y-2 transition-all duration-300 shadow-lg overflow-hidden"
        >
          <div class="h-48 overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-black dark:text-white mb-3">
              {{ project.title }}
            </h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded"
              >
                {{ tag }}
              </span>
            </div>
            <div class="flex gap-4">
              <a
                v-if="project.demoUrl"
                :href="project.demoUrl"
                class="flex items-center gap-2 text-sm font-medium text-black dark:text-white hover:opacity-70 transition-opacity"
              >
                <i class="fas fa-external-link-alt"></i>
                Live Demo
              </a>
              <a
                v-if="project.sourceUrl"
                :href="project.sourceUrl"
                class="flex items-center gap-2 text-sm font-medium text-black dark:text-white hover:opacity-70 transition-opacity"
              >
                <i class="fab fa-github"></i>
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from '@/data/portfolio'
</script>