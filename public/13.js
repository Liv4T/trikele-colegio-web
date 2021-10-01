(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/@syncfusion/ej2-vue-buttons/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-vue-buttons/index.js ***!
  \***********************************************************/
/*! exports provided: wrapperInitialize, getTextNode, destroy, preRender, createCheckBox, rippleMouseHandler, setHiddenInput, buttonObserver, Button, CheckBox, RadioButton, Switch, classNames, ChipList, Chip, ButtonComponent, ButtonPlugin, CheckBoxComponent, CheckBoxPlugin, RadioButtonComponent, RadioButtonPlugin, SwitchComponent, SwitchPlugin, ChipsDirective, ChipDirective, ChipsPlugin, ChipPlugin, ChipListComponent, ChipListPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ "./node_modules/@syncfusion/ej2-vue-buttons/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapperInitialize", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["wrapperInitialize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTextNode", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["getTextNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["destroy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preRender", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["preRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCheckBox", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["createCheckBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rippleMouseHandler", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["rippleMouseHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setHiddenInput", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["setHiddenInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buttonObserver", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["buttonObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckBox", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["CheckBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButton", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["RadioButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["Switch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classNames", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["classNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChipList", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["ChipList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chip", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["Chip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["ButtonComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonPlugin", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["ButtonPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckBoxComponent", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["CheckBoxComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckBoxPlugin", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["CheckBoxPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtonComponent", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["RadioButtonComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtonPlugin", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["RadioButtonPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["SwitchComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchPlugin", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["SwitchPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChipsDirective", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["ChipsDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChipDirective", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["ChipDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChipsPlugin", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["ChipsPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChipPlugin", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["ChipPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChipListComponent", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["ChipListComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChipListPlugin", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["ChipListPlugin"]; });

/**
 * index
 */



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-vue-buttons/src/button/button.component.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-vue-buttons/src/button/button.component.js ***!
  \*********************************************************************************/
/*! exports provided: properties, modelProps, ButtonComponent, ButtonPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "properties", function() { return properties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modelProps", function() { return modelProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonPlugin", function() { return ButtonPlugin; });
/* harmony import */ var _syncfusion_ej2_vue_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-base */ "./node_modules/@syncfusion/ej2-vue-base/index.js");
/* harmony import */ var _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-buttons */ "./node_modules/@syncfusion/ej2-buttons/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var properties = ['content', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'isPrimary', 'isToggle', 'locale', 'created'];
var modelProps = [];
/**
 * Represents the Essential JS 2 VueJS Button Component
 * ```html
 * <ejs-button>Button</ejs-button>
 * ```
 */
