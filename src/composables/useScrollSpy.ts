import { ref, onMounted, onBeforeUnmount } from 'vue';

type Link = { href: string };

export function useScrollSpy(links: Link[], headerSelector = '.site-header') {
  const active = ref<string>(links[0]?.href ?? '');
  let onScrollHandler: () => void = () => {};

  onMounted(() => {
    onScrollHandler = () => {
      const headerOffset = document.querySelector(headerSelector)?.clientHeight || 0;
      let nearest = { href: active.value, distance: Infinity };
      links.forEach(l => {
        const el = document.querySelector(l.href) as HTMLElement | null;
        if (!el) return;
        const dist = Math.abs(el.getBoundingClientRect().top - headerOffset);
        if (dist < nearest.distance) nearest = { href: l.href, distance: dist };
      });
      if (nearest.href !== active.value) active.value = nearest.href;
    };

    window.addEventListener('scroll', onScrollHandler, { passive: true });
    // run once to set initial state
    onScrollHandler();
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScrollHandler);
  });

  return active;
}
