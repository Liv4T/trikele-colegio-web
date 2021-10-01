<template>
    <!-- Modal -->
    <div class="modal fade" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h3>Cargar nuevo archivo</h3>
                     <div class="col-md-11 mx-auto">
                    <div class="custom-card text-center">
                        <h3 class="card-header fondo" v-if="typeView==1" style="margin-bottom: 1rem">Actualizar acta</h3>
                        <h3 class="card-header fondo" v-if="typeView==2" style="margin-bottom: 1rem">Firmar acta</h3>
                        <form class="needs-validation" v-if="typeView==1" v-on:submit.prevent="update()" novalidate>
                            <div class="row">
                                <div class="col-lg-6">
                                    <input class="form-control" type="file" accept=".pdf" placeholder="Seleccione un archivo" @change="onFileChange($event)"/>
                                </div>
                            </div>
                            <div class="text-right" style="margin-top: 10px;">
                                <button class="btn btn-primary" type="submit">Guardar</button>
                            </div>
                        </form>
                        <form class="needs-validation" v-if="typeView==2" v-on:submit.prevent="updateSign()" novalidate>
                            <div class="row">
                                <div class="col-lg-6">
                                    <input class="form-control" type="file" accept=".pdf" placeholder="Seleccione un archivo" @change="onFileChange($event)"/>
                                </div>
                            </div>
                            <div class="text-right" style="margin-top: 10px;">
                                <button class="btn btn-primary" type="submit">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-Primary" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['id_proceedings','getProceedings','typeView','typeAction'],
    data(){
        return {
            data: "",
        }
    },
    mounted() {
        
    },
    methods: {
        onFileChange(file) {
            let files = file.target.files || file.dataTransfer.files;
            this.data = new FormData();
            if (files.length > 0) {
                //console.log('evento');
                let file = files[0];
                let _fileNameSplit=file.name.split(".");

                // if uploaded file is valid with validation rules
                let file_extension=_fileNameSplit[_fileNameSplit.length-1];
                let file_name=file.name.replace(`.${file_extension}`,'');

                this.data.append("file", files[0]);
                this.data.append("name", file_name);

            }

        },
        update(){
            if(this.typeAction==0){
                var url="/update/acta/parents/" + this.id_proceedings;
                axios.post(url, this.data).then((response) => {
                    toastr.success("Archivo actualizado correctamente");
                    this.getProceedings();
                    $("#updateModal").modal("hide");
                }).catch((error) => {
                    toastr.success(error);
                });
            }else{
                var url="/update/acta/general/" + this.id_proceedings;
                axios.post(url, this.data).then((response) => {
                    toastr.success("Archivo actualizado correctamente");
                    this.getProceedings();
                    $("#updateModal").modal("hide");
                }).catch((error) => {
                    toastr.success(error);
                });
            }
        },
        updateSign(){
            if(this.typeAction==0){
                var url="/update/acta/parents/firmar/" + this.id_proceedings;
                axios.post(url, this.data).then((response) => {
                    toastr.success("Archivo actualizado correctamente");
                    this.getProceedings();
                    $("#updateModal").modal("hide");
                }).catch((error) => {
                    toastr.success(error);
                });
            }else{
                var url="/update/acta/general/firmar/" + this.id_proceedings;
                axios.post(url, this.data).then((response) => {
                    toastr.success("Archivo actualizado correctamente");
                    this.getProceedings();
                    $("#updateModal").modal("hide");
                }).catch((error) => {
                    toastr.success(error);
                });
            }
        }
    },
}
</script>