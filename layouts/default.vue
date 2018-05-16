<template>
  <div>
    <section class="hero is-info is-fullheight has-bg-img">
      <TheHeroHead :links="links"></TheHeroHead>
        <transition name="slide" mode="out-in">
          <nuxt/>
        </transition>
      <TheHeroFoot :links="links"></TheHeroFoot>
    </section>
  </div>
</template>

<script>
import TheHeroHead from '~/components/TheHeroHead.vue';
import TheHeroFoot from '~/components/TheHeroFoot.vue';

export default {
  components: {
    TheHeroHead,
    TheHeroFoot,
  },
  created() {
    this.links = this.$store.getters.getLinks;
  },
};
</script>

<style>
body,
.title,
p,
label {
  font-weight: 300 !important;
}

.has-bg-img {
  height: 100%;
  background: hsl(204, 86%, 53%);
  background: url('~/assets/mountain.png')center center;
  background: url('~/assets/mountain.png')center center,
    linear-gradient(45deg, hsl(204, 86%, 53%), hsl(171, 100%, 41%));
  background-size: cover;
  background-attachment: fixed;
  z-index: 1;
}

.slide-enter-active {
  animation: slide-in 400ms ease-in-out forwards;
}

.slide-leave-active {
  animation: slide-out 400ms ease-in-out forwards;
}

@keyframes slide-in {
  from {
    tranform: translateY(-30px);
    opacity: 0;
  }
  to {
    tranform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    tranform: translateY(0);
    opacity: 1;
  }
  to {
    tranform: translateY(-30px);
    opacity: 0;
  }
}
</style>