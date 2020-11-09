<template>

  <div class="h-screen">
    <div  class ="mx-auto h-full flex justify-center items-center">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred</h1>
      <NuxtLink to="/">Home page</NuxtLink>
    </div>
  </div>
</template>

<script>
    export default {
        props: ['error'],
        layout: 'error' // you can set a custom layout for the error page
    }
</script>

<style scoped>

  center {
    margin: 15vw;
  }
  .not-found{
    height: 100%;
  }

  h1 {
    color: var(--border);
    font-size: 2em;
  }

</style>
