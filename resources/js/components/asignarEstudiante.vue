<template>
  <div>
    <div class="back">
      <div class="row">
        <div class="col-md-11 mx-auto">
          <div class="custom-card text-center">
            <h3 class="card-header fondo">Perfiles</h3>
            <form class="needs-validation" novalidate>
              <form-wizard
                title
                subtitle
                color="#ffc107"
                next-button-text="Siguiente"
                back-button-text="Atrás"
                finish-button-text="Guardar y enviar"
                @on-complete="createAs"
              >
                <tab-content>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <label for>Rol:</label>
                      <select class="form-control" v-model="Newrol" required>
                        <option value="3">Estudiante</option>
                      </select>
                    </div>

                    <div class="col-md-6">
                      <label for="name">Salon</label>
                      <div>
                        <select class="form-control" v-model="seccion" required>
                          <option :value="option.id" v-for="option in myOptions">
                            {{
                            option.clasroom
                            }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label for="name">Nombre</label>
                      <multiselect
                        v-model="cestudiante"
                        :options="optionse"
                        tag-placeholder="Add this as new tag"
                        placeholder="Search or add a tag"
                        label="name"
                        track-by="id"
                        :multiple="true"
                        :taggable="true"
                        @tag="addTage"
                      ></multiselect>
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
  data() {
    return {
      myOptions: [],
      optionse: [],
      nameUnit: "",
      description: "",
      nameFile: "",
      nameUrl: "",
      newDocument: [],
      semanal: false,
      Newrol: "",
      errors: [],
      seccion: "",
      cestudiante: [],
      estudiantes: [],
      inputs: [
        {
          name: "",
        },
      ],
    };
  },
  mounted() {
    var urlUsers = "getStudents";
    axios.get(urlUsers).then((response) => {
      this.optionse = response.data;
    });
    var urlUsers = "getClassroom";
    axios.get(urlUsers).then((response) => {
      this.myOptions = response.data;
    });
  },
  methods: {
    addTage(newTag) {
      const tag = {
        name: newTag,
        id: newTag,
      };
      this.optionse.push(tag);
    },
    getMenu() {
      window.location = "/salon_adm";
    },
    createAs() {
      var url = "assignStudents";

      if (this.cestudiante.length >= 1) {
        for (let i = 0; i < this.cestudiante.length; i++) {
          this.estudiantes.push(this.cestudiante[i].id);
        }
      }
      axios
        .post(url, {
          users: this.estudiantes,
          id_classroom: this.seccion,
        })
        .then((response) => {
          this.errors = [];

          toastr.success("Nueva asignación creada exitosamente");
          this.getMenu();
        })
        .catch((error) => {
          this.errors = error.response.data;
        });
    },
  },
};
</script>
<style></style>
