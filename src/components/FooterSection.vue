<template>
  <footer class="site-footer bg-white py-12 border-t border-[rgba(16,24,40,0.04)]">
    <div class="container max-w-[1100px] mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-[1fr_200px_160px] gap-6 items-start">
        <div>
          <div class="brand text-lg font-bold text-[var(--text-800)]">Portfolio</div>
          <div class="tag text-[var(--text-500)] mt-2">Creating meaningful digital experiences</div>
        </div>

        <div>
          <div class="col-title font-semibold mb-2">Quick Links</div>
          <nav class="quick-links flex flex-col gap-2" aria-label="Footer quick links">
            <a href="#home" @click.prevent="go('#home')" class="text-[var(--text-700)]">Home</a>
            <a href="#about" @click.prevent="go('#about')" class="text-[var(--text-700)]">About</a>
            <a href="#projects" @click.prevent="go('#projects')" class="text-[var(--text-700)]">Projects</a>
            <a href="#contact" @click.prevent="go('#contact')" class="text-[var(--text-700)]">Contact</a>
          </nav>
        </div>

        <div>
          <div class="col-title font-semibold mb-2">Connect</div>
          <div class="socials flex gap-3">
            <a :href="links.linkedin" target="_blank" class="w-9 h-9 rounded-md bg-[#f3f6fb] flex items-center justify-center text-[var(--text-800)]">in</a>
            <a :href="links.github" target="_blank" class="w-9 h-9 rounded-md bg-[#f3f6fb] flex items-center justify-center text-[var(--text-800)]">gh</a>
            <a :href="links.twitter" target="_blank" class="w-9 h-9 rounded-md bg-[#f3f6fb] flex items-center justify-center text-[var(--text-800)]">tw</a>
          </div>
        </div>
      </div>

      <div class="mt-8 text-center text-sm text-[var(--text-500)]">© 2025 Portfolio. All rights reserved.</div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { scrollToHash } from '../composables/useSmoothScroll';

const links = {
  linkedin: 'https://www.linkedin.com/',
  github: 'https://github.com/',
  twitter: 'https://twitter.com/'
};

function go(hash: string) {
  scrollToHash(hash, { headerSelector: '.site-header', gap: 16 });
}
</script>

<style scoped>
/* minimal fallback */
.site-footer { padding-top: 3rem; padding-bottom: 1.2rem; }
</style>
