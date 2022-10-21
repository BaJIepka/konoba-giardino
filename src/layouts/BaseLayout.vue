<template>
  <div class="wrapper">
    <div class="top-menu">
      <BackRef v-if="back" />
      <div v-else />
      <div>
        <div @click="langOpened = !langOpened" class="selected-lang" :class="{ opened: langOpened }">
          <div v-if="state.lang === 'sr'" class="lang">
            <img src="@/assets/img/flags/sr.png" alt>
            SR
          </div>
          <div v-else-if="state.lang === 'en'" class="lang">
            <img src="@/assets/img/flags/en.png" alt>
            EN
          </div>
          <div v-else-if="state.lang === 'ru'" class="lang">
            <img src="@/assets/img/flags/ru.png" alt>
            RU
          </div>
          <div v-else-if="state.lang === 'it'" class="lang">
            <img src="@/assets/img/flags/it.png" alt>
            IT
          </div>
        </div>
        <div v-if="langOpened" class="lang-select" @click="langOpened = false">
          <div @click="state.lang = 'sr'" class="lang" :class="{ selected: state.lang === 'sr' }">
            <img src="@/assets/img/flags/sr.png" alt>
            SR
          </div>
          <div @click="state.lang = 'en'" class="lang" :class="{ selected: state.lang === 'en' }">
            <img src="@/assets/img/flags/en.png" alt>
            EN
          </div>
          <div @click="state.lang = 'ru'" class="lang" :class="{ selected: state.lang === 'ru' }">
            <img src="@/assets/img/flags/ru.png" alt>
            RU
          </div>
          <div @click="state.lang = 'it'" class="lang" :class="{ selected: state.lang === 'it' }">
            <img src="@/assets/img/flags/it.png" alt>
            IT
          </div>
        </div>
      </div>
      <div class="text-right">
        <router-link to="/cart" class="cart">
          <img src="@/assets/img/cart.svg">
          <span class="ml-5">€{{ cartTotal }}</span>
        </router-link>
      </div>
    </div>
    <div class="text-center">
      <img src="@/assets/img/restaurant.jpg" alt>
      <div class="logo-wrapper">
        <img src="@/assets/img/logo.png" alt>
      </div>
    </div>
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import state from '@/state'
import menu from '@/menu'

export default {
  props: {
    back: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const langOpened = ref(false)
    const prices = Object.fromEntries(menu.value.map(c => c.items).flat().map(d => [d.id, d.price]))
    const cartTotal = computed(() => {
      return Object.entries(state.cart).reduce((acc, [id, count]) => acc + prices[id] * count, 0).toFixed(2)
    })
    return {
      state,
      langOpened,
      cartTotal
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
  box-shadow: 0 0 5px #aaaaaa;
}
.container {
  margin: 0 auto;
  padding: 8px;
}
.top-menu {
  background: #2e1210;
  padding: 5px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1;
}
.top-menu > div {
  flex: 1;
}
.lang-select {
  position: absolute;
  top: 100%;
  background: #2e1210;
  z-index: 1;
  padding: 5px;
  width: 100%;
  color: white;
}
.selected-lang {
  display: inline-block;
  padding-right: 25px;
}
.lang {
  display: flex;
  align-items: center;
  padding: 3px;
}
.lang.selected {
  font-weight: bold;
  background: #913030;
}
.lang:not(:first-child) {
  margin-top: 5px;
}
.lang img {
  margin-right: 10px;
  width: 45px;
  box-shadow: 0 0 4px #aaaaaa;
}
.logo-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.cart {
  background: #32488d;
  display: inline-flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  color: inherit;
  text-decoration: none;
}
</style>
