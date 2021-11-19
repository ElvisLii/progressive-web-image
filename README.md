# mini-progressive-image

A dead mini progressive-image module for Elvisii TypeScript

## GitHub

[GitHub - mini-progressive-image](https://github.com/elvisii/mini-progressive-image.git)

## NPM

[![NPM version][npm-image]][npm-url]

[NPM - mini-progressive-image](https://github.com/elvisii/mini-progressive-image.git)

## Install

```shell
$ npm install mini-progressive-image --save
 
$ yarn add mini-progressive-image
```

## For Elvisii TypeScript

### Usage

#### import css
```html
<link href="./node_modules/mini-progressive-image/lib/index.css" rel="stylesheet" type="text/css">
```

or

```html
<link href="//unpkg.com/mini-progressive-image/dist/index.css" rel="stylesheet" type="text/css">
```

#### HTML

```html
<main id="app">
  <div class="progressive">
    <img class="preview lazy" data-src="http://7xiblh.com1.z0.glb.clouddn.com/progressive/1.jpg" src="http://7xiblh.com1.z0.glb.clouddn.com/progressive/r1.jpg" />
  </div>
  <div class="progressive">
    <img class="preview lazy" data-src="http://7xiblh.com1.z0.glb.clouddn.com/progressive/2.jpg" src="http://7xiblh.com1.z0.glb.clouddn.com/progressive/r2.jpg" />
  </div>
</main>
<script src="./lib/index.js"></script>
```

#### JS

```js
(function(){
  new miniPi.ProgressiveImage({
    el: '#app',
    lazyClass: 'lazy',
    removePreview: true
    scale: true
  }).fire()
})()
```


## build

#### build lib

```shell
npm run build
```

[npm-url]: https://www.npmjs.com/package/mini-progressive-image
[npm-image]: https://img.shields.io/npm/v/mini-progressive-image.svg