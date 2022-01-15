<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Home</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li
            class="
              nav-item
              d-flex
              justify-content-center
              align-items-center
              link-success
              fs-5
            "
          >
            <router-link
              class="text-decoration-none"
              :to="{ name: 'FavoritedPage' }"
              >Favorite Movies</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar-nav a {
  font-size: 18px;
  color: #e0e0e0;
  line-height: 22px;
  height: 22px;
  align-items: center;
  font-weight: 500;
  transition: 0.5s ease;
  transition-property: color, background-color, border-color;
}
.navbar-nav a:hover {
  color: #2f80ed;
  outline: none;
  text-decoration: none;
}
</style>
