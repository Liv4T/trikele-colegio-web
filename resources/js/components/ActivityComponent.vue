<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card-container">
        <div class="card text-center">
          <div class="card-header">
            <h3>Actividades</h3>
          </div>
          <div class="card-body">
            <div class="float-right">
              <label for="">Buscar</label>
              <input type="text" placeholder="Módulo" v-model="filter" />
            </div>
            <div class="table-responsive" style="border-radius: 20px">
              <table class="table table-hover table-striped" style="border-collapse: separate !important">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Fecha de entrega</th>
                    <th>Materia</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, index) in filteredRows" :key="index">
                    <td width="200px" style="font-size: 16px" v-html="highlightMatches(row.name)"></td>
                    <td style="font-size: 16px" v-html="highlightMatches(row.delivery_max_date)"></td>
                    <td>{{ row.area_name }}</td>
                    <td width="200px">
                      <a class="btn btn-warning" :href="'/estudiante/modulo/' + row.weekly_plan_id + '/clase/' + row.id_class">Ver más</a>
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
        activities: [],
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
      };
    },
    created() {},
    mounted() {
      var urlsel = window.location.origin + "/api/student/activity";
      axios.get(urlsel).then((response) => {
        this.activities = response.data;
      });

      console.log(this.activities);
    },
    methods: {
      highlightMatches(texto) {
        const matchExists = texto.toLowerCase().includes(this.filter.toLowerCase());
        if (!matchExists) return texto;

        const re = new RegExp(this.filter, "ig");
        return texto.replace(re, (matchedText) => `<strong>${matchedText}</strong>`);
      },
    },
    computed: {
      filteredRows() {
        if (!this.activities.filter) return false;

        return this.activities.filter((row) => {
          const name = row.name.toString().toLowerCase();
          const searchTerm = this.filter.toLowerCase();

          return name.includes(searchTerm);
        });
      },
    },
  };
</script>
<style></style>
