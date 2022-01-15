import movieService from "@/services/movieService";

const state = {
  popularMovies: [],
  searchedMovies: [],
  favoriteList: [],
};
const mutations = {
  SET_POPULAR_MOVIES(state, data) {
    state.popularMovies = data;
  },
  SET_SEARCHED_MOVIES(state, data) {
    state.searchedMovies = data;
  },
  SET_FAVORITE_LIST(state, data) {
    state.favoriteList.push(data);
  },
  REMOVE_FROM_FAVORITE_LIST(state, data) {
    state.favoriteList = state.favoriteList.filter(
      (movie) => movie.id !== data.id
    );
  },
};
const getters = {
  _popularMovies(state) {
    return state.popularMovies;
  },
  _searchedMovies(state) {
    return state.searchedMovies;
  },
  _favoriteList(state) {
    return state.favoriteList;
  },
  _isFavorited: (state) => (id) => {
    if (state.favoriteList.length > 0) {
      return state.favoriteList.filter((el) => el.id === id).length > 0;
    } else {
      return false;
    }
  },
};
const actions = {
  getPopularMovies({ commit }) {
    movieService.getPopularMovies().then((res) => {
      commit("SET_POPULAR_MOVIES", res.data.results);
    });
  },
  getSearchedMovies({ commit }, payload) {
    movieService.searchMovie(payload).then((res) => {
      commit("SET_SEARCHED_MOVIES", res.data.results);
    });
  },
  addToFavoriteList({ commit }, payload) {
    commit("SET_FAVORITE_LIST", payload);
  },
  removeFromFavoriteList({ commit }, payload) {
    commit("REMOVE_FROM_FAVORITE_LIST", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
