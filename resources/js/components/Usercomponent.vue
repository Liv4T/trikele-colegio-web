<template>
  <div class="background2">
    <div id="crud" class="row justify-content-center">
      <div class="col-sm-10">
        <div class="custom-card text-center">
          <h3 class="card-header">Usuarios</h3>
          <div class="card-body">
            <a
              href="#"
              class="btn btn-primary float-right"
              data-toggle="modal"
              data-target="#createu"
            >Agregar</a>
            <table class="table table-responsive table-hover table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Identificación</th>
                  <th>Email</th>
                  <th colspan="2">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="name in names" :key="name">
                  <td width="10px">{{ name.id }}</td>
                  <td>{{ name.name }}</td>
                  <td>{{ name.last_name }}</td>
                  <td>{{ name.id_number }}</td>
                  <td>{{ name.email }}</td>
                  <td width="10px">
                    <a
                      href="#"
                      class="btn btn-warning btn-sm"
                      v-on:click.prevent="editNames(name)"
                    >/</a>
                  </td>
                  <td width="10px">
                    <a
                      href="#"
                      class="btn btn-danger btn-sm"
                      v-on:click.prevent="
                                                deleteNames(name)
                                            "
                    >-</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="modal fade" id="createu">
        <div class="modal-dialog">
          <div class="modal-content">
            <form class="needs-validation" v-on:submit.prevent="createNames" novalidate>
              <div class="modal-header">
                <h4>Crear</h4>
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="form-group row">
                  <div class="col">
                    <label for="name">Nombre</label>
                    <input type="text" name="name" v-model="newName" class="form-control" required />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col">
                    <label for="last_name">Apellido</label>
                    <input
                      type="text"
                      name="last_name"
                      class="form-control"
                      v-model="newLastName"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <label for="name">Email</label>
                    <input
                      type="text"
                      name="email"
                      class="form-control"
                      v-model="newEmail"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col">
                    <label for="name">Nombre de Usuario</label>
                    <input
                      type="text"
                      name="user_name"
                      class="form-control"
                      maxlength="20"
                      v-model="newUserName"
                      required
                    />
                    <div class="invalid-feedback">
                      Please fill out this field, the user
                      name may not be greater than 20
                      characters.
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <label for="name">Fecha de Nacimiento</label>
                    <input
                      type="date"
                      name="birthday"
                      class="form-control"
                      v-model="newBirthday"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col">
                    <label for="name">Edad</label>
                    <input
                      type="text"
                      name="age"
                      id="disabledTextInput"
                      class="form-control"
                      :placeholder="age"
                      v-model="newAge"
                      disabled
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <label for>Categorias</label>
                    <select2
                      :options="categories"
                      v-model="Category"
                      @input="getSubcategories"
                      required
                    ></select2>
                  </div>
                  <div class="col">
                    <label for>Subcategorias</label>
                    <select2 :options="subcategories" v-model="newId_subcategories" required></select2>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <label for>Tipo de Usuario</label>
                    <select2 :options="TypeUsers" v-model="newType_user" required></select2>
                  </div>
                  <div class="col">
                    <label for="name">Teléfono</label>
                    <input
                      type="text"
                      name="phone"
                      class="form-control"
                      v-model="newPhone"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <label for="name">Número de Identificación</label>
                    <input
                      type="text"
                      name="id_number"
                      class="form-control"
                      maxlength="15"
                      v-model="newId_number"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col">
                    <label for="name">Foto</label>
                    <input
                      type="file"
                      name="picture"
                      class="form-control"
                      @change="onFileChange"
                      accept="image/*"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <label for="name">Contraseña</label>
                    <input
                      type="password"
                      name="password"
                      class="form-control"
                      v-model="newPassword"
                      required
                    />
                  </div>
                  <div class="col">
                    <label for="name">Confirmar contraseña</label>
                    <input type="password" name="Cpassword" class="form-control" required />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <label for>Pais</label>
                    <select2 :options="myCountries" v-model="newCountry" required></select2>
                  </div>
                  <div class="col">
                    <label for="name">Dirección</label>
                    <input
                      type="text"
                      name="address"
                      id="validationDefault03"
                      class="form-control"
                      v-model="newAddress"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" required />
                    <label class="form-check-label" for="gridCheck">Acepto terminos y condiciones.</label>
                  </div>
                </div>
              </div>

              <div class="modal-footer">
                <input type="submit" class="btn btn-primary" value="Guardar" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="modal fade" id="editu">
        <div class="modal-dialog">
          <div class="modal-content">
            <form class="needs-validation" novalidate>
              <div class="modal-header">
                <h4>Editar</h4>
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="form-group row">
                  <div class="col">
                    <img
                      :src="fillNames.picture"
                      class="rounded float-right"
                      height="70"
                      width="90"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <label for="name">Nombre</label>
                    <input type="text" name="name" class="form-control" v-model="fillNames.name" />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col">
                    <label for="name">Apellido</label>
                    <input
                      type="text"
                      name="last_name"
                      class="form-control"
                      v-model="fillNames.last_name"
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <label for="name">Email</label>
                    <input type="text" name="email" class="form-control" v-model="fillNames.email" />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col">
                    <label for="name">Nombre de Usuario</label>
                    <input
                      type="text"
                      name="user_name"
                      class="form-control"
                      maxlength="20"
                      v-model="fillNames.user_name"
                      required
                    />
                    <div class="invalid-feedback">
                      Please fill out this field, the user
                      name may not be greater than 20
                      characters.
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <label for="name">Fecha de Nacimiento</label>
                    <input
                      type="date"
                      name="birthday"
                      class="form-control"
                      v-model="fillNames.birthday"
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col">
                    <label for="name">Edad</label>
                    <input
                      type="text"
                      name="age"
                      id="disabledTextInput"
                      class="form-control"
                      v-model="fillNames.age"
                      :placeholder="age"
                      disabled
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <label for="name">Categoria</label>
                    <input
                      type="text"
                      name="id_categories"
                      class="form-control"
                      v-model="fillNames.id_categories"
                    />
                    <div class="invalid-feedback"></div>
                  </div>
                  <div class="col">
                    <label for="name">Subcategoria</label>
                    <input
                      type="text"
                      name="id_subcategories"
                      class="form-control"
                      v-model="fillNames.id_subcategories"
                    />
                    <div class="invalid-feedback"></div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <label for="name">Tipo de Usuario</label>
                    <input
                      type="text"
                      name="type_user"
                      class="form-control"
                      v-model="fillNames.type_user"
                    />
                    <div class="invalid-feedback"></div>
                  </div>
                  <div class="col-md-6">
                    <label for="name">Foto</label>
                    <input
                      type="file"
                      name="picture"
                      class="form-control"
                      v-on:change="onFileChange"
                    />
                    <!--<div class = " invalid-feedback ">Please fill out this field </div>-->
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <label for="name">Teléfono</label>
                    <input type="text" name="phone" class="form-control" v-model="fillNames.phone" />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col">
                    <label for="name">Número de Identificación</label>
                    <input
                      type="text"
                      name="id_number"
                      class="form-control"
                      v-model="fillNames.id_number"
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-6">
                    <label for>Pais</label>
                    <select2 :options="myCountries" v-model="fillNames.country" required></select2>
                  </div>
                  <div class="col-md-6">
                    <label for="name">Dirección</label>
                    <input
                      type="text"
                      name="address"
                      class="form-control"
                      v-model="fillNames.address"
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <!--<span v-for="error in errors" class="text-danger">{{ error }}</span>-->
              </div>
              <div class="modal-footer">
                <input
                  type="submit"
                  @click="updateNames"
                  class="btn btn-primary"
                  value="Actualizar"
                />
              </div>
            </form>
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
      myCountries: [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "The Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia",
        "Botswana",
        "Brazil",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo",
        "Costa Rica",
        "Cote d’Ivoire",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "East Timor (Timor-Leste)",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "The Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea North",
        "Korea South",
        "Kosovo",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar (Burma)",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Macedonia",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Sudan South",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Vatican City",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Zambia",
        "Zimbabwe"
      ],
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
  computed: {
    age() {
      const birthday = new Date(this.newBirthday);
      const dateNow = new Date();

      if (dateNow.getMonth() + 1 < birthday.getMonth() + 1) {
        this.edad = dateNow.getFullYear() - birthday.getFullYear() - 1;
      } else if (dateNow.getMonth() + 1 == birthday.getMonth() + 1) {
        if (dateNow.getDate() < birthday.getDate()) {
          console.log(dateNow.getDate() < birthday.getDate());
          this.edad = dateNow.getFullYear() - birthday.getFullYear() - 1;
        } else {
          this.edad = dateNow.getFullYear() - birthday.getFullYear();
        }
      } else {
        this.edad = dateNow.getFullYear() - birthday.getFullYear();
      }
      if (this.edad) return `${this.edad}`;
    }
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
    //metodos del CRUD
    getNames() {
      var urlUsers = "users";
      axios.get(urlUsers).then(response => {
        this.names = response.data;
      });
    },
    editNames(name) {
      this.fillNames.id = name.id;
      this.fillNames.name = name.name;
      this.fillNames.last_name = name.last_name;
      this.fillNames.age = name.age;
      this.fillNames.birthday = name.birthday;
      this.fillNames.password = name.password;
      this.fillNames.email = name.email;
      this.fillNames.user_name = name.user_name;
      this.fillNames.id_categories = name.id_categories;
      this.fillNames.id_subcategories = name.id_subcategories;
      this.fillNames.type_user = name.type_user;
      this.fillNames.address = name.address;
      this.fillNames.picture = name.picture;
      this.fillNames.phone = name.phone;
      this.fillNames.id_number = name.id_number;
      this.fillNames.country = name.country;
      $("#editu").modal("show");
    },
    updateNames(id) {
      var url = "users/" + id;
      axios
        .put(url, this.fillNames)
        .then(response => {
          this.getNames();
          this.fillNames = {
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
          };
          this.errors = [];
          $("#editu").modal("hide");
          toastr.success("User successfully edited");
        })
        .catch(error => {
          this.errors = error.response.data;
        });
    },
    deleteNames(name) {
      var url = "users/" + name.id;
      axios.delete(url).then(response => {
        // eliminamos
        this.getNames(); //listamos
        toastr.success("Successfully removed"); //mensaje
      });
    },
    createNames() {
      console.log("sent form");
      console.log(this.newPicture);
      var url = "users_save";
      this.newAge = this.age;
      console.log("send info user url, " + url);

      axios
        .post(url, {
          name: this.newName,
          last_name: this.newLastName,
          age: this.newAge,
          birthday: this.newBirthday,
          password: this.newPassword,
          user_name: this.newUserName,
          email: this.newEmail,
          id_categories: this.Category,
          id_subcategories: this.newId_subcategories,
          type_user: this.newType_user,
          address: this.newAddress,
          picture: this.newPicture,
          phone: this.newPhone,
          id_number: this.newId_number,
          country: this.newCountry
        })
        .then(response => {
          console.log("response: ", response);
          this.getNames();
          this.newName = "";
          this.newLastName = "";
          this.newPassword = "";
          this.newAge = "";
          this.newBirthday = "";
          this.newEmail = "";
          this.newUserName = "";
          this.newId_subcategories = "";
          this.newType_user = "";
          this.newAddress = "";
          this.newPicture = "";
          this.newPhone = "";
          this.newId_number = "";
          this.newCountry = "";
          this.errors = [];
          $("#createu").modal("hide");
          toastr.success("New user created successfully");
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
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var newPicture = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = e => {
        vm.newPicture = e.target.result;
      };
      reader.readAsDataURL(file);
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
