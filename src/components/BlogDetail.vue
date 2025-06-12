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
  id: number;
  title: string;
  date: string;
  content: string;
}

const route = useRoute();
const blogPost = ref<BlogPost | null>(null);

onMounted(async () => {
  const postId = Number(route.params.id);
  try {
    // Assumes your JSON file is at src/data/blogPosts.json
    const response = await fetch("/src/data/blogPosts.json");
    const posts: BlogPost[] = await response.json();
    blogPost.value = posts.find(post => post.id === postId) || null;
  } catch (error) {
    blogPost.value = null;
  }
});
</script>

<style scoped>
/* Add any specific styles for this component here */
</style>
