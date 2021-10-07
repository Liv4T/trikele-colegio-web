(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityCrosswordComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/activityCrosswordComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['module', 'disabled', 'playing'],
  data: function data() {
    return {
      loading_component: true,
      rows: 15,
      cols: 15,
      table: [],
      words: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (this.module.table === undefined || this.module.table.length == 0) {
      this.module.table = [];
      this.table = [];

      for (var r = 0; r < this.rows; r++) {
        var cols = [];

        for (var c = 0; c < this.cols; c++) {
          cols.push({
            index: c,
            letter: ''
          });
        }

        this.table.push({
          index: r,
          cols: cols
        });
        cols = [];
      }
    } else {
      this.table = [];
      this.words = this.module.words;
      this.module.table.forEach(function (r) {
        var col = [];
        r.cols.forEach(function (c) {
          if (c.letter == null) {
            c.letter = '';
            c.response = '';
            c.title = false;
          }

          col.push(c);
        });
        r.cols = col;

        _this.table.push(r);
      });
      this.validateWords();

      if (this.playing) {
        var w_i = 1;
        this.words.forEach(function (w) {
          if (w.letters[0].r == w.letters[1].r) {
            var _c = w.letters[0].c - 1;

            _this.table[w.letters[0].r].cols[_c] = {
              letter: w_i,
              response: w_i,
              title: true
            };
          } else {
            var _r = w.letters[0].r - 1;

            _this.table[_r].cols[w.letters[0].c] = {
              letter: w_i,
              response: w_i,
              title: true
            };
          }

          w_i++;
        });
      }
    }

    this.loadingComponent();
  },
  methods: {
    loadingComponent: function loadingComponent() {
      var _this2 = this;

      this.loading_component = true;
      setTimeout(function () {
        _this2.loading_component = false;
      }, 1000);
    },
    downEvent: function downEvent(k_row, k_col) {
      if (this.cols == k_col + 1) return;
      var refs = this.$refs;
      var input = '';
      eval('input=refs.input_' + k_row + '_' + (k_col + 1));
      if (!input || input.length == 0) return;
      input[0].focus();
      input[0].select();
    },
    rightEvent: function rightEvent(k_row, k_col) {
      if (this.rows == k_row + 1) return;
      var refs = this.$refs;
      var input = '';
      eval('input=refs.input_' + (k_row + 1) + '_' + k_col);
      if (!input || input.length == 0) return;
      input[0].focus();
      input[0].select();
    },
    topEvent: function topEvent(k_row, k_col) {
      if (0 == k_col) return;
      var refs = this.$refs;
      var input = '';
      eval('input=refs.input_' + k_row + '_' + (k_col - 1));
      if (!input || input.length == 0) return;
      input[0].focus();
      input[0].select();
    },
    leftEvent: function leftEvent(k_row, k_col) {
      if (0 == k_row) return;
      var refs = this.$refs;
      var input = '';
      eval('input=refs.input_' + (k_row - 1) + '_' + k_col);
      if (!input || input.length == 0) return;
      input[0].focus();
      input[0].select();
    },
    InputChanged: function InputChanged(k_row, k_col) {
      this.module.table = this.table;
    },
    InputResponseChanged: function InputResponseChanged(k_row, k_col) {
      this.module.table = this.table;
      this.validateResponse();
    },
    validateWords: function validateWords() {
      var word = '';
      var existLetter = false;
      var letters = [];

      for (var r = 0; r < this.rows; r++) {
        for (var c = 0; c < this.cols; c++) {
          var cell = this.table[r].cols[c];
          word += cell.letter;
          letters.push({
            r: r,
            c: c
          });

          if (cell.letter != '' && !existLetter) {
            word = cell.letter;
            letters = [{
              r: r,
              c: c
            }];
          } else if (cell.letter == '' && existLetter && word.length > 1) {
            if (this.words.filter(function (p) {
              return p.word === word.trim();
            }).length == 0) {
              this.words.push({
                word: word,
                content: '',
                letters: letters
              });
            }

            existLetter = false;
            word = '';
            letters = [];
          }

          existLetter = cell.letter != '';
        }
      }

      for (var _c2 = 0; _c2 < this.cols; _c2++) {
        for (var _r2 = 0; _r2 < this.rows; _r2++) {
          var _cell = this.table[_r2].cols[_c2];
          word += _cell.letter;
          letters.push({
            r: _r2,
            c: _c2
          });

          if (_cell.letter != '' && !existLetter) {
            word = _cell.letter;
            letters = [{
              r: _r2,
              c: _c2
            }];
          } else if (_cell.letter == '' && existLetter && word.length > 1) {
            if (this.words.filter(function (p) {
              return p.word === word.trim();
            }).length == 0) {
              this.words.push({
                word: word,
                content: '',
                letters: letters
              });
            }

            existLetter = false;
            word = '';
            letters = [];
          }

          existLetter = _cell.letter != '';
        }
      }

      if (this.words.length == 0) {
        alert('Por favor ingrese las palabras del crucigrama en la tabla.');
      } else {
        this.module.words = this.words;
        this.module.table = this.table;
      }
    },
    validateResponse: function validateResponse() {
      var _this3 = this;

      this.words.forEach(function (w) {
        w.response = '';
        w.letters.forEach(function (l) {
          if (_this3.table[l.r].cols[l.c].response) {
            w.response += _this3.table[l.r].cols[l.c].response;
          }
        });
      });
      this.module.words = this.words;
    },
    SetWordContentEvent: function SetWordContentEvent(content, k_word) {
      this.words[k_word].content = content;
      this.module.words = this.words;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityCrosswordComponent.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/activityCrosswordComponent.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.crossword{\r\n    background-color:#e9ecefb5;\r\n    padding:5px;\n}\n.crossword_table{\r\n    width:100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\n}\n.crossword_table_row{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\n}\n.crossword_table_col{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border:1px solid #e2e2e2;\n}\n.crossword_table_col_input{\r\n    width:40px;\r\n    height: 40px;\r\n    text-align: center;\r\n    border:2px solid #fff;\r\n    text-transform: uppercase;\n}\n.crossword_table_col_input-active\r\n{\r\n    border:2px solid #4b87f7;\n}\n.crossword_table_col_resp_input{\r\n  width:40px;\r\n  height: 40px;\r\n  padding:1px;\n}\n.crossword_table_col_resp_input-active\r\n{\r\n    border:1px solid #4b87f7;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityCrosswordComponent.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/activityCrosswordComponent.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./activityCrosswordComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityCrosswordComponent.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityCrosswordComponent.vue?vue&type=template&id=1f48e3cd&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/activityCrosswordComponent.vue?vue&type=template&id=1f48e3cd& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    "section",
    { staticClass: "crossword" },
    [
      !_vm.playing
        ? _c("div", { staticClass: "row " }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "col-4 text-right" })
          ])
        : _vm._e(),
      _vm._v(" "),
      !_vm.disabled && !_vm.playing
        ? _c("div", { staticClass: "row" }, [_vm._m(1)])
        : _vm._e(),
      _vm._v(" "),
      _vm.loading_component
        ? _c("div", { staticClass: "row" }, [_vm._m(2)])
        : _vm._e(),
      _vm._v(" "),
      !_vm.loading_component
        ? [
            !_vm.playing
              ? _c("div", [
                  _c("div", { staticClass: "card padding-10" }, [
                    _c(
                      "div",
                      { staticClass: "crossword_table" },
                      _vm._l(_vm.table, function(row, k_row) {
                        return _c(
                          "div",
                          { key: k_row, staticClass: "crossword_table_row" },
                          _vm._l(row.cols, function(col, k_col) {
                            return _c(
                              "div",
                              {
                                key: k_col,
                                staticClass: "crossword_table_col"
                              },
                              [
                                k_row > 0 && k_col > 0
                                  ? _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: col.letter,
                                          expression: "col.letter"
                                        }
                                      ],
                                      ref: "input_" + k_row + "_" + k_col,
                                      refInFor: true,
                                      staticClass: "crossword_table_col_input ",
                                      class: {
                                        "crossword_table_col_input-active":
                                          col.letter != "" && col.letter != null
                                      },
                                      attrs: { maxlength: 1, type: "text" },
                                      domProps: { value: col.letter },
                                      on: {
                                        change: function($event) {
                                          return _vm.InputChanged(k_row, k_col)
                                        },
                                        input: [
                                          function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              col,
                                              "letter",
                                              $event.target.value
                                            )
                                          },
                                          function($event) {
                                            col.letter = $event.target.value.toUpperCase()
                                          }
                                        ],
                                        keyup: [
                                          function($event) {
                                            if (
                                              !$event.type.indexOf("key") &&
                                              _vm._k(
                                                $event.keyCode,
                                                "down",
                                                40,
                                                $event.key,
                                                ["Down", "ArrowDown"]
                                              )
                                            ) {
                                              return null
                                            }
                                            return _vm.downEvent(k_row, k_col)
                                          },
                                          function($event) {
                                            if (
                                              !$event.type.indexOf("key") &&
                                              _vm._k(
                                                $event.keyCode,
                                                "right",
                                                39,
                                                $event.key,
                                                ["Right", "ArrowRight"]
                                              )
                                            ) {
                                              return null
                                            }
                                            if (
                                              "button" in $event &&
                                              $event.button !== 2
                                            ) {
                                              return null
                                            }
                                            return _vm.rightEvent(k_row, k_col)
                                          },
                                          function($event) {
                                            if (
                                              !$event.type.indexOf("key") &&
                                              _vm._k(
                                                $event.keyCode,
                                                "up",
                                                38,
                                                $event.key,
                                                ["Up", "ArrowUp"]
                                              )
                                            ) {
                                              return null
                                            }
                                            return _vm.topEvent(k_row, k_col)
                                          },
                                          function($event) {
                                            if (
                                              !$event.type.indexOf("key") &&
                                              _vm._k(
                                                $event.keyCode,
                                                "left",
                                                37,
                                                $event.key,
                                                ["Left", "ArrowLeft"]
                                              )
                                            ) {
                                              return null
                                            }
                                            if (
                                              "button" in $event &&
                                              $event.button !== 0
                                            ) {
                                              return null
                                            }
                                            return _vm.leftEvent(k_row, k_col)
                                          }
                                        ]
                                      }
                                    })
                                  : _vm._e()
                              ]
                            )
                          }),
                          0
                        )
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-sm padding-10 text-center" },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              on: { click: _vm.validateWords }
                            },
                            [_vm._v("Ingresar contenido")]
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card padding-10" },
                    [
                      _vm._m(3),
                      _vm._v(" "),
                      _vm._l(_vm.words, function(word, k_word) {
                        return _c("div", { key: k_word, staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-4 padding-10" }, [
                            _c("label", [_vm._v("Palabra:")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: word.word,
                                  expression: "word.word"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text", disabled: true },
                              domProps: { value: word.word },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(word, "word", $event.target.value)
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-sm-8 padding-10" },
                            [
                              _c("label", [_vm._v("Pregunta")]),
                              _vm._v(" "),
                              _c("editor-component", {
                                attrs: {
                                  content: word.content,
                                  readonly: _vm.disabled
                                },
                                on: {
                                  updateText: function($event) {
                                    return _vm.SetWordContentEvent(
                                      $event,
                                      k_word
                                    )
                                  }
                                }
                              })
                            ],
                            1
                          )
                        ])
                      })
                    ],
                    2
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.playing
              ? _c("div", [
                  _c(
                    "div",
                    { staticClass: "card padding-10" },
                    [
                      _vm._m(4),
                      _vm._v(" "),
                      _vm._l(_vm.words, function(word, k_word) {
                        return _c("div", { key: k_word, staticClass: "row" }, [
                          _c(
                            "div",
                            {
                              staticClass: "col-sm-8 padding-10",
                              staticStyle: {
                                display: "flex",
                                "flex-direction": "row"
                              }
                            },
                            [
                              _c(
                                "label",
                                {
                                  staticStyle: {
                                    "margin-right": "10px",
                                    "font-weight": "bold"
                                  }
                                },
                                [_vm._v(_vm._s(k_word + 1) + ". ")]
                              ),
                              _vm._v(" "),
                              _c("div", {
                                staticStyle: { "margin-right": "10px" },
                                domProps: { innerHTML: _vm._s(word.content) }
                              }),
                              _vm._v(" "),
                              word.response &&
                              word.response.toUpperCase() ==
                                word.word.toUpperCase() &&
                              _vm.disabled
                                ? _c("small", [
                                    _c(
                                      "svg",
                                      {
                                        attrs: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          viewBox: "0 0 16 16",
                                          width: "16",
                                          height: "16"
                                        }
                                      },
                                      [
                                        _c("path", {
                                          staticStyle: { fill: "#48DA7E" },
                                          attrs: {
                                            "fill-rule": "evenodd",
                                            d:
                                              "M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM0 8a8 8 0 1116 0A8 8 0 010 8zm11.78-1.72a.75.75 0 00-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l4.5-4.5z"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" (" + _vm._s(word.word) + "). ")
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              word.response &&
                              word.response.toUpperCase() !=
                                word.word.toUpperCase() &&
                              _vm.disabled
                                ? _c("small", [
                                    _c(
                                      "svg",
                                      {
                                        attrs: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          viewBox: "0 0 24 24",
                                          width: "16",
                                          height: "16"
                                        }
                                      },
                                      [
                                        _c("path", {
                                          staticStyle: { fill: "#D61D5A" },
                                          attrs: {
                                            d:
                                              "M9.036 7.976a.75.75 0 00-1.06 1.06L10.939 12l-2.963 2.963a.75.75 0 101.06 1.06L12 13.06l2.963 2.964a.75.75 0 001.061-1.06L13.061 12l2.963-2.964a.75.75 0 10-1.06-1.06L12 10.939 9.036 7.976z"
                                          }
                                        }),
                                        _c("path", {
                                          staticStyle: { fill: "#D61D5A" },
                                          attrs: {
                                            "fill-rule": "evenodd",
                                            d:
                                              "M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(
                                      " (" +
                                        _vm._s(word.word) +
                                        "). Respondiste: " +
                                        _vm._s(word.response)
                                    )
                                  ])
                                : _vm._e()
                            ]
                          )
                        ])
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  !_vm.disabled
                    ? _c("div", { staticClass: "card padding-10" }, [
                        _c(
                          "div",
                          { staticClass: "crossword_table" },
                          _vm._l(_vm.table, function(row, k_row) {
                            return _c(
                              "div",
                              {
                                key: k_row,
                                staticClass: "crossword_table_row"
                              },
                              _vm._l(row.cols, function(col, k_col) {
                                return _c(
                                  "div",
                                  {
                                    key: k_col,
                                    staticClass:
                                      "crossword_table_col_resp_input"
                                  },
                                  [
                                    !col.title && col.letter
                                      ? _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: col.response,
                                              expression: "col.response"
                                            }
                                          ],
                                          ref: "input_" + k_row + "_" + k_col,
                                          refInFor: true,
                                          staticClass:
                                            "crossword_table_col_input ",
                                          class: {
                                            "crossword_table_col_resp_input-active":
                                              col.letter != "" &&
                                              col.letter != null
                                          },
                                          attrs: { maxlength: 1, type: "text" },
                                          domProps: { value: col.response },
                                          on: {
                                            change: function($event) {
                                              return _vm.InputResponseChanged(
                                                k_row,
                                                k_col
                                              )
                                            },
                                            input: [
                                              function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  col,
                                                  "response",
                                                  $event.target.value
                                                )
                                              },
                                              function($event) {
                                                col.response = $event.target.value.toUpperCase()
                                              }
                                            ],
                                            keyup: [
                                              function($event) {
                                                if (
                                                  !$event.type.indexOf("key") &&
                                                  _vm._k(
                                                    $event.keyCode,
                                                    "down",
                                                    40,
                                                    $event.key,
                                                    ["Down", "ArrowDown"]
                                                  )
                                                ) {
                                                  return null
                                                }
                                                return _vm.downEvent(
                                                  k_row,
                                                  k_col
                                                )
                                              },
                                              function($event) {
                                                if (
                                                  !$event.type.indexOf("key") &&
                                                  _vm._k(
                                                    $event.keyCode,
                                                    "right",
                                                    39,
                                                    $event.key,
                                                    ["Right", "ArrowRight"]
                                                  )
                                                ) {
                                                  return null
                                                }
                                                if (
                                                  "button" in $event &&
                                                  $event.button !== 2
                                                ) {
                                                  return null
                                                }
                                                return _vm.rightEvent(
                                                  k_row,
                                                  k_col
                                                )
                                              },
                                              function($event) {
                                                if (
                                                  !$event.type.indexOf("key") &&
                                                  _vm._k(
                                                    $event.keyCode,
                                                    "up",
                                                    38,
                                                    $event.key,
                                                    ["Up", "ArrowUp"]
                                                  )
                                                ) {
                                                  return null
                                                }
                                                return _vm.topEvent(
                                                  k_row,
                                                  k_col
                                                )
                                              },
                                              function($event) {
                                                if (
                                                  !$event.type.indexOf("key") &&
                                                  _vm._k(
                                                    $event.keyCode,
                                                    "left",
                                                    37,
                                                    $event.key,
                                                    ["Left", "ArrowLeft"]
                                                  )
                                                ) {
                                                  return null
                                                }
                                                if (
                                                  "button" in $event &&
                                                  $event.button !== 0
                                                ) {
                                                  return null
                                                }
                                                return _vm.leftEvent(
                                                  k_row,
                                                  k_col
                                                )
                                              }
                                            ]
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    col.title
                                      ? _c("span", [
                                          _vm._v(_vm._s(col.response))
                                        ])
                                      : _vm._e()
                                  ]
                                )
                              }),
                              0
                            )
                          }),
                          0
                        )
                      ])
                    : _vm._e()
                ])
              : _vm._e()
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8 text-left" }, [
      _c("h4", [_vm._v("Crucigrama")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm padding-10" }, [
      _c("p", [
        _vm._v(
          "*Ingrese cada letra de cada palabra en el orden vertical u horizontal que desee."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm padding-10" }, [
      _c("span", [_vm._v("Cargando...")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row " }, [
      _c("div", { staticClass: "col-8 text-left" }, [
        _c("h4", [_vm._v("Preguntas del crucigrama")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-4 text-right" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row " }, [
      _c("div", { staticClass: "col-8 text-left" }, [
        _c("h4", [_vm._v("Preguntas:")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-4 text-right" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/activityCrosswordComponent.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/activityCrosswordComponent.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _activityCrosswordComponent_vue_vue_type_template_id_1f48e3cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activityCrosswordComponent.vue?vue&type=template&id=1f48e3cd& */ "./resources/js/components/activityCrosswordComponent.vue?vue&type=template&id=1f48e3cd&");
/* harmony import */ var _activityCrosswordComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activityCrosswordComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/activityCrosswordComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _activityCrosswordComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activityCrosswordComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/activityCrosswordComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _activityCrosswordComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _activityCrosswordComponent_vue_vue_type_template_id_1f48e3cd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _activityCrosswordComponent_vue_vue_type_template_id_1f48e3cd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/activityCrosswordComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/activityCrosswordComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/activityCrosswordComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCrosswordComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./activityCrosswordComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityCrosswordComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCrosswordComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/activityCrosswordComponent.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/activityCrosswordComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCrosswordComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./activityCrosswordComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityCrosswordComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCrosswordComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCrosswordComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCrosswordComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCrosswordComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCrosswordComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/activityCrosswordComponent.vue?vue&type=template&id=1f48e3cd&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/activityCrosswordComponent.vue?vue&type=template&id=1f48e3cd& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCrosswordComponent_vue_vue_type_template_id_1f48e3cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./activityCrosswordComponent.vue?vue&type=template&id=1f48e3cd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityCrosswordComponent.vue?vue&type=template&id=1f48e3cd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCrosswordComponent_vue_vue_type_template_id_1f48e3cd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCrosswordComponent_vue_vue_type_template_id_1f48e3cd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);