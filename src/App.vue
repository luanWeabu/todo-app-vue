<template>
  <v-app>
    <v-main>
      <router-link to="/product">List Products </router-link>
      <router-link to="/login">Login</router-link>

      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
