<template>
    <div>
        <div>
            <div id="crud" class="col-sm-12">
                <div class="card-container">
                    <div class="card text-center">
                        <div class="card-header">
                            <h3>Datos para Contrato Educativo</h3>
                        </div>

                        <div class="card-body">
                            <div class="form-group">
                                <label for="motherName">Nombre de Madre</label>
                                <input type="text" class="form-control" v-model="motherName">

                                <label for="motherName">Cedula de Madre</label>
                                <input type="text" class="form-control" v-model="ccMother">
                            </div>

                            <div class="form-group">
                                <label for="motherName">Nombre de Padre</label>
                                <input type="text" class="form-control" v-model="fatherName">

                                <label for="motherName">Cedula de Padre</label>
                                <input type="text" class="form-control" v-model="ccFather">
                            </div>

                            <div class="form-group">                                
                                <label for="motherName">Cedula Otro</label>
                                <input type="text" class="form-control" v-model="ccOther">
                            </div>
                            <div class="modal-footer">
                                <a :href="`contratoEducativo/${motherName}/${fatherName}/${ccMother}/${ccFather}/${ccOther}'`" download class="btn btn-primary">Descargar</a>
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
          motherName:"",
          fatherName:"",
          ccMother:"",
          ccFather:"",
          ccOther:"",
          downloadedFile:""
      };
    },
    methods: {
        DownloadFile(){
            axios.post('contratoEducativo',{
                motherName: this.motherName,
                fatherName: this.fatherName,
                ccFather: this.ccFather,
                ccMother: this.ccMother,                
                ccOther: this.ccOther
            }).then((response)=>{
                this.downloadedFile = response.data;
                toastr.success('Documento Descargado, recuerda leerlo y completarlo');
            }).catch((error)=>{
                console.log(error);
                toastr.info('Ha ocurrido un error, intenta de nuevo mas tarde');
            })
        }
    },
  };
</script>
<style></style>
