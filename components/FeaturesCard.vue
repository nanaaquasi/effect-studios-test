<template>
  <div
    :class="[
      'rounded-3xl w-full sm:w-[530px] px-10 sm:px-12 pt-10 sm:pt-20 relative overflow-hidden flex flex-col justify-between font-light',
      card?.bgColor,
      card?.minHeight,
    ]"
  >
    <div>
      <p class="text-[24px] sm:text-lg mb-2 text-[#6E80A3]">
        {{ card?.category }}
      </p>
      <h2
        class="text-[32px] sm:text-3xl font-bold mb-4 text-[#0D2C65]"
        style="line-height: 42px"
      >
        {{ card?.title }}
      </h2>
      <p
        class="text-[18px] sm:text-base mb-6 text-[#6E80A3] leading-1.4 font-light"
      >
        {{ card?.description }}
      </p>
      <a
        href="#"
        class="font-medium py-2 flex items-center gap-2 text-[#2668EC]"
      >
        {{ card?.ctaText }} {{}} →
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
