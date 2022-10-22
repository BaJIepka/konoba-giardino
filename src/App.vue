<template>
  <router-view />
</template>

<script>
import { onMounted, onUnmounted } from 'vue'

export default {
  setup() {
    const onResize = () => {
      const meta = document.querySelector('meta[name="viewport"]')
      if (window.outerWidth >= 390) {
        meta.content = 'width=390'
      } else {
        meta.content = 'width=device-width,initial-scale=1.0'
      }
    }
    onMounted(() => {
      window.addEventListener('resize', onResize)
      onResize()
    })
    onUnmounted(() => {
      window.removeEventListener('resize', onResize)
    })
  }
}
</script>

<style>
:root {
  --info-color: #32488d;
  --danger-color: #8d3232;
}
* {
  box-sizing: border-box;
  position: relative;
}
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
}
.level {
  display: flex;
  justify-content: space-between;
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
}
.ml-5 {
  margin-left: 5px !important;
}
.mt-0 {
  margin-top: 0 !important;
}
.mt-5 {
  margin-top: 5px !important;
}
.mt-10 {
  margin-top: 10px !important;
}
.mt-15 {
  margin-top: 15px !important;
}
.box {
  /* border: 1px solid #cccccc; */
  /* border-radius: 10px; */
  padding: 5px;
}
.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}
img {
  max-width: 100%;
}
.d-flex {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
.ai-end {
  align-items: end;
}
.ai-center {
  align-items: center;
}
.jc-center {
  justify-content: center;
}
.button {
  display: inline-block;
  border-radius: 7px;
  padding: 5px 10px;
}
.button.btn-info {
  background: var(--info-color);
  color: white;
}
.button.btn-danger {
  background: var(--danger-color);
  color: white;
}
</style>
