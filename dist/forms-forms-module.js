(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-forms-module"],{

/***/ "./node_modules/ng2-material-dropdown/fesm5/ng2-material-dropdown.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ng2-material-dropdown/fesm5/ng2-material-dropdown.js ***!
  \***************************************************************************/
/*! exports provided: DropdownStateService, Ng2Dropdown, Ng2DropdownButton, Ng2DropdownMenu, Ng2DropdownModule, Ng2MenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownStateService", function() { return DropdownStateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2Dropdown", function() { return Ng2Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2DropdownButton", function() { return Ng2DropdownButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2DropdownMenu", function() { return Ng2DropdownMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2DropdownModule", function() { return Ng2DropdownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2MenuItem", function() { return Ng2MenuItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var Ng2DropdownButton = /** @class */ (function () {
    function Ng2DropdownButton(element) {
        this.element = element;
        this.onMenuToggled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showCaret = true;
    }
    /**
     * @name toggleMenu
     * @desc emits event to toggle menu
     */
    Ng2DropdownButton.prototype.toggleMenu = function () {
        this.onMenuToggled.emit(true);
    };
    /**
     * @name getPosition
     * @desc returns position of the button
     */
    Ng2DropdownButton.prototype.getPosition = function () {
        return this.element.nativeElement.getBoundingClientRect();
    };
    Ng2DropdownButton.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Ng2DropdownButton.prototype, "onMenuToggled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Ng2DropdownButton.prototype, "showCaret", void 0);
    Ng2DropdownButton = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng2-dropdown-button',
            template: "<button class='ng2-dropdown-button' type=\"button\" (click)=\"toggleMenu()\" tabindex=\"0s\">\n    <span class=\"ng2-dropdown-button__label\">\n        <ng-content></ng-content>\n    </span>\n\n    <span class=\"ng2-dropdown-button__caret\" *ngIf=\"showCaret\">\n        <svg enable-background=\"new 0 0 32 32\" height=\"16px\" id=\"\u0421\u043B\u043E\u0439_1\" version=\"1.1\" viewBox=\"0 0 32 32\" width=\"16px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path d=\"M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0  c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002  c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z\" fill=\"#121313\" id=\"Expand_More\"/><g/><g/><g/><g/><g/><g/></svg>\n    </span>\n</button>\n",
            styles: [".ng2-dropdown-button{font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial;background:#fff;padding:.45rem .25rem;font-size:14px;letter-spacing:.08rem;color:#444;outline:0;cursor:pointer;font-weight:400;border:none;border-bottom:1px solid #efefef;text-align:left;min-width:100px;width:100%;display:flex;flex-direction:row;max-width:150px}.ng2-dropdown-button:hover{color:#222}.ng2-dropdown-button:active,.ng2-dropdown-button:focus{color:#222;border-bottom:2px solid #2196f3}.ng2-dropdown-button__label{flex:1 1 95%}.ng2-dropdown-button__caret{width:12px;height:12px;display:flex;flex:1 1 6%}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button{border:none;min-width:40px;width:40px;border-radius:100%;transition:.2s;text-align:center;height:40px;padding:.5em}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button:active{background:rgba(0,0,0,.2)}"]
        })
    ], Ng2DropdownButton);
    return Ng2DropdownButton;
}());

var _a;
var KEYS = {
    BACKSPACE: 9,
    PREV: 38,
    NEXT: 40,
    ENTER: 13,
    ESCAPE: 27
};
/**
 * @name onSwitchNext
 * @param index
 * @param items
 * @param state
 */
var onSwitchNext = function (index, items, state) {
    if (index < items.length - 1) {
        state.select(items[index + 1], true);
    }
};
var ɵ0 = onSwitchNext;
/**
 * @name onSwitchPrev
 * @param index
 * @param items
 * @param state
 */
var onSwitchPrev = function (index, items, state) {
    if (index > 0) {
        state.select(items[index - 1], true);
    }
};
var ɵ1 = onSwitchPrev;
/**
 * @name onBackspace
 * @param index
 * @param items
 * @param state
 */
var onBackspace = function (index, items, state) {
    if (index < items.length - 1) {
        state.select(items[index + 1], true);
    }
    else {
        state.select(items[0], true);
    }
};
var ɵ2 = onBackspace;
function onEscape() {
    this.hide();
}
;
/**
 * @name onItemClicked
 * @param index
 * @param items
 * @param state
 */
var onItemClicked = function (index, items, state) {
    return state.selectedItem ? state.selectedItem.click() : undefined;
};
var ɵ3 = onItemClicked;
var ACTIONS = (_a = {},
    _a[KEYS.BACKSPACE] = onBackspace,
    _a[KEYS.PREV] = onSwitchPrev,
    _a[KEYS.NEXT] = onSwitchNext,
    _a[KEYS.ENTER] = onItemClicked,
    _a[KEYS.ESCAPE] = onEscape,
    _a);
function arrowKeysHandler(event) {
    if ([38, 40].indexOf(event.keyCode) > -1) {
        event.preventDefault();
    }
}

var Ng2DropdownState = /** @class */ (function () {
    function Ng2DropdownState() {
        this.onItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onItemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onItemDestroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(Ng2DropdownState.prototype, "selectedItem", {
        /**
         * @name selectedItem
         * @desc getter for _selectedItem
         */
        get: function () {
            return this._selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name selects a menu item and emits event
     * @param item
     */
    Ng2DropdownState.prototype.select = function (item, dispatchEvent) {
        if (dispatchEvent === void 0) { dispatchEvent = true; }
        this._selectedItem = item;
        if (!dispatchEvent || !item) {
            return;
        }
        item.focus();
        this.onItemSelected.emit(item);
    };
    /**
     * @name unselect
     * @desc sets _selectedItem as undefined
     */
    Ng2DropdownState.prototype.unselect = function () {
        this._selectedItem = undefined;
    };
    return Ng2DropdownState;
}());

var DropdownStateService = /** @class */ (function () {
    function DropdownStateService() {
        this.menuState = {
            isVisible: false,
            toString: function () {
                return this.isVisible === true ? 'visible' : 'hidden';
            }
        };
        this.dropdownState = new Ng2DropdownState();
    }
    DropdownStateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], DropdownStateService);
    return DropdownStateService;
}());

var Ng2MenuItem = /** @class */ (function () {
    function Ng2MenuItem(state, element) {
        this.state = state;
        this.element = element;
        /**
         * @preventClose
         * @desc if true, clicking on the item won't close the dropdown
         */
        this.preventClose = false;
    }
    Ng2MenuItem.prototype.ngOnDestroy = function () {
        this.state.dropdownState.onItemDestroyed.emit(this);
    };
    Object.defineProperty(Ng2MenuItem.prototype, "isSelected", {
        /**
         * @name isSelected
         * @desc returns current selected item
         */
        get: function () {
            return this === this.state.dropdownState.selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name click
     * @desc emits select event
     */
    Ng2MenuItem.prototype.select = function ($event) {
        this.state.dropdownState.select(this, true);
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }
    };
    /**
     * @name click
     * @desc emits click event
     */
    Ng2MenuItem.prototype.click = function () {
        this.state.dropdownState.onItemClicked.emit(this);
    };
    /**
     * @name focus
     */
    Ng2MenuItem.prototype.focus = function () {
        this.element.nativeElement.children[0].focus();
    };
    Ng2MenuItem.ctorParameters = function () { return [
        { type: DropdownStateService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Ng2MenuItem.prototype, "preventClose", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Ng2MenuItem.prototype, "value", void 0);
    Ng2MenuItem = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng2-menu-item',
            template: "\n        <div\n            class=\"ng2-menu-item\"\n            role=\"button\"\n            tabindex=\"0\"\n            [class.ng2-menu-item--selected]=\"isSelected\"\n            (keydown.enter)=\"click()\"\n            (click)=\"click()\"\n            (mouseover)=\"select()\"\n        >\n            <ng-content></ng-content>\n        </div>\n    ",
            styles: [".ng2-menu-item{font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial;background:#fff;color:rgba(0,0,0,.87);cursor:pointer;font-size:.9em;text-transform:none;font-weight:400;letter-spacing:.03em;height:48px;line-height:48px;padding:.3em 1.25rem;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;transition:background .25s}.ng2-menu-item--selected{background:rgba(158,158,158,.2);outline:0}.ng2-menu-item:focus{outline:0}.ng2-menu-item:active{background:rgba(158,158,158,.4)}:host(ng2-menu-item) ::ng-deep [ng2-menu-item-icon]{vertical-align:middle;font-size:28px;width:1.5em;height:30px;color:rgba(0,0,0,.44)}"]
        })
    ], Ng2MenuItem);
    return Ng2MenuItem;
}());

var Ng2DropdownMenu = /** @class */ (function () {
    function Ng2DropdownMenu(dropdownState, element, renderer) {
        this.dropdownState = dropdownState;
        this.element = element;
        this.renderer = renderer;
        /**
         * @name width
         */
        this.width = 4;
        /**
         * @description if set to true, the first element of the dropdown will be automatically focused
         * @name focusFirstElement
         */
        this.focusFirstElement = true;
        /**
         * @name appendToBody
         */
        this.appendToBody = true;
        /**
         * @name zIndex
         */
        this.zIndex = 1000;
        this.listeners = {
            arrowHandler: undefined,
            handleKeypress: undefined
        };
    }
    /**
     * @name show
     * @shows menu and selects first item
     */
    Ng2DropdownMenu.prototype.show = function (position, dynamic) {
        if (dynamic === void 0) { dynamic = true; }
        var dc = typeof document !== 'undefined' ? document : undefined;
        var wd = typeof window !== 'undefined' ? window : undefined;
        if (!this.dropdownState.menuState.isVisible) {
            // setting handlers
            this.listeners.handleKeypress = this.renderer.listen(dc.body, 'keydown', this.handleKeypress.bind(this));
            this.listeners.arrowHandler = this.renderer.listen(wd, 'keydown', arrowKeysHandler);
        }
        // update state
        this.dropdownState.menuState.isVisible = true;
        if (position) {
            this.updatePosition(position, dynamic);
        }
    };
    /**
     * @name hide
     * @desc hides menu
     */
    Ng2DropdownMenu.prototype.hide = function () {
        this.dropdownState.menuState.isVisible = false;
        // reset selected item state
        this.dropdownState.dropdownState.unselect();
        // call function to unlisten
        this.listeners.arrowHandler && this.listeners.arrowHandler();
        this.listeners.handleKeypress && this.listeners.handleKeypress();
    };
    /**
     * @name updatePosition
     * @desc updates the menu position every time it is toggled
     * @param position {ClientRect}
     * @param dynamic {boolean}
     */
    Ng2DropdownMenu.prototype.updatePosition = function (position, dynamic) {
        this.position = position;
        this.updateOnChange(dynamic);
    };
    /**
     * @name handleKeypress
     * @desc executes functions on keyPress based on the key pressed
     * @param $event
     */
    Ng2DropdownMenu.prototype.handleKeypress = function ($event) {
        var key = $event.keyCode;
        var items = this.items.toArray();
        var index = items.indexOf(this.dropdownState.dropdownState.selectedItem);
        if (!ACTIONS.hasOwnProperty(key)) {
            return;
        }
        ACTIONS[key].call(this, index, items, this.dropdownState.dropdownState);
    };
    /**
     * @name getMenuElement
     */
    Ng2DropdownMenu.prototype.getMenuElement = function () {
        return this.element.nativeElement.children[0];
    };
    /**
     * @name calcPositionOffset
     * @param position
     */
    Ng2DropdownMenu.prototype.calcPositionOffset = function (position) {
        var wd = typeof window !== 'undefined' ? window : undefined;
        var dc = typeof document !== 'undefined' ? document : undefined;
        if (!wd || !dc || !position) {
            return;
        }
        var element = this.getMenuElement();
        var supportPageOffset = wd.pageXOffset !== undefined;
        var isCSS1Compat = (dc.compatMode || '') === 'CSS1Compat';
        var x = supportPageOffset
            ? wd.pageXOffset
            : isCSS1Compat
                ? dc.documentElement.scrollLeft
                : dc.body.scrollLeft;
        var y = supportPageOffset
            ? wd.pageYOffset
            : isCSS1Compat
                ? dc.documentElement.scrollTop
                : dc.body.scrollTop;
        var _a = this.applyOffset(position.top + (this.appendToBody ? y - 15 : 0) + "px", position.left + x - 5 + "px"), top = _a.top, left = _a.left;
        var clientWidth = element.clientWidth;
        var clientHeight = element.clientHeight;
        var marginFromBottom = parseInt(top) + clientHeight + (this.appendToBody ? 0 : y - 15);
        var marginFromRight = parseInt(left) + clientWidth;
        var windowScrollHeight = wd.innerHeight + wd.scrollY;
        var windowScrollWidth = wd.innerWidth + wd.scrollX;
        if (marginFromBottom >= windowScrollHeight) {
            top = parseInt(top.replace('px', '')) - clientHeight + "px";
        }
        if (marginFromRight >= windowScrollWidth) {
            var marginRight = marginFromRight - windowScrollWidth + 30;
            left = parseInt(left.replace('px', '')) - marginRight + "px";
        }
        return { top: top, left: left };
    };
    Ng2DropdownMenu.prototype.applyOffset = function (top, left) {
        if (!this.offset) {
            return { top: top, left: left };
        }
        var offset = this.offset.split(' ');
        if (!offset[1]) {
            offset[1] = '0';
        }
        top = parseInt(top.replace('px', '')) + parseInt(offset[0]) + "px";
        left = parseInt(left.replace('px', '')) + parseInt(offset[1]) + "px";
        return { top: top, left: left };
    };
    Ng2DropdownMenu.prototype.ngOnInit = function () {
        var dc = typeof document !== 'undefined' ? document : undefined;
        if (this.appendToBody) {
            // append menu element to the body
            dc.body.appendChild(this.element.nativeElement);
        }
    };
    Ng2DropdownMenu.prototype.updateOnChange = function (dynamic) {
        if (dynamic === void 0) { dynamic = true; }
        var element = this.getMenuElement();
        var position = this.calcPositionOffset(this.position);
        if (position) {
            this.renderer.setStyle(element, 'top', position.top.toString());
            this.renderer.setStyle(element, 'left', position.left.toString());
        }
        // select first item unless user disabled this option
        if (this.focusFirstElement &&
            this.items.first &&
            !this.dropdownState.dropdownState.selectedItem) {
            this.dropdownState.dropdownState.select(this.items.first, false);
        }
    };
    Ng2DropdownMenu.prototype.ngOnDestroy = function () {
        var elem = this.element.nativeElement;
        elem.parentNode.removeChild(elem);
        if (this.listeners.handleKeypress) {
            this.listeners.handleKeypress();
        }
    };
    Ng2DropdownMenu.ctorParameters = function () { return [
        { type: DropdownStateService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Ng2DropdownMenu.prototype, "width", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Ng2DropdownMenu.prototype, "focusFirstElement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Ng2DropdownMenu.prototype, "offset", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Ng2DropdownMenu.prototype, "appendToBody", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Ng2DropdownMenu.prototype, "zIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(Ng2MenuItem, { descendants: true })
    ], Ng2DropdownMenu.prototype, "items", void 0);
    Ng2DropdownMenu = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng2-dropdown-menu',
            template: "\n        <!-- MENU -->\n        <div\n            class=\"ng2-dropdown-menu ng2-dropdown-menu---width--{{ width }}\"\n            [class.ng2-dropdown-menu--inside-element]=\"!appendToBody\"\n            [class.ng2-dropdown-menu--open]=\"dropdownState.menuState.isVisible\"\n            [style.z-index]=\"zIndex\"\n            [@fade]=\"dropdownState.menuState.toString()\"\n        >\n            <div\n                class=\"ng2-dropdown-menu__options-container\"\n                [@opacity]=\"dropdownState.menuState.toString()\"\n            >\n                <ng-content></ng-content>\n            </div>\n        </div>\n\n        <!-- BACKDROP -->\n        <div\n            class=\"ng2-dropdown-backdrop\"\n            *ngIf=\"dropdownState.menuState.isVisible\"\n            (click)=\"hide()\"\n        ></div>\n    ",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, height: '*', width: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, overflow: 'hidden', height: 0, width: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hidden => visible', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, height: '*', width: '*' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => hidden', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('350ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, width: 0, height: 0 }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('opacity', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hidden => visible', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('450ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, offset: 1 })
                        ]))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => hidden', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0.5, offset: 0.3 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, offset: 1 })
                        ]))
                    ])
                ])
            ],
            styles: [":host{display:block}.ng2-dropdown-menu{overflow-y:auto;box-shadow:0 1px 2px 0 rgba(0,0,0,.3);position:absolute;padding:.5em 0;background:#fff;border-radius:1px;max-height:400px;width:260px;min-height:0;display:block}.ng2-dropdown-menu.ng2-dropdown-menu--inside-element{position:fixed}.ng2-dropdown-menu.ng2-dropdown-menu--width--2{width:200px}.ng2-dropdown-menu.ng2-dropdown-menu--width--4{width:260px}.ng2-dropdown-menu.ng2-dropdown-menu--width--6{width:320px}.ng2-dropdown-backdrop{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;overflow:hidden}:host ::ng-deep .ng2-menu-divider{height:1px;min-height:1px;max-height:1px;width:100%;display:block;background:#f9f9f9}"]
        })
    ], Ng2DropdownMenu);
    return Ng2DropdownMenu;
}());

var Ng2Dropdown = /** @class */ (function () {
    function Ng2Dropdown(state) {
        this.state = state;
        this.dynamicUpdate = true;
        // outputs
        this.onItemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Ng2Dropdown.prototype.ngOnInit = function () {
        var _this = this;
        this.state.dropdownState.onItemClicked.subscribe(function (item) {
            _this.onItemClicked.emit(item);
            if (item.preventClose) {
                return;
            }
            _this.hide.call(_this);
        });
        if (this.button) {
            this.button.onMenuToggled.subscribe(function () {
                _this.toggleMenu();
            });
        }
        this.state.dropdownState.onItemSelected.subscribe(function (item) {
            _this.onItemSelected.emit(item);
        });
        this.state.dropdownState.onItemDestroyed.subscribe(function (item) {
            var newSelectedItem;
            var items = _this.menu.items.toArray();
            if (item !== _this.state.dropdownState.selectedItem) {
                return;
            }
            if (_this.menu.focusFirstElement) {
                newSelectedItem =
                    item === items[0] && items.length > 1
                        ? items[1]
                        : items[0];
            }
            _this.state.dropdownState.select(newSelectedItem);
        });
    };
    /**
     * @name toggleMenu
     * @desc toggles menu visibility
     */
    Ng2Dropdown.prototype.toggleMenu = function (position) {
        if (position === void 0) { position = this.button.getPosition(); }
        this.state.menuState.isVisible ? this.hide() : this.show(position);
    };
    /**
     * - hides dropdown
     * @name hide
     */
    Ng2Dropdown.prototype.hide = function () {
        this.menu.hide();
        this.onHide.emit(this);
    };
    /**
     * - shows dropdown
     * @name show
     * @param position
     */
    Ng2Dropdown.prototype.show = function (position) {
        if (position === void 0) { position = this.button.getPosition(); }
        this.menu.show(position, this.dynamicUpdate);
        this.onShow.emit(this);
    };
    /**
     * @name scrollListener
     */
    Ng2Dropdown.prototype.scrollListener = function () {
        if (this.button && this.dynamicUpdate) {
            this.menu.updatePosition(this.button.getPosition(), true);
        }
    };
    Ng2Dropdown.ctorParameters = function () { return [
        { type: DropdownStateService }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(Ng2DropdownButton, { static: true })
    ], Ng2Dropdown.prototype, "button", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(Ng2DropdownMenu, { static: true })
    ], Ng2Dropdown.prototype, "menu", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Ng2Dropdown.prototype, "dynamicUpdate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Ng2Dropdown.prototype, "onItemClicked", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Ng2Dropdown.prototype, "onItemSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Ng2Dropdown.prototype, "onShow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Ng2Dropdown.prototype, "onHide", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll')
    ], Ng2Dropdown.prototype, "scrollListener", null);
    Ng2Dropdown = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng2-dropdown',
            template: "\n        <div class=\"ng2-dropdown-container\">\n            <ng-content select=\"ng2-dropdown-button\"></ng-content>\n            <ng-content select=\"ng2-dropdown-menu\"></ng-content>\n        </div>\n    ",
            providers: [DropdownStateService]
        })
    ], Ng2Dropdown);
    return Ng2Dropdown;
}());

var Ng2DropdownModule = /** @class */ (function () {
    function Ng2DropdownModule() {
    }
    Ng2DropdownModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                Ng2MenuItem,
                Ng2DropdownButton,
                Ng2DropdownMenu,
                Ng2Dropdown
            ],
            declarations: [
                Ng2Dropdown,
                Ng2MenuItem,
                Ng2DropdownButton,
                Ng2DropdownMenu,
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ]
        })
    ], Ng2DropdownModule);
    return Ng2DropdownModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng2-material-dropdown.js.map


/***/ }),

