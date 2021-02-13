<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h5 class="card-header fondo">Ciclo</h5>
          <h3 class="card-header fondo">{{ nameWeekly }}</h3>
          <span class="classroom-label">{{ nameArea }}</span>
          <div class="card-body">
            <table
              class="table table-responsive-xl table-hover table-striped center"
            >
              <thead>
                <tr>
                  <th>Clases</th>
                  <th>Acción</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(clas, t) in fillS" :key="t">
                  <td>{{ clas.name }}</td>
                  <td class="row justify-content-center">
                    <a
                      class="btn btn-primary"
                      :href="
                        '/estudiante/modulo/' + id_module + '/clase/' + clas.id
                      "
                      >Ir a clase</a
                    >


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
                <!--
                <tr>
                  <td>Recursos Adicionales</td>
                  <td>
                    <a
                      class="btn btn-primary"
                      :href="
                        '/student/clases_adicionales/' +
                        id_module +
                        '/' +
                        id_area +
                        '/' +
                        id_classroom
                      "
                      >Ir a recursos</a
                    >
                  </td>
                  <td></td>
                </tr>-->
              </tbody>
            </table>
            <div class="float-left">
              <a class="btn btn-warning" href="/estudiante/clases">Regresar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id_module"],
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
      nameWeekly: "",
      nameArea: "",
      id_area: "",
      id_classroom: "",

    };
  },
  created() {},
  mounted() {
    this.fillS = [];
    var urlr = window.location.origin + "/showClass/" + this.id_module;
    axios.get(urlr).then((response) => {
      this.fillS = response.data.clase;
      this.nameArea = `${response.data.area.name} ${response.data.classroom.name}`;
      this.id_area = response.data.area.id;
      this.id_classroom = response.data.classroom.id;
    });
    var urls = window.location.origin + "/GetNameWeekly/" + this.id_module;
    axios.get(urls).then((response) => {
      this.nameWeekly = response.data;
    });
  },
  methods: {},
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
