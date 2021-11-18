export function throttle(fn: Function, delay: number = 300) {
  let timeout = null;
  let last = 0;
  return () => {
    const diff = Date.now() - last;
    if (diff >= delay) {
      last = Date.now();
      fn.call(this);
    }
  };
}

export function on(el: HTMLElement | Window, event: string, fn: EventListener) {
  el.addEventListener(event, fn);
}

export function off(
  el: HTMLElement | Window,
  event: string,
  fn: EventListener
) {
  el.removeEventListener(event, fn);
}
