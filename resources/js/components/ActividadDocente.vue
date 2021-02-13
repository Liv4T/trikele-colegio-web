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
      <div class="col-md-10 mx-auto">
        <div class="custom-card text-center">
          <h3 class="card-header fondo">Actividad</h3>
          <form class="needs-validation" novalidate>
            <form-wizard
              title
              subtitle
              color="#ffc107"
              next-button-text="Siguiente"
              back-button-text="Atrás"
              finish-button-text="Guardar y enviar"
              @on-complete="createActivity"
            >
              <tab-content title="Descripción">
                <div class="form-group mx-auto">
                  <div align="center">
                    <div class="col-md-6">
                      <label for>Clase:</label>
                      <select class="form-control" ref="seleccionado" required>
                        <option :value="option.id" v-for="(option,_opK) in myOptions.clase" v-bind:key="_opK">{{option.text}}</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="form-group row mx-auto">
                  <div class="col-md-6">
                    <label for="name">Nombre de la actividad</label>
                    <div>
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="newName"
                        placeholder="Nombre de la unidad"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="name">Descripción</label>
                    <textarea
                      name="competences"
                      class="form-control"
                      v-model="newDescription"
                      placeholder="Es la explicacion o sintesis de la unidad."
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group row mx-auto">
                  <div class="col-md-6">
                    <label>Tipo de actividad</label>
                    <select class="form-control" required v-model="newActivity" @change="ActivityTypeSelectedEvent" >
                      <option :value="activity_type.value" v-for="(activity_type, atk) in activities_type" v-bind:key="atk">{{activity_type.label}}</option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label for="name">Logro</label>
                    <select
                      class="form-control"
                      v-model="newLogro"
                      @change="Indicator(newLogro)"
                      required
                    >
                      <option
                        :value="logr.id"
                        v-for="(logr, logi) in myOptions.achievements"
                         v-bind:key="logi"
                      >{{logr.achievement}}</option>
                    </select>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col-md-6">
                    <label for="name">Indicador</label>
                    <select class="form-control" v-model="newIndicator" required>
                      <option
                        :value="opt.id"
                        v-for="(opt,opid) in fillI"
                        v-bind:key="opid"
                      >{{opt.type_activity +" - "+ opt.activity_rate+"%" }}</option>
                    </select>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group row mx-auto">
                  <div class="col" align="center">
                    <label for>Fecha de entrega</label>
                    <input type="date" class="form-control" v-model="newDateE" required />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col" align="center">
                    <label>Fecha de retroalimentación</label>
                    <input type="date" name="name" class="form-control" v-model="newDateR" required />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
              </tab-content>
              <tab-content title="Formulario">
                <template  v-if="newActivity == 'questionary_options'">
                    <div

                    v-for="(input, k) in inputs"
                    :key="k">
                    <div class="form-group row mx-auto">
                        <div class="col-md-6">
                        <label for="name">Pregunta {{ k+1 }}</label>
                        <span>
                            <a
                            href="#"
                            class="badge badge-danger"
                            @click.prevent="remove(k)"
                            v-show="
                                                            k ||
                                                                (!k &&
                                                                    inputs.length >
                                                                        1)
                                                        "
                            >-</a>
                            <a
                            href="#"
                            class="badge badge-primary"
                            @click.prevent="add(k)"
                            v-show="
                                                            k == inputs.length - 1
                                                        "
                            >+</a>
                        </span>
                        <input
                            type="text"
                            name="objetive1"
                            class="form-control"
                            v-model="input.question"
                            required
                        />
                        </div>
                        <div class="col-md-6">
                        <label>Respuesta Correcta</label>
                        <input
                            type="text"
                            name="objetive1"
                            class="form-control"
                            v-model="input.correct_answer"
                            required
                        />
                        </div>
                        <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="form-group row mx-auto">
                        <div class="col-md-6">
                        <label for>Opción 1</label>
                        <input
                            type="text"
                            name="objetive1"
                            class="form-control"
                            v-model="input.answer_1"
                            required
                        />
                        </div>
                        <div class="col-md-6">
                        <label for>Opción 2</label>
                        <input
                            type="text"
                            name="objetive1"
                            class="form-control"
                            v-model="input.answer_2"
                            required
                        />
                        </div>
                    </div>
                    <div class="form-group row mx-auto">
                        <div class="col-md-6">
                        <label for>Opción 3</label>
                        <input
                            type="text"
                            name="objetive1"
                            class="form-control"
                            v-model="input.answer_3"
                            required
                        />
                        </div>
                    </div>
                    </div>
                </template>
                <activity-teacher-complete-sentence   @refresh-data="RefreshData" v-if="newActivity == 'complete_sentence'"></activity-teacher-complete-sentence>
                <activity-teacher-open-question    @refresh-data="RefreshData"  v-if="newActivity == 'questionary_open_questions'"></activity-teacher-open-question>
              </tab-content>
            </form-wizard>
          </form>
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
  props: ["week"],
  data() {
    return {
      inputs: [],
      activities_type:[
          {label:'Cuestionario 4 opciones',value:'questionary_options'},
          {label:'Completar oración',value:'complete_sentence'},
          {label:'Cuestionario de preguntas abiertas',value:'questionary_open_questions'},
      ],
      myOptions: [],
      optionA: "Cuestionario 4 opciones",
      logros: [],
      newActivity: "",
      newDescription: "",
      newName: "",
      newLogro: "",
      newDateR: "",
      newDateE: "",
      newSemana: "",
      newTrivia: [],
      seleccionado: "",
      newIndicator: "",
      fillI: [],

      fillC: {
        id: "",
        name: "",
        description: "",
      },
      errors: [],
      data:{complete:true}
    };
  },
  mounted() {
    var urlsel = "getClass/" + this.week;
    axios.get(urlsel).then((response) => {
      this.myOptions = response.data;
    });
  },
  methods: {
    add(index) {
      this.inputs.push({
        question: "",
        correct_answer: "",
        answer_1: "",
        answer_2: "",
        answer_3: "",
      });
    },
    remove(index) {
      this.inputs.splice(index, 1);
    },
    getMenu() {
      window.location = "/clases_d";
    },
    createActivity() {
        if(!this.data.complete)
        {
            toastr.warning("Por favor revise que el contenido de la actividad este completo.");
            return;
        }

      var url = "Activity";
      this.seleccionado = this.$refs.seleccionado.value;

      if (this.inputs.length >= 1) {
        for (let i = 0; i < this.inputs.length; i++) {
          this.newTrivia.push(this.inputs[i]);
        }
      }

      axios
        .post(url, {
          activity_name: this.newName,
          activity_desc: this.newDescription,
          achievement: this.newLogro,
          deliver_date: this.newDateE,
          feedback_date: this.newDateR,
          id_weekly_plan: this.seleccionado,
          activity_type: this.newActivity,
          id_indicator: this.newIndicator,
          trivia: this.newTrivia,
          activity_data:this.data
        })
        .then((response) => {
          this.errors = [];

          toastr.success("Nueva actividad creada exitosamente");
          this.getMenu();
        })
        .catch((error) => {
          this.errors = error.response.data;
        });

    },
    Indicator(id) {
      var urli = window.location.origin + "/getIndicator/" + id;
      axios.get(urli).then((response) => {
        this.fillI = response.data;
      });
    },
    RefreshData(data)
    {
        this.data=data;
    },
    ActivityTypeSelectedEvent()
    {
        if(this.newActivity=='questionary_options')
        {
            this.inputs=[ {
                question: "",
                correct_answer: "",
                answer_1: "",
                answer_2: "",
                answer_3: "",
            }];
        }
        else{
            this.inputs=[];
        }
    }
  },
};
</script>
<style>
</style>
