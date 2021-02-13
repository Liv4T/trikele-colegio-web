<template>
  <div>
    <div class="back">
      <div class="row">
        <div class="col-md-11 mx-auto">
          <div class="custom-card text-center">
            <h3 class="card-header fondo">Mis Electivas</h3>
              <span class="classroom-label">{{planification.lective.name}} Trimestre {{planification.period_consecutive}}</span>
            <form class="needs-validation" novalidate>
              <form-wizard
                title
                subtitle
                color="#ffc107"
                next-button-text="Siguiente"
                back-button-text="Atrás"
                finish-button-text="Guardar y enviar"
                @on-complete="saveData"
              >
                <tab-content title="Ciclo">
                  <div class="form-group row mx-auto" v-for="(input, t) in weekly_plans" :key="t">
                    <div class="col-md-6">
                      <label for="name">Pregunta conductora o nombre</label>
                      <span>
                        <!--<a
                          href="#"
                          class="badge badge-danger"
                          @click.prevent="remove(t)"
                          v-show="
                                                        t ||
                                                            (!t &&
                                                                weekly_plans.length >
                                                                    1)
                                                    "
                        >-</a>-->
                        <a
                          href="#"
                          class="badge badge-primary"
                          @click.prevent="add(t)"
                          v-show="
                                                        t == weekly_plans.length - 1
                                                    "
                        >+</a>
                      </span>
                      <div>
                        <input
                          type="text"
                          name="objetive1"
                          class="form-control"
                           v-on:change="contentUpdateEvent(t,'name')"
                          v-model="
                                                        input.name
                                                    "
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label for="name">Desarrollo de la clase</label>
                      <textarea
                        name="competences"
                        class="form-control"
                        v-on:change="contentUpdateEvent(t,'content')"
                        v-model="
                                                    input.content
                                                "
                        placeholder="Es la explicacion o sintesis de la clase."
                        required
                      ></textarea>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <label for="name">Observación</label>
                      <textarea name="competences" class="form-control" v-model="input.observation"></textarea>
                    </div>
                  </div>
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
  props: ["id_lective_planification"],
  data() {
    return {
      planification:{lective:{}},
      weekly_plans: [
        {
          name: "",
          content: "",
          observation: "",
          order:0
        },
      ],
      newSemanal: [],
      isSynchronized:true,  
      semanal: false,
      errors: [],
      isLoading:false
    };
  },
  mounted() {
     axios.get( "/api/lectives/planification/"+this.id_lective_planification).then((response) => {

            this.planification = response.data;

            if(this.planification.weeklies.length>0)
            {
              this.isSynchronized=true;
              this.weekly_plans=this.planification.weeklies;
            }
     });
  },
  methods: {
    contentUpdateEvent(index,property){
      this.weekly_plans[index][property]=this.weekly_plans[index][property].replace(/[^a-zA-Z0-9-.ñáéíóú_*+-/=&%$#!()?¡¿ ]/g, "|");
    },
    add(index) {
      this.weekly_plans.push({
        order:this.weekly_plans.length,
        name: "",
        content: "",
        observation: "",
      });
    },
    remove(index) {
      this.weekly_plans.splice(index, 1);
    },
    returnToMenu() {
      window.location ="/teacher/lectives/planning";
        this.isLoading=false;
    },
    saveData() {

        this.isLoading=true;
      var url = `/api/lectives/planification/${this.id_lective_planification}/weekly`;

       if(this.weekly_plans.length==0)
        return;



         axios
        .put(url, {
          id_planification: this.planification.id_planification,
          weeklies: this.weekly_plans
        })
        .then((response) => {
          this.errors = [];
           toastr.success("Nueva semana creada exitosamente");
          this.returnToMenu();       
        })
        .catch((error) => {
          this.errors = error.response.data;
          this.isLoading=false;
        });

      var url = window.location.origin + "/courseWeekly";
      if (this.weekly_plans.length >= 1) {
        for (let i = 0; i < this.weekly_plans.length; i++) {
          this.newSemanal.push(this.weekly_plans[i]);
        }
      }

 
    },
  },
};
</script>
<style></style>
