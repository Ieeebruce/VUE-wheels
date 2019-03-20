import Vue from 'vue'
import Button from './button'
import Buttongroup from './button-group'
import Input from './input'
import Col from './col'
import Row from './row'
import Layout from './layout/layout'
import Header from './layout/header'
import Asider from './layout/asider'
import Footer from './layout/footer'
import Main from './layout/main'
import Toast from './toast'
Vue.component('g-button-group', Buttongroup)
Vue.component('g-button', Button)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-footer', Footer)
Vue.component('g-main', Main)
Vue.component('g-asider',Asider)
Vue.component('g-toast', Toast)
new Vue({
    el: '#app',
    data: {
        loading1: true,
        loading2: true,
        loading3: true,
        message: 'hi'
    },
    methods: {
        inputChange(e) {
            console.log(e.target.value)
        }
    }
})