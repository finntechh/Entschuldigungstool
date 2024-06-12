<script setup>
import Base from '@/components/base.vue'
import Empfaenger from '@/components/empfaenger.vue'
import Absender from '@/components/absender.vue'
import Zeitraum from '@/components/zeitraum.vue'
</script>

<template>
  <header>
    <Base />
  </header>
  <main>
    <Empfaenger></Empfaenger>
    <Absender></Absender>
    <Zeitraum></Zeitraum>
  </main>
</template>
