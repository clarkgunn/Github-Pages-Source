<template>
  <div class="hero-head">
    <nav class="navbar is-transparent">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link to="/" class="navbar-item brand">
            <img id="icon" src="~/assets/viking-shield.svg" width="50px" height="50px" alt="Logo">
            Clark Mitchell
          </nuxt-link>
          <div
              class="navbar-burger"
              :class="{ 'is-active' : isActive }"
              data-target="navbarMenuHeroB"
              @click="isActive = !isActive"
            >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navbarMenuHeroB"
          class="navbar-menu"
          :class="{ 'is-active': isActive }"
        >
          <div class="navbar-end">
            <nuxt-link 
              v-for="link in links"
              :key="link.id"
              :to="link.url"
              class="navbar-item"
              active-class="is-active"
              @click.native="setActiveLink(link)"
              exact
            >
              {{ link.text }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['links'],
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    setActiveLink(link) {
      this.isActive = false;
      this.$store.dispatch('setLinkIsActive', link);
    },
  },
};
</script>

<style scoped>
.navbar-item {
  border-bottom: solid 2px transparent;
  transition: border-bottom 200ms ease-in;
}

.navbar-item:not(.brand):hover {
  border-bottom: solid 2px whitesmoke;
}

a.nuxt-link-exact-active.navbar-item.is-active {
  background-color: rgba(10, 10, 10, 0.1) !important;
}

#navbarMenuHeroB.is-active {
  background-color: rgba(10, 10, 10, 0.4) !important;
}
</style>
