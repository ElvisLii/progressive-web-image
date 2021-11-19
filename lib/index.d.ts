import "../styles/index.scss";
export declare class ProgressiveImage {
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
    });
    fire(): void;
    loadImage(preview: HTMLElement): void;
    mountImage(preview: HTMLElement, img: HTMLElement): void;
    getAnimationEvent(): string;
    bindEvent(el: HTMLElement | Window, bind: boolean): void;
}
