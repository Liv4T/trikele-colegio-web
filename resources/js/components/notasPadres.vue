<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card">
                    <div class="card-header">
                        <h3>Notas Academicas</h3>
                    </div>
                    <div class="card-body">
                        <div class="accordion" id="accordionExample">
                            <div class="card" v-for="(area, key) in areas" :key="key">
                                <div class="card-header text-center" :id="`$heading${key}`">
                                    <h2 class="mb-0">
                                        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" :data-target="`#collapse${key}`" aria-expanded="true" :aria-controls="`collapse${key}`">
                                            <p>{{key}}</p>
                                        </button>
                                    </h2>
                                </div>

                                <div :id="`collapse${key}`" class="collapse show" :aria-labelledby="`$heading${key}`" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <table class="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Materia</th>
                                                    <th>Acción</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                    <tr v-for="(data, key) in area" :key="key">
                                                        <td>{{data.text}}</td>
                                                        <td><button v-on:click="getAllReport(data)" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Mostrar Notas</button></td>
                                                    </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>   
        <!-- Modal -->
        <div id="exampleModal" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{nameClass}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">                        
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Correo Estudiante</th>
                                    <th>Calificación Pendiente</th>
                                    <th>Progreso</th>
                                    <th>Nota</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(note, key) in notes" :key="key">
                                    <td>{{note.user_email}}</td>
                                    <td>{{note.pending_calification}}</td>
                                    <td>{{note.progress}} %</td>
                                    <td>{{note.score}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>     
    </div>
</template>
<script>
export default {
    props:['user'],
    data() {
        return{
            areas: [],
            notes: {},
            nameClass: null
        }
    },

    mounted(){
        this.getData();
    },

    methods:{
        getData(){
            axios.get('/getAreas').then((response)=>{                
                this.areas = response.data;
            })
        },
        getAllReport(data){
            this.nameClass = data.text;
            axios.get(`/getNotes/${data.id_student}/${data.id_area}/${data.id_classroom}`).then((response)=>{
                this.notes = response.data;
            })
        }
    }
}
</script>