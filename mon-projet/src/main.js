import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Routes from './Routes'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
const router=new VueRouter({
  routes:Routes,
  mode:'history'
  })


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')


let bt =document.getElementById("btn"); 
bt.addEventListener('click',function (e){
    e.preventDefault();
    this.classList.toggle("click");
    document.querySelector('.side-bar').classList.toggle("show");
    
});