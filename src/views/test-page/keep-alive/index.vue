<template>
  <div p24>
    <n-gradient-text gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"> 注意查看提示语 </n-gradient-text>
  </div>
</template>

<!--使用keep-alive须设置name，注意请与对应的路由的name保持一致，方便统一处理-->
<!--include和declude筛选缓存的要求keep-alive下所有component必须有name字段，否则没有声明name字段的组件也会被缓存。-->
<script setup name="TestKeepAlive">
import { onMounted, onActivated, onDeactivated } from 'vue'

onMounted(() => {
  $message.success('触发onMounted')
})

onActivated(() => {
  $message.success('触发onActivated')
})

onDeactivated(() => {
  $message.success('触发onDeactivated')
})
</script>
