
import { createPinia } from 'pinia'

const store = createPinia()

export default {
    install(app) {
        //可以绑定额外的属性或方法到Vue实例
        app.use(store)
    }
}

