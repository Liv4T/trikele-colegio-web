<template>
<div >
  <div class="row justify-content-center">
    <div class="col col-lg-8">
       <div class="row justify-content-center">
            <div class="col">
                <div v-if="model.transactionState==4" class="div-notification noti-success">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                    <span>TRANSACCIÓN APROBADA</span>
                </div>
                <div v-else-if="model.transactionState==6" class="div-notification noti-danger">
                    <svg width="1.0625em" height="1em" viewBox="0 0 17 16" class="bi bi-exclamation-triangle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M7.938 2.016a.146.146 0 0 0-.054.057L1.027 13.74a.176.176 0 0 0-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 0 0 .066-.017.163.163 0 0 0 .055-.06.176.176 0 0 0-.003-.183L8.12 2.073a.146.146 0 0 0-.054-.057A.13.13 0 0 0 8.002 2a.13.13 0 0 0-.064.016zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                        <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                    </svg>
                    <span>TRANSACCIÓN RECHAZADA</span>
                </div>
                <div v-else-if="model.transactionState==104" class="div-notification noti-danger">
                    <svg width="1.0625em" height="1em" viewBox="0 0 17 16" class="bi bi-exclamation-triangle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M7.938 2.016a.146.146 0 0 0-.054.057L1.027 13.74a.176.176 0 0 0-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 0 0 .066-.017.163.163 0 0 0 .055-.06.176.176 0 0 0-.003-.183L8.12 2.073a.146.146 0 0 0-.054-.057A.13.13 0 0 0 8.002 2a.13.13 0 0 0-.064.016zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                        <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                    </svg>
                    <span>ERROR</span>
                </div>
                <div v-else-if="model.transactionState==7" class="div-notification noti-warning">
                    <svg width="1.0625em" height="1em" viewBox="0 0 17 16" class="bi bi-exclamation-triangle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M7.938 2.016a.146.146 0 0 0-.054.057L1.027 13.74a.176.176 0 0 0-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 0 0 .066-.017.163.163 0 0 0 .055-.06.176.176 0 0 0-.003-.183L8.12 2.073a.146.146 0 0 0-.054-.057A.13.13 0 0 0 8.002 2a.13.13 0 0 0-.064.016zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                        <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                    </svg>
                    <span>TRANSACCIÓN PENDIENTE</span>
                </div>
                <div v-else class="div-notification noti-warning">
                    <svg width="1.0625em" height="1em" viewBox="0 0 17 16" class="bi bi-exclamation-triangle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M7.938 2.016a.146.146 0 0 0-.054.057L1.027 13.74a.176.176 0 0 0-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 0 0 .066-.017.163.163 0 0 0 .055-.06.176.176 0 0 0-.003-.183L8.12 2.073a.146.146 0 0 0-.054-.057A.13.13 0 0 0 8.002 2a.13.13 0 0 0-.064.016zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                        <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                    </svg>
                    <span>{{model.message}}</span>
                </div>
            </div>
       </div>
       <div class="row justify-content-center margin-top-20">
            <div class="col">
                <div class="card padding-20">
                    <div class="row">
                        <div class="col item-description">
                            <label>CUS:</label>
                            {{model.cus}}
                        </div>
                         <div class="col item-description">
                            <label>REFERENCIA:</label>
                            {{model.referenceCode}}
                        </div>
                    </div>

                </div>
            </div>
       </div>
       <div class="row justify-content-center margin-top-20">
            <div class="col">
                <div class="card padding-20">
                    <div class="row">
                        <div class="col item-description">
                            <label>FECHA COMPRA:</label>
                            {{model.invoice.sale_date}}
                        </div>
                         <div class="col item-description">
                            <label>TRANSACCIÓN ID:</label>
                            {{model.transactionId}}
                        </div>
                    </div>
                     <div class="row margin-top-20">
                        <div class="col">
                            <table class="table table-bordered table-hover">
                                <tbody>
                                    <tr v-for="(item,i) of model.invoice.items" v-bind:key="i">
                                        <td scope="row">{{item.customer_plan_name}}</td>
                                        <td scope="row" class="text-center">{{item.quantity}} und.</td>
                                        <td scope="row" class="text-right">$ {{formatPrice((item.total_value))}}</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th colspan="2">TOTAL</th>
                                        <th  class="text-right">$ {{formatPrice((model.invoice.total_payment))}}</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
       </div>
       <div class="row justify-content-center margin-top-20">
            <div class="col text-center">
               <a href="/inicio" class="btn btn-Azul">Ir a mi cuenta</a>
            </div>
       </div>
    </div>
</div>
</div>
</template>
<script>
export default {
    props:['model'],
     data() {
        return {
            events:{
                download_invoice_loading:false
            }
        };
    },
    mounted(){
        console.log(this.model);
    },
    methods:{
        formatPrice(value) {
         let val = (value/1).toFixed(0).replace('.', ',')
         return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      },
    }
}
</script>
<style scoped>
.div-notification{display:flex;flex-direction: row; justify-content: center;padding: 10px;align-items: center;border-radius:5px;font-weight: 700;font-size: 1.2em;}
.div-notification.noti-warning{background-color: #ffe251;}
.div-notification.noti-success{background-color: #51ff87;}
.div-notification.noti-danger{background-color: #ff5159;color:white;}
svg{margin-right: 10px;}
.item-description{display: flex;flex-direction: column;}
.item-description label{font-weight: bold;}
</style>
