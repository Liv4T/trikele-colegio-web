<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">Mis actividades de electivas</h3>
          <div class="card-body">
            <table class="table table-responsive-xl table-hover table-striped center">
              <tbody v-for="(plan,t) in planifications" :key="t">
                <tr
                  data-toggle="collapse"
                  :data-target="'#accordion'+t"
                  class="clickable"
                  @click="getActivities(plan.id_planification)"
                >
                  <td>{{ plan.lective.name}} Trimestre {{plan.period_consecutive}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <div :id="'accordion'+t" class="collapse">
                      <table class="table table-responsive table-hover table-striped center">
                        <thead>
                          <tr>
                            <th>Nombre de la materia</th>
                            <th>Tipo de Actividad</th>
                            <th>Fecha de entrega límite</th>
                            <th>Fecha de retroalimentación</th>
                            <th colspan="1">&nbsp;</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(actividad, k) in activities" :key="k">
                            <td>{{actividad.name }}</td>
                            <td>{{ actividad.activity_type }}</td>
                            <td>{{actividad.delivery_date}}</td>
                            <td>{{actividad.feedback_date}}</td>
                            <td width="10px">
                              <a
                                class="btn btn-warning btn-sm"
                                v-on:click.prevent="showActivity(actividad)"
                              >
                                <i class="fa fa-eye"></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="modal fade" id="editu">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="card">
              <h3 class="card-header fondo text-center">
                Actividad
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </h3>
              <div class="card-body">
                <div class="accordion" id="accordionExample">
                  <div class="card">
                    <div class="card-header" id="headingOne">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >Descripción de la actividad</button>
                      </h2>
                    </div>
                    <div
                      id="collapseOne"
                      class="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">{{activity.description}}</div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingTwo">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >Logro</button>
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      class="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">{{activity.achievement.content}} ({{activity.achievement.rate}})%</div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingThree">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >Fecha de entrega</button>
                      </h2>
                    </div>
                    <div
                      id="collapseThree"
                      class="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">{{ activity.delivery_date }}</div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingFour">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >Fecha retroalimentación</button>
                      </h2>
                    </div>
                    <div
                      id="collapseFour"
                      class="collapse"
                      aria-labelledby="headingFour"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">{{ activity.feedback_date }}</div>
                    </div>
                  </div>
                   <div class="card">
                    <div class="card-header" id="headingFive">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >Formulario</button>
                      </h2>
                    </div>
                    <div
                      id="collapseFive"
                      class="collapse"
                      aria-labelledby="headingFive"
                      data-parent="#accordionExample"
                    >
                    <form v-if="activity.activity_type=='ENCUESTA_UNICA_RTA'" class="question-module">
                      <div class="row" v-for="(question, k_q) in activity.module" >
                        <div class="col">
                          <label>{{question.question}}</label>
                          <button class="row q-option"  v-for="(option, k_op) in question.content.options"  v-on:click.prevent="checkOption(question,option,k_q,k_op)"  v-bind:class="{ 'q-option-checked': option.checked }">{{option.content}}</button>
                       
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activities: [],
      activity:{achievement:{},indicator:{}},
      formulario: [],
      descripcion: "",
      logro: "",
      fechaE: "",
      fechaR: "",
      id_act: "",
      id_t: "",
      areas: [],
      errors: [],
      planifications:[],
      open_plan:0
    };
  },
  created() {},
  mounted() {
    axios.get("/api/lectives").then((response) => {
      this.planifications= response.data;
    });

    console.log("Component mounted.");
  },
  methods: {
    getActivities(id_planification) {

      if(this.open_plan==id_planification)
        return;

     this.open_plan=  id_planification; 

      axios.get(`/api/lectives/planification/${id_planification}/activities`).then((response) => {
        this.activities= response.data;
      });
    },
    showActivity(activity) {
      this.activity=activity;

          for (var ix_question= 0; ix_question < this.activity.module.length; ix_question++) {
                for (var i = 0; i < this.activity.module[ix_question].content.options.length; i++) {
                    let ix_response= this.activity.module[ix_question].response.response.split('|')[0];
                    this.activity.module[ix_question].content.options[i].checked=(i==ix_response);
                }
          }


      $("#editu").modal("show");
    },
    checkOption(question,option,ix_question,ix_option)
    {
       axios.put(`/api/lectives/planification/${this.open_plan}/weekly/${this.activity.weekly_plan.id}/course/${this.activity.course.id}/activity/${this.activity.id_activity}/module/${this.activity.activity_type}/question/${question.id_question}`,{
         response:`${ix_option}|${option.content}`,
         ok:question.content.valid_answer_index==ix_option?'S':'N'
       }).then((response) => {

         for (var i = 0; i < this.activity.module[ix_question].content.options.length; i++) {
            this.activity.module[ix_question].content.options[i].checked=(i==ix_option);
        }


        this.activity=JSON.parse(JSON.stringify(this.activity));

      
      });
    }
  },
};
</script>
<style>
.background2 {
  background: url(../assets/img/Fondo5.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
}
.question-module{
  padding:10px;
}
.question-module label{
  padding:10px;
}
.question-module .q-option{
  background-color:#f2f2f2;
  border-radius:5px;
  padding:5px;
  margin:5px;
  border:1px solid #f2f2f2;
  width:100%;
}
.question-module .q-option:hover{
    background-color:#f5e18d;
    cursor:pointer;
}
.q-option-checked{
   background-color:#91ffcf !important;
  border-radius:5px;
  padding:5px;
  margin:5px;
  border:1px solid #91ffcf;
}
</style>
