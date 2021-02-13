<template>
  <div class="background2">
    <div class="row">
      <div class="col-md-11 mx-auto">
        <div class="custom-card text-center">
          <h3 class="card-header">Actividad</h3>
          <form class="needs-validation" novalidate>
            <form-wizard title subtitle>
              <tab-content title="Actividad general">
                <div class="card-body">
                  <div class="form-group row">
                    <div class="col-md-6">
                      <strong>Nombre del curso</strong>
                      <select2
                        :options="classes"
                        v-model="activities.id_course"
                        @input="getUnits"
                        required
                      ></select2>
                    </div>
                    <div class="col-md-6">
                      <strong>Unidad</strong>
                      <select2
                        :options="units"
                        v-model="activities.id_unit"
                        @input="getTopics"
                        required
                      ></select2>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <strong>Temas</strong>
                      <select2 :options="topics" v-model="activities.id_topic" required></select2>
                    </div>
                    <div class="col-md-6">
                      <strong>Tipo de Actividad</strong>
                      <select2 :options="myActivities" v-model="activities.newActivity" required></select2>
                    </div>
                  </div>
                  <!-----------Actividades---------------------------------------------------------------------------->
                  <!--div
                                        v-show="
                                            newActivity == 'Foro' ||
                                                newActivity == 'Chat' ||
                                                newActivity ==
                                                    'Cuestionario V-F' ||
                                                newActivity ==
                                                    'Cuestionario 4 opciones' ||
                                                newActivity ==
                                                    'Mapa conceptual' ||
                                                newActivity == 'Ensayo' ||
                                                newActivity ==
                                                    'Estudio de Caso' ||
                                                newActivity == 'Ejercicios'
                                        "
                  -->
                  <div class="form-group row mx-auto">
                    <div class="col" align="center">
                      <strong>
                        Duracion estimada en
                        plataforma
                      </strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="
                                                    activities.newPlataform
                                                "
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col" align="center">
                      <strong>
                        Duracion estimada trabajo
                        autonomo
                      </strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="activities.newWork"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>
                        Contextualizacion del
                        tema
                      </strong>
                      <a
                        tabindex="0"
                        class="badge badge-info"
                        role="button"
                        data-toggle="popover"
                        data-trigger="focus"
                        title="Contextualizacion del tema"
                        data-content="Redactar la contextualización del tema a la que se va a referir la actividad planteada"
                      >
                        <i class="fas fa-question"></i>
                      </a>
                    </div>
                    <textarea
                      name="welcome"
                      class="form-control"
                      v-model="activities.newTema"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Actividad</strong>
                      <a
                        tabindex="0"
                        class="badge badge-info"
                        role="button"
                        data-toggle="popover"
                        data-trigger="focus"
                        title="Actividad"
                        data-content="Describir de forma clara y sencilla la actividad que debe realizar de acuerdo con el tema y el propósito a evaluar. (referir cuales son los recursos con los que cuenta el estudiante, Ej. Videos, lecturas, vClass y otros)"
                      >
                        <i class="fas fa-question"></i>
                      </a>
                    </div>
                    <textarea
                      name="welcome"
                      class="form-control"
                      v-model="activities.newDescription"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div align="center">
                    <strong>
                      Recursos necesarios para la
                      actividad
                    </strong>
                  </div>
                  <div class="form-group row">
                    <div class="col">
                      <label for="name">Tipo de recursos</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="TR 1."
                        v-model="activities.newTR1"
                        required
                      />
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="TR 2."
                        v-model="activities.newTR2"
                        required
                      />
                      <input
                        type="text"
                        name="name"
                        tabindex
                        class="form-control"
                        placeholder="TR 3."
                        v-model="activities.newTR3"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="name">Origen del recurso</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="OR 1."
                        v-model="activities.newOR1"
                        required
                      />
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="OR 2."
                        v-model="activities.newOR2"
                        required
                      />
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="OR 3."
                        v-model="activities.newOR3"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Entregables</strong>
                      <a
                        tabindex="0"
                        class="badge badge-info"
                        role="button"
                        data-toggle="popover"
                        data-trigger="focus"
                        title="Entregables"
                        data-content="Describir de forma clara y sencilla los entregables que debe enviar el estudiante al tutor de acuerdo con el tema y el propósito a evaluar."
                      >
                        <i class="fas fa-question"></i>
                      </a>
                    </div>
                    <textarea
                      name="welcome"
                      class="form-control"
                      v-model="activities.newFromE"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div align="center">
                    <strong>
                      Criterios de evaluacion /
                      Evidencias asociadas (desempeño,
                      producto y conocimiento)
                    </strong>
                  </div>
                  <div class="form-group mx-auto">
                    <table style="width:100%">
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="activities.newCE1"
                            required
                          />
                        </td>
                        <th rowspan="3">
                          <textarea
                            name="welcome"
                            class="form-control"
                            placeholder="EA 1."
                            v-model="activities.newEA1"
                            required
                          ></textarea>
                        </th>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="activities.newCE2"
                            required
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="activities.newCE3"
                            required
                          />
                        </td>
                      </tr>
                    </table>

                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <!--/div-->
              </tab-content>
              <tab-content title="Planeación didáctica">
                <div class="form-group row mx-auto">
                  <div class="col-md-6">
                    <strong>Tiempo de trabajo</strong>
                    <input
                      type="text"
                      name="timeWork"
                      class="form-control"
                      v-model="activities.newTimeWork"
                      disabled
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col-md-6">
                    <strong>Actividad</strong>
                    <input
                      type="text"
                      name="activity"
                      class="form-control"
                      v-model="activities.newActivity1"
                      disabled
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <strong>Momento de Evaluacion</strong>
                  </div>
                  <div class="col">
                    <strong>Evidencia</strong>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-3">
                    <label for="fromW">Desde</label>
                    <input
                      type="date"
                      name="fromW"
                      class="form-control"
                      v-model="activities.newFromW"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col-md-3">
                    <label for="toW">Hasta</label>
                    <input
                      type="date"
                      name="toW"
                      class="form-control"
                      v-model="activities.newToW"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col-md-3">
                    <label for>Evidencia</label>
                    <input
                      type="text"
                      name="activity"
                      class="form-control"
                      v-model="activities.newEvidence"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col-md-3">
                    <label for>Envío</label>
                    <input
                      type="text"
                      name="activity"
                      class="form-control"
                      v-model="activities.newSend"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group row mx-auto">
                  <div class="col" align="center">
                    <strong>
                      Actor interviniente en la
                      evaluación
                    </strong>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      v-model="activities.newActor"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col" align="center">
                    <strong>Fecha de retroalimentación</strong>
                    <input
                      type="date"
                      name="name"
                      class="form-control"
                      v-model="activities.newRetro"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>

                <div class="modal-footer">
                  <input
                    type="submit"
                    @click.prevent="createActivity"
                    class="btn btn-primary"
                    value="Guardar"
                  />
                </div>
              </tab-content>
              <!--tab-content title="Encuentros sincronicos">
                                <div
                                    class="form-group row mx-auto"
                                    v-for="(input1, k) in inputs1"
                                    :key="k"
                                >
                                    <div class="col-md-6">
                                        <strong
                                            >Nombre del encuentro
                                            sincronico</strong
                                        >
                                        <span>
                                            <a
                                                href="#"
                                                class="badge badge-danger"
                                                @click.prevent="remove1(k)"
                                                v-show="
                                                    k ||
                                                        (!k &&
                                                            inputs1.length > 1)
                                                "
                                                >-</a
                                            >
                                            <a
                                                href="#"
                                                class="badge badge-primary"
                                                @click.prevent="add1(k)"
                                                v-show="k == inputs1.length - 1"
                                                >+</a
                                            >
                                        </span>
                                        <input
                                            type="text"
                                            name="name"
                                            class="form-control"
                                            v-model="inputs1.name"
                                            required
                                        />
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <strong>Tema que se abarca</strong>
                                        <select2
                                            :options="myOptions"
                                            v-model="topic"
                                            required
                                        ></select2>
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-6">
                                        <label for="fromW">Fecha</label>
                                        <input
                                            type="date"
                                            name="fromW"
                                            class="form-control"
                                            v-model="inputs1.date"
                                            required
                                        />
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <label for="toW">Hora inicio</label>
                                        <input
                                            type="date"
                                            name="toW"
                                            class="form-control"
                                            v-model="inputs1.hourI"
                                            required
                                        />
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <label for>Hora final</label>
                                        <select2
                                            :options="myOptions"
                                            v-model="inputs1.hourF"
                                            required
                                        ></select2>
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <a
                                        href="/freeUnit"
                                        class="btn btn-primary float-right"
                                        >Guardar</a
                                    >
                                </div>
              </tab-content-->
            </form-wizard>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
