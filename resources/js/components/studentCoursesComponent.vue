  <template>
  <div>
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-12">
        <div class="card text-center">
          <h3 class="card-header fondo">Mis clases</h3>
          <div class="card-body">
            <!-- <div class="accordion" id="accordionExample">
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
                > -->
                  <table class="table table-responsive-xl table-hover table-striped center">
                    <thead>
                      <tr>
                        <th>Ciclo de aprendizaje</th>
                        <th>Acción</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody v-for="(clas, k) in clases" :key="k">
                      <tr v-if="clas.id_classroom==classroom_id && clas.id_area==area_id">
                        <td>{{ clas.text }}</td>
                        <td>
                          <a
                            class="btn btn-primary"
                            :href="'/estudiante/modulo/'+clas.id"
                          >Ir a Ciclo</a>

                        </td>
                        <td>
                          <div class="check" v-if="clas.progress==100">
                        <svg
                            
                            width="2em"
                            height="2em"
                            viewBox="0 0 16 16"
                            class="bi bi-check-circle-fill"
                            fill="#28a745"
                            xmlns="http://www.w3.org/2000/svg"
                            
                        >
                            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
                        </svg>
                        <p class="text-success" >Completado</p>
                        </div>
                        </td>

                      </tr>
                    </tbody>
                  </table>
                <!-- </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:["id_area","id_classroom"],
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
      area_id: "",
      classroom_id:""
    };
  },
  watch:{
    id_area:function(newVal){
      if(newVal){
        this.area_id = newVal;
        this.botones();
      }
    },

    id_classroom:function(newVal){
      if(newVal){
        this.classroom_id = newVal;
        this.botones();
      }
    }
  },
  mounted() {
    this.area_id = this.id_area;
    this.classroom_id = this.id_classroom;
    this.botones();
    // var url = "/GetArearByUser";
    // axios.get(url).then((response) => {
    //   this.areas = response.data;
    // });

    // console.log("Component mounted.");
  },
  methods: {
    botones() {
      var urlsel = "/viewGetWeek/" + this.area_id + "/" + this.classroom_id;
      axios.get(urlsel).then((response) => {
        this.clases = response.data;
      });
    },
  },
};
</script>
<style>
.check{
    margin-left: 8px;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
p{ 
    margin: 0 0 0 8px;
    font-size: 16px;
}
</style>
