<template>
    <div>
        <head>
            <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.8.2/css/solid.css"
                integrity="sha384-ioUrHig76ITq4aEJ67dHzTvqjsAP/7IzgwE7lgJcg2r7BRNGYSK0LwSmROzYtgzs"
                crossorigin="anonymous"
            />
            <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.8.2/css/brands.css"
                integrity="sha384-i2PyM6FMpVnxjRPi0KW/xIS7hkeSznkllv+Hx/MtYDaHA5VcF0yL3KVlvzp8bWjQ"
                crossorigin="anonymous"
            />
            <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.8.2/css/fontawesome.css"
                integrity="sha384-sri+NftO+0hcisDKgr287Y/1LVnInHJ1l+XC7+FOabmTTIK0HnE2ID+xxvJ21c5J"
                crossorigin="anonymous"
            />
        </head>
        <!--div class="sticky">
    <button class="btn btn-primary text-nowrap" type="button">
      <a href>
        <img
          src="https://media.giphy.com/media/dAIeGiCfE8XOjetwiJ/giphy.gif"
          alt="x"
          style="height:90px;"
        />
        <br />Crea tu propio curso
      </a>
    </button>
  </div-->
        <parallax-container
            class="horizontal-card centered-card"
            id="categorias web"
        >
            <parallax-element class="background-image">
                <img
                    width="auto"
                    src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/Slider3.jpg?alt=media&token=d062eae8-47a5-4563-ad40-a643aa996b54"
                />
                <div class="textin2">
                    <div align="left">
                        <h3 class>
                            <strong>
                                DIVIÉRTETE
                                <br />APRENDIENDO
                            </strong>
                        </h3>
                        <button
                            type="button"
                            class="btn btn-danger"
                            data-toggle="modal"
                            data-target="#myModal2"
                        >
                            Matricula
                        </button>

                        <!-- <a href="/register" class="btn btn-danger">Empezar</a> -->
                    </div>
                </div>
            </parallax-element>
        </parallax-container>
        <div class="backgroundf">
            <div class="section page-header header-filter" id="live4teach">
                <div class="containerheader">
                    <div class="container m-5 mx-auto">
                        <div class="row">
                            <div class="col-md-6">
                                <span>
                                    <h5
                                        align="center"
                                        style=" font-family: 'Century Gothic;'"
                                    >
                                        <br />
                                        <br />Liv4T Skool es una plataforma
                                        virtual educativa, es la herramienta
                                        complementaria para colegios e
                                        instituciones educativas. En nuestra
                                        plataforma se podrá enseñar habilidades
                                        y conocimientos a aquellos que requieran
                                        de un apoyo especializado, educativo o
                                        entretenimiento.Nos adaptamos al
                                        estudiante, al personal docente y a la
                                        coordinación, entendiendo que el proceso
                                        formativo tiene que ser útil y que cada
                                        estudiante tiene un ritmo de aprendizaje
                                        individualizado, por esto incorporamos
                                        recursos didácticos, tecnológicos y
                                        herramientas de comunicación en el
                                        proceso de formación.
                                    </h5>
                                    <br />
                                    <br />
                                </span>
                            </div>
                            <div class="col-md-6">
                                <h6 align="center">
                                    <br />
                                    <br />
                                    <h5 style=" font-family: 'Century Gothic;'">
                                        Descarga nuestra APP en
                                    </h5>
                                </h6>
                                <div class="text-center">
                                    <div class="col">
                                        <img
                                            thumbnail
                                            fluid
                                            src="../assets/img/googleplay.png"
                                            width="200px"
                                            alt="Image 1"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div align="center" style="padding: 40px">
            <h3>MATERIAS</h3>
        </div>
        <div class="card text-center">
            <div class="container-fluid mx-auto">
                <div class="row">
                    <div class="col-md-3" align="left">
                        <button
                            type="submit"
                            class="btn btn-default"
                            style="padding: 35px"
                        >
                            <img
                                width="70px"
                                height="70px"
                                src="../assets/img/ADMON-EMPRESAS.png"
                            />&nbsp;
                            <strong>Español</strong>
                        </button>
                    </div>
                    <div class="col-md-3" align="left" style="padding: 35px">
                        <button type="submit" class="btn btn-default">
                            <img
                                width="70px"
                                height="70px"
                                src="../assets/img/ANTROPOLOGIA.png"
                            />&nbsp;
                            <strong>Inglés</strong>
                        </button>
                    </div>
                    <div class="col-md-3" align="left" style="padding: 35px">
                        <button type="submit" class="btn btn-default">
                            <img
                                width="70px"
                                height="70px"
                                src="../assets/img/BIOLOGIA.png"
                            />&nbsp;
                            <strong>Biología</strong>
                        </button>
                    </div>
                    <div class="col-md-3" align="left" style="padding: 35px">
                        <button type="submit" class="btn btn-default">
                            <img
                                width="70px"
                                height="70px"
                                src="../assets/img/HISTORIA.png"
                            />&nbsp;
                            <strong>Historia</strong>
                        </button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3" align="left">
                        <button
                            type="submit"
                            class="btn btn-default"
                            style="padding: 35px"
                        >
                            <img
                                width="70px"
                                height="70px"
                                src="../assets/img/MATEMATICAS.png"
                            />&nbsp;
                            <strong>Matemáticas</strong>
                        </button>
                    </div>
                    <div class="col-md-3" align="left" style="padding: 35px">
                        <button type="submit" class="btn btn-default">
                            <img
                                width="70px"
                                height="70px"
                                src="../assets/img/QUIMICA.png"
                            />&nbsp;
                            <strong>Química</strong>
                        </button>
                    </div>
                    <div class="col-md-3" align="left" style="padding: 35px">
                        <button type="submit" class="btn btn-default">
                            <img
                                width="70px"
                                height="70px"
                                src="../assets/img/FISICA.png"
                            />&nbsp;
                            <strong>Física</strong>
                        </button>
                    </div>
                    <div class="col-md-3" align="left" style="padding: 35px">
                        <button type="submit" class="btn btn-default">
                            <img
                                width="70px"
                                height="70px"
                                src="../assets/img/SISTEMAS.png"
                            />&nbsp;
                            <strong>Computación</strong>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <parallax-container
            class="horizontal-card centered-card"
            id="conviertete"
            style="padding-top: 35px"
        >
            <parallax-element
                class="background-image"
                :parallaxStrength="10"
                :type="'depth'"
            >
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/FONDO1.jpg?alt=media&token=5f1ac736-23d5-48d7-9505-506f6d41d1e7"
                />
            </parallax-element>
            <div class="textin">
                <div align="left">
                    <h1 class>Sabías qué...?</h1>

                    <br />
                    <span class>
                        <h3>
                            Realizar un auto cuestionario luego de estudiar
                            ayudará a tu cerebro a recuperar la información
                            cuando la necesites.
                        </h3>
                    </span>
                    <div align="right">
                        <a href="/register" class="btn btn-danger">Leer más</a>
                    </div>
                </div>
            </div>
        </parallax-container>
        <parallax-container
            class="horizontal-card centered-card"
            id="categorias web"
        >
            <parallax-element
                class="background-image"
                :parallaxStrength="10"
                :type="'translation'"
            >
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/slider4.jpg?alt=media&token=befb4c66-f9b6-413a-b385-1a9b39a79c6b"
                />
            </parallax-element>
        </parallax-container>

        <div align="center" style="padding: 40px">
            <h3>NOTICIAS INTERNAS DEL COLEGIO</h3>
        </div>
        <parallax-container
            class="horizontal-card centered-card"
            id="conviertete"
            style="padding-top: 35px"
        >
            <parallax-element
                class="background-image"
                :parallaxStrength="10"
                :type="'depth'"
            >
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/fondo2.jpg?alt=media&token=5018775f-6c8e-4855-9ae6-e44b50bf1be5"
                />
            </parallax-element>
        </parallax-container>

        <footer class="footer-style">
            <div class="row footer-row mx-auto">
                <div class="col footer-col">
                    <!-- <p>
          Direccion:
          <br />AC 100#8A-55
          Bogotá, Colombia.
        </p-->
                </div>
                <div class="col footer-col" align="right">
                    <a href="#top" class="icons">
                        <i class="fas fa-chevron-circle-up fa-4x"></i>
                    </a>
                </div>
            </div>
            <div class="row footer-row mx-auto">
                <div class="col footer-col" align="center">
                    <a href class="icons">
                        <i class="fab fa-facebook fa-2x"></i>
                    </a>
                    <a href class="icons">
                        <i class="fab fa-instagram fa-2x"></i>
                    </a>
                    <a href class="icons">
                        <i class="fab fa-twitter fa-2x"></i>
                    </a>
                    <a href class="icons">
                        <i class="fab fa-linkedin fa-2x"></i>
                    </a>
                    <!--a href class="icons">
          <i class="fab fa-dribbble fa-2x"></i>
        </a-->
                </div>
            </div>
        </footer>
        <!-- Modal -->
        <div class="container matricula">
            <div
                class="modal right fade"
                id="myModal2"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myModalLabel2"
            >
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="card">
                            <h3 class="card-header fondo text-center">
                                Agenda tu cita
                                <button
                                    type="button"
                                    class="close"
                                    data-dismiss="modal"
                                >
                                    <span>&times;</span>
                                </button>
                            </h3>
                            <h5 class="text-center" style="color:#278080">
                                INICIA TU PROCESO AQUÍ
                            </h5>
                            <div class="card-body">
                                <form
                                    class="needs-validation"
                                    v-on:submit.prevent
                                    novalidate
                                >
                                    <div class="text-center">
                                        <h5>Tus datos</h5>
                                    </div>
                                    <div class="form-group row mx-auto">
                                        <div class="col text-center mx-auto">
                                            <label for="name">
                                                Nombre
                                            </label>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="objetive1"
                                                    class="form-control"
                                                    v-model="name"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row mx-auto">
                                        <div class="col text-center mx-auto">
                                            <label for="name">
                                                Correo
                                            </label>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="objetive1"
                                                    class="form-control"
                                                    v-model="name"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row mx-auto">
                                        <div class="col text-center mx-auto">
                                            <label for="name">
                                                Teléfono
                                            </label>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="objetive1"
                                                    class="form-control"
                                                    v-model="name"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <h5>Datos de tu hijo</h5>
                                    </div>
                                    <div v-for="(input, t) in inputs" :key="t">
                                        <div class="form-group row mx-auto">
                                            <div
                                                class="col text-center mx-auto"
                                            >
                                                <label for="name">
                                                    Nombre
                                                </label>
                                                <div>
                                                    <input
                                                        type="text"
                                                        name="objetive1"
                                                        class="form-control"
                                                        v-model="name"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row mx-auto">
                                            <div
                                                class="col text-center mx-auto"
                                            >
                                                <label for="name">
                                                    Edad
                                                </label>
                                                <div>
                                                    <input
                                                        type="number"
                                                        name="objetive1"
                                                        class="form-control"
                                                        v-model="name"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row mx-auto">
                                            <div
                                                class="col text-center mx-auto"
                                            >
                                                <label for="name">
                                                    Grado
                                                </label>
                                                <div>
                                                    <select
                                                        class="form-control"
                                                        ref="seleccionado"
                                                        required
                                                    >
                                                        <option value="2"
                                                            >Segundo</option
                                                        >
                                                        <option value="3"
                                                            >602</option
                                                        >
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div align="right">
                                            <a
                                                href="#"
                                                class="btn btn-info"
                                                @click.prevent="add(t)"
                                                v-show="t == inputs.length - 1"
                                                >Agregar</a
                                            >
                                            <a
                                                class="btn btn-danger"
                                                href="#"
                                                @click.prevent="remove(t)"
                                                v-show="
                                                    t ||
                                                        (!t &&
                                                            inputs.length > 1)
                                                "
                                                >Eliminar</a
                                            >
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                id="gridCheck"
                                                required
                                            />
                                            <label
                                                class="form-check-label"
                                                for="gridCheck"
                                                >Autorizo el uso y tratamiento
                                                de mis datos personales y sus
                                                términos y condiciones. Política
                                                de Tratamiento de Datos</label
                                            >
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <a
                                            class="btn btn-lg btn-warning"
                                            href="/matricula"
                                            >Guardar</a
                                        >
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!-- modal-content -->
                </div>
                <!-- modal-dialog -->
            </div>
            <!-- modal -->
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import VueMouseParallax from "vue-mouse-parallax";

