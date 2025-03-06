<template>
  <div
    class="relative w-full h-[92vh] overflow-hidden bg-[#F8F9FE] flex flex-col"
  >
    <div class="flex-grow flex items-center justify-center w-full relative">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        :class="[
          'absolute inset-0 flex flex-col justify-center gap-8 px-10 transition-all duration-1000 ease-in-out',
          currentIndex === index
            ? 'opacity-100 translate-x-0'
            : index < currentIndex
            ? 'opacity-0 -translate-x-full'
            : 'opacity-0 translate-x-full',
        ]"
      >
        <div class="flex items-center justify-center">
          <div
            class="relative w-[250px] h-[500px] rounded-[40px] bg-black shadow-2xl border-8 border-[#63C57B] overflow-hidden"
          >
            <!-- Screen -->
            <div
              class="absolute inset-0 bg-[#233375] flex items-center justify-center text-center"
            ></div>
          </div>
        </div>

        <div class="flex justify-between px-7">
          <h2
            class="font-medium text-blue-900 mb-4 w-[55vw]"
            v-html="slide.title"
            style="line-height: 1.1; font-size: 64px"
          ></h2>
          <div class="flex items-end w-[40vw]">
            <p
              class="text-md text-[#233375] mb-4"
              v-html="slide.description"
            ></p>
          </div>
        </div>
      </div>
    </div>

    <!-- Slide Indicators -->
    <div class="w-full bg-gray-300 flex justify-center gap-12 h-[2px]">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="h-[2px] w-[220px] bg-gray-300 rounded-full overflow-hidden cursor-pointer"
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

    <div class="flex px-16 py-7 align-center justify-between">
      <div class="flex gap-6">
        <p class="text-[#6E80A3] font-light">News & Release update</p>
        <div class="flex flex-col">
          <div class="flex gap-1">
            <p class="text-[#6E80A3] font-light">June 01, 2022 —</p>
            <a href="#" class="text-[#2668EC]"
              >Bomba now has a dollar wallet, activate your account</a
            >
          </div>
          <div class="flex gap-1">
            <p class="text-[#6E80A3] font-light">June 01, 2022 —</p>
            <a class="text-[#2668EC]" href="#"
              >Top 10 Summer Vacation Places In 2022</a
            >
          </div>
        </div>
      </div>

      <a href="#features-section" class="flex gap-2">
        <p class="text-2xl text-medium mb-1 text-[#233375]">Scroll Down</p>
        <ArrowDown color="#63C57B" />
      </a>
    </div>

    <div class="dotted-line"></div>
  </div>
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
/* @keyframes progress {
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

.animate-fade-in {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
} */
</style>
