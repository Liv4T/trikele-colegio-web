<template>
    <auto-responsive>
        <div class="background2">
            <div class="row justify-content-center">
                <div id="crud" class="col-sm-10">
                    <div class="custom-card text-center">
                        <h3 class="card-header">Calificación</h3>
                        <div class="card-body">
                            <div class="form-group row float-right">
                                <div class="col-md-6">
                                    <a
                                        href="/evaluation"
                                        class="btn btn-primary"
                                        >Evaluar</a
                                    >
                                </div>
                            </div>
                            <table
                                class="table table-responsive table-hover table-striped center"
                            >
                                <thead>
                                    <tr>
                                        <th>N°</th>
                                        <th>Nombre del curso</th>
                                        <th>Estudiantes inscritos</th>
                                        <th>Actividad</th>
                                        <th>Fecha de retoalimentación</th>
                                        <th>Estado</th>
                                        <th>Nota</th>
                                        <th colspan="3">&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="cour in courses">
                                        <td width="10px">{{ cour.id }}</td>
                                        <td>{{ cour.name }}</td>
                                        <td>{{ cour.id_category }}</td>
                                        <td>{{ cour.type }}</td>
                                        <td>21/11/2019</td>
                                        <td>{{ cour.state }}</td>
                                        <td>10</td>
                                        <td width="10px">
                                            <a
                                                href="#"
                                                class="btn btn-info btn-sm"
                                                v-on:click.prevent="
                                                    editClasses(cour)
                                                "
                                                >v</a
                                            >
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade bd-example-modal-xl" id="edit">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="card">
                            <h1 class="card-header">
                                Calificación
                                <button
                                    type="button"
                                    class="close"
                                    data-dismiss="modal"
                                >
                                    <span>&times;</span>
                                </button>
                            </h1>
                            <form class="needs-validation" novalidate>
                                <div class="card-body">
                                    <div class="form-group row">
                                        <div class="col-md-6">
                                            <label for="name"
                                                >Nombre del curso</label
                                            >
                                            <input
                                                type="text"
                                                name="name"
                                                class="form-control"
                                                v-model="fillC.name"
                                                required
                                            />
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="subject">Unidad</label>
                                            <input
                                                type="text"
                                                name="subject"
                                                class="form-control"
                                                v-model="fillC.intensityAC"
                                                required
                                            />
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6">
                                            <label for="subject">Tema</label>
                                            <input
                                                type="text"
                                                name="subject"
                                                class="form-control"
                                                v-model="fillC.intensityTA"
                                                required
                                            />
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="col">
                                            <label for>Actividad</label>
                                            <input
                                                type="text"
                                                name="subject"
                                                class="form-control"
                                                v-model="fillC.intensityTA"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <table
                                        class="table table-responsive-center table-hover table-striped"
                                    >
                                        <thead>
                                            <tr>
                                                <th>N°</th>
                                                <th>Nombre del estudiante</th>
                                                <th>Estado</th>
                                                <th>Nota</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="cour in courses">
                                                <td width="10px">
                                                    {{ cour.id }}
                                                </td>
                                                <td>{{ cour.name }}</td>
                                                <td>{{ cour.type }}</td>
                                                <td>10</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="modal-footer">
                                        <input
                                            type="submit"
                                            class="btn btn-primary"
                                            value="Volver"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </auto-responsive>
</template>
<script>
(function() {
    "use strict";
    window.addEventListener(
        "load",
        function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName("needs-validation");
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener(
                    "submit",
                    function(event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add("was-validated");
                    },
                    false
                );
            });
        },
        false
    );
})();
$(function() {
    // Get the form fields and hidden div
    var checkbox = $("#gridCheck1");

    var hidden = $("#hidden_fields1");

    hidden.hide();

    checkbox.change(function() {
        if (checkbox.is(":checked")) {
            // Show the hidden fields.
            hidden.show();
        } else {
            hidden.hide();
        }
    });
});
import AutoResponsive from "autoresponsive-vue";

Vue.use(AutoResponsive);

export default {
    data() {
        return {
            inputs: [
                {
                    name: ""
                }
            ],
            inputs1: [
                {
                    name: ""
                }
            ],
            categories: [],
            subcategories: [],
            TypeUsers: [],
            courses: [],
            newDescription: "",
            newName: "",
            newId_category: "",
            newId_subcategories: "",
            newMethodologyG: "",
            newType: "",
            newIntensityAC: "",
            newIndicatorA: "",
            newIntensityTA: "",
            newWelcome: "",
            newPresentation: "",
            newIntention: "",
            newCompetences: "",
            newAchievement: "",
            newMap: "",
            newDescriptionO: "",
            metodology: "",
            newState: "",
            newPublish: "",
            fillC: {
                id: "",
                name: "",
                description: "",
                id_user: "",
                id_category: "",
                id_subcategory: "",
                intensityAC: "",
                intensityTA: "",
                methodology: "",
                methodologyG: "",
                welcome: "",
                presentation: "",
                intention: "",
                competences: "",
                achievement: "",
                indicatorA: "",
                map: "",
                type: "",
                descriptionO: "",
                state: "",
                publish: ""
            },
            errors: []
        };
    },
    created() {
        this.getClasses();
    },
    mounted() {
        var urlsel = "GetCategories";
        axios.get(urlsel).then(response => {
            this.categories = response.data;
        });
        var urlsel = "GetTypeU";
        axios.get(urlsel).then(response => {
            this.TypeUsers = response.data;
        });
        console.log("Component mounted.");
    },
    methods: {
        getClasses() {
            var urlr = "courses";
            axios.get(urlr).then(response => {
                this.courses = response.data;
            });
        },
        editClasses(cour) {
            this.fillC.id = cour.id;
            this.fillC.name = cour.name;
            this.fillC.intensityAC = cour.intensityAC;
            this.fillC.intensityTA = cour.intensityTA;
            this.fillC.welcome = cour.welcome;
            this.fillC.presentation = cour.presentation;
            this.fillC.intention = cour.intention;
            this.fillC.competences = cour.competences;
            this.fillC.achievement = cour.achievement;
            this.fillC.indicatorA = cour.indicatorA;
            this.fillC.methodologyG = cour.methodologyG;
            this.fillC.description = cour.description;
            this.fillC.descriptionO = cour.descriptionO;
            $("#edit").modal("show");
        },
        updateClasses(id) {
            var url = "courses/" + id;
            axios
                .put(url, this.fillC)
                .then(response => {
                    this.getClasses();
                    (this.fillC = {
                        id: "",
                        name: "",
                        description: "",
                        id_user: "",
                        id_category: "",
                        id_subcategory: "",
                        intensityAC: "",
                        intensityTA: "",
                        methodology: "",
                        methodologyG: "",
                        welcome: "",
                        presentation: "",
                        intention: "",
                        competences: "",
                        achievement: "",
                        indicatorA: "",
                        map: "",
                        type: "",
                        descriptionO: "",
                        state: "",
                        publish: ""
                    }),
                        (this.errors = []);
                    $("#edit").modal("hide");
                    toastr.success("curso editado exitosamente");
                })
                .catch(error => {
                    this.errors = error.response.data;
                });
        },
        getSubcategories() {
            var urlse = "GetSubcategories/" + this.Category;
            axios.get(urlse).then(response => {
                this.subcategories = response.data;
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
