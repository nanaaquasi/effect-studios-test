<template>
  <NuxtLayout>
    <NavHeader />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const { $lenis } = useNuxtApp();

onMounted(() => {
  $lenis.on("scroll", (e) => {
    console.log("scrolling:", e.scroll);
  });

  // Smooth scroll with anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        $lenis.scrollTo(target, { offset: 0, duration: 1.2 });
      }
    });
  });

  // Smooth scroll on page load with hash navigation
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      $lenis.scrollTo(target, { offset: 0, duration: 1.2 });
    }
  }
});
</script>
<style>
html {
  scroll-behavior: auto; /* Disable default smooth scroll */
}
</style>
