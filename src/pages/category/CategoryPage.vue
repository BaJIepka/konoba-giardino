<template>
  <BaseLayout back>
    <h3>{{ categ.name }}</h3>
    <div v-for="(item, j) in categ.items" :key="j" class="dish-box mt-10">
      <div v-if="item.img"><img :src="item.img" alt=""></div>
      <div v-else><img src="@/assets/img/restaurant.jpg" alt=""></div>
      <div class="dish-text">
        <div class="level mt-5">
          <div class="dish-name">{{ item.name }}</div>
          <div class="d-flex ai-center">
            <div class="dish-price">€{{ item.price }}</div>
            <div v-if="!state.cart[item.id]" class="dish-add-button" @click="state.cart[item.id] = 1">+</div>
            <div v-else class="d-flex dish-counts">
              <div class="remove-btn" @click="remove(item)">-</div>
              <div class="dish-count">{{ state.cart[item.id] }}</div>
              <div class="add-btn" @click="state.cart[item.id]++">+</div>
            </div>
          </div>
        </div>
        <div class="dish-desc mt-10">{{ item.description }}</div>
      </div>
    </div>
  </BaseLayout>
  <Modal v-if="removingItem" @close="removingItem = null">
    <div class="text-center">
      {{
        i18n(
          `Do you want to delete ${removingItem.name} from your order?`,
          `Do you want to delete ${removingItem.name} from your order?`,
          `Вы действительно хотите удалить ${removingItem.name} из Вашего заказа?`,
          `Do you want to delete ${removingItem.name} from your order?`,
        )
      }}
    </div>
    <div class="mt-15 d-flex jc-center">
      <div class="button btn-danger" @click="delete state.cart[removingItem.id]; removingItem = null">
        {{ i18n('Yes', 'Yes', 'Да', 'Yes') }}
      </div>
      <div class="button btn-info ml-5" @click="removingItem = null">
        {{ i18n('No', 'No', 'Нет', 'No') }}
      </div>
    </div>
  </Modal>
</template>

<script>
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import i18n from '@/i18n'
import state from '@/state'
import menu from '@/menu'

export default {
  setup() {
    const route = useRoute()
    const removingItem = ref(null)
    const remove = (item) => {
      if (state.cart[item.id] === 1) {
        removingItem.value = item
      } else {
        state.cart[item.id]--
      }
    }
    return {
      categ: computed(() => menu.value.find(c => c.code === route.params.code)),
      state,
      i18n,
      remove,
      removingItem
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
  background: var(--info-color);
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
