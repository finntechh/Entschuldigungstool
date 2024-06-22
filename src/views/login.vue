<script setup>
import Nav from '@/components/nav.vue'
import Footer from '@/components/footer.vue'
import LoginForm from '@/components/loginForm.vue'
</script>

<template>
  <header>
    <Nav />
  </header>
  <main>
    <LoginForm></LoginForm>
    <div class="spacer"></div>
  </main>
  <footer>
    <Footer />
  </footer>
</template>
