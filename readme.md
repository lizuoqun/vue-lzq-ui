# VUE-LZQ-UI组件库

## 起步
### 1、安装组件库
```bash
npm install vue-lzq-ui
```
### 2、如何使用

#### 2.1、全部导入

```js
// import 'vue-lzq-ui/dist/css/index.css'
import LZQUI from 'vue-lzq-ui'
Vue.use(LZQUI)
```

#### 2.2、按需引入
<!-- ```
import 'vue-lzq-ui/dist/css/demo.css'
import { DemoText } from 'vue-lzq-ui'
Vue.use(DemoText)
``` -->

```js
import { EchartMap } from 'vue-lzq-ui'
Vue.use(EchartMap)
```
使用组件
```html
    <EchartMap
      :map-point="mapPoint"
      :map-line="mapLine"
      :map-block="mapBlock"
      :map-params="mapParams"
    />
```
数据说明
``` js
      // 点数据
      mapPoint: [
        {
          n: "西藏",
          value: [114.5332, 27.3779],
        },
      ],
      // 线数据
      mapLine: [
        {
          fromName: "长沙",
          toName: "南宁",
          coords: [
            [114.5332, 27.3779],
            [114.2813, 23.6426],
          ],
        },
      ],
      // 地图块数据
      mapBlock: [
        {
          name: "湖北",
          itemStyle: {
            areaColor: "#cc9e54",
          },
        },
        {
          name: "云南",
          itemStyle: {
            areaColor: "#cd4b6b",
          },
        },
        {
          name: "福建",
          itemStyle: {
            areaColor: "#d0d148",
          },
        },
        {
          name: "内蒙古",
          itemStyle: {
            areaColor: "blue",
          },
        },
      ],
      // 地图配置
      mapParams: {
        // 是否为3d效果地图   取值为 true / false
        is3d: true,
        // 地图背景色    取值为颜色值  默认 #397e82
        mapColor: 'red',
        // 地图展示大小  取值为大小 默认 100%
        layoutSize: '120%'
      },
```
