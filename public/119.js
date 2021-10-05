(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[119],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/repositoryStudents.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/repositoryStudents.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

Vue.component("multiselect", vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  props: ["id_repo", "backPage"],
  data: function data() {
    return {
      clases: [],
      classroom: "",
      value: [{
        name: "Todos",
        code: "js"
      }],
      descripcion: "",
      logro: "",
      fechaE: "",
      fechaR: "",
      id_act: "",
      errors: [],
      fillS: [],
      area: null,
      filter: "",
      myOptions: [],
      showComponent: 'principal',
      idStudent: null
    };
  },
  created: function created() {},
  mounted: function mounted() {
    var _this = this;

    var url = window.location.origin + "/getRepositoryStudents/" + this.id_repo;
    axios.get(url).then(function (response) {
      _this.clases = response.data;
      console.log(_this.clases);
    });
    console.log("Component mounted.");
  },
  methods: {
    highlightMatches: function highlightMatches(texto) {
      var matchExists = texto.toLowerCase().includes(this.filter.toLowerCase());
      if (!matchExists) return texto;
      var re = new RegExp(this.filter, "ig");
      return texto.replace(re, function (matchedText) {
        return "<strong>".concat(matchedText, "</strong>");
      });
    },
    getStudentIdRepo: function getStudentIdRepo(data) {
      this.idStudent = data.id_student;
      this.showComponent = 'viewMore';
    },
    backToPage: function backToPage() {
      this.idStudent = null;
      this.showComponent = 'principal';
    }
  },
  computed: {
    filteredRows: function filteredRows() {
      var _this2 = this;

      return this.clases.filter(function (row) {
        var text = row.name.toString().toLowerCase();

        var searchTerm = _this2.filter.toLowerCase();

        return text.includes(searchTerm);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/repositoryStudents.vue?vue&type=template&id=a57bf0e6&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/repositoryStudents.vue?vue&type=template&id=a57bf0e6& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _vm.showComponent === "principal"
    ? _c("div", [
        _c("div", { staticClass: "row justify-content-center" }, [
          _c("div", { staticClass: "col-sm-12", attrs: { id: "crud" } }, [
            _c("div", { staticClass: "card text-center" }, [
              _c("h3", { staticClass: "card-header fondo" }, [
                _vm._v("Entrega de estudiantes")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "float-right" }, [
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
                    attrs: { type: "text", placeholder: "Buscar" },
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
                  "div",
                  {
                    staticClass: "table-responsive",
                    staticStyle: { "border-radius": "20px" }
                  },
                  [
                    _c(
                      "table",
                      {
                        staticClass: "table table-hover table-striped",
                        staticStyle: {
                          "border-collapse": "separate !important"
                        }
                      },
                      [
                        _vm._m(0),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.filteredRows, function(row, index) {
                            return _c("tr", { key: index }, [
                              _c("td", {
                                staticStyle: { "font-size": "18px" },
                                domProps: {
                                  innerHTML: _vm._s(
                                    _vm.highlightMatches(row.name)
                                  )
                                }
                              }),
                              _vm._v(" "),
                              _c("td", {
                                staticStyle: { "font-size": "18px" },
                                domProps: {
                                  innerHTML: _vm._s(
                                    _vm.highlightMatches(row.status)
                                  )
                                }
                              }),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "a",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: row.id_student != null,
                                        expression: "row.id_student!=null"
                                      }
                                    ],
                                    staticClass: "btn btn-warning",
                                    on: {
                                      click: function($event) {
                                        return _vm.getStudentIdRepo(row)
                                      }
                                    }
                                  },
                                  [_vm._v("Ver más")]
                                )
                              ])
                            ])
                          }),
                          0
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _vm.backPage
                  ? _c("div", { staticClass: "float-left" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          on: { click: _vm.backPage }
                        },
                        [_vm._v("Volver")]
                      )
                    ])
                  : _vm._e()
              ])
            ])
          ])
        ])
      ])
    : _vm.showComponent === "viewMore"
    ? _c(
        "div",
        [
          _c("repository-comments", {
            attrs: {
              id_repo: _vm.id_repo,
              id_student: _vm.idStudent,
              backToPage: _vm.backToPage
            }
          })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Estudiante")]),
        _vm._v(" "),
        _c("th", [_vm._v("Estado")]),
        _vm._v(" "),
        _c("th", [_vm._v("-")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/repositoryStudents.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/repositoryStudents.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _repositoryStudents_vue_vue_type_template_id_a57bf0e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./repositoryStudents.vue?vue&type=template&id=a57bf0e6& */ "./resources/js/components/repositoryStudents.vue?vue&type=template&id=a57bf0e6&");
/* harmony import */ var _repositoryStudents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repositoryStudents.vue?vue&type=script&lang=js& */ "./resources/js/components/repositoryStudents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _repositoryStudents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _repositoryStudents_vue_vue_type_template_id_a57bf0e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _repositoryStudents_vue_vue_type_template_id_a57bf0e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/repositoryStudents.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/repositoryStudents.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/repositoryStudents.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_repositoryStudents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./repositoryStudents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/repositoryStudents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_repositoryStudents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/repositoryStudents.vue?vue&type=template&id=a57bf0e6&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/repositoryStudents.vue?vue&type=template&id=a57bf0e6& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_repositoryStudents_vue_vue_type_template_id_a57bf0e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./repositoryStudents.vue?vue&type=template&id=a57bf0e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/repositoryStudents.vue?vue&type=template&id=a57bf0e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_repositoryStudents_vue_vue_type_template_id_a57bf0e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_repositoryStudents_vue_vue_type_template_id_a57bf0e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);