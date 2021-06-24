<template>
   <div>
        <div class="container">
             <div class="row">
                <div class="col-md-11 mx-auto">
                     <div class="row">
                         <div class="col-12">
                              <div class="row">
                                   <div class="col-12">
                                        <h5 class="card-title">Planes comprados</h5>
                                   </div>
                              </div>
                               <div class="row" v-for="(plan,i_plan) in redemption.plans" v-bind:key="i_plan">
                                   <div class="col-12">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="row margin-bottom-10">
                                                     <div class="col-12  col-md-10">
                                                        <h4>{{plan.plan_name}}</h4>
                                                        <span class="payment-validation" v-if="plan.status!=2 && !plan.available">(Validando pago)</span>
                                                     </div>

                                                     <div class="col-12 col-md-2">
                                                         <span>Duración: {{plan.duration}} días</span>
                                                     </div>
                                                </div>
                                                <div class="row" v-if="plan.available">
                                                    <div class="col-12 col-md-4" >
                                                        <template  v-for="(student,i_student) in plan.students">
                                                            <div style="display:flex;flex-direction:column;" v-bind:key="i_student">
                                                                    <label>Asignar estudiante {{i_student+1}}:</label>
                                                                    <div style="display:flex;flex-direction:row;justify-content:space-between" v-if="students.length>0">
                                                                        <select   class="form-control" style="max-width:200px" v-model="redemption.plans[i_plan].students[i_student]">
                                                                            <option v-for="(student,student_id) in students" v-bind:key="student_id" v-bind:value="student">{{student.name}} {{student.last_name}}</option>
                                                                        </select>
                                                                        <button  class="btn btn-Azul btn-sm"  @click="SetStudentEvent(i_plan,i_student)">Asignar</button>
                                                                    </div>
                                                                    <div  v-if="students.length==0">
                                                                        <a href="/cliente/estudiantes" class="btn btn-Azul">Crear estudiante</a>
                                                                    </div>
                                                            </div>
                                                        </template>

                                                        <br>
                                                        <a v-if="plan.students.length==0" class="btn btn-Azul btn-sm" style="max-width:100px" href="/cliente/estudiantes">Agregar</a>
                                                     </div>
                                                 </div>
                                                 <div class="row" v-if="!plan.available">
                                                    <div class="col-12 col-sm-4" >
                                                        <b>Estudiante:</b>
                                                        <p>{{plan.student.name}} {{plan.student.last_name}}</p>
                                                    </div>
                                                     <div class="col-12 col-sm-4" >
                                                        <b>Fecha vigencia inicial:</b>
                                                        <p>{{plan.initial_date}}</p>
                                                    </div>
                                                     <div class="col-12 col-sm-4" >
                                                        <b>Fecha vigencia vencimiento:</b>
                                                        <p>{{plan.expire_date}}</p>
                                                    </div>
                                                 </div>

                                            </div>
                                        </div>
                                   </div>
                              </div>
                               <div class="row">
                                   <div class="col-12">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="div-plan-information">
                                                  <a class="btn btn-Azul" href="/compra/plan">Comprar plan</a>
                                                    <!-- <img width="40px"  src="/images/Botonplan1.png" alt="plan 1" />
                                                     <h6>PLAN ANNUAL</h6>-->
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
        <div class="modal fade" id="redemption-plans" tabindex="-1" role="dialog"   aria-hidden="true">
            <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" >Asignar estudiante a plan</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                    <p>Se activará <span class="span-area">{{redemption.current_plan.plan.plan_name}}</span> durante los próximos <b>{{redemption.current_plan.plan.duration}} días</b> para el estudiante <b>{{redemption.current_plan.student.name}} {{redemption.current_plan.student.last_name}}</b>.</p>
                    <br>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-Azul"  v-if="!events.redemption_loading" @click="RedemptionConfirmEvent()" >Confirmar</button>
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
            plans:[],
            students:[],
            redemption:{
                current_plan:{
                    student:{},
                    plan:{}
                },
                plans:[]
            },
            events:{
                redemption_loading:false
            }
        }
    },
     mounted(){
        this.getCurrentPlans();
        this.getStudents();
    },
    methods: {
        getCurrentPlans()
        {
            axios.get(`/api/customer/plan`)
                .then((response) => {

                    this.plans=response.data;
                    this.setRedemption();

                },(error)=>{
                      console.log(error);
                    toastr.error("Error al obtener datos. Por favor comuniquese con un administrador");
                });
        },
        getStudents()
        {
            axios.get(`/api/customer/student`)
                .then((response) => {
                    this.students=response.data;
                },(error)=>{
                      console.log(error);
                    toastr.error("Error al obtener datos. Por favor comuniquese con un administrador");
                });
        },
        setRedemption()
        {
            this.redemption={
                current_plan:{
                    student:{},
                    plan:{}
                },
                plans:[]
            };

            for (let i = 0; i < this.plans.length; i++) {
                const plan = this.plans[i];

                let students=[];

                for (let s_i = 0; s_i < plan.quantity; s_i++) {
                    students.push(null);
                }

                this.redemption.plans[i]={...plan,students:students};

            }


        },
        SetStudentEvent(i_plan,i_student)
        {
            if(!this.redemption.plans[i_plan].students[i_student]){
                toastr.error("Por favor seleccione un estudiante");
                return;
            }

            this.redemption.current_plan={
                student:this.redemption.plans[i_plan].students[i_student],
                plan:this.redemption.plans[i_plan]
            };
            $('#redemption-plans').modal("show");

        },
        RedemptionConfirmEvent()
        {
            this.events.redemption_loading=true;
            let modelIn={
                 student_id:this.redemption.current_plan.student.user_id,
                 invoice_item_id:this.redemption.current_plan.plan.invoice_item_id
             };



             axios.post(`/api/customer/plan`,modelIn).then((response) => {
                 this.events.redemption_loading=false;
                  toastr.success("Plan asignado correctamente");
                  $('#redemption-plans').modal("hide");
                  this.getCurrentPlans();
                },(error)=>{
                    console.log(error);
                    this.events.redemption_loading=false;
                    toastr.error("Error al obtener datos. Por favor comuniquese con un administrador");
                });
        },
        CloseModal()
        {
            console.log('c');
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
.payment-validation{padding:5px;background-color:rgb(255, 236, 151);font-size: 1.1em;}
</style>
