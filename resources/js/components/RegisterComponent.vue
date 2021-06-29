<template>
  <div class="backg">
    <div class="row">
      <div class="col-md-11 mx-auto">
        <div class="custom-card text-center">
          <h3 class="card-header fondo">Registro</h3>
          <form class="needs-validation" novalidate>
            <form-wizard title subtitle color="#ffc107" next-button-text="Siguiente" back-button-text="Atrás" finish-button-text="Guardar y enviar" @on-complete="createNames">
              <tab-content title="Datos personales" icon="fas fa-user">
                <div class="card-body">
                  <div class="form-group row">
                    <div class="col">
                      <label for="name">Nombre</label>
                      <input type="text" name="name" v-model="newName" class="form-control" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="last_name">Apellido</label>
                      <input type="text" name="last_name" class="form-control" v-model="newLastName" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col">
                      <label for="name">Email</label>
                      <input type="text" name="email" class="form-control" v-model="newEmail" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="name">Nombre de Usuario</label>
                      <input type="text" name="user_name" class="form-control" maxlength="20" v-model="newUserName" required />
                      <div class="invalid-feedback">Please fill out this field, the user name may not be greater than 20 characters.</div>
                    </div>
                  </div>
                </div>
              </tab-content>
              <tab-content title="Información adicional" icon="fas fa-id-card">
                <div class="form-group row">
                  <div class="col">
                    <label for>Tipo de Usuario</label>

                    <select class="form-control" ref="seleccionado" required>
                      <option value="2">Docente</option>
                      <option value="3">Estudiante</option>
                    </select>
                  </div>
                  <div class="col">
                    <label for="name">Teléfono</label>
                    <input type="text" name="phone" class="form-control" v-model="newPhone" required />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <label for="name">Número de Identificación</label>
                    <input type="text" name="id_number" class="form-control" maxlength="15" v-model="newId_number" required />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col">
                    <label for="name">Foto</label>
                    <input type="file" name="picture" class="form-control" accept="image/*" @change="onFlieChange" required />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <label for="name">Contraseña</label>
                    <input id="password1" type="password" class="form-control" v-model="newPassword" required />
                  </div>
                  <div class="col">
                    <label for="name">Confirmar contraseña</label>
                    <input type="password" id="password2" class="form-control" required />
                    <p class="alertaPass" id="validate-status"></p>
                  </div>
                </div>
                <div class="form-group row mx-auto">
                  <label for="name">Dirección</label>
                  <input type="text" name="address" id="validationDefault03" class="form-control" v-model="newAddress" required />
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group row">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" required />
                    <label class="form-check-label" for="gridCheck">Para todos los efectos legales, certifico que todas las respuestas e información anotadas por mí, en el presente formulario son veraces (C. S. T.) Art. 62 Núm. 1° Régimen Laboral Colombiano § 1057 (Legis).</label>
                  </div>
                </div>
                <!-- <div class="modal-footer">
                  <input type="submit" class="btn btn-warning" value="Guardar" />
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
$(document).ready(function () {
  $("#password2").keyup(validate);
});

function validate() {
  var password1 = $("#password1").val();
  var password2 = $("#password2").val();

  if (password1 == password2) {
    $("#validate-status").text("");
  } else {
    $("#validate-status").text("La contraseña no coincide");
  }
}
import VueFormWizard from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
Vue.use(VueFormWizard);
import "toastr/toastr.scss";
export default {
  data() {
    return {
      names: [],
      allowedExtensions: ["pdf", "jpg", "jpeg", "png", "doc", "mp4"],
      newName: "",
      newLastName: "",
      newPassword: "",
      newEmail: "",
      newUserName: "",
      newType_user: "",
      newAddress: "",
      newPicture: [],
      newPhone: "",
      newId_number: "",
      errors: [],
      seleccionado: "",
    };
  },
  computed: {},
  mounted() {
    console.log("Component mounted.");
  },
  methods: {
    //metodos del CRUD
    getNames() {
      window.location = "/login";
    },
    createNames() {
      console.log("sent form");
      this.seleccionado = this.$refs.seleccionado.value;
      console.log(this.seleccionado);
      var url = "users_save";
      console.log("send info user url, " + url);
      console.log("la foto es: " + this.newPicture);

      axios
        .post(url, {
          name: this.newName,
          last_name: this.newLastName,
          password: this.newPassword,
          user_name: this.newUserName,
          email: this.newEmail,
          type_user: this.seleccionado,
          address: this.newAddress,
          picture: this.newPicture,
          phone: this.newPhone,
          id_number: this.newId_number,
        })
        .then((response) => {
          this.newName = "";
          this.newLastName = "";
          this.newPassword = "";
          this.newEmail = "";
          this.newUserName = "";
          this.newType_user = "";
          this.newAddress = "";
          this.newPicture = "";
          this.newPhone = "";
          this.newId_number = "";
          this.errors = [];
          toastr.success("Nuevo usuario creado");
          this.getNames();
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
        let filename = file.name;
        let filesize = file.size;
        let extension = this.findExtension(filename);

        // if uploaded file is valid with validation rules
        if (this.validateFile(filesize, extension)) {
          data.append("file", files[0]);
          data.append("user_name", this.newUserName);
          this.newPicture = data;
          console.log("data es: ", data);
          axios.post("/img_user", data).then((response) => {
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
<style>
.alertaPass {
  color: red;
}
</style>
