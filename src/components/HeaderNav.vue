<template>
  <header
    class="site-header fixed top-0 left-0 right-0 z-50 h-16 backdrop-blur bg-white/90 border-b border-black/5"
    role="banner"
  >
    <div class="container mx-auto max-w-[1100px] px-5 h-full flex items-center justify-between">
      <div class="logo text-[var(--text-600)] font-bold">Portfolio</div>

      <!-- mobile toggle -->
      <button
        class="nav-toggle md:hidden inline-flex items-center justify-center p-2 rounded-md"
        :aria-expanded="String(menuOpen)"
        aria-label="Toggle navigation"
        @click="menuOpen = !menuOpen"
      >
        <span
          class="block w-5 h-[2px] bg-[var(--text-600)] rounded transition-transform duration-200"
          :class="menuOpen ? 'translate-y-1.5 rotate-45' : ''"
        />
        <span
          class="block w-5 h-[2px] bg-[var(--text-600)] rounded my-1 transition-opacity duration-200"
          :class="menuOpen ? 'opacity-0' : 'opacity-100'"
        />
        <span
          class="block w-5 h-[2px] bg-[var(--text-600)] rounded transition-transform duration-200"
          :class="menuOpen ? '-translate-y-1.5 -rotate-45' : ''"
        />
      </button>

      <!-- desktop nav -->
      <nav class="nav hidden md:flex gap-4 items-center" role="navigation" aria-label="Primary">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-[var(--text-500)] text-sm px-2 py-1 rounded-md transition-colors"
          :class="{
            'text-accent bg-accent/10 font-semibold': activeLink === link.href,
            'hover:text-accent hover:bg-accent/6': activeLink !== link.href
          }"
          @click.prevent="onClickLink(link.href)"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- mobile dropdown -->
      <nav
        class="md:hidden origin-top-right absolute right-3 top-16 bg-white/98 shadow-lg rounded-lg p-2 min-w-[200px] flex flex-col gap-2 transform transition-all duration-220"
        :class="menuOpen ? 'opacity-100 pointer-events-auto translate-y-0 scale-100' : 'opacity-0 pointer-events-none -translate-y-2 scale-95'"
        role="navigation"
        aria-label="Mobile"
      >
        <a
          v-for="link in links"
          :key="link.href + '-mobile'"
          :href="link.href"
          class="block text-[var(--text-700)] text-sm px-3 py-2 rounded-md transition-colors"
          :class="{
            'text-accent bg-accent/10 font-semibold': activeLink === link.href,
            'hover:text-accent hover:bg-accent/6': activeLink !== link.href
          }"
          @click.prevent="onClickLink(link.href)"
        >
          {{ link.label }}
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useScrollSpy } from '../composables/useScrollSpy';
import { scrollToHash } from '../composables/useSmoothScroll';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
];

const menuOpen = ref(false);
const activeLink = useScrollSpy(links);

function onClickLink(href: string) {
  menuOpen.value = false;
  scrollToHash(href, { headerSelector: '.site-header', gap: 16 });
  // set active immediately (composable will also update on scroll)
  (activeLink as any).value = href;
}
</script>

<!-- keep only minimal fallback styles — most styling is via Tailwind -->
<style scoped>
/* ensure header height var is accessible if any non-Tailwind CSS uses it */
:root {
  --header-height: 64px;
}

/* small visual shadow when scrolled (optional hook can toggle .scrolled) */
.site-header.scrolled { box-shadow: 0 6px 30px rgba(16,24,40,0.06); }

/* mobile dropdown transition timings (tiny CSS complement for smoother transform) */
nav[role="navigation"] {
  will-change: transform, opacity;
}
</style>
