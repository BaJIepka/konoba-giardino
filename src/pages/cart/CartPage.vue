<template>
  <BaseLayout back>
    <h2>{{ i18n('Your order', 'Your order', 'Ваш заказ', 'Your order') }}</h2>
    <div v-for="(count, id) in state.cart" :key="id" class="dish-box level mt-5">
      <div>
        <div class="dish-name">{{ menuById[id].name }}</div>
      </div>
      <div class="d-flex flex-col ai-end">
        <div>€{{ menuById[id].price.toFixed(2) }} x {{ count }} = €{{ (menuById[id].price * count).toFixed(2) }}</div>
        <div class="d-flex ai-center">
          <div v-if="!state.cart[id]" class="dish-add-button" @click="state.cart[id] = 1">+</div>
          <div v-else class="d-flex dish-counts">
            <div class="remove-btn" @click="state.cart[id]--">-</div>
            <div class="add-btn" @click="state.cart[id]++">+</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-15 text-center total">
      <strong>{{ i18n('Total', 'Total', 'Итого', 'Total') }}: €{{ Object.entries(state.cart).reduce((acc, [id, count]) => acc + (menuById[id].price * count), 0).toFixed(2) }}</strong>
    </div>
  </BaseLayout>
</template>

<script>
import { computed } from 'vue'
import state from '@/state'
import menu from '@/menu'
import i18n from '@/i18n'

export default {
  setup() {
    const menuById = computed(() => Object.fromEntries(menu.value.map(c => c.items).flat().map(d => [d.id, d])))
    return {
      state,
      menuById,
      i18n
    }
  }
}
</script>

<style scoped>
.dish-box {
  border-radius: 7px;
  box-shadow: 0 0 5px #aaaaaa;
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
.dish-counts {
  justify-content: flex-end;
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
.total {
  font-size: 1.2em;
}
</style>
