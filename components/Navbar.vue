<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <img src="/images/logo.png" alt="FURIA Logo" />
    </div>
    <ul class="navbar-links">
      <li><NuxtLink to="/" exact-active-class="active">Home</NuxtLink></li>
      <!-- <li>
        <NuxtLink to="/about" exact-active-class="active">About</NuxtLink>
      </li>
      <li><NuxtLink to="/team" exact-active-class="active">Team</NuxtLink></li>
      <li><NuxtLink to="/news" exact-active-class="active">News</NuxtLink></li>
      <li>
        <NuxtLink to="/merch" exact-active-class="active">Merch</NuxtLink>
      </li> -->
    </ul>
  </nav>
</template>

<script setup></script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 10;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: rgb(0 0 0 / 5%);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);

  &-logo img {
    height: 50px;
  }

  &-links {
    display: flex;
    list-style: none;
    li {
      margin-right: 20px;
    }
    a {
      color: #ffffff;
      text-decoration: none;
      text-align: center;
      font-family: Poppins, sans-serif;
      font-size: 24px;
      text-transform: uppercase;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      &:hover {
        color: #8f5d0f;
      }
    }
    .active {
      color: #8f5d0f;
    }
  }
}
</style>
