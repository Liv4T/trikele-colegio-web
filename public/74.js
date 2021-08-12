(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/asignarDocente.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/asignarDocente.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
(function () {
  "use strict";

  window.addEventListener("load", function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName("needs-validation"); // Loop over them and prevent submission

    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener("submit", function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      }, false);
    });
  }, false);
})();

$(function () {
  // Get the form fields and hidden div
  var checkbox = $("#gridCheck1");
  var hidden = $("#hidden_fields1");
  hidden.hide();
  checkbox.change(function () {
    if (checkbox.is(":checked")) {
      // Show the hidden fields.
      hidden.show();
    } else {
      hidden.hide();
    }
  });
});



Vue.use(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default.a);
Vue.component("multiselect", vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      materia: [],
      salon: [],
      nameUnit: "",
      description: "",
      textoM: "",
      errors: [],
      seccion: "",
      salones: [],
      materias: [],
      area: [],
      classroom: [],
      user_id: "",
      myOptions: [],
      optionse: [],
      inputs: [{
        name: ""
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;

    var urlUs = "getTeachers";
    axios.get(urlUs).then(function (response) {
      _this.myOptions = response.data;
    });
    var urlUsers = "getArea";
    axios.get(urlUsers).then(function (response) {
      _this.materias = response.data;
    });
    var urlUser = "getClassroom";
    axios.get(urlUser).then(function (response) {
      _this.optionse = response.data;
    });
  },
  methods: {
    add: function add(index) {
      this.inputs.push({
        name: ""
      });
    },
    remove: function remove(index) {
      this.inputs.splice(index, 1);
    },
    addTage: function addTage(newTag) {
      var tag = {
        clasroom: newTag,
        id: newTag
      };
      this.optionse.push(tag);
    },
    addTagM: function addTagM(newTag) {
      var tag = {
        area: newTag,
        id: newTag
      };
      this.materias.push(tag);
    },
    getMenu: function getMenu() {
      window.location = "/salon_adm";
    },
    createAs: function createAs() {
      var _this2 = this;

      var url = "assignTeachers";

      if (this.materia.length >= 1) {
        for (var i = 0; i < this.materia.length; i++) {
          this.area.push(this.materia[i].id);
        }
      }

      if (this.salon.length >= 1) {
        for (var _i = 0; _i < this.salon.length; _i++) {
          this.classroom.push(this.salon[_i].id);
        }
      }

      axios.post(url, {
        //Cursos generales
        classroom: this.classroom,
        areas: this.area,
        id_teacher: this.user_id
      }).then(function (response) {
        _this2.errors = [];
        toastr.success("Nueva asignación creada exitosamente");

        _this2.getMenu();
      })["catch"](function (error) {
        _this2.errors = error.response.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/asignarDocente.vue?vue&type=template&id=4817a24e&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/asignarDocente.vue?vue&type=template&id=4817a24e& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "card-container" }, [
            _c("div", { staticClass: "custom-card text-center" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "form",
                { staticClass: "needs-validation", attrs: { novalidate: "" } },
                [
                  _c(
                    "form-wizard",
                    {
                      attrs: {
                        title: "",
                        subtitle: "",
                        color: "#ffc107",
                        "next-button-text": "Siguiente",
                        "back-button-text": "Atrás",
                        "finish-button-text": "Guardar y enviar"
                      },
                      on: { "on-complete": _vm.createAs }
                    },
                    [
                      _c("tab-content", [
                        _c("div", { staticClass: "form-group row mx-auto" }, [
                          _c("div", { staticClass: "col-md-6" }, [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Docente:")
                            ]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user_id,
                                    expression: "user_id"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { required: "" },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.user_id = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  }
                                }
                              },
                              _vm._l(_vm.myOptions, function(option) {
                                return _c(
                                  "option",
                                  { domProps: { value: option.id } },
                                  [_vm._v(_vm._s(option.name))]
                                )
                              }),
                              0
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-6" }, [
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v("Salones")
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              [
                                _c("multiselect", {
                                  attrs: {
                                    options: _vm.optionse,
                                    "tag-placeholder": "Add this as new tag",
                                    placeholder: "Search or add a tag",
                                    label: "clasroom",
                                    "track-by": "id",
                                    multiple: true,
                                    taggable: true
                                  },
                                  on: { tag: _vm.addTage },
                                  model: {
                                    value: _vm.salon,
                                    callback: function($$v) {
                                      _vm.salon = $$v
                                    },
                                    expression: "salon"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-6" },
                            [
                              _c("label", { attrs: { for: "name" } }, [
                                _vm._v("Materias")
                              ]),
                              _vm._v(" "),
                              _c("multiselect", {
                                attrs: {
                                  options: _vm.materias,
                                  "tag-placeholder": "Add this as new tag",
                                  placeholder: "Search or add a tag",
                                  label: "area",
                                  "track-by": "id",
                                  multiple: true,
                                  taggable: true
                                },
                                on: { tag: _vm.addTagM },
                                model: {
                                  value: _vm.materia,
                                  callback: function($$v) {
                                    _vm.materia = $$v
                                  },
                                  expression: "materia"
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v("Please fill out this field")
                              ])
                            ],
                            1
                          )
                        ])
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", [_vm._v("Perfiles")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/asignarDocente.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/asignarDocente.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _asignarDocente_vue_vue_type_template_id_4817a24e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asignarDocente.vue?vue&type=template&id=4817a24e& */ "./resources/js/components/asignarDocente.vue?vue&type=template&id=4817a24e&");
/* harmony import */ var _asignarDocente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asignarDocente.vue?vue&type=script&lang=js& */ "./resources/js/components/asignarDocente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _asignarDocente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _asignarDocente_vue_vue_type_template_id_4817a24e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _asignarDocente_vue_vue_type_template_id_4817a24e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/asignarDocente.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/asignarDocente.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/asignarDocente.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_asignarDocente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./asignarDocente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/asignarDocente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_asignarDocente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/asignarDocente.vue?vue&type=template&id=4817a24e&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/asignarDocente.vue?vue&type=template&id=4817a24e& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_asignarDocente_vue_vue_type_template_id_4817a24e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./asignarDocente.vue?vue&type=template&id=4817a24e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/asignarDocente.vue?vue&type=template&id=4817a24e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_asignarDocente_vue_vue_type_template_id_4817a24e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_asignarDocente_vue_vue_type_template_id_4817a24e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);