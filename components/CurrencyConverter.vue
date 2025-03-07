<template>
  <div class="p-6 bg-white w-full sm:w-2/3 lg:w-1/3 pr-0 sm:pr-10">
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
          class="bg-blue-900 w-2/4 h-full text-center justify-center text-white px-2 py-2 flex items-center gap-2 cursor-pointer"
          @click="showFromCurrencyDropdown = !showFromCurrencyDropdown"
        >
          <span :class="`fi fi-${currencyFlags[fromCurrency]}`"></span>
          {{ fromCurrency }}
          <span class="ml-2">▼</span>
        </div>
        <div
          v-if="showFromCurrencyDropdown"
          class="absolute bg-white border mt-2 w-full z-10"
        >
          <div
            v-for="currency in currencies"
            :key="currency"
            class="px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center gap-2"
            @click="selectFromCurrency(currency)"
          >
            <span :class="`fi fi-${currencyFlags[currency]}`"></span>
            {{ currency }}
          </div>
        </div>
      </div>
      <div class="relative flex items-center mt-2">
        <div class="absolute w-px bg-gray-300 h-12 left-3 top-[-8px]"></div>
        <div
          class="w-6 h-6 rounded-full mt-1 bg-black flex items-center justify-center border-2 border-gray-300 z-10"
        >
          <span class="text-green-500 text-lg">-</span>
        </div>
        <div class="ml-2 text-sm text-gray-500">{{ formattedFee }} Fee</div>
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
          v-model="formattedConvertedAmount"
          type="text"
          class="w-full h-full px-3 py-2 outline-none text-[#0D2C65] font-medium text-2xl"
          readonly
        />
        <div
          class="bg-blue-900 text-white px-2 w-2/4 h-full py-3 flex justify-center items-center gap-2 cursor-pointer"
          @click="showToCurrencyDropdown = !showToCurrencyDropdown"
        >
          <span :class="`fi fi-${currencyFlags[toCurrency]}`"></span>
          {{ toCurrency }}
          <span class="ml-2">▼</span>
        </div>
        <div
          v-if="showToCurrencyDropdown"
          class="absolute bg-white border mt-2 w-full z-10"
        >
          <div
            v-for="currency in currencies"
            :key="currency"
            class="px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center gap-2"
            @click="selectToCurrency(currency)"
          >
            <span :class="`fi fi-${currencyFlags[currency]}`"></span>
            {{ currency }}
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-3 my-4">
      <div class="flex justify-between">
        <div class="flex flex-col gap-1">
          <p class="text-xs text-[#6F6F6F]">Amount we'll convert</p>
          <p class="text-[#0D2C65] text-lg">
            {{ formattedAmount }}
          </p>
        </div>

        <div class="flex flex-col gap-1 text-right">
          <div class="flex items-center text-xs">
            <Clock color="#23CE6B" size="15" />
            <p class="text-xs text-[#6F6F6F] ml-1">Guaranteed rate (1 hr)</p>
          </div>
          <p class="text-[#0D2C65]">
            {{ fromCurrency }}1 / {{ toCurrency }}{{ rate }}
          </p>
        </div>
      </div>

      <div class="flex justify-between">
        <div class="flex flex-col gap-1">
          <p class="text-xs text-[#6F6F6F]">Total to Pay</p>
          <p class="text-[#0D2C65] text-lg">
            {{ formattedTotalToPay }} {{ fromCurrency }}
          </p>
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
import { ref, computed, watch, onMounted } from "vue";
import { Clock } from "lucide-vue-next";

const amount = ref(100);
const rate = ref(0);
const fee = ref(0);
const convertedAmount = ref(0);
const fromCurrency = ref("GBP");
const toCurrency = ref("GHS");
const showFromCurrencyDropdown = ref(false);
const showToCurrencyDropdown = ref(false);
const currencies = ["GBP", "USD", "EUR", "GHS", "NGN"];

const currencyFlags = {
  GBP: "gb",
  USD: "us",
  EUR: "eu",
  GHS: "gh",
  NGN: "ng",
};

const totalToPay = computed(() =>
  (parseFloat(amount.value) + parseFloat(fee.value)).toFixed(2)
);

const formattedAmount = computed(() =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: fromCurrency.value,
  }).format(amount.value)
);

const formattedFee = computed(
  () =>
    `${new Intl.NumberFormat("en-GB", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(fee.value)} ${fromCurrency.value}`
);

const formattedTotalToPay = computed(
  () =>
    `${new Intl.NumberFormat("en-GB", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(totalToPay.value)}`
);

const formattedConvertedAmount = computed(
  () =>
    `${new Intl.NumberFormat("en-GB", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(convertedAmount.value)}`
);

watch([fromCurrency, toCurrency], async () => {
  await fetchExchangeRate();
  convertCurrency();
});

async function fetchExchangeRate() {
  try {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${fromCurrency.value}`
    );
    const data = await response.json();
    rate.value = data.rates[toCurrency.value];
    convertCurrency();
  } catch (error) {
    console.error("Error fetching exchange rate:", error);
  }
}

function convertCurrency() {
  fee.value = (amount.value * 0.01).toFixed(2);
  if (amount.value) {
    convertedAmount.value = (parseFloat(amount.value) * rate.value).toFixed(2);
  } else {
    convertedAmount.value = 0;
  }
}

function selectFromCurrency(currency) {
  fromCurrency.value = currency;
  showFromCurrencyDropdown.value = false;
}

function selectToCurrency(currency) {
  toCurrency.value = currency;
  showToCurrencyDropdown.value = false;
}

onMounted(async () => {
  await fetchExchangeRate();
  convertCurrency();
});
</script>

<style>
@import "flag-icons/css/flag-icons.min.css";
body {
  background-color: #f9fafb;
}
</style>
