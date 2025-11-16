<template>
  <section id="projects" class="projects-section py-16 bg-[#f7f7f8]">
    <div class="container max-w-[1100px] mx-auto px-4">
      <h2 class="text-center text-2xl font-semibold mb-2">Featured Projects</h2>
      <p class="text-center text-[var(--text-500)] mb-6">A selection of my recent work that showcases my approach to design and development.</p>

      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="project in projects"
          :key="project.title"
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
  {
    title: 'ework by eDOT',
    description: 'App for salesman field activity monitoring, order management, and reporting.',
    technologies: ['Swift', 'SwiftUI', 'Firebase', 'Combine', 'Alamofire', 'Codemagic', 'XCTest'],
    link: 'https://apps.apple.com/us/app/ework-sfa/id6748628218'
  },
  {
    title: 'Planorama',
    description: 'App for planning and organizing your travel itineraries with ease.',
    technologies: ['Flutter', 'Dart', 'Provider', 'Riverpod', 'E2ETest'],
    link: 'https://play.google.com/apps/testing/com.aziznfl.planorama_apps'
  },
  {
    title: 'Kingkong Meats',
    description: 'E-commerce app for ordering fresh meat products with delivery service.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Provider', 'Sentry', 'Xendit', 'Google Maps', 'Braze Notifications', 'E2ETest'],
    link: 'https://apkpure.com/id/kingkong-meats/com.kingkong.android'
  },
]);
</script>

<style scoped>
/* minimal fallback for cards */
.projects-section { padding: 4rem 1rem; }
.card { border-radius:12px; overflow:hidden; }
.card-media { height:170px; }
</style>
