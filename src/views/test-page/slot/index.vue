<template lang="">
  <div>
    <!-- 引入插槽的组件 -->
    <div>组件里面的值{{ data }}</div>
    <comVue :item="data">
      <template v-slot:content="slotProps">
        <div>子组件里面的更新后的值：{{ slotProps.item }}</div>
      </template>
    </comVue>
    <div>test里面的值:{{ test1 }}</div>
    <div>usetest里面的值:{{ usetest.data }}</div>
  </div>
</template>
<script setup>
import comVue from './com.vue'
import { ref } from 'vue'
import { test } from '@/store/test'
import { useTestStore } from '@/store/modules/test'
const usetest = useTestStore()
// 如果是响应式的就会是双向更新 因为传递的是一个地址这个地址没有重新被赋值
// const data = ref({
//   age: 23,
// })
let test1 = test
// 不是响应式的就是单项更新  这个地址被重新赋值了 所以就断了
const data = {
  age: 23,
}
</script>
<style lang=""></style>
