<template lang="">
  <div>
    <h2>我是test子组件</h2>
    <h3>来自父组件注入的数据{{ name + '---' + obj.age }}</h3>
    <h4><button @click="btn">更改父及注入的数据</button></h4>
  </div>
</template>
<script setup>
import { inject } from 'vue'

const name = inject('name')
const obj = inject('obj')
const state = inject('reactiveData')
const btn = () => {
  state.name = 'baobei'
}
</script>
<style lang=""></style>
