<template>
  <div
    class="footer bg-[url('~/assets/svgs/footer-bg.svg')] bg-cover bg-center pt-10 mt-15"
  >
    <div class="container mx-auto px-6 lg:px-12">
      <div class="text-center md:text-left mb-15 font-medium">
        <h2
          class="text-6xl text-[#0D2C65]"
          style="line-height: 70px; letter-spacing: '-2%'"
        >
          Sign up for free <br />Join thousands of users
        </h2>
      </div>

      <div
        class="border-t border-[#6E80A3] pt-12 flex items-center justify-between gap-12"
      >
        <div class="flex gap-20">
          <div>
            <h3 class="font-medium text-[#0D2C65] mb-2">Company</h3>
            <ul class="space-y-2 text-2xl font-light">
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
        <div class="pb-10 pr-6">
          <p class="text-[#0D2C65] text-[18px] mb-4">
            The neo bank for Africans globally
          </p>
          <p class="text-[#6E80A3] text-[18px] font-light">
            Bomba Ltd is a UK-incorporated Company with <br />
            Registration Number (RC. 12551277)
          </p>
        </div>
      </div>

      <div class="pt-50 pb-20 flex justify-between gap-12 items-center">
        <div class="flex flex-col gap-8">
          <div class="mt-8 flex gap-4">
            <a
              href="#"
              class="flex items-center gap-2 border border-[#6E80A3] rounded-md px-5 py-2 hover:shadow-lg transition"
            >
              <img
                src="~/assets/svgs/playstore.svg"
                alt="Google Play"
                class=""
              />
              <div class="flex flex-col">
                <p class="text-[#6E80A3] font-light text-xs">Get it on</p>
                <p class="text-[#0D2C65] text-lg font-medium">Google Play</p>
              </div>
            </a>
            <a
              href="#"
              class="flex items-center gap-2 border border-[#6E80A3] rounded-md px-5 py-2 hover:shadow-lg transition"
            >
              <img src="~/assets/svgs/appstore.svg" alt="App Store" class="" />

              <div class="flex flex-col">
                <p class="text-[#6E80A3] font-light text-xs">
                  Download the app
                </p>
                <p class="text-[#0D2C65] text-lg font-medium">App Store</p>
              </div>
            </a>
          </div>
          <div class="">
            <p class="text-[#0D2C65] text-[15px]">
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

        <div class="flex flex-col self-start">
          <h3 class="text-[#0D2C65] text-lg">Stay updated on our newsletter</h3>
          <div class="mt-4 flex items-center gap-8">
            <input
              type="email"
              placeholder="Enter your email address"
              class="w-[250px] p-4 bg-blue-900 text-[#6E80A3] text-center rounded-l-lg focus:outline-none"
            />
            <button
              class="text-blue-600 hover:underline border-b border-[#2668EC] p-3"
            >
              <span class="flex text-[#2668EC]"
                >Subscribe
                <span class="ml-2 text-[15px]">
                  <ChevronRight size="22" color="#2668EC" />
                </span>
              </span>
            </button>
          </div>
          <div class="mt-10 flex justify-between text-[#6E80A3] font-light">
            <a href="#" class="hover:underline">Instagram</a>
            <a href="#" class="hover:underline">Facebook</a>
            <a href="#" class="hover:underline">LinkedIn</a>
            <a href="#" class="hover:underline">Twitter</a>
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
