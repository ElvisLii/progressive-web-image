!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("progressive-web-image",[],t):"object"==typeof exports?exports["progressive-web-image"]=t():e.pwi=t()}(this,(function(){return(()=>{"use strict";var e={195:(e,t,n)=>{n.r(t)},670:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.off=t.on=t.throttle=void 0,t.throttle=function(e,t){var n=this;void 0===t&&(t=300);var i=0;return function(){Date.now()-i>=t&&(i=Date.now(),e.call(n))}},t.on=function(e,t,n){e.addEventListener(t,n)},t.off=function(e,t,n){e.removeEventListener(t,n)}}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{var e=i;Object.defineProperty(e,"__esModule",{value:!0}),e.ProgressiveImage=void 0,n(195);var t=n(670),o=function(){function e(e){var n=this;this.el=e.el||document,this.lazyClass=e.lazyClass||"lazy",this.removePreview=!1,this.events=["scroll","resize"],this.windowIsBind=!1,this.animationEvent=this.getAnimationEvent(),this.lazy=(0,t.throttle)((function(){n.fire()}))}return e.prototype.fire=function(){this.windowIsBind||(this.windowIsBind=!0,this.bindEvent(window,!0));var e=document.querySelectorAll(this.el+" img."+this.lazyClass);if(e.length>0)for(var t=0;t<e.length;t++){var n=e[t].getBoundingClientRect();n.top<window.innerHeight&&n.bottom>0&&this.loadImage(e[t])}},e.prototype.loadImage=function(e){var t=this,n=new Image;n.src=e.dataset.src,n.className="origin",this.scale&&n.classList.add("origin-scale"),n.onload=function(){t.mountImage(e,n)},e.classList.remove(""+this.lazyClass)},e.prototype.mountImage=function(e,t){var n=this,i=e.parentNode;i.appendChild(t).addEventListener(this.animationEvent,(function(t){n.removePreview&&(i.removeChild(e),t.target.classList.remove("origin","origin-scale"))}))},e.prototype.getAnimationEvent=function(){var e=document.createElement("fa"),t={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(var n in t)if(void 0!==e.style[n])return t[n]},e.prototype.bindEvent=function(e,n){var i=this;n?this.events.forEach((function(n){(0,t.on)(e,n,i.lazy)})):this.events.forEach((function(n){(0,t.off)(e,n,i.lazy)}))},e}();e.ProgressiveImage=o})(),i})()}));