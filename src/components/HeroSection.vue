<template>
  <section
    id="home"
    class="min-h-screen flex flex-col justify-between relative pt-24 pb-8"
  >
    <div
      class="container mx-auto px-4 sm:px-6 max-w-6xl flex-1 flex items-center"
    >
      <div class="w-full grid lg:grid-cols-2 gap-12 items-center">
        <!-- Hero Text -->
        <div
          class="max-w-2xl text-center lg:text-left order-2 lg:order-1 animate-fade-in mx-auto lg:mx-0"
        >
          <h1
            class="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight mb-3 sm:mb-4"
          >
            RIDHA FAHMI JUNAIDI
          </h1>
          <div
            class="w-14 sm:w-16 h-1 bg-black dark:bg-white mb-5 mx-auto lg:mx-0"
          ></div>
          <h2
            class="text-base sm:text-lg md:text-xl font-medium text-gray-600 dark:text-gray-400 mb-4"
          >
            Web Developer
          </h2>
          <p
            class="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-lg leading-relaxed mx-auto lg:mx-0"
          >
            Computer Science graduate with practical experience in web
            development, database management, and system architecture. Focused
            on delivering high-quality solutions from concept to implementation.
          </p>
          <div
            class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
          >
            <a
              href="#portfolio"
              @click.prevent="scrollToSection('portfolio')"
              class="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              @click.prevent="scrollToSection('contact')"
              class="inline-flex items-center justify-center px-6 sm:px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white font-semibold rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:-translate-y-1 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        <!-- Profile Circle -->
        <div
          class="flex justify-center items-center order-1 lg:order-2 animate-scale-in"
        >
          <div class="relative">
            <div
              class="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-gray-100 to-transparent dark:from-gray-800 p-4 sm:p-5 animate-pulse-ring flex items-center justify-center"
            >
              <div
                class="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center shadow-xl"
              >
                <div
                  class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-300 dark:text-gray-600"
                >
                  RFJ
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div
      class="w-full flex flex-col items-center mt-8 sm:mt-10 cursor-pointer animate-bounce-custom"
      @click="scrollToSection('experience')"
    >
      <span
        class="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mb-2"
        >SCROLL DOWN</span
      >
      <i class="fas fa-chevron-down text-gray-600 dark:text-gray-400"></i>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useNavigation } from "@/composables/useNavigation";

const { scrollToSection } = useNavigation();
</script>
