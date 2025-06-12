<template>
  <section id="contact" class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-5 max-w-6xl">
      <div class="mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
          CONTACT
        </h2>
        <div class="w-16 h-1 bg-black dark:bg-white"></div>
      </div>

      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Contact Info -->
        <div class="animate-on-scroll bg-white dark:bg-gray-900 p-8 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white hover:transform hover:-translate-y-2 transition-all duration-300 shadow-lg">
          <h3 class="text-2xl font-bold text-black dark:text-white mb-6">
            Get In Touch
          </h3>
          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                <i class="fas fa-map-marker-alt text-black dark:text-white"></i>
              </div>
              <div>
                <h4 class="font-semibold text-black dark:text-white mb-1">Location</h4>
                <p class="text-gray-700 dark:text-gray-300 text-sm">{{ contactInfo.location }}</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                <i class="fas fa-envelope text-black dark:text-white"></i>
              </div>
              <div>
                <h4 class="font-semibold text-black dark:text-white mb-1">Email</h4>
                <a 
                  :href="`mailto:${contactInfo.email}`" 
                  class="text-gray-700 dark:text-gray-300 text-sm hover:text-black dark:hover:text-white transition-colors"
                >
                  {{ contactInfo.email }}
                </a>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                <i class="fas fa-phone text-black dark:text-white"></i>
              </div>
              <div>
                <h4 class="font-semibold text-black dark:text-white mb-1">Phone</h4>
                <a 
                  :href="`tel:${contactInfo.phone}`" 
                  class="text-gray-700 dark:text-gray-300 text-sm hover:text-black dark:hover:text-white transition-colors"
                >
                  {{ contactInfo.phone }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="animate-on-scroll bg-white dark:bg-gray-900 p-8 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white hover:transform hover:-translate-y-2 transition-all duration-300 shadow-lg">
          <h3 class="text-2xl font-bold text-black dark:text-white mb-6">
            Send Message
          </h3>
          <form @submit="handleSubmit" class="space-y-6">
            <div>
              <input
                v-model="form.name"
                type="text"
                placeholder="Your Name"
                required
                class="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-black dark:focus:border-white focus:outline-none transition-colors"
              />
            </div>
            <div>
              <input
                v-model="form.email"
                type="email"
                placeholder="Your Email"
                required
                class="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-black dark:focus:border-white focus:outline-none transition-colors"
              />
            </div>
            <div>
              <textarea
                v-model="form.message"
                placeholder="Your Message"
                rows="5"
                required
                class="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-black dark:focus:border-white focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full flex items-center justify-center gap-2 px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <i class="fas fa-paper-plane"></i>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { contactInfo } from '@/data/portfolio'
import type { ContactForm } from '@/types'

const form = reactive<ContactForm>({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = (e: Event) => {
  e.preventDefault()
  
  // In a real application, you would send this data to a server
  console.log('Form submitted:', form)
  
  // Show success message
  alert('Message sent successfully! (This is a demo)')
  
  // Reset form
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>