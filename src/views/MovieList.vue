<template>
  <!--      burayı dön col-3 ile-->
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
</template>

<script>
import MovieCard from "@/components/MovieCard";
export default {
  name: "MovieList",
  components: {
    MovieCard,
  },
  props: {
    movies: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped></style>