(function() {
  "use strict";
  window.addEventListener(
    "load",
    function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener(
          "submit",
          function(event) {
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
$(function() {
  // Get the form fields and hidden div
  var checkbox = $("#gridCheck1");
  var checkbox1 = $("#gridCheck2");

  var hidden = $("#hidden_fields1");
  var hidden1 = $("#hidden_fields2");

  hidden.hide();
  hidden1.hide();

  checkbox.change(function() {
    if (checkbox.is(":checked")) {
      // Show the hidden fields.

      hidden.show();
    } else {
      hidden.hide();
      checkbox1.show();
    }
  });
  checkbox1.change(function() {
    if (checkbox.is(":checked")) {
      // Show the hidden fields.
      checkbox.disabled = false;
      hidden.show();
    } else {
      hidden.hide();
      checkbox.show();
    }
  });
});
export default {
  data() {
    return {
      inputs1: [
        {
          name: "",
          topics: "",
          hourI: "",
          hourF: "",
          date: ""
        }
      ],
      newPlataform: "",

      units: [],
      subcategories: [],
      topics: [],
      classes: [],
      myOptions: ["On-Line", "Virtual"],
      myActivities: [
        "Foro",
        "Chat",
        "Cuestionario V-F",
        "Cuestionario 4 opciones",
        "Mapa conceptual",
        "Ensayo",
        "Estudio de Caso",
        "Ejercicios"
      ],

      activities: {
        id_course: "",
        id_topic: "",
        id_unit: "",
        newActivity: "",
        newDescription: "",
        newObjetive: "",
        newPlataform: "",
        newWork: "",
        newTema: "",
        newTR1: "",
        newTR2: "",
        newTR3: "",
        newOR1: "",
        newOR2: "",
        newOR3: "",
        newFromW: "",
        newFromE: "",
        newCE1: "",
        newEA1: "",
        newCE2: "",
        newCE3: "",
        newTimeWork: "",
        newActivity1: "",
        newToW: "",
        newEvidence: "",
        newSend: "",
        newActor: "",
        newRetro: ""
      },
      errors: []
    };
  },
  mounted() {
    var url = "GetCourses";
    axios.get(url).then(response => {
      this.classes = response.data;
    });
    console.log("Component mounted.");
  },
  methods: {
    add1(index) {
      this.inputs1.push({
        name: "",
        topics: "",
        hourI: "",
        hourF: "",
        date: ""
      });
    },
    remove1(index) {
      this.inputs1.splice(index, 1);
    },
    createActivity() {
      var url = "activities";
      console.log(this.activities);
      axios
        .post(url, this.activities)
        .then(response => {
          toastr.success("New activity created successfully");
        })
        .catch(error => {
          this.errors = error.response.data;
        });
    },
    getUnits() {
      var url = "GetUnits/" + this.id_course;
      axios.get(url).then(response => {
        this.units = response.data;
      });
    },
    getTopics() {
      var url = "GetTopics/" + this.id_unit;
      axios.get(url).then(response => {
        this.topics = response.data;
      });
    }
  }
};
</script>
<style>
.background2 {
  background: url(../assets/img/Fondo5.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
}
</style>
