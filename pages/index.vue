<template>
  <div class="bg-gray-900 flex flex-col items-center h-[100vh]">
    <Nav />
    <div class="w-full h-full flex justify-center items-center">
      <div class="gap-4 grid m-4">
        <div class="justify-center flex flex-col space-y-3 items-start">
          <h1 class="text-gray-50 font-bold text-xl">Search user</h1>
          <input
            v-model="user"
            placeholder="Search an user"
            type="text"
            class="bg-gray-800 p-4 w-full text-gray-50 rounded-md"
          />
          <nuxt-link
            :to="{ name: 'u-user', params: { user: user } }"
            class="bg-red-600 flex justify-center p-4 rounded-md font-bold text-gray-50 w-full"
          >Go!</nuxt-link>
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
      user: ""
    }
  }
}
</script>
