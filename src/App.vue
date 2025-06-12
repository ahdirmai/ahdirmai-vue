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
    <HeroSection />
    <ExperienceSection />
    <EducationSection />
    <PortfolioSection />
    <BlogSection />
    <CertificationsSection />
    <SkillsSection />
    <ContactSection />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { useScrollAnimation } from "./composables/useScrollAnimation";
import AppNavigation from "./components/AppNavigation.vue";
import HeroSection from "./components/HeroSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import EducationSection from "./components/EducationSection.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
import BlogSection from "./components/BlogSection.vue";
import CertificationsSection from "./components/CertificationsSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
import ContactSection from "./components/ContactSection.vue";
import AppFooter from "./components/AppFooter.vue";

// Initialize scroll animations
useScrollAnimation();
</script>
