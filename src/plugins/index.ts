import {App} from 'vue'
import router from '@/router'

export function registerPlugins(app: App): void {
    app.use(router)
}