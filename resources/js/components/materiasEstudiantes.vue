<template>
    <div class="back-calendar">
        <div class="form-group width-r mx-auto">
            <div class="row pd-20">                
                <div class="col-md-2" v-for="(area, t) in areas" :key="t">
                    <a v-on:click="cleanOtherSection" href="http://" class="btn btn-warning mg-btn" :style="area.style" @click.prevent="nameArea = area.text, colorTitle = area.titleColor, idArea = area.id, idClassroom = area.id_classroom">
                        <h6 class="letra-poppins-bold" style="color: black">{{ nameMinus(area.text) }}</h6>
                    </a>                    
                </div>
            </div>
        </div>
        <div v-if="nameArea != ''">
            <div v-if="showSection ==='inicio'" class="form-group text-center">
                <a href="" class="btn btn-warning letra-poppins-bold" :style="`${colorTitle} border-color: #ffa4f2;`"
                ><h1 style="color: black">{{ nameMinus(nameArea) }}</h1>
                </a>
            </div>
            <div>                
                <div class="text-center mr-5">
                    <div v-if="showSection === 'inicio'" class="tabs">
                        <!-- <a v-on:click="activetab = 1" v-bind:class="[activetab === 1 ? 'active' : '']"><h2 class="letra-poppins-bold">CALENDARIO</h2></a> -->
                        <a v-on:click="activetab = 2" v-bind:class="[activetab === 2 ? 'active' : '']"><h2 class="letra-poppins-bold">CLASE</h2></a>
                        <a v-on:click="activetab = 3" v-bind:class="[activetab === 3 ? 'active' : '']"><h2 class="letra-poppins-bold">TAREA</h2></a>
                        <a v-on:click="activetab = 4" v-bind:class="[activetab === 4 ? 'active' : '']"><h2 class="letra-poppins-bold">NOTAS</h2></a>
                        <a v-on:click="activetab = 5" v-bind:class="[activetab === 5 ? 'active' : '']"><h2 class="letra-poppins-bold">EXAMENES</h2></a>
                    </div>
                    <div v-if="showSection === 'inicio'">
                        <!-- <div v-if="activetab === 1" class="tabcontent"><calendar-component :type_u="3" :user="user"></calendar-component></div> -->
                        <div v-if="activetab === 2" class="tabcontent">   
                            <div v-if="idArea !== ''">                                
                                <bimestre-list-component :id_area="idArea" :id_classroom="idClassroom" :type_u="user"></bimestre-list-component>
                            </div>
                        </div>
                            
                        <div v-if="activetab === 3" class="tabcontent">
                            <repo-student :nameArea="nameArea" :planifications="planifications" :id_lective_planification="id_lective_planification"></repo-student>
                        </div>
                        <div v-if="activetab === 4" class="tabcontent">
                            <notas-component :id_area="idArea" :id_user="id_user"></notas-component>
                        </div>

                        <div v-if="activetab === 5" class="tabcontent">
                            <talleres :id_area="idArea" :id_classroom="idClassroom" :type_u="user"></talleres>
                        </div>
                    </div>
                    <div v-else-if="showSection === 'chat'">
                        <group-chat v-for="group in groups" :group="group" :key="group.id" :user_auth="user"></group-chat>
                    </div>
                    <!-- <div v-else-if="showSection === 'question'">

                    </div> -->
                    <div v-else-if="showSection === 'message'">
                        <mensajes-component :user="user"></mensajes-component>
                    </div>
                </div>
            </div>
        
            <div class="form-group text-center">
                <a class="btn btn-warning mg-btn">
                    <h1 class="letra-poppins-bold">Actividades Pendientes</h1>
                    <div class="card activity-event-container">
                        <div class="activity-event" v-for="(activity,i_activity) in activities" v-bind:key="i_activity">
                            <div class="activity-event-info">
                                <span>[{{activity.area_name}} {{activity.classroom_name}}]<br>{{activity.name}}</span>
                            </div>

                            <div class="activity-event-date">
                                <small>Inicio de Clase:</small>
                                <span>{{activity.date_init_class|formatDate}}</span>
                            </div>

                            <div class="activity-event-date">   
                                <small>URL de Clase:</small>                                     
                                <a :href="activity.url_class" class="badge badge-primary" target="_blank">{{activity.url_class}}</a>
                            </div>

                            <div class="activity-event-date" v-if="activity.interaction_state==2">
                                <small>Fecha de Retroalimentación:</small>
                                <span>{{activity.feedback_date|formatDate}}</span>
                            </div>
                        
                            <div class="activity-event-date" v-else>
                                <small>Fecha Limite:</small>
                                <span>{{activity.delivery_max_date|formatDate}}</span>
                            </div>                                    

                            <div class="activity-event-action">
                                <a class="btn btn-link" v-on:click="getActivityId(activity.weekly_plan_id, activity.id_class)">Ir a Actividad</a>                                
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>    
</template>
<script>
import pdf from "vue-pdf";
import moment from "moment";
  moment.tz.setDefault("America/Bogota");
  moment.locale("es");
