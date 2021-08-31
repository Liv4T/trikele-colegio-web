(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[96],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/mensajes.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/mensajes.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-decoupled-document */ "./node_modules/@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_1__);
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


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(__webpack_require__(/*! vue-moment */ "./node_modules/vue-moment/dist/vue-moment.js"));
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      messages: [],
      editorData: "<p>Escribir...</p>",
      editor: _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_1___default.a,
      emessages: [],
      emisor: "",
      asunto: ""
    };
  },
  created: function created() {},
  mounted: function mounted() {
    var _this = this;

    var urlUsers = " getReceivedMessage";
    axios.get(urlUsers).then(function (response) {
      _this.messages = response.data;
      console.log(_this.messages.men);
    });
  },
  methods: {
    editMessage: function editMessage(mess) {
      var _this2 = this;

      var urlr = "getMessage/" + mess;
      axios.get(urlr).then(function (response) {
        _this2.emessages = response.data;
        _this2.emisor = _this2.emessages.emisor;
        _this2.asunto = _this2.emessages.subject;
        _this2.editorData = _this2.emessages.message;
        console.log(_this2.emessages);
      });
      $("#createMessage").modal("show");
    },
    onReady: function onReady(editor) {
      // Insert the toolbar before the editable area.
      editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/mensajes.vue?vue&type=template&id=c3ea8e82&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/mensajes.vue?vue&type=template&id=c3ea8e82& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-sm-10", attrs: { id: "crud" } }, [
        _c("div", { staticClass: "card text-center" }, [
          _c("h3", { staticClass: "card-header fondo" }, [_vm._v("Mensajes")]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "a",
              {
                staticClass: "btn btn-warning float-right",
                attrs: { href: "/redactar" }
              },
              [_vm._v("Redactar")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn btn-warning float-left",
                attrs: { href: "/enviados" }
              },
              [_vm._v("Mensajes enviados")]
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "table",
              {
                staticClass:
                  "table table-responsive-xl table-hover table-striped center"
              },
              [
                _vm._m(0),
                _vm._v(" "),
                _vm._l(_vm.messages, function(option, k) {
                  return _c("tbody", { key: k }, [
                    _c("tr", [
                      _c("td", [_vm._v(_vm._s(option.emisor))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(option.asunto))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                                    " +
                            _vm._s(
                              _vm._f("moment")(
                                option.fecha.date,
                                "dddd, MMMM Do YYYY"
                              )
                            ) +
                            "\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "float-right" }, [
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-sm",
                            staticStyle: { color: "grey" },
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.editMessage(option.id)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fa fa-eye" })]
                        )
                      ])
                    ])
                  ])
                })
              ],
              2
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "modal fade", attrs: { id: "createMessage" } },
          [
            _c("div", { staticClass: "modal-dialog modal-lg" }, [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "card" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _c("div", { staticClass: "form-group row" }, [
                        _vm._m(2),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-10" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.emisor,
                                expression: "emisor"
                              }
                            ],
                            staticClass: "input-mensaje",
                            attrs: {
                              id: "nombre",
                              name: "nombre",
                              placeholder: "Asunto",
                              disabled: ""
                            },
                            domProps: { value: _vm.emisor },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.emisor = $event.target.value
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row" }, [
                        _vm._m(3),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-10" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.asunto,
                                expression: "asunto"
                              }
                            ],
                            staticClass: "input-mensaje",
                            attrs: {
                              id: "nombre",
                              name: "nombre",
                              placeholder: "Asunto",
                              disabled: ""
                            },
                            domProps: { value: _vm.asunto },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.asunto = $event.target.value
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(4),
                      _vm._v(" "),
                      _c("ckeditor", {
                        attrs: { editor: _vm.editor },
                        on: { ready: _vm.onReady },
                        model: {
                          value: _vm.editorData,
                          callback: function($$v) {
                            _vm.editorData = $$v
                          },
                          expression: "editorData"
                        }
                      })
                    ],
                    1
                  )
                ])
              ])
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Nombre")]),
        _vm._v(" "),
        _c("th", [_vm._v("Asunto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha")]),
        _vm._v(" "),
        _c("th", [_vm._v("Acción")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "card-header fondo text-center" }, [
      _vm._v(
        "\n                                Mensaje\n                                "
      ),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_c("span", [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2" }, [
      _c("label", { staticClass: "label-mensaje", attrs: { for: "nombre" } }, [
        _vm._v("De:")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2" }, [
      _c("label", { staticClass: "label-mensaje", attrs: { for: "nombre" } }, [
        _vm._v("Asunto:")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("label", { attrs: { for: "mensaje" } }, [_vm._v("Mensaje:")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/mensajes.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/mensajes.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mensajes_vue_vue_type_template_id_c3ea8e82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mensajes.vue?vue&type=template&id=c3ea8e82& */ "./resources/js/components/mensajes.vue?vue&type=template&id=c3ea8e82&");
/* harmony import */ var _mensajes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mensajes.vue?vue&type=script&lang=js& */ "./resources/js/components/mensajes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _mensajes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mensajes_vue_vue_type_template_id_c3ea8e82___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mensajes_vue_vue_type_template_id_c3ea8e82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/mensajes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/mensajes.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/mensajes.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mensajes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./mensajes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/mensajes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mensajes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/mensajes.vue?vue&type=template&id=c3ea8e82&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/mensajes.vue?vue&type=template&id=c3ea8e82& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mensajes_vue_vue_type_template_id_c3ea8e82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./mensajes.vue?vue&type=template&id=c3ea8e82& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/mensajes.vue?vue&type=template&id=c3ea8e82&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mensajes_vue_vue_type_template_id_c3ea8e82___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mensajes_vue_vue_type_template_id_c3ea8e82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);