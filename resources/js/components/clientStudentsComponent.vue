<template>
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-md-11 mx-auto">
         <div class="card">
          <h3 class="card-header fondo">
            Registro de estudiantes
          </h3>
           <div class="card-body">
              <div class="row">
                <div class="col-12 padding-10" >
                  <button type="button" class="btn btn-Azul" @click="showCreateStudent">Agregar</button>
                </div>
              </div>
              <div class="row">
                <div class="col-12">

                  <table v-if="display_dimension>800" class="table table-hover table-bordered">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col">Correo</th>
                        <th scope="col">Usuario</th>
                        <th scope="col">Nombre y apellido</th>
                        <!--<th scope="col">Contraseña</th>-->
                        <th scope="col">Estado</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(student,student_id) in students" v-bind:key="student_id">
                        <th>{{student.email}}</th>
                        <td>{{student.user_name}}</td>
                        <td>{{student.name}} {{student.last_name}}</td>
                        <!--<td><button class="btn btn-outline-primary btn-sm">Cambiar contraseña</button></td>-->
                        <td>
                            <button v-if="student.state==1" class="btn btn-outline-danger btn-sm" @click="updateState(0, student.user_id)">Inactivar</button>
                            <button v-if="student.state==0" class="btn btn-outline-success btn-sm" @click="updateState(1, student.user_id)">Activar</button>
                        </td>
                        <td class="text-center">
                          <button type="button" class="btn btn-outline-primary btn-sm" @click="showEditStudent(student)">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>                             <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>                           </svg>
                          </button>
                          <button type="button" class="btn btn-outline-primary btn-sm" @click="showDeleteStudent(student)">
                              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div v-if="display_dimension<=800">
                    <div class="row"  v-for="(student,student_id) in students" v-bind:key="student_id">
                     <div class="col-12">
                       <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">{{student.name}} {{student.last_name}}</h5>
                          <h6 class="card-subtitle mb-2 text-muted">{{student.user_name}} - {{student.email}}</h6>
                            <button v-if="student.state==1" class="btn btn-outline-danger btn-sm" @click="updateState(0, student.user_id)">Inactivar</button>
                            <button v-if="student.state==0" class="btn btn-outline-success btn-sm" @click="updateState(1, student.user_id)">Activar</button>
                            <button type="button" class="btn btn-outline-primary btn-sm" @click="showEditStudent(student)">
                              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>                             <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>                           </svg>
                            </button>
                            <button type="button" class="btn btn-outline-primary btn-sm" @click="showDeleteStudent(student)">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>
                            </button>
                        </div>
                      </div>

                     </div>
                   </div>
                  </div>


                </div>
              </div>
           </div><!-- card-body -->

        </div>
      </div>
    </div>

  <!-- Modal -->
  <div class="modal fade" id="edit-student" tabindex="-1" role="dialog"   aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{student_edit.user_id?'Edición estudiante':'Creación estudiante'}}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form  class="needs-validation" onsubmit="return false">
                <div class="form-group">
                   <label><small class="label-required">*</small>Usuario</label>
                    <input type="text" class="form-control" v-model="student_edit.user_name">
                    <small v-if="!student_edit.user_name && form_errors.student_edit.user_name" class="form-text text-error">{{form_errors.student_edit.user_name}}</small>
                </div>
                <div class="form-group" v-if="!student_edit.user_id">
                   <label><small class="label-required">*</small>Contraseña</label>
                    <input type="password" class="form-control"  v-model="student_edit.password">
                    <small v-if="!student_edit.password && form_errors.student_edit.password" class="form-text text-error">{{form_errors.student_edit.password}}</small>
                </div>
                <div class="form-group" v-if="!student_edit.user_id">
                    <label><small class="label-required">*</small>Confirmar contraseña</label>
                    <input type="password" class="form-control"  v-model="student_edit.password_confirm">
                    <small v-if="student_edit.password_confirm && student_edit.password_confirm!=student_edit.password" class="form-text text-error">Contraseñas deben ser iguales</small>
                </div>
                <div class="form-group">
                    <label><small class="label-required">*</small>Tipo identificación</label>
                    <select class="form-control" v-model="student_edit.document_type_id">
                         <option v-for="(doc_type,doc_type_id) in document_types" v-bind:key="doc_type_id" v-bind:value="doc_type.id">{{doc_type.shortname}} {{doc_type.name}}</option>
                    </select>
                    <small v-if="!student_edit.document_type_id && form_errors.student_edit.document_type_id" class="form-text text-error">{{form_errors.student_edit.document_type_id}}</small>
                </div>
                <div class="form-group">
                    <label><small class="label-required">*</small>Identificación</label>
                    <input type="text" class="form-control" v-model="student_edit.identification">
                    <small v-if="!student_edit.identification && form_errors.student_edit.identification" class="form-text text-error">{{form_errors.student_edit.identification}}</small>
                </div>
                <div class="form-group">
                    <label><small class="label-required">*</small>Nombres</label>
                    <input type="text" class="form-control" v-model="student_edit.name">
                    <small v-if="!student_edit.name && form_errors.student_edit.name" class="form-text text-error">{{form_errors.student_edit.name}}</small>
                </div>
                <div class="form-group">
                    <label><small class="label-required">*</small>Apellidos</label>
                    <input type="text" class="form-control" v-model="student_edit.last_name" >
                    <small v-if="!student_edit.last_name && form_errors.student_edit.last_name" class="form-text text-error">{{form_errors.student_edit.last_name}}</small>
                </div>
                <div class="form-group">
                    <label><small class="label-required">*</small>Número celular</label>
                    <input type="number" class="form-control" v-model="student_edit.phone" >
                    <small v-if="student_edit.cellphone && !validCellphone(student_edit.phone)" class="form-text text-error">Número de celular inválido</small>
                    <small v-if="!student_edit.phone && form_errors.student_edit.phone" class="form-text text-error">{{form_errors.student_edit.phone}}</small>
                </div>
                <div class="form-group">
                    <label><small class="label-required">*</small>Correo electrónico</label>
                    <input type="email" class="form-control"  v-model="student_edit.email"  >
                    <small v-if="student_edit.email && !validEmail(student_edit.email)" class="form-text text-error">Correo inválido</small>
                    <small v-if="!student_edit.email && form_errors.student_edit.email" class="form-text text-error">{{form_errors.student_edit.email}}</small>
                </div>

          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-Azul" v-if="!events.save_loading" @click="saveStudent">Guardar</button>
          <button type="button" class="btn btn-Azul" disabled v-if="events.save_loading">Ejecutando...</button>
        </div>
      </div>
    </div>
  </div>
  <!--End  Modal -->
    <!-- Modal -->
  <div class="modal fade" id="delete-student" tabindex="-1" role="dialog"   aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Confirmación para eliminar</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Desea eliminar el estudiante <b>{{student_edit.name}} {{student_edit.last_name}}</b>?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-Azul" v-if="!events.del_loading" @click="deleteStudent">Confirmar</button>
          <button type="button" class="btn btn-Azul" disabled v-if="events.del_loading">Ejecutando...</button>
        </div>
      </div>
    </div>
  </div>
  <!--End  Modal -->


  </div>


