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
    </div>
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
    }
  }
}
</script>

<style>
@media screen and (max-device-width: 950px) {
  .card {
    @apply block;
  }
}
</style>
