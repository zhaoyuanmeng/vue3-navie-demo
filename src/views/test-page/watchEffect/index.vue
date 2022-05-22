<template>
  <div>
    <h1>watchEffect</h1>
    <h2>它立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数。</h2>
    <h3>结果{{ count }}</h3>

    <h1 @click="cl">停止监听watchEffect</h1>
  </div>
</template>
<script setup>
import { ref, watchEffect } from 'vue'

const count = ref(1)

// 一旦监听到了就会立即执行
const stop = watchEffect(() => {
  count.value++
})

setTimeout(() => {
  count.value++
}, 1000)

// 这里是停止watchEffect
const cl = () => {
  stop()
}
</script>
<style lang=""></style>
