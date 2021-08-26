<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">Trimestre</h3>
          <div class="card-body">
            <div id="acordeon">
              <div class="card" v-for="(area, key) in areas" :key="key">
                <div class="card-header" :id="`head${key}`">
                  <h5 class="mb-0">
                    <button class="btn btn-link" v-on:click="botones(key, area.id, area.id_classroom)" data-toggle="collapse" :data-target="`#desplegable${key}`" aria-expanded="true" :aria-controls="`desplegable${key}`">
                      {{area.text}}
                    </button>
                  </h5>
                </div>

                <div :id="`desplegable${key}`" class="collapse hide" :aria-labelledby="`head${key}`" data-parent="#acordeon">
                  <div class="card-body" v-if="keyShow === key">                    
                      <bimestre-list-component :id_area="area_id" :id_classroom="classroom_id" :type_u="user.type_user" :user="user"></bimestre-list-component>
                  </div>
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
      areas: [],
      area_id:"",
      classroom_id:"",
      keyShow: null
    };
  },

  mounted() {
    var url = "/GetArearByUser";
    axios.get(url).then((response) => {
      this.areas = response.data;
    });
  },
  methods: {
    botones(key, area, classroom) {
      this.keyShow = key
      this.area_id = area;
      this.classroom_id = classroom;
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