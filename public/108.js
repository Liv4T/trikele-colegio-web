(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[108],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/montlyReport.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/montlyReport.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    moment: moment__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      dataReport: [],
      dataStudent: {},
      downloading: false,
      displayCol: 'inline'
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('getReportsByParent').then(function (response) {
      var data = response.data;
      data.forEach(function (e) {
        _this.dataReport.push({
          created_at: moment__WEBPACK_IMPORTED_MODULE_0___default()(e.created_at).format('YYYY MMMM DD hh:mm:ss'),
          dataStudent: JSON.parse(e.dataStudent)
        });

        _this.dataStudent = JSON.parse(e.dataStudent);
      });
    });
  },
  watch: {
    dataStudent: function dataStudent(newVal) {
      console.log(newVal);

      if (newVal.nota_class.length === 0) {
        this.displayCol = 'none';
      } else {
        this.displayCol = 'inline';
      }
    }
  },
  methods: {
    downloadReport: function downloadReport(data) {
      var _this2 = this;

      this.dataStudent = data;
      this.downloading = true;
      setTimeout(function () {
        var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_1__["default"]('p', 'pt', 'letter');
        pdf.autoTable({
          html: '#tableReport',
          columnStyles: {
            halign: 'center',
            fillColor: [0, 255, 0]
          }
        });
        pdf.save("Informe ".concat(_this2.dataStudent.student, ".pdf"));
        _this2.downloading = false;
      }, 1000);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/montlyReport.vue?vue&type=template&id=47ec0754&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/montlyReport.vue?vue&type=template&id=47ec0754& ***!
  \***************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("table", { staticClass: "table table-striped table-hover" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.dataReport, function(data, key) {
                  return _c("tr", { key: key }, [
                    _c("td", [
                      _vm._v(_vm._s(data.dataStudent.student.toUpperCase()))
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(data.created_at))]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          on: {
                            click: function($event) {
                              return _vm.downloadReport(data.dataStudent)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                                        " +
                              _vm._s(
                                _vm.downloading
                                  ? "Descargando Reporte"
                                  : "Descargar Reporte"
                              ) +
                              "\n                                    "
                          )
                        ]
                      )
                    ])
                  ])
                }),
                0
              )
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "table",
      {
        staticStyle: { width: "100%" },
        attrs: { id: "tableReport", hidden: "" }
      },
      [
        _c("tr", { staticClass: "header" }, [
          _c("th", { attrs: { colspan: "8" } }, [
            _vm._v(
              "REPORTE DE " +
                _vm._s(
                  _vm.dataStudent.student
                    ? _vm.dataStudent.student.toUpperCase()
                    : ""
                )
            )
          ])
        ]),
        _vm._v(" "),
        _vm._m(2),
        _vm._v(" "),
        _c("tr", [
          _c("th", { staticClass: "label" }, [_vm._v("CLASE: ")]),
          _vm._v(" "),
          _c("td", { staticClass: "label-content" }, [
            _vm._v(_vm._s(_vm.dataStudent.class))
          ]),
          _vm._v(" "),
          _c("td"),
          _vm._v(" "),
          _c("th", { staticClass: "label" }, [_vm._v("LOGRO: ")]),
          _vm._v(" "),
          _c("td", { staticClass: "label-content" }, [
            _vm._v(_vm._s(_vm.dataStudent.logro))
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("th", { staticClass: "label" }, [_vm._v(" ESTUDIANTE: ")]),
          _vm._v(" "),
          _c("td", { staticClass: "label-content" }, [
            _vm._v(_vm._s(_vm.dataStudent.student))
          ]),
          _vm._v(" "),
          _c("td"),
          _vm._v(" "),
          _c("th", { staticClass: "label" }, [_vm._v("CORREO: ")]),
          _vm._v(" "),
          _c("td", { staticClass: "label-content" }, [
            _vm._v(_vm._s(_vm.dataStudent.email))
          ]),
          _vm._v(" "),
          _c("td")
        ]),
        _vm._v(" "),
        _vm._m(3),
        _vm._v(" "),
        _c("tr", [
          _c("th", { staticClass: "label" }, [_vm._v("ACTIVIDAD: ")]),
          _vm._v(" "),
          _c("td", { staticClass: "label-content" }, [
            _vm._v(_vm._s(_vm.dataStudent.activity))
          ]),
          _vm._v(" "),
          _c("td"),
          _vm._v(" "),
          _c("th", { staticClass: "label" }, [_vm._v("DESCRIPCIÓN: ")]),
          _vm._v(" "),
          _c("td", { staticClass: "label-content" }, [
            _vm._v(_vm._s(_vm.dataStudent.activity_description))
          ]),
          _vm._v(" "),
          _c("td"),
          _vm._v(" "),
          _c("th", { staticClass: "label" }, [_vm._v("FECHA ACTIVIDAD")]),
          _vm._v(" "),
          _c("td", { staticClass: "label-content" }, [
            _vm._v(_vm._s(_vm.dataStudent.activity_date))
          ])
        ]),
        _vm._v(" "),
        _vm._m(4),
        _vm._v(" "),
        _c("tr", [
          _c("th", { staticClass: "label" }, [
            _vm._v("PORCENTAJE DE ACTIVIDAD: ")
          ]),
          _vm._v(" "),
          _c("td", { staticClass: "label-content" }, [
            _vm._v(_vm._s(_vm.dataStudent.percentage_activity))
          ]),
          _vm._v(" "),
          _c("td"),
          _vm._v(" "),
          _c(
            "th",
            { staticClass: "label", style: { display: _vm.displayCol } },
            [_vm._v("NOTA GENERAL: ")]
          ),
          _vm._v(" "),
          _c(
            "td",
            {
              staticClass: "label-content",
              style: { display: _vm.displayCol }
            },
            [_vm._v(_vm._s(_vm.dataStudent.nota_class))]
          )
        ]),
        _vm._v(" "),
        _vm._m(5),
        _vm._v(" "),
        _c("tr", [
          _c("th", { staticClass: "label" }, [_vm._v("NOMBRE DE ACUDIENTE: ")]),
          _vm._v(" "),
          _c("td", { staticClass: "label-content" }, [
            _vm._v(
              _vm._s(
                _vm.dataStudent.parent_name
                  ? _vm.dataStudent.parent_name
                  : "Sin Información"
              )
            )
          ]),
          _vm._v(" "),
          _c("td"),
          _vm._v(" "),
          _c("th", { staticClass: "label" }, [_vm._v("CORREO DE ACUDIENTE: ")]),
          _vm._v(" "),
          _c("td", { staticClass: "label-content" }, [
            _vm._v(
              _vm._s(
                _vm.dataStudent.parent_email
                  ? _vm.dataStudent.parent_email
                  : "Sin Información"
              )
            )
          ])
        ]),
        _vm._v(" "),
        _vm._m(6),
        _vm._v(" "),
        _c("tr", [
          _c("th", { staticClass: "label" }, [
            _vm._v("OBSERVACIÓN DEL DOCENTE: ")
          ]),
          _vm._v(" "),
          _c("td", [_vm._v(_vm._s(_vm.dataStudent.observation))])
        ]),
        _vm._v(" "),
        _vm._m(7)
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header fondo" }, [
      _c("strong", [_vm._v("Reporte Mensual")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Estudiante")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha Creación de Reporte")]),
        _vm._v(" "),
        _c("th", [_vm._v("Descargar")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { staticStyle: { height: "10px" }, attrs: { colspan: "8" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { staticStyle: { height: "5px" }, attrs: { colspan: "8" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { staticStyle: { height: "10px" }, attrs: { colspan: "8" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { staticStyle: { height: "10px" }, attrs: { colspan: "8" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { staticStyle: { height: "10px" }, attrs: { colspan: "8" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { staticStyle: { height: "10px" }, attrs: { colspan: "8" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/montlyReport.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/montlyReport.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _montlyReport_vue_vue_type_template_id_47ec0754___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./montlyReport.vue?vue&type=template&id=47ec0754& */ "./resources/js/components/montlyReport.vue?vue&type=template&id=47ec0754&");
/* harmony import */ var _montlyReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./montlyReport.vue?vue&type=script&lang=js& */ "./resources/js/components/montlyReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _montlyReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _montlyReport_vue_vue_type_template_id_47ec0754___WEBPACK_IMPORTED_MODULE_0__["render"],
  _montlyReport_vue_vue_type_template_id_47ec0754___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/montlyReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/montlyReport.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/montlyReport.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_montlyReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./montlyReport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/montlyReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_montlyReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/montlyReport.vue?vue&type=template&id=47ec0754&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/montlyReport.vue?vue&type=template&id=47ec0754& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_montlyReport_vue_vue_type_template_id_47ec0754___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./montlyReport.vue?vue&type=template&id=47ec0754& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/montlyReport.vue?vue&type=template&id=47ec0754&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_montlyReport_vue_vue_type_template_id_47ec0754___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_montlyReport_vue_vue_type_template_id_47ec0754___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);