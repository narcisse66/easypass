<template>
  <div class="container fixed-top py-md-2" style="background-color: #1c3b72;">
    <router-link :to="{ name: 'details-event' }" class="navbar-brand" >
      <div class="res-main-logo" style="display: flex; align-items: center">
        <h3 class="my-4 mx-4 text-center" style="color: #1c3b72">
          <div class="res-main-logo">
              <img src="/assets/images/logo.png" alt="Logo" />
            </div>
          <span style="color: #fff">easy</span><span style="color: #7ad254">pass</span>
        </h3>
      </div>
    </router-link>
  </div>
  <div class="menu-navigation fixed-bottom bg-light">
    <ul class="navbar-nav d-flex justify-content-around align-items-center p-2">
      <li class="nav-item text-center">
        <router-link
          :class="[{ active: $route.name === 'explorer' }, 'nav-link']"
          :to="{ name: 'explorer' }"
        >
          <i class="fa-solid fa-calendar-days"></i>
          <span class="d-block small">Events</span>
        </router-link>
      </li>
      <li class="nav-item text-center">
        <router-link
          :class="[{ active: $route.name === 'home' }, 'nav-link']"
          :to="{ name: 'home' }"
        >
          <i class="fa-solid fa-house"></i>
          <span class="d-block small">Home</span>
        </router-link>
      </li>
      <li class="nav-item text-center">
        <router-link
          :class="[{ active: $route.name === 'blog' }, 'nav-link']"
          :to="{ name: 'blog' }"
        >
          <i class="fa-solid fa-blog"></i>
          <span class="d-block small">Blog</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CompHeader",
};
</script>

<style>
/* Position the footer navigation at the bottom */
.menu-navigation {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #ffffff; /* Background color for the footer */
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); /* Optional shadow */
  z-index: 1030; /* Keep it above other elements */
  padding: 5px 0;
}

.menu-navigation .navbar-nav {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.menu-navigation .nav-item {
  margin: 0 15px; /* Spacing between navigation items */
}

.menu-navigation .nav-link {
  color: #1c3b72; /* Link color */
  text-decoration: none;
  font-weight: bold;
}

.menu-navigation .nav-link.active {
  color: #7ad254; /* Highlight active link */
  text-decoration: underline;
}
</style>
