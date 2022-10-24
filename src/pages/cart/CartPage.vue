<template>
  <BaseLayout>
    <template v-slot:title>
      <h2>{{ i18n('Your order', 'Your order', 'Ваш заказ', 'Your order') }}</h2>
    </template>
    <div v-if="Object.keys(state.cart).length === 0">
      {{
        i18n(
          'Your order is currently empty',
          'Your order is currently empty',
          'Ваш заказ пока пуст',
          'Your order is currently empty'
        )
      }}
    </div>
    <div v-for="(count, id) in state.cart" :key="id" class="dish-box d-flex mt-5">
      <div class="img">
        <div v-if="menuById[id].img" :style="{ 'background-image': 'url(' + menuById[id].img + ')' }" />
      </div>
      <div class="flex-fill ml-15">
        <div class="dish-name">{{ menuById[id].name }}</div>
        <div class="dish-weight">{{ menuById[id].weight || '450gram' }}</div>
        <div class="level ai-center">
          <div>
            <strong class="dish-count">{{ count }}</strong> x €{{ menuById[id].price.toFixed(2) }} = <strong>€{{ (menuById[id].price * count).toFixed(2) }}</strong></div>
          <div class="d-flex ai-center">
            <div v-if="!state.cart[id]" class="dish-add-button" @click="state.cart[id] = 1">+</div>
            <div v-else class="d-flex dish-counts">
              <div class="remove-btn" @click="remove(menuById[id])">-</div>
              <div class="add-btn" @click="state.cart[id]++">+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mt-10 total level">
      <div><strong>{{ i18n('Total', 'Total', 'Итого', 'Total') }}:</strong></div>
      <div><strong>€{{ Object.entries(state.cart).reduce((acc, [id, count]) => acc + (menuById[id].price * count), 0).toFixed(2) }}</strong></div>
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
import { ref, computed } from 'vue'
import state from '@/state'
import menu from '@/menu'
import i18n from '@/i18n'

export default {
  setup() {
    const menuById = computed(() => {
      const obj = {}
      for (const categ of menu.value) {
        for (const div of categ.divs) {
          for (const item of div.items) {
            obj[item.id] = item
          }
        }
      }
      return obj
    })
    const removingItem = ref(null)
    const remove = (item) => {
      if (state.cart[item.id] === 1) {
        removingItem.value = item
      } else {
        state.cart[item.id]--
      }
    }
    return {
      state,
      menuById,
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
  padding: 8px;
}
.dish-name {
  font-weight: bold;
}
.dish-price {
  font-size: 1.3em;
  margin-right: 5px;
}
.dish-weight {
  color: #999999;
  font-size: 0.7em;
}
.dish-count {
  font-size: 1.2em;
}
.dish-counts {
  justify-content: flex-end;
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
.img {
  width: 80px;
}
.img > div {
  width: 100%;
  height: 100%;
  max-height: 68px;
  background-size: cover;
  border-radius: 7px;
}
.remove-btn {
  border-radius: 3px 0 0 3px;
}
.add-btn {
  border-radius: 0 3px 3px 0;
}
.total {
  font-size: 1.2em;
  margin-bottom: 100px;
  padding: 0 10px;
}
</style>
