(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[97],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/repositoryCreate.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/repositoryCreate.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

firebase__WEBPACK_IMPORTED_MODULE_2__["default"].initializeApp(firebaseConfig);
firebase__WEBPACK_IMPORTED_MODULE_2__["default"].analytics();
Vue.use(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["id_area", "id_classroom", "backPage"],
  data: function data() {
    return {
      myOptions: [],
      nameUnit: "",
      description: "",
      newdate: "",
      nameArea: "",
      errors: [],
      nameFile: '',
      imageData: null,
      message: "",
      area_id: null,
      classroom_id: null
    };
  },
  watch: {
    id_area: function id_area(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.area_id = newVal;
      }
    },
    id_classroom: function id_classroom(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.classroom_id = newVal;
      }
    }
  },
  mounted: function mounted() {
    this.area_id = this.id_area;
    this.classroom_id = this.id_classroom;
  },
  methods: {
    getMenu: function getMenu() {
      window.location = "/repository";
    },
    createSemanal: function createSemanal() {
      var _this = this;

      var url = window.location.origin + "/saveRepository"; // this.nameArea = this.$refs.seleccionado.value;

      console.log();
      axios.post(url, {
        //Cursos generales
        id_area_class: "".concat(this.area_id, "/").concat(this.classroom_id),
        name: this.nameUnit,
        description: this.description,
        file: this.nameFile,
        date: this.newdate
      }).then(function (response) {
        _this.errors = [];
        toastr.success("Nueva tarea creada exitosamente"); // this.getMenu();
      })["catch"](function (error) {
        _this.errors = error.response.data;
        toastr.danger("Complete todos los campos requeridos");
      });
    },
    click1: function click1() {
      this.$refs.input1.click();
    },
    previewImage: function previewImage(event) {
      this.uploadValue = 0;
      this.nameFile = null;
      this.imageData = event.target.files[0];
      this.message = null;
      this.onUpload();
    },
    onUpload: function onUpload() {
      var _this2 = this;

      this.nameFile = null;
      var storageRef = firebase__WEBPACK_IMPORTED_MODULE_2__["default"].storage().ref("".concat(this.imageData.name)).put(this.imageData);
      storageRef.on("state_changed", function (snapshot) {
        _this2.uploadValue = snapshot.bytesTransferred / snapshot.totalBytes * 100;
      }, function (error) {
        console.log(error.message);
      }, function () {
        _this2.uploadValue = 100;
        storageRef.snapshot.ref.getDownloadURL().then(function (url) {
          _this2.nameFile = url;
          _this2.message = _this2.imageData.name;
          console.log(_this2.nameFile);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/repositoryCreate.vue?vue&type=template&id=018ac431&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/repositoryCreate.vue?vue&type=template&id=018ac431& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    _c("div", [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12 mx-auto" }, [
          _c(
            "div",
            { staticClass: "custom-card text-center" },
            [
              _c("h3", { staticClass: "card-header fondo" }, [
                _vm._v("Entregas")
              ]),
              _vm._v(" "),
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
                  on: { "on-complete": _vm.createSemanal }
                },
                [
                  _c("tab-content", { attrs: { title: "Crear entrega" } }, [
                    _c("div", { staticClass: "form-group row mx-auto" }, [
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("label", { attrs: { for: "name" } }, [
                          _vm._v("*Título")
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.nameUnit,
                                expression: "nameUnit"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "objetive1",
                              required: ""
                            },
                            domProps: { value: _vm.nameUnit },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.nameUnit = $event.target.value
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("label", { attrs: { for: "name" } }, [
                          _vm._v("*Instrucciones")
                        ]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.description,
                              expression: "description"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            name: "competences",
                            placeholder:
                              "Es la explicacion o sintesis de la clase.",
                            required: ""
                          },
                          domProps: { value: _vm.description },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.description = $event.target.value
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("div", { staticClass: "form-group row" }, [
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("*Fecha")
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newdate,
                                  expression: "newdate"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "date",
                                name: "objetive1",
                                required: ""
                              },
                              domProps: { value: _vm.newdate },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.newdate = $event.target.value
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("Archivo")
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "form-control",
                              on: { click: _vm.click1 }
                            },
                            [_vm._v("Seleccione un archivo")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            ref: "input1",
                            staticStyle: { display: "none" },
                            attrs: { type: "file" },
                            on: { change: _vm.previewImage }
                          }),
                          _vm._v(" "),
                          _vm.message != "" && _vm.message != null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "green",
                                      "font-size": "20px"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "Archivo cargado con exito nombre:" +
                                        _vm._s(_vm.message) +
                                        " "
                                    )
                                  ]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.message == null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "red",
                                      "font-size": "18px"
                                    }
                                  },
                                  [_vm._v("Espere estamos cargando su archivo")]
                                )
                              ])
                            : _vm._e()
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("strong", [_vm._v("* Campos requeridos")]),
                    _vm._v(" "),
                    _vm.backPage
                      ? _c("div", { staticClass: "float-left" }, [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-warning ",
                              on: { click: _vm.backPage }
                            },
                            [_vm._v("Volver")]
                          )
                        ])
                      : _vm._e()
                  ])
                ],
                1
              )
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/repositoryCreate.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/repositoryCreate.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _repositoryCreate_vue_vue_type_template_id_018ac431___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./repositoryCreate.vue?vue&type=template&id=018ac431& */ "./resources/js/components/repositoryCreate.vue?vue&type=template&id=018ac431&");
/* harmony import */ var _repositoryCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repositoryCreate.vue?vue&type=script&lang=js& */ "./resources/js/components/repositoryCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _repositoryCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _repositoryCreate_vue_vue_type_template_id_018ac431___WEBPACK_IMPORTED_MODULE_0__["render"],
  _repositoryCreate_vue_vue_type_template_id_018ac431___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/repositoryCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/repositoryCreate.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/repositoryCreate.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_repositoryCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./repositoryCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/repositoryCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_repositoryCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/repositoryCreate.vue?vue&type=template&id=018ac431&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/repositoryCreate.vue?vue&type=template&id=018ac431& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_repositoryCreate_vue_vue_type_template_id_018ac431___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./repositoryCreate.vue?vue&type=template&id=018ac431& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/repositoryCreate.vue?vue&type=template&id=018ac431&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_repositoryCreate_vue_vue_type_template_id_018ac431___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_repositoryCreate_vue_vue_type_template_id_018ac431___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);