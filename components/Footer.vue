<template>
  <div
    class="footer bg-[url('~/assets/svgs/footer-bg.svg')] bg-cover bg-center pt-10 mt-15"
  >
    <div class="container mx-auto px-8 sm:px-6 lg:px-12">
      <div class="text-center md:text-left mb-15 font-medium">
        <h2
          class="text-4xl sm:text-6xl text-[#0D2C65] hidden sm:block"
          style="line-height: 1.2; letter-spacing: '-2%'"
        >
          Sign up for free <br />Join thousands of users
        </h2>

        <h2
          class="text-5xl text-start text-[#233375] block sm:hidden"
          style="line-height: 56px; letter-spacing: -2%"
        >
          Sign up for free <br />Join thousands of users
        </h2>
      </div>

      <div
        class="border-t border-[#6E80A3] pt-12 flex flex-col md:flex-row items-start sm:items-center justify-between gap-12"
      >
        <div class="flex flex-row gap-20">
          <div>
            <h3 class="font-medium text-[#0D2C65] mb-2">Company</h3>
            <ul class="space-y-2 text-2xl sm:text-2xl font-light">
              <li>
                <a href="#" class="text-[#6E80A3] hover:underline">About Us</a>
              </li>
              <li>
                <a href="#" class="text-[#6E80A3] hover:underline">Features</a>
              </li>
              <li>
                <a href="#" class="text-[#6E80A3] hover:underline">Blog</a>
              </li>
              <li>
                <a href="#" class="text-[#6E80A3] hover:underline">Careers</a>
              </li>
              <li>
                <a href="#" class="text-[#6E80A3] hover:underline">Legal</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-medium text-[#0D2C65] mb-2">Support</h3>
            <ul class="space-y-2 text-2xl font-light">
              <li>
                <a
                  href="mailto:hello@bomba.co"
                  class="text-[#6E80A3] hover:underline"
                  >hello@bomba.co</a
                >
              </li>
              <li>
                <a href="#" class="text-[#6E80A3] hover:underline"
                  >WhatsApp ↗</a
                >
              </li>
              <li>
                <a href="#" class="text-[#6E80A3] hover:underline"
                  >Help Center</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="pb-10 pr-6 text-start sm:text-center md:text-left">
          <p class="text-[#0D2C65] text-[18px] mb-4">
            The neo bank for Africans globally
          </p>
          <p
            class="text-[#6E80A3] text-[18px] font-light text-start hidden sm:block"
          >
            Bomba Ltd is a UK-incorporated Company with <br />
            Registration Number (RC. 12551277)
          </p>
          <p
            class="text-[#6E80A3] text-[18px] font-light text-start block sm:hidden"
          >
            Bomba Ltd is a UK-incorporated Company with Registration Number (RC.
            12551277)
          </p>
        </div>
      </div>

      <div
        class="pt-10 sm:pt-50 pb-10 flex flex-col-reverse md:flex-row justify-between gap-12 items-center"
      >
        <div class="flex flex-col gap-8">
          <div class="hidden sm:block">
            <DownloadAppSection />
          </div>
          <div
            class="border-t pt-6 sm:pt-0 sm:border-t-0 sm:text-center md:text-left"
          >
            <p class="text-[#0D2C65] text-[15px]" style="line-height: 1.1">
              © 2022 Bomba Limited. All rights reserved.
            </p>
            <div class="mt-2 space-x-1 text-[#6E80A3] font-light">
              <a href="#" class="text-[15px] hover:underline"
                >Terms of Service</a
              >
              <span class="text-green-500">|</span>

              <a href="#" class="text-[15px] hover:underline">Privacy Policy</a>
              <span class="text-green-500">|</span>

              <a href="#" class="text-[15px] hover:underline">T&C UK</a>
              <span class="text-green-500">|</span>

              <a href="#" class="text-[15px] hover:underline">Cookie Policy</a>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col self-start text-start sm:text-center md:text-left mr-0 sm:mr-4"
        >
          <h3 class="text-[#0D2C65] text-[16px] sm:text-lg font-medium">
            Stay updated by subscribing to our newsletter
          </h3>
          <div class="mt-4 flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              class="w-full sm:w-[250px] p-4 bg-blue-900 text-[#6E80A3] text-center rounded-lg sm:rounded-l-lg focus:outline-none"
            />
            <button
              class="self-start text-blue-600 hover:underline border-b border-[#2668EC] p-3"
            >
              <span class="flex text-[#2668EC]"
                >Subscribe
                <span class="ml-2 text-[15px]">
                  <ChevronRight size="22" color="#2668EC" />
                </span>
              </span>
            </button>
          </div>
          <div class="flex items-center justify-between mt-4">
            <div
              class="mt-10 flex flex-col sm:flex-row justify-between text-[#6E80A3] font-light gap-4 sm-gap-0"
            >
              <a href="#" class="hover:underline">Instagram</a>
              <a href="#" class="hover:underline">Facebook</a>
              <a href="#" class="hover:underline">LinkedIn</a>
              <a href="#" class="hover:underline">Twitter</a>
            </div>
            <div class="block sm:hidden">
              <DownloadAppSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No additional logic needed for now
import { ChevronRight } from "lucide-vue-next";
</script>

<style scoped>
/* Optional custom styles */
.footer {
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
