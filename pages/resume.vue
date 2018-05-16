<template>
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="columns">
        <div class="column">
          <ResumeCard :resume="resume"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResumeCard from '~/components/ResumeCard.vue';
import resume from '~/assets/resume.json';

export default {
  data() {
    return {
      resume,
    };
  },
  components: {
    ResumeCard,
  },
};
</script>