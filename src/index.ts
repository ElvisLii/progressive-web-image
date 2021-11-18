import "../styles/index.scss";
import { on, off, throttle } from "@utils/index";

export class ProgressiveImage {
  el: string | Document;
  lazyClass: string;
  removePreview: boolean;
  animationEvent: string;
  windowIsBind: boolean;
  scale: boolean;
  events: string[];
  lazy: Function;

  constructor(options: {
    el?: string;
    removePreview?: boolean;
    lazyClass?: string;
    scale?: boolean;
  }) {
    this.el = options.el || document;
    this.lazyClass = options.lazyClass || "lazy";
    this.removePreview = false;
    this.scale = options.scale;
    this.events = ["scroll", "resize"];
    this.windowIsBind = false;
    this.animationEvent = this.getAnimationEvent();
    this.lazy = throttle(() => {
      this.fire();
    });
  }

  fire() {
    if (!this.windowIsBind) {
      this.windowIsBind = true;
      this.bindEvent(window, true);
    }
    const lazys = document.querySelectorAll(`${this.el} img.${this.lazyClass}`);
    if (lazys.length > 0) {
      for (let i = 0; i < lazys.length; i++) {
        const rect: DOMRect = lazys[i].getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          this.loadImage(<HTMLElement>lazys[i]);
        }
      }
    } else {
    }
  }
  loadImage(preview: HTMLElement) {
    const img = new Image();
    img.src = preview.dataset.src;
    img.className = "origin";
    if (this.scale) {
      img.classList.add("origin-scale");
    }
    img.onload = () => {
      this.mountImage(preview, img);
    };
    preview.classList.remove(`${this.lazyClass}`);
  }
  mountImage(preview: HTMLElement, img: HTMLElement) {
    const parent = preview.parentNode;
    parent.appendChild(img).addEventListener(this.animationEvent, (e) => {
      if (this.removePreview) {
        parent.removeChild(preview);
        (<HTMLElement>e.target).classList.remove("origin", "origin-scale");
      }
    });
  }
  getAnimationEvent(): string {
    const el = document.createElement("fa");
    const animations: { [key: string]: string } = {
      animation: "animationend",
      OAnimation: "oAnimationEnd",
      MozAnimation: "animationend",
      WebkitAnimation: "webkitAnimationEnd",
    };
    for (const key in animations) {
      if (el.style[key as any] !== undefined) {
        return animations[key];
      }
    }
  }
  bindEvent(el: HTMLElement | Window, bind: boolean) {
    if (bind) {
      this.events.forEach((evt) => {
        on(el, evt, <EventListener>this.lazy);
      });
    } else {
      this.events.forEach((evt) => {
        off(el, evt, <EventListener>this.lazy);
      });
    }
  }
}
