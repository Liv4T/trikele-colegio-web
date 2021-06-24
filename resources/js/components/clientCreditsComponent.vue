<template>
   <div>
        <div class="container">
             <div class="row">
                <div class="col-md-11 mx-auto">
                     <div class="row">
                         <div class="col-12 col-md-9">
                              <div class="row">
                                   <div class="col-12">
                                        <h5 class="card-title">Módulos de aprendizaje</h5>
                                   </div>
                              </div>
                               <div class="row">
                                   <div class="col-12">
                                        <div class="card">
                                            <div class="card-body">
                                              <div class="row justify-content-end">
                                                <div class="col-6">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" placeholder="Buscar" v-model="query">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text" id="basic-addon1">
                                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                                                            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                                                            </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                              </div>
                                            <div class="row">
                                                <div class="col-12">
                                                    <div id="accordion">
                                                    <template  v-for="(area,area_id) in classrooms">
                                                        <div class="card" v-if="query=='' || filterQuery(area.text)" v-bind:key="area_id">
                                                            <div class="card-header" id="headingOne">
                                                            <h5 class="mb-0">
                                                                <a class="btn btn-collapsed" @click="GetWeeklyPlan(area.id,area.id_classroom)" data-toggle="collapse" :data-target="'#area_'+area_id" aria-expanded="false" :aria-controls="'area_'+area_id">
                                                                    {{area.text}}
                                                                </a>
                                                            </h5>
                                                            </div>
                                                            <div :id="'area_'+area_id" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                                            <div class="card-body">
                                                                <div class="row" v-for="(weekly_plan,wp_id) in weekly_plans" v-bind:key="wp_id">
                                                                    <div class="col-12">
                                                                        <div class="card">
                                                                            <div class="card-body div-weekly-plan">
                                                                                <div class="text-left">
                                                                                    <span>{{weekly_plan.text}}</span>
                                                                                    <a :href="'/modulo_clases/'+weekly_plan.id">Más información</a>
                                                                                </div>
                                                                                <div class="text-center">
                                                                                    <span>{{weekly_plan.credits_quantity}}</span>
                                                                                    <small>Créditos</small>
                                                                                </div>
                                                                                <button class="btn btn-Azul" @click="RedemptionCreditsEvent(weekly_plan,area)" :disabled="credits_available.available_credits<weekly_plan.credits_quantity">Redimir</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </template>

                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                   </div>
                              </div>


                         </div>
                         <div class="col-12 col-md-3">
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
            <!-- Modal -->
        <div class="modal fade" id="redemption-credits" tabindex="-1" role="dialog"   aria-hidden="true">
            <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" >Redimir créditos</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                    <p>Se activará el módulo de <span class="span-area">{{redemption.area.text}}:</span> <b> {{redemption.weekly_plan.text}}</b> y tendrá una vigencia de <b>1 año</b> de acceso al módulo.</p>
                    <br>
                    <h6>CRÉDITOS A REDIMIR: <b>{{redemption.weekly_plan.credits_quantity}}</b></h6>
                    <br>
                    <form  class="needs-validation" onsubmit="return false">
                        <div class="form-group">
                            <label>Por favor seleccione un estudiante:</label>
                            <select class="form-control" v-model="redemption.student">
                                <option v-for="(student,student_id) in students" v-bind:key="student_id" v-bind:value="student">{{student.name}} {{student.last_name}}</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-Azul" :disabled="!redemption.student" v-if="!events.redemption_loading" @click="RedemptionConfirmEvent()" >Redimir</button>
                <button type="button" class="btn btn-Azul" disabled v-if="events.redemption_loading">Ejecutando...</button>
                </div>
            </div>
            </div>
        </div>
        <!--End  Modal -->
    </div>
</template>
<script>

export default {

    data(){
        return{
            student_selected:{},
            classrooms:[],
            students_quantity:0,
            weekly_plans:[],
            credits_available:{},
            students:[],
            events:{
                redemption_loading:false
            },
            redemption:{
                student:null,
                weekly_plan:{},
                area:{}
            },
            query:''
        }
    },
    mounted(){
        this.getClassRooms();//get all
        this.getStudentsQuantity();
        this.getCreditsQuantity();
    },
     methods: {

        filterQuery: function(area_name){
            return area_name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
        },

      getClassRooms()
      {
         axios.get(`/GetArearByUser`)
            .then((response) => {

               this.classrooms=response.data;

            })
            .catch((error) => {
              console.log(error);
              toastr.error("Error al obtener datos. Por favor comuniquese con un administrador");
            });
      },
      getStudentsQuantity()
      {
           axios.get(`/api/customer/student`)
            .then((response) => {

               this.students=response.data;
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
      GetWeeklyPlan(area_id,classroom_id)
        {
                this.weekly_plans=[];
            axios.get(`/viewGetWeek/${area_id}/${classroom_id}`)
                .then((response) => {

                this.weekly_plans=response.data;

                })
                .catch((error) => {
                console.log(error);
                toastr.error("Error al obtener datos. Por favor comuniquese con un administrador");
                });
        },
        RedemptionCreditsEvent(weekly_plan,area){
            this.redemption.weekly_plan=weekly_plan;
            this.redemption.area=area;
            $('#redemption-credits').modal("show");
        },
        RedemptionConfirmEvent(){
            console.log(this.redemption);
             this.events.redemption_loading=true;

            let modelIn={
                 student_id:this.redemption.student.user_id,
                 weekly_plan_id:this.redemption.weekly_plan.id
             };

             axios.post(`/api/customer/credit/redemption`,modelIn).then((response) => {
                 this.events.redemption_loading=false;
                  toastr.success("Creditos redimidos correctamente");
                  this.getCreditsQuantity();
                  $('#redemption-credits').modal("hide");
                },(error)=>{
                    console.log(error);
                    this.events.redemption_loading=false;
                    toastr.error("Error al obtener datos. Por favor comuniquese con un administrador");
                });

        }
    }
}
</script>
<style scoped>
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
.div-weekly-plan{display:flex;flex-direction:row;align-items:center;    justify-content:space-between;}
.div-weekly-plan>div{display: flex;flex-direction: column;justify-content: space-between;}
.div-weekly-plan>div>span{font-weight: 600;font-size: 1.1em;}
.div-weekly-plan>div>a{color:#0056b3}
.span-area{color:#455c9b;font-weight: bold;}
</style>
