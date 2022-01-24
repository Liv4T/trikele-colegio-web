<template>
    <div>
        <!-- <div class="back"> -->
        <div class="row">
            <div class="col-md-12 mx-auto">
                <div class="custom-card text-center">
                    <h3 class="card-header fondo">Mis Cursos</h3>
                    <form class="needs-validation" novalidate>
                        <form-wizard
                            title
                            subtitle
                            color="#ffc107"
                            next-button-text="Siguiente"
                            back-button-text="Atrás"
                            finish-button-text="Guardar y enviar"
                            @on-complete="createSemana"
                        >
                            <tab-content title="Ciclo">
                                <div class="form-group row mx-auto" v-for="(input, t) in inputs" :key="t">
                                    <div class="col-md-6">
                                        <label for="name">Pregunta conductora o nombre</label>
                                        <span>
                                            <a
                                                href="#"
                                                class="badge badge-danger"
                                                @click.prevent="remove(t)"
                                                v-show="t === 0 ? false : true"
                                            >-</a>
                                            <a
                                                href="#"
                                                class="badge badge-primary"
                                                @click.prevent="add(t)"
                                                v-show="t == inputs.length - 1"
                                            >+</a>
                                        </span>
                                        <div>
                                            <input
                                                type="text"
                                                name="objetive1"
                                                class="form-control"
                                                v-on:change="contentUpdateEvent(t,'driving_question')"
                                                v-model="input.driving_question"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                      <label for="bimestre">Seleccione el Bimestre</label>                                      
                                      <select class="form-control" v-model="bimestreId" required>
                                        <option :value="bim.id" v-for="(bim, key) in bimestres" :key="key">
                                          {{ bim.name }}
                                        </option>
                                      </select>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="name">Observación</label>
                                        <textarea name="competences" 
                                            v-on:change="contentUpdateEvent(t,'observation')"
                                        class="form-control" v-model="input.observation"></textarea>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="name">Desarrollo de la clase</label>
                                        <textarea
                                            name="competences"
                                            class="form-control"
                                            v-model="input.class_development"
                                            placeholder="Es la explicacion o sintesis de la clase."
                                            v-on:change="contentUpdateEvent(t,'class_development')"
                                            required
                                        ></textarea>
                                        <div class="invalid-feedback">Please fill out this field</div>
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
import Multiselect from "vue-multiselect";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
Vue.use(VueFormWizard);
Vue.component("multiselect", Multiselect);
export default {
  props: ["id_area", "id_classroom"],
  data() {
    return {
      inputs: [
        {
          driving_question: "",
          class_development: "",
          observation: "",
        },
      ],
      newSemanal: [],

      semanal: false,
      errors: [],
      bimestres:[],
      bimestreId:null,
    };
  },
  mounted() {
    axios.get('bimestres').then((response)=>{
      let bimestresData = response.data;
      bimestresData.forEach(bimestre=>{
        if(bimestre.status === 1){
          this.bimestres.push({
            id: bimestre.id,
            name: bimestre.name
          })
        }        
      })
    })
  },
  methods: {
    contentUpdateEvent(index,property){
      this.inputs[index][property]=this.inputs[index][property].replace(/[^a-zA-Z0-9-.ñáéíóú_*+-/=&%$#!()?¡¿ ]/g, "|");
    },
    add(index) {
      this.inputs.push({
        driving_question: "",
        class_development: "",
        observation: "",
      });
    },
    remove(index) {
      this.inputs.splice(index, 1);
    },
    getMenu() {
      window.location = "/actividad_g";
    },
    createSemana() {
      var url = window.location.origin + "/courseWeekly";
      if (this.inputs.length >= 1) {
        for (let i = 0; i < this.inputs.length; i++) {
          this.newSemanal.push(this.inputs[i]);
        }
      }
      let ids = this.id_area.split('/');
      axios.post(url, {
        //Cursos generales
        id_area: ids[0] ? ids[0] : this.id_area,
        id_classroom: ids[1] ? ids[1] : this.id_classroom,
        semana: this.newSemanal,
        id_bimestre: this.bimestreId
      }).then((response) => {
        this.errors = [];

        toastr.success("Nueva semana creada exitosamente");
          // this.getMenu();
      }).catch((error) => {
        this.errors = error.response;
      });
    },
  },
};
</script>
<style></style>
