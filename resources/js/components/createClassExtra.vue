<template>
  <div>
    <div class="back">
      <div class="back row justify-content-center">
        <div class="col-sm-10">
          <div class="card text-center">
            <h5 class="card-header fondo">Crear clase</h5>
            <form class="needs-validation" novalidate>
              <form-wizard
                title
                subtitle
                color="#233d68"
                next-button-text="Siguiente"
                back-button-text="Atrás"
                finish-button-text="Guardar y enviar"
                @on-complete="createExtracurricular"
              >
                <tab-content title>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="name">Nombre</label>
                      <div>
                        <input type="text" name="objetive1" class="form-control" v-model="name" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label for="name">Descripción</label>
                      <textarea name="competences" class="form-control" v-model="description"></textarea>
                    </div>
                  </div>

                  <div class="form-group row">
                    <div class="col-md-6" v-for="(input, t) in inputs" :key="t">
                      <label for="name">Enlace</label>
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
                      <div>
                        <input
                          type="text"
                          name="objetive1"
                          class="form-control"
                          v-model="input.name"
                        />
                      </div>
                    </div>
                  </div>
                </tab-content>
                <div class="form-group">
                  <a class="btn btn-warning float-left" :href="'/class_extra/'+id_cat">Regresar</a>
                </div>
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
  props: ["id_cat"],
  data() {
    return {
      myOptions: [],
      name: "",
      description: "",
      errors: [],
      fillS: [],
      nameWeekly: "",
      nameArea: "",
      inputs: [
        {
          name: "",
        },
      ],
      extras: [],
    };
  },
  mounted() {},
  methods: {
    getMenu() {
      window.location = window.location.origin + "/class_extra/" + this.id_cat;
    },
    createExtracurricular() {
      var url = window.location.origin + "/saveClassExtra";
      this.extras = [];
      if (this.inputs.length >= 1) {
        for (let i = 0; i < this.inputs.length; i++) {
          this.extras.push(this.inputs[i]);
        }
      }
      axios
        .post(url, {
          id_category: this.id_cat,
          name: this.name,
          description: this.description,
          urls: this.extras,
        })
        .then((response) => {
          this.errors = [];

          toastr.success("Creado exitosamente");
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
  },
};
</script>
<style></style>
