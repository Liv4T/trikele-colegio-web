(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[109],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/importAdm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/importAdm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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



Vue.use(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      allowedExtensions: ["xlsx"],
      type_export: '',
      ExcelFile: ""
    };
  },
  mounted: function mounted() {},
  methods: {
    getMenu: function getMenu() {
      window.location = "/salon_adm";
    },
    setImport: function setImport(value) {
      switch (value) {
        case 'importUsers':
          axios.get('/importUsers', this.ExcelFile[0]).then(function (response) {
            toastr.success(response.data);
          })["catch"](function (error) {
            toastr.info('intenta de nuevo mas tarde');
            console.log(error);
          });
          break;

        case 'importStudents':
          axios.get('/importStudent', this.ExcelFile[0]).then(function (response) {
            toastr.success(response.data);
          })["catch"](function (error) {
            toastr.info('intenta de nuevo mas tarde');
            console.log(error);
          });
          break;

        case 'importTeachers':
          axios.get('/import', this.ExcelFile[0]).then(function (response) {
            toastr.success(response.data);
          })["catch"](function (error) {
            toastr.info('intenta de nuevo mas tarde');
            console.log(error);
          });
          break;
      }
    },
    onFlieChange: function onFlieChange(file) {
      var _this = this;

      this.ExcelFile = file.target.files || file.dataTransfer.files;
      var files = file.target.files || file.dataTransfer.files;
      var data = new FormData();

      if (files.length > 0) {
        var _file = files[0];
        var filename = _file.name;
        var filesize = _file.size;
        var extension = this.findExtension(filename);

        if (this.type_export === 'users') {
          // if uploaded file is valid with validation rules
          if (this.validateFile(filesize, extension)) {
            data.append("file", files[0]);
            axios.post("/documentoimp", data).then(function (response) {
              _this.emitMessage(response);
            });
          }
        } else if (this.type_export === 'students') {
          if (this.validateFile(filesize, extension)) {
            data.append("file", files[0]);
            axios.post("/uploadFileAssignStudent", data).then(function (response) {
              _this.emitMessage(response);
            });
          }
        } else if (this.type_export === 'teachers') {
          if (this.validateFile(filesize, extension)) {
            data.append("file", files[0]);
            axios.post("/uploadFileAssignTeachers", data).then(function (response) {
              _this.emitMessage(response);
            });
          }
        }
      }
    },

    /**
     * show error messages
     * @param  {string} title
     * @param  {string} message
     * @return {void}
     */
    showError: function showError(title, message) {
      swal({
        title: title,
        text: message,
        type: "error",
        confirmButtonText: "Ok"
      });
    },

    /**
     * find extension of uploaded file
     * @param  {string} filename
     * @return {string}
     */
    findExtension: function findExtension(filename) {
      return filename.split(".").pop().toLowerCase();
    },

    /**
     * to validate file size
     * @param  {integer} filesize
     * @return {boolean}
     */
    validateSize: function validateSize(filesize) {
      // 2*1024*1024 = 2097152 = 2mb
      if (filesize > 2097152) {
        this.title = "File size limit exceed!";
        this.message = "Please upload file less than 2MB.";
        this.showError(this.title, this.message);
        return false;
      }

      return true;
    },

    /**
     * to validate file extension
     * @param  {string} extension
     * @return {bolean}
     */
    validateExtension: function validateExtension(extension) {
      if ($.inArray(extension, this.allowedExtensions) !== -1) {
        return true;
      } else {
        this.title = "Invalid file!";
        this.message = "Please upload jpg,png,pdf or doc file only.";
        this.showError(this.title, this.message);
        return false;
      }
    },

    /**
     * validate file
     * @param  {integer} filesize
     * @param  {string} extension
     * @return {boolean}
     */
    validateFile: function validateFile(filesize, extension) {
      if (this.validateSize(filesize) && this.validateExtension(extension)) {
        return true;
      } else {
        return false;
      }
    },
    emitMessage: function emitMessage(response) {
      var message = response.data.output.message;
      var user = response.data.output.user;

      if (message) {
        this.$emit("messagesent", {
          message: message.message,
          user: user.name,
          time: message.created_at,
          image_path: $("#default_image").val(),
          //user.image_path,
          type: message.type,
          file_path: message.file_path,
          file_name: message.file_name
        });
        console.log(message.file_path);
      }
    },
    chooseFile: function chooseFile() {
      $("#file").click();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/importAdm.vue?vue&type=template&id=60263e8a&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/importAdm.vue?vue&type=template&id=60263e8a& ***!
  \************************************************************************************************************************************************************************************************************/
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
              _vm._v("Importación")
            ]),
            _vm._v(" "),
            _c(
              "form",
              { staticClass: "needs-validation", attrs: { novalidate: "" } },
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
                      "finish-button-text": "Finalizar"
                    },
                    on: {
                      "on-complete": function($event) {
                        return _vm.getMenu()
                      }
                    }
                  },
                  [
                    _c("tab-content", [
                      _c("div", { staticClass: "form-group row mx-auto" }, [
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("label", { attrs: { for: "" } }, [_vm._v("Rol:")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.type_export,
                                  expression: "type_export"
                                }
                              ],
                              ref: "seleccionado",
                              staticClass: "form-control",
                              attrs: { required: "" },
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
                                  _vm.type_export = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "users" } }, [
                                _vm._v("Usuarios")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "teachers" } }, [
                                _vm._v("Docente")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "students" } }, [
                                _vm._v("Estudiante")
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("Archivo")
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "file",
                                name: "picture",
                                accept:
                                  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                                required: ""
                              },
                              on: { change: _vm.onFlieChange }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "modal-footer" }, [
                        _vm.type_export === "users"
                          ? _c("div", [
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-warning float-right",
                                  on: {
                                    click: function($event) {
                                      return _vm.setImport("importUsers")
                                    }
                                  }
                                },
                                [_vm._v("Importar Usuarios")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.type_export === "teachers"
                          ? _c("div", [
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-warning float-right",
                                  on: {
                                    click: function($event) {
                                      return _vm.setImport("importTeachers")
                                    }
                                  }
                                },
                                [_vm._v("Importar Asignación de Docentes")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.type_export === "students"
                          ? _c("div", [
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-warning float-right",
                                  on: {
                                    click: function($event) {
                                      return _vm.setImport("importStudents")
                                    }
                                  }
                                },
                                [_vm._v("Importar Asignación de Estudiantes")]
                              )
                            ])
                          : _vm._e()
                      ])
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/importAdm.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/importAdm.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _importAdm_vue_vue_type_template_id_60263e8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./importAdm.vue?vue&type=template&id=60263e8a& */ "./resources/js/components/importAdm.vue?vue&type=template&id=60263e8a&");
/* harmony import */ var _importAdm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./importAdm.vue?vue&type=script&lang=js& */ "./resources/js/components/importAdm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _importAdm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _importAdm_vue_vue_type_template_id_60263e8a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _importAdm_vue_vue_type_template_id_60263e8a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/importAdm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/importAdm.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/importAdm.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_importAdm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./importAdm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/importAdm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_importAdm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/importAdm.vue?vue&type=template&id=60263e8a&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/importAdm.vue?vue&type=template&id=60263e8a& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_importAdm_vue_vue_type_template_id_60263e8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./importAdm.vue?vue&type=template&id=60263e8a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/importAdm.vue?vue&type=template&id=60263e8a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_importAdm_vue_vue_type_template_id_60263e8a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_importAdm_vue_vue_type_template_id_60263e8a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);