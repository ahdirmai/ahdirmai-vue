<template>
  <section id="blog" class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-8">Blog Posts</h2>
      <p v-if="loading" class="text-center text-gray-600 dark:text-gray-400">Loading blog posts...</p>
      <p v-else-if="error" class="text-center text-red-500 dark:text-red-400">Error loading blog posts: {{ error.message }}</p>
      <p v-else-if="blogPosts.length === 0" class="text-center text-gray-600 dark:text-gray-400">No blog posts found.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
// Import markdown parser if needed, or handle parsing server-side
// import MarkdownIt from 'markdown-it';

interface BlogPost {
  slug: string;
  title: string;
  date: string; // Or use Date type
  excerpt?: string; // Optional: short description
  // Add other metadata if needed
}

const blogPosts = ref<BlogPost[]>([]);
const loading = ref(true);
const error = ref<Error | null>(null);

// Function to dynamically import markdown files
const fetchBlogPosts = async () => {
  try {
    // In a real app, you might fetch a list of slugs from an API
    // For this example, we assume we know the file names
    const postFiles = import.meta.glob('/src/data/dummy-blog-post-*.md', { as: 'raw' });
    let posts: BlogPost[] = [];

    for (const path in postFiles) {
      const slug = path.split('/').pop()?.replace('.md', '') || 'unknown';

      const content: string = await postFiles[path](); // Load the raw content

      // Simple parsing to extract title and first paragraph
      const lines = content.split('\n').filter(line => line.trim() !== '');
      let title = 'Untitled';
      let date = 'Unknown Date';
      let excerpt = '';

      if (lines.length > 0) {
        title = lines[0].replace(/^#+\s*/, '').trim(); // Assume first non-empty line is the title (removing markdown #)
      }
      if (lines.length > 1) {
        // Find the first paragraph
        const firstParagraph = lines.slice(1).find(line => !line.startsWith('#') && !line.startsWith('-') && !line.startsWith('*') && !line.startsWith('>'));
        excerpt = firstParagraph ? firstParagraph.substring(0, 150) + '...' : 'Click to read more...'; // Take first 150 chars or default
      }
      // More robust date extraction would be needed if dates aren't in filenames or file content
      // For now, let's try to get a date-like part from the filename if available
      const dateMatch = slug.match(/\d{4}-\d{2}-\d{2}/);
      if (dateMatch) { date = dateMatch[0]; }

      posts.push({
        slug: slug,
        title: title || 'Untitled',
        date: date || 'Unknown Date',
        // excerpt: 'A short excerpt of the blog post...', // Add actual excerpt extraction
      });
    }
    blogPosts.value = posts;
    await nextTick(); // Ensure DOM is updated after data fetch
  } catch (e: any) {
    error.value = e;
    console.error("Error fetching blog posts:", e);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchBlogPosts();
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