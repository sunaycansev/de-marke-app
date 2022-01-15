<template>
  <div class="col d-flex justify-content-center align-items-center">
    <div class="card m-2 bg-dark text-light">
      <div class="card-top d-flex justify-content-center align-items-center">
        <img
          class="card-img-top"
          :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
          :alt="movie.title"
        />
      </div>

      <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
        <p class="card-text">
          {{ movie.tagline }}
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <p>{{ movie.release_date.slice(0, 4) }}</p>
          <p>
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star pb-1"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                /></svg
            ></span>
            {{ movie.vote_average }}
          </p>
        </div>
        <a
          v-if="!isFavorited(movie.id)"
          href="#"
          class="btn btn-success d-flex justify-content-center"
          @click="addToFavorite(movie)"
          >Add to Favourite</a
        >
        <a
          v-if="isFavorited(movie.id)"
          href="#"
          class="btn btn-danger d-flex justify-content-center"
          @click="removeFromFavorite(movie)"
          >Remove from Favourite</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "FavouritedMovieCard",
  computed: {
    ...mapGetters({
      favoriteList: "movies/_favoriteList",
      isFavorited: "movies/_isFavorited",
    }),
  },
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToFavorite(movie) {
      this.$store.dispatch("movies/addToFavoriteList", movie);
    },
    removeFromFavorite(movie) {
      this.$store.dispatch("movies/removeFromFavoriteList", movie);
    },
  },
};
</script>

<style scoped>
.card {
  max-width: 14rem;
}
.card a {
  font-size: 13px;
}
.card .card-img-top {
  background-repeat: no-repeat;
  background-size: cover;
  width: 210px;
  height: 250px;
}

@media (max-width: 1200px) {
  .col {
    height: 40%;
  }
  .card {
    /*height: 70%;*/
    width: 100%;
  }
  .card .card-body .card-title {
    font-size: 16px;
  }
}
</style>
