<template lang="">
  <div>
    <h1>Refs的使用</h1>
  </div>
</template>
<script setup>
import { ref, reactive, toRef, toRefs } from 'vue'

// ===================== toRef ============== //
const state = reactive({
  foo: 1,
  bar: 2,
})
let { foo, bar } = state
foo = toRef(state, 'foo')
state.foo = 22
state.bar = 22
console.log('state', state)
console.log('foo', foo.value) //22
console.log('bar', bar) // 2
foo.value = 2323
console.log('state', state) // 2323
console.log('-----------')

// =============================================//

// ============================toRefs ==========//

const state1 = reactive({
  a: 1,
  b: 2,
})

const state2 = toRefs(state1)

const { a, b } = state2

// 此时 a,b都是ref数据了 而且他俩更改值也会更新state1和state2

console.log('a', a.value)
console.log('b', b.value)
console.log('state1', state1)
console.log('state2', state2)

console.log('-----------')

a.value = 21
b.value = 21
console.log('state1', state1)
console.log('state2', state2)
console.log('-----------')
state1.a = 25
state1.b = 25
console.log('a', a.value)
console.log('b', b.value)
console.log('state1', state1)
console.log('state2', state2)
</script>
<style lang=""></style>
