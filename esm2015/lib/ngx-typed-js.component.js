import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import Typed from 'typed.js';
export class NgxTypedJsComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXR5cGVkLWpzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10eXBlZC1qcy9zcmMvbGliL25neC10eXBlZC1qcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQWlCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzSCxPQUFPLEtBQXVCLE1BQU0sVUFBVSxDQUFDO0FBTy9DLE1BQU0sT0FBTyxtQkFBbUI7SUFMaEM7UUFVa0IsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQWtCYixjQUFTLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFDekQsbUJBQWMsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNsRSxnQkFBVyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQy9ELHlCQUFvQixHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3BFLGlCQUFZLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDaEUsa0JBQWEsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNqRSxVQUFLLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFDckQsWUFBTyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzNELFlBQU8sR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMzRCxjQUFTLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7SUFpRzdFLENBQUM7SUE1RkMsZUFBZTtRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFDbkQsSUFBSSxDQUFDLE9BQU8sQ0FDYixDQUFDO1FBRUYsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLEtBQUssRUFBRTtZ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O3NCQUNOLE1BQU07d0JBQ04sTUFBTTtzQkFHTixTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IFR5cGVkLCB7IFR5cGVkT3B0aW9ucyB9IGZyb20gJ3R5cGVkLmpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXR5cGVkLWpzJyxcbiAgdGVtcGxhdGVVcmw6ICduZ3gtdHlwZWQtanMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbmd4LXR5cGVkLWpzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hUeXBlZEpzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgcHVibGljIGN1cnNvckNvbG9yPzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBzdHJpbmdzOiBzdHJpbmdbXTtcbiAgQElucHV0KCkgcHVibGljIHN0cmluZ3NFbGVtZW50Pzogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgdHlwZVNwZWVkID0gMzA7XG4gIEBJbnB1dCgpIHB1YmxpYyBzdGFydERlbGF5PzogbnVtYmVyO1xuICBASW5wdXQoKSBwdWJsaWMgYmFja1NwZWVkPzogbnVtYmVyO1xuICBASW5wdXQoKSBwdWJsaWMgc21hcnRCYWNrc3BhY2U/OiBib29sZWFuO1xuICBASW5wdXQoKSBwdWJsaWMgc2h1ZmZsZT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHB1YmxpYyBiYWNrRGVsYXk/OiBudW1iZXI7XG4gIEBJbnB1dCgpIHB1YmxpYyBmYWRlT3V0PzogYm9vbGVhbjtcbiAgQElucHV0KCkgcHVibGljIGZhZGVPdXRDbGFzcz86IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIGZhZGVPdXREZWxheT86IG51bWJlcjtcbiAgQElucHV0KCkgcHVibGljIGxvb3A/OiBib29sZWFuO1xuICBASW5wdXQoKSBwdWJsaWMgbG9vcENvdW50PzogbnVtYmVyO1xuICBASW5wdXQoKSBwdWJsaWMgc2hvd0N1cnNvcj86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHB1YmxpYyBjdXJzb3JDaGFyPzogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgYXV0b0luc2VydENzcz86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHB1YmxpYyBhdHRyPzogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgYmluZElucHV0Rm9jdXNFdmVudHM/OiBib29sZWFuO1xuICBASW5wdXQoKSBwdWJsaWMgY29udGVudFR5cGU/OiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIHByaXZhdGUgY29tcGxldGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBwcml2YXRlIHByZVN0cmluZ1R5cGVkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgcHJpdmF0ZSBzdHJpbmdUeXBlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIHByaXZhdGUgbGFzdFN0cmluZ0JhY2tzcGFjZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHByaXZhdGUgdHlwaW5nUGF1c2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgcHJpdmF0ZSB0eXBpbmdSZXN1bWVkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgcHJpdmF0ZSByZXNldDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcHJpdmF0ZSBzdG9wcGVkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgcHJpdmF0ZSBzdGFydGVkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgcHJpdmF0ZSBkZXN0cm95ZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBwcml2YXRlIHR5cGVkOiBUeXBlZDtcbiAgQFZpZXdDaGlsZCgnd3JhcHBlcicsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgY29udGVudDtcblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy50eXBlZCA9IG5ldyBUeXBlZChcbiAgICAgIHRoaXMuY29udGVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50eXBpbmcnKSxcbiAgICAgIHRoaXMub3B0aW9ucyxcbiAgICApO1xuXG4gICAgaWYgKHRoaXMuc2hvd0N1cnNvciAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMudXBkYXRlQ3Vyc29yU3R5bGUoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMudHlwZWQudG9nZ2xlKCk7XG4gIH1cblxuICBwdWJsaWMgc3RvcCgpOiB2b2lkIHtcbiAgICB0aGlzLnR5cGVkLnN0b3AoKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcbiAgICB0aGlzLnR5cGVkLnN0YXJ0KCk7XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnR5cGVkLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHB1YmxpYyBkb1Jlc2V0KHJlc3RhcnQ/OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy50eXBlZC5yZXNldChyZXN0YXJ0KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IG9wdGlvbnMoKTogVHlwZWRPcHRpb25zIHtcbiAgICBjb25zdCBlbWl0OiAoZW1pdHRlcjogRXZlbnRFbWl0dGVyPHZvaWQ+KSA9PiAoc2VsZjogVHlwZWQpID0+IHZvaWRcbiAgICAgID0gKGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjx2b2lkPikgPT4gKCkgPT4gZW1pdHRlci5lbWl0KCk7XG5cbiAgICBjb25zdCBlbWl0SW5kZXg6IChlbWl0dGVyOiBFdmVudEVtaXR0ZXI8bnVtYmVyPikgPT4gKGluZGV4OiBudW1iZXIsIHNlbGY6IFR5cGVkKSA9PiB2b2lkXG4gICAgICA9IChlbWl0dGVyOiBFdmVudEVtaXR0ZXI8bnVtYmVyPikgPT4gKGluZGV4OiBudW1iZXIpID0+IGVtaXR0ZXIuZW1pdChpbmRleCk7XG5cbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgc3RyaW5nczogdGhpcy5zdHJpbmdzID8/IFsnJ10sXG4gICAgICBzdHJpbmdzRWxlbWVudDogdGhpcy5zdHJpbmdzRWxlbWVudCxcbiAgICAgIHR5cGVTcGVlZDogdGhpcy50eXBlU3BlZWQsXG4gICAgICBzdGFydERlbGF5OiB0aGlzLnN0YXJ0RGVsYXksXG4gICAgICBiYWNrU3BlZWQ6IHRoaXMuYmFja1NwZWVkLFxuICAgICAgc21hcnRCYWNrc3BhY2U6IHRoaXMuc21hcnRCYWNrc3BhY2UsXG4gICAgICBzaHVmZmxlOiB0aGlzLnNodWZmbGUsXG4gICAgICBiYWNrRGVsYXk6IHRoaXMuYmFja0RlbGF5LFxuICAgICAgZmFkZU91dDogdGhpcy5mYWRlT3V0LFxuICAgICAgZmFkZU91dENsYXNzOiB0aGlzLmZhZGVPdXRDbGFzcyxcbiAgICAgIGZhZGVPdXREZWxheTogdGhpcy5mYWRlT3V0RGVsYXksXG4gICAgICBsb29wOiB0aGlzLmxvb3AsXG4gICAgICBsb29wQ291bnQ6IHRoaXMubG9vcENvdW50LFxuICAgICAgc2hvd0N1cnNvcjogdGhpcy5zaG93Q3Vyc29yLFxuICAgICAgYXV0b0luc2VydENzczogdGhpcy5hdXRvSW5zZXJ0Q3NzLFxuICAgICAgYXR0cjogdGhpcy5hdHRyLFxuICAgICAgYmluZElucHV0Rm9jdXNFdmVudHM6IHRoaXMuYmluZElucHV0Rm9jdXNFdmVudHMsXG4gICAgICBjb250ZW50VHlwZTogdGhpcy5jb250ZW50VHlwZSxcbiAgICAgIG9uQ29tcGxldGU6IGVtaXQodGhpcy5jb21wbGV0ZWQpLFxuICAgICAgcHJlU3RyaW5nVHlwZWQ6IGVtaXRJbmRleCh0aGlzLnByZVN0cmluZ1R5cGVkKSxcbiAgICAgIG9uU3RyaW5nVHlwZWQ6IGVtaXRJbmRleCh0aGlzLnN0cmluZ1R5cGVkKSxcbiAgICAgIG9uTGFzdFN0cmluZ0JhY2tzcGFjZWQ6IGVtaXQodGhpcy5sYXN0U3RyaW5nQmFja3NwYWNlZCksXG4gICAgICBvblR5cGluZ1BhdXNlZDogZW1pdEluZGV4KHRoaXMudHlwaW5nUGF1c2VkKSxcbiAgICAgIG9uVHlwaW5nUmVzdW1lZDogZW1pdEluZGV4KHRoaXMudHlwaW5nUmVzdW1lZCksXG4gICAgICBvblJlc2V0OiBlbWl0KHRoaXMucmVzZXQpLFxuICAgICAgb25TdG9wOiBlbWl0SW5kZXgodGhpcy5zdG9wcGVkKSxcbiAgICAgIG9uU3RhcnQ6IGVtaXRJbmRleCh0aGlzLnN0YXJ0ZWQpLFxuICAgICAgb25EZXN0cm95OiBlbWl0KHRoaXMuZGVzdHJveWVkKSxcbiAgICB9IGFzIFR5cGVkT3B0aW9ucztcblxuICAgIE9iamVjdC5rZXlzKG9wdHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmIChvcHRzW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWxldGUgb3B0c1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9wdHM7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUN1cnNvclN0eWxlKCk6IHZvaWQge1xuICAgIGNvbnN0IHRleHRFbGVtZW50U3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuY29udGVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50eXBpbmcnKSk7XG4gICAgY29uc3QgY3Vyc29yRWxlbWVudFN0eWxlID0gdGhpcy5jb250ZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnR5cGVkLWN1cnNvcicpLnN0eWxlO1xuXG4gICAgY3Vyc29yRWxlbWVudFN0eWxlLmZvbnRTaXplID0gdGV4dEVsZW1lbnRTdHlsZS5mb250U2l6ZTtcbiAgICBjdXJzb3JFbGVtZW50U3R5bGUuY29sb3IgPSB0aGlzLmN1cnNvckNvbG9yIHx8IHRleHRFbGVtZW50U3R5bGUuY29sb3I7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudHlwZWQpIHtcbiAgICAgIHRoaXMudHlwZWQuZGVzdHJveSgpO1xuICAgICAgdGhpcy5uZ0FmdGVyVmlld0luaXQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==