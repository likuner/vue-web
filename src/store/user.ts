import { ref, computed, Ref } from 'vue'
import { defineStore } from 'pinia'
import { UserStoreId } from './store-id'

interface User {
  id?: string,
  name?: string,
  phone?: string
}

export const useUserStore = defineStore(UserStoreId, () => {
  // state
  const user: Ref<User> = ref({})

  // computed
  const userId = computed(() => user.value.id)

  const userName = computed(() => user.value.name)

  const userPhone = computed(() => user.value.phone)

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

  function setUserPhone(phone: string) {
    user.value.phone = phone
  }

  return {
    user, userId, userName, userPhone,
    setUser, setUserId, setUserName, setUserPhone
  }

}, { persist: { paths: ['user.name', 'user.id', 'user.phone'] } })

