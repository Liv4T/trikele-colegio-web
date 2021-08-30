<template>
    <div>
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-12">
                <div class="card text-center">                    
                    <div class="card-body">                                                
                        <div id="accordion">
                            <div class="card" v-for="(bim, key) in bimestres" :key="key">
                                <div v-if="bim.status === 1">
                                    <div class="card-header" :id="`heading${key}`">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link" v-on:click="()=>sendId(bim.id)" data-toggle="collapse" :data-target="`#collapse${key}`" aria-expanded="true" :aria-controls="`collapse${key}`">
                                                {{bim.name}}
                                            </button>
                                        </h5>
                                    </div>
                                    <div v-if="type_u === 1 || type_u === 2">
                                        <div :id="`collapse${key}`" class="collapse hide" :aria-labelledby="`heading${key}`" data-parent="#accordion">
                                            <div class="card-body" v-if="id_bimestre_to_courses !== null">
                                                <teacher-courses :user="user" :id_area="idArea" :id_classroom="idClassroom" :id_bimestre="id_bimestre_to_courses"></teacher-courses>
                                            </div>
                                        </div>
                                    </div>                                    
                                    <div v-else-if="type_u === 3">
                                         <div :id="`collapse${key}`" class="collapse hide" :aria-labelledby="`heading${key}`" data-parent="#accordion">
                                            <div class="card-body" v-if="id_bimestre_to_courses !== null">
                                                <student-courses :id_area="idArea" :id_classroom="idClassroom" :id_bimestre="id_bimestre_to_courses"></student-courses>
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
    </div>
</template>
<script>

export default {
    props:["id_area","id_classroom","type_u", "user"],
    data() {
        return {
            bimestres:[],
            idBimestre:null,
            bimestre_name:"",
            idArea:null,
            idClassroom: null,
            id_bimestre_to_courses: null
        };
    },

    mounted() {
        this.idArea = this.id_area;
        this.idClassroom =this.id_classroom;
        this.getData();
    },
    watch:{
        id_area: function(newVal, oldVal){
            if(newVal !== oldVal){
                this.idArea = newVal;
            }
        },

        id_classroom: function(newVal, oldVal){
            if(newVal !== oldVal){
                this.idClassroom = newVal
            }
        }
    },
    methods: {
        getData(){            
            axios.get('/bimestres').then((response) => {
                this.bimestres = response.data;                
            });
        },   
        sendId(idBim){
            this.id_bimestre_to_courses = idBim
        }     
    },
};
</script>