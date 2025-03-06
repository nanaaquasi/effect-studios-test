<template>
  <div class="inline-block w-40 h-20 relative cursor-pointer">
    <nuxt-img
      :src="defaultSrc"
      :alt="altText"
      class="absolute w-full h-full transition-opacity duration-300 hover:opacity-0"
    />
    <nuxt-img
      :src="hoverSrc"
      :alt="altText"
      class="absolute w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100"
    />
  </div>
</template>

<script setup>
defineProps({
  defaultSrc: {
    type: String,
    required: true,
  },
  hoverSrc: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    default: "Logo",
  },
});
</script>

<style scoped>
/* Additional styles if needed */
</style>
