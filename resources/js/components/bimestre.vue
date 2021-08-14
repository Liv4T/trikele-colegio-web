<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card text-center">
                    <h3 class="card-header fondo">Bimestres</h3>
                    <div class="card-body">                                                
                        <button class="btn btn-primary float-left mb-2" v-on:click="openModal(null)">Crear</button>
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody v-for="(bim,key) in bimestres" :key="key">
                                <tr v-if="bim.status === 1">
                                    <td>{{bim.name}}</td>
                                    <td>
                                        <button class="btn btn-primary" v-on:click="()=>openModal(bim.id)">Editar</button>
                                        <button class="btn btn-danger" v-on:click="()=>deleteBimestre(bim.id)">Eliminar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>                        
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="bimestre" tabindex="-1" role="dialog" aria-labelledby="bimestreLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="bimestreLabel">Bimestre</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="name">Nombre de Bimestre</label>
                            <input type="text" name="name" id="name" class="form-control" v-model="bimestre_name">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary" v-on:click="saveBimestre">Guardar</button>
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
            bimestres:[],
            idBimestre:null,
            bimestre_name:""
        };
    },

    mounted() {
        this.getData();
    },
    methods: {
        getData(){
            axios.get('/bimestres').then((response) => {
                this.bimestres = response.data;
            });
        },
        openModal(idBimestre){
            if(idBimestre){
                this.idBimestre = idBimestre;
            }
            $("#bimestre").modal('show');
        },
        saveBimestre(){
            if(this.idBimestre !== null){                
                axios.put(`/bimestres/${this.idBimestre}`,{
                    name: this.bimestre_name
                }).then((response)=>{
                    toastr.success(response.data);
                    this.getData();
                    $("#bimestre").modal('hide');
                }).catch((error)=>{
                    toastr.info('Ha ocurrido un error, intenta de nuevo mas tarde');
                    console.log(error)
                })
            }else{
                axios.post('/bimestres',{
                    name: this.bimestre_name
                }).then((response)=>{
                    toastr.success(response.data);
                    this.getData();
                    $("#bimestre").modal('hide');
                }).catch((error)=>{
                    toastr.info('Ha ocurrido un error, intenta de nuevo mas tarde');
                    console.log(error)
                })
            }
        },
        deleteBimestre(idBimestre){
            if(window.confirm('Seguro que desea eliminar este bimestre?')){
                axios.delete(`/bimestres/${idBimestre}`).then((response)=>{
                    toastr.success(response.data);
                    this.getData();
                }).catch((error)=>{
                    toastr.info('Ha ocurrido un error, intenta de nuevo mas tarde');
                    console.log(error);
                })
            }
        }
    },
};
</script>