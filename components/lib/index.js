import DemoText from "./demo";
import SelectPerson from "./select-person";
import EchartMap from "./echart-map";

const components = {
    DemoText,
    SelectPerson,
    EchartMap
}

const install = function (Vue) {
    if (install.installed) return
    Object.keys(components).forEach(key => {
        Vue.component(components[key].name, components[key])
    })
}

const API = {
    install
}

export default API