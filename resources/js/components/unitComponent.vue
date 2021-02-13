<template>
    <auto-responsive>
        <div class="background2">
            <div class="row">
                <div class="col-md-11 mx-auto">
                    <div class="custom-card text-center">
                        <h3 class="card-header">Unidad 1</h3>
                        <form class="needs-validation" novalidate>
                            <div class="card-body">
                                <div class="form-group mx-auto col-md-6">
                                    <strong>Nombre de la unidad (1)</strong>
                                </div>
                                <div class="form-group mx-auto">
                                    <div align="center">
                                        <strong
                                            >Presentación de la unidad</strong
                                        >
                                    </div>
                                    <textarea
                                        name="welcome"
                                        class="form-control"
                                        v-model="newFromW"
                                        placeholder=" Se refiere al espacio en el cual se da a conocer el proposito de la unidad; debe ser escrita mediante un texto corto."
                                        disabled
                                    ></textarea>
                                    <div class="invalid-feedback">
                                        Please fill out this field
                                    </div>
                                </div>
                                <div class="form-group mx-auto">
                                    <div align="center">
                                        <strong
                                            >Conocimientos, habilidades y
                                            requisitos para el desarrollo de la
                                            unidad</strong
                                        >
                                    </div>
                                    <textarea
                                        name="welcome"
                                        class="form-control"
                                        v-model="newFromW"
                                        placeholder="Se presentan los conocimientos previos al aprendizaje que corresponden al desarrollo de la unidad"
                                        disabled
                                    ></textarea>
                                    <div class="invalid-feedback">
                                        Please fill out this field
                                    </div>
                                </div>
                                <div class="form-group mx-auto">
                                    <div align="center">
                                        <strong>Temas</strong>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <div class="form-group row">
                                            <div class="col">
                                                <a href="/listactivity">
                                                    Tema 1
                                                    <br />Nombre del tema
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a href="/listactivity">
                                                    Tema 2
                                                    <br />Nombre del tema
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a href="/listactivity">
                                                    Tema 3
                                                    <br />Nombre del tema
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <a
                                        href="/vcourse"
                                        class="btn btn-primary float-right"
                                        >Volver</a
                                    >
                                </div>
                            </div>
                        </form>
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
    var checkbox1 = $("#gridCheck2");

    var hidden = $("#hidden_fields1");
    var hidden1 = $("#hidden_fields2");

    hidden.hide();
    hidden1.hide();

    checkbox.change(function() {
        if (checkbox.is(":checked")) {
            // Show the hidden fields.

            hidden.show();
        } else {
            hidden.hide();
            checkbox1.show();
        }
    });
    checkbox1.change(function() {
        if (checkbox.is(":checked")) {
            // Show the hidden fields.
            checkbox.disabled = false;
            hidden.show();
        } else {
            hidden.hide();
            checkbox.show();
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
            Uoptions: ["3", "4"],
            subcategories: [],
            TypeUsers: [],
            classes: [],
            myOptions: ["On-Line", "Virtual"],
            newDescription: "",
            newName: "",
            newId_subcategories: "",
            newSubject: "",
            newObjetive: "",
            newFromW: "",
            newToW: "",
            newFromH: "",
            newToH: "",
            newQuiz: "",
            newIndicator: "",
            newPercent: "",
            newLocal: "",
            newRegional: "",
            newContry: "",
            newWorld: "",
            newId_user: "",
            fillC: {
                id: "",
                name: "",
                description: "",
                id_user: "",
                id_category: "",
                id_subcategory: "",
                subject: "",
                objetive: "",
                fromW: "",
                toW: "",
                fromH: "",
                toH: "",
                quiz: "",
                indicator: "",
                percent: "",
                local: "",
                regional: "",
                world: ""
            },
            errors: []
        };
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
        editClasses(clas) {
            this.fillC.id = clas.id;
            this.fillC.description = clas.description;
            this.fillC.name = clas.name;
            this.fillC.id_user = clas.id_user;
            this.fillC.id_category = clas.id_category;
            this.fillC.id_subcategory = clas.id_subcategory;
            this.fillC.subject = clas.subject;
            this.fillC.objetive = clas.objetive;
            this.fillC.fromW = clas.fromW;
            this.fillC.toW = clas.toW;
            this.fillC.fromH = clas.fromH;
            this.fillC.toH = clas.toH;
            this.fillC.quiz = clas.quiz;
            this.fillC.indicator = clas.indicator;
            this.fillC.percent = clas.percent;
            this.fillC.local = clas.local;
            this.fillC.regional = clas.regional;
            this.fillC.world = clas.world;
            $("#edit").modal("show");
        },
        updateClasses(id) {
            var url = "classes/" + id;
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
                        subject: "",
                        objetive: "",
                        fromW: "",
                        toW: "",
                        fromH: "",
                        toH: "",
                        quiz: "",
                        indicator: "",
                        percent: "",
                        local: "",
                        regional: "",
                        world: ""
                    }),
                        (this.errors = []);
                    $("#edit").modal("hide");
                    toastr.success("Class successfully edited");
                })
                .catch(error => {
                    this.errors = error.response.data;
                });
        },
        deleteClasses(clas) {
            var url = "classes/" + clas.id;
            axios.delete(url).then(response => {
                // eliminar
                this.getClasses(); //lista
                toastr.success("Successfully removed"); //mensaje
            });
        },
        createClasses() {
            var url = "classes";
            this.newId_user = 36;
            axios
                .post(url, {
                    id_user: this.newId_user,
                    description: this.newDescription,
                    name: this.newName,
                    id_category: this.Category,
                    id_subcategory: this.newId_subcategories,
                    subject: this.newSubject,
                    objetive: this.newObjetive,
                    fromW: this.newFromW,
                    toW: this.newToW,
                    fromH: this.newFromH,
                    toH: this.newToH,
                    quiz: this.newQuiz,
                    indicator: this.newIndicator,
                    percent: this.newPercent,
                    local: this.newLocal,
                    regional: this.newRegional,
                    world: this.newWorld
                })
                .then(response => {
                    this.getClasses();
                    this.newDescription = "";
                    this.newId_user = "";
                    this.newName = "";
                    this.newId_subcategories = "";
                    this.newSubject = "";
                    this.newObjetive = "";
                    this.newToW = "";
                    this.newFromW = "";
                    this.newFormH = "";
                    this.newToH = "";
                    this.newQuiz = "";
                    this.newIndicator = "";
                    this.newPercent = "";
                    this.newLocal = "";
                    this.newRegional = "";
                    this.newContry = "";
                    this.newWorld = "";
                    this.errors = [];
                    $("#create").modal("hide");
                    toastr.success("New class created successfully");
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
