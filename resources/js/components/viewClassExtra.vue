<template>
  <div class="fondo-lista">
    <div class="back row justify-content-center">
      <div class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo letra-poppins">{{ nameCat }}</h3>
          <div class="card-body">
            <div class="form-group text-center">
              <strong for="name" class="letra-poppins">Nombre</strong>
              <h5 class=" letra-poppins-bold" style="font-weight: bold;">{{ name }}</h5>
            </div>
            <div class="form-group text-center">
              <strong for="name" class="letra-poppins">Descripción</strong>

              <p class="letra-poppins">{{ description }}</p>
            </div>
            <div class="form-group text-center">
              <strong for="name" class="letra-poppins-bold">Video de clase</strong>
            </div>
            <div class="form-group text-center" v-for="(clas, l) in clases.class_content" :key="l">
              <div>
                <iframe
                  width="600px"
                  style="height: 400px;"
                  class="embed-responsive-item"
                  :src="clas.name"
                  allowfullscreen
                ></iframe>
              </div>
              <p class="letra-poppins-bold">
                Estos recursos no estan visibles o disponibles
                de forma libre en youtube o en otras plataformas
                de video
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id_cat", "id_class"],
  data() {
    return {
      clases: [],
      description: "",
      nameCat: "",
      name: "",
      errors: [],
    };
  },
  created() {},
  mounted() {
    var urls = window.location.origin + "/findCatName/" + this.id_cat;
    axios.get(urls).then((response) => {
      this.nameCat = response.data.name;
    });
    var urlI = window.location.origin + "/showExtraById/" + this.id_class;
    axios.get(urlI).then((response) => {
      this.clases = response.data;
      this.name = this.clases.clase.name;
      this.description = this.clases.clase.description;
    });

    console.log("Component mounted.");
  },
  methods: {},
};
</script>
<style></style>
