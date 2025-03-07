<template>
  <div
    class="w-full sm:w-[360px] news-card flex flex-col bg-[#F8F9FE] rounded-lg overflow-hidden"
  >
    <div class="p-4 sm:p-6 flex-1">
      <div class="relative inline-block mb-4">
        <div
          class="bg-[#23CE6B] text-white text-xs font-medium px-4 py-1 rounded-sm relative z-10"
        >
          {{ category }}
        </div>
        <div
          class="absolute w-full h-full bg-blue-900 z-0 left-1 top-1 rounded-sm opacity-60 pattern-stripes"
        ></div>
      </div>

      <h3 class="text-lg sm:text-xl font-medium text-[#0D2C65]">{{ title }}</h3>
      <p class="text-xs sm:text-sm text-[#6E80A3] font-light mt-2">
        {{ date }}
      </p>
    </div>
    <div class="h-32 sm:h-48 overflow-hidden">
      <slot name="news-img"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  category: String,
  title: String,
  date: String,
  image: String,
});
</script>

<style scoped>
img {
  max-height: 300px;
  transition: transform 0.3s ease;
}
img:hover {
  transform: scale(1.05);
}

.pattern-stripes {
  background-image: repeating-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.1) 2px,
    transparent 2px,
    transparent 4px
  );
  background-size: 6px 6px;
}
</style>