export default {
    components: {
        pdf,
    },
    props: ["user","id_user"],
    data() {
        return {
            clases: [],
            colorClass:[
                {
                    area: 'Español',
                    style: "background-color: #FFB466; border-color: #FFB466; box-shadow: 3px 3px 3px 3px #b0acac",
                    title: "background-color: #FFB466;"
                },{
                    area: 'Matematicas',
                    style: "background-color: #FFEA47; border-color: #FFEA47; box-shadow: 3px 3px 3px 3px #b0acac",
                    title: "background-color: #FFEA47;"
                },{
                    area: 'Inglés',
                    style:"background-color: #A639B0; border-color: #A639B0; box-shadow: 3px 3px 3px 3px #b0acac",
                    title:"background-color: #A639B0;"
                },{
                    area: 'Química',
                    style: "background-color: #50E9FB; border-color: #50E9FB; box-shadow: 3px 3px 3px 3px #b0acac",
                    title: "background-color: #50E9FB;"
                },{
                    area: 'Educación física',
                    style: "background-color: #FFA4F2; border-color: #FFA4F2; box-shadow: 3px 3px 3px 3px #b0acac",
                    title: "background-color: #FFA4F2;"
                },{
                    area: 'Electivas',
                    style: "background-color: #49CEFB; border-color: #49CEFB; box-shadow: 3px 3px 3px 3px #b0acac",
                    title: "background-color: #49CEFB;"
                },{
                    area: 'Física',
                    style: "background-color: #4E92FD; border-color: #4E92FD; box-shadow: 3px 3px 3px 3px #b0acac",
                    title: "background-color: #4E92FD;"
                },
                {
                    area: 'Religión',
                    style: "background-color: #FF5552; border-color: #FF5552; box-shadow: 3px 3px 3px 3px #b0acac",
                    title: "background-color: #FF5552;"
                },
                {
                    area: 'Sociales',
                    style: "background-color: #FFC0F6; border-color: #FFC0F6; box-shadow: 3px 3px 3px 3px #b0acac",
                    title: "background-color: #FFC0F6;"
                },
                {
                    area: 'Biología',
                    style: "background-color: #B8FFC2; border-color: #B8FFC2; box-shadow: 3px 3px 3px 3px #b0acac",
                    title: "background-color: #B8FFC2;"
                },
                {
                    area: 'Ciencias naturales',
                    style: "background-color: #FFD05C; border-color: #FFD05C; box-shadow: 3px 3px 3px 3px #b0acac",
                    title: "background-color: #FFD05C;"
                },
                {
                    area: 'STEAM',
                    style: "background-color: #1CABBA; border-color: #1CABBA; box-shadow: 3px 3px 3px 3px #b0acac",
                    title: "background-color: #1CABBA;"
                },
                {
                    area: 'Programación',
                    style: "background-color: #DD68D2; border-color: #DD68D2; box-shadow: 3px 3px 3px 3px #b0acac",
                    title: "background-color: #DD68D2;"
                },
                {
                    area: 'Tecnología',
                    style: "background-color: #F98200; border-color: #F98200; box-shadow: 3px 3px 3px 3px #b0acac",
                    title: "background-color: #F98200;"
                },
                {
                    area: 'Música',
                    style: "background-color: #69D5FF; border-color: #69D5FF; box-shadow: 3px 3px 3px 3px #b0acac",
                    title: "background-color: #69D5FF;"
                },
                {
                    area: 'Arte',
                    style: "background-color: #51F461; border-color: #51F461; box-shadow: 3px 3px 3px 3px #b0acac",
                    title: "background-color: #51F461;"
                },
                {
                    area: 'Danza',
                    style: "background-color: #0055FF; border-color: #0055FF; box-shadow: 3px 3px 3px 3px #b0acac",
                    title: "background-color: #0055FF;"
                },
                {
                    area: 'Teatro',
                    style: "background-color: #71A8FF; border-color: #71A8FF; box-shadow: 3px 3px 3px 3px #b0acac",
                    title: "background-color: #71A8FF;"
                },
                {
                    area: 'Robótica',
                    style: "background-color: #FF92A4; border-color: #FF92A4; box-shadow: 3px 3px 3px 3px #b0acac",
                    title: "background-color: #FF92A4;"
                },
                {
                    area: 'Emprendimiento',
                    style: "background-color: #D88000; border-color: #D88000; box-shadow: 3px 3px 3px 3px #b0acac",
                    title: "background-color: #D88000;"
                },
                {
                    area: 'Psicología',
                    style: "background-color: #EDCB00; border-color: #EDCB00; box-shadow: 3px 3px 3px 3px #b0acac",
                    title: "background-color: #EDCB00;"
                },
                
            ],
            areas: [],
            descripcion: "",
            logro: "",
            fechaE: "",
            fechaR: "",
            id_act: "",
            errors: [],
            fillS: [],
            activities:[],
            activetab: 1,
            nameArea: "",
            id_lective_planification: "",
            idArea:"",
            idClassroom:"",
            planifications: "",
            colorTitle:"",
            lectivs: false,
            idModule:"",
            idClass :"",
            planif:"claseEst",
            showSection: "inicio",
            groups:{}
        };
    },
    mounted() {
        axios.get("/api/lectives").then((response) => {
            if(response.data.length > 0){
                this.planifications = response.data;
                this.lectivs = true;
            }else{
                this.lectivs = false;
            }          
        });
    
        var url = "/GetArearByUser";
        axios.get(url).then((response) => {
            this.areas = response.data;
            this.areas.forEach((e)=>{
                this.colorClass.filter(i=>{
                    // console.log(i.area === e.text);  
                    let text1 = i.area;
                    let text2 = e.text;

                    text1 = this.nameMinus(text1);
                    text2 = this.nameMinus(text2);

                    if(text1 === text2){                        
                        e.style = i.style;
                        e.titleColor = i.title;
                    }                    
                })
            })
        });
        // console.log("Component mounted.");        
    },
    watch:{
        nameArea(new_value, old_value){
            if(old_value != new_value){
                this.getActivitiesStudents(new_value);
            }
        }
    },
    methods: {        
        getActivitiesStudents(nameArea){
            this.activities = [];
            axios.get("/api/student/activity").then((response) => {
                let activs = []
                activs = Object.values(response.data);
                activs = activs.filter((e)=>e.area_name === nameArea);

                activs.forEach((el)=>{
                    if(el.activityForAllStudents == 1){
                        
                        if(el.selectedStudents == "[]" || el.selectedStudents == null){
                            this.activities.push(el)
                        }
                        
                        }else if(el.activityForPIARStudents == 1){

                        let PIARStudents= JSON.parse(el.selectedStudents);
                        PIARStudents.forEach((e)=>{
                            if(e.id == this.user.id){
                                this.activities.push(el)   
                            }
                        });

                        }else if(el.activityForSelectStudents == 1){
                            
                        let selectedStudents= JSON.parse(el.selectedStudents);
                        selectedStudents.forEach((e)=>{
                            if(e.id == this.user.id){
                                this.activities.push(el)   
                            }
                        });
                    }
                })
            });
        },
        
        modaliniciar() {
            var url = window.location.origin + "/SaveTerms";

            axios.post(url, {
                status: 1,
            }).then((response) => {
                this.errors = [];
                $("#modalini").modal("hide");
            }).catch((error) => {
                this.errors = error.response.data;
            });
        },

        // /estudiante/modulo/${activity.weekly_plan_id}/clase/${activity.id_class}

        getActivityId(id_module, id_class){
            this.idClass = id_module;
            this.idModule = id_class;            
            this.activetab !== 2 ? this.activetab = 2 : this.activetab;
        },
        nameMinus(name){
          var nameMinus=name;
          return nameMinus.normalize("NFD");
        },
        showOtherSection(data){            
            if(data === 'chat'){
                axios.get('/chat2').then((response)=>{
                    this.groups = response.data
                })
            }
            this.showSection = data
        },
        cleanOtherSection(){
            this.showSection = 'inicio';
            this.groups= {}
        }
    },
    filters: {
        formatDate: (value) => {
            if (value) {
                return moment(String(value)).format("DD MMMM YYYY hh:mm a");
            }
        },
    },
};
</script>
<style>
.mg-btn {
  margin: 10px;
  min-width: 165px;
}
.width-r {
  max-width: 97%;
  border: 1px solid #cccccc82;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px #b0acac;
}
.tabs {
  margin-top: 20px;
  overflow: hidden;
  margin-left: 200px;
  margin-bottom: -2px;
}

.tabs ul {
  list-style-type: none;
  margin-left: 20px;
}

.tabs a {
  float: left;
  cursor: pointer;
  padding: 12px 24px;
  transition: background-color 0.2s;
  border: 1px solid #ccc;
  border-right: none;
  background-color: #bfbfbf;
  border-radius: 10px 10px 0 0;
  font-weight: bold;
  color: #fff !important;
}
.tabs a:last-child {
  border-right: 1px solid #ccc;
}
.pd-20 {
  padding: 20px;
}

/* Change background color of tabs on hover */
.tabs a:hover {
  background-color: #aaa;
  color: #fff;
}

/* Styling for active tab */
.tabs a.active {
  background-color: #00cbcec1;
  color: #fff;
  border-bottom: 2px solid #fff;
  cursor: default;
}
.tabcontent {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 3px 3px 6px #e1e1e1;
}
.content-azul {
  background-color: #00cbcec6;
}
.flotante {
  position: fixed;
  top: 380px;
  z-index: 1020;
}
</style>
