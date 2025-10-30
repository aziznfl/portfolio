<template>
  <section
    id="home"
    class="hero min-h-[72vh] flex items-center justify-center bg-white text-[var(--text-900)]"
  >
    <div class="hero-inner container text-center px-4 py-24">
      <h1 class="hero-title text-4xl md:text-5xl font-extrabold">Aziz Nurfalah</h1>
      <p class="hero-sub text-[var(--accent)] mt-3 font-semibold">Mobile Engineer</p>

      <div class="hero-ctas mt-6 inline-flex gap-3">
        <a
          href="#projects"
          @click.prevent="scrollTo('#projects')"
          class="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold bg-gradient-to-r from-[var(--accent)] to-[#6b3df0] text-white shadow-md hover:-translate-y-0.5 transition-transform"
        >
          View My Work
        </a>

        <a
          href="#contact"
          @click.prevent="scrollTo('#contact')"
          class="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold bg-white border border-gray-200 text-[var(--text-700)] shadow-sm hover:shadow-md transition-shadow"
        >
          Get In Touch
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { scrollToHash } from '../composables/useSmoothScroll';

function scrollTo(hash: string) {
  scrollToHash(hash, { headerSelector: '.site-header', gap: 16 });
}
</script>

<style scoped>
/* minimal fallback so original view remains if Tailwind isn't loaded */
.hero { min-height:72vh; display:flex; align-items:center; justify-content:center; background:#fff; color:var(--text-900); }
.hero-inner { text-align:center; padding:6rem 1rem; }
.hero-title { font-size:2.75rem; font-weight:800; }
.hero-down { animation: bounce 2.2s infinite; }
@keyframes bounce { 0%,100%{transform:translateY(0);opacity:1}50%{transform:translateY(8px);opacity:0.7} }
</style>
