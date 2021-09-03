(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[117],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/homeCiclos.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/homeCiclos.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-material */ "./node_modules/vue-material/dist/vue-material.js");
/* harmony import */ var vue_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_material_dist_vue_material_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-material/dist/vue-material.min.css */ "./node_modules/vue-material/dist/vue-material.min.css");
/* harmony import */ var vue_material_dist_vue_material_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_material_dist_vue_material_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_mouse_parallax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-mouse-parallax */ "./node_modules/vue-mouse-parallax/index.js");
/* harmony import */ var vueperslides__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vueperslides */ "./node_modules/vueperslides/dist/vueperslides.common.js");
/* harmony import */ var vueperslides__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vueperslides__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vueperslides_dist_vueperslides_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vueperslides/dist/vueperslides.css */ "./node_modules/vueperslides/dist/vueperslides.css");
/* harmony import */ var vueperslides_dist_vueperslides_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vueperslides_dist_vueperslides_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _TextInput_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TextInput.vue */ "./resources/js/components/TextInput.vue");
/* harmony import */ var vue_flux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-flux */ "./node_modules/vue-flux/dist/vue-flux.umd.min.js");
/* harmony import */ var vue_flux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_flux__WEBPACK_IMPORTED_MODULE_8__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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










vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_mouse_parallax__WEBPACK_IMPORTED_MODULE_4__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_material__WEBPACK_IMPORTED_MODULE_2___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueperSlides: vueperslides__WEBPACK_IMPORTED_MODULE_5__["VueperSlides"],
    VueperSlide: vueperslides__WEBPACK_IMPORTED_MODULE_5__["VueperSlide"]
  },
  bodyClass: "landing-page",
  props: {
    header: {
      type: String
    }
  },
  data: function data() {
    return {
      name: "",
      email: "",
      email2: "",
      subject: "",
      phone: "",
      message: null,
      newName: "",
      newLastName: "",
      newEmail: "",
      selected: "",
      description: "",
      tfomulario: false,
      tcorreo: false,
      plan: "",
      slides: [{
        content: "",
        image: ""
      }],
      inputs: [{
        name: ""
      }],
      vfOptions: {
        autoplay: true
      },
      vfImages: ["https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/SLIDER1.jpg?alt=media&token=58ecdc81-2d81-4996-aeeb-8d9c34c15072"],
      vfTransitions: ["fade", "cube", "book", "wave"],
      vfCaptions: ["Caption for image 1"]
    };
  },
  computed: {},
  mounted: function mounted() {
    this.plan = window.location.origin + "/compra/plan";
  },
  methods: {
    getMenu: function getMenu() {
      window.location = "/";
    },
    inputEvent: function inputEvent(e) {
      console.log(e);
    },
    add: function add(index) {
      this.inputs.push({
        name: ""
      });
    },
    remove: function remove(index) {
      this.inputs.splice(index, 1);
    },
    sendEmail: function sendEmail() {
      var _this = this;

      if (this.name != "" && this.subject != "" && this.email != "" && this.tfomulario != false) {
        var url = window.location.origin + "/sendEmailHome";
        axios.post(url, {
          name: this.name,
          phone: this.phone,
          email: this.email,
          subject: this.subject
        }).then(function (response) {
          toastr.success("Gracias por comunicarse con nosotros.");

          _this.getMenu();
        })["catch"](function (error) {
          _this.errors = error.response.data;
        });
      }
    },
    sendEmail2: function sendEmail2() {
      var _this2 = this;

      if (this.email2 != "" && this.tcorreo != false) {
        var url = window.location.origin + "/saveEmailNews";
        axios.post(url, {
          email: this.email2
        }).then(function (response) {
          toastr.success("Gracias por comunicarse con nosotros.");

          _this2.getMenu();
        })["catch"](function (error) {
          _this2.errors = error.response.data;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/homeCiclos.vue?vue&type=style&index=0&id=0ceefa86&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/homeCiclos.vue?vue&type=style&index=0&id=0ceefa86&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.realistic-marker-highlight[data-v-0ceefa86] {\n  position: relative;\n  margin: 0 0rem;\n  padding: 0.1em 0.1em;\n  border-radius: 0.8em 0.3em;\n  background: transparent;\n  background-image: linear-gradient(to right, #f08b2e, #ffb876 4%, #f4cca7);\n  -webkit-box-decoration-break: clone;\n  box-decoration-break: clone;\n}\n.md-card-actions.text-center[data-v-0ceefa86] {\n  display: flex;\n  justify-content: center !important;\n}\n.contact-form[data-v-0ceefa86] {\n  margin-top: 30px;\n}\n.md-has-textarea + .md-layout[data-v-0ceefa86] {\n  margin-top: 15px;\n}\n.containerheader[data-v-0ceefa86] {\n  padding-top: 0px;\n  padding-bottom: 20px;\n}\nfooter[data-v-0ceefa86] {\n  color: #f3f3f3;\n}\nfooter h4[data-v-0ceefa86] {\n  font-weight: 800;\n}\nfooter .footer-above[data-v-0ceefa86] {\n  padding-top: 50px;\n  background-color: #2c3e50;\n}\n.mobileSection[data-v-0ceefa86] {\n  display: none;\n}\n.mobileSection2[data-v-0ceefa86] {\n  display: none;\n}\nfooter .footer-col[data-v-0ceefa86] {\n  margin-top: 70px;\n}\n.card2[data-v-0ceefa86] {\n  padding-top: 20px;\n  padding-left: 40px;\n  padding-bottom: 10px;\n  text-align: justify;\n}\n.card3[data-v-0ceefa86] {\n  padding-top: 10px;\n}\n.backgroundf[data-v-0ceefa86] {\n  background-image: url(https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/fondo3.png?alt=media&token=72eec913-3fff-4752-a719-6f74c81e3435);\n  background-repeat: no-repeat;\n  background-position: bottom;\n  background-size: cover;\n}\n.card[data-v-0ceefa86] {\n  font-family: \"Poppins\";\n  text-align: justify;\n  color: #000000;\n}\n.bg-light.container[data-v-0ceefa86] {\n  width: 70%;\n}\n.bg-light1[data-v-0ceefa86] {\n  background: transparent;\n}\n.bg-light2[data-v-0ceefa86] {\n  background: #c7c7c7;\n  margin: 0%;\n}\n.padding-20[data-v-0ceefa86] {\n  padding: 20px;\n}\nh4[data-v-0ceefa86] {\n  color: #000000;\n  font-family: \"Poppins\";\n  font-weight: bold;\n  font-size: 30px;\n}\nh3[data-v-0ceefa86] {\n  font-family: \"Poppins\";\n  font-weight: 600;\n}\nh5[data-v-0ceefa86] {\n  font-family: \"Poppins\";\n}\na[data-v-0ceefa86] {\n  color: white;\n  font-family: \"Poppins\";\n}\n.textinT[data-v-0ceefa86] {\n  position: absolute;\n  top: 59%;\n  left: 35%;\n  transform: translate(-50%, -50%);\n  color: black;\n  font-family: \"Poppins\";\n  font-weight: bold;\n  width: 300px;\n  padding-top: 20px;\n}\n.seccion-educiclos[data-v-0ceefa86] {\n  background-image: url(\"/uploads/home/cuadernociclos.png\");\n  background-repeat: no-repeat;\n  background-position: bottom;\n  background-size: cover;\n}\n.indicador-ciclo[data-v-0ceefa86] {\n  font-size: 18px;\n  align-items: center;\n  padding-left: 50px;\n}\n.indicador-ciclo-telefono[data-v-0ceefa86] {\n  display: none;\n}\n.titulo-ciclos[data-v-0ceefa86] {\n  color: #ff7900;\n  font-size: 60px;\n  padding: 20px 50px 20px;\n}\n.p-ciclos[data-v-0ceefa86] {\n  font-size: 20px;\n  padding: 20px 50px 20px;\n  line-height: 30px;\n}\n.card-img-top[data-v-0ceefa86] {\n  width: \"197px\";\n  height: \"160px\";\n}\n.ec-stars-wrapper1[data-v-0ceefa86] {\n  /* Espacio entre los inline-block (los hijos, los `a`)\n    http://ksesocss.blogspot.com/2012/03/display-inline-block-y-sus-empeno-en.html */\n  font-size: 0;\n  /* Podríamos quitarlo,\n  pero de esta manera (siempre que no le demos padding),\n  sólo aplicará la regla .ec-stars-wrapper:hover a cuando\n  también se esté haciendo hover a alguna estrella */\n  display: inline-block;\n}\n.ec-stars-wrapper1 a[data-v-0ceefa86] {\n  text-decoration: none;\n  display: inline-block;\n  /* Volver a dar tamaño al texto */\n  font-size: 30px;\n  font-size: 1.5rem;\n  color: #ffd620;\n}\n.etiqueta[data-v-0ceefa86] {\n  color: black;\n}\n.selectc[data-v-0ceefa86] {\n  background-color: #e9ecef00;\n  border-color: rgba(0, 0, 0, 0);\n  border-bottom-color: #5c5b5b;\n  font-size: 1em;\n  border-bottom-width: medium;\n}\n.icons[data-v-0ceefa86] {\n  color: gray;\n}\n.icons[data-v-0ceefa86]:not(.md-button):hover {\n  text-decoration: underline;\n  color: #ff4700;\n}\n.fa-chevron-right[data-v-0ceefa86] {\n  display: block;\n  padding-bottom: 10px;\n}\n.fa-chevron-right[data-v-0ceefa86]::before {\n  padding-right: 10px;\n}\n.sticky[data-v-0ceefa86] {\n  padding: 0px;\n  margin: 0px;\n  position: fixed;\n  right: 0px;\n  top: 230px;\n  width: 210px;\n  z-index: 1100;\n}\n.contactanos[data-v-0ceefa86] {\n  color: #ff4700;\n}\n.separator[data-v-0ceefa86] {\n  border-left-style: solid;\n}\n.modal.right .modal-dialog[data-v-0ceefa86] {\n  position: fixed;\n  margin: auto;\n  width: 620px;\n  height: 100%;\n  transform: translate3d(0%, 0, 0);\n}\n.modal.right .modal-content[data-v-0ceefa86] {\n  height: 100%;\n  overflow-y: auto;\n}\n.modal.right .modal-body[data-v-0ceefa86] {\n  padding: 15px 15px 80px;\n}\n\n/*Right*/\n.modal.right.fade .modal-dialog[data-v-0ceefa86] {\n  right: 0px;\n  transition: opacity 0.3s linear, right 0.3s ease-out;\n}\n.modal.right.fade.in .modal-dialog[data-v-0ceefa86] {\n  right: 0;\n}\n.matricula[data-v-0ceefa86] {\n  padding-top: 60px;\n  padding-bottom: 110px;\n}\n.section1[data-v-0ceefa86] {\n  width: 100%;\n  height: auto;\n}\n.section1I[data-v-0ceefa86] {\n  height: 500px;\n  float: right;\n}\n.section2[data-v-0ceefa86] {\n  width: 100%;\n  height: auto;\n  background-image: url(\"/uploads/home/Logo-opacidad-fondo.png\");\n  background-repeat: no-repeat;\n  background-position: center;\n  border-bottom-color: #dacfcf36;\n  border-bottom-style: groove;\n  padding-top: 25px;\n}\n.section2I[data-v-0ceefa86] {\n  width: 100%;\n  max-width: 310px;\n  background: #e8e7e7;\n}\n.section3[data-v-0ceefa86] {\n  width: 100%;\n  height: auto;\n  border-bottom-color: #dacfcf36;\n  border-bottom-style: groove;\n  padding-top: 25px;\n}\n.img-ciclo[data-v-0ceefa86] {\n  width: 60px;\n  height: 60px;\n  background: white;\n  border-radius: 100%;\n  align-self: flex-start;\n}\n.section3P[data-v-0ceefa86] {\n  border-radius: 10px;\n  width: 68%;\n  align-self: flex-end;\n  font-size: large;\n  padding: 10px;\n  font-family: \"Poppins\";\n  color: white;\n  background-color: #ff7900;\n}\n.section-ciclos[data-v-0ceefa86] {\n  align-self: flex-end;\n  font-size: large;\n  padding: 5px;\n  font-family: \"Poppins\";\n  color: black;\n}\n.sect3H[data-v-0ceefa86] {\n  border-bottom-color: #dacfcf36;\n  border-bottom-style: groove;\n}\n.imagen-cambio[data-v-0ceefa86] {\n  padding-top: 200px;\n  padding-bottom: 200px;\n}\n.section4[data-v-0ceefa86] {\n  width: 100%;\n  height: auto;\n  background-image: url(\"/uploads/home/fondo1.png\");\n  background-position-y: bottom;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.section4P[data-v-0ceefa86] {\n  border-color: black;\n  background-color: black;\n  color: white;\n  text-align: right;\n}\n.section5[data-v-0ceefa86] {\n  height: auto;\n  background-image: url(\"/uploads/home/Imagen_fondo.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-bottom-color: #dacfcf36;\n  border-bottom-style: groove;\n  padding-top: 25px;\n}\n.section-yellow[data-v-0ceefa86] {\n  background-image: url(\"/uploads/home/fondo-amarillo.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #ffc500;\n}\n.title-yellow[data-v-0ceefa86] {\n  font-family: boldfont;\n  color: white;\n  background-color: #233d68;\n  padding: 20px;\n  width: 60%;\n  text-align: center;\n}\n.text-yellow[data-v-0ceefa86] {\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 30px;\n  width: 70%;\n}\n.section6[data-v-0ceefa86] {\n  width: 100%;\n  height: 350px;\n  padding-top: 25px;\n}\n.ciclos-p[data-v-0ceefa86] {\n  font-family: \"Poppins\";\n  font-size: 18px;\n  padding: 0 0 20px 50px;\n}\niframe[data-v-0ceefa86]:not(.md-image) {\n  height: 400px;\n}\n.section6I[data-v-0ceefa86] {\n  padding-top: 50px;\n  width: 300px;\n}\n.btn-trikele[data-v-0ceefa86] {\n  background-color: #ff7900;\n  font-family: \"Poppins\";\n}\n.btn-Azul[data-v-0ceefa86] {\n  background: #233d68;\n}\n.section6C[data-v-0ceefa86] {\n  background-color: rgba(128, 128, 128, 0);\n}\n.textoB[data-v-0ceefa86] {\n  color: white;\n}\n.container-fluid[data-v-0ceefa86] {\n  background: #e8e7e7;\n  border-radius: 10px;\n  max-width: 1050px;\n  min-width: auto;\n}\n.seccion[data-v-0ceefa86] {\n  background-color: #f79d52;\n  background-size: contain;\n}\n.container-fluid2[data-v-0ceefa86] {\n  background: rgba(232, 231, 231, 0);\n  border-radius: 10px;\n  max-width: 1050px;\n  min-width: auto;\n}\n.sectionI[data-v-0ceefa86] {\n  height: 272px;\n  width: 360px;\n}\n.fondo-gris[data-v-0ceefa86] {\n  background-color: #f0f0f0;\n}\n.contenedor[data-v-0ceefa86] {\n  position: relative;\n  display: inline-block;\n  text-align: center;\n}\n.mob-1[data-v-0ceefa86] {\n  display: none;\n}\n.mob-2[data-v-0ceefa86] {\n  display: none;\n}\n.mob-3[data-v-0ceefa86] {\n  display: none;\n}\n.mob-4[data-v-0ceefa86] {\n  display: none;\n}\n.mob-5[data-v-0ceefa86] {\n  display: none;\n}\n.btn-morado[data-v-0ceefa86] {\n  background-color: #820180;\n}\n.section-naranja[data-v-0ceefa86] {\n  background-image: url(\"/uploads/home/cuaderno.png\");\n  background-size: cover;\n  background-repeat: round;\n  padding: 25px;\n}\n.ciclo-fondo[data-v-0ceefa86] {\n  background-image: url(\"/uploads/home/colegio.jpg\");\n  background-repeat: no-repeat;\n  background-position: bottom;\n  background-size: cover;\n}\n.texto-encima[data-v-0ceefa86] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n}\n.centrado[data-v-0ceefa86] {\n  position: absolute;\n  top: 40%;\n  left: 20%;\n  transform: translate(-50%, -50%);\n  width: 20%;\n  background-color: white;\n}\n@media only screen and (min-device-width: 320px) and (max-device-width: 568px) {\n.centrado[data-v-0ceefa86] {\n    position: absolute;\n    top: 40%;\n    left: 20%;\n    transform: translate(-50%, -20%);\n    width: 40%;\n    display: contents;\n}\n.ciclos-p[data-v-0ceefa86] {\n    font-family: \"Poppins\";\n    font-size: 14px;\n    width: 90%;\n}\n.sliderv[data-v-0ceefa86] {\n    padding-top: 100px;\n    font-family: Caviar Dreams;\n    display: contents;\n}\n.desk-1[data-v-0ceefa86] {\n    display: none;\n}\n.desk-2[data-v-0ceefa86] {\n    display: none;\n}\n.desk-3[data-v-0ceefa86] {\n    display: none;\n}\n.desk-4[data-v-0ceefa86] {\n    display: none;\n}\n.desk-5[data-v-0ceefa86] {\n    display: none;\n}\n.desk-6[data-v-0ceefa86] {\n    display: none;\n}\n.desk-7 h3[data-v-0ceefa86] {\n    font-size: 18px !important;\n}\n.mob-1[data-v-0ceefa86] {\n    display: block;\n}\n.mob-2[data-v-0ceefa86] {\n    display: block;\n}\n.mob-3[data-v-0ceefa86] {\n    display: block;\n}\n.mob-4[data-v-0ceefa86] {\n    display: block;\n}\n.mob-5[data-v-0ceefa86] {\n    display: block;\n}\n.vueperslides[data-v-0ceefa86] {\n    display: none;\n}\n.mobileSection[data-v-0ceefa86] {\n    display: inline;\n}\n.mobileSection2[data-v-0ceefa86] {\n    display: inline;\n}\n.deskSection2[data-v-0ceefa86] {\n    display: none;\n}\n.seccion[data-v-0ceefa86] {\n    background-color: #009fe3;\n    background-size: contain;\n}\n.title-yellow[data-v-0ceefa86] {\n    font-family: boldfont;\n    color: white;\n    background-color: #233d68;\n    padding: 20px;\n    width: 80%;\n    text-align: center;\n}\n.text-yellow[data-v-0ceefa86] {\n    font-family: \"PoppinsBold\";\n    font-size: 18px;\n    width: 85%;\n    padding-left: 20%;\n}\n.img-ciclo[data-v-0ceefa86] {\n    width: 60px;\n    height: 60px;\n    background: white;\n    border-radius: 100%;\n    align-self: center;\n}\n.seccion-educiclos[data-v-0ceefa86] {\n    background-image: url(\"/uploads/home/cuadernociclos.png\");\n    background-repeat: no-repeat;\n    background-position: bottom;\n    background-size: cover;\n}\n.indicador-ciclo-telefono[data-v-0ceefa86] {\n    font-size: 14px;\n    align-items: center;\n    padding-left: 10px;\n    display: block;\n}\n.indicador-ciclo[data-v-0ceefa86] {\n    display: none;\n}\n.titulo-ciclos[data-v-0ceefa86] {\n    color: #ff7900;\n    font-size: 20px;\n    padding: 20px 50px 20px;\n}\n.p-ciclos[data-v-0ceefa86] {\n    font-size: 12px;\n    padding: 20px 50px 20px;\n    line-height: 30px;\n}\n.ciclo-fondo[data-v-0ceefa86] {\n    background-image: url(\"/uploads/home/cuaderno.png\");\n    background-repeat: no-repeat;\n    background-position: bottom;\n    background-size: cover;\n}\n.imagen-cambio[data-v-0ceefa86] {\n    padding-top: 30px;\n    padding-bottom: 20px;\n}\n.footer-style[data-v-0ceefa86] {\n    bottom: 0;\n    width: 100%;\n    position: absolute;\n    height: 130px;\n    background-color: #ff7900;\n    background-size: 100% 100%;\n    margin: -130px auto;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/homeCiclos.vue?vue&type=style&index=0&id=0ceefa86&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/homeCiclos.vue?vue&type=style&index=0&id=0ceefa86&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./homeCiclos.vue?vue&type=style&index=0&id=0ceefa86&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/homeCiclos.vue?vue&type=style&index=0&id=0ceefa86&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/homeCiclos.vue?vue&type=template&id=0ceefa86&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/homeCiclos.vue?vue&type=template&id=0ceefa86&scoped=true& ***!
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
    _vm._m(0),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _vm._m(3),
    _vm._v(" "),
    _vm._m(4),
    _vm._v(" "),
    _vm._m(5),
    _vm._v(" "),
    _vm._m(6),
    _vm._v(" "),
    _vm._m(7),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _vm._m(8),
    _vm._v(" "),
    _vm._m(9),
    _vm._v(" "),
    _vm._m(10),
    _vm._v(" "),
    _c("div", { staticClass: "form-group desk-7" }, [
      _c("h3", { staticClass: "text-center" }, [
        _vm._v("Recibe todas las novedades de nuestra comunidad TRIKELE")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6 mx-auto" }, [
        _c(
          "form",
          {
            staticClass: "needs-validation",
            attrs: { novalidate: "" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.sendEmail2($event)
              }
            }
          },
          [
            _c("div", { staticClass: "input-group" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.email2,
                    expression: "email2"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  name: "",
                  id: "",
                  placeholder: "Ingrese su correo",
                  required: ""
                },
                domProps: { value: _vm.email2 },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.email2 = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("input", {
                staticClass: "btn btn-lg btn-trikele",
                staticStyle: { color: "white" },
                attrs: { type: "submit", value: "Ingresar" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group text-center" }, [
              _c("div", { staticClass: "form-check" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.tcorreo,
                      expression: "tcorreo"
                    }
                  ],
                  staticClass: "form-check-input",
                  attrs: { type: "checkbox", id: "gridCheck", required: "" },
                  domProps: {
                    checked: Array.isArray(_vm.tcorreo)
                      ? _vm._i(_vm.tcorreo, null) > -1
                      : _vm.tcorreo
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.tcorreo,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 && (_vm.tcorreo = $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            (_vm.tcorreo = $$a
                              .slice(0, $$i)
                              .concat($$a.slice($$i + 1)))
                        }
                      } else {
                        _vm.tcorreo = $$c
                      }
                    }
                  }
                }),
                _vm._v(" "),
                _vm._m(11)
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _vm._m(12)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "seccion desk-1" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("a", { attrs: { href: "/#contacto" } }, [
          _c("img", {
            attrs: { src: "uploads/home/ciclosslide.jpg", width: "100%" }
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "seccion mob-1" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("a", { attrs: { href: "/#contacto" } }, [
          _c("img", { attrs: { src: "uploads/home/mob-1.png", width: "100%" } })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group seccion-educiclos desk-2" }, [
      _c("img", { attrs: { src: "uploads/home/educiclos.png", width: "50%" } }),
      _vm._v(" "),
      _c("p", { staticClass: "letra-poppins-bold p-ciclos" }, [
        _vm._v(
          "\n      La educación por ciclos, es una organización curricular formada por unidades de contenidos seleccionados e integrados para que el estudiante culmine una sucesión de grados o niveles de la educación formal, en menor tiempo. Son conocidos como Ciclos Lectivos Especiales Integrados (CLEI)\n    "
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "form-group row mx-auto letra-poppins-bold indicador-ciclo"
        },
        [
          _c("img", {
            staticClass: "img-ciclo",
            attrs: { src: "uploads/home/regla.png" }
          }),
          _vm._v(" "),
          _c("p", { staticClass: "text-center" }, [
            _vm._v(
              "Es operado por un colegio regido por las mismas normas del ministerio."
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "form-group row mx-auto letra-poppins-bold indicador-ciclo"
        },
        [
          _c("img", {
            staticClass: "img-ciclo",
            attrs: { src: "uploads/home/bombillo.png" }
          }),
          _vm._v(" "),
          _c("p", { staticClass: "text-center" }, [
            _vm._v(
              "Debe contar con licencia de funcionamiento y reconocimiento de carácter oficial."
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "form-group row mx-auto letra-poppins-bold indicador-ciclo"
        },
        [
          _c("img", {
            staticClass: "img-ciclo",
            attrs: { src: "uploads/home/atomo.png" }
          }),
          _vm._v(" "),
          _c("p", { staticClass: "text-center" }, [
            _vm._v(
              "Debe contar con gobierno escolar (rector, consejo directivo, consejo académico)."
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "form-group row mx-auto letra-poppins-bold indicador-ciclo"
        },
        [
          _c("img", {
            staticClass: "img-ciclo",
            attrs: { src: "uploads/home/lapiz.png" }
          }),
          _vm._v(" "),
          _c("p", { staticClass: "text-center" }, [
            _vm._v(
              "Los certificados (diploma, actas) los entrega la institución."
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "form-group row mx-auto letra-poppins-bold indicador-ciclo"
        },
        [
          _c("img", {
            staticClass: "img-ciclo",
            attrs: { src: "uploads/home/libro.png" }
          }),
          _vm._v(" "),
          _c("p", { staticClass: "text-center" }, [
            _vm._v(
              "También debe tener su propio Proyecto Educativo Institucional (PEI)."
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "form-group row mx-auto letra-poppins-bold indicador-ciclo"
        },
        [
          _c("img", {
            staticClass: "img-ciclo",
            attrs: { src: "uploads/home/regla.png" }
          }),
          _vm._v(" "),
          _c("p", { staticClass: "text-center" }, [
            _vm._v(
              "La duración de cada ciclo escolar corresponde a 40 semanas, sin incluir receso."
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "form-group row mx-auto letra-poppins-bold indicador-ciclo-telefono"
        },
        [
          _c("div", { staticClass: "col-md-2 text-center" }, [
            _c("img", {
              staticClass: "img-ciclo",
              attrs: { src: "uploads/home/regla.png" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-8" }, [
            _c("p", { staticClass: "text-center" }, [
              _vm._v(
                "Es operado por un colegio regido por las mismas normas del ministerio."
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "form-group row mx-auto letra-poppins-bold indicador-ciclo-telefono"
        },
        [
          _c("div", { staticClass: "col-md-2 text-center" }, [
            _c("img", {
              staticClass: "img-ciclo",
              attrs: { src: "uploads/home/bombillo.png" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-8" }, [
            _c("p", { staticClass: "text-center" }, [
              _vm._v(
                "Debe contar con licencia de funcionamiento y reconocimiento de carácter oficial."
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "form-group row mx-auto letra-poppins-bold indicador-ciclo-telefono"
        },
        [
          _c("div", { staticClass: "col-md-2 text-center" }, [
            _c("img", {
              staticClass: "img-ciclo",
              attrs: { src: "uploads/home/atomo.png" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-8" }, [
            _c("p", { staticClass: "text-center" }, [
              _vm._v(
                "Debe contar con gobierno escolar (rector, consejo directivo, consejo académico)."
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "form-group row mx-auto letra-poppins-bold indicador-ciclo-telefono"
        },
        [
          _c("div", { staticClass: "col-md-2 text-center" }, [
            _c("img", {
              staticClass: "img-ciclo",
              attrs: { src: "uploads/home/lapiz.png" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-8" }, [
            _c("p", { staticClass: "text-center" }, [
              _vm._v(
                "Los certificados (diploma, actas) los entrega la institución."
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "form-group row mx-auto letra-poppins-bold indicador-ciclo-telefono"
        },
        [
          _c("div", { staticClass: "col-md-2 text-center" }, [
            _c("img", {
              staticClass: "img-ciclo",
              attrs: { src: "uploads/home/libro.png" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-8" }, [
            _c("p", { staticClass: "text-center" }, [
              _vm._v(
                "También debe tener su propio Proyecto Educativo Institucional (PEI)."
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "form-group row mx-auto letra-poppins-bold indicador-ciclo-telefono"
        },
        [
          _c("div", { staticClass: "col-md-2 text-center" }, [
            _c("img", {
              staticClass: "img-ciclo",
              attrs: { src: "uploads/home/regla.png" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-8" }, [
            _c(
              "p",
              {
                staticClass: "text-center",
                staticStyle: { "padding-bottom": "25px" }
              },
              [
                _vm._v(
                  "La duración de cada ciclo escolar corresponde a 40 semanas, sin incluir receso."
                )
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("br")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mob-2" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("a", { attrs: { href: "" } }, [
          _c("img", { attrs: { src: "uploads/home/mob-2.png", width: "100%" } })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group desk-3" }, [
      _c("a", { attrs: { href: "" } }, [
        _c("img", {
          attrs: { src: "uploads/home/equivalencia.png", width: "100%" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "row desk-4",
        staticStyle: {
          "background-image": "url('/uploads/home/ciclos.jpg')",
          "background-repeat": "no-repeat",
          "background-position": "bottom",
          "background-size": "cover"
        }
      },
      [
        _c("div", { staticClass: "col-md-6" }),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6 padding-20" }, [
          _c("img", {
            staticStyle: { padding: "20px" },
            attrs: { src: "uploads/home/pqtrikele.png" }
          }),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "div",
            { staticStyle: { "background-color": "#f0f0f0", width: "90%" } },
            [
              _c("p", { staticClass: "section-ciclos mx-auto" }, [
                _vm._v("\n          Seguimos las normas y lineamientos del "),
                _c("span", { staticClass: "realistic-marker-highlight" }, [
                  _c("strong", [_vm._v("Ministerio de Educación Nacional.")])
                ])
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "section-ciclos mx-auto" }, [
                _vm._v("\n          Contamos con licencia de funcionamiento "),
                _c("span", { staticClass: "realistic-marker-highlight" }, [
                  _c("strong", [_vm._v("1123 del 13 de abril de 2021")])
                ])
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "section-ciclos mx-auto" }, [
                _vm._v("\n          Recibe tu certificado y tu "),
                _c("span", { staticClass: "realistic-marker-highlight" }, [
                  _c("strong", [_vm._v("título de bachiller")])
                ]),
                _vm._v(" una vez termines.\n        ")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "section-ciclos mx-auto" }, [
                _vm._v("\n          Contamos con nuestro propio "),
                _c("span", { staticClass: "realistic-marker-highlight" }, [
                  _c("strong", [
                    _vm._v("Proyecto Educativo Institucional (PEI).")
                  ])
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mob-3" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("a", { attrs: { href: "" } }, [
          _c("img", {
            attrs: { src: "uploads/home/mobile-porque.png", width: "100%" }
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row ciclo-fondo desk-5" }, [
      _c("div", { staticClass: "form-group mx-auto imagen-cambio" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6 ciclos-p" }, [
            _c("p", [
              _c("strong", [_vm._v("TRIKELE")]),
              _vm._v(
                " colegio sin fronteras, es una iniciativa de educación de alta calidad, "
              ),
              _c("strong", [
                _vm._v(
                  "mediado a través de herramientas de la tecnología y la información (TIC)."
                )
              ])
            ]),
            _vm._v(" "),
            _c("p", [
              _c("strong", [_vm._v("TRIKELE")]),
              _vm._v(
                " es un símbolo de la tradición Celta que significa la unión entre cuerpo, mente y espíritu. "
              ),
              _c("strong", [
                _vm._v(
                  "Representa el aprendizaje, el crecimiento y la evolución permanente."
                )
              ])
            ]),
            _vm._v(" "),
            _c("p", [
              _c("strong", [_vm._v("TRIKELE")]),
              _vm._v(
                " es un proyecto educativo sin fronteras que busca formar ciudadanos del mundo con altas capacidades en todas las áreas de su vida."
              )
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mob-4" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("a", { attrs: { href: "" } }, [
          _c("img", {
            attrs: { src: "uploads/home/mobile-tucolegio.png", width: "100%" }
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "form-group desk-6",
        staticStyle: {
          "background-image": "url('/uploads/home/cambiociclos.png')",
          "background-repeat": "no-repeat",
          "background-position": "bottom",
          "background-size": "cover"
        }
      },
      [
        _c("img", {
          attrs: { src: "uploads/home/titulocambio.png", width: "90%" }
        }),
        _vm._v(" "),
        _c("p", { staticClass: "text-yellow padding-20" }, [
          _vm._v(
            "En Trikele sabemos que eres diferente y que te espera un mundo en transformación permanente. Por eso, desarrollamos contigo las habilidades que necesitas para el siglo XXI:"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row padding-20" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _c("h3", { staticStyle: { color: "white" } }, [_vm._v("CUERPO")]),
            _vm._v(" "),
            _c("p", { staticClass: "text-yellow" }, [
              _vm._v("Colaboración y compromiso.")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-yellow" }, [
              _vm._v(
                "Responsabilidad personal y social a nivel local, nacional y global"
              )
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-yellow" }, [_vm._v("Comunicación")]),
            _vm._v(" "),
            _c("p", { staticClass: "text-yellow" }, [
              _vm._v("Resolución de Conflictos")
            ]),
            _vm._v(" "),
            _c("h3", { staticStyle: { color: "white" } }, [_vm._v("MENTE")]),
            _vm._v(" "),
            _c("p", { staticClass: "text-yellow" }, [
              _vm._v("Pensamiento crítico e informado")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-yellow" }, [
              _vm._v("Resolución de problemas")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-yellow" }, [
              _vm._v("Conocimiento local, nacional y global")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-yellow" }, [
              _vm._v("Creatividad e innovación")
            ]),
            _vm._v(" "),
            _c("h3", { staticStyle: { color: "white" } }, [_vm._v("ESPÍRITU")]),
            _vm._v(" "),
            _c("p", { staticClass: "text-yellow" }, [
              _vm._v("Sentido de pertenencia a una aldea global")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-yellow" }, [
              _vm._v("Aptitudes de empatía, solidaridad y respeto")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-yellow" }, [
              _vm._v("Autonomía y adaptabilidad")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-yellow" }, [
              _vm._v("Autorregulación.")
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mob-5" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("a", { attrs: { href: "" } }, [
          _c("img", {
            attrs: { src: "uploads/home/mobile-cme.png", width: "100%" }
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-check-label", attrs: { for: "gridCheck" } },
      [
        _c(
          "a",
          {
            staticStyle: { color: "black" },
            attrs: {
              href: "../../uploads/home/TerminosyCondicionesTrikele.pdf",
              target: "_blank"
            }
          },
          [
            _vm._v(
              " Acepto políticas de protección de datos y términos y condiciones."
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "text-center footer-style" }, [
      _c("div", { staticClass: "row footer-row" }, [
        _c("div", { staticClass: "col footer-col text-center" }, [
          _c(
            "a",
            {
              attrs: {
                href: "https://www.facebook.com/TrikelePlataformaEducativa/",
                target: "_blank"
              }
            },
            [_c("i", { staticClass: "fab fa-facebook fa-2x" })]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              attrs: {
                href: "https://www.instagram.com/trikele_/",
                target: "_blank"
              }
            },
            [_c("i", { staticClass: "fab fa-instagram fa-2x" })]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/homeCiclos.vue":
/*!************************************************!*\
  !*** ./resources/js/components/homeCiclos.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homeCiclos_vue_vue_type_template_id_0ceefa86_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeCiclos.vue?vue&type=template&id=0ceefa86&scoped=true& */ "./resources/js/components/homeCiclos.vue?vue&type=template&id=0ceefa86&scoped=true&");
/* harmony import */ var _homeCiclos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeCiclos.vue?vue&type=script&lang=js& */ "./resources/js/components/homeCiclos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _homeCiclos_vue_vue_type_style_index_0_id_0ceefa86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homeCiclos.vue?vue&type=style&index=0&id=0ceefa86&lang=scss&scoped=true& */ "./resources/js/components/homeCiclos.vue?vue&type=style&index=0&id=0ceefa86&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _homeCiclos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _homeCiclos_vue_vue_type_template_id_0ceefa86_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _homeCiclos_vue_vue_type_template_id_0ceefa86_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0ceefa86",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/homeCiclos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/homeCiclos.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/homeCiclos.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homeCiclos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./homeCiclos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/homeCiclos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homeCiclos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/homeCiclos.vue?vue&type=style&index=0&id=0ceefa86&lang=scss&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/homeCiclos.vue?vue&type=style&index=0&id=0ceefa86&lang=scss&scoped=true& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_homeCiclos_vue_vue_type_style_index_0_id_0ceefa86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./homeCiclos.vue?vue&type=style&index=0&id=0ceefa86&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/homeCiclos.vue?vue&type=style&index=0&id=0ceefa86&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_homeCiclos_vue_vue_type_style_index_0_id_0ceefa86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_homeCiclos_vue_vue_type_style_index_0_id_0ceefa86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_homeCiclos_vue_vue_type_style_index_0_id_0ceefa86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_homeCiclos_vue_vue_type_style_index_0_id_0ceefa86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_homeCiclos_vue_vue_type_style_index_0_id_0ceefa86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/homeCiclos.vue?vue&type=template&id=0ceefa86&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/homeCiclos.vue?vue&type=template&id=0ceefa86&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeCiclos_vue_vue_type_template_id_0ceefa86_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./homeCiclos.vue?vue&type=template&id=0ceefa86&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/homeCiclos.vue?vue&type=template&id=0ceefa86&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeCiclos_vue_vue_type_template_id_0ceefa86_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeCiclos_vue_vue_type_template_id_0ceefa86_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);