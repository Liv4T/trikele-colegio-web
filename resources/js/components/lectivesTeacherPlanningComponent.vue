<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">Planificación General de Electivas</h3>
          <div class="card-body">
            <div class="accordion" id="accordionExample">
              <div class="card" v-for="(plan,t) in planification" :key="t">
                <div class="card-header">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      :data-target="'#collapse'+t"
                      aria-expanded="false"
                      @click.prevent="getPlanificationEvent(plan.id_planification)"
                      aria-controls="collapse"
                    >
                      <label>{{ plan.lective.name }} Trimestre {{plan.period_consecutive}}</label>
                    </button>
                  </h2>
                </div>
                <div
                  :id="'collapse'+t"
                  class="collapse hide accordion-content"
                  aria-labelledby="heading"
                  data-parent="#accordionExample"
                >
                  <a
                    :href="'/teacher/lectives/planning/'+ plan.id_planification "
                    class="btn btn-warning"
                  >General</a>
                 <!-- <a
                    :href="'/teacher/lectives/planning/'+plan.id_planification+'/copy'"
                    class="btn btn-warning"
                  >Duplicar</a>-->
                  <a
                    v-show="general==true"
                    :href="'/teacher/lectives/planning/'+plan.id_planification+'/indicators'"
                    class="btn btn-warning"
                  >Porcentaje de notas</a>
                  <a
                    v-show="general==true"
                    :href="'/teacher/lectives/planning/'+plan.id_planification+'/weekly'"
                    class="btn btn-warning"
                  >Gestionar Ciclo</a>
                 <!--  <a
                    v-show="general==true"
                    :href="'/teacher/lectives/planning/'+plan.id_planification+'/weekly/copy'"
                    class="btn btn-warning"
                  >Duplicar Ciclo</a>-->
                  
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
      planificationDetail: [],
      planification: [],
      id_lective: "",
      id_classroom: ""
    };
  },

  mounted() {
    axios.get("/api/lectives").then((response) => {
      this.planification = response.data;
    });
  },
  methods: {
    getPlanificationEvent(id_lective_planification) {

      axios.get(`/api/lectives/planification/${id_lective_planification}`).then((response) => {
        this.planificationDetail = response.data;
        if (this.planificationDetail.quarterlies.length > 0) {
          this.general = true;
        } else {
          this.general = false;
        }

        if (this.planificationDetail.weeklies.length > 0) {
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
