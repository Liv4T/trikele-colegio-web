(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityStudentPlayComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/activityStudentPlayComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['id_area', 'id_classroom', 'id_activity'],
  data: function data() {
    return {
      activity: {},
      data: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get("/getActivityById/".concat(this.id_activity)).then(function (response) {
      _this.activity = response.data;
    });
  },
  methods: {
    FinishActivity: function FinishActivity() {
      axios.put("/area/".concat(this.id_area, "/clase/").concat(this.id_classroom, "/actividad/").concat(this.id_activity), this.data).then(function (response) {
        toastr.success("Enviada");
        location.href = "/Actividad";
      });
    },
    RefreshData: function RefreshData(data) {
      this.data = data;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityStudentPlayComponent.vue?vue&type=template&id=f72a22b0&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/activityStudentPlayComponent.vue?vue&type=template&id=f72a22b0& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "col-md-10 mx-auto" }, [
          _c("div", { staticClass: "custom-card text-center" }, [
            _c("h3", { staticClass: "card-header fondo" }, [
              _vm._v(_vm._s(_vm.activity.activity_name))
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row margin-top-20" }, [
        _c("div", { staticClass: "col-md-10 mx-auto" }, [
          _c("div", { staticClass: "custom-card text-center" }, [
            _vm._v(
              "\n                  " +
                _vm._s(_vm.activity.activity_desc) +
                "\n                "
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row margin-top-20" }, [
        _c(
          "div",
          { staticClass: "col-md-10 mx-auto" },
          [
            _vm.activity.activity_type == "complete_sentence"
              ? _c("activity-complete-sentence", {
                  attrs: { previewMode: true, data: _vm.activity.content },
                  on: { "refresh-data": _vm.RefreshData }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.activity.activity_type == "questionary_open_questions"
              ? _c("activity-open-question", {
                  attrs: { previewMode: true, data: _vm.activity.content },
                  on: { "refresh-data": _vm.RefreshData }
                })
              : _vm._e()
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row margin-top-20" }, [
        _c("div", { staticClass: "col-md-10 mx-auto" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              on: { click: _vm.FinishActivity }
            },
            [_vm._v("Finalizar")]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/activityStudentPlayComponent.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/activityStudentPlayComponent.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _activityStudentPlayComponent_vue_vue_type_template_id_f72a22b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activityStudentPlayComponent.vue?vue&type=template&id=f72a22b0& */ "./resources/js/components/activityStudentPlayComponent.vue?vue&type=template&id=f72a22b0&");
/* harmony import */ var _activityStudentPlayComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activityStudentPlayComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/activityStudentPlayComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _activityStudentPlayComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _activityStudentPlayComponent_vue_vue_type_template_id_f72a22b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _activityStudentPlayComponent_vue_vue_type_template_id_f72a22b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/activityStudentPlayComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/activityStudentPlayComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/activityStudentPlayComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_activityStudentPlayComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./activityStudentPlayComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityStudentPlayComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_activityStudentPlayComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/activityStudentPlayComponent.vue?vue&type=template&id=f72a22b0&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/activityStudentPlayComponent.vue?vue&type=template&id=f72a22b0& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_activityStudentPlayComponent_vue_vue_type_template_id_f72a22b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./activityStudentPlayComponent.vue?vue&type=template&id=f72a22b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityStudentPlayComponent.vue?vue&type=template&id=f72a22b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_activityStudentPlayComponent_vue_vue_type_template_id_f72a22b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_activityStudentPlayComponent_vue_vue_type_template_id_f72a22b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);