<template>
  <RouterView #default="{ Component, route }">
    <KeepAlive :include="pageStore.pages">
      <component :is="Component" :key="route.fullPath" />
    </KeepAlive>
  </RouterView>
</template>

<script setup lang="ts">
import { usePageStore } from '@/store/page'

const pageStore = usePageStore()
</script>

<style scoped></style>