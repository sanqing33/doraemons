<template>
  <index />
</template>

<script setup>
import Index from "@/views/index.vue";
</script>

<style>
* {
  overflow: hidden;
}

body {
  margin: 0;
  padding: 0;
  height: 100vh;
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
}

a {
  text-decoration: none;
}

.el-main {
  --el-main-padding: 0 !important;
}
</style>
