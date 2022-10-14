<template>
  <div class="wrapper">
    <div class="top-menu">
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
            <img src="@/assets/img/flags/ru.png" alt>
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
            <img src="@/assets/img/flags/ru.png" alt>
            IT
          </div>
        </div>
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
import { ref } from 'vue'
import state from '@/state'

export default {
  setup() {
    const langOpened = ref(false)
    return {
      state,
      langOpened
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
  background: #eeeeee;
  padding: 5px 15px;
  display: flex;
  justify-content: flex-end;
}
.lang-select {
  position: absolute;
  top: 100%;
  background: #eeeeee;
  z-index: 1;
  padding: 5px;
  width: 100%;
}
.selected-lang {
  display: inline-block;
  padding-right: 25px;
}
.selected-lang::after {
  content: '⮟';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
}
.selected-lang.opened::after {
  content: '⮝';
}
.lang {
  display: flex;
  align-items: center;
  padding: 3px;
}
.lang.selected {
  font-weight: bold;
  background: #aaaaaa;
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
</style>