var ButtonComponent = /** @class */ (function (_super) {
    __extends(ButtonComponent, _super);
    function ButtonComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1__["Button"]({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    ButtonComponent.prototype.setProperties = function (prop, muteOnChange) {
        var _this = this;
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map(function (key) {
                _this.models.map(function (model) {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        _this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    };
    ButtonComponent.prototype.render = function (createElement) {
        return createElement('button', this.$slots.default);
    };
    ButtonComponent.prototype.click = function () {
        return this.ej2Instances.click();
    };
    ButtonComponent.prototype.focusIn = function () {
        return this.ej2Instances.focusIn();
    };
    ButtonComponent = __decorate([
        Object(_syncfusion_ej2_vue_base__WEBPACK_IMPORTED_MODULE_0__["EJComponentDecorator"])({
            props: properties
        })
    ], ButtonComponent);
    return ButtonComponent;
}(_syncfusion_ej2_vue_base__WEBPACK_IMPORTED_MODULE_0__["ComponentBase"]));

var ButtonPlugin = {
    name: 'ejs-button',
    install: function (Vue) {
        Vue.component(ButtonPlugin.name, ButtonComponent);
    }
};


/***/ }),

/***/ "./node_modules/@syncfusion/ej2-vue-buttons/src/check-box/checkbox.component.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-vue-buttons/src/check-box/checkbox.component.js ***!
  \**************************************************************************************/
/*! exports provided: properties, modelProps, CheckBoxComponent, CheckBoxPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "properties", function() { return properties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modelProps", function() { return modelProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBoxComponent", function() { return CheckBoxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBoxPlugin", function() { return CheckBoxPlugin; });
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-base */ "./node_modules/@syncfusion/ej2-base/index.js");
/* harmony import */ var _syncfusion_ej2_vue_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-base */ "./node_modules/@syncfusion/ej2-vue-base/index.js");
/* harmony import */ var _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-buttons */ "./node_modules/@syncfusion/ej2-buttons/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var properties = ['checked', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'htmlAttributes', 'indeterminate', 'label', 'labelPosition', 'locale', 'name', 'value', 'change', 'created'];
var modelProps = ['checked', 'indeterminate'];
/**
 * Represents the Essential JS 2 VueJS CheckBox Component
 * ```html
 * <ejs-checkbox label='Default'></ejs-checkbox>
 * ```
 */
var CheckBoxComponent = /** @class */ (function (_super) {
    __extends(CheckBoxComponent, _super);
    function CheckBoxComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_2__["CheckBox"]({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    CheckBoxComponent.prototype.setProperties = function (prop, muteOnChange) {
        var _this = this;
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map(function (key) {
                _this.models.map(function (model) {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        _this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    };
    CheckBoxComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/currentView|selectedDate/) || [];
            var propKey = key[0];
            if (eventProp && key && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    };
    CheckBoxComponent.prototype.render = function (createElement) {
        return createElement('input', this.$slots.default);
    };
    CheckBoxComponent.prototype.click = function () {
        return this.ej2Instances.click();
    };
    CheckBoxComponent.prototype.focusIn = function () {
        return this.ej2Instances.focusIn();
    };
    CheckBoxComponent = __decorate([
        Object(_syncfusion_ej2_vue_base__WEBPACK_IMPORTED_MODULE_1__["EJComponentDecorator"])({
            props: properties,
            model: {
                event: 'modelchanged'
            }
        })
    ], CheckBoxComponent);
    return CheckBoxComponent;
}(_syncfusion_ej2_vue_base__WEBPACK_IMPORTED_MODULE_1__["ComponentBase"]));

var CheckBoxPlugin = {
    name: 'ejs-checkbox',
    install: function (Vue) {
        Vue.component(CheckBoxPlugin.name, CheckBoxComponent);
    }
};


/***/ }),

/***/ "./node_modules/@syncfusion/ej2-vue-buttons/src/chips/chiplist.component.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-vue-buttons/src/chips/chiplist.component.js ***!
  \**********************************************************************************/
/*! exports provided: properties, modelProps, ChipListComponent, ChipListPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "properties", function() { return properties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modelProps", function() { return modelProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipListComponent", function() { return ChipListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipListPlugin", function() { return ChipListPlugin; });
/* harmony import */ var _syncfusion_ej2_vue_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-base */ "./node_modules/@syncfusion/ej2-vue-base/index.js");
/* harmony import */ var _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-buttons */ "./node_modules/@syncfusion/ej2-buttons/index.js");
/* harmony import */ var _chips_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chips.directive */ "./node_modules/@syncfusion/ej2-vue-buttons/src/chips/chips.directive.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var properties = ['avatarIconCss', 'avatarText', 'chips', 'cssClass', 'enableDelete', 'enablePersistence', 'enableRtl', 'enabled', 'leadingIconCss', 'leadingIconUrl', 'locale', 'selectedChips', 'selection', 'text', 'trailingIconCss', 'trailingIconUrl', 'beforeClick', 'click', 'created', 'delete'];
var modelProps = [];
/**
 * Represents the Essential JS 2 VueJS ChipList Component.
 * ```html
 * <ejs-chiplist></ejs-chiplist>
 * ```
 */
var ChipListComponent = /** @class */ (function (_super) {
    __extends(ChipListComponent, _super);
    function ChipListComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = false;
        _this.tagMapper = { "e-chips": "e-chip" };
        _this.tagNameMapper = {};
        _this.ej2Instances = new _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1__["ChipList"]({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    ChipListComponent.prototype.setProperties = function (prop, muteOnChange) {
        var _this = this;
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map(function (key) {
                _this.models.map(function (model) {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        _this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    };
    ChipListComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    ChipListComponent.prototype.add = function (chipsData) {
        return this.ej2Instances.add(chipsData);
    };
    ChipListComponent.prototype.find = function (fields) {
        return this.ej2Instances.find(fields);
    };
    ChipListComponent.prototype.getSelectedChips = function () {
        return this.ej2Instances.getSelectedChips();
    };
    ChipListComponent.prototype.remove = function (fields) {
        return this.ej2Instances.remove(fields);
    };
    ChipListComponent.prototype.select = function (fields) {
        return this.ej2Instances.select(fields);
    };
    ChipListComponent = __decorate([
        Object(_syncfusion_ej2_vue_base__WEBPACK_IMPORTED_MODULE_0__["EJComponentDecorator"])({
            props: properties
        })
    ], ChipListComponent);
    return ChipListComponent;
}(_syncfusion_ej2_vue_base__WEBPACK_IMPORTED_MODULE_0__["ComponentBase"]));

var ChipListPlugin = {
    name: 'ejs-chiplist',
    install: function (Vue) {
        Vue.component(ChipListPlugin.name, ChipListComponent);
        Vue.component(_chips_directive__WEBPACK_IMPORTED_MODULE_2__["ChipPlugin"].name, _chips_directive__WEBPACK_IMPORTED_MODULE_2__["ChipDirective"]);
        Vue.component(_chips_directive__WEBPACK_IMPORTED_MODULE_2__["ChipsPlugin"].name, _chips_directive__WEBPACK_IMPORTED_MODULE_2__["ChipsDirective"]);
    }
};


/***/ }),

/***/ "./node_modules/@syncfusion/ej2-vue-buttons/src/chips/chips.directive.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-vue-buttons/src/chips/chips.directive.js ***!
  \*******************************************************************************/
/*! exports provided: ChipsDirective, ChipsPlugin, ChipDirective, ChipPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsDirective", function() { return ChipsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsPlugin", function() { return ChipsPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipDirective", function() { return ChipDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipPlugin", function() { return ChipPlugin; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _syncfusion_ej2_vue_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-base */ "./node_modules/@syncfusion/ej2-vue-base/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ChipsDirective = /** @class */ (function (_super) {
    __extends(ChipsDirective, _super);
    function ChipsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChipsDirective.prototype.render = function () {
        return;
    };
    ChipsDirective = __decorate([
        Object(_syncfusion_ej2_vue_base__WEBPACK_IMPORTED_MODULE_1__["EJComponentDecorator"])({})
    ], ChipsDirective);
    return ChipsDirective;
}(vue__WEBPACK_IMPORTED_MODULE_0___default.a));

var ChipsPlugin = {
    name: 'e-chips',
    install: function (Vue) {
        Vue.component(ChipsPlugin.name, ChipsDirective);
    }
};
/**
 * `e-chip` directive represent a chip of the Vue ChipList.
 * ```html
 * <ejs-chiplist >
 *   <e-chips>
 *    <e-chip text='chip1'></e-chip>
 *    <e-chip text='chip2'></e-chip>
 *   </e-chips>
 * </ejs-chiplist>
 * ```
 */
var ChipDirective = /** @class */ (function (_super) {
    __extends(ChipDirective, _super);
    function ChipDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChipDirective.prototype.render = function () {
        return;
    };
    ChipDirective = __decorate([
        Object(_syncfusion_ej2_vue_base__WEBPACK_IMPORTED_MODULE_1__["EJComponentDecorator"])({})
    ], ChipDirective);
    return ChipDirective;
}(vue__WEBPACK_IMPORTED_MODULE_0___default.a));

var ChipPlugin = {
    name: 'e-chip',
    install: function (Vue) {
        Vue.component(ChipPlugin.name, ChipDirective);
    }
};


/***/ }),

/***/ "./node_modules/@syncfusion/ej2-vue-buttons/src/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-vue-buttons/src/index.js ***!
  \***************************************************************/
/*! exports provided: wrapperInitialize, getTextNode, destroy, preRender, createCheckBox, rippleMouseHandler, setHiddenInput, buttonObserver, Button, CheckBox, RadioButton, Switch, classNames, ChipList, Chip, ButtonComponent, ButtonPlugin, CheckBoxComponent, CheckBoxPlugin, RadioButtonComponent, RadioButtonPlugin, SwitchComponent, SwitchPlugin, ChipsDirective, ChipDirective, ChipsPlugin, ChipPlugin, ChipListComponent, ChipListPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-buttons */ "./node_modules/@syncfusion/ej2-buttons/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapperInitialize", function() { return _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_0__["wrapperInitialize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTextNode", function() { return _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_0__["getTextNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_0__["destroy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preRender", function() { return _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_0__["preRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCheckBox", function() { return _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_0__["createCheckBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rippleMouseHandler", function() { return _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_0__["rippleMouseHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setHiddenInput", function() { return _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_0__["setHiddenInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buttonObserver", function() { return _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_0__["buttonObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckBox", function() { return _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_0__["CheckBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButton", function() { return _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_0__["RadioButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_0__["Switch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classNames", function() { return _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_0__["classNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChipList", function() { return _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_0__["ChipList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chip", function() { return _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_0__["Chip"]; });

/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button/button.component */ "./node_modules/@syncfusion/ej2-vue-buttons/src/button/button.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return _button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonPlugin", function() { return _button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonPlugin"]; });

/* harmony import */ var _check_box_checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check-box/checkbox.component */ "./node_modules/@syncfusion/ej2-vue-buttons/src/check-box/checkbox.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckBoxComponent", function() { return _check_box_checkbox_component__WEBPACK_IMPORTED_MODULE_2__["CheckBoxComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckBoxPlugin", function() { return _check_box_checkbox_component__WEBPACK_IMPORTED_MODULE_2__["CheckBoxPlugin"]; });

/* harmony import */ var _radio_button_radiobutton_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radio-button/radiobutton.component */ "./node_modules/@syncfusion/ej2-vue-buttons/src/radio-button/radiobutton.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtonComponent", function() { return _radio_button_radiobutton_component__WEBPACK_IMPORTED_MODULE_3__["RadioButtonComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtonPlugin", function() { return _radio_button_radiobutton_component__WEBPACK_IMPORTED_MODULE_3__["RadioButtonPlugin"]; });

/* harmony import */ var _switch_switch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./switch/switch.component */ "./node_modules/@syncfusion/ej2-vue-buttons/src/switch/switch.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return _switch_switch_component__WEBPACK_IMPORTED_MODULE_4__["SwitchComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchPlugin", function() { return _switch_switch_component__WEBPACK_IMPORTED_MODULE_4__["SwitchPlugin"]; });

/* harmony import */ var _chips_chips_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chips/chips.directive */ "./node_modules/@syncfusion/ej2-vue-buttons/src/chips/chips.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChipsDirective", function() { return _chips_chips_directive__WEBPACK_IMPORTED_MODULE_5__["ChipsDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChipDirective", function() { return _chips_chips_directive__WEBPACK_IMPORTED_MODULE_5__["ChipDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChipsPlugin", function() { return _chips_chips_directive__WEBPACK_IMPORTED_MODULE_5__["ChipsPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChipPlugin", function() { return _chips_chips_directive__WEBPACK_IMPORTED_MODULE_5__["ChipPlugin"]; });

/* harmony import */ var _chips_chiplist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chips/chiplist.component */ "./node_modules/@syncfusion/ej2-vue-buttons/src/chips/chiplist.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChipListComponent", function() { return _chips_chiplist_component__WEBPACK_IMPORTED_MODULE_6__["ChipListComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChipListPlugin", function() { return _chips_chiplist_component__WEBPACK_IMPORTED_MODULE_6__["ChipListPlugin"]; });










/***/ }),

/***/ "./node_modules/@syncfusion/ej2-vue-buttons/src/radio-button/radiobutton.component.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-vue-buttons/src/radio-button/radiobutton.component.js ***!
  \********************************************************************************************/
/*! exports provided: properties, modelProps, RadioButtonComponent, RadioButtonPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "properties", function() { return properties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modelProps", function() { return modelProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonComponent", function() { return RadioButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonPlugin", function() { return RadioButtonPlugin; });
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-base */ "./node_modules/@syncfusion/ej2-base/index.js");
/* harmony import */ var _syncfusion_ej2_vue_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-base */ "./node_modules/@syncfusion/ej2-vue-base/index.js");
/* harmony import */ var _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-buttons */ "./node_modules/@syncfusion/ej2-buttons/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var properties = ['checked', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'label', 'labelPosition', 'locale', 'name', 'value', 'change', 'created'];
var modelProps = ['checked'];
/**
 * Represents the Essential JS 2 VueJS RadioButton Component
 * ```html
 * <ejs-radiobutton label='Default'></ejs-radiobutton>
 * ```
 */
var RadioButtonComponent = /** @class */ (function (_super) {
    __extends(RadioButtonComponent, _super);
    function RadioButtonComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_2__["RadioButton"]({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    RadioButtonComponent.prototype.setProperties = function (prop, muteOnChange) {
        var _this = this;
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map(function (key) {
                _this.models.map(function (model) {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        _this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    };
    RadioButtonComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/currentView|selectedDate/) || [];
            var propKey = key[0];
            if (eventProp && key && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    };
    RadioButtonComponent.prototype.render = function (createElement) {
        return createElement('input', this.$slots.default);
    };
    RadioButtonComponent.prototype.click = function () {
        return this.ej2Instances.click();
    };
    RadioButtonComponent.prototype.focusIn = function () {
        return this.ej2Instances.focusIn();
    };
    RadioButtonComponent.prototype.getSelectedValue = function () {
        return this.ej2Instances.getSelectedValue();
    };
    RadioButtonComponent = __decorate([
        Object(_syncfusion_ej2_vue_base__WEBPACK_IMPORTED_MODULE_1__["EJComponentDecorator"])({
            props: properties,
            model: {
                event: 'modelchanged'
            }
        })
    ], RadioButtonComponent);
    return RadioButtonComponent;
}(_syncfusion_ej2_vue_base__WEBPACK_IMPORTED_MODULE_1__["ComponentBase"]));

var RadioButtonPlugin = {
    name: 'ejs-radiobutton',
    install: function (Vue) {
        Vue.component(RadioButtonPlugin.name, RadioButtonComponent);
    }
};


/***/ }),

/***/ "./node_modules/@syncfusion/ej2-vue-buttons/src/switch/switch.component.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-vue-buttons/src/switch/switch.component.js ***!
  \*********************************************************************************/
/*! exports provided: properties, modelProps, SwitchComponent, SwitchPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "properties", function() { return properties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modelProps", function() { return modelProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return SwitchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchPlugin", function() { return SwitchPlugin; });
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-base */ "./node_modules/@syncfusion/ej2-base/index.js");
/* harmony import */ var _syncfusion_ej2_vue_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-base */ "./node_modules/@syncfusion/ej2-vue-base/index.js");
/* harmony import */ var _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-buttons */ "./node_modules/@syncfusion/ej2-buttons/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var properties = ['checked', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'locale', 'name', 'offLabel', 'onLabel', 'value', 'change', 'created'];
var modelProps = ['checked'];
/**
 * Represents the Essential JS 2 VueJS Switch Component.
 * ```html
 * <ejs-switch></ejs-switch>
 * ```
 */
var SwitchComponent = /** @class */ (function (_super) {
    __extends(SwitchComponent, _super);
    function SwitchComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_2__["Switch"]({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    SwitchComponent.prototype.setProperties = function (prop, muteOnChange) {
        var _this = this;
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map(function (key) {
                _this.models.map(function (model) {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        _this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    };
    SwitchComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/currentView|selectedDate/) || [];
            var propKey = key[0];
            if (eventProp && key && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    };
    SwitchComponent.prototype.render = function (createElement) {
        return createElement('input', this.$slots.default);
    };
    SwitchComponent.prototype.click = function () {
        return this.ej2Instances.click();
    };
    SwitchComponent.prototype.focusIn = function () {
        return this.ej2Instances.focusIn();
    };
    SwitchComponent.prototype.toggle = function () {
        return this.ej2Instances.toggle();
    };
    SwitchComponent = __decorate([
        Object(_syncfusion_ej2_vue_base__WEBPACK_IMPORTED_MODULE_1__["EJComponentDecorator"])({
            props: properties,
            model: {
                event: 'modelchanged'
            }
        })
    ], SwitchComponent);
    return SwitchComponent;
}(_syncfusion_ej2_vue_base__WEBPACK_IMPORTED_MODULE_1__["ComponentBase"]));

var SwitchPlugin = {
    name: 'ejs-switch',
    install: function (Vue) {
        Vue.component(SwitchPlugin.name, SwitchComponent);
    }
};


/***/ })

}]);