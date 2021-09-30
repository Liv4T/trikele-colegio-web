<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card">
                    <div class="card-header fondo">
                        <strong>Reportes</strong>
                    </div>
                    <div class="card-body">
                        <div id="accordion">
                            <div class="card" v-for="(data, key) in areas" :key="key">
                                <div class="card-header" :id="`headingOne${data.text.replace(/\s/g, '')}`">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link" v-on:click="()=>getStudents(data)" data-toggle="collapse" :data-target="`#collapseOne${data.text.replace(/\s/g, '')}`" aria-expanded="true" :aria-controls="`collapseOne${data.text.replace(/\s/g, '')}`">
                                            {{data.text}}
                                        </button>
                                    </h5>
                                </div>

                                <div :id="`collapseOne${data.text.replace(/\s/g, '')}`" class="collapse hide" :aria-labelledby="`headingOne${data.text.replace(/\s/g, '')}`" data-parent="#accordion">
                                    <div class="card-body">
                                        <table class="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Nombre</th>
                                                    <th>Apellido</th>
                                                    <th>acción</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(student, key) in students" :key="key">
                                                    <td>{{student.user_name}}</td>
                                                    <td>{{student.user_lastname}}</td>
                                                    <td><button class="btn btn-primary" v-on:click="sendMessage(student, data.id, data.id_classroom)">Enviar Reporte a Padres</button></td>
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
        <!-- Modal -->
        <div class="modal fade" id="reports" tabindex="-1" role="dialog" aria-labelledby="reportsLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="reportsLabel">Enviar Reporta a Padres</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label><strong>Nombre de Estudiante</strong></label>
                            <p>{{dataStudent.student}}</p>
                        </div>
                        <div class="form-group">
                            <label><strong>Nombre de Acudiente</strong></label>
                            <p>{{dataStudent.parent_name}}</p>
                        </div>
                        <div class="form-group">
                            <label><strong>Email de Acudiente</strong></label>
                            <p> {{dataStudent.parent_email}}</p>
                        </div>
                        <div class="mb-2">                    
                            <div class="form-check">
                                <input class="form-check-input" type="radio" :value="true" name="show_notes"  id="showNotes" v-model="show_notes">
                                <label class="form-check-label" for="showNotes">
                                    <strong>
                                        Mostrar Nota
                                    </strong>
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" :value="false" name="show_notes"  id="hideNotes" v-model="show_notes">
                                <label class="form-check-label" for="hideNotes">
                                    <strong>
                                        Ocultar Nota
                                    </strong>
                                </label>
                            </div>
                        </div>
                        <div v-show="show_notes" class="form-group">
                            <strong>Nota del Estudiante</strong>
                            <p>{{dataStudent.nota_class}}</p>
                        </div>
                        <div>
                            <strong>Progreso del Estudiante</strong>
                            <p>
                                {{dataStudent.percentage_activity}}
                            </p>
                        </div>

                        <div>
                            <strong>Asistencias del Estudiante</strong>
                            <p>
                                {{dataStudent.total_classes}}
                            </p>
                        </div>
                        

                        <div class="form-group">
                            <label>Observación</label>
                            <input type="text" class="form-control" v-model="dataStudent.observation">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary" v-on:click="saveData">Guardar Cambios</button>
                    </div>
                </div>
            </div>
        </div>

        <table id="tableReport" style="width:100%" hidden>
            <tr class="header">
                <th colspan="8">REPORTE DE {{dataStudent.student ? dataStudent.student.toUpperCase() : ''}}</th>
            </tr>
            
            <tr>
                <td style="height:10px" colspan="8"></td>
            </tr>
            
            <tr>                  
                <th class="label">CLASE: </th>
                <td class="label-content">{{dataStudent.class}}</td>
                
                <td></td>
                
                <th class="label">LOGRO: </th>
                <td class="label-content">{{dataStudent.logro}}</td>
            </tr>
            
            <tr>
                <th class="label"> ESTUDIANTE: </th>
                <td class="label-content">{{dataStudent.student}}</td>
                  
                <td></td>

                <th class="label">CORREO: </th>
                <td class="label-content">{{dataStudent.email}}</td>
            
                <td></td>
            </tr>
            
            <tr>
                <td style="height:5px" colspan="8"></td>
            </tr>
            <tr>
                <th class="label">ACTIVIDAD: </th>
                <td class="label-content">{{dataStudent.activity}}</td>
                
                <td></td>
                
                <th class="label">DESCRIPCIÓN: </th>
                <td class="label-content">{{dataStudent.activity_description}}</td>
                
                <td></td>
                
                <th class="label">FECHA ACTIVIDAD</th>
                <td class="label-content">{{dataStudent.activity_date}}</td>
                
            </tr>
            <tr>
                <td style="height:10px" colspan="8"></td>
            </tr>
                
            <tr>
                <th class="label">PORCENTAJE DE ACTIVIDAD: </th>
                <td class="label-content">{{dataStudent.percentage_activity}}</td>
                
                <td></td>
                 
                <th class="label">NOTA GENERAL</th>
                <td class="label-content">{{dataStudent.nota_class}}</td>
            </tr>
            
            <tr>
                <td style="height:10px" colspan="8"></td>
            </tr>
            
            <tr>
                <td></td>
                
                <th class="label">TOTAL CLASES: </th>
                <td class="label-content">{{dataStudent.total_classes}}</td>
            </tr>

            <tr>
                <td style="height:10px" colspan="8"></td>
            </tr>
            
            <tr>
                <th class="label">NOMBRE DE ACUDIENTE: </th>
                <td class="label-content">{{dataStudent.parent_name ? dataStudent.parent_name : 'Sin Información'}}</td>
                  
                <td></td>
                  
                <th class="label">CORREO DE ACUDIENTE: </th>
                <td class="label-content">{{dataStudent.parent_email ? dataStudent.parent_email : 'Sin Información'}}</td>
            </tr>
            
            <tr>
                <td style="height:10px" colspan="8"></td>
            </tr>
                
            <tr>
                <th class="label">OBSERVACIÓN DEL DOCENTE: </th>
                <td>{{observation}}</td>         
            </tr>
            
            <tr>
                <td style="height:10px" colspan="8"></td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    data(){
        return{
            students:[],
            areas:[],
            parent:{},
            dataStudent:{},
            observation:"",
            show_notes:true,
        }
    },
    mounted(){
        this.getAreasByUser();
    },
    watch:{
        show_notes(new_value){
            if(new_value === false){
                this.dataStudent.nota_class = ''
            }
        }
    },
    methods:{
        getAreasByUser(){
            axios.get('GetArearByUser').then((response)=>{
                this.areas = response.data;                
            })
        },

        getStudents(data){
            axios.get(`/api/teacher/area/${data.id}/classroom/${data.id_classroom}/student`).then((response)=>{
                this.students = response.data;
            })
        },

        sendMessage(data, area_id, classroom_id){            
            this.dataInformation = [];
            axios.get(`/getAllRecentActivities/${area_id}`).then((response)=>{
                let activities = response.data;

                axios.get(`/showUser/${data.user_id}`).then((response)=>{
                    this.parent = response.data;
                })
                
                axios.get(`/getNotesBySudentAndArea/${data.user_id}/${area_id}`).then((response)=>{                    
                    let notes = response.data;
                    this.dataStudent={}
                    this.dataStudent = {
                        area_id: area_id,
                        classroom_id: classroom_id,                        
                        class: activities.area_name+' '+activities.classroom_name,
                        logro: activities.logro,                                            
                        title_activity: activities.activity_name,
                        activity_date: activities.activity_date,
                        activity_description: activities.activity_description,                        
                        activity: activities.weekly_plan_driving_question,
                        percentage_activity: activities.percentage ? activities.percentage+' %' : 'Sin progreso Registrado',
                        nota_class: notes.score ? notes.score : 0,                        
                        student: data.user_name+' '+data.user_lastname,
                        email: data.user_email,
                        
                        parent_id: this.parent.id,
                        parent_email: this.parent.email ? this.parent.email : null,
                        parent_name: (this.parent.name && this.parent.last_name) ? this.parent.name+' '+this.parent.last_name: null,                            
                    }
                })              
            })
            $('#reports').modal('show');
        },

        saveData(){                      
            axios.post('resportSendParents',{
                dataStudent: JSON.stringify(this.dataStudent),
                id_parent: this.dataStudent.parent_id,
                id_area: this.dataStudent.area_id,
                id_classroom: this.dataStudent.classroom_id
            }).then((response)=>{
                toastr.success(response.data);
                $('#reports').modal('hide');
            })
    
            // axios.post('sendSingleMessage', {
            //     email: this.dataStudent.parent_email, //'brayantriana22@gmail.com'
            //     subject: `Reporte Mensual del Curso ${this.dataStudent.class} ya ha sido generado, Podras visualizarlo en la plataforma 'https://www.trikele.edu.com' En la sección reportes del menú`,
            //     message: `Reporte ${this.dataStudent.class}`,
            // }).then((response) => {
            //     toastr.success("Mensaje enviado");              
            // }).catch((error) => {
            //     console.log(error)
            // });
            $('#reports').modal('hide');
            this.dataStudent={};
        }
    }
}
</script>