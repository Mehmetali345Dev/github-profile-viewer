<template>
  <div class="px-2 text-gray-50 py-4 bg-gray-800 rounded-xl">
    <img :src="data.avatar_url" class="rounded-full w-64" :alt="data.login" />
    <div class="flex flex-col space-y-2 justify-center mx-4">
      <h1 class="text-xl font-bold">{{ data.login }}</h1>
      <p class="w-64">{{ data.bio }}</p>
      <div class="py-1 px-2 bg-gray-700 w-max rounded-md">{{ getLocation }}</div>
      <div class="flex space-x-3">
        <div class="py-1 px-2 bg-gray-700 w-max rounded-md">Followers: {{ data.followers }}</div>
        <div class="py-1 px-2 bg-gray-700 w-max rounded-md">Following: {{ data.following }}</div>
      </div>
      <div class="flex justify-center bg-red-800 rounded-md p-4 font-bold" v-if="getTwitter">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          class="mr-2"
          viewBox="0 0 24 24"
          fill="#1DA1F2"
        >
          <path
            d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z"
          />
        </svg>
        {{ data.twitter_username }}
      </div>
      <a
        v-if="data.blog"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center justify-center font-bold p-4 bg-red-800 rounded-md"
        :href="getWebsite"
        title="See user's website"
      >
        <img
          :src="`https://s2.googleusercontent.com/s2/favicons?domain=${getWebsite}`"
          class="w-5 h-5 rounded-md mr-2"
        />
        {{ getWebsite }}
      </a>
    </div>
    <Rating :data="data" />
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
      default: () => { },
    },
  },
  computed: {
    getLocation() {
      if (this.data.location === null) {
        return "Anywhere in the Universe"
      }
      else {
        return this.data.location
      }
    },
    getTwitter() {
      if (this.data.twitter_username === null) {
        return false;
      }
      else {
        return true;
      }
    },
    getWebsite() {
      if (this.data.blog.includes("https://")) {
        return this.data.blog
      }
      else if (this.data.blog.includes("www.")) {
        return `https://${this.data.blog}`
      }
      else {
        return `https://${this.data.blog}`
      }
    },
  },
}
</script>

<style>
@media screen and (max-device-width: 950px) {
  .card {
    @apply block;
  }
}
.ratings {
  @apply font-bold text-lg;
}
</style>
