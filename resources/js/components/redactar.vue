<template>
    <div class="back">
        <div class="row">
            <div class="col-md-11 mx-auto">
                <div class="custom-card text-center">
                    <h3 class="card-header fondo">Redactar Mensaje</h3>
                    <div class="container-mensaje">
                        <div class="row">
                            <h5>Destinatarios</h5>
                        </div>
                        <div class="row">
                            <h6>Tus contactos</h6>
                            <a class="btn btn-info float-left" href="#" v-on:click.prevent="btD()" style="margin: 10px;">
                                Docentes
                            </a>
                            <a v-if="user.type_user !== 3" class="btn btn-info float-left" href="#" v-on:click.prevent="btE()" style="margin: 10px;">
                                Estudiantes
                            </a>
                        </div>
                        <div v-show="docente == true">
                            <label for>Docentes</label>
                            <multiselect
                                v-model="cdocente"
                                :options="optionsd"
                                tag-placeholder="Add this as new tag"
                                placeholder="Search or add a tag"
                                label="name"
                                track-by="id"
                                :multiple="true"
                                :taggable="true"
                                @tag="addTagd"
                            ></multiselect>
                        </div>
                        <br />
                        <div v-show="estudiante == true">
                            <label for>Estudiantes</label>
                            <multiselect
                                v-model="cestudiante"
                                :options="optionse"
                                tag-placeholder="Add this as new tag"
                                placeholder="Search or add a tag"
                                label="name"
                                track-by="id"
                                :multiple="true"
                                :taggable="true"
                                @tag="addTage"
                            ></multiselect>
                        </div>
                        <br />
                        <div v-show="acudiente == true ">
                            <label for>Acudientes</label>
                            <multiselect
                                v-model="cacudiente"
                                :options="optionsa"
                                tag-placeholder="Add this as new tag"
                                placeholder="Search or add a tag"
                                label="name"
                                track-by="id"
                                :multiple="true"
                                :taggable="true"
                                @tag="addTaga"
                            ></multiselect>
                        </div>
                        <br />
                        <div class="row">
                            <label for="nombre" class="label-mensaje">Asunto:</label>
                            <input class="input-mensaje" id="nombre" name="nombre" placeholder="Asunto" v-model="asunto"/>
                        </div>
                        <div class="row">
                            <label for="mensaje">Mensaje:</label>
                        </div>

                        <ckeditor :editor="editor" v-model="editorData" @ready="onReady"></ckeditor>
                        <div class="modal-footer">
                            <a href="#" class="btn btn-warning float-right" @click="getMenu()">Cancelar</a>
                            <a href="#" class="btn btn-warning float-right" @click="saveM()">Enviar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Multiselect from "vue-multiselect";
    import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
    // register globally
    Vue.component("multiselect", Multiselect);
    export default {
    // OR register locally
        components: { Multiselect },
        props:['user'],
        data() {
            return {
                editor: DecoupledEditor,
                editorData: "<p>Escribir...</p>",
                dataBoard: {},
                value: [{ name: "Todos", code: "js" }],
                options: [],
                optionsa: [],
                optionse: [],
                optionsd: [],
                docente: false,
                estudiante: false,
                acudiente: false,
                asunto: "",
                cdocente: [],
                cestudiante: [],
                cacudiente: [],
                correos: [],
            };
        },
        mounted() {            
            this.getData();
        },
        methods: {
            getData(){            
                axios.get("users").then((response) => {
                    let teachers = response.data[0];
                    let students = response.data[1];
                
                    let dataTeacherCleaned = teachers.filter((valorActual, indiceActual, arreglo) => {                
                        return arreglo.findIndex(valorDelArreglo => JSON.stringify(valorDelArreglo.user_name) === JSON.stringify(valorActual.user_name)) === indiceActual
                    });

                    let dataStudentCleaned = students.filter((valorActual, indiceActual, arreglo) => {
                    
                        return arreglo.findIndex(valorDelArreglo => JSON.stringify(valorDelArreglo.user_name) === JSON.stringify(valorActual.user_name)) === indiceActual
                    });

                    if(dataTeacherCleaned.length > 0){
                        for (let i = 0; i < dataTeacherCleaned.length; i++) {
                            this.optionsd.push({
                                id: dataTeacherCleaned[i].id,                            
                                name: dataTeacherCleaned[i].name+' '+dataTeacherCleaned[i].last_name+' '+'('+dataTeacherCleaned[i].area_name+')'                            
                            });
                        }
                    }

                    if(dataStudentCleaned.length > 0){
                        for (let i = 0; i < dataStudentCleaned.length; i++) {
                            this.optionse.push({                            
                                id: dataStudentCleaned[i].id,                        
                                name: dataStudentCleaned[i].name+' '+dataStudentCleaned[i].last_name+' '+'('+dataStudentCleaned[i].grade_name+')'                            
                            });
                        }
                    }
                });
            },
            getMenu() {
                window.location = "/enviados";
            },
            addTaga(newTag) {
                const tag = {
                    name: newTag,
                    id: newTag,
                };
                this.optionsa.push(tag);
            },
            addTagd(newTag) {
                const tag = {
                    name: newTag,
                    id: newTag,
                };
                this.optionsd.push(tag);
            },
            addTage(newTag) {
                const tag = {
                    name: newTag,
                    id: newTag,
                };
                this.optionse.push(tag);
            },
            onReady(editor) {
                // Insert the toolbar before the editable area.
                editor.ui.getEditableElement().parentElement.insertBefore(
                    editor.ui.view.toolbar.element,
                    editor.ui.getEditableElement()
                );
            },
            btD() {
                if (this.docente == false) {
                    this.docente = true;
                } else {
                    this.docente = false;
                }
            },
            btE() {
                if (this.estudiante == false) {
                    this.estudiante = true;
                } else {
                    this.estudiante = false;
                }
            },
            btA() {
                if (this.acudiente == false) {
                    this.acudiente = true;
                } else {
                    this.acudiente = false;
                }
            },
            saveM() {
                console.log("data: ", this.editorData);            
                if (this.cacudiente.length >= 1) {
                    for (let i = 0; i < this.cacudiente.length; i++) {
                        this.correos.push(this.cacudiente[i].id);
                    }
                }
                if (this.cestudiante.length >= 1) {
                    for (let i = 0; i < this.cestudiante.length; i++) {
                        this.correos.push(this.cestudiante[i].id);
                    }
                }
                if (this.cdocente.length >= 1) {
                    for (let i = 0; i < this.cdocente.length; i++) {
                        this.correos.push(this.cdocente[i].id);
                    }
                }
                axios.post("sendMessages", {
                    receptor: this.correos,
                    subject: this.asunto,
                    message: this.editorData,
                }).then((response) => {
                    this.errors = [];
                    toastr.success("Mensaje enviado");
                    this.getMenu();
                }).catch((error) => {});
            },
        },
    };
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
    .label-mensaje {
        display: block;
    }

    .container-mensaje {
        display: block;
        margin: 0 auto;
        width: 710px;
        color: #666666;
        font-family: Arial;
    }

    .input-mensaje {
        width: 580px;
        height: 27px;
        background: #f5f5f5;
        border: 2px solid #f6f6f6;
        padding: 10px;
        color: black;
    }

    .mensajes {
        height: 150px;
    }
</style>
