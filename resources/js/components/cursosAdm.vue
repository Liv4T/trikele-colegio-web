<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card text-center">
                    <h3 class="card-header fondo">Grados</h3>
                    <div class="card-body">
                        <a
                            class="btn btn-warning"
                            href="#"
                            v-on:click.prevent="createG()"
                            >Crear grado</a
                        >
                        <a
                            class="btn btn-warning"
                            href="#"
                            v-on:click.prevent="createS()"
                            >Crear salón</a
                        >
                        <a
                            class="btn btn-warning"
                            href="#"
                            v-on:click.prevent="createM()"
                            >Crear materia</a
                        >
                        <!-- <a
                            class="btn btn-warning"
                            v-on:click.prevent="createM()"
                            >Crear materia</a
            >
            <a class="btn btn-warning" v-on:click.prevent="editNames()">Crear usuarios</a>-->
                        <br />
                        <br />
                        <table
                            class="table table-responsive-xl table-hover table-striped center"
                        >
                            <tbody v-for="(option, k) in fillG" :key="k">
                                <tr
                                    data-toggle="collapse"
                                    data-target="#accordion"
                                    class="clickable"
                                >
                                    <td>{{ option.grade }}</td>
                                    <td></td>
                                    <td></td>

                                    <td class="float-right">
                                        <a
                                            class="btn btn-sm"
                                            href="#"
                                            style="color: grey;"
                                        >
                                            <i class="fa fa-eye"></i>
                                        </a>

                                        <a
                                            class="btn btn-sm"
                                            href="#"
                                            style="color: grey;"
                                        >
                                            <i class="fa fa-trash"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="createSalon">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="card">
                            <h3 class="card-header fondo text-center">
                                Salón
                                <button
                                    type="button"
                                    class="close"
                                    data-dismiss="modal"
                                >
                                    <span>&times;</span>
                                </button>
                            </h3>
                            <div class="card-body">
                                <form
                                    class="needs-validation"
                                    v-on:submit.prevent="createSalon()"
                                    novalidate
                                >
                                    <div class="form-group row mx-auto">
                                        <div
                                            class="col-md-8 text-center mx-auto"
                                        >
                                            <label for>Grado</label>
                                            <div>
                                                <select
                                                    class="form-control"
                                                    v-model="grado"
                                                    style="background: gainsboro;"
                                                    required
                                                >
                                                    <option
                                                        :value="option.id"
                                                        v-for="option in fillG"
                                                        >{{
                                                            option.grade
                                                        }}</option
                                                    >
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="form-group row mx-auto"
                                        v-for="(input, t) in inputs"
                                        :key="t"
                                    >
                                        <div
                                            class="col-md-8 text-center mx-auto"
                                        >
                                            <label for="name">Nombre</label>
                                            <span>
                                                <a
                                                    href="#"
                                                    class="badge badge-danger"
                                                    @click.prevent="remove(t)"
                                                    v-show="
                                                        t ||
                                                            (!t &&
                                                                inputs.length >
                                                                    1)
                                                    "
                                                    >-</a
                                                >
                                                <a
                                                    href="#"
                                                    class="badge badge-primary"
                                                    @click.prevent="add(t)"
                                                    v-show="
                                                        t == inputs.length - 1
                                                    "
                                                    >+</a
                                                >
                                            </span>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="objetive1"
                                                    class="form-control"
                                                    v-model="input.name"
                                                    style="background: gainsboro;"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <input
                                            type="submit"
                                            class="btn btn-warning"
                                            value="Guardar"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="createMat">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="card">
                            <h3 class="card-header fondo text-center">
                                Materias
                                <button
                                    type="button"
                                    class="close"
                                    data-dismiss="modal"
                                >
                                    <span>&times;</span>
                                </button>
                            </h3>
                            <div class="card-body">
                                <form
                                    class="needs-validation"
                                    v-on:submit.prevent="createMateria()"
                                    novalidate
                                >
                                    <div class="form-group row mx-auto">
                                        <div
                                            class="col-md-8 text-center mx-auto"
                                        >
                                            <label for="name">Grado</label>
                                            <div>
                                                <select
                                                    class="form-control"
                                                    v-model="grado"
                                                    style="background: gainsboro;"
                                                    required
                                                >
                                                    <option
                                                        :value="option.id"
                                                        v-for="option in fillG"
                                                        >{{
                                                            option.grade
                                                        }}</option
                                                    >
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="form-group row mx-auto"
                                        v-for="(input, t) in inputs"
                                        :key="t"
                                    >
                                        <div
                                            class="col-md-8 text-center mx-auto"
                                        >
                                            <label for="name">Nombre</label>
                                            <span>
                                                <a
                                                    href="#"
                                                    class="badge badge-danger"
                                                    @click.prevent="remove(t)"
                                                    v-show="
                                                        t ||
                                                            (!t &&
                                                                inputs.length >
                                                                    1)
                                                    "
                                                    >-</a
                                                >
                                                <a
                                                    href="#"
                                                    class="badge badge-primary"
                                                    @click.prevent="add(t)"
                                                    v-show="
                                                        t == inputs.length - 1
                                                    "
                                                    >+</a
                                                >
                                            </span>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="objetive1"
                                                    class="form-control"
                                                    v-model="input.name"
                                                    style="background: gainsboro;"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <input
                                            type="submit"
                                            class="btn btn-warning"
                                            value="Guardar"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="createGrad">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="card">
                            <h3 class="card-header fondo text-center">
                                Grado
                                <button
                                    type="button"
                                    class="close"
                                    data-dismiss="modal"
                                >
                                    <span>&times;</span>
                                </button>
                            </h3>
                            <div class="card-body">
                                <form
                                    class="needs-validation"
                                    v-on:submit.prevent="createGrado()"
                                    novalidate
                                >
                                    <div class="form-group row mx-auto">
                                        <div
                                            class="col-md-8 text-center mx-auto"
                                        >
                                            <label for>Sección</label>
                                            <div>
                                                <select
                                                    class="form-control"
                                                    v-model="section"
                                                    style="background: gainsboro;"
                                                    required
                                                >
                                                    <option
                                                        :value="option.id"
                                                        v-for="option in fillS.sections"
                                                        >{{
                                                            option.name
                                                        }}</option
                                                    >
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="form-group row mx-auto"
                                        v-for="(input, t) in inputs"
                                        :key="t"
                                    >
                                        <div
                                            class="col-md-8 text-center mx-auto"
                                        >
                                            <label for="name">Grado</label>
                                            <span>
                                                <a
                                                    href="#"
                                                    class="badge badge-danger"
                                                    @click.prevent="remove(t)"
                                                    v-show="
                                                        t ||
                                                            (!t &&
                                                                inputs.length >
                                                                    1)
                                                    "
                                                    >-</a
                                                >
                                                <a
                                                    href="#"
                                                    class="badge badge-primary"
                                                    @click.prevent="add(t)"
                                                    v-show="
                                                        t == inputs.length - 1
                                                    "
                                                    >+</a
                                                >
                                            </span>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="objetive1"
                                                    class="form-control"
                                                    v-model="input.name"
                                                    style="background: gainsboro;"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <input
                                            type="submit"
                                            class="btn btn-warning"
                                            value="Guardar"
                                        />
                                    </div>
                                </form>
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
            clases: [],
            descripcion: "",
            logro: "",
            name: [],
            grado: [],
            errors: [],
            fillS: [],
            section: "",
            materia: [],
            fillG: [],
            inputs: [
                {
                    name: ""
                }
            ]
        };
    },
    created() {},
    mounted() {
        var urlr = "getGrade";
        axios.get(urlr).then(response => {
            this.fillG = response.data;
        });
        console.log("Component mounted.");
    },
    methods: {
        getMenu() {
            window.location = "/general_adm";
        },
        editNames(clas) {
            $("#createZ").modal("show");
        },
        createS(clas) {
            var urlr = "getGrade";
            axios.get(urlr).then(response => {
                this.fillG = response.data;
            });
            $("#createSalon").modal("show");
        },
        createM(clas) {
            var urlr = "getGrade";
            axios.get(urlr).then(response => {
                this.fillG = response.data;
            });
            $("#createMat").modal("show");
        },
        createG(clas) {
            var urlr = "findInstitution/8" + clas;
            axios.get(urlr).then(response => {
                this.fillS = response.data;
            });
            $("#createGrad").modal("show");
        },
        add(index) {
            this.inputs.push({
                name: ""
            });
        },
        remove(index) {
            this.inputs.splice(index, 1);
        },
        createSalon() {
            var url = "createClassroom";
            if (this.inputs.length >= 1) {
                for (let i = 0; i < this.inputs.length; i++) {
                    this.name.push(this.inputs[i]);
                }
            }
            axios
                .post(url, {
                    //Cursos generales
                    class: this.name,
                    grade: this.grado
                })
                .then(response => {
                    this.errors = [];
                    (this.name = []), (this.grado = "");
                    toastr.success("Nuevo salon creado exitosamente");

                    $("#createSalon").modal("hide");
                    this.getMenu();
                })
                .catch(error => {
                    this.errors = error.response.data;
                });
        },
        createGrado() {
            var url = "createGrade";
            if (this.inputs.length >= 1) {
                for (let i = 0; i < this.inputs.length; i++) {
                    this.name.push(this.inputs[i]);
                }
            }
            axios
                .post(url, {
                    //Cursos generales
                    grade: this.name,
                    section: this.section
                })
                .then(response => {
                    this.errors = [];
                    (this.name = []), (this.section = "");
                    toastr.success("Nuevo grado creado exitosamente");
                    $("#createGrad").modal("hide");
                    this.getMenu();
                })
                .catch(error => {
                    this.errors = error.response.data;
                });
        },
        createMateria() {
            var url = "createArea";
            if (this.inputs.length >= 1) {
                for (let i = 0; i < this.inputs.length; i++) {
                    this.materia.push(this.inputs[i]);
                }
            }
            axios
                .post(url, {
                    //Cursos generales
                    area: this.materia,
                    grade: this.grado
                })
                .then(response => {
                    this.errors = [];
                    (this.materia = []), (this.grado = "");
                    toastr.success("Nueva materia creada exitosamente");
                    $("#createMat").modal("hide");
                    this.getMenu();
                })
                .catch(error => {
                    this.errors = error.response.data;
                });
        }
    }
};
</script>
<style>
.background2 {
    background: url(../assets/img/Fondo5.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
}
</style>
