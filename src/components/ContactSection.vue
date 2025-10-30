<template>
  <section id="contact" class="contact-section py-16 bg-[#fafafa]">
    <div class="container max-w-[1100px] mx-auto px-4">
      <h2 class="text-center text-2xl font-semibold">Let's Connect</h2>
      <p class="text-center text-[var(--text-500)] max-w-[720px] mx-auto mt-2">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </p>

      <div class="mt-8 flex flex-col md:flex-row md:items-start md:justify-center gap-6">
        <!-- Contact cards (left visual column previously) -->
        <div class="w-full md:w-[520px] flex flex-col gap-4">
          <div class="info-card bg-white rounded-lg p-4 shadow-md">
            <div class="flex items-center gap-3">
              <div class="w-11 h-11 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#e6f3ff] to-[#e9f8ff] text-[#007c91]">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                  <path d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13A2.5 2.5 0 0 0 21 15.5v-7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M21 8.5L12 13 3 8.5" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div>
                <div class="font-semibold text-[var(--text-800)]">Email</div>
                <a class="text-[var(--accent)] font-medium" :href="'mailto:' + email">{{ email }}</a>
              </div>
            </div>
          </div>

          <div class="info-card bg-white rounded-lg p-4 shadow-md">
            <div class="font-semibold text-[var(--text-800)] mb-3">Find me on social media</div>
            <div class="flex gap-3">
              <a
                v-for="item in socials"
                :key="item.key"
                :href="item.href"
                target="_blank"
                rel="noopener noreferrer"
                class="w-9 h-9 rounded-md bg-[#00e6ff] flex items-center justify-center shadow-sm hover:translate-y-[-3px] transition-transform"
                :aria-label="item.label"
                :title="item.label"
              >
                <!-- simple text placeholder; replace with SVG icons if desired -->
                <span class="text-xs font-bold text-[#04323a]">{{ item.short }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const email = 'aziznurfalah@gmail.com';
const socials = [
  { key: 'linkedin', href: 'https://www.linkedin.com/in/aziz-nurfalah-9331a5114', label: 'LinkedIn', short: 'in' },
  { key: 'github', href: 'https://github.com/aziznfl', label: 'GitHub', short: 'gh' },
  { key: 'twitter', href: 'https://twitter.com/aziznfl', label: 'Twitter', short: 'tw' }
];
</script>

<style scoped>
/* minimal fallbacks to preserve original look if Tailwind is not loaded */
.contact-section { padding: 4rem 1rem; }
.info-card, .cta-card { margin-bottom: 0.75rem; }
</style>
