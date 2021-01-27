import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
//importando componente/paginas
import Inicial from './Inicial.vue'
import Comparar from './Comparar.vue'

Vue.use( VueRouter )

const router = new VueRouter({
  mode: 'history',// retira # do link
  routes: [
    // path é o caminho da url da rota, component é qual pagina a exibir
    {path: '/',
      component: Inicial},
    {
    path: '/comparar',
      component: Comparar},
  ],
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
