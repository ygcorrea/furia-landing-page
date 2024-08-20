import { defineStore } from 'pinia';
import { useFetch } from 'nuxt/app';

export const useTournamentResultsStore = defineStore('tournamentResultsStore', {
  state: () => ({
    results: [],
    upcoming: [],
    visibleResults: [],
    visibleEvents: [],
    visibleCount: 3,
    initialCount: 3,
    isRecentResults: true,
    isAllMatches: false,
    isUpcomingEvents: false,
  }),
  getters: {
    canViewLess(state) {
      return state.visibleCount > state.initialCount;
    },
    canViewMore(state) {
      if (state.isRecentResults || state.isAllMatches) {
        return state.visibleCount < state.results.length;
      } else if (state.isUpcomingEvents) {
        return state.visibleCount < state.upcoming.length;
      }
      return false;
    },
  },
  actions: {
    async fetchResults() {
      const { data, error } = await useFetch(
        'https://vlr.orlandomm.net/api/v1/teams/2406'
      );

      if (error.value) {
        console.error('Failed to fetch results:', error.value);
        return;
      }

      const results = data.value.data.results.map((result) => ({
        date: new Date(result.utc).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
        team1: {
          name: result.teams[0].name,
          logo: result.teams[0].logo,
        },
        team2: {
          name: result.teams[1].name,
          logo: result.teams[1].logo,
        },
        score: `${result.teams[0].points} : ${result.teams[1].points}`,
        event: result.event.name,
      }));

      const upcoming = data.value.data.upcoming.map((match) => ({
        date: new Date(match.utc).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
        team1: {
          name: match.teams[0].name,
          logo: match.teams[0].logo,
        },
        team2: {
          name: match.teams[1].name,
          logo: match.teams[1].logo,
        },
        event: match.event.name,
      }));

      this.results = results;
      this.upcoming = upcoming;

      this.showRecentResults();
    },
    viewMore() {
      this.visibleCount += 3;
      if (this.isRecentResults || this.isAllMatches) {
        this.visibleResults = this.results.slice(0, this.visibleCount);
      } else if (this.isUpcomingEvents) {
        this.visibleEvents = this.upcoming.slice(0, this.visibleCount);
      }
    },
    viewLess() {
      this.visibleCount = this.initialCount;
      if (this.isRecentResults || this.isAllMatches) {
        this.visibleResults = this.results.slice(0, this.visibleCount);
      } else if (this.isUpcomingEvents) {
        this.visibleEvents = this.upcoming.slice(0, this.visibleCount);
      }
    },
    showAllMatches() {
      this.isRecentResults = false;
      this.isAllMatches = true;
      this.isUpcomingEvents = false;
      this.visibleCount = this.results.length;
      this.visibleResults = this.results;
    },
    showUpcomingMatches() {
      this.isRecentResults = false;
      this.isAllMatches = false;
      this.isUpcomingEvents = true;
      this.visibleCount = this.initialCount;
      this.visibleEvents = this.upcoming.slice(0, this.visibleCount);
    },
    showRecentResults() {
      this.isRecentResults = true;
      this.isAllMatches = false;
      this.isUpcomingEvents = false;
      this.visibleCount = this.initialCount;
      this.visibleResults = this.results.slice(0, this.visibleCount);
    },
  },
});
