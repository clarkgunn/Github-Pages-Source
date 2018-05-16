<template>
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="columns">
        <div class="column">
          <ContactCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactCard from '~/components/ContactCard.vue';

export default {
  components: {
    ContactCard,
  },
};
</script>