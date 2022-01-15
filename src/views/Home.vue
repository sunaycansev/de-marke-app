<template>
  <div>
    <navbar id="navbar" />
    <div class="container-fluid">
      <div class="row d-flex justify-content-center">
        <div class="sidebar col-3 p-0">
          <h1 class="text-center text-light mt-4">Favorite List</h1>
          <favorite-list :movies="favoriteMovies"></favorite-list>
        </div>

        <div class="movie-list col-9 main">
          <div class="mb-3 text-center">
            <div class="d-flex justify-content-center align-items-center mb-5">
              <div class="input mt-5">
                <input
                  @keyup="searchMovie"
                  v-model="searchText"
                  type="text"
                  id="search-input"
                  placeholder="I'm looking for..."
                />
              </div>
            </div>

            <movie-list :movies="searchedMovies"></movie-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieList from "@/views/MovieList";
import FavoriteList from "@/components/FavoriteList";
import { mapGetters } from "vuex";
import { debounce } from "debounce";
import Navbar from "@/components/Navbar";
export default {
  name: "Home",
  components: { Navbar, MovieList, FavoriteList },
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
#navbar {
  display: none;
}
.input {
  width: 50%;
}
#search-input {
  height: 40px;
  border-radius: 16px;
  background-color: #151f30;
  border: none;
  padding: 0 60px 0 20px;
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
  #navbar {
    display: block;
  }
  .sidebar {
    display: none;
  }
}
</style>
