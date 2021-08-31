(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[105],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/repositoryStudentUpload.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/repositoryStudentUpload.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
  props: ["id_repo"],
  data: function data() {
    return {
      myOptions: [],
      nameUnit: "",
      description: "",
      newdate: "",
      nameArea: "",
      errors: [],
      nameFile: '',
      fileUpload: '',
      name: "",
      imageData: null,
      message: ""
    };
  },
  mounted: function mounted() {
    var _this = this;

    var url = window.location.origin + "/showRepository/" + this.id_repo;
    axios.get(url).then(function (response) {
      _this.myOptions = response.data;

      _this.myOptions.forEach(function (element) {
        _this.nameUnit = element.name;
        _this.description = element.description;
        _this.nameFile = element.file;
      });
    });
  },
  methods: {
    getMenu: function getMenu() {
      window.location = "/repository/student";
    },
    createupload: function createupload() {
      var _this2 = this;

      var url = window.location.origin + "/saveRepoStUpload";
      axios.post(url, {
        //Cursos generales
        id_repository: this.id_repo,
        name: this.name,
        file: this.fileUpload
      }).then(function (response) {
        _this2.errors = [];
        toastr.success("Nueva tarea creada exitosamente");

        _this2.getMenu();
      })["catch"](function (error) {
        _this2.errors = error.response.data;
        toastr.danger("Complete todos los campos requeridos");
      });
    },
    click1: function click1() {
      this.$refs.input1.click();
    },
    previewImage: function previewImage(event) {
      this.uploadValue = 0;
      this.fileUpload = null;
      this.imageData = event.target.files[0];
      this.message = null;
      this.onUpload();
    },
    onUpload: function onUpload() {
      var _this3 = this;

      this.fileUpload = null;
      var storageRef = firebase__WEBPACK_IMPORTED_MODULE_2__["default"].storage().ref("".concat(this.imageData.name)).put(this.imageData);
      storageRef.on("state_changed", function (snapshot) {
        _this3.uploadValue = snapshot.bytesTransferred / snapshot.totalBytes * 100;
      }, function (error) {
        console.log(error.message);
      }, function () {
        _this3.uploadValue = 100;
        storageRef.snapshot.ref.getDownloadURL().then(function (url) {
          _this3.fileUpload = url;
          _this3.message = _this3.imageData.name;
          console.log(_this3.fileUpload);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/repositoryStudentUpload.vue?vue&type=template&id=7a225f77&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/repositoryStudentUpload.vue?vue&type=template&id=7a225f77& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "back" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-11 mx-auto" }, [
          _c(
            "div",
            { staticClass: "custom-card text-center" },
            [
              _c("h3", { staticClass: "card-header fondo" }, [
                _vm._v(
                  "\n                        Entrega Nombre\n                    "
                )
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
                    "finish-button-text": "Enviar tarea"
                  },
                  on: { "on-complete": _vm.createupload }
                },
                [
                  _c("tab-content", { attrs: { title: "Cargar entrega" } }, [
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
                    _c("div", { staticClass: "form-group mx-auto" }, [
                      _c("div", { attrs: { align: "center" } }, [
                        _c("div", { staticClass: "col-md-6" }, [
                          _c(
                            "a",
                            {
                              attrs: {
                                href: _vm.nameFile,
                                target: "_blank",
                                rel: "noopener noreferrer"
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "fas fa-file-download fa-2x",
                                staticStyle: { color: "grey" }
                              }),
                              _vm._v(" "),
                              _c("span", { staticStyle: { color: "grey" } }, [
                                _vm._v("Descargar")
                              ])
                            ]
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("label", { attrs: { for: "name" } }, [
                          _vm._v(
                            "\n                                        Nombre\n                                        "
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.name,
                              expression: "name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", name: "objetive1" },
                          domProps: { value: _vm.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.name = $event.target.value
                            }
                          }
                        })
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
                  _c("div", { staticClass: "float-left" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-warning ",
                        attrs: { href: "/repository/student" }
                      },
                      [_vm._v("Volver")]
                    )
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

/***/ "./resources/js/components/repositoryStudentUpload.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/repositoryStudentUpload.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _repositoryStudentUpload_vue_vue_type_template_id_7a225f77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./repositoryStudentUpload.vue?vue&type=template&id=7a225f77& */ "./resources/js/components/repositoryStudentUpload.vue?vue&type=template&id=7a225f77&");
/* harmony import */ var _repositoryStudentUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repositoryStudentUpload.vue?vue&type=script&lang=js& */ "./resources/js/components/repositoryStudentUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _repositoryStudentUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _repositoryStudentUpload_vue_vue_type_template_id_7a225f77___WEBPACK_IMPORTED_MODULE_0__["render"],
  _repositoryStudentUpload_vue_vue_type_template_id_7a225f77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/repositoryStudentUpload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/repositoryStudentUpload.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/repositoryStudentUpload.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_repositoryStudentUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./repositoryStudentUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/repositoryStudentUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_repositoryStudentUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/repositoryStudentUpload.vue?vue&type=template&id=7a225f77&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/repositoryStudentUpload.vue?vue&type=template&id=7a225f77& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_repositoryStudentUpload_vue_vue_type_template_id_7a225f77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./repositoryStudentUpload.vue?vue&type=template&id=7a225f77& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/repositoryStudentUpload.vue?vue&type=template&id=7a225f77&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_repositoryStudentUpload_vue_vue_type_template_id_7a225f77___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_repositoryStudentUpload_vue_vue_type_template_id_7a225f77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);