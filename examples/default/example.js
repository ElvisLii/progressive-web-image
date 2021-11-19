import { ProgressiveImage } from "../../lib/src/index";
(() => {
  new ProgressiveImage({
    el: "#app",
    lazyClass: "lazy",
    removePreview: true,
    scale: true,
  }).fire();
})();
