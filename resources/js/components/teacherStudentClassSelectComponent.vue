<template>
      <div class="row">
            <div class="col-12 col-md-12">
                <div class="class_container_header">
                    <span>Seleccione clase:</span>
                    <button class="btn btn-link" @click="GoReturnPage()">Regresar</button>
                </div>
                <div v-for="(_class,k_class) in classs" v-bind:key="k_class" class="class_container" v-bind:class="{ 'class_container-active': (current_class.id==_class.id) }" @click="classSelectEvent(_class)" >
                    <div class="class_container_info">
                        <div  class="class_container_info-container">
                            <span>{{_class.name}}</span>
                              <small class="class_notify" v-if="_class.pending_calification>0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                                        <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                                        <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                                    </svg>
                                    Actividades pendientes de calificación
                                </small>
                         </div>

                        <div class="class_container_score">
                            <div>
                                <span v-if="_class.progress>-1">{{_class.progress}}%</span>
                                <span v-else>-</span>
                                <small>Progreso</small>
                            </div>
                            <div>
                                <span v-if="_class.score>-1">{{_class.score}}/5</span>
                                <span v-else>-</span>
                                <small>Calificación</small>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
</template>
<script>
export default {
    props: ['id_area','id_classroom','id_student','id_module'],
    data() {
        return {
            classs:[],
            current_class:{}
        }
    },
    mounted() {
        this.classs = [];
        this.getStudentCalifications();
    },
    methods: {
        getStudentCalifications()
        {
            return new Promise((resolve,reject)=>{
                axios.get(`/api/teacher/area/${this.id_area}/classroom/${this.id_classroom}/student/${this.id_student}/module/${this.id_module}/class`).then(response => {
                    this.classs = response.data;
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
    border:2px solid #ffc039;
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
      background: #ffc039 radial-gradient(circle, transparent 1%, white 1%) center/15000%;
      color:#000;
}
.class_container:active {
  background-color: #ffc039;
  background-size: 100%;
  text-decoration: none;
  transition: background 0s;
   color:white;
}
.class_container-active{
     background-color: #ffc039;
     color:#000;
}
.class_notify{
    font-weight: 700;
    color:#278080;
    background: #edffff;
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
</style>
