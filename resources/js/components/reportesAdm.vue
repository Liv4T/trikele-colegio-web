<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">Reportes</h3>
          <div class="card-body">
            <table class="table table-responsive-xl table-hover table-striped center">
              <tbody>
                <tr data-toggle="collapse" data-target="#accordion" class="clickable">
                  <td>Notas</td>
                  <td></td>
                  <td></td>

                  <td class="float-right">
                    <a class="btn btn-sm" href="#" style="color: grey;">
                      <i class="fas fa-download"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div id="accordion" class="collapse">
                      <a class="btn btn-warning" v-on:click.prevent="createE()">Generar</a>
                    </div>
                  </td>
                </tr>
                <tr data-toggle="collapse" data-target="#accordion2" class="clickable">
                  <td>Planeación</td>
                  <td></td>
                  <td></td>

                  <td class="float-right">
                    <a class="btn btn-sm" href="#" style="color: grey;">
                      <i class="fas fa-download"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div id="accordion2" class="collapse">
                      <a class="btn btn-warning" v-on:click.prevent="createPlanificacion()">Generar</a>
                    </div>
                  </td>
                </tr>
                <tr data-toggle="collapse" data-target="#accordion7" class="clickable">
                  <td>Asistencia</td>
                  <td></td>
                  <td></td>

                  <td class="float-right">
                    <a class="btn btn-sm" href="#" style="color: grey;">
                      <i class="fas fa-download"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div id="accordion7" class="collapse">
                      <a class="btn btn-warning" v-on:click.prevent="createAsistencia()">Generar</a>
                    </div>
                  </td>
                </tr>

                <tr data-toggle="collapse" data-target="#accordion4" class="clickable">
                  <td>Psicologia</td>
                  <td></td>
                  <td></td>

                  <td class="float-right">
                    <a class="btn btn-sm" href="#" style="color: grey;">
                      <i class="fas fa-download"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div id="accordion4" class="collapse">
                      <a class="btn btn-warning" v-on:click.prevent="createPsicologia()">Generar</a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="modal fade" id="createNotas">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="card">
              <h3 class="card-header fondo text-center">
                Reporte de notas
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </h3>
              <div class="card-body">
                <form class="needs-validation" v-on:submit.prevent novalidate>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <Label>Año</Label>
                      <select
                        class="form-control"
                        ref="seleccionado"
                        style="background: gainsboro;"
                        required
                      >
                        <option value="2">2020</option>
                        <option value="3">2019</option>
                        <option value="3">2018</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <Label>Acumulado</Label>
                      <select
                        class="form-control"
                        ref="seleccionado"
                        style="background: gainsboro;"
                        required
                      >
                        <option value="2">Acumulado</option>
                        <option value="3">Estudiante</option>
                        <option value="3">Administrador</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <Label>Periodo</Label>
                      <select
                        class="form-control"
                        ref="seleccionado"
                        style="background: gainsboro;"
                        required
                      >
                        <option value="2">Periodo</option>
                        <option value="3">Estudiante</option>
                        <option value="3">Administrador</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <Label>Curso</Label>
                      <select
                        class="form-control"
                        ref="seleccionado"
                        style="background: gainsboro;"
                        required
                      >
                        <option value="2">Curso</option>
                        <option value="3">Estudiante</option>
                        <option value="3">Administrador</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <Label>Estado</Label>
                      <select
                        class="form-control"
                        ref="seleccionado"
                        style="background: gainsboro;"
                        required
                      >
                        <option value="2">Estado</option>
                        <option value="3">Estudiante</option>
                        <option value="3">Administrador</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <Label>Materias</Label>
                      <select
                        class="form-control"
                        ref="seleccionado"
                        style="background: gainsboro;"
                        required
                      >
                        <option value="2">Química</option>
                        <option value="3">Físisca</option>
                        <option value="3">Español</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <Label>Ranking</Label>
                      <select
                        class="form-control"
                        ref="seleccionado"
                        style="background: gainsboro;"
                        required
                      >
                        <option value="2">Top 10</option>
                        <option value="3">Estudiante</option>
                        <option value="3">Administrador</option>
                      </select>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <input type="submit" class="btn btn-warning" value="Exportar" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="createPsico">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="card">
              <h3 class="card-header fondo text-center">
                Reporte de psicologia
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </h3>
              <div class="card-body">
                <form class="needs-validation" v-on:submit.prevent novalidate>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <Label>Año</Label>
                      <select
                        class="form-control"
                        ref="seleccionado"
                        style="background: gainsboro;"
                        required
                      >
                        <option value="2">2020</option>
                        <option value="3">2019</option>
                        <option value="3">2018</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <Label>Acumulado</Label>
                      <select
                        class="form-control"
                        ref="seleccionado"
                        style="background: gainsboro;"
                        required
                      >
                        <option value="2">Acumulado</option>
                        <option value="3">Estudiante</option>
                        <option value="3">Administrador</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <Label>Periodo</Label>
                      <select
                        class="form-control"
                        ref="seleccionado"
                        style="background: gainsboro;"
                        required
                      >
                        <option value="2">Periodo</option>
                        <option value="3">Estudiante</option>
                        <option value="3">Administrador</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <Label>Cursos</Label>
                      <select
                        class="form-control"
                        ref="seleccionado"
                        style="background: gainsboro;"
                        required
                      >
                        <option value="2">Todos</option>
                        <option value="3">Estudiante</option>
                        <option value="3">Administrador</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <Label>Estudiantes</Label>
                      <select
                        class="form-control"
                        ref="seleccionado"
                        style="background: gainsboro;"
                        required
                      >
                        <option value="2">Todos</option>
                        <option value="3">Estudiante</option>
                        <option value="3">Administrador</option>
                      </select>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <input type="submit" class="btn btn-warning" value="Exportar" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="createAsis">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="card">
            <h3 class="card-header fondo text-center">
              Reporte de Asistencia
              <button type="button" class="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </h3>
            <div class="card-body">
              <form class="needs-validation" v-on:submit.prevent novalidate>
                <div class="form-group row mx-auto">
                  <div class="col-md-8 text-center mx-auto">
                    <Label>Año</Label>
                    <select
                      class="form-control"
                      ref="seleccionado"
                      style="background: gainsboro;"
                      required
                    >
                      <option value="2">2020</option>
                      <option value="3">2019</option>
                      <option value="3">2018</option>
                    </select>
                  </div>
                </div>
                <div class="form-group row mx-auto">
                  <div class="col-md-8 text-center mx-auto">
                    <Label>Acumulado</Label>
                    <select
                      class="form-control"
                      ref="seleccionado"
                      style="background: gainsboro;"
                      required
                    >
                      <option value="2">Acumulado</option>
                      <option value="3">Estudiante</option>
                      <option value="3">Administrador</option>
                    </select>
                  </div>
                </div>
                <div class="form-group row mx-auto">
                  <div class="col-md-8 text-center mx-auto">
                    <Label>Periodo</Label>
                    <select
                      class="form-control"
                      ref="seleccionado"
                      style="background: gainsboro;"
                      required
                    >
                      <option value="2">Periodo</option>
                      <option value="3">Estudiante</option>
                      <option value="3">Administrador</option>
                    </select>
                  </div>
                </div>
                <div class="form-group row mx-auto">
                  <div class="col-md-8 text-center mx-auto">
                    <Label>Curso</Label>
                    <select
                      class="form-control"
                      ref="seleccionado"
                      style="background: gainsboro;"
                      required
                    >
                      <option value="2">Curso</option>
                      <option value="3">Estudiante</option>
                      <option value="3">Administrador</option>
                    </select>
                  </div>
                </div>
                <div class="form-group row mx-auto">
                  <div class="col-md-8 text-center mx-auto">
                    <Label>Estado</Label>
                    <select
                      class="form-control"
                      ref="seleccionado"
                      style="background: gainsboro;"
                      required
                    >
                      <option value="2">Estado</option>
                      <option value="3">Estudiante</option>
                      <option value="3">Administrador</option>
                    </select>
                  </div>
                </div>

                <div class="form-group row mx-auto">
                  <div class="col-md-8 text-center mx-auto">
                    <Label>Ranking</Label>
                    <select
                      class="form-control"
                      ref="seleccionado"
                      style="background: gainsboro;"
                      required
                    >
                      <option value="2">Top 10</option>
                      <option value="3">Estudiante</option>
                      <option value="3">Administrador</option>
                    </select>
                  </div>
                </div>
                <div class="modal-footer">
                  <input type="submit" class="btn btn-warning" value="Exportar" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="createPlan">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="card">
            <h3 class="card-header fondo text-center">
              Reporte de Planificación
              <button type="button" class="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </h3>
            <div class="card-body">
              <form class="needs-validation" v-on:submit.prevent novalidate>
                <div class="form-group row mx-auto">
                  <div class="col-md-8 text-center mx-auto">
                    <Label>Año</Label>
                    <select
                      class="form-control"
                      ref="seleccionado"
                      style="background: gainsboro;"
                      required
                    >
                      <option value="2">2020</option>
                      <option value="3">2019</option>
                      <option value="3">2018</option>
                    </select>
                  </div>
                </div>
                <div class="form-group row mx-auto">
                  <div class="col-md-8 text-center mx-auto">
                    <Label>Docente</Label>
                    <select
                      class="form-control"
                      ref="seleccionado"
                      style="background: gainsboro;"
                      required
                    >
                      <option value="2">Todos</option>
                      <option value="3">Estudiante</option>
                      <option value="3">Administrador</option>
                    </select>
                  </div>
                </div>
                <div class="form-group row mx-auto">
                  <div class="col-md-8 text-center mx-auto">
                    <Label>Periodo</Label>
                    <select
                      class="form-control"
                      ref="seleccionado"
                      style="background: gainsboro;"
                      required
                    >
                      <option value="2">Periodo</option>
                      <option value="3">Estudiante</option>
                      <option value="3">Administrador</option>
                    </select>
                  </div>
                </div>
                <div class="form-group row mx-auto">
                  <div class="col-md-8 text-center mx-auto">
                    <Label>Cursos</Label>
                    <select
                      class="form-control"
                      ref="seleccionado"
                      style="background: gainsboro;"
                      required
                    >
                      <option value="2">Todos</option>
                      <option value="3">Estudiante</option>
                      <option value="3">Administrador</option>
                    </select>
                  </div>
                </div>

                <div class="modal-footer">
                  <input type="submit" class="btn btn-warning" value="Exportar" />
                </div>
              </form>
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
      name: "",
      fechaE: "",
      fechaR: "",
      id_act: "",
      errors: [],
      fillS: [],
      inputs: [
        {
          name: ""
        }
      ]
    };
  },
  created() {},
  mounted() {
    var urlr = "viewGetWeek";
    axios.get(urlr).then(response => {
      this.clases = response.data;
    });
    console.log("Component mounted.");
  },
  methods: {
    createPlanificacion(clas) {
      //   var urlr = "showClass/" + clas;
      //   axios.get(urlr).then(response => {
      //     this.fillS = response.data;
      //   });
      $("#createPlan").modal("show");
    },
    createE(clas) {
      //   var urlr = "showClass/" + clas;
      //   axios.get(urlr).then(response => {
      //     this.fillS = response.data;
      //   });
      $("#createNotas").modal("show");
    },
    createPsicologia(clas) {
      //   var urlr = "showClass/" + clas;
      //   axios.get(urlr).then(response => {
      //     this.fillS = response.data;
      //   });
      $("#createPsico").modal("show");
    },
    createAsistencia(clas) {
      //   var urlr = "showClass/" + clas;
      //   axios.get(urlr).then(response => {
      //     this.fillS = response.data;
      //   });
      $("#createAsis").modal("show");
    },
    add(index) {
      this.inputs.push({
        name: ""
      });
    },
    remove(index) {
      this.inputs.splice(index, 1);
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
