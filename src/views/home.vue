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
    <Empfaenger></Empfaenger>
    <Absender></Absender>
    <Zeitraum></Zeitraum>
  </main>
  <footer>
    <Footer></Footer>
  </footer>
</template>
