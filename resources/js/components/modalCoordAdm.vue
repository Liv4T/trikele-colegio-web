<template>    
    <div class="modal fade" id="viewCoordInfo" tabindex="-1" role="dialog" aria-labelledby="viewCoordInfoLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="viewCoordInfoLabel">Información del Coordinador</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <fieldset :disabled="disabledComponent">
                            <div class="form-group">
                                <label for="disabledTextInput">Nombre</label>
                                <input type="text" class="form-control" v-model="data.name">
                            </div>

                            <div class="form-group">
                                <label for="disabledTextInput">Apellido</label>
                                <input type="text" class="form-control" v-model="data.last_name">
                            </div>

                            <div class="form-group">
                                <label for="disabledTextInput">Experiencia</label>
                                <input type="text" class="form-control" v-model="data.experience">
                            </div>

                            <div class="form-group">
                                <label for="disabledTextInput">Nombre de usuario</label>
                                <input type="text" class="form-control" v-model="data.user_name">
                            </div>                            

                            <div class="form-group">
                                <label for="disabledTextInput">Numero de documento</label>
                                <input type="text" class="form-control" v-model="data.id_number">
                            </div>

                            <div class="form-group">
                                <label for="disabledTextInput">Dirección</label>
                                <input type="text" class="form-control" v-model="data.address">
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" v-on:click="()=>edit()">Actualizar</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["type","data","coord"],
    data() {
        return {
           disabledComponent:false, 
           deleted: 1
        };
    },
    mounted(){
    
    },
    watch:{
        coord: function(newVal, oldVal){
            if(newVal !== oldVal){                
                if(this.type === 'show' || this.type === 'delete'){
                    this.disabledComponent = true;                    
                }else if(this.type === 'edit'){
                    this.disabledComponent = false;                    
                }
            }
        },

        type: function(newVal, oldVal){
            if(newVal !== oldVal){                
                if(this.type === 'show' || this.type === 'delete'){
                    this.disabledComponent = true;                    
                }else if(this.type === 'edit'){
                    this.disabledComponent = false;                    
                }
            }
        }
    },   
    methods:{
        edit(){
            if(this.type === 'edit'){                
                axios.put(`/users/${this.data.id}`,{
                    name: this.data.name,
                    last_name :this.data.last_name,
                    experience: this.data.experience,
                    user_name: this.data.user_name,
                    id_number: this.data.id_number,
                    address: this.data.address
                }).then((response)=>{
                    toastr.success('Dato Actualizado');
                    console.log(response.data);
                    window.location = '/coordinador_adm';
                }).catch((error)=>{
                    toastr.info('Intente de nuevo mas tarde o Comuniquese con el administrador');
                    console.log(error);
                })
            }else if(this.type === 'delete'){
                if(window.confirm('Seguro que desea Eliminar este dato?')){
                    axios.delete(`/users/${this.data.id}`,{
                        deleted: this.deleted,
                    }).then((response)=>{
                        toastr.success('Dato Eliminado');
                        console.log(response.data);
                        window.location = '/coordinador_adm';
                    }).catch((error)=>{
                        toastr.info('Intente de nuevo mas tarde o Comuniquese con el administrador');
                        console.log(error);
                    })
                }                
            }
        }
    } 
};
</script>