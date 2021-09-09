<template>
    <!-- Modal -->
    <div class="modal fade" id="EditModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edición de Observación</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h3>Información del Estudiante</h3>
                    <div class="row">
                        <div class="col-6">
                            <label for="name_student">Nombre</label>
                            <input id="name_student" disabled class="form-control" type="text" v-model="newStudentView.name_student" required/>
                        </div>
                        <div class="col-6">
                            <label for="date_birth">Fecha de Nacimiento</label>
                            <input id="date_birth" class="form-control" type="date" v-model="newStudentView.date_birth" required/>
                        </div>
                        <div class="col-6">
                            <label for="ageEst">Edad</label>
                            <input id="ageEst" class="form-control" type="number" v-model="newStudentView.age" required/>
                        </div>
                        <div class="col-6">
                            <label for="sizeEst">Talla</label>
                            <input id="sizeEst" class="form-control" type="text" v-model="newStudentView.size" required/>
                        </div>
                        <div class="col-6">
                            <label for="weight_Est">Peso</label>
                            <input id="weight_Est" class="form-control" type="text" v-model="newStudentView.weight" required/>
                        </div>
                        <div class="col-6">
                            <label for="identification_Est">Identificación</label>
                            <input id="identification_Est" class="form-control" type="text" v-model="newStudentView.identification" required/>
                        </div>
                    </div>
                    <h3 class="mt-5">Información de los Acudientes</h3>
                    <div class="row">
                        <div class="col-6">
                            <label for="fatherName">Nombre del Padre</label>
                            <input id="father_name" disabled class="form-control" type="text" v-model="newStudentView.father_name" />
                        </div>
                        <div class="col-6">
                            <label for="office_Father">Profesión u Oficio</label>
                            <input id="office_Father" class="form-control" type="text" v-model="newStudentView.office_father" />
                        </div>
                        <div class="col-6">
                            <label for="motherName">Nombre de la Madre</label>
                            <input id="mother_name" disabled class="form-control" type="text" v-model="newStudentView.mother_name" />
                        </div>
                        <div class="col-6">
                            <label for="office_Mother">Profesión u Oficio</label>
                            <input id="office_Mother" class="form-control" type="text" v-model="newStudentView.office_mother" >
                        </div>
                    </div>
                    <h3 class="mt-5">Información General</h3>
                    <div class="row">
                        <div class="col-6">
                            <label for="address_general">Dirección</label>
                            <input id="address_general" class="form-control" type="text" v-model="newStudentView.address" required/>
                        </div>
                        <div class="col-6">
                            <label for="phone_general">Telefono</label>
                            <input id="phone_general" class="form-control" type="text" v-model="newStudentView.phone" required/>
                        </div>
                        <div class="col-6 mt-3">    
                            <label for="Repitente">Repitente</label>
                            <input type="checkbox" class="ml-2" id="Repitent" v-model="newStudentView.repitent" required>
                        </div>
                    </div>
                    <h3 class="mt-2">Anotación de la Observación</h3>
                    <div class="row">
                        <div class="col">
                            <label for="Observer_est">Observaciones</label>
                            <textarea id="Observer_est" class="form-control" v-model="newStudentView.observation" required/>
                            </div>
                        </div>            
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-Primary" data-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary" v-on:click="updateObservation()">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
    export default {
        props:['studentsView','getData'],
        data(){
            return {
                newStudentView:{},
            }
        },
        watch: { 
            studentsView: function(newVal, oldVal) { // watch it
                if(newVal !== oldVal){
                    this.newStudentView = newVal;
                }
            }
        },

        methods:{
            updateObservation(){
                const data = {
                    'name_student': this.newStudentView.name_student,
                    'id_student': this.newStudentView.id_student,
                    'age':this.newStudentView.age,
                    'date_birth': this.newStudentView.date_birth,
                    'size': this.newStudentView.size,
                    'weight': this.newStudentView.weight,
                    'identification': this.newStudentView.identification,
                    // 'father_name': this.newStudentView.fatherToSave.text,
                    'office_father': this.newStudentView.office_father,
                    // 'mother_name': this.newStudentView.motherToSave.text,
                    'office_mother': this.newStudentView.office_mother,
                    'user_creator': this.newStudentView.user_creator,
                    'address': this.newStudentView.address,
                    'phone': this.newStudentView.phone,
                    'repitent': this.newStudentView.repitent === true ? true : false,
                    'observation': this.newStudentView.observation
                }                
                axios.put(`/observer/${this.newStudentView.id}`,data).then((response)=>{
                    toastr.success("Datos Guardados")
                    this.getData();
                    $("#EditModal").modal("hide");
                }).catch((error)=>{                    
                    toastr.error("Diligencia los campos requeridos")
                })
            }
        }
    }
</script>
