<template>
    <div class="background2">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="custom-card text-center">
                    <h3 class="card-header">Mis Cursos</h3>
                    <div class="card-body">
                        <table
                            class="table table-responsive table-hover table-striped center"
                        >
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Nombre del curso</th>
                                    <th>Categoria</th>
                                    <th>Tipo de curso</th>
                                    <th>Modalidad de curso</th>
                                    <th>Estado</th>
                                    <th>Avance</th>
                                    <th colspan="3">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="cour in courses">
                                    <td width="10px">{{ cour.id }}</td>
                                    <td>{{ cour.name }}</td>
                                    <td>{{ cour.id_category }}</td>
                                    <td>{{ cour.type }}</td>
                                    <td>{{ cour.type }}</td>
                                    <td>{{ cour.state }}</td>
                                    <td>20%</td>
                                    <td width="5px">
                                        <a
                                            href="/mycourse"
                                            class="btn btn-info btn-sm"
                                            >v</a
                                        >
                                    </td>
                                    <!--td width="10px">
                      <a
                        href="#"
                        class="btn btn-warning btn-sm"
                        v-on:click.prevent="editClasses(cour)"
                      >/</a>
                    </td>
                    <td width="10px">
                      <a
                        href="#"
                        class="btn btn-danger btn-sm"
                        v-on:click.prevent="deleteClasses(cour)"
                      >-</a>
                    </td-->
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
        add(index) {
            this.inputs.push({ name: "" });
        },
        remove(index) {
            this.inputs.splice(index, 1);
        },
        add1(index) {
            this.inputs1.push({ name: "" });
        },
        remove1(index) {
            this.inputs1.splice(index, 1);
        },
        getClasses() {
            var urlr = "courses";
            axios.get(urlr).then(response => {
                this.courses = response.data;
                console.log(this.courses);
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
