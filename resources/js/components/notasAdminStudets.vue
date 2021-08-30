<template>
    <div class="back">
        <div class="row">        
            <div id="crud" class="col-md-10 mx-auto">
                <div class="card-container">
                    <div class="card text-center">
                        <div class="card-header">
                            <h3>Avance de Estudiantes</h3>
                        </div>                        
                        <div class="card-body">
                            <div class="mb-2">                            
                                <input type="text" placeholder="Buscar Grado" class="form-control" v-model="filter" />
                            </div>           
                            <div id="accordion">
                                <div class="card" v-for="(grade, t) in filteredRows" :key="t">
                                    <div class="card-header" :id="`heading${t}`">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link" v-on:click="()=>getStudentsGrade(grade.id)" data-toggle="collapse" :data-target="`#collapse${t}`" aria-expanded="true" :aria-controls="`collapse${t}`">
                                                {{grade.grade}}
                                            </button>
                                        </h5>
                                    </div>

                                    <div :id="`collapse${t}`" class="collapse hide" :aria-labelledby="`heading${t}`" data-parent="#accordion">
                                        <div class="card-body">
                                            
                                            <div id="accordion1">
                                                <div v-if="students.length > 0">
                                                    <div class="card" v-for="(student, k) in students" :key="k">
                                                    
                                                        <div class="card-header" :id="`studentHeadingOne${k}${grade.id}`">
                                                            <h5 class="mb-0">                                                            
                                                                <button class="btn btn-link" data-toggle="collapse" :data-target="`#collapseStudents${k}${grade.id}`" aria-expanded="true" :aria-controls="`collapseStudents${k}${grade.id}`">
                                                                    {{student.name+' '+student.last_name}}
                                                                </button>                                                            
                                                            </h5>
                                                        </div>

                                                        <div :id="`collapseStudents${k}${grade.id}`" class="collapse hide" :aria-labelledby="`studentHeadingOne${k}${grade.id}`" data-parent="#accordion1">
                                                            <div class="card-body">
                                                                                                                    
                                                                <div class="card" v-for="(area, l) in grade.areas" :key="l">
                                                                    <div class="card-header" :id="`areasHeadingOne${k}${grade.id}${student.id}`">
                                                                        <h5 class="mb-0">
                                                                            <a :href="`docente/area/${area.id}/curso/${grade.id}/estudiante/${student.id}`" class="btn btn-primary">
                                                                                {{area.name}}
                                                                            </a>
                                                                        </h5>
                                                                    </div>                                                                
                                                                </div>
                                                            </div>
                                                        </div>                                                        
                                                    </div>
                                                </div>
                                                <div v-else>
                                                    <div id="accordionNoStudent">                                                        
                                                        <div class="card">
                                                            <div class="card-header" id="headingNoStudents">
                                                                <h5 class="mb-0">
                                                                    <p>
                                                                        Sin Estudiantes Registrados
                                                                    </p>
                                                                </h5>
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
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                grades:[],
                students:[],
                filter:''
            };
        },
        mounted() {
            this.getGrades();
        },
        methods: {
            getGrades(){
                axios.get('getAllGrades').then((response)=>{        
                    this.grades = response.data;                    
                })
            },

            getStudentsGrade(idGrade){
                axios.get(`progressAdminStudent/${idGrade}`).then((response)=>{
                    this.students = response.data;
                })
            },
        },

        computed: {
            filteredRows() {
                if(!this.grades.filter) return false;

                return this.grades.filter((row) => {
                    const name = row.grade.toString().toLowerCase();
                    const searchTerm = this.filter.toLowerCase();

                    return name.includes(searchTerm);
                });
            },
        },
    };
</script>
<style></style>
