
<template>
  <div class="fixed top-0 z-50 right-0 w-80 max-w-full bg-white shadow-2xl p-4 h-full overflow-y-auto">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-lg font-bold">Cosul meu</h2>
      <button class="text-gray-500 hover:text-black" @click="$emit('close')">✕</button>
    </div>

    <div v-if="!cart.length" class="text-gray-600">Cosul este gol.</div>

    <div v-for="item in cart" :key="item.id" class="border-b py-3">
      <div class="flex items-center gap-3">
        <img :src="item.image" class="w-12 h-12 object-cover rounded" />
        <div class="flex-1">
          <p class="font-medium">{{ item.title }}</p>
          <p class="text-sm text-gray-600">{{ item.price }} MDL / buc</p>
        </div>
      </div>

      <div class="mt-2 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-sm">Qty</span>
          <input
            type="number"
            v-model.number="localQty[item.id]"
            min="1"
            class="border px-2 py-1 w-16 rounded"
            @change="changeQuantity(item.id, localQty[item.id])"
          />
        </div>
        <div class="font-semibold">
          {{ (item.price * item.quantity).toFixed(2) }} MDL
        </div>
      </div>

      <button class="mt-2 text-red-600 hover:underline text-sm" @click="removeFromCart(item.id)">
        Sterge
      </button>
    </div>

    <div v-if="cart.length" class="mt-4 p-3 bg-gray-50 rounded border font-bold">
      Total: {{ totalPrice().toFixed(2) }} MDL
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCart } from '~/composables/useCart'
const { cart, removeFromCart, changeQuantity, totalPrice } = useCart()
const localQty = reactive<Record<number, number>>({})
watchEffect(() => {
  cart.value.forEach(i => { localQty[i.id] = i.quantity })
})
</script>
