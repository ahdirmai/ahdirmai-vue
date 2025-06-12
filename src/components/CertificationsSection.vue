<template>
  <section id="certifications" class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-5 max-w-6xl">
      <div class="mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
          CERTIFICATIONS
        </h2>
        <div class="w-16 h-1 bg-black dark:bg-white"></div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(cert, index) in certifications"
          :key="index"
          class="animate-on-scroll bg-white dark:bg-gray-900 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white hover:transform hover:-translate-y-2 transition-all duration-300 shadow-lg"
        >
          <div class="flex gap-4">
            <div class="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
              <i class="fas fa-award text-black dark:text-white"></i>
            </div>
            <div class="flex-grow">
              <h3 class="font-bold text-black dark:text-white mb-2 leading-tight">
                {{ cert.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm mb-1">
                {{ cert.issuer }}
              </p>
              <p class="text-gray-500 dark:text-gray-500 text-xs">
                {{ cert.date }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { certifications } from '@/data/portfolio'
</script>