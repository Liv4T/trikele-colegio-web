<template>
   <div>
        <div class="container">
             <div class="row">
                <div class="col-md-11 mx-auto">
                     <div class="row">
                         <div class="col-12 col-md-8 ">
                             <div class="row">
                                   <div class="col-12">
                                        <div class="card">
                                             <h5 class="card-title">¿Cómo activar mi plan?</h5>
                                            <div class="card-body text-center">
                                             <iframe width="460" height="315" src="https://www.youtube.com/embed/ADqsRPiTuzs" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                   </div>
                              </div>
                               <div class="row">
                                   <div class="col-12">
                                        <div class="card">
                                            <h5 class="card-title">Conoce nuestro calendario de clases sugerido</h5>
                                            <div class="card-body">
                                              <img src="/uploads/home/Horariotrikele.jpg" alt="horario recomendado" style="width:100%" />
                                            </div>
                                        </div>
                                   </div>
                              </div>




                         </div>
                         <div class="col-12 col-md-4 ">
                             <div class="row">
                                 <div class="col">
                                    <div class="card">
                                        <div class="card-body div-available-credits">
                                            <div>
                                                 <img width="30px"  src="/images/Botonplan3.png" alt="plan 3" />
                                                <span>{{credits_available.available_credits}}</span>

                                            </div>
                                            <div>
                                                <small>Créditos disponibles</small>
                                            </div>
                                            <div>
                                                <a class="btn btn-Azul" href="/compra/plan/CREDITO/resumen">Comprar</a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                             </div>
                             <div class="row">
                                 <div class="col">
                                    <div class="card">
                                        <div class="card-body div-available-credits">
                                            <div>
                                                <span class="font-size-1-8-em">{{students_quantity}}</span>

                                            </div>
                                            <div>
                                                <small>Estudiantes registrados</small>
                                            </div>
                                            <div>
                                                <a class="btn btn-Azul" href="/cliente/estudiantes">Agregar</a>
                                            </div>

                                        </div>
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
export default {
    data(){
        return{
            students_quantity:0,
            credits_available:{}
        }
    },
    mounted(){
        this.getStudentsQuantity();
        this.getCreditsQuantity();
    },
    methods: {
         getStudentsQuantity()
        {
            axios.get(`/api/customer/student`)
                .then((response) => {

                this.students_quantity=response.data.length;

                })
                .catch((error) => {
                console.log(error);
                toastr.error("Error al obtener datos. Por favor comuniquese con un administrador");
                });
        },
        getCreditsQuantity()
        {
            axios.get(`/api/customer/credit/available`)
                .then((response) => {

                this.credits_available=response.data;

                })
                .catch((error) => {
                console.log(error);
                toastr.error("Error al obtener datos. Por favor comuniquese con un administrador");
                });
        },
    }
}
</script>
<style scoped>
.card{padding: 20px;}
*{font-family: "Century Gothic";}
.div-available-credits{display: flex;flex-direction: column;justify-content: space-between;align-items: center;}
.div-available-credits>div{width:100%;display: flex;flex-direction: row;justify-content: center;align-items: center;}
.div-available-credits>div>span{font-weight: 800;font-size: 2.5em;}
.div-available-credits>div>small{font-size: 1em;margin-top:5px;}
.div-available-credits>div>img{margin-right: 10px;}
.div-available-credits>div>a{margin-top:20px;}
.card-title{font-weight: 800;}
.font-size-1-8-em{font-size: 1.8em !important;}
.div-plan-information{display: flex;flex-direction: row;justify-content: space-between;}






</style>
