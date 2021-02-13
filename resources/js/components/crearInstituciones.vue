<template>
  <div>
    <div class="back">
      <div class="row">
        <div class="col-md-11 mx-auto">
          <div class="custom-card text-center">
            <h3 class="card-header fondo">Instituciones</h3>
            <form class="needs-validation" novalidate>
              <form-wizard
                title
                subtitle
                color="#ffc107"
                next-button-text="Siguiente"
                back-button-text="Atrás"
                finish-button-text="Guardar y enviar"
                @on-complete="createInstitution"
              >
                <tab-content title="Institución">
                  <div class="form-group mx-auto">
                    <div align="center">
                      <div class="col-md-6">
                        <label for>Nombre:</label>
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
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="name">Departamento</label>
                      <div>
                        <select
                          class="form-control"
                          ref="state1"
                          v-model="state"
                          @input="getCity()"
                          required
                        >
                          <option
                            :value="option.id_state"
                            v-for="option in myOptions"
                          >{{ option.name }}</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label for="name">Municipio/Ciudad</label>
                      <select class="form-control" v-model="city" required>
                        <option :value="option.id" v-for="option in myOptions2">{{ option.text }}</option>
                      </select>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="name">Dirección de sede</label>
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="address"
                        required
                      />
                    </div>
                    <div class="col-md-6" v-for="(input, t) in inputs" :key="t">
                      <label for="name">Sección</label>
                      <span>
                        <a
                          href="#"
                          class="badge badge-danger"
                          @click.prevent="remove(t)"
                          v-show="
                                                        t ||
                                                            (!t &&
                                                                inputs.length >
                                                                    1)
                                                    "
                        >-</a>
                        <a
                          href="#"
                          class="badge badge-primary"
                          @click.prevent="add(t)"
                          v-show="
                                                        t == inputs.length - 1
                                                    "
                        >+</a>
                      </span>
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="input.name"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="name">Streaming</label>
                      <select
                        class="form-control"
                        ref="seleccionadoStreaming"
                        v-model="streaming"
                        @change="mensaje()"
                        required
                      >
                        <option value="1">Google Meet</option>
                        <option value="2">Zoom</option>
                        <option value="3">Microsoft Teams</option>
                        <option value="4">Otro</option>
                      </select>

                      <br />
                      <p style="color:orange;">{{ textoM }}</p>
                    </div>
                    <div class="col-md-6">
                      <label for="name">Año</label>
                      <input
                        type="number"
                        name="objetive1"
                        class="form-control"
                        v-model="year"
                        required
                      />
                    </div>
                  </div>

                  <div class="row" v-for="(input1, k) in inputs1" :key="k">
                    <div class="col-md-6">
                      <label for="name">Periodos</label>
                      <span>
                        <a
                          href="#"
                          class="badge badge-danger"
                          @click.prevent="remove1(k)"
                          v-show="
                                                        k ||
                                                            (!k &&
                                                                inputs1.length >
                                                                    1)
                                                    "
                        >-</a>
                        <a
                          href="#"
                          class="badge badge-primary"
                          @click.prevent="add1(k)"
                          v-show="
                                                        k == inputs1.length - 1
                                                    "
                        >+</a>
                      </span>
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="input1.name"
                        required
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="name">Desde</label>
                      <input
                        type="date"
                        name="objetive1"
                        class="form-control"
                        v-model="input1.date_from"
                        required
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="name">Hasta</label>
                      <input
                        type="date"
                        name="objetive1"
                        class="form-control"
                        v-model="input1.date_to"
                        required
                      />
                    </div>
                  </div>

                  <!-- <div class="modal-footer">
                    <a href="#" class="btn btn-warning float-right">Guardar</a>
                  </div>-->
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

import VueFormWizard from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
Vue.use(VueFormWizard);
export default {
  data() {
    return {
      myOptions: [],
      myOptions2: [],
      name: "",
      city: "",
      state: "",
      address: "",
      streaming: "",
      semanal: false,
      seleccionadoStreaming: "",
      textoM: "",
      errors: [],
      year: "",
      section: [],
      period: [],
      inputs: [
        {
          name: "",
        },
      ],
      inputs1: [
        {
          name: "",
          date_from: "",
          date_to: "",
        },
      ],
    };
  },
  mounted() {
    var urlsel = "getState";
    axios.get(urlsel).then((response) => {
      this.myOptions = response.data;
      console.log(this.myOptions);
    });
  },
  methods: {
    getMenu() {
      window.location = "/instituciones_adm";
    },
    mensaje() {
      this.seleccionadoStreaming = this.$refs.seleccionadoStreaming.value;
      if (this.seleccionadoStreaming != 1) {
        this.textoM = "Recomendamos el uso de Google Meet como streaming";
        console.log("aqui");
      } else {
        this.textoM = "";
      }
    },

    createInstitution() {
      var url = "createInstitution";

      if (this.inputs.length >= 1) {
        for (let i = 0; i < this.inputs.length; i++) {
          this.section.push(this.inputs[i]);
        }
      }
      if (this.inputs1.length >= 1) {
        for (let i = 0; i < this.inputs1.length; i++) {
          this.period.push(this.inputs1[i]);
        }
      }

      axios
        .post(url, {
          //Cursos generales
          name: this.name,
          state: this.state,
          city: this.city,
          streaming: this.streaming,
          year: this.year,
          address: this.address,
          sections: this.section,
          periods: this.period,
        })
        .then((response) => {
          this.errors = [];

          toastr.success("Nueva institución creada exitosamente");
          this.getMenu();
        })
        .catch((error) => {
          this.errors = error.response.data;
        });
    },

    add(index) {
      this.inputs.push({
        name: "",
      });
    },
    remove(index) {
      this.inputs.splice(index, 1);
    },
    add1(index) {
      this.inputs1.push({
        name: "",
      });
    },
    remove1(index) {
      this.inputs1.splice(index, 1);
    },
    getCity() {
      var urlse = "getCity/" + this.$refs.state1.value;
      axios.get(urlse).then((response) => {
        this.myOptions2 = response.data;
        console.log(this.myOptions2);
      });
    },
  },
};
</script>
<style></style>
