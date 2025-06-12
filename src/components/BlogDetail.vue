<template>
  <section class="py-16">
    <div class="container mx-auto px-4 max-w-4xl">
      <div v-if="blogPost">
        <h1 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">{{ blogPost.title }}</h1>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-8">Published on {{ blogPost.date }}</p>
        <div class="prose dark:prose-invert lg:prose-lg max-w-none" v-html="blogPost.content"></div>
      </div>
    </div>
    <div v-else class="text-center text-gray-600">
      Loading blog post...
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  content: string;
}

const route = useRoute();
const blogPost = ref<BlogPost | null>(null);

// Dummy data for demonstration
const dummyBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Getting Started with Vue 3',
    date: '2023-10-27',
    content: '<p>This is the content of the first blog post. It covers the basics of getting started with Vue 3.</p><p>Here are some key features:</p><ul><li>Composition API</li><li>Teleport</li><li>Fragments</li></ul>'
  },
  {
    id: 2,
    title: 'Tailwind CSS Tips and Tricks',
    date: '2023-11-10',
    content: '<p>This blog post shares some useful tips and tricks for working with Tailwind CSS.</p><p>Learn how to optimize your workflow and build beautiful interfaces quickly.</p>'
  }
  // Add more dummy data as needed
];

onMounted(() => {
  const postId = Number(route.params.id);
  // In a real application, you would fetch the blog post from an API
  blogPost.value = dummyBlogPosts.find(post => post.id === postId) || null;
});
</script>

<style scoped>
/* Add any specific styles for this component here */
</style>