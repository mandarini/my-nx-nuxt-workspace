<script setup lang="ts">
import { One } from "@my-nuxt-workspace/my-vue-lib-1"
import { Two } from "@my-nuxt-workspace/my-vue-lib-2"
</script>

<template>
  <div class="about">
    <h1>This is an about page.</h1>
    <One />
    <Two />
  </div>
</template>

<style>
@media (min-width: 768px) {
  .about {
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 1rem;
  }
}
</style>
