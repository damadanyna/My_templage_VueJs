import '@mdi/font/css/materialdesignicons.css'
import { createApp } from 'vue'
import './style.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import store from './store'
import router from './router' 
import CKEditor from '@ckeditor/ckeditor5-vue'

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App)
    .use(vuetify, {
        iconfont: 'mdi'
    })
    .use(CKEditor)
    .use(router)
    .use(store) 
    .mount('#app')
