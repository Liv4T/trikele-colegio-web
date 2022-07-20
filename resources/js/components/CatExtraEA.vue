<template>
  <div class="fondo-lista">
    <div class="back row justify-content-center">
      <div class="col-sm-10">
        <div class="card text-center">
          <h5 class="card-header fondo  letra-poppins">Educación Artística</h5>
          <div class="card-body">
            <table class="table table-responsive-xl table-hover table-striped center">
              <thead>
                <tr>
                  <th class=" letra-poppins">Clases</th>
                  <th class=" letra-poppins">Acción</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(clas, t) in fillS" :key="t">
                  <td class=" letra-poppins">{{ clas.name }}</td>
                  <td>
                    <a class="btn btn-Azul" :href="'/class_extra/'+clas.id">Ir a clase</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id_area", "id_classroom", "id_weekly"],
  data() {
    return {
      clases: [],
      areas: [],
      descripcion: "",
      logro: "",
      fechaE: "",
      fechaR: "",
      id_act: "",
      errors: [],
      fillS: [],
      fillE: [],
    };
  },
  created() {},
  mounted() {
    this.fillS = [];
    var urlr = window.location.origin + "/findCatExtra/" + 1;
    axios.get(urlr).then((response) => {
      this.fillS = response.data;
    });

    console.log("Component mounted.");
  },
  methods: {
    botones(id) {},
  },
};
</script>
<style>
</style>
