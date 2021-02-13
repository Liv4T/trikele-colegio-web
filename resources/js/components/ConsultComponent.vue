<template>
  <auto-responsive>
    <div class="background2">
      <div class="row justify-content-center">
        <div id="crud" class="col-sm-10">
          <div class="custom-card text-center">
            <h3 class="card-header">Consultas</h3>
            <div class="card-body">
              <div class="form-group row float-right">
                <!-- <div class="col-md-4">
                  <a href="/listactivity" class="btn btn-primary">Responder</a>
                </div>
               <div class="col-md-7">
                  <a href="/category" class="btn btn-primary">Cuestionario</a>
                </div>-->
              </div>
              <table class="table table-responsive table-hover table-striped center">
                <thead>
                  <tr>
                    <th>N°</th>
                    <th>Nombre del estudiante</th>
                    <th>Tema</th>
                    <th>Tipo de consulta</th>
                    <th>Fecha límite de respuesta</th>
                    <th colspan="3">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="cour in courses">
                    <td width="10px">{{ cour.id }}</td>
                    <td>{{ cour.name }}</td>
                    <td>{{ cour.intention }}</td>
                    <td>{{ cour.welcome }}</td>
                    <td>{{ cour.updated_at }}</td>
                    <td width="10px">
                      <a
                        href="#"
                        class="btn btn-info btn-sm"
                        v-on:click.prevent="viewConsult(cour)"
                      >v</a>
                    </td>
                    <td width="10px">
                      <a
                        href="#"
                        class="btn btn-warning btn-sm"
                        v-on:click.prevent="editClasses(cour)"
                      >/</a>
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
                Responder Consulta
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </h1>
              <form class="needs-validation" novalidate>
                <div class="card-body">
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="name">Nombre del estudiante</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="fillC.name"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <label for="subject">Consulta</label>
                      <input
                        type="text"
                        name="subject"
                        class="form-control"
                        v-model="fillC.intensityAC"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Respuesta</strong>
                      <a
                        tabindex="0"
                        class="badge badge-info"
                        role="button"
                        data-toggle="popover"
                        data-trigger="focus"
                        title="Respuesta"
                        data-content
                      >
                        <i class="fas fa-question"></i>
                      </a>
                    </div>
                    <textarea name="welcome" class="form-control" v-model="newWelcome" required></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Archivo</strong>
                      <a
                        tabindex="0"
                        class="badge badge-info"
                        role="button"
                        data-toggle="popover"
                        data-trigger="focus"
                        title="Adjuntar Archivo"
                        data-content="Se refiere al espacio en el cual puede adjuntar un archivo para complementar la respuesta a la consulta"
                      >
                        <i class="fas fa-question"></i>
                      </a>
                    </div>
                    <input type="file" name="intentioned" class="form-control" required />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="modal-footer">
                    <input
                      type="submit"
                      @click.prevent="createCourses"
                      class="btn btn-primary"
                      value="Enviar"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade bd-example-modal-xl" id="view">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="card">
              <h1 class="card-header">
                Consulta
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </h1>
              <form class="needs-validation" novalidate>
                <div class="card-body">
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="name">Nombre del estudiante</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="fillC.name"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <label for="subject">Consulta</label>
                      <textarea
                        name="subject"
                        class="form-control"
                        v-model="fillC.intensityAC"
                        disabled
                      ></textarea>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="subject">Tipo de Consulta</label>
                      <input
                        type="text"
                        name="subject"
                        class="form-control"
                        v-model="fillC.intention"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <label for="subject">Fecha</label>
                      <input
                        type="text"
                        name="subject"
                        class="form-control"
                        v-model="fillC.updated_at"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <input
                      type="submit"
                      @click.prevent="createCourses"
                      class="btn btn-primary"
                      value="Enviar"
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
      myOptions: [
        "1:00",
        "1:30",
        "2:00",
        "2:30",
        "3:00",
        "3:30",
        "4:00",
        "4:30",
        "5:00",
        "5:30",
        "6:00",
        "6:30",
        "7:00",
        "7:30",
        "8:00",
        "8:30",
        "9:00",
        "9:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "21:00",
        "21:30",
        "22:00",
        "22:30",
        "23:00",
        "23:30",
        "0:00",
        "0:30"
      ],
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
    viewConsult(cour) {
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
      $("#view").modal("show");
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
    deleteClasses(cour) {
      var url = "courses/" + cour.id;
      this.fillC.state = "Edited";
      axios.put(url, this.fillC).then(response => {
        // eliminar
        this.getClasses(); //lista
        (this.fillC = {
          description: "",
          state: ""
        }),
          toastr.success("Successfully removed"); //mensaje
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
