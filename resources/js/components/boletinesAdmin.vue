<template>
    <div>
        <div class="back">
            <div class="row">
                <div class="col-md-12">
                    <div class="text-center">
                        <div class="card-header">
                            <h3>Boletin del Estudiante</h3>
                        </div>
                        <div class="float-right col-md-4 mb-3">
                            <label for="">Buscar</label>
                            <input type="text" class="form-control" placeholder="Estudiante" v-model="filter" />
                        </div>
                        <div class="card-body">
                            <table class="table table-bordered table-striped ml-2">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Boletín</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(student, key) in filteredRows" :key="key">
                                        <td>{{student.name}}</td>
                                        <td>{{student.last_name}}</td>
                                        <td>
                                            <a :href="`/api/student/${student.id}/calification-report`" target="_blank" class="btn btn-primary">Planilla de notas</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
                allStudents: [],
                filter: '',
            };
        },
        mounted() {            
            this.getStudents();
        },
        computed: {
            filteredRows() {
                if(!this.allStudents.filter) return false;

                return this.allStudents.filter((row) => {
                    const name = row.name.toString().toLowerCase();
                    const searchTerm = this.filter.toLowerCase();

                    return name.includes(searchTerm);
                });
            },
        },
        methods: {
            getStudents(){
                axios.get("getStudents").then((response) => {
                    this.allStudents = response.data;
                });
            },
        },
    };
</script>