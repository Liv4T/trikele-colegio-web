<template>
  <div>
    <div class="back">
      <div class="row">
        <div class="col-md-11 mx-auto">
          <div class="custom-card text-center">
            <h3 class="card-header fondo">Mis clases</h3>
            <span class="classroom-label">{{ nameArea }}</span>
            <form class="needs-validation" novalidate>
              <form-wizard
                title
                subtitle
                color="#ffc107"
                next-button-text="Siguiente"
                back-button-text="Atrás"
                finish-button-text="Guardar y enviar"
                @on-complete="createSemanal"
              >
                <tab-content title="Clase">
                  <div class="form-group mx-auto">
                    <div align="center">
                      <div class="col-md-6">
                        <label for>Ciclo:</label>
                        <select class="form-control" ref="seleccionado" required>
                          <option :value="option.id" v-for="option in myOptions">{{ option.text }}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <label for="name">*Nombre</label>
                      <div>
                        <input
                          type="text"
                          name="objetive1"
                          class="form-control"
                          v-model="nameUnit"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label for="name">*Descripción</label>
                      <textarea
                        name="competences"
                        class="form-control"
                        v-model="description"
                        placeholder="Es la explicacion o sintesis de la clase."
                        required
                      ></textarea>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div v-show="nameUnit != ''">
                    <div class="form-group mx-auto">Material de apoyo</div>
                    <div class="form-group row">
                      <div class="col-md-6">
                        <label for="name">
                          Nombre del
                          documento
                        </label>
                        <input type="text" name="objetive1" class="form-control" v-model="nameFile" />
                      </div>
                      <div class="col-md-6">
                        <label for="name">Documento</label>
                        <input
                          type="file"
                          name="document"
                          class="form-control"
                          @change="onFlieChange"
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="name">Documento</label>
                        <input
                          type="file"
                          name="document"
                          class="form-control"
                          @change="onFlieChange1"
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="name">Documento</label>
                        <input
                          type="file"
                          name="document"
                          class="form-control"
                          @change="onFlieChange2"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-md-6">
                        <label for="name">Enlace</label>
                        <input
                          type="text"
                          name="objetive1"
                          class="form-control"
                          v-model="nameUrl"
                          required
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="name">Enlace</label>
                        <input type="text" name="objetive1" class="form-control" v-model="nameUrl1" />
                      </div>
                      <div class="col-md-6">
                        <label for="name">Enlace</label>
                        <input type="text" name="objetive1" class="form-control" v-model="nameUrl2" />
                      </div>
                      <div class="col-md-6">
                        <label for="name">Enlace Video (Youtube)</label>
                        <input type="text" name="objetive1" class="form-control" v-model="newVideo" />
                      </div>
                      <div class="col-md-6">
                        <label for="name">Enlace Video (Youtube)</label>
                        <input
                          type="text"
                          name="objetive1"
                          class="form-control"
                          v-model="newVideo1"
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="name">Enlace Video (Youtube)</label>
                        <input
                          type="text"
                          name="objetive1"
                          class="form-control"
                          v-model="newVideo2"
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="name">
                          Intensidad horaria de
                          trabajo
                        </label>
                        <div>
                          <input
                            type="number"
                            name="objetive1"
                            class="form-control"
                            v-model="numero"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <strong>* Campos requeridos</strong>
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
  props: ["id_area", "id_classroom"],
  data() {
    return {
      myOptions: [],
      nameUnit: "",
      description: "",
      nameFile: "",
      nameUrl: "",
      nameUrl1: "",
      nameUrl2: "",
      newDocument: [],
      newDocument1: [],
      newDocument2: [],
      semanal: false,
      newVideo: "",
      newVideo1: "",
      newVideo2: "",
      numero: "",
      nameArea: "",
      errors: [],
    };
  },
  mounted() {
    var url =
      window.location.origin +
      "/GetNameArea/" +
      this.id_area +
      "/" +
      this.id_classroom;
    axios.get(url).then((response) => {
      this.nameArea = response.data;
    });
    var urlsel =
      window.location.origin +
      "/editOneWeek/" +
      this.id_area +
      "/" +
      this.id_classroom;
    axios.get(urlsel).then((response) => {
      this.myOptions = response.data;
    });
    this.messageVideo = "";
  },
  methods: {
    getMenu() {
      window.location = "/clases_d";
    },
    createSemanal() {
      var url = window.location.origin + "/Class";
      this.seleccionado = this.$refs.seleccionado.value;

      axios
        .post(url, {
          //Cursos generales
          id_weekly_plan: this.seleccionado,
          name: this.nameUnit,
          description: this.description,
          name_document: this.nameFile,
          document: this.newDocument,
          document1: this.newDocument1,
          document2: this.newDocument2,
          url: this.nameUrl,
          url1: this.nameUrl1,
          url2: this.nameUrl2,
          video: this.newVideo,
          video1: this.newVideo1,
          video2: this.newVideo2,
          hourly_intensity: this.numero,
        })
        .then((response) => {
          this.errors = [];

          toastr.success("Nueva clase creada exitosamente");
          this.getMenu();
        })
        .catch((error) => {
          this.errors = error.response.data;
        });
    },
    onFlieChange(file) {
      let files = file.target.files || file.dataTransfer.files;
      let data = new FormData();
      if (files.length > 0) {
        let file = files[0];

        // if uploaded file is valid with validation rules

        data.append("file", files[0]);
        data.append("name", this.nameUnit);
        data.append("count", 1);
        this.newDocument = data;

        axios.post("/fileDocument", data).then((response) => {
          this.emitMessage(response);
        });
      }
    },
    onFlieChange1(file) {
      let files = file.target.files || file.dataTransfer.files;
      let data = new FormData();
      if (files.length > 0) {
        let file = files[0];

        // if uploaded file is valid with validation rules

        data.append("file", files[0]);
        data.append("name", this.nameUnit);
        data.append("count", 2);
        this.newDocument1 = data;

        axios.post("/fileDocument", data).then((response) => {
          this.emitMessage(response);
        });
      }
    },
    onFlieChange2(file) {
      let files = file.target.files || file.dataTransfer.files;
      let data = new FormData();
      if (files.length > 0) {
        let file = files[0];

        // if uploaded file is valid with validation rules

        data.append("file", files[0]);
        data.append("name", this.nameUnit);
        data.append("count", 3);
        this.newDocument2 = data;

        axios.post("/fileDocument", data).then((response) => {
          this.emitMessage(response);
        });
      }
    },

    updateSemanal() {
      var url = "updateCourseWeekly";

      if (this.fillS.length >= 1) {
        for (let i = 0; i < this.fillS.length; i++) {
          this.newSemanal.push(this.fillS[i]);
        }
      }
      axios
        .put(url, {
          //Cursos generales
          id_materia: "1",
          semana: this.newSemanal,
        })
        .then((response) => {
          this.errors = [];

          toastr.success("Actualizado plan semanal exitosamente");
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
