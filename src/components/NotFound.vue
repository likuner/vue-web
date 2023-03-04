<template>
  <ElResult
    icon="warning"
    title="Page Not Found"
  >
    <template #extra>
      <ElButton type="primary" @click="handleClick">Back Home</ElButton>
    </template>
  </ElResult>
</template>

<script setup lang="ts">
const router = useRouter()
const handleClick = () => {
  router.replace('/')
}
</script>

<style scoped>
</style>