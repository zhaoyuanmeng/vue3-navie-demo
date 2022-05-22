<template>
  <!-- 这里面相当于是 放的main 跳转的函数 -->
  <router-view v-slot="{ Component, route }">
    <transition name="fade-slide" mode="out-in" appear>
      <keep-alive :include="keepAliveRouteNames">
        <component :is="Component" v-if="appStore.reloadFlag" :key="route.path" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/store/modules/app'

const appStore = useAppStore()
const router = useRouter()
const allRoutes = router.getRoutes()
// 实现按需进行组件数据的渲染缓存
const keepAliveRouteNames = computed(() => {
  return allRoutes.filter((route) => route.meta?.keepAlive).map((route) => route.name)
})

console.log('-------------', keepAliveRouteNames.value)
</script>
