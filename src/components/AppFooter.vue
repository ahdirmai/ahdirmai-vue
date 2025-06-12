<template>
  <footer class="bg-black dark:bg-white text-white dark:text-black py-12">
    <div class="container mx-auto px-5 max-w-6xl">
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-center md:text-left">
          <p class="text-xl font-bold mb-1">Ridha Fahmi Junaidi</p>
          <p class="text-sm opacity-80">Web Developer</p>
        </div>
        
        <div class="flex gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-2xl hover:opacity-70 transition-opacity"
            title="GitHub"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-2xl hover:opacity-70 transition-opacity"
            title="LinkedIn"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-2xl hover:opacity-70 transition-opacity"
            title="Twitter"
          >
            <i class="fab fa-twitter"></i>
          </a>
        </div>
        
        <div class="text-center md:text-right">
          <p class="text-sm opacity-80">
            &copy; {{ currentYear }} All rights reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>