/***/ "./node_modules/ng2-nouislider/src/ng2-nouislider.js":
/*!***********************************************************!*\
  !*** ./node_modules/ng2-nouislider/src/ng2-nouislider.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var noUiSlider = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var DefaultFormatter = (function () {
    function DefaultFormatter() {
    }
    DefaultFormatter.prototype.to = function (value) {
        // formatting with http://stackoverflow.com/a/26463364/478584
        return String(parseFloat(parseFloat(String(value)).toFixed(2)));
    };
    ;
    DefaultFormatter.prototype.from = function (value) {
        return parseFloat(value);
    };
    return DefaultFormatter;
}());
exports.DefaultFormatter = DefaultFormatter;
var NouisliderComponent = (function () {
    function NouisliderComponent(el, renderer) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.config = {};
        this.change = new core_1.EventEmitter(true);
        this.update = new core_1.EventEmitter(true);
        this.slide = new core_1.EventEmitter(true);
        this.set = new core_1.EventEmitter(true);
        this.start = new core_1.EventEmitter(true);
        this.end = new core_1.EventEmitter(true);
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.eventHandler = function (emitter, values, handle, unencoded) {
            var v = _this.toValues(values);
            var emitEvents = false;
            if (_this.value === undefined) {
                _this.value = v;
                return;
            }
            if (Array.isArray(v) && _this.value[handle] != v[handle]) {
                emitEvents = true;
            }
            if (!Array.isArray(v) && _this.value != v) {
                emitEvents = true;
            }
            if (emitEvents) {
                emitter.emit(v);
                _this.onChange(v);
            }
            if (Array.isArray(v)) {
                _this.value[handle] = v[handle];
            }
            else {
                _this.value = v;
            }
        };
        this.defaultKeyHandler = function (e) {
            var stepSize = _this.slider.steps();
            var index = parseInt(e.target.getAttribute('data-handle'));
            var sign = 1;
            var multiplier = 1;
            var step = 0;
            var delta = 0;
            switch (e.which) {
                case 34:// PageDown
                    multiplier = _this.config.pageSteps;
                case 40: // ArrowDown
                case 37:// ArrowLeft
                    sign = -1;
                    step = stepSize[index][0];
                    e.preventDefault();
                    break;
                case 33:// PageUp
                    multiplier = _this.config.pageSteps;
                case 38: // ArrowUp
                case 39:// ArrowRight
                    step = stepSize[index][1];
                    e.preventDefault();
                    break;
                default:
                    break;
            }
            delta = sign * multiplier * step;
            var newValue;
            if (Array.isArray(_this.value)) {
                newValue = [].concat(_this.value);
                newValue[index] = newValue[index] + delta;
            }
            else {
                newValue = _this.value + delta;
            }
            _this.slider.set(newValue);
        };
    }
    NouisliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var inputsConfig = JSON.parse(JSON.stringify({
            behaviour: this.behaviour,
            connect: this.connect,
            limit: this.limit,
            start: this.formControl !== undefined ? this.formControl.value : this.ngModel,
            step: this.step,
            pageSteps: this.pageSteps,
            keyboard: this.keyboard,
            onKeydown: this.onKeydown,
            range: this.range || this.config.range || { min: this.min, max: this.max },
            tooltips: this.tooltips,
            snap: this.snap,
            animate: this.animate
        }));
        inputsConfig.tooltips = this.tooltips || this.config.tooltips;
        inputsConfig.format = this.format || this.config.format || new DefaultFormatter();
        this.slider = noUiSlider.create(this.el.nativeElement.querySelector('div'), Object.assign(this.config, inputsConfig));
        this.handles = [].slice.call(this.el.nativeElement.querySelectorAll('.noUi-handle'));
        if (this.config.keyboard) {
            if (this.config.pageSteps === undefined) {
                this.config.pageSteps = 10;
            }
            var _loop_1 = function (handle) {
                handle.setAttribute('tabindex', 0);
                handle.addEventListener('click', function () {
                    handle.focus();
                });
                if (this_1.config.onKeydown === undefined) {
                    handle.addEventListener('keydown', this_1.defaultKeyHandler);
                }
                else {
                    handle.addEventListener('keydown', this_1.config.onKeydown);
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = this.handles; _i < _a.length; _i++) {
                var handle = _a[_i];
                _loop_1(handle);
            }
        }
        this.slider.on('set', function (values, handle, unencoded) {
            _this.eventHandler(_this.set, values, handle, unencoded);
        });
        this.slider.on('update', function (values, handle, unencoded) {
            _this.update.emit(_this.toValues(values));
        });
        this.slider.on('change', function (values, handle, unencoded) {
            _this.change.emit(_this.toValues(values));
        });
        this.slider.on('slide', function (values, handle, unencoded) {
            _this.eventHandler(_this.slide, values, handle, unencoded);
        });
        this.slider.on('start', function (values, handle, unencoded) {
            _this.start.emit(_this.toValues(values));
        });
        this.slider.on('end', function (values, handle, unencoded) {
            _this.end.emit(_this.toValues(values));
        });
    };
    NouisliderComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.slider && (changes.min || changes.max || changes.step || changes.range)) {
            setTimeout(function () {
                _this.slider.updateOptions({
                    range: Object.assign({}, {
                        min: _this.min,
                        max: _this.max
                    }, _this.range || {}),
                    step: _this.step
                });
            });
        }
    };
    NouisliderComponent.prototype.toValues = function (values) {
        var v = values.map(this.config.format.from);
        return (v.length == 1 ? v[0] : v);
    };
    NouisliderComponent.prototype.writeValue = function (value) {
        var _this = this;
        if (this.slider) {
            setTimeout(function () {
                _this.slider.set(value);
            });
        }
    };
    NouisliderComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NouisliderComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NouisliderComponent.prototype.setDisabledState = function (isDisabled) {
        isDisabled
            ? this.renderer.setAttribute(this.el.nativeElement.childNodes[0], 'disabled', 'true')
            : this.renderer.removeAttribute(this.el.nativeElement.childNodes[0], 'disabled');
    };
    NouisliderComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'nouislider',
                    host: {
                        '[class.ng2-nouislider]': 'true'
                    },
                    template: '<div [attr.disabled]="disabled ? true : undefined"></div>',
                    styles: ["\n    :host {\n      display: block;\n      margin-top: 1rem;\n      margin-bottom: 1rem;\n    }\n  "],
                    providers: [
                        {
                            provide: forms_1.NG_VALUE_ACCESSOR,
                            useExisting: core_1.forwardRef(function () { return NouisliderComponent; }),
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    NouisliderComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer2, },
    ]; };
    NouisliderComponent.propDecorators = {
        'disabled': [{ type: core_1.Input },],
        'behaviour': [{ type: core_1.Input },],
        'connect': [{ type: core_1.Input },],
        'limit': [{ type: core_1.Input },],
        'min': [{ type: core_1.Input },],
        'max': [{ type: core_1.Input },],
        'snap': [{ type: core_1.Input },],
        'animate': [{ type: core_1.Input },],
        'range': [{ type: core_1.Input },],
        'step': [{ type: core_1.Input },],
        'format': [{ type: core_1.Input },],
        'pageSteps': [{ type: core_1.Input },],
        'config': [{ type: core_1.Input },],
        'ngModel': [{ type: core_1.Input },],
        'keyboard': [{ type: core_1.Input },],
        'onKeydown': [{ type: core_1.Input },],
        'formControl': [{ type: core_1.Input },],
        'tooltips': [{ type: core_1.Input },],
        'change': [{ type: core_1.Output },],
        'update': [{ type: core_1.Output },],
        'slide': [{ type: core_1.Output },],
        'set': [{ type: core_1.Output },],
        'start': [{ type: core_1.Output },],
        'end': [{ type: core_1.Output },],
    };
    return NouisliderComponent;
}());
exports.NouisliderComponent = NouisliderComponent;
var NouisliderModule = (function () {
    function NouisliderModule() {
    }
    NouisliderModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [],
                    exports: [NouisliderComponent],
                    declarations: [NouisliderComponent],
                },] },
    ];
    /** @nocollapse */
    NouisliderModule.ctorParameters = function () { return []; };
    return NouisliderModule;
}());
exports.NouisliderModule = NouisliderModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5nMi1ub3Vpc2xpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQXlDO0FBQ3pDLHNDQVd1QjtBQUN2Qix3Q0FJd0I7QUFPeEI7SUFBQTtJQVNBLENBQUM7SUFSQyw2QkFBRSxHQUFGLFVBQUcsS0FBYTtRQUNkLDZEQUE2RDtRQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQUEsQ0FBQztJQUVGLCtCQUFJLEdBQUosVUFBSyxLQUFhO1FBQ2hCLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSw0Q0FBZ0I7QUFZN0I7SUFnQ0UsNkJBQW9CLEVBQWMsRUFBVSxRQUFvQjtRQUFoRSxpQkFBcUU7UUFBakQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVk7UUFoQnhELFdBQU0sR0FBUSxFQUFFLENBQUM7UUFNakIsV0FBTSxHQUFzQixJQUFJLG1CQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsV0FBTSxHQUFzQixJQUFJLG1CQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsVUFBSyxHQUFzQixJQUFJLG1CQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsUUFBRyxHQUFzQixJQUFJLG1CQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsVUFBSyxHQUFzQixJQUFJLG1CQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsUUFBRyxHQUFzQixJQUFJLG1CQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEQsYUFBUSxHQUFRLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDbkMsY0FBUyxHQUFRLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFnSHBDLGlCQUFZLEdBQUcsVUFBQyxPQUEwQixFQUFFLE1BQWdCLEVBQUUsTUFBYyxFQUFFLFNBQW1CO1lBQ3ZHLElBQUksQ0FBQyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUIsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ2YsTUFBTSxDQUFDO1lBQ1QsQ0FBQztZQUNELEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLENBQUM7WUFDRCxFQUFFLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLENBQUM7WUFDRCxFQUFFLENBQUEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNkLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsQ0FBQztZQUNELEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqQyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDakIsQ0FBQztRQUNILENBQUMsQ0FBQTtRQUVPLHNCQUFpQixHQUFHLFVBQUMsQ0FBZ0I7WUFDM0MsSUFBSSxRQUFRLEdBQVUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMxQyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQWUsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUMxRSxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7WUFDYixJQUFJLFVBQVUsR0FBVyxDQUFDLENBQUM7WUFDM0IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBRWQsTUFBTSxDQUFDLENBQUUsQ0FBQyxDQUFDLEtBQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLEtBQUssRUFBRSxDQUFHLFdBQVc7b0JBQ25CLFVBQVUsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztnQkFDckMsS0FBSyxFQUFFLENBQUMsQ0FBRSxZQUFZO2dCQUN0QixLQUFLLEVBQUUsQ0FBRyxZQUFZO29CQUNwQixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ1YsSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUNuQixLQUFLLENBQUM7Z0JBRVIsS0FBSyxFQUFFLENBQUcsU0FBUztvQkFDakIsVUFBVSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUNyQyxLQUFLLEVBQUUsQ0FBQyxDQUFFLFVBQVU7Z0JBQ3BCLEtBQUssRUFBRSxDQUFHLGFBQWE7b0JBQ3JCLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDbkIsS0FBSyxDQUFDO2dCQUVSO29CQUNFLEtBQUssQ0FBQztZQUNWLENBQUM7WUFFRCxLQUFLLEdBQUcsSUFBSSxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDakMsSUFBSSxRQUEyQixDQUFDO1lBRWhDLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUM1QyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sUUFBUSxHQUFHLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLENBQUM7WUFFRCxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUE7SUEvS21FLENBQUM7SUFFckUsc0NBQVEsR0FBUjtRQUFBLGlCQWlFQztRQWhFQyxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDM0MsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPO1lBQzdFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUM7WUFDeEUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDLENBQUMsQ0FBQztRQUNKLFlBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUM5RCxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBRWxGLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FDN0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUMxQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQ3pDLENBQUM7UUFFRixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFFckYsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUM3QixDQUFDO29DQUNPLE1BQU07Z0JBQ1osTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7b0JBQy9CLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDakIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsRUFBRSxDQUFBLENBQUMsT0FBSyxNQUFNLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsT0FBSyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUM3RCxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsT0FBSyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzVELENBQUM7WUFDSCxDQUFDOztZQVZELEdBQUcsQ0FBQSxDQUFlLFVBQVksRUFBWixLQUFBLElBQUksQ0FBQyxPQUFPLEVBQVosY0FBWSxFQUFaLElBQVk7Z0JBQTFCLElBQUksTUFBTSxTQUFBO3dCQUFOLE1BQU07YUFVYjtRQUNILENBQUM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsVUFBQyxNQUFnQixFQUFFLE1BQWMsRUFBRSxTQUFtQjtZQUMxRSxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFDLE1BQWdCLEVBQUUsTUFBYyxFQUFFLFNBQW1CO1lBQzdFLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFDLE1BQWdCLEVBQUUsTUFBYyxFQUFFLFNBQW1CO1lBQzdFLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLE1BQWdCLEVBQUUsTUFBYyxFQUFFLFNBQW1CO1lBQzVFLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUMsTUFBZ0IsRUFBRSxNQUFjLEVBQUUsU0FBbUI7WUFDNUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQUMsTUFBZ0IsRUFBRSxNQUFjLEVBQUUsU0FBbUI7WUFDMUUsS0FBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHlDQUFXLEdBQVgsVUFBWSxPQUFZO1FBQXhCLGlCQVlDO1FBWEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakYsVUFBVSxDQUFDO2dCQUNULEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO29CQUN4QixLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7d0JBQ3ZCLEdBQUcsRUFBRSxLQUFJLENBQUMsR0FBRzt3QkFDYixHQUFHLEVBQUUsS0FBSSxDQUFDLEdBQUc7cUJBQ2QsRUFBRSxLQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztvQkFDcEIsSUFBSSxFQUFFLEtBQUksQ0FBQyxJQUFJO2lCQUNoQixDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRUQsc0NBQVEsR0FBUixVQUFTLE1BQWdCO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCx3Q0FBVSxHQUFWLFVBQVcsS0FBVTtRQUFyQixpQkFNQztRQUxDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLFVBQVUsQ0FBQztnQkFDVCxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRUQsOENBQWdCLEdBQWhCLFVBQWlCLEVBQXdCO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCwrQ0FBaUIsR0FBakIsVUFBa0IsRUFBWTtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsOENBQWdCLEdBQWhCLFVBQWlCLFVBQW1CO1FBQ2xDLFVBQVU7Y0FDTixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQztjQUNuRixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDckYsQ0FBQztJQW9FSSw4QkFBVSxHQUEwQjtRQUMzQyxFQUFFLElBQUksRUFBRSxnQkFBUyxFQUFFLElBQUksRUFBRSxDQUFDO29CQUN4QixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsSUFBSSxFQUFFO3dCQUNKLHdCQUF3QixFQUFFLE1BQU07cUJBQ2pDO29CQUNELFFBQVEsRUFBRSwyREFBMkQ7b0JBQ3JFLE1BQU0sRUFBRSxDQUFDLHNHQU1SLENBQUM7b0JBQ0YsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSx5QkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxpQkFBVSxDQUFDLGNBQU0sT0FBQSxtQkFBbUIsRUFBbkIsQ0FBbUIsQ0FBQzs0QkFDbEQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0YsRUFBRyxFQUFFO0tBQ0wsQ0FBQztJQUNGLGtCQUFrQjtJQUNYLGtDQUFjLEdBQW1FLGNBQU0sT0FBQTtRQUM5RixFQUFDLElBQUksRUFBRSxpQkFBVSxHQUFHO1FBQ3BCLEVBQUMsSUFBSSxFQUFFLGdCQUFTLEdBQUc7S0FDbEIsRUFINkYsQ0FHN0YsQ0FBQztJQUNLLGtDQUFjLEdBQTJDO1FBQ2hFLFVBQVUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQzlCLFdBQVcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQy9CLFNBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQzdCLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQzNCLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQ3pCLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQ3pCLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQzFCLFNBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQzdCLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQzNCLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQzFCLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQzVCLFdBQVcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQy9CLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQzVCLFNBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQzdCLFVBQVUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQzlCLFdBQVcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQy9CLGFBQWEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQ2pDLFVBQVUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQzlCLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQU0sRUFBRSxFQUFFO1FBQzdCLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQU0sRUFBRSxFQUFFO1FBQzdCLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQU0sRUFBRSxFQUFFO1FBQzVCLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQU0sRUFBRSxFQUFFO1FBQzFCLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQU0sRUFBRSxFQUFFO1FBQzVCLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQU0sRUFBRSxFQUFFO0tBQ3pCLENBQUM7SUFDRiwwQkFBQztDQXRRRCxBQXNRQyxJQUFBO0FBdFFZLGtEQUFtQjtBQTBRaEM7SUFBQTtJQVVBLENBQUM7SUFWc0MsMkJBQVUsR0FBMEI7UUFDM0UsRUFBRSxJQUFJLEVBQUUsZUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO29CQUN2QixPQUFPLEVBQUUsRUFBRTtvQkFDWCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztvQkFDOUIsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7aUJBQ3BDLEVBQUcsRUFBRTtLQUNMLENBQUM7SUFDRixrQkFBa0I7SUFDWCwrQkFBYyxHQUFtRSxjQUFNLE9BQUEsRUFDN0YsRUFENkYsQ0FDN0YsQ0FBQztJQUNGLHVCQUFDO0NBVkQsQUFVQyxJQUFBO0FBVlksNENBQWdCIiwiZmlsZSI6Im5nMi1ub3Vpc2xpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG5vVWlTbGlkZXIgZnJvbSAnbm91aXNsaWRlcic7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIE5nTW9kdWxlLFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgRm9ybUNvbnRyb2wsXG4gIE5HX1ZBTFVFX0FDQ0VTU09SXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGludGVyZmFjZSBOb3VpRm9ybWF0dGVyIHtcbiAgdG8odmFsdWU6IG51bWJlcik6IHN0cmluZztcbiAgZnJvbSh2YWx1ZTogc3RyaW5nKTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgRGVmYXVsdEZvcm1hdHRlciBpbXBsZW1lbnRzIE5vdWlGb3JtYXR0ZXIge1xuICB0byh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAvLyBmb3JtYXR0aW5nIHdpdGggaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY0NjMzNjQvNDc4NTg0XG4gICAgcmV0dXJuIFN0cmluZyhwYXJzZUZsb2F0KHBhcnNlRmxvYXQoU3RyaW5nKHZhbHVlKSkudG9GaXhlZCgyKSkpO1xuICB9O1xuXG4gIGZyb20odmFsdWU6IHN0cmluZyk6IG51bWJlciB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xuICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIE5vdWlzbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIHB1YmxpYyBzbGlkZXI6IGFueTtcbiAgcHVibGljIGhhbmRsZXM6IGFueVtdO1xuICAgcHVibGljIGRpc2FibGVkOiBib29sZWFuOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICBwdWJsaWMgYmVoYXZpb3VyOiBzdHJpbmc7XG4gICBwdWJsaWMgY29ubmVjdDogYm9vbGVhbltdO1xuICAgcHVibGljIGxpbWl0OiBudW1iZXI7XG4gICBwdWJsaWMgbWluOiBudW1iZXI7XG4gICBwdWJsaWMgbWF4OiBudW1iZXI7XG4gICBwdWJsaWMgc25hcDogYm9vbGVhbjtcbiAgIHB1YmxpYyBhbmltYXRlOiBib29sZWFuIHwgYm9vbGVhbltdO1xuICAgcHVibGljIHJhbmdlOiBhbnk7XG4gICBwdWJsaWMgc3RlcDogbnVtYmVyO1xuICAgcHVibGljIGZvcm1hdDogTm91aUZvcm1hdHRlcjtcbiAgIHB1YmxpYyBwYWdlU3RlcHM6IG51bWJlcjtcbiAgIHB1YmxpYyBjb25maWc6IGFueSA9IHt9O1xuICAgcHVibGljIG5nTW9kZWw6IG51bWJlciB8IG51bWJlcltdO1xuICAgcHVibGljIGtleWJvYXJkOiBib29sZWFuO1xuICAgcHVibGljIG9uS2V5ZG93bjogYW55O1xuICAgcHVibGljIGZvcm1Db250cm9sOiBGb3JtQ29udHJvbDtcbiAgIHB1YmxpYyB0b29sdGlwczogQXJyYXk8YW55PjtcbiAgIHB1YmxpYyBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcbiAgIHB1YmxpYyB1cGRhdGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcbiAgIHB1YmxpYyBzbGlkZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICAgcHVibGljIHNldDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICAgcHVibGljIHN0YXJ0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7XG4gICBwdWJsaWMgZW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7XG4gIHByaXZhdGUgdmFsdWU6IGFueTtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogYW55ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBwcml2YXRlIG9uVG91Y2hlZDogYW55ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXIgOiBSZW5kZXJlcjIpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGxldCBpbnB1dHNDb25maWcgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGJlaGF2aW91cjogdGhpcy5iZWhhdmlvdXIsXG4gICAgICBjb25uZWN0OiB0aGlzLmNvbm5lY3QsXG4gICAgICBsaW1pdDogdGhpcy5saW1pdCxcbiAgICAgIHN0YXJ0OiB0aGlzLmZvcm1Db250cm9sICE9PSB1bmRlZmluZWQgPyB0aGlzLmZvcm1Db250cm9sLnZhbHVlIDogdGhpcy5uZ01vZGVsLFxuICAgICAgc3RlcDogdGhpcy5zdGVwLFxuICAgICAgcGFnZVN0ZXBzOiB0aGlzLnBhZ2VTdGVwcyxcbiAgICAgIGtleWJvYXJkOiB0aGlzLmtleWJvYXJkLFxuICAgICAgb25LZXlkb3duOiB0aGlzLm9uS2V5ZG93bixcbiAgICAgIHJhbmdlOiB0aGlzLnJhbmdlIHx8IHRoaXMuY29uZmlnLnJhbmdlIHx8IHttaW46IHRoaXMubWluLCBtYXg6IHRoaXMubWF4fSxcbiAgICAgIHRvb2x0aXBzOiB0aGlzLnRvb2x0aXBzLFxuICAgICAgc25hcDogdGhpcy5zbmFwLFxuICAgICAgYW5pbWF0ZTogdGhpcy5hbmltYXRlXG4gICAgfSkpO1xuICAgIGlucHV0c0NvbmZpZy50b29sdGlwcyA9IHRoaXMudG9vbHRpcHMgfHwgdGhpcy5jb25maWcudG9vbHRpcHM7XG4gICAgaW5wdXRzQ29uZmlnLmZvcm1hdCA9IHRoaXMuZm9ybWF0IHx8IHRoaXMuY29uZmlnLmZvcm1hdCB8fCBuZXcgRGVmYXVsdEZvcm1hdHRlcigpO1xuXG4gICAgdGhpcy5zbGlkZXIgPSBub1VpU2xpZGVyLmNyZWF0ZShcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdkaXYnKSxcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5jb25maWcsIGlucHV0c0NvbmZpZylcbiAgICApO1xuXG4gICAgdGhpcy5oYW5kbGVzID0gW10uc2xpY2UuY2FsbCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5vVWktaGFuZGxlJykpO1xuXG4gICAgaWYodGhpcy5jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgIGlmKHRoaXMuY29uZmlnLnBhZ2VTdGVwcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLnBhZ2VTdGVwcyA9IDEwO1xuICAgICAgfVxuICAgICAgZm9yKGxldCBoYW5kbGUgb2YgdGhpcy5oYW5kbGVzKSB7XG4gICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XG4gICAgICAgIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBoYW5kbGUuZm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmKHRoaXMuY29uZmlnLm9uS2V5ZG93biA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmRlZmF1bHRLZXlIYW5kbGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuY29uZmlnLm9uS2V5ZG93bik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNsaWRlci5vbignc2V0JywgKHZhbHVlczogc3RyaW5nW10sIGhhbmRsZTogbnVtYmVyLCB1bmVuY29kZWQ6IG51bWJlcltdKSA9PiB7XG4gICAgICB0aGlzLmV2ZW50SGFuZGxlcih0aGlzLnNldCwgdmFsdWVzLCBoYW5kbGUsIHVuZW5jb2RlZCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNsaWRlci5vbigndXBkYXRlJywgKHZhbHVlczogc3RyaW5nW10sIGhhbmRsZTogbnVtYmVyLCB1bmVuY29kZWQ6IG51bWJlcltdKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZS5lbWl0KHRoaXMudG9WYWx1ZXModmFsdWVzKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNsaWRlci5vbignY2hhbmdlJywgKHZhbHVlczogc3RyaW5nW10sIGhhbmRsZTogbnVtYmVyLCB1bmVuY29kZWQ6IG51bWJlcltdKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMudG9WYWx1ZXModmFsdWVzKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNsaWRlci5vbignc2xpZGUnLCAodmFsdWVzOiBzdHJpbmdbXSwgaGFuZGxlOiBudW1iZXIsIHVuZW5jb2RlZDogbnVtYmVyW10pID0+IHtcbiAgICAgIHRoaXMuZXZlbnRIYW5kbGVyKHRoaXMuc2xpZGUsIHZhbHVlcywgaGFuZGxlLCB1bmVuY29kZWQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zbGlkZXIub24oJ3N0YXJ0JywgKHZhbHVlczogc3RyaW5nW10sIGhhbmRsZTogbnVtYmVyLCB1bmVuY29kZWQ6IG51bWJlcltdKSA9PiB7XG4gICAgICB0aGlzLnN0YXJ0LmVtaXQodGhpcy50b1ZhbHVlcyh2YWx1ZXMpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2xpZGVyLm9uKCdlbmQnLCAodmFsdWVzOiBzdHJpbmdbXSwgaGFuZGxlOiBudW1iZXIsIHVuZW5jb2RlZDogbnVtYmVyW10pID0+IHtcbiAgICAgIHRoaXMuZW5kLmVtaXQodGhpcy50b1ZhbHVlcyh2YWx1ZXMpKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSkge1xuICAgIGlmICh0aGlzLnNsaWRlciAmJiAoY2hhbmdlcy5taW4gfHwgY2hhbmdlcy5tYXggfHwgY2hhbmdlcy5zdGVwIHx8IGNoYW5nZXMucmFuZ2UpKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zbGlkZXIudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgICAgcmFuZ2U6IE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgICAgIG1pbjogdGhpcy5taW4sXG4gICAgICAgICAgICBtYXg6IHRoaXMubWF4XG4gICAgICAgICAgfSwgdGhpcy5yYW5nZSB8fCB7fSksXG4gICAgICAgICAgc3RlcDogdGhpcy5zdGVwXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdG9WYWx1ZXModmFsdWVzOiBzdHJpbmdbXSk6IGFueSB8IGFueVtdIHtcbiAgICBsZXQgdiA9IHZhbHVlcy5tYXAodGhpcy5jb25maWcuZm9ybWF0LmZyb20pO1xuICAgIHJldHVybiAodi5sZW5ndGggPT0gMSA/IHZbMF0gOiB2KTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNsaWRlcikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2xpZGVyLnNldCh2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCkge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpc0Rpc2FibGVkXG4gICAgICA/IHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzWzBdLCAnZGlzYWJsZWQnLCAndHJ1ZScpXG4gICAgICA6IHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzWzBdLCAnZGlzYWJsZWQnKTtcbiAgfVxuXG4gIHByaXZhdGUgZXZlbnRIYW5kbGVyID0gKGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+LCB2YWx1ZXM6IHN0cmluZ1tdLCBoYW5kbGU6IG51bWJlciwgdW5lbmNvZGVkOiBudW1iZXJbXSkgPT4ge1xuICAgIGxldCB2ID0gdGhpcy50b1ZhbHVlcyh2YWx1ZXMpO1xuICAgIGxldCBlbWl0RXZlbnRzID0gZmFsc2U7XG4gICAgaWYodGhpcy52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYoQXJyYXkuaXNBcnJheSh2KSAmJiB0aGlzLnZhbHVlW2hhbmRsZV0gIT0gdltoYW5kbGVdKSB7XG4gICAgICBlbWl0RXZlbnRzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYoIUFycmF5LmlzQXJyYXkodikgJiYgdGhpcy52YWx1ZSAhPSB2KSB7XG4gICAgICBlbWl0RXZlbnRzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYoZW1pdEV2ZW50cykge1xuICAgICAgZW1pdHRlci5lbWl0KHYpO1xuICAgICAgdGhpcy5vbkNoYW5nZSh2KTtcbiAgICB9XG4gICAgaWYoQXJyYXkuaXNBcnJheSh2KSkge1xuICAgICAgdGhpcy52YWx1ZVtoYW5kbGVdID0gdltoYW5kbGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdjtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRlZmF1bHRLZXlIYW5kbGVyID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBsZXQgc3RlcFNpemU6IGFueVtdID0gdGhpcy5zbGlkZXIuc3RlcHMoKTtcbiAgICBsZXQgaW5kZXggPSBwYXJzZUludCgoPEhUTUxFbGVtZW50PmUudGFyZ2V0KS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGFuZGxlJykpO1xuICAgIGxldCBzaWduID0gMTtcbiAgICBsZXQgbXVsdGlwbGllcjogbnVtYmVyID0gMTtcbiAgICBsZXQgc3RlcCA9IDA7XG4gICAgbGV0IGRlbHRhID0gMDtcblxuICAgIHN3aXRjaCAoIGUud2hpY2ggKSB7XG4gICAgICBjYXNlIDM0OiAgLy8gUGFnZURvd25cbiAgICAgICAgbXVsdGlwbGllciA9IHRoaXMuY29uZmlnLnBhZ2VTdGVwcztcbiAgICAgIGNhc2UgNDA6ICAvLyBBcnJvd0Rvd25cbiAgICAgIGNhc2UgMzc6ICAvLyBBcnJvd0xlZnRcbiAgICAgICAgc2lnbiA9IC0xO1xuICAgICAgICBzdGVwID0gc3RlcFNpemVbaW5kZXhdWzBdO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDMzOiAgLy8gUGFnZVVwXG4gICAgICAgIG11bHRpcGxpZXIgPSB0aGlzLmNvbmZpZy5wYWdlU3RlcHM7XG4gICAgICBjYXNlIDM4OiAgLy8gQXJyb3dVcFxuICAgICAgY2FzZSAzOTogIC8vIEFycm93UmlnaHRcbiAgICAgICAgc3RlcCA9IHN0ZXBTaXplW2luZGV4XVsxXTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVsdGEgPSBzaWduICogbXVsdGlwbGllciAqIHN0ZXA7XG4gICAgbGV0IG5ld1ZhbHVlOiBudW1iZXIgfCBudW1iZXJbXTtcblxuICAgIGlmKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgIG5ld1ZhbHVlID0gW10uY29uY2F0KHRoaXMudmFsdWUpO1xuICAgICAgbmV3VmFsdWVbaW5kZXhdID0gbmV3VmFsdWVbaW5kZXhdICsgZGVsdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1ZhbHVlID0gdGhpcy52YWx1ZSArIGRlbHRhO1xuICAgIH1cblxuICAgIHRoaXMuc2xpZGVyLnNldChuZXdWYWx1ZSk7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IENvbXBvbmVudCwgYXJnczogW3tcbiAgc2VsZWN0b3I6ICdub3Vpc2xpZGVyJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MubmcyLW5vdWlzbGlkZXJdJzogJ3RydWUnXG4gIH0sXG4gIHRlbXBsYXRlOiAnPGRpdiBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZCA/IHRydWUgOiB1bmRlZmluZWRcIj48L2Rpdj4nLFxuICBzdHlsZXM6IFtgXG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG4gIGBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdWlzbGlkZXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0sIF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogRWxlbWVudFJlZiwgfSxcbnt0eXBlOiBSZW5kZXJlcjIsIH0sXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbidkaXNhYmxlZCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidiZWhhdmlvdXInOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nY29ubmVjdCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidsaW1pdCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidtaW4nOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nbWF4JzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ3NuYXAnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nYW5pbWF0ZSc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidyYW5nZSc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidzdGVwJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2Zvcm1hdCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidwYWdlU3RlcHMnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nY29uZmlnJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ25nTW9kZWwnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4na2V5Ym9hcmQnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nb25LZXlkb3duJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2Zvcm1Db250cm9sJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ3Rvb2x0aXBzJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2NoYW5nZSc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4ndXBkYXRlJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbidzbGlkZSc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nc2V0JzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbidzdGFydCc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nZW5kJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbn07XG59XG5cblxuXG5leHBvcnQgY2xhc3MgTm91aXNsaWRlck1vZHVsZSB7IHN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IE5nTW9kdWxlLCBhcmdzOiBbe1xuICBpbXBvcnRzOiBbXSxcbiAgZXhwb3J0czogW05vdWlzbGlkZXJDb21wb25lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtOb3Vpc2xpZGVyQ29tcG9uZW50XSxcbn0sIF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG5dO1xufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/ngx-chips/fesm5/ngx-chips.js":
/*!***************************************************!*\
  !*** ./node_modules/ngx-chips/fesm5/ngx-chips.js ***!
  \***************************************************/
/*! exports provided: DeleteIconComponent, TagComponent, TagInputComponent, TagInputDropdown, TagInputForm, TagInputModule, TagRipple, ɵa, ɵb, ɵc, ɵd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteIconComponent", function() { return DeleteIconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return TagComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputComponent", function() { return TagInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputDropdown", function() { return TagInputDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputForm", function() { return TagInputForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputModule", function() { return TagInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagRipple", function() { return TagRipple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return TagInputAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return animations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return DragProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return HighlightPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-material-dropdown */ "./node_modules/ng2-material-dropdown/fesm5/ng2-material-dropdown.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");








var escape = function (s) { return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); };
var HighlightPipe = /** @class */ (function () {
    function HighlightPipe() {
    }
    /**
     * @name transform
     * @param value {string}
     * @param arg {string}
     */
    HighlightPipe.prototype.transform = function (value, arg) {
        if (!arg.trim()) {
            return value;
        }
        try {
            var regex = new RegExp("(" + escape(arg) + ")", 'i');
            return value.replace(regex, '<b>$1</b>');
        }
        catch (e) {
            return value;
        }
    };
    HighlightPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'highlight'
        })
    ], HighlightPipe);
    return HighlightPipe;
}());

/*
** constants and default values for <tag-input>
 */
var PLACEHOLDER = '+ Tag';
var SECONDARY_PLACEHOLDER = 'Enter a new tag';
var KEYDOWN = 'keydown';
var KEYUP = 'keyup';
var MAX_ITEMS_WARNING = 'The number of items specified was greater than the property max-items.';
var ACTIONS_KEYS = {
    DELETE: 'DELETE',
    SWITCH_PREV: 'SWITCH_PREV',
    SWITCH_NEXT: 'SWITCH_NEXT',
    TAB: 'TAB'
};
var KEY_PRESS_ACTIONS = {
    8: ACTIONS_KEYS.DELETE,
    37: ACTIONS_KEYS.SWITCH_PREV,
    39: ACTIONS_KEYS.SWITCH_NEXT,
    9: ACTIONS_KEYS.TAB
};
var DRAG_AND_DROP_KEY = 'Text';
var NEXT = 'NEXT';
var PREV = 'PREV';

