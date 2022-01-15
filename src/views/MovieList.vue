<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="row">
      <loading-bar v-if="loading"></loading-bar>
      <movie-card
        v-else
        v-for="movie in movies"
        :key="movie.id"
        class=""
        :movie="movie"
      ></movie-card>
    </div>
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard";
// import { mapGetters } from "vuex";
import LoadingBar from "@/components/LoadingBar";
export default {
  name: "MovieList",
  components: {
    LoadingBar,
    MovieCard,
  },
  computed: {
    // ...mapGetters({
    //   loading: "movies/_isLoading",
    // }),
  },
  props: {
    movies: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped></style>
