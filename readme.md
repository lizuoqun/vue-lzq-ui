# VUE-LZQ-UI组件库

## 起步
### 1、安装组件库
```bash
npm install vue-lzq-ui
```
### 2、如何使用

#### 2.1、全部导入

```bash
import 'vue-lzq-ui/dist/css/index.css'
import LZQUI from 'vue-lzq-ui'
Vue.use(LZQUI)
```

#### 2.2、按需引入
```
import 'vue-lzq-ui/dist/css/demo.css'
import { DemoText } from 'vue-lzq-ui'
Vue.use(DemoText)
```