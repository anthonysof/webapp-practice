<template>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-toolbar dense elevation="24" color="blue">
          <v-app-bar-nav-icon>KUN</v-app-bar-nav-icon>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
      </v-row>
      <v-row no-gutters>
       <div class="pl-4 pr-4 pt-2 pb-2">
        <br>
        <input
          type="email"
          name="email"
          v-model="email"
          placeholder="email@example.com" />
        <br>
        <input
          type="password"
          name="password"
          v-model="password"
          placeholder="password" />
        <br>
        <div class="error" v-html="error" />
        <br>
        <button
          @click="register">
          Register
        </button>
       </div>
      </v-row>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
