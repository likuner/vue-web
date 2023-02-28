<template>
  <ElSpace direction="vertical" alignment="stretch" :class="['custom']">
    <ElAlert type="success" effect="dark" :closable="false">
      id: {{ userId }} name: {{ userName }} email: {{ userEmail }}
    </ElAlert>
    <ElInput :model-value="userId" @input="setUserId($event)" />
    <ElInput :model-value="userName" @input="setUserName($event)" />
    <ElInput :model-value="userEmail" @input="setUserEmail($event)" />
  </ElSpace>
  <ElSpace>
    <ElButton @click="handlClick" type="primary">About</ElButton>
    <ElButton @click="handlAdd" type="primary">add page</ElButton>
    <ElButton @click="handlRemove" type="primary">remove page</ElButton>
  </ElSpace>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store/user'
import { usePageStore } from '@/store/page'
import { getUserInfo } from '@/api'

const router = useRouter()
const pageStore = usePageStore()
const userStore = useUserStore()
const { userId, userName, userEmail } = storeToRefs(userStore)
const { setUser, setUserId, setUserName, setUserEmail } = userStore

getUserInfo().then(res => {
  if (res.code === 200) {
    setUser(res.data)
  }
})

const handlClick = () => {
  router.push('/about')
}
const handlAdd = () => {
  pageStore.add('About')
}
const handlRemove = () => {
  pageStore.remove('About')
}

</script>

<style lang="scss" scoped>
.custom {
  display: flex;
  width: 50%;
}
</style>