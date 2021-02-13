<template>
  <div class="back">
    <div class="row">
      <div class="col-md-10 mx-auto">
        <div class="card text-center">
          <h3 class="card-header fondo">Cuestionario</h3>
          <form class="needs-validation" novalidate>
            <div class="card-body">
              <div id>
                <div class="form-group row">
                  <div class="col-md-6">
                    <strong>Nombre del curso</strong>
                    <select2 :options="myOptions" v-model="newCourse" required></select2>
                  </div>
                  <div class="col-md-6">
                    <strong>Unidad</strong>
                    <select2 :options="myOptions" v-model="newUnit" required></select2>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-6">
                    <strong>Tema</strong>
                    <select2 :options="myOptions" v-model="newTopic" required></select2>
                  </div>
                  <div class="col-md-6">
                    <strong>Actividad</strong>
                    <select2 :options="myOptions" v-model="newNameActivity" required></select2>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-6">
                    <strong>Tipo de cuestionario</strong>
                    <select2 :options="myOptions" v-model="newActivity" required></select2>
                  </div>
                  <div class="col-md-6">
                    <strong>Nombre del cuestionario</strong>
                    <input type="text" name="name" class="form-control" v-model="newName" required />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <!--div v-show="newActivity=='Cuestionario V-F'">
                    <div class="form-group row mx-auto" v-for="(input,k) in inputs" :key="k">
                      <div class="col-md-6">
                        <label for="name">Pregunta</label>
                        <span>
                          <a
                            href="#"
                            class="badge badge-danger"
                            @click.prevent="remove(k)"
                            v-show="k || ( !k && inputs.length > 1)"
                          >-</a>
                          <a
                            href="#"
                            class="badge badge-primary"
                            @click.prevent="add(k)"
                            v-show="k == inputs.length-1"
                          >+</a>
                        </span>
                        <input
                          type="text"
                          name="objetive1"
                          class="form-control"
                          v-model="input.name"
                          placeholder="Pregunta"
                          required
                        />
                      </div>
                      <div class="col">
                        <label>Respuesta Correcta</label>
                        <br />
                        <div class="custom-control custom-checkbox custom-control-inline">
                          <input
                            class="custom-control-input"
                            type="checkbox"
                            id="gridCheck1"
                            v-model="inputs.answer_correct"
                            required
                          />
                          <label class="custom-control-label" for="gridCheck1">V</label>
                        </div>
                        <div class="custom-control custom-checkbox custom-control-inline">
                          <input
                            class="custom-control-input"
                            type="checkbox"
                            id="gridCheck2"
                            v-model="inputs.true"
                          />
                          <label class="custom-control-label" for="gridCheck2">F</label>
                        </div>
                      </div>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                </div-->
                <div
                  v-show="
                                        newActivity == 'Cuestionario imagenes'
                                    "
                  v-for="(input1, k) in inputs1"
                  :key="k"
                >
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <label for="name">Pregunta</label>
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
                        type="file"
                        name="objetive1"
                        class="form-control"
                        @change="onFlieChange"
                        required
                      />
                    </div>
                    <div class="col-md-6">
                      <label>Respuesta Correcta</label>
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="input1.answer_correct"
                        required
                      />
                    </div>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <label for>Opción 1</label>
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="input1.answer1"
                        required
                      />
                    </div>
                    <div class="col-md-6">
                      <label for>Opción 2</label>
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="input1.answer2"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <label for>Opción 3</label>
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="input1.answer3"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div
                  v-show="
                                        newActivity == 'Cuestionario 4 opciones'
                                    "
                  v-for="(input1, k) in inputs1"
                  :key="k"
                >
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <label for="name">Pregunta</label>
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
                        v-model="input1.question"
                        required
                      />
                    </div>
                    <div class="col-md-6">
                      <label>Respuesta Correcta</label>
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="input1.answer_correct"
                        required
                      />
                    </div>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <label for>Opción 1</label>
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="input1.answer1"
                        required
                      />
                    </div>
                    <div class="col-md-6">
                      <label for>Opción 2</label>
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="input1.answer2"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <label for>Opción 3</label>
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="input1.answer3"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <a href="#" class="btn btn-warning float-right">Guardar</a>
                </div>
              </div>
            </div>
          </form>
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
export default {
  data() {
    return {
      inputs: [
        {
          question: "",
          answer_correct: ""
        }
      ],
      inputs1: [
        {
          question: "",
          answer_correct: "",
          answer1: "",
          answer2: "",
          answer3: ""
        }
      ],
      Uoptions: ["3", "4"],
      myOptions: ["Cuestionario 4 opciones", "Cuestionario imagenes"],
      newName: "",
      newQuiz: [],
      newActivity: "",
      newNameActivity: "",
      newCourse: "",
      newUnit: "",
      newTopic: "",
      fillC: {
        id: "",
        name: ""
      },
      errors: []
    };
  },
  mounted() {
    var urlsel = "GetCategories";
    axios.get(urlsel).then(response => {
      this.categories = response.data;
    });
    var urlsel = "GetTypeU";
    axios.get(urlsel).then(response => {
      this.TypeUsers = response.data;
    });
    console.log("Component mounted.");
  },
  methods: {
    add(index) {
      this.inputs.push({ name: "" });
    },
    remove(index) {
      this.inputs.splice(index, 1);
    },
    add1(index) {
      this.inputs1.push({
        question: "",
        answer_correct: "",
        answer1: "",
        answer2: "",
        answer2: "",
        answer3: ""
      });
    },
    remove1(index) {
      this.inputs1.splice(index, 1);
    },
    getNames() {
      window.location = "/actividad";
    },

    createClasses() {
      var url = "cuestionario";

      if (this.inputs1.length >= 1) {
        console.log(this.inputs1.length);
        for (let i = 0; i < this.inputs1.length; i++) {
          this.newQuiz.push(this.inputs1[i]);
        }
        console.log(this.newQuiz);
      }
      axios
        .post(url, {
          name: this.newName,
          type: this.newActivity,
          quiz: this.newQuiz,
          topic: this.newTopic
        })
        .then(response => {
          this.errors = [];
          toastr.success("New quiz created successfully");
          this.getNames();
        })
        .catch(error => {
          this.errors = error.response.data;
        });
    },
    getSubcategories() {
      var urlse = "GetSubcategories/" + this.Category;
      axios.get(urlse).then(response => {
        this.subcategories = response.data;
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
          this.newPicture = data;

          axios.post("/fileUpload", data).then(response => {
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
        confirmButtonText: "Ok"
      });
    },
    /**
     * find extension of uploaded file
     * @param  {string} filename
     * @return {string}
     */
    findExtension(filename) {
      return filename
        .split(".")
        .pop()
        .toLowerCase();
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
          file_name: message.file_name
        });
        console.log(message.file_path);
      }
    }
  }
};
</script>
<style>
.back {
  padding-left: 210px;
}
.card-header.fondo {
  background-color: #278080;
  color: white;
}
</style>
