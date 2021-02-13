<template>
  <div id="crud" class="row">
    <div class="col-sm-12">
      <h1 class="page-header">CRUD</h1>
    </div>
    <div class="col-sm-7">
      <a href="#" class="btn btn-primary float-right" data-toggle="modal"
        data-target="#create">Nueva tarea</a>
        <table class="table table-hover table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tipos de Usuario</th>
              <th colspan="2">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="keep in keeps">
              <td width="10px">{{ keep.id }}</td>
              <td>{{ keep.keep }}</td>
              <td width="10px">
                <a href="#" class="btn btn-warning btn-sm" v-on:click.prevent="editKeep(keep)">Editar</a>
              </td>
              <td width="10px">
                <a href="#" class="btn btn-danger btn-sm" v-on:click.prevent="deleteKeep(keep)"
                >Eliminar</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="modal fade" id="create" >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4>Crear</h4>
              <button type="button" class="close" data-dismiss="modal">
                <span>&times;</span>
              </button>  
            </div>
            <div class="modal-body">
              <label for="keep">Nuevo Tipo</label>
              <input type="text" name="keep" class="form-control" v-model="newKeep">
              <span v-for="error in errors" class="text-danger">{{ error }}</span>
            </div>
            <div class="modal-footer">
              <input type="submit" @click="createKeep" class="btn btn-primary" value="Guardar">
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="edit">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
                <h4>Editar</h4>
                <button type="button" class="close" data-dismiss="modal">
                    <span>&times;</span>
                </button>  
            </div>
            <div class="modal-body">
                 <label for="keep">Actualizar Tipo</label>
                <input type="text" name="keep" class="form-control" v-model="fillKeep.keep">
                <span v-for="error in errors" class="text-danger">{{ error }}</span>
            </div>
            <div class="modal-footer">
                <input type="submit" @click="updateKeep(fillKeep.id)" class="btn btn-primary" value="Actualizar">
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import "toastr/toastr.scss";
export default {
  //arreglos para editar y crear
  data() {
    return {
      keeps: [],
      newKeep: "",
      fillKeep: { id: "", keep: "" },
      errors: []
    };
  },
  created() {
    this.getKeeps();
  },
  
  mounted() {
    console.log("Component mounted.");
  },
  methods: {//metodos del CRUD
    getKeeps(page) {
      var urlKeeps = "tasks?page=" + page;
      axios.get(urlKeeps).then(response => {
        (this.keeps = response.data.tasks.data);
         
      });
    },
    editKeep(keep) {
      this.fillKeep.id = keep.id;
      this.fillKeep.keep = keep.keep;
      $("#edit").modal("show");
    },
    updateKeep(id) {
      var url = "tasks/" + id;
      axios.put(url, this.fillKeep).then(response => {
        this.getKeeps();
        this.fillKeep = { id: "", keep: "" };
        this.errors = [];
        $("#edit").modal("hide");
        toastr.success('Tipo de usuario editado con exito');
        }).catch(error => {
        this.errors = error.response.data
        });
    },
    deleteKeep(keep) {
      var url = "tasks/" + keep.id;
      axios.delete(url).then(response => {
        // eliminar
        this.getKeeps(); //lista
        toastr.success("Eliminado correctamente"); //mensaje
      });
    },
    createKeep() {
      var url = "tasks";
      axios
        .post(url, {
          keep: this.newKeep
        })
        .then(response => {
          this.getKeeps();
          this.newKeep = "";
          this.errors = [];
          $("#create").modal("hide");
           toastr.success('Nuevo tipo de usuario creado con exito');
           }).catch(error => {
           this.errors = error.response.data
           });
    }
  }
};
</script>

