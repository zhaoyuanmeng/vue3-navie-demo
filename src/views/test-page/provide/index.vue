<template lang="">
  <div>
    <h1 text-green-500>provide注入的使用</h1>
    <testVue></testVue>
    <h1>state的数据{{ state.name }}</h1>
  </div>
</template>
<script setup>
import testVue from './test.vue'
import { reactive } from 'vue'
import { provide } from 'vue'
// 响应式数据的版本  这样就实现了双向绑定
const state = reactive({
  name: 'jac',
})
// 不是响应式数据的版本
provide('name', 'zyd')
provide('obj', {
  age: 20,
  color: 'red',
})

provide('reactiveData', state)
</script>
<style lang=""></style>
