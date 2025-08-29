import { watch } from 'vue'

type CartItem = {
  id: number
  title: string
  price: number
  quantity: number
  image: string
}

export default defineNuxtPlugin(() => {
  const key = 'cart:v1'
  const cart = useState<CartItem[]>('cart', () => [])

  try {
    const raw = localStorage.getItem(key)
    if (raw) {
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed)) cart.value = parsed
    }
  } catch {}
  watch(cart, (val) => {
    try { localStorage.setItem(key, JSON.stringify(val)) } catch {}
  }, { deep: true })
})
