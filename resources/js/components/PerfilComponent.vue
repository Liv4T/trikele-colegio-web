<template>
  <div class="back row justify-content-center">
    <div class="col-sm-10">
      <div class="card text-center">
        <form class="needs-validation" novalidate>
          <div class="card-header fondo">
            <h4>Mi perfil</h4>
          </div>
          <div class="card-body">
            <div class="form-group row">
              <div class="col-md-4">
                <img :src="dataU.picture" class="rounded float-left" height="160px" width="190px" />
              </div>

              <div align="left col">
                <div class="form-group row">
                  <h6>INFORMACIÓN DEL ESTUDIANTE</h6>
                </div>
                <div class="form-group row">
                  <div class="col-md-3">
                    <label for="name">Apellidos</label>
                  </div>
                  <div class="col-md-6">
                    <label for="name">{{dataU.last_name}}</label>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-3">
                    <label for="name">Nombres</label>
                  </div>
                  <div class="col-md-6">
                    <label for="name">{{dataU.name}}</label>
                  </div>
                </div>

                <div class="form-group row">
                  <h6>INFORMACIÓN DE CONTACTO</h6>
                </div>
                <div class="form-group row">
                  <div class="col-md-3">
                    <label for="name">Dirección</label>
                  </div>
                  <div class="col-md-6">
                    <label for="name">{{dataU.address}}</label>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-3">
                    <label for="name">Teléfono</label>
                  </div>
                  <div class="col-md-6">
                    <label for="name">{{ dataU.phone }}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="modal-footer">
            <input type="submit" @click="updateNames" class="btn btn-warning" value="Actualizar" />
          </div>-->
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import "toastr/toastr.scss";
export default {
  data() {
    return {
      fillNames: {
        id: "",
        name: "",
        last_name: "",
        age: "",
        birthday: "",
        password: "",
        email: "",
        user_name: "",
        id_categories: "",
        id_subcategories: "",
        type_user: "",
        address: "",
        picture: "",
        phone: "",
        id_number: "",
        country: "",
      },

      dataU: [],
      image: "",
    };
  },
  created() {},
  mounted() {
    var urlUsers = "showUser";
    axios.get(urlUsers).then((response) => {
      this.dataU = response.data;
    });
  },
  methods: {
    //metodos del CRUD
    getNames() {},
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var newPicture = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.newPicture = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    updateNames() {
      var url = "users/" + this.fillNames.id;
      axios
        .put(url, this.fillNames)
        .then((response) => {
          toastr.success("User successfully edited");
          this.getNames();
          this.fillNames = {
            name: "",
            last_name: "",
            age: "",
            birthday: "",
            address: "",
            picture: "",
            phone: "",
            id_number: "",
          };
          this.errors = [];
        })
        .catch((error) => {
          this.errors = error.response.data;
        });
    },
  },
};
</script>
<style>
.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.inputfile + label {
  font-size: 1.25em;
  font-weight: 700;
  color: white;
  background-color: orangered;
  display: inline-block;
}

.inputfile:focus + label,
.inputfile + label:hover {
  background-color: rgb(218, 94, 49);
}
.inputfile + label {
  cursor: pointer; /* "hand" cursor */
}

</style>
