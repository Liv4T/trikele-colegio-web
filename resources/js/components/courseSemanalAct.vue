<template>
    <div>
        <!-- <div class="back"> -->
        <div>
            <div class="row">
                <div class="col-md-11 mx-auto">
                    <div class="custom-card text-center">
                        <h3 class="card-header fondo">Actualizar ciclo</h3>
                        <form class="needs-validation" novalidate v-show="semanal==true">
                            <form-wizard
                                title
                                subtitle
                                color="#ffc107"
                                next-button-text="Siguiente"
                                back-button-text="Atrás"
                                finish-button-text="Actualizar y enviar"
                                @on-complete="updateSemanal"
                            >
                                <tab-content title="Ciclo">
                                    <div class="form-group row mx-auto" v-for="(act, t) in fillS" :key="t">
                                        <div class="col-md-6">
                                            <label for="name">Pregunta conductora o nombre {{t+1}}</label>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="objetive1"
                                                    class="form-control"
                                                    v-model="act.text"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="bimestre">Seleccione el Bimestre</label>                                      
                                            <select class="form-control" v-model="act.id_bimestre" required>
                                                <option :value="bim.id" v-for="(bim, key) in bimestres" :key="key">
                                                {{ bim.name }}
                                                </option>
                                            </select>
                                        </div>
                                        
                                        <div class="col-md-6">
                                            <label for="name">Observación</label>
                                            <textarea name="competences" 
                                            class="form-control" v-model="act.observation"></textarea>
                                        </div> 

                                        <div class="col-md-6">
                                            <label for="name">Desarrollo de la clase</label>
                                            <textarea
                                                name="competences"
                                                class="form-control"
                                                v-model="act.class"
                                                placeholder="Es la explicacion o sintesis de la clase."
                                                required
                                            ></textarea>
                                            <div class="invalid-feedback">Please fill out this field</div>
                                        </div>                                       
                                    </div>
                                    <!-- <div class="modal-footer">
                                        <a href="#" class="btn btn-warning float-right">Guardar</a>
                                    </div>-->
                                </tab-content>
                                <div class="float-left" v-if="backPage">
                                    <button class="btn btn-primary" v-on:click="backPage">Volver</button>
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
import "vue-form-wizard/dist/vue-form-wizard.min.css";
Vue.use(VueFormWizard);
export default {
    props: ["id_area", "id_classroom","backPage"],
    data() {
        return {
            inputs: [
                {
                driving_question: "",
                class_development: "",
                observation: "",
                },
            ],
            newSemanal: [],
            fillS: [
                {
                id: "",
                driving_question: "",
                class_development: "",
                observation: "",
                },
            ],
            semanal: false,
            errors: [],
            bimestres:[]
        };
    },
    watch:{
        id_area(newVal,oldVal){
            if(newVal !== oldVal){
                this.getData();
            }
        },
        id_classroom(newVal, oldVal){
            if(newVal !== oldVal){
                this.getData();
            }
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData(){
            axios.get('bimestres').then((response)=>{
                let bimestresData = response.data;
                bimestresData.forEach(bimestre=>{
                    if(bimestre.status === 1){
                    this.bimestres.push({
                        id: bimestre.id,
                        name: bimestre.name
                    })
                    }        
                })
            });
            
            var urlsel = window.location.origin + "/editOneWeek/" + this.id_area + "/" + this.id_classroom;
            axios.get(urlsel).then((response) => {
                this.fillS = response.data;
                if (this.fillS.length > 0) {
                    this.semanal = true;
                }
            });
        },
        add(index) {
            this.inputs.push({
                driving_question: "",
                class_development: "",
                observation: "",
            });
        },
        remove(index) {
            this.inputs.splice(index, 1);
        },
        getMenu() {
            window.location = "/actividad_g";
        },
        createSemanal() {
            var url = "courseWeekly";
            if (this.inputs.length >= 1) {
                for (let i = 0; i < this.inputs.length; i++) {
                    this.newSemanal.push(this.inputs[i]);
                }
            }

            axios.post(url, {
            //Cursos generales
                id_materia: "1",
                semana: this.newSemanal,
            }).then((response) => {
                this.errors = [];
                toastr.success("Nueva semana creada exitosamente");
                // this.getMenu();
            }).catch((error) => {
                this.errors = error.response.data;
            });
        },
        updateSemanal() {
            var url = window.location.origin + "/updateCourseWeekly";

            if (this.fillS.length >= 1) {
                for (let i = 0; i < this.fillS.length; i++) {
                    this.newSemanal.push(this.fillS[i]);
                }
            }
            axios.put(url, {
                //Cursos generales
                id_materia: "1",
                semana: this.newSemanal,                
            }).then((response) => {
                this.errors = [];
                toastr.success("Actualizado plan semanal exitosamente");
                // this.getMenu();
            }).catch((error) => {
            this.errors = error.response.data;
            });
        },
    },
};
</script>
<style>
</style>
