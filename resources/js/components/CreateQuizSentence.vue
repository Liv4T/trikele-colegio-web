<template>
  <div class="back">
    <div class="row">
      <div class="col-md-11 mx-auto">
        <div class="custom-card text-center">
          <h3 class="card-header">Cuestionario</h3>
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
                  <a href="#" class="btn btn-primary float-right">Guardar</a>
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
      myOptions: ["Cuestionario 4 opciones"],
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
  mounted() {},
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
    }
  }
};
</script>
<style></style>
