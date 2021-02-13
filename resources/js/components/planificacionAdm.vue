<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">Planeación</h3>
          <div class="card-body">
            <table class="table table-responsive-xl table-striped center">
              <tbody>
                <tr data-toggle="collapse" data-target="#accordion" class="clickable">
                  <td>601</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <div id="accordion" class="collapse">
                      <a href="/planificacion" class="btn btn-warning">Química</a>
                    </div>
                  </td>
                  <td>
                    <div id="accordion" class="collapse">
                      <a href="/planificacion" class="btn btn-warning">Español</a>
                    </div>
                  </td>

                  <!-- <td>
                    <div id="accordion" class="collapse">
                      <a
                        v-show="semanal==true"
                        href="/actividad_d"
                        class="btn btn-warning"
                      >Actividad</a>
                    </div>
                  </td>-->
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
$(".collapse").on("show.bs.collapse", function() {
  $(".collapse.in").collapse("hide");
});

export default {
  data() {
    return {
      week: [],
      semanal: false,
      general: false,
      anual: []
    };
  },

  mounted() {},
  methods: {}
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
