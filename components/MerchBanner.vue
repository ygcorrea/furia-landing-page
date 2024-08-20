<template>
  <section class="merch-banner" @click="goToMerchPage">
    <img
      src="public\images\merch-banner.png"
      alt="Merch Banner"
      class="banner-image"
    />
  </section>
</template>

<script setup>
function goToMerchPage() {
  navigateTo('/merch');
}
</script>

<style scoped lang="scss">
.merch-banner {
  margin-top: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  .banner-image {
    width: 100%;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
}
</style>
