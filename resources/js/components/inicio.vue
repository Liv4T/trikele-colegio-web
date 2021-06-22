<template>
  <div class="back-calendar">
    <!-- <div class="modal fade" id="modalini" data-backdrop="static" data-keyboard="false">
      <div class="modal-lg modal-dialog">
        <div class="modal-content">
          <div class="card">
            <h3 class="card-header fondo text-center">
              Términos y condiciones
              <button type="button" class="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </h3>

            <div class="card-body">
              <input v-model.number="page" type="number" style="width: 5em" />
              /{{ numPages }}
              <button @click="rotate += 90">&#x27F3;</button>
              <button @click="rotate -= 90">&#x27F2;</button>

              <div style="width: 100%">
                <div
                  v-if="loadedRatio > 0 && loadedRatio < 1"
                  style="background-color: green; color: white; text-align: center"
                  :style="{ width: loadedRatio * 100 + '%' }"
                >{{ Math.floor(loadedRatio * 100) }}%</div>
                <pdf
                  v-if="show"
                  ref="pdf"
                  style="border: 1px solid red"
                  :src="src"
                  :page="page"
                  :rotate="rotate"
                  @progress="loadedRatio = $event"
                  @num-pages="numPages = $event"
                  @link-clicked="page = $event"
                ></pdf>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-warning" @click.prevent="modaliniciar()">Aceptar</button>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="row">
      <div class="col-md-11 mx-auto">
        <div class="custom-card text-center">
          <h3 class="card-header fondo">¡BIENVENIDO!</h3>
          <form class="needs-validation" novalidate>
            <form-wizard title subtitle color="orange" layout="vertical" next-button-text="Siguiente" back-button-text="Atrás" finish-button-text="Finalizar" @on-complete="createNames">
              <tab-content title="Documentos requeridos" icon="fas fa-id-card">
                <h3>Para iniciar con el proceso de matricula debes cargar los siguientes documentos:</h3>

                <div class="card-body pd-20">
                  <div class="form-group align-center letra-p row mx-auto">
                    <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Formulario de admisión

                    <a class="btn btn-warning mg-20" href="#">Cargar</a>
                  </div>

                  <div class="form-group align-center letra-p row mx-auto">
                    <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Cedula de ciudadanía papá y mamá <a class="btn btn-warning mg-20" href="#">Cargar</a>
                  </div>
                  <div class="form-group align-center letra-p row mx-auto">
                    <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Documento de Identidad del estudiante <a class="btn btn-warning mg-20" href="#">Cargar</a>
                  </div>
                  <div class="form-group align-center letra-p row mx-auto">
                    <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Certificados último año cursado <a class="btn btn-warning mg-20" href="#">Cargar</a>
                  </div>
                  <div class="form-group align-center letra-p row mx-auto">
                    <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Certificado afiliación a EPS <a class="btn btn-warning mg-20" href="#">Cargar</a>
                  </div>
                  <div class="form-group align-center letra-p row mx-auto">
                    <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Certificado Médico <a class="btn btn-warning mg-20" href="#">Cargar</a>
                  </div>
                  <div class="form-group align-center letra-p row mx-auto">
                    <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Certificado laboral de los padres de familia <a class="btn btn-warning mg-20" href="#">Cargar</a>
                  </div>
                  <div class="form-group align-center letra-p row mx-auto">
                    <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Certificado laboral <a class="btn btn-warning mg-20" href="#">Cargar</a>
                  </div>
                  <div class="form-group align-center letra-p row mx-auto">
                    <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Paz y Salvo colegio anterior <a class="btn btn-warning mg-20" href="#">Cargar</a>
                  </div>
                </div>
              </tab-content>
              <tab-content title="Video" icon="fas fa-id-card">
                <div class="card-body">
                  <div class="form-group align-center letra-p row mx-auto">
                    <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Video de presentacion del estudiante <a class="btn btn-warning mg-20" href="#">Cargar</a>
                  </div>
                </div>
              </tab-content>
              <tab-content title="Matricula" icon="fas fa-id-card">
                <div class="card-body">
                  <h3>Matricula</h3>
                </div>
              </tab-content>
            </form-wizard>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import pdf from "vue-pdf";
export default {
  components: {
    pdf,
  },
  data() {
    return {
      show: true,
      pdfList: [""],
      src: "../../uploads/Terminos _Condiciones_liv4t.pdf",
      loadedRatio: 0,
      page: 1,
      numPages: 0,
      rotate: 0,
      terminos: [],
    };
  },
  mounted() {
    var url = window.location.origin + "/getTerms";
    axios.get(url).then((response) => {
      this.terminos = response.data;
      if (this.terminos.status == 1) {
        $("#modalini").modal("hide");
      } else {
        $("#modalini").modal("show");
      }
    });
  },
  methods: {
    modaliniciar() {
      var url = window.location.origin + "/SaveTerms";

      axios
        .post(url, {
          status: 1,
        })
        .then((response) => {
          this.errors = [];
          $("#modalini").modal("hide");
        })
        .catch((error) => {
          this.errors = error.response.data;
        });
    },
  },
};
</script>
<style>
/* .back-calendar {
  padding-left: 290px;
} */
.pd-20 {
  padding-left: 7em;
}
.align-center {
  align-items: center;
}
.letra-p {
  font-size: 20px;
}
.mg-20 {
  margin: 10px;
}
</style>
