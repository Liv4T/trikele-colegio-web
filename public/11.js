(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/viewProceedingsPdfComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/viewProceedingsPdfComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_pdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-pdf */ "./node_modules/vue-pdf/src/vuePdfNoSss.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    pdf: vue_pdf__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['id_proceeding', 'type_view'],
  data: function data() {
    return {
      show: true,
      pdfList: [""],
      src: "",
      loadedRatio: 0,
      page: 1,
      numPages: 0,
      rotate: 0
    };
  },
  mounted: function mounted() {
    this.getPdf();
  },
  methods: {
    getPdf: function getPdf() {
      var _this = this;

      if (this.type_view == 0) {
        var url = "/getProceedingsUrl/" + this.id_proceeding;
        axios.get(url).then(function (response) {
          _this.src = response.data;

          _this.updateViewed(); //console.log(this.proceedings);

        })["catch"](function (error) {
          toastr.error("Acta no disponible");
        });
      } else {
        var url = "/getProceedingsUrl/general/" + this.id_proceeding;
        axios.get(url).then(function (response) {
          _this.src = response.data;

          _this.updateViewed(); //console.log(this.proceedings);

        })["catch"](function (error) {
          toastr.error("Acta no disponible");
        });
      }
    },
    updateViewed: function updateViewed() {
      if (this.type_view == 0) {
        var url = "/updateViewedProceedings/" + this.id_proceeding;
        axios.post(url).then(function (response) {
          if (response.data == 1) {
            toastr.success("Visto");
          }
        })["catch"](function (err) {});
      } else {
        var url = "/updateViewedProceedings/general/" + this.id_proceeding;
        axios.post(url).then(function (response) {
          if (response.data == 1) {
            toastr.success("Visto");
          }
        })["catch"](function (err) {});
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/viewProceedingsPdfComponent.vue?vue&type=template&id=f547732c&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/viewProceedingsPdfComponent.vue?vue&type=template&id=f547732c& ***!
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
  return _c("div", { staticClass: "back" }, [
    _c("div", { staticClass: "col-md-11 mx-auto" }, [
      _c("div", { staticClass: "custom-card text-center" }, [
        _c("h3", { staticClass: "card-header fondo" }),
        _vm._v(" "),
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model.number",
                  value: _vm.page,
                  expression: "page",
                  modifiers: { number: true }
                }
              ],
              staticStyle: { width: "5em" },
              attrs: { type: "number" },
              domProps: { value: _vm.page },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.page = _vm._n($event.target.value)
                },
                blur: function($event) {
                  return _vm.$forceUpdate()
                }
              }
            }),
            _vm._v(
              "\n                    /" +
                _vm._s(_vm.numPages) +
                "\n                    "
            ),
            _c(
              "button",
              {
                on: {
                  click: function($event) {
                    _vm.rotate += 90
                  }
                }
              },
              [_vm._v("⟳")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                on: {
                  click: function($event) {
                    _vm.rotate -= 90
                  }
                }
              },
              [_vm._v("⟲")]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticStyle: { width: "100%" } },
              [
                _vm.loadedRatio > 0 && _vm.loadedRatio < 1
                  ? _c(
                      "div",
                      {
                        staticStyle: {
                          "background-color": "green",
                          color: "white",
                          "text-align": "center"
                        },
                        style: { width: _vm.loadedRatio * 100 + "%" }
                      },
                      [
                        _vm._v(
                          _vm._s(Math.floor(_vm.loadedRatio * 100)) +
                            "%\n                        "
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("pdf", {
                  ref: "pdf",
                  staticStyle: { border: "1px solid red" },
                  attrs: { src: _vm.src, page: _vm.page, rotate: _vm.rotate },
                  on: {
                    progress: function($event) {
                      _vm.loadedRatio = $event
                    },
                    "num-pages": function($event) {
                      _vm.numPages = $event
                    },
                    "link-clicked": function($event) {
                      _vm.page = $event
                    }
                  }
                })
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

/***/ "./resources/js/components/viewProceedingsPdfComponent.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/viewProceedingsPdfComponent.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _viewProceedingsPdfComponent_vue_vue_type_template_id_f547732c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewProceedingsPdfComponent.vue?vue&type=template&id=f547732c& */ "./resources/js/components/viewProceedingsPdfComponent.vue?vue&type=template&id=f547732c&");
/* harmony import */ var _viewProceedingsPdfComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewProceedingsPdfComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/viewProceedingsPdfComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _viewProceedingsPdfComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _viewProceedingsPdfComponent_vue_vue_type_template_id_f547732c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _viewProceedingsPdfComponent_vue_vue_type_template_id_f547732c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/viewProceedingsPdfComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/viewProceedingsPdfComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/viewProceedingsPdfComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_viewProceedingsPdfComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./viewProceedingsPdfComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/viewProceedingsPdfComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_viewProceedingsPdfComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/viewProceedingsPdfComponent.vue?vue&type=template&id=f547732c&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/viewProceedingsPdfComponent.vue?vue&type=template&id=f547732c& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewProceedingsPdfComponent_vue_vue_type_template_id_f547732c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./viewProceedingsPdfComponent.vue?vue&type=template&id=f547732c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/viewProceedingsPdfComponent.vue?vue&type=template&id=f547732c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewProceedingsPdfComponent_vue_vue_type_template_id_f547732c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewProceedingsPdfComponent_vue_vue_type_template_id_f547732c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 1:
/*!************************!*\
  !*** canvas (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);