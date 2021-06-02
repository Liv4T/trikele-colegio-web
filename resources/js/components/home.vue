<template>
  <div>
    <div class="seccion desktop1">
      <div class="form-group">
        <a href="/ciclos">
          <img src="uploads/home/5.png" width="100%" />
        </a>
      </div>
    </div>
    <div class="mobile1">
      <div class="form-group">
        <a href="/ciclos">
          <img src="uploads/home/mobile-1.png" width="100%" />
        </a>
      </div>
    </div>
    <div class="form-group desktop2">
      <h4 class="text-center">ÚNETE A NUESTRA COMUNIDAD TRIKELE</h4>
      <h3 class="text-center">Emprende tu propio camino de aprendizaje</h3>
      <div class="text-center">
        <a class="btn btn-lg btn-trikele" href="/#contacto">ÚNETE</a>
      </div>
    </div>
    <br />
    <div class="row desktop4" id="que_es" style="background-image: url('/uploads/home/banner-azul.jpg'); background-repeat: no-repeat; background-position: bottom; background-size: cover">
      <div class="col-md-6">
        <img src="uploads/home/trikele-naranja.png" width="100%" />
        <p class="section3P mx-auto">Seguimos las normas y lineamientos del Ministerio de Educación Nacional.</p>
        <p class="section3P mx-auto">Contamos con licencia de funcionamiento Resolución 1123 del 13 de abril de 2021.</p>
        <p class="section3P mx-auto">Certificamos legalmente tus estudios y tu título de bachiller.</p>
        <p class="section3P mx-auto">Contamos con nuestro propio Proyecto Educativo Institucional (PEI)</p>
      </div>
    </div>
    <div class="mobile2">
      <div class="form-group">
        <a href="/ciclos">
          <img src="uploads/home/mobile-trikele.png" width="100%" />
        </a>
      </div>
    </div>
    <div class="section-naranja desktop-mision">
      <div class="row mx-auto" style="padding: 20px; justify-content: center">
        <div class="col-md-4 text-center">
          <img width="100%" src="/uploads/home/vision.png" alt="" />
          <br />
          <p class="letra-poppins-bold" style="font-size: 25px; padding: 0 55px 0 55px; line-height: 35px">
            <span class="realistic-marker-highlight">Transformar</span> la educación para formar <span class="realistic-marker-highlight">ciudadanos del mundo</span> capaces de cuestionar y <span class="realistic-marker-highlight">cambiar el status quo.</span>
          </p>
        </div>
        <div class="col-md-4 text-center">
          <img width="100%" src="/uploads/home/mision.png" alt="" />
          <br />
          <p class="letra-poppins-bold" style="font-size: 25px; padding: 0 55px 0 55px; line-height: 35px">Trikele busca brindar <span class="realistic-marker-highlight"> educación de excelente calidad,</span> integral e innovadora, a través de la mediación con herramientas tecnológicas.</p>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <div class="section-yellow desktop5">
      <h3 class="title-yellow mx-auto">SOMOS LA PLATAFORMA QUE SE AJUSTA A LAS NECESIDADES DEL ESTUDIANTE PORQUE DESARROLLAMOS...</h3>
      <div class="form-group row">
        <div class="col-md-6 text-center">
          <img src="uploads/home/chica-amarillo.png" alt="" width="80%" />
        </div>
        <div class="col-md-6" style="align-self: center">
          <div class="form-group row mx-auto">
            <p class="text-yellow">Autonomía que construye criterio porque aprendes a tu propio ritmo</p>
          </div>
          <div class="form-group row mx-auto">
            <p class="text-yellow">Libertad de estudiar en cualquier momento y desde cualquier lugar</p>
          </div>
          <div class="form-group row mx-auto">
            <p class="text-yellow">Proyecto educativo que despierta pasión por el aprendizaje</p>
          </div>
        </div>
        <a class="btn btn-lg btn-Azul mx-auto letra-poppins-bold" href="/#contacto">INSCRÍBETE</a>
      </div>
    </div>
    <div class="mobile3">
      <div class="form-group">
        <a href="/#contacto">
          <img src="uploads/home/mobile-amarillo.png" width="100%" />
        </a>
      </div>
    </div>
    <div class="form-group desktop6">
      <a href="/ciclos">
        <img src="uploads/home/ciclos.png" />
      </a>
    </div>
    <div class="form-group mobile4">
      <a href="/ciclos">
        <img src="uploads/home/mobile-ciclos.png" />
      </a>
    </div>

    <div class="form-group desktop-texto" id="contacto">
      <h4 class="text-center">
        Por qué con trikele, porque es educación de <br />
        calidad, flexible y disponible 24/7
      </h4>
      <h1 class="text-center">ESTUDI<u style="text-decoration-color: #ff7900">A CON TR</u>IKELE</h1>
      <br />
    </div>
    <div class="container-fluid mx-auto" style="border: solid">
      <div class="form-group row">
        <div class="col-md-6 text-center">
          <br />
          <h2 class="">
            <u style="text-decoration-color: #ff7900; font-family: 'Caviar Dreams'; font-weight: 600"> INSCRÍBETE</u>
          </h2>
          <p>Ingresa tus datos y uno de nuestros asesores se comunicara contigo.</p>
          <br />
          <a href="https://www.facebook.com/TrikelePlataformaEducativa/" target="_blank" class="icons">
            <i class="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://www.instagram.com/trikele_/" target="_blank" class="icons">
            <i class="fab fa-instagram fa-2x"></i>
          </a>
          <br />
          <br />
        </div>
        <div class="col-md-6">
          <div class="custom-card section6C">
            <div class="card-body">
              <form class="needs-validation" v-on:submit.prevent="sendEmail" novalidate>
                <div class="form-group row mx-auto">
                  <div class="col text-center mx-auto">
                    <div>
                      <input type="text" name="objetive1" class="form-control" v-model="name" placeholder="Nombre" required />
                    </div>
                  </div>
                </div>
                <div class="form-group row mx-auto">
                  <div class="col text-center mx-auto">
                    <div>
                      <input type="email" name="objetive1" class="form-control" v-model="email" placeholder="Correo" required />
                    </div>
                  </div>
                </div>
                <div class="form-group row mx-auto">
                  <div class="col text-center mx-auto">
                    <div>
                      <input type="number" name="numerotelefono" class="form-control" v-model="phone" placeholder="Teléfono" />
                    </div>
                  </div>
                </div>
                <div class="form-group row mx-auto">
                  <div class="col text-center mx-auto">
                    <div>
                      <input type="text" name="objetive1" class="form-control" v-model="subject" placeholder="Mensaje" required />
                      <div class="invalid-feedback">Debe completar todos los campos</div>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" v-model="tfomulario" required />
                    <label class="form-check-label" for="gridCheck"><a href="../../uploads/home/TerminosyCondicionesTrikele.pdf" target="_blank" style="color: black"> Acepto políticas de protección de datos y términos y condiciones.</a></label>
                  </div>
                </div>

                <div class="text-center">
                  <input type="submit" class="btn btn-lg btn-trikele" value="Enviar" style="color: white" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group section6">
      <h3 class="text-center">Recibe todas las novedades de nuestra comunidad TRIKELE</h3>
      <div class="col-md-6 mx-auto">
        <form class="needs-validation" v-on:submit.prevent="sendEmail2" novalidate>
          <div class="input-group">
            <input type="text" class="form-control" name id placeholder="Ingrese su correo" v-model="email2" required />
            <input type="submit" class="btn btn-lg btn-trikele" value="Ingresar" style="color: white" />
          </div>
          <div class="form-group text-center">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" v-model="tcorreo" required />
              <label class="form-check-label" for="gridCheck"><a href="../../uploads/home/TerminosyCondicionesTrikele.pdf" target="_blank" style="color: black"> Acepto políticas de protección de datos y términos y condiciones.</a></label>
            </div>
          </div>
        </form>
      </div>
      <div class="modal fade" id="modalini" data-backdrop="static" data-keyboard="false">
        <div class="modal-lg modal-dialog">
          <div class="modal-content">
            <div class="card">
              <h3 class="card-header fondo text-center">Gracias!</h3>

              <div class="card-body text-center">
                <h2 class="mobile-popup">Gracias por registrarte, uno de nuestros asesores se comunicara contigo lo antes posible.</h2>
                <h3 class="mobile-popup2">Bienvenido a la familia TRIKELE</h3>
                <img src="uploads/home/chica2.png" />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-warning" @click.prevent="modaliniciar()">Aceptar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="text-center footer-style">
        <div class="row footer-row">
          <div class="col footer-col text-center">
            <a href="https://www.facebook.com/TrikelePlataformaEducativa/" target="_blank" class="">
              <i class="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://www.instagram.com/trikele_/" target="_blank" class="">
              <i class="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import VueMouseParallax from "vue-mouse-parallax";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import TextInput from "./TextInput.vue";
