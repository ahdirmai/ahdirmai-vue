<template>
  <section id="skills" class="py-20">
    <div class="container mx-auto px-5 max-w-6xl">
      <div class="mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
          SKILLS
        </h2>
        <div class="w-16 h-1 bg-black dark:bg-white"></div>
      </div>

      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Technical Skills -->
        <div class="animate-on-scroll bg-white dark:bg-gray-900 p-8 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white hover:transform hover:-translate-y-2 transition-all duration-300 shadow-lg">
          <h3 class="text-2xl font-bold text-black dark:text-white mb-6">
            Technical Skills
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div
              v-for="skill in technicalSkills"
              :key="skill.name"
              class="flex flex-col items-center text-center"
            >
              <div class="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-3">
                <i :class="skill.icon + ' text-2xl text-black dark:text-white'"></i>
              </div>
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
                {{ skill.name }}
              </span>
            </div>
          </div>
        </div>

        <!-- Soft Skills -->
        <div class="animate-on-scroll bg-white dark:bg-gray-900 p-8 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white hover:transform hover:-translate-y-2 transition-all duration-300 shadow-lg">
          <h3 class="text-2xl font-bold text-black dark:text-white mb-6">
            Soft Skills
          </h3>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="skill in softSkills"
              :key="skill"
              class="px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-lg"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { technicalSkills, softSkills } from '@/data/portfolio'
</script>