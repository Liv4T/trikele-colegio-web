<template>
  <div v-if="showSection === 'principal'" class="justify-content-center">
    <div id="crud" class="col-sm-12">
      <div class="card-container">
        <div class="card text-center">
          <div class="card-header">
            <h3>Mis clases</h3>
          </div>
          <div class="card-body">
            <table class="table table-responsive-xl table-hover table-striped center">
              <thead>
                <tr>
                  <th></th>
                  <th class="text-center">Ciclo de aprendizaje</th>
                  <th class="text-center">Acción</th>
                </tr>
              </thead>
              <tbody v-for="(clas, k) in clases" :key="k">
                <template>
                  <tr>
                    <td>
                      <a class="btn btn-primary" v-on:click="getSelectedData('edit', clas)" style="color: white;">Editar</a>
                    </td>
                    <td>{{ clas.text }}</td>
                    <td>
                      <a class="btn btn-primary" v-on:click="getSelectedData('cycle', clas)" style="color: white;">
                        Ir a Ciclo
                      </a>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="showSection === 'edit'">
    <semanalact-component :id_area="id_area_selected" :id_classroom="id_classroom_selected" :backPage="backPage"></semanalact-component>
  </div>
  <div v-else-if="showSection === 'cycle'">
    <teacher-module :id_module="id_module" :id_area="id_area_selected" :id_classroom="id_classroom_selected" :backPage="backPage"></teacher-module>
  </div>
</template>
<script>
  export default {
    props: ["user","id_area", "id_classroom","id_bimestre"],
    data() {
      return {
        clases: [],
        area_id: "",
        classroom_id: "",
        showSection: "principal",
        id_area_selected: null,
        id_classroom_selected: null,
        id_module: null,
      };
    },
    watch: {
      id_area: function(newVal, OldVal) {
        if (newVal !== OldVal) {
          this.area_id = newVal;
          this.getData();
        }
      },

      id_classroom: function(newVal, OldVal) {
        if (newVal !== OldVal) {
          this.classroom_id = newVal;
          this.getData();
        }
      },

      id_bimestre: function(newVal, OldVal){
        if (newVal !== OldVal) {
          this.bimestre_id = newVal;
          this.getData();
        } 
      }
    },
    mounted() {           
      this.area_id = this.id_area;
      this.classroom_id = this.id_classroom;
      this.bimestre_id = this.id_bimestre;
      this.getData();
    },
    methods: {
      getData() {        
        this.clases = [];
        // if(this.user && this.user.type_user === 1){
        //   axios.get(`/GetWeek`).then((response) => {
        //     this.clases = response.data;
        //   });
        // }else{
          axios.get(`/editGetWeek/${this.area_id}/${this.classroom_id}/${this.bimestre_id}`).then((response) => {
            this.clases = response.data;
          });
        // }
      },
      getSelectedData(showSection, data) {
        if (showSection === "edit") {
          this.id_area_selected = data.id_area;
          this.id_classroom_selected = data.id_classroom;
          this.showSection = "edit";
        } else if (showSection === "cycle") {
          this.id_module = data.id;
          this.showSection = "cycle";
        }
      },
      backPage() {        
        this.id_area_selected = null;
        this.id_classroom_selected = null;
        this.showSection = "principal";
        this.id_module = null;
      },
    },
  };
</script>
