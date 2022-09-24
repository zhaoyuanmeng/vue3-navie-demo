import { defineStore } from 'pinia'

export const useTestStore = defineStore('test', {
  state() {
    return {
      data: 'data',
    }
  },
  actions: {
    setData(data) {
      this.data = data
    },
   
  },
})
