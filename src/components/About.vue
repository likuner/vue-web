<template>
  <ElSpace direction="vertical" alignment="flex-start">
    <ElAlert type="warning" effect="dark" :closable="false">
      Hello, {{userStore.userName}}
    </ElAlert>
    <ElButton @click="handlClick" type="primary">Back</ElButton>
  </ElSpace>
  <div class="test">test</div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onActivated } from 'vue'
  import { useRouter } from 'vue-router'
  import { useUserStore } from '@/store/user'

  const router = useRouter()
  const userStore = useUserStore()

  const handlClick = () => {
    router.back()
  }

  onMounted(() => {
    console.log('about mounted')
  })

  onActivated(() => {
    console.log('about activated')
  })
</script>

<style lang="scss" scoped>
  .test {
    color: $base-color;
  }
</style>