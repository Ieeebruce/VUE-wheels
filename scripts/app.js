import Vue from 'vue'
import Button from './button/button'
import Buttongroup from './button/button-group'
import Input from './input'
import Col from './col'
import Row from './row'
import Layout from './layout/layout'
import Header from './layout/header'
import Asider from './layout/asider'
import Footer from './layout/footer'
import Main from './layout/main'
import Toast from './toast/toast'
import plugin from './toast/plugin'
import Tabs from './tabs/tabs'
import TabsHead from './tabs/tabs-head'
import TabsBody from './tabs/tabs-body'
import TabsItem from './tabs/tabs-item'
import TabsPane from './tabs/tabs-pane'
Vue.component('g-button-group', Buttongroup)
Vue.component('g-button', Button)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-footer', Footer)
Vue.component('g-main', Main)
Vue.component('g-asider', Asider)
Vue.component('g-toast', Toast)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-tabs', Tabs)

Vue.use(plugin)
new Vue({
    el: '#app',
    data: {
        loading1: true,
        loading2: true,
        loading3: true,
        message: "hello"
    },
    created() {

    },
    methods: {
        showToast() {
            this.$toast("message")
        }
    }

})