</template>
<script>
//VUE COMPONENT
export default {
  data() {
    return {
        api_customer_students:'/api/customer/student',
        students:[],
        document_types:[],
        student_edit:{
            user_name:'',
            password:'',
            password_confirm:'',
            document_type_id:1,
            identification:'',
            name:'',
            last_name:'',
            phone:'',
            email:'',
            politics_accepted:false,
            state:0
        },
        events:{
          del_loading:false,
          save_loading:false
        },

        form_errors:{
          student_edit:{}
        },
        display_dimension:0
    };
  },
 mounted(){
   this.getstudents();//get all
   this.getDocumentTypes();
   this.display_dimension=window.innerWidth;
 },
  methods: {
      initModel()
      {
           this.student_edit={
            user_name:'',
            password:'',
            password_confirm:'',
            document_type_id:1,
            identification:'',
            name:'',
            last_name:'',
            phone:'',
            email:'',
            politics_accepted:false,
            state:0
        };
      },
      getDocumentTypes()
      {
        axios.get(`/api/document-type`).then((response) => {
            this.document_types=response.data;
        });
      },
      getstudents()
      {
            axios.get(this.api_customer_students)
            .then((response) => {
                this.students=response.data;
            })
            .catch((error) => {
              console.log(error);
              toastr.error("Error al ejecutar la acción. Por favor comuniquese con un administrador");
            });
      },
      showCreateStudent()
      {
        this.initModel();
        $('#edit-student').modal("show");
      },
      showEditStudent(student)
      {

        this.student_edit=this.copyModel(student);
        $('#edit-student').modal("show");
      },
      showDeleteStudent(student)
      {
        this.student_edit=this.copyModel(student);
        $('#delete-student').modal("show");
      },

      deleteStudent()
      {
        this.events.del_loading=true;


         axios.delete(`${this.api_customer_students}/${this.student_edit.user_id}`)
            .then((response) => {
                //deleted OK
               this.events.del_loading=false;
               $('#delete-student').modal("hide");
               this.student_edit={state:0};
               toastr.success("Estudiante eliminado");
               this.getstudents();
            })
            .catch((error) => {
               if(error.response.data.message){
                    toastr.error(error.response.data.message);
              }
              else
              {
                    toastr.error("Error al ejecutar la acción. Por favor comuniquese con un administrador");
              }
              this.events.del_loading=false;
            });

      },
      saveStudent()
      {
        if(!this.validStudentForm()) return;

        this.events.save_loading=true;

        if(this.student_edit.user_id===undefined)
        {
          this.insertStudent();
        }
        else
        {
          this.updateStudent();
        }
      },
      updateStudent()
      {
          axios.put(`${this.api_customer_students}/${this.student_edit.user_id}`,this.student_edit)
            .then((response) => {
                //deleted OK
                 toastr.success("Estudiante actualizado");
               this.getstudents();
               this.events.save_loading=false;
               $('#edit-student').modal("hide");
               this.initModel();
            })
            .catch((error) => {
               if(error.response && error.response.data && error.response.data.message){
                    toastr.error(error.response.data.message);
              }
              else
              {
                    toastr.error("Error al ejecutar la acción. Por favor comuniquese con un administrador");
              }
              this.events.save_loading=false;
            });
      },
      insertStudent()
      {
         axios.post(this.api_customer_students,this.student_edit)
            .then((response) => {
                //deleted OK
                toastr.success("Estudiante registrado con exito");
               this.getstudents();
               this.events.save_loading=false;
               $('#edit-student').modal("hide");
               this.initModel();

            })
            .catch((error) => {
              if(error.response && error.response.data && error.response.data.message){
                    toastr.error(error.response.data.message);
              }
              else
              {
                    toastr.error("Error al ejecutar la acción. Por favor comuniquese con un administrador");
              }

              this.events.save_loading=false;
            });
      },
      copyModel(modelIn)
      {
        return JSON.parse(JSON.stringify(modelIn));
      },
      validStudentForm()
      {
        let valid=true;
        this.form_errors.student_edit={};

        /*
          user_name:'',
            password:'',
            password_confirm:'',
            document_type_id:1,
            identification:'',
            name:'',
            last_name:'',
            phone:'',
            email:'',
            politics_accepted:false,
            state:0

        */

        if (!this.student_edit.user_name) {
           this.form_errors.student_edit.user_name='Nombre de usuario es requerido.';
           valid=false;
        }


        if (!this.student_edit.password && !this.student_edit.user_id) {
           this.form_errors.student_edit.password='Contraseña es requerida.';
           valid=false;
        }


        if (!this.student_edit.identification) {
           this.form_errors.student_edit.identification='Identificación es requerida.';
           valid=false;
        }

        if (!this.student_edit.name) {
           this.form_errors.student_edit.name='Nombre es requerido.';
           valid=false;
        }

        if (!this.student_edit.last_name) {
           this.form_errors.student_edit.last_name='Apellido es requerido.';
           valid=false;
        }

        /* if (!this.student_edit.phone) {
           this.form_errors.student_edit.phone='Teléfono es requerido.';
           valid=false;
        }*/

        if (!this.student_edit.email) {
           this.form_errors.student_edit.email='Correo es requerido.';
           valid=false;
        }

        return valid;
      },
      validEmail: function (email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
      },
      validCellphone: function (cellphone) {
            var re = /^[3][1-2][0-9]*/;
            return re.test(cellphone) && cellphone.length==10;
      },
      updateState(state_id, student_id){
        axios.put(`/api/user/${student_id}/state`,{state:state_id})
            .then((response) => {
                //deleted OK
               toastr.success("Estudiante Cambio de estado");
               this.getstudents();
            })
            .catch((error) => {
               if(error.response.data.message){
                    toastr.error(error.response.data.message);
              }
              else
              {
                    toastr.error("Error al ejecutar la acción. Por favor comuniquese con un administrador");
              }

            });
      }
 },
};
</script>
<style>
.content{padding:10px;}

</style>

