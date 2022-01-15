import movieService from "@/services/movieService";

const state = {
  popularMovies: [],
  searchedMovies: [],
  favoriteList: [],
  loading: true,
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
  SET_LOADING(state, isLoading) {
    state.loading = isLoading;
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
  _isLoading(state) {
    return state.loading;
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
  async getPopularMovies({ commit }) {
    try {
      commit("SET_LOADING", true);
      await movieService.getPopularMovies().then((res) => {
        commit("SET_POPULAR_MOVIES", res.data.results);
      });
    } catch (e) {
      console.log(e);
    } finally {
      commit("SET_LOADING", false);
    }
  },

  async getSearchedMovies({ commit }, payload) {
    try {
      commit("SET_LOADING", true);
      await movieService.searchMovie(payload).then((res) => {
        commit("SET_SEARCHED_MOVIES", res.data.results);
      });
    } catch (e) {
      console.log(e);
    } finally {
      commit("SET_LOADING", false);
    }
  },

  async addToFavoriteList({ commit }, payload) {
    try {
      commit("SET_LOADING", true);
      commit("SET_FAVORITE_LIST", payload);
    } catch (e) {
      console.log(e);
    } finally {
      commit("SET_LOADING", false);
    }
  },
  removeFromFavoriteList({ commit }, payload) {
    try {
      commit("SET_LOADING", true);
      commit("REMOVE_FROM_FAVORITE_LIST", payload);
    } catch (e) {
      console.log(e);
    } finally {
      commit("SET_LOADING", false);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
