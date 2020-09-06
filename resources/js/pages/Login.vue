  <template>
  <div>
    <div class="columns is-mobile is-centered">
      <div class="column is-half">
        <h1>Login</h1>
        <form @submit.prevent="login">
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

          <div class="field">
            <p class="control">
              <button class="button is-success">
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    login () {
      this.$store
        .dispatch('login', {
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
