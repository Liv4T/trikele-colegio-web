<template>
  <div class="back row justify-content-center">
    <div class="col-sm-10">
      <div class="card text-center">
        <h3 class="card-header fondo">Cambiar contraseña</h3>
        <div class="card-body">
          <form class="needs-validation" v-on:submit.prevent="updatePassword" novalidate>
            <div class="form-group row">
              <div class="col">
                <label for="name">Contraseña</label>
                <input
                  type="password"
                  id="password1"
                  class="form-control"
                  v-model="newPassword"
                  required
                />
              </div>
              <div class="col">
                <label for="name">Confirmar contraseña</label>
                <input type="password" id="password2" class="form-control" required />
                <p class="alertaPass" id="validate-status"></p>
              </div>
            </div>
            <div class="modal-footer">
              <input type="submit" class="btn btn-warning" value="Guardar" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
$(document).ready(function() {
  $("#password2").keyup(validate);
});

function validate() {
  var password1 = $("#password1").val();
  var password2 = $("#password2").val();

  if (password1 == password2) {
    $("#validate-status").text("");
  } else {
    $("#validate-status").text("La contraseña no coincide");
  }
}

export default {
  data: function() {
    return {
      newPassword: ""
    };
  },

  methods: {
    getMenu() {
      window.location = "/inicio";
    },
    updatePassword() {
      var url = "changePassword";

      axios
        .put(url, {
          //Cursos generales
          password: this.newPassword
        })
        .then(response => {
          toastr.success("Contraseña actualizada exitosamente");
        })
        .catch(error => {});
    }
  }
};
</script>
<style>
.alertaPass {
  color: red;
}
</style>
