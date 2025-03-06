<template>
  <nav
    class="flex justify-center space-x-10 bg-gray-50 px-4 py-6 border-b border-gray-400"
  >
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
        class="absolute z-1 bg-white shadow-lg rounded-lg p-2 mt-2 w-40"
      >
        <ul>
          <li
            v-for="option in item.options"
            :key="option"
            class="p-2 hover:bg-gray-100 cursor-pointer"
          >
            {{ option }}
          </li>
        </ul>
      </div>
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
    const navItems = ref([
      { label: "Features", options: ["Option 1", "Option 2", "Option 3"] },
      { label: "Help", options: [] },
      { label: "Company", options: ["About Us", "Careers"] },
    ]);

    const toggleDropdown = (item) => {
      if (!item.options.length) return;
      dropdown.value = dropdown.value === item?.label ? null : item?.label;
    };

    return { dropdown, navItems, toggleDropdown };
  },
};
</script>

<style>
nav div:hover div {
  display: block;
}
</style>
