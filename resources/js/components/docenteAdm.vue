<template>
    <div class="back">
        <div id="crud" class="row justify-content-center">
            <div class="col-sm-10">
                <div class="custom-card text-center">
                    <h3 class="card-header fondo">Usuarios asignados</h3>
                    <div class="card-body">
                        <table
                            class="table table-responsive-xl table-hover table-striped"
                        >
                            <thead>
                                <tr>
                                    <th>Nombre Completo</th>
                                    <th>Tipo</th>
                                    <th>Salón</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="(name, k) in names.estudiantes"
                                    :key="k"
                                >
                                    <td>
                                        {{ name.student_name }}
                                    </td>
                                    <td>{{ name.type }}</td>
                                    <td>{{ name.classroom_name }}</td>
                                </tr>
                                <tr v-for="option in names.profesores">
                                    <td>
                                        {{ option.student_name }}
                                    </td>
                                    <td>{{ option.type }}</td>
                                    <td>{{ option.classroom_name }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <!-- <div class="modal-footer">
                            <a class="btn btn-warning" href="/excel"
                                >Exportar</a
                            >
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import "toastr/toastr.scss";
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
export default {
    data() {
        return {
            names: [],
            newName: "",
            newLastName: "",
            newAge: "",
            newBirthday: "",
            newPassword: "",
            newEmail: "",
            newUserName: "",
            newId_subcategories: "",
            newType_user: "",
            newAddress: "",
            newPicture: "",
            newPhone: "",
            newId_number: "",
            newCountry: "",
            fillNames: {
                id: "",
                name: "",
                last_name: "",
                age: "",
                birthday: "",
                password: "",
                email: "",
                user_name: "",
                id_categories: "",
                id_subcategories: "",
                type_user: "",
                address: "",
                picture: "",
                phone: "",
                id_number: "",
                country: ""
            },

            errors: [],
            Category: "",
            Subcategory: "",
            Type: "",
            newContry: "",
            categories: [],
            subcategories: [],
            TypeUsers: [],
            edad: "",
            offset: 3
        };
    },
    created() {},
    computed: {},
    mounted() {
        this.getNames();
    },
    methods: {
        //metodos del CRUD
        getNames() {
            var urlUsers = "getUsersAssigned";
            axios.get(urlUsers).then(response => {
                this.names = response.data;
                console.log(this.names);
            });
        }
    }
};
</script>
