<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card text-center">
                    <h3 class="card-header fondo">Mensajes</h3>

                    <div class="card-body">
                        <a href="/redactar" class="btn btn-warning float-right"
                            >Redactar</a
                        >

                        <a href="/enviados" class="btn btn-warning float-left"
                            >Mensajes enviados</a
                        >
                        <br />
                        <br />
                        <br />
                        <table
                            class="table table-responsive-xl table-hover table-striped center"
                        >
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Asunto</th>
                                    <th>Fecha</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody v-for="(option, k) in messages" :key="k">
                                <tr>
                                    <td>{{ option.emisor }}</td>
                                    <td>{{ option.asunto }}</td>
                                    <td>
                                        {{
                                            option.fecha.date
                                                | moment("dddd, MMMM Do YYYY")
                                        }}
                                    </td>
                                    <td class="float-right">
                                        <a
                                            class="btn btn-sm"
                                            href="#"
                                            style="color: grey;"
                                            v-on:click.prevent="
                                                editMessage(option.id)
                                            "
                                        >
                                            <i class="fa fa-eye"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modal fade" id="createMessage">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="card">
                                <h3 class="card-header fondo text-center">
                                    Mensaje
                                    <button
                                        type="button"
                                        class="close"
                                        data-dismiss="modal"
                                    >
                                        <span>&times;</span>
                                    </button>
                                </h3>
                                <div class="card-body">
                                    <div class="form-group row">
                                        <div class="col-sm-2">
                                            <label
                                                for="nombre"
                                                class="label-mensaje"
                                                >De:</label
                                            >
                                        </div>
                                        <div class="col-md-10">
                                            <input
                                                class="input-mensaje"
                                                id="nombre"
                                                name="nombre"
                                                placeholder="Asunto"
                                                v-model="emisor"
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-sm-2">
                                            <label
                                                for="nombre"
                                                class="label-mensaje"
                                                >Asunto:</label
                                            >
                                        </div>
                                        <div class="col-md-10">
                                            <input
                                                class="input-mensaje"
                                                id="nombre"
                                                name="nombre"
                                                placeholder="Asunto"
                                                v-model="asunto"
                                                disabled
                                            />
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-md-6">
                                            <label for="mensaje"
                                                >Mensaje:</label
                                            >
                                        </div>
                                    </div>

                                    <ckeditor
                                        :editor="editor"
                                        v-model="editorData"
                                        @ready="onReady"
                                    ></ckeditor>
                                    <!-- <div class="modal-footer">
                                        <a
                                            href="#"
                                            class="btn btn-warning float-right"
                                            @click="saveM()"
                                            >Enviar</a
                                        >
                                    </div> -->
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
import Vue from "vue";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
Vue.use(require("vue-moment"));
export default {
    data() {
        return {
            messages: [],
            editorData: "<p>Escribir...</p>",
            editor: DecoupledEditor,
            emessages: [],
            emisor: "",
            asunto: ""
        };
    },
    created() {},
    mounted() {
        var urlUsers = " getReceivedMessage";
        axios.get(urlUsers).then(response => {
            this.messages = response.data;
            console.log(this.messages.men);
        });
    },
    methods: {
        editMessage(mess) {
            var urlr = "getMessage/" + mess;
            axios.get(urlr).then(response => {
                this.emessages = response.data;
                this.emisor = this.emessages.emisor;
                this.asunto = this.emessages.subject;
                this.editorData = this.emessages.message;
                console.log(this.emessages);
            });
            $("#createMessage").modal("show");
        },
        onReady(editor) {
            // Insert the toolbar before the editable area.
            editor.ui
                .getEditableElement()
                .parentElement.insertBefore(
                    editor.ui.view.toolbar.element,
                    editor.ui.getEditableElement()
                );
        }
    }
};
</script>
<style></style>
