
import { defineStore } from 'pinia'

export const userStore = defineStore({
    id: 'id-user',
    state() {
        return {
            token: "this is a token"
        }
    },
    actions: {
      setToken(value){
        this.token = value
        // setToken(value)
      },
      login(){
        
      }
    }
})