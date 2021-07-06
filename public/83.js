(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[83],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/porcentajeNotas.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/porcentajeNotas.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["id_area", "id_classroom"],
  data: function data() {
    var _ref;

    return _ref = {
      inputs: [{
        name: "",
        contenido: ""
      }],
      inputs1: [{
        name: "",
        porcentaje: ""
      }],
      newTrimestre: [],
      tipo_act: "",
      porcentaje: ""
    }, _defineProperty(_ref, "newTrimestre", []), _defineProperty(_ref, "newLogro", []), _defineProperty(_ref, "trimestre", false), _defineProperty(_ref, "logro_1", ""), _defineProperty(_ref, "logro_2", ""), _defineProperty(_ref, "logro_3", ""), _defineProperty(_ref, "logro_4", ""), _defineProperty(_ref, "fillC", []), _defineProperty(_ref, "fillI", []), _defineProperty(_ref, "anual", []), _defineProperty(_ref, "newAnual", []), _defineProperty(_ref, "errors", []), _defineProperty(_ref, "id_logro", ""), _defineProperty(_ref, "id_indicator", 0), _defineProperty(_ref, "index", 0), _ref;
  },
  mounted: function mounted() {
    var _this = this;

    var urlsel = window.location.origin + "/coursePlanification/" + this.id_area + "/" + this.id_classroom;
    axios.get(urlsel).then(function (response) {
      _this.fillC = response.data;
    });
  },
  methods: {
    getMenu: function getMenu() {
      window.location = "/actividad_g";
    },
    getInd: function getInd() {
      window.location = "/porcentaje/" + this.id_area + "/" + this.id_classroom;
    },
    indicador: function indicador(id) {
      var _this2 = this;

      var urli = window.location.origin + "/getIndicator/" + id;
      axios.get(urli).then(function (response) {
        _this2.fillI = response.data;
        console.log(_this2.fillI);
      });
    },
    add: function add(index) {
      this.inputs.push({
        name: "",
        contenido: ""
      });
    },
    remove: function remove(index) {
      this.inputs.splice(index, 1);
    },
    add1: function add1(index) {
      this.inputs1.push({
        name: "",
        porcentaje: ""
      });
    },
    remove1: function remove1(index) {
      this.inputs1.splice(index, 1);
    },
    createIndicator: function createIndicator() {
      var _this3 = this;

      var url = window.location.origin + "/saveIndicator";
      axios.post(url, {
        //Cursos generales
        id_indicator: this.id_indicator,
        type_activity: this.tipo_act,
        id_annual: this.id_annual,
        id_achievement: this.id_logro,
        activity_rate: this.porcentaje
      }).then(function (response) {
        _this3.errors = [];
        toastr.success("Nueva actividad creada exitosamente");

        _this3.getInd();
      })["catch"](function (error) {
        _this3.errors = error.response.data;
      });
    },
    updateCourses: function updateCourses() {
      window.location = "/actividad_g";
    },
    editNames: function editNames(id, clas) {
      //   var urlr = "showClass/" + clas;
      //   axios.get(urlr).then(response => {
      //     this.fillS = response.data;
      //   });
      this.id_indicator = 0;
      this.id_annual = clas;
      this.id_logro = id;
      this.tipo_act = "";
      this.porcentaje = "";
      $("#createZ").modal("show");
    },
    showEdit: function showEdit(id_porcentaje, tipo_act, porcentaje) {
      //   var urlr = "showClass/" + clas;
      //   axios.get(urlr).then(response => {
      //     this.fillS = response.data;
      //   });
      this.id_indicator = id_porcentaje;
      this.tipo_act = tipo_act;
      this.porcentaje = porcentaje;
      $("#createZ").modal("show");
    },
    removePercentage: function removePercentage(index, id_indicator) {
      this.id_indicator = id_indicator;
      this.index = index;
      $("#deleteZ").modal("show");
    },
    deleteIndicator: function deleteIndicator() {
      var _this4 = this;

      var url = window.location.origin + "/deleteIndicator";
      $("#deleteZ").modal("hide");
      axios.post(url, {
        //Eliminar indicador
        id_indicator: this.id_indicator
      }).then(function (response) {
        _this4.errors = [];
        toastr.success("Actividad eliminada exitosamente");

        _this4.fillI.splice(_this4.index, 1);

        _this4.getInd();
      })["catch"](function (error) {
        _this4.errors = error.response.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/porcentajeNotas.vue?vue&type=template&id=23a35049&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/porcentajeNotas.vue?vue&type=template&id=23a35049& ***!
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
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "back" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-11 mx-auto" }, [
          _c("div", { staticClass: "custom-card text-center" }, [
            _c("h3", { staticClass: "card-header fondo" }, [
              _vm._v("Planificación general")
            ]),
            _vm._v(" "),
            _c(
              "form",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.trimestre == false,
                    expression: "trimestre == false"
                  }
                ],
                staticClass: "needs-validation",
                attrs: { novalidate: "" }
              },
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
                      "finish-button-text": "Guardar"
                    },
                    on: { "on-complete": _vm.updateCourses }
                  },
                  [
                    _c(
                      "tab-content",
                      { attrs: { title: "Porcentaje de notas" } },
                      [
                        _c("div", { staticClass: "card-body" }, [
                          _c(
                            "div",
                            {
                              staticClass: "accordion",
                              attrs: { id: "accordionExample" }
                            },
                            _vm._l(_vm.fillC.achievements, function(option, t) {
                              return _c(
                                "div",
                                { key: t, staticClass: "card" },
                                [
                                  _c("div", { staticClass: "card-header" }, [
                                    _c("h2", { staticClass: "mb-0" }, [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-link",
                                          attrs: {
                                            type: "button",
                                            "data-toggle": "collapse",
                                            "data-target": "#collapse" + t,
                                            "aria-expanded": "false",
                                            "aria-controls": "collapse"
                                          },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.indicador(option.id)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "label",
                                            {
                                              staticStyle: {
                                                "text-overflow": "ellipsis",
                                                width: "450px",
                                                "white-space": "nowrap",
                                                overflow: "hidden"
                                              }
                                            },
                                            [_vm._v(_vm._s(option.achievement))]
                                          ),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: option.percentage,
                                                expression: "option.percentage"
                                              }
                                            ],
                                            staticStyle: { width: "50px" },
                                            attrs: {
                                              type: "number",
                                              disabled: ""
                                            },
                                            domProps: {
                                              value: option.percentage
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  option,
                                                  "percentage",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          }),
                                          _vm._v(
                                            "\r\n                            %\r\n                          "
                                          )
                                        ]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "collapse hide",
                                      attrs: {
                                        id: "collapse" + t,
                                        "aria-labelledby": "heading",
                                        "data-parent": "#accordionExample"
                                      }
                                    },
                                    [
                                      _c("div", { staticClass: "card-body" }, [
                                        _c(
                                          "table",
                                          {
                                            staticClass:
                                              "table table-responsive-xl table-hover table-striped center"
                                          },
                                          [
                                            _c(
                                              "tbody",
                                              [
                                                _c("tr", [
                                                  _c("td", [
                                                    _vm._v("Actividad")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v("Porcentaje")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [_vm._v("Editar")]),
                                                  _vm._v(" "),
                                                  _c("td", [_vm._v("Eliminar")])
                                                ]),
                                                _vm._v(" "),
                                                _vm._l(_vm.fillI, function(
                                                  opt,
                                                  i
                                                ) {
                                                  return _c("tr", [
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          opt.type_activity
                                                        )
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          opt.activity_rate
                                                        )
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _c("a", {
                                                        staticClass:
                                                          "fas fa-edit",
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            $event.preventDefault()
                                                            return _vm.showEdit(
                                                              opt.id,
                                                              opt.type_activity,
                                                              opt.activity_rate
                                                            )
                                                          }
                                                        }
                                                      })
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _c("a", {
                                                        staticClass:
                                                          "fas fa-trash-alt",
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            $event.preventDefault()
                                                            return _vm.removePercentage(
                                                              i,
                                                              opt.id
                                                            )
                                                          }
                                                        }
                                                      })
                                                    ])
                                                  ])
                                                })
                                              ],
                                              2
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { attrs: { align: "right" } },
                                          [
                                            _c(
                                              "a",
                                              {
                                                staticClass: "btn btn-warning",
                                                on: {
                                                  click: function($event) {
                                                    $event.preventDefault()
                                                    return _vm.editNames(
                                                      option.id,
                                                      option.id_planification
                                                    )
                                                  }
                                                }
                                              },
                                              [_vm._v("Agregar")]
                                            )
                                          ]
                                        )
                                      ])
                                    ]
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ])
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "modal fade", attrs: { id: "createZ" } }, [
          _c("div", { staticClass: "modal-dialog" }, [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "card" }, [
                _vm._m(1),
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
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v("Tipo de actividad")
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.tipo_act,
                                    expression: "tipo_act"
                                  }
                                ],
                                staticClass: "form-control",
                                staticStyle: { background: "gainsboro" },
                                attrs: {
                                  type: "text",
                                  name: "objetive1",
                                  required: ""
                                },
                                domProps: { value: _vm.tipo_act },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.tipo_act = $event.target.value
                                  }
                                }
                              })
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row mx-auto" }, [
                        _c(
                          "div",
                          { staticClass: "col-md-8 text-center mx-auto" },
                          [
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v("Porcentaje total")
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.porcentaje,
                                    expression: "porcentaje"
                                  }
                                ],
                                staticClass: "form-control",
                                staticStyle: { background: "gainsboro" },
                                attrs: {
                                  type: "number",
                                  name: "objetive1",
                                  required: ""
                                },
                                domProps: { value: _vm.porcentaje },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.porcentaje = $event.target.value
                                  }
                                }
                              })
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "modal-footer" }, [
                        _c("input", {
                          staticClass: "btn btn-warning",
                          attrs: { type: "submit", value: "Guardar" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.createIndicator()
                            }
                          }
                        })
                      ])
                    ]
                  )
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "modal fade", attrs: { id: "deleteZ" } }, [
          _c("div", { staticClass: "modal-dialog" }, [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "card" }, [
                _vm._m(2),
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
                      _c("label", [_vm._v("¿Desea eliminar el indicador?")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "modal-footer" }, [
                        _c("input", {
                          staticClass: "btn btn-warning",
                          attrs: { type: "submit", value: "Confirmar" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.deleteIndicator()
                            }
                          }
                        })
                      ])
                    ]
                  )
                ])
              ])
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
    return _c("head", [
      _c("link", {
        attrs: {
          rel: "stylesheet",
          href: "https://use.fontawesome.com/releases/v5.8.2/css/solid.css",
          integrity:
            "sha384-ioUrHig76ITq4aEJ67dHzTvqjsAP/7IzgwE7lgJcg2r7BRNGYSK0LwSmROzYtgzs",
          crossorigin: "anonymous"
        }
      }),
      _vm._v(" "),
      _c("link", {
        attrs: {
          rel: "stylesheet",
          href: "https://use.fontawesome.com/releases/v5.8.2/css/brands.css",
          integrity:
            "sha384-i2PyM6FMpVnxjRPi0KW/xIS7hkeSznkllv+Hx/MtYDaHA5VcF0yL3KVlvzp8bWjQ",
          crossorigin: "anonymous"
        }
      }),
      _vm._v(" "),
      _c("link", {
        attrs: {
          rel: "stylesheet",
          href:
            "https://use.fontawesome.com/releases/v5.8.2/css/fontawesome.css",
          integrity:
            "sha384-sri+NftO+0hcisDKgr287Y/1LVnInHJ1l+XC7+FOabmTTIK0HnE2ID+xxvJ21c5J",
          crossorigin: "anonymous"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "card-header fondo text-center" }, [
      _vm._v("\r\n                Porcentaje\r\n                "),
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
    return _c("h3", { staticClass: "card-header fondo text-center" }, [
      _vm._v("\r\n                Eliminar Indicador\r\n                "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_c("span", [_vm._v("×")])]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/porcentajeNotas.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/porcentajeNotas.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _porcentajeNotas_vue_vue_type_template_id_23a35049___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./porcentajeNotas.vue?vue&type=template&id=23a35049& */ "./resources/js/components/porcentajeNotas.vue?vue&type=template&id=23a35049&");
/* harmony import */ var _porcentajeNotas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./porcentajeNotas.vue?vue&type=script&lang=js& */ "./resources/js/components/porcentajeNotas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _porcentajeNotas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _porcentajeNotas_vue_vue_type_template_id_23a35049___WEBPACK_IMPORTED_MODULE_0__["render"],
  _porcentajeNotas_vue_vue_type_template_id_23a35049___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/porcentajeNotas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/porcentajeNotas.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/porcentajeNotas.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_porcentajeNotas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./porcentajeNotas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/porcentajeNotas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_porcentajeNotas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/porcentajeNotas.vue?vue&type=template&id=23a35049&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/porcentajeNotas.vue?vue&type=template&id=23a35049& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_porcentajeNotas_vue_vue_type_template_id_23a35049___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./porcentajeNotas.vue?vue&type=template&id=23a35049& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/porcentajeNotas.vue?vue&type=template&id=23a35049&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_porcentajeNotas_vue_vue_type_template_id_23a35049___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_porcentajeNotas_vue_vue_type_template_id_23a35049___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);