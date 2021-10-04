<template>
    <div id="accordion">
        <div class="card" v-for="(bimestre, key) in bimestres" :key="key">
            <div class="card-header" :id="`heading${key}`">
                <h5 class="mb-0">
                    <button v-on:click="getIdBimestre(bimestre.id)" class="btn btn-link" data-toggle="collapse" :data-target="`#collapse${key}`" aria-expanded="true" :aria-controls="`collapse${key}`">
                        {{bimestre.name}}
                    </button>
                </h5>
            </div>

            <div :id="`collapse${key}`" class="collapse hide" :aria-labelledby="`heading${key}`" data-parent="#accordion">
                <div class="card-body">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Actividad</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(work, key) in workshop" :key="key">
                                <td>{{work.name}}</td>
                                <td>
                                    <button class="btn btn-primary" v-on:click="activity(data)">Presentar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- <div class="card-body" v-for="(activity,key_a) in course.activities" v-bind:key="key_a">
                    <activity-questionary v-if="activity.activity_type=='CUESTIONARIO' || activity.activity_type == 'CUESTIONARIO_UNICA_RTA'" v-bind:module="activity.module" v-bind:disabled="course.state==2"></activity-questionary>
                    <activity-complete-sentence v-if="activity.activity_type=='COMPLETAR_ORACION'" v-bind:module="activity.module" v-bind:disabled="course.state==2"></activity-complete-sentence>
                    <activity-relationship v-if="activity.activity_type=='RELACION'" v-bind:module="activity.module" v-bind:disabled="course.state==2"></activity-relationship>
                    <activity-crossword v-if="activity.activity_type=='CRUCIGRAMA'" v-bind:module="activity.module" v-bind:disabled="course.state==2"></activity-crossword>
                </div> -->
            </div>
        </div>        
    </div>
</template>
<script>
export default { 
    props:['id_area','id_classroom'],
    data() {
        return {
            bimestres:[],
            workshop:[]
        };
    },
    mounted() {
        this.getData();
        
    },
    methods: {
        getData(){            
            axios.get('/bimestres').then((response) => {
                this.bimestres = response.data;
            });
        },

        getIdBimestre(id){            
            axios.get(`getWorkShop/${id}/${this.id_area}/${this.id_classroom}`).then((response)=>{
                this.workshop = response.data;
                // data.forEach(element => {
                //     axios.get(`/api/teacher/module/${element.id_achievement}/class/${element.id_class}`).then((response) => {
                //         this.course=response.data;
                //         console.log('Cursos',response.data)

                //         if(this.course.content.length==0)
                //         {
                //             this.course.content=[
                //                 {
                //                     content_type:'YOUTUBE',
                //                     content:'',
                //                     description:''
                //                 },
                //                 {
                //                     content_type:'LINK',
                //                     content:'',
                //                     description:''
                //                 },
                //                 {
                //                     content_type:'DOCUMENT',
                //                     content:'',
                //                     description:''
                //                 }
                //             ];
                //         }

                //         if(this.course.activities.length>0)
                //         {
                //             this.course.activities.forEach(act=>{
                //                 act.delivery_max_date=act.delivery_max_date ? act.delivery_max_date && delivery_max_date.replace(" ","T") : '';
                //                 act.feedback_date=act.feedback_date.replace(" ","T");
                //                 this.GetIndicatorsEvent(act);
                //             });
                //         }
                //     });
                // });
            })            
        },
        activity(data){
            console.log(data);
        }
    },
    
};
</script>