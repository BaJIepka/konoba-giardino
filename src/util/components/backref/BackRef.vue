<template>
  <div>
    <span class="backref" @click="router.back()">
      <img src="@/assets/img/back.png" alt>
    </span>
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
  padding-right: 10px;
}
.backref img {
  height: 25px;
}
.backref:hover {
  color: #999999;
}
</style>
