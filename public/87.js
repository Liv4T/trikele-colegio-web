(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[87],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/deleteUsers.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/deleteUsers.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      users: [],
      user: {},
      totalPages: 1,
      actualPage: 1,
      search_filter: '',
      allUsers: [],
      last_page: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.getUsers();
    axios.get('getAllUsers').then(function (response) {
      _this.allUsers = response.data;
    });
  },
  watch: {
    actualPage: function actualPage(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.getUsers();
      }
    },
    search_filter: function search_filter(newVal) {
      if (newVal === '') {
        this.getUsers();
      }
    }
  },
  methods: {
    getUsers: function getUsers() {
      var _this2 = this;

      axios.get("getAllUsersPaginated?page=".concat(this.actualPage)).then(function (response) {
        _this2.totalPages = response.data.total;
        _this2.users = response.data.data;
        _this2.last_page = response.data.last_page;
        console.log(response.data);
      });
    },
    getUser: function getUser(user) {
      this.user = user;
      this.user.cargo = user.type_user === 1 ? 'Administrador' : user.type_user === 2 ? 'Docente' : user.type_user === 3 ? 'Estudiante' : user.type_user === 4 ? 'Coordinador' : '( Usuario Sin Asignar )';
      $('#exampleModal').modal('show');
    },
    deleteUser: function deleteUser(id) {
      var _this3 = this;

      if (window.confirm('Seguro que desea desactivar este dato?')) {
        axios["delete"]("users/".concat(id)).then(function (response) {
          toastr.success(response.data);
          $('#exampleModal').modal('hide');

          _this3.getUsers();
        });
      }
    },
    pagination: function pagination(op, data) {
      if (op === '+') {
        this.actualPage = this.actualPage + data;
      } else if (op === '-') {
        this.actualPage = this.actualPage - data;
      } else if (true) {
        this.actualPage = data;
      }
    },
    filterUserName: function filterUserName(userName) {
      var _this4 = this;

      axios.get("specificUser/".concat(userName)).then(function (response) {
        _this4.users = response.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/deleteUsers.vue?vue&type=template&id=69f057a2&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/deleteUsers.vue?vue&type=template&id=69f057a2& ***!
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
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-11 mx-auto" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "container" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.search_filter,
                        expression: "search_filter"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Buscar por Nombre" },
                    domProps: { value: _vm.search_filter },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.search_filter = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      on: {
                        click: function($event) {
                          return _vm.filterUserName(_vm.search_filter)
                        }
                      }
                    },
                    [_vm._v("Buscar")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm" }, [
                  _c(
                    "nav",
                    { attrs: { "aria-label": "Page navigation example" } },
                    [
                      _c(
                        "ul",
                        { staticClass: "pagination justify-content-center" },
                        [
                          _c(
                            "li",
                            {
                              class:
                                _vm.actualPage <= 1
                                  ? "page-item disabled"
                                  : "page-item"
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "page-link",
                                  on: {
                                    click: function() {
                                      return _vm.pagination("first_page", 1)
                                    }
                                  }
                                },
                                [_vm._v("1")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            {
                              class:
                                _vm.actualPage <= 1
                                  ? "page-item disabled"
                                  : "page-item"
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "page-link",
                                  attrs: { "aria-label": "Previous" },
                                  on: {
                                    click: function() {
                                      return _vm.pagination("-", 1)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "span",
                                    { attrs: { "aria-hidden": "true" } },
                                    [_vm._v("«")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "sr-only" }, [
                                    _vm._v("Previous")
                                  ])
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("li", { staticClass: "page-item disabled" }, [
                            _c("a", { staticClass: "page-link" }, [
                              _vm._v(_vm._s(_vm.actualPage))
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "li",
                            {
                              class:
                                _vm.last_page <= _vm.actualPage
                                  ? "page-item disabled"
                                  : "page-item"
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "page-link",
                                  attrs: { "aria-label": "Next" },
                                  on: {
                                    click: function() {
                                      return _vm.pagination("+", 1)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "span",
                                    { attrs: { "aria-hidden": "true" } },
                                    [_vm._v("»")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "sr-only" }, [
                                    _vm._v("Next")
                                  ])
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            {
                              class:
                                _vm.last_page <= _vm.actualPage
                                  ? "page-item disabled"
                                  : "page-item"
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "page-link",
                                  on: {
                                    click: function() {
                                      return _vm.pagination(
                                        "last_page",
                                        _vm.last_page
                                      )
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(_vm.last_page))]
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "table",
              { staticClass: "table table-striped table-hover" },
              [
                _vm._m(1),
                _vm._v(" "),
                _vm._l(_vm.users, function(user, key) {
                  return _c("tbody", { key: key }, [
                    user.deleted === 0
                      ? _c("tr", [
                          _c("td", [_vm._v(_vm._s(user.name))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(user.last_name))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                user.type_user === 1
                                  ? "Administrador"
                                  : user.type_user === 2
                                  ? "Docente"
                                  : user.type_user === 3
                                  ? "Estudiante"
                                  : user.type_user === 4
                                  ? "Coordinador"
                                  : "( Usuario Sin Asignar )"
                              ) + "\n                                "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-primary",
                                attrs: { type: "button" },
                                on: {
                                  click: function() {
                                    return _vm.getUser(user)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                        Desactivar\n                                    "
                                )
                              ]
                            )
                          ])
                        ])
                      : _vm._e()
                  ])
                })
              ],
              2
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
          id: "exampleModal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
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
                  _c("label", { attrs: { for: "" } }, [_vm._v("Cargo")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.cargo,
                        expression: "user.cargo"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", disabled: "" },
                    domProps: { value: _vm.user.cargo },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "cargo", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Nombre")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.name,
                        expression: "user.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", disabled: "" },
                    domProps: { value: _vm.user.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "name", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Apellido")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.last_name,
                        expression: "user.last_name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", disabled: "" },
                    domProps: { value: _vm.user.last_name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "last_name", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Correo")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.email,
                        expression: "user.email"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", disabled: "" },
                    domProps: { value: _vm.user.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "email", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Telefono")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.phone,
                        expression: "user.phone"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", disabled: "" },
                    domProps: { value: _vm.user.phone },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "phone", $event.target.value)
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
                    on: {
                      click: function($event) {
                        return _vm.deleteUser(_vm.user.id)
                      }
                    }
                  },
                  [_vm._v("Guardar")]
                )
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", [_vm._v(" Desactivación de Usuarios")])
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
        _c("th", [_vm._v("Cargo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Acción")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Desactivación de Usuarios")]
      ),
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/deleteUsers.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/deleteUsers.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deleteUsers_vue_vue_type_template_id_69f057a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteUsers.vue?vue&type=template&id=69f057a2& */ "./resources/js/components/deleteUsers.vue?vue&type=template&id=69f057a2&");
/* harmony import */ var _deleteUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteUsers.vue?vue&type=script&lang=js& */ "./resources/js/components/deleteUsers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _deleteUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _deleteUsers_vue_vue_type_template_id_69f057a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _deleteUsers_vue_vue_type_template_id_69f057a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/deleteUsers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/deleteUsers.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/deleteUsers.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./deleteUsers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/deleteUsers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/deleteUsers.vue?vue&type=template&id=69f057a2&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/deleteUsers.vue?vue&type=template&id=69f057a2& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteUsers_vue_vue_type_template_id_69f057a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./deleteUsers.vue?vue&type=template&id=69f057a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/deleteUsers.vue?vue&type=template&id=69f057a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteUsers_vue_vue_type_template_id_69f057a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteUsers_vue_vue_type_template_id_69f057a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);