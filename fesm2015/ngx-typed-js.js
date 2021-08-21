import { EventEmitter, Component, Input, Output, ViewChild, NgModule } from '@angular/core';
import Typed from 'typed.js';

class NgxTypedJsComponent {
    constructor() {
        this.typeSpeed = 30;
        this.completed = new EventEmitter();
        this.preStringTyped = new EventEmitter();
        this.stringTyped = new EventEmitter();
        this.lastStringBackspaced = new EventEmitter();
        this.typingPaused = new EventEmitter();
        this.typingResumed = new EventEmitter();
        this.reset = new EventEmitter();
        this.stopped = new EventEmitter();
        this.started = new EventEmitter();
        this.destroyed = new EventEmitter();
    }
    ngAfterViewInit() {
        this.typed = new Typed(this.content.nativeElement.querySelector('.typing'), this.options);
        if (this.showCursor !== false) {
            this.updateCursorStyle();
        }
    }
    toggle() {
        this.typed.toggle();
    }
    stop() {
        this.typed.stop();
    }
    start() {
        this.typed.start();
    }
    destroy() {
        this.typed.destroy();
    }
    doReset(restart) {
        this.typed.reset(restart);
    }
    get options() {
        var _a;
        const emit = (emitter) => () => emitter.emit();
        const emitIndex = (emitter) => (index) => emitter.emit(index);
        const opts = {
            strings: (_a = this.strings) !== null && _a !== void 0 ? _a : [''],
            stringsElement: this.stringsElement,
            typeSpeed: this.typeSpeed,
            startDelay: this.startDelay,
            backSpeed: this.backSpeed,
            smartBackspace: this.smartBackspace,
            shuffle: this.shuffle,
            backDelay: this.backDelay,
            fadeOut: this.fadeOut,
            fadeOutClass: this.fadeOutClass,
            fadeOutDelay: this.fadeOutDelay,
            loop: this.loop,
            loopCount: this.loopCount,
            showCursor: this.showCursor,
            autoInsertCss: this.autoInsertCss,
            attr: this.attr,
            bindInputFocusEvents: this.bindInputFocusEvents,
            contentType: this.contentType,
            onComplete: emit(this.completed),
            preStringTyped: emitIndex(this.preStringTyped),
            onStringTyped: emitIndex(this.stringTyped),
            onLastStringBackspaced: emit(this.lastStringBackspaced),
            onTypingPaused: emitIndex(this.typingPaused),
            onTypingResumed: emitIndex(this.typingResumed),
            onReset: emit(this.reset),
            onStop: emitIndex(this.stopped),
            onStart: emitIndex(this.started),
            onDestroy: emit(this.destroyed),
        };
        Object.keys(opts).forEach(key => {
            if (opts[key] === undefined) {
                delete opts[key];
            }
        });
        return opts;
    }
    updateCursorStyle() {
        const textElementStyle = getComputedStyle(this.content.nativeElement.querySelector('.typing'));
        const cursorElementStyle = this.content.nativeElement.querySelector('.typed-cursor').style;
        cursorElementStyle.fontSize = textElementStyle.fontSize;
        cursorElementStyle.color = this.cursorColor || textElementStyle.color;
    }
    ngOnChanges(changes) {
        if (this.typed) {
            this.typed.destroy();
            this.ngAfterViewInit();
        }
    }
}
NgxTypedJsComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-typed-js',
                template: "<div #wrapper>\n  <ng-content></ng-content>\n</div>\n",
                styles: [":host>>>.typing{display:inline}"]
            },] }
];
NgxTypedJsComponent.propDecorators = {
    cursorColor: [{ type: Input }],
    strings: [{ type: Input }],
    stringsElement: [{ type: Input }],
    typeSpeed: [{ type: Input }],
    startDelay: [{ type: Input }],
    backSpeed: [{ type: Input }],
    smartBackspace: [{ type: Input }],
    shuffle: [{ type: Input }],
    backDelay: [{ type: Input }],
    fadeOut: [{ type: Input }],
    fadeOutClass: [{ type: Input }],
    fadeOutDelay: [{ type: Input }],
    loop: [{ type: Input }],
    loopCount: [{ type: Input }],
    showCursor: [{ type: Input }],
    cursorChar: [{ type: Input }],
    autoInsertCss: [{ type: Input }],
    attr: [{ type: Input }],
    bindInputFocusEvents: [{ type: Input }],
    contentType: [{ type: Input }],
    completed: [{ type: Output }],
    preStringTyped: [{ type: Output }],
    stringTyped: [{ type: Output }],
    lastStringBackspaced: [{ type: Output }],
    typingPaused: [{ type: Output }],
    typingResumed: [{ type: Output }],
    reset: [{ type: Output }],
    stopped: [{ type: Output }],
    started: [{ type: Output }],
    destroyed: [{ type: Output }],
    content: [{ type: ViewChild, args: ['wrapper', { static: true },] }]
};

class NgxTypedJsModule {
}
NgxTypedJsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgxTypedJsComponent],
                imports: [],
                exports: [NgxTypedJsComponent]
            },] }
];

/*
 * Public API Surface of ngx-typed-js
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxTypedJsComponent, NgxTypedJsModule };
//# sourceMappingURL=ngx-typed-js.js.map
