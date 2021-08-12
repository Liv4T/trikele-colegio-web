(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lectivesTeacherActivityComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lectivesTeacherActivityComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["id_lective_planification", "id_weekly_plan", "id_course"],
  data: function data() {
    return {
      errors: [],
      planification: {},
      course: {},
      activity: {
        activity_type: '',
        name: '',
        description: '',
        achievement: '',
        indicator: '',
        module: {},
        is_complete: false,
        delivery_date: '',
        feedback_date: ''
      },
      indicators: [],
      activities: []
    };
  },
  mounted: function mounted() {
    this.getPlanificationEvent();
    this.getCourseEvent();
    this.getActivitiesEvent();
  },
  methods: {
    validateActivity: function validateActivity() {
      this.activity.is_complete = false;
      if (!this.activity.name) return;
      if (!this.activity.activity_type) return;
      if (!this.activity.description) return;
      if (!this.activity.achievement) return;
      if (!this.activity.indicator) return;
      if (!this.activity.delivery_date) return;
      if (!this.activity.feedback_date) return;

      switch (this.activity.activity_type) {
        case 'ENCUESTA_UNICA_RTA':
          if (!this.activity.module) return;
          this.activity.module.questions.forEach(function (q) {
            if (!q.justify) return;
            if (!q.valid_answer_index > q.options.length - 1) return;
            q.options.forEach(function (op) {
              if (op.content == '' || op.content == null) return;
            });
          });
          break;
      }

      this.activity.is_complete = true;
    },
    redirectToHome: function redirectToHome() {
      window.location = "/teacher/lectives/courses";
    },
    getCourseEvent: function getCourseEvent() {
      var _this = this;

      axios.get("/api/lectives/planification/".concat(this.id_lective_planification, "/weekly/").concat(this.id_weekly_plan, "/course/").concat(this.id_course)).then(function (response) {
        _this.course = response.data;
      });
    },
    getActivitiesEvent: function getActivitiesEvent() {
      var _this2 = this;

      axios.get("/api/lectives/planification/".concat(this.id_lective_planification, "/weekly/").concat(this.id_weekly_plan, "/course/").concat(this.id_course, "/activity")).then(function (response) {
        _this2.activities = response.data;
      });
    },
    getPlanificationEvent: function getPlanificationEvent() {
      var _this3 = this;

      axios.get("/api/lectives/planification/".concat(this.id_lective_planification)).then(function (response) {
        _this3.planification = response.data;
      });
    },
    getIndicatorEvent: function getIndicatorEvent($event) {
      var _this4 = this;

      this.activity.indicator = '';
      this.indicators = [];
      axios.get("/api/lectives/planification/".concat(this.id_lective_planification, "/achievement/").concat(this.activity.achievement.id)).then(function (response) {
        _this4.indicators = response.data;
      });
    },
    selectActivityType: function selectActivityType($event) {
      switch (this.activity.activity_type) {
        case 'ENCUESTA_UNICA_RTA':
          this.activity.module = {
            questions: [{
              question: '',
              type_question: 'SIMPLE_RTA',
              options: [{
                content: ''
              }, {
                content: ''
              }],
              valid_answer_index: 0,
              justify: ''
            }]
          };
          break;
      }
    },
    saveData: function saveData() {
      var _this5 = this;

      axios.put("/api/lectives/planification/".concat(this.id_lective_planification, "/weekly/").concat(this.id_weekly_plan, "/course/").concat(this.id_course, "/activity"), this.activity).then(function (response) {
        toastr.success("Nueva actividad creada exitosamente");

        _this5.redirectToHome();
      });
    },

    /* MODULE QUESTION METHODS*/
    AddQuestion: function AddQuestion() {
      this.activity.module.questions.push({
        question: '',
        type_question: 'SIMPLE_RTA',
        options: [{
          content: ''
        }, {
          content: ''
        }],
        valid_answer_index: 0,
        justify: ''
      });
    },
    AddOptionOnQuestion: function AddOptionOnQuestion(index) {
      this.activity.module.questions[index].options.push({
        content: ''
      });
    },
    RemoveOptionOnQuestion: function RemoveOptionOnQuestion(index_question, index) {
      this.activity.module.questions[index_question].options.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lectivesTeacherActivityComponent.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lectivesTeacherActivityComponent.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.form-activity{\r\n  width:100%;\r\n  margin-top:30px;\n}\n.form-activity>.form-group{\r\n  display:flex;\r\n  flex-direction:column;\r\n  align-items:flex-start !important;\n}\n.form-activity>.form-group-center{\r\n  display:flex;\r\n  flex-direction:column;\r\n  align-items:center !important;\n}\n.form-activity>.form-group>label{\r\n  text-align:left !important;\n}\n.form-activity>.form-group input{\r\n  width:40%;\n}\n.required{\r\n  color:red;\n}\n.card-grey{\r\n  background-color:#f2f2f2;\n}\n.questionary-module{\r\n  padding:20px;\n}\n.q-option{\r\n  padding:10px;\n}\n.div-icon-add{\r\n  display:flex;\r\n  flex-direction:row;\r\n  justify-content:center;\r\n  align-items:center;\n}\n.icon-add{\r\n  background-color:#f2f2f2;\r\n  height:30px;\r\n  width:40px;\r\n  border:2px solid #8f8f8f;\r\n  border-radius:5px;\r\n  display:flex;\r\n  flex-direction:row;\r\n  justify-content:center;\r\n  align-items:center;\r\n  cursor:default;\r\n \r\n  font-weight:900;\r\n  background-color:#ffc107;color:white;border-color:#ffc107;\n}\n.icon-add:hover{ color:#ffc107;background-color:white;border-color:#ffc107;}\n.icon-remove{\r\n  background-color:#ff004c;\r\n  height:30px;\r\n  width:40px;\r\n  border:2px solid #ff004c;\r\n  border-radius:5px;\r\n  display:flex;\r\n  flex-direction:row;\r\n  justify-content:center;\r\n  align-items:center;\r\n  cursor:default;\r\n \r\n  font-weight:900;\r\n  background-color:#ff004c;color:white;border-color:#ff004c;\n}\n.icon-remove:hover{ color:#ff004c;background-color:white;border-color:#ff004c;}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lectivesTeacherActivityComponent.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lectivesTeacherActivityComponent.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./lectivesTeacherActivityComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lectivesTeacherActivityComponent.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lectivesTeacherActivityComponent.vue?vue&type=template&id=4738691c&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lectivesTeacherActivityComponent.vue?vue&type=template&id=4738691c& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "col-md-10 mx-auto" }, [
          _c("div", { staticClass: "custom-card text-center" }, [
            _c("h3", { staticClass: "card-header fondo" }, [
              _vm._v("Actividad")
            ]),
            _vm._v(" "),
            _c(
              "form",
              { staticClass: "form-activity", attrs: { novalidate: "" } },
              [
                _c("div", { staticClass: "form-group form-group-center" }, [
                  _c(
                    "label",
                    { staticClass: "lbl-f-input", attrs: { for: "" } },
                    [_vm._v("Clase:")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.course.name,
                        expression: "course.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", readonly: "" },
                    domProps: { value: _vm.course.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.course, "name", $event.target.value)
                      }
                    }
                  })
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "form",
                  { staticClass: "form-activity", attrs: { novalidate: "" } },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "form-group col-8" }, [
                        _vm._m(1),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.activity.name,
                              expression: "activity.name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "activity_name" },
                          domProps: { value: _vm.activity.name },
                          on: {
                            change: function($event) {
                              return _vm.validateActivity($event)
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.activity,
                                "name",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-4" }, [
                        _vm._m(2),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.activity.activity_type,
                                expression: "activity.activity_type"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { id: "activity_type" },
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.activity,
                                    "activity_type",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                                function($event) {
                                  _vm.selectActivityType($event)
                                  _vm.validateActivity($event)
                                }
                              ]
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("-- Seleccione --")
                            ]),
                            _vm._v(" "),
                            _c(
                              "option",
                              { attrs: { value: "ENCUESTA_UNICA_RTA" } },
                              [_vm._v("Cuestionario respuesta única")]
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "form-group col-12" }, [
                        _vm._m(3),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.activity.description,
                              expression: "activity.description"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            id: "activity_description",
                            placeholder:
                              "Explicación o síntesis de la actividad"
                          },
                          domProps: { value: _vm.activity.description },
                          on: {
                            change: function($event) {
                              return _vm.validateActivity($event)
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.activity,
                                "description",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "form-group col-6" }, [
                        _vm._m(4),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.activity.achievement,
                                expression: "activity.achievement"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.activity,
                                    "achievement",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                                function($event) {
                                  _vm.getIndicatorEvent($event)
                                  _vm.validateActivity($event)
                                }
                              ]
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("-- Seleccione --")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.planification.achievements, function(
                              achievement
                            ) {
                              return _c(
                                "option",
                                { domProps: { value: achievement } },
                                [_vm._v(_vm._s(achievement.content))]
                              )
                            })
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-6" }, [
                        _vm._m(5),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.activity.indicator,
                                expression: "activity.indicator"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.activity,
                                    "indicator",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                                function($event) {
                                  return _vm.validateActivity($event)
                                }
                              ]
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("-- Seleccione --")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.indicators, function(indicator) {
                              return _c(
                                "option",
                                { domProps: { value: indicator } },
                                [
                                  _vm._v(
                                    _vm._s(indicator.type_activity) +
                                      "  ( " +
                                      _vm._s(indicator.rate) +
                                      "% )"
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "form-group col-6" }, [
                        _vm._m(6),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.activity.delivery_date,
                              expression: "activity.delivery_date"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "date", id: "delivery_date" },
                          domProps: { value: _vm.activity.delivery_date },
                          on: {
                            change: function($event) {
                              return _vm.validateActivity($event)
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.activity,
                                "delivery_date",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-6" }, [
                        _vm._m(7),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.activity.feedback_date,
                              expression: "activity.feedback_date"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "date", id: "feedback_date" },
                          domProps: { value: _vm.activity.feedback_date },
                          on: {
                            change: function($event) {
                              return _vm.validateActivity($event)
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.activity,
                                "feedback_date",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-12" }, [
                        _vm.activity.activity_type
                          ? _c("div", { staticClass: "card card-grey" }, [
                              _vm.activity.activity_type == "ENCUESTA_UNICA_RTA"
                                ? _c(
                                    "div",
                                    { staticClass: "questionary-module" },
                                    [
                                      _c("div", { staticClass: "row" }, [
                                        _vm._m(8),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-6 text-right" },
                                          [
                                            _c(
                                              "button",
                                              {
                                                staticClass: "btn btn-warning",
                                                on: {
                                                  click: function($event) {
                                                    $event.preventDefault()
                                                    return _vm.AddQuestion()
                                                  }
                                                }
                                              },
                                              [_vm._v("Agregar pregunta")]
                                            )
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _vm._l(
                                        _vm.activity.module.questions,
                                        function(question, k_q) {
                                          return _c(
                                            "div",
                                            { staticClass: "row" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "col-12" },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "row" },
                                                    [
                                                      _c(
                                                        "label",
                                                        {
                                                          attrs: {
                                                            for: "question"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "required"
                                                            },
                                                            [_vm._v("*")]
                                                          ),
                                                          _vm._v(
                                                            "Pregunta N°" +
                                                              _vm._s(k_q + 1) +
                                                              ":"
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("textarea", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              question.content,
                                                            expression:
                                                              "question.content"
                                                          }
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          id: "question"
                                                        },
                                                        domProps: {
                                                          value:
                                                            question.content
                                                        },
                                                        on: {
                                                          change: function(
                                                            $event
                                                          ) {
                                                            return _vm.validateActivity(
                                                              $event
                                                            )
                                                          },
                                                          input: function(
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              question,
                                                              "content",
                                                              $event.target
                                                                .value
                                                            )
                                                          }
                                                        }
                                                      })
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _vm._l(
                                                    question.options,
                                                    function(option, k_op) {
                                                      return _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "row q-option"
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-11"
                                                            },
                                                            [
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      option.content,
                                                                    expression:
                                                                      "option.content"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "form-control",
                                                                attrs: {
                                                                  type: "text",
                                                                  placeholder:
                                                                    "Opción " +
                                                                    (k_op + 1)
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    option.content
                                                                },
                                                                on: {
                                                                  change: function(
                                                                    $event
                                                                  ) {
                                                                    return _vm.validateActivity(
                                                                      $event
                                                                    )
                                                                  },
                                                                  input: function(
                                                                    $event
                                                                  ) {
                                                                    if (
                                                                      $event
                                                                        .target
                                                                        .composing
                                                                    ) {
                                                                      return
                                                                    }
                                                                    _vm.$set(
                                                                      option,
                                                                      "content",
                                                                      $event
                                                                        .target
                                                                        .value
                                                                    )
                                                                  }
                                                                }
                                                              })
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-1 div-icon-add"
                                                            },
                                                            [
                                                              k_op == 0
                                                                ? _c(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "icon-add",
                                                                      attrs: {
                                                                        alt:
                                                                          "Agregar opción"
                                                                      },
                                                                      on: {
                                                                        click: function(
                                                                          $event
                                                                        ) {
                                                                          $event.preventDefault()
                                                                          return _vm.AddOptionOnQuestion(
                                                                            k_q
                                                                          )
                                                                        }
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "+"
                                                                      )
                                                                    ]
                                                                  )
                                                                : _vm._e(),
                                                              _vm._v(" "),
                                                              k_op > 1
                                                                ? _c(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "icon-remove",
                                                                      attrs: {
                                                                        alt:
                                                                          "Remover opción"
                                                                      },
                                                                      on: {
                                                                        click: function(
                                                                          $event
                                                                        ) {
                                                                          $event.preventDefault()
                                                                          return _vm.RemoveOptionOnQuestion(
                                                                            k_q,
                                                                            k_op
                                                                          )
                                                                        }
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "-"
                                                                      )
                                                                    ]
                                                                  )
                                                                : _vm._e()
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    }
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    { staticClass: "row" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass: "col-6"
                                                        },
                                                        [
                                                          _vm._m(9, true),
                                                          _vm._v(" "),
                                                          _c(
                                                            "select",
                                                            {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    question.valid_answer_index,
                                                                  expression:
                                                                    "question.valid_answer_index"
                                                                }
                                                              ],
                                                              staticClass:
                                                                "form-control",
                                                              on: {
                                                                change: [
                                                                  function(
                                                                    $event
                                                                  ) {
                                                                    var $$selectedVal = Array.prototype.filter
                                                                      .call(
                                                                        $event
                                                                          .target
                                                                          .options,
                                                                        function(
                                                                          o
                                                                        ) {
                                                                          return o.selected
                                                                        }
                                                                      )
                                                                      .map(
                                                                        function(
                                                                          o
                                                                        ) {
                                                                          var val =
                                                                            "_value" in
                                                                            o
                                                                              ? o._value
                                                                              : o.value
                                                                          return val
                                                                        }
                                                                      )
                                                                    _vm.$set(
                                                                      question,
                                                                      "valid_answer_index",
                                                                      $event
                                                                        .target
                                                                        .multiple
                                                                        ? $$selectedVal
                                                                        : $$selectedVal[0]
                                                                    )
                                                                  },
                                                                  function(
                                                                    $event
                                                                  ) {
                                                                    return _vm.validateActivity(
                                                                      $event
                                                                    )
                                                                  }
                                                                ]
                                                              }
                                                            },
                                                            _vm._l(
                                                              question.options,
                                                              function(
                                                                option,
                                                                k_op
                                                              ) {
                                                                return _c(
                                                                  "option",
                                                                  {
                                                                    domProps: {
                                                                      value: k_op
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        option.content
                                                                      )
                                                                    )
                                                                  ]
                                                                )
                                                              }
                                                            ),
                                                            0
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass: "col-6"
                                                        },
                                                        [
                                                          _vm._m(10, true),
                                                          _vm._v(" "),
                                                          _c("textarea", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  question.justify,
                                                                expression:
                                                                  "question.justify"
                                                              }
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              id:
                                                                "question-answer"
                                                            },
                                                            domProps: {
                                                              value:
                                                                question.justify
                                                            },
                                                            on: {
                                                              change: function(
                                                                $event
                                                              ) {
                                                                return _vm.validateActivity(
                                                                  $event
                                                                )
                                                              },
                                                              input: function(
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  question,
                                                                  "justify",
                                                                  $event.target
                                                                    .value
                                                                )
                                                              }
                                                            }
                                                          })
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ],
                                                2
                                              )
                                            ]
                                          )
                                        }
                                      )
                                    ],
                                    2
                                  )
                                : _vm._e()
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "form-group col-12 text-right" },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-warning",
                              attrs: { disabled: !_vm.activity.is_complete },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.saveData()
                                }
                              }
                            },
                            [_vm._v(" Guardar y enviar")]
                          )
                        ]
                      )
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
    return _c("label", { attrs: { for: "activity_name" } }, [
      _c("span", { staticClass: "required" }, [_vm._v("*")]),
      _vm._v("Nombre de la actividad")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "activity_type" } }, [
      _c("span", { staticClass: "required" }, [_vm._v("*")]),
      _vm._v("Tipo de actividad")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "activity_description" } }, [
      _c("span", { staticClass: "required" }, [_vm._v("*")]),
      _vm._v("Descripción")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "activity_name" } }, [
      _c("span", { staticClass: "required" }, [_vm._v("*")]),
      _vm._v("Logro")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "activity_name" } }, [
      _c("span", { staticClass: "required" }, [_vm._v("*")]),
      _vm._v("Indicador")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "delivery_date" } }, [
      _c("span", { staticClass: "required" }, [_vm._v("*")]),
      _vm._v("Fechad de entrega")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "feedback_date" } }, [
      _c("span", { staticClass: "required" }, [_vm._v("*")]),
      _vm._v("Fecha de retroalimentación")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6 text-left" }, [
      _c("h5", [_vm._v("Cuestionario respuesta única")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "question" } }, [
      _c("span", { staticClass: "required" }, [_vm._v("*")]),
      _vm._v("Respuesta correcta:")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "question-answer" } }, [
      _c("span", { staticClass: "required" }, [_vm._v("*")]),
      _vm._v("Justificación:")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/lectivesTeacherActivityComponent.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/lectivesTeacherActivityComponent.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lectivesTeacherActivityComponent_vue_vue_type_template_id_4738691c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lectivesTeacherActivityComponent.vue?vue&type=template&id=4738691c& */ "./resources/js/components/lectivesTeacherActivityComponent.vue?vue&type=template&id=4738691c&");
