<template>
  <div>
    <span class="backref" @click="router.back()">Назад</span>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    return {
      router: useRouter()
    }
  }
}
</script>

<style scoped>
.backref {
  color: #aaaaaa;
  cursor: pointer;
  font-weight: bold;
}
.backref:hover {
  color: #999999;
}
</style>
