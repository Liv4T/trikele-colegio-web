<template>
    <div class="back">
        <div class="col-md-11 col-md-offset-2">
            <div class="card">
                <div class="card-header fondo">
                    Resumen de Pago
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label>Producto:</label>
                        <p>Plan Mensual</p>
                    </div>

                    <div class="form-group">
                        <label>Costo:</label>
                        <p>200.000 Pesos</p>
                    </div>

                    <button v-on:click="payPaypal()"></button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                fullWidth: true,
                current_plan: { quantity: 1, plan_price: {} },
                plan_prices: [],
                currencyExchangePrice: "",
                events: {
                    pay_loading: false,
                    voucher_loading: false,
                    voucher_error: "",
                },
                voucher_code: "",
                voucher_data: null,
            };
        },

        mounted() {
        },
        methods: {
            payPaypal(data){
                this.events.pay_loading = true;
                let model = {
                    quantity: this.current_plan.quantity,
                    plan_name: this.current_plan.plan_name,
                    amount: data.purchase_units[0].amount.value,
                    ref: data.purchase_units[0].payments.captures[0].id,  
                    result: data.purchase_units[0].payments.captures[0].status,
                    payer_email: data.payer.email_address,
                    payer_id: data.payer.payer_id,
                    merchant_id: data.purchase_units[0].payee.merchant_id,
                    princeExchange: this.currencyExchangePrice,
                    total: this.TotalValue(),
                    code: this.code,
                };
                location.href=`/compra/pagar/plan/paypal/${encodeURI(window.btoa(JSON.stringify(model)))}`;
            }
        },
    };
</script>