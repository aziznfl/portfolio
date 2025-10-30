export function scrollToHash(
  hash: string,
  options?: { headerSelector?: string; gap?: number }
) {
  const headerSelector = options?.headerSelector ?? '.site-header';
  const gap = options?.gap ?? 16;

  if (!hash || hash === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const el = document.querySelector(hash) as HTMLElement | null;
  if (!el) {
    // fallback: update location hash
    window.location.hash = hash;
    return;
  }

  const headerOffset = document.querySelector(headerSelector)?.clientHeight || 0;
  const rect = el.getBoundingClientRect();
  const targetY = Math.max(0, window.scrollY + rect.top - headerOffset - gap);
  window.scrollTo({ top: targetY, behavior: 'smooth' });
}
