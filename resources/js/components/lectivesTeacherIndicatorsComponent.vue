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
  <div class="back">
    <div class="row">
      <div class="col-md-11 mx-auto">
        <div class="custom-card text-center">
          <h3 class="card-header fondo">Planificación general {{planification.lective.name}} Trimestre {{planification.period_consecutive}} </h3>
          <form class="needs-validation" novalidate v-show="trimestre == false">
            <form-wizard
              title
              subtitle
              color="#ffc107"
              next-button-text="Siguiente"
              back-button-text="Atrás"
              finish-button-text="Guardar"
              @on-complete="updateCourses"
            >
              <tab-content title="rate de notas">
                <div class="card-body">
                  <div class="accordion" id="accordionExample">
                    <div class="card" v-for="(option,t) in planification.achievements" :key="t">
                      <div class="card-header">
                        <h2 class="mb-0">
                          <button
                            class="btn btn-link"
                            type="button"
                            data-toggle="collapse"
                            :data-target="'#collapse'+t"
                            aria-expanded="false"
                            @click.prevent="getIndicador(option.id)"
                            aria-controls="collapse"
                          >
                            <label
                              style="text-overflow: ellipsis;
                                width: 450px;
                                white-space: nowrap;
                                overflow: hidden;"
                            >{{ option.content }}</label>
                            <input
                              type="number"
                              style="width:50px;"
                              v-model="option.rate"
                              disabled
                            />
                            %
                          </button>
                        </h2>
                      </div>
                      <div :id="'collapse'+t"
                        class="collapse hide"
                        aria-labelledby="heading"
                        data-parent="#accordionExample">
                        <div class="card-body">
                          <table class="table table-responsive-xl table-hover table-striped center">
                            <tbody>
                              <tr>
                                <td>Actividad</td>

                                <td>rate</td>

                                <td>Editar</td>

                                <td>Eliminar</td>
                              </tr>
                              <tr v-for="(opt,i) in indicators">
                                <td>{{ opt.type_activity }}</td>

                                <td>{{ opt.rate }}</td>

                                <td><a class="fas fa-edit" v-on:click.prevent="showEdit(opt.id,opt.type_activity,opt.rate)"></a></td>

                                <td><a class="fas fa-trash-alt" v-on:click.prevent="showDeleted(opt.id)"></a></td>
                              </tr>
                            </tbody>
                          </table>
                          <div align="right">
                            <a class="btn btn-warning" v-on:click.prevent="showAddModal(option.id)">Agregar</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </tab-content>
            </form-wizard>
          </form>
        </div>
      </div>

      <div class="modal fade" id="createZ">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="card">
              <h3 class="card-header fondo text-center">
                Porcentaje
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </h3>
              <div class="card-body">
                <form class="needs-validation" v-on:submit.prevent novalidate>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <label for="name">Tipo de actividad</label>
                      <div>
                        <input
                          type="text"
                          name="objetive1"
                          class="form-control"
                          v-model="tipo_act"
                          style="background: gainsboro;"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <label for="name">Porcentaje total</label>
                      <div>
                        <input
                          type="number"
                          name="objetive1"
                          class="form-control"
                          v-model="rate"
                          style="background: gainsboro;"
                          required
                        />                        
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <input
                      type="submit"
                      class="btn btn-warning"
                      v-on:click.prevent="createIndicator()"
                      value="Guardar"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="deleteZ">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="card">
              <h3 class="card-header fondo text-center">
                Eliminar Indicador
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </h3>
              <div class="card-body">
              
                  <label>¿Desea eliminar el indicador?</label>                  
                  <div class="modal-footer">
                    <input
                      type="submit"
                      class="btn btn-warning"
                      v-on:click.prevent="deleteIndicator()"
                      value="Confirmar"
                    />
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
$(function () {
  // Get the form fields and hidden div
  var checkbox = $("#gridCheck1");
  var hidden = $("#hidden_fields1");

  hidden.hide();

  checkbox.change(function () {
    if (checkbox.is(":checked")) {
      // Show the hidden fields.
      hidden.show();
    } else {
      hidden.hide();
    }
  });
});
import VueFormWizard from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
Vue.use(VueFormWizard);
export default {
  props: ["id_lective_planification"],
  data() {
    return {
      inputs: [
        {
          name: "",
          contenido: "",
        },
      ],
      inputs1: [
        {
          name: "",
          rate: "",
        },
      ],
      newTrimestre: [],
      tipo_act: "",
      rate: "",
      newTrimestre: [],
      newLogro: [],
      trimestre: false,
      logro_1: "",
      logro_2: "",
      logro_3: "",
      logro_4: "",
      planification: {lective:{}},
      indicators: [],
      anual: [],
      newAnual: [],
      errors: [],
      id_logro: "",
      id_indicator:0,
      index: 0,
      id_lective_achievement:0
    };
  },
  mounted() {
    var urlsel = "/api/lectives/planification/" + this.id_lective_planification;
    axios.get(urlsel).then((response) => {
      this.planification = response.data;
    });
  },
  methods: {
    getMenu() {
      window.location = "/api/lectives/planification";
    },
    returnToHome() {
      window.location = `/teacher/lectives/planning/${this.id_lective_planification}/indicators`;
    },
    getIndicador(id_achievement) {
      this.id_lective_achievement=id_achievement;
      this.indicators = [];
      var urli = "/api/lectives/planification/" + this.id_lective_planification + "/achievement/" + id_achievement;
      axios.get(urli).then((response) => {
        this.indicators = response.data;

      });
    },
    add(index) {
      this.inputs.push({ name: "", contenido: "" });
    },
    remove(index) {
      this.inputs.splice(index, 1);
    },
    add1(index) {
      this.inputs1.push({ name: "", rate: "" });
    },
    remove1(index) {
      this.inputs1.splice(index, 1);
    },

    createIndicator() {
 
      axios
        .put("/api/lectives/planification/" + this.id_lective_planification + "/achievement", {
          //Cursos generales
          id_indicator:this.id_indicator,
          id_lective_achievement:this.id_lective_achievement,
          type_activity: this.tipo_act,
          id_annual: this.id_annual,
          id_achievement: this.id_logro,
          rate: this.rate,
        })
        .then((response) => {
          this.errors = [];

          toastr.success("Nueva actividad creada exitosamente");

          this.returnToHome();
        })
        .catch((error) => {
          this.errors = error.response.data;
        });
    },
    updateCourses() {
      this.returnToHome();
    },
    showAddModal(id) {
       this.id_indicator =0;
      this.tipo_act = '';
      this.rate = '';
      $("#createZ").modal("show");
    },
    showEdit(id_rate, tipo_act, rate) {
      //   var urlr = "showClass/" + clas;
      //   axios.get(urlr).then(response => {
      //     this.fillS = response.data;
      //   });
      this.id_indicator = id_rate;
      this.tipo_act = tipo_act;
      this.rate = rate;
      $("#createZ").modal("show");
    },
    showDeleted(id_indicator) {
      this.id_indicator = id_indicator;

      $("#deleteZ").modal("show");
    },
    deleteIndicator() {

     

      axios.delete(`/api/lectives/planification/${this.id_lective_planification}/indicator/${this.id_indicator}`, {})
        .then((response) => {
          this.errors = [];
           $("#deleteZ").modal("hide");
          toastr.success("Actividad eliminada exitosamente");

          this.returnToHome();
        })
        .catch((error) => {
          this.errors = error.response.data;
        });
    },
  },
};


</script>
<style></style>
