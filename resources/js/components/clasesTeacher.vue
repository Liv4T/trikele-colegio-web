<template>
    <div class="back">
        <div>
            <div class="form-group col-md-5 mx-auto">
                <div class="text-center">
                    <select class="btn btn-warning letra-boldfont" name="type" v-model="idArea">
                        <option disabled selected hidden value="">CURSOS</option>
                        <option :value="area.id + '/' + area.id_classroom" v-for="(area, key) in areas" :key="key">{{ area.text }}</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div id="tabs" class="col-md-10 mx-auto">
                    <div class="tabs">
                        <a v-on:click="activetab = 1" v-bind:class="[activetab === 1 ? 'active' : '']"><h4 class="letra-poppins-bold">PLAN DE ESTUDIO</h4></a>
                        <a v-on:click="activetab = 2" v-bind:class="[activetab === 2 ? 'active' : '']"><h4 class="letra-poppins-bold">TRIMESTRE</h4></a>
                        <a v-on:click="activetab = 3" v-bind:class="[activetab === 3 ? 'active' : '']"><h4 class="letra-poppins-bold">EVALUACIÓN</h4></a>
                        <a v-on:click="activetab = 4" v-bind:class="[activetab === 4 ? 'active' : '']"><h4 class="letra-poppins-bold">CICLOS</h4></a>
                    </div>

          <!-- <div class="content-azul"> -->
                    <div>
                        <div v-if="activetab === 1" class="tabcontent">
                            <div v-if="idArea !=='' ">
                                <course-component :id_area="idArea" :id_classroom="idClassroom"></course-component>
                            </div>
                        </div>
                        <div v-if="activetab === 2" class="tabcontent">
                            <div v-if="idArea !=='' ">
                                <course-trimestre-component :id_area="idArea" :id_classroom="idClassroom"></course-trimestre-component>
                            </div>
                        </div>
                        <div v-if="activetab === 3" class="tabcontent">
                            <div v-if="idArea !=='' ">
                                <notasd-component :id_area="idArea" :id_classroom="idClassroom"></notasd-component>
                            </div>
                        </div>
                        <div v-if="activetab === 4" class="tabcontent">
                            <div v-if="idArea !=='' ">
                                <div class="accordion" id="accordionExample">
                                    <div class="card">
                                        <div class="card-header" id="headingOne">
                                            <h2 class="mb-0">
                                                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Crear
                                                </button>
                                            </h2>
                                        </div>

                                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <semanal-component :id_area="idArea" :id_classroom="idClassroom"></semanal-component>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <div class="card-header" id="headingTwo">
                                            <h2 class="mb-0">
                                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Editar
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <semanalact-component :id_area="idArea" :id_classroom="idClassroom"></semanalact-component>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import pdf from "vue-pdf";
export default {
  components: {
    pdf,
  },
  props: ["user"],
  data() {
    return {
      clases: [],
      areas: [],
      descripcion: "",
      logro: "",
      fechaE: "",
      fechaR: "",
      id_act: "",
      errors: [],
      fillS: [],
      activetab: 1,
      nameArea: "",
      planifications: "",
      idArea: "",
      idClassroom: "",
      planif:"general"
    };
  },
  mounted() {
    axios.get("/api/lectives").then((response) => {
      this.planifications = response.data;
    });
    var url = "/GetArearByUser";
    axios.get(url).then((response) => {
      this.areas = response.data;
    });

    console.log("Component mounted.");
  },
  methods: {
    modaliniciar() {
      var url = window.location.origin + "/SaveTerms";

      axios
        .post(url, {
          status: 1,
        })
        .then((response) => {
          this.errors = [];
          $("#modalini").modal("hide");
        })
        .catch((error) => {
          this.errors = error.response.data;
        });
    },
  },
};
</script>
<style>
.mg-btn {
  margin: 10px;
  min-width: 165px;
}
.width-r {
  max-width: 97%;
  border: 1px solid #cccccc82;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px #b0acac;
}
.tabs {
  margin-top: 20px;
  overflow: hidden;
  margin-left: 90px;
  margin-bottom: -2px;
}

.tabs ul {
  list-style-type: none;
  margin-left: 20px;
}

.tabs a {
  float: left;
  cursor: pointer;
  padding: 12px 24px;
  transition: background-color 0.2s;
  border: 1px solid #ccc;
  border-right: none;
  background-color: #bfbfbf;
  border-radius: 10px 10px 0 0;
  font-weight: bold;
  color: #fff !important;
}
.tabs a:last-child {
  border-right: 1px solid #ccc;
}
.pd-20 {
  padding: 20px;
}

/* Change background color of tabs on hover */
.tabs a:hover {
  background-color: #aaa;
  color: #fff;
}

/* Styling for active tab */
.tabs a.active {
  background-color: #09708C;
  color: #fff;
  border-bottom: 2px solid #fff;
  cursor: default;
}
.tabcontent {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 3px 3px 6px #e1e1e1;
}
.content-azul {
  background-color: #00cbcec6;
}
.flotante {
  position: fixed;
  top: 380px;
  z-index: 1020;
}
</style>