import { VueFlux, FluxCaption, FluxControls, FluxIndex, FluxPagination, FluxPreloader } from "vue-flux";

Vue.use(VueMouseParallax);
Vue.use(VueMaterial);
export default {
  components: {
    VueperSlides,
    VueperSlide,
  },

  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
    },
  },
  data() {
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
      slides: [
        {
          content: "",
          image: "",
        },
      ],
      inputs: [
        {
          name: "",
        },
      ],
      vfOptions: {
        autoplay: true,
      },
      vfImages: ["https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/SLIDER1.jpg?alt=media&token=58ecdc81-2d81-4996-aeeb-8d9c34c15072"],
      vfTransitions: ["fade", "cube", "book", "wave"],
      vfCaptions: ["Caption for image 1"],
    };
  },
  computed: {},
  mounted() {
    this.plan = window.location.origin + "/compra/plan";
  },
  methods: {
    getMenu() {
      window.location = "/";
    },
    inputEvent(e) {
      console.log(e);
    },
    add(index) {
      this.inputs.push({
        name: "",
      });
    },
    remove(index) {
      this.inputs.splice(index, 1);
    },
    sendEmail() {
      if (this.name != "" && this.subject != "" && this.email != "" && this.tfomulario != false) {
        var url = window.location.origin + "/sendEmailHome";
        axios
          .post(url, {
            name: this.name,
            phone: this.phone,
            email: this.email,
            subject: this.subject,
          })
          .then((response) => {
            toastr.success("Gracias por comunicarse con nosotros.");
            $("#modalini").modal("show");
          })
          .catch((error) => {
            this.errors = error.response.data;
          });
      }
    },
    sendEmail2() {
      if (this.email2 != "" && this.tcorreo != false) {
        var url = window.location.origin + "/saveEmailNews";
        axios
          .post(url, {
            email: this.email2,
          })
          .then((response) => {
            toastr.success("Gracias por comunicarse con nosotros.");
            this.getMenu();
          })
          .catch((error) => {
            this.errors = error.response.data;
          });
      }
    },
    modaliniciar() {
      window.location = "/gracias";
    },
  },
};
</script>

