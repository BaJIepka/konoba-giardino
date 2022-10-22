<template>
  <BaseLayout isMainPage>
    <template v-slot:top>
      <div class="text-center">
        <img src="@/assets/img/restaurant.jpg" alt>
        <div class="logo-wrapper">
          <img src="@/assets/img/logo.png" alt>
        </div>
      </div>
    </template>
    <div v-for="(categ, i) in menu.filter(m => m.divs[0].items.length > 0)" :key="i" class="category">
      <router-link :to="`/categ/${categ.code}`" class="categ-link">
        <img :src="categ.img" alt>
        <div class="categ-name">{{ categ.name }}</div>
      </router-link>
    </div>
  </BaseLayout>
</template>

<script>
import state from '@/state'
import menu from '@/menu'

export default {
  setup() {
    return {
      menu,
      state
    }
  }
}
</script>

<style scoped>
.category:not(:first-child) {
  margin-top: 5px;
}
.categ-link {
  text-decoration: none;
  text-align: center;
  display: block;
}
.category, .categ-link, .categ-link img {
  border-radius: 7px;
}
.categ-name {
  position: absolute;
  width: 100%;
  padding: 0 15px;
  bottom: 15px;
  color: white;
  text-shadow: 0 0 3px black;
  font-size: 1.6em;
}
.logo-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
