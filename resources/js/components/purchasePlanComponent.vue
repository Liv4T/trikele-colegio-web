<template>
<div class="container">

<div class="row justify-content-center  fondo-amarillo">
      <div class="col-md-4 margin-top-100">
        <div class="card text-center">
          <div class="div-plan-icon">
            <img
              class="section3I"
              src="/images/Botonplan1.png"
              alt="boton plan 1"
            />
          </div>
          <div class="row">
            <div class="col-12 text-center">
              <h4>PLAN ANUAL</h4>
            </div>
          </div>
          <div class="row height-50 margin-top-50">
            <div class="col-12 text-center">
              <span class="border-bottom-1 padding-10">Aprender por grado</span>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
             <p class="text-justify padding-10">Paga 9 meses y estudia un año</p>
            </div>
          </div>
          <div class="row plan-height">
            <div class="col-12">
              <ul>
               <li>Acceso a todas las materia</li>
                <li>Acceso ilimitado a todos los módulos</li>
                <li>Actividades lúdicas</li>
              </ul>
               <h6 class="text-center">Desde</h6>
             <span>
                <strike>$2.699.100</strike>
                <strong>$1.799.100</strong>
              </span>
            </div>
          </div>

          <div class="row padding-10">
            <div class="col-12">
              <button @click="SelectPlanEvent('ANUAL')"   class="btn btn-Azul">Comprar</button>
            </div>
          </div>
          <div class="row padding-20">
                <div class="col-12">

                </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 margin-top-100">
        <div class="card text-center">
          <div class="div-plan-icon fondoplan">
            <img
              class="section3I"
              src="/images/Botonplan2.png"
              alt="boton plan 1"
            />
          </div>
          <div class="row">
            <div class="col-12 text-center">
              <h4>PLAN MENSUAL</h4>
            </div>
          </div>
          <div class="row height-50 margin-top-50">
            <div class="col-12 text-center">
              <span class="border-bottom-1 padding-10">Aprender por grado</span>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <p class="text-justify padding-10">Disfruta de todos las materias y módulos aprendiendo a tu ritmo</p>
            </div>
          </div>
          <div class="row plan-height">
            <div class="col-12">
              <ul>
                <li>Acceso a todas las materia</li>
                <li>Acceso ilimitado a todos los módulos</li>
                <li>Actividades lúdicas</li>
              </ul>
               <h6 class="text-center">Desde</h6>
             <span>
                <strike>$299.900</strike>
                <strong>$199.900</strong>
              </span>
            </div>

          </div>

          <div class="row padding-10">
            <div class="col-12">
                <button @click="SelectPlanEvent('MENSUAL')"   class="btn btn-Azul">Comprar</button>
            </div>
          </div>
           <div class="row padding-20">
                <div class="col-12">

                </div>
          </div>
        </div>
      </div>

  </div>
</div>

</template>
<script>
export default {
    props:['voucher'],
    data() {
        return {

        };
    },
     mounted(){

     },
     methods:{
         SelectPlanEvent(plan_type){

            if(this.voucher)
            {
                location.href=`/compra/plan/${plan_type}/resumen/v/${this.voucher}`;
            }
            else
            {
                location.href=`/compra/plan/${plan_type}/resumen`;
            }

        }
    }
}
</script>
<style>
.margin-top-100{margin-top:100px;}
.border-bottom-1{border-bottom:1px solid #818181;}
.div-plan-icon{border-radius:50px;width:100px;height:100px;position:relative;top:-50px;margin:auto;}
card{display:flex;justify-content:center; }
p{font-family: "Century Gothic";font-size:1.2em;}
span{font-family: "Century Gothic";font-size:1.2em;}
ul>li{font-family: "Century Gothic";text-align:left;}
.plan-height{height:200px;}
</style>
