(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShowTaller.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ShowTaller.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['id_achievement', 'id_class', 'backPage'],
  data: function data() {
    return {
      course: []
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
    if (this.id_class !== null) {
      this.getData();
    }
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get("/api/teacher/module/".concat(this.id_achievement, "/class/").concat(this.id_class)).then(function (response) {
        _this.course = response.data;
        console.log(response.data);

        if (_this.course.content.length == 0) {
          _this.course.content = [{
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

        if (_this.course.activities.length > 0) {
          _this.course.activities.forEach(function (act) {
            act.delivery_max_date = act.delivery_max_date ? act.delivery_max_date && delivery_max_date.replace(" ", "T") : '';
            act.feedback_date = act.feedback_date.replace(" ", "T");

            _this.GetIndicatorsEvent(act);
          });
        }
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
  return _c(
    "div",
    [
      _c(
        "button",
        {
          staticClass: "btn btn-primary col-md-5",
          on: { click: _vm.backPage }
        },
        [_vm._v("Volver")]
      ),
      _vm._v(" "),
      _vm._l(_vm.course.activities, function(activity, key_a) {
        return _c(
          "div",
          { key: key_a },
          [
            activity.activity_type == "CUESTIONARIO" ||
            activity.activity_type == "CUESTIONARIO_UNICA_RTA"
              ? _c("activity-questionary", {
                  attrs: {
                    module: activity.module,
                    disabled: _vm.course.state == 2
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            activity.activity_type == "COMPLETAR_ORACION"
              ? _c("activity-complete-sentence", {
                  attrs: {
                    module: activity.module,
                    disabled: _vm.course.state == 2
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            activity.activity_type == "RELACION"
              ? _c("activity-relationship", {
                  attrs: {
                    module: activity.module,
                    disabled: _vm.course.state == 2
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            activity.activity_type == "CRUCIGRAMA"
              ? _c("activity-crossword", {
                  attrs: {
                    module: activity.module,
                    disabled: _vm.course.state == 2
                  }
                })
              : _vm._e()
          ],
          1
        )
      })
    ],
    2
  )
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