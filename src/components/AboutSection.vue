<template>
  <section id="about" class="about-section py-16 bg-[linear-gradient(180deg,#fff,#fbfbfc)]">
    <div class="container max-w-[1100px] mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 items-center">
        <div class="about-avatar flex justify-center md:justify-start">
          <img src="/src/assets/avatar.jpeg" alt="avatar" class="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg" />
        </div>

        <div class="about-content">
          <h2 class="text-xl font-semibold mb-2">About Me</h2>
          <div class="w-12 h-1 bg-[var(--accent)] rounded mx-auto mb-4"></div>
          <p class="text-[var(--text-600)] mb-4">
            Passionate Flutter and iOS engineer focused on building seamless, user-centered mobile experiences. Always eager to learn, improve, and deliver meaningful impact through code.
          </p>

          <div class="flex justify-center flex-wrap gap-2">
            <span
              v-for="badge in badges"
              :key="badge"
              class="badge bg-[#e6fbff] text-[#007c91] px-3 py-1 rounded-md text-sm font-semibold"
            >
              {{ badge }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const badges = [
  'Swift & SwiftUI',
  'Flutter & Dart',
  'Ruby on Rails',
  'Golang',
  'Vue.js'
];
</script>

<style scoped>
/* fallback styles */
.about-section { padding:4rem 1rem; }
.badge { display:inline-block; }
</style>
