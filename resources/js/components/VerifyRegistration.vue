<template>
    <div class="back">
        <div class="row">
            <div class="col-md-11 mx-auto">
                <div class="card">
                    <div class="card-header fondo">
                        <h3>Verificación de Pago de Matricula</h3>
                    </div>
                    <div class="card-body">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Fecha de Pago</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(user, key) in data" :key="key">
                                    <td>{{user.name}}</td>
                                    <td>{{user.last_name}}</td>
                                    <td>{{user.payment_date}}</td>
                                    <td>
                                        <button v-on:click="getStudent(user)" class="btn btn-primary">Habilitar Boton de Boletín</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                data: []
            }
        },

        mounted(){
            this.getData();
        },

        methods: {
            getData(){                
                axios.get('getPaymentAproved').then((response)=>{
                    let data = response.data;
        
                    axios.get('paymentRegistration').then((response)=>{
                        let payment = response.data;
                        data.filter((el)=>{
                            payment.forEach((element)=>{
                                if(el.id_customer_invoice_payment !== element.id_customer_invoice_payment){
                                    this.data.push(el);
                                }
                            })
                        })
                    })
                });                
            },

            getStudent(data){                
                axios.post('paymentRegistration',{
                    id_student: data.id_student,
                    status: 1,
                    id_customer_invoice_payment: data.id_customer_invoice_payment,
                }).then((response)=>{
                    toastr.success(response.data);
                    this.getData();
                }).catch((error)=>{
                    toastr.info('Ha ocurrido un error, intenta de nuevo mas tarde');
                    console.log(error);
                })
            }
        }
    }
</script>