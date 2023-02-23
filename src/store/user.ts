import { ref, computed, Ref } from 'vue'
import { defineStore } from 'pinia'
import { UserStoreId } from './store-id'

interface User {
  id?: string,
  name?: string,
  email?: string
}

export const useUserStore = defineStore(UserStoreId, () => {
  // state
  const user: Ref<User> = ref({})

  // computed
  const userId = computed(() => user.value.id)

  const userName = computed(() => user.value.name)

  const userEmail = computed(() => user.value.email)

  // action
  function setUser(userInfo: User) {
    user.value = userInfo
  }

  function setUserId(id: string) {
    user.value.id = id
  }

  function setUserName(name: string) {
    user.value.name = name
  }

  function setUserEmail(email: string) {
    user.value.email = email
  }

  return {
    user, userId, userName, userEmail,
    setUser, setUserId, setUserName, setUserEmail
  }

}, { persist: { paths: ['user.name', 'user.id', 'user.email'] } })

