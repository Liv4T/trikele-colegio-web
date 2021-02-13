<template>
  <div class="caja">
    <div class="panel panel-primary">
      <h4 class="panel-heading">Grupos</h4>
      <div>
        <form>
          <div class="form-group">
            <input class="form-control" type="text" v-model="nombre" placeholder="Nombre del grupo" />
          </div>
          <div class="form-group">
            <select v-model="users" multiple id="friends" style="width: 50%;">
              <option v-for="user in initialUsers" :value="user.id">{{ user.name }}</option>
            </select>
          </div>
        </form>
      </div>
      <div class="panel-footer text-center">
        <button type="submit" @click.prevent="createGroup" class="btn btn-info">Crear grupo</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["initialUsers"],

  data() {
    return {
      nombre: "",
      users: []
    };
  },

  methods: {
    createGroup() {
      axios
        .post("/groups", { name: this.nombre, users: this.users })
        .then(response => {
          this.name = "";
          this.users = [];
          Bus.$emit("groupCreated", response.data);
        });
    }
  }
};
</script>
<style>
.panel-footer {
  padding: 10px 15px;
  background-color: #e8e5e5;
  border-top: 1px solid #e8e5e5;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.caja {
  padding-left: 35px;
}
</style>
