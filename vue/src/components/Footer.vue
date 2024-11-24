<template>
  <footer>
    <p>&copy; 2024 My Vue Project. All Rights Reserved.</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppFooter", // 컴포넌트 이름을 다중 단어로 설정
});
</script>

<style scoped>
footer {
  background-color: #222;
  color: #aaa;
  text-align: center;
  padding: 1rem 0;
  font-size: 0.9rem;
}

footer p {
  margin: 0;
}
</style>