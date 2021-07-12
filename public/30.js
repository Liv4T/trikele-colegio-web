(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/matricula.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/matricula.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var toastr_toastr_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! toastr/toastr.scss */ "./node_modules/toastr/toastr.scss");
/* harmony import */ var toastr_toastr_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(toastr_toastr_scss__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
$(document).ready(function () {
  $("#password2").keyup(validate);
});

function validate() {
  var password1 = $("#password1").val();
  var password2 = $("#password2").val();

  if (password1 == password2) {
    $("#validate-status").text("");
  } else {
    $("#validate-status").text("La contraseña no coincide");
  }
}



Vue.use(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default.a);

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      names: [],
      allowedExtensions: ["pdf", "jpg", "jpeg", "png", "doc", "mp4"],
      newName: "",
      newLastName: "",
      newPassword: "",
      newEmail: "",
      newUserName: "",
      newType_user: "",
      newAddress: "",
      newPicture: [],
      newPhone: "",
      newId_number: "",
      errors: [],
      seleccionado: ""
    };
  },
  computed: {},
  mounted: function mounted() {
    console.log("Component mounted.");
  },
  methods: {
    //metodos del CRUD
    getNames: function getNames() {
      window.location = "/login";
    },
    createNames: function createNames() {
      var _this = this;

      window.location = "/"; //   console.log("sent form");
      //   this.seleccionado = this.$refs.seleccionado.value;
      //   console.log(this.seleccionado);
      //   var url = "users_save";
      //   console.log("send info user url, " + url);
      //   console.log("la foto es: " + this.newPicture);

      axios.post(url, {
        name: this.newName,
        last_name: this.newLastName,
        password: this.newPassword,
        user_name: this.newUserName,
        email: this.newEmail,
        type_user: this.seleccionado,
        address: this.newAddress,
        picture: this.newPicture,
        phone: this.newPhone,
        id_number: this.newId_number
      }).then(function (response) {
        _this.newName = "";
        _this.newLastName = "";
        _this.newPassword = "";
        _this.newEmail = "";
        _this.newUserName = "";
        _this.newType_user = "";
        _this.newAddress = "";
        _this.newPicture = "";
        _this.newPhone = "";
        _this.newId_number = "";
        _this.errors = [];
        toastr.success("Nuevo usuario creado");

        _this.getNames();
      })["catch"](function (error) {
        _this.errors = error.response.data;
      });
    },
    onFlieChange: function onFlieChange(file) {
      var _this2 = this;

      var files = file.target.files || file.dataTransfer.files;
      var data = new FormData();

      if (files.length > 0) {
        var _file = files[0];
        var filename = _file.name;
        var filesize = _file.size;
        var extension = this.findExtension(filename); // if uploaded file is valid with validation rules

        if (this.validateFile(filesize, extension)) {
          data.append("file", files[0]);
          data.append("user_name", this.newUserName);
          this.newPicture = data;
          axios.post("/img_user", data).then(function (response) {
            _this2.emitMessage(response);
          });
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
    },
    editNames: function editNames() {
      $("#editu").modal("show");
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/matricula.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/matricula.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.alertaPass {\n  color: red;\n}\n.pd-20 {\n  padding-left: 7em;\n}\n.align-center {\n  align-items: center;\n}\n.letra-p {\n  font-size: 20px;\n}\n.vue-form-wizard #step-Bienvenida0 .wizard-icon-container {\n  background-image: url(\"http://localhost:8000/uploads/home/MATRÍCULA-Y-ADMISIONES1.png\") !important;\n  background-size: 110px;\n  background-repeat: no-repeat;\n  background-position: right;\n  background-color: transparent !important;\n}\n.vue-form-wizard.md .wizard-icon-circle {\n  width: 120px;\n  height: 120px;\n  font-size: 24px;\n  background-image: url(\"http://localhost:8000/uploads/home/MATRÍCULA-Y-ADMISIONES1.png\");\n  background-size: 110px;\n  background-repeat: no-repeat;\n  background-position: right;\n  border-color: transparent !important;\n}\n.vue-form-wizard #step-Documentosrequeridos2 .wizard-icon-container {\n  background-image: url(\"http://localhost:8000/uploads/home/MATRÍCULA-Y-ADMISIONES2.png\") !important;\n  background-size: 110px;\n  background-repeat: no-repeat;\n  background-position: right;\n  background-color: transparent !important;\n}\n.vue-form-wizard.md #step-Documentosrequeridos2 {\n  background-image: url(\"http://localhost:8000/uploads/home/MATRÍCULA-Y-ADMISIONES2.png\") !important;\n  background-size: 110px;\n  background-repeat: no-repeat;\n  background-position: right;\n  background-color: transparent !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/matricula.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/matricula.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./matricula.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/matricula.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/matricula.vue?vue&type=template&id=c498ee7a&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/matricula.vue?vue&type=template&id=c498ee7a& ***!
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
  return _c("div", { staticClass: "backg" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-11 mx-auto" }, [
        _c("div", { staticClass: "custom-card text-center" }, [
          _c("h3", { staticClass: "card-header fondo" }, [
            _vm._v("ADMISIONES")
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
                    color: "orange",
                    layout: "vertical",
                    "next-button-text": "Siguiente",
                    "back-button-text": "Atrás",
                    "finish-button-text": "Finalizar"
                  },
                  on: { "on-complete": _vm.createNames }
                },
                [
                  _c("tab-content", { attrs: { title: "Bienvenida" } }, [
                    _c("div", { staticClass: "card-body pd-20" }, [
                      _c("h3", { staticClass: "row" }, [_vm._v("ADMISIONES")]),
                      _vm._v(" "),
                      _c("h3", { staticClass: "row" }, [
                        _vm._v("¡BIENVENIDO!")
                      ]),
                      _vm._v(" "),
                      _c("h4", { staticClass: "row" }, [
                        _vm._v("Proceso de admisión en 5 sencillos pasos:")
                      ]),
                      _vm._v(" "),
                      _c("h5", { staticClass: "row" }, [
                        _vm._v("1.Información de documentos requeridos")
                      ]),
                      _vm._v(" "),
                      _c("h5", { staticClass: "row" }, [
                        _vm._v(
                          "2.Compra y descarga el formulario de inscripción."
                        )
                      ]),
                      _vm._v(" "),
                      _c("h5", { staticClass: "row" }, [
                        _vm._v(
                          "3.Entregar formulario de inscripción y documentos"
                        )
                      ]),
                      _vm._v(" "),
                      _c("h5", { staticClass: "row" }, [
                        _vm._v(
                          "4.Entregar video de presentación del estudiante"
                        )
                      ]),
                      _vm._v(" "),
                      _c("h5", { staticClass: "row" }, [
                        _vm._v("5.Matricular en fecha y hora asignada.")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "tab-content",
                    {
                      attrs: {
                        title: "Documentos requeridos",
                        icon: "fas fa-id-card"
                      }
                    },
                    [
                      _c("div", { staticClass: "card-body pd-20" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group align-center letra-p row mx-auto"
                          },
                          [
                            _c("img", {
                              attrs: {
                                width: "35px",
                                src:
                                  "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0",
                                alt: ""
                              }
                            }),
                            _vm._v(
                              "Comprar y diligenciar de manera legible el formulario de admisión\n                  "
                            ),
                            _c("div", { staticClass: "col-md-8 mx-auto" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-warning float-left",
                                  attrs: {
                                    href:
                                      "/compra/plan/FORMULARIO-ADMISION/resumen"
                                  }
                                },
                                [_vm._v("Comprar")]
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group align-center letra-p row mx-auto"
                          },
                          [
                            _c("img", {
                              attrs: {
                                width: "35px",
                                src:
                                  "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0",
                                alt: ""
                              }
                            }),
                            _vm._v("Cedula de ciudadanía papá y mamá")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group align-center letra-p row mx-auto"
                          },
                          [
                            _c("img", {
                              attrs: {
                                width: "35px",
                                src:
                                  "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0",
                                alt: ""
                              }
                            }),
                            _vm._v("Documento de Identidad del estudiante")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group align-center letra-p row mx-auto"
                          },
                          [
                            _c("img", {
                              attrs: {
                                width: "35px",
                                src:
                                  "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0",
                                alt: ""
                              }
                            }),
                            _vm._v("Certificados último año cursado")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group align-center letra-p row mx-auto"
                          },
                          [
                            _c("img", {
                              attrs: {
                                width: "35px",
                                src:
                                  "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0",
                                alt: ""
                              }
                            }),
                            _vm._v("Certificado afiliación a EPS")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group align-center letra-p row mx-auto"
                          },
                          [
                            _c("img", {
                              attrs: {
                                width: "35px",
                                src:
                                  "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0",
                                alt: ""
                              }
                            }),
                            _vm._v("Certificado Médico")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group align-center letra-p row mx-auto"
                          },
                          [
                            _c("img", {
                              attrs: {
                                width: "35px",
                                src:
                                  "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0",
                                alt: ""
                              }
                            }),
                            _vm._v(
                              "Certificado laboral de los padres de familia"
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group align-center letra-p row mx-auto"
                          },
                          [
                            _c("img", {
                              attrs: {
                                width: "35px",
                                src:
                                  "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0",
                                alt: ""
                              }
                            }),
                            _vm._v("Certificado laboral")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group align-center letra-p row mx-auto"
                          },
                          [
                            _c("img", {
                              attrs: {
                                width: "35px",
                                src:
                                  "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0",
                                alt: ""
                              }
                            }),
                            _vm._v("Paz y Salvo colegio anterior")
                          ]
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
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/matricula.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/matricula.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _matricula_vue_vue_type_template_id_c498ee7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matricula.vue?vue&type=template&id=c498ee7a& */ "./resources/js/components/matricula.vue?vue&type=template&id=c498ee7a&");
/* harmony import */ var _matricula_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matricula.vue?vue&type=script&lang=js& */ "./resources/js/components/matricula.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _matricula_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matricula.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/matricula.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _matricula_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _matricula_vue_vue_type_template_id_c498ee7a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _matricula_vue_vue_type_template_id_c498ee7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/matricula.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/matricula.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/matricula.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_matricula_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./matricula.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/matricula.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_matricula_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/matricula.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/matricula.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_matricula_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./matricula.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/matricula.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_matricula_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_matricula_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_matricula_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_matricula_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_matricula_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/matricula.vue?vue&type=template&id=c498ee7a&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/matricula.vue?vue&type=template&id=c498ee7a& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_matricula_vue_vue_type_template_id_c498ee7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./matricula.vue?vue&type=template&id=c498ee7a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/matricula.vue?vue&type=template&id=c498ee7a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_matricula_vue_vue_type_template_id_c498ee7a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_matricula_vue_vue_type_template_id_c498ee7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);