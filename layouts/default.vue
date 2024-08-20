<template>
  <div>
    <header>
      <Navbar />
    </header>

    <main>
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Footer from '~/components/Footer.vue';
import Navbar from '~/components/Navbar.vue';
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
main {
  height: 100%;
  width: 100%;
}
</style>
