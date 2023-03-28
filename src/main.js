import '@mdi/font/css/materialdesignicons.css'
import { createApp } from 'vue'
import './style.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import store from './store'

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App)
    .use(vuetify, {
        iconfont: 'mdi'
    })
    .use(store)
    .mount('#app')
