<script setup>
import Nav from '@/components/nav.vue'
import Footer from '@/components/footer.vue'
import LoginForm from '@/components/loginForm.vue'
import { ref } from 'vue';
import { onMounted } from 'vue';
import { supabase } from '@/lib/supabaseClient.js'

const users = ref("")

async function getUsers() {
  const { data } = await supabase.from('users').select('name')
  users.value = data
}

onMounted(() => {
  getUsers()
})
</script>

<template>
  <header>
    <Nav />
  </header>
  <main>
    <LoginForm></LoginForm>
    <div class="spacer"></div>
    <ul>
    <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </main>
  <footer>
    <Footer />
  </footer>
</template>
