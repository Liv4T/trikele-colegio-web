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
      <div class="col-md-10 mx-auto">
        <div class="custom-card text-center">
          <h3 class="card-header fondo">Actividad</h3>
          <form class="form-activity" novalidate>
            <div class="form-group form-group-center">
              <label for class="lbl-f-input">Clase:</label>
              <input type="text" class="form-control" v-model="course.name" readonly />
            </div>
          </form> 
            <div class="card">
              <div class="card-body">
                   <form class="form-activity" novalidate>
                    <div class="row">
                        <div class="form-group col-8">
                          <label for="activity_name"><span class="required">*</span>Nombre de la actividad</label>
                          <input type="text" class="form-control" id="activity_name"  v-model="activity.name" @change="validateActivity($event)">
                        </div>
                        <div class="form-group col-4">
                          <label for="activity_type"><span class="required">*</span>Tipo de actividad</label>
                           <select id="activity_type" class="form-control" @change="selectActivityType($event);validateActivity($event);" v-model="activity.activity_type">
                                <option value="">-- Seleccione --</option>
                                <option value="ENCUESTA_UNICA_RTA">Cuestionario respuesta única</option>
                           </select>
                        </div>
                    </div>
                    <div class="row">
                       <div class="form-group col-12">
                          <label for="activity_description"><span class="required">*</span>Descripción</label>
                          <textarea  class="form-control" id="activity_description" placeholder="Explicación o síntesis de la actividad" v-model="activity.description" @change="validateActivity($event)"></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-6">
                          <label for="activity_name"><span class="required">*</span>Logro</label>
                          <select class="form-control" v-model="activity.achievement"  @change="getIndicatorEvent($event);validateActivity($event);">
                              <option value="">-- Seleccione --</option>
                              <option v-for="achievement in planification.achievements"  v-bind:value="achievement">{{achievement.content}}</option>
                          </select>
                        </div>
                        <div class="form-group col-6">
                          <label for="activity_name"><span class="required">*</span>Indicador</label>
                          <select class="form-control" v-model="activity.indicator" @change="validateActivity($event);">
                              <option value="">-- Seleccione --</option>
                               <option v-for="indicator in indicators"  v-bind:value="indicator">{{indicator.type_activity}}  ( {{indicator.rate}}% )</option>
                          </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-6">
                          <label for="delivery_date"><span class="required">*</span>Fechad de entrega</label>
                          <input type="date" class="form-control" id="delivery_date" v-model="activity.delivery_date" @change="validateActivity($event);">
                        </div>
                        <div class="form-group col-6">
                          <label for="feedback_date"><span class="required">*</span>Fecha de retroalimentación</label>
                          <input type="date" class="form-control" id="feedback_date" v-model="activity.feedback_date" @change="validateActivity($event);">
                        </div>
                    </div>
                     
                    <div class="row">
                        <div class="col-12">
                          <div class="card card-grey" v-if="activity.activity_type">
                              <div class="questionary-module" v-if="activity.activity_type=='ENCUESTA_UNICA_RTA'">
                                <div class="row">
                                    <div class="col-6 text-left">
                                      <h5>Cuestionario respuesta única</h5>
                                    </div>
                                     <div class="col-6 text-right">
                                      <button class="btn btn-warning" @click.prevent="AddQuestion()">Agregar pregunta</button>
                                    </div>
                                </div>
                                <div class="row"  v-for="(question, k_q) in activity.module.questions">
                                  <div class="col-12">
                                    <div class="row">
                                        <label for="question"><span class="required">*</span>Pregunta N°{{k_q+1}}:</label>
                                        <textarea class="form-control" id="question" v-model="question.content" @change="validateActivity($event)"></textarea>
                                    </div>
                                    <div class="row q-option"   v-for="(option, k_op) in question.options">
                                      <div class="col-11">
                                        <input type="text" class="form-control" :placeholder="'Opción '+(k_op+1)" v-model="option.content"  @change="validateActivity($event)" />
                                      </div>
                                      <div class="col-1 div-icon-add">
                                        <div class="icon-add" alt="Agregar opción" v-if="(k_op)==0" @click.prevent="AddOptionOnQuestion(k_q)">+</div>
                                        <div class="icon-remove" alt="Remover opción" v-if="(k_op)>1" @click.prevent="RemoveOptionOnQuestion(k_q,k_op)">-</div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-6">
                                        <label for="question"><span class="required">*</span>Respuesta correcta:</label>
                                        <select class="form-control"  v-model="question.valid_answer_index"  @change="validateActivity($event)">
                                          <option v-for="(option, k_op) in question.options"  v-bind:value="k_op">{{option.content}}</option>
                                        </select>
                                      </div>
                                      <div class="col-6">
                                        <label for="question-answer"><span class="required">*</span>Justificación:</label>
                                        <textarea class="form-control" id="question-answer"  v-model="question.justify"  @change="validateActivity($event)"></textarea>
                                      </div>
                                    </div>

                                    
                                  </div>
                                </div><!-- End row question -->
                               
                                
                              </div>
                          </div>
                        </div>
                    </div>
                    <!-- SAVE INFORMATION -->
                   <div class="row">
                        <div class="form-group col-12 text-right">
                            <button class="btn btn-warning" :disabled="!activity.is_complete" @click.prevent="saveData()"> Guardar y enviar</button>
                        </div>
                    </div>
              
                   </form>
              </div>
            </div>
        
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
  props: ["id_lective_planification","id_weekly_plan","id_course"],
  data() {
    return {
    
      errors: [],
      planification:{},
      course:{},
      activity:{
        activity_type:'',
        name:'',
        description:'',
        achievement:'',
        indicator:'',
        module:{},
        is_complete:false,
        delivery_date:'',
        feedback_date:''

      },
      indicators:[],
      activities:[]
    };
  },
  mounted() {
    this.getPlanificationEvent();
    this.getCourseEvent();
    this.getActivitiesEvent();

  },
  methods: {
    validateActivity(){

      this.activity.is_complete=false;
      if(!this.activity.name) return;

      if(!this.activity.activity_type) return;

      if(!this.activity.description) return;

      if(!this.activity.achievement) return;

      if(!this.activity.indicator) return;

      if(!this.activity.delivery_date) return;

      if(!this.activity.feedback_date) return;


      switch(this.activity.activity_type)
            {
              case 'ENCUESTA_UNICA_RTA':

                 if(!this.activity.module) return;

                 this.activity.module.questions.forEach(q=>{
                    if(!q.justify) return;

                    if(!q.valid_answer_index>q.options.length-1) return;

                    q.options.forEach(op=>{
                          if(op.content==''||op.content==null) return;
                    });


                 });

              break;

            }



      this.activity.is_complete=true;
    },
    redirectToHome() {
     window.location = "/teacher/lectives/courses";
    },
    getCourseEvent(){
      axios.get(`/api/lectives/planification/${this.id_lective_planification}/weekly/${this.id_weekly_plan}/course/${this.id_course}`).then((response) => {
        this.course = response.data;
      });
    },
     getActivitiesEvent(){
      axios.get(`/api/lectives/planification/${this.id_lective_planification}/weekly/${this.id_weekly_plan}/course/${this.id_course}/activity`).then((response) => {
        this.activities = response.data;
      });
    },
    getPlanificationEvent() {
    
      axios.get(`/api/lectives/planification/${this.id_lective_planification}`).then((response) => {
        this.planification = response.data;
      });
    },
    getIndicatorEvent($event) {

      this.activity.indicator='';
      this.indicators = [];
      axios.get(`/api/lectives/planification/${this.id_lective_planification}/achievement/${this.activity.achievement.id}`).then((response) => {
        this.indicators = response.data;
      });
    },
    selectActivityType($event){

      switch(this.activity.activity_type)
      {
        case 'ENCUESTA_UNICA_RTA':
            this.activity.module={
              questions:[
                {
                  question:'',
                  type_question:'SIMPLE_RTA',
                  options:[{
                    content:''
                  },{
                    content:''
                  }],
                  valid_answer_index:0,
                  justify:''
                }
              ]
              
            };
        break;

      }

        
    },
    saveData(){
       axios.put(`/api/lectives/planification/${this.id_lective_planification}/weekly/${this.id_weekly_plan}/course/${this.id_course}/activity`,this.activity).then((response) => {
            toastr.success("Nueva actividad creada exitosamente");
            this.redirectToHome();
      });
    },
    /* MODULE QUESTION METHODS*/
    AddQuestion(){
        this.activity.module.questions.push({
                  question:'',
                  type_question:'SIMPLE_RTA',
                  options:[{
                    content:''
                  },{
                    content:''
                  }],
                  valid_answer_index:0,
                  justify:''
        });
    },
    AddOptionOnQuestion(index)
    {
         this.activity.module.questions[index].options.push({
              content:''
          });
       
    },
    RemoveOptionOnQuestion(index_question,index)
    {
         this.activity.module.questions[index_question].options.splice(index,1);
       
    }
  },
};
</script>
<style>
.form-activity{
  width:100%;
  margin-top:30px;
  
}
.form-activity>.form-group{
  display:flex;
  flex-direction:column;
  align-items:flex-start !important;
}
.form-activity>.form-group-center{
  display:flex;
  flex-direction:column;
  align-items:center !important;
}

.form-activity>.form-group>label{
  text-align:left !important;
}
.form-activity>.form-group input{
  width:40%;
}
.required{
  color:red;
}
.card-grey{
  background-color:#f2f2f2;
}
.questionary-module{
  padding:20px;
}
.q-option{
  padding:10px;
}
.div-icon-add{
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  
}
.icon-add{
  background-color:#f2f2f2;
  height:30px;
  width:40px;
  border:2px solid #8f8f8f;
  border-radius:5px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  cursor:default;
 
  font-weight:900;
  background-color:#ffc107;color:white;border-color:#ffc107;
}
.icon-add:hover{ color:#ffc107;background-color:white;border-color:#ffc107;}
.icon-remove{
  background-color:#ff004c;
  height:30px;
  width:40px;
  border:2px solid #ff004c;
  border-radius:5px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  cursor:default;
 
  font-weight:900;
  background-color:#ff004c;color:white;border-color:#ff004c;
}
.icon-remove:hover{ color:#ff004c;background-color:white;border-color:#ff004c;}
</style>
