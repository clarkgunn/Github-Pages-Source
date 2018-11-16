<template>
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="columns is-desktop">
        <div 
          v-for="work in works"
          :key="work.id"
          class="column">
          <WorkCard :work="work"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WorkCard from '~/components/WorkCard.vue';

export default {
  components: {
    WorkCard,
  },
  created() {
    this.works = this.$store.getters.getWorks;
  },
};
</script>
