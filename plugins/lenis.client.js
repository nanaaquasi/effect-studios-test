import Lenis from "@studio-freight/lenis";

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

export default defineNuxtPlugin(() => {
  if (typeof window !== "undefined" && window.innerWidth > 1024) {
    const lenis = new Lenis({
      duration: 1.6, // Faster duration for better performance
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom ease
      smoothWheel: true,
      wheelMultiplier: 0.8, // Lower wheel multiplier for smoother performance
      touchMultiplier: 1.5, // Lower touch multiplier for better control
      infinite: false,
    });

    let animationFrameId = null;
    const debouncedRaf = debounce((time) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(debouncedRaf);
    }, 16); // Approx. 60 FPS

    requestAnimationFrame(debouncedRaf);

    window.addEventListener("beforeunload", () => {
      cancelAnimationFrame(animationFrameId); // Stop animation on page unload
    });

    return {
      provide: {
        lenis,
      },
    };
  }
});
