<template>
    <div>
        <div class="back">
            <div class="row">                
                <div class="col-md-11 mx-auto">
                    <select class="form-control" v-model="typeEvent" style="width: 30%;">
                        <option value="2">Seleccione una opción</option>
                        <option :value="options.id" v-for="(options,key) in types" :key="key">
                        {{
                        options.name
                        }}
                        </option>
                    </select>
                </div>  
            </div>
            <br>
            <div class="row" v-if="typeEvent==0">
                <div class="col-md-11 mx-auto">
                    <div class="custom-card text-center">
                        <h3 class="card-header fondo" style="margin-bottom: 1rem">Cargar acta</h3>
                        <form class="needs-validation" v-on:submit.prevent="saveProceedings($event)" novalidate>
                            <div class="row" >
                                <div class="col-lg-6">
                                    <select class="form-control" v-model="parent" style="width: 100%;">
                                        <option value="" selected="true">Seleccione un padre</option>
                                        <option :value="option.id" v-for="(option, key) in parents" :key="key">
                                        {{
                                        option.name
                                        }}
                                        </option>
                                    </select>
                                </div>
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
            </div>
            <div class="row" v-if="typeEvent==1">
                <div class="col-md-11 mx-auto">
                    <div class="custom-card text-center">
                        <h3 class="card-header fondo" style="margin-bottom: 1rem">Crear acta</h3>
                        <form class="needs-validation" v-on:submit.prevent="saveProceedings" novalidate>
                            <div class="row">
                                <div class="col-lg-4">
                                    <select class="form-control" v-model="parent" style="width: 100%;">
                                        <option value="" selected="true">Seleccione un padre</option>
                                        <option :value="option.id" v-for="(option, key) in parents" :key="key">
                                        {{
                                        option.name
                                        }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="row" >
                                <div class="col-12">
                                    <h3 class="">Titulo</h3>
                                </div>
                                <div class="col-12" style="height: 200px">
                                    <vue-editor v-model="title" :editorToolbar="custom_toolbar" style="height: 80px"></vue-editor>
                                </div>
                                <div class="col-12">
                                    <h3 class="">Contenido</h3>
                                </div>
                                <div class="col-12">
                                    <vue-editor v-model="body" :editorToolbar="custom_toolbar"></vue-editor>
                                </div>
                            </div>
                            <div class="text-right" style="margin-top: 10px;">
                                <button class="btn btn-primary" type="submit">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { VueEditor } from "vue2-editor";
export default {
    components: {
        VueEditor
    },
    data() {
        return {
            types: [{"id": 0, "name": "Adjuntar PDF"}, {"id": 1, "name":"Redactar el Acta"}],
            typeEvent: 2,
            title: "",
            body: "",
            data: "",
            parent: "",
            parents: [],
            custom_toolbar: [["bold", "italic", "underline"], [{ list: "ordered" }, { list: "bullet" }]]
        }
    },
    mounted() {
        this.getParents();
    },
    methods: {
        saveProceedings(){
            var url="/saveProceedings";
            if(this.typeEvent==0){
                this.data.append("id_padre", this.parent);

                axios.post("/saveProceedingsFile", this.data).then(response => {
                
                }).then((response) => {
                    toastr.success("Nueva acta cargada exitosamente");
                    this.getMenu();
                    }).catch(err=>{});
            }else{
                axios
                    .post(url, {
                    type: this.typeEvent,
                    title: this.title,
                    body: this.body,
                    id_padre: this.parent,
                    }).then((response) => {
                    toastr.success("Nueva acta cargada exitosamente");
                    this.getMenu();
                    })
                    .catch((error) => {});
            }
        },
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
        getParents(){
            var url="/getParents";
            axios.get(url).then((response) => {
                this.parents=response.data;
            }).catch((error) => {
                toastr.error("No hay padres cargados");
            });
        },
        getMenu(){
            window.location = "/list/proceedings/parents";
        },
    },
}
</script>
