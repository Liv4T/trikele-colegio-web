<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">Instituciones</h3>
          <div class="card-body">
            <a class="btn btn-warning" href="/instituciones_crear">Crear</a>

            <br />
            <br />
            <table class="table table-responsive-xl table-hover table-striped center">
              <tbody v-for="insti in institutions">
                <tr data-toggle="collapse" data-target="#accordion" class="clickable">
                  <td>{{ insti.name }}</td>

                  <td class="float-right">
                    <a
                      class="btn btn-sm"
                      href="#"
                      style="color: grey;"
                      v-on:click.prevent="
                                                editInsti(insti.id)
                                            "
                    >
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
      <div class="modal fade" id="createInsti">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="card">
              <h3 class="card-header fondo text-center">
                Institución
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </h3>
              <div class="card-body">
                <form class="needs-validation" novalidate>
                  <form-wizard
                    title
                    subtitle
                    color="#ffc107"
                    next-button-text="Siguiente"
                    back-button-text="Atrás"
                    finish-button-text="Guardar y enviar"
                    @on-complete="createInstitution"
                  >
                    <tab-content title="Institución">
                      <div class="form-group row mx-auto">
                        <div class="col-md-6">
                          <label for>Nombre:</label>
                          <input
                            type="text"
                            name="objetive1"
                            class="form-control"
                            v-model="name"
                            required
                          />
                        </div>

                        <div class="col-md-6">
                          <label for="name">
                            Dirección de
                            sede
                          </label>
                          <input
                            type="text"
                            name="objetive1"
                            class="form-control"
                            v-model="address"
                            required
                          />
                        </div>
                        <div class="col-md-6">
                          <label for="name">Año</label>
                          <input
                            type="number"
                            name="objetive1"
                            class="form-control"
                            v-model="year"
                            required
                          />
                        </div>
                        <div class="col-md-6" v-for="input in fillSection" v-if="input.name != ''">
                          <label for="name">Sección</label>

                          <input
                            type="text"
                            name="objetive1"
                            class="form-control"
                            v-model="input.name"
                            required
                          />
                        </div>
                      </div>

                      <div class="form-group row mx-auto" v-for="input1 in fillPeriod">
                        <div class="col-md-6" v-if="input1.name != ''">
                          <label for="name">Periodos</label>

                          <input
                            type="text"
                            name="objetive1"
                            class="form-control"
                            v-model="input1.name"
                            required
                          />
                        </div>
                        <div class="col-md-6" v-if="input1.name != ''">
                          <label for="name">Desde</label>
                          <input
                            type="date"
                            name="objetive1"
                            class="form-control"
                            v-model="
                                                            input1.date_from
                                                        "
                            required
                          />
                        </div>
                        <div class="col-md-6" v-if="input1.name != ''">
                          <label for="name">Hasta</label>
                          <input
                            type="date"
                            name="objetive1"
                            class="form-control"
                            v-model="input1.date_to"
                            required
                          />
                        </div>
                      </div>

                      <!-- <div class="modal-footer">
                    <a href="#" class="btn btn-warning float-right">Guardar</a>
                      </div>-->
                    </tab-content>
                  </form-wizard>
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
      institutions: [],
      errors: [],
      fillI: [],
      name: "",
      city: "",
      state: "",
      address: "",
      streaming: "",
      semanal: false,
      seleccionadoStreaming: "",
      textoM: "",
      errors: [],
      year: "",
      section: [],
      period: [],
      id: "",
      fillSection: [
        {
          id: "",
          name: "",
          id_institution: "",
        },
      ],
      fillPeriod: [
        {
          id: "",
          name: "",
          date_from: "",
          date_to: "",
        },
      ],
    };
  },
  created() {},
  mounted() {
    var urlr = "getInstitution";
    axios.get(urlr).then((response) => {
      this.institutions = response.data;
    });
    console.log("Component mounted.");
  },
  methods: {
    editInsti(insti) {
      var urlr = "findInstitution/" + insti;
      axios.get(urlr).then((response) => {
        this.fillI = response.data;
        this.fillSection = [];
        this.fillPeriod = [];
        for (var prop in response.data.sections) {
          if (response.data.sections.hasOwnProperty(prop)) {
            // console.log(response.data.sections[prop]);
            this.fillSection.push(response.data.sections[prop]);
          }
        }
        for (var i in response.data.periods) {
          if (response.data.sections.hasOwnProperty(i)) {
            // console.log(response.data.sections[prop]);
            this.fillPeriod.push(response.data.periods[i]);
          }
        }
        this.id = this.fillI.institution.id;
        this.name = this.fillI.institution.name;
        this.year = this.fillI.institution.year;
        this.address = this.fillI.institution.address;
      });
      $("#createInsti").modal("show");
    },

    add(index) {
      this.inputs.push({
        name: "",
      });
    },
    remove(index) {
      this.inputs.splice(index, 1);
    },
    createInstitution() {
      var url = "updateInstitution";

      if (this.fillSection.length >= 1) {
        for (let i = 0; i < this.fillSection.length; i++) {
          this.section.push(this.fillSection[i]);
        }
      }
      console.log(this.fillSection);
      if (this.fillPeriod.length >= 1) {
        for (let i = 0; i < this.fillPeriod.length; i++) {
          this.period.push(this.fillPeriod[i]);
        }
      }
      axios
        .put(url, {
          //Cursos generales
          id: this.id,
          name: this.name,
          year: this.year,
          address: this.address,
          sections: this.section,
          periods: this.period,
        })
        .then((response) => {
          this.errors = [];

          toastr.success("Nueva institución actualizada exitosamente");
          this.getMenu();
        })
        .catch((error) => {
          this.errors = error.response.data;
        });
    },
  },
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
