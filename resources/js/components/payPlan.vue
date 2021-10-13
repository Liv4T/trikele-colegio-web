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

                    <!-- <div id="paypal-button" v-if="!events.pay_loading && TotalValue() - VoucherDiscountValue() > 0"></div> -->
                    <div id="paypal-button"></div>
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
            this.PayPaypal();
        },
        methods: {
            TotalValue() {
                var total=((this.current_plan.plan_price.total_price * this.current_plan.quantity));
                return this.formatPrice(total);
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
            formatPrice(value) {
                let val = (value / 1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
                return val;
            },
            PayPaypal(){
                paypal.Button.render({
                    env: 'sandbox',
                    client: {
                        sandbox: 'ARQ-WKAkFn3g4C111Ud3lLaUAfzagvJ_pmkLKBVMASvv6nyjX3fv3j0gtBdJEDhRPznYP9sLtf9oiJfH',
                        production: 'EFNo9sAyqiOmnlRHsAdXiGBf6ULysEIfKUVsn58Pq6ilfGHVFn03iVvbWtfiht-irdJD_df1MECvmBC2'
                    },

                    locale: 'es_US',
                    style: {
                        size: 'medium',
                        color: 'gold',
                        shape: 'pill',
                    },

                    commit: true,

                    payment: async (data, actions) => {
                        return actions.payment.create({
                            transactions: [{
                                amount: {
                                    total: this.TotalValue(),
                                    currency: 'USD'
                                }
                            }]
                        });
                    },

                    onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    //console.log(order);
                    this.PayEvent(order);
                    }
                }, '#paypal-button');
            },

            PayEvent(order){
                this.events.pay_loading = true;
                let model = {
                    quantity: 1,
                    plan_name: 'MENSUAL',
                    amount: order.purchase_units[0].amount.value,
                    ref: order.purchase_units[0].payments.captures[0].id,  
                    result: order.purchase_units[0].payments.captures[0].status,
                    payer_email: order.payer.email_address,
                    payer_id: order.payer.payer_id,
                    merchant_id: order.purchase_units[0].payee.merchant_id,
                    princeExchange: 1,
                    total: 1,
                    code: 'CxZ123',
                };
                location.href=`/compra/pagar/plan/paypal/${encodeURI(window.btoa(JSON.stringify(model)))}`;
            }
        },
    };
</script>