var DragProvider = /** @class */ (function () {
    function DragProvider() {
        this.state = {
            dragging: false,
            dropping: false,
            index: undefined
        };
    }
    /**
     * @name setDraggedItem
     * @param event
     * @param tag
     */
    DragProvider.prototype.setDraggedItem = function (event, tag) {
        if (event && event.dataTransfer) {
            event.dataTransfer.setData(DRAG_AND_DROP_KEY, JSON.stringify(tag));
        }
    };
    /**
     * @name getDraggedItem
     * @param event
     */
    DragProvider.prototype.getDraggedItem = function (event) {
        if (event && event.dataTransfer) {
            var data = event.dataTransfer.getData(DRAG_AND_DROP_KEY);
            try {
                return JSON.parse(data);
            }
            catch (_a) {
                return;
            }
        }
    };
    /**
     * @name setSender
     * @param sender
     */
    DragProvider.prototype.setSender = function (sender) {
        this.sender = sender;
    };
    /**
     * @name setReceiver
     * @param receiver
     */
    DragProvider.prototype.setReceiver = function (receiver) {
        this.receiver = receiver;
    };
    /**
     * @name onTagDropped
     * @param tag
     * @param indexDragged
     * @param indexDropped
     */
    DragProvider.prototype.onTagDropped = function (tag, indexDragged, indexDropped) {
        this.onDragEnd();
        this.sender.onRemoveRequested(tag, indexDragged);
        this.receiver.onAddingRequested(false, tag, indexDropped);
    };
    /**
     * @name setState
     * @param state
     */
    DragProvider.prototype.setState = function (state) {
        this.state = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.state, state);
    };
    /**
     * @name getState
     * @param key
     */
    DragProvider.prototype.getState = function (key) {
        return key ? this.state[key] : this.state;
    };
    /**
     * @name onDragEnd
     */
    DragProvider.prototype.onDragEnd = function () {
        this.setState({
            dragging: false,
            dropping: false,
            index: undefined
        });
    };
    DragProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], DragProvider);
    return DragProvider;
}());

var defaults = {
    tagInput: {
        separatorKeys: [],
        separatorKeyCodes: [],
        maxItems: Infinity,
        placeholder: PLACEHOLDER,
        secondaryPlaceholder: SECONDARY_PLACEHOLDER,
        validators: [],
        asyncValidators: [],
        onlyFromAutocomplete: false,
        errorMessages: {},
        theme: '',
        onTextChangeDebounce: 250,
        inputId: null,
        inputClass: '',
        clearOnBlur: false,
        hideForm: false,
        addOnBlur: false,
        addOnPaste: false,
        pasteSplitPattern: ',',
        blinkIfDupe: true,
        removable: true,
        editable: false,
        allowDupes: false,
        modelAsStrings: false,
        trimTags: true,
        ripple: true,
        tabIndex: '',
        disable: false,
        dragZone: '',
        onRemoving: undefined,
        onAdding: undefined,
        displayBy: 'display',
        identifyBy: 'value',
        animationDuration: {
            enter: '250ms',
            leave: '150ms'
        }
    },
    dropdown: {
        displayBy: 'display',
        identifyBy: 'value',
        appendToBody: true,
        offset: '50 0',
        focusFirstElement: false,
        showDropdownIfEmpty: false,
        minimumTextLength: 1,
        limitItemsTo: Infinity,
        keepOpen: true,
        dynamicUpdate: true,
        zIndex: 1000,
        matchingFn: matchingFn
    }
};
/**
 * @name matchingFn
 * @param this
 * @param value
 * @param target
 */
function matchingFn(value, target) {
    var targetValue = target[this.displayBy].toString();
    return targetValue && targetValue
        .toLowerCase()
        .indexOf(value.toLowerCase()) >= 0;
}

var OptionsProvider = /** @class */ (function () {
    function OptionsProvider() {
    }
    OptionsProvider.prototype.setOptions = function (options) {
        OptionsProvider.defaults.tagInput = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaults.tagInput, options.tagInput);
        OptionsProvider.defaults.dropdown = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaults.dropdown, options.dropdown);
    };
    OptionsProvider.defaults = defaults;
    return OptionsProvider;
}());

function isObject(obj) {
    return obj === Object(obj);
}
var TagInputAccessor = /** @class */ (function () {
    function TagInputAccessor() {
        this._items = [];
        /**
         * @name displayBy
         */
        this.displayBy = OptionsProvider.defaults.tagInput.displayBy;
        /**
         * @name identifyBy
         */
        this.identifyBy = OptionsProvider.defaults.tagInput.identifyBy;
    }
    Object.defineProperty(TagInputAccessor.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (items) {
            this._items = items;
            this._onChangeCallback(this._items);
        },
        enumerable: true,
        configurable: true
    });
    TagInputAccessor.prototype.onTouched = function () {
        this._onTouchedCallback();
    };
    TagInputAccessor.prototype.writeValue = function (items) {
        this._items = items || [];
    };
    TagInputAccessor.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    TagInputAccessor.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    /**
     * @name getItemValue
     * @param item
     * @param fromDropdown
     */
    TagInputAccessor.prototype.getItemValue = function (item, fromDropdown) {
        if (fromDropdown === void 0) { fromDropdown = false; }
        var property = fromDropdown && this.dropdown ? this.dropdown.identifyBy : this.identifyBy;
        return isObject(item) ? item[property] : item;
    };
    /**
     * @name getItemDisplay
     * @param item
     * @param fromDropdown
     */
    TagInputAccessor.prototype.getItemDisplay = function (item, fromDropdown) {
        if (fromDropdown === void 0) { fromDropdown = false; }
        var property = fromDropdown && this.dropdown ? this.dropdown.displayBy : this.displayBy;
        return isObject(item) ? item[property] : item;
    };
    /**
     * @name getItemsWithout
     * @param index
     */
    TagInputAccessor.prototype.getItemsWithout = function (index) {
        return this.items.filter(function (item, position) { return position !== index; });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], TagInputAccessor.prototype, "displayBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], TagInputAccessor.prototype, "identifyBy", void 0);
    return TagInputAccessor;
}());

/**
 * @name listen
 * @param listenerType
 * @param action
 * @param condition
 */
function listen(listenerType, action, condition) {
    if (condition === void 0) { condition = true; }
    // if the event provided does not exist, throw an error
    if (!this.listeners.hasOwnProperty(listenerType)) {
        throw new Error('The event entered may be wrong');
    }
    // if a condition is present and is false, exit early
    if (!condition) {
        return;
    }
    // fire listener
    this.listeners[listenerType].push(action);
}

var TagInputForm = /** @class */ (function () {
    function TagInputForm() {
        /**
         * @name onSubmit
         */
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onBlur
         */
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onFocus
         */
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onKeyup
         */
        this.onKeyup = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onKeydown
         */
        this.onKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name inputTextChange
         */
        this.inputTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name validators
         */
        this.validators = [];
        /**
         * @name asyncValidators
         * @desc array of AsyncValidator that are used to validate the tag before it gets appended to the list
         */
        this.asyncValidators = [];
        /**
         * @name tabindex
         * @desc pass through the specified tabindex to the input
         */
        this.tabindex = '';
        /**
         * @name disabled
         */
        this.disabled = false;
        this.item = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: this.disabled });
    }
    Object.defineProperty(TagInputForm.prototype, "inputText", {
        /**
         * @name inputText
         */
        get: function () {
            return this.item.value;
        },
        /**
         * @name inputText
         * @param text {string}
         */
        set: function (text) {
            this.item.setValue(text);
            this.inputTextChange.emit(text);
        },
        enumerable: true,
        configurable: true
    });
    TagInputForm.prototype.ngOnInit = function () {
        this.item.setValidators(this.validators);
        this.item.setAsyncValidators(this.asyncValidators);
        // creating form
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            item: this.item
        });
    };
    TagInputForm.prototype.ngOnChanges = function (changes) {
        if (changes.disabled && !changes.disabled.firstChange) {
            if (changes.disabled.currentValue) {
                this.form.controls['item'].disable();
            }
            else {
                this.form.controls['item'].enable();
            }
        }
    };
    Object.defineProperty(TagInputForm.prototype, "value", {
        /**
         * @name value
         */
        get: function () {
            return this.form.get('item');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name isInputFocused
     */
    TagInputForm.prototype.isInputFocused = function () {
        var doc = typeof document !== 'undefined' ? document : undefined;
        return doc ? doc.activeElement === this.input.nativeElement : false;
    };
    /**
     * @name getErrorMessages
     * @param messages
     */
    TagInputForm.prototype.getErrorMessages = function (messages) {
        var _this = this;
        return Object.keys(messages)
            .filter(function (err) { return _this.value.hasError(err); })
            .map(function (err) { return messages[err]; });
    };
    /**
     * @name hasErrors
     */
    TagInputForm.prototype.hasErrors = function () {
        var _a = this.form, dirty = _a.dirty, value = _a.value, valid = _a.valid;
        return dirty && value.item && !valid;
    };
    /**
     * @name focus
     */
    TagInputForm.prototype.focus = function () {
        this.input.nativeElement.focus();
    };
    /**
     * @name blur
     */
    TagInputForm.prototype.blur = function () {
        this.input.nativeElement.blur();
    };
    /**
     * @name getElementPosition
     */
    TagInputForm.prototype.getElementPosition = function () {
        return this.input.nativeElement.getBoundingClientRect();
    };
    /**
     * - removes input from the component
     * @name destroy
     */
    TagInputForm.prototype.destroy = function () {
        var input = this.input.nativeElement;
        input.parentElement.removeChild(input);
    };
    /**
     * @name onKeyDown
     * @param $event
     */
    TagInputForm.prototype.onKeyDown = function ($event) {
        this.inputText = this.value.value;
        if ($event.key === 'Enter') {
            this.submit($event);
        }
        else {
            return this.onKeydown.emit($event);
        }
    };
    /**
     * @name onKeyUp
     * @param $event
     */
    TagInputForm.prototype.onKeyUp = function ($event) {
        this.inputText = this.value.value;
        return this.onKeyup.emit($event);
    };
    /**
     * @name submit
     */
    TagInputForm.prototype.submit = function ($event) {
        $event.preventDefault();
        this.onSubmit.emit($event);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TagInputForm.prototype, "onSubmit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TagInputForm.prototype, "onBlur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TagInputForm.prototype, "onFocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TagInputForm.prototype, "onKeyup", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TagInputForm.prototype, "onKeydown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TagInputForm.prototype, "inputTextChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], TagInputForm.prototype, "placeholder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], TagInputForm.prototype, "validators", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], TagInputForm.prototype, "asyncValidators", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], TagInputForm.prototype, "inputId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], TagInputForm.prototype, "inputClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputForm.prototype, "tabindex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputForm.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', { static: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputForm.prototype, "input", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
    ], TagInputForm.prototype, "inputText", null);
    TagInputForm = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tag-input-form',
            template: "<!-- form -->\n<form (ngSubmit)=\"submit($event)\" [formGroup]=\"form\">\n    <input #input\n\n           type=\"text\"\n           class=\"ng2-tag-input__text-input\"\n           autocomplete=\"off\"\n           tabindex=\"{{ disabled ? -1 : tabindex ? tabindex : 0 }}\"\n           minlength=\"1\"\n           formControlName=\"item\"\n\n           [ngClass]=\"inputClass\"\n           [attr.id]=\"inputId\"\n           [attr.placeholder]=\"placeholder\"\n           [attr.aria-label]=\"placeholder\"\n           [attr.tabindex]=\"tabindex\"\n           [attr.disabled]=\"disabled ? disabled : null\"\n\n           (focus)=\"onFocus.emit($event)\"\n           (blur)=\"onBlur.emit($event)\"\n           (keydown)=\"onKeyDown($event)\"\n           (keyup)=\"onKeyUp($event)\"\n    />\n</form>\n",
            styles: [".dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:.25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f;border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}.ng2-tag-input__text-input{display:inline;vertical-align:middle;border:none;padding:0 .5rem;height:38px;font-size:1em;font-family:Roboto,\"Helvetica Neue\",sans-serif}.ng2-tag-input__text-input:focus{outline:0}.ng2-tag-input__text-input[disabled=true]{opacity:.5;background:#fff}"]
        })
    ], TagInputForm);
    return TagInputForm;
}());

var TagRipple = /** @class */ (function () {
    function TagRipple() {
        this.state = 'none';
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagRipple.prototype, "state", void 0);
    TagRipple = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tag-ripple',
            template: "\n        <div class=\"tag-ripple\" [@ink]=\"state\"></div>\n    ",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('ink', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('none', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ width: 0, opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('none => clicked', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, offset: 0, width: '30%', borderRadius: '100%' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, offset: 0.5, width: '50%' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0.5, offset: 1, width: '100%', borderRadius: '16px' })
                        ]))
                    ])
                ])
            ],
            styles: ["\n        :host {\n            width: 100%;\n            height: 100%;\n            left: 0;\n            overflow: hidden;\n            position: absolute;\n        }\n\n        .tag-ripple {\n            background: rgba(0, 0, 0, 0.1);\n            top: 50%;\n            left: 50%;\n            height: 100%;\n            transform: translate(-50%, -50%);\n            position: absolute;\n        }\n    "]
        })
    ], TagRipple);
    return TagRipple;
}());

// mocking navigator
var navigator = typeof window !== 'undefined' ? window.navigator : {
    userAgent: 'Chrome',
    vendor: 'Google Inc'
};
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var TagComponent = /** @class */ (function () {
    function TagComponent(element, renderer, cdRef) {
        this.element = element;
        this.renderer = renderer;
        this.cdRef = cdRef;
        /**
         * @name disabled
         */
        this.disabled = false;
        /**
         * @name onSelect
         */
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onRemove
         */
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onBlur
         */
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onKeyDown
         */
        this.onKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onTagEdited
         */
        this.onTagEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name editing
         */
        this.editing = false;
        /**
         * @name rippleState
         */
        this.rippleState = 'none';
    }
    Object.defineProperty(TagComponent.prototype, "readonly", {
        /**
         * @name readonly {boolean}
         */
        get: function () {
            return typeof this.model !== 'string' && this.model.readonly === true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name select
     */
    TagComponent.prototype.select = function ($event) {
        if (this.readonly || this.disabled) {
            return;
        }
        if ($event) {
            $event.stopPropagation();
        }
        this.focus();
        this.onSelect.emit(this.model);
    };
    /**
     * @name remove
     */
    TagComponent.prototype.remove = function ($event) {
        $event.stopPropagation();
        this.onRemove.emit(this);
    };
    /**
     * @name focus
     */
    TagComponent.prototype.focus = function () {
        this.element.nativeElement.focus();
    };
    TagComponent.prototype.move = function () {
        this.moving = true;
    };
    /**
     * @name keydown
     * @param event
     */
    TagComponent.prototype.keydown = function (event) {
        if (this.editing) {
            if (event.keyCode === 13) {
                return this.disableEditMode(event);
            }
        }
        else {
            this.onKeyDown.emit({ event: event, model: this.model });
        }
    };
    /**
     * @name blink
     */
    TagComponent.prototype.blink = function () {
        var classList = this.element.nativeElement.classList;
        classList.add('blink');
        setTimeout(function () { return classList.remove('blink'); }, 50);
    };
    /**
     * @name toggleEditMode
     */
    TagComponent.prototype.toggleEditMode = function () {
        if (this.editable) {
            return this.editing ? undefined : this.activateEditMode();
        }
    };
    /**
     * @name onBlurred
     * @param event
     */
    TagComponent.prototype.onBlurred = function (event) {
        var _a;
        // Checks if it is editable first before handeling the onBlurred event in order to prevent
        // a bug in IE where tags are still editable with onlyFromAutocomplete set to true
        if (!this.editable) {
            return;
        }
        this.disableEditMode();
        var value = event.target.innerText;
        var result = typeof this.model === 'string'
            ? value
            : Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.model, (_a = {}, _a[this.displayBy] = value, _a));
        this.onBlur.emit(result);
    };
    /**
     * @name getDisplayValue
     * @param item
     */
    TagComponent.prototype.getDisplayValue = function (item) {
        return typeof item === 'string' ? item : item[this.displayBy];
    };
    Object.defineProperty(TagComponent.prototype, "isRippleVisible", {
        /**
         * @desc returns whether the ripple is visible or not
         * only works in Chrome
         * @name isRippleVisible
         */
        get: function () {
            return !this.readonly && !this.editing && isChrome && this.hasRipple;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name disableEditMode
     * @param $event
     */
    TagComponent.prototype.disableEditMode = function ($event) {
        var classList = this.element.nativeElement.classList;
        var input = this.getContentEditableText();
        this.editing = false;
        classList.remove('tag--editing');
        if (!input) {
            this.setContentEditableText(this.model);
            return;
        }
        this.storeNewValue(input);
        this.cdRef.detectChanges();
        if ($event) {
            $event.preventDefault();
        }
    };
    /**
     * @name isDeleteIconVisible
     */
    TagComponent.prototype.isDeleteIconVisible = function () {
        return (!this.readonly && !this.disabled && this.removable && !this.editing);
    };
    /**
     * @name getContentEditableText
     */
    TagComponent.prototype.getContentEditableText = function () {
        var input = this.getContentEditable();
        return input ? input.innerText.trim() : '';
    };
    /**
     * @name setContentEditableText
     * @param model
     */
    TagComponent.prototype.setContentEditableText = function (model) {
        var input = this.getContentEditable();
        var value = this.getDisplayValue(model);
        input.innerText = value;
    };
    /**
     * @name
     */
    TagComponent.prototype.activateEditMode = function () {
        var classList = this.element.nativeElement.classList;
        classList.add('tag--editing');
        this.editing = true;
    };
    /**
     * @name storeNewValue
     * @param input
     */
    TagComponent.prototype.storeNewValue = function (input) {
        var _a;
        var _this = this;
        var exists = function (tag) {
            return typeof tag === 'string'
                ? tag === input
                : tag[_this.displayBy] === input;
        };
        var hasId = function () {
            return _this.model[_this.identifyBy] !== _this.model[_this.displayBy];
        };
        // if the value changed, replace the value in the model
        if (exists(this.model)) {
            return;
        }
        var model = typeof this.model === 'string'
            ? input
            : (_a = {
                    index: this.index
                },
                _a[this.identifyBy] = hasId()
                    ? this.model[this.identifyBy]
                    : input,
                _a[this.displayBy] = input,
                _a);
        if (this.canAddTag(model)) {
            this.onTagEdited.emit({ tag: model, index: this.index });
        }
        else {
            this.setContentEditableText(this.model);
        }
    };
    /**
     * @name getContentEditable
     */
    TagComponent.prototype.getContentEditable = function () {
        return this.element.nativeElement.querySelector('[contenteditable]');
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagComponent.prototype, "model", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], TagComponent.prototype, "removable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], TagComponent.prototype, "editable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], TagComponent.prototype, "template", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], TagComponent.prototype, "displayBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], TagComponent.prototype, "identifyBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], TagComponent.prototype, "index", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], TagComponent.prototype, "hasRipple", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagComponent.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
    ], TagComponent.prototype, "canAddTag", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TagComponent.prototype, "onSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TagComponent.prototype, "onRemove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TagComponent.prototype, "onBlur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TagComponent.prototype, "onKeyDown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TagComponent.prototype, "onTagEdited", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.moving'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], TagComponent.prototype, "moving", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(TagRipple, { static: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", TagRipple)
    ], TagComponent.prototype, "ripple", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], TagComponent.prototype, "keydown", null);
    TagComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tag',
            template: "<div (click)=\"select($event)\"\n     (dblclick)=\"toggleEditMode()\"\n     (mousedown)=\"rippleState='clicked'\"\n     (mouseup)=\"rippleState='none'\"\n     [ngSwitch]=\"!!template\"\n     [class.disabled]=\"disabled\"\n     [attr.tabindex]=\"-1\"\n     [attr.aria-label]=\"getDisplayValue(model)\">\n\n    <div *ngSwitchCase=\"true\" [attr.contenteditable]=\"editing\">\n        <!-- CUSTOM TEMPLATE -->\n        <ng-template\n            [ngTemplateOutletContext]=\"{ item: model, index: index }\"\n            [ngTemplateOutlet]=\"template\">\n        </ng-template>\n    </div>\n\n    <div *ngSwitchCase=\"false\" class=\"tag-wrapper\">\n        <!-- TAG NAME -->\n        <div [attr.contenteditable]=\"editing\"\n             [attr.title]=\"getDisplayValue(model)\"\n             class=\"tag__text inline\"\n             spellcheck=\"false\"\n             (keydown.enter)=\"disableEditMode($event)\"\n             (keydown.escape)=\"disableEditMode($event)\"\n             (click)=\"editing ? $event.stopPropagation() : undefined\"\n             (blur)=\"onBlurred($event)\">\n            {{ getDisplayValue(model) }}\n        </div>\n\n        <!-- 'X' BUTTON -->\n        <delete-icon\n            aria-label=\"Remove tag\"\n            role=\"button\"\n            (click)=\"remove($event)\"\n            *ngIf=\"isDeleteIconVisible()\">\n        </delete-icon>\n    </div>\n</div>\n\n<tag-ripple [state]=\"rippleState\"\n            [attr.tabindex]=\"-1\"\n            *ngIf=\"isRippleVisible\">\n</tag-ripple>\n",
            styles: [":host,:host>div,:host>div:focus{outline:0;overflow:hidden;transition:opacity 1s;z-index:1}:host{max-width:400px}:host.blink{-webkit-animation:.3s ease-in-out forwards blink;animation:.3s ease-in-out forwards blink}@-webkit-keyframes blink{0%{opacity:.3}}@keyframes blink{0%{opacity:.3}}:host .disabled{cursor:not-allowed}:host [contenteditable=true]{outline:0}.tag-wrapper{flex-direction:row;display:flex}.tag__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], TagComponent);
    return TagComponent;
}());

/**
 * @name animations
 */
var animations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('animation', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
            opacity: 1
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
            opacity: 0
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('{{ enter }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0, offset: 0, transform: 'translate(0px, 20px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0.3, offset: 0.3, transform: 'translate(0px, -10px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0.5, offset: 0.5, transform: 'translate(0px, 0px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0.75, offset: 0.75, transform: 'translate(0px, 5px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, offset: 1, transform: 'translate(0px, 0px)' })
            ]))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('{{ leave }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
            ]))
        ])
    ])
];

