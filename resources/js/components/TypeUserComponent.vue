<template>
    <div class="background1">
        <div id="crud" class="row justify-content-center">
            <div class="col-sm-6">
                <div class="card text-center">
                    <h3 class="card-header">Tipo de usuario</h3>
                    <div class="card-body">
                        <a
                            href="#"
                            class="btn btn-primary float-right"
                            data-toggle="modal"
                            data-target="#create"
                            >Agregar</a
                        >
                        <table
                            class="table table-responsive table-hover table-striped"
                        >
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tipos de Usuario</th>
                                    <th colspan="2">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="type in types">
                                    <td width="10px">{{ type.id }}</td>
                                    <td>{{ type.name }}</td>
                                    <td width="10px">
                                        <a
                                            href="#"
                                            class="btn btn-warning btn-sm"
                                            v-on:click.prevent="editType(type)"
                                            >/</a
                                        >
                                    </td>
                                    <td width="10px">
                                        <a
                                            href="#"
                                            class="btn btn-danger btn-sm"
                                            v-on:click.prevent="
                                                deleteType(type)
                                            "
                                            >-</a
                                        >
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="create">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4>Crear</h4>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                            >
                                <span>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <label for="type">Nuevo Tipo</label>
                            <input
                                type="text"
                                name="type"
                                class="form-control"
                                v-model="newType"
                            />
                        </div>
                        <div class="modal-footer">
                            <input
                                type="submit"
                                @click="createType"
                                class="btn btn-primary"
                                value="Guardar"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="edit">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4>Editar</h4>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                            >
                                <span>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <label for="keep">Actualizar Tipo</label>
                            <input
                                type="text"
                                name="keep"
                                class="form-control"
                                v-model="fillType.name"
                            />
                        </div>
                        <div class="modal-footer">
                            <input
                                type="submit"
                                @click="updateType(fillType.id)"
                                class="btn btn-primary"
                                value="Actualizar"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import "toastr/toastr.scss";
export default {
    //arreglos para editar y crear
    data() {
        return {
            types: [],
            newType: "",
            fillType: { id: "", name: "" },
            errors: []
        };
    },
    created() {
        this.getTypes();
    },

    mounted() {
        console.log("Component mounted.");
    },
    methods: {
        //metodos del CRUD
        getTypes() {
            var urlTypes = "types";
            axios.get(urlTypes).then(response => {
                this.types = response.data;
            });
        },
        editType(type) {
            this.fillType.id = type.id;
            this.fillType.name = type.name;
            $("#edit").modal("show");
        },
        updateType(id) {
            var url = "types/" + id;
            axios
                .put(url, this.fillType)
                .then(response => {
                    this.getTypes();
                    this.fillType = { id: "", name: "" };
                    this.errors = [];
                    $("#edit").modal("hide");
                    toastr.success("Type of user successfully edited");
                })
                .catch(error => {
                    this.errors = error.response.data;
                });
        },
        deleteType(type) {
            var url = "types/" + type.id;
            axios.delete(url).then(response => {
                // eliminar
                this.getTypes(); //lista
                toastr.success("Successfully removed"); //mensaje
            });
        },
        createType() {
            var url = "types";
            axios
                .post(url, {
                    name: this.newType
                })
                .then(response => {
                    this.getTypes();
                    this.newType = "";
                    this.errors = [];
                    $("#create").modal("hide");
                    toastr.success("New type of user created successfully");
                })
                .catch(error => {
                    this.errors = error.response.data;
                });
        }
    }
};
</script>
<style>
.background1 {
    background: url(../assets/img/Fondo5.jpg);
    background-attachment: fixed;
}
</style>
