import { ProgressiveImage } from "../../lib";
import '../../lib/index.css'
(() => {
  new ProgressiveImage({
    el: "#app",
    lazyClass: "lazy",
    removePreview: true,
    scale: true,
  }).fire();
})();
