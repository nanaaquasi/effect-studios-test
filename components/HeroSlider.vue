<template>
  <div
    class="relative w-full h-[77vh] sm:h-[80vh] overflow-hidden bg-[#F8F9FE] flex flex-col"
  >
    <div class="flex-grow flex items-center justify-center w-full relative">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        :class="[
          'absolute inset-0 flex flex-col justify-center gap-0 sm:gap-8 px-4 sm:px-10 transition-all duration-1000 ease-in-out',
          currentIndex === index
            ? 'opacity-100 translate-x-0'
            : index < currentIndex
            ? 'opacity-0 -translate-x-full'
            : 'opacity-0 translate-x-full',
        ]"
      >
        <div class="flex items-center justify-center">
          <img
            src="~/assets/svgs/iphone.svg"
            alt="phone"
            class="hidden sm:block mr-20 w-90 h-110"
          />

          <img
            src="~/assets/svgs/hero-mobile.svg"
            alt="phone"
            class="block sm:hidden mr-20 h-80"
          />
        </div>

        <div class="flex flex-col sm:flex-row justify-between px-4 sm:px-7">
          <h2
            class="font-medium text-blue-900 mb-4 w-full sm:w-[55vw] text-[42px] sm:text-[60px]"
            v-html="slide.title"
            style="line-height: 1.2"
          ></h2>
          <div class="flex items-end w-full sm:w-[40vw]">
            <p
              class="text-md text-[#233375] mb-4"
              v-html="slide.description"
            ></p>
          </div>
        </div>
      </div>
    </div>

    <!-- Slide Indicators -->
    <div
      class="w-full bg-gray-300 sm:flex justify-center gap-4 sm:gap-12 h-[2px] hidden"
    >
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="h-[2px] w-[100px] sm:w-[220px] bg-gray-300 rounded-full overflow-hidden cursor-pointer"
        @click="goToSlide(index)"
      >
        <div
          v-if="currentIndex === index"
          class="h-full bg-blue-600 animate-progress"
        ></div>
        <div
          v-else
          :class="{
            'bg-blue-600': index < currentIndex,
            'bg-gray-400/70': index > currentIndex,
          }"
          class="h-full"
        ></div>
      </div>
    </div>
  </div>

  <div
    class="flex flex-col sm:flex-row px-7 sm:px-16 py-4 sm:py-7 align-center justify-between bg-[#F8F9FE]"
  >
    <div class="flex items-center gap-4 sm:hidden">
      <img src="~/assets/svgs/how-it-works.svg" alt="how it works" />
      <p class="text-[#233375] text-lg">See how it works</p>
    </div>
    <div class="gap-4 sm:gap-6 hidden sm:flex">
      <p class="text-[#6E80A3] font-light">News & Release update</p>
      <div class="flex flex-col">
        <div class="flex gap-1">
          <p class="text-[#6E80A3] font-light">June 01, 2022 —</p>
          <a href="/press" class="text-[#2668EC]"
            >Bomba now has a dollar wallet, activate your account</a
          >
        </div>
        <div class="flex gap-1">
          <p class="text-[#6E80A3] font-light">June 01, 2022 —</p>
          <a class="text-[#2668EC]" href="/press"
            >Top 10 Summer Vacation Places In 2022</a
          >
        </div>
      </div>
    </div>

    <a href="#features-section" class="flex sm:gap-2 mt-4 sm:mt-0">
      <p
        class="text-xl sm:text-2xl text-medium mb-1 text-[#233375] hidden sm:block"
      >
        Scroll Down
      </p>
      <ArrowDown color="#63C57B" />
    </a>
  </div>

  <div class="dotted-line"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { ArrowDown } from "lucide-vue-next";

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
});

const currentIndex = ref(0);
let interval = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.slides.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
  resetInterval();
};

const resetInterval = () => {
  clearInterval(interval);
  interval = setInterval(nextSlide, 5000);
};

onMounted(() => {
  interval = setInterval(nextSlide, 5000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style>
.dotted-line {
  width: 100vw;
  height: 1px;
  color: blueviolet;
  /* dashed border */
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='black' stroke-width='6' stroke-dasharray='6%2c 14' stroke-dashoffset='32' stroke-linecap='square'/%3e%3c/svg%3e");
}

@keyframes progress {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

.animate-progress {
  animation: progress 5s linear forwards;
}
</style>
