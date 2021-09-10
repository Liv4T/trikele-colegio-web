<template>
    <div>
        <div class="back">
            <div class="row">
                <div class="col-md-11 mx-auto">
                    <div class="card-container">
                        <div class="custom-card text-center">
                            <div class="card-header">
                                <h3>Asignar Parientes</h3>
                            </div>
                            <div class="card-body">
                                <div class="form-group">
                                    <label> Estudiantes</label>
                                    <multiselect v-model="studentSelected" :options="allStudents" :multiple="false" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Seleccione una o varias" label="name" track-by="id" :preselect-first="false">
                                        <template slot="selection" slot-scope="{ values, isOpen }">
                                            <span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} opciones selecionadas</span>
                                        </template>
                                    </multiselect>
                                </div>
                                <div class="form-group">
                                    <label> Parientes</label>
                                    <multiselect v-model="parentSelected" :options="allParents" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Seleccione una o varias" label="name" track-by="id" :preselect-first="false">
                                        <template slot="selection" slot-scope="{ values, isOpen }">
                                            <span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} opciones selecionadas</span>
                                        </template>
                                    </multiselect>
                                </div>
                                <div class="form-group float-rigth">
                                    <button class="btn btn-primary" v-on:click="saveParents">Guardar</button>
                                    <a href="/salon_adm" class="btn btn-primary">Volver</a>
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
                allStudents: [], 
                allParents: [],
                studentSelected:{},
                parentSelected:[]
            };
        },
        mounted() {            
            axios.get("getStudents").then((response) => {
                this.allStudents = response.data;
            });

            axios.get("getParents").then((response) => {
                this.allParents = response.data;
            });
        },
        methods: {
            saveParents(){
                this.parentSelected.forEach((el)=>{                    
                    axios.put(`assignParent/${el.id}`,({parent_id: this.studentSelected.id})).then((response)=>{
                        toastr.success('Asignación realizada con exito')
                    }).catch((error)=>{
                        console.log(error);
                    })
                })
            }
        },
    };
</script>
<style></style>
