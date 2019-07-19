# 基于原生JS移动端响应式解决方案——AUTOSTRAP

## 介绍
就目前移动端而言，已有比较成熟都响应式框架，类似于Bootstrap、AmazeUI、Skeljs。但是对于普通开发者来说，为了满足快速开发的需求去学习和使用这些框架的时间成本是比较高的。所以，本着轻量、快速开发的原则，为大家提供了基于原生JS的移动动端解决方案，希望能在交流、使用中继续优化AutoStrap。

## 原理
目前我们熟悉的开源前端框架都是栅格化布局，通过mediaQuery，在不同分辨率加载不同的css到达响应式的效果。同时还提供了诸多的JS组件供开发者使用。而AutoStrap是使用viewport，以iPhone4分辨率为模板，根据可视宽高调节缩放比例实现。具体内容下面的代码会给出。

## 代码

### autostrap.js
```js
/*!
 * AutoStrap v1.0.0 (http://largesoft.org)
 * Copyright 2015 Vern, Inc.
 */
var g = document.documentElement.clientWidth,
    h = document.documentElement.clientHeight,
    clientWidth = document.documentElement.clientWidth,
    viewport = document.getElementById("MobileViewport");
function isWeixin() {
    var a = navigator.userAgent.toLowerCase();
    return "micromessenger" == a.match(/MicroMessenger/i) ? !0 : !1
}
function renderPage() {
    var f = 1;
    g / h >= 320 / 486 ? (f = g / 486) : (f = g / 320);
    if(g == 320){
        f = 1;
    }
    viewport.content = "width=320, initial-scale=" + f + ", maximum-scale=" + f + ", user-scalable=no";
    if (320 != clientWidth && clientWidth == document.documentElement.clientWidth ||
     isWeixin() && (navigator.userAgent.indexOf("Android") > -1 ||
      navigator.userAgent.indexOf("Linux") > -1)) {
        var i = 320 / g,
            j = 486 / h,
            k = Math.max(i, j);
        k = k > 1 ? k : 160 * k, k = parseInt(k), viewport.content= "width=320, target-densitydpi=" + k ;
    }
}
renderPage();
```

### autostrap.css
```css
/*!
 * AutoStrap v1.0.0 (http://largesoft.org)
 * Copyright 2015 Vern, Inc.
 */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, font, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
}
body {line-height: 1; background-color: rgba(233,233,231,1);}
body *{
    max-width: 320px!important;
    font-family: "microsoft yahei";
}
ol, ul {list-style: none;}
blockquote, q {quotes: none;}
blockquote:before, blockquote:after,
q:before, q:after {content: '';content: none;}

/* remember to define focus styles! */
:focus {outline: 0;}

/* remember to highlight inserts somehow! */
ins {text-decoration: none;}
del {text-decoration: line-through;}

/* tables still need 'cellspacing="0"' in the markup */
table {border-collapse: collapse;border-spacing: 0;}
hr{margin-top: 5px;margin-bottom: 5px;border: 0;border-top: 1px dashed #eee;}
```

### html页面引入代码
```html
  <meta id="MobileViewport" name="viewport" content="width=320, initial-scale=1, maximum-scale=1, user-scalable=no" servergenerated="true">
```


## 使用
1、页面引入autostrap.js、autostrap.css文件
2、在<head>标签里面加入以下代码
```html
<meta id=”MobileViewport” name=”viewport” content=”width=320, initial-scale=1, maximum-scale=1, user-scalable=no” servergenerated=”true”>
```

## 规范
<body>标签内都所以元素都大小不超过320px即可，如果有特殊动画超过320px，将body的overflow属性设为hidden即可

## 下载
个人博客传送门：[largesoft.org](http://largesoft.org)
