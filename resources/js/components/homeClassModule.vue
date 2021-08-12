<template>
  <div class="fondo-lista">
    <div id="crud" class="row justify-content-center">
      <div class="col-sm-10">
        <div class="custom-card text-center">
          <h3 class="card-header col-md-6 fondoAzul mx-auto letra-boldfont" style=" border-radius: 15px;">{{ nameWeekly }}</h3>
          <div class="card-body">
               <div class="form-group  text-center">
                      <a
                            class="btn btn-lg  btn-warning border-radius letra-boldfont"
                            :href="`/compra/plan/${plan_code?plan_code:'MODULO'}/modulo/${id_weekly}/resumen`"
                            style="margin-right: 10px;"
                            >{{plan_code?'Seleccionar':`Comprar $${filteredRows.length>0?formatPrice(filteredRows[0].price):''}`}}
                            </a>
                             <a
                            class="btn btn-lg btn-trikele border-radius letra-boldfont"
                            href="/compra/plan/MENSUAL/resumen"
                            >Ver plan mensual
                            </a>
                </div>
                <div class="text-center">
                  <p style="background-color: #ffffff8f; color: #747070;padding: 20px;">Por ${{ formatPrice(filteredRows[0].price) }} puedes comprar {{ filteredRows.length }} clases. </p>
              </div>
                <div class="float-right">
                <label for="">Buscar</label>
                <input type="text" placeholder="Clase o tema" v-model="filter" />
                </div>

                <div class="table-responsive" style="border-radius: 20px">
                <table
                    class="table-hover"
                    style="border-collapse: separate !important; border-spacing: 0px 5px;"
                >
                    <thead>
                    <tr>
                        <th class="etiqueta-trikele">Clases</th>
                        <th class="etiqueta-trikele">Temas</th>
                        <th class="etiqueta-trikele">Logros</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        style="font-size: 18px"
                        v-for="(row, index) in filteredRows"
                        :key="`employee-${index}`"
                    >
                        <td width="200px" class="btn-trikele letra-boldfont border-radius" v-html="highlightMatches(row.name)"></td>
                        <td class="letra-poppins" v-html="highlightMatches(row.subject)"></td>
                        <td class="letra-poppins" v-html="highlightMatches(row.achievement)"></td>
                        <!-- <td class="letra-boldfont" >${{formatPrice(row.price)}}</td>-->
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
export default {
  props: ["id_weekly","plan_code"],
  data() {
    return {
      filter: "",
      rows: [],
      nameWeekly:""
    };
  },
  mounted() {
    var url = window.location.origin + "/findClassByModule/" + this.id_weekly;
    axios.get(url).then((response) => {
      this.rows = response.data;
    });
     var urlm = window.location.origin + "/findWeeklyById/"+ this.id_weekly;
    axios.get(urlm).then((response) => {
        this.nameWeekly = response.data;
        });
  },
  methods: {
    highlightMatches(text) {
      const matchExists = text
        .toLowerCase()
        .includes(this.filter.toLowerCase());
      if (!matchExists) return text;

      const re = new RegExp(this.filter, "ig");
      return text.replace(
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
      return this.rows.filter((row) => {
        const name = row.name.toString().toLowerCase();
        const subject = row.subject.toString().toLowerCase();
        const achievement = row.achievement.toString().toLowerCase();
        const searchTerm = this.filter.toLowerCase();

        return (
          subject.includes(searchTerm) ||
          name.includes(searchTerm) ||
          achievement.includes(searchTerm)
        );
      });
    },
  },
};
</script>
