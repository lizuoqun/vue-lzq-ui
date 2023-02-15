import SelectPerson from './src/select-person.vue'
SelectPerson.install = function (Vue) {
    Vue.component(SelectPerson.name, SelectPerson)
}
export default SelectPerson