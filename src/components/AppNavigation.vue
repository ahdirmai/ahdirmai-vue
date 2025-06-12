<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      'bg-white dark:bg-gray-900',
      { 'shadow-lg py-2': isScrolled, 'py-4': !isScrolled },
    ]"
  >
    <div class="container mx-auto px-5 max-w-6xl">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <a
          href="#home"
          class="text-2xl font-bold text-black dark:text-white hover:opacity-80 transition-opacity"
          @click.prevent="scrollToSection('home')"
        >
          RFJ
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-8">
          <a
            v-for="item in navItems"
 :key="item.id"
 :href="item.id.startsWith('#') ? item.id : null"
            class="nav-link relative text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2"
 >
 <router-link v-if="!item.id.startsWith('#')" :to="item.id" @click="isMobileMenuOpen = false">{{ item.label }}</router-link>
 <a v-else :href="item.id" @click.prevent="scrollToSection(item.id)">{{ item.label }}</a>
 </a >
        </div>

        <!-- Theme Toggle & Mobile Menu Button -->
        <div class="flex items-center space-x-4">
          <button
            @click="toggleTheme"
            class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
          </button>

          <button
            @click="toggleMobileMenu"
            class="lg:hidden w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <i :class="isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div
        :class="[
          'lg:hidden transition-all duration-300 overflow-hidden',
          { 'max-h-96 mt-4': isMobileMenuOpen, 'max-h-0': !isMobileMenuOpen },
        ]"
      >
        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 space-y-3">
          <a
            v-for="item in navItems"
 :key="item.id"
 :href="item.id.startsWith('#') ? item.id : null"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2"
 >
 <router-link v-if="!item.id.startsWith('#')" :to="item.id" @click="isMobileMenuOpen = false">{{ item.label }}</router-link>
 <a v-else :href="item.id" @click.prevent="scrollToSection(item.id)">{{ item.label }}</a>
 </a >
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useNavigation } from "../composables/useNavigation";
import { useTheme } from "../composables/useTheme";

const { isScrolled, isMobileMenuOpen, toggleMobileMenu, scrollToSection } =
  useNavigation();
const { isDark, toggleTheme } = useTheme();

const navItems = [
  { id: "#home", label: "Home" },
  { id: "#experience", label: "Experience" },
  { id: "#education", label: "Education" },
  { id: "#portfolio", label: "Portfolio" },
  { id: "blog", label: "Blog" },
  { id: "#certifications", label: "Certifications" },
  { id: "#skills", label: "Skills" },
  { id: "#contact", label: "Contact" },
];
</script>

<style scoped>
.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}
</style>
