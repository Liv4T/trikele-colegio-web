(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[76],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalViewObserver.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ModalViewObserver.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['studentsView'],
  data: function data() {
    return {
      newStudentView: {}
    };
  },
  watch: {
    studentsView: function studentsView(newVal, oldVal) {
      // watch it
      if (newVal !== oldVal) {
        this.newStudentView = newVal;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalViewObserver.vue?vue&type=template&id=1940c90d&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ModalViewObserver.vue?vue&type=template&id=1940c90d& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      staticClass: "modal fade",
      attrs: {
        id: "ViewModal",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "exampleModalLabel",
        "aria-hidden": "true"
      }
    },
    [
      _c(
        "div",
        { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
        [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("h3", [_vm._v("Información del Estudiante")]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-6" }, [
                  _c("label", { attrs: { for: "name_student" } }, [
                    _vm._v("Nombre")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.newStudentView.name_student,
                        expression: "newStudentView.name_student"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: "",
                      id: "name_student",
                      type: "text",
                      required: ""
                    },
                    domProps: { value: _vm.newStudentView.name_student },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.newStudentView,
                          "name_student",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6" }, [
                  _c("label", { attrs: { for: "date_birth" } }, [
                    _vm._v("Fecha de Nacimiento")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.newStudentView.date_birth,
                        expression: "newStudentView.date_birth"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: "",
                      id: "date_birth",
                      type: "date",
                      required: ""
                    },
                    domProps: { value: _vm.newStudentView.date_birth },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.newStudentView,
                          "date_birth",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6" }, [
                  _c("label", { attrs: { for: "ageEst" } }, [_vm._v("Edad")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.newStudentView.age,
                        expression: "newStudentView.age"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: "",
                      id: "ageEst",
                      type: "number",
                      required: ""
                    },
                    domProps: { value: _vm.newStudentView.age },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.newStudentView, "age", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6" }, [
                  _c("label", { attrs: { for: "sizeEst" } }, [_vm._v("Talla")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.newStudentView.size,
                        expression: "newStudentView.size"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: "",
                      id: "sizeEst",
                      type: "text",
                      required: ""
                    },
                    domProps: { value: _vm.newStudentView.size },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.newStudentView,
                          "size",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6" }, [
                  _c("label", { attrs: { for: "weight_Est" } }, [
                    _vm._v("Peso")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.newStudentView.weight,
                        expression: "newStudentView.weight"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: "",
                      id: "weight_Est",
                      type: "text",
                      required: ""
                    },
                    domProps: { value: _vm.newStudentView.weight },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.newStudentView,
                          "weight",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6" }, [
                  _c("label", { attrs: { for: "identification_Est" } }, [
                    _vm._v("Identificación")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.newStudentView.identification,
                        expression: "newStudentView.identification"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: "",
                      id: "identification_Est",
                      type: "text",
                      required: ""
                    },
                    domProps: { value: _vm.newStudentView.identification },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.newStudentView,
                          "identification",
                          $event.target.value
                        )
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("h3", { staticClass: "mt-5" }, [
                _vm._v("Información de los Acudientes")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-6" }, [
                  _c("label", { attrs: { for: "fatherName" } }, [
                    _vm._v("Nombre del Padre")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.newStudentView.father_name,
                        expression: "newStudentView.father_name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { disabled: "", id: "father_name", type: "text" },
                    domProps: { value: _vm.newStudentView.father_name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.newStudentView,
                          "father_name",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6" }, [
                  _c("label", { attrs: { for: "office_Father" } }, [
                    _vm._v("Profesión u Oficio")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.newStudentView.office_father,
                        expression: "newStudentView.office_father"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { disabled: "", id: "office_Father", type: "text" },
                    domProps: { value: _vm.newStudentView.office_father },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.newStudentView,
                          "office_father",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6" }, [
                  _c("label", { attrs: { for: "motherName" } }, [
                    _vm._v("Nombre de la Madre")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.newStudentView.mother_name,
                        expression: "newStudentView.mother_name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { disabled: "", id: "mother_name", type: "text" },
                    domProps: { value: _vm.newStudentView.mother_name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.newStudentView,
                          "mother_name",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6" }, [
                  _c("label", { attrs: { for: "office_Mother" } }, [
                    _vm._v("Profesión u Oficio")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.newStudentView.office_mother,
                        expression: "newStudentView.office_mother"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { disabled: "", id: "office_Mother", type: "text" },
                    domProps: { value: _vm.newStudentView.office_mother },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.newStudentView,
                          "office_mother",
                          $event.target.value
                        )
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("h3", { staticClass: "mt-5" }, [
                _vm._v("Información General")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-6" }, [
                  _c("label", { attrs: { for: "address_general" } }, [
                    _vm._v("Dirección")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.newStudentView.address,
                        expression: "newStudentView.address"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: "",
                      id: "address_general",
                      type: "text",
                      required: ""
                    },
                    domProps: { value: _vm.newStudentView.address },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.newStudentView,
                          "address",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6" }, [
                  _c("label", { attrs: { for: "phone_general" } }, [
                    _vm._v("Telefono")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.newStudentView.phone,
                        expression: "newStudentView.phone"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: "",
                      id: "phone_general",
                      type: "text",
                      required: ""
                    },
                    domProps: { value: _vm.newStudentView.phone },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.newStudentView,
                          "phone",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 mt-3" }, [
                  _c("label", { attrs: { for: "Repitente" } }, [
                    _vm._v("Repitente")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "ml-2",
                    attrs: {
                      disabled: "",
                      type: "checkbox",
                      id: "Repitent",
                      required: ""
                    },
                    domProps: {
                      checked: _vm.newStudentView.repitent === 0 ? false : true
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("h3", { staticClass: "mt-2" }, [
                _vm._v("Anotación de la Observación")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col" }, [
                  _c("label", { attrs: { for: "Observer_est" } }, [
                    _vm._v("Observaciones")
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.newStudentView.observation,
                        expression: "newStudentView.observation"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { disabled: "", id: "Observer_est", required: "" },
                    domProps: { value: _vm.newStudentView.observation },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.newStudentView,
                          "observation",
                          $event.target.value
                        )
                      }
                    }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _vm._m(1)
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Edición de Observación")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-Primary",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Cerrar")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ModalViewObserver.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/ModalViewObserver.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalViewObserver_vue_vue_type_template_id_1940c90d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalViewObserver.vue?vue&type=template&id=1940c90d& */ "./resources/js/components/ModalViewObserver.vue?vue&type=template&id=1940c90d&");
/* harmony import */ var _ModalViewObserver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalViewObserver.vue?vue&type=script&lang=js& */ "./resources/js/components/ModalViewObserver.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalViewObserver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalViewObserver_vue_vue_type_template_id_1940c90d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalViewObserver_vue_vue_type_template_id_1940c90d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ModalViewObserver.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ModalViewObserver.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/ModalViewObserver.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalViewObserver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ModalViewObserver.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalViewObserver.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalViewObserver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ModalViewObserver.vue?vue&type=template&id=1940c90d&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/ModalViewObserver.vue?vue&type=template&id=1940c90d& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalViewObserver_vue_vue_type_template_id_1940c90d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ModalViewObserver.vue?vue&type=template&id=1940c90d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalViewObserver.vue?vue&type=template&id=1940c90d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalViewObserver_vue_vue_type_template_id_1940c90d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalViewObserver_vue_vue_type_template_id_1940c90d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);