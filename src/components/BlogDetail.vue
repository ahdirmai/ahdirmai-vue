<template>
  <section class="py-16">
    <div class="container mx-auto px-4 max-w-4xl">
      <div v-if="blogPost">
        <h1
          class="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white"
        >
          {{ blogPost.title }}
        </h1>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-8">
          Published on {{ blogPost.date }}
        </p>
        <div
          class="prose dark:prose-invert lg:prose-lg max-w-none"
          v-html="blogPost.content"
        ></div>
      </div>
      <div v-else class="text-center text-gray-600">Loading blog post...</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";


interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
}

const route = useRoute();
const blogPost = ref<BlogPost | null>(null); // Initialize with null

onMounted(async () => {
  const slug = route.params.slug as string;
  try {
    // Dynamically import the JSON file based on the slug
    const postModule = await import(`/src/data/${slug}.json`);
    blogPost.value = postModule.default as BlogPost;
  } catch (error) {
    console.error(`Failed to load blog post: ${slug}`, error);
    blogPost.value = null;
    // Optionally, redirect to a 404 page or display an error message
  }
});
</script>

<style scoped>
/* Add any specific styles for this component here */
</style>
