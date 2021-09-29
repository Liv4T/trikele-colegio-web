(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[122],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/text-emoji.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/text-emoji.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_emoji_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-emoji-picker */ "./node_modules/vue-emoji-picker/dist-module/main.js");
/* harmony import */ var vue_emoji_picker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_emoji_picker__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["foro"],
  data: function data() {
    return {
      input: "",
      search: ""
    };
  },
  components: {
    EmojiPicker: vue_emoji_picker__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  methods: {
    append: function append(emoji) {
      this.input += emoji;
    },
    getMenu: function getMenu() {
      window.location = "/showQuestion/" + this.foro;
    },
    createEvent: function createEvent() {
      var _this = this;

      var url = "/storeAnswer";
      axios.post(url, {
        //Cursos generales
        id_question: this.foro,
        body: this.input
      }).then(function (response) {
        _this.getMenu();

        toastr.success("Nueva respuesta creada exitosamente");
      })["catch"](function (error) {});
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/text-emoji.vue?vue&type=template&id=bc3fbd9e&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/text-emoji.vue?vue&type=template&id=bc3fbd9e& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "back" }, [
    _c(
      "form",
      {
        staticClass: "needs-validation",
        attrs: { novalidate: "" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.createEvent($event)
          }
        }
      },
      [
        _c("div", { staticClass: "input-group" }, [
          _c(
            "div",
            { staticClass: "wrapper" },
            [
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.input,
                    expression: "input"
                  }
                ],
                staticClass: "regular-input",
                attrs: { id: "area" },
                domProps: { value: _vm.input },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.input = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("emoji-picker", {
                attrs: { search: _vm.search },
                on: { emoji: _vm.append },
                scopedSlots: _vm._u([
                  {
                    key: "emoji-invoker",
                    fn: function(ref) {
                      var clickEvent = ref.events.click
                      return _c(
                        "div",
                        {
                          staticClass: "emoji-invoker",
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return clickEvent($event)
                            }
                          }
                        },
                        [
                          _c(
                            "svg",
                            {
                              attrs: {
                                height: "24",
                                viewBox: "0 0 24 24",
                                width: "24",
                                xmlns: "http://www.w3.org/2000/svg"
                              }
                            },
                            [
                              _c("path", {
                                attrs: { d: "M0 0h24v24H0z", fill: "none" }
                              }),
                              _vm._v(" "),
                              _c("path", {
                                attrs: {
                                  d:
                                    "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"
                                }
                              })
                            ]
                          )
                        ]
                      )
                    }
                  },
                  {
                    key: "emoji-picker",
                    fn: function(ref) {
                      var emojis = ref.emojis
                      var insert = ref.insert
                      var display = ref.display
                      return _c("div", {}, [
                        _c("div", { staticClass: "emoji-picker" }, [
                          _c("div", { staticClass: "emoji-picker__search" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.search,
                                  expression: "search"
                                },
                                { name: "focus", rawName: "v-focus" }
                              ],
                              attrs: { type: "text" },
                              domProps: { value: _vm.search },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.search = $event.target.value
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            _vm._l(emojis, function(emojiGroup, category) {
                              return _c("div", { key: category }, [
                                _c("h5", [_vm._v(_vm._s(category))]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "emojis" },
                                  _vm._l(emojiGroup, function(
                                    emoji,
                                    emojiName
                                  ) {
                                    return _c(
                                      "span",
                                      {
                                        key: emojiName,
                                        attrs: { title: emojiName },
                                        on: {
                                          click: function($event) {
                                            return insert(emoji)
                                          }
                                        }
                                      },
                                      [_vm._v(_vm._s(emoji))]
                                    )
                                  }),
                                  0
                                )
                              ])
                            }),
                            0
                          )
                        ])
                      ])
                    }
                  }
                ])
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _vm._m(0)
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c("input", {
        staticClass: "btn btn-warning",
        attrs: { type: "submit", value: "Guardar" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/text-emoji.vue":
/*!************************************************!*\
  !*** ./resources/js/components/text-emoji.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text_emoji_vue_vue_type_template_id_bc3fbd9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-emoji.vue?vue&type=template&id=bc3fbd9e& */ "./resources/js/components/text-emoji.vue?vue&type=template&id=bc3fbd9e&");
/* harmony import */ var _text_emoji_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-emoji.vue?vue&type=script&lang=js& */ "./resources/js/components/text-emoji.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _text_emoji_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _text_emoji_vue_vue_type_template_id_bc3fbd9e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _text_emoji_vue_vue_type_template_id_bc3fbd9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/text-emoji.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/text-emoji.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/text-emoji.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_text_emoji_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./text-emoji.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/text-emoji.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_text_emoji_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/text-emoji.vue?vue&type=template&id=bc3fbd9e&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/text-emoji.vue?vue&type=template&id=bc3fbd9e& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_text_emoji_vue_vue_type_template_id_bc3fbd9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./text-emoji.vue?vue&type=template&id=bc3fbd9e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/text-emoji.vue?vue&type=template&id=bc3fbd9e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_text_emoji_vue_vue_type_template_id_bc3fbd9e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_text_emoji_vue_vue_type_template_id_bc3fbd9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);