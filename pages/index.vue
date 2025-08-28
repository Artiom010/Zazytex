<script setup lang="ts">
useSeoMeta({
  title: 'FoodShop – Produse alimentare',
  ogTitle: 'FoodShop – Produse alimentare',
  description: 'Lista de produse alimentare cu cos functional (Nuxt 3 + SSR).',
  ogDescription: 'Lista de produse alimentare cu cos functional (Nuxt 3 + SSR).'
})

type Product = {
  id: number
  title: string
  price: number
  rating: number
  producer: string
  stock: number
  image: string
}

import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import ProductCard from '~/components/ProductCard.vue'
import Cart from '~/components/Cart.vue'

const showCart = ref(false)

const { data, pending, error, refresh } = await useFetch<Product[]>('/api/products', {
  server: true,         
  lazy: false,          
  default: () => [],    
})

const products = computed(() => data.value ?? [])
</script>

<template>
  <div>
    <Header @toggle-cart="showCart = !showCart" />

    <section class="p-4">
      <div v-if="pending" class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="i in 6" :key="i" class="animate-pulse border rounded-xl p-4 bg-white">
          <div class="h-40 bg-gray-200 rounded mb-3" />
          <div class="h-4 bg-gray-200 rounded w-3/4 mb-2" />
          <div class="h-4 bg-gray-200 rounded w-1/2" />
        </div>
      </div>

      <div v-else-if="error" class="bg-red-50 border border-red-200 text-red-700 p-4 rounded">
        A aparut o eroare la incarcare.
        <button class="ml-2 underline" @click="refresh()">Reincearca</button>
      </div>

      <main v-else class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProductCard v-for="p in products" :key="p.id" :product="p" />
      </main>
    </section>

    <Cart v-if="showCart" @close="showCart = false" />
    <Footer />
  </div>
</template>
