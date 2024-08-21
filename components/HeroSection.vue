<template>
  <section class="hero">
    <div class="overlay">
      <h1 class="hero-title">LET’S GET FURIOUS</h1>
      <Carousel class="carousel" />
    </div>
    <div class="cta-buttons">
      <button class="cta-button" @click="store.showAllMatches">
        ALL MATCHES
      </button>
      <button class="cta-button" @click="store.showUpcomingMatches">
        UPCOMING EVENTS
      </button>
      <button class="cta-button" @click="store.showRecentResults">
        RECENT RESULTS
      </button>
    </div>
  </section>
</template>

<script setup>
import Carousel from '@/components/Carousel.vue';
import { useTournamentResultsStore } from '@/stores/tournamentResultsStore.js';

const store = useTournamentResultsStore();
</script>

<style scoped lang="scss">
.hero {
  background: url('/images/black-white-bg.png') no-repeat center bottom;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -20px;

  &-title {
    color: #fff;
    font-family: 'Anton', sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    position: relative;
    top: 10px;

    @media (min-width: 768px) {
      font-size: 124px;
      top: 20px;
    }
  }
  .cta-buttons {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 40px;
    top: 160px;
    position: relative;
    z-index: 0;
    padding: 20px;
    @media (min-width: 768px) {
      flex-direction: row;
      gap: 77px;
    }
    .cta-button {
      background-color: white;
      border: 5px solid #8f5d0f;
      padding: 10px 20px;
      font-weight: bold;
      color: #000000;
      border-radius: 20px;
      width: 100%;
      height: 70px;
      cursor: pointer;
      font-size: 18px;
      line-height: normal;
      text-transform: uppercase;
      transition: color 0.3s ease;
      z-index: 10;

      &:hover {
        color: #8f5d0f;
      }
      @media (min-width: 768px) {
        width: 350px;
        font-size: 24px;
      }
    }
  }
  .carousel {
    padding-top: 30px;
  }
  .overlay {
    text-align: center;
    border-radius: 10px;
    top: 130px;
    position: relative;
    max-width: 95%;
  }
}
</style>
