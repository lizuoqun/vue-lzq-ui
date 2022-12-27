# vue-lzq-ui

## 开发中需安装的依赖
```
npm install vue-loader -D

npm install -D webpack-cli

npm i gulp gulp-sass gulp-minify-css -D

npm install sass
```
## 设置镜像
```
npm config set registry https://registr.npmjs.org

npm config set registry https://registry.npm.taobao.org/
```
## 存在的问题
安装vuePress后启动项目报错
Error: Rule can only have one resource source (provided resource and test + include + exclude)
某些新版本的库要求 webpack@5，更新依赖时，根据依赖选择的规则，就以 webpack@5 作为主依赖安装。然而 @vue/cli 依赖 webpack@4，它自带的 webpack 配置无法兼容 webpack@5 ，于是就报错，不能继续编译。如果你也在使用 @vue/cli，那么请不要贸然升级 webpack@5。