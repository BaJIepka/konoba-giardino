<template>
  <BaseLayout>
    <template v-if="categ.divs.length > 1" v-slot:submenu>
      <div class="divs-wrapper">
        <div class="d-flex ai-center">
          <div v-for="(div, di) in categ.divs" :key="di" class="div-button" :class="{ active: di === activeDiv }" @click="scrollTo(di)">
            {{ div.name }}
          </div>
        </div>
      </div>
    </template>
    <template v-slot:title>
      <h2 class="text-center">{{ categ.name }}</h2>
    </template>
    <div class="divs" ref="divsRef">
      <div v-for="(div, di) in categ.divs" :key="di" class="mt-15">
        <div class="div-name" v-if="categ.divs.length > 1">{{ div.name }}</div>
        <div v-for="(item, j) in div.items" :key="j" class="dish-box mt-10">
          <div v-if="item.img" class="mb-5">
            <img :src="item.img" alt="">
          </div>
          <div class="dish-text">
            <div class="dish-name">{{ item.name }}</div>
            <div class="dish-desc">{{ item.description }}</div>
            <div class="level ai-center mt-3">
              <div class="dish-weight">{{ item.weight }}</div>
              <div class="dish-price-count d-flex ai-center">
                <div class="dish-price">€{{ item.price }}</div>
                <div v-if="!state.cart[item.id]" class="dish-add-button" @click="state.cart[item.id] = 1">+</div>
                <div v-else class="d-flex dish-counts">
                  <div class="remove-btn" @click="remove(item)">-</div>
                  <div class="dish-count">{{ state.cart[item.id] }}</div>
                  <div class="add-btn" @click="state.cart[item.id]++">+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
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
    const categ = computed(() => menu.value.find(c => c.code === route.params.code))
    const divsRef = ref(null)
    const activeDiv = ref(0)
    let topMenuOffset
    const scrollTo = (divIdx) => {
      const { top } = divsRef.value.children[divIdx].getBoundingClientRect()
      window.scrollTo(0, top - topMenuOffset + window.scrollY)
    }
    const onWindowScroll = () => {
      activeDiv.value = Math.max([...divsRef.value.children].findLastIndex(div => {
        return div.getBoundingClientRect().top <= topMenuOffset + 1
      }), 0)
    }
    onMounted(() => {
      window.scrollTo(0, 0)
      topMenuOffset = document.querySelector('.top-menu').offsetHeight + 10
      window.addEventListener('scroll', onWindowScroll)
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', onWindowScroll)
    })
    return {
      categ,
      state,
      i18n,
      remove,
      removingItem,
      divsRef,
      scrollTo,
      activeDiv
    }
  }
}
</script>

<style scoped>
.divs-wrapper {
  overflow-y: hidden;
}
.divs-wrapper::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  background: transparent;
}
.div-button {
  padding: 10px 10px 5px;
  cursor: pointer;
  border-bottom: 5px solid transparent;
  white-space: nowrap;
}
.div-button.active {
  border-color: white;
}
.div-name {
  font-weight: bold;
  margin-top: 30px;
  font-size: 1.2em;
  padding-bottom: 5px;
  border-bottom: 1px solid black;
}
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
  font-size: 1.1em;
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
  border-radius: 5px;
}
.remove-btn {
  border-radius: 5px 0 0 5px;
}
.add-btn {
  border-radius: 0 5px 5px 0;
}
</style>
