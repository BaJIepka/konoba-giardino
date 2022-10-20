<template>
  <BaseLayout back>
    <h3>{{ categ.name }}</h3>
    <div v-for="(item, j) in categ.items" :key="j" class="dish-box mt-10">
      <div v-if="item.img"><img :src="item.img" alt=""></div>
      <div class="dish-text">
        <div class="level mt-5">
          <div class="dish-name">{{ item.name }}</div>
          <div class="d-flex ai-center">
            <div class="dish-price">€{{ item.price }}</div>
            <div v-if="!state.cart[item.id]" class="dish-add-button" @click="state.cart[item.id] = 1">+</div>
            <div v-else class="d-flex dish-counts">
              <div class="remove-btn" @click="state.cart[item.id]--">-</div>
              <div class="dish-count">{{ state.cart[item.id] }}</div>
              <div class="add-btn" @click="state.cart[item.id]++">+</div>
            </div>
          </div>
        </div>
        <div class="dish-desc mt-10">{{ item.description }}</div>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import state from '@/state'
import menu from '@/menu'

export default {
  setup() {
    const route = useRoute()
    return {
      categ: computed(() => menu.value.find(c => c.code === route.params.code)),
      state
    }
  }
}
</script>

<style scoped>
.dish-box {
  border-radius: 7px;
  box-shadow: 0 0 5px #aaaaaa;
}
.dish-box img {
  border-radius: 7px 7px 0 0;
}
.dish-text {
  padding: 8px;
}
.dish-name {
  font-weight: bold;
}
.dish-price {
  font-size: 1.3em;
  margin-right: 5px;
}
.dish-desc {
  color: #999999;
  font-size: 0.7em;
}
.dish-add-button,
.dish-counts > div {
  background: #32488d;
  color: white;
  padding: 1px 3px 5px 3px;
  text-align: center;
  width: 30px;
  user-select: none;
  font-weight: bold;
  font-size: 1.2em;
}
.dish-add-button {
  border-radius: 3px;
}
.remove-btn {
  border-radius: 3px 0 0 3px;
}
.add-btn {
  border-radius: 0 3px 3px 0;
}
</style>
