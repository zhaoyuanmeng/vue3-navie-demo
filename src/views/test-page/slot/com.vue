/* *@Author: 赵元达 *@Date: 2022-05-23 11:24:50 *@parms: *@Description: 测试组件 */

<template lang="">
  <div>
    <header>
      <slot name="header"> header </slot>
    </header>
    <div>
      <slot name="content" :item="data"> content </slot>
    </div>

    <footer>
      <slot name="footer"> footer </slot>
    </footer>
  </div>
</template>
<script setup>
// 引入props
const props = defineProps({
  item: Object,
})

// 拿到props
const data = props.item

// 进行处理 然后显示到父组件里面的插槽去
data.age = 29
</script>
<style lang=""></style>
