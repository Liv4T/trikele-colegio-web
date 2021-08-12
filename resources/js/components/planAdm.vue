<template>
  <div>
    <head>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/solid.css" integrity="sha384-ioUrHig76ITq4aEJ67dHzTvqjsAP/7IzgwE7lgJcg2r7BRNGYSK0LwSmROzYtgzs" crossorigin="anonymous" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/brands.css" integrity="sha384-i2PyM6FMpVnxjRPi0KW/xIS7hkeSznkllv+Hx/MtYDaHA5VcF0yL3KVlvzp8bWjQ" crossorigin="anonymous" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/fontawesome.css" integrity="sha384-sri+NftO+0hcisDKgr287Y/1LVnInHJ1l+XC7+FOabmTTIK0HnE2ID+xxvJ21c5J" crossorigin="anonymous" />
    </head>
    <div class="back">
      <div class="row">
        <div class="col-md-10 mx-auto">
          <div class="card-container">
            <div class="custom-card text-center">
              <div class="card-header">
                <h3>Planificación general</h3>
              </div>
              <form class="needs-validation" novalidate v-show="trimestre == false">
                <form-wizard title subtitle color="#ffc107" next-button-text="Siguiente" back-button-text="Atrás" finish-button-text="Guardar y enviar" @on-complete="createCourses">
                  <tab-content title="Anual">
                    <div class="form-group mx-auto">
                      <div align="center">
                        <strong>Logro 1</strong>
                        <!-- <a
                      tabindex="0"
                      class="badge badge-info"
                      role="button"
                      data-toggle="popover"
                      data-trigger="focus"
                      title="Logro"
                      data-content="Es un texto redactado de manera cordial, cálida, precisa y breve cumpliendo como objetivo dar la bienvenida al curso e invitar al estudiante a su recorrido y cumplimiento de los objetivos propuestos. Parte importante del mismo es hacer explícita la disposición del tutor en colaborar, apoyar y acompañar el proceso educativo."
                    >
                      <i class="fas fa-question"></i>
                    </a>-->
                      </div>
                      <textarea name="welcome" class="form-control" v-model="newLogro1" required></textarea>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="form-group mx-auto">
                      <div align="center">
                        <strong>Logro 2</strong>
                      </div>
                      <textarea name="intentioned" class="form-control" v-model="newLogro2" required></textarea>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="form-group mx-auto">
                      <div align="center">
                        <strong>Logro 3</strong>
                      </div>
                      <textarea name="intentioned" class="form-control" v-model="newLogro3" required></textarea>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="form-group mx-auto">
                      <div align="center">
                        <strong>Logro 4</strong>
                      </div>
                      <textarea name="competences" class="form-control" v-model="newLogro4" required></textarea>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </tab-content>
                  <tab-content title="Trimestral">
                    <div class="form-group row mx-auto" v-for="(input, t) in inputs" :key="t">
                      <div class="col-md-6">
                        <label for="name">Unidad</label>
                        <span>
                          <a href="#" class="badge badge-danger" @click.prevent="remove(t)" v-show="t || (!t && inputs.length > 1)">-</a>
                          <a href="#" class="badge badge-primary" @click.prevent="add(t)" v-show="t == inputs.length - 1">+</a>
                        </span>
                        <div>
                          <input type="text" name="objetive1" class="form-control" v-model="input.name" placeholder="Nombre de la unidad" required />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <label for="name">Contenido</label>
                        <textarea name="competences" class="form-control" v-model="input.contenido" placeholder="Es la explicacion o sintesis de la unidad." required></textarea>
                        <div class="invalid-feedback">Please fill out this field</div>
                      </div>
                    </div>
                    <!-- <div class="modal-footer">
                  <a submit="createCourses" class="btn btn-warning float-right">Guardar</a>
                </div>-->
                  </tab-content>
                </form-wizard>
              </form>
              <form v-show="trimestre == true">
                <form-wizard title subtitle color="#ffc107" next-button-text="Siguiente" back-button-text="Atrás" finish-button-text="Guardar" @on-complete="updateCourses">
                  <tab-content title="Anual">
                    <div>
                      <div class="form-group mx-auto">
                        <div align="center">
                          <strong>
                            Logro 1&nbsp;&nbsp; 20%&nbsp;&nbsp;&nbsp;
                            <button onclick="confirm('Seguro de confirmar el cumplimiento del logro')" type="submit" class="btn btn-outline-success btn-sm">
                              <i class="fas fa-check-circle"></i>
                            </button>
                            <button onclick="confirm('Esta seguro?')" type="submit" class="btn btn-outline-danger btn-sm">
                              <i class="fas fa-times-circle"></i>
                            </button>
                          </strong>
                        </div>
                        <textarea name="welcome" class="form-control" v-model="logro_1"></textarea>
                        <div class="invalid-feedback">Please fill out this field</div>
                      </div>
                      <div class="form-group mx-auto">
                        <div align="center">
                          <strong>
                            Logro 2 &nbsp;&nbsp; 40%&nbsp;&nbsp;&nbsp;
                            <button onclick="confirm('Seguro de confirmar el cumplimiento del logro')" type="submit" class="btn btn-outline-success btn-sm">
                              <i class="fas fa-check-circle"></i>
                            </button>
                            <button onclick="confirm('Esta seguro?')" type="submit" class="btn btn-outline-danger btn-sm">
                              <i class="fas fa-times-circle"></i>
                            </button>
                          </strong>
                        </div>
                        <textarea name="welcome" class="form-control" v-model="logro_2"></textarea>
                        <div class="invalid-feedback">Please fill out this field</div>
                      </div>
                      <div class="form-group mx-auto">
                        <div align="center">
                          <strong>
                            Logro 3 &nbsp;&nbsp; 20%&nbsp;&nbsp;&nbsp;
                            <button onclick="confirm('Seguro de confirmar el cumplimiento del logro')" type="submit" class="btn btn-outline-success btn-sm">
                              <i class="fas fa-check-circle"></i>
                            </button>
                            <button onclick="confirm('Esta seguro?')" type="submit" class="btn btn-outline-danger btn-sm">
                              <i class="fas fa-times-circle"></i>
                            </button>
                          </strong>
                        </div>
                        <textarea name="welcome" class="form-control" v-model="logro_3"></textarea>
                        <div class="invalid-feedback">Please fill out this field</div>
                      </div>
                      <div class="form-group mx-auto">
                        <div align="center">
                          <strong>
                            Logro 4 &nbsp;&nbsp; 20%&nbsp;&nbsp;&nbsp;
                            <button onclick="confirm('Seguro de confirmar el cumplimiento del logro')" type="submit" class="btn btn-outline-success btn-sm">
                              <i class="fas fa-check-circle"></i>
                            </button>
                            <button onclick="confirm('Esta seguro?')" type="submit" class="btn btn-outline-danger btn-sm">
                              <i class="fas fa-times-circle"></i>
                            </button>
                          </strong>
                        </div>
                        <textarea name="welcome" class="form-control" v-model="logro_4"></textarea>
                        <div class="invalid-feedback">Please fill out this field</div>
                      </div>
                      <div class="form-group mx-auto">
                        <div align="center">
                          <strong>Observación</strong>
                        </div>
                        <textarea name="welcome" class="form-control" v-model="observation" placeholder="Comentarios"></textarea>
                        <div class="invalid-feedback">Please fill out this field</div>
                      </div>
                    </div>
                  </tab-content>
                  <tab-content title="Trimestral">
                    <div class="form-group row mx-auto" v-for="(input, t) in fillC.quaterly" :key="t">
                      <div class="col-md-6">
                        <label for="name">
                          Unidad &nbsp;&nbsp;&nbsp;
                          <button onclick="confirm('Seguro de confirmar el cumplimiento del logro')" type="submit" class="btn btn-outline-success btn-sm">
                            <i class="fas fa-check-circle"></i>
                          </button>
                          <button onclick="confirm('Esta seguro?')" type="submit" class="btn btn-outline-danger btn-sm">
                            <i class="fas fa-times-circle"></i>
                          </button>
                        </label>
                        <div>
                          <input type="text" name="objetive1" class="form-control" v-model="input.unit_name" placeholder="Nombre de la unidad" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <label for="name">Contenido</label>
                        <textarea name="competences" class="form-control" v-model="input.content" placeholder="Es la explicacion o sintesis de la unidad."></textarea>
                        <div class="invalid-feedback">Please fill out this field</div>
                      </div>
                      <div class="col-md-6">
                        <label for="name">Observación</label>
                        <textarea name="competences" class="form-control" v-model="input.observation" placeholder="Comentarios"></textarea>
                        <div class="invalid-feedback">Please fill out this field</div>
                      </div>
                    </div>
                    <!-- <div class="modal-footer">
                  <a submit="createCourses" class="btn btn-warning float-right">Guardar</a>
                </div>-->
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
  import "vue-form-wizard/dist/vue-form-wizard.min.css";
  Vue.use(VueFormWizard);
  export default {
    data() {
      return {
        inputs: [
          {
            name: "",
            contenido: "",
            observation: "",
          },
        ],
        newTrimestre: [],
        observation: "",
        newLogro1: "",
        newLogro2: "",
        newLogro3: "",
        newLogro4: "",
        newTrimestre: [],
        trimestre: false,
        logro_1: "",
        logro_2: "",
        logro_3: "",
        logro_4: "",
        fillC: [],
        anual: [],
        newAnual: [],
        errors: [],
      };
    },
    mounted() {
      var urlsel = "Courses";
      axios.get(urlsel).then((response) => {
        this.fillC = response.data;
        if (this.fillC.courses.length > 0) {
          this.trimestre = true;
          for (let i = 0; i < this.fillC.courses.length; i++) {
            this.logro_1 = this.fillC.courses[i].achievement_1;
            this.logro_2 = this.fillC.courses[i].achievement_2;
            this.logro_3 = this.fillC.courses[i].achievement_3;
            this.logro_4 = this.fillC.courses[i].achievement_4;
          }
        }
      });
    },
    methods: {
      getMenu() {
        window.location = "/planificacion";
      },
      add(index) {
        this.inputs.push({ name: "", contenido: "" });
      },
      remove(index) {
        this.inputs.splice(index, 1);
      },

      createCourses() {
        var url = "Courses";

        if (this.inputs.length >= 1) {
          for (let i = 0; i < this.inputs.length; i++) {
            this.newTrimestre.push(this.inputs[i]);
          }
        }

        axios
          .post(url, {
            //Cursos generales
            materia: "1",
            logro1: this.newLogro1,
            logro2: this.newLogro2,
            logro3: this.newLogro3,
            logro4: this.newLogro4,
            trimestre: this.newTrimestre,
          })
          .then((response) => {
            this.errors = [];

            toastr.success("Nuevo plan general creado exitosamente");
            this.getMenu();
          })
          .catch((error) => {
            this.errors = error.response.data;
          });
      },
      updateCourses() {
        window.location = "/planificacion";
      },
    },
  };
</script>
<style></style>
