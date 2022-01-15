<template>
  <div class="">
    <!--    <movie-card-->
    <!--      v-for="movie in movies"-->
    <!--      :key="movie.id"-->
    <!--      :movie="movie"-->
    <!--    ></movie-card>-->
    <favourited-movie-card
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
    >
    </favourited-movie-card>
  </div>
</template>

<script>
// import MovieCard from "@/components/MovieCard";
import FavouritedMovieCard from "@/components/FavouritedMovieCard";
export default {
  name: "FavoriteList",
  components: { FavouritedMovieCard },
  props: {
    movies: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped></style>
