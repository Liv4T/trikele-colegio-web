<template>
    <!-- Modal -->
    <div class="modal fade" id="createModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Creación de Observación</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h3>Información del Estudiante</h3>
                    <div class="row">
                        <div class="col-6">
                            <label for="name">Nombre</label>
                            <multiselect v-model="studentToSave" :options="studentsOptions" :multiple="false"
                                :close-on-select="false" :clear-on-select="false" :preserve-search="true"
                                placeholder="Seleccione una o varias" label="text" track-by="id"
                                :preselect-first="false">
                                <template slot="selection" slot-scope="{ values, isOpen }"><span
                                        class="multiselect__single"
                                        required
                                        v-if="values.length &amp;&amp; !isOpen">{{ values.length }} opciones
                                        selecionadas</span></template>
                            </multiselect>
                        </div>
                        <div class="col-6">
                            <label for="dateBirth">Fecha de Nacimiento</label>
                            <input id="dateBirth" class="form-control" type="date" v-model="dateBirth" required/>
                        </div>
                        <div class="col-6">
                            <label for="age">Edad</label>
                            <input id="age" class="form-control" type="number" v-model="age" required/>
                        </div>
                        <div class="col-6">
                            <label for="size">Talla</label>
                            <input id="size" class="form-control" type="text" v-model="size" required/>
                        </div>
                        <div class="col-6">
                            <label for="weight">Peso</label>
                            <input id="weight" class="form-control" type="text" v-model="weight" required/>
                        </div>
                        <div class="col-6">
                            <label for="identification">Identificación</label>
                            <input id="identification" class="form-control" type="text" v-model="identification" required/>
                        </div>
                    </div>
                    <h3 class="mt-5">Información de los padres</h3>
                    <div class="row">
                        <div class="col-6">
                            <label for="fatherName">Nombre del Padre</label>
                            <multiselect v-model="fatherToSave" :options="parentsOptions" :multiple="false"
                                :close-on-select="false" :clear-on-select="false" :preserve-search="true"
                                placeholder="Seleccione una o varias" label="text" track-by="id"
                                :preselect-first="false">
                                <template slot="selection" slot-scope="{ values, isOpen }"><span
                                        class="multiselect__single"
                                        v-if="values.length &amp;&amp; !isOpen">{{ values.length }} opciones
                                        selecionadas</span></template>
                            </multiselect>
                        </div>
                        <div class="col-6">
                            <label for="officeFather">Profesión u Oficio</label>
                            <input id="officeFather" class="form-control" type="text" v-model="officeFather" />
                        </div>
                        <div class="col-6">
                            <label for="motherName">Nombre de la Madre</label>
                            <multiselect v-model="motherToSave" :options="parentsOptions" :multiple="false"
                                :close-on-select="false" :clear-on-select="false" :preserve-search="true"
                                placeholder="Seleccione una o varias" label="text" track-by="id"
                                :preselect-first="false">
                                <template slot="selection" slot-scope="{ values, isOpen }"><span
                                        class="multiselect__single"
                                        v-if="values.length &amp;&amp; !isOpen">{{ values.length }} opciones
                                        selecionadas</span></template>
                            </multiselect>
                        </div>
                        <div class="col-6">
                            <label for="officeMother">Profesión u Oficio</label>
                            <input id="officeMother" class="form-control" type="text" v-model="officeMother" >
                        </div>
                    </div>
                    <h3 class="mt-5">Información General</h3>
                    <div class="row">
                        <div class="col-6">
                            <label for="address">Dirección</label>
                            <input id="address" class="form-control" type="text" v-model="address" required/>
                        </div>
                        <div class="col-6">
                            <label for="phone">Telefono</label>
                            <input id="phone" class="form-control" type="text" v-model="phone" required/>
                        </div>
                        <div class="col-6 mt-3">
                            <label for="Repitente">Repitente</label>
                            <input type="checkbox" class="ml-2" id="Repitent" v-model="repitent" required/>
                        </div>
                    </div>
                    <h3 class="mt-2">Anotación de la Observación</h3>
                    <div class="row">
                        <div class="col">
                            <label for="Observer">Observaciones</label>
                            <textarea id="Observer" class="form-control" v-model="observer" required/>
                            </div>
                        </div>            
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary" v-on:click="saveObservation()">Guardar Cambios</button>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
    import Multiselect from "vue-multiselect";
    Vue.component("multiselect", Multiselect);
    export default {
        props:['user','getData'],
        data(){
            return {
                dateBirth:"",
                age:"",
                size:"",
                weight:"",
                identification:"",
                address:"",
                fatherName:"",
                officeFather:"",
                motherName:"",
                officeMother:"",
                phone:"",
                repitent:false,
                observer:"",
                studentsOptions:[],
                studentToSave:[],
                parentsOptions:[],
                fatherToSave:[],
                motherToSave:[],
                parents:[],
                students:[],
                areas:[],
                current_area:{}
            }
        },
        components: {
            Multiselect
        },
        mounted(){
            if(this.user.type_user === 2){
                axios.get('/GetArearByUser').then(response => {
                    this.areas = response.data;

                    if(this.areas.length>0)
                    {
                        this.current_area=this.areas[0];
                        this.getStudents();
                    }
                });
            }else if(this.user.type_user === 1){
                this.getStudents();
            }
        },
        watch:{
            studentToSave: function(newVal, oldVal){                
                if(newVal.id !== oldVal.id){                    
                    this.getParents(newVal.id);
                }
            }
        },
        methods:{
            getParents(id_parent){
                axios.get(`/getParents/${id_parent}`).then((response)=>{
                    this.parents = response.data;
                    this.parents.forEach(e => {   
                        this.parentsOptions.push({
                            id:e.id,
                            id_parent: e.id,
                            text: `${e.name}`
                        });
                    });
                }).catch((error)=>{
                    console.log(error);
                })
            },

            getStudents(){
                this.students = [];
                if(this.user.type_user === 1){
                    axios.get(`getStudents`).then(response => {
                        this.students = response.data;
                        this.students.forEach(e => {   
                            this.studentsOptions.push({
                                id: e.id,
                                id_student:e.id,
                                text: `${e.name+' '+e.last_name}`
                            });
                        });
                    });
                }

                if(this.user.type_user === 2){
                    axios.get(`/api/teacher/area/${this.current_area.id}/classroom/${this.current_area.id_classroom}/student`).then(response => {
                        this.students = response.data;
                        this.students.forEach(e => {   
                            this.studentsOptions.push({
                                id: e.user_id,
                                id_student:e.user_id,
                                text: `${e.user_name}`
                            });
                        });
                    });
                }                                
            },

            saveObservation(){
                const data = {
                    'name_student': this.studentToSave.text,
                    'id_student': this.studentToSave.id_student,
                    'age':this.age,
                    'date_birth': this.dateBirth,
                    'size': this.size,
                    'weight': this.weight,
                    'identification': this.identification,
                    'father_name': this.fatherToSave.text,
                    'office_father': this.officeFather,
                    'mother_name': this.motherToSave.text,
                    'office_mother': this.officeMother,
                    'user_creator': this.user.name,
                    'address': this.address,
                    'phone': this.phone,
                    'repitent': this.repitent === true ? true : false,
                    'observation': this.observer
                }
                axios.post('/observer',data).then((response)=>{
                    toastr.success("Datos Guardados")
                    this.getData();
                    $("#createModal").modal("hide");
                }).catch((error)=>{                    
                    toastr.error("Diligencia los campos requeridos")
                })
            }
        }
    }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
