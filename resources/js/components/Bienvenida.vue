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
        <div class="row justify-content-md-center text-center">
          <div class="col text-center">
            <img src="/uploads/home/welcome-21.png" alt="welcome" style="width:65%;" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="card-container">
              <iframe width="100%" style="height:600px !important" src="https://www.youtube.com/embed/F-nQuuixxfU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
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
            this.getAdmisiones();
          })
          .catch((error) => {
            console.log(response.data);
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
  .c-header {
    background: transparent;
    padding: 10px;
  }
  .c-header > h3 {
    font-family: "PoppinsBold";
    color: #ff7536;
    font-weight: 900;
    font-size: 2.5em;
  }
  .card-container {
    background-color: #ffdec2;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .back-calendar {
    background-image: url("/uploads/home/fondo-lista.jpg");
  }
</style>
