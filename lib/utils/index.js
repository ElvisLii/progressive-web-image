"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.off = exports.on = exports.throttle = void 0;
function throttle(fn, delay) {
    var _this = this;
    if (delay === void 0) { delay = 300; }
    var timeout = null;
    var last = 0;
    return function () {
        var diff = Date.now() - last;
        if (diff >= delay) {
            last = Date.now();
            fn.call(_this);
        }
    };
}
exports.throttle = throttle;
function on(el, event, fn) {
    el.addEventListener(event, fn);
}
exports.on = on;
function off(el, event, fn) {
    el.removeEventListener(event, fn);
}
exports.off = off;
//# sourceMappingURL=index.js.map