import TextInput from "./TextInput.vue";
import {
    VueFlux,
    FluxCaption,
    FluxControls,
    FluxIndex,
    FluxPagination,
    FluxPreloader
} from "vue-flux";

Vue.use(VueMouseParallax);
Vue.use(VueMaterial);
export default {
    components: {},

    bodyClass: "landing-page",
    props: {
        header: {
            type: String,
            default: require("../assets/img/Footer_web.jpg")
        },
        teamImg1: {
            type: String,
            default: require("../assets/img/avatar.png")
        },
        teamImg2: {
            type: String,
            default: require("../assets/img/avatar.png")
        },
        teamImg3: {
            type: String,
            default: require("../assets/img/avatar.png")
        }
    },
    data() {
        return {
            name: null,
            email: null,
            message: null,
            newName: "",
            newLastName: "",
            newEmail: "",
            selected: "",
            description: "",
            slides: [
                {
                    content: "",
                    image: ""
                }
            ],
            inputs: [
                {
                    name: ""
                }
            ],
            vfOptions: {
                autoplay: true
            },
            vfImages: [
                "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/SLIDER1.jpg?alt=media&token=58ecdc81-2d81-4996-aeeb-8d9c34c15072"
            ],
            vfTransitions: ["fade", "cube", "book", "wave"],
            vfCaptions: ["Caption for image 1"]
        };
    },
    computed: {},
    methods: {
        inputEvent(e) {
            console.log(e);
        },
        add(index) {
            this.inputs.push({
                name: ""
            });
        },
        remove(index) {
            this.inputs.splice(index, 1);
        }
    }
};
</script>

<style lang="scss" scoped>
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
/* .footerhome {
    min-height: 70px;
    width: 100%;
   position: absolute;
    clear: both;
    margin-top: 0px;
    padding-top: 0px;
    overflow: visible;
    top:93%;
    bottom: 0;
  }
 footer */
.footer-style {
    bottom: 0;
    width: 100%;
    position: absolute;
    height: 400px;
    padding-top: 50px;
    background: url(../assets/img/Footer_web.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
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
    font-family: "Century Gothic";
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
.section2 {
    background: url(../assets/img/fondo2.jpg);
    background-attachment: fixed;
}
h4 {
    color: #000000;
    font-family: "Century Gothic";
    font-weight: bold;
    font-size: 30px;
}
a {
    color: white;
    font-family: "Century Gothic";
}
.textin {
    position: absolute;
    top: 50%;
    left: 40%;
    transform: translate(-50%, -50%);
    color: white;
    font-family: "Century Gothic";
    font-weight: bold;
}
.textin2 {
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);
    color: black;
    font-family: "Century Gothic";
    font-weight: bold;
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
</style>
