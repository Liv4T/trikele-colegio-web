(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[94],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/testFirebase.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/testFirebase.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
  data: function data() {
    return {
      caption: '',
      img1: '',
      imageData: null,
      message: ""
    };
  },
  methods: {
    create: function create() {
      var post = {
        photo: this.img1,
        caption: this.caption
      };
      firebase__WEBPACK_IMPORTED_MODULE_0__["default"].database().ref('PhotoGallery').push(post).then(function (response) {
        console.log(response);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    click1: function click1() {
      this.$refs.input1.click();
    },
    previewImage: function previewImage(event) {
      this.uploadValue = 0;
      this.img1 = null;
      this.imageData = event.target.files[0];
      this.message = null;
      this.onUpload();
    },
    onUpload: function onUpload() {
      var _this = this;

      this.img1 = null;
      var storageRef = firebase__WEBPACK_IMPORTED_MODULE_0__["default"].storage().ref("".concat(this.imageData.name)).put(this.imageData);
      storageRef.on("state_changed", function (snapshot) {
        _this.uploadValue = snapshot.bytesTransferred / snapshot.totalBytes * 100;
      }, function (error) {
        console.log(error.message);
      }, function () {
        _this.uploadValue = 100;
        storageRef.snapshot.ref.getDownloadURL().then(function (url) {
          _this.img1 = url;
          _this.message = _this.imageData.name;
          console.log(_this.img1);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/testFirebase.vue?vue&type=template&id=43abd7f8&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/testFirebase.vue?vue&type=template&id=43abd7f8& ***!
  \***************************************************************************************************************************************************************************************************************/
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
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "md6 offset-sm3" }, [
            _c("div", [
              _c("div", [
                _c("button", { on: { click: _vm.click1 } }, [
                  _vm._v("choose photo")
                ]),
                _vm._v(" "),
                _c("input", {
                  ref: "input1",
                  staticStyle: { display: "none" },
                  attrs: { type: "file" },
                  on: { change: _vm.previewImage }
                })
              ]),
              _vm._v(" "),
              _vm.message != "" && _vm.message != null
                ? _c("div", [
                    _c("span", [
                      _vm._v(
                        "Archivo cargado con exito nombre:" +
                          _vm._s(_vm.message) +
                          " "
                      )
                    ]),
                    _vm._v(" "),
                    _c("br")
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.message == null
                ? _c("div", [
                    _c("span", [_vm._v("Espere estamos cargando su archivo")]),
                    _vm._v(" "),
                    _c("br")
                  ])
                : _vm._e()
            ])
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
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "text-center font-weight-black" }, [
        _c("h1", [_vm._v("Upload a photo")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/testFirebase.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/testFirebase.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testFirebase_vue_vue_type_template_id_43abd7f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testFirebase.vue?vue&type=template&id=43abd7f8& */ "./resources/js/components/testFirebase.vue?vue&type=template&id=43abd7f8&");
/* harmony import */ var _testFirebase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testFirebase.vue?vue&type=script&lang=js& */ "./resources/js/components/testFirebase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _testFirebase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _testFirebase_vue_vue_type_template_id_43abd7f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _testFirebase_vue_vue_type_template_id_43abd7f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/testFirebase.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/testFirebase.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/testFirebase.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_testFirebase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./testFirebase.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/testFirebase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_testFirebase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/testFirebase.vue?vue&type=template&id=43abd7f8&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/testFirebase.vue?vue&type=template&id=43abd7f8& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_testFirebase_vue_vue_type_template_id_43abd7f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./testFirebase.vue?vue&type=template&id=43abd7f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/testFirebase.vue?vue&type=template&id=43abd7f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_testFirebase_vue_vue_type_template_id_43abd7f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_testFirebase_vue_vue_type_template_id_43abd7f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);