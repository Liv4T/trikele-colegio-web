<template>
    <div class="row">
        <div class="col-12 col-md-12">
            <div class="row">
                <div class="col-12 col-md-12">
                    <div class="class_container_header">
                        <span>Contenido de la clase:</span>
                        <button class="btn btn-link" @click="GoReturnPage()">Regresar</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-12 class_content_title">
                    <span>{{course.name}}</span>
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-md-12">
                    <div class="class_container" v-for="(content,k_content) in course.content" v-bind:key="k_content">

                        <div class="class_container_info">
                            <div  class="class_container_info-container">
                                <span>{{content.description}}</span>
                                <small class="class_notify">
                                       {{content.content_type}}
                                </small>
                            </div>

                            <div class="class_container_score">
                                <div>
                                    <span v-if="content.is_required">SI</span>
                                    <span v-else>NO</span>
                                    <small>Obligatorio</small>
                                </div>
                                <div>
                                    <span v-if="content.date_interaction">SI</span>
                                    <span v-else>NO</span>
                                    <small>Visto</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-12">
                    <div class="class_container" v-for="(activity,k_activity) in course.activities" v-bind:key="k_activity" @click="openActivityEvent(activity)">
                          <div class="class_container_info">
                            <div  class="class_container_info-container">
                                <span>{{activity.name}}</span>
                                <small class="class_notify">
                                    ACTIVIDAD - {{activity.activity_type}}
                                </small>
                            </div>

                            <div class="class_container_score">
                                <div v-if="activity.state_interaction==2">
                                    <span class="class_notify">PENDIENTE</span>
                                    <small>Calificación</small>
                                </div>
                                <div v-else>
                                    <span v-if="activity.date_interaction">{{activity.score}}</span>
                                    <span v-else>-</span>
                                    <small>Calificación</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mt-2 ml-2">
                <div class="card-header">
                    <div class="card-title">
                        <h1>Intentos Actividades</h1>
                    </div>                
                    <div class="card-body">    
                        <div class="col-12 col-md-12">
                            <div class="class_container" v-for="(activity,k_activity) in attemps" v-bind:key="k_activity" @click="openActivityEvent(activity)">
                                <div class="class_container_info">
                                    <div  class="class_container_info-container">
                                        <small class="class_notify">intento #{{ activity.attemps }}</small>
                                        <span>{{activity.name}}</span>
                                        <small class="class_notify">
                                            ACTIVIDAD - {{activity.activity_type}}
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="createZ">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="card">
                        <div class="card-header card-title">
                            <h5 style="color:#f79d52">
                                Actividad:{{ current_activity.name }}
                            </h5>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12">
                                    <b>Descripción:</b>
                                    <textarea class="form-control-plaintext" v-model="current_activity.description" readonly></textarea>
                                </div>
                            </div>
                            <activity-questionary v-if="current_activity.activity_type=='CUESTIONARIO'" v-bind:playing="true" v-bind:module="current_activity.module" v-bind:disabled="true"></activity-questionary>
                            <activity-complete-sentence v-if="current_activity.activity_type=='COMPLETAR_ORACION'" v-bind:playing="true" v-bind:module="current_activity.module" v-bind:disabled="true"></activity-complete-sentence>
                            <activity-relationship v-if="current_activity.activity_type=='RELACION'" v-bind:playing="true" v-bind:module="current_activity.module" v-bind:disabled="true"></activity-relationship>
                            <activity-crossword v-if="current_activity.activity_type=='CRUCIGRAMA'" v-bind:playing="true" v-bind:module="current_activity.module" v-bind:disabled="true"></activity-crossword>
                            <div class="activity_score">
                                <div>
                                    <small>Calificación</small>
                                    <input class="form-control" style="width:100px" type="number" v-model="current_activity.score" />
                                </div>

                                <button class="btn btn-primary" style="margin-top:1em;"  @click="SaveScoreAction()">Actualizar</button>
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
    props: ['id_area','id_classroom','id_student','id_module','id_class'],
    data() {
        return {
            classs:[],
            current_class:{},
            course:{},
            current_activity:{},
            attemps:[]
        }
    },
    mounted() {
        this.classs = [];
        this.getClassContent();
        axios.get('/attemps').then((response)=>{
            let data = response.data;
            data.forEach(element => {
               this.attemps.push({
                    activity_type: element.activity_type,
                    attemps: element.attemps,
                    created_at: element.created_at,
                    delivery_max_date: element.delivery_max_date,
                    description: element.description,
                    feedback_date: element.feedback_date,
                    id: element.id_activity,
                    id_achievement: element.id_achievement,
                    id_activity: element.id_activity,
                    id_indicator: element.id_indicator,
                    id_student: element.id_student,
                    interaction: JSON.parse(element.interaction),
                    is_required: element.is_required,
                    module: JSON.parse(element.module),
                    name: element.name,
                    rules: element.rules,
                    state: element.state,
                    updated_at: element.updated_at,
                    updated_user: element.updated_user,
               }) 
            });
        })
    },
    methods: {
        getClassContent()
        {
            return new Promise((resolve,reject)=>{
                 axios
                    .get(`/api/teacher/area/${this.id_area}/classroom/${this.id_classroom}/student/${this.id_student}/module/${this.id_module}/class/${this.id_class}`)
                    .then(response => {
                        this.course = response.data;
                        resolve();
                    },e=>reject(e));
            })
        },
        classSelectEvent(_class){
            this.current_class=_class;

            location.href=`/docente/area/${this.id_area}/curso/${this.id_classroom}/estudiante/${this.id_student}/modulo/${this.id_module}/clase/${this.current_class.id}`;
        },
        GoReturnPage(){
             window.history.back();
        },
        openActivityEvent(activity){
            this.current_activity=activity;
             $("#createZ").modal("show");
        },
        SaveScoreAction()
        {

            axios.put( `/api/teacher/activity/${this.current_activity.id}/student/${this.id_student}/score`,{score:this.current_activity.score})
            .then(response => {                
                $("#createZ").modal("hide");
                this.current_activity={};
                location.reload();
            },e=>{
                console.log(e);
                toastr.error(e.message);
                $("#createZ").modal("hide");
            });
        }
    }
}
</script>
<style scoped>

.class_container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    border:2px solid #FFE164;
    border-radius:4px;
    margin-top:10px;
    transition: background 0.8s;
    font-weight: 600;
    font-family: "Century Gothic";
    color:#000;
}
.class_container:hover{
      box-shadow: 0 0 11px rgba(33,33,33,.2);
      cursor: default;
      background: #FFE164 radial-gradient(circle, transparent 1%, white 1%) center/15000%;
      color:#000;
}
.class_container:active {
  background-color: #FFE164;
  background-size: 100%;
  text-decoration: none;
  transition: background 0s;
   color:white;
}
.class_container-active{
     background-color: #FFE164;
     color:#000;
}
.class_notify{
    font-weight: 700;
    color:#278080;
    background: #edffff;
}
.class_content_title{
    padding: 20px;
    background: #f5f5f5;
    color:#278080;
    font-weight: 600;
    font-size: 1.2em;
    border-radius: 5px;
}
.class_container_info{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.class_container_score{
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     align-items: center;
}
.class_container_score>div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left:20px;
}
.class_container_header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.class_container_info-container{
    display: flex;
    flex-direction: column;
}
.activity_score{
    padding:10px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
}
</style>
