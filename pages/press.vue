<template>
  <main>
    <div
      class="news-media-section bg-[url('~/assets/svgs/press-bg.svg')] bg-cover bg-center px-4 py-25 sm:p-16"
    >
      <div
        class="container flex flex-col justify-start items-start gap-2 px-4 sm:px-20"
      >
        <h2
          class="hidden sm:block text-5xl sm:text-[70px] font-medium text-[#233375]"
          style="line-height: 77px; letter-spacing: -2%"
        >
          Latest news and media <br />
          from around the world
        </h2>

        <h2
          class="block sm:hidden text-5xl sm:text-[70px] font-medium text-[#233375]"
          style="line-height: 56px; letter-spacing: -2%"
        >
          Latest news <br />
          and media from the Bomba Clan
        </h2>
        <p
          class="mt-4 sm:mt-6 text-2xl sm:text-2xl text-[#6E80A3] font-light"
          style="line-height: 1.5"
        >
          Please write to us at
          <a href="mailto:media@bomba.co" class="">media@bomba.co</a>
          if you have a <br />
          media enquiry. We'll do our best to get back to you as<br />
          soon as possible.
        </p>
        <div class="mt-4 sm:mt-6">
          <a
            href="#"
            class="text-[#2668EC] font-medium flex items-center justify-center gap-2 border-b border-[#2668EC] py-2 sm:py-4"
          >
            Get press kit ↗
          </a>
        </div>
      </div>
    </div>

    <section class="container px-4 sm:px-8 mx-auto my-35 sm:my-30">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-12 gap-y-15 sm:gap-y-20"
      >
        <NewsCard
          v-for="(news, index) in newsCards"
          :key="index"
          :category="news.category"
          :title="news.title"
          :date="news.date"
          :image="news.image"
        >
          <template #news-img>
            <img
              :src="`/${news.image}.svg`"
              alt="news"
              class="w-full h-32 sm:h-48 object-cover"
            />
          </template>
        </NewsCard>
      </div>
    </section>

    <Footer />
  </main>
</template>

<script setup>
const newsCards = [
  {
    category: "Connecting Africa",
    title: "Combining AI, fintech to solve African problems – Ericsson",
    date: "December 06, 2021",
    image: "1",
  },
  {
    category: "Tech Labari",
    title: "Ghana to Host the 14th Africa Fintech Summit on October 8th",
    date: "May 24, 2022",
    image: "2",
  },
  {
    category: "Techstars",
    title: "Midterm Report: Techstars Toronto’s Second 2021 Class",
    date: "Dec 06, 2021",
    image: "3",
  },
  {
    category: "Medium",
    title:
      "Wise granted approval to join Zengin, Japan’s domestic payment system",
    date: "December 06, 2021",
    image: "4",
  },
  {
    category: "Further Africa",
    title:
      "African startups to participate at Techstars Toronto October 2021 cohort",
    date: "October 23, 2021",
    image: "5",
  },
  {
    category: "TechCrunch",
    title: "More African startups get into Techstars Toronto",
    date: "October 18, 2021",
    image: "6",
  },
];
</script>

<style scoped>
.news-media-section {
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
