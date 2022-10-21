import { reactive, watch } from 'vue'

let cart = localStorage.getItem('cart')
if (cart) {
  cart = JSON.parse(cart)
} else {
  cart = {}
}
const state = reactive({
  lang: localStorage.getItem('lang') || 'sr',
  cart
})

watch(() => state.lang, () => {
  localStorage.setItem('lang', state.lang)
})
watch(state.cart, () => {
  localStorage.setItem('cart', JSON.stringify(state.cart))
})

export default state
