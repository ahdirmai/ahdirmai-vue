<template>
  <section id="blog" class="py-20">
    <div class="container mx-auto px-5 max-w-6xl">
      <div class="mb-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4"
        >
          BLOG
        </h2>
        <div class="w-16 h-1 bg-black dark:bg-white"></div>
      </div>

      <div
        v-if="blogPosts.length > 0"
        class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <router-link
          v-for="(post, index) in blogPosts.slice(0, 3)"
          :key="post.slug"
          :to="`/blog/${post.slug}`"
          class="animate-on-scroll bg-white dark:bg-gray-900 p-8 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white hover:transform hover:-translate-y-2 transition-all duration-300 shadow-lg flex flex-col"
        >
          <div
            class="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm mb-3"
          >
            <!-- You might want an icon here, e.g., FontAwesome calendar -->
            <i class="far fa-calendar"></i>
            <span>{{ post.date }}</span>
          </div>
          <h3
            class="text-xl font-bold text-black dark:text-white mb-4 leading-tight"
          >
            {{ post.title
            }}
          </h3>
          <p
            class="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed flex-grow"
          >
            {{ post.description }}
          </p>
        </router-link>

      </div>

      <div class="mt-12 text-center">
        <router-link
          to="/blog"
          class="inline-flex items-center justify-center px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white font-semibold rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
        >
          View All Blog Posts
          <i class="fas fa-arrow-right ml-2"></i>
        </router-link>
      </div>

      <div v-else class="text-center text-gray-600 dark:text-gray-400 mt-8">
        No blog posts available yet.
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { blogPosts } from '@/data/blog'; // Adjust the path if necessary

</script>

<style scoped>
/* Add any component-specific styles here */
/* Existing styles for cards should be handled by Tailwind classes */
</style>
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { blogPosts } from "../data/portfolio";
</script>
