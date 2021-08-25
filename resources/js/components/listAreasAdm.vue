<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">Trimestre</h3>
          <div class="card-body">
            <div class="accordion" id="accordionExample">
              <div class="card" v-for="(area,t) in areas" :key="t">
                <div class="card-header">
                  <h2 class="mb-0">
                    <button class="btn btn-link"
                      style="color:grey"
                      type="button"
                      data-toggle="collapselistA"
                      :data-target="'#collapselistA'+t"
                      aria-expanded="false"
                      @click.prevent="botones(area.id, area.id_classroom)"
                      aria-controls="collapselistA">
                      <label>{{ area.text }}</label>
                    </button>
                  </h2>
                </div>
                <div :id="'collapselistA'+t" class="collapselistA hide" aria-labelledby="heading" data-parent="#accordionExample">
                  <bimestre-list-component :id_area="area.id" :id_classroom="area.id_classroom" :type_u="user.type_user"></bimestre-list-component>
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
$(".collapselistA").on("show.bs.collapselistA", function () {
  $(".collapselistA.in").collapselistA("hide");
});

export default {
  props:["user"],
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
    var url = "/GetArearByUser";
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
