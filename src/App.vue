<script setup lang="ts">
import HeaderNav from './components/HeaderNav.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div id="app">
    <HeaderNav />
    <HeroSection />
    <main>
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </main>
  </div>
</template>
