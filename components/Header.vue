<template>
  <header class="sticky top-0 z-10 bg-white/80 backdrop-blur shadow flex items-center justify-between px-4 py-3">
    <h1 class="font-bold text-xl">🍏 FoodShop</h1>

    <button type="button" @click="emit('toggle-cart')" class="relative text-2xl" aria-label="Open cart">
      🛒
      <span v-if="badgeCount"
        class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs leading-5 min-w-[20px] text-center">
        {{ badgeCount }}
      </span>
    </button>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCart } from '~/composables/useCart'

const emit = defineEmits<{ (e: 'toggle-cart'): void }>()
const { cart } = useCart()

const badgeCount = computed(() =>
  cart.value.reduce((s, item) => s + (item.quantity ?? 0), 0)
)
</script>
