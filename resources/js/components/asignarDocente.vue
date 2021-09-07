<template>
  <div>
    <div class="back">
      <div class="row">
        <div class="col-md-11 mx-auto">
          <div class="card-container">
            <div class="custom-card text-center">
              <div class="card-header">
                <h3>Perfiles</h3>
              </div>
              <form class="needs-validation" novalidate>
                <form-wizard title subtitle color="#ffc107" next-button-text="Siguiente" back-button-text="Atrás" finish-button-text="Guardar y enviar" @on-complete="createAs">
                  <tab-content>
                    <div class="form-group row mx-auto">
                      <div class="col-md-6">
                        <label for>Docente:</label>
                        <select class="form-control" v-model="user_id" required>
                          <option :value="option.id" v-for="(option, key) in myOptions" :key="key">{{ option.name+' ' +option.last_name+' (Docente)'}}</option>
                        </select>
                      </div>

                      <div class="col-md-6">
                        <label for="name">Salones</label>

                        <div>
                          <multiselect v-model="salon" :options="optionse" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="clasroom" track-by="id" :multiple="true" :taggable="true" @tag="addTage"></multiselect>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <label for="name">Materias</label>
                        <multiselect v-model="materia" :options="materias" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="area" track-by="id" :multiple="true" :taggable="true" @tag="addTagM"></multiselect>
                        <div class="invalid-feedback">Please fill out this field</div>
                      </div>
                    </div>
                  </tab-content>
                </form-wizard>
              </form>
            </div>
          </div>
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
    var hidden = $("#hidden_fields1");

    hidden.hide();

    checkbox.change(function() {
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
        materia: [],
        salon: [],
        nameUnit: "",
        description: "",
        textoM: "",
        errors: [],
        seccion: "",
        salones: [],
        materias: [],
        area: [],
        classroom: [],
        user_id: "",
        myOptions: [],
        optionse: [],
        inputs: [
          {
            name: "",
          },
        ],
      };
    },
    mounted() {
      var urlUs = "getTeachers";
      axios.get(urlUs).then((response) => {
        this.myOptions = response.data;
      });
      var urlUsers = "getArea";
      axios.get(urlUsers).then((response) => {
        this.materias = response.data;
      });
      var urlUser = "getClassroom";
      axios.get(urlUser).then((response) => {
        this.optionse = response.data;
      });
    },
    methods: {
      add(index) {
        this.inputs.push({
          name: "",
        });
      },
      remove(index) {
        this.inputs.splice(index, 1);
      },
      addTage(newTag) {
        const tag = {
          clasroom: newTag,
          id: newTag,
        };
        this.optionse.push(tag);
      },
      addTagM(newTag) {
        const tag = {
          area: newTag,
          id: newTag,
        };
        this.materias.push(tag);
      },
      getMenu() {
        window.location = "/salon_adm";
      },

      createAs() {
        var url = "assignTeachers";

        if (this.materia.length >= 1) {
          for (let i = 0; i < this.materia.length; i++) {
            this.area.push(this.materia[i].id);
          }
        }
        if (this.salon.length >= 1) {
          for (let i = 0; i < this.salon.length; i++) {
            this.classroom.push(this.salon[i].id);
          }
        }
        axios
          .post(url, {
            //Cursos generales
            classroom: this.classroom,
            areas: this.area,
            id_teacher: this.user_id,
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