var TagInputDropdown = /** @class */ (function () {
    function TagInputDropdown(injector) {
        var _this = this;
        this.injector = injector;
        /**
         * @name offset
         */
        this.offset = defaults.dropdown.offset;
        /**
         * @name focusFirstElement
         */
        this.focusFirstElement = defaults.dropdown.focusFirstElement;
        /**
         * - show autocomplete dropdown if the value of input is empty
         * @name showDropdownIfEmpty
         */
        this.showDropdownIfEmpty = defaults.dropdown.showDropdownIfEmpty;
        /**
         * - desc minimum text length in order to display the autocomplete dropdown
         * @name minimumTextLength
         */
        this.minimumTextLength = defaults.dropdown.minimumTextLength;
        /**
         * - number of items to display in the autocomplete dropdown
         * @name limitItemsTo
         */
        this.limitItemsTo = defaults.dropdown.limitItemsTo;
        /**
         * @name displayBy
         */
        this.displayBy = defaults.dropdown.displayBy;
        /**
         * @name identifyBy
         */
        this.identifyBy = defaults.dropdown.identifyBy;
        /**
         * @description a function a developer can use to implement custom matching for the autocomplete
         * @name matchingFn
         */
        this.matchingFn = defaults.dropdown.matchingFn;
        /**
         * @name appendToBody
         */
        this.appendToBody = defaults.dropdown.appendToBody;
        /**
         * @name keepOpen
         * @description option to leave dropdown open when adding a new item
         */
        this.keepOpen = defaults.dropdown.keepOpen;
        /**
         * @name dynamicUpdate
         */
        this.dynamicUpdate = defaults.dropdown.dynamicUpdate;
        /**
         * @name zIndex
         */
        this.zIndex = defaults.dropdown.zIndex;
        /**
         * list of items that match the current value of the input (for autocomplete)
         * @name items
         */
        this.items = [];
        /**
         * @name tagInput
         */
        this.tagInput = this.injector.get(TagInputComponent);
        /**
         * @name _autocompleteItems
         */
        this._autocompleteItems = [];
        /**
         *
         * @name show
         */
        this.show = function () {
            var maxItemsReached = _this.tagInput.items.length === _this.tagInput.maxItems;
            var value = _this.getFormValue();
            var hasMinimumText = value.trim().length >= _this.minimumTextLength;
            var position = _this.calculatePosition();
            var items = _this.getMatchingItems(value);
            var hasItems = items.length > 0;
            var isHidden = _this.isVisible === false;
            var showDropdownIfEmpty = _this.showDropdownIfEmpty && hasItems && !value;
            var isDisabled = _this.tagInput.disable;
            var shouldShow = isHidden && ((hasItems && hasMinimumText) || showDropdownIfEmpty);
            var shouldHide = _this.isVisible && !hasItems;
            if (_this.autocompleteObservable && hasMinimumText) {
                return _this.getItemsFromObservable(value);
            }
            if ((!_this.showDropdownIfEmpty && !value) ||
                maxItemsReached ||
                isDisabled) {
                return _this.dropdown.hide();
            }
            _this.setItems(items);
            if (shouldShow) {
                _this.dropdown.show(position);
            }
            else if (shouldHide) {
                _this.hide();
            }
        };
        /**
         * @name requestAdding
         * @param item {Ng2MenuItem}
         */
        this.requestAdding = function (item) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var tag;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tag = this.createTagModel(item);
                        return [4 /*yield*/, this.tagInput.onAddingRequested(true, tag).catch(function () { })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * @name resetItems
         */
        this.resetItems = function () {
            _this.items = [];
        };
        /**
         * @name getItemsFromObservable
         * @param text
         */
        this.getItemsFromObservable = function (text) {
            _this.setLoadingState(true);
            var subscribeFn = function (data) {
                // hide loading animation
                _this.setLoadingState(false)
                    // add items
                    .populateItems(data);
                _this.setItems(_this.getMatchingItems(text));
                if (_this.items.length) {
                    _this.dropdown.show(_this.calculatePosition());
                }
                else {
                    _this.dropdown.hide();
                }
            };
            _this.autocompleteObservable(text)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                .subscribe(subscribeFn, function () { return _this.setLoadingState(false); });
        };
    }
    Object.defineProperty(TagInputDropdown.prototype, "autocompleteItems", {
        /**
         * @name autocompleteItems
         * @desc array of items that will populate the autocomplete
         */
        get: function () {
            var _this = this;
            var items = this._autocompleteItems;
            if (!items) {
                return [];
            }
            return items.map(function (item) {
                var _a;
                return typeof item === 'string'
                    ? (_a = {},
                        _a[_this.displayBy] = item,
                        _a[_this.identifyBy] = item,
                        _a) : item;
            });
        },
        /**
         * @name autocompleteItems
         * @param items
         */
        set: function (items) {
            this._autocompleteItems = items;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name ngAfterviewInit
     */
    TagInputDropdown.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.onItemClicked().subscribe(function (item) {
            _this.requestAdding(item);
        });
        // reset itemsMatching array when the dropdown is hidden
        this.onHide().subscribe(this.resetItems);
        var DEBOUNCE_TIME = 200;
        var KEEP_OPEN = this.keepOpen;
        this.tagInput.onTextChange
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(DEBOUNCE_TIME), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (value) {
            if (KEEP_OPEN === false) {
                return value.length > 0;
            }
            return true;
        }))
            .subscribe(this.show);
    };
    /**
     * @name updatePosition
     */
    TagInputDropdown.prototype.updatePosition = function () {
        var position = this.tagInput.inputForm.getElementPosition();
        this.dropdown.menu.updatePosition(position, this.dynamicUpdate);
    };
    Object.defineProperty(TagInputDropdown.prototype, "isVisible", {
        /**
         * @name isVisible
         */
        get: function () {
            return this.dropdown.menu.dropdownState.menuState.isVisible;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name onHide
     */
    TagInputDropdown.prototype.onHide = function () {
        return this.dropdown.onHide;
    };
    /**
     * @name onItemClicked
     */
    TagInputDropdown.prototype.onItemClicked = function () {
        return this.dropdown.onItemClicked;
    };
    Object.defineProperty(TagInputDropdown.prototype, "selectedItem", {
        /**
         * @name selectedItem
         */
        get: function () {
            return this.dropdown.menu.dropdownState.dropdownState.selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputDropdown.prototype, "state", {
        /**
         * @name state
         */
        get: function () {
            return this.dropdown.menu.dropdownState;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name hide
     */
    TagInputDropdown.prototype.hide = function () {
        this.resetItems();
        this.dropdown.hide();
    };
    /**
     * @name scrollListener
     */
    TagInputDropdown.prototype.scrollListener = function () {
        if (!this.isVisible || !this.dynamicUpdate) {
            return;
        }
        this.updatePosition();
    };
    /**
     * @name onWindowBlur
     */
    TagInputDropdown.prototype.onWindowBlur = function () {
        this.dropdown.hide();
    };
    /**
     * @name getFormValue
     */
    TagInputDropdown.prototype.getFormValue = function () {
        var formValue = this.tagInput.formValue;
        return formValue ? formValue.toString().trim() : '';
    };
    /**
     * @name calculatePosition
     */
    TagInputDropdown.prototype.calculatePosition = function () {
        return this.tagInput.inputForm.getElementPosition();
    };
    /**
     * @name createTagModel
     * @param item
     */
    TagInputDropdown.prototype.createTagModel = function (item) {
        var _a;
        var display = typeof item.value === 'string' ? item.value : item.value[this.displayBy];
        var value = typeof item.value === 'string' ? item.value : item.value[this.identifyBy];
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item.value, (_a = {}, _a[this.tagInput.displayBy] = display, _a[this.tagInput.identifyBy] = value, _a));
    };
    /**
     *
     * @param value {string}
     */
    TagInputDropdown.prototype.getMatchingItems = function (value) {
        var _this = this;
        if (!value && !this.showDropdownIfEmpty) {
            return [];
        }
        var dupesAllowed = this.tagInput.allowDupes;
        return this.autocompleteItems.filter(function (item) {
            var hasValue = dupesAllowed
                ? false
                : _this.tagInput.tags.some(function (tag) {
                    var identifyBy = _this.tagInput.identifyBy;
                    var model = typeof tag.model === 'string' ? tag.model : tag.model[identifyBy];
                    return model === item[_this.identifyBy];
                });
            return _this.matchingFn(value, item) && hasValue === false;
        });
    };
    /**
     * @name setItems
     */
    TagInputDropdown.prototype.setItems = function (items) {
        this.items = items.slice(0, this.limitItemsTo || items.length);
    };
    /**
     * @name populateItems
     * @param data
     */
    TagInputDropdown.prototype.populateItems = function (data) {
        var _this = this;
        this.autocompleteItems = data.map(function (item) {
            var _a;
            return typeof item === 'string'
                ? (_a = {},
                    _a[_this.displayBy] = item,
                    _a[_this.identifyBy] = item,
                    _a) : item;
        });
        return this;
    };
    /**
     * @name setLoadingState
     * @param state
     */
    TagInputDropdown.prototype.setLoadingState = function (state) {
        this.tagInput.isLoading = state;
        return this;
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2Dropdown"], { static: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2Dropdown"])
    ], TagInputDropdown.prototype, "dropdown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], TagInputDropdown.prototype, "templates", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], TagInputDropdown.prototype, "offset", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputDropdown.prototype, "focusFirstElement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputDropdown.prototype, "showDropdownIfEmpty", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
    ], TagInputDropdown.prototype, "autocompleteObservable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputDropdown.prototype, "minimumTextLength", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], TagInputDropdown.prototype, "limitItemsTo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputDropdown.prototype, "displayBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputDropdown.prototype, "identifyBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
    ], TagInputDropdown.prototype, "matchingFn", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputDropdown.prototype, "appendToBody", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputDropdown.prototype, "keepOpen", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputDropdown.prototype, "dynamicUpdate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputDropdown.prototype, "zIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])
    ], TagInputDropdown.prototype, "autocompleteItems", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], TagInputDropdown.prototype, "scrollListener", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:blur'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], TagInputDropdown.prototype, "onWindowBlur", null);
    TagInputDropdown = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tag-input-dropdown',
            template: "<ng2-dropdown [dynamicUpdate]=\"dynamicUpdate\">\n    <ng2-dropdown-menu [focusFirstElement]=\"focusFirstElement\"\n                       [zIndex]=\"zIndex\"\n                       [appendToBody]=\"appendToBody\"\n                       [offset]=\"offset\">\n        <ng2-menu-item *ngFor=\"let item of items; let index = index; let last = last\"\n                       [value]=\"item\"\n                       [ngSwitch]=\"!!templates.length\">\n\n            <span *ngSwitchCase=\"false\"\n                  [innerHTML]=\"item[displayBy] | highlight : tagInput.inputForm.value.value\">\n            </span>\n\n            <ng-template *ngSwitchDefault\n                      [ngTemplateOutlet]=\"templates.first\"\n                      [ngTemplateOutletContext]=\"{ item: item, index: index, last: last }\">\n            </ng-template>\n        </ng2-menu-item>\n    </ng2-dropdown-menu>\n</ng2-dropdown>\n"
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], TagInputDropdown);
    return TagInputDropdown;
}());

// angular universal hacks
/* tslint:disable-next-line */
var DragEvent = window.DragEvent;
var CUSTOM_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return TagInputComponent; }),
    multi: true
};
var TagInputComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TagInputComponent, _super);
    function TagInputComponent(renderer, dragProvider) {
        var _a;
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.dragProvider = dragProvider;
        /**
         * @name separatorKeys
         * @desc keyboard keys with which a user can separate items
         */
        _this.separatorKeys = defaults.tagInput.separatorKeys;
        /**
         * @name separatorKeyCodes
         * @desc keyboard key codes with which a user can separate items
         */
        _this.separatorKeyCodes = defaults.tagInput.separatorKeyCodes;
        /**
         * @name placeholder
         * @desc the placeholder of the input text
         */
        _this.placeholder = defaults.tagInput.placeholder;
        /**
         * @name secondaryPlaceholder
         * @desc placeholder to appear when the input is empty
         */
        _this.secondaryPlaceholder = defaults.tagInput.secondaryPlaceholder;
        /**
         * @name maxItems
         * @desc maximum number of items that can be added
         */
        _this.maxItems = defaults.tagInput.maxItems;
        /**
         * @name validators
         * @desc array of Validators that are used to validate the tag before it gets appended to the list
         */
        _this.validators = defaults.tagInput.validators;
        /**
         * @name asyncValidators
         * @desc array of AsyncValidator that are used to validate the tag before it gets appended to the list
         */
        _this.asyncValidators = defaults.tagInput.asyncValidators;
        /**
        * - if set to true, it will only possible to add items from the autocomplete
        * @name onlyFromAutocomplete
        */
        _this.onlyFromAutocomplete = defaults.tagInput.onlyFromAutocomplete;
        /**
         * @name errorMessages
         */
        _this.errorMessages = defaults.tagInput.errorMessages;
        /**
         * @name theme
         */
        _this.theme = defaults.tagInput.theme;
        /**
         * @name onTextChangeDebounce
         */
        _this.onTextChangeDebounce = defaults.tagInput.onTextChangeDebounce;
        /**
         * - custom id assigned to the input
         * @name id
         */
        _this.inputId = defaults.tagInput.inputId;
        /**
         * - custom class assigned to the input
         */
        _this.inputClass = defaults.tagInput.inputClass;
        /**
         * - option to clear text input when the form is blurred
         * @name clearOnBlur
         */
        _this.clearOnBlur = defaults.tagInput.clearOnBlur;
        /**
         * - hideForm
         * @name clearOnBlur
         */
        _this.hideForm = defaults.tagInput.hideForm;
        /**
         * @name addOnBlur
         */
        _this.addOnBlur = defaults.tagInput.addOnBlur;
        /**
         * @name addOnPaste
         */
        _this.addOnPaste = defaults.tagInput.addOnPaste;
        /**
         * - pattern used with the native method split() to separate patterns in the string pasted
         * @name pasteSplitPattern
         */
        _this.pasteSplitPattern = defaults.tagInput.pasteSplitPattern;
        /**
         * @name blinkIfDupe
         */
        _this.blinkIfDupe = defaults.tagInput.blinkIfDupe;
        /**
         * @name removable
         */
        _this.removable = defaults.tagInput.removable;
        /**
         * @name editable
         */
        _this.editable = defaults.tagInput.editable;
        /**
         * @name allowDupes
         */
        _this.allowDupes = defaults.tagInput.allowDupes;
        /**
         * @description if set to true, the newly added tags will be added as strings, and not objects
         * @name modelAsStrings
         */
        _this.modelAsStrings = defaults.tagInput.modelAsStrings;
        /**
         * @name trimTags
         */
        _this.trimTags = defaults.tagInput.trimTags;
        /**
         * @name ripple
         */
        _this.ripple = defaults.tagInput.ripple;
        /**
         * @name tabindex
         * @desc pass through the specified tabindex to the input
         */
        _this.tabindex = defaults.tagInput.tabIndex;
        /**
         * @name disable
         */
        _this.disable = defaults.tagInput.disable;
        /**
         * @name dragZone
         */
        _this.dragZone = defaults.tagInput.dragZone;
        /**
         * @name onRemoving
         */
        _this.onRemoving = defaults.tagInput.onRemoving;
        /**
         * @name onAdding
         */
        _this.onAdding = defaults.tagInput.onAdding;
        /**
         * @name animationDuration
         */
        _this.animationDuration = defaults.tagInput.animationDuration;
        /**
         * @name onAdd
         * @desc event emitted when adding a new item
         */
        _this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onRemove
         * @desc event emitted when removing an existing item
         */
        _this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onSelect
         * @desc event emitted when selecting an item
         */
        _this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onFocus
         * @desc event emitted when the input is focused
         */
        _this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onFocus
         * @desc event emitted when the input is blurred
         */
        _this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onTextChange
         * @desc event emitted when the input value changes
         */
        _this.onTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * - output triggered when text is pasted in the form
         * @name onPaste
         */
        _this.onPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * - output triggered when tag entered is not valid
         * @name onValidationError
         */
        _this.onValidationError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * - output triggered when tag is edited
         * @name onTagEdited
         */
        _this.onTagEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name isLoading
         */
        _this.isLoading = false;
        /**
         * @name listeners
         * @desc array of events that get fired using @fireEvents
         */
        _this.listeners = (_a = {},
            _a[KEYDOWN] = [],
            _a[KEYUP] = [],
            _a);
        /**
         * @description emitter for the 2-way data binding inputText value
         * @name inputTextChange
         */
        _this.inputTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @description private variable to bind get/set
         * @name inputTextValue
         */
        _this.inputTextValue = '';
        _this.errors = [];
        /**
         * @name appendTag
         * @param tag {TagModel}
         */
        _this.appendTag = function (tag, index) {
            if (index === void 0) { index = _this.items.length; }
            var items = _this.items;
            var model = _this.modelAsStrings ? tag[_this.identifyBy] : tag;
            _this.items = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(items.slice(0, index), [
                model
            ], items.slice(index, items.length));
        };
        /**
         * @name createTag
         * @param model
         */
        _this.createTag = function (model) {
            var _a;
            var trim = function (val, key) {
                return typeof val === 'string' ? val.trim() : val[key];
            };
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, typeof model !== 'string' ? model : {}, (_a = {}, _a[_this.displayBy] = _this.trimTags ? trim(model, _this.displayBy) : model, _a[_this.identifyBy] = _this.trimTags ? trim(model, _this.identifyBy) : model, _a));
        };
        /**
         *
         * @param tag
         * @param isFromAutocomplete
         */
        _this.isTagValid = function (tag, fromAutocomplete) {
            if (fromAutocomplete === void 0) { fromAutocomplete = false; }
            var selectedItem = _this.dropdown ? _this.dropdown.selectedItem : undefined;
            var value = _this.getItemDisplay(tag).trim();
            if (selectedItem && !fromAutocomplete || !value) {
                return false;
            }
            var dupe = _this.findDupe(tag, fromAutocomplete);
            // if so, give a visual cue and return false
            if (!_this.allowDupes && dupe && _this.blinkIfDupe) {
                var model = _this.tags.find(function (item) {
                    return _this.getItemValue(item.model) === _this.getItemValue(dupe);
                });
                if (model) {
                    model.blink();
                }
            }
            var isFromAutocomplete = fromAutocomplete && _this.onlyFromAutocomplete;
            var assertions = [
                // 1. there must be no dupe OR dupes are allowed
                !dupe || _this.allowDupes,
                // 2. check max items has not been reached
                !_this.maxItemsReached,
                // 3. check item comes from autocomplete or onlyFromAutocomplete is false
                ((isFromAutocomplete) || !_this.onlyFromAutocomplete)
            ];
            return assertions.filter(Boolean).length === assertions.length;
        };
        /**
         * @name onPasteCallback
         * @param data
         */
        _this.onPasteCallback = function (data) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var getText, text, requests, resetInput;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                getText = function () {
                    var isIE = Boolean(window.clipboardData);
                    var clipboardData = isIE ? (window.clipboardData) : data.clipboardData;
                    var type = isIE ? 'Text' : 'text/plain';
                    return clipboardData === null ? '' : clipboardData.getData(type) || '';
                };
                text = getText();
                requests = text
                    .split(this.pasteSplitPattern)
                    .map(function (item) {
                    var tag = _this.createTag(item);
                    _this.setInputValue(tag[_this.displayBy]);
                    return _this.onAddingRequested(false, tag);
                });
                resetInput = function () { return setTimeout(function () { return _this.setInputValue(''); }, 50); };
                Promise.all(requests).then(function () {
                    _this.onPaste.emit(text);
                    resetInput();
                })
                    .catch(resetInput);
                return [2 /*return*/];
            });
        }); };
        return _this;
    }
    Object.defineProperty(TagInputComponent.prototype, "inputText", {
        /**
         * @name inputText
         */
        get: function () {
            return this.inputTextValue;
        },
        /**
         * @name inputText
         * @param text
         */
        set: function (text) {
            this.inputTextValue = text;
            this.inputTextChange.emit(text);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputComponent.prototype, "tabindexAttr", {
        /**
         * @desc removes the tab index if it is set - it will be passed through to the input
         * @name tabindexAttr
         */
        get: function () {
            return this.tabindex !== '' ? '-1' : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name ngAfterViewInit
     */
    TagInputComponent.prototype.ngAfterViewInit = function () {
        // set up listeners
        var _this = this;
        this.setUpKeypressListeners();
        this.setupSeparatorKeysListener();
        this.setUpInputKeydownListeners();
        if (this.onTextChange.observers.length) {
            this.setUpTextChangeSubscriber();
        }
        // if clear on blur is set to true, subscribe to the event and clear the text's form
        if (this.clearOnBlur || this.addOnBlur) {
            this.setUpOnBlurSubscriber();
        }
        // if addOnPaste is set to true, register the handler and add items
        if (this.addOnPaste) {
            this.setUpOnPasteListener();
        }
        var statusChanges$ = this.inputForm.form.statusChanges;
        statusChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (status) { return status !== 'PENDING'; })).subscribe(function () {
            _this.errors = _this.inputForm.getErrorMessages(_this.errorMessages);
        });
        this.isProgressBarVisible$ = statusChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (status) {
            return status === 'PENDING' || _this.isLoading;
        }));
        // if hideForm is set to true, remove the input
        if (this.hideForm) {
            this.inputForm.destroy();
        }
    };
    /**
     * @name ngOnInit
     */
    TagInputComponent.prototype.ngOnInit = function () {
        // if the number of items specified in the model is > of the value of maxItems
        // degrade gracefully and let the max number of items to be the number of items in the model
        // though, warn the user.
        var hasReachedMaxItems = this.maxItems !== undefined &&
            this.items &&
            this.items.length > this.maxItems;
        if (hasReachedMaxItems) {
            this.maxItems = this.items.length;
            console.warn(MAX_ITEMS_WARNING);
        }
        // Setting editable to false to fix problem with tags in IE still being editable when
        // onlyFromAutocomplete is true
        this.editable = this.onlyFromAutocomplete ? false : this.editable;
        this.setAnimationMetadata();
    };
    /**
     * @name onRemoveRequested
     * @param tag
     * @param index
     */
    TagInputComponent.prototype.onRemoveRequested = function (tag, index) {
        var _this = this;
        return new Promise(function (resolve) {
            var subscribeFn = function (model) {
                _this.removeItem(model, index);
                resolve(tag);
            };
            _this.onRemoving ?
                _this.onRemoving(tag)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                    .subscribe(subscribeFn) : subscribeFn(tag);
        });
    };
    /**
     * @name onAddingRequested
     * @param fromAutocomplete {boolean}
     * @param tag {TagModel}
     * @param index? {number}
     * @param giveupFocus? {boolean}
     */
    TagInputComponent.prototype.onAddingRequested = function (fromAutocomplete, tag, index, giveupFocus) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var subscribeFn = function (model) {
                return _this
                    .addItem(fromAutocomplete, model, index, giveupFocus)
                    .then(resolve)
                    .catch(reject);
            };
            return _this.onAdding ?
                _this.onAdding(tag)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                    .subscribe(subscribeFn, reject) : subscribeFn(tag);
        });
    };
    /**
     * @name selectItem
     * @desc selects item passed as parameter as the selected tag
     * @param item
     * @param emit
     */
    TagInputComponent.prototype.selectItem = function (item, emit) {
        if (emit === void 0) { emit = true; }
        var isReadonly = item && typeof item !== 'string' && item.readonly;
        if (isReadonly || this.selectedTag === item) {
            return;
        }
        this.selectedTag = item;
        if (emit) {
            this.onSelect.emit(item);
        }
    };
    /**
     * @name fireEvents
     * @desc goes through the list of the events for a given eventName, and fires each of them
     * @param eventName
     * @param $event
     */
    TagInputComponent.prototype.fireEvents = function (eventName, $event) {
        var _this = this;
        this.listeners[eventName].forEach(function (listener) { return listener.call(_this, $event); });
    };
    /**
     * @name handleKeydown
     * @desc handles action when the user hits a keyboard key
     * @param data
     */
    TagInputComponent.prototype.handleKeydown = function (data) {
        var event = data.event;
        var key = event.keyCode || event.which;
        var shiftKey = event.shiftKey || false;
        switch (KEY_PRESS_ACTIONS[key]) {
            case ACTIONS_KEYS.DELETE:
                if (this.selectedTag && this.removable) {
                    var index = this.items.indexOf(this.selectedTag);
                    this.onRemoveRequested(this.selectedTag, index);
                }
                break;
            case ACTIONS_KEYS.SWITCH_PREV:
                this.moveToTag(data.model, PREV);
                break;
            case ACTIONS_KEYS.SWITCH_NEXT:
                this.moveToTag(data.model, NEXT);
                break;
            case ACTIONS_KEYS.TAB:
                if (shiftKey) {
                    if (this.isFirstTag(data.model)) {
                        return;
                    }
                    this.moveToTag(data.model, PREV);
                }
                else {
                    if (this.isLastTag(data.model) && (this.disable || this.maxItemsReached)) {
                        return;
                    }
                    this.moveToTag(data.model, NEXT);
                }
                break;
            default:
                return;
        }
        // prevent default behaviour
        event.preventDefault();
    };
    TagInputComponent.prototype.onFormSubmit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.onAddingRequested(false, this.formValue)];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @name setInputValue
     * @param value
     */
    TagInputComponent.prototype.setInputValue = function (value, emitEvent) {
        if (emitEvent === void 0) { emitEvent = true; }
        var control = this.getControl();
        // update form value with the transformed item
        control.setValue(value, { emitEvent: emitEvent });
    };
    /**
     * @name getControl
     */
    TagInputComponent.prototype.getControl = function () {
        return this.inputForm.value;
    };
    /**
     * @name focus
     * @param applyFocus
     * @param displayAutocomplete
     */
    TagInputComponent.prototype.focus = function (applyFocus, displayAutocomplete) {
        if (applyFocus === void 0) { applyFocus = false; }
        if (this.dragProvider.getState('dragging')) {
            return;
        }
        this.selectItem(undefined, false);
        if (applyFocus) {
            this.inputForm.focus();
            this.onFocus.emit(this.formValue);
        }
    };
    /**
     * @name blur
     */
    TagInputComponent.prototype.blur = function () {
        this.onTouched();
        this.onBlur.emit(this.formValue);
    };
    /**
     * @name hasErrors
     */
    TagInputComponent.prototype.hasErrors = function () {
        return !!this.inputForm && this.inputForm.hasErrors();
    };
    /**
     * @name isInputFocused
     */
    TagInputComponent.prototype.isInputFocused = function () {
        return !!this.inputForm && this.inputForm.isInputFocused();
    };
    /**
     * - this is the one way I found to tell if the template has been passed and it is not
     * the template for the menu item
     * @name hasCustomTemplate
     */
    TagInputComponent.prototype.hasCustomTemplate = function () {
        var template = this.templates ? this.templates.first : undefined;
        var menuTemplate = this.dropdown && this.dropdown.templates ?
            this.dropdown.templates.first : undefined;
        return Boolean(template && template !== menuTemplate);
    };
    Object.defineProperty(TagInputComponent.prototype, "maxItemsReached", {
        /**
         * @name maxItemsReached
         */
        get: function () {
            return this.maxItems !== undefined &&
                this.items.length >= this.maxItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputComponent.prototype, "formValue", {
        /**
         * @name formValue
         */
        get: function () {
            var form = this.inputForm.value;
            return form ? form.value : '';
        },
        enumerable: true,
        configurable: true
    });
    /**3
     * @name onDragStarted
     * @param event
     * @param index
     */
    TagInputComponent.prototype.onDragStarted = function (event, tag, index) {
        event.stopPropagation();
        var item = { zone: this.dragZone, tag: tag, index: index };
        this.dragProvider.setSender(this);
        this.dragProvider.setDraggedItem(event, item);
        this.dragProvider.setState({ dragging: true, index: index });
    };
    /**
     * @name onDragOver
     * @param event
     */
    TagInputComponent.prototype.onDragOver = function (event, index) {
        this.dragProvider.setState({ dropping: true });
        this.dragProvider.setReceiver(this);
        event.preventDefault();
    };
    /**
     * @name onTagDropped
     * @param event
     * @param index
     */
    TagInputComponent.prototype.onTagDropped = function (event, index) {
        var item = this.dragProvider.getDraggedItem(event);
        if (!item || item.zone !== this.dragZone) {
            return;
        }
        this.dragProvider.onTagDropped(item.tag, item.index, index);
        event.preventDefault();
        event.stopPropagation();
    };
    /**
     * @name isDropping
     */
    TagInputComponent.prototype.isDropping = function () {
        var isReceiver = this.dragProvider.receiver === this;
        var isDropping = this.dragProvider.getState('dropping');
        return Boolean(isReceiver && isDropping);
    };
    /**
     * @name onTagBlurred
     * @param changedElement {TagModel}
     * @param index {number}
     */
    TagInputComponent.prototype.onTagBlurred = function (changedElement, index) {
        this.items[index] = changedElement;
        this.blur();
    };
    /**
     * @name trackBy
     * @param items
     */
    TagInputComponent.prototype.trackBy = function (index, item) {
        return item[this.identifyBy];
    };
    /**
     * @name updateEditedTag
     * @param tag
     */
    TagInputComponent.prototype.updateEditedTag = function (_a) {
        var tag = _a.tag, index = _a.index;
        this.onTagEdited.emit(tag);
    };
    /**
     * @name moveToTag
     * @param item
     * @param direction
     */
    TagInputComponent.prototype.moveToTag = function (item, direction) {
        var isLast = this.isLastTag(item);
        var isFirst = this.isFirstTag(item);
        var stopSwitch = (direction === NEXT && isLast) ||
            (direction === PREV && isFirst);
        if (stopSwitch) {
            this.focus(true);
            return;
        }
        var offset = direction === NEXT ? 1 : -1;
        var index = this.getTagIndex(item) + offset;
        var tag = this.getTagAtIndex(index);
        return tag.select.call(tag);
    };
    /**
     * @name isFirstTag
     * @param item {TagModel}
     */
    TagInputComponent.prototype.isFirstTag = function (item) {
        return this.tags.first.model === item;
    };
    /**
     * @name isLastTag
     * @param item {TagModel}
     */
    TagInputComponent.prototype.isLastTag = function (item) {
        return this.tags.last.model === item;
    };
    /**
     * @name getTagIndex
     * @param item
     */
    TagInputComponent.prototype.getTagIndex = function (item) {
        var tags = this.tags.toArray();
        return tags.findIndex(function (tag) { return tag.model === item; });
    };
    /**
     * @name getTagAtIndex
     * @param index
     */
    TagInputComponent.prototype.getTagAtIndex = function (index) {
        var tags = this.tags.toArray();
        return tags[index];
    };
    /**
     * @name removeItem
     * @desc removes an item from the array of the model
     * @param tag {TagModel}
     * @param index {number}
     */
    TagInputComponent.prototype.removeItem = function (tag, index) {
        this.items = this.getItemsWithout(index);
        // if the removed tag was selected, set it as undefined
        if (this.selectedTag === tag) {
            this.selectItem(undefined, false);
        }
        // focus input
        this.focus(true, false);
        // emit remove event
        this.onRemove.emit(tag);
    };
    /**
     * @name addItem
     * @desc adds the current text model to the items array
     * @param fromAutocomplete {boolean}
     * @param item {TagModel}
     * @param index? {number}
     * @param giveupFocus? {boolean}
     */
    TagInputComponent.prototype.addItem = function (fromAutocomplete, item, index, giveupFocus) {
        var _this = this;
        if (fromAutocomplete === void 0) { fromAutocomplete = false; }
        var display = this.getItemDisplay(item);
        var tag = this.createTag(item);
        if (fromAutocomplete) {
            this.setInputValue(this.getItemValue(item, true));
        }
        return new Promise(function (resolve, reject) {
            /**
             * @name reset
             */
            var reset = function () {
                // reset control and focus input
                _this.setInputValue('');
                if (giveupFocus) {
                    _this.focus(false, false);
                }
                else {
                    // focus input
                    _this.focus(true, false);
                }
                resolve(display);
            };
            var appendItem = function () {
                _this.appendTag(tag, index);
                // emit event
                _this.onAdd.emit(tag);
                if (!_this.dropdown) {
                    return;
                }
                _this.dropdown.hide();
                if (_this.dropdown.showDropdownIfEmpty) {
                    _this.dropdown.show();
                }
            };
            var status = _this.inputForm.form.status;
            var isTagValid = _this.isTagValid(tag, fromAutocomplete);
            var onValidationError = function () {
                _this.onValidationError.emit(tag);
                return reject();
            };
            if (status === 'VALID' && isTagValid) {
                appendItem();
                return reset();
            }
            if (status === 'INVALID' || !isTagValid) {
                reset();
                return onValidationError();
            }
            if (status === 'PENDING') {
                var statusUpdate$ = _this.inputForm.form.statusChanges;
                return statusUpdate$
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (statusUpdate) { return statusUpdate !== 'PENDING'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                    .subscribe(function (statusUpdate) {
                    if (statusUpdate === 'VALID' && isTagValid) {
                        appendItem();
                        return reset();
                    }
                    else {
                        reset();
                        return onValidationError();
                    }
                });
            }
        });
    };
    /**
     * @name setupSeparatorKeysListener
     */
    TagInputComponent.prototype.setupSeparatorKeysListener = function () {
        var _this = this;
        var useSeparatorKeys = this.separatorKeyCodes.length > 0 || this.separatorKeys.length > 0;
        var listener = function ($event) {
            var hasKeyCode = _this.separatorKeyCodes.indexOf($event.keyCode) >= 0;
            var hasKey = _this.separatorKeys.indexOf($event.key) >= 0;
            // the keyCode of keydown event is 229 when IME is processing the key event.
            var isIMEProcessing = $event.keyCode === 229;
            if (hasKeyCode || (hasKey && !isIMEProcessing)) {
                $event.preventDefault();
                _this.onAddingRequested(false, _this.formValue)
                    .catch(function () { });
            }
        };
        listen.call(this, KEYDOWN, listener, useSeparatorKeys);
    };
    /**
     * @name setUpKeypressListeners
     */
    TagInputComponent.prototype.setUpKeypressListeners = function () {
        var _this = this;
        var listener = function ($event) {
            var isCorrectKey = $event.keyCode === 37 || $event.keyCode === 8;
            if (isCorrectKey &&
                !_this.formValue &&
                _this.items.length) {
                _this.tags.last.select.call(_this.tags.last);
            }
        };
        // setting up the keypress listeners
        listen.call(this, KEYDOWN, listener);
    };
    /**
     * @name setUpKeydownListeners
     */
    TagInputComponent.prototype.setUpInputKeydownListeners = function () {
        var _this = this;
        this.inputForm.onKeydown.subscribe(function (event) {
            if (event.key === 'Backspace' && _this.formValue.trim() === '') {
                event.preventDefault();
            }
        });
    };
    /**
     * @name setUpOnPasteListener
     */
    TagInputComponent.prototype.setUpOnPasteListener = function () {
        var _this = this;
        var input = this.inputForm.input.nativeElement;
        // attach listener to input
        this.renderer.listen(input, 'paste', function (event) {
            _this.onPasteCallback(event);
            event.preventDefault();
            return true;
        });
    };
    /**
     * @name setUpTextChangeSubscriber
     */
    TagInputComponent.prototype.setUpTextChangeSubscriber = function () {
        var _this = this;
        this.inputForm.form
            .valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(this.onTextChangeDebounce))
            .subscribe(function (value) {
            _this.onTextChange.emit(value.item);
        });
    };
    /**
     * @name setUpOnBlurSubscriber
     */
    TagInputComponent.prototype.setUpOnBlurSubscriber = function () {
        var _this = this;
        var filterFn = function () {
            var isVisible = _this.dropdown && _this.dropdown.isVisible;
            return !isVisible && !!_this.formValue;
        };
        this.inputForm
            .onBlur
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(filterFn))
            .subscribe(function () {
            var reset = function () { return _this.setInputValue(''); };
            if (_this.addOnBlur) {
                return _this
                    .onAddingRequested(false, _this.formValue, undefined, true)
                    .then(reset)
                    .catch(reset);
            }
            reset();
        });
    };
    /**
     * @name findDupe
     * @param tag
     * @param isFromAutocomplete
     */
    TagInputComponent.prototype.findDupe = function (tag, isFromAutocomplete) {
        var _this = this;
        var identifyBy = isFromAutocomplete ? this.dropdown.identifyBy : this.identifyBy;
        var id = tag[identifyBy];
        return this.items.find(function (item) { return _this.getItemValue(item) === id; });
    };
    /**
     * @name setAnimationMetadata
     */
    TagInputComponent.prototype.setAnimationMetadata = function () {
        this.animationMetadata = {
            value: 'in',
            params: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.animationDuration)
        };
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], TagInputComponent.prototype, "separatorKeys", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], TagInputComponent.prototype, "separatorKeyCodes", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], TagInputComponent.prototype, "placeholder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], TagInputComponent.prototype, "secondaryPlaceholder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], TagInputComponent.prototype, "maxItems", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], TagInputComponent.prototype, "validators", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], TagInputComponent.prototype, "asyncValidators", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputComponent.prototype, "onlyFromAutocomplete", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputComponent.prototype, "errorMessages", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], TagInputComponent.prototype, "theme", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputComponent.prototype, "onTextChangeDebounce", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputComponent.prototype, "inputId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], TagInputComponent.prototype, "inputClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], TagInputComponent.prototype, "clearOnBlur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], TagInputComponent.prototype, "hideForm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], TagInputComponent.prototype, "addOnBlur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], TagInputComponent.prototype, "addOnPaste", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputComponent.prototype, "pasteSplitPattern", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputComponent.prototype, "blinkIfDupe", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputComponent.prototype, "removable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], TagInputComponent.prototype, "editable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputComponent.prototype, "allowDupes", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputComponent.prototype, "modelAsStrings", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputComponent.prototype, "trimTags", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
    ], TagInputComponent.prototype, "inputText", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], TagInputComponent.prototype, "ripple", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], TagInputComponent.prototype, "tabindex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], TagInputComponent.prototype, "disable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], TagInputComponent.prototype, "dragZone", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputComponent.prototype, "onRemoving", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputComponent.prototype, "onAdding", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputComponent.prototype, "animationDuration", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputComponent.prototype, "onAdd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputComponent.prototype, "onRemove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputComponent.prototype, "onSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputComponent.prototype, "onFocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputComponent.prototype, "onBlur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputComponent.prototype, "onTextChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputComponent.prototype, "onPaste", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputComponent.prototype, "onValidationError", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TagInputComponent.prototype, "onTagEdited", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(TagInputDropdown, { static: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", TagInputDropdown)
    ], TagInputComponent.prototype, "dropdown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], { descendants: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], TagInputComponent.prototype, "templates", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(TagInputForm, { static: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", TagInputForm)
    ], TagInputComponent.prototype, "inputForm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(TagComponent),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], TagInputComponent.prototype, "tags", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TagInputComponent.prototype, "inputTextChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.tabindex'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TagInputComponent.prototype, "tabindexAttr", null);
    TagInputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tag-input',
            providers: [CUSTOM_ACCESSOR],
            template: "<div\n    [ngClass]=\"theme\"\n    class=\"ng2-tag-input\"\n    (click)=\"focus(true, false)\"\n    [attr.tabindex]=\"-1\"\n    (drop)=\"dragZone ? onTagDropped($event, undefined) : undefined\"\n    (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\n    (dragover)=\"dragZone ? onDragOver($event) : undefined\"\n    (dragend)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\n    [class.ng2-tag-input--dropping]=\"isDropping()\"\n    [class.ng2-tag-input--disabled]=\"disable\"\n    [class.ng2-tag-input--loading]=\"isLoading\"\n    [class.ng2-tag-input--invalid]=\"hasErrors()\"\n    [class.ng2-tag-input--focused]=\"isInputFocused()\"\n>\n\n    <!-- TAGS -->\n    <div class=\"ng2-tags-container\">\n        <tag\n            *ngFor=\"let item of items; let i = index; trackBy: trackBy\"\n            (onSelect)=\"selectItem(item)\"\n            (onRemove)=\"onRemoveRequested(item, i)\"\n            (onKeyDown)=\"handleKeydown($event)\"\n            (onTagEdited)=\"updateEditedTag($event)\"\n            (onBlur)=\"onTagBlurred($event, i)\"\n            draggable=\"{{ editable }}\"\n            (dragstart)=\"dragZone ? onDragStarted($event, item, i) : undefined\"\n            (drop)=\"dragZone ? onTagDropped($event, i) : undefined\"\n            (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\n            (dragover)=\"dragZone ? onDragOver($event, i) : undefined\"\n            (dragleave)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\n            [canAddTag]=\"isTagValid\"\n            [attr.tabindex]=\"0\"\n            [disabled]=\"disable\"\n            [@animation]=\"animationMetadata\"\n            [hasRipple]=\"ripple\"\n            [index]=\"i\"\n            [removable]=\"removable\"\n            [editable]=\"editable\"\n            [displayBy]=\"displayBy\"\n            [identifyBy]=\"identifyBy\"\n            [template]=\"!!hasCustomTemplate() ? templates.first : undefined\"\n            [draggable]=\"dragZone\"\n            [model]=\"item\"\n        >\n        </tag>\n\n        <tag-input-form\n            (onSubmit)=\"onFormSubmit()\"\n            (onBlur)=\"blur()\"\n            (click)=\"dropdown ? dropdown.show() : undefined\"\n            (onKeydown)=\"fireEvents('keydown', $event)\"\n            (onKeyup)=\"fireEvents('keyup', $event)\"\n            [(inputText)]=\"inputText\"\n            [disabled]=\"disable\"\n            [validators]=\"validators\"\n            [asyncValidators]=\"asyncValidators\"\n            [hidden]=\"maxItemsReached\"\n            [placeholder]=\"items.length ? placeholder : secondaryPlaceholder\"\n            [inputClass]=\"inputClass\"\n            [inputId]=\"inputId\"\n            [tabindex]=\"tabindex\"\n        >\n        </tag-input-form>\n    </div>\n\n    <div\n        class=\"progress-bar\"\n        *ngIf=\"isProgressBarVisible$ | async\"\n    ></div>\n</div>\n\n<!-- ERRORS -->\n<div\n    *ngIf=\"hasErrors()\"\n    [ngClass]=\"theme\"\n    class=\"error-messages\"\n>\n    <p\n        *ngFor=\"let error of errors\"\n        class=\"error-message\"\n    >\n        <span>{{ error }}</span>\n    </p>\n</div>\n<ng-content></ng-content>",
            animations: animations,
            styles: [".dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:.25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f;border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}.progress-bar,.progress-bar:before{height:2px;width:100%;margin:0}.progress-bar{background-color:#2196f3;display:flex;position:absolute;bottom:0}.progress-bar:before{background-color:#82c4f8;content:\"\";-webkit-animation:2s cubic-bezier(.4,0,.2,1) infinite running-progress;animation:2s cubic-bezier(.4,0,.2,1) infinite running-progress}@-webkit-keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}100%{margin-left:100%;margin-right:0}}@keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}100%{margin-left:100%;margin-right:0}}tag{display:flex;flex-direction:row;flex-wrap:wrap;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:400;font-size:1em;letter-spacing:.05rem;color:#444;border-radius:16px;transition:.3s;margin:.1rem .3rem .1rem 0;padding:.08rem .45rem;height:32px;line-height:34px;background:#efefef;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}tag:not(.readonly):not(.tag--editing):focus{background:#2196f3;color:#fff;box-shadow:0 2px 3px 1px #d4d1d1}tag:not(.readonly):not(.tag--editing):active{background:#0d8aee;color:#fff;box-shadow:0 2px 3px 1px #d4d1d1}tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#e2e2e2;color:initial;box-shadow:0 2px 3px 1px #d4d1d1}tag.readonly{cursor:default}tag.readonly:focus,tag:focus{outline:0}tag.tag--editing{background-color:#fff;border:1px solid #ccc;cursor:text}.minimal tag{display:flex;flex-direction:row;flex-wrap:wrap;border-radius:0;background:#f9f9f9;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.minimal tag:not(.readonly):not(.tag--editing):active,.minimal tag:not(.readonly):not(.tag--editing):focus{background:#d0d0d0;color:initial}.minimal tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#ececec}.minimal tag.readonly{cursor:default}.minimal tag.readonly:focus,.minimal tag:focus{outline:0}.minimal tag.tag--editing{cursor:text}.dark tag{display:flex;flex-direction:row;flex-wrap:wrap;color:#f9f9f9;border-radius:3px;background:#444;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.dark tag:not(.readonly):not(.tag--editing):focus{background:#efefef;color:#444}.dark tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#2b2b2b;color:#f9f9f9}.dark tag.readonly{cursor:default}.dark tag.readonly:focus,.dark tag:focus{outline:0}.dark tag.tag--editing{cursor:text}.bootstrap tag{display:flex;flex-direction:row;flex-wrap:wrap;color:#f9f9f9;border-radius:.25rem;background:#0275d8;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.bootstrap tag:not(.readonly):not(.tag--editing):active,.bootstrap tag:not(.readonly):not(.tag--editing):focus{background:#025aa5}.bootstrap tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#0267bf;color:#f9f9f9}.bootstrap tag.readonly{cursor:default}.bootstrap tag.readonly:focus,.bootstrap tag:focus{outline:0}.bootstrap tag.tag--editing{cursor:text}.bootstrap3-info tag{display:flex;flex-direction:row;flex-wrap:wrap;font-family:inherit;font-weight:400;font-size:95%;color:#fff;border-radius:.25em;background:#5bc0de;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative;padding:.25em .6em;text-align:center;white-space:nowrap}.bootstrap3-info tag:not(.readonly):not(.tag--editing):active,.bootstrap3-info tag:not(.readonly):not(.tag--editing):focus{background:#28a1c5}.bootstrap3-info tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#46b8da;color:#fff}.bootstrap3-info tag.readonly{cursor:default}.bootstrap3-info tag.readonly:focus,.bootstrap3-info tag:focus{outline:0}.bootstrap3-info tag.tag--editing{cursor:text}:host{display:block}"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            DragProvider])
    ], TagInputComponent);
    return TagInputComponent;
}(TagInputAccessor));

