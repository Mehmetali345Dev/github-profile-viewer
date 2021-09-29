<template>
  <details>
    <summary class="font-bold text-xl">
      Basic Rating
    </summary>
    <div class="grid w-64 items-center space-y-2">
      <h1 class="ratings bg-red-800 rounded-md p-2">Total: {{ rateUser().total }}</h1>

      <div>
        <h1 class="ratings">Twitter: {{ rateUser().twitterp }}</h1>
        <p>If you have a Twitter link in your Github account you will receive a 10 points.</p>
      </div>
      <div>
        <h1 class="ratings">Bio: {{ rateUser().biop }}</h1>
        <p>If your bio is longer than 100 characters you will receive a 50 points.</p>
      </div>
      <div>
        <h1 class="ratings">Website: {{ rateUser().websitep }}</h1>
        <p>If you have a website link in your Github account you will receive a 40 points.</p>
      </div>
    </div>
  </details>
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
  methods: {
    rateUser() {
      var twitterp = 10
      var biop = 50
      var websitep = 40
      if (this.data.bio.length < 100) {
        biop = -50
      }
      if (this.data.twitter_username === null) {
        twitterp = -10
      }
      if (this.data.blog === null) {
        websitep = -40
      }
      var total = biop + websitep + twitterp

      return {
        total,
        biop,
        websitep,
        twitterp,
      }
    }
  }
}
</script>

<style>
</style>
