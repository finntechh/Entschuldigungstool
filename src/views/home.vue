<script setup>
import Nav from '@/components/nav.vue'
import Footer from '@/components/footer.vue';
import Empfaenger from '@/components/empfaenger.vue'
import Absender from '@/components/absender.vue'
import Zeitraum from '@/components/zeitraum.vue'
</script>

<template>
  <header>
    <Nav></Nav>
  </header>
  <main>
    <div class="button-container">
      <router-link to="/Entschuldigungsgenerator">
        <div class="button">
          Entschuldigungsgenerator
        </div>
      </router-link>
    </div>
  </main>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<style scoped>

.button {
  padding: 0.6rem 1.4rem;
  background-color: brown;
  color: white;
  font-size: larger;
  font-family: Verdana, Geneva, Tahoma, sans-serif;  
  text-align: center;
  border-radius: 20px;
}

.button-container {
  padding: 2rem;
  background-color: #3a3a3a; 
}


</style>