var DeleteIconComponent = /** @class */ (function () {
    function DeleteIconComponent() {
    }
    DeleteIconComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'delete-icon',
            template: "<span>\n    <svg\n        height=\"16px\"\n        viewBox=\"0 0 32 32\"\n        width=\"16px\"\n    >\n        <path\n            d=\"M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z\"\n            fill=\"#121313\"\n        />\n    </svg>\n</span>",
            styles: [".dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:.25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f;border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}:host(delete-icon){width:20px;height:16px;transition:.15s;display:inline-block;text-align:right}:host(delete-icon) path{fill:#444}:host(delete-icon) svg{vertical-align:bottom;height:34px}:host(delete-icon):hover{-webkit-transform:scale(1.5) translateY(-3px);transform:scale(1.5) translateY(-3px)}:host-context(.dark){text-align:right}:host-context(.dark) path{fill:#fff}:host-context(.dark) svg{vertical-align:bottom;height:34px}:host-context(.minimal){text-align:right}:host-context(.minimal) path{fill:#444}:host-context(.minimal) svg{vertical-align:bottom;height:34px}:host-context(.bootstrap){text-align:right}:host-context(.bootstrap) path{fill:#fff}:host-context(.bootstrap) svg{vertical-align:bottom;height:34px}:host-context(tag:active) path,:host-context(tag:focus) path{fill:#fff}:host-context(.darktag:active) path,:host-context(.darktag:focus) path{fill:#000}:host-context(.minimaltag:active) path,:host-context(.minimaltag:focus) path{fill:#000}:host-context(.bootstraptag:active) path,:host-context(.bootstraptag:focus) path{fill:#fff}:host-context(.bootstrap3-info){height:inherit}:host-context(.bootstrap3-info) path{fill:#fff}"]
        })
    ], DeleteIconComponent);
    return DeleteIconComponent;
}());

var optionsProvider = new OptionsProvider();
var TagInputModule = /** @class */ (function () {
    function TagInputModule() {
    }
    /**
     * @name withDefaults
     * @param options {Options}
     */
    TagInputModule.withDefaults = function (options) {
        optionsProvider.setOptions(options);
    };
    TagInputModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2DropdownModule"]
            ],
            declarations: [
                TagInputComponent,
                DeleteIconComponent,
                TagInputForm,
                TagComponent,
                HighlightPipe,
                TagInputDropdown,
                TagRipple
            ],
            exports: [
                TagInputComponent,
                DeleteIconComponent,
                TagInputForm,
                TagComponent,
                HighlightPipe,
                TagInputDropdown,
                TagRipple
            ],
            providers: [
                DragProvider,
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"], useValue: false },
            ]
        })
    ], TagInputModule);
    return TagInputModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-chips.js.map


/***/ }),

/***/ "./node_modules/nouislider/distribute/nouislider.js":
/*!**********************************************************!*\
  !*** ./node_modules/nouislider/distribute/nouislider.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! nouislider - 9.2.0 - 2017-01-11 10:35:34 */

(function (factory) {

    if ( true ) {

        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

    } else {}

}(function( ){

	'use strict';

	var VERSION = '9.2.0';


	// Creates a node, adds it to target, returns the new node.
	function addNodeTo ( target, className ) {
		var div = document.createElement('div');
		addClass(div, className);
		target.appendChild(div);
		return div;
	}

	// Removes duplicates from an array.
	function unique ( array ) {
		return array.filter(function(a){
			return !this[a] ? this[a] = true : false;
		}, {});
	}

	// Round a value to the closest 'to'.
	function closest ( value, to ) {
		return Math.round(value / to) * to;
	}

	// Current position of an element relative to the document.
	function offset ( elem, orientation ) {

	var rect = elem.getBoundingClientRect(),
		doc = elem.ownerDocument,
		docElem = doc.documentElement,
		pageOffset = getPageOffset();

		// getBoundingClientRect contains left scroll in Chrome on Android.
		// I haven't found a feature detection that proves this. Worst case
		// scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
		if ( /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) ) {
			pageOffset.x = 0;
		}

		return orientation ? (rect.top + pageOffset.y - docElem.clientTop) : (rect.left + pageOffset.x - docElem.clientLeft);
	}

	// Checks whether a value is numerical.
	function isNumeric ( a ) {
		return typeof a === 'number' && !isNaN( a ) && isFinite( a );
	}

	// Sets a class and removes it after [duration] ms.
	function addClassFor ( element, className, duration ) {
		if (duration > 0) {
		addClass(element, className);
			setTimeout(function(){
				removeClass(element, className);
			}, duration);
		}
	}

	// Limits a value to 0 - 100
	function limit ( a ) {
		return Math.max(Math.min(a, 100), 0);
	}

	// Wraps a variable as an array, if it isn't one yet.
	// Note that an input array is returned by reference!
	function asArray ( a ) {
		return Array.isArray(a) ? a : [a];
	}

	// Counts decimals
	function countDecimals ( numStr ) {
		numStr = String(numStr);
		var pieces = numStr.split(".");
		return pieces.length > 1 ? pieces[1].length : 0;
	}

	// http://youmightnotneedjquery.com/#add_class
	function addClass ( el, className ) {
		if ( el.classList ) {
			el.classList.add(className);
		} else {
			el.className += ' ' + className;
		}
	}

	// http://youmightnotneedjquery.com/#remove_class
	function removeClass ( el, className ) {
		if ( el.classList ) {
			el.classList.remove(className);
		} else {
			el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	}

	// https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
	function hasClass ( el, className ) {
		return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
	}

	// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
	function getPageOffset ( ) {

		var supportPageOffset = window.pageXOffset !== undefined,
			isCSS1Compat = ((document.compatMode || "") === "CSS1Compat"),
			x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
			y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

		return {
			x: x,
			y: y
		};
	}

	// we provide a function to compute constants instead
	// of accessing window.* as soon as the module needs it
	// so that we do not compute anything if not needed
	function getActions ( ) {

		// Determine the events to bind. IE11 implements pointerEvents without
		// a prefix, which breaks compatibility with the IE10 implementation.
		return window.navigator.pointerEnabled ? {
			start: 'pointerdown',
			move: 'pointermove',
			end: 'pointerup'
		} : window.navigator.msPointerEnabled ? {
			start: 'MSPointerDown',
			move: 'MSPointerMove',
			end: 'MSPointerUp'
		} : {
			start: 'mousedown touchstart',
			move: 'mousemove touchmove',
			end: 'mouseup touchend'
		};
	}


// Value calculation

	// Determine the size of a sub-range in relation to a full range.
	function subRangeRatio ( pa, pb ) {
		return (100 / (pb - pa));
	}

	// (percentage) How many percent is this value of this range?
	function fromPercentage ( range, value ) {
		return (value * 100) / ( range[1] - range[0] );
	}

	// (percentage) Where is this value on this range?
	function toPercentage ( range, value ) {
		return fromPercentage( range, range[0] < 0 ?
			value + Math.abs(range[0]) :
				value - range[0] );
	}

	// (value) How much is this percentage on this range?
	function isPercentage ( range, value ) {
		return ((value * ( range[1] - range[0] )) / 100) + range[0];
	}


// Range conversion

	function getJ ( value, arr ) {

		var j = 1;

		while ( value >= arr[j] ){
			j += 1;
		}

		return j;
	}

	// (percentage) Input a value, find where, on a scale of 0-100, it applies.
	function toStepping ( xVal, xPct, value ) {

		if ( value >= xVal.slice(-1)[0] ){
			return 100;
		}

		var j = getJ( value, xVal ), va, vb, pa, pb;

		va = xVal[j-1];
		vb = xVal[j];
		pa = xPct[j-1];
		pb = xPct[j];

		return pa + (toPercentage([va, vb], value) / subRangeRatio (pa, pb));
	}

	// (value) Input a percentage, find where it is on the specified range.
	function fromStepping ( xVal, xPct, value ) {

		// There is no range group that fits 100
		if ( value >= 100 ){
			return xVal.slice(-1)[0];
		}

		var j = getJ( value, xPct ), va, vb, pa, pb;

		va = xVal[j-1];
		vb = xVal[j];
		pa = xPct[j-1];
		pb = xPct[j];

		return isPercentage([va, vb], (value - pa) * subRangeRatio (pa, pb));
	}

	// (percentage) Get the step that applies at a certain value.
	function getStep ( xPct, xSteps, snap, value ) {

		if ( value === 100 ) {
			return value;
		}

		var j = getJ( value, xPct ), a, b;

		// If 'snap' is set, steps are used as fixed points on the slider.
		if ( snap ) {

			a = xPct[j-1];
			b = xPct[j];

			// Find the closest position, a or b.
			if ((value - a) > ((b-a)/2)){
				return b;
			}

			return a;
		}

		if ( !xSteps[j-1] ){
			return value;
		}

		return xPct[j-1] + closest(
			value - xPct[j-1],
			xSteps[j-1]
		);
	}


// Entry parsing

	function handleEntryPoint ( index, value, that ) {

		var percentage;

		// Wrap numerical input in an array.
		if ( typeof value === "number" ) {
			value = [value];
		}

		// Reject any invalid input, by testing whether value is an array.
		if ( Object.prototype.toString.call( value ) !== '[object Array]' ){
			throw new Error("noUiSlider (" + VERSION + "): 'range' contains invalid value.");
		}

		// Covert min/max syntax to 0 and 100.
		if ( index === 'min' ) {
			percentage = 0;
		} else if ( index === 'max' ) {
			percentage = 100;
		} else {
			percentage = parseFloat( index );
		}

		// Check for correct input.
		if ( !isNumeric( percentage ) || !isNumeric( value[0] ) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' value isn't numeric.");
		}

		// Store values.
		that.xPct.push( percentage );
		that.xVal.push( value[0] );

		// NaN will evaluate to false too, but to keep
		// logging clear, set step explicitly. Make sure
		// not to override the 'step' setting with false.
		if ( !percentage ) {
			if ( !isNaN( value[1] ) ) {
				that.xSteps[0] = value[1];
			}
		} else {
			that.xSteps.push( isNaN(value[1]) ? false : value[1] );
		}

		that.xHighestCompleteStep.push(0);
	}

	function handleStepPoint ( i, n, that ) {

		// Ignore 'false' stepping.
		if ( !n ) {
			return true;
		}

		// Factor to range ratio
		that.xSteps[i] = fromPercentage([
			 that.xVal[i]
			,that.xVal[i+1]
		], n) / subRangeRatio (
			that.xPct[i],
			that.xPct[i+1] );

		var totalSteps = (that.xVal[i+1] - that.xVal[i]) / that.xNumSteps[i];
		var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
		var step = that.xVal[i] + (that.xNumSteps[i] * highestStep);

		that.xHighestCompleteStep[i] = step;
	}


// Interface

	// The interface to Spectrum handles all direction-based
	// conversions, so the above values are unaware.

	function Spectrum ( entry, snap, direction, singleStep ) {

		this.xPct = [];
		this.xVal = [];
		this.xSteps = [ singleStep || false ];
		this.xNumSteps = [ false ];
		this.xHighestCompleteStep = [];

		this.snap = snap;
		this.direction = direction;

		var index, ordered = [ /* [0, 'min'], [1, '50%'], [2, 'max'] */ ];

		// Map the object keys to an array.
		for ( index in entry ) {
			if ( entry.hasOwnProperty(index) ) {
				ordered.push([entry[index], index]);
			}
		}

		// Sort all entries by value (numeric sort).
		if ( ordered.length && typeof ordered[0][0] === "object" ) {
			ordered.sort(function(a, b) { return a[0][0] - b[0][0]; });
		} else {
			ordered.sort(function(a, b) { return a[0] - b[0]; });
		}


		// Convert all entries to subranges.
		for ( index = 0; index < ordered.length; index++ ) {
			handleEntryPoint(ordered[index][1], ordered[index][0], this);
		}

		// Store the actual step values.
		// xSteps is sorted in the same order as xPct and xVal.
		this.xNumSteps = this.xSteps.slice(0);

		// Convert all numeric steps to the percentage of the subrange they represent.
		for ( index = 0; index < this.xNumSteps.length; index++ ) {
			handleStepPoint(index, this.xNumSteps[index], this);
		}
	}

	Spectrum.prototype.getMargin = function ( value ) {

		var step = this.xNumSteps[0];

		if ( step && ((value / step) % 1) !== 0 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'limit', 'margin' and 'padding' must be divisible by step.");
		}

		return this.xPct.length === 2 ? fromPercentage(this.xVal, value) : false;
	};

	Spectrum.prototype.toStepping = function ( value ) {

		value = toStepping( this.xVal, this.xPct, value );

		return value;
	};

	Spectrum.prototype.fromStepping = function ( value ) {

		return fromStepping( this.xVal, this.xPct, value );
	};

	Spectrum.prototype.getStep = function ( value ) {

		value = getStep(this.xPct, this.xSteps, this.snap, value );

		return value;
	};

	Spectrum.prototype.getNearbySteps = function ( value ) {

		var j = getJ(value, this.xPct);

		return {
			stepBefore: { startValue: this.xVal[j-2], step: this.xNumSteps[j-2], highestStep: this.xHighestCompleteStep[j-2] },
			thisStep: { startValue: this.xVal[j-1], step: this.xNumSteps[j-1], highestStep: this.xHighestCompleteStep[j-1] },
			stepAfter: { startValue: this.xVal[j-0], step: this.xNumSteps[j-0], highestStep: this.xHighestCompleteStep[j-0] }
		};
	};

	Spectrum.prototype.countStepDecimals = function () {
		var stepDecimals = this.xNumSteps.map(countDecimals);
		return Math.max.apply(null, stepDecimals);
 	};

	// Outside testing
	Spectrum.prototype.convert = function ( value ) {
		return this.getStep(this.toStepping(value));
	};

/*	Every input option is tested and parsed. This'll prevent
	endless validation in internal methods. These tests are
	structured with an item for every option available. An
	option can be marked as required by setting the 'r' flag.
	The testing function is provided with three arguments:
		- The provided value for the option;
		- A reference to the options object;
		- The name for the option;

	The testing function returns false when an error is detected,
	or true when everything is OK. It can also modify the option
	object, to make sure all values can be correctly looped elsewhere. */

	var defaultFormatter = { 'to': function( value ){
		return value !== undefined && value.toFixed(2);
	}, 'from': Number };

	function testStep ( parsed, entry ) {

		if ( !isNumeric( entry ) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'step' is not numeric.");
		}

		// The step option can still be used to set stepping
		// for linear sliders. Overwritten if set in 'range'.
		parsed.singleStep = entry;
	}

	function testRange ( parsed, entry ) {

		// Filter incorrect input.
		if ( typeof entry !== 'object' || Array.isArray(entry) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' is not an object.");
		}

		// Catch missing start or end.
		if ( entry.min === undefined || entry.max === undefined ) {
			throw new Error("noUiSlider (" + VERSION + "): Missing 'min' or 'max' in 'range'.");
		}

		// Catch equal start or end.
		if ( entry.min === entry.max ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' 'min' and 'max' cannot be equal.");
		}

		parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.dir, parsed.singleStep);
	}

	function testStart ( parsed, entry ) {

		entry = asArray(entry);

		// Validate input. Values aren't tested, as the public .val method
		// will always provide a valid location.
		if ( !Array.isArray( entry ) || !entry.length ) {
			throw new Error("noUiSlider (" + VERSION + "): 'start' option is incorrect.");
		}

		// Store the number of handles.
		parsed.handles = entry.length;

		// When the slider is initialized, the .val method will
		// be called with the start options.
		parsed.start = entry;
	}

	function testSnap ( parsed, entry ) {

		// Enforce 100% stepping within subranges.
		parsed.snap = entry;

		if ( typeof entry !== 'boolean' ){
			throw new Error("noUiSlider (" + VERSION + "): 'snap' option must be a boolean.");
		}
	}

	function testAnimate ( parsed, entry ) {

		// Enforce 100% stepping within subranges.
		parsed.animate = entry;

		if ( typeof entry !== 'boolean' ){
			throw new Error("noUiSlider (" + VERSION + "): 'animate' option must be a boolean.");
		}
	}

	function testAnimationDuration ( parsed, entry ) {

		parsed.animationDuration = entry;

		if ( typeof entry !== 'number' ){
			throw new Error("noUiSlider (" + VERSION + "): 'animationDuration' option must be a number.");
		}
	}

	function testConnect ( parsed, entry ) {

		var connect = [false];
		var i;

		// Map legacy options
		if ( entry === 'lower' ) {
			entry = [true, false];
		}

		else if ( entry === 'upper' ) {
			entry = [false, true];
		}

		// Handle boolean options
		if ( entry === true || entry === false ) {

			for ( i = 1; i < parsed.handles; i++ ) {
				connect.push(entry);
			}

			connect.push(false);
		}

		// Reject invalid input
		else if ( !Array.isArray( entry ) || !entry.length || entry.length !== parsed.handles + 1 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'connect' option doesn't match handle count.");
		}

		else {
			connect = entry;
		}

		parsed.connect = connect;
	}

	function testOrientation ( parsed, entry ) {

		// Set orientation to an a numerical value for easy
		// array selection.
		switch ( entry ){
		  case 'horizontal':
			parsed.ort = 0;
			break;
		  case 'vertical':
			parsed.ort = 1;
			break;
		  default:
			throw new Error("noUiSlider (" + VERSION + "): 'orientation' option is invalid.");
		}
	}

	function testMargin ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'margin' option must be numeric.");
		}

		// Issue #582
		if ( entry === 0 ) {
			return;
		}

		parsed.margin = parsed.spectrum.getMargin(entry);

		if ( !parsed.margin ) {
			throw new Error("noUiSlider (" + VERSION + "): 'margin' option is only supported on linear sliders.");
		}
	}

	function testLimit ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'limit' option must be numeric.");
		}

		parsed.limit = parsed.spectrum.getMargin(entry);

		if ( !parsed.limit || parsed.handles < 2 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
		}
	}

	function testPadding ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric.");
		}

		if ( entry === 0 ) {
			return;
		}

		parsed.padding = parsed.spectrum.getMargin(entry);

		if ( !parsed.padding ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option is only supported on linear sliders.");
		}

		if ( parsed.padding < 0 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be a positive number.");
		}

		if ( parsed.padding >= 50 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be less than half the range.");
		}
	}

	function testDirection ( parsed, entry ) {

		// Set direction as a numerical value for easy parsing.
		// Invert connection for RTL sliders, so that the proper
		// handles get the connect/background classes.
		switch ( entry ) {
		  case 'ltr':
			parsed.dir = 0;
			break;
		  case 'rtl':
			parsed.dir = 1;
			break;
		  default:
			throw new Error("noUiSlider (" + VERSION + "): 'direction' option was not recognized.");
		}
	}

	function testBehaviour ( parsed, entry ) {

		// Make sure the input is a string.
		if ( typeof entry !== 'string' ) {
			throw new Error("noUiSlider (" + VERSION + "): 'behaviour' must be a string containing options.");
		}

		// Check if the string contains any keywords.
		// None are required.
		var tap = entry.indexOf('tap') >= 0;
		var drag = entry.indexOf('drag') >= 0;
		var fixed = entry.indexOf('fixed') >= 0;
		var snap = entry.indexOf('snap') >= 0;
		var hover = entry.indexOf('hover') >= 0;

		if ( fixed ) {

			if ( parsed.handles !== 2 ) {
				throw new Error("noUiSlider (" + VERSION + "): 'fixed' behaviour must be used with 2 handles");
			}

			// Use margin to enforce fixed state
			testMargin(parsed, parsed.start[1] - parsed.start[0]);
		}

		parsed.events = {
			tap: tap || snap,
			drag: drag,
			fixed: fixed,
			snap: snap,
			hover: hover
		};
	}

	function testTooltips ( parsed, entry ) {

		if ( entry === false ) {
			return;
		}

		else if ( entry === true ) {

			parsed.tooltips = [];

			for ( var i = 0; i < parsed.handles; i++ ) {
				parsed.tooltips.push(true);
			}
		}

		else {

			parsed.tooltips = asArray(entry);

			if ( parsed.tooltips.length !== parsed.handles ) {
				throw new Error("noUiSlider (" + VERSION + "): must pass a formatter for all handles.");
			}

			parsed.tooltips.forEach(function(formatter){
				if ( typeof formatter !== 'boolean' && (typeof formatter !== 'object' || typeof formatter.to !== 'function') ) {
					throw new Error("noUiSlider (" + VERSION + "): 'tooltips' must be passed a formatter or 'false'.");
				}
			});
		}
	}

	function testFormat ( parsed, entry ) {

		parsed.format = entry;

		// Any object with a to and from method is supported.
		if ( typeof entry.to === 'function' && typeof entry.from === 'function' ) {
			return true;
		}

		throw new Error("noUiSlider (" + VERSION + "): 'format' requires 'to' and 'from' methods.");
	}

	function testCssPrefix ( parsed, entry ) {

		if ( entry !== undefined && typeof entry !== 'string' && entry !== false ) {
			throw new Error("noUiSlider (" + VERSION + "): 'cssPrefix' must be a string or `false`.");
		}

		parsed.cssPrefix = entry;
	}

	function testCssClasses ( parsed, entry ) {

		if ( entry !== undefined && typeof entry !== 'object' ) {
			throw new Error("noUiSlider (" + VERSION + "): 'cssClasses' must be an object.");
		}

		if ( typeof parsed.cssPrefix === 'string' ) {
			parsed.cssClasses = {};

			for ( var key in entry ) {
				if ( !entry.hasOwnProperty(key) ) { continue; }

				parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
			}
		} else {
			parsed.cssClasses = entry;
		}
	}

	function testUseRaf ( parsed, entry ) {
		if ( entry === true || entry === false ) {
			parsed.useRequestAnimationFrame = entry;
		} else {
			throw new Error("noUiSlider (" + VERSION + "): 'useRequestAnimationFrame' option should be true (default) or false.");
		}
	}

	// Test all developer settings and parse to assumption-safe values.
	function testOptions ( options ) {

		// To prove a fix for #537, freeze options here.
		// If the object is modified, an error will be thrown.
		// Object.freeze(options);

		var parsed = {
			margin: 0,
			limit: 0,
			padding: 0,
			animate: true,
			animationDuration: 300,
			format: defaultFormatter
		};

		// Tests are executed in the order they are presented here.
		var tests = {
			'step': { r: false, t: testStep },
			'start': { r: true, t: testStart },
			'connect': { r: true, t: testConnect },
			'direction': { r: true, t: testDirection },
			'snap': { r: false, t: testSnap },
			'animate': { r: false, t: testAnimate },
			'animationDuration': { r: false, t: testAnimationDuration },
			'range': { r: true, t: testRange },
			'orientation': { r: false, t: testOrientation },
			'margin': { r: false, t: testMargin },
			'limit': { r: false, t: testLimit },
			'padding': { r: false, t: testPadding },
			'behaviour': { r: true, t: testBehaviour },
			'format': { r: false, t: testFormat },
			'tooltips': { r: false, t: testTooltips },
			'cssPrefix': { r: false, t: testCssPrefix },
			'cssClasses': { r: false, t: testCssClasses },
			'useRequestAnimationFrame': { r: false, t: testUseRaf }
		};

		var defaults = {
			'connect': false,
			'direction': 'ltr',
			'behaviour': 'tap',
			'orientation': 'horizontal',
			'cssPrefix' : 'noUi-',
			'cssClasses': {
				target: 'target',
				base: 'base',
				origin: 'origin',
				handle: 'handle',
				handleLower: 'handle-lower',
				handleUpper: 'handle-upper',
				horizontal: 'horizontal',
				vertical: 'vertical',
				background: 'background',
				connect: 'connect',
				ltr: 'ltr',
				rtl: 'rtl',
				draggable: 'draggable',
				drag: 'state-drag',
				tap: 'state-tap',
				active: 'active',
				tooltip: 'tooltip',
				pips: 'pips',
				pipsHorizontal: 'pips-horizontal',
				pipsVertical: 'pips-vertical',
				marker: 'marker',
				markerHorizontal: 'marker-horizontal',
				markerVertical: 'marker-vertical',
				markerNormal: 'marker-normal',
				markerLarge: 'marker-large',
				markerSub: 'marker-sub',
				value: 'value',
				valueHorizontal: 'value-horizontal',
				valueVertical: 'value-vertical',
				valueNormal: 'value-normal',
				valueLarge: 'value-large',
				valueSub: 'value-sub'
			},
			'useRequestAnimationFrame': true
		};

		// Run all options through a testing mechanism to ensure correct
		// input. It should be noted that options might get modified to
		// be handled properly. E.g. wrapping integers in arrays.
		Object.keys(tests).forEach(function( name ){

			// If the option isn't set, but it is required, throw an error.
			if ( options[name] === undefined && defaults[name] === undefined ) {

				if ( tests[name].r ) {
					throw new Error("noUiSlider (" + VERSION + "): '" + name + "' is required.");
				}

				return true;
			}

			tests[name].t( parsed, options[name] === undefined ? defaults[name] : options[name] );
		});

		// Forward pips options
		parsed.pips = options.pips;

		var styles = [['left', 'top'], ['right', 'bottom']];

		// Pre-define the styles.
		parsed.style = styles[parsed.dir][parsed.ort];
		parsed.styleOposite = styles[parsed.dir?0:1][parsed.ort];

		return parsed;
	}


