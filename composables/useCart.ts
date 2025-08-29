import { useCookie } from '#imports'  

type CartItem = {
  id: number; title: string; price: number; quantity: number; image: string;
}

export const useCart = () => {
  const cart = useCookie<CartItem[]>('cart', {
    default: () => [],
    sameSite: 'lax'
  })

  const addToCart = (product: any, quantity = 1) => {
    const existing = cart.value.find(p => p.id === product.id)
    if (existing) existing.quantity += quantity
    else cart.value.push({
      id: product.id, title: product.title, price: product.price,
      image: product.image, quantity
    })
  }

  const removeFromCart = (id: number) => {
    cart.value = cart.value.filter(p => p.id !== id)
  }

  const changeQuantity = (id: number, qty: number) => {
    const item = cart.value.find(p => p.id === id)
    if (item) item.quantity = Math.max(1, qty)
  }

  const totalPrice = () =>
    cart.value.reduce((acc, i) => acc + i.price * i.quantity, 0)

  return { cart, addToCart, removeFromCart, changeQuantity, totalPrice }
}
