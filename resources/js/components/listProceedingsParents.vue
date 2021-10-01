<template>
    <div class="back">
        <div class="col-md-11 mx-auto">
            <div v-if="type_user==1">
                <button class="btn btn-primary mb-3" @click="getActas()">
                    Crear Acta
                </button>
            </div>
            <div class="custom-card text-center">
                <h3 class="card-header fondo">Actas para padres</h3>
                <div class="card" >                    
                    <div class="card-body">
                        <table>
                            <thead>
                                <tr>
                                    <th>Nombre del Acta</th>
                                    <th>Padre</th>
                                    <th>Fecha</th>
                                    <th>Firmada</th>
                                    <th>Visto</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody v-for="(proceeding, id) in proceedings" :key="id">
                                <tr>
                                    <td v-if="proceeding.url"><a :href="`/api/proceedings/parents/download/${proceeding.id}`" @click="viewed(proceeding.id)" style="color: black;">{{nameArchive(proceeding.url)}}</a></td>
                                    <td v-if="!proceeding.url">Sin archivo generado</td>
                                    <td>{{proceeding.parent}}</td>
                                    <td>{{proceeding.created_at}}</td>
                                    <td v-if="proceeding.state==1"><i class="far fa-check-circle"></i></td>
                                    <td v-if="proceeding.state==0"><i class="far fa-times-circle"></i></td>
                                    <td v-if="proceeding.viewed==1"><i class="far fa-check-circle"></i></td>
                                    <td v-if="proceeding.viewed==0"><i class="far fa-times-circle"></i></td>
                                    <td>
                                        <button v-if="proceeding.state==0 && type_user==1" class="btn btn-primary" data-toggle="modal" data-target="#Modal" v-on:click="sign(proceeding.id)">Firmar</button>
                                        <button v-if="proceeding.state==0 && proceeding.url && type_user==1" class="btn btn-primary" data-toggle="modal" data-target="#UpdateModal" v-on:click="update(proceeding.id)">Actualizar</button>
                                        <button v-if="proceeding.url" class="btn btn-primary" v-on:click="viewPdf(proceeding.id)">Ver</button>
                                        <a v-if="!proceeding.url" class="btn btn-primary" :href="`/api/proceedings/parents/pdf/${proceeding.id}`" target="_blank" @click="viewed(proceeding.id)">Generar PDF</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <modal-update-proceedings v-bind:id_proceedings="id_proceedings" v-bind:getProceedings="getProceedings" v-bind:typeView="typeView" v-bind:typeAction="typeAction"></modal-update-proceedings>
    </div>
</template>
<script>
export default {
    props: ['type_user'],
    data() {
        return {
            proceedings: [],
            id_proceedings: "",
            typeView:"",
            typeAction:"",
        }
    },
    mounted() {
        this.getProceedings();
    },
    methods: {
        getProceedings(){
            var url="/getProceedings";
            axios.get(url).then((response) => {
                this.proceedings=response.data;
                //console.log(this.proceedings);
            }).catch((error) => {
                toastr.error("No hay actas cargadas");
            });
        },
        nameArchive(url_name){
            var arrayName = url_name.split("/");
            var name = arrayName[arrayName.length - 1];

            return name;
        },
        update(id){
            this.typeView=1;
            this.typeAction=0;
            this.id_proceedings=id;
            $("#updateModal").modal("show");
        },
        sign(id){
            this.typeView=2;
            this.typeAction=0;
            this.id_proceedings=id;
            $("#updateModal").modal("show");
        },
        getActas(){
            window.location = "/proceedings/parents";
        },
        viewPdf(id){
            window.location = "/view/proceedings/" + id + "/0";
        },
        viewed(id){
            var url="/updateViewedProceedings/" + id;
            axios.post(url).then(response => {
                    if(response.data==1){
                        toastr.success("Visto");
                    }
                }).catch(err=>{});
        }
    },
}
</script>