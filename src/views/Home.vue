<template>
  <div class="wrapper">
    <div>
      <div class="container-fluid">
        <div class="row d-flex justify-content-center">
          <div class="sidebar col-3 p-0">
            <h2 class="text-center text-light mt-4 font-monospace">
              Favorite List
            </h2>
            <favorite-list :movies="favoriteMovies"></favorite-list>
          </div>

          <div class="movie-list col-9 main">
            <div class="mb-3 text-center">
              <div
                class="
                  d-flex
                  flex-column
                  justify-content-center
                  align-items-center
                  mb-5
                "
              >
                <button
                  type="button"
                  class="btn modal-btn mt-5"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Favorited Movies
                </button>
                <div class="input mt-5">
                  <h2 class="text-light mb-3 font-monospace">
                    Movie Search App
                  </h2>
                  <input
                    @keyup="searchMovie"
                    v-model="searchText"
                    type="text"
                    id="search-input"
                    placeholder="Search"
                  />
                </div>
              </div>

              <movie-list
                :loading="loading"
                :movies="searchedMovies"
              ></movie-list>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <modal></modal>
    </div>
  </div>
</template>

<script>
import MovieList from "@/components/MovieList";
import FavoriteList from "@/components/FavoriteList";
import { mapGetters } from "vuex";
import { debounce } from "debounce";

import Modal from "@/components/Modal";
export default {
  name: "Home",
  components: { Modal, MovieList, FavoriteList },
  data() {
    return {
      searchText: null,
      windowWidth: window.innerWidth,
    };
  },
  computed: {
    ...mapGetters({
      searchedMovies: "movies/_searchedMovies",
      favoriteMovies: "movies/_favoriteList",
      loading: "movies/_isLoading",
    }),
    isMobile() {
      return this.windowWidth < 992;
    },
  },
  methods: {
    searchMovie: debounce(function (e) {
      this.$store.dispatch("movies/getSearchedMovies", e.target.value);
    }, 900),
  },
  mounted() {
    this.$store.dispatch("movies/getSearchedMovies");
  },
};
</script>

<style scoped>
.sidebar {
  /*position: fixed;*/
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: block;
  padding: 20px;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
  background-color: #151f30;
  border-right: 1px solid #eee;
  min-height: 100vh;
}
.modal-btn {
  display: none;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100%;
  min-width: 160px;
  height: 50px;
  border-radius: 16px;
  background-color: #151f30;
  font-size: 14px;
  color: #e0e0e0;
  text-transform: uppercase;
  font-weight: 500;
  transition: 0.5s ease;
  transition-property: color, background-color, border-color;
  border: none;
}
.modal-btn:hover {
  color: #151f30;
  background-color: #fff;
}
.modal-btn:focus {
  outline: none;
}
.input {
  width: 50%;
}
#search-input {
  height: 40px;
  border-radius: 16px;
  background-color: #151f30;
  border: none;
  padding: 0 10px 0 15px;
  font-size: 14px;
  color: #fff;
  appearance: none;
  box-shadow: none;
  transition: 0.5s ease;
  transition-property: color, border-color;
  width: 100%;
}

#search-input:focus {
  outline: none;
}
@media (max-width: 992px) {
  .modal-btn {
    display: block;
  }
  .sidebar {
    display: none;
  }
}
</style>
