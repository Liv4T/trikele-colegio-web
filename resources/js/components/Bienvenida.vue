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
            <form-wizard title subtitle color="orange" layout="vertical" next-button-text="Siguiente" back-button-text="Atrás" finish-button-text="Finalizar">              
              <tab-content title="Documentos requeridos">                
                <h3>Para iniciar con el proceso de matricula debes cargar los siguientes documentos:</h3>      
                <a href="https://firebasestorage.googleapis.com/v0/b/myapp90119.appspot.com/o/Formulario%20Admisi%C3%B3n.pdf?alt=media&token=8ce93156-b860-4161-be02-5b7c054929b5" target="_blank" class="btn btn-primary col-md-4">Formulario de Matricula</a>            
                <div class="card-body pd-20">                  
                  <div class="form-group align-center letra-p row mx-auto">
                    <img width="35px" src="uploads/home/cargar.png" alt />Formulario de admisión
                    <input type="file" name="picture" class="form-control" @change="onFlieChange1($event, 'form')" required />
                  </div>

                  <div class="form-group align-center letra-p row mx-auto">
                    <img width="35px" src="uploads/home/cedula.png" alt />Cedula de ciudadanía papá y mamá
                    <input type="file" name="picture" class="form-control" @change="onFlieChange1($event, 'idcard_parent')" required />
                  </div>
                  <div class="form-group align-center letra-p row mx-auto">
                    <img width="35px" src="uploads/home/cedula.png" alt />Documento de Identidad del estudiante
                    <input type="file" name="picture" class="form-control" @change="onFlieChange1($event, 'idcard_son')" required />
                  </div>
                  <div class="form-group align-center letra-p row mx-auto">
                    <img width="35px" src="uploads/home/ultimo.png" alt />Certificados último año cursado
                    <input type="file" name="picture" class="form-control" @change="onFlieChange1($event, 'last_certificate')" required />
                  </div>
                  <div class="form-group align-center letra-p row mx-auto">
                    <img width="35px" src="uploads/home/medico.png" alt />Certificado afiliación a EPS
                    <input type="file" name="picture" class="form-control" @change="onFlieChange1($event, 'eps')" required />
                  </div>
                  <div class="form-group align-center letra-p row mx-auto">
                    <img width="35px" src="uploads/home/medico.png" alt />Certificado Médico
                    <input type="file" name="picture" class="form-control" @change="onFlieChange1($event, 'medical_certificate')" required />
                  </div>
                  <div class="form-group align-center letra-p row mx-auto">
                    <img width="35px" src="uploads/home/pension.png" alt />Certificado laboral de los padres de familia
                    <input type="file" name="picture" class="form-control" @change="onFlieChange1($event, 'labor_parent')" required />
                  </div>
                  <div class="form-group align-center letra-p row mx-auto">
                    <img width="35px" src="uploads/home/pension.png" alt />Certificado laboral
                    <input type="file" name="picture" class="form-control" @change="onFlieChange1($event, 'labor_son')" required />
                  </div>
                  <div class="form-group align-center letra-p row mx-auto">
                    <img width="35px" src="uploads/home/paz-y-salvo.png" alt />Paz y Salvo colegio anterior
                    <input type="file" name="picture" class="form-control" @change="onFlieChange1($event, 'paz_salvo')" required />
                  </div>
                  <a class="btn btn-Azul btn-lg" @click.prevent="saveDocs()">Guardar</a>
                </div>
              </tab-content>
              <tab-content title="Video" icon="fas fa-id-card">
                <div class="card-body">
                  <div class="form-group align-center letra-p row mx-auto">
                    <img width="35px" src="uploads/home/cargar.png" alt />Video de presentacion del estudiante
                    <input type="file" name="picture" class="form-control" @change="onFlieChange1($event, 'video')" required />
                  </div>
                </div>
              </tab-content>
              <tab-content title="Matricula" icon="fas fa-id-card">
                <div class="card-body pd-20">
                  <h3>Matricula</h3>
                  <h5>Tiene un costo de $530.000. <a class="btn btn-Azul" href="" style="color: white">Pagar</a></h5>

                  <h3>Pensión</h3>
                  <h5>Tiene un costo de $450.000 mensuales.</h5>
                  <a class="btn btn-Azul" href="" style="color: white">Pagar</a>
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
      allowedExtensions: ["pdf", "jpg", "jpeg", "png", "doc", "mp4"],
      idcard_parent: "",
      idcard_son: "",
      form: "",
      last_certificate: "",
      eps: "",
      medical_certificate: "",
      labor_parent: "",
      labor_son: "",
      paz_salvo: "",
      video: "",
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
    onFlieChange1(e, value) {
      let file = e.target.files[0];
      if (value == "form") {
        this.form = file;
      } else if (value == "idcard_son") {
        this.idcard_son = file;
      } else if (value == "idcard_parent") {
        this.idcard_parent = file;
      } else if (value == "last_certificate") {
        this.last_certificate = file;
      } else if (value == "eps") {
        this.eps = file;
      } else if (value == "medical_certificate") {
        this.medical_certificate = file;
      } else if (value == "labor_parent") {
        this.labor_parent = file;
      } else if (value == "labor_son") {
        this.labor_son = file;
      } else if (value == "paz_salvo") {
        this.paz_salvo = file;
      }
    },
    saveDocs() {
      var url = window.location.origin + "/saveLeadFiles";
      let formData = new FormData();
      // idcard_parent
      formData.append("idcard_parent", this.idcard_parent);
      formData.append("idcard_son", this.idcard_son);
      formData.append("form", this.form);
      formData.append("last_certificate", this.last_certificate);
      formData.append("eps", this.eps);
      formData.append("medical_certificate", this.medical_certificate);
      formData.append("labor_parent", this.labor_parent);
      formData.append("labor_son", this.labor_son);
      formData.append("paz_salvo", this.paz_salvo);

      axios
        .post(url, formData)
        .then((response) => {
          console.log(response.data);
          // this.getAdmisiones();
        })
        .catch((error) => {
          console.log(error.data);
          this.errors = response.data;
        });
    },
    chooseFile() {
      $("#file").click();
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
