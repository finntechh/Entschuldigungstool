
<template>
  <header>
    <nav>
      <div class="logo-container">
        <img src="" alt="">
      </div>
      <div class="nav-list-container">
        <ul class="nav-list">
          <router-link class="nav-item" to="/" >
            Home
          </router-link>
          <router-link class="nav-item" to="/Login" >
            <i class="material-icons">person</i>
          </router-link>
        </ul>
      </div>
    </nav>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
  
  </footer>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, ref } from "vue";
</script>