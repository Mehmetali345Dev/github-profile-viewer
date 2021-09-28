<template>
  <div class="bg-gray-900 text-gray-50 flex flex-col justify-between items-center min-h-[100vh]">
    <Nav />
    <div class="w-full h-full flex items-center" v-if="$fetchState.pending">Fetching...</div>
    <div
      class="w-full h-full flex items-center justify-center"
      v-else-if="data.login === undefined"
    >User not found or api blocked</div>

    <div v-else class="w-full h-full md:flex">
      <div class="m-8">
        <Account :data="data" />
      </div>
      <div class="mt-8 mb-8 md:ml-0 ml-8 mr-8 flex-grow">
        <h1 class="mb-2 text-left w-full font-bold text-xl">Repositories</h1>
        <div class="grid w-full repos gap-4 md:grid-cols-2 justify-center">
          <Repo v-for="(repo, index) in repos" :key="`repo${index}`" :data="repo" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      repos: []
    }
  },
  fetchOnServer: false,
  async fetch() {

    const { data: user } = await this.$axios.get(
      "https://api.github.com/users/" + this.$route.params.user
    );
    this.data = user

    var username = this.$route.params.user
    const filter = [username.toLowerCase()]
    const { data: repos } = await this.$axios.get(
      `https://api.github.com/users/${this.$route.params.user}/repos?per_page=100`);
    this.repos = repos
      ?.filter(repo => !filter.includes(repo.name))
      ?.sort((a, b) => b?.stargazers_count - a?.stargazers_count);
  },
}
</script>

<style>
@media screen and (max-device-width: 950px) {
  .card {
    @apply block w-11/12;
  }
  .repos {
    @apply grid-cols-1;
  }
}
</style>
