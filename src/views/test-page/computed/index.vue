<template>
  <div>
    <div>computed值为{{ result }}</div>
    <div>computed值为{{ count }}</div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
const count = ref(1)

const result = computed(() => {
  return count.value + 1
})

// 这里会报错 因为返回值是一个不可改变的响应式的值 或者传入的时候按照下面的写法
// result.value ++

const result_new = computed({
  get: () => {
    return count.value + 1
  },
  set: (val) => {
    count.value = val - 1
  },
})

result_new.value = 1
// 此时count.value 会变为0
</script>
<style lang=""></style>
