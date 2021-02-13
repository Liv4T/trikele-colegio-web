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
  <div class="form-group">
    <div style="position: absolute; top:330px; z-index:100;" class="back">
      <div class="custom-card">
        <div class="card-header">
          <div align="center">
            <h5>APRENDE LO QUE QUIERAS</h5>
          </div>
          <div class="form-group row">
            <div class="col-md-10">
              <div>
                <TextInput value placeholder="Nombre" @inputEvent="inputEvent"></TextInput>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-10">
              <div>
                <TextInput value placeholder="Apellido" @inputEvent="inputEvent"></TextInput>
              </div>
            </div>
          </div>
          <div>
            <div class="form-group row">
              <div class="col-md-10">
                <div>
                  <TextInput value placeholder="Email" @inputEvent="inputEvent"></TextInput>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-md-10">
                <select2 class="selectc" v-model="selected">
                  <option disabled value>Programa</option>
                  <option>Estudiante</option>
                  <option>Tutor</option>
                </select2>
              </div>
              <div class="invalid-feedback">
                Please fill out this field, the user name
                may not be greater than 20 characters.
              </div>
            </div>
            <div align="center">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-instagram"></i>
              <i class="fas fa-envelope-square"></i>
            </div>
            <div class="text-center">
              <a href="/register" class="btn btn-danger">INGRESA</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <vueper-slides :touchable="false" :slide-ratio="0.3" fixed-height="500px">
    <vueper-slide
      v-for="(slide, i) in slides"
      :key="i"
      :image="slide.image"
      :title="slide.title"
      :content="slide.content"
    ></vueper-slide>
  </vueper-slides>
  <div class="container">
    <div class="form-group row">
      <h3 class="hola">APP INVENTOR 2 BASICO</h3>
    </div>
    <div class="form-group row">
      <label class="hola2" for>
        El curso está diseñado utilizando una metodología
        interactiva a través de esta permite aprender de manera
        autónoma y propicia los conceptos más relevantes en sobre la
        programación móvil.
      </label>
      <br />
      <!--label for
                    >Fecha de inicio:--/--/---- fecha final:--/--/----</label
      -->
    </div>
    <div class="form-group row">
      <div class="col-md-6">
        <div class="ec-stars-wrapper1">
          <a href="#" data-value="1" title="Votar con 1 estrellas">&#9733;</a>
          <a href="#" data-value="2" title="Votar con 2 estrellas">&#9733;</a>
          <a href="#" data-value="3" title="Votar con 3 estrellas">&#9733;</a>
          <a href="#" data-value="4" title="Votar con 4 estrellas">&#9733;</a>
          <a href="#" data-value="5" title="Votar con 5 estrellas">&#9733;</a>
        </div>
      </div>
      <div class="col-md-3 text-right">
        <strong>$99.900</strong>
      </div>
    </div>
  </div>
  <!--<figure class="figure">
                <img
                  src="../assets/img/avatar.png"
                  class="figure-img img-fluid rounded"
                  alt="A generic square placeholder image with rounded corners in a figure."
                  height="100px"
                  width="100px"
                />
                <figcaption class="figure-caption" href="#">
                  <a href="/resume">Nombre del Tutor</a>
                </figcaption>
  </figure>-->
  <div class="card text-center">
    <div class="card-body">
      <i class="fas fa-bullhorn fa-3x hola2"></i>
      <h5 class="hola">Objetivos del curso</h5>
      <label class="hola2" for>
        El objetivo del curso es que se dé a conocer los aspectos
        que hay en las ventanas de app inventor con cada una de sus
        funcionalidades y poder diseñar un modelo para una app, para
        lo que veremos conceptos básicos.
      </label>
    </div>
  </div>
  <div class="card bg-light text-center">
    <div class="card-body">
      <h5 class="hola">Temario</h5>
      <div class="form-group row">
        <div class="col">
          <li class="hola2">tema 1</li>
          <li class="hola2">tema 3</li>
        </div>
        <div class="col">
          <li class="hola2">tema 2</li>
          <li class="hola2">tema 4</li>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="form-group row justify-content-center">
      <h4 class="hola">Requisitos</h4>
    </div>
    <div class="form-group row justify-content-center">
      <label class="hola2" for>Conocimiento en JAVA.</label>
    </div>
    <div class="form-group row justify-content-center">
      <div class="ec-stars-wrapper1">
        <a href="#" data-value="1" title="Votar con 1 estrellas">&#9733;</a>
        <a href="#" data-value="2" title="Votar con 2 estrellas">&#9733;</a>
        <a href="#" data-value="3" title="Votar con 3 estrellas">&#9733;</a>
        <a href="#" data-value="4" title="Votar con 4 estrellas">&#9733;</a>
        <a href="#" data-value="5" title="Votar con 5 estrellas">&#9733;</a>
      </div>
      <label href class="hola">(240 estudiantes)</label>
    </div>
  </div>
  <div class="card bg-light text-center">
    <div class="card-body">
      <h5 class="hola">Comentarios Usuarios</h5>
      <div class="form-group row">
        <label href class="hola">
          <i class="fas fa-user-circle"></i>Juan Perez
        </label>

        <div class="ec-stars-wrapper1">
          <a href="#" data-value="1" title="Votar con 1 estrellas">&#9733;</a>
          <a href="#" data-value="2" title="Votar con 2 estrellas">&#9733;</a>
          <a href="#" data-value="3" title="Votar con 3 estrellas">&#9733;</a>
          <a href="#" data-value="4" title="Votar con 4 estrellas">&#9733;</a>
          <a href="#" data-value="5" title="Votar con 5 estrellas">&#9733;</a>
        </div>
      </div>
      <div class="form-group row">
        <label for>Comentario</label>
      </div>

      <div class="form-group row">
        <label href class="hola">
          <i class="fas fa-user-circle"></i>Maria Arias
        </label>
        <div class="ec-stars-wrapper1">
          <a href="#" data-value="1" title="Votar con 1 estrellas">&#9733;</a>
          <a href="#" data-value="2" title="Votar con 2 estrellas">&#9733;</a>
          <a href="#" data-value="3" title="Votar con 3 estrellas">&#9733;</a>
          <a href="#" data-value="4" title="Votar con 4 estrellas">&#9733;</a>
          <a href="#" data-value="5" title="Votar con 5 estrellas">&#9733;</a>
        </div>
      </div>
      <div class="form-group row">
        <label for>Comentario</label>
      </div>
    </div>
  </div>

  <!-- <div class="form-group mx-auto">
      <div align="center">
        <strong>Unidades</strong>
      </div>
      <div class="form-group row">
        <div class="col">
          <a href="/unit">
            Unidad 1
            <br />Nombre de la unidad
          </a>
        </div>
        <div class="col">
          <a href="/unit">
            Unidad 2
            <br />Nombre de la unidad
          </a>
        </div>
        <div class="col">
          <a href="/unit">
            Unidad 3
            <br />Nombre de la unidad
          </a>
        </div>
      </div>
    </div>
  <div class="form-group mx-auto">
          <div align="center">
            <strong>Objetos de Aprendizaje</strong>
          </div>
          <textarea
            name="objects"
            class="form-control"
            v-model="newFrom"
            placeholder="Contenido tematico por unidad."
            disabled
          ></textarea>
          <div class="invalid-feedback">Please fill out this field</div>
  </div>-->
  <div class="modal-footer">
    <a href="/payments" class="btn btn-danger float-right">Comprar</a>
  </div>
  <div class="container-fluid">
    <h4 class="text-center hola">Cursos Relacionados</h4>
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner row w-100 mx-auto">
        <div class="carousel-item col-md-3 active">
          <div class="card">
            <img src="../assets/img/OMHWPH0.jpg" class="card-img-top" alt />
            <div class="card-body">
              <a href="/ccourse">
                <h5 class="card-title hola">Card title 1</h5>
              </a>
              <div class="card-text">
                <div class="ec-stars-wrapper2">
                  <a data-value="1">&#9733;</a>
                  <a data-value="2">&#9733;</a>
                  <a data-value="3">&#9733;</a>
                  <a data-value="4">&#9733;</a>
                  <a data-value="5">&#9733;</a>
                </div>
              </div>
              <p class="card-text">
                This is a longer card with supporting text
                below as a natural lead-in to additional
                content.
              </p>
              <p class="card-text">
                <small class="text-muted">$99.900</small>
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item col-md-3">
          <div class="card">
            <img src="../assets/img/2918.jpg" class="card-img-top" alt />
            <div class="card-body">
              <a href="/ccourse">
                <h5 class="card-title hola">Card title 1</h5>
              </a>
              <div class="card-text">
                <div class="ec-stars-wrapper2">
                  <a data-value="1">&#9733;</a>
                  <a data-value="2">&#9733;</a>
                  <a data-value="3">&#9733;</a>
                  <a data-value="4">&#9733;</a>
                  <a data-value="5">&#9733;</a>
                </div>
              </div>
              <p class="card-text">
                This is a longer card with supporting text
                below as a natural lead-in to additional
                content.
              </p>
              <p class="card-text">
                <small class="text-muted">$99.900</small>
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item col-md-3">
          <div class="card">
            <img src="../assets/img/418.jpg" class="card-img-top" alt />
            <div class="card-body">
              <a href="/ccourse">
                <h5 class="card-title hola">Card title 1</h5>
              </a>
              <div class="card-text">
                <div class="ec-stars-wrapper2">
                  <a data-value="1">&#9733;</a>
                  <a data-value="2">&#9733;</a>
                  <a data-value="3">&#9733;</a>
                  <a data-value="4">&#9733;</a>
                  <a data-value="5">&#9733;</a>
                </div>
              </div>
              <p class="card-text">
                This is a longer card with supporting text
                below as a natural lead-in to additional
                content.
              </p>
              <p class="card-text">
                <small class="text-muted">$99.900</small>
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item col-md-3">
          <div class="card">
            <img src="../assets/img/125063-OQT3VV-312.jpg" class="card-img-top" alt />
            <div class="card-body">
              <a href="/ccourse">
                <h5 class="card-title hola">Card title 1</h5>
              </a>
              <div class="card-text">
                <div class="ec-stars-wrapper2">
                  <a data-value="1">&#9733;</a>
                  <a data-value="2">&#9733;</a>
                  <a data-value="3">&#9733;</a>
                  <a data-value="4">&#9733;</a>
                  <a data-value="5">&#9733;</a>
                </div>
              </div>
              <p class="card-text">
                This is a longer card with supporting text
                below as a natural lead-in to additional
                content.
              </p>
              <p class="card-text">
                <small class="text-muted">$99.900</small>
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item col-md-3">
          <div class="card">
            <img src="../assets/img/2371004.jpg" class="card-img-top" alt />
            <div class="card-body">
              <a href="/ccourse">
                <h5 class="card-title hola">Card title 1</h5>
              </a>
              <div class="card-text">
                <div class="ec-stars-wrapper2">
                  <a data-value="1">&#9733;</a>
                  <a data-value="2">&#9733;</a>
                  <a data-value="3">&#9733;</a>
                  <a data-value="4">&#9733;</a>
                  <a data-value="5">&#9733;</a>
                </div>
              </div>
              <p class="card-text">
                This is a longer card with supporting text
                below as a natural lead-in to additional
                content.
              </p>
              <p class="card-text">
                <small class="text-muted">$99.900</small>
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item col-md-3">
          <div class="card">
            <img
              src="../assets/img/programmer-working-computer_23-2147505689.jpg"
              class="card-img-top"
              alt
            />
            <div class="card-body">
              <a href="/ccourse">
                <h5 class="card-title hola">Card title 1</h5>
              </a>
              <div class="card-text">
                <div class="ec-stars-wrapper2">
                  <a data-value="1">&#9733;</a>
                  <a data-value="2">&#9733;</a>
                  <a data-value="3">&#9733;</a>
                  <a data-value="4">&#9733;</a>
                  <a data-value="5">&#9733;</a>
                </div>
              </div>
              <p class="card-text">
                This is a longer card with supporting text
                below as a natural lead-in to additional
                content.
              </p>
              <p class="card-text">
                <small class="text-muted">$99.900</small>
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item col-md-3">
          <div class="card">
            <img src="../assets/img/programador-web_23-2147502079.jpg" class="card-img-top" alt />
            <div class="card-body">
              <a href="/ccourse">
                <h5 class="card-title hola">Card title 1</h5>
              </a>
              <div class="card-text">
                <div class="ec-stars-wrapper2">
                  <a data-value="1">&#9733;</a>
                  <a data-value="2">&#9733;</a>
                  <a data-value="3">&#9733;</a>
                  <a data-value="4">&#9733;</a>
                  <a data-value="5">&#9733;</a>
                </div>
              </div>
              <p class="card-text">
                This is a longer card with supporting text
                below as a natural lead-in to additional
                content.
              </p>
              <p class="card-text">
                <small class="text-muted">$99.900</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</div>
