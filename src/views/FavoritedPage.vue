<template>
  <div>
    <navbar></navbar>
    <div class="container d-flex justify-content-center align-items-center">
      <div class="row">
        <movie-card
          v-for="movie in movies"
          :key="movie.id"
          class=""
          :movie="movie"
        ></movie-card>
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard";
import Navbar from "@/components/Navbar";
import { mapGetters } from "vuex";
export default {
  name: "FavoritedPage",
  computed: {
    ...mapGetters({
      movies: "movies/_favoriteList",
    }),
  },
  components: {
    Navbar,
    MovieCard,
  },
};
</script>

<style scoped></style>
