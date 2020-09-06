<template>
  <div class="columns is-variable is-8">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
    }
  },
  methods: {
  },
  created: function() {
  },
  computed: {
    ...mapGetters([
      'isLogged'
    ])
  },
}
</script>
