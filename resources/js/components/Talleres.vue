<template>
    <div id="accordion" v-if="list === true">
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
                                <th>Nota</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(work, key) in workshop" :key="key">
                                <td>{{work.name}}</td>
                                <td>{{work.score_activity}}</td>
                                <td>
                                    <button class="btn btn-primary" v-on:click="activity(work)">Presentar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>                
            </div>
        </div>        
    </div>
    <div v-else>
        <div v-if="id_achievement !== null">
            <show-taller :id_achievement="id_achievement" :id_class="id_class" :id_area="id_area" :type_user="type_u" :id_bimestre="id_bimestre" :id_workshop="id_workshop" :backPage="backPage"></show-taller>
        </div>        
    </div>
</template>
<script>
import ShowTaller from './ShowTaller.vue';
export default {
  components: { ShowTaller }, 
    props:['id_area','id_classroom','type_u'],
    data() {
        return {
            bimestres:[],
            workshop:[],
            id_achievement:null,
            id_class:null,
            list:true,
            id_bimestre: null,
            id_workshop:null
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
            this.id_bimestre = id;      
            axios.get(`getWorkShop/${id}/${this.id_area}/${this.id_classroom}`).then((response)=>{                
                this.workshop = response.data;                 
            })                
        },
        activity(data){
            this.id_workshop = data.id_workshop;
            this.list = false;
            this.id_achievement = data.id_achievement;
            this.id_class = data.id_class;           
        },

        backPage(){
            this.list = true;
            this.id_achievement = null;
            this.id_class = null;
        }
    },
    
};
</script>