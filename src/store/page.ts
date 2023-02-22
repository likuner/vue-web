
import { ref, Ref } from 'vue'
import { defineStore } from 'pinia'
import { PageStoreId } from "./store-id";

export const usePageStore = defineStore(PageStoreId, () => {
  const pages: Ref<string[]> = ref([])

  function add(name: string) {
    if (!pages.value.includes(name)) {
      pages.value.push(name)
    }
  }

  function remove(name: string) {
    const alive = pages.value.filter(page => page !== name)
    pages.value.splice(0, pages.value.length, ...alive)
  }

  function clear() {
    pages.value.splice(0)
  }

  return { pages, add, remove, clear }
})