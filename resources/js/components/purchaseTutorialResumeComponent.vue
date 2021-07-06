<template>
  <div class="fondo-lista">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12">
          <section class="title-page-section">
            <span class="title-page letra-boldfont">RESUMEN DE COMPRA</span>
          </section>
        </div>
      </div>
      <div class="row justify-content-center" v-if="fullWidth">
        <div class="col-md-10">
          <section class="resume-container">
            <div class="row">
              <div class="col-md-12">
                <div class="resume-table">
                  <table class="table">
                    <thead class="thead-resume">
                      <tr>
                        <th class="letra-boldfont" style="min-width:300px">PRODUCTO</th>
                        <th class="letra-boldfont">PRECIO</th>
                        <th class="letra-boldfont">CANTIDAD</th>
                        <th class="letra-boldfont">SUBTOTAL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="row align-items-center">
                            <div class="col-4 col-md-2 div-plan-icon">
                              <img v-if="current_plan.icon" :src="current_plan.icon" alt="incono" />
                            </div>
                            <div class="col-8 col-md-6 div-plan-title">
                              <h4>
                                {{ current_plan.plan_name }} - {{ group_name }} <span style="text-transform: uppercase;">{{ type }}</span>
                              </h4>
                            </div>
                            <div class="col-6 col-md-4 text-center">
                              <a v-if="current_plan.plan_price.presentation_url" target="_blank" v-bind:href="evalue(current_plan.plan_price.presentation_url)">Ver detalle</a>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="row align-items-center">
                            <div class="col-12 col-md-12 text-right">
                              <span>${{ formatPrice(TotalValue()) }}</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="row align-items-center">
                            <div class="col-12 col-md-12 text-right"><span>1</span></div>
                          </div>
                        </td>
                        <td>
                          <div class="row align-items-center">
                            <div class="col-12 col-md-12 text-right">
                              <span>${{ formatPrice(TotalValue()) }}</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <section class="section-cupon">
              <div class="row align-items-center">
                <div class="col-md-6">
                  <input type="text" class="form-control" v-model="voucher_code" :disabled="events.voucher_loading" @change="events.voucher_error = ''" placeholder="Código de cupón" />
                  <small v-if="events.voucher_error" class="form-text text-error letra-boldfont">{{ events.voucher_error }}</small>
                </div>
                <div class="col-md-4">
                  <button v-if="!events.voucher_loading" class="btn btn-Azul letra-boldfont" :disabled="!voucher_code" @click="validateVoucher">{{ voucher_data ? "Cambiar" : "Agregar código" }}</button>
                  <button v-if="events.voucher_loading" type="button" class="btn btn-primary letra-boldfont" disabled>Validando...</button>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
      <div class="row justify-content-center margin-top-50" v-if="fullWidth">
        <div class="col-md-6">
          <section class="resume-container">
            <div class="row">
              <div class="col-md-12">
                <div class="resume-table">
                  <table class="table">
                    <thead class="thead-resume">
                      <tr>
                        <th class="letra-boldfont" style="min-width:300px">TOTAL DEL CARRITO</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="row align-items-center">
                            <div class="col-6 col-md-6 div-plan-icon">
                              <span>SUBTOTAL</span>
                            </div>
                            <div class="col-6 col-md-6 text-right div-plan-title">
                              <span>${{ formatPrice(TotalValue()) }}</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr v-if="voucher_data">
                        <td>
                          <div class="row align-items-center">
                            <div class="col-6 col-md-6 div-plan-icon">
                              <span>CUPÓN {{ voucher_data.code }}</span>
                              <small>Descuento: {{ VoucherDiscountApplied() }} dcto.</small>
                            </div>
                            <div class="col-6 col-md-6 div-plan-title text-right">
                              <span>- ${{ formatPrice(VoucherDiscountValue()) }}</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="row align-items-center">
                            <div class="col-6 col-md-6 div-plan-icon">
                              <span>TOTAL</span>
                            </div>
                            <div class="col-6 col-md-6 div-plan-title text-right">
                              <span class="span-total">${{ formatPrice(TotalValue() - VoucherDiscountValue()) }}</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="content-button">
              <div class="row align-items-center">
                <div class="col-md-12 content-button">
                  <button v-if="!events.pay_loading && TotalValue() - VoucherDiscountValue() > 0" @click="PayEvent()" class="btn btn-Azul letra-boldfont">FINALIZAR COMPRA</button>
                  <button v-if="events.pay_loading" type="button" class="btn btn-primary letra-boldfont" disabled>Procesando...</button>
                  <button v-if="!events.pay_loading && TotalValue() - VoucherDiscountValue() == 0" @click="PayEvent()" class="btn btn-Azul letra-boldfont">EMPEZAR</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div class="row justify-content-center" v-if="!fullWidth">
        <div class="col-md-10">
          <section class="resume-container">
            <div class="row">
              <div class="col-md-12">
                <div class="resume-table">
                  <table class="table table-resume">
                    <thead>
                      <tr>
                        <th class="letra-boldfont" colspan="2">PRODUCTO</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colspan="2">
                          <div class="row align-items-center">
                            <div class="col-3 col-md-2 div-plan-icon">
                              <img v-if="current_plan.icon" :src="current_plan.icon" alt="incono" />
                            </div>
                            <div class="col-9 col-md-6">
                              <h4>
                                {{ current_plan.plan_name }} - {{ group_name }} <span style="text-transform: uppercase;">{{ type }}</span>
                              </h4>
                            </div>
                            <div class="col-12 col-md-4 text-center">
                              <a v-if="current_plan.plan_price.presentation_url" target="_blank" v-bind:href="evalue(current_plan.plan_price.presentation_url)">Ver detalle</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th class="letra-boldfont">PRECIO</th>
                        <td>
                          <div class="row align-items-center">
                            <div class="col-12 col-md-12 text-right">
                              <span>${{ formatPrice(TotalValue()) }}</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th class="letra-boldfont">CANTIDAD</th>
                        <td>
                          <div class="row align-items-center">
                            <div class="col-12 col-md-12 text-right"><span>1</span></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th class="letra-boldfont">SUBTOTAL</th>
                        <td>
                          <div class="row align-items-center">
                            <div class="col-12 col-md-12 text-right">
                              <span>${{ formatPrice(TotalValue()) }}</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <section class="section-cupon">
                            <div class="row align-items-center">
                              <div class="col-md-6">
                                <input type="text" class="form-control" v-model="voucher_code" :disabled="events.voucher_loading" @change="events.voucher_error = ''" placeholder="Código de cupón" />
                                <small v-if="events.voucher_error" class="form-text text-error letra-boldfont">{{ events.voucher_error }}</small>
                              </div>
                              <div class="col-md-4">
                                <button v-if="!events.voucher_loading" class="btn btn-Azul letra-boldfont" :disabled="!voucher_code" @click="validateVoucher">{{ voucher_data ? "Cambiar" : "Agregar código" }}</button>
                                <button v-if="events.voucher_loading" type="button" class="btn btn-primary letra-boldfont" disabled>Validando...</button>
                              </div>
                            </div>
                          </section>
                        </td>
                      </tr>
                      <tr>
                        <td class="letra-boldfont" style="min-width:300px;font-weight:bold" colspan="2">TOTAL DEL CARRITO</td>
                      </tr>
                      <tr>
                        <th class="letra-boldfont">SUBTOTAL</th>
                        <td>
                          <div class="row align-items-center">
                            <div class="col-12 col-md-12 text-right div-plan-title">
                              <span>${{ formatPrice(TotalValue()) }}</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr v-if="voucher_data">
                        <th class="letra-boldfont">
                          <span>CUPÓN {{ voucher_data.code }}</span>
                          <small>Descuento: {{ VoucherDiscountApplied() }} dcto.</small>
                        </th>
                        <td>
                          <div class="row align-items-center">
                            <div class="col-12 col-md-12 div-plan-title text-right">
                              <span>- ${{ formatPrice(VoucherDiscountValue()) }}</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th class="letra-boldfont">TOTAL</th>
                        <td>
                          <div class="row align-items-center">
                            <div class="col-12 col-md-12 div-plan-title text-right">
                              <span class="span-total">${{ formatPrice(TotalValue() - VoucherDiscountValue()) }}</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <div class="content-button">
                            <div class="row align-items-center">
                              <div class="col-md-12 content-button">
                                <button v-if="!events.pay_loading && TotalValue() - VoucherDiscountValue() > 0" @click="PayEvent()" class="btn btn-Azul letra-boldfont">FINALIZAR COMPRA</button>
                                <button v-if="events.pay_loading" type="button" class="btn btn-primary letra-boldfont" disabled>Procesando...</button>
                                <button v-if="!events.pay_loading && TotalValue() - VoucherDiscountValue() == 0" @click="PayEvent()" class="btn btn-Azul letra-boldfont">EMPEZAR</button>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["group_name", "voucher", "area_id", "schedulearea_id", "time_index", "plan_type"],
  mounted() {
    if (this.voucher) {
      this.voucher_code = `${this.voucher}`;
      this.validateVoucher();
    }

    this.fillWidthCalculate();
    window.onresize = () => {
      this.fillWidthCalculate();
    };

    if (this.plan_type == "TUTORIA_GRUPAL") {
      this.type = "grupal";
       // this.minStudents=3;
    }

    this.getPlanInformation().then(() => {
        this.getScheduleSelected();
    });
  },
  data() {
    return {
        minStudents:1,
      type: "individual",
      fullWidth: true,
      current_plan: { quantity: 1, plan_price: {}, english_price: {} },
      plan_prices: [],
      english_price: { total_price: 0, total_tax: 0 },
      selected_english: true,
      events: {
        pay_loading: false,
        voucher_loading: false,
        voucher_error: "",
      },
      voucher_code: "",
      voucher_data: null,
    };
  },
  methods: {
    fillWidthCalculate() {
      this.fullWidth = window.innerWidth > 1024;
    },
    evalue(stament) {
      if (!stament) return "";

      var ret_stament = "";
      eval("ret_stament=" + `\`` + stament + `\``);
      return ret_stament;
    },
    TotalValue() {
      return this.current_plan.plan_price.total_price * this.current_plan.quantity;
    },
    VoucherDiscountApplied() {
      if (!this.voucher_data) return "";

      if (this.voucher_data.discount_percent && this.voucher_data.discount_percent > 0) {
        return `${this.voucher_data.discount_percent} % `;
      } else {
        return `$ ${this.formatPrice(this.voucher_data.discount_value)}`;
      }
    },
    VoucherDiscountValue() {
      if (!this.voucher_data) return 0;

      let total_sale = this.TotalValue();
      if (this.voucher_data.discount_percent && this.voucher_data.discount_percent > 0) {
        return (total_sale * this.voucher_data.discount_percent) / 100;
      } else {
        return this.voucher_data.discount_value;
      }
    },
    getPlanInformation() {
      return new Promise((resolve, reject) => {
        axios.get(`/api/customer-plan/type/${this.plan_type}`).then(
          (response) => {
            this.plan_prices = response.data;

            if (response.data.length == 0) {
              toastr.error("Plan no es válido");
              setTimeout(() => {
                location.href = "/compra/plan";
                resolve();
              }, 3000);
            } else {
              this.current_plan.plan_price = response.data[0];
              resolve();
            }
          },
          (e) => reject(e)
        );
      });
    },
    getScheduleSelected() {
      return new Promise((resolve, reject) => {
        axios.get(`/api/tutor/schedule/${this.type}/${this.schedulearea_id}/${this.time_index}`).then((response) => {
          this.current_plan = { plan_name: `Tutoría ${response.data[0].area_name}`, icon: response.data[0].area_icon, quantity: 1,date_from:response.data[0].date_from,date_to:response.data[0].date_to, plan_price: { total_price: response.data[0].rate*this.minStudents }, english_price: {} };
        });
      });
    },
    validateVoucher() {
      this.events.voucher_loading = true;
      this.events.voucher_error = "";
      this.voucher_data = null;

      axios.post(`/api/customer-voucher/validate`, { voucher: this.voucher_code }).then(
        (response) => {
          this.events.voucher_loading = false;
          this.voucher_data = response.data;
          console.log(this.voucher_data);
          toastr.success("Cupón aplicado");
        },
        (error) => {
          this.events.voucher_loading = false;
          if (error.response.data) {
            this.events.voucher_error = error.response.data;
            toastr.error(error.response.data);
          } else {
            console.log(error);
          }
        }
      );
    },
    PlanPriceChangeEvent() {
      //
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    QuantityValidateEvent() {
      if (this.current_plan.quantity < 1) this.current_plan.quantity = 1;

      if (this.current_plan.quantity > 20) this.current_plan.quantity = 20;
    },
    PayEvent() {
      this.events.pay_loading = true;

      let model = {
        plan_id: this.plan_prices[0].id,
        quantity: this.current_plan.quantity,
        date_from: this.current_plan.date_from,
        date_to: this.current_plan.date_to,
        english_id: 0,
        tutorschedulearea_id: this.schedulearea_id,
        time_index: this.time_index,
        voucher: this.voucher_data ? this.voucher_data.code : null,

      };

        location.href = `/compra/plan/${this.plan_type}/tutoria/ingresar/p/${encodeURI(window.btoa(JSON.stringify(model)))}`;
      //location.href=`/compra/pagar/mercadopago/${encodeURI(window.btoa(JSON.stringify(model)))}`;

      setTimeout(() => {
        this.events.pay_loading = false;
      }, 4000);
    },
    quantityEditEnabled() {
      if (this.plan_type == "CREDITO") return false;

      if (this.plan_type.includes("GRAT")) return false;

      return true;
    },
  },
};
</script>
<style>
h4 {
  font-size: 1.2em;
}
.div-plan-icon {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.div-plan-title {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
}
.div-plan-item {
  display: flex;
  flex-direction: column;
}
.div-plan-item > div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.div-plan-item-total {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.span-plan-name {
  font-weight: bold;
  font-size: 1.3em;
  color: #51647c;
}
.span-plan-subtotal {
  font-weight: bold;
  font-size: 1.5em;
}
.span-plan-total {
  font-weight: bold;
  font-size: 1.8em;
}
.span-price {
  font-weight: bold;
  font-size: 1.5em;
}
.margin-top-100 {
  margin-top: 100px;
}
.border-bottom-1 {
  border-bottom: 1px solid #818181;
}
.div-plan-icon > img {
  width: 100px;
}
.span-total {
  font-weight: bold;
  font-size: 2em;
}
.color-danger {
  color: tomato;
}
card {
  display: flex;
  justify-content: center;
}
p {
  font-family: "Century Gothic";
  font-size: 1.2em;
}
span {
  font-family: "Century Gothic";
  font-size: 1.2em;
}
ul > li {
  font-family: "Century Gothic";
  text-align: left;
}
a {
  color: #0050e3;
}
.title-page-section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}
.title-page {
  background: #233d68;
  color: white;
  font-size: 2em;
  padding: 20px;
  border-radius: 5px;
  -webkit-box-shadow: -1px 4px 9px 0px rgba(148, 148, 148, 1);
  -moz-box-shadow: -1px 4px 9px 0px rgba(148, 148, 148, 1);
  box-shadow: -1px 4px 9px 0px rgba(148, 148, 148, 1);
}
.resume-container {
  background: rgba(255, 121, 0, 0.38);
  padding: 20px;
  border-radius: 8px;
}
.resume-container .table {
  margin-bottom: 20px;
}
.section-cupon {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.resume-table {
  background: #fff;
  padding: 5px;
  border-radius: 8px;
  -webkit-box-shadow: -1px 4px 9px 0px #7a7a7a;
  -moz-box-shadow: -1px 4px 9px 0px #7a7a7a;
  box-shadow: -1px 4px 9px 0px #7a7a7a;
  width: 100%;
  margin-bottom: 20px;
}
.resume-table .table thead th {
  border-bottom: 2px solid #233d68;
}
.resume-table .table thead td {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.thead-resume th {
  color: #ff7900;
}
.table-resume th {
  color: #ff7900;
}
@media (max-width: 768px) {
  [class*="col-"] {
    margin-bottom: 15px;
  }
  .title-page {
    font-size: 1.5em;
    line-height: 40px;
  }
}
</style>
