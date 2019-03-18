import Vue from 'vue'
import Button from './button'
import Buttongroup from './button-group'
import Input from './input'
import Col from './col'
import Row from './row'
Vue.component('g-button-group', Buttongroup)
Vue.component('g-button', Button)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
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