(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ParentsObserver.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ParentsObserver.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      data: [],
      studentsView: {}
    };
  },
  mounted: function mounted() {
    this.getData();
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get('/dataObserver').then(function (response) {
        _this.data = response.data;
      });
    },
    viewModal: function viewModal(data) {
      this.studentsView = data, $("#ViewModal").modal("show");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ParentsObserver.vue?vue&type=template&id=1ba31fe4&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ParentsObserver.vue?vue&type=template&id=1ba31fe4& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    { staticClass: "back" },
    [
      _c("div", { staticClass: "row justify-content-center" }, [
        _c("div", { staticClass: "col-sm-10", attrs: { id: "crud" } }, [
          _c("h1", { staticClass: "text-center mb-4" }, [
            _vm._v("Observaciones")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c(
                "table",
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _vm._l(_vm.data, function(student, id) {
                    return _c("tbody", { key: id }, [
                      _c("tr", [
                        _c("td", [_vm._v(_vm._s(student.name_student))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(student.observation))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(student.user_creator))]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              attrs: {
                                "data-toggle": "modal",
                                "data-target": "#ViewModal"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.viewModal(student)
                                }
                              }
                            },
                            [_vm._v("Ver")]
                          )
                        ])
                      ])
                    ])
                  })
                ],
                2
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("modal-view-observer-component", {
        attrs: { studentsView: _vm.studentsView }
      })
    ],
    1
  )
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
        _c("th", [_vm._v("Detalle de la Observación")]),
        _vm._v(" "),
        _c("th", [_vm._v("Creador de la Observación")]),
        _vm._v(" "),
        _c("th", [_vm._v("Acción")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ParentsObserver.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/ParentsObserver.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ParentsObserver_vue_vue_type_template_id_1ba31fe4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ParentsObserver.vue?vue&type=template&id=1ba31fe4& */ "./resources/js/components/ParentsObserver.vue?vue&type=template&id=1ba31fe4&");
/* harmony import */ var _ParentsObserver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParentsObserver.vue?vue&type=script&lang=js& */ "./resources/js/components/ParentsObserver.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ParentsObserver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ParentsObserver_vue_vue_type_template_id_1ba31fe4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ParentsObserver_vue_vue_type_template_id_1ba31fe4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ParentsObserver.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ParentsObserver.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/ParentsObserver.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ParentsObserver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ParentsObserver.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ParentsObserver.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ParentsObserver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ParentsObserver.vue?vue&type=template&id=1ba31fe4&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/ParentsObserver.vue?vue&type=template&id=1ba31fe4& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ParentsObserver_vue_vue_type_template_id_1ba31fe4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ParentsObserver.vue?vue&type=template&id=1ba31fe4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ParentsObserver.vue?vue&type=template&id=1ba31fe4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ParentsObserver_vue_vue_type_template_id_1ba31fe4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ParentsObserver_vue_vue_type_template_id_1ba31fe4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);