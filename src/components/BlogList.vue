<template>
  <section id="blog" class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-8">Blog Posts</h2>
      <p v-if="loading" class="text-center text-gray-600 dark:text-gray-400">Loading blog posts...</p>
      <p v-else-if="error" class="text-center text-red-500 dark:text-red-400">Error loading blog posts: {{ error.message }}</p>
      <p v-else-if="blogPosts.length === 0" class="text-center text-gray-600 dark:text-gray-400">No blog posts found.</p>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <router-link
          v-for="post in blogPosts"
          :key="post.slug"
          :to="`/blog/${post.slug}`"
          class="block bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <img
            src="https://via.placeholder.com/400x200"
            alt="Blog Post Image Placeholder"
            class="w-full h-48 object-cover"
          />
          <div class="p-4 md:p-6">
            <h3 class="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
              {{ post.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
              {{ post.date }}
            </p>
            <!-- You might want to add a short excerpt here -->
            <!-- <p class="text-gray-700 dark:text-gray-300 text-base line-clamp-3">
              {{ post.excerpt || 'Click to read more...' }}
            </p> -->
            <p class="text-gray-700 dark:text-gray-300 text-base line-clamp-3">{{ post.excerpt || 'Click to read more...' }}</p>
          </div>
        </router-link>
        </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// Import the blog posts metadata from the blog.ts data file
import { blogPosts } from '/src/data/blog';

export default defineComponent({
  name: 'BlogList',
  setup() {
    // Since we are using the data from blog.ts, no need for loading/error states here
    // unless we were fetching the data asynchronously (e.g., from an API)
    const loading = false;
    const error = null;

    return {
      blogPosts, // Use the imported blogPosts array
      loading,
      error,
      }
});
</script>

<style scoped>
/* line-clamp utility is provided by @tailwindcss/line-clamp plugin if you have it installed */
/* If not, you might need a custom CSS class or install the plugin */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>