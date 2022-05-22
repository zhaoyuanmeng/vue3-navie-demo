<template>
  <div>
    <h1>watch</h1>
    <h2>
      watch API 完全等同于组件侦听器 property。watch 需要侦听特定的数据源，并在回调函数中执行副作用。默认情况下，
      它也是惰性的，即只有当被侦听的源发生变化时才执行回调。
    </h2>
    <h3>watch结果：{{ count }}</h3>
    <h3>watch监听多个数据源的结果：{{ first + '----' + second }}</h3>
    <h3>watch监听响应式对象(数组)：{{ arr }}</h3>
    <h3>watch监听响应式对象（多层嵌套的）：{{ obj }}</h3>
  </div>
</template>
<script setup>
import { ref, watch, reactive } from 'vue'
import _, { cloneDeep } from 'lodash'
const count = ref(1)
const first = ref('')
const second = ref('')

const arr = reactive([1, 2, 3, 4])
const obj = reactive({
  name: 'zyd',
  cotent: {
    age: '',
  },
})

// 可以是返回值的getter函数
// watch(
//   () => {
//     return count.value
//   },
//   (newCount, oldCount) => {
//     // 这里写逻辑
//     console.log('oldCount', oldCount)
//     console.log('newCount', newCount)
//   }
// )

// 可以直接是ref 可以挂count 也可以不挂
watch(count, (newCount, oldCount) => {
  // 这里写逻辑
  console.log('oldCount', oldCount)
  console.log('newCount', newCount)
})

// 监听多个数据源

watch([first, second], (newVal, oldVal) => {
  console.log('newVal', newVal) //['zyd', 'jzc']
  console.log('oldVal', oldVal) // ['', '']
})

// setTimeout(() => {
//   count.value++
// }, 1200)

// setTimeout(() => {
//   // 这里面同步更改 只会触发一次watch 并不是两次
//   first.value = 'zyd'
//   second.value = 'jzc'
// }, 1200)

// 监听响应式对象或者数组、检查深度嵌套对象的时候 需要开启deep选项
watch(
  () => {
    return [...arr]
  },
  (newVal, oldVal) => {
    console.log('newVal', newVal)
    console.log('oldVal', oldVal)
  },
  {
    deep: true,
  }
)
// setTimeout(() => {
//   arr.push(5)
// }, 1200)

// watch(
//   obj,
//   (newVal, oldVal) => {
//     console.log('newVal', newVal) // 不用深拷贝的化 newVal和oldVal的值就会一样
//     console.log('oldVal', oldVal)
//   },
//   {
//     deep: false,
//   }
// )

watch(
  () => {
    return _.cloneDeep(obj)
  },
  (newVal, oldVal) => {
    console.log('newVal', newVal) // 用深拷贝的化 两个的值就不一样
    console.log('oldVal', oldVal)
  },
  {
    deep: false,
  }
)
setTimeout(() => {
  obj.cotent.age++
}, 1200)
</script>
<style lang=""></style>
