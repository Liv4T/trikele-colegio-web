<template>
  <div class="backg">
    <div class="row">
      <div class="col-md-11 mx-auto">
        <div class="custom-card text-center">
          <h3 class="card-header fondo">ADMISIONES</h3>
          <form class="needs-validation" novalidate>
            <form-wizard title subtitle color="orange" layout="vertical" next-button-text="Siguiente" back-button-text="Atrás" finish-button-text="Finalizar" @on-complete="createNames">
              <tab-content title="Bienvenida" icon="fas fa-user">
                <div class="card-body pd-20">
                  <h3 class="row">ADMISIONES</h3>
                  <h3 class="row">¡BIENVENIDO!</h3>
                  <h4 class="row">Proceso de admisión en 5 sencillos pasos:</h4>
                  <h5 class="row">1.Información de documentos requeridos</h5>
                  <h5 class="row">2.Compra y descarga el formulario de inscripción.</h5>
                  <h5 class="row">3.Entregar formulario de inscripción y documentos</h5>
                  <h5 class="row">4.Entregar video de presentación del estudiante</h5>
                  <h5 class="row">5.Matricular en fecha y hora asignada.</h5>
                </div>
              </tab-content>
              <tab-content title="Documentos requeridos" icon="fas fa-id-card">
                <div class="card-body pd-20">
                  <div class="form-group align-center letra-p row mx-auto">
                    <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Comprar y diligenciar de manera legible el formulario de admisión
                    <div class="col-md-8 mx-auto">
                      <a class="btn btn-warning float-left" href="#">Comprar</a>
                    </div>
                  </div>

                  <div class="form-group align-center letra-p row mx-auto"><img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Cedula de ciudadanía papá y mamá</div>
                  <div class="form-group align-center letra-p row mx-auto"><img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Documento de Identidad del estudiante</div>
                  <div class="form-group align-center letra-p row mx-auto"><img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Certificados último año cursado</div>
                  <div class="form-group align-center letra-p row mx-auto"><img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Certificado afiliación a EPS</div>
                  <div class="form-group align-center letra-p row mx-auto"><img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Certificado Médico</div>
                  <div class="form-group align-center letra-p row mx-auto"><img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Certificado laboral de los padres de familia</div>
                  <div class="form-group align-center letra-p row mx-auto"><img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Certificado laboral</div>
                  <div class="form-group align-center letra-p row mx-auto"><img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Paz y Salvo colegio anterior</div>
                </div>
              </tab-content>
              <!-- <tab-content title="Entrevistas y examenes" icon="fas fa-id-card">
                <div class="card-body">
                  <div class="form-group mx-auto">En el momento de la compra del formulario se te asignará la cita para las entrevistas con Rectoría y Psicología.</div>
                  <h5>PRE KINDER A SEGUNDO</h5>
                  <div class="form-group row mx-auto">
                    <li class="mx-auto">Actividades de observación Learning Center</li>
                  </div>
                  <h5>TERCERO A OCTAVO</h5>
                  <div class="form-group row mx-auto">
                    <li class="mx-auto">Presentación de exámenes de Matemáticas, Inglés y Español (para el caso de noveno grado, presentan adicionalmente Física y Química)</li>
                  </div>
                </div>
              </tab-content>
              <tab-content title="Respuesta del comite" icon="fas fa-id-card">
                <div class="card-body">
                  <div class="form-group row mx-auto">
                    <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Evaluamos toda la información al detalle con el comité de admisión.
                  </div>
                  <div class="form-group row mx-auto"><img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Te comunicamos la respuesta del proceso.</div>
                </div>
              </tab-content> -->
            </form-wizard>
          </form>
        </div>
      </div>
    </div>
    <div class="modal fade" id="editu">
      <div class="modal-dialog">
        <div class="modal-content">
          <form class="needs-validation" v-on:submit.prevent="createEvent" novalidate>
            <div class="modal-header">
              <h4>Crear evento</h4>
              <button type="button" class="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group row justify-content-center">
                <div class="col-md-10">
                  <label for="name">Nombre del evento</label>
                  <input type="text" name="name" class="form-control" v-model="nameEvent" />
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
              </div>
              <div class="form-group row">
                <div class="col">
                  <label for="name">Desde</label>
                  <datetime format="YYYY-MM-DD H:i:s" width="200px" v-model="desde"></datetime>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="col">
                  <label for="name">Hasta</label>
                  <datetime format="YYYY-MM-DD H:i:s" width="200px" v-model="hasta"></datetime>
                  <div class="invalid-feedback"></div>
                </div>
              </div>
              <div class="modal-footer">
                <input type="submit" class="btn btn-warning" value="Guardar" />
              </div>
            </div>
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
      window.location = "/";
      //   console.log("sent form");
      //   this.seleccionado = this.$refs.seleccionado.value;
      //   console.log(this.seleccionado);
      //   var url = "users_save";
      //   console.log("send info user url, " + url);
      //   console.log("la foto es: " + this.newPicture);

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
    editNames() {
      $("#editu").modal("show");
    },
  },
};
</script>
<style>
.alertaPass {
  color: red;
}
.pd-20 {
  padding-left: 7em;
}
.align-center {
  align-items: center;
}
.letra-p {
  font-size: 20px;
}
</style>
