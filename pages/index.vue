<template>
  <div class="flex flex-col">
    <HeroSlider :slides="slides" />

    <main class="container mx-auto px-6 lg:px-12 mb-20">
      <!-- Mission section -->
      <section
        class="w-full flex flex-col items-center justify-center py-30 mb-15"
      >
        <div class="w-3/4 mx-auto flex justify-center">
          <p
            class="text-4xl text-[#233375] text-center font-medium"
            style="line-height: 1.1"
          >
            We are on a mission to reduce the cost of sending <br />
            money to Africa at an average cost of 1%
          </p>
        </div>

        <div class="flex items-center justify-center mt-10 gap-20">
          <CurrencyConverter />
          <section class="py-16 bg-white w-2/4">
            <h3 class="text-lg text-[#6E80A3] mb-2">Why Bomba?</h3>
            <h2
              class="text-[60px] font-medium text-[#0D2C65] leading-none mb-6"
            >
              Send & Receive <br />
              money on your own <br />
              terms
            </h2>
            <p class="text-lg text-[#6E80A3] max-w-3xl mx-auto leading-relaxed">
              Bomba provides you the luxury of sending money at rates that suit
              you. You can easily send and swap money between
              <strong class="text-blue-900">GBP</strong>,
              <strong class="text-blue-900">USD</strong>,
              <strong class="text-blue-900">NGN</strong> and up to 20 other
              African countries using Bomba’s
              <span class="text-green-500">'Swap'</span> and
              <span class="text-green-500">'Express'</span> services. Beat bank
              rates, save time and gain more.
            </p>
          </section>
        </div>
      </section>

      <!-- Features section -->

      <section
        id="features-section"
        class="w-full flex flex-col justify-center py-30"
      >
        <div class="w-4/4 mx-auto flex flex-col justify-center text-center">
          <p
            class="text-[40px] text-[#233375] text-center font-medium"
            style="line-height: 50px"
          >
            The Bomba app help our users send & receive money,<br />swap
            currencies across borders and pay bills, safely, <br />
            conveniently, cheaply and on time.
          </p>

          <p
            class="text-base text-center text-[#6E80A3] max-w-3xl mx-auto mt-5"
          >
            We are customer centric and focused on offering values to you that
            enable you <br />
            achieve your financial needs.
          </p>
        </div>

        <div class="w-full flex justify-center items-center gap-15 my-15">
          <div class="flex flex-col items-center justify-center gap-15">
            <FeaturesCard :card="cards[0]">
              <template #image-bg>
                <img
                  src="~/assets/svgs/p2p.svg"
                  alt="Peer to peer marketplace illustration"
                  class="absolute bottom-0 right-0 w-5/5"
                />
              </template>
            </FeaturesCard>
            <FeaturesCard :card="cards[2]">
              <template #image-bg>
                <img
                  src="~/assets/svgs/referral.svg"
                  alt="Peer to peer marketplace illustration"
                  class="absolute bottom-0 right-0 w-5/5"
                />
              </template>
            </FeaturesCard>
          </div>

          <div class="flex flex-col gap-15">
            <FeaturesCard :card="cards[1]">
              <template #image-bg>
                <img
                  src="~/assets/svgs/express.svg"
                  alt="Express money transfer illustration"
                  class="absolute bottom-0 right-0 w-5/5"
                />
              </template>
            </FeaturesCard>
            <FeaturesCard :card="cards[3]">
              <template #image-bg>
                <img
                  src="~/assets/svgs/connect.svg"
                  alt="Deals from top brands illustration"
                  class="absolute bottom-0 right-0 w-5/5"
                />
              </template>
            </FeaturesCard>
          </div>
        </div>
      </section>

      <!-- Trusted partners section -->

      <section class="w-full flex justify-center py-30 gap-10">
        <div class="w-1/2 flex flex-col">
          <h3
            class="text-[60px] text-[#0D2C65] leading-none font-medium mb-2"
            style="line-height: 1.2"
          >
            Trusted partners <br />
            worldwide
          </h3>
          <h2 class="text-[#6E80A3] mb-6">
            We're partners with countless major organisations <br />around the
            globe
          </h2>
        </div>

        <div class="w-[600px] flex flex-wrap gap-8">
          <BrandLogo
            v-for="(logo, index) in brandLogos"
            :key="index"
            :defaultSrc="logo.defaultSrc"
            :hoverSrc="logo.hoverSrc"
            :altText="logo.altText"
          />
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
const identityLogoDefault = "/identity.svg";
const identityLogoHover = "/identity-hover.svg";

