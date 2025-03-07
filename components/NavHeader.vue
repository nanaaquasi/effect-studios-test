<template>
  <nav
    class="flex justify-between items-center bg-[#F8F9FE] px-4 py-6 sm:border-b border-gray-400"
  >
    <div class="flex-1 sm:flex justify-center space-x-10 hidden md:flex">
      <div v-for="item in navItems" :key="item.label" class="relative group">
        <button
          @click="toggleDropdown(item)"
          class="text-[#6E80A3] hover:text-gray-900 flex items-center cursor-pointer"
        >
          {{ item.label }}
          <ChevronDown
            v-if="item.options.length"
            :size="16"
            class="ml-1 text-green-500"
          />
        </button>
        <div
          v-if="dropdown === item.label"
          class="absolute z-1 bg-[#F8F9FE] shadow-lg rounded-lg p-2 mt-2 w-40"
        >
          <ul>
            <a href="/press">
              <li
                v-for="option in item.options"
                :key="option"
                class="p-2 hover:bg-gray-100 cursor-pointer"
              >
                {{ option }}
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
    <button
      @click="toggleMobileMenu"
      class="md:hidden text-[#6E80A3] hover:text-gray-900 flex items-center cursor-pointer ml-auto"
    >
      <img src="~/assets/svgs/hamburger-icon.svg" alt="menu" />
    </button>
    <div
      v-if="isMobileMenuOpen"
      class="absolute top-14 left-0 bg-[#F8F9FE] shadow-lg rounded-lg p-2 w-full md:hidden z-10"
    >
      <ul class="flex flex-col items-center justify-items-start">
        <li
          v-for="item in navItems"
          :key="item.label"
          class="p-2 hover:bg-gray-100 cursor-pointer text-left"
        >
          <button
            @click="toggleDropdown(item)"
            class="text-[#6E80A3] hover:text-gray-900 flex items-center cursor-pointer text-start self-start"
          >
            {{ item.label }}
          </button>
          <div
            v-if="dropdown === item.label"
            class="bg-white rounded-lg p-2 mt-2 w-full"
          >
            <ul>
              <li
                v-for="option in item.options"
                :key="option"
                class="p-2 hover:bg-gray-100 cursor-pointer"
              >
                <a href="/press">
                  {{ option }}
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";
import { ChevronDown } from "lucide-vue-next";

export default {
  components: { ChevronDown },
  setup() {
    const dropdown = ref(null);
    const isMobileMenuOpen = ref(false);
    const navItems = ref([
      { label: "Features", options: ["Press"] },
      { label: "Help", options: [] },
      { label: "Company", options: ["About Us", "Careers"] },
    ]);

    const toggleDropdown = (item) => {
      if (!item.options.length) return;
      dropdown.value = dropdown.value === item?.label ? null : item?.label;
    };

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    return {
      dropdown,
      navItems,
      toggleDropdown,
      isMobileMenuOpen,
      toggleMobileMenu,
    };
  },
};
</script>

<style>
@media (max-width: 768px) {
  .text-center {
    text-align: center;
  }
}
</style>
