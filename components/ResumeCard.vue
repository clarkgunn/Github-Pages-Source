<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
      <div class="tile">
        <div class="tile is-parent">
          <article class="tile is-child notification">
            <p class="title">{{ resume.basics.name }}</p>
            <p class="subtitle">{{ resume.basics.label }}</p>
            <a @click="showPdf">
              <p>
              Printable Version
              </p>
            </a>
            <div class="content">
              <div v-for="skill in resume.skills" :key="skill">
                <hr>
                <p class="is-size-5">{{ skill.name }}</p>
                <ul>
                  <li v-for="keyword in skill.keywords" :key="keyword">
                    {{ keyword }}
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification">
            <section>
              <i class="material-icons">contact_phone</i>
              <p class="title is-spaced">Contact</p>
              <p class="subtitle">
              <nuxt-link to="/" style="text-decoration: none">
                {{ resume.basics.website }}
              </nuxt-link>
              </p>
              <p class="subtitle">
              <a :href="'mailto:' + resume.basics.email" style="text-decoration: none">
                {{ resume.basics.email }}
              </a>
              </p>
              <p class="subtitle">{{ resume.basics.phone }}</p>                    
            </section>
            <hr>
            <section>
              <p class="title">Location</p>
              <p>{{ resume.basics.location.address }}</p>
              <p>
                {{ resume.basics.location.city + ', ' + resume.basics.location.region}}
                </p>
              <p>{{ resume.basics.location.countryCode }}</p>                                             
            </section>
          </article>
          <article class="tile is-child notification">
            <p class="title">Work</p>       
            <a
              :href="resume.work[0].website"
              class="is-size-4"
              style="text-decoration: none"
            >
              {{ resume.work[0].company }}
            </a>
            <p>{{ resume.work[0].position }}</p>     
            <p>{{ resume.work[0].startDate }} - Current</p>                                    
          </article>
        </div>
      </div>

    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification">
        <div class="content">
            <p class="title is-spaced">Education</p>
            <p class="subtitle">{{ resume.education[0].institution }}</p>
            <p>{{ resume.education[0].studyType }}</p>
            <p>{{ resume.education[0].area }}</p>
            <div class="content">
              <ul>
                <li class="has-text-left" v-for="course in resume.education[0].courses" :key="course">
                  {{ course }}
                </li>
              </ul>
            </div>    
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  props: ['resume'],
  methods: {
    showPdf() {
      window.open('/resume.pdf', '_blank');
    },
  },
};
</script>

<style scoped>
p,
li,
a {
  color: hsl(0, 0%, 21%) !important;
}

ul {
  list-style-type: none;
  margin: 0px;
  padding: 0px;
}

.icon {
  justify-content: center;
  margin: auto;
}
</style>