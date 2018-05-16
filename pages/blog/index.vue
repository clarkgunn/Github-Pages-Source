<template>
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="columns">
        <div class="column"></div>
        <div class="column">
          <div 
            v-for="post in blogPosts"
            :key="post.ID"
          >
            <nuxt-link :to="'/blog/' + post.ID">
              <div class="card article">
              <div class="card-image">
                <figure class="image">
                  <img :src="post.featured_image" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content has-text-centered">
                    <h1 class="dark-text title is-1 is-spaced">
                      {{ post.title }}
                    </h1>
                  </div>
                </div>
                <div class="content">
                  <span v-html="post.excerpt"></span>
                </div>
              </div>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="column"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  async asyncData({ params }) {
    let { data } = await axios.get(
      `https://public-api.wordpress.com/rest/v1.1/sites/144391473/posts/`
    );
    return { blogPosts: data.posts };
  },
};
</script>

<style scoped>
.dark-text.title.is-1.is-spaced {
  color: hsl(0, 0%, 21%);
}

.media-content {
  overflow: hidden !important;
}
</style>