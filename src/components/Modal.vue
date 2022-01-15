<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-light" id="exampleModalLabel">
            Favorite Movies
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <h3
            v-if="!(favoriteMovies.length > 0)"
            class="text-light text-center"
          >
            No favorite movies
          </h3>
          <favorite-list :movies="favoriteMovies"> </favorite-list>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn close-btn" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FavoriteList from "@/components/FavoriteList";
import { mapGetters } from "vuex";
export default {
  name: "Modal",
  components: {
    FavoriteList,
  },
  computed: {
    ...mapGetters({
      favoriteMovies: "movies/_favoriteList",
    }),
  },
};
</script>

<style scoped>
.modal .modal-content {
  background-color: #131720;
}
.modal .close-btn {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100%;
  padding: 10px;
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
.modal .close-btn:hover {
  color: #151f30;
  background-color: #fff;
}
</style>
