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
  <b-container fluid class="p-4 bg-light3">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/vfCR3VvV3Zk"></iframe>
    </div>
  </b-container>
  <div class="card text-center">
    <div class="card-body" v-for="cour in courses" :key="cour">
      <h3 class="etiqueta">{{ cour.name }}</h3>
      <div class="ec-stars-wrapper1">
        <a data-value="1">&#9733;</a>
        <a data-value="2">&#9733;</a>
        <a data-value="3">&#9733;</a>
        <a data-value="4">&#9733;</a>
        <a data-value="5">&#9733;</a>
      </div>
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          style="width: 25%;"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >25%</div>
      </div>
      <label class="etiquetaB" for>{{ cour.description }}</label>
      <br />
      <!--strong for
                    >Recuerde que el curso inicia:--/--/---- y
                    finaliza:--/--/----</strong
      -->
    </div>
  </div>
  <video-component></video-component>
  <div class="card text-center">
    <div class="card-body">
      <a href>
        <h4 class="etiquetaB">Actividades</h4>
      </a>
      <div class="form-group row">
        <div class="col-md-6">
          <a href="/activitySt">
            <img src="../assets/img/trivia_icono.png" width="90px" alt />
          </a>
          <label for>Actividad 1</label>
        </div>
        <div class="col-md-6">
          <a href>
            <img src="../assets/img/trivia_icono.png" width="90px" alt />
          </a>
          <label for>Actividad 2</label>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-md-6">
          <a href>
            <img src="../assets/img/trivia_icono.png" width="90px" alt />
          </a>
          <label for>Actividad 3</label>
        </div>
        <div class="col-md-6">
          <a href>
            <img src="../assets/img/trivia_icono.png" width="90px" alt />
          </a>
          <label for>Actividad 4</label>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";

import TextInput from "./TextInput.vue";

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
  components: { TextInput },
  data() {
    return {
      name: null,
      email: null,
      message: null,
      courses: []
    };
  },
  mounted() {
    console.log("mounted");
    var urlr = "courses";
    axios.get(urlr).then(response => {
      this.courses = response.data;
      console.log(this.courses);
    });
  },
  methods: {
    inputEvent(e) {
      console.log(e);
    }
  }
};
</script>
<style>
.ec-stars-wrapper1 {
  font-size: 0;
  display: inline-block;
  color: rgb(255, 214, 32);
}
.ec-stars-wrapper1 a {
  text-decoration: none;
  display: inline-block;
  /* Volver a dar tamaño al texto */
  font-size: 30px;
  font-size: 1.5rem;
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
.etiquetaB {
  color: black;
  font-weight: bold;
}
.etiqueta {
  color: black;
}
@import url(https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);
.card-header {
  background-color: #e9ecefb5;
}
#accordion1 li.panel {
  margin-bottom: 0px;
}
.bg-light3 {
  background: linear-gradient(#c078d6, #91328c);
  margin: 0%;
}
</style>
