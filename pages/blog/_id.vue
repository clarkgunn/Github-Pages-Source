<template>
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="columns">
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
            <div class="content article-body">
              <span v-html="post.content"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  async asyncData({ params }) {
    let { data } = await axios.get(
      `https://public-api.wordpress.com/rest/v1.1/sites/144391473/posts/${
        params.id
      }`
    );
    return { post: data };
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