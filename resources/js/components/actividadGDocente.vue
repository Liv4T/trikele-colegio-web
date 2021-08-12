<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card-container">
          <div class="card text-center">
            <div class="card-header">
              <h3>Planificación General</h3>
            </div>
            <div class="card-body">
              <div class="accordion" id="accordionExample">
                <div class="card" v-for="(area, t) in areas" :key="t">
                  <div class="card-header">
                    <h2 class="mb-0">
                      <button class="btn btn-link" type="button" data-toggle="collapse" :data-target="'#collapse' + t" aria-expanded="false" @click.prevent="botones(area.id, area.id_classroom)" aria-controls="collapse">
                        <label>{{ area.text }}</label>
                      </button>
                    </h2>
                  </div>
                  <div :id="'collapse' + t" class="collapse hide accordion-content" aria-labelledby="heading" data-parent="#accordionExample">
                    <a :href="'/course/' + area.id + '/' + area.id_classroom" class="btn btn-warning">General</a>
                    <a :href="'/duplicar/' + area.id + '/' + area.id_classroom" class="btn btn-warning">Duplicar</a>
                    <a v-show="general == true" :href="'/porcentaje/' + area.id + '/' + area.id_classroom" class="btn btn-warning">Porcentaje de notas</a>
                    <a v-show="general == true" :href="'/duplicar-semana/'" class="btn btn-warning">Duplicar Ciclo</a>
                    <a v-show="general == true" :href="'/crear_semana/' + area.id + '/' + area.id_classroom" class="btn btn-warning">Crear Ciclo</a>
                    <a v-show="general == true" :href="'/act_semana/' + area.id + '/' + area.id_classroom" class="btn btn-warning">Actualizar Ciclo</a>
                  </div>
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
  $(".collapse").on("show.bs.collapse", function() {
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
        id_area: "",
        id_classroom: "",
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
        var urlsl = window.location.origin + "/coursePlanification/" + area + "/" + classroom;
        axios.get(urlsl).then((response) => {
          this.anual = response.data;
          if (this.anual.quaterly.length > 0) {
            this.general = true;
          } else {
            this.general = false;
          }
        });
        var urlsel = "editGetWeek/" + area + "/" + classroom;
        axios.get(urlsel).then((response) => {
          this.week = response.data;

          if (this.week.id_area == area && this.week.id_classroom == classroom) {
            this.semanal = true;
          } else {
            this.semanal = false;
          }
        });
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
