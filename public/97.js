(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[97],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/changeGrade.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/changeGrade.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      grades: [],
      studentsGrades: [],
      selectedStudens: [],
      grade_prom: null,
      grade_selected: null,
      isChecked: false,
      filter: ""
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('getGrade').then(function (response) {
      _this.grades = response.data;
    })["catch"](function (error) {
      console.log(error);
    });
  },
  computed: {
    filteredRows: function filteredRows() {
      var _this2 = this;

      if (!this.studentsGrades.filter) return false;
      return this.studentsGrades.filter(function (row) {
        if (parseInt(_this2.filter) === parseInt(row.id_number)) {
          var id = row.id_number.toString().toLowerCase();

          var searchTerm = _this2.filter.toLowerCase();

          return id.includes(searchTerm);
        } else {
          var name = row.name.toString().toLowerCase();

          var _searchTerm = _this2.filter.toLowerCase();

          return name.includes(_searchTerm);
        }
      });
    }
  },
  methods: {
    gradeSelected: function gradeSelected(grade_id, grade_name) {
      var _this3 = this;

      this.grade_selected = grade_name;
      axios.get("getStudentsByGrade/".concat(grade_id)).then(function (response) {
        _this3.studentsGrades = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    promGrade: function promGrade(grade_id) {
      this.grade_prom = grade_id;
    },
    setStudents: function setStudents(student, e) {
      this.isChecked = true;

      if (e.target.checked === true) {
        this.selectedStudens.push(student);
      } else {
        this.selectedStudens = this.selectedStudens.filter(function (i) {
          return i.id !== student.id;
        }); // filtramos                
      }
    },
    checkedAll: function checkedAll(e) {
      if (e.target.checked) {
        $('input[type="checkbox"]').prop('checked', true);
        this.isChecked = false;
      } else {
        $('input[type="checkbox"]').prop('checked', false);
        this.selectedStudens = [];
      }
    },
    saveData: function saveData() {
      var _this4 = this;

      var data = [];

      if (this.isChecked === true) {
        data = this.selectedStudens;
      } else {
        data = this.studentsGrades;
      }

      data.forEach(function (el) {
        axios.put("/savePromGrade/".concat(el.id), {
          id_grade: _this4.grade_prom
        }).then(function (response) {
          toastr.success('Estudiante Promovido');
        })["catch"](function (error) {
          toastr.info('Ha ocurrido un error, intenta de nuevo mas tarde');
          console.log(error);
        });
      });
      window.location = '/changeGrade';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/changeGrade.vue?vue&type=template&id=88651ce8&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/changeGrade.vue?vue&type=template&id=88651ce8& ***!
  \**************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "card bg-light mb-3" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-doby" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "form",
              { staticClass: "form-inline mt-2" },
              [
                _vm._l(_vm.grades, function(grade, key) {
                  return _c(
                    "div",
                    { key: key, staticClass: "form-check form-group" },
                    [
                      _c("label", { staticClass: "mr-2 ml-3" }, [
                        _vm._v(_vm._s(grade.grade))
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-check-input mr-4",
                        attrs: { type: "radio", name: "1", id: "" },
                        on: {
                          click: function($event) {
                            return _vm.gradeSelected(grade.id, grade.grade)
                          }
                        }
                      })
                    ]
                  )
                }),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _vm.studentsGrades.length > 0
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-primary mt-3 ml-3",
                          attrs: {
                            type: "button",
                            "data-toggle": "modal",
                            "data-target": "#exampleModal"
                          }
                        },
                        [_vm._v("Promover")]
                      )
                    : _vm._e()
                ])
              ],
              2
            ),
            _vm._v(" "),
            _vm.studentsGrades.length > 0
              ? _c("div", { staticClass: "form-group mx-sm-3 mb-2 mt-3" }, [
                  _c("div", { staticClass: "col-md-6 float-right" }, [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Buscar")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.filter,
                          expression: "filter"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "Buscar por Nombre" },
                      domProps: { value: _vm.filter },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.filter = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "table",
                    { staticClass: "table table-striped table hover" },
                    [
                      _c("thead", [
                        _c("tr", [
                          _c("th", [
                            _c("input", {
                              attrs: { type: "checkbox" },
                              on: {
                                click: function(e) {
                                  return _vm.checkedAll(e)
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Nombre")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("# Documento")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Grado")])
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.filteredRows, function(studentsG, key) {
                        return _c("tbody", { key: key }, [
                          _c("tr", [
                            _c("td", [
                              _c("input", {
                                attrs: {
                                  type: "checkbox",
                                  name: "checkStudents",
                                  id: key
                                },
                                on: {
                                  click: function(e) {
                                    return _vm.setStudents(studentsG, e)
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(
                                  studentsG.name + " " + studentsG.last_name
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(studentsG.id_number))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(studentsG.grade_name))])
                          ])
                        ])
                      })
                    ],
                    2
                  )
                ])
              : _c("div", [
                  _c("p", { staticClass: "mt-4" }, [
                    _vm._v("No hay estudiantes para mostrar")
                  ])
                ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "exampleModal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-body" },
                [
                  _c("p", [
                    _c("strong", [
                      _vm._v(
                        "Seguro que desea Promover a los Siguientes estudiantes del grado " +
                          _vm._s(_vm.grade_selected) +
                          "? "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.isChecked === true
                    ? _c(
                        "div",
                        _vm._l(_vm.selectedStudens, function(students, key) {
                          return _c("div", { key: key, staticClass: "mt-2" }, [
                            _c("p", [
                              _vm._v(
                                _vm._s(students.name + " " + students.last_name)
                              )
                            ])
                          ])
                        }),
                        0
                      )
                    : _vm.isChecked === false
                    ? _c(
                        "div",
                        _vm._l(_vm.studentsGrades, function(students, key) {
                          return _c("div", { key: key, staticClass: "mt-2" }, [
                            _c("p", [
                              _vm._v(
                                _vm._s(students.name + " " + students.last_name)
                              )
                            ])
                          ])
                        }),
                        0
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._m(3),
                  _vm._v(" "),
                  _vm._l(_vm.grades, function(grade, key) {
                    return _c(
                      "div",
                      { key: key, staticClass: "form-check form-group" },
                      [
                        _c(
                          "label",
                          { staticClass: "mr-4", attrs: { for: "" } },
                          [_vm._v(_vm._s(grade.grade))]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-check-input mr-4",
                          attrs: { type: "radio", name: "1", id: "" },
                          on: {
                            click: function($event) {
                              return _vm.promGrade(grade.id)
                            }
                          }
                        })
                      ]
                    )
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary",
                    attrs: { type: "button", "data-dismiss": "modal" }
                  },
                  [_vm._v("Cerrar")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.saveData($event)
                      }
                    }
                  },
                  [_vm._v("Guardar Cambios")]
                )
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h2", [_c("strong", [_vm._v("Selección de Grado")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("p", [_vm._v("Seleccione el Grado :")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Información de estudiantes a Promover")]
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
    return _c("label", { staticClass: "mr-2", attrs: { for: "" } }, [
      _c("strong", [_vm._v("Seleccione el grado a Promover")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/changeGrade.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/changeGrade.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _changeGrade_vue_vue_type_template_id_88651ce8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeGrade.vue?vue&type=template&id=88651ce8& */ "./resources/js/components/changeGrade.vue?vue&type=template&id=88651ce8&");
/* harmony import */ var _changeGrade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeGrade.vue?vue&type=script&lang=js& */ "./resources/js/components/changeGrade.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _changeGrade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _changeGrade_vue_vue_type_template_id_88651ce8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _changeGrade_vue_vue_type_template_id_88651ce8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/changeGrade.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/changeGrade.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/changeGrade.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_changeGrade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./changeGrade.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/changeGrade.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_changeGrade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/changeGrade.vue?vue&type=template&id=88651ce8&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/changeGrade.vue?vue&type=template&id=88651ce8& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_changeGrade_vue_vue_type_template_id_88651ce8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./changeGrade.vue?vue&type=template&id=88651ce8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/changeGrade.vue?vue&type=template&id=88651ce8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_changeGrade_vue_vue_type_template_id_88651ce8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_changeGrade_vue_vue_type_template_id_88651ce8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);