<style lang="scss" scoped>
.realistic-marker-highlight {
  position: relative;
  margin: 0 0rem;
  padding: 0.1em 0.1em;
  border-radius: 0.8em 0.3em;
  background: transparent;
  background-image: linear-gradient(to right, rgb(240 139 46), rgb(255 184 118) 4%, rgb(244 204 167));
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}
.md-has-textarea + .md-layout {
  margin-top: 15px;
}

.containerheader {
  padding-top: 0px;
  padding-bottom: 20px;
}

footer {
  color: rgb(243, 243, 243);
}
footer h4 {
  font-weight: 800;
}
footer .footer-above {
  padding-top: 50px;
  background-color: #2c3e50;
}
.mobileSection {
  display: none;
}
.mobileSection2 {
  display: none;
}
footer .footer-col {
  margin-top: 70px;
}
.card2 {
  padding-top: 20px;
  padding-left: 40px;
  padding-bottom: 10px;
  text-align: justify;
}
.card3 {
  padding-top: 10px;
}
.backgroundf {
  background-image: url(https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/fondo3.png?alt=media&token=72eec913-3fff-4752-a719-6f74c81e3435);
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
}
.card {
  font-family: "Poppins";
  text-align: justify;
  color: #000000;
}
.bg-light.container {
  width: 70%;
}
.bg-light1 {
  background: transparent;
}
.bg-light2 {
  background: rgb(199, 199, 199);
  margin: 0%;
}

h4 {
  color: #000000;
  font-family: "Poppins";
  font-weight: bold;
  font-size: 30px;
}
h3 {
  font-family: "Poppins";
  font-weight: 600;
}
h5 {
  font-family: "Poppins";
}
a {
  color: white;
  font-family: "Poppins";
}

