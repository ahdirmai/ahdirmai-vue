<template>
  <div
    class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300"
  >
    <!-- FontAwesome Icons -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />

    <AppNavigation />
 <router-view />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { useScrollAnimation } from "./composables/useScrollAnimation";
import AppNavigation from "./components/AppNavigation.vue";
import AppFooter from "./components/AppFooter.vue";

// Initialize scroll animations
useScrollAnimation();
</script>