function closure ( target, options, originalOptions ){

	var actions = getActions( );

	// All variables local to 'closure' are prefixed with 'scope_'
	var scope_Target = target;
	var scope_Locations = [];
	var scope_Base;
	var scope_Handles;
	var scope_HandleNumbers = [];
	var scope_ActiveHandle = false;
	var scope_Connects;
	var scope_Spectrum = options.spectrum;
	var scope_Values = [];
	var scope_Events = {};
	var scope_Self;


	// Append a origin to the base
	function addOrigin ( base, handleNumber ) {

		var origin = addNodeTo(base, options.cssClasses.origin);
		var handle = addNodeTo(origin, options.cssClasses.handle);

		handle.setAttribute('data-handle', handleNumber);

		if ( handleNumber === 0 ) {
			addClass(handle, options.cssClasses.handleLower);
		}

		else if ( handleNumber === options.handles - 1 ) {
			addClass(handle, options.cssClasses.handleUpper);
		}

		return origin;
	}

	// Insert nodes for connect elements
	function addConnect ( base, add ) {

		if ( !add ) {
			return false;
		}

		return addNodeTo(base, options.cssClasses.connect);
	}

	// Add handles to the slider base.
	function addElements ( connectOptions, base ) {

		scope_Handles = [];
		scope_Connects = [];

		scope_Connects.push(addConnect(base, connectOptions[0]));

		// [::::O====O====O====]
		// connectOptions = [0, 1, 1, 1]

		for ( var i = 0; i < options.handles; i++ ) {
			// Keep a list of all added handles.
			scope_Handles.push(addOrigin(base, i));
			scope_HandleNumbers[i] = i;
			scope_Connects.push(addConnect(base, connectOptions[i + 1]));
		}
	}

	// Initialize a single slider.
	function addSlider ( target ) {

		// Apply classes and data to the target.
		addClass(target, options.cssClasses.target);

		if ( options.dir === 0 ) {
			addClass(target, options.cssClasses.ltr);
		} else {
			addClass(target, options.cssClasses.rtl);
		}

		if ( options.ort === 0 ) {
			addClass(target, options.cssClasses.horizontal);
		} else {
			addClass(target, options.cssClasses.vertical);
		}

		scope_Base = addNodeTo(target, options.cssClasses.base);
	}


	function addTooltip ( handle, handleNumber ) {

		if ( !options.tooltips[handleNumber] ) {
			return false;
		}

		return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
	}

	// The tooltips option is a shorthand for using the 'update' event.
	function tooltips ( ) {

		// Tooltips are added with options.tooltips in original order.
		var tips = scope_Handles.map(addTooltip);

		bindEvent('update', function(values, handleNumber, unencoded) {

			if ( !tips[handleNumber] ) {
				return;
			}

			var formattedValue = values[handleNumber];

			if ( options.tooltips[handleNumber] !== true ) {
				formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
			}

			tips[handleNumber].innerHTML = formattedValue;
		});
	}


	function getGroup ( mode, values, stepped ) {

		// Use the range.
		if ( mode === 'range' || mode === 'steps' ) {
			return scope_Spectrum.xVal;
		}

		if ( mode === 'count' ) {

			if ( !values ) {
				throw new Error("noUiSlider (" + VERSION + "): 'values' required for mode 'count'.");
			}

			// Divide 0 - 100 in 'count' parts.
			var spread = ( 100 / (values - 1) );
			var v;
			var i = 0;

			values = [];

			// List these parts and have them handled as 'positions'.
			while ( (v = i++ * spread) <= 100 ) {
				values.push(v);
			}

			mode = 'positions';
		}

		if ( mode === 'positions' ) {

			// Map all percentages to on-range values.
			return values.map(function( value ){
				return scope_Spectrum.fromStepping( stepped ? scope_Spectrum.getStep( value ) : value );
			});
		}

		if ( mode === 'values' ) {

			// If the value must be stepped, it needs to be converted to a percentage first.
			if ( stepped ) {

				return values.map(function( value ){

					// Convert to percentage, apply step, return to value.
					return scope_Spectrum.fromStepping( scope_Spectrum.getStep( scope_Spectrum.toStepping( value ) ) );
				});

			}

			// Otherwise, we can simply use the values.
			return values;
		}
	}

	function generateSpread ( density, mode, group ) {

		function safeIncrement(value, increment) {
			// Avoid floating point variance by dropping the smallest decimal places.
			return (value + increment).toFixed(7) / 1;
		}

		var indexes = {};
		var firstInRange = scope_Spectrum.xVal[0];
		var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length-1];
		var ignoreFirst = false;
		var ignoreLast = false;
		var prevPct = 0;

		// Create a copy of the group, sort it and filter away all duplicates.
		group = unique(group.slice().sort(function(a, b){ return a - b; }));

		// Make sure the range starts with the first element.
		if ( group[0] !== firstInRange ) {
			group.unshift(firstInRange);
			ignoreFirst = true;
		}

		// Likewise for the last one.
		if ( group[group.length - 1] !== lastInRange ) {
			group.push(lastInRange);
			ignoreLast = true;
		}

		group.forEach(function ( current, index ) {

			// Get the current step and the lower + upper positions.
			var step;
			var i;
			var q;
			var low = current;
			var high = group[index+1];
			var newPct;
			var pctDifference;
			var pctPos;
			var type;
			var steps;
			var realSteps;
			var stepsize;

			// When using 'steps' mode, use the provided steps.
			// Otherwise, we'll step on to the next subrange.
			if ( mode === 'steps' ) {
				step = scope_Spectrum.xNumSteps[ index ];
			}

			// Default to a 'full' step.
			if ( !step ) {
				step = high-low;
			}

			// Low can be 0, so test for false. If high is undefined,
			// we are at the last subrange. Index 0 is already handled.
			if ( low === false || high === undefined ) {
				return;
			}

			// Make sure step isn't 0, which would cause an infinite loop (#654)
			step = Math.max(step, 0.0000001);

			// Find all steps in the subrange.
			for ( i = low; i <= high; i = safeIncrement(i, step) ) {

				// Get the percentage value for the current step,
				// calculate the size for the subrange.
				newPct = scope_Spectrum.toStepping( i );
				pctDifference = newPct - prevPct;

				steps = pctDifference / density;
				realSteps = Math.round(steps);

				// This ratio represents the ammount of percentage-space a point indicates.
				// For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-devided.
				// Round the percentage offset to an even number, then divide by two
				// to spread the offset on both sides of the range.
				stepsize = pctDifference/realSteps;

				// Divide all points evenly, adding the correct number to this subrange.
				// Run up to <= so that 100% gets a point, event if ignoreLast is set.
				for ( q = 1; q <= realSteps; q += 1 ) {

					// The ratio between the rounded value and the actual size might be ~1% off.
					// Correct the percentage offset by the number of points
					// per subrange. density = 1 will result in 100 points on the
					// full range, 2 for 50, 4 for 25, etc.
					pctPos = prevPct + ( q * stepsize );
					indexes[pctPos.toFixed(5)] = ['x', 0];
				}

				// Determine the point type.
				type = (group.indexOf(i) > -1) ? 1 : ( mode === 'steps' ? 2 : 0 );

				// Enforce the 'ignoreFirst' option by overwriting the type for 0.
				if ( !index && ignoreFirst ) {
					type = 0;
				}

				if ( !(i === high && ignoreLast)) {
					// Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
					indexes[newPct.toFixed(5)] = [i, type];
				}

				// Update the percentage count.
				prevPct = newPct;
			}
		});

		return indexes;
	}

	function addMarking ( spread, filterFunc, formatter ) {

		var element = document.createElement('div');
		var out = '';
		var valueSizeClasses = [
			options.cssClasses.valueNormal,
			options.cssClasses.valueLarge,
			options.cssClasses.valueSub
		];
		var markerSizeClasses = [
			options.cssClasses.markerNormal,
			options.cssClasses.markerLarge,
			options.cssClasses.markerSub
		];
		var valueOrientationClasses = [
			options.cssClasses.valueHorizontal,
			options.cssClasses.valueVertical
		];
		var markerOrientationClasses = [
			options.cssClasses.markerHorizontal,
			options.cssClasses.markerVertical
		];

		addClass(element, options.cssClasses.pips);
		addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);

		function getClasses( type, source ){
			var a = source === options.cssClasses.value;
			var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
			var sizeClasses = a ? valueSizeClasses : markerSizeClasses;

			return source + ' ' + orientationClasses[options.ort] + ' ' + sizeClasses[type];
		}

		function getTags( offset, source, values ) {
			return 'class="' + getClasses(values[1], source) + '" style="' + options.style + ': ' + offset + '%"';
		}

		function addSpread ( offset, values ){

			// Apply the filter function, if it is set.
			values[1] = (values[1] && filterFunc) ? filterFunc(values[0], values[1]) : values[1];

			// Add a marker for every point
			out += '<div ' + getTags(offset, options.cssClasses.marker, values) + '></div>';

			// Values are only appended for points marked '1' or '2'.
			if ( values[1] ) {
				out += '<div ' + getTags(offset, options.cssClasses.value, values) + '>' + formatter.to(values[0]) + '</div>';
			}
		}

		// Append all points.
		Object.keys(spread).forEach(function(a){
			addSpread(a, spread[a]);
		});

		element.innerHTML = out;

		return element;
	}

	function pips ( grid ) {

		var mode = grid.mode;
		var density = grid.density || 1;
		var filter = grid.filter || false;
		var values = grid.values || false;
		var stepped = grid.stepped || false;
		var group = getGroup( mode, values, stepped );
		var spread = generateSpread( density, mode, group );
		var format = grid.format || {
			to: Math.round
		};

		return scope_Target.appendChild(addMarking(
			spread,
			filter,
			format
		));
	}


	// Shorthand for base dimensions.
	function baseSize ( ) {
		var rect = scope_Base.getBoundingClientRect(), alt = 'offset' + ['Width', 'Height'][options.ort];
		return options.ort === 0 ? (rect.width||scope_Base[alt]) : (rect.height||scope_Base[alt]);
	}

	// Handler for attaching events trough a proxy.
	function attachEvent ( events, element, callback, data ) {

		// This function can be used to 'filter' events to the slider.
		// element is a node, not a nodeList

		var method = function ( e ){

			if ( scope_Target.hasAttribute('disabled') ) {
				return false;
			}

			// Stop if an active 'tap' transition is taking place.
			if ( hasClass(scope_Target, options.cssClasses.tap) ) {
				return false;
			}

			e = fixEvent(e, data.pageOffset);

			// Handle reject of multitouch
			if ( !e ) {
				return false;
			}

			// Ignore right or middle clicks on start #454
			if ( events === actions.start && e.buttons !== undefined && e.buttons > 1 ) {
				return false;
			}

			// Ignore right or middle clicks on start #454
			if ( data.hover && e.buttons ) {
				return false;
			}

			e.calcPoint = e.points[ options.ort ];

			// Call the event handler with the event [ and additional data ].
			callback ( e, data );
		};

		var methods = [];

		// Bind a closure on the target for every event type.
		events.split(' ').forEach(function( eventName ){
			element.addEventListener(eventName, method, false);
			methods.push([eventName, method]);
		});

		return methods;
	}

	// Provide a clean event with standardized offset values.
	function fixEvent ( e, pageOffset ) {

		// Prevent scrolling and panning on touch events, while
		// attempting to slide. The tap event also depends on this.
		e.preventDefault();

		// Filter the event to register the type, which can be
		// touch, mouse or pointer. Offset changes need to be
		// made on an event specific basis.
		var touch = e.type.indexOf('touch') === 0;
		var mouse = e.type.indexOf('mouse') === 0;
		var pointer = e.type.indexOf('pointer') === 0;
		var x;
		var y;

		// IE10 implemented pointer events with a prefix;
		if ( e.type.indexOf('MSPointer') === 0 ) {
			pointer = true;
		}

		if ( touch ) {

			// Fix bug when user touches with two or more fingers on mobile devices.
			// It's useful when you have two or more sliders on one page,
			// that can be touched simultaneously.
			// #649, #663, #668
			if ( e.touches.length > 1 ) {
				return false;
			}

			// noUiSlider supports one movement at a time,
			// so we can select the first 'changedTouch'.
			x = e.changedTouches[0].pageX;
			y = e.changedTouches[0].pageY;
		}

		pageOffset = pageOffset || getPageOffset();

		if ( mouse || pointer ) {
			x = e.clientX + pageOffset.x;
			y = e.clientY + pageOffset.y;
		}

		e.pageOffset = pageOffset;
		e.points = [x, y];
		e.cursor = mouse || pointer; // Fix #435

		return e;
	}

	// Translate a coordinate in the document to a percentage on the slider
	function calcPointToPercentage ( calcPoint ) {
		var location = calcPoint - offset(scope_Base, options.ort);
		var proposal = ( location * 100 ) / baseSize();
		return options.dir ? 100 - proposal : proposal;
	}

	// Find handle closest to a certain percentage on the slider
	function getClosestHandle ( proposal ) {

		var closest = 100;
		var handleNumber = false;

		scope_Handles.forEach(function(handle, index){

			// Disabled handles are ignored
			if ( handle.hasAttribute('disabled') ) {
				return;
			}

			var pos = Math.abs(scope_Locations[index] - proposal);

			if ( pos < closest ) {
				handleNumber = index;
				closest = pos;
			}
		});

		return handleNumber;
	}

	// Moves handle(s) by a percentage
	// (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
	function moveHandles ( upward, proposal, locations, handleNumbers ) {

		var proposals = locations.slice();

		var b = [!upward, upward];
		var f = [upward, !upward];

		// Copy handleNumbers so we don't change the dataset
		handleNumbers = handleNumbers.slice();

		// Check to see which handle is 'leading'.
		// If that one can't move the second can't either.
		if ( upward ) {
			handleNumbers.reverse();
		}

		// Step 1: get the maximum percentage that any of the handles can move
		if ( handleNumbers.length > 1 ) {

			handleNumbers.forEach(function(handleNumber, o) {

				var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o]);

				// Stop if one of the handles can't move.
				if ( to === false ) {
					proposal = 0;
				} else {
					proposal = to - proposals[handleNumber];
					proposals[handleNumber] = to;
				}
			});
		}

		// If using one handle, check backward AND forward
		else {
			b = f = [true];
		}

		var state = false;

		// Step 2: Try to set the handles with the found percentage
		handleNumbers.forEach(function(handleNumber, o) {
			state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
		});

		// Step 3: If a handle moved, fire events
		if ( state ) {
			handleNumbers.forEach(function(handleNumber){
				fireEvent('update', handleNumber);
				fireEvent('slide', handleNumber);
			});
		}
	}

	// External event handling
	function fireEvent ( eventName, handleNumber, tap ) {

		Object.keys(scope_Events).forEach(function( targetEvent ) {

			var eventType = targetEvent.split('.')[0];

			if ( eventName === eventType ) {
				scope_Events[targetEvent].forEach(function( callback ) {

					callback.call(
						// Use the slider public API as the scope ('this')
						scope_Self,
						// Return values as array, so arg_1[arg_2] is always valid.
						scope_Values.map(options.format.to),
						// Handle index, 0 or 1
						handleNumber,
						// Unformatted slider values
						scope_Values.slice(),
						// Event is fired by tap, true or false
						tap || false,
						// Left offset of the handle, in relation to the slider
						scope_Locations.slice()
					);
				});
			}
		});
	}


	// Fire 'end' when a mouse or pen leaves the document.
	function documentLeave ( event, data ) {
		if ( event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null ){
			eventEnd (event, data);
		}
	}

	// Handle movement on document for handle and range drag.
	function eventMove ( event, data ) {

		// Fix #498
		// Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
		// https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
		// IE9 has .buttons and .which zero on mousemove.
		// Firefox breaks the spec MDN defines.
		if ( navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0 ) {
			return eventEnd(event, data);
		}

		// Check if we are moving up or down
		var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);

		// Convert the movement into a percentage of the slider width/height
		var proposal = (movement * 100) / data.baseSize;

		moveHandles(movement > 0, proposal, data.locations, data.handleNumbers);
	}

	// Unbind move events on document, call callbacks.
	function eventEnd ( event, data ) {

		// The handle is no longer active, so remove the class.
		if ( scope_ActiveHandle ) {
			removeClass(scope_ActiveHandle, options.cssClasses.active);
			scope_ActiveHandle = false;
		}

		// Remove cursor styles and text-selection events bound to the body.
		if ( event.cursor ) {
			document.body.style.cursor = '';
			document.body.removeEventListener('selectstart', document.body.noUiListener);
		}

		// Unbind the move and end events, which are added on 'start'.
		document.documentElement.noUiListeners.forEach(function( c ) {
			document.documentElement.removeEventListener(c[0], c[1]);
		});

		// Remove dragging class.
		removeClass(scope_Target, options.cssClasses.drag);

		setZindex();

		data.handleNumbers.forEach(function(handleNumber){
			fireEvent('set', handleNumber);
			fireEvent('change', handleNumber);
			fireEvent('end', handleNumber);
		});
	}

	// Bind move events on document.
	function eventStart ( event, data ) {

		if ( data.handleNumbers.length === 1 ) {

			var handle = scope_Handles[data.handleNumbers[0]];

			// Ignore 'disabled' handles
			if ( handle.hasAttribute('disabled') ) {
				return false;
			}

			// Mark the handle as 'active' so it can be styled.
			scope_ActiveHandle = handle.children[0];
			addClass(scope_ActiveHandle, options.cssClasses.active);
		}

		// Fix #551, where a handle gets selected instead of dragged.
		event.preventDefault();

		// A drag should never propagate up to the 'tap' event.
		event.stopPropagation();

		// Attach the move and end events.
		var moveEvent = attachEvent(actions.move, document.documentElement, eventMove, {
			startCalcPoint: event.calcPoint,
			baseSize: baseSize(),
			pageOffset: event.pageOffset,
			handleNumbers: data.handleNumbers,
			buttonsProperty: event.buttons,
			locations: scope_Locations.slice()
		});

		var endEvent = attachEvent(actions.end, document.documentElement, eventEnd, {
			handleNumbers: data.handleNumbers
		});

		var outEvent = attachEvent("mouseout", document.documentElement, documentLeave, {
			handleNumbers: data.handleNumbers
		});

		document.documentElement.noUiListeners = moveEvent.concat(endEvent, outEvent);

		// Text selection isn't an issue on touch devices,
		// so adding cursor styles can be skipped.
		if ( event.cursor ) {

			// Prevent the 'I' cursor and extend the range-drag cursor.
			document.body.style.cursor = getComputedStyle(event.target).cursor;

			// Mark the target with a dragging state.
			if ( scope_Handles.length > 1 ) {
				addClass(scope_Target, options.cssClasses.drag);
			}

			var f = function(){
				return false;
			};

			document.body.noUiListener = f;

			// Prevent text selection when dragging the handles.
			document.body.addEventListener('selectstart', f, false);
		}

		data.handleNumbers.forEach(function(handleNumber){
			fireEvent('start', handleNumber);
		});
	}

	// Move closest handle to tapped location.
	function eventTap ( event ) {

		// The tap event shouldn't propagate up
		event.stopPropagation();

		var proposal = calcPointToPercentage(event.calcPoint);
		var handleNumber = getClosestHandle(proposal);

		// Tackle the case that all handles are 'disabled'.
		if ( handleNumber === false ) {
			return false;
		}

		// Flag the slider as it is now in a transitional state.
		// Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
		if ( !options.events.snap ) {
			addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
		}

		setHandle(handleNumber, proposal, true, true);

		setZindex();

		fireEvent('slide', handleNumber, true);
		fireEvent('set', handleNumber, true);
		fireEvent('change', handleNumber, true);
		fireEvent('update', handleNumber, true);

		if ( options.events.snap ) {
			eventStart(event, { handleNumbers: [handleNumber] });
		}
	}

	// Fires a 'hover' event for a hovered mouse/pen position.
	function eventHover ( event ) {

		var proposal = calcPointToPercentage(event.calcPoint);

		var to = scope_Spectrum.getStep(proposal);
		var value = scope_Spectrum.fromStepping(to);

		Object.keys(scope_Events).forEach(function( targetEvent ) {
			if ( 'hover' === targetEvent.split('.')[0] ) {
				scope_Events[targetEvent].forEach(function( callback ) {
					callback.call( scope_Self, value );
				});
			}
		});
	}

	// Attach events to several slider parts.
	function bindSliderEvents ( behaviour ) {

		// Attach the standard drag event to the handles.
		if ( !behaviour.fixed ) {

			scope_Handles.forEach(function( handle, index ){

				// These events are only bound to the visual handle
				// element, not the 'real' origin element.
				attachEvent ( actions.start, handle.children[0], eventStart, {
					handleNumbers: [index]
				});
			});
		}

		// Attach the tap event to the slider base.
		if ( behaviour.tap ) {
			attachEvent (actions.start, scope_Base, eventTap, {});
		}

		// Fire hover events
		if ( behaviour.hover ) {
			attachEvent (actions.move, scope_Base, eventHover, { hover: true });
		}

		// Make the range draggable.
		if ( behaviour.drag ){

			scope_Connects.forEach(function( connect, index ){

				if ( connect === false || index === 0 || index === scope_Connects.length - 1 ) {
					return;
				}

				var handleBefore = scope_Handles[index - 1];
				var handleAfter = scope_Handles[index];
				var eventHolders = [connect];

				addClass(connect, options.cssClasses.draggable);

				// When the range is fixed, the entire range can
				// be dragged by the handles. The handle in the first
				// origin will propagate the start event upward,
				// but it needs to be bound manually on the other.
				if ( behaviour.fixed ) {
					eventHolders.push(handleBefore.children[0]);
					eventHolders.push(handleAfter.children[0]);
				}

				eventHolders.forEach(function( eventHolder ) {
					attachEvent ( actions.start, eventHolder, eventStart, {
						handles: [handleBefore, handleAfter],
						handleNumbers: [index - 1, index]
					});
				});
			});
		}
	}


	// Split out the handle positioning logic so the Move event can use it, too
	function checkHandlePosition ( reference, handleNumber, to, lookBackward, lookForward ) {

		// For sliders with multiple handles, limit movement to the other handle.
		// Apply the margin option by adding it to the handle positions.
		if ( scope_Handles.length > 1 ) {

			if ( lookBackward && handleNumber > 0 ) {
				to = Math.max(to, reference[handleNumber - 1] + options.margin);
			}

			if ( lookForward && handleNumber < scope_Handles.length - 1 ) {
				to = Math.min(to, reference[handleNumber + 1] - options.margin);
			}
		}

		// The limit option has the opposite effect, limiting handles to a
		// maximum distance from another. Limit must be > 0, as otherwise
		// handles would be unmoveable.
		if ( scope_Handles.length > 1 && options.limit ) {

			if ( lookBackward && handleNumber > 0 ) {
				to = Math.min(to, reference[handleNumber - 1] + options.limit);
			}

			if ( lookForward && handleNumber < scope_Handles.length - 1 ) {
				to = Math.max(to, reference[handleNumber + 1] - options.limit);
			}
		}

		// The padding option keeps the handles a certain distance from the
		// edges of the slider. Padding must be > 0.
		if ( options.padding ) {

			if ( handleNumber === 0 ) {
				to = Math.max(to, options.padding);
			}

			if ( handleNumber === scope_Handles.length - 1 ) {
				to = Math.min(to, 100 - options.padding);
			}
		}

		to = scope_Spectrum.getStep(to);

		// Limit percentage to the 0 - 100 range
		to = limit(to);

		// Return false if handle can't move
		if ( to === reference[handleNumber] ) {
			return false;
		}

		return to;
	}

	function toPct ( pct ) {
		return pct + '%';
	}

	// Updates scope_Locations and scope_Values, updates visual state
	function updateHandlePosition ( handleNumber, to ) {

		// Update locations.
		scope_Locations[handleNumber] = to;

		// Convert the value to the slider stepping/range.
		scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);

		// Called synchronously or on the next animationFrame
		var stateUpdate = function() {
			scope_Handles[handleNumber].style[options.style] = toPct(to);
			updateConnect(handleNumber);
			updateConnect(handleNumber + 1);
		};

		// Set the handle to the new position.
		// Use requestAnimationFrame for efficient painting.
		// No significant effect in Chrome, Edge sees dramatic performace improvements.
		// Option to disable is useful for unit tests, and single-step debugging.
		if ( window.requestAnimationFrame && options.useRequestAnimationFrame ) {
			window.requestAnimationFrame(stateUpdate);
		} else {
			stateUpdate();
		}
	}

	function setZindex ( ) {

		scope_HandleNumbers.forEach(function(handleNumber){
			// Handles before the slider middle are stacked later = higher,
			// Handles after the middle later is lower
			// [[7] [8] .......... | .......... [5] [4]
			var dir = (scope_Locations[handleNumber] > 50 ? -1 : 1);
			var zIndex = 3 + (scope_Handles.length + (dir * handleNumber));
			scope_Handles[handleNumber].childNodes[0].style.zIndex = zIndex;
		});
	}

	// Test suggested values and apply margin, step.
	function setHandle ( handleNumber, to, lookBackward, lookForward ) {

		to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward);

		if ( to === false ) {
			return false;
		}

		updateHandlePosition(handleNumber, to);

		return true;
	}

	// Updates style attribute for connect nodes
	function updateConnect ( index ) {

		// Skip connects set to false
		if ( !scope_Connects[index] ) {
			return;
		}

		var l = 0;
		var h = 100;

		if ( index !== 0 ) {
			l = scope_Locations[index - 1];
		}

		if ( index !== scope_Connects.length - 1 ) {
			h = scope_Locations[index];
		}

		scope_Connects[index].style[options.style] = toPct(l);
		scope_Connects[index].style[options.styleOposite] = toPct(100 - h);
	}

	// ...
	function setValue ( to, handleNumber ) {

		// Setting with null indicates an 'ignore'.
		// Inputting 'false' is invalid.
		if ( to === null || to === false ) {
			return;
		}

		// If a formatted number was passed, attemt to decode it.
		if ( typeof to === 'number' ) {
			to = String(to);
		}

		to = options.format.from(to);

		// Request an update for all links if the value was invalid.
		// Do so too if setting the handle fails.
		if ( to !== false && !isNaN(to) ) {
			setHandle(handleNumber, scope_Spectrum.toStepping(to), false, false);
		}
	}

	// Set the slider value.
	function valueSet ( input, fireSetEvent ) {

		var values = asArray(input);
		var isInit = scope_Locations[0] === undefined;

		// Event fires by default
		fireSetEvent = (fireSetEvent === undefined ? true : !!fireSetEvent);

		values.forEach(setValue);

		// Animation is optional.
		// Make sure the initial values were set before using animated placement.
		if ( options.animate && !isInit ) {
			addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
		}

		// Now that all base values are set, apply constraints
		scope_HandleNumbers.forEach(function(handleNumber){
			setHandle(handleNumber, scope_Locations[handleNumber], true, false);
		});

		setZindex();

		scope_HandleNumbers.forEach(function(handleNumber){

			fireEvent('update', handleNumber);

			// Fire the event only for handles that received a new value, as per #579
			if ( values[handleNumber] !== null && fireSetEvent ) {
				fireEvent('set', handleNumber);
			}
		});
	}

	// Reset slider to initial values
	function valueReset ( fireSetEvent ) {
		valueSet(options.start, fireSetEvent);
	}

	// Get the slider value.
	function valueGet ( ) {

		var values = scope_Values.map(options.format.to);

		// If only one handle is used, return a single value.
		if ( values.length === 1 ){
			return values[0];
		}

		return values;
	}

	// Removes classes from the root and empties it.
	function destroy ( ) {

		for ( var key in options.cssClasses ) {
			if ( !options.cssClasses.hasOwnProperty(key) ) { continue; }
			removeClass(scope_Target, options.cssClasses[key]);
		}

		while (scope_Target.firstChild) {
			scope_Target.removeChild(scope_Target.firstChild);
		}

		delete scope_Target.noUiSlider;
	}

	// Get the current step size for the slider.
	function getCurrentStep ( ) {

		// Check all locations, map them to their stepping point.
		// Get the step point, then find it in the input list.
		return scope_Locations.map(function( location, index ){

			var nearbySteps = scope_Spectrum.getNearbySteps( location );
			var value = scope_Values[index];
			var increment = nearbySteps.thisStep.step;
			var decrement = null;

			// If the next value in this step moves into the next step,
			// the increment is the start of the next step - the current value
			if ( increment !== false ) {
				if ( value + increment > nearbySteps.stepAfter.startValue ) {
					increment = nearbySteps.stepAfter.startValue - value;
				}
			}


			// If the value is beyond the starting point
			if ( value > nearbySteps.thisStep.startValue ) {
				decrement = nearbySteps.thisStep.step;
			}

			else if ( nearbySteps.stepBefore.step === false ) {
				decrement = false;
			}

			// If a handle is at the start of a step, it always steps back into the previous step first
			else {
				decrement = value - nearbySteps.stepBefore.highestStep;
			}


			// Now, if at the slider edges, there is not in/decrement
			if ( location === 100 ) {
				increment = null;
			}

			else if ( location === 0 ) {
				decrement = null;
			}

			// As per #391, the comparison for the decrement step can have some rounding issues.
			var stepDecimals = scope_Spectrum.countStepDecimals();

			// Round per #391
			if ( increment !== null && increment !== false ) {
				increment = Number(increment.toFixed(stepDecimals));
			}

			if ( decrement !== null && decrement !== false ) {
				decrement = Number(decrement.toFixed(stepDecimals));
			}

			return [decrement, increment];
		});
	}

	// Attach an event to this slider, possibly including a namespace
	function bindEvent ( namespacedEvent, callback ) {
		scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
		scope_Events[namespacedEvent].push(callback);

		// If the event bound is 'update,' fire it immediately for all handles.
		if ( namespacedEvent.split('.')[0] === 'update' ) {
			scope_Handles.forEach(function(a, index){
				fireEvent('update', index);
			});
		}
	}

	// Undo attachment of event
	function removeEvent ( namespacedEvent ) {

		var event = namespacedEvent && namespacedEvent.split('.')[0];
		var namespace = event && namespacedEvent.substring(event.length);

		Object.keys(scope_Events).forEach(function( bind ){

			var tEvent = bind.split('.')[0],
				tNamespace = bind.substring(tEvent.length);

			if ( (!event || event === tEvent) && (!namespace || namespace === tNamespace) ) {
				delete scope_Events[bind];
			}
		});
	}

	// Updateable: margin, limit, padding, step, range, animate, snap
	function updateOptions ( optionsToUpdate, fireSetEvent ) {

		// Spectrum is created using the range, snap, direction and step options.
		// 'snap' and 'step' can be updated, 'direction' cannot, due to event binding.
		// If 'snap' and 'step' are not passed, they should remain unchanged.
		var v = valueGet();

		var updateAble = ['margin', 'limit', 'padding', 'range', 'animate', 'snap', 'step', 'format'];

		// Only change options that we're actually passed to update.
		updateAble.forEach(function(name){
			if ( optionsToUpdate[name] !== undefined ) {
				originalOptions[name] = optionsToUpdate[name];
			}
		});

		var newOptions = testOptions(originalOptions);

		// Load new options into the slider state
		updateAble.forEach(function(name){
			if ( optionsToUpdate[name] !== undefined ) {
				options[name] = newOptions[name];
			}
		});

		// Save current spectrum direction as testOptions in testRange call
		// doesn't rely on current direction
		newOptions.spectrum.direction = scope_Spectrum.direction;
		scope_Spectrum = newOptions.spectrum;

		// Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
		options.margin = newOptions.margin;
		options.limit = newOptions.limit;
		options.padding = newOptions.padding;

		// Invalidate the current positioning so valueSet forces an update.
		scope_Locations = [];
		valueSet(optionsToUpdate.start || v, fireSetEvent);
	}

	// Throw an error if the slider was already initialized.
	if ( scope_Target.noUiSlider ) {
		throw new Error("noUiSlider (" + VERSION + "): Slider was already initialized.");
	}

	// Create the base element, initialise HTML and set classes.
	// Add handles and connect elements.
	addSlider(scope_Target);
	addElements(options.connect, scope_Base);

	scope_Self = {
		destroy: destroy,
		steps: getCurrentStep,
		on: bindEvent,
		off: removeEvent,
		get: valueGet,
		set: valueSet,
		reset: valueReset,
		// Exposed for unit testing, don't use this in your application.
		__moveHandles: function(a, b, c) { moveHandles(a, b, scope_Locations, c); },
		options: originalOptions, // Issue #600, #678
		updateOptions: updateOptions,
		target: scope_Target, // Issue #597
		pips: pips // Issue #594
	};

	// Attach user events.
	bindSliderEvents(options.events);

	// Use the public value method to set the start values.
	valueSet(options.start);

	if ( options.pips ) {
		pips(options.pips);
	}

	if ( options.tooltips ) {
		tooltips();
	}

	return scope_Self;

}


	// Run the standard initializer
	function initialize ( target, originalOptions ) {

		if ( !target.nodeName ) {
			throw new Error("noUiSlider (" + VERSION + "): create requires a single element.");
		}

		// Test the options and create the slider environment;
		var options = testOptions( originalOptions, target );
		var api = closure( target, options, originalOptions );

		target.noUiSlider = api;

		return api;
	}

	// Use an object instead of a function for future expansibility;
	return {
		version: VERSION,
		create: initialize
	};

}));

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/extendedforms/extendedforms.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/extendedforms/extendedforms.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n<div class=\"container-fluid\">\n\n    <div class=\"card\">\n        <div class=\"content\">\n\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <h4 class=\"title\">Datetime Picker</h4>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control datetimepicker\" placeholder=\"Datetime Picker Here\"/>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <h4 class=\"title\">Date Picker</h4>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control datepicker\" placeholder=\"Date Picker Here\"/>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <h4 class=\"title\">Time Picker</h4>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control timepicker\" placeholder=\"Time Picker Here\"/>\n                    </div>\n                </div>\n            </div>\n\n            <br /><br />\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <legend>Switches</legend>\n\n                    <div class=\"col-md-4\">\n                        <p class=\"category\">Default</p>\n                        <bSwitch\n                            [switch-on-color]=\"'primary'\">\n                        </bSwitch>\n                        <bSwitch\n                            [switch-on-color]=\"'primary'\"\n                            [(ngModel)]=\"state_default\">\n                        </bSwitch>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                        <p class=\"category\">Plain</p>\n                        <bSwitch\n                            [switch-on-color]=\"'primary'\"\n                            [switch-off-text]=\"' '\"\n                            [switch-on-text]=\"' '\">\n                        </bSwitch>\n                        <bSwitch\n                            [switch-on-color]=\"'primary'\"\n                            [switch-off-text]=\"' '\"\n                            [switch-on-text]=\"' '\"\n                            [(ngModel)]=\"state_plain\">\n                        </bSwitch>\n                    </div>\n\n\n                    <div class=\"col-md-4\">\n                        <p class=\"category\">With Icons</p>\n                        <bSwitch\n                            [switch-on-color]=\"'primary'\"\n                            [switch-off-text]=\"'&#x2718;'\"\n                            [switch-on-text]=\"'&#x2714;'\">\n                        </bSwitch>\n                        <bSwitch\n                            [switch-on-color]=\"'primary'\"\n                            [switch-off-text]=\"'&#x2718;'\"\n                            [switch-on-text]=\"'&#x2714;'\"\n                            [(ngModel)]=\"state_with_icons\">\n                        </bSwitch>\n                    </div>\n                </div>\n\n            </div>\n            <br /><br />\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <legend>Tags</legend>\n                    Regular: <tag-input [(ngModel)]='regularItems' class=\"tags-azure\"></tag-input>\n                    Filled: <tag-input [(ngModel)]='filledItems' class='tags-azure tags-fill'></tag-input>\n                </div>\n\n                <div class=\"col-md-6\">\n                    <legend>Customisable Select</legend>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <select name=\"cities\" class=\"selectpicker\" data-title=\"Single Select\" data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                                    <option value=\"id\">Bahasa Indonesia</option>\n                                    <option value=\"ms\">Bahasa Melayu</option>\n                                    <option value=\"ca\">Català</option>\n                                    <option value=\"da\">Dansk</option>\n                                    <option value=\"de\">Deutsch</option>\n                                    <option value=\"en\">English</option>\n                                    <option value=\"es\">Español</option>\n                                    <option value=\"el\">Eλληνικά</option>\n                                    <option value=\"fr\">Français</option>\n                                    <option value=\"it\">Italiano</option>\n                                    <option value=\"hu\">Magyar</option>\n                                    <option value=\"nl\">Nederlands</option>\n                                    <option value=\"no\">Norsk</option>\n                                    <option value=\"pl\">Polski</option>\n                                    <option value=\"pt\">Português</option>\n                                    <option value=\"fi\">Suomi</option>\n                                    <option value=\"sv\">Svenska</option>\n                                    <option value=\"tr\">Türkçe</option>\n                                    <option value=\"is\">Íslenska</option>\n                                    <option value=\"cs\">Čeština</option>\n                                    <option value=\"ru\">Русский</option>\n                                    <option value=\"th\">ภาษาไทย</option>\n                                    <option value=\"zh\">中文 (简体)</option>\n                                    <option value=\"zh-TW\">中文 (繁體)</option>\n                                    <option value=\"ja\">日本語</option>\n                                    <option value=\"ko\">한국어</option>\n                                </select>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <select multiple data-title=\"Multiple Select\" name=\"currency\" class=\"selectpicker\" data-style=\"btn-info btn-fill btn-block\" data-menu-style=\"dropdown-blue\">\n                                    <option value=\"ARS\">ARS</option>\n                                    <option value=\"AUD\">AUD</option>\n                                    <option value=\"BRL\">BRL</option>\n                                    <option value=\"CAD\">CAD</option>\n                                    <option value=\"CHF\">CHF</option>\n                                    <option value=\"CNY\">CNY</option>\n                                    <option value=\"CZK\">CZK</option>\n                                    <option value=\"DKK\">DKK</option>\n                                    <option value=\"EUR\">EUR</option>\n                                    <option value=\"GBP\">GBP</option>\n                                    <option value=\"HKD\">HKD</option>\n                                    <option value=\"HUF\">HUF</option>\n                                    <option value=\"IDR\">IDR</option>\n                                    <option value=\"ILS\">ILS</option>\n                                    <option value=\"INR\">INR</option>\n                                    <option value=\"JPY\">JPY</option>\n                                    <option value=\"KRW\">KRW</option>\n                                    <option value=\"MYR\">MYR</option>\n                                    <option value=\"MXN\">MXN</option>\n                                    <option value=\"NOK\">NOK</option>\n                                    <option value=\"NZD\">NZD</option>\n                                    <option value=\"PHP\">PHP</option>\n                                    <option value=\"PLN\">PLN</option>\n                                    <option value=\"RUB\">RUB</option>\n                                    <option value=\"SEK\">SEK</option>\n                                    <option value=\"SGD\">SGD</option>\n                                    <option value=\"TWD\">TWD</option>\n                                    <option value=\"USD\">USD</option>\n                                    <option value=\"VND\">VND</option>\n                                    <option value=\"ZAR\">ZAR</option>\n                                </select>\n                            </div>\n                        </div>\n                </div>\n            </div>\n\n            <br /><br />\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <legend>Progress Bars</legend>\n\n                    <div class=\"progress\">\n                        <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 30%;\">\n                            <span class=\"sr-only\">60% Complete</span>\n                        </div>\n                    </div>\n\n                    <div class=\"progress\">\n                        <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\">\n                            <span class=\"sr-only\">60% Complete</span>\n                        </div>\n                    </div>\n\n                    <div class=\"progress\">\n                        <div class=\"progress-bar progress-bar-success\" style=\"width: 35%\">\n                            <span class=\"sr-only\">35% Complete (success)</span>\n                        </div>\n                        <div class=\"progress-bar progress-bar-warning\" style=\"width: 20%\">\n                            <span class=\"sr-only\">20% Complete (warning)</span>\n                        </div>\n                        <div class=\"progress-bar progress-bar-danger\" style=\"width: 10%\">\n                            <span class=\"sr-only\">10% Complete (danger)</span>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-6\">\n                    <legend>Sliders</legend>\n                    <nouislider [connect]=\"false\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"simpleSlider\" [tooltips]=\"true\"></nouislider>\n                    <br>\n                    <nouislider [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"true\"></nouislider>\n                </div>\n\n            </div>\n\n        </div>\n    </div> <!-- end card -->\n\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/regularforms/regularforms.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/regularforms/regularforms.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n\n                <div class=\"card\">\n                    <div class=\"header\">Stacked Form</div>\n                    <div class=\"content\">\n                        <form method=\"#\" action=\"#\">\n                            <div class=\"form-group\">\n                                <label>Email address</label>\n                                <input type=\"email\" placeholder=\"Enter email\" class=\"form-control\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Password</label>\n                                <input type=\"password\" placeholder=\"Password\" class=\"form-control\">\n                            </div>\n                            <div class=\"form-group\">\n                                <div class=\"checkbox\">\n                                    <input id=\"checkbox21\" type=\"checkbox\" checked=\"\">\n                                    <label for=\"checkbox21\">\n                                        Subscribe to newsletter\n                                    </label>\n                                </div>\n                            </div>\n\n\n                            <button type=\"submit\" class=\"btn btn-fill btn-info\">Submit</button>\n                        </form>\n                    </div>\n                </div> <!-- end card -->\n\n            </div> <!--  end col-md-6  -->\n\n            <div class=\"col-md-6\">\n\n                <div class=\"card\">\n                    <div class=\"header\">Horizontal Form</div>\n                    <div class=\"content\">\n                        <form class=\"form-horizontal\">\n                            <div class=\"form-group\">\n                                <label class=\"col-md-3 control-label\">Email</label>\n                                <div class=\"col-md-9\">\n                                    <input type=\"email\" placeholder=\"Email\" class=\"form-control\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-md-3 control-label\">Password</label>\n                                <div class=\"col-md-9\">\n                                    <input type=\"password\" placeholder=\"Password\" class=\"form-control\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-md-3\"></label>\n                                <div class=\"col-md-9\">\n                                    <div class=\"checkbox\">\n                                        <input id=\"checkbox20\" type=\"checkbox\" unchecked>\n                                        <label for=\"checkbox20\">\n                                            Remember Me\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label class=\"col-md-3\"></label>\n                                <div class=\"col-md-9\">\n                                    <button type=\"submit\" class=\"btn btn-fill btn-info\">Sign in</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div> <!-- end card -->\n\n            </div> <!--  end col-md-6  -->\n\n            <div class=\"col-md-12\">\n\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <legend>Form Elements</legend>\n                    </div>\n                    <div class=\"content\">\n                        <form method=\"get\" action=\"/\" class=\"form-horizontal\">\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">With help</label>\n                                    <div class=\"col-sm-10\">\n                                        <input type=\"text\" class=\"form-control\">\n                                        <span class=\"help-block\">A block of help text that breaks onto a new line.</span>\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">Password</label>\n                                    <div class=\"col-sm-10\">\n                                        <input type=\"password\" name=\"password\" class=\"form-control\">\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">Placeholder</label>\n                                    <div class=\"col-sm-10\">\n                                        <input type=\"text\" placeholder=\"placeholder\" class=\"form-control\">\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">Disabled</label>\n                                    <div class=\"col-sm-10\">\n                                        <input type=\"text\" placeholder=\"Disabled input here...\" disabled=\"\" class=\"form-control\">\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">Static control</label>\n                                    <div class=\"col-sm-10\">\n                                        <p class=\"form-control-static\">hello@creative-tim.com</p>\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">Checkboxes and radios</label>\n                                    <div class=\"col-sm-10\">\n                                        <div class=\"checkbox\">\n                                            <input id=\"checkbox10\" type=\"checkbox\">\n                                            <label for=\"checkbox10\">\n                                                First Checkbox\n                                            </label>\n                                        </div>\n\n                                        <div class=\"checkbox\">\n                                            <input id=\"checkbox11\" type=\"checkbox\">\n                                            <label for=\"checkbox11\">\n                                                Second Checkbox\n                                            </label>\n                                        </div>\n\n                                        <div class=\"radio\">\n                                            <input type=\"radio\" name=\"radio10\" id=\"radio5\" value=\"option5\" checked=\"\">\n                                            <label for=\"radio5\">\n                                                First Radio\n                                            </label>\n                                        </div>\n\n                                        <div class=\"radio\">\n                                            <input type=\"radio\" name=\"radio10\" id=\"radio6\" value=\"option6\">\n                                            <label for=\"radio6\">\n                                                Second Radio\n                                            </label>\n                                        </div>\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                   <label class=\"col-sm-2 control-label\">Inline checkboxes</label>\n                                   <div class=\"col-sm-10\">\n                                       <div class=\"checkbox checkbox-inline\">\n                                           <input id=\"checkbox13\" type=\"checkbox\">\n                                           <label for=\"checkbox13\">\n                                               a\n                                           </label>\n                                       </div>\n\n                                       <div class=\"checkbox checkbox-inline\">\n                                           <input id=\"checkbox15\" type=\"checkbox\">\n                                           <label for=\"checkbox15\">\n                                               b\n                                           </label>\n                                       </div>\n\n                                       <div class=\"checkbox checkbox-inline\">\n                                           <input id=\"checkbox19\" type=\"checkbox\">\n                                           <label for=\"checkbox19\">\n                                               c\n                                           </label>\n                                       </div>\n                                   </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <legend>Input Variants</legend>\n\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">Custom Checkboxes &amp; radios</label>\n                                    <div class=\"col-sm-4 col-sm-offset-1\">\n                                        <div class=\"checkbox\">\n                                            <input id=\"checkbox1\" type=\"checkbox\">\n                                            <label for=\"checkbox1\">\n                                                Unchecked\n                                            </label>\n                                        </div>\n                                        <div class=\"checkbox\">\n                                            <input id=\"checkbox2\" type=\"checkbox\" checked=\"\">\n                                            <label for=\"checkbox2\">\n                                                Checked\n                                            </label>\n                                        </div>\n                                        <div class=\"checkbox\">\n                                            <input id=\"checkbox3\" type=\"checkbox\" disabled=\"\">\n                                            <label for=\"checkbox3\">\n                                                Disabled unchecked\n                                            </label>\n                                        </div>\n                                        <div class=\"checkbox\">\n                                            <input id=\"checkbox4\" type=\"checkbox\" checked=\"\" disabled=\"\">\n                                            <label for=\"checkbox4\">\n                                                Disabled checked\n                                            </label>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-sm-5\">\n                                        <div class=\"radio\">\n                                            <input type=\"radio\" name=\"radio1\" id=\"radio1\" value=\"option1\">\n                                            <label for=\"radio1\">\n                                                Radio is off\n                                            </label>\n                                        </div>\n\n                                        <div class=\"radio\">\n                                            <input type=\"radio\" name=\"radio1\" id=\"radio2\" value=\"option2\" checked=\"\">\n                                            <label for=\"radio2\">\n                                                Radio is on\n                                            </label>\n                                        </div>\n\n                                        <div class=\"radio\">\n                                            <input type=\"radio\" name=\"radio3\" id=\"radio3\" value=\"option3\" disabled=\"\">\n                                            <label for=\"radio3\">\n                                                Disabled radio is off\n                                            </label>\n                                        </div>\n\n                                        <div class=\"radio\">\n                                            <input type=\"radio\" name=\"radio4\" id=\"radio4\" value=\"option4\" checked=\"\" disabled=\"\">\n                                            <label for=\"radio4\">\n                                                Disabled radio is on\n                                            </label>\n                                        </div>\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">Input with success</label>\n                                    <div class=\"col-sm-10\">\n                                        <input type=\"text\" class=\"form-control valid\">\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">Input with error</label>\n                                    <div class=\"col-sm-10\">\n                                        <input type=\"text\" class=\"form-control error\">\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">Column sizing</label>\n                                    <div class=\"col-sm-10\">\n                                        <div class=\"row\">\n                                            <div class=\"col-md-3\">\n                                                <input type=\"text\" placeholder=\".col-md-3\" class=\"form-control\">\n                                            </div>\n\n                                            <div class=\"col-md-4\">\n                                                <input type=\"text\" placeholder=\".col-md-4\" class=\"form-control\">\n                                            </div>\n\n                                            <div class=\"col-md-5\">\n                                                <input type=\"text\" placeholder=\".col-md-5\" class=\"form-control\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">Input groups</label>\n                                    <div class=\"col-sm-3\">\n                                        <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">@</span>\n                                            <input type=\"text\" placeholder=\"Username\" class=\"form-control\">\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-sm-3\">\n                                        <div class=\"input-group\">\n                                            <input type=\"text\" class=\"form-control\">\n                                            <span class=\"input-group-addon\">.00</span>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">$</span>\n                                            <input type=\"text\" class=\"form-control\">\n                                            <span class=\"input-group-addon\">.00</span>\n                                        </div>\n                                    </div>\n                                </div>\n                             </fieldset>\n                        </form>\n\n                    </div>\n                </div>  <!-- end card -->\n\n            </div> <!-- end col-md-12 -->\n        </div> <!-- end row -->\n\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/validationforms/validationforms.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/validationforms/validationforms.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <form #f=\"ngForm\" novalidate (ngSubmit)=\"save(f.value, f.valid)\">\n\n                        <div class=\"header\">\n\n                                Register Form\n\n                        </div>\n                        <div class=\"content\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"\">Email Address:\n                                    <span class=\"star\">*</span>\n                                </label>\n                                <input type=\"email\" class=\"form-control\" name=\"email\" [ngModel]=\"register.email\"\n                                  required  #email=\"ngModel\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\">\n                                <small [hidden]=\"email.valid || (email.pristine && !f.submitted)\" class=\"text-danger\">\n                                  Email is required and format should be <i>john@doe.com</i>.\n                                </small>\n                            </div>\n                            <div class=\"form-group\">\n                                <label  for=\"\" class=\"control-label\">Password\n                                    <span class=\"star\">*</span>\n                                </label>\n                                <input type=\"password\" class=\"form-control\" name=\"password\" [ngModel]=\"register.password\"\n                                  required validateEqual=\"confirmPassword\" reverse=\"true\" #password=\"ngModel\">\n                                <small [hidden]=\"password.valid || (password.pristine && !f.submitted)\" class=\"text-danger\">\n                                  Password is required\n                                </small>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"\" class=\"control-label\">Confirm Password\n                                    <span class=\"star\">*</span>\n                                </label>\n\n                                <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" [ngModel]=\"register.confirmPassword\"\n                                  required validateEqual=\"password\" reverse=\"false\" #confirmPassword=\"ngModel\">\n                                <small [hidden]=\"confirmPassword.valid || (confirmPassword.pristine && !f.submitted)\" class=\"text-danger\">\n                                  Password mismatch\n                                </small>\n                            </div>\n                            <div class=\"category\"><span class=\"star\">*</span> Required fields</div>\n                        </div>\n                        <div class=\"footer\">\n                            <button type=\"submit\" class=\"btn btn-info btn-fill pull-right\">Register</button>\n                            <div class=\"form-group pull-left\">\n                                <div class=\"checkbox\">\n                                    <input id=\"checkbox25\" type=\"checkbox\" [ngModel] >\n                                    <label for=\"checkbox25\">\n                                        Subscribe to newsletter\n                                    </label>\n                                </div>\n                            </div>\n                            <div class=\"clearfix\"></div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <form #f1=\"ngForm\" novalidate (ngSubmit)=\"save1(f1.value, f1.valid)\">\n                        <div class=\"header text-center\">\n\n                                Login Form\n\n                        </div>\n                        <div class=\"content\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"\">Email Address:\n                                    <span class=\"star\">*</span>\n                                </label>\n                                <input type=\"email\" class=\"form-control\" name=\"email\" [ngModel]=\"login.email\"\n                                  required  #email=\"ngModel\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\">\n                                <small [hidden]=\"email.valid || (email.pristine && !f1.submitted)\" class=\"text-danger\">\n                                  Email is required and format should be <i>john@doe.com</i>.\n                                </small>\n                            </div>\n                            <div class=\"form-group\">\n                                <label  for=\"\" class=\"control-label\">Password\n                                    <span class=\"star\">*</span>\n                                </label>\n                                <input type=\"password\" class=\"form-control\" name=\"password\" [ngModel]=\"login.password\"\n                                  required validateEqual=\"confirmPassword\" reverse=\"true\" #password=\"ngModel\">\n                                <small [hidden]=\"password.valid || (password.pristine && !f1.submitted)\" class=\"text-danger\">\n                                  Password is required\n                                </small>\n                            </div>\n                            <div class=\"category\">    <span class=\"star\">*</span> Required fields</div>\n                        </div>\n                        <div class=\"footer text-center\">\n                            <button type=\"submit\" class=\"btn btn-info btn-fill btn-wd\">Login</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <form #f2=\"ngForm\" class=\"form-horizontal\" novalidate (ngSubmit)=\"save2(f2.value, f2.valid)\">\n                        <div class=\"content\">\n                            <legend>Type Validation</legend>\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">\n                                        Required Text\n                                    </label>\n                                    <div class=\"col-sm-6\">\n                                        <input class=\"form-control\" type=\"text\" name=\"text\"  [ngModel]=\"typeValidation.text\"\n                                          required  #text=\"ngModel\">\n                                          <small [hidden]=\"text.valid || (text.pristine && !f2.submitted)\" class=\"text-danger\">\n                                          Text is required.\n                                          </small>\n                                    </div>\n                                    <div class=\"col-sm-4\"><code>required</code></div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">\n                                        Email\n                                    </label>\n                                    <div class=\"col-sm-6\">\n                                        <input type=\"email\" class=\"form-control\" name=\"email\" [ngModel]=\"typeValidation.email\"\n                                          required  #email=\"ngModel\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\">\n                                        <small [hidden]=\"email.valid || (email.pristine && !f2.submitted)\" class=\"text-danger\">\n                                          Email is required and format should be <i>john@doe.com</i>.\n                                        </small>\n                                    </div>\n                                    <div class=\"col-sm-4\"><code>email=\"true\"</code></div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">\n                                        Number\n                                    </label>\n                                    <div class=\"col-sm-6\">\n                                        <input class=\"form-control\" type=\"number\" name=\"number\" number=\"true\" [ngModel]=\"typeValidation.number\"\n                                          required  #number=\"ngModel\">\n                                    </div>\n                                    <div class=\"col-sm-4\"><code>number=\"true\"</code></div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">\n                                        Url\n                                    </label>\n                                    <div class=\"col-sm-6\">\n                                        <input class=\"form-control\" type=\"text\" id=\"url\" required pattern=\"https?://.+\" [(ngModel)]=\"typeValidation.url\" name=\"url\" #url=\"ngModel\">\n                                          <small [hidden]=\"url.valid || (url.pristine && !f2.submitted)\" class=\"text-danger\">\n                                            Must be a valid URL!\n                                          </small>\n                                    </div>\n                                    <div class=\"col-sm-4\"><code>url=\"true\"</code></div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group column-sizing\">\n                                    <label class=\"col-sm-2 control-label\">\n                                        Equal to\n                                    </label>\n                                    <div class=\"col-sm-3\">\n                                        <input type=\"text\" class=\"form-control\" name=\"idSource\" [ngModel]=\"typeValidation.idSource\" placeholder=\"#idSource\"\n                                          required validateEqual=\"idDestination\" reverse=\"true\" #idSource=\"ngModel\">\n                                        <small [hidden]=\"idSource.valid || (idSource.pristine && !f2.submitted)\" class=\"text-danger\">\n                                          IdSource is required\n                                        </small>\n                                    </div>\n                                    <div class=\"col-sm-3\">\n                                        <input type=\"text\" class=\"form-control\" name=\"idDestination\" [ngModel]=\"typeValidation.idDestination\" placeholder=\"#idDestination\"\n                                          required validateEqual=\"idSource\" reverse=\"false\" #idDestination=\"ngModel\">\n                                        <small [hidden]=\"idDestination.valid || (idDestination.pristine && !f2.submitted)\" class=\"text-danger\">\n                                          IdSource mismatch!\n                                        </small>\n                                    </div>\n                                    <div class=\"col-sm-4\"><code>equalTo=\"#idSource\"</code>\n                                    </div>\n                                </div>\n                            </fieldset>\n                        </div>\n                        <div class=\"footer text-center\">\n                            <button type=\"submit\" class=\"btn btn-info btn-fill\">Validate Inputs</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/wizard/wizard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/wizard/wizard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-8 col-md-offset-2\">\n            <div class=\"card card-wizard\" id=\"wizardCard\">\n                <form [formGroup]=\"type\" id=\"wizardForm\" method=\"\" action=\"\">\n\n                <div class=\"header text-center\">\n                    <h3 class=\"title\">Awesome Wizard</h3>\n                    <p class=\"category\">Split a complicated flow in multiple steps</p>\n                </div>\n\n                <div class=\"content\">\n                    <ul class=\"nav\">\n                        <li><a href=\"#tab1\" data-toggle=\"tab\">First Tab</a></li>\n                        <li><a href=\"#tab2\" data-toggle=\"tab\">Second Tab</a></li>\n                        <li><a href=\"#tab3\" data-toggle=\"tab\">Third Tab</a></li>\n                    </ul>\n\n                    <div class=\"tab-content\">\n                        <div class=\"tab-pane\" id=\"tab1\">\n                            <h5 class=\"text-center\">Please tell us more about yourself.</h5>\n                            <div class=\"row\">\n                                <div class=\"col-md-5 col-md-offset-1\">\n                                    <div class=\"form-group\" [ngClass]=\"displayFieldCss(type, 'firstName')\">\n                                        <label class=\"control-label\">First Name</label>\n                                        <input class=\"form-control\"\n                                               type=\"text\"\n                                               name=\"firstname\"\n                                               placeholder=\"ex: Mike\"\n                                               formControlName=\"firstName\"\n                                        />\n                                    </div>\n                                </div>\n                                <div class=\"col-md-5\">\n                                    <div class=\"form-group\" [ngClass]=\"displayFieldCss(type, 'lastName')\">\n                                        <label class=\"control-label\">Last Name</label>\n                                        <input class=\"form-control\"\n                                               type=\"text\"\n                                               name=\"lastname\"\n                                               required=\"true\"\n                                               placeholder=\"ex: Andrew\"\n                                               formControlName=\"lastName\"\n                                        />\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-10 col-md-offset-1\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\">Email<span class=\"star\">*</span></label>\n                                        <input class=\"form-control\"\n                                               type=\"text\"\n                                               name=\"email\"\n                                               email=\"true\"\n                                               placeholder=\"ex: hello@creative-tim.com\"\n                                               formControlName=\"email\"\n                                        />\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n\n                        <div class=\"tab-pane\" id=\"tab2\">\n                            <h5 class=\"text-center\">Please give us more details about your platform.</h5>\n                            <div class=\"row\">\n                                <div class=\"col-md-10 col-md-offset-1\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\">Your Website<span class=\"star\">*</span></label>\n                                        <input class=\"form-control\"\n                                               type=\"text\"\n                                               name=\"website\"\n                                               url=\"true\"\n                                               placeholder=\"ex: http://www.creative-tim.com\"\n                                        />\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-5 col-md-offset-1\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\">Framework Type</label>\n                                        <input class=\"form-control\"\n                                               type=\"text\"\n                                               name=\"framework\"\n                                               placeholder=\"ex: http://www.creative-tim.com\"\n                                        />\n                                    </div>\n                                </div>\n\n                                <div class=\"col-md-5\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\">Language<span class=\"star\">*</span></label>\n\n                                        <!--     IMPORTANT! - the \"bootstrap select picker\" is not compatible with jquery.validation.js, that's why we use the \"default select\" inside this wizard. We will try to contact the guys who are responsibble for the \"bootstrap select picker\" to find a solution. Thank you for your patience.\n                                         -->\n\n                                        <select name=\"cities\" class=\"form-control\">\n                                            <option selected=\"\" disabled=\"\">- language -</option>\n                                            <option value=\"ms\">Bahasa Melayu</option>\n                                            <option value=\"ca\">Català</option>\n                                            <option value=\"da\">Dansk</option>\n                                            <option value=\"de\">Deutsch</option>\n                                            <option value=\"en\">English</option>\n                                            <option value=\"es\">Español</option>\n                                            <option value=\"el\">Eλληνικά</option>\n                                            <option value=\"fr\">Français</option>\n                                            <option value=\"it\">Italiano</option>\n                                            <option value=\"hu\">Magyar</option>\n                                            <option value=\"nl\">Nederlands</option>\n                                            <option value=\"no\">Norsk</option>\n                                            <option value=\"pl\">Polski</option>\n                                            <option value=\"pt\">Português</option>\n                                            <option value=\"fi\">Suomi</option>\n                                            <option value=\"sv\">Svenska</option>\n                                            <option value=\"tr\">Türkçe</option>\n                                            <option value=\"is\">Íslenska</option>\n                                            <option value=\"cs\">Čeština</option>\n                                            <option value=\"ru\">Русский</option>\n                                            <option value=\"th\">ภาษาไทย</option>\n                                            <option value=\"zh\">中文 (简体)</option>\n                                            <option value=\"zh-TW\">中文 (繁體)</option>\n                                            <option value=\"ja\">日本語</option>\n                                            <option value=\"ko\">한국어</option>\n                                        </select>\n\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-5 col-md-offset-1\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\">Bootstrap Version</label>\n\n                                        <!--     IMPORTANT! - the \"bootstrap select picker\" is not compatible with jquery.validation.js, that's why we use the \"default select\" inside this wizard. We will try to contact the guys who are responsibble for the \"bootstrap select picker\" to find a solution. Thank you for your patience.\n                                         -->\n\n                                        <select name=\"cities\" class=\"form-control\">\n                                            <option selected=\"\" disabled=\"\">- version -</option>\n                                            <option value=\"1.1\">Bootstrap 1.1</option>\n                                            <option value=\"2.0\">Bootstrap 2.0</option>\n                                            <option value=\"3.0\">Bootstrap 3.0</option>\n                                            <option value=\"4.0\">Bootstrap 4.0(alpha)</option>\n                                        </select>\n\n                                    </div>\n                                </div>\n\n                                <div class=\"col-md-5\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\">Price</label>\n                                        <input class=\"form-control\"\n                                               type=\"text\"\n                                               name=\"price\"\n                                               placeholder=\"ex: 19.00\"\n                                        />\n                                    </div>\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                        <div class=\"tab-pane\" id=\"tab3\">\n                            <h2 class=\"text-center text-space\">Yuhuuu! <br><small> Click on \"<b>Finish</b>\" to join our community</small></h2>\n                        </div>\n\n                    </div>\n                </div>\n\n                <div class=\"footer\">\n                    <button type=\"button\" class=\"btn btn-default btn-fill btn-wd btn-back pull-left\">Back</button>\n\n                    <button type=\"button\" class=\"btn btn-info btn-fill btn-wd btn-next pull-right\">Next</button>\n                    <button type=\"button\" class=\"btn btn-info btn-fill btn-wd btn-finish pull-right\" click=\"onFinishWizard()\">Finish</button>\n\n                    <div class=\"clearfix\"></div>\n                </div>\n                </form>\n\n            </div>\n        </div>\n    </div>\n\n</div>\n</div>\n");

