<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card bg-light mb-3">
                    <div class="card-header">Selección de Grado</div>
                    <div class="card-doby">
                        <div>
                            <p>Seleccione el Grado :</p>
                        </div> 
                        <form class="form-inline mt-2">
                            <div class="form-check form-group" v-for="(grade, key) in grades" :key="key">
                                <label for="" class="mr-2">{{grade.grade}}</label>
                                <input class="form-check-input mr-4" v-on:click="gradeSelected(grade.id, grade.grade)" type="radio" name="1" id="">                                
                            </div>
                            <div class="form-group">
                                <button type="button" class="btn btn-primary mt-3" data-toggle="modal" data-target="#exampleModal" v-if="studentsGrades.length > 0">Promover</button>
                            </div>
                        </form>      

                        <div v-if="studentsGrades.length > 0" class="form-group mx-sm-3 mb-2 mt-3">
                            <table class="table table-striped table hover">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Grado</th>
                                    </tr>
                                </thead>
                                <tbody v-for="(studentsG, key) in studentsGrades" :key="key">
                                    <tr>
                                        <td>{{studentsG.name+' '+studentsG.last_name}}</td>
                                        <td>{{studentsG.grade_name}}</td>
                                    </tr>                                    
                                </tbody>
                            </table>
                        </div> 
                        <div v-else>
                            <p class="mt-4">No hay estudiantes para mostrar</p>
                        </div>                 
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Información de estudiantes a Promover</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p><strong>Seguro que desea Promover a los Siguientes estudiantes del grado {{grade_selected}}? </strong></p>
                        <div class="mt-2" v-for="(students, key) in studentsGrades" :key="key">
                            <p>{{students.name+' '+students.last_name}}</p>
                        </div>
                        <label for="" class="mr-2"><strong>Seleccione el grado a Promover</strong></label>
                        <div class="form-check form-group" v-for="(grade, key) in grades" :key="key">                            
                            <label for="" class="mr-4">{{grade.grade}}</label>
                            <input class="form-check-input mr-4" v-on:click="promGrade(grade.id)" type="radio" name="1" id="">                                
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary" v-on:click.prevent="saveData">Guardar Cambios</button>
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
            studentsGrades:[],
            grade_prom:null,
            grade_selected:null
        };
    },

    mounted() {
        axios.get('getGrade').then((response)=>{
            this.grades = response.data;
        }).catch((error)=>{
            console.log(error);
        })
    },
    methods: {
        gradeSelected(grade_id, grade_name){
            this.grade_selected = grade_name
            axios.get(`getStudentsByGrade/${grade_id}`).then((response)=>{
                this.studentsGrades = response.data;
            }).catch((error)=>{
                console.log(error)
            })
        },
        promGrade(grade_id){            
            this.grade_prom = grade_id
            
        },

        saveData(){
            this.studentsGrades.forEach((el)=>{
                axios.put(`/savePromGrade/${el.id}`,{
                    id_grade: this.grade_prom,
                }).then((response)=>{
                    toastr.success('Estudiante Promovido')
                }).catch((error)=>{
                    toastr.info('Ha ocurrido un error, intenta de nuevo mas tarde');
                    console.log(error)
                })
            })
        }
    },
};
</script>