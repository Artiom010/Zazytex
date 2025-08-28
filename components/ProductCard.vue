<template>
  <div class="border p-4 rounded-xl shadow-sm flex flex-col">
    <img :src="product.image" alt="" class="h-36 w-full object-cover rounded mb-3" />
    <h2 class="font-semibold text-lg">{{ product.title }}</h2>
    <p class="text-sm text-gray-600">Producator: {{ product.producer }}</p>
    <div class="mt-1 flex items-center gap-3 text-sm">
      <span>⭐ {{ product.rating }}</span>
      <span>Stoc: {{ product.stock }}</span>
    </div>
    <p class="mt-2 font-bold text-green-700">{{ product.price }} MDL</p>

    <div class="mt-3 flex items-center gap-2">
      <label class="text-sm">Cantitate</label>
      <input
        type="number"
        v-model.number="qty"
        min="1"
        :max="product.stock"
        class="border px-2 py-1 w-20 rounded"
      />
    </div>

    <button
      class="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
      :disabled="qty < 1 || qty > product.stock"
      @click="addToCart(product, qty)"
    >
      Adauga in cos
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCart } from '~/composables/useCart'
defineProps<{ product: any }>()
const { addToCart } = useCart()
const qty = ref(1)
</script>
