<template>
  <div class="card">
    <div class="card-content">
      <figure class="avatar centered-image">
        <img src="/Clark.png" alt="Selfie Gif" class="circle">
      </figure>
      <div id="title">
        <h1 class="dark-text title is-1 is-spaced">
          Clark Mitchell
        </h1>
        <p class="dark-text subtitle is-6">
          Gainesville, FL
        </p>
        <p class="dark-text subtitle is-4">
          <no-ssr>
            <vue-typer
              :text="typedStrings"
              type-delay=80
              repeat=0
              initial-action="typing"
              >
              Software Developer
            </vue-typer>
          </no-ssr>
        </p>
      </div>
    </div>
    <footer class="card-footer">
      <a
        title="Github Profile Link"
        class="card-footer-item"
        href="https://clarkmitchell.dev"
      >
        <span>
          <figure class="centered-image">
            <img src="/GitHub-Logo.jpg" alt="Github icon">
          </figure>
        </span>
      </a>
      <a
        title="Linkedin Profile Link"
        class="card-footer-item"
        href="https://www.linkedin.com/in/clark-mitchell-03052b38/"
      >
        <span>
          <figure class="centered-image">
            <img src="/linkedin.jpg" alt="Linkedin icon">
          </figure>
        </span>
      </a>
      <a
        title="Gitlab Profile Link"
        class="card-footer-item"
        href="https://gitlab.com/clarkcsmitchell"
      >
        <span>
          <figure class="centered-image">
            <img src="/Gitlab-Logo.jpg" alt="Gitlab icon">
          </figure>
        </span>
      </a>
    </footer>
  </div>
</template>

<script>
if (process.browser) {
  var VueTyper = require('vue-typer').VueTyper
}

export default {
  components: {
    VueTyper
  },
  data () {
    return {
      typedStrings: [
        "Web Developer",
        "Mobile Developer",
        "Software Engineer"
      ]
    }
  }
};
</script>

<style scoped>
.circle {
  border-radius: 50%;
  border: 5px solid white;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.46);
}

.centered-image {
  display: block;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}

.avatar {
  width: 60%;
  top: -135px;
}

#title {
  margin-top: -125px;
}

.dark-text.title.is-1,
.dark-text.subtitle {
  color: hsl(0, 0%, 21%);
}
</style>
