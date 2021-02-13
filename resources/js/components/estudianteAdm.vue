<template>
  <div class="back">
    <div id="crud" class="row justify-content-center">
      <div class="col-sm-10">
        <div class="custom-card text-center">
          <h3 class="card-header fondo">Usuarios estudiantes</h3>
          <div class="card-body">
            <table class="table table-responsive-xl table-hover table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Identificación</th>
                  <th>Email</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody v-for="(name,k) in names" :key="k">
                <tr v-if="name.type_user=='3'">
                  <td>{{ name.name }}</td>
                  <td>{{ name.last_name }}</td>
                  <td>{{ name.id_number }}</td>
                  <td>{{ name.email }}</td>
                  <td class="float-right">
                    <a class="btn btn-sm" href="#" style="color: grey;">
                      <i class="fa fa-eye"></i>
                    </a>
                    <a class="btn btn-sm" href="#" style="color: grey;">
                      <i class="fa fa-edit"></i>
                    </a>

                    <a class="btn btn-sm" href="#" style="color: grey;">
                      <i class="fa fa-trash"></i>
                    </a>
                  </td>
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
  created() {
    this.getNames();
  },
  computed: {},
  mounted() {
    this.getNames();
    console.log("Component mounted.");
  },
  methods: {
    //metodos del CRUD
    getNames() {
      var urlUsers = "users";
      axios.get(urlUsers).then(response => {
        this.names = response.data;
        console.log(this.names);
      });
    }
  }
};
</script>
