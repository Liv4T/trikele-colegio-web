<template>
  <div>
    <div class="back">
      <div class="row">
        <div class="col-md-11 mx-auto">
          <div class="custom-card text-center">
            <h3 class="card-header fondo">Importación</h3>
            <form class="needs-validation" novalidate>
              <form-wizard
                title
                subtitle
                color="#ffc107"
                next-button-text="Siguiente"
                back-button-text="Atrás"
                finish-button-text="Finalizar"
                @on-complete="getMenu()"
              >
                <tab-content>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <label for>Rol:</label>
                      <select class="form-control" ref="seleccionado" required>
                        <option value="4">Coordinador</option>
                        <option value="2">Docente</option>
                        <option value="3">Estudiante</option>
                      </select>
                    </div>

                    <div class="col-md-6">
                      <label for="name">Archivo</label>
                      <div>
                        <input
                          type="file"
                          name="picture"
                          class="form-control"
                          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                          @change="onFlieChange"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div class="modal-footer">
                    <a href="/import" class="btn btn-warning float-right">Importar</a>
                  </div>
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
      allowedExtensions: ["xlsx"],
    };
  },
  mounted() {},
  methods: {
    getMenu() {
      window.location = "/salon_adm";
    },
    onFlieChange(file) {
      let files = file.target.files || file.dataTransfer.files;
      let data = new FormData();
      if (files.length > 0) {
        let file = files[0];
        let filename = file.name;
        let filesize = file.size;
        let extension = this.findExtension(filename);

        // if uploaded file is valid with validation rules
        if (this.validateFile(filesize, extension)) {
          data.append("file", files[0]);

          axios.post("/documentoimp", data).then((response) => {
            this.emitMessage(response);
          });
        }
      }
    },
    /**
     * show error messages
     * @param  {string} title
     * @param  {string} message
     * @return {void}
     */ showError(title, message) {
      swal({
        title: title,
        text: message,
        type: "error",
        confirmButtonText: "Ok",
      });
    },
    /**
     * find extension of uploaded file
     * @param  {string} filename
     * @return {string}
     */
    findExtension(filename) {
      return filename.split(".").pop().toLowerCase();
    },
    /**
     * to validate file size
     * @param  {integer} filesize
     * @return {boolean}
     */
    validateSize(filesize) {
      // 2*1024*1024 = 2097152 = 2mb
      if (filesize > 2097152) {
        this.title = "File size limit exceed!";
        this.message = "Please upload file less than 2MB.";
        this.showError(this.title, this.message);
        return false;
      }
      return true;
    },
    /**
     * to validate file extension
     * @param  {string} extension
     * @return {bolean}
     */
    validateExtension(extension) {
      if ($.inArray(extension, this.allowedExtensions) !== -1) {
        return true;
      } else {
        this.title = "Invalid file!";
        this.message = "Please upload jpg,png,pdf or doc file only.";
        this.showError(this.title, this.message);
        return false;
      }
    },
    /**
     * validate file
     * @param  {integer} filesize
     * @param  {string} extension
     * @return {boolean}
     */
    validateFile(filesize, extension) {
      if (this.validateSize(filesize) && this.validateExtension(extension)) {
        return true;
      } else {
        return false;
      }
    },
    emitMessage(response) {
      let message = response.data.output.message;
      let user = response.data.output.user;
      if (message) {
        this.$emit("messagesent", {
          message: message.message,
          user: user.name,
          time: message.created_at,
          image_path: $("#default_image").val(), //user.image_path,
          type: message.type,
          file_path: message.file_path,
          file_name: message.file_name,
        });
        console.log(message.file_path);
      }
    },
    chooseFile() {
      $("#file").click();
    },
  },
};
</script>
<style></style>