/***/ }),

/***/ "./src/app/forms/equal-validator.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/forms/equal-validator.directive.ts ***!
  \****************************************************/
/*! exports provided: EqualValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqualValidator", function() { return EqualValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = /** @class */ (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    EqualValidator_1 = EqualValidator;
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false
            });
        }
        return null;
    };
    var EqualValidator_1;
    EqualValidator.ctorParameters = function () { return [
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['validateEqual',] }] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['reverse',] }] }
    ]; };
    EqualValidator = EqualValidator_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return EqualValidator_1; }), multi: true }
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('validateEqual')),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('reverse')),
        __metadata("design:paramtypes", [String, String])
    ], EqualValidator);
    return EqualValidator;
}());



/***/ }),

/***/ "./src/app/forms/extendedforms/extendedforms.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/forms/extendedforms/extendedforms.component.ts ***!
  \****************************************************************/
/*! exports provided: ExtendedFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendedFormsComponent", function() { return ExtendedFormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ExtendedFormsComponent = /** @class */ (function () {
    function ExtendedFormsComponent() {
        this.regularItems = ['Pizza', 'Pasta', 'Parmesan'];
        this.filledItems = ['Pizza', 'Pasta', 'Parmesan'];
        this.simpleSlider = 40;
        this.doubleSlider = [20, 60];
        this.state_default = true;
        this.state_plain = true;
        this.state_with_icons = true;
    }
    ExtendedFormsComponent.prototype.ngOnInit = function () {
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
        //  Init Bootstrap Select Picker
        if ($(".selectpicker").length != 0) {
            $(".selectpicker").selectpicker({
                iconBase: "fa",
                tickIcon: "fa-check"
            });
        }
        $('.datetimepicker').datetimepicker({
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            }
        });
        $('.datepicker').datetimepicker({
            format: 'MM/DD/YYYY',
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            }
        });
        $('.timepicker').datetimepicker({
            //          format: 'H:mm',    // use this format if you want the 24hours timepicker
            format: 'h:mm A',
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            }
        });
    };
    ExtendedFormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'extendedforms-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./extendedforms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/extendedforms/extendedforms.component.html")).default
        })
    ], ExtendedFormsComponent);
    return ExtendedFormsComponent;
}());



