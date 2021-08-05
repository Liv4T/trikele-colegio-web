(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FavoriteQuestion.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FavoriteQuestion.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      que_id: this.question.id,
      isFavorited: this.question.favorites.is_favorited,
      isSignedIn: this.auth.name,
      favoriteCount: this.question.favorites_count
    };
  },
  props: ["question", "auth"],
  computed: {
    classes: function classes() {
      return ["favorite", "mt-2", !this.isSignedIn ? "off" : this.isFavorited ? "favorited" : ""];
    }
  },
  methods: {
    favCountOperation: function favCountOperation() {
      this.isFavorited ? this.decrease() : this.increase();
    },
    decrease: function decrease() {
      var _this = this;

      axios["delete"]("/questions/".concat(this.que_id, "/favorite")).then(function (response) {
        _this.favoriteCount--;
        _this.isFavorited = false;
      })["catch"](function (error) {
        Swal.fire({
          type: "error",
          title: "Oops...",
          text: error.response.data.message
        });
      });
    },
    increase: function increase() {
      var _this2 = this;

      axios.post("/questions/".concat(this.que_id, "/favorite")).then(function (response) {
        _this2.favoriteCount++;
        _this2.isFavorited = true;
      })["catch"](function (error) {
        Swal.fire({
          type: "error",
          title: "Oops...",
          text: error.response.data.message
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FavoriteQuestion.vue?vue&type=template&id=649c01e6&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FavoriteQuestion.vue?vue&type=template&id=649c01e6&scoped=true& ***!
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
  return _vm.isSignedIn ? _c("div") : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/FavoriteQuestion.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/FavoriteQuestion.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FavoriteQuestion_vue_vue_type_template_id_649c01e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FavoriteQuestion.vue?vue&type=template&id=649c01e6&scoped=true& */ "./resources/js/components/FavoriteQuestion.vue?vue&type=template&id=649c01e6&scoped=true&");
/* harmony import */ var _FavoriteQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FavoriteQuestion.vue?vue&type=script&lang=js& */ "./resources/js/components/FavoriteQuestion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FavoriteQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FavoriteQuestion_vue_vue_type_template_id_649c01e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FavoriteQuestion_vue_vue_type_template_id_649c01e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "649c01e6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FavoriteQuestion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FavoriteQuestion.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/FavoriteQuestion.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FavoriteQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FavoriteQuestion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FavoriteQuestion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FavoriteQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FavoriteQuestion.vue?vue&type=template&id=649c01e6&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/FavoriteQuestion.vue?vue&type=template&id=649c01e6&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FavoriteQuestion_vue_vue_type_template_id_649c01e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FavoriteQuestion.vue?vue&type=template&id=649c01e6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FavoriteQuestion.vue?vue&type=template&id=649c01e6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FavoriteQuestion_vue_vue_type_template_id_649c01e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FavoriteQuestion_vue_vue_type_template_id_649c01e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);