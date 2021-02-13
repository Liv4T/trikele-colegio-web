<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">Entregas</h3>
          <div class="card-body">
             <div class="float-left">
                    <a
                        class="btn btn-warning"
                        href="/createrepository"
                        >Crear</a
                      >
            </div>
            <div class="float-right">
              <label for="">Buscar</label>
              <input type="text" placeholder="Buscar" v-model="filter" />
            </div>
            <div class="form-group mx-auto">
                <div align="center">
                    <div class="col-md-6">
                        <label for>Materia:</label>
                        <select class="form-control" v-model="area_classroom"  @change="areaClassroom()" required>
                          <option :value="option.id+'/'+option.id_classroom" v-for="option in myOptions">{{ option.text }}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="table-responsive" style="border-radius: 20px">
              <table
                class="table table-hover table-striped"
                style="border-collapse: separate !important"
              >
                <thead >
                  <tr>
                    <th>Fecha</th>
                    <th>Tarea</th>
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
                      v-html="highlightMatches(row.date)"
                    ></td>
                    <td
                      style="font-size: 18px"
                      v-html="highlightMatches(row.name)"
                    ></td>
                    <td>
                      <a
                        class="btn btn-warning"
                        :href="'/repository/students/'+row.id"
                        >Ver más</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Multiselect from "vue-multiselect";
Vue.component("multiselect", Multiselect);
export default {
  components: { Multiselect },
  props: ["id_grade", "id_area"],
  data() {
    return {
      clases: [],
      area_classroom: "",
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
    };
  },
  created() {},
  mounted() {
      var url = "/GetArearByUser";
    axios.get(url).then((response) => {
      this.myOptions = response.data;
    });

    console.log("Component mounted.");
  },
  methods: {
    areaClassroom(){
         var url = window.location.origin + "/getRepository/" + this.area_classroom;
    axios.get(url).then((response) => {
      this.clases = response.data;
    });
    },
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
