(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[151],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/proceedingsParentsComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/proceedingsParentsComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_0__["VueEditor"]
  },
  data: function data() {
    return {
      types: [{
        "id": 0,
        "name": "Adjuntar PDF"
      }, {
        "id": 1,
        "name": "Redactar el Acta"
      }],
      typeEvent: 2,
      title: "",
      body: "",
      data: "",
      parent: "",
      parents: [],
      custom_toolbar: [["bold", "italic", "underline"], [{
        list: "ordered"
      }, {
        list: "bullet"
      }]]
    };
  },
  mounted: function mounted() {
    this.getParents();
  },
  methods: {
    saveProceedings: function saveProceedings() {
      var _this = this;

      var url = "/saveProceedings";

      if (this.typeEvent == 0) {
        this.data.append("id_padre", this.parent);
        axios.post("/saveProceedingsFile", this.data).then(function (response) {}).then(function (response) {
          toastr.success("Nueva acta cargada exitosamente");

          _this.getMenu();
        })["catch"](function (err) {});
      } else {
        axios.post(url, {
          type: this.typeEvent,
          title: this.title,
          body: this.body,
          id_padre: this.parent
        }).then(function (response) {
          toastr.success("Nueva acta cargada exitosamente");

          _this.getMenu();
        })["catch"](function (error) {});
      }
    },
    onFileChange: function onFileChange(file) {
      var files = file.target.files || file.dataTransfer.files;
      this.data = new FormData();

      if (files.length > 0) {
        //console.log('evento');
        var _file = files[0];

        var _fileNameSplit = _file.name.split("."); // if uploaded file is valid with validation rules


        var file_extension = _fileNameSplit[_fileNameSplit.length - 1];

        var file_name = _file.name.replace(".".concat(file_extension), '');

        this.data.append("file", files[0]);
        this.data.append("name", file_name);
      }
    },
    getParents: function getParents() {
      var _this2 = this;

      var url = "/getParents";
      axios.get(url).then(function (response) {
        _this2.parents = response.data;
      })["catch"](function (error) {
        toastr.error("No hay padres cargados");
      });
    },
    getMenu: function getMenu() {
      window.location = "/list/proceedings/parents";
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/proceedingsParentsComponent.vue?vue&type=template&id=d8a21bd0&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/proceedingsParentsComponent.vue?vue&type=template&id=d8a21bd0& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "back" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-11 mx-auto" }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.typeEvent,
                  expression: "typeEvent"
                }
              ],
              staticClass: "form-control",
              staticStyle: { width: "30%" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.typeEvent = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            [
              _c("option", { attrs: { value: "2" } }, [
                _vm._v("Seleccione una opción")
              ]),
              _vm._v(" "),
              _vm._l(_vm.types, function(options, key) {
                return _c(
                  "option",
                  { key: key, domProps: { value: options.id } },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(options.name) +
                        "\n                    "
                    )
                  ]
                )
              })
            ],
            2
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _vm.typeEvent == 0
        ? _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-11 mx-auto" }, [
              _c("div", { staticClass: "custom-card text-center" }, [
                _c(
                  "h3",
                  {
                    staticClass: "card-header fondo",
                    staticStyle: { "margin-bottom": "1rem" }
                  },
                  [_vm._v("Cargar acta")]
                ),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    staticClass: "needs-validation",
                    attrs: { novalidate: "" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.saveProceedings($event)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-lg-6" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parent,
                                expression: "parent"
                              }
                            ],
                            staticClass: "form-control",
                            staticStyle: { width: "100%" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.parent = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { value: "", selected: "true" } },
                              [_vm._v("Seleccione un padre")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.parents, function(option, key) {
                              return _c(
                                "option",
                                { key: key, domProps: { value: option.id } },
                                [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(option.name) +
                                      "\n                                    "
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-6" }, [
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "file",
                            accept: ".pdf",
                            placeholder: "Seleccione un archivo"
                          },
                          on: {
                            change: function($event) {
                              return _vm.onFileChange($event)
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(0)
                  ]
                )
              ])
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.typeEvent == 1
        ? _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-11 mx-auto" }, [
              _c("div", { staticClass: "custom-card text-center" }, [
                _c(
                  "h3",
                  {
                    staticClass: "card-header fondo",
                    staticStyle: { "margin-bottom": "1rem" }
                  },
                  [_vm._v("Crear acta")]
                ),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    staticClass: "needs-validation",
                    attrs: { novalidate: "" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.saveProceedings($event)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-lg-4" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.parent,
                                expression: "parent"
                              }
                            ],
                            staticClass: "form-control",
                            staticStyle: { width: "100%" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.parent = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { value: "", selected: "true" } },
                              [_vm._v("Seleccione un padre")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.parents, function(option, key) {
                              return _c(
                                "option",
                                { key: key, domProps: { value: option.id } },
                                [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(option.name) +
                                      "\n                                    "
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-12",
                          staticStyle: { height: "200px" }
                        },
                        [
                          _c("vue-editor", {
                            staticStyle: { height: "80px" },
                            attrs: { editorToolbar: _vm.custom_toolbar },
                            model: {
                              value: _vm.title,
                              callback: function($$v) {
                                _vm.title = $$v
                              },
                              expression: "title"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm._m(2),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-12" },
                        [
                          _c("vue-editor", {
                            attrs: { editorToolbar: _vm.custom_toolbar },
                            model: {
                              value: _vm.body,
                              callback: function($$v) {
                                _vm.body = $$v
                              },
                              expression: "body"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(3)
                  ]
                )
              ])
            ])
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "text-right", staticStyle: { "margin-top": "10px" } },
      [
        _c(
          "button",
          { staticClass: "btn btn-primary", attrs: { type: "submit" } },
          [_vm._v("Guardar")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("h3", {}, [_vm._v("Titulo")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("h3", {}, [_vm._v("Contenido")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "text-right", staticStyle: { "margin-top": "10px" } },
      [
        _c(
          "button",
          { staticClass: "btn btn-primary", attrs: { type: "submit" } },
          [_vm._v("Guardar")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/proceedingsParentsComponent.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/proceedingsParentsComponent.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _proceedingsParentsComponent_vue_vue_type_template_id_d8a21bd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proceedingsParentsComponent.vue?vue&type=template&id=d8a21bd0& */ "./resources/js/components/proceedingsParentsComponent.vue?vue&type=template&id=d8a21bd0&");
/* harmony import */ var _proceedingsParentsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proceedingsParentsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/proceedingsParentsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _proceedingsParentsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _proceedingsParentsComponent_vue_vue_type_template_id_d8a21bd0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _proceedingsParentsComponent_vue_vue_type_template_id_d8a21bd0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/proceedingsParentsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/proceedingsParentsComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/proceedingsParentsComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_proceedingsParentsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./proceedingsParentsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/proceedingsParentsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_proceedingsParentsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/proceedingsParentsComponent.vue?vue&type=template&id=d8a21bd0&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/proceedingsParentsComponent.vue?vue&type=template&id=d8a21bd0& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_proceedingsParentsComponent_vue_vue_type_template_id_d8a21bd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./proceedingsParentsComponent.vue?vue&type=template&id=d8a21bd0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/proceedingsParentsComponent.vue?vue&type=template&id=d8a21bd0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_proceedingsParentsComponent_vue_vue_type_template_id_d8a21bd0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_proceedingsParentsComponent_vue_vue_type_template_id_d8a21bd0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);