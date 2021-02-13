<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">Mis alumnos</h3>
          <div class="card-body">
            <div class="accordion" id="accordionExample">
              <div class="card" v-for="(plan,t) in planification" :key="t">
                <div class="card-header">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      :data-target="'#collapse'+t"
                      aria-expanded="false"
                      @click.prevent="getPlanificationEvent(plan.id_planification)"
                      aria-controls="collapse"
                    >
                      <label>{{ plan.lective.name }} Trimestre {{plan.period_consecutive}}</label>
                    </button>
                  </h2>
                </div>
                <div
                  :id="'collapse'+t"
                  class="collapse hide accordion-content"
                  aria-labelledby="heading"
                  data-parent="#accordionExample">
                        <div class="div-btn-add-students">
                            <button class="btn btn-warning" type="button"  v-on:click.prevent="showAddUser()">Agregar estudiante</button>
                        </div>
                        <div>
                            <table class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                  <th scope="col">N°</th>
                                  <th scope="col"></th>
                                  <th scope="col">Identificación</th>
                                  <th scope="col">Nombre</th>
                                  <th scope="col">Grupo</th>
                                  <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(student,student_key) in students" >
                                    <td>{{student_key+1}}</td>
                                    <td><img v-bind:src="student.picture" alt="icon" style="width:30px" /></td>
                                    <td>{{student.identification}}</td>
                                    <td>{{student.name}} {{student.last_name}}</td>
                                    <td>{{student.grade}}</td>
                                    <td><a  v-on:click.prevent="showRemoveUser(student)" ><i class="fa fa-trash" alt="Remover estudiante"></i></a></td>
                                </tr>
                               
                          
                            </tbody>
                        </table>
                    </div>
                     
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="modal fade" id="addUserModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="card">
              <h3 class="card-header fondo text-center">
                Agragar Alumno
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </h3>
              <div class="card-body">
                <div class="div-search-student">
                    <input type="text" class="form-control" placeholder="Buscar alumno"  v-model="search_student" />
                    <button class="btn btn-warning" v-on:click.prevent="searchEvent()"><i class="fa fa-search"></i></button>
                </div>
                <div class="div-finded-student">
                    <table class="table table-hover">
                        <tbody>
                            <tr class="tr-searched-student" v-for="item in students_finded"  v-on:click.prevent="selectedStudentEvent(item.id_user)">
                                <td> <i v-if="item.selected" class="fa fa-check"></i></td>
                                <td>{{item.name}} {{item.last_name}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <span v-if="finded_empty">(No hay estudiantes)</span>
                </div>
                <div class="div-btnadd-student">
                         <button v-if="students_finded.length>0"   class="btn btn-warning" v-on:click.prevent="addUsersEvent()">Agregar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div class="modal fade" id="removeUserModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="card">
              <h3 class="card-header fondo text-center">
                Remover Alumno
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </h3>
              <div class="card-body">
                <p>Confirma que desea remover el estudiante {{student_selected.name}}?</p>
                <div class="div-btnadd-student">
                   <button class="btn btn-warning" v-on:click.prevent="removeUsersEvent()">Confirmar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
     
</template>
<script>
$(".collapse").on("show.bs.collapse", function () {
  $(".collapse.in").collapse("hide");
});

export default {
  data() {
    return {
      students: [],
      planification: [],
      search_student:'',
      students_finded:[],
      finded_empty:false,
      id_lective_planification:0,
      student_selected:{}
    };
  },

  mounted() {
    axios.get("/api/lectives").then((response) => {
      this.planification = response.data;
    });
  },
  methods: {
    showAddUser(){
           this.students_finded=[];
        $("#addUserModal").modal("show");
    },
    showRemoveUser(user){
        this.student_selected=user;
        $("#removeUserModal").modal("show");
    },
    addUsersEvent()
    {
        let selected_students=this.students_finded.filter(p=>p.selected==1);

        axios.put(`/api/lectives/planification/${this.id_lective_planification}/student`,selected_students).then((response) => {
                $("#addUserModal").modal("hide");
                this.getPlanificationEvent(this.id_lective_planification);
                toastr.success("Estudiante agregado correctamente");
        });
    },
    removeUsersEvent()
    {
      
        axios.delete(`/api/lectives/planification/${this.id_lective_planification}/student/${this.student_selected.id_user}`).then((response) => {
                $("#removeUserModal").modal("hide");
                this.student_selected={};
                this.getPlanificationEvent(this.id_lective_planification);
                toastr.success("Estudiante removido correctamente");
        });
    },
    searchEvent(){
      this.students_finded=[];
      this.finded_empty=false;
      axios.get(`/api/lectives/student/find/${this.search_student}`).then((response) => {
        this.students_finded = response.data;

        if(this.students_finded.length==0)
        {
            this.finded_empty=true;
        }

      });
    },
    getPlanificationEvent(id_lective_planification) {

        this.id_lective_planification=id_lective_planification;
      axios.get(`/api/lectives/planification/${id_lective_planification}/student`).then((response) => {
        this.students = response.data;
      });

    },
    selectedStudentEvent(id_user)
    {
        let index=this.students_finded.findIndex(i=>i.id_user==id_user);
        this.students_finded[index].selected=this.students_finded[index].selected==1?0:1;
    }
  },
};
</script>
<style>
.collapse-row.collapsed + tr {
  display: none;
}
.btn.skool {
  background-color: #c1e9eb;
  color: white;
}
.div-search-student{
    display:flex;
    flex-direction:row;
    justify-content:center;
}
.div-btn-add-students {
    padding:10px;
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
}
.tr-searched-student{
    cursor:pointer;
}
</style>
