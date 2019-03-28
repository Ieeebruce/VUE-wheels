const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs/tabs'
import TabsHead from '../src/tabs/tabs-head'
import TabsBody from '../src/tabs/tabs-body'
import TabsItem from '../src/tabs/tabs-item'
import TabsPane from '../src/tabs/tabs-pane'

Vue.component('w-tabs', Tabs)
Vue.component('w-tabs-head', TabsHead)
Vue.component('w-tabs-body', TabsBody)
Vue.component('w-tabs-item', TabsItem)
Vue.component('w-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.be.exist
    })
    describe('props', () => {
        it('接收 selected 属性.', (done) => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
            <gulu-tabs selected="sports">
                <gulu-tabs-head>
                    <gulu-tabs-item name="woman"> 美女 </gulu-tabs-item>
                    <gulu-tabs-item name="finance"> 财经 </gulu-tabs-item>
                    <gulu-tabs-item name="sports"> 体育 </gulu-tabs-item>
                </gulu-tabs-head>
                <gulu-tabs-body>
                    <gulu-tabs-pane name="woman"> 美女对应新闻 </gulu-tabs-pane>
                    <gulu-tabs-pane name="sports"> 体育对应新闻 </gulu-tabs-pane>
                    <gulu-tabs-pane name="finance"> 财经对应新闻 </gulu-tabs-pane>
                </gulu-tabs-body>
            </gulu-tabs>
            `
            const vm = new Vue({
                el: div
            })
            vm.$nextTick(() => {
                const x = vm.$el.querySelector('.tabs-item[data-name="sports"]')
                expect(x.classList.contains('active')).to.be.true
                done()
                div.remove()
                vm.$destroy()
            })
        })
        it('接收 direction prop 属性.',()=>{})
    })
})