<template>
  <div class="fondo-lista">
    <div class="back row justify-content-center">
      <div class="col-sm-10">
        <div class="card text-center">
          <h5 class="card-header fondo letra-poppins-bold">{{ nameCat }}</h5>
          <div class="card-body">
            <div class="form-group" v-if="status === 1">
              <a class="btn btn-Azul" :href="'/extra_crear/'+id_cat">Crear clase</a>
            </div>
            <div class="card" v-for="(resource, key) in clases.clase" :key="key">
              <div class="card-body">
                <h4 class="card-title letra-poppins">{{ resource.name }}</h4>
                <p class="card-text letra-poppins">{{ resource.description }}</p>
                <div>
                  <a
                    class="letra-poppins-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                    :href="'/extra_view/'+id_cat+'/'+resource.id"
                    style="color:blue; font-size: large;"
                  >Ir a video</a>
                </div>
                <p class="letra-poppins">Estos recursos no estan visibles o disponibles de forma libre en youtube o en otras plataformas de video</p>
                <a
                  class="btn btn-Azul float-right"
                  v-if="status === 2"
                  :href="'/extra_edit/'+id_cat+'/'+resource.id"
                >Editar</a>
              </div>
            </div>
            <div class="form-group">
              <a class="btn btn-warning float-left" :href="back">Regresar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id_cat"],
  data() {
    return {
      clases: [],
      areas: [],
      descripcion: "",
      logro: "",
      fechaE: "",
      fechaR: "",
      id_act: "",
      errors: [],
      fillS: [],
      nameCat: "",
      nameArea: "",
      back: "",
      id_extra: "",
      status: 0,
    };
  },
  created() {},
  mounted() {
    this.fillS = [];
    var urlr = window.location.origin + "/showClassExtra/" + this.id_cat;
    axios.get(urlr).then((response) => {
      this.clases = response.data;
    });
    var urls = window.location.origin + "/findCatName/" + this.id_cat;
    axios.get(urls).then((response) => {
      this.nameCat = response.data.name;
      this.status = response.data.status;
      this.id_extra = response.data.id_extra;
      if (this.id_extra == 2) {
        this.back = window.location.origin + "/extra_ef/";
      } else {
        this.back = window.location.origin + "/extra_ea/";
      }
    });

    // var url =
    //   window.location.origin +
    //   "/GetNameArea/" +
    //   this.id_area +
    //   "/" +
    //   this.id_classroom;
    // axios.get(url).then((response) => {
    //   this.nameArea = response.data;
    // });

    console.log("Component mounted.");
  },
  methods: {},
};
</script>
<style>
</style>