.textinT {
  position: absolute;
  top: 59%;
  left: 35%;
  transform: translate(-50%, -50%);
  color: black;
  font-family: "Poppins";
  font-weight: bold;
  width: 300px;
  padding-top: 20px;
}
.card-img-top {
  width: "197px";
  height: "160px";
}
.ec-stars-wrapper1 {
  /* Espacio entre los inline-block (los hijos, los `a`)
	   http://ksesocss.blogspot.com/2012/03/display-inline-block-y-sus-empeno-en.html */
  font-size: 0;
  /* Podríamos quitarlo,
		pero de esta manera (siempre que no le demos padding),
		sólo aplicará la regla .ec-stars-wrapper:hover a cuando
		también se esté haciendo hover a alguna estrella */
  display: inline-block;
}
.ec-stars-wrapper1 a {
  text-decoration: none;
  display: inline-block;
  /* Volver a dar tamaño al texto */
  font-size: 30px;
  font-size: 1.5rem;

  color: rgb(255, 214, 32);
}
.card-header {
  background-color: #e9ecefb5;
}
.etiqueta {
  color: black;
}
.selectc {
  background-color: #e9ecef00;
  border-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(92, 91, 91);
  font-size: 1em;
  border-bottom-width: medium;
}
.icons {
  color: gray;
}
.icons:not(.md-button):hover {
  text-decoration: underline;
  color: #ff4700;
}
.fa-chevron-right {
  display: block;
  padding-bottom: 10px;
}
.fa-chevron-right::before {
  padding-right: 10px;
}
.sticky {
  padding: 0px;
  margin: 0px;
  position: fixed;
  right: 0px;
  top: 230px;
  width: 210px;
  z-index: 1100;
}
.contactanos {
  color: #ff4700;
}
.separator {
  border-left-style: solid;
}
.modal.right .modal-dialog {
  position: fixed;
  margin: auto;
  width: 620px;
  height: 100%;
  -webkit-transform: translate3d(0%, 0, 0);
  -ms-transform: translate3d(0%, 0, 0);
  -o-transform: translate3d(0%, 0, 0);
  transform: translate3d(0%, 0, 0);
}

.modal.right .modal-content {
  height: 100%;
  overflow-y: auto;
}

.modal.right .modal-body {
  padding: 15px 15px 80px;
}

/*Right*/
.modal.right.fade .modal-dialog {
  right: 0px;
  -webkit-transition: opacity 0.3s linear, right 0.3s ease-out;
  -moz-transition: opacity 0.3s linear, right 0.3s ease-out;
  -o-transition: opacity 0.3s linear, right 0.3s ease-out;
  transition: opacity 0.3s linear, right 0.3s ease-out;
}

