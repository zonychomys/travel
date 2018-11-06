# travel

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

npm install -g vue-cli
vue init webpack travel

npm install stylus --save
npm install stylus-loader --save

reset.css: 不同的手机浏览器中，某些样式是不统一的，因此需要通过reset.css统一这些样式
border.css: 解决移动端1像素边框问题，1px边框在二倍屏显示为2px

解决300ms点击延时问题
npm install fastclick --save

安装轮播插件
npm install vue-awesome-swiper@2.6.7 --save

安装axios
npm install axios --save
npm install mockjs --save-dev

安装better-scroll
npm install better-scroll --save

安装汉字拼音转换库
npm install pinyin --save
npm install js-pinyin --save
pinyin.setOptions({checkPolyphone: false, charCase: 1})
pinyin.getFullChars('我')
npm install tiny-pinyin --save
pinyin.convertToPinyin(cityName, '', true)

安装vuex
npm install vuex --save

使手机浏览器支持promise
npm install babel-polyfill --save