const slides = [
  {
    title: "Multi-currency<br/> accounts for Africans",
    description:
      "Transact at home and abroad - create, send, hold and receive money in African and foreign currencies. Send money to and from Africa, seamlessly.",
    link: "#",
    linkText: "Get Started",
  },
  {
    title: "Choose from several <br/> payment methods",
    description:
      "With Bomba, you get to choose how you send and receive money; send at your own rate with <a href='#' class='text-green-400'>'Swap'</a>, send and receive instantly with <a href='#' class='text-green-400'>'Express'</a>,  or make free local transfers with <a href='#' class='text-green-400'>'Withdraw Money'.</a>",
    link: "#",
    linkText: "Discover More",
  },
  {
    title: "Accept and create offers<br/> with Swap",
    description:
      "You can send money internationally at your preferred rate on our <a  href='#' class='text-green-400'>Peer-to-peer Marketplace</a> by choosing or accepting an offer. Created offers get accepted within an average time of 30 minutes.",
    link: "#",
    linkText: "Learn More",
  },
  {
    title: "Make instant transfers <br/> with Express.",
    description:
      "When you send money using <a class='text-green-400' href='#'>'Express'</a> - it’s sent at Bomba exchange rate and your transaction is completed instantly.",
    link: "#",
    linkText: "Learn More",
  },
  {
    title: "Review and confirm <br/> your transaction",
    description:
      "Review your transaction, ensure that the provided details are correct, then click the send button!",
    link: "#",
    linkText: "Learn More",
  },
  {
    title: "Completed! <br/> Fast, easy and secure ",
    description:
      "Money on its way! Send money today to your friends, family or make payment to a business. <a href='#'>Get started <span class='text-green-400'>→</span></a> ",
    link: "#",
    linkText: "Learn More",
  },
];

const cards = [
  {
    category: "Swap",
    title: "Peer to peer marketplace",
    description:
      "Do you worry about unfavourable exchange rates when sending money? Create or accept offers at your preferred rate on Bomba’s Peer to peer marketplace.",
    ctaText: "Swap now",
    imageSrc: "~/assets/svgs/p2p.svg",
    imageAlt: "Peer to peer marketplace illustration",
    bgColor: "bg-[#6D48FF]/10",
    subTextColor: "text-purple-500",
    titleColor: "text-blue-900",
    descColor: "text-blue-800",
    borderColor: "border-blue-800",
    minHeight: "h-[650px]",
  },
  {
    category: "Express",
    title: "Take the express lane",
    description:
      "Transact with light speed using Bomba Express. You can send funds at Bomba’s exchange rates to family and friends from the UK & US to 20 African countries.",
    ctaText: "Send now",
    imageSrc: "~/assets/svgs/express.svg",
    imageAlt: "Express money transfer illustration",
    bgColor: "bg-[#04CE9D]/10",
    subTextColor: "text-green-500",
    titleColor: "text-blue-900",
    descColor: "text-blue-800",
    borderColor: "border-blue-800",
    minHeight: "h-[750px]",
  },
  {
    category: "Refer & Earn",
    title: "Make money while you refer",
    description:
      "Bomba allows you to earn passively through its platform. Refer your friends and family to use Bomba and earn up to £140.",
    ctaText: "Share now",
    imageSrc: "~/assets/svgs/referral.svg",
    imageAlt: "Refer and earn illustration",
    bgColor: "bg-[#6E80A3]/10",
    subTextColor: "text-blue-500",
    titleColor: "text-blue-900",
    descColor: "text-blue-800",
    borderColor: "border-blue-800",
    minHeight: "h-[750px]",
  },
  {
    category: "Bomba Connect",
    title: "Deals from top brands",
    description:
      "With Bomba Connect, you can pay for and access goods and services from some of the best and trusted brands - at the best rates and with minimal wait time - all within the Bomba App.",
    ctaText: "Explore now",
    imageSrc: "~/assets/svgs/connect.svg",
    imageAlt: "Deals from top brands illustration",
    bgColor: "bg-[#EF845C]/10",
    subTextColor: "text-orange-500",
    titleColor: "text-blue-900",
    descColor: "text-blue-800",
    borderColor: "border-blue-800",
    minHeight: "h-[650px]",
  },
];

const brandLogos = [
  {
    defaultSrc: "v.svg",
    hoverSrc: "v-hover.svg",
    altText: "V Logo",
  },
  {
    defaultSrc: "/thunes.svg",
    hoverSrc: "/thunes-hover.svg",
    altText: "Thunes Logo",
  },
  {
    defaultSrc: "/truelayer.svg",
    hoverSrc: "/truelayer-hover.svg",
    altText: "True Layer Logo",
  },

  {
    defaultSrc: "/access.svg",
    hoverSrc: "/access-hover.svg",
    altText: "Access Bank Logo",
  },

  {
    defaultSrc: "/railsr.svg",
    hoverSrc: "/railsr-hover.svg",
    altText: "Railsbank Logo",
  },
  {
    defaultSrc: "trunarrative.svg",
    hoverSrc: "trunarrative-hover.svg",
    altText: "Tru Narrative Logo",
  },
  {
    defaultSrc: "/paga.svg",
    hoverSrc: "/paga-hover.svg",
    altText: "Paga Logo",
  },
  {
    defaultSrc: "/solid.svg",
    hoverSrc: "/solid-hover.svg",
    altText: "Solid Trust Bank Logo",
  },
  //   {
  //     defaultSrc: "/stitch.svg",
  //     hoverSrc: "/stitch-hover.svg",
  //     altText: "Stitch Logo",
  //   },

  {
    defaultSrc: "/identity.svg",
    hoverSrc: "/identity-hover.svg",
    altText: "IdentityPass Logo",
  },
];
</script>
