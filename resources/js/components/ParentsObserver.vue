<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <h1 class="text-center mb-4">Observaciones</h1>
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
                            <tbody v-for="(student, id) in data" :key="id">
                                <tr>
                                    <td>{{student.name_student}}</td>
                                    <td>{{student.observation}}</td>
                                    <td>{{student.user_creator}}</td>
                                    <td>
                                        <button class="btn btn-primary" data-toggle="modal" data-target="#ViewModal" v-on:click="viewModal(student)">Ver</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <modal-view-observer-component v-bind:studentsView="studentsView"></modal-view-observer-component>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                data:[],
                studentsView:{}
            }
        },
        mounted(){
            this.getData();
        },
        methods:{
            getData(){
                axios.get('/dataObserver').then(response=>{
                    this.data = response.data
                })
            },
            viewModal(data){
                this.studentsView = data,
                $("#ViewModal").modal("show");
            }
        }
    }
</script>
