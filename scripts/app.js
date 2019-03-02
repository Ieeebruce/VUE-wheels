import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import Buttongroup from './button-group'
Vue.component('button-group', Buttongroup)
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
new Vue({
    el: '#app',
    data: {
        loading1: true,
        loading2: true,
        loading3: true,
    }
})