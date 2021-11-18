export function throttle(fn, delay) {
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
export function on(el, event, fn) {
    el.addEventListener(event, fn);
}
export function off(el, event, fn) {
    el.removeEventListener(event, fn);
}
//# sourceMappingURL=index.js.map