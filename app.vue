<script setup lang="ts">
const isCartOpen = ref(false)
</script>

<template>
  <AppHeader @toggle-cart="isCartOpen = !isCartOpen" />
  <CartDrawer v-if="isCartOpen" @close="isCartOpen = false" />
  <NuxtPage />
</template>
