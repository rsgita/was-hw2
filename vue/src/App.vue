<template>
  <div id="app">
    <MainNavbar />  
    <h1>hw2 test...</h1>
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "./components/Navbar.vue"; 
import AppFooter from "./components/Footer.vue";

export default defineComponent({
  components: {
    MainNavbar, 
    AppFooter,
  },
});
</script>

<style>
#app {
  text-align: center;
}
</style>

