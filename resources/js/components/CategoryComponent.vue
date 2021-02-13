<template>
    <div class="background1">
        <div id="crud" class="row justify-content-center">
            <div class="col-sm-7">
                <div class="card text-center">
                    <h3 class="card-header">Categorias</h3>
                    <div class="card-body">
                        <a
                            href="#"
                            class="btn btn-primary float-right"
                            data-toggle="modal"
                            data-target="#createc"
                            >Agregar</a
                        >
                        <table
                            class="table table-responsive table-hover table-striped"
                        >
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Categoria</th>
                                    <th>Subcategoria</th>
                                    <th colspan="2">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- for para recorrer el arreglo de categorias -->
                                <tr v-for="namec in names_c">
                                    <td width="10px">{{ namec.id }}</td>
                                    <td>{{ namec.name_category }}</td>
                                    <td>{{ namec.name_subcategory }}</td>
                                    <td width="10px">
                                        <a
                                            href="#"
                                            class="btn btn-warning btn-sm"
                                            v-on:click.prevent="
                                                editNamec(namec)
                                            "
                                            >/</a
                                        >
                                    </td>
                                    <td width="10px">
                                        <a
                                            href="#"
                                            class="btn btn-danger btn-sm"
                                            v-on:click.prevent="
                                                deleteNamec(namec)
                                            "
                                            >-</a
                                        >
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modal fade" id="createc">
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
                                <div class="form-group row">
                                    <div class="col-9">
                                        <label for="keep">Categoria</label>
                                        <input
                                            type="text"
                                            name="name_category"
                                            class="form-control"
                                            v-model="newName_category"
                                        />
                                    </div>
                                </div>
                                <label for="keep">Subcategoria</label>
                                <div
                                    class="form-group row"
                                    v-for="(input, k) in inputs"
                                    :key="k"
                                >
                                    <div class="col-9">
                                        <input
                                            type="text"
                                            class="form-control"
                                            v-model="input.name"
                                        />
                                    </div>
                                    <div class="col">
                                        <span>
                                            <button
                                                class="btn btn-danger"
                                                @click="remove(k)"
                                                v-show="
                                                    k ||
                                                        (!k &&
                                                            inputs.length > 1)
                                                "
                                            >
                                                -
                                            </button>
                                            <button
                                                class="btn btn-primary"
                                                @click="add(k)"
                                                v-show="k == inputs.length - 1"
                                            >
                                                +
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <input
                                    type="submit"
                                    @click="createNamec()"
                                    class="btn btn-primary"
                                    value="Guardar"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="editc">
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
                                <label for="keep">Categoria</label>
                                <input
                                    type="text"
                                    name="name_category"
                                    class="form-control"
                                    v-model="fillNamec.name_category"
                                />
                                <label for="keep">Subcategoria</label>
                                <input
                                    type="text"
                                    name="name_subcategory"
                                    class="form-control"
                                    v-for="subcategory in subcategories"
                                    v-model="fillNamec.name_subcategory"
                                />
                            </div>
                            <div class="modal-footer">
                                <input
                                    type="submit"
                                    @click="updateNamec(fillNamec.id)"
                                    class="btn btn-primary"
                                    value="Actualizar"
                                />
                            </div>
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
    data() {
        return {
            names_c: [],
            newName_category: "",
            newName_subcategory: [],
            newName_id_Category: "",
            fillNamec: { id: "", name_category: "", name_subcategory: "" },
            errors: [],
            offset: 3,
            Category: "",
            Subcategory: "",
            categories: [],
            subcategories: [],
            inputs: [
                {
                    name: ""
                }
            ]
        };
    },
    mounted() {
        var urlsel = "GetCategories";
        axios.get(urlsel).then(response => {
            this.categories = response.data;
        });
        console.log("Component mounted.");
    },
    created() {
        this.getNamec();
    },
    methods: {
        //metodos del CRUD
        getNamec() {
            var urlCat = "categories";
            axios.get(urlCat).then(response => {
                this.names_c = response.data;
            });
        },
        editNamec(namec) {
            var urlse = "GetSubcategories/" + namec.id;
            axios.get(urlse).then(response => {
                this.subcategories = response.data;
            });
            if (this.subcategories.length >= 1) {
                console.log(this.subcategories.length);
                for (let i = 0; i < this.subcategories.length; i++) {
                    this.fillNamec.name_subcategory = this.subcategories[
                        i
                    ].text;
                    this.inputs.push({ name: "" });
                }
            }
            this.fillNamec.id = namec.id;
            this.fillNamec.name_category = namec.name_category;
            $("#editc").modal("show");
        },
        updateNamec(id) {
            var url = "categories/" + id;
            axios
                .put(url, this.fillNamec)
                .then(response => {
                    this.getNamec();
                    this.fillNamec = { id: "", name_category: "" };
                    this.errors = [];
                    $("#editc").modal("hide");
                    toastr.success("Category successfully edited");
                })
                .catch(error => {
                    this.errors = error.response.data;
                });
        },
        deleteNamec(namec) {
            var url = "categories/" + namec.id;
            axios.delete(url).then(response => {
                // eliminamos
                this.getNamec(); //listamos
                toastr.success("Successfully removed"); //mensaje
            });
        },
        createNamec() {
            var url = "categories";
            console.log(this.inputs.length);
            if (this.inputs.length >= 1) {
                console.log(this.inputs.length);
                for (let i = 0; i < this.inputs.length; i++) {
                    this.newName_subcategory.push(this.inputs[i].name);
                }
                console.log(this.newName_subcategory);
            }
            axios
                .post(url, {
                    name_category: this.newName_category,
                    name_subcategory: this.newName_subcategory
                })
                .then(response => {
                    this.getNamec();
                    this.newName_category = "";
                    this.newName_subcategory = [];
                    this.errors = [];
                    $("#createc").modal("hide");
                    toastr.success("New category created successfully");
                })
                .catch(error => {
                    this.errors = error.response.data;
                });
        },
        changePage(page) {
            this.pagination.current_page = page;
            this.getNamec(page);
        },
        selectCategory(id) {
            var urlCat = "categories?page=" + page;
            axios.get(urlCat).then(response => {
                this.names_c = response.data.categories.data;
            });
        },
        add(index) {
            this.inputs.push({ name: "" });
        },
        remove(index) {
            this.inputs.splice(index, 1);
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
