<template>
  <section class="tournament-results">
    <h2
      v-if="!store.isUpcomingEvents || store.visibleEvents.length > 0"
      class="tournament-title"
    >
      TOURNAMENT <span>RESULTS</span>
    </h2>

    <div v-if="store.isLoading" class="loader">Loading...</div>

    <div
      v-for="(result, index) in store.visibleResults"
      :key="index"
      class="match-result"
      v-if="!store.isLoading && (store.isRecentResults || store.isAllMatches)"
    >
      <p class="date">
        {{ result.date }}
      </p>
      <div class="match">
        <span class="team1">{{ result.team1.name }}</span>
        <img :src="result.team1.logo" alt="Team 1 Logo" class="team-logo" />
        <span class="score">{{ result.score }}</span>
        <img :src="result.team2.logo" alt="Team 2 Logo" class="team-logo" />
        <span class="team2">{{ result.team2.name }}</span>
      </div>
      <div class="details">
        <p>{{ result.event }}</p>
      </div>
    </div>

    <div
      v-for="(event, index) in store.visibleEvents"
      :key="index"
      class="match-result"
      v-if="!store.isLoading && store.isUpcomingEvents"
    >
      <p class="date">
        {{ event.date }}
      </p>
      <div class="match">
        <span class="team1">{{ event.name }}</span>
        <img :src="event.img" alt="Event Image" class="team-logo" />
        <span class="score">{{ event.status }}</span>
        <span class="team2">{{ event.country }}</span>
      </div>
      <div class="details">
        <p>{{ event.prizepool }}</p>
      </div>
    </div>

    <div
      v-if="
        !store.isLoading &&
        store.isUpcomingEvents &&
        store.visibleEvents.length === 0
      "
      class="empty-state"
    >
      <p>No upcoming events at the moment. Stay tuned!</p>
    </div>

    <button
      v-if="
        !store.isLoading &&
        store.canViewMore &&
        (store.isRecentResults || store.isAllMatches)
      "
      class="view-buttons"
      @click="store.viewMore"
    >
      VIEW MORE
    </button>
    <button
      v-if="
        !store.isLoading &&
        store.canViewLess &&
        (store.isRecentResults || store.isAllMatches)
      "
      class="view-buttons"
      @click="store.viewLess"
    >
      VIEW LESS
    </button>

    <button
      v-if="!store.isLoading && store.canViewMore && store.isUpcomingEvents"
      class="view-buttons"
      @click="store.viewMoreUpcoming"
    >
      VIEW MORE
    </button>
    <button
      v-if="!store.isLoading && store.canViewLess && store.isUpcomingEvents"
      class="view-buttons"
      @click="store.viewLessUpcoming"
    >
      VIEW LESS
    </button>
  </section>
</template>

<script setup>
import { useTournamentResultsStore } from '@/stores/tournamentResultsStore.js';

const store = useTournamentResultsStore();
store.fetchResults();
</script>

<style scoped lang="scss">
.tournament {
  &-title {
    color: #8f5d0f;
    font-family: 'Kufam', sans-serif;
    font-size: 34px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 40px;
    margin-bottom: 32px;
    & span {
      color: #000000;
      font-family: 'Kufam', sans-serif;
    }
    @media (min-width: 768px) {
      font-size: 48px;
    }
  }
  &-results {
    text-align: center;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url('/images/furia-lettering.png') repeat center center;
    z-index: 0;
    position: relative;
    margin-top: 120px;

    .match-result {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      background-color: #ebebeb;
      border-radius: 4px;

      margin-bottom: 15px;
      border: 4px solid #8f5d0f;
      width: 100%;
      height: 150px;
      position: relative;
      padding: 10px;
      &::after {
        content: '';
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 50%;
        height: 20px;
        background-color: #8f5d0f;
        border-radius: 20px;
        position: absolute;
        z-index: -1;
      }
      @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        height: 132px;
        width: 90%;
        padding: 0 32px;
      }

      .date {
        color: #0d0d0d;
        font-family: 'Kufam', sans-serif;
        font-size: 20px;
        font-weight: 700;
        flex-shrink: 0;
        text-align: left;

        @media (min-width: 768px) {
          font-size: 42px;
          max-width: 180px;
          line-height: 34px;
        }
      }

      .match {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        text-align: center;
        flex-wrap: wrap;
        @media (min-width: 768px) {
          width: 100%;
        }
        .team-logo {
          height: 40px;
          max-width: 80px;
          padding: 0 10px;

          @media (min-width: 768px) {
            height: 60px;
            gap: 20px;
          }
        }

        .team1,
        .team2 {
          color: #9c9c9c;
          font-size: 24px;
          font-weight: 500;
          line-height: 24px;
          display: none;
          @media (min-width: 768px) {
            display: flex;
          }
        }

        .score {
          font-weight: bold;
          font-size: 24px;
          letter-spacing: 8px;
          font-family: 'Kufam', sans-serif;

          @media (min-width: 768px) {
            margin: 0 20px;
          }
        }
      }

      .details {
        color: #8f5d0f;
        font-size: 16px;
        font-weight: 500;

        @media (min-width: 768px) {
          width: 140px;
          flex-shrink: 0;
          text-align: right;
        }
      }
    }

    .view-buttons {
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
      margin-top: 40px;
      &:hover {
        background-color: #8f5d0f;
        color: #ffffff;
      }
      @media (min-width: 768px) {
        padding: 10px;
        width: 350px;
        font-size: 24px;
      }
    }
    .empty-state {
      font-size: 20px;
      color: #8f5d0f;
      height: 300px;
      display: flex;
      align-items: center;
      background: rgb(211 211 211 / 40%);
      backdrop-filter: blur(1px);
      -webkit-backdrop-filter: blur(2px);
      border-radius: 10px;
      margin-top: 60px;
      border: 1px solid rgba(255, 255, 255, 0.18);
      padding: 20px;
      p {
        font-size: 34px;
        font-family: 'Kufam', sans-serif;
        font-weight: 600;
      }
    }
  }
}
</style>
