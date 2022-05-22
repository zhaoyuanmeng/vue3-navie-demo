<template>
  <n-config-provider :theme-overrides="useTheme.naiveThemeOverrides">
    <!-- :theme-overrides="useTheme.naiveThemeOverrides" -->
    <n-loading-bar-provider>
      <LoadingBar />
      <n-dialog-provider>
        <DialogContent />
        <n-message-provider>
          <MessageContent />
          <slot></slot>
        </n-message-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup>
import MessageContent from './MessageContent.vue'
import DialogContent from './DialogContent.vue'
import { darkTheme } from 'naive-ui'
import LoadingBar from './LoadingBar.vue'
import { useThemeStore } from '@/store/modules/theme'

const useTheme = useThemeStore()
</script>
