<template>
  <div class="columns is-mobile is-centered">
    <div class="column is-half">
      <h1>Register</h1>
      <form @submit.prevent="register">
        <b-field>
          <b-input placeholder="Name"
            type="text"
            icon="account"
            v-model="name">
          </b-input>
        </b-field>
        <b-field>
          <b-input placeholder="Email"
            type="email"
            icon="email"
            v-model="email">
          </b-input>
        </b-field>
        <b-field>
          <b-input placeholder="Password"
            type="password"
            icon="lock-question"
            v-model="password">
          </b-input>
        </b-field>
        <b-field>
          <b-input placeholder="Password repeat"
            type="password"
            icon="lock-question"
            v-model="password_confirmation">
          </b-input>
        </b-field>
        <div class="field">
          <p class="control">
            <button class="button is-success">
              Register
            </button>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        has_error: false,
        error: '',
        errors: {},
        success: false
      }
    },
    methods: {
      register() {
        this.$store
          .dispatch('register', {
            name: this.name,
            email: this.email,
            password: this.password
          })
          .then(() => {
            this.$router.push({ name: 'Home' })
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>
