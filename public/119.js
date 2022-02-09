(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[119],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/repositoryStudentComments.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/repositoryStudentComments.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
      name: "",
      retro: "",
      newdate: "",
      nameRepo: "",
      fileComment: null,
      audioComment: null,
      errors: [],
      fileStudent: ""
    };
  },
  mounted: function mounted() {
    var _this = this;

    var url = window.location.origin + "/showRepositoryCommentsStudents/" + this.id_repo;
    axios.get(url).then(function (response) {
      _this.myOptions = response.data;

      _this.myOptions.forEach(function (element) {
        _this.name = element.name_file_student;
        _this.nameRepo = element.name_repo;
        _this.retro = element.comment;
        _this.fileStudent = element.file_student;
        _this.fileComment = element.file_teacher;
        _this.audioComment = element.audio_teacher;
      });
    });
  },
  methods: {
    getMenu: function getMenu() {
      window.location = "/repository/students/" + this.id_repo;
    },
    createComment: function createComment() {
      var _this2 = this;

      var url = window.location.origin + "/saveRepoComment";
      axios.post(url, {
        //Cursos generales
        id_repository: this.id_repo,
        id_student: this.id_student,
        comment: this.retro,
        file: this.uploadFile
      }).then(function (response) {
        _this2.errors = [];
        toastr.success("Nuevo comentario creada exitosamente");

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
      this.uploadFile = null;
      this.imageData = event.target.files[0];
      this.message = null;
      this.onUpload();
    },
    onUpload: function onUpload() {
      var _this3 = this;

      this.uploadFile = null;
      var storageRef = firebase__WEBPACK_IMPORTED_MODULE_2__["default"].storage().ref("".concat(this.imageData.name)).put(this.imageData);
      storageRef.on("state_changed", function (snapshot) {
        _this3.uploadValue = snapshot.bytesTransferred / snapshot.totalBytes * 100;
      }, function (error) {
        console.log(error.message);
      }, function () {
        _this3.uploadValue = 100;
        storageRef.snapshot.ref.getDownloadURL().then(function (url) {
          _this3.uploadFile = url;
          _this3.message = _this3.imageData.name;
          console.log(_this3.uploadFile);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/repositoryStudentComments.vue?vue&type=template&id=4f129e6a&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/repositoryStudentComments.vue?vue&type=template&id=4f129e6a& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "custom-card text-center" }, [
            _c("h3", { staticClass: "card-header fondo" }, [
              _vm._v(
                "\n                        Entrega " +
                  _vm._s(_vm.nameRepo) +
                  "\n                    "
              )
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row mx-auto" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _c("label", { attrs: { for: "name" } }, [_vm._v("Nombre")]),
                _vm._v(" "),
                _c("div", [
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
                    attrs: { type: "text", name: "objetive1", required: "" },
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
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("label", { attrs: { for: "name" } }, [
                  _vm._v("Archivo del estudiante")
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    attrs: {
                      href: _vm.fileStudent,
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
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row mx-auto" }, [
              _c("div", { staticClass: "col" }, [
                _c("label", { attrs: { for: "name" } }, [
                  _vm._v("Retroalimentación")
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.retro,
                      expression: "retro"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { name: "competences", placeholder: "", disabled: "" },
                  domProps: { value: _vm.retro },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.retro = $event.target.value
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row mx-auto" }, [
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.audioComment != null,
                      expression: "audioComment!=null"
                    }
                  ],
                  staticClass: "col-md-6"
                },
                [
                  _c("label", { attrs: { for: "name" } }, [
                    _vm._v("Nota de voz")
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      attrs: {
                        href: _vm.audioComment,
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
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.fileComment != null,
                      expression: "fileComment!=null"
                    }
                  ],
                  staticClass: "col-md-6"
                },
                [
                  _c("label", { attrs: { for: "name" } }, [
                    _vm._v("Archivo del docente")
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      attrs: {
                        href: _vm.fileComment,
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
                ]
              )
            ]),
            _vm._v(" "),
            _vm._m(0)
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
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-warning float-right",
          attrs: { href: "/repository/student" }
        },
        [_vm._v("Volver")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/repositoryStudentComments.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/repositoryStudentComments.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _repositoryStudentComments_vue_vue_type_template_id_4f129e6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./repositoryStudentComments.vue?vue&type=template&id=4f129e6a& */ "./resources/js/components/repositoryStudentComments.vue?vue&type=template&id=4f129e6a&");
/* harmony import */ var _repositoryStudentComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repositoryStudentComments.vue?vue&type=script&lang=js& */ "./resources/js/components/repositoryStudentComments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _repositoryStudentComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _repositoryStudentComments_vue_vue_type_template_id_4f129e6a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _repositoryStudentComments_vue_vue_type_template_id_4f129e6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/repositoryStudentComments.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/repositoryStudentComments.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/repositoryStudentComments.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_repositoryStudentComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./repositoryStudentComments.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/repositoryStudentComments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_repositoryStudentComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/repositoryStudentComments.vue?vue&type=template&id=4f129e6a&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/repositoryStudentComments.vue?vue&type=template&id=4f129e6a& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_repositoryStudentComments_vue_vue_type_template_id_4f129e6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./repositoryStudentComments.vue?vue&type=template&id=4f129e6a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/repositoryStudentComments.vue?vue&type=template&id=4f129e6a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_repositoryStudentComments_vue_vue_type_template_id_4f129e6a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_repositoryStudentComments_vue_vue_type_template_id_4f129e6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);