/***/ }),

/***/ "./src/app/forms/forms.module.ts":
/*!***************************************!*\
  !*** ./src/app/forms/forms.module.ts ***!
  \***************************************/
/*! exports provided: Forms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forms", function() { return Forms; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _equal_validator_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./equal-validator.directive */ "./src/app/forms/equal-validator.directive.ts");
/* harmony import */ var _lbd_lbd_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lbd/lbd.module */ "./src/app/lbd/lbd.module.ts");
/* harmony import */ var _forms_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms.routing */ "./src/app/forms/forms.routing.ts");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/fesm5/ngx-chips.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _extendedforms_extendedforms_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./extendedforms/extendedforms.component */ "./src/app/forms/extendedforms/extendedforms.component.ts");
/* harmony import */ var _regularforms_regularforms_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./regularforms/regularforms.component */ "./src/app/forms/regularforms/regularforms.component.ts");
/* harmony import */ var _validationforms_validationforms_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./validationforms/validationforms.component */ "./src/app/forms/validationforms/validationforms.component.ts");
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./wizard/wizard.component */ "./src/app/forms/wizard/wizard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var Forms = /** @class */ (function () {
    function Forms() {
    }
    Forms = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_forms_routing__WEBPACK_IMPORTED_MODULE_6__["FormsRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_7__["TagInputModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_8__["NouisliderModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_9__["JwBootstrapSwitchNg2Module"],
                _lbd_lbd_module__WEBPACK_IMPORTED_MODULE_5__["LbdModule"]
            ],
            declarations: [
                _extendedforms_extendedforms_component__WEBPACK_IMPORTED_MODULE_10__["ExtendedFormsComponent"],
                _regularforms_regularforms_component__WEBPACK_IMPORTED_MODULE_11__["RegularFormsComponent"],
                _validationforms_validationforms_component__WEBPACK_IMPORTED_MODULE_12__["ValidationFormsComponent"],
                _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_13__["WizardComponent"],
                _equal_validator_directive__WEBPACK_IMPORTED_MODULE_4__["EqualValidator"]
            ]
        })
    ], Forms);
    return Forms;
}());



/***/ }),

/***/ "./src/app/forms/forms.routing.ts":
/*!****************************************!*\
  !*** ./src/app/forms/forms.routing.ts ***!
  \****************************************/
/*! exports provided: FormsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRoutes", function() { return FormsRoutes; });
/* harmony import */ var _extendedforms_extendedforms_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extendedforms/extendedforms.component */ "./src/app/forms/extendedforms/extendedforms.component.ts");
/* harmony import */ var _regularforms_regularforms_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regularforms/regularforms.component */ "./src/app/forms/regularforms/regularforms.component.ts");
/* harmony import */ var _validationforms_validationforms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validationforms/validationforms.component */ "./src/app/forms/validationforms/validationforms.component.ts");
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wizard/wizard.component */ "./src/app/forms/wizard/wizard.component.ts");




var FormsRoutes = [
    {
        path: '',
        children: [{
                path: 'regular',
                component: _regularforms_regularforms_component__WEBPACK_IMPORTED_MODULE_1__["RegularFormsComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'extended',
                component: _extendedforms_extendedforms_component__WEBPACK_IMPORTED_MODULE_0__["ExtendedFormsComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'validation',
                component: _validationforms_validationforms_component__WEBPACK_IMPORTED_MODULE_2__["ValidationFormsComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'wizard',
                component: _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_3__["WizardComponent"]
            }]
    }
];


/***/ }),

/***/ "./src/app/forms/regularforms/regularforms.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forms/regularforms/regularforms.component.ts ***!
  \**************************************************************/
/*! exports provided: RegularFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularFormsComponent", function() { return RegularFormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var RegularFormsComponent = /** @class */ (function () {
    function RegularFormsComponent() {
    }
    RegularFormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'regularforms-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./regularforms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/regularforms/regularforms.component.html")).default
        })
    ], RegularFormsComponent);
    return RegularFormsComponent;
}());



/***/ }),

/***/ "./src/app/forms/validationforms/validationforms.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/forms/validationforms/validationforms.component.ts ***!
  \********************************************************************/
/*! exports provided: ValidationFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationFormsComponent", function() { return ValidationFormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ValidationFormsComponent = /** @class */ (function () {
    function ValidationFormsComponent() {
    }
    ValidationFormsComponent.prototype.ngOnInit = function () {
        this.register = {
            email: '',
            password: '',
            confirmPassword: ''
        };
        this.login = {
            email: '',
            password: ''
        };
        this.typeValidation = {
            text: '',
            email: '',
            idSource: '',
            idDestination: '',
            url: ''
        };
    };
    ValidationFormsComponent.prototype.save = function (model, isValid) {
        // call API to save customer
        if (isValid) {
            console.log(model, isValid);
        }
    };
    ValidationFormsComponent.prototype.save1 = function (model, isValid) {
        // call API to save customer
        if (isValid) {
            console.log(model, isValid);
        }
    };
    ValidationFormsComponent.prototype.save2 = function (model, isValid) {
        // call API to save customer
        if (isValid) {
            console.log(model, isValid);
        }
    };
    ValidationFormsComponent.prototype.onSubmit = function (value) {
        console.log(value);
    };
    ValidationFormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'validationforms-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./validationforms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/validationforms/validationforms.component.html")).default
        })
    ], ValidationFormsComponent);
    return ValidationFormsComponent;
}());



/***/ }),

/***/ "./src/app/forms/wizard/wizard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/forms/wizard/wizard.component.ts ***!
  \**************************************************/
/*! exports provided: WizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardComponent", function() { return WizardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var WizardComponent = /** @class */ (function () {
    function WizardComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    WizardComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).touched;
    };
    WizardComponent.prototype.displayFieldCss = function (form, field) {
        return {
            'has-error': this.isFieldValid(form, field),
            'has-success': this.isFieldValid(form, field)
        };
    };
    WizardComponent.prototype.onFinishWizard = function () {
        //here you can do something, sent the form to server via ajax and show a success message with swal
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()("Good job!", "You clicked the finish button!", "success");
    };
    WizardComponent.prototype.ngOnInit = function () {
        this.type = this.formBuilder.group({
            // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
        });
        // you can also use the nav-pills-[blue | azure | green | orange | red] for a different color of wizard
        // Code for the Validator
        var $validator = $('.card-wizard form').validate({
            rules: {
                firstname: {
                    required: true,
                    minlength: 3
                },
                lastname: {
                    required: true,
                    minlength: 3
                },
                email: {
                    required: true,
                    minlength: 3,
                }
            },
            highlight: function (element) {
                $(element).parent().addClass('has-error').removeClass('has-success');
            },
            success: function (element) {
                $(element).parent().addClass('has-success').removeClass('has-error');
            }
        });
        $('#wizardCard').bootstrapWizard({
            tabClass: 'nav nav-pills',
            nextSelector: '.btn-next',
            previousSelector: '.btn-back',
            lastSelector: '.btn-finish',
            onNext: function (tab, navigation, index) {
                var $valid = $('.card-wizard form').valid();
                if (!$valid) {
                    $validator.focusInvalid();
                    return false;
                }
            },
            onInit: function (tab, navigation, index) {
                //check number of tabs and fill the entire row
                var $total = navigation.find('li').length;
                var $width = 100 / $total;
                var $display_width = $(document).width();
                if ($display_width < 600 && $total > 3) {
                    $width = 50;
                }
                navigation.find('li').css('width', $width + '%');
            },
            onTabClick: function (tab, navigation, index) {
                // Disable the posibility to click on tabs
                return false;
            },
            onTabShow: function (tab, navigation, index) {
                var $total = navigation.find('li').length;
                var $current = index + 1;
                var wizard = navigation.closest('.card-wizard');
                // If it's the last tab then hide the last button and show the finish instead
                if ($current >= $total) {
                    $(wizard).find('.btn-next').hide();
                    $(wizard).find('.btn-finish').show();
                }
                else if ($current == 1) {
                    $(wizard).find('.btn-back').hide();
                }
                else {
                    $(wizard).find('.btn-back').show();
                    $(wizard).find('.btn-next').show();
                    $(wizard).find('.btn-finish').hide();
                }
            },
            onLast: function (tab, navigation, index) {
                //here you can do something, sent the form to server via ajax and show a success message with swal
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()("Good job!", "You clicked the finish button!", "success");
            }
        });
    };
    WizardComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    WizardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'wizard-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./wizard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/wizard/wizard.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], WizardComponent);
    return WizardComponent;
}());



/***/ })

}]);
//# sourceMappingURL=forms-forms-module.js.map