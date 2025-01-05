<template>
  <div class="hero-wrap js-fullheight" :style="{ backgroundImage: `url(${backgroundImage})` }"
    :data-stellar-background-ratio="stellarBackgroundRatio">
    <!-- :style="{ backgroundImage: `url(${backgroundImage})` }" -->
    <div class="overlay"></div>
    <div class="container">
      <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center"
        data-scrollax-parent="true">
        <div class="col-md-8 ftco-animate text-center" :data-scrollax="scrollaxProperties">
          <div class="icon">
            <a :href="logoLink" class="logo link-underline-opacity-0">
              <span class="flaticon-flower"></span>
              <h1 class="">{{ logoText }}</h1>
            </a>
          </div>
          <h1 class="mb-4" :data-scrollax="headerScrollaxProperties">
            {{ title }}
          </h1>
          <p class="mb-5" :data-scrollax="descriptionScrollaxProperties">
            4425 Groom Rd, Baker, LA, 70714
            <!-- Created by <a :href="creatorLink">{{ creatorName }}</a> -->
          </p>
          <p :data-scrollax="buttonScrollaxProperties">
            <a :href="buttonLink" class="btn btn-primary btn-outline-white px-4 py-3">
              {{ buttonText }}
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
  props: {
    backgroundImage: {
      type: String,
      // default: "@/assets/images/bg_1.jpg",  
      default: '../assets/images/bg_1.jpg',

    },
    stellarBackgroundRatio: {
      type: String,
      default: "0.5",
    },
    logoLink: {
      type: String,
      default: "index.html",
    },
    logoText: {
      type: String,
      default: "Pretty",
    },
    title: {
      type: String,
      default: "Beauty Salon",
    },
    creatorLink: {
      type: String,
      default: "#",
    },
    creatorName: {
      type: String,
      default: "Colorlib.com",
    },
    buttonLink: {
      type: String,
      default: "https://vimeo.com/45830194",
    },
    buttonText: {
      type: String,
      default: "View Our Services",
    },
    scrollaxProperties: {
      type: String,
      default: "properties: { translateY: '70%' }",
    },
    headerScrollaxProperties: {
      type: String,
      default: "properties: { translateY: '30%', opacity: 1.6 }",
    },
    descriptionScrollaxProperties: {
      type: String,
      default: "properties: { translateY: '30%', opacity: 1.6 }",
    },
    buttonScrollaxProperties: {
      type: String,
      default: "properties: { translateY: '30%', opacity: 1.6 }",
    },
  },
};
</script>
<style></style>