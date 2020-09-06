<template>
  <div v-if="isLogged">
    <LoggedIn/>
  </div>
  <div v-else>
    <Default/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LoggedIn from './Home-LoggedIn.vue'
import Default from './Home-Default.vue'

export default {
  components: {
    LoggedIn,
    Default
  },
  computed: {
    ...mapGetters([
      'isLogged'
    ])
  },
}
</script>
