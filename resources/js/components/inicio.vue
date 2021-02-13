<template>
  <div class="back-calendar">
    <div class="container"></div>

    <!-- <a
      target="_blank"
      href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=M3YyaWQwbXN1a2F0cDFiYzc5amQ2Y2JhZjkgbWlsZHJlZGZpZ3Vlcm9hcUBt&amp;tmsrc=mildredfigueroaq%40gmail.com"
    >
      <img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_es.gif" />
    </a>-->
    <div class="modal fade" id="modalini" data-backdrop="static" data-keyboard="false">
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
</style>
