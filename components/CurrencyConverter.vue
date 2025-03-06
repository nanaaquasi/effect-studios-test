<template>
  <div class="p-6 bg-white w-1/3 pr-10">
    <div class="w-full mb-4 relative">
      <label
        for="amount"
        class="absolute top-[-7px] left-4 text-xs text-gray-400 bg-white px-1"
        >You send</label
      >
      <div
        class="flex h-[60px] w-full items-center border rounded-r-2xl border-gray-300 overflow-hidden mt-4"
      >
        <input
          id="amount"
          v-model="amount"
          type="number"
          class="w-full h-full px-3 py-2 outline-none text-[#0D2C65] font-medium text-2xl"
          placeholder="Amount"
          @input="convertCurrency"
        />
        <div
          class="bg-blue-900 w-2/4 h-full text-center justify-center text-white px-2 py-2 flex items-center gap-2"
        >
          🇬🇧 GBP
        </div>
      </div>
      <div class="relative flex items-center mt-2">
        <div class="absolute w-px bg-gray-300 h-12 left-3 top-[-8px]"></div>
        <div
          class="w-6 h-6 rounded-full mt-1 bg-black flex items-center justify-center border-2 border-gray-300 z-10"
        >
          <span class="text-green-500 text-lg">-</span>
        </div>
        <div class="ml-2 text-sm text-gray-500">{{ fee }} GBP Fee</div>
      </div>
    </div>

    <div class="w-full mb-4 relative">
      <label
        for="convertedAmount"
        class="absolute top-[-7px] left-4 text-xs text-gray-400 bg-white px-1"
        >Recipient Gets</label
      >
      <div
        class="flex h-[60px] w-full items-center border rounded-r-2xl border-gray-300 overflow-hidden mt-4"
      >
        <input
          id="convertedAmount"
          v-model="convertedAmount"
          type="text"
          class="w-full h-full px-3 py-2 outline-none text-[#0D2C65] font-medium text-2xl"
          readonly
        />
        <div
          class="bg-blue-900 text-white px-2 w-2/4 h-full py-3 flex justify-center items-center gap-2"
        >
          🇬🇭 GHS
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-3 my-4">
      <div class="flex justify-between">
        <div class="flex flex-col gap-1">
          <p class="text-xs text-[#6F6F6F]">Amount we'll convert</p>
          <p class="text-[#0D2C65] text-lg">
            {{ amount.toFixed(2) }}
          </p>
        </div>

        <div class="flex flex-col gap-1 text-right">
          <div class="flex items-center text-xs">
            <Clock color="#23CE6B" size="15" />
            <p class="text-xs text-[#6F6F6F] ml-1">Guaranteed rate (1 hr)</p>
          </div>
          <p class="text-[#0D2C65]">£1 / GHS{{ rate }}</p>
        </div>
      </div>

      <div class="flex justify-between">
        <div class="flex flex-col gap-1">
          <p class="text-xs text-[#6F6F6F]">Total to Pay</p>
          <p class="text-[#0D2C65] text-lg">{{ totalToPay }} GBP</p>
        </div>

        <div class="flex flex-col gap-1 text-right">
          <p class="text-xs text-[#6F6F6F]">Average duration</p>
          <p class="text-[#0D2C65]">Instant</p>
        </div>
      </div>
    </div>

    <button
      class="w-full bg-blue-900 text-white py-4 rounded-lg text-center hover:bg-blue-700 transition"
    >
      Get started for free
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { Clock } from "lucide-vue-next";

const amount = ref(1000);
const rate = ref(1.19);
const fee = ref(2.99);
const convertedAmount = ref(0);

const totalToPay = computed(() =>
  (parseFloat(amount.value) + fee.value).toFixed(2)
);

function convertCurrency() {
  if (amount.value) {
    convertedAmount.value = (parseFloat(amount.value) * rate.value).toFixed(2);
  } else {
    convertedAmount.value = 0;
  }
}

onMounted(() => {
  convertCurrency();
});
</script>

<style>
body {
  background-color: #f9fafb;
}
</style>
