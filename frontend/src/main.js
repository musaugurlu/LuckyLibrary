import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import Toasted from 'vue-toasted';

const alertOptions = {
    position: 'top-center',
    fullWidth: true,
    fitToScreen: true,
    duration: 4000,
    iconPack: 'fontawesome',
    action: {
        text: 'Close',
        onClick: (e, toastObject) => {
            toastObject.goAway(0);
        }
    }
}
Vue.use(Toasted, alertOptions)

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token');

if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')