</template>
<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import VueMouseParallax from "vue-mouse-parallax";

import TextInput from "./TextInput.vue";

Vue.use(VueMouseParallax);
Vue.use(VueMaterial);
$(document).ready(function() {
  $("#myCarousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item")
            .eq(i)
            .appendTo(".carousel-inner");
        } else {
          $(".carousel-item")
            .eq(0)
            .appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
});
export default {
  components: { VueperSlides, VueperSlide, TextInput },
  data() {
    return {
      name: null,
      email: null,
      message: null,
      slides: [
        {
          content:
            '<b style="font-size: 1.3em;color: white">UNA FORMA DIFERENTE DE APRENDER</b>',
          image: require("../assets/img/PORTADAweb.jpg")
        }
      ]
    };
  },
  methods: {
    inputEvent(e) {
      console.log(e);
    }
  }
};
</script>
<style>
@media (min-width: 768px) {
  /* show 4 items */
  .carousel-inner .active,
  .carousel-inner .active + .carousel-item,
  .carousel-inner .active + .carousel-item + .carousel-item,
  .carousel-inner .active + .carousel-item + .carousel-item + .carousel-item {
    display: block;
  }
  .carousel-item {
    margin-right: auto !important;
  }
  .carousel-inner
    .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left),
  .carousel-inner
    .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left)
    + .carousel-item,
  .carousel-inner
    .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left)
    + .carousel-item
    + .carousel-item,
  .carousel-inner
    .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left)
    + .carousel-item
    + .carousel-item
    + .carousel-item {
    transition: none;
  }

  .carousel-inner .carousel-item-next,
  .carousel-inner .carousel-item-prev {
    position: relative;
    transform: translate3d(0, 0, 0);
  }

  .carousel-inner
    .active.carousel-item
    + .carousel-item
    + .carousel-item
    + .carousel-item
    + .carousel-item {
    position: absolute;
    top: 0;
    right: -25%;
    z-index: -1;
    display: block;
    visibility: visible;
  }

  /* left or forward direction */
  .active.carousel-item-left + .carousel-item-next.carousel-item-left,
  .carousel-item-next.carousel-item-left + .carousel-item,
  .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item,
  .carousel-item-next.carousel-item-left
    + .carousel-item
    + .carousel-item
    + .carousel-item,
  .carousel-item-next.carousel-item-left
    + .carousel-item
    + .carousel-item
    + .carousel-item
    + .carousel-item {
    position: relative;
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  /* farthest right hidden item must be absolue position for animations */
  .carousel-inner .carousel-item-prev.carousel-item-right {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    display: block;
    visibility: visible;
  }

  /* right or prev direction */
  .active.carousel-item-right + .carousel-item-prev.carousel-item-right,
  .carousel-item-prev.carousel-item-right + .carousel-item,
  .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item,
  .carousel-item-prev.carousel-item-right
    + .carousel-item
    + .carousel-item
    + .carousel-item,
  .carousel-item-prev.carousel-item-right
    + .carousel-item
    + .carousel-item
    + .carousel-item
    + .carousel-item {
    position: relative;
    transform: translate3d(100%, 0, 0);
    visibility: visible;
    display: block;
    visibility: visible;
  }
}
.ec-stars-wrapper {
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
  font-size: 32px;
  font-size: 2rem;

  color: rgb(255, 214, 32);
}
table,
th,
td {
  border-collapse: collapse;
}
th,
td {
  padding: 20px;
}
.hola {
  color: black;
  font-weight: bold;
}
.hola2 {
  color: black;
}
@import url(https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);
.card-header {
  background-color: #e9ecefb5;
}
.selectc {
  background-color: #e9ecef00;
  border-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(92, 91, 91);
  font-size: 1em;
  border-bottom-width: medium;
}
</style>
