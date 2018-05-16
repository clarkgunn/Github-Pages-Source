<template>
<div class="columns">
  <div class="column"></div>
  <div class="column">
    <div class="card">
      <div class="card-content">
        <form @submit.prevent="validate" id="contactForm" method="POST" action="https://formspree.io/clarkmitchelldev@gmail.com">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                v-validate="'required|alpha_spaces'" 
                :class="{'input': true, 'is-danger': errors.has('name') }"
                name="name"
                type="text"
                placeholder="Name"
              >
            </div>
            <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                v-validate="'required|email'"
                :class="{'input': true, 'is-danger': errors.has('email'), 'is-success': !errors.has('email') }"
                name="email"
                type="text"
                placeholder="Email"
              >
            </div>
            <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
          </div>
          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea
                v-validate="'required'"
                :class="{'input': true, 'is-danger': errors.has('message') }"
                name="message"
                class="textarea"
                placeholder="Textarea"
              ></textarea>
            </div>
            <span v-show="errors.has('message')" class="help is-danger">{{ errors.first('message') }}</span>
          </div>
          <div class="field is-grouped">
            <div class="control" @click="validate">
              <button type="submit" class="button is-outlined is-success">Submit</button>
            </div>
            <div class="control" @click.prevent="clear">
              <button class="button is-outlined is-danger">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="column"></div>
</div>
</template>

<script>
export default {
  methods: {
    clear() {
      document.getElementById('contactForm').reset();
    },
    validate() {
      this.$validator
        .validateAll()
        .then(result => {
          if (result) {
            document.getElementById('contactForm').submit();
          }
        })
        .catch(() => {});
    },
  },
};
</script>