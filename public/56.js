(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/studentCourseComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/studentCourseComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["id_module", "id_class", "returnPage"],
  data: function data() {
    return {
      is_loading: false,
      weekly_plan: {},
      errors: [],
      weekly_plan_detail: [],
      nameArea: "",
      course: {
        content: [{
          content_type: "DOCUMENT",
          content: "",
          description: ""
        }, {
          content_type: "LINK",
          content: "",
          description: ""
        }, {
          content_type: "VIDEO",
          content: "",
          description: ""
        }, {
          content_type: "YOUTUBE",
          content: "",
          description: ""
        }],
        activities: [],
        description: "",
        hourly_intensity: 0,
        name: "",
        progress: 0
      },
      achievements: [],
      activity: {},
      name_event: "",
      hour_event: "",
      link_event: "",
      id_area: "",
      id_classroom: ""
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get("/showClass/".concat(this.id_module)).then(function (response) {
      _this.achievements = response.data.achievements;
      _this.nameArea = "".concat(response.data.area.name, " ").concat(response.data.classroom.name);
      _this.id_area = "".concat(response.data.area.id, "/").concat(response.data.classroom.id, " ");
      axios.get("/getEvenNearStudent/".concat(_this.id_area)).then(function (response) {
        _this.name_event = response.data.name;
        _this.hour_event = response.data.date_from;
        _this.link_event = response.data.url;
      });
    });
    axios.get("/GetNameWeekly/".concat(this.id_module)).then(function (response) {
      _this.weekly_plan = {
        name: response.data
      };
    });
    this.getCourseData();
  },
  methods: {
    selectOption: function selectOption(id_question, ix_option, question) {
      var _this2 = this;

      if (this.activity.interaction && this.activity.interaction.state == 2) {
        return;
      }

      axios.put("/api/student/module/".concat(this.id_module, "/class/").concat(this.id_class, "/activity/").concat(this.activity.id, "/question/").concat(id_question, "/response"), {
        id_option: ix_option
      }).then(function (response) {
        question.student_response = {
          response: ix_option
        };

        _this2.completeQuestion();
      });
    },
    completeQuestion: function completeQuestion() {
      var complete = false;
      this.activity.module.questions.forEach(function (q) {
        complete = q.student_response && q.student_response.response != null;
      });
      this.activity.completed = complete;
    },
    openDocument: function openDocument(resource) {
      try {
        this.saveInteraction(resource); //  window.open(resource.content);
      } catch (_unused) {}
    },
    openLink: function openLink(resource) {
      try {
        this.saveInteraction(resource);
        window.open(resource.content);
      } catch (_unused2) {}
    },
    playVideo: function playVideo(resource) {
      this.saveInteraction(resource);
    },
    saveInteraction: function saveInteraction(resource) {
      axios.put("/api/student/module/".concat(this.id_module, "/class/").concat(this.id_class, "/resource/").concat(resource.id, "/interaction")).then(function (response) {//this.getCourseData();
      });
    },
    getCourseData: function getCourseData() {
      var _this3 = this;

      if (this.id_class != 0) {
        axios.get("/api/teacher/module/".concat(this.id_module, "/class/").concat(this.id_class)).then(function (response) {
          _this3.course = response.data;

          if (_this3.course.content.length == 0) {
            _this3.course.content = [{
              content_type: "DOCUMENT",
              content: "",
              description: ""
            }, {
              content_type: "LINK",
              content: "",
              description: ""
            }, {
              content_type: "VIDEO",
              content: "",
              description: ""
            }, {
              content_type: "YOUTUBE",
              content: "",
              description: ""
            }];
          }
        });
      }
    },
    openActivity: function openActivity(id_activity) {
      this.activity = this.course.activities[id_activity];
      console.log(this.activity);
      /*
                  axios
                      .put(
                          `/api/student/module/${this.id_module}/class/${this.id_class}/activity/${this.activity.id}/interaction`
                      )
                      .then(response => {});
      
                  this.completeQuestion();*/
    },
    openFeedback: function openFeedback(id_activity) {
      var _this4 = this;

      this.activity = this.course.activities[id_activity];
      console.log(this.activity);

      if ("CUESTIONARIO_UNICA_RTA" == this.activity.activity_type) {
        this.activity.correct_answers = 0;
        this.course.activities[id_activity].module.questions.forEach(function (e) {
          if (e.student_response.response > -1 && e.student_response.is_correct == "S") {
            _this4.activity.correct_answers++;
          }
        });
      }
    },
    closeQuestion: function closeQuestion() {
      this.activity = {}; //activate class
    },
    finalizeActivityQuestion: function finalizeActivityQuestion() {
      var _this5 = this;

      axios.put("/api/student/module/".concat(this.id_module, "/class/").concat(this.id_class, "/activity/").concat(this.activity.id, "/interaction"), {
        is_qualified: 1,
        qualified_date: new Date()
      }).then(function (response) {
        _this5.getCourseData();

        _this5.closeQuestion();
      });
    },
    // returnPage() {
    //     window.location = `/estudiante/modulo/${this.id_module}`;
    // },
    addResource: function addResource(resource_type) {
      this.course.content.push({
        content_type: resource_type,
        content: "",
        description: ""
      });
    },
    removeResource: function removeResource(index) {
      this.course.content.splice(index, 1);
    },
    removeActivity: function removeActivity(index) {
      this.course.activities.splice(index, 1);
    },
    addActivity: function addActivity() {
      this.course.activities.push({
        name: "",
        description: "",
        activity_type: "",
        id_achievement: "",
        module: {},
        is_required: 1
      });
    },
    removeQuestion: function removeQuestion(activity, index) {
      activity.module.questions.splice(index, 1);
    },
    saveData: function saveData() {
      axios.put("/api/teacher/module/".concat(this.id_module, "/class"), this.course).then(function (response) {
        // this.getPlanificationEvent(this.id_lective_planification);
        toastr.success("Clases actualizadas correctamente"); // this.returnPage();
      }, function (error) {
        console.log(error);
        toastr.error("ERROR:Por favor valide que la información esta completa");
      });
    },
    selectActivityType: function selectActivityType(activity) {
      switch (activity.activity_type) {
        case "CUESTIONARIO_UNICA_RTA":
          activity.module = {
            questions: [{
              question: "",
              type_question: "SIMPLE_RTA",
              options: [{
                content: ""
              }, {
                content: ""
              }],
              valid_answer_index: 0,
              justify: ""
            }]
          };
          break;
      }
    },
    AddQuestion: function AddQuestion(activity) {
      activity.module.questions.push({
        question: "",
        type_question: "SIMPLE_RTA",
        options: [{
          content: ""
        }, {
          content: ""
        }],
        valid_answer_index: 0,
        justify: ""
      });
    },
    AddOptionOnQuestion: function AddOptionOnQuestion(activity, index) {
      activity.module.questions[index].options.push({
        content: ""
      });
    },
    RemoveOptionOnQuestion: function RemoveOptionOnQuestion(activity, index_question, index) {
      activity.module.questions[index_question].options.splice(index, 1);
    },
    onFileChange: function onFileChange(file, item_index) {
      var _this6 = this;

      console.log(item_index);
      this.is_loading = true;
      var files = file.target.files || file.dataTransfer.files;
      var data = new FormData();

      if (files.length > 0) {
        this.course.content[item_index].progress_bar_percent = 10;
        console.log("evento");
        this.initLoading(item_index, 20);
        var _file = files[0];

        var _fileNameSplit = _file.name.split("."); // if uploaded file is valid with validation rules


        var file_extension = _fileNameSplit[_fileNameSplit.length - 1];

        var file_name = _file.name.replace(".".concat(file_extension), "");

        data.append("file", files[0]);
        data.append("name", file_name);
        data.append("count", "-class-".concat(item_index));
        axios.post("/fileDocument", data).then(function (response) {
          _this6.course.content[item_index].content = "".concat(window.location.origin, "/uploads/clases/").concat(file_name.split(" ").join("_"), "-class-").concat(item_index, ".").concat(file_extension);

          _this6.stopLooading(item_index);
        })["catch"](function (err) {
          _this6.stopLooading(item_index);
        });
      } else {
        this.stopLooading(item_index);
      }
    },
    initLoading: function initLoading(item_index, percent) {
      var _this7 = this;

      if (this.course.content[item_index].progress_bar_percent != 0 && this.course.content[item_index].progress_bar_percent < percent && percent < 100) {
        this.course.content[item_index].progress_bar_percent = this.course.content[item_index].progress_bar_percent + 20;
        setTimeout(function () {
          _this7.initLoading(item_index, percent + 20);
        }, 2000);
      }
    },
    stopLooading: function stopLooading(item_index) {
      var _this8 = this;

      this.course.content[item_index].progress_bar_percent = 100;
      setTimeout(function () {
        _this8.course.content[item_index].progress_bar_percent = 0;
        _this8.is_loading = false;
      }, 500);
    },
    resolveYoutubeLink: function resolveYoutubeLink(link_youtube) {
      if (!link_youtube.includes('/')) return link_youtube;
      var split_link = link_youtube.split('/');
      var split_simple_link = split_link[split_link.length - 1].split('&')[0].split('=');
      return 'https://www.youtube.com/embed/' + split_simple_link[split_simple_link.length - 1];
    },
    SaveResponseEvent: function SaveResponseEvent(activity) {
      console.log(activity);
      axios.put("/api/student/module/".concat(this.id_module, "/class/").concat(this.id_class, "/activity/").concat(activity.id, "/interaction"), activity).then(function (response) {
        // this.getPlanificationEvent(this.id_lective_planification);
        toastr.success("Actividad enviada correctamente");
        location.reload();
      }, function (error) {
        console.log(error);
        toastr.error("ERROR:Por favor valide que la información esta completa");
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/studentCourseComponent.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/studentCourseComponent.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.div-weekly-plan {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    padding: 10px;\n}\n.div-weekly-plan label {\r\n    font-size: 1.2em;\r\n    font-weight: 700;\n}\n.div-classes {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding: 5px;\n}\n.div-class {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    padding: 5px;\n}\n.div-class > .title {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\n}\n.div-class > .content {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    margin-top: 30px;\r\n    flex-wrap: wrap;\n}\n.required {\r\n    color: red;\n}\n.div-resource {\r\n    padding: 30px;\r\n    background-color: #e9ecefb5;\r\n    margin: 5px;\n}\n.div-resource .form-item {\r\n    width: 100%;\r\n    padding: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\n}\n.div-resource .form-item > a {\r\n    color: #007bff;\n}\n.div-resource .form-item > a:visited {\r\n    color: #007bff;\n}\n.div-resource .form-item > span {\r\n    padding: 10px;\r\n    font-size: 1.2em;\r\n    color: #233d68;\r\n    font-weight: 700;\r\n    border: 1px solid #233d68;\r\n    border-radius: 5px;\r\n    margin: 5px;\n}\n.div-resource .form-item > span.blue {\r\n    padding: 10px;\r\n    background-color: #edf8ff;\r\n    font-size: 1.2em;\r\n    color: #233d68;\r\n    font-weight: 700;\r\n    border: 1px solid #233d68;\r\n    border-radius: 5px;\r\n    margin: 5px;\n}\n.div-resource .form-item > span:hover {\r\n    background-color: white;\r\n    cursor: pointer;\n}\n.div-resource .form-item > .form-button {\r\n    width: 100%;\r\n    padding: 5px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-end;\n}\n.div-resource .form-item > .form-button > button {\r\n    width: 50%;\n}\n.div-weekly-plan-btn-save {\r\n    display: flex;\r\n    padding: 50px;\r\n    justify-content: space-between;\r\n    flex-direction: row;\n}\n.closed-icon {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    flex-direction: row;\r\n    cursor: pointer;\r\n    color: #233d68;\n}\n.margin-top-50 {\r\n    margin-top: 50px;\n}\n.row {\r\n    margin: 10px 0px;\n}\n.question {\r\n    background-color: #e9ecefb5;\n}\n.div-icon-add {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\n}\n.icon-remove {\r\n    background-color: #f2f2f2;\r\n    height: 30px;\r\n    width: 40px;\r\n    border: 2px solid #8f8f8f;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: default;\r\n\r\n    font-weight: 900;\r\n    background-color: #ffc107;\r\n    color: white;\r\n    border-color: #ffc107;\n}\n.icon-remove:hover {\r\n    color: #ffc107;\r\n    background-color: white;\r\n    border-color: #ffc107;\n}\n.icon-add {\r\n    background-color: #233d68;\r\n    height: 30px;\r\n    width: 40px;\r\n    border: 2px solid #233d68;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: default;\r\n\r\n    font-weight: 900;\r\n    color: white;\n}\n.icon-add:hover {\r\n    color: #233d68;\r\n    background-color: white;\r\n    border-color: #233d68;\n}\n.card-title {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\n}\n.card-title > h5 {\r\n    width: 50%;\n}\n.div-check {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding-top: 20px;\n}\n.progress {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: flex-start;\n}\n.q-option {\r\n    background-color: white;\r\n    border-radius: 5px;\r\n    padding: 10px 20px;\r\n    margin: 5px;\r\n    border: 1px solid #f2f2f2;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: row;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n.q-option:hover {\r\n    background-color: #ffe7a0;\r\n    cursor: pointer;\n}\n.q-option-checked {\r\n    background-color: #007bff !important;\r\n    color: white;\r\n    box-shadow: none;\n}\n.span-solution {\r\n    margin-top: 20px;\r\n    font-size: 1.8em;\n}\n.html-content {\r\n    padding: 10px;\r\n    margin-top: 20px;\r\n    background-color: rgba(255, 255, 255, 1);\n}\n.container_youtube{\r\n    width: 100%;\r\n    height: 500px !important;\n}\n.activity_response-button{\r\n    display:flex;\r\n    flex-direction: row;\r\n    justify-content: flex-end;\r\n    align-items: center;\n}\n.activity_score{\r\n    font-size: 1.5em;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/studentCourseComponent.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/studentCourseComponent.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./studentCourseComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/studentCourseComponent.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/studentCourseComponent.vue?vue&type=template&id=371fe3f2&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/studentCourseComponent.vue?vue&type=template&id=371fe3f2& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    _c("div", [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-11 mx-auto" }, [
          _c("div", { staticClass: "custom-card text-center" }, [
            _c("h5", { staticClass: "card-header fondo" }, [
              _vm._v(
                "\n                        " +
                  _vm._s(_vm.weekly_plan.name) +
                  "\n                    "
              )
            ]),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass: "classroom-label",
                staticStyle: { "font-size": "1.5em" }
              },
              [_vm._v(_vm._s(_vm.nameArea))]
            )
          ]),
          _vm._v(" "),
          _vm.link_event
            ? _c("div", { staticClass: "row" }, [_vm._m(0)])
            : _vm._e(),
          _vm._v(" "),
          _vm.link_event
            ? _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(
                        _vm.name_event + " Fecha y hora: " + _vm.hour_event
                      ) +
                      "\n                    "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-warning float-right",
                      attrs: {
                        href: _vm.link_event,
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [_vm._v("Ir a la clase")]
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }),
            _vm._v(" "),
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "progress" }, [
                _c("div", {
                  staticClass: "progress-bar",
                  staticStyle: { "background-color": "#f79d52" },
                  style: {
                    width: _vm.course.progress + "%"
                  }
                })
              ]),
              _vm._v(
                "\n                        " +
                  _vm._s(_vm.course.progress) +
                  "%\n                    "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "div-classes" }, [
            _c(
              "div",
              { staticClass: "div-class" },
              [
                _c("div", { staticClass: "title row" }, [
                  _c("div", { staticClass: "col-8" }, [
                    _c("b", [_vm._v("Clase:")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.course.name,
                          expression: "course.name"
                        }
                      ],
                      staticClass: "form-control-plaintext",
                      attrs: { type: "text", readonly: "" },
                      domProps: { value: _vm.course.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.course, "name", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-4" }, [
                    _c("b", [_vm._v("Intensidad:")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.course.hourly_intensity,
                          expression: "course.hourly_intensity"
                        }
                      ],
                      staticClass: "form-control-plaintext",
                      attrs: { type: "number", readonly: "" },
                      domProps: { value: _vm.course.hourly_intensity },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.course,
                            "hourly_intensity",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-12" }, [
                    _c("b", [_vm._v("Descripción:")]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.course.description,
                          expression: "course.description"
                        }
                      ],
                      staticClass: "form-control-plaintext",
                      attrs: { cols: "40", rows: "4", readonly: "" },
                      domProps: { value: _vm.course.description },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.course,
                            "description",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "row justify-content-center" },
                  [
                    _vm._l(_vm.course.content, function(item_content, key_c) {
                      return [
                        item_content.content != "" &&
                        item_content.content != null
                          ? _c(
                              "div",
                              {
                                key: key_c,
                                staticClass: "col-10 div-resource",
                                staticStyle: { "border-radius": "8px" }
                              },
                              [
                                item_content.content_type === "DOCUMENT"
                                  ? _c(
                                      "h4",
                                      { staticStyle: { color: "#f79d52" } },
                                      [
                                        _vm._v(
                                          "\n                                    Documento\n                                "
                                        )
                                      ]
                                    )
                                  : item_content.content_type === "LINK"
                                  ? _c(
                                      "h4",
                                      { staticStyle: { color: "#f79d52" } },
                                      [
                                        _vm._v(
                                          "\n                                    Enlace\n                                "
                                        )
                                      ]
                                    )
                                  : item_content.content_type === "VIDEO"
                                  ? _c(
                                      "h4",
                                      { staticStyle: { color: "#f79d52" } },
                                      [
                                        _vm._v(
                                          "\n                                    Video\n                                "
                                        )
                                      ]
                                    )
                                  : item_content.content_type === "YOUTUBE"
                                  ? _c(
                                      "h4",
                                      { staticStyle: { color: "#f79d52" } },
                                      [
                                        _vm._v(
                                          "\n                                    Video\n                                "
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-item" }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: item_content.description,
                                        expression: "item_content.description"
                                      }
                                    ],
                                    staticClass: "form-control-plaintext",
                                    attrs: { type: "text", readonly: "" },
                                    domProps: {
                                      value: item_content.description
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          item_content,
                                          "description",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-item" }, [
                                  _c("div", { staticClass: "form-button" }, [
                                    item_content.content_type === "DOCUMENT"
                                      ? _c(
                                          "a",
                                          {
                                            staticClass: "btn btn-primary",
                                            on: {
                                              click: function($event) {
                                                return _vm.openDocument(
                                                  item_content
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v("Leer documento")]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    item_content.content_type === "LINK"
                                      ? _c(
                                          "a",
                                          {
                                            staticClass: "btn btn-primary",
                                            attrs: { target: "_blank" },
                                            on: {
                                              click: function($event) {
                                                return _vm.openLink(
                                                  item_content
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v("Vamos a trabajar")]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    item_content.content_type === "VIDEO"
                                      ? _c(
                                          "video",
                                          {
                                            attrs: { id: "vid", controls: "" },
                                            on: {
                                              playing: function($event) {
                                                return _vm.playVideo(
                                                  item_content
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("source", {
                                              attrs: {
                                                src: item_content.content,
                                                type: "video/mp4"
                                              }
                                            })
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    item_content.content_type === "YOUTUBE"
                                      ? _c("iframe", {
                                          staticClass: "container_youtube",
                                          attrs: {
                                            src: _vm.resolveYoutubeLink(
                                              item_content.content
                                            ),
                                            frameborder: "0",
                                            allow:
                                              "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                            allowfullscreen: ""
                                          }
                                        })
                                      : _vm._e()
                                  ])
                                ])
                              ]
                            )
                          : _vm._e()
                      ]
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _vm._l(_vm.course.activities, function(act, key_a) {
                  return _c(
                    "div",
                    {
                      key: key_a,
                      staticClass: "row justify-content-center margin-top-50"
                    },
                    [
                      _c("div", { staticClass: "col-10" }, [
                        _c("div", { staticClass: "card" }, [
                          _c("div", { staticClass: "card-header card-title" }, [
                            _c("h5", { staticStyle: { color: "#f79d52" } }, [
                              _vm._v(
                                "\n                                            Actividad N°" +
                                  _vm._s(key_a + 1) +
                                  " :\n                                            " +
                                  _vm._s(act.name) +
                                  "\n                                        "
                              )
                            ]),
                            _vm._v(" "),
                            act.interaction.state < 3 &&
                            _vm.activity.id != act.id
                              ? _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary",
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.openActivity(key_a)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                            " +
                                        _vm._s(
                                          act.interaction.state == 2
                                            ? "Esperando calificación"
                                            : "Presentar"
                                        ) +
                                        "\n                                        "
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.activity.id == act.id
                              ? _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-warning",
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.closeQuestion()
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                            Cancelar\n                                        "
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            act.interaction.state == 3 &&
                            _vm.activity.id != act.id
                              ? _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary",
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.openFeedback(key_a)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                            Ver retroalimentación\n                                        "
                                    )
                                  ]
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _vm.activity.id == act.id
                            ? _c(
                                "div",
                                { staticClass: "card-body" },
                                [
                                  _c("div", { staticClass: "row" }, [
                                    _c("div", { staticClass: "col-12" }, [
                                      _c("b", [_vm._v("Descripción:")]),
                                      _vm._v(" "),
                                      _c("textarea", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.activity.description,
                                            expression:
                                              "\n                                                        activity.description\n                                                    "
                                          }
                                        ],
                                        staticClass: "form-control-plaintext",
                                        attrs: { readonly: "" },
                                        domProps: {
                                          value: _vm.activity.description
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.activity,
                                              "description",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _vm.activity.activity_type == "CUESTIONARIO"
                                    ? _c("activity-questionary", {
                                        attrs: {
                                          playing: true,
                                          module: _vm.activity.module,
                                          disabled:
                                            _vm.activity.interaction.state > 1
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.activity.activity_type ==
                                  "COMPLETAR_ORACION"
                                    ? _c("activity-complete-sentence", {
                                        attrs: {
                                          playing: true,
                                          module: _vm.activity.module,
                                          disabled:
                                            _vm.activity.interaction.state > 1
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.activity.activity_type == "RELACION"
                                    ? _c("activity-relationship", {
                                        attrs: {
                                          playing: true,
                                          module: _vm.activity.module,
                                          disabled:
                                            _vm.activity.interaction.state > 1
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.activity.activity_type == "CRUCIGRAMA"
                                    ? _c("activity-crossword", {
                                        attrs: {
                                          playing: true,
                                          module: _vm.activity.module,
                                          disabled:
                                            _vm.activity.interaction.state > 1
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "activity_response-button" },
                                    [
                                      _vm.activity.interaction.state == 1
                                        ? _c(
                                            "button",
                                            {
                                              staticClass: "btn btn-primary",
                                              on: {
                                                click: function($event) {
                                                  return _vm.SaveResponseEvent(
                                                    _vm.activity
                                                  )
                                                }
                                              }
                                            },
                                            [_vm._v("Enviar respuestas")]
                                          )
                                        : _vm._e()
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm.activity.interaction.state == 3
                                    ? _c("div", [
                                        _vm._v("Calificación: "),
                                        _c(
                                          "span",
                                          { staticClass: "activity_score" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.activity.interaction.score
                                              )
                                            ),
                                            _c("small", [_vm._v("/5")])
                                          ]
                                        )
                                      ])
                                    : _vm._e()
                                ],
                                1
                              )
                            : _vm._e()
                        ])
                      ])
                    ]
                  )
                })
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "div-weekly-plan-btn-save" }, [
            _c(
              "a",
              { staticClass: "btn btn-warning", on: { click: _vm.returnPage } },
              [_vm._v("Regresar")]
            )
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
    return _c("div", { staticClass: "col-12" }, [
      _c("b", [_vm._v("Clase presencial:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [_c("b", [_vm._v("Recursos:")])])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/studentCourseComponent.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/studentCourseComponent.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _studentCourseComponent_vue_vue_type_template_id_371fe3f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./studentCourseComponent.vue?vue&type=template&id=371fe3f2& */ "./resources/js/components/studentCourseComponent.vue?vue&type=template&id=371fe3f2&");
/* harmony import */ var _studentCourseComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./studentCourseComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/studentCourseComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _studentCourseComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./studentCourseComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/studentCourseComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _studentCourseComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _studentCourseComponent_vue_vue_type_template_id_371fe3f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _studentCourseComponent_vue_vue_type_template_id_371fe3f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/studentCourseComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/studentCourseComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/studentCourseComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentCourseComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./studentCourseComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/studentCourseComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentCourseComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/studentCourseComponent.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/studentCourseComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentCourseComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./studentCourseComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/studentCourseComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentCourseComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentCourseComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentCourseComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentCourseComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentCourseComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/studentCourseComponent.vue?vue&type=template&id=371fe3f2&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/studentCourseComponent.vue?vue&type=template&id=371fe3f2& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_studentCourseComponent_vue_vue_type_template_id_371fe3f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./studentCourseComponent.vue?vue&type=template&id=371fe3f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/studentCourseComponent.vue?vue&type=template&id=371fe3f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_studentCourseComponent_vue_vue_type_template_id_371fe3f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_studentCourseComponent_vue_vue_type_template_id_371fe3f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);