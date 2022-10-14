import { reactive, watch } from 'vue'

let cart = localStorage.getItem('cart')
if (cart) {
  cart = JSON.parse(cart)
}
else {
  cart = {}
}
const state = reactive({
  lang: localStorage.getItem('lang') || 'sr',
  cart
})

watch(() => state.lang, () => {
  localStorage.setItem('lang', state.lang)
})

export default state
