<template>
  <NuxtLayout>
    <NavHeader />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const { $lenis } = useNuxtApp();

onMounted(() => {
  if (typeof window !== "undefined" && window.innerWidth > 1024) {
    $lenis.on("scroll", (e) => {
      console.log("scrolling:", e.scroll);
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) {
          $lenis.scrollTo(target, { offset: 0, duration: 1.2 });
        }
      });
    });

    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        $lenis.scrollTo(target, { offset: 0, duration: 1.2 });
      }
    }
  } else {
    document.documentElement.style.scrollBehavior = "smooth";
  }
});
</script>
