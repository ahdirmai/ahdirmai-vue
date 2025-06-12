import { createRouter, createWebHistory } from 'vue-router';
import BlogList from '/src/components/BlogList.vue';
import BlogDetail from '/src/components/BlogDetail.vue';
import HomeView from '/src/views/HomeView.vue'; // Create this component later

const routes = [
  {
    // This route will render nothing directly,
    // the content will be managed by App.vue and its router-view
    path: '/',
    name: 'Home',
    // We will use a dedicated HomeView component for the home page content
    component: HomeView,
  },
  {
    path: '/blog',
    name: 'BlogList',
    component: BlogList,
  },
  // Catch-all route for old hash-based links (optional, remove if not needed)
  { path: '/:pathMatch(.*)*', redirect: '/' },
  {
    path: '/blog/:slug',
    name: 'BlogDetail',
    component: BlogDetail,
    props: true, // Allows accessing route params as props
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;