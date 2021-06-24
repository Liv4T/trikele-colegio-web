(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reportesAdm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reportesAdm.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      clases: [],
      descripcion: "",
      logro: "",
      name: "",
      fechaE: "",
      fechaR: "",
      id_act: "",
      errors: [],
      fillS: [],
      inputs: [{
        name: ""
      }]
    };
  },
  created: function created() {},
  mounted: function mounted() {
    var _this = this;

    var urlr = "viewGetWeek";
    axios.get(urlr).then(function (response) {
      _this.clases = response.data;
    });
    console.log("Component mounted.");
  },
  methods: {
    createPlanificacion: function createPlanificacion(clas) {
      //   var urlr = "showClass/" + clas;
      //   axios.get(urlr).then(response => {
      //     this.fillS = response.data;
      //   });
      $("#createPlan").modal("show");
    },
    createE: function createE(clas) {
      //   var urlr = "showClass/" + clas;
      //   axios.get(urlr).then(response => {
      //     this.fillS = response.data;
      //   });
      $("#createNotas").modal("show");
    },
    createPsicologia: function createPsicologia(clas) {
      //   var urlr = "showClass/" + clas;
      //   axios.get(urlr).then(response => {
      //     this.fillS = response.data;
      //   });
      $("#createPsico").modal("show");
    },
    createAsistencia: function createAsistencia(clas) {
      //   var urlr = "showClass/" + clas;
      //   axios.get(urlr).then(response => {
      //     this.fillS = response.data;
      //   });
      $("#createAsis").modal("show");
    },
    add: function add(index) {
      this.inputs.push({
        name: ""
      });
    },
    remove: function remove(index) {
      this.inputs.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reportesAdm.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reportesAdm.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.background2 {\r\n  background: url(" + escape(__webpack_require__(/*! ../assets/img/Fondo5.jpg */ "./resources/js/assets/img/Fondo5.jpg")) + ");\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  position: relative;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reportesAdm.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reportesAdm.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./reportesAdm.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reportesAdm.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reportesAdm.vue?vue&type=template&id=3d1f276d&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reportesAdm.vue?vue&type=template&id=3d1f276d& ***!
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
        _c("div", { staticClass: "card text-center" }, [
          _c("h3", { staticClass: "card-header fondo" }, [_vm._v("Reportes")]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "table",
              {
                staticClass:
                  "table table-responsive-xl table-hover table-striped center"
              },
              [
                _c("tbody", [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [
                      _c(
                        "div",
                        { staticClass: "collapse", attrs: { id: "accordion" } },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-warning",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.createE()
                                }
                              }
                            },
                            [_vm._v("Generar")]
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(1),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [
                      _c(
                        "div",
                        {
                          staticClass: "collapse",
                          attrs: { id: "accordion2" }
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-warning",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.createPlanificacion()
                                }
                              }
                            },
                            [_vm._v("Generar")]
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [
                      _c(
                        "div",
                        {
                          staticClass: "collapse",
                          attrs: { id: "accordion7" }
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-warning",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.createAsistencia()
                                }
                              }
                            },
                            [_vm._v("Generar")]
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(3),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [
                      _c(
                        "div",
                        {
                          staticClass: "collapse",
                          attrs: { id: "accordion4" }
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-warning",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.createPsicologia()
                                }
                              }
                            },
                            [_vm._v("Generar")]
                          )
                        ]
                      )
                    ])
                  ])
                ])
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "modal fade", attrs: { id: "createNotas" } }, [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "card" }, [
              _vm._m(4),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "form",
                  {
                    staticClass: "needs-validation",
                    attrs: { novalidate: "" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "form-group row mx-auto" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-8 text-center mx-auto" },
                        [
                          _c("Label", [_vm._v("Año")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              ref: "seleccionado",
                              staticClass: "form-control",
                              staticStyle: { background: "gainsboro" },
                              attrs: { required: "" }
                            },
                            [
                              _c("option", { attrs: { value: "2" } }, [
                                _vm._v("2020")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "3" } }, [
                                _vm._v("2019")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "3" } }, [
                                _vm._v("2018")
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row mx-auto" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-8 text-center mx-auto" },
                        [
                          _c("Label", [_vm._v("Acumulado")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              ref: "seleccionado",
                              staticClass: "form-control",
                              staticStyle: { background: "gainsboro" },
                              attrs: { required: "" }
                            },
                            [
                              _c("option", { attrs: { value: "2" } }, [
                                _vm._v("Acumulado")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "3" } }, [
                                _vm._v("Estudiante")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "3" } }, [
                                _vm._v("Administrador")
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row mx-auto" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-8 text-center mx-auto" },
                        [
                          _c("Label", [_vm._v("Periodo")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              ref: "seleccionado",
                              staticClass: "form-control",
                              staticStyle: { background: "gainsboro" },
                              attrs: { required: "" }
                            },
                            [
                              _c("option", { attrs: { value: "2" } }, [
                                _vm._v("Periodo")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "3" } }, [
                                _vm._v("Estudiante")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "3" } }, [
                                _vm._v("Administrador")
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row mx-auto" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-8 text-center mx-auto" },
                        [
                          _c("Label", [_vm._v("Curso")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              ref: "seleccionado",
                              staticClass: "form-control",
                              staticStyle: { background: "gainsboro" },
                              attrs: { required: "" }
                            },
                            [
                              _c("option", { attrs: { value: "2" } }, [
                                _vm._v("Curso")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "3" } }, [
                                _vm._v("Estudiante")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "3" } }, [
                                _vm._v("Administrador")
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row mx-auto" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-8 text-center mx-auto" },
                        [
                          _c("Label", [_vm._v("Estado")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              ref: "seleccionado",
                              staticClass: "form-control",
                              staticStyle: { background: "gainsboro" },
                              attrs: { required: "" }
                            },
                            [
                              _c("option", { attrs: { value: "2" } }, [
                                _vm._v("Estado")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "3" } }, [
                                _vm._v("Estudiante")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "3" } }, [
                                _vm._v("Administrador")
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row mx-auto" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-8 text-center mx-auto" },
                        [
                          _c("Label", [_vm._v("Materias")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              ref: "seleccionado",
                              staticClass: "form-control",
                              staticStyle: { background: "gainsboro" },
                              attrs: { required: "" }
                            },
                            [
                              _c("option", { attrs: { value: "2" } }, [
                                _vm._v("Química")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "3" } }, [
                                _vm._v("Físisca")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "3" } }, [
                                _vm._v("Español")
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row mx-auto" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-8 text-center mx-auto" },
                        [
                          _c("Label", [_vm._v("Ranking")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              ref: "seleccionado",
                              staticClass: "form-control",
                              staticStyle: { background: "gainsboro" },
                              attrs: { required: "" }
                            },
                            [
                              _c("option", { attrs: { value: "2" } }, [
                                _vm._v("Top 10")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "3" } }, [
                                _vm._v("Estudiante")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "3" } }, [
                                _vm._v("Administrador")
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(5)
                  ]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "modal fade", attrs: { id: "createPsico" } }, [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "card" }, [
              _vm._m(6),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "form",
                  {
                    staticClass: "needs-validation",
                    attrs: { novalidate: "" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "form-group row mx-auto" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-8 text-center mx-auto" },
                        [
                          _c("Label", [_vm._v("Año")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              ref: "seleccionado",
                              staticClass: "form-control",
                              staticStyle: { background: "gainsboro" },
                              attrs: { required: "" }
                            },
                            [
                              _c("option", { attrs: { value: "2" } }, [
                                _vm._v("2020")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "3" } }, [
                                _vm._v("2019")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "3" } }, [
                                _vm._v("2018")
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row mx-auto" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-8 text-center mx-auto" },
                        [
                          _c("Label", [_vm._v("Acumulado")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              ref: "seleccionado",
                              staticClass: "form-control",
                              staticStyle: { background: "gainsboro" },
                              attrs: { required: "" }
                            },
                            [
                              _c("option", { attrs: { value: "2" } }, [
                                _vm._v("Acumulado")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "3" } }, [
                                _vm._v("Estudiante")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "3" } }, [
                                _vm._v("Administrador")
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row mx-auto" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-8 text-center mx-auto" },
                        [
                          _c("Label", [_vm._v("Periodo")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              ref: "seleccionado",
                              staticClass: "form-control",
                              staticStyle: { background: "gainsboro" },
                              attrs: { required: "" }
                            },
                            [
                              _c("option", { attrs: { value: "2" } }, [
                                _vm._v("Periodo")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "3" } }, [
                                _vm._v("Estudiante")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "3" } }, [
                                _vm._v("Administrador")
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row mx-auto" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-8 text-center mx-auto" },
                        [
                          _c("Label", [_vm._v("Cursos")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              ref: "seleccionado",
                              staticClass: "form-control",
                              staticStyle: { background: "gainsboro" },
                              attrs: { required: "" }
                            },
                            [
                              _c("option", { attrs: { value: "2" } }, [
                                _vm._v("Todos")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "3" } }, [
                                _vm._v("Estudiante")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "3" } }, [
                                _vm._v("Administrador")
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row mx-auto" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-8 text-center mx-auto" },
                        [
                          _c("Label", [_vm._v("Estudiantes")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              ref: "seleccionado",
                              staticClass: "form-control",
                              staticStyle: { background: "gainsboro" },
                              attrs: { required: "" }
                            },
                            [
                              _c("option", { attrs: { value: "2" } }, [
                                _vm._v("Todos")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "3" } }, [
                                _vm._v("Estudiante")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "3" } }, [
                                _vm._v("Administrador")
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(7)
                  ]
                )
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade", attrs: { id: "createAsis" } }, [
      _c("div", { staticClass: "modal-dialog" }, [
        _c("div", { staticClass: "modal-content" }, [
          _c("div", { staticClass: "card" }, [
            _vm._m(8),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c(
                "form",
                {
                  staticClass: "needs-validation",
                  attrs: { novalidate: "" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-group row mx-auto" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-8 text-center mx-auto" },
                      [
                        _c("Label", [_vm._v("Año")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            ref: "seleccionado",
                            staticClass: "form-control",
                            staticStyle: { background: "gainsboro" },
                            attrs: { required: "" }
                          },
                          [
                            _c("option", { attrs: { value: "2" } }, [
                              _vm._v("2020")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "3" } }, [
                              _vm._v("2019")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "3" } }, [
                              _vm._v("2018")
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row mx-auto" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-8 text-center mx-auto" },
                      [
                        _c("Label", [_vm._v("Acumulado")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            ref: "seleccionado",
                            staticClass: "form-control",
                            staticStyle: { background: "gainsboro" },
                            attrs: { required: "" }
                          },
                          [
                            _c("option", { attrs: { value: "2" } }, [
                              _vm._v("Acumulado")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "3" } }, [
                              _vm._v("Estudiante")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "3" } }, [
                              _vm._v("Administrador")
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row mx-auto" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-8 text-center mx-auto" },
                      [
                        _c("Label", [_vm._v("Periodo")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            ref: "seleccionado",
                            staticClass: "form-control",
                            staticStyle: { background: "gainsboro" },
                            attrs: { required: "" }
                          },
                          [
                            _c("option", { attrs: { value: "2" } }, [
                              _vm._v("Periodo")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "3" } }, [
                              _vm._v("Estudiante")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "3" } }, [
                              _vm._v("Administrador")
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row mx-auto" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-8 text-center mx-auto" },
                      [
                        _c("Label", [_vm._v("Curso")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            ref: "seleccionado",
                            staticClass: "form-control",
                            staticStyle: { background: "gainsboro" },
                            attrs: { required: "" }
                          },
                          [
                            _c("option", { attrs: { value: "2" } }, [
                              _vm._v("Curso")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "3" } }, [
                              _vm._v("Estudiante")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "3" } }, [
                              _vm._v("Administrador")
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row mx-auto" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-8 text-center mx-auto" },
                      [
                        _c("Label", [_vm._v("Estado")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            ref: "seleccionado",
                            staticClass: "form-control",
                            staticStyle: { background: "gainsboro" },
                            attrs: { required: "" }
                          },
                          [
                            _c("option", { attrs: { value: "2" } }, [
                              _vm._v("Estado")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "3" } }, [
                              _vm._v("Estudiante")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "3" } }, [
                              _vm._v("Administrador")
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row mx-auto" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-8 text-center mx-auto" },
                      [
                        _c("Label", [_vm._v("Ranking")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            ref: "seleccionado",
                            staticClass: "form-control",
                            staticStyle: { background: "gainsboro" },
                            attrs: { required: "" }
                          },
                          [
                            _c("option", { attrs: { value: "2" } }, [
                              _vm._v("Top 10")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "3" } }, [
                              _vm._v("Estudiante")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "3" } }, [
                              _vm._v("Administrador")
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(9)
                ]
              )
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade", attrs: { id: "createPlan" } }, [
      _c("div", { staticClass: "modal-dialog" }, [
        _c("div", { staticClass: "modal-content" }, [
          _c("div", { staticClass: "card" }, [
            _vm._m(10),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c(
                "form",
                {
                  staticClass: "needs-validation",
                  attrs: { novalidate: "" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-group row mx-auto" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-8 text-center mx-auto" },
                      [
                        _c("Label", [_vm._v("Año")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            ref: "seleccionado",
                            staticClass: "form-control",
                            staticStyle: { background: "gainsboro" },
                            attrs: { required: "" }
                          },
                          [
                            _c("option", { attrs: { value: "2" } }, [
                              _vm._v("2020")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "3" } }, [
                              _vm._v("2019")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "3" } }, [
                              _vm._v("2018")
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row mx-auto" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-8 text-center mx-auto" },
                      [
                        _c("Label", [_vm._v("Docente")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            ref: "seleccionado",
                            staticClass: "form-control",
                            staticStyle: { background: "gainsboro" },
                            attrs: { required: "" }
                          },
                          [
                            _c("option", { attrs: { value: "2" } }, [
                              _vm._v("Todos")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "3" } }, [
                              _vm._v("Estudiante")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "3" } }, [
                              _vm._v("Administrador")
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row mx-auto" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-8 text-center mx-auto" },
                      [
                        _c("Label", [_vm._v("Periodo")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            ref: "seleccionado",
                            staticClass: "form-control",
                            staticStyle: { background: "gainsboro" },
                            attrs: { required: "" }
                          },
                          [
                            _c("option", { attrs: { value: "2" } }, [
                              _vm._v("Periodo")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "3" } }, [
                              _vm._v("Estudiante")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "3" } }, [
                              _vm._v("Administrador")
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row mx-auto" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-8 text-center mx-auto" },
                      [
                        _c("Label", [_vm._v("Cursos")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            ref: "seleccionado",
                            staticClass: "form-control",
                            staticStyle: { background: "gainsboro" },
                            attrs: { required: "" }
                          },
                          [
                            _c("option", { attrs: { value: "2" } }, [
                              _vm._v("Todos")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "3" } }, [
                              _vm._v("Estudiante")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "3" } }, [
                              _vm._v("Administrador")
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(11)
                ]
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
    return _c(
      "tr",
      {
        staticClass: "clickable",
        attrs: { "data-toggle": "collapse", "data-target": "#accordion" }
      },
      [
        _c("td", [_vm._v("Notas")]),
        _vm._v(" "),
        _c("td"),
        _vm._v(" "),
        _c("td"),
        _vm._v(" "),
        _c("td", { staticClass: "float-right" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-sm",
              staticStyle: { color: "grey" },
              attrs: { href: "#" }
            },
            [_c("i", { staticClass: "fas fa-download" })]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "tr",
      {
        staticClass: "clickable",
        attrs: { "data-toggle": "collapse", "data-target": "#accordion2" }
      },
      [
        _c("td", [_vm._v("Planeación")]),
        _vm._v(" "),
        _c("td"),
        _vm._v(" "),
        _c("td"),
        _vm._v(" "),
        _c("td", { staticClass: "float-right" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-sm",
              staticStyle: { color: "grey" },
              attrs: { href: "#" }
            },
            [_c("i", { staticClass: "fas fa-download" })]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "tr",
      {
        staticClass: "clickable",
        attrs: { "data-toggle": "collapse", "data-target": "#accordion7" }
      },
      [
        _c("td", [_vm._v("Asistencia")]),
        _vm._v(" "),
        _c("td"),
        _vm._v(" "),
        _c("td"),
        _vm._v(" "),
        _c("td", { staticClass: "float-right" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-sm",
              staticStyle: { color: "grey" },
              attrs: { href: "#" }
            },
            [_c("i", { staticClass: "fas fa-download" })]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "tr",
      {
        staticClass: "clickable",
        attrs: { "data-toggle": "collapse", "data-target": "#accordion4" }
      },
      [
        _c("td", [_vm._v("Psicologia")]),
        _vm._v(" "),
        _c("td"),
        _vm._v(" "),
        _c("td"),
        _vm._v(" "),
        _c("td", { staticClass: "float-right" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-sm",
              staticStyle: { color: "grey" },
              attrs: { href: "#" }
            },
            [_c("i", { staticClass: "fas fa-download" })]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "card-header fondo text-center" }, [
      _vm._v("\n              Reporte de notas\n              "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_c("span", [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c("input", {
        staticClass: "btn btn-warning",
        attrs: { type: "submit", value: "Exportar" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "card-header fondo text-center" }, [
      _vm._v("\n              Reporte de psicologia\n              "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_c("span", [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c("input", {
        staticClass: "btn btn-warning",
        attrs: { type: "submit", value: "Exportar" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "card-header fondo text-center" }, [
      _vm._v("\n            Reporte de Asistencia\n            "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_c("span", [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c("input", {
        staticClass: "btn btn-warning",
        attrs: { type: "submit", value: "Exportar" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "card-header fondo text-center" }, [
      _vm._v("\n            Reporte de Planificación\n            "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_c("span", [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c("input", {
        staticClass: "btn btn-warning",
        attrs: { type: "submit", value: "Exportar" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/reportesAdm.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/reportesAdm.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reportesAdm_vue_vue_type_template_id_3d1f276d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reportesAdm.vue?vue&type=template&id=3d1f276d& */ "./resources/js/components/reportesAdm.vue?vue&type=template&id=3d1f276d&");
/* harmony import */ var _reportesAdm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reportesAdm.vue?vue&type=script&lang=js& */ "./resources/js/components/reportesAdm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _reportesAdm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reportesAdm.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/reportesAdm.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _reportesAdm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _reportesAdm_vue_vue_type_template_id_3d1f276d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _reportesAdm_vue_vue_type_template_id_3d1f276d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/reportesAdm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/reportesAdm.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/reportesAdm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reportesAdm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./reportesAdm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reportesAdm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reportesAdm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reportesAdm.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/reportesAdm.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reportesAdm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./reportesAdm.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reportesAdm.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reportesAdm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reportesAdm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reportesAdm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reportesAdm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reportesAdm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/reportesAdm.vue?vue&type=template&id=3d1f276d&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/reportesAdm.vue?vue&type=template&id=3d1f276d& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reportesAdm_vue_vue_type_template_id_3d1f276d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./reportesAdm.vue?vue&type=template&id=3d1f276d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reportesAdm.vue?vue&type=template&id=3d1f276d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reportesAdm_vue_vue_type_template_id_3d1f276d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reportesAdm_vue_vue_type_template_id_3d1f276d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);