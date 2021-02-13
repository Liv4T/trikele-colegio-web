<template>
<div>
  <head>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/solid.css"
      integrity="sha384-ioUrHig76ITq4aEJ67dHzTvqjsAP/7IzgwE7lgJcg2r7BRNGYSK0LwSmROzYtgzs"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/brands.css"
      integrity="sha384-i2PyM6FMpVnxjRPi0KW/xIS7hkeSznkllv+Hx/MtYDaHA5VcF0yL3KVlvzp8bWjQ"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/fontawesome.css"
      integrity="sha384-sri+NftO+0hcisDKgr287Y/1LVnInHJ1l+XC7+FOabmTTIK0HnE2ID+xxvJ21c5J"
      crossorigin="anonymous"
    />
  </head>
  <div class="back">
    <div class="row">
      <div class="col-md-11 mx-auto">
        <div class="custom-card text-center">
          <h3 class="card-header fondo">Duplicar planificación</h3>
        </div>
      </div>
    </div>
    <!-- START CONTENT -->
    <div class="row margin-top-20"> 
        <div class="col-md-10 mx-auto">
          <div class="card">
            <h5 class="card-header">Copiar desde:</h5>
            <div class="card-body">
                <div class="row margin-top-20">

                  <div class="col-6">
                    <label>Curso:</label>
                    <select class="form-control" @change="onChangeAreaFrom($event)" v-model="fromData.area">
                      <option value="null">-- Seleccione --</option>
                      <option  v-for="(area, k_a) in my_areas" :key="k_a" v-bind:value="area" >{{ area.text }}</option>
                    </select>
                  </div>

              
                </div>
                <!--
                <div class="row margin-top-20">

                  <div class="col-4">
                    <label>Planeación anual:</label>
                    <select class="form-control" v-model="fromData.annual_planning" @change="onChangePlanFrom($event)" :disabled="fromData.area=='null'">
                      <option value="null">- Nada -</option>
                      <option value="all">- Todo el contenido -</option>
                      <option value="one">- Selección -</option>
                      <option  v-for="(annual_plan, k_p) in annual_planning" :key="k_p" v-bind:value="annual_plan" >{{ annual_plan.achievement }} ({{ annual_plan.percentage }} %)</option>
                    </select>
                  </div>

                  <div class="col-4">
                    <label>Planeación trimestral:</label>
                    <select class="form-control" v-model="fromData.quarterly_planning" :disabled="fromData.annual_planning=='null'||fromData.annual_planning=='all'">
                      <option value="null">- Nada -</option>
                      <option value="all">- Todo el contenido -</option>
                      <option  v-for="(quarterly_plan, k_y) in quarterly_planning" :key="k_y" >{{ quarterly_plan.content }}</option>
                    </select>
                  </div>

                  <div class="col-4">
                    <label>Porcentaje de notas:</label>
                    <select class="form-control" v-model="fromData.percent_planning" :disabled="fromData.annual_planning=='null'||fromData.annual_planning=='all'">
                      <option value="null">- Nada -</option>
                      <option value="all" >- Todos los porcentajes -</option>
                      <option  v-for="(annual_plan, k_p) in annual_planning" :key="k_p" v-bind:value="annual_plan" >{{ annual_plan.achievement }} ({{ annual_plan.percentage }} %)</option>
                    </select>
                  </div>

                

                </div>
                -->
                <div class="row margin-top-20">

                   <div class="col-4">
                    <label>Ciclo:</label>
                    <select class="form-control"  v-model="fromData.weekly_planning" @change="onChangeWeerklyPlanFrom($event)" :disabled="fromData.area=='null'">
                      <option value="null">- Nada -</option>
                      <option  v-for="(weekly_plan, k_w) in weekly_planning" :key="k_w" v-bind:value="weekly_plan"  >{{ weekly_plan.text }}</option>
                    </select>
                  </div>

                  <div class="col-4">
                    <label>Clases:</label>
                    <select class="form-control" v-model="fromData.class_planning" :disabled="fromData.weekly_planning=='null'|| fromData.weekly_planning=='all'">
                      <option value="null">- Nada -</option>
                      <option value="all">- Todas las clases -</option>
                      <option  v-for="(class_plan, k_c) in class_planning" :key="k_c" v-bind:value="class_plan"  >{{ class_plan.name }}</option>
                    </select>
                  </div>


              
                </div>
            </div>
          </div>
        </div>
    </div>
    <div class="row margin-top-20"> 
        <div class="col-md-10 mx-auto">
          <div class="card">
            <h5 class="card-header">Copiar a:</h5>
             <div class="card-body">
                <div class="row margin-top-20">

                  <div class="col-6">
                    <label>Curso:</label>
                    <select class="form-control"  @change="onChangeAreaTo($event)"  :disabled="fromData.weekly_planning=='null'" v-model="toData.area" >
                      <option value="null">-- Seleccione --</option>
                      <option v-if="area!=fromData.area"  v-for="(area, k_a) in my_areas" :key="k_a"  v-bind:value="area" >{{ area.text }}</option>
                    </select>
                  </div>

              
                </div>

                <!--
                <div class="row margin-top-20">

                  <div class="col-4">
                    <label>Planeación anual:</label>
                    <select class="form-control"  @change="onChangePlanTo($event)"  :disabled="fromData.annual_planning=='null'|| fromData.annual_planning=='all'" v-model="toData.annual_planning">
                      <option value="null">- {{(fromData.annual_planning=='null'||fromData.annual_planning=='all')?'No aplica':'Seleccione'}} -</option>
                      <option value="new" v-if="fromData.annual_planning!='one'">- Nuevo -</option>
                      <option  v-for="(annual_plan, k_p) in to_annual_planning" :key="k_p" v-bind:value="annual_plan" >{{ annual_plan.achievement }} ({{ annual_plan.percentage }} %)</option>
                    </select>
                  </div>

                  <div class="col-4">
                    <label>Planeación trimestral:</label>
                    <select class="form-control" :disabled="fromData.quarterly_planning=='null'||fromData.quarterly_planning=='all'">
                      <option value="null">- {{(fromData.quarterly_planning=='all'||fromData.quarterly_planning=='null')?'No aplica':'Seleccione'}} -</option>
                      <option value="new">- Nueva planeación -</option>
                      <option>logro 1</option>
                    </select>
                  </div>

                  <div class="col-4">
                    <label>Porcentaje de notas:</label>
                    <select class="form-control"  :disabled="fromData.percent_planning=='null'||fromData.percent_planning=='all'" v-model="toData.percent_planning">
                      <option value="null">- No aplica -</option>
                      <option value="new">- Nuevo porcentaje de notas -</option>
                      <option  v-for="(annual_plan, k_p) in to_annual_planning" :key="k_p" v-bind:value="annual_plan" >{{ annual_plan.achievement }} ({{ annual_plan.percentage }} %)</option>
                    </select>
                  </div>

                

                </div>
                -->

                <div class="row margin-top-20">

                   <div class="col-4">
                    <label>Ciclo:</label>
                    <select class="form-control" :disabled="toData.area=='null'" v-model="toData.weekly_planning" @change="onChangeWeerklyPlanTo($event)">
                      <option value="null">-  {{(fromData.weekly_planning=='all'||fromData.weekly_planning=='null')?'No aplica':'Seleccione'}} -</option>
                      <option value="new">- Nuevo ciclo -</option>
                        <option  v-for="(weekly_plan, k_w) in to_weekly_planning" :key="k_w" v-bind:value="weekly_plan"  >{{ weekly_plan.text }}</option>
                    </select>
                  </div>

                  <div class="col-4">
                    <label>Clases:</label>
                    <select class="form-control"  :disabled="toData.area=='null' ||  fromData.class_planning=='null'|| fromData.class_planning=='all' " v-model="toData.class_planning">
                     <option value="null">- {{ (fromData.class_planning!='null' && fromData.class_planning!='all')?'Seleccione':'No aplica' }} -</option>
                      <option value="new">- Nueva clase -</option>
                      <option  v-for="(class_plan, k_c) in to_class_planning" :key="k_c" v-bind:value="class_plan"  >{{ class_plan.name }}</option>
                    </select>
                  </div>


              
                </div>
            </div>
          </div>
        </div>
    </div>
    <div class="row margin-top-20"> 
        <div class="col-md-10 mx-auto text-right">
          <button class="btn btn-warning" 
          :disabled="fromData.area=='null' || toData.area=='null' || toData.weekly_planning=='null'" 
          @click="copyInformationEvent">Copiar información</button>
        </div>
    </div>
 
    <!-- END CONTENT -->
  </div>
