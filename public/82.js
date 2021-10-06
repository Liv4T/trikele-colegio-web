(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShowTaller.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ShowTaller.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var firebaseConfig = {
  apiKey: "AIzaSyBUwPOBHWgSv10yWDO0VX_UCCOfHZ3jKYE",
  authDomain: "liv4t-skool.firebaseapp.com",
  databaseURL: "https://liv4t-skool.firebaseio.com",
  projectId: "liv4t-skool",
  storageBucket: "liv4t-skool.appspot.com",
  messagingSenderId: "346718353628",
  appId: "1:346718353628:web:abc0666c41b66fa472dc19",
  measurementId: "G-7L14TG5RRZ"
}; // Initialize Firebase

firebase__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(firebaseConfig);
firebase__WEBPACK_IMPORTED_MODULE_0__["default"].analytics();
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['id_achievement', 'id_class', 'type_user', 'id_bimestre', 'id_workshop', 'backPage'],
  data: function data() {
    return {
      course: [],
      activeClass: 1,
      bimestres: [],
      file: null,
      loading: false,
      urlFile: null
    };
  },
  watch: {
    id_class: function id_class(newVal) {
      if (newVal) {
        this.getData();
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.id_class !== null) {
      this.getData();
      axios.get('bimestres').then(function (response) {
        _this.bimestres = response.data;
      });
    }
  },
  methods: {
    getData: function getData() {
      var _this2 = this;

      axios.get("/api/teacher/module/".concat(this.id_achievement, "/class/").concat(this.id_class)).then(function (response) {
        _this2.course = response.data;

        if (_this2.course.content.length == 0) {
          _this2.course.content = [{
            content_type: 'YOUTUBE',
            content: '',
            description: ''
          }, {
            content_type: 'LINK',
            content: '',
            description: ''
          }, {
            content_type: 'DOCUMENT',
            content: '',
            description: ''
          }];
        }

        if (_this2.course.activities.length > 0) {
          _this2.course.activities.forEach(function (act) {
            act.delivery_max_date = act.delivery_max_date ? act.delivery_max_date && delivery_max_date.replace(" ", "T") : '';
            act.feedback_date = act.feedback_date.replace(" ", "T");

            _this2.GetIndicatorsEvent(act);
          });
        }
      });
    },
    changeTab: function changeTab(data) {
      this.activeClass = data;
    },
    saveData: function saveData() {
      axios.put("/api/teacher/module/".concat(this.course.id_weekly_plan, "/class"), this.course).then(function (response) {
        toastr.success("Clases actualizadas correctamente");
      }, function (error) {
        console.log(error);
        toastr.error("ERROR:Por favor valide que la información esta completa");
      });
    },
    getFile: function getFile(e) {
      this.file = e.target.files[0];
    },
    saveFile: function saveFile() {
      var storageRef = firebase__WEBPACK_IMPORTED_MODULE_0__["default"].storage().ref();
      var id = this.id_workshop;
      var imageRef = storageRef.child("images/".concat(this.file.name));
      imageRef.put(this.file).then(function (snapshot) {
        snapshot.ref.getDownloadURL().then(function (url) {
          axios.post("saveUrlFile/".concat(id), {
            url: url
          }).then(function (response) {
            toastr.success("Url actualizada correctamente");
          })["catch"](function (error) {
            console.log(error);
            toastr.error("Error, intenta de nuevo mas tarde");
          });
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShowTaller.vue?vue&type=template&id=be7a8ebc&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ShowTaller.vue?vue&type=template&id=be7a8ebc& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    _c("ul", { staticClass: "nav nav-tabs" }, [
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            class: _vm.activeClass === 1 ? "nav-link active" : "nav-link",
            attrs: { "aria-current": "page" },
            on: {
              click: function() {
                return _vm.changeTab(1)
              }
            }
          },
          [
            _vm._v(
              _vm._s(
                _vm.type_user === 1 || _vm.type_user === 2
                  ? "Creación de Talleres"
                  : "Talleres"
              )
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            class: _vm.activeClass === 2 ? "nav-link active" : "nav-link",
            on: {
              click: function() {
                return _vm.changeTab(2)
              }
            }
          },
          [
            _vm._v(
              _vm._s(
                _vm.type_user === 1 || _vm.type_user === 2
                  ? "Carga de Documentos"
                  : "Documentos"
              )
            )
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _vm.type_user === 1 || _vm.type_user === 2
      ? _c("div", [
          _c("div", { staticClass: "card" }, [
            _vm.activeClass === 1
              ? _c(
                  "div",
                  { staticClass: "card-body" },
                  [
                    _c("label", [_vm._v("Bimestre")]),
                    _vm._v(" "),
                    _vm._l(_vm.course.activities, function(activity, key_a) {
                      return _c(
                        "div",
                        { key: key_a },
                        [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: activity.id_bimestre,
                                  expression: "activity.id_bimestre"
                                }
                              ],
                              staticClass: "form-control m-2",
                              on: {
                                change: function($event) {
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
                                    activity,
                                    "id_bimestre",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            _vm._l(_vm.bimestres, function(bimestre, key) {
                              return _c(
                                "option",
                                { key: key, domProps: { value: bimestre.id } },
                                [_vm._v(_vm._s(bimestre.name))]
                              )
                            }),
                            0
                          ),
                          _vm._v(" "),
                          activity.activity_type == "CUESTIONARIO" ||
                          activity.activity_type == "CUESTIONARIO_UNICA_RTA"
                            ? _c("activity-questionary", {
                                attrs: {
                                  module: activity.module,
                                  disabled: activity.interaction.state > 1
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          activity.activity_type == "COMPLETAR_ORACION"
                            ? _c("activity-complete-sentence", {
                                attrs: {
                                  module: activity.module,
                                  disabled: activity.interaction.state > 1
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          activity.activity_type == "RELACION"
                            ? _c("activity-relationship", {
                                attrs: {
                                  module: activity.module,
                                  disabled: activity.interaction.state > 1
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          activity.activity_type == "CRUCIGRAMA"
                            ? _c("activity-crossword", {
                                attrs: {
                                  module: activity.module,
                                  disabled: activity.interaction.state > 1
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary col-md-3",
                        on: { click: _vm.saveData }
                      },
                      [_vm._v("Guardar")]
                    )
                  ],
                  2
                )
              : _vm.activeClass === 2
              ? _c("div", [
                  _c("div", { staticClass: "card-body" }, [
                    _c("label", [_vm._v("Subir Documento")]),
                    _vm._v(" "),
                    _c("input", {
                      staticClass: "form-control-file",
                      attrs: { type: "file", id: "exampleFormControlFile1" },
                      on: { change: _vm.getFile }
                    }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary col-md-3 mt-2",
                        on: { click: _vm.saveFile }
                      },
                      [_vm._v("Guardar")]
                    )
                  ])
                ])
              : _vm._e()
          ])
        ])
      : _vm.type_user === 3
      ? _c(
          "div",
          _vm._l(_vm.course.activities, function(activity, key_a) {
            return _c("div", { key: key_a }, [
              _vm.activeClass === 1
                ? _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-12" }, [
                          _c("b", [_vm._v("Descripción:")]),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: activity.description,
                                expression: "activity.description"
                              }
                            ],
                            staticClass: "form-control-plaintext",
                            attrs: { readonly: "" },
                            domProps: { value: activity.description },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  activity,
                                  "description",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      activity.activity_type == "CUESTIONARIO_UNICA_RTA" ||
                      activity.activity_type == "CUESTIONARIO"
                        ? _c("activity-questionary", {
                            attrs: {
                              playing: true,
                              module: activity.module,
                              disabled: activity.interaction.state > 1
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      activity.activity_type == "COMPLETAR_ORACION"
                        ? _c("activity-complete-sentence", {
                            attrs: {
                              playing: true,
                              module: activity.module,
                              disabled: activity.interaction.state > 1
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      activity.activity_type == "RELACION"
                        ? _c("activity-relationship", {
                            attrs: {
                              playing: true,
                              module: activity.module,
                              disabled: activity.interaction.state > 1
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      activity.activity_type == "CRUCIGRAMA"
                        ? _c("activity-crossword", {
                            attrs: {
                              playing: true,
                              module: activity.module,
                              disabled: activity.interaction.state > 1
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "activity_response-button" }, [
                        activity.interaction.state == 1
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-primary",
                                on: {
                                  click: function($event) {
                                    return _vm.SaveResponseEvent(activity)
                                  }
                                }
                              },
                              [_vm._v("Enviar respuestas")]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      activity.interaction.state == 3
                        ? _c("div", [
                            _vm._v("\n                    Calificación: "),
                            _c("span", { staticClass: "activity_score" }, [
                              _vm._v(_vm._s(activity.interaction.score)),
                              _c("small", [_vm._v("/5")])
                            ])
                          ])
                        : _vm._e()
                    ],
                    1
                  )
                : _vm.activeClass === 2
                ? _c("div", { staticClass: "card-body" })
                : _vm._e()
            ])
          }),
          0
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "button",
      { staticClass: "btn btn-primary col-md-3", on: { click: _vm.backPage } },
      [_vm._v("Volver")]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ShowTaller.vue":
/*!************************************************!*\
  !*** ./resources/js/components/ShowTaller.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShowTaller_vue_vue_type_template_id_be7a8ebc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowTaller.vue?vue&type=template&id=be7a8ebc& */ "./resources/js/components/ShowTaller.vue?vue&type=template&id=be7a8ebc&");
/* harmony import */ var _ShowTaller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowTaller.vue?vue&type=script&lang=js& */ "./resources/js/components/ShowTaller.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowTaller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowTaller_vue_vue_type_template_id_be7a8ebc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShowTaller_vue_vue_type_template_id_be7a8ebc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ShowTaller.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ShowTaller.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/ShowTaller.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowTaller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ShowTaller.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShowTaller.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowTaller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ShowTaller.vue?vue&type=template&id=be7a8ebc&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ShowTaller.vue?vue&type=template&id=be7a8ebc& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowTaller_vue_vue_type_template_id_be7a8ebc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ShowTaller.vue?vue&type=template&id=be7a8ebc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShowTaller.vue?vue&type=template&id=be7a8ebc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowTaller_vue_vue_type_template_id_be7a8ebc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowTaller_vue_vue_type_template_id_be7a8ebc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);