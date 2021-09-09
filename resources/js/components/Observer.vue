<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <h1 class="text-center mb-4">Observaciones</h1>
                <div v-show="students  != [] && parents != []">
                    <button class="btn btn-primary mb-3" data-toggle="modal" data-target="#createModal">
                        Crear Observación
                    </button>
                </div>
                
                <div class="card" >                    
                    <div class="card-body">
                        <table>
                            <thead>
                                <tr>
                                    <th>Estudiante</th>
                                    <th>Detalle de la Observación</th>
                                    <th>Creador de la Observación</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody v-for="(student, id) in observers" :key="id">
                                <tr>
                                    <td>{{student.name_student}}</td>
                                    <td>{{student.observation}}</td>
                                    <td>{{student.user_creator}}</td>
                                    <td>
                                        <button class="btn btn-primary" data-toggle="modal" data-target="#EditModal" v-on:click="edit(student)">Editar</button>
                                        <button class="btn btn-primary" data-toggle="modal" data-target="#ViewModal" v-on:click="ViewModal(student)">Ver</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <modal-observer-component v-bind:user="user" :getData="getData">
        </modal-observer-component>

        <modal-edit-observer-component v-bind:studentsView="studentsView" :getData="getData">
        </modal-edit-observer-component>

        <modal-view-observer-component v-bind:studentsView="studentsView">            
        </modal-view-observer-component>
    </div>
</template>
<script>
    export default {
        props: ['user'],
        data() {
            return {
                studentEdit:{},
                studentsView:{},
                students: [],
                parents: [],
                observers: []
            }
        },
        mounted() {
            this.getData();
        },
        filters: {
            addPrhase: function (value) {
                return "uno" + value
            }
        },
        methods: {
            getData() {
                axios.get('/dataUsers').then((response)=>{
                    this.observers = response.data
                }).catch(error => {
                    console.log(error)
                })
            },
            edit(value){                
                this.studentsView = value;
            },
            ViewModal(value){
                this.studentsView = value;
            }
        }
    }

</script>