</div>
</template>
<script>
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
$(function () {
  // Get the form fields and hidden div
  var checkbox = $("#gridCheck1");
  var hidden = $("#hidden_fields1");

  hidden.hide();

  checkbox.change(function () {
    if (checkbox.is(":checked")) {
      // Show the hidden fields.
      hidden.show();
    } else {
      hidden.hide();
    }
  });
});
import VueFormWizard from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
Vue.use(VueFormWizard);
export default {
  props: [],
  data() {
    return {
      inputs: [
        {
          name: "",
          contenido: "",
        },
      ],
      inputs1: [
        {
          logro: "",
          porcentaje: "",
        },
      ],
      newTrimestre: [],
      newLogro1: "",
      newLogro2: "",
      newLogro3: "",
      newLogro4: "",
      newTrimestre: [],
      newLogro: [],
      trimestre: false,
      logro_1: "",
      logro_2: "",
      logro_3: "",
      logro_4: "",
      fillC: [],
      anual: [],
      newAnual: [],
      materia: "",
      my_areas: [],
      annual_planning:[],
      quarterly_planning:[],
      weekly_planning:[],
      percent_planning:[],
      class_planning:[],
      to_annual_planning:[],
      to_quarterly_planning:[],
      to_weekly_planning:[],
      to_percent_planning:[],
      to_class_planning:[],
      errors: [],
      fromData:{
        area:'null',
        annual_planning:'null',
        quarterly_planning:'null',
        weekly_planning:'null',
        percent_planning:'null',
        class_planning:'null'
      },
      toData:{
        area:'null',
        annual_planning:'null',
        quarterly_planning:'null',
        weekly_planning:'null',
        percent_planning:'null',
        class_planning:'null'
      }
    };
  },
  mounted() {
    /*var urlsel =
      window.location.origin +
      "/coursePlanification/" +
      this.id_area +
      "/" +
      this.id_classroom;
    axios.get(urlsel).then((response) => {
      this.fillC = response.data;

      if (this.fillC.quaterly.length > 0) {
        this.trimestre = true;
      } else {
        this.trimestre = false;
      }
    });
    var url = window.location.origin + "/GetArearByUser";
    */ 
      axios.get("/GetArearByUser").then((response) => {
        this.my_areas = response.data;
        console.log(response.data);
      });
  },
  methods: {
    copyInformationEvent()
    {
      //
       axios.put("/api/planification/copy",{fromData:this.fromData,toData:this.toData}).then((response) => {
        toastr.success("Información duplicada correctamente");
        //location.href="/actividad_g";
      });
     
     // 

     console.log(this.fromData);
     console.log(this.toData);
    },
    onChangePlanTo($event){

    },
    onChangeAreaTo($event){
      axios.get(`/coursePlanification/${this.toData.area.id}/${this.toData.area.id_classroom}`).then((response) => {
        this.to_annual_planning=response.data.achievements;
        this.to_quarterly_planning=response.data.quaterly;
      });
       axios.get(`/editOneWeek/${this.toData.area.id}/${this.toData.area.id_classroom}`).then((response) => {
        this.to_weekly_planning=response.data;
      });
    },
    onChangeWeerklyPlanTo($event){

      if(this.toData.weekly_planning!='null' && this.toData.weekly_planning!='new')
      {
          axios.get(`/showClass/${this.toData.weekly_planning.id}`).then((response) => {
                this.to_class_planning=response.data.clase;
                console.log(this.to_class_planning);
          });
      }
      else{
        this.to_class_planning=[];
      }
     
    },
    onChangeWeerklyPlanFrom($event){

      if(this.fromData.weekly_planning!='null' && this.fromData.weekly_planning!='all')
      {
          axios.get(`/showClass/${this.fromData.weekly_planning.id}`).then((response) => {
                this.class_planning=response.data.clase;
          });
      }
      else{
        this.class_planning=[];
      }
     
    },
    onChangeAreaFrom($event){
      axios.get(`/coursePlanification/${this.fromData.area.id}/${this.fromData.area.id_classroom}`).then((response) => {
        this.annual_planning=response.data.achievements;
        this.quarterly_planning=response.data.quaterly;
      });
      axios.get(`/editOneWeek/${this.fromData.area.id}/${this.fromData.area.id_classroom}`).then((response) => {
        this.weekly_planning=response.data;
      });
    },
    onChangePlanFrom($event){
    
       
        
        

        if(this.fromData.annual_planning=='one')
        {
          this.fromData.percent_planning='null';
          this.fromData.quarterly_planning='null';
          this.fromData.weekly_planning='null';
          this.fromData.class_planning='null';
        }
        else if(this.fromData.annual_planning!='all' && this.fromData.annual_planning!='null')
        {
          this.fromData.percent_planning=this.fromData.annual_planning;
          this.fromData.quarterly_planning='all';
          this.fromData.weekly_planning='all';
          this.fromData.class_planning='all';
        }
        else if(this.fromData.annual_planning=='all')
        {
           this.fromData.percent_planning='all';
           this.fromData.quarterly_planning='all';
           this.fromData.weekly_planning='all';
          this.fromData.class_planning='all';
        }
        else if(this.fromData.annual_planning=='null')
        {
          this.fromData.percent_planning='null';
          this.fromData.quarterly_planning='null';
          this.fromData.weekly_planning='null';
          this.fromData.class_planning='null';

         


        }

         this.toData={
            area:'null',
            annual_planning:'null',
            quarterly_planning:'null',
            weekly_planning:'null',
            percent_planning:'null',
            class_planning:'null'
          };



    },
    getMenu() {
      window.location = "/actividad_g";
    },
    add(index) {
      this.inputs.push({ name: "", contenido: "" });
    },
    remove(index) {
      this.inputs.splice(index, 1);
    },
    add1(index) {
      this.inputs1.push({ logro: "", porcentaje: "" });
    },
    remove1(index) {
      this.inputs1.splice(index, 1);
    },
    duplicar(id) {
      this.fillC = [];
      var urlsel = window.location.origin + "/coursePlanification/" + id;
      axios.get(urlsel).then((response) => {
        this.fillC = response.data;
      });
    },

    createCourses() {
      this.newLogro = [];
      this.newTrimestre = [];
      var url = window.location.origin + "/Courses";

      if (this.fillC.quaterly.length >= 1) {
        for (let i = 0; i < this.fillC.quaterly.length; i++) {
          this.newTrimestre.push(this.fillC.quaterly[i]);
        }
      }
      if (this.fillC.achievements.length >= 1) {
        for (let i = 0; i < this.fillC.achievements.length; i++) {
          this.newLogro.push(this.fillC.achievements[i]);
        }
      }

      axios
        .post(url, {
          //Cursos generales
          id_area: this.id_area,
          id_classroom: this.id_classroom,
          logros: this.newLogro,
          trimestres: this.newTrimestre,
          duplicate: 1,
        })
        .then((response) => {
          this.errors = [];

          toastr.success("Nuevo plan general creado exitosamente");
          this.getMenu();
        })
        .catch((error) => {
          this.errors = error.response.data;
        });
    },
    updateCourses() {
      window.location = "/actividad_g";
    },
    editNames(clas) {
      //   var urlr = "showClass/" + clas;
      //   axios.get(urlr).then(response => {
      //     this.fillS = response.data;
      //   });
      $("#createZ").modal("show");
    },
  },
};
</script>
<style>
.margin-top-20{
  margin-top:20px;
}
</style>
