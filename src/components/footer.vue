
<template>

  <div class="footer-container">
    <div class="footer-links">
      <ul class="footer-link-list">
        <router-link to="/"> <span>Home</span> </router-link>
        <router-link to="/login">
          <i class="material-icons">person</i>
        </router-link>
      </ul>
    </div>
    <div class="footer-text">
      <span>@Finn</span>
    </div>
  </div>

</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, ref } from "vue";
</script>
