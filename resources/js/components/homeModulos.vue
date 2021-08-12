<template>
  <div class="fondo-lista">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="custom-card text-center">
          <h3 class="card-header col-md-6 fondoAzul letra-boldfont mx-auto" style=" border-radius: 15px;">{{ nameArea }}</h3>
          <div class="card-body">
              <div class="text-center">
                  <p style="background-color: #ffffff8f; color: #747070;padding: 20px;">Con el plan mensual por $199.900, <br /> puedes comprar todas las materias de un grado.</p>
              </div>
                <div class="float-right">
                <label for="">Buscar</label>
                <input type="text"  placeholder="Módulo" v-model="filter" />
                </div>
                <div class="table-responsive" style="border-radius: 20px">
                <table
                    class="table-hover" style="border-collapse: separate !important; border-spacing: 0px 5px;">
                    <thead >
                    <tr>
                        <th class="etiqueta-trikele">Módulos (temas)</th>
                        <th class="etiqueta-trikele">Descripción</th>
                        <th>   <a
                            class="btn btn-lg btn-trikele border-radius letra-boldfont"
                            href="/compra/plan/MENSUAL/resumen"
                            >Ver plan mensual
                            </a>
                            </th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="(row, index) in filteredRows"
                        :key="index"

                    >
                    <template v-if="row.id_classroom == classroom && row.id_area == id_area">
                        <td
                        width="200px"
                        style="font-size: 16px; border-radius: 15px;"
                        v-html="highlightMatches(row.text)"
                        class="btn-trikele border-radius letra-boldfont"
                        ></td>
                        <td
                        style="font-size: 16px"
                        v-html="highlightMatches(row.class)"
                        class="letra-poppins"
                        ></td>
                        <td width="250px">
                        <a
                            class="btn btn-Azul letra-boldfont border-radius"
                            :href="'/modulo_clases/' + row.id"
                            >Ver más</a
                        >

                        </td>
                    </template>
                    </tr>
                    </tbody>
                </table>
                </div>
          </div>
        </div>
      </div>
    </div>
     <div style="text-align:center;" class="padding-20">
        <a href="/compra/plan/MENSUAL/resumen"><img src="/uploads/home/banner-compra.png" width="70%" alt=""></a>
    </div>
     <div class="form-group text-center">
        <img class="" src="/uploads/home/recurso9.png" />
      </div>
  </div>
</template>
<script>
import Multiselect from "vue-multiselect";
Vue.component("multiselect", Multiselect);
export default {
  components: { Multiselect },
  props: ["id_grade", "id_area","plan_code"],
  data() {
    return {
      clases: [],
      classroom: "",
      value: [{ name: "Todos", code: "js" }],
      descripcion: "",
      logro: "",
      fechaE: "",
      fechaR: "",
      id_act: "",
      errors: [],
      fillS: [],
      area: null,
      nameArea:"",
      filter: "",
      area_price:0
    };
  },
  created() {},
  mounted() {
    var url = window.location.origin + "/findClassroomByGrade/" + this.id_grade;
    axios.get(url).then((response) => {
      this.classroom = response.data;
      console.log(this.classroom);
      var urlsel =
        window.location.origin +
        "/viewGetWeek/" +
        this.id_area +
        "/" +
        this.classroom;
        axios.get(urlsel).then((response) => {
            this.clases = response.data;
            });

    });
    var urla = window.location.origin + "/findAreaById/"+ this.id_area;
    axios.get(urla).then((response) => {
        this.nameArea = response.data;
        console.log(this.nameArea);
    });
    console.log("Component mounted.");

    axios.get(`/api/area/${this.id_area}/price`).then((response) => {
        if(response.data)
        {
            this.area_price=response.data.price;
        }
    });

  },
  methods: {
    highlightMatches(texto) {
      const matchExists = texto
        .toLowerCase()
        .includes(this.filter.toLowerCase());
      if (!matchExists) return texto;

      const re = new RegExp(this.filter, "ig");
      return texto.replace(
        re,
        (matchedText) => `<strong>${matchedText}</strong>`
      );
    },
    formatPrice(value) {
         let val = (value/1).toFixed(0).replace('.', ',')
         return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      },
  },
  computed: {
    filteredRows() {
      return this.clases.filter((row) => {
        const text = row.text.toString().toLowerCase();
        const searchTerm = this.filter.toLowerCase();

        return text.includes(searchTerm);
      });
    },
  },
};
</script>
<style>
.fondo-lista{
    background-image: url("/uploads/home/fondo-lista.jpg");
}
.etiqueta-trikele{
    color: #ff4700;
    font-size: 20px;
    font-weight: 700;
    font-family: "boldfont";
}
.letra-boldfont{
    font-family: "boldfont";
}
.border-radius{
    border-radius: 15px;
}
</style>
