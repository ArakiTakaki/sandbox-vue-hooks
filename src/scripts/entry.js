import Vue from 'vue'
import { hooks } from 'vue-hooks'
import Index from './pages/Index.vue'

Vue.use(hooks)

new Vue({ el: '#app', render: (h) => h(Index) })
