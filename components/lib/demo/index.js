import DemoText from './src/demo-text.vue'
DemoText.install = function (Vue) {
    Vue.component(DemoText.name, DemoText)
}

export default DemoText