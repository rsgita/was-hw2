<template>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainNavbar", 
});
</script>

<style scoped>
nav {
  background-color: #333;
  color: white;
  padding: 1rem;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
</style>