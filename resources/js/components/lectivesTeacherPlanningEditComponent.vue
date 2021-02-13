<template>
<div>
  <head>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/solid.css"
      integrity="sha384-ioUrHig76ITq4aEJ67dHzTvqjsAP/7IzgwE7lgJcg2r7BRNGYSK0LwSmROzYtgzs"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/brands.css"
      integrity="sha384-i2PyM6FMpVnxjRPi0KW/xIS7hkeSznkllv+Hx/MtYDaHA5VcF0yL3KVlvzp8bWjQ"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/fontawesome.css"
      integrity="sha384-sri+NftO+0hcisDKgr287Y/1LVnInHJ1l+XC7+FOabmTTIK0HnE2ID+xxvJ21c5J"
      crossorigin="anonymous"
    />
  </head>
  <div class="back">
    <div class="row">
      <div class="col-md-11 mx-auto">
        <div class="custom-card text-center">
          <h3 class="card-header fondo">Planificación general</h3>
          <span class="classroom-label">{{planification.lective.name}} Trimestre {{planification.period_consecutive}}</span>
          <span v-show="!isSynchronized">(Hay cambios que no han sido guardados)</span>
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
              <span
                class="spinner-border spinner-border"
                role="status"
                aria-hidden="true"
                v-if="isLoading"
              ></span>
              <tab-content title="Anual">
                <div class="form-group mx-auto" v-for="(achievement, t) in achievements" :key="t">
                  <div class="classroom-planning-section">
                    <strong>Logro:</strong>

                    <input
                      v-on:change="planificationContentUpdateEvent($event,t,'achievements','rate')"
                      class="form-control form-control-sm"
                      type="number"
                      style="width:50px;"
                      v-model="achievement.rate"
                    />%
                    <span>
                      <a
                        href="#"
                        class="badge badge-danger"
                        @click.prevent="removeAchievement(t)"
                        v-show="(t>0 && achievements_saved.length<=t)"
                      >-</a>
                      <a
                        href="#"
                        class="badge badge-primary"
                        @click.prevent="addAchievement(t)"
                        v-show="t == achievements.length -1"
                      >+</a>
                    </span>
                  </div>
                  <textarea
                    name="welcome"
                    class="form-control"
                    v-model="achievement.content"
                    v-on:change="planificationContentUpdateEvent($event,t,'achievements','content')"
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
              </tab-content>

              <tab-content title="Trimestral">
                <div class="form-group row mx-auto" v-for="(quarterly, t) in quarterlies" :key="t">
                  <div class="col-md-6">
                    <label for="name">Indicador</label>
                    <span>
                      <a
                        href="#"
                        class="badge badge-danger"
                        @click.prevent="removeQuarterly(t)"
                        v-show="(t>0 && quarterlies_saved.length<=t)"
                      >-</a>
                      <a
                        href="#"
                        class="badge badge-primary"
                        @click.prevent="addQuarterly(t)"
                        v-show="t == quarterlies.length - 1"
                      >+</a>
                    </span>
                    <div>
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="quarterly.name"
                        v-on:change="planificationContentUpdateEvent($event,t,'quarterlies','name')"
                        placeholder="Nombre de la unidad"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="name">Contenido</label>
                    <textarea
                      name="competences"
                      class="form-control"
                      v-model="quarterly.content"
                      v-on:change="planificationContentUpdateEvent($event,t,'quarterlies','content')"
                      placeholder="Es la explicacion o sintesis de la unidad."
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <!-- <div class="modal-footer">
                  <a submit="saveData" class="btn btn-warning float-right">Guardar</a>
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
       serialLocalStorage:'5t284918-f0f6-4369-a368-eaf6321b6855',
       planification:{lective:{},achievements:[],quarterlies:[]},
      quarterlies: [
        {
          name: "",
          content: "",
          order: 1,
          observation:''
        },
      ],
      achievements: [
        {
          content: "",
          rate: 0
        },
      ],
      achievements_saved:[],
      quarterlies_saved:[],
      newquaterly: [],
      newLogro1: "",
      newLogro2: "",
      newLogro3: "",
      newLogro4: "",
      newquaterly: [],
      newLogro: [],
      quaterly: false,
      logro_1: "",
      logro_2: "",
      logro_3: "",
      logro_4: "",
      anual: [],
      newAnual: [],
      errors: [],
      isSynchronized:true,
      isLoading:false
    };
  },
  mounted() {

     //load from localstorage
     this.serialLocalStorage=this.serialLocalStorage+"-"+this.id_lective_planification;


    var urlsel =      "/api/lectives/planification/"+this.id_lective_planification ;
    axios.get(urlsel).then((response) => {

     this.planification = response.data;

        //set current data
        if(this.planification.achievements.length>0)
        {
          this.achievements= this.planification.achievements.map(p=>{return {id:p.id,content:p.content,rate:`${p.rate}`};});
          this.achievements_saved= JSON.parse(JSON.stringify(this.achievements));
        }

        if(this.planification.quarterlies.length>0)
        {
          this.quarterlies=this.planification.quarterlies.map(p=>{return {id:p.id,content:p.content,name:p.name,order:p.order};});
          this.quarterlies_saved= JSON.parse(JSON.stringify(this.quarterlies));
        }

          console.log(this.achievements);   
   
        if(localStorage.getItem(this.serialLocalStorage))
        {
          let savedPlanificationModel=JSON.parse(decodeURIComponent(escape(window.atob(localStorage.getItem(this.serialLocalStorage)))));

       
            if(JSON.stringify(savedPlanificationModel.quarterlies)!==JSON.stringify(this.quarterlies_saved))
            {
              this.quarterlies=savedPlanificationModel.quarterlies;
              this.isSynchronized=false;
            }

            if(JSON.stringify(savedPlanificationModel.achievements)!==JSON.stringify(this.achievements_saved))
            {
              this.achievements=savedPlanificationModel.achievements;
               this.isSynchronized=false;
            }
        }

        console.log(this.achievements);     

      if (this.planification.quarterlies.length > 0) {
        this.quaterly = true;
      } else {
        this.quaterly = false;
      }
    });
  },
  methods: {
    contentUpdateEvent(index,property){
      this.inputs[index][property]=this.inputs[index][property].replace(/[^a-zA-Z0-9-.ñáéíóú_*+-/=&%$#!()?¡¿ ]/g, "|");
    },
    planificationContentUpdateEvent(e,i,type,property=null){

      if(type=='achievements')
      {
        this.achievements[i][property]=this.achievements[i][property].replace(/[^a-zA-Z0-9-.ñáéíóú_*+-/=&%$#!()?¡¿ ]/g, "|");
      }
      else if (type=='quarterlies')
      {
        this.quarterlies[i][property]=this.quarterlies[i][property].replace(/[^a-zA-Z0-9-.ñáéíóú_*+-/=&%$#!()?¡¿ ]/g, "|");
      }

      //serialize data on localstorage
     localStorage.setItem(this.serialLocalStorage, window.btoa(unescape(encodeURIComponent(JSON.stringify({achievements:this.achievements,quarterlies:this.quarterlies})))));

     this.isSynchronized=false;
      
    },
    returnToMenu() {
      setTimeout(()=>{
           this.isLoading=false;
         window.location = "/teacher/lectives/planning";
      },2000);
      
    
    },
    addQuarterly(index) {
      this.quarterlies.push({ name: "", content: "",order: this.quarterlies.length,observation:''});
    },
    removeQuarterly(index) {
      this.quarterlies.splice(index, 1);
    },
    addAchievement(index) {
      this.achievements.push({content:'', rate:0 });
    },
    removeAchievement(index) {
      this.achievements.splice(index, 1);
    },
    isLoadingEvent(){
      return this.isLoading;
    },
    saveData() {
      this.isLoading=true;
      var url = "/api/lectives/planification";

       if(this.quarterlies.length==0 ||  this.achievements.length==0)
        return;
            
      axios
        .put(url, {
          id_planification: this.planification.id_planification,
          achievements: this.achievements,
          quarterlies: this.quarterlies,
        })
        .then((response) => {
          this.errors = [];
          toastr.success("Nuevo plan general creado exitosamente");
          this.returnToMenu();         
        })
        .catch((error) => {
          this.errors = error.response.data;
          this.isLoading=false;
        });
    },
    updateCourses() {
      window.location = "/actividad_g";
    },
    editNames(clas) {
      //   var urlr = "showClass/" + clas;
      //   axios.get(urlr).then(response => {
      //     this.fillS = response.data;
      //   });
      $("#createZ").modal("show");
    },
  },
};
</script>
<style></style>
