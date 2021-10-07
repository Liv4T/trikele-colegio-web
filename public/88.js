(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[88],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/asignarEstudiante.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/asignarEstudiante.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      myOptions: [],
      optionse: [],
      nameUnit: "",
      description: "",
      nameFile: "",
      nameUrl: "",
      newDocument: [],
      semanal: false,
      Newrol: "",
      errors: [],
      seccion: "",
      cestudiante: [],
      estudiantes: [],
      inputs: [{
        name: ""
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;

    var urlUsers = "getStudents";
    axios.get(urlUsers).then(function (response) {
      response.data.forEach(function (element) {
        _this.optionse.push({
          address: element.address,
          created_at: element.created_at,
          deleted: element.deleted,
          document_type: element.document_type,
          email: element.email,
          email_verified_at: element.email_verified_at,
          experience: element.experience,
          id: element.id,
          id_number: element.id_number,
          last_name: element.last_name,
          name: element.last_name,
          complete_name: element.name + ' ' + element.last_name + ' (Estudiante)',
          new_coord_area: element.new_coord_area,
          parent: element.parent,
          parent_phone: element.parent_phone,
          phone: element.phone,
          picture: element.picture,
          state: element.state,
          type_user: element.type_user,
          updated_at: element.updated_at,
          user_name: element.user_name
        });
      });
    });
    var urlUsers = "getClassroom";
    axios.get(urlUsers).then(function (response) {
      _this.myOptions = response.data;
    });
  },
  methods: {
    addTage: function addTage(newTag) {
      var tag = {
        name: newTag,
        id: newTag
      };
      this.optionse.push(tag);
    },
    getMenu: function getMenu() {
      window.location = "/salon_adm";
    },
    createAs: function createAs() {
      var _this2 = this;

      var url = "assignStudents";

      if (this.cestudiante.length >= 1) {
        for (var i = 0; i < this.cestudiante.length; i++) {
          this.estudiantes.push(this.cestudiante[i].id);
        }
      }

      axios.post(url, {
        users: this.estudiantes,
        id_classroom: this.seccion
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/asignarEstudiante.vue?vue&type=template&id=e1abab74&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/asignarEstudiante.vue?vue&type=template&id=e1abab74& ***!
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
  return _c("div", [
    _c("div", { staticClass: "back" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-11 mx-auto" }, [
          _c("div", { staticClass: "custom-card text-center" }, [
            _c("h3", { staticClass: "card-header fondo" }, [
              _vm._v("Perfiles")
            ]),
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
                          _c("label", { attrs: { for: "" } }, [_vm._v("Rol:")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.Newrol,
                                  expression: "Newrol"
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
                                  _vm.Newrol = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "3" } }, [
                                _vm._v("Estudiante")
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("Salon")
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.seccion,
                                    expression: "seccion"
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
                                    _vm.seccion = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  }
                                }
                              },
                              _vm._l(_vm.myOptions, function(option, key) {
                                return _c(
                                  "option",
                                  { key: key, domProps: { value: option.id } },
                                  [
                                    _vm._v(
                                      "\n                          " +
                                        _vm._s(option.clasroom) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              }),
                              0
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-6" },
                          [
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v("Nombre")
                            ]),
                            _vm._v(" "),
                            _c("multiselect", {
                              attrs: {
                                options: _vm.optionse,
                                "tag-placeholder": "Add this as new tag",
                                placeholder: "Search or add a tag",
                                label: "complete_name",
                                "track-by": "id",
                                multiple: true,
                                taggable: true
                              },
                              on: { tag: _vm.addTage },
                              model: {
                                value: _vm.cestudiante,
                                callback: function($$v) {
                                  _vm.cestudiante = $$v
                                },
                                expression: "cestudiante"
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/asignarEstudiante.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/asignarEstudiante.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _asignarEstudiante_vue_vue_type_template_id_e1abab74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asignarEstudiante.vue?vue&type=template&id=e1abab74& */ "./resources/js/components/asignarEstudiante.vue?vue&type=template&id=e1abab74&");
/* harmony import */ var _asignarEstudiante_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asignarEstudiante.vue?vue&type=script&lang=js& */ "./resources/js/components/asignarEstudiante.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _asignarEstudiante_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _asignarEstudiante_vue_vue_type_template_id_e1abab74___WEBPACK_IMPORTED_MODULE_0__["render"],
  _asignarEstudiante_vue_vue_type_template_id_e1abab74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/asignarEstudiante.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/asignarEstudiante.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/asignarEstudiante.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_asignarEstudiante_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./asignarEstudiante.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/asignarEstudiante.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_asignarEstudiante_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/asignarEstudiante.vue?vue&type=template&id=e1abab74&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/asignarEstudiante.vue?vue&type=template&id=e1abab74& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_asignarEstudiante_vue_vue_type_template_id_e1abab74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./asignarEstudiante.vue?vue&type=template&id=e1abab74& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/asignarEstudiante.vue?vue&type=template&id=e1abab74&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_asignarEstudiante_vue_vue_type_template_id_e1abab74___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_asignarEstudiante_vue_vue_type_template_id_e1abab74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);