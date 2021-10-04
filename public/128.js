(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[128],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Talleres.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Talleres.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['id_area', 'id_classroom'],
  data: function data() {
    return {
      bimestres: [],
      workshop: []
    };
  },
  mounted: function mounted() {
    this.getData();
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get('/bimestres').then(function (response) {
        _this.bimestres = response.data;
      });
    },
    getIdBimestre: function getIdBimestre(id) {
      var _this2 = this;

      axios.get("getWorkShop/".concat(id, "/").concat(this.id_area, "/").concat(this.id_classroom)).then(function (response) {
        _this2.workshop = response.data; // data.forEach(element => {
        //     axios.get(`/api/teacher/module/${element.id_achievement}/class/${element.id_class}`).then((response) => {
        //         this.course=response.data;
        //         console.log('Cursos',response.data)
        //         if(this.course.content.length==0)
        //         {
        //             this.course.content=[
        //                 {
        //                     content_type:'YOUTUBE',
        //                     content:'',
        //                     description:''
        //                 },
        //                 {
        //                     content_type:'LINK',
        //                     content:'',
        //                     description:''
        //                 },
        //                 {
        //                     content_type:'DOCUMENT',
        //                     content:'',
        //                     description:''
        //                 }
        //             ];
        //         }
        //         if(this.course.activities.length>0)
        //         {
        //             this.course.activities.forEach(act=>{
        //                 act.delivery_max_date=act.delivery_max_date ? act.delivery_max_date && delivery_max_date.replace(" ","T") : '';
        //                 act.feedback_date=act.feedback_date.replace(" ","T");
        //                 this.GetIndicatorsEvent(act);
        //             });
        //         }
        //     });
        // });
      });
    },
    activity: function activity(data) {
      console.log(data);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Talleres.vue?vue&type=template&id=4b392c9a&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Talleres.vue?vue&type=template&id=4b392c9a& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "accordion" } },
    _vm._l(_vm.bimestres, function(bimestre, key) {
      return _c("div", { key: key, staticClass: "card" }, [
        _c(
          "div",
          { staticClass: "card-header", attrs: { id: "heading" + key } },
          [
            _c("h5", { staticClass: "mb-0" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-link",
                  attrs: {
                    "data-toggle": "collapse",
                    "data-target": "#collapse" + key,
                    "aria-expanded": "true",
                    "aria-controls": "collapse" + key
                  },
                  on: {
                    click: function($event) {
                      return _vm.getIdBimestre(bimestre.id)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(bimestre.name) +
                      "\n                "
                  )
                ]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "collapse hide",
            attrs: {
              id: "collapse" + key,
              "aria-labelledby": "heading" + key,
              "data-parent": "#accordion"
            }
          },
          [
            _c("div", { staticClass: "card-body" }, [
              _c("table", { staticClass: "table table-striped table-hover" }, [
                _vm._m(0, true),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.workshop, function(work, key) {
                    return _c("tr", { key: key }, [
                      _c("td", [_vm._v(_vm._s(work.name))]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            on: {
                              click: function($event) {
                                return _vm.activity(_vm.data)
                              }
                            }
                          },
                          [_vm._v("Presentar")]
                        )
                      ])
                    ])
                  }),
                  0
                )
              ])
            ])
          ]
        )
      ])
    }),
    0
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Actividad")]),
        _vm._v(" "),
        _c("th", [_vm._v("Acción")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Talleres.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Talleres.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Talleres_vue_vue_type_template_id_4b392c9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Talleres.vue?vue&type=template&id=4b392c9a& */ "./resources/js/components/Talleres.vue?vue&type=template&id=4b392c9a&");
/* harmony import */ var _Talleres_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Talleres.vue?vue&type=script&lang=js& */ "./resources/js/components/Talleres.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Talleres_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Talleres_vue_vue_type_template_id_4b392c9a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Talleres_vue_vue_type_template_id_4b392c9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Talleres.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Talleres.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Talleres.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Talleres_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Talleres.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Talleres.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Talleres_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Talleres.vue?vue&type=template&id=4b392c9a&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Talleres.vue?vue&type=template&id=4b392c9a& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Talleres_vue_vue_type_template_id_4b392c9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Talleres.vue?vue&type=template&id=4b392c9a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Talleres.vue?vue&type=template&id=4b392c9a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Talleres_vue_vue_type_template_id_4b392c9a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Talleres_vue_vue_type_template_id_4b392c9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);