.modal.right.fade.in .modal-dialog {
  right: 0;
}
.matricula {
  padding-top: 60px;
  padding-bottom: 110px;
}
.section1 {
  width: 100%;
  height: auto;
}
.section1I {
  height: 500px;
  float: right;
}
.section2 {
  width: 100%;
  height: auto;
  background-image: url("/uploads/home/Logo-opacidad-fondo.png");
  background-repeat: no-repeat;
  background-position: center;
  border-bottom-color: #dacfcf36;
  border-bottom-style: groove;
  padding-top: 25px;
}
.section2I {
  //   height: 200px;
  width: 100%;
  max-width: 310px;
  background: rgb(232, 231, 231);
}
.section3 {
  width: 100%;
  height: auto;
  border-bottom-color: #dacfcf36;
  border-bottom-style: groove;
  padding-top: 25px;
}
.section3I {
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 100%;
  align-self: flex-start;
}
.section3P {
  border-radius: 10px;
  width: 68%;
  align-self: flex-end;
  font-size: large;
  padding: 10px;
  font-family: "Poppins";
  color: white;
  background-color: #ff7900;
}
.sect3H {
  border-bottom-color: #dacfcf36;
  border-bottom-style: groove;
}
.section4 {
  width: 100%;
  height: auto;
  background-image: url("/uploads/home/fondo1.png");
  background-position-y: bottom;
  background-repeat: no-repeat;
  background-size: cover;
}
.section4P {
  border-color: black;
  background-color: black;
  color: white;
  text-align: right;
}
.section5 {
  height: auto;
  background-image: url("/uploads/home/Imagen_fondo.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom-color: #dacfcf36;
  border-bottom-style: groove;
  padding-top: 25px;
}
.section-yellow {
  background-image: url("/uploads/home/fondo-amarillo.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #ffc500;
}
.title-yellow {
  font-family: boldfont;
  color: white;
  background-color: #233d68;
  padding: 20px;
  width: 60%;
  text-align: center;
}
.text-yellow {
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  width: 70%;
}
.section6 {
  width: 100%;
  height: 350px;
  padding-top: 25px;
}
iframe:not(.md-image) {
  height: 400px;
}
.section6I {
  padding-top: 50px;
  width: 300px;
}

.btn-trikele {
  background-color: #ff7900;
  font-family: "Poppins";
}
.btn-Azul {
  background: #233d68;
}
.section6C {
  background-color: rgba(128, 128, 128, 0);
}
.textoB {
  color: white;
}
.container-fluid {
  background: rgb(232, 231, 231);
  border-radius: 10px;
  max-width: 1050px;
  min-width: auto;
}
.seccion {
  background-color: #f79d52;

  background-size: contain;
}

.container-fluid2 {
  background: rgba(232, 231, 231, 0);
  border-radius: 10px;
  max-width: 1050px;
  min-width: auto;
}
.sectionI {
  height: 272px;
  width: 360px;
}
.mobile1 {
  display: none;
}
.mobile2 {
  display: none;
}
.mobile3 {
  display: none;
}
.mobile4 {
  display: none;
}
.mobile5 {
  display: none;
}
.mobile6 {
  display: none;
}
.fondo-gris {
  background-color: #f0f0f0;
}
.contenedor {
  position: relative;
  display: inline-block;
  text-align: center;
}
.btn-morado {
  background-color: #820180;
}
.section-naranja {
  background-image: url("/uploads/home/cuaderno.png");
  background-size: cover;
  background-repeat: round;
  padding: 25px;
}

.texto-encima {
  position: absolute;
  top: 10px;
  left: 10px;
}
.centrado {
  position: absolute;
  top: 40%;
  left: 20%;
  transform: translate(-50%, -50%);
  width: 20%;
  background-color: white;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
  .centrado {
    position: absolute;
    top: 40%;
    left: 20%;
    transform: translate(-50%, -20%);
    width: 40%;
    display: contents;
  }
  .sliderv {
    padding-top: 100px;
    font-family: Caviar Dreams;
    display: contents;
  }
  .vueperslides {
    display: none;
  }
  .mobileSection {
    display: inline;
  }
  .mobileSection2 {
    display: inline;
  }
  .deskSection2 {
    display: none;
  }
  .seccion {
    background-color: #009fe3;

    background-size: contain;
  }
  .mobile1 {
    display: block;
  }
  .mobile2 {
    display: block;
  }
  .mobile3 {
    display: block;
  }
  .mobile4 {
    display: block;
  }
  .mobile5 {
    display: block;
  }
  .mobile6 {
    display: block;
  }
  .desktop1 {
    display: none;
  }
  .desktop2 h4,
  h3 {
    font-size: 18px !important;
  }
  .desktop-mision p {
    font-size: 18px !important;
    padding: 0px !important;
  }
  .desktop-texto h1 {
    font-size: 20px !important;
  }
  .desktop-texto h4 {
    font-size: 16px !important;
  }
  .desktop3 {
    display: none;
  }
  .desktop4 {
    display: none;
  }
  .desktop5 {
    display: none;
  }
  .desktop6 {
    display: none;
  }
  .title-yellow {
    font-family: boldfont;
    color: white;
    background-color: #233d68;
    padding: 20px;
    width: 80%;
    text-align: center;
  }
  .text-yellow {
    font-family: "PoppinsBold";
    font-size: 18px;
    width: 85%;
    padding-left: 20%;
  }
  .footer-style {
    bottom: 0;
    width: 100%;
    position: absolute;
    height: 130px;
    background-color: #ff7900;
    background-size: 100% 100%;
    margin: -130px auto;
  }
  .mobile-popup {
    font-size: 18px;
  }
  .mobile-popup2 {
    font-size: 14px;
  }
}
</style>
