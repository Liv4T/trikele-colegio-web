<template>
  <!-- <div class="back"> -->
  <div v-if="showComponent === 'principal'">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-12">
        <div class="card text-center">
          <h3 class="card-header fondo">Entrega de estudiantes</h3>
          <div class="card-body">
            <div class="float-right">
              <label for="">Buscar</label>
              <input type="text" placeholder="Buscar" v-model="filter" />
            </div>

            <div class="table-responsive" style="border-radius: 20px">
              <table
                class="table table-hover table-striped"
                style="border-collapse: separate !important"
              >
                <thead >
                  <tr>
                    <th>Estudiante</th>
                    <th>Estado</th>
                    <th>-</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, index) in filteredRows"
                    :key="index"

                  >
                    <td
                      style="font-size: 18px"
                      v-html="highlightMatches(row.name)"
                    ></td>
                     <td
                      style="font-size: 18px"
                      v-html="highlightMatches(row.status)"
                    ></td>
                    <td>
                      <a
                        v-show="row.id_student!=null"
                        class="btn btn-warning"
                        v-on:click="getStudentIdRepo(row)"                        
                        >Ver más</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-if="backPage" class="float-left">
              <button class="btn btn-primary" v-on:click="backPage">Volver</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="showComponent === 'viewMore'">
    <repository-comments :id_repo="id_repo" :id_student="idStudent" :backToPage="backToPage"></repository-comments>
  </div>
</template>
<script>
import Multiselect from "vue-multiselect";
Vue.component("multiselect", Multiselect);
export default {
  components: { Multiselect },
  props: ["id_repo","backPage"],
  data() {
    return {
      clases: [],
      classroom: "",
      value: [{ name: "Todos", code: "js" }],
      descripcion: "",
      logro: "",
      fechaE: "",
      fechaR: "",
      id_act: "",
      errors: [],
      fillS: [],
      area: null,
      filter: "",
      myOptions: [],
      showComponent: 'principal',
      idStudent: null
    };
  },
  created() {},
  mounted() {
    var url = window.location.origin + "/getRepositoryStudents/" + this.id_repo;
    axios.get(url).then((response) => {
      this.clases = response.data;
      console.log(this.clases);
    });

    console.log("Component mounted.");
  },
  methods: {
    highlightMatches(texto) {
      const matchExists = texto
        .toLowerCase()
        .includes(this.filter.toLowerCase());
      if (!matchExists) return texto;

      const re = new RegExp(this.filter, "ig");
      return texto.replace(
        re,
        (matchedText) => `<strong>${matchedText}</strong>`
      );
    },
    getStudentIdRepo(data){
      this.idStudent= data.id_student;
      this.showComponent = 'viewMore';
    },
    backToPage(){
      this.idStudent = null;
      this.showComponent = 'principal'
    }
  },
  computed: {
    filteredRows() {
      return this.clases.filter((row) => {
        const text = row.name.toString().toLowerCase();
        const searchTerm = this.filter.toLowerCase();

        return text.includes(searchTerm);
      });
    },
  },
};
</script>
<style>

</style>
