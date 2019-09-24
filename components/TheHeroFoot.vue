<template>
  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li
            v-for="link in links"
            :key="link.id"
            :class="{ 'is-active': link.isActive }"
            @click="setActiveLink(link)"
          >
            <nuxt-link :to="link.url">
              {{ link.text }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['links'],
  methods: {
    setActiveLink(link) {
      this.$store.dispatch('setLinkIsActive', link);
      this.links = this.$store.getters.getLinks;
    },
  },
  mounted() {
    const hasId = typeof $nuxt.$route.params.id !== 'undefined';
    const url = hasId
      ? $nuxt.$route.path.substr(0, $nuxt.$route.path.lastIndexOf('/'))
      : $nuxt.$route.path;
    const link = {
      url: url,
    };
    this.setActiveLink(link);
  },
};
</script>

<style scoped>
.nuxt-link-exact-active {
  color: hsl(0, 0%, 21%) !important;
}
</style>
