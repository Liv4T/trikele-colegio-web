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
                        <form class="form-inline mt-2 mb-5">                                                       
                            <div class="form-check form-group" v-for="(grade, key) in grades" :key="key">
                                <label for="" class="mr-2">{{grade.grade}}</label>
                                <input class="form-check-input mr-4" v-on:click="gradeSelected(grade.id)" type="radio" name="1" id="">
                            </div>                                                    
                        </form>      

                        <div v-if="studentsGrades.length > 0" class="form-group mx-sm-3 mb-2">
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
                            No ha estudiantes para mostrar    
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
            studentsGrades:[]
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
        gradeSelected(grade_id){
            axios.get(`getStudentsByGrade/${grade_id}`).then((response)=>{
                this.studentsGrades = response.data;
            }).catch((error)=>{
                console.log(error)
            })
        }
    },
};
</script>