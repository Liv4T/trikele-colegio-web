(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[108],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/listProceedingsParents.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/listProceedingsParents.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['type_user'],
  data: function data() {
    return {
      proceedings: [],
      id_proceedings: "",
      typeView: "",
      typeAction: ""
    };
  },
  mounted: function mounted() {
    this.getProceedings();
  },
  methods: {
    getProceedings: function getProceedings() {
      var _this = this;

      var url = "/getProceedings";
      axios.get(url).then(function (response) {
        _this.proceedings = response.data; //console.log(this.proceedings);
      })["catch"](function (error) {
        toastr.error("No hay actas cargadas");
      });
    },
    nameArchive: function nameArchive(url_name) {
      var arrayName = url_name.split("/");
      var name = arrayName[arrayName.length - 1];
      return name;
    },
    update: function update(id) {
      this.typeView = 1;
      this.typeAction = 0;
      this.id_proceedings = id;
      $("#updateModal").modal("show");
    },
    sign: function sign(id) {
      this.typeView = 2;
      this.typeAction = 0;
      this.id_proceedings = id;
      $("#updateModal").modal("show");
    },
    getActas: function getActas() {
      window.location = "/proceedings/parents";
    },
    viewPdf: function viewPdf(id) {
      window.location = "/view/proceedings/" + id + "/0";
    },
    viewed: function viewed(id) {
      var url = "/updateViewedProceedings/" + id;
      axios.post(url).then(function (response) {
        if (response.data == 1) {
          toastr.success("Visto");
        }
      })["catch"](function (err) {});
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/listProceedingsParents.vue?vue&type=template&id=56d6d6d3&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/listProceedingsParents.vue?vue&type=template&id=56d6d6d3& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "col-md-11 mx-auto" }, [
        _vm.type_user == 1
          ? _c("div", [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary mb-3",
                  on: {
                    click: function($event) {
                      return _vm.getActas()
                    }
                  }
                },
                [_vm._v("\n                Crear Acta\n            ")]
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "custom-card text-center" }, [
          _c("h3", { staticClass: "card-header fondo" }, [
            _vm._v("Actas para padres")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c(
                "table",
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _vm._l(_vm.proceedings, function(proceeding, id) {
                    return _c("tbody", { key: id }, [
                      _c("tr", [
                        proceeding.url
                          ? _c("td", [
                              _c(
                                "a",
                                {
                                  staticStyle: { color: "black" },
                                  attrs: {
                                    href:
                                      "/api/proceedings/parents/download/" +
                                      proceeding.id
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.viewed(proceeding.id)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.nameArchive(proceeding.url))
                                  )
                                ]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        !proceeding.url
                          ? _c("td", [_vm._v("Sin archivo generado")])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(proceeding.parent))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(proceeding.created_at))]),
                        _vm._v(" "),
                        proceeding.state == 1
                          ? _c("td", [
                              _c("i", { staticClass: "far fa-check-circle" })
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        proceeding.state == 0
                          ? _c("td", [
                              _c("i", { staticClass: "far fa-times-circle" })
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        proceeding.viewed == 1
                          ? _c("td", [
                              _c("i", { staticClass: "far fa-check-circle" })
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        proceeding.viewed == 0
                          ? _c("td", [
                              _c("i", { staticClass: "far fa-times-circle" })
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("td", [
                          proceeding.state == 0 && _vm.type_user == 1
                            ? _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: {
                                    "data-toggle": "modal",
                                    "data-target": "#Modal"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.sign(proceeding.id)
                                    }
                                  }
                                },
                                [_vm._v("Firmar")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          proceeding.state == 0 &&
                          proceeding.url &&
                          _vm.type_user == 1
                            ? _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: {
                                    "data-toggle": "modal",
                                    "data-target": "#UpdateModal"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.update(proceeding.id)
                                    }
                                  }
                                },
                                [_vm._v("Actualizar")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          proceeding.url
                            ? _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  on: {
                                    click: function($event) {
                                      return _vm.viewPdf(proceeding.id)
                                    }
                                  }
                                },
                                [_vm._v("Ver")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          !proceeding.url
                            ? _c(
                                "a",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: {
                                    href:
                                      "/api/proceedings/parents/pdf/" +
                                      proceeding.id,
                                    target: "_blank"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.viewed(proceeding.id)
                                    }
                                  }
                                },
                                [_vm._v("Generar PDF")]
                              )
                            : _vm._e()
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
      _c("modal-update-proceedings", {
        attrs: {
          id_proceedings: _vm.id_proceedings,
          getProceedings: _vm.getProceedings,
          typeView: _vm.typeView,
          typeAction: _vm.typeAction
        }
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
        _c("th", [_vm._v("Nombre del Acta")]),
        _vm._v(" "),
        _c("th", [_vm._v("Padre")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha")]),
        _vm._v(" "),
        _c("th", [_vm._v("Firmada")]),
        _vm._v(" "),
        _c("th", [_vm._v("Visto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Acciones")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/listProceedingsParents.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/listProceedingsParents.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _listProceedingsParents_vue_vue_type_template_id_56d6d6d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listProceedingsParents.vue?vue&type=template&id=56d6d6d3& */ "./resources/js/components/listProceedingsParents.vue?vue&type=template&id=56d6d6d3&");
/* harmony import */ var _listProceedingsParents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listProceedingsParents.vue?vue&type=script&lang=js& */ "./resources/js/components/listProceedingsParents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _listProceedingsParents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _listProceedingsParents_vue_vue_type_template_id_56d6d6d3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _listProceedingsParents_vue_vue_type_template_id_56d6d6d3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/listProceedingsParents.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/listProceedingsParents.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/listProceedingsParents.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_listProceedingsParents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./listProceedingsParents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/listProceedingsParents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_listProceedingsParents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/listProceedingsParents.vue?vue&type=template&id=56d6d6d3&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/listProceedingsParents.vue?vue&type=template&id=56d6d6d3& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_listProceedingsParents_vue_vue_type_template_id_56d6d6d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./listProceedingsParents.vue?vue&type=template&id=56d6d6d3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/listProceedingsParents.vue?vue&type=template&id=56d6d6d3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_listProceedingsParents_vue_vue_type_template_id_56d6d6d3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_listProceedingsParents_vue_vue_type_template_id_56d6d6d3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);