<template>
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="columns">
        <div class="column"></div>
        <div class="column">
          <TheCard />
        </div>
        <div class="column"></div>    
      </div>
    </div>
  </div>
</template>

<script>
import TheCard from './TheCard.vue';

export default {
  components: {
    TheCard,
  },
};
</script>