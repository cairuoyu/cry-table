import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(ElementUI)

import cryTable from 'cry-table'
Vue.use(cryTable)

new Vue({
    render: h => h(App),
}).$mount('#app')
