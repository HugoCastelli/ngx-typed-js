(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('typed.js')) :
    typeof define === 'function' && define.amd ? define('ngx-typed-js', ['exports', '@angular/core', 'typed.js'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-typed-js'] = {}, global.ng.core, global.Typed));
}(this, (function (exports, core, Typed) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var Typed__default = /*#__PURE__*/_interopDefaultLegacy(Typed);

    var NgxTypedJsComponent = /** @class */ (function () {
        function NgxTypedJsComponent() {
            this.typeSpeed = 30;
            this.completed = new core.EventEmitter();
            this.preStringTyped = new core.EventEmitter();
            this.stringTyped = new core.EventEmitter();
            this.lastStringBackspaced = new core.EventEmitter();
            this.typingPaused = new core.EventEmitter();
            this.typingResumed = new core.EventEmitter();
            this.reset = new core.EventEmitter();
            this.stopped = new core.EventEmitter();
            this.started = new core.EventEmitter();
            this.destroyed = new core.EventEmitter();
        }
        NgxTypedJsComponent.prototype.ngAfterViewInit = function () {
            this.typed = new Typed__default['default'](this.content.nativeElement.querySelector('.typing'), this.options);
            if (this.showCursor !== false) {
                this.updateCursorStyle();
            }
        };
        NgxTypedJsComponent.prototype.toggle = function () {
            this.typed.toggle();
        };
        NgxTypedJsComponent.prototype.stop = function () {
            this.typed.stop();
        };
        NgxTypedJsComponent.prototype.start = function () {
            this.typed.start();
        };
        NgxTypedJsComponent.prototype.destroy = function () {
            this.typed.destroy();
        };
        NgxTypedJsComponent.prototype.doReset = function (restart) {
            this.typed.reset(restart);
        };
        Object.defineProperty(NgxTypedJsComponent.prototype, "options", {
            get: function () {
                var _a;
                var emit = function (emitter) { return function () { return emitter.emit(); }; };
                var emitIndex = function (emitter) { return function (index) { return emitter.emit(index); }; };
                var opts = {
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
                Object.keys(opts).forEach(function (key) {
                    if (opts[key] === undefined) {
                        delete opts[key];
                    }
                });
                return opts;
            },
            enumerable: false,
            configurable: true
        });
        NgxTypedJsComponent.prototype.updateCursorStyle = function () {
            var textElementStyle = getComputedStyle(this.content.nativeElement.querySelector('.typing'));
            var cursorElementStyle = this.content.nativeElement.querySelector('.typed-cursor').style;
            cursorElementStyle.fontSize = textElementStyle.fontSize;
            cursorElementStyle.color = this.cursorColor || textElementStyle.color;
        };
        NgxTypedJsComponent.prototype.ngOnChanges = function (changes) {
            if (this.typed) {
                this.typed.destroy();
                this.ngAfterViewInit();
            }
        };
        return NgxTypedJsComponent;
    }());
    NgxTypedJsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-typed-js',
                    template: "<div #wrapper>\n  <ng-content></ng-content>\n</div>\n",
                    styles: [":host>>>.typing{display:inline}"]
                },] }
    ];
    NgxTypedJsComponent.propDecorators = {
        cursorColor: [{ type: core.Input }],
        strings: [{ type: core.Input }],
        stringsElement: [{ type: core.Input }],
        typeSpeed: [{ type: core.Input }],
        startDelay: [{ type: core.Input }],
        backSpeed: [{ type: core.Input }],
        smartBackspace: [{ type: core.Input }],
        shuffle: [{ type: core.Input }],
        backDelay: [{ type: core.Input }],
        fadeOut: [{ type: core.Input }],
        fadeOutClass: [{ type: core.Input }],
        fadeOutDelay: [{ type: core.Input }],
        loop: [{ type: core.Input }],
        loopCount: [{ type: core.Input }],
        showCursor: [{ type: core.Input }],
        cursorChar: [{ type: core.Input }],
        autoInsertCss: [{ type: core.Input }],
        attr: [{ type: core.Input }],
        bindInputFocusEvents: [{ type: core.Input }],
        contentType: [{ type: core.Input }],
        completed: [{ type: core.Output }],
        preStringTyped: [{ type: core.Output }],
        stringTyped: [{ type: core.Output }],
        lastStringBackspaced: [{ type: core.Output }],
        typingPaused: [{ type: core.Output }],
        typingResumed: [{ type: core.Output }],
        reset: [{ type: core.Output }],
        stopped: [{ type: core.Output }],
        started: [{ type: core.Output }],
        destroyed: [{ type: core.Output }],
        content: [{ type: core.ViewChild, args: ['wrapper', { static: true },] }]
    };

    var NgxTypedJsModule = /** @class */ (function () {
        function NgxTypedJsModule() {
        }
        return NgxTypedJsModule;
    }());
    NgxTypedJsModule.decorators = [
        { type: core.NgModule, args: [{
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

    exports.NgxTypedJsComponent = NgxTypedJsComponent;
    exports.NgxTypedJsModule = NgxTypedJsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-typed-js.umd.js.map
