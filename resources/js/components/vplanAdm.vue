<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">Planificación</h3>
          <div class="card-body">
            <div class="accordion" id="accordionExample">
              <div class="card" v-for="(area,t) in areas" :key="t">
                <div class="card-header">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link"
                      style="color:grey"
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
                  <a
                    :href="'/course/'+ area.id +'/'+ area.id_classroom"
                    class="btn btn-warning"
                  >General</a>

                  <a
                    :href="'/porcentaje/'+ area.id +'/'+ area.id_classroom"
                    class="btn btn-warning"
                  >Porcentaje de notas</a>

                  <a href="/docente/clases" class="btn btn-warning">Ciclos y clases</a>
<!--
                   <a
                    :href="'/act_semana/'+ area.id +'/'+ area.id_classroom"
                    class="btn btn-warning"
                  >Ciclos</a>
-->


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
$(".collapse").on("show.bs.collapse", function () {
  $(".collapse.in").collapse("hide");
});

export default {
  data() {
    return {
      week: [],
      semanal: false,
      general: false,
      anual: [],
      areas: [],
    };
  },

  mounted() {
    var url = "GetArearByUser";
    axios.get(url).then((response) => {
      this.areas = response.data;
    });
  },
  methods: {
    botones(area, classroom) {
      var urlsl =
        window.location.origin +
        "/coursePlanification/" +
        area +
        "/" +
        classroom;
      axios.get(urlsl).then((response) => {
        this.anual = response.data;
        if (this.anual.quaterly.length > 0) {
          this.general = true;
        } else {
          this.general = false;
        }
      });
     /* var urlsel = "editGetWeek";
      axios.get(urlsel).then((response) => {
        this.week = response.data;

        if (this.week.id_area == area && this.week.id_classroom == classroom) {
          this.semanal = true;
        } else {
          this.semanal = false;
        }
      });*/
    },
  },
};
</script>
<style>
.collapse-row.collapsed + tr {
  display: none;
}
.btn.skool {
  background-color: #c1e9eb;
  color: white;
}
</style>
