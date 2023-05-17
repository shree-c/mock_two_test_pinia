import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useXxdStore = defineStore('xxd', () => {
  const hello = ref('ok the best thing in the world')
  return { hello }
})