/* harmony import */ var _lectivesTeacherActivityComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lectivesTeacherActivityComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/lectivesTeacherActivityComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _lectivesTeacherActivityComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lectivesTeacherActivityComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/lectivesTeacherActivityComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _lectivesTeacherActivityComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _lectivesTeacherActivityComponent_vue_vue_type_template_id_4738691c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _lectivesTeacherActivityComponent_vue_vue_type_template_id_4738691c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/lectivesTeacherActivityComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/lectivesTeacherActivityComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/lectivesTeacherActivityComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lectivesTeacherActivityComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./lectivesTeacherActivityComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lectivesTeacherActivityComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lectivesTeacherActivityComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/lectivesTeacherActivityComponent.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/lectivesTeacherActivityComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_lectivesTeacherActivityComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./lectivesTeacherActivityComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lectivesTeacherActivityComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_lectivesTeacherActivityComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_lectivesTeacherActivityComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_lectivesTeacherActivityComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_lectivesTeacherActivityComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_lectivesTeacherActivityComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/lectivesTeacherActivityComponent.vue?vue&type=template&id=4738691c&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/lectivesTeacherActivityComponent.vue?vue&type=template&id=4738691c& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lectivesTeacherActivityComponent_vue_vue_type_template_id_4738691c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./lectivesTeacherActivityComponent.vue?vue&type=template&id=4738691c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lectivesTeacherActivityComponent.vue?vue&type=template&id=4738691c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lectivesTeacherActivityComponent_vue_vue_type_template_id_4738691c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lectivesTeacherActivityComponent_vue_vue_type_template_id_4738691c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);