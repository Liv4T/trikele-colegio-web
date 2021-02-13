  <template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">Mis clases</h3>
          <div class="card-body">
            <div class="accordion" id="accordionExample">
              <div class="card" v-for="(area,t) in areas" :key="t">
                <div class="card-header">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      :data-target="'#collapse'+t"
                      aria-expanded="false"
                      @click.prevent="botones(area.id, area.id_classroom)"
                      aria-controls="collapse"
                    >
                      <label>{{ area.text }}</label>
                    </button>
                  </h2>
                </div>
                <div
                  :id="'collapse'+t"
                  class="collapse hide"
                  aria-labelledby="heading"
                  data-parent="#accordionExample"
                >
                  <table class="table table-responsive-xl table-hover table-striped center">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Ciclo de aprendizaje</th>
                        <th>Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(clas, k) in clases"
                        :key="k"
                        v-if="clas.id_classroom==area.id_classroom && clas.id_area==area.id"
                      >
                         <td> <a class="btn btn-primary"  :href="'/act_semana/'+clas.id_area+'/'+clas.id_classroom">Editar</a> </td>
                        <td>{{ clas.text }}</td>
                        <td>
                          <a
                            class="btn btn-primary"
                            :href="'/admin/modulo/'+clas.id"
                          >Ir a Ciclo</a>
                           
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
  </div>
</template>
<script>
export default {
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
    };
  },
  created() {},
  mounted() {
    var url = "/GetArearByUser";
    axios.get(url).then((response) => {
      this.areas = response.data;
    });

    console.log("Component mounted.");
  },
  methods: {
    botones(area, classroom) {
      var urlsel = "/editGetWeek/" + area + "/" + classroom;
      axios.get(urlsel).then((response) => {
        this.clases = response.data;
      });
    },
  },
};
</script>
<style>
</style>
