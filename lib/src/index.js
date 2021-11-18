import "../styles/index.scss";
import { on, off, throttle } from "@utils/index";
var ProgressiveImage = /** @class */ (function () {
    function ProgressiveImage(options) {
        var _this = this;
        this.el = options.el || document;
        this.lazyClass = options.lazyClass || "lazy";
        this.removePreview = false;
        this.events = ["scroll", "resize"];
        this.windowIsBind = false;
        this.animationEvent = this.getAnimationEvent();
        this.lazy = throttle(function () {
            _this.fire();
        });
    }
    ProgressiveImage.prototype.fire = function () {
        if (!this.windowIsBind) {
            this.windowIsBind = true;
            this.bindEvent(window, true);
        }
        var lazys = document.querySelectorAll(this.el + " img." + this.lazyClass);
        if (lazys.length > 0) {
            for (var i = 0; i < lazys.length; i++) {
                var rect = lazys[i].getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    this.loadImage(lazys[i]);
                }
            }
        }
        else {
        }
    };
    ProgressiveImage.prototype.loadImage = function (preview) {
        var _this = this;
        var img = new Image();
        img.src = preview.dataset.src;
        img.className = "origin";
        if (this.scale) {
            img.classList.add("origin-scale");
        }
        img.onload = function () {
            _this.mountImage(preview, img);
        };
        preview.classList.remove("" + this.lazyClass);
    };
    ProgressiveImage.prototype.mountImage = function (preview, img) {
        var _this = this;
        var parent = preview.parentNode;
        parent.appendChild(img).addEventListener(this.animationEvent, function (e) {
            if (_this.removePreview) {
                parent.removeChild(preview);
                e.target.classList.remove("origin", "origin-scale");
            }
        });
    };
    ProgressiveImage.prototype.getAnimationEvent = function () {
        var el = document.createElement("fa");
        var animations = {
            animation: "animationend",
            OAnimation: "oAnimationEnd",
            MozAnimation: "animationend",
            WebkitAnimation: "webkitAnimationEnd",
        };
        for (var key in animations) {
            if (el.style[key] !== undefined) {
                return animations[key];
            }
        }
    };
    ProgressiveImage.prototype.bindEvent = function (el, bind) {
        var _this = this;
        if (bind) {
            this.events.forEach(function (evt) {
                on(el, evt, _this.lazy);
            });
        }
        else {
            this.events.forEach(function (evt) {
                off(el, evt, _this.lazy);
            });
        }
    };
    return ProgressiveImage;
}());
export { ProgressiveImage };
//# sourceMappingURL=index.js.map