<template>
  <!-- <div class="back"> -->
  <div>
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-12">
        <div class="card text-center">
          <h3 class="card-header fondo">Notas</h3>

          <div class="card-body">
            <!-- <table class="table table-responsive-xl table-hover table-striped center">
              <thead>
                <tr>
                  <th colspan="1">&nbsp;</th>
                  <th>Nombre de la materia</th>
                  <th>Observación</th>
                </tr>
              </thead>
              <tbody v-for="(area,t) in areas" :key="t">
                <tr>
                  <td width="10px">
                    <a
                      class="btn btn-warning btn-sm"
                      v-on:click.prevent="editNames(area.id, area.id_classroom)"
                    >v</a>
                  </td>
                  <td>{{ area.text}}</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table> -->
            <!-- <div class="modal-footer">
              <input type="submit" class="btn btn-warning" value="Volver" />
            </div> -->
          <!-- </div>
        </div>
      </div> -->
      <!-- <div class="modal fade" id="editu">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="card">
              <h3 class="card-header fondo text-center">
                Actividad
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </h3>
              <div class="card-body"> -->
                <table class="table table-responsive table-hover table-striped center">
                  <thead>
                    <tr>
                      <th>Alumno</th>

                      <th>Nota</th>
                    </tr>
                  </thead>
                  <tbody v-for="(stud, key) in students" :key="key">
                    <tr>
                      <td>{{stud.name}}</td>
                      <td>{{stud.score}}</td>
                    </tr>
                  </tbody>
                </table>
            </div>
            <!-- </div>
          </div>-->
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
      students: [],
      areas: [],
      area_id:null,
      classroom_id: null
    };
  },
  watch:{
    id_area: function(newVal, OldVal){
      if(newVal !== OldVal){
        this.area_id = newVal;
        this.editNames();
      }
    },
    id_classroom: function(newVal, OldVal){
      if(newVal !== OldVal){
        this.classroom_id = newVal;
        this.editNames();
      }
    }
  },
  mounted() {
    this.area_id = this.id_area;
    this.classroom_id = this.id_classroom;
    this.editNames();
    // var url = "GetArearByUser";
    // axios.get(url).then((response) => {
    //   this.areas = response.data;
    // });

    console.log("Component mounted.");
  },
  methods: {
    editNames() {
      this.students =[]
      var urlr = "StudentsByArea/" + this.area_id + "/" + this.classroom_id;
      axios.get(urlr).then((response) => {
        this.students = response.data;
      });
      // $("#editu").modal("show");
    },
  },
};
</script>
<style>
</style>
