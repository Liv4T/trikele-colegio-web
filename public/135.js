(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[135],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reportSendParents.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reportSendParents.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      students: [],
      areas: [],
      parent: {},
      dataStudent: {},
      observation: "",
      show_notes: true
    };
  },
  mounted: function mounted() {
    this.getAreasByUser();
  },
  watch: {
    show_notes: function show_notes(new_value) {
      if (new_value === false) {
        this.dataStudent.nota_class = '';
      }
    }
  },
  methods: {
    getAreasByUser: function getAreasByUser() {
      var _this = this;

      axios.get('GetArearByUser').then(function (response) {
        _this.areas = response.data;
      });
    },
    getStudents: function getStudents(data) {
      var _this2 = this;

      axios.get("/api/teacher/area/".concat(data.id, "/classroom/").concat(data.id_classroom, "/student")).then(function (response) {
        _this2.students = response.data;
      });
    },
    sendMessage: function sendMessage(data, area_id, classroom_id) {
      var _this3 = this;

      this.dataInformation = [];
      axios.get("/getAllRecentActivities/".concat(area_id)).then(function (response) {
        var activities = response.data;
        axios.get("/showUser/".concat(data.user_id)).then(function (response) {
          _this3.parent = response.data;
        });
        axios.get("/getNotesBySudentAndArea/".concat(data.user_id, "/").concat(area_id)).then(function (response) {
          var notes = response.data;
          _this3.dataStudent = {};
          _this3.dataStudent = {
            area_id: area_id,
            classroom_id: classroom_id,
            "class": activities.area_name + ' ' + activities.classroom_name,
            logro: activities.logro,
            title_activity: activities.activity_name,
            activity_date: activities.activity_date,
            activity_description: activities.activity_description,
            activity: activities.weekly_plan_driving_question,
            percentage_activity: activities.percentage ? activities.percentage + ' %' : 'Sin progreso Registrado',
            nota_class: notes.score ? notes.score : 0,
            student: data.user_name + ' ' + data.user_lastname,
            email: data.user_email,
            parent_id: _this3.parent.id,
            parent_email: _this3.parent.email ? _this3.parent.email : null,
            parent_name: _this3.parent.name && _this3.parent.last_name ? _this3.parent.name + ' ' + _this3.parent.last_name : null
          };
        });
      });
      $('#reports').modal('show');
    },
    saveData: function saveData() {
      axios.post('resportSendParents', {
        dataStudent: JSON.stringify(this.dataStudent),
        id_parent: this.dataStudent.parent_id,
        id_area: this.dataStudent.area_id,
        id_classroom: this.dataStudent.classroom_id
      }).then(function (response) {
        toastr.success(response.data);
        $('#reports').modal('hide');
      }); // axios.post('sendSingleMessage', {
      //     email: this.dataStudent.parent_email, //'brayantriana22@gmail.com'
      //     subject: `Reporte Mensual del Curso ${this.dataStudent.class} ya ha sido generado, Podras visualizarlo en la plataforma 'https://www.trikele.edu.com' En la sección reportes del menú`,
      //     message: `Reporte ${this.dataStudent.class}`,
      // }).then((response) => {
      //     toastr.success("Mensaje enviado");              
      // }).catch((error) => {
      //     console.log(error)
      // });

      $('#reports').modal('hide');
      this.dataStudent = {};
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reportSendParents.vue?vue&type=template&id=2a710552&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reportSendParents.vue?vue&type=template&id=2a710552& ***!
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
  return _c("div", { staticClass: "back" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-sm-10", attrs: { id: "crud" } }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "div",
              { attrs: { id: "accordion" } },
              _vm._l(_vm.areas, function(data, key) {
                return _c("div", { key: key, staticClass: "card" }, [
                  _c(
                    "div",
                    {
                      staticClass: "card-header",
                      attrs: { id: "headingOne" + data.text.replace(/\s/g, "") }
                    },
                    [
                      _c("h5", { staticClass: "mb-0" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-link",
                            attrs: {
                              "data-toggle": "collapse",
                              "data-target":
                                "#collapseOne" + data.text.replace(/\s/g, ""),
                              "aria-expanded": "true",
                              "aria-controls":
                                "collapseOne" + data.text.replace(/\s/g, "")
                            },
                            on: {
                              click: function() {
                                return _vm.getStudents(data)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(data.text) +
                                "\n                                    "
                            )
                          ]
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "collapse hide",
                      attrs: {
                        id: "collapseOne" + data.text.replace(/\s/g, ""),
                        "aria-labelledby":
                          "headingOne" + data.text.replace(/\s/g, ""),
                        "data-parent": "#accordion"
                      }
                    },
                    [
                      _c("div", { staticClass: "card-body" }, [
                        _c(
                          "table",
                          { staticClass: "table table-striped table-hover" },
                          [
                            _vm._m(1, true),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              _vm._l(_vm.students, function(student, key) {
                                return _c("tr", { key: key }, [
                                  _c("td", [_vm._v(_vm._s(student.user_name))]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(student.user_lastname))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-primary",
                                        on: {
                                          click: function($event) {
                                            return _vm.sendMessage(
                                              student,
                                              data.id,
                                              data.id_classroom
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("Enviar Reporte a Padres")]
                                    )
                                  ])
                                ])
                              }),
                              0
                            )
                          ]
                        )
                      ])
                    ]
                  )
                ])
              }),
              0
            )
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
          id: "reports",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "reportsLabel",
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
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "form-group" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.dataStudent.student))])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _vm._m(4),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.dataStudent.parent_name))])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _vm._m(5),
                  _vm._v(" "),
                  _c("p", [_vm._v(" " + _vm._s(_vm.dataStudent.parent_email))])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-2" }, [
                  _c("div", { staticClass: "form-check" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.show_notes,
                          expression: "show_notes"
                        }
                      ],
                      staticClass: "form-check-input",
                      attrs: {
                        type: "radio",
                        name: "show_notes",
                        id: "showNotes"
                      },
                      domProps: {
                        value: true,
                        checked: _vm._q(_vm.show_notes, true)
                      },
                      on: {
                        change: function($event) {
                          _vm.show_notes = true
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm._m(6)
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-check" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.show_notes,
                          expression: "show_notes"
                        }
                      ],
                      staticClass: "form-check-input",
                      attrs: {
                        type: "radio",
                        name: "show_notes",
                        id: "hideNotes"
                      },
                      domProps: {
                        value: false,
                        checked: _vm._q(_vm.show_notes, false)
                      },
                      on: {
                        change: function($event) {
                          _vm.show_notes = false
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm._m(7)
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.show_notes,
                        expression: "show_notes"
                      }
                    ],
                    staticClass: "form-group"
                  },
                  [
                    _c("strong", [_vm._v("Nota del Estudiante")]),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(_vm.dataStudent.nota_class))])
                  ]
                ),
                _vm._v(" "),
                _c("div", [
                  _c("strong", [_vm._v("Progreso del Estudiante")]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n                            " +
                        _vm._s(_vm.dataStudent.percentage_activity) +
                        "\n                        "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("strong", [_vm._v("Asistencias del Estudiante")]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n                            " +
                        _vm._s(_vm.dataStudent.total_classes) +
                        "\n                        "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Observación")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.dataStudent.observation,
                        expression: "dataStudent.observation"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.dataStudent.observation },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.dataStudent,
                          "observation",
                          $event.target.value
                        )
                      }
                    }
                  })
                ])
              ]),
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
                    on: { click: _vm.saveData }
                  },
                  [_vm._v("Guardar Cambios")]
                )
              ])
            ])
          ]
        )
      ]
    ),
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
        _vm._m(8),
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
        _vm._m(9),
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
        _vm._m(10),
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
          _c("th", { staticClass: "label" }, [_vm._v("NOTA GENERAL")]),
          _vm._v(" "),
          _c("td", { staticClass: "label-content" }, [
            _vm._v(_vm._s(_vm.dataStudent.nota_class))
          ])
        ]),
        _vm._v(" "),
        _vm._m(11),
        _vm._v(" "),
        _c("tr", [
          _c("td"),
          _vm._v(" "),
          _c("th", { staticClass: "label" }, [_vm._v("TOTAL CLASES: ")]),
          _vm._v(" "),
          _c("td", { staticClass: "label-content" }, [
            _vm._v(_vm._s(_vm.dataStudent.total_classes))
          ])
        ]),
        _vm._v(" "),
        _vm._m(12),
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
        _vm._m(13),
        _vm._v(" "),
        _c("tr", [
          _c("th", { staticClass: "label" }, [
            _vm._v("OBSERVACIÓN DEL DOCENTE: ")
          ]),
          _vm._v(" "),
          _c("td", [_vm._v(_vm._s(_vm.observation))])
        ]),
        _vm._v(" "),
        _vm._m(14)
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
      _c("strong", [_vm._v("Reportes")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Nombre")]),
        _vm._v(" "),
        _c("th", [_vm._v("Apellido")]),
        _vm._v(" "),
        _c("th", [_vm._v("acción")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title", attrs: { id: "reportsLabel" } }, [
        _vm._v("Enviar Reporta a Padres")
      ]),
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
    return _c("label", [_c("strong", [_vm._v("Nombre de Estudiante")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_c("strong", [_vm._v("Nombre de Acudiente")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_c("strong", [_vm._v("Email de Acudiente")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-check-label", attrs: { for: "showNotes" } },
      [
        _c("strong", [
          _vm._v(
            "\n                                    Mostrar Nota\n                                "
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
      "label",
      { staticClass: "form-check-label", attrs: { for: "hideNotes" } },
      [
        _c("strong", [
          _vm._v(
            "\n                                    Ocultar Nota\n                                "
          )
        ])
      ]
    )
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

/***/ "./resources/js/components/reportSendParents.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/reportSendParents.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reportSendParents_vue_vue_type_template_id_2a710552___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reportSendParents.vue?vue&type=template&id=2a710552& */ "./resources/js/components/reportSendParents.vue?vue&type=template&id=2a710552&");
/* harmony import */ var _reportSendParents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reportSendParents.vue?vue&type=script&lang=js& */ "./resources/js/components/reportSendParents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _reportSendParents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _reportSendParents_vue_vue_type_template_id_2a710552___WEBPACK_IMPORTED_MODULE_0__["render"],
  _reportSendParents_vue_vue_type_template_id_2a710552___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/reportSendParents.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/reportSendParents.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/reportSendParents.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reportSendParents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./reportSendParents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reportSendParents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reportSendParents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reportSendParents.vue?vue&type=template&id=2a710552&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/reportSendParents.vue?vue&type=template&id=2a710552& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reportSendParents_vue_vue_type_template_id_2a710552___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./reportSendParents.vue?vue&type=template&id=2a710552& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reportSendParents.vue?vue&type=template&id=2a710552&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reportSendParents_vue_vue_type_template_id_2a710552___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reportSendParents_vue_vue_type_template_id_2a710552___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);