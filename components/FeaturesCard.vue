<template>
  <div
    :class="[
      'rounded-3xl w-[530px] px-12 pt-20 relative overflow-hidden flex flex-col justify-between',
      card?.bgColor,
      card?.minHeight,
    ]"
  >
    <div>
      <p class="text-lg mb-2 text-[#6E80A3]">
        {{ card?.category }}
      </p>
      <h2 class="text-3xl font-bold mb-4 text-[#0D2C65]">
        {{ card?.title }}
      </h2>
      <p class="text-base mb-6 text-[#6E80A3] leading-1.3">
        {{ card?.description }}
      </p>
      <a href="#" class="font-semibold flex items-center gap-2 text-[#2668EC]">
        {{ card?.ctaText }} →
      </a>
      <div class="border-b w-28 mt-1 text-[#2668EC]"></div>
    </div>

    <slot name="image-bg"></slot>
  </div>
</template>

<script setup>
defineProps({
  card: {
    category: String,
    title: String,
    description: String,
    ctaText: String,
    imageSrc: String,
    altText: String,
    bgColor: String,
    minHeight: {
      type: String,
      default: "h-[400px]",
    },
  },
});
</script>
