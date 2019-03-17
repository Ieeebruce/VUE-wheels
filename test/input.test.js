const expect = chai.expect;
import Vue from 'vue'
import Input from '../scripts/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在', () => {
        expect(Input).to.be.ok
    })
    describe('props', () => {

        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('可以接受content.', () => {
            const Constructor = Vue.extend(Input)
            vm = new Constructor({
                propsData: {
                    value: '你好我是测试'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('你好我是测试')

        })
        it('可以接受disabled.', () => {
            const Constructor = Vue.extend(Input)
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)

        })
        it('可以接受readonly.', () => {
            const Constructor = Vue.extend(Input)
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)

        })
        it('可以接受error.', () => {
            const Constructor = Vue.extend(Input)
            vm = new Constructor({
                propsData: {
                    error: 'hello'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('.error>span')
            expect(inputElement.innerText).to.equal('hello')

        })
    })
    describe('事件', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('支持 change/input/focus/blur 事件', () => {
            ['change', 'input', 'focus', 'blur']
              .forEach((eventName) => {
                vm = new Constructor({}).$mount()
                const callback = sinon.fake();
                vm.$on(eventName, callback)
                //触发input的change 事件
                let event = new Event(eventName);
                Object.defineProperty(
                  event, 'target', {
                    value: {value: 'hi'}, enumerable: true
                  }
                )
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith('hi')
            });

        })

    })

})