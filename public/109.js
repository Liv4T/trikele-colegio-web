(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[109],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/homeModulos.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/homeModulos.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
//
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
  props: ["id_grade", "id_area", "plan_code"],
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
      nameArea: "",
      filter: "",
      area_price: 0
    };
  },
  created: function created() {},
  mounted: function mounted() {
    var _this = this;

    var url = window.location.origin + "/findClassroomByGrade/" + this.id_grade;
    axios.get(url).then(function (response) {
      _this.classroom = response.data;
      console.log(_this.classroom);
      var urlsel = window.location.origin + "/viewGetWeek/" + _this.id_area + "/" + _this.classroom;
      axios.get(urlsel).then(function (response) {
        _this.clases = response.data;
      });
    });
    var urla = window.location.origin + "/findAreaById/" + this.id_area;
    axios.get(urla).then(function (response) {
      _this.nameArea = response.data;
      console.log(_this.nameArea);
    });
    console.log("Component mounted.");
    axios.get("/api/area/".concat(this.id_area, "/price")).then(function (response) {
      if (response.data) {
        _this.area_price = response.data.price;
      }
    });
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
    formatPrice: function formatPrice(value) {
      var val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  },
  computed: {
    filteredRows: function filteredRows() {
      var _this2 = this;

      return this.clases.filter(function (row) {
        var text = row.text.toString().toLowerCase();

        var searchTerm = _this2.filter.toLowerCase();

        return text.includes(searchTerm);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/homeModulos.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/homeModulos.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.fondo-lista{\r\n    background-image: url(\"/uploads/home/fondo-lista.jpg\");\n}\n.etiqueta-trikele{\r\n    color: #ff4700;\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    font-family: \"boldfont\";\n}\n.letra-boldfont{\r\n    font-family: \"boldfont\";\n}\n.border-radius{\r\n    border-radius: 15px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/homeModulos.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/homeModulos.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./homeModulos.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/homeModulos.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/homeModulos.vue?vue&type=template&id=5b8406e3&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/homeModulos.vue?vue&type=template&id=5b8406e3& ***!
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
  return _c("div", { staticClass: "fondo-lista" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-sm-10", attrs: { id: "crud" } }, [
        _c("div", { staticClass: "custom-card text-center" }, [
          _c(
            "h3",
            {
              staticClass:
                "card-header col-md-6 fondoAzul letra-boldfont mx-auto",
              staticStyle: { "border-radius": "15px" }
            },
            [_vm._v(_vm._s(_vm.nameArea))]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _vm._m(0),
            _vm._v(" "),
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
                attrs: { type: "text", placeholder: "Módulo" },
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
                    staticClass: "table-hover",
                    staticStyle: {
                      "border-collapse": "separate !important",
                      "border-spacing": "0px 5px"
                    }
                  },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.filteredRows, function(row, index) {
                        return _c(
                          "tr",
                          { key: index },
                          [
                            row.id_classroom == _vm.classroom &&
                            row.id_area == _vm.id_area
                              ? [
                                  _c("td", {
                                    staticClass:
                                      "btn-trikele border-radius letra-boldfont",
                                    staticStyle: {
                                      "font-size": "16px",
                                      "border-radius": "15px"
                                    },
                                    attrs: { width: "200px" },
                                    domProps: {
                                      innerHTML: _vm._s(
                                        _vm.highlightMatches(row.text)
                                      )
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("td", {
                                    staticClass: "letra-poppins",
                                    staticStyle: { "font-size": "16px" },
                                    domProps: {
                                      innerHTML: _vm._s(
                                        _vm.highlightMatches(row.class)
                                      )
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("td", { attrs: { width: "250px" } }, [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "btn btn-Azul letra-boldfont border-radius",
                                        attrs: {
                                          href: "/modulo_clases/" + row.id
                                        }
                                      },
                                      [_vm._v("Ver más")]
                                    )
                                  ])
                                ]
                              : _vm._e()
                          ],
                          2
                        )
                      }),
                      0
                    )
                  ]
                )
              ]
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _vm._m(3)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c(
        "p",
        {
          staticStyle: {
            "background-color": "#ffffff8f",
            color: "#747070",
            padding: "20px"
          }
        },
        [
          _vm._v("Con el plan mensual por $199.900, "),
          _c("br"),
          _vm._v(" puedes comprar todas las materias de un grado.")
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "etiqueta-trikele" }, [
          _vm._v("Módulos (temas)")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "etiqueta-trikele" }, [_vm._v("Descripción")]),
        _vm._v(" "),
        _c("th", [
          _c(
            "a",
            {
              staticClass:
                "btn btn-lg btn-trikele border-radius letra-boldfont",
              attrs: { href: "/compra/plan/MENSUAL/resumen" }
            },
            [_vm._v("Ver plan mensual\n                          ")]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "padding-20", staticStyle: { "text-align": "center" } },
      [
        _c("a", { attrs: { href: "/compra/plan/MENSUAL/resumen" } }, [
          _c("img", {
            attrs: {
              src: "/uploads/home/banner-compra.png",
              width: "70%",
              alt: ""
            }
          })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group text-center" }, [
      _c("img", { attrs: { src: "/uploads/home/recurso9.png" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/homeModulos.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/homeModulos.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homeModulos_vue_vue_type_template_id_5b8406e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeModulos.vue?vue&type=template&id=5b8406e3& */ "./resources/js/components/homeModulos.vue?vue&type=template&id=5b8406e3&");
/* harmony import */ var _homeModulos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeModulos.vue?vue&type=script&lang=js& */ "./resources/js/components/homeModulos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _homeModulos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homeModulos.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/homeModulos.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _homeModulos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _homeModulos_vue_vue_type_template_id_5b8406e3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _homeModulos_vue_vue_type_template_id_5b8406e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/homeModulos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/homeModulos.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/homeModulos.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homeModulos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./homeModulos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/homeModulos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homeModulos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/homeModulos.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/homeModulos.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_homeModulos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./homeModulos.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/homeModulos.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_homeModulos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_homeModulos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_homeModulos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_homeModulos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_homeModulos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/homeModulos.vue?vue&type=template&id=5b8406e3&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/homeModulos.vue?vue&type=template&id=5b8406e3& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeModulos_vue_vue_type_template_id_5b8406e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./homeModulos.vue?vue&type=template&id=5b8406e3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/homeModulos.vue?vue&type=template&id=5b8406e3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeModulos_vue_vue_type_template_id_5b8406e3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeModulos_vue_vue_type_template_id_5b8406e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);