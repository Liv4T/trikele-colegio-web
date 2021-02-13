<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">Mis clases</h3>
          <div class="card-body">
            <table class="table table-responsive-xl table-hover table-striped center">
              <tbody>
                <tr data-toggle="collapse" data-target="#accordion" class="clickable">
                  <td>Química</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td v-for="(clas, t) in clases" :key="t">
                    <div id="accordion" class="collapse">
                      <a
                        class="btn btn-warning"
                        v-on:click.prevent="
                                                    editNames(clas.id)
                                                "
                      >Ciclo {{ t + 1 }}</a>
                    </div>
                  </td>
                  <!-- <td>
                    <div id="accordion" class="collapse">
                      <a class="btn btn-warning" v-on:click.prevent="editNames(actividad)">Semana 2</a>
                    </div>
                  </td>
                  <td>
                    <div id="accordion" class="collapse">
                      <a class="btn btn-warning" v-on:click.prevent="editNames(actividad)">Semana 3</a>
                    </div>
                  </td>-->
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="modal fade" id="editu">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="card">
              <h3 class="card-header fondo text-center">
                Semana
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </h3>
              <div class="float-right">
                <a class="btn btn-warning float-right" href="/crear_clase">Crear Clase</a>
              </div>

              <div class="card-body">
                <div class="accordion" id="accordionExample">
                  <div class="card" v-for="(clas, t) in fillS" :key="t">
                    <div class="card-header" :id="'heading' + t">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          :data-target="
                                                        '#collapse' + t
                                                    "
                          aria-expanded="true"
                          :aria-controls="
                                                        'collapse' + t
                                                    "
                        >Clase {{ t + 1 }}</button>
                      </h2>
                    </div>
                    <div
                      :id="'collapse' + t"
                      class="collapse show"
                      :aria-labelledby="'heading' + t"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        <div class="form-group row mx-auto">
                          <div class="col-md-6">
                            <label for="name">
                              Nombre
                              <button
                                onclick="confirm('Seguro de confirmar el cumplimiento del logro')"
                                type="submit"
                                class="btn btn-outline-success btn-sm"
                              >
                                <i class="fas fa-check-circle"></i>
                              </button>
                              <button
                                onclick="confirm('Esta seguro?')"
                                type="submit"
                                class="btn btn-outline-danger btn-sm"
                              >
                                <i class="fas fa-times-circle"></i>
                              </button>
                            </label>
                            <div>{{ clas.name }}</div>
                          </div>
                          <div class="col-md-6">
                            <label for="name">Descripción</label>
                            <p>
                              {{
                              clas.description
                              }}
                            </p>
                          </div>
                          <div class="col-md-6">
                            <label for="name">Documento</label>
                            <div>
                              {{
                              clas.name_document
                              }}
                              <br />
                              <a
                                :href="
                                                                    clas.document
                                                                "
                                download
                              >
                                <a
                                  :href="
                                                                        clas.document
                                                                    "
                                  download
                                >
                                  <i class="fas fa-file-word fa-2x" style="color: grey;"></i>
                                  <span style="color:grey">Descargar</span>
                                  <!-- {{ conversation.file_name }} -->
                                </a>
                              </a>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <label for="name">
                              Enlace de
                              apoyo
                            </label>
                            <div>
                              <a :href="clas.url" style="color:blue">
                                {{
                                clas.url
                                }}
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="form-group text-center">
                          <strong for="name">Video</strong>
                        </div>
                        <div class="form-group text-center">
                          <div>
                            <video controls>
                              <source
                                :src="
                                                                    clas.video
                                                                "
                              />
                            </video>
                            <!-- <iframe class="embed-responsive-item" :src="clas.video"></iframe> -->
                          </div>
                        </div>
                        <div class="modal-footer">
                          <a
                            class="btn btn-warning"
                            :href="
                                                            '/actividad_d/' +
                                                                clas.id_weekly_plan
                                                        "
                          >Crear Actividad</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
      fechaE: "",
      fechaR: "",
      id_act: "",
      errors: [],
      fillS: [],
    };
  },
  created() {},
  mounted() {
    var urlr = "editGetWeek";
    axios.get(urlr).then((response) => {
      this.clases = response.data;
    });
    console.log("Component mounted.");
  },
  methods: {
    editNames(clas) {
      var urlr = "showClass/" + clas;
      axios.get(urlr).then((response) => {
        this.fillS = response.data;
      });
      $("#editu").modal("show");
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
