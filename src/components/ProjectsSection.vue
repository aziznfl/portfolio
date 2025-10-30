<template>
  <section id="projects" class="projects-section py-16 bg-[#f7f7f8]">
    <div class="container max-w-[1100px] mx-auto px-4">
      <h2 class="text-center text-2xl font-semibold mb-2">Featured Projects</h2>
      <p class="text-center text-[var(--text-500)] mb-6">A selection of my recent work that showcases my approach to design and development.</p>

      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="project in projects"
          :key="project.id"
          class="card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transform transition-transform hover:-translate-y-2"
        >
          <div class="card-media h-44 bg-gradient-to-b from-[#f0f0f2] to-[#f7f7f8] border-b border-[rgba(16,24,40,0.03)]"></div>
          <div class="card-body p-4">
            <h3 class="text-lg font-semibold mb-2 text-[var(--text-800)]">{{ project.title }}</h3>
            <p class="text-[var(--text-600)] text-sm mb-3">{{ project.description }}</p>
            <a :href="project.link" target="_blank" class="inline-block px-3 py-2 rounded-md text-sm font-bold text-white bg-gradient-to-r from-[var(--accent)] to-[#6b3df0]">View Project</a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const projects = ref([
  { id: 1, title: 'AI Art Generator Bot', description: 'A bot that generates art pieces based on user-defined keywords using neural networks and style transfer techniques.', link: '#' },
  { id: 2, title: 'Interactive Web Experience', description: 'A browser-based project that allows users to navigate through a virtual gallery with responsive elements adapting to user interactions.', link: '#' },
  { id: 3, title: 'Design System', description: 'A reusable component library and guidelines to build consistent, accessible interfaces across products.', link: '#' }
]);
</script>

<style scoped>
/* minimal fallback for cards */
.projects-section { padding: 4rem 1rem; }
.card { border-radius:12px; overflow:hidden; }
.card-media { height:170px; }
</style>
