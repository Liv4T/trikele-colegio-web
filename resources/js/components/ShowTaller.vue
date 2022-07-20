<template>
    <div>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a :class="activeClass === 1 ? 'nav-link active' : 'nav-link'" aria-current="page" v-on:click="()=>changeTab(1)">{{type_user === 1 || type_user === 2 ? 'Creación de Talleres' : 'Talleres'}}</a>
            </li>
            <li class="nav-item">
                <a :class="activeClass === 2 ? 'nav-link active' : 'nav-link'" v-on:click="()=>changeTab(2)">{{type_user === 1 || type_user === 2 ? 'Carga de Documentos' : 'Documentos'}}</a>
            </li>
        </ul>
        <div v-if="type_user === 1 || type_user === 2">
            <div class="card">
                <div class="card-body" v-if="activeClass === 1">
                    <label>Bimestre</label>
                    <div v-for="(activity,key_a) in course.activities" v-bind:key="key_a">
                        <select class="form-control m-2" v-model="activity.id_bimestre">
                            <option v-for="(bimestre, key) in bimestres" :key="key" :value="bimestre.id">{{bimestre.name}}</option>
                        </select>
                        <activity-questionary v-if="activity.activity_type=='CUESTIONARIO' || activity.activity_type == 'CUESTIONARIO_UNICA_RTA'" v-bind:module="activity.module" v-bind:disabled="activity.interaction.state > 1 && attempt === false"></activity-questionary>
                        <activity-complete-sentence v-if="activity.activity_type=='COMPLETAR_ORACION'" v-bind:module="activity.module" v-bind:disabled="activity.interaction.state > 1 && attempt === false"></activity-complete-sentence>
                        <activity-relationship v-if="activity.activity_type=='RELACION'" v-bind:module="activity.module" v-bind:disabled="activity.interaction.state > 1 && attempt === false"></activity-relationship>
                        <activity-crossword v-if="activity.activity_type=='CRUCIGRAMA'" v-bind:module="activity.module" v-bind:disabled="activity.interaction.state > 1 && attempt === false"></activity-crossword>
                    </div>

                    <button class="btn btn-primary col-md-3" v-on:click="saveData">Guardar</button>
                </div>
                <div v-else-if="activeClass === 2">
                    <div class="card-body">
                        <button type="button" class="btn btn-primary mb-3" data-toggle="modal" data-target="#exampleModal">Cargar Archivo</button>
                        <table class="table table-striped table-hover" v-if="type_user === 2">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(files, key) in dataFiles" :key="key">
                                    <td>{{files.name}}</td>
                                    <td>
                                        <a :href="files.url" :download="files.name" target="_blank" class="btn btn-primary">Descargar</a>
                                        <button v-if="type_user === 2" class="btn btn-primary" v-on:click="deleteFile(files)">Eliminar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div v-else-if="type_user === 3">
            <div class="card-body" v-if="activeClass === 1">
                <div v-for="(activity,key_a) in course.activities" v-bind:key="key_a">
                    <div class="row">
                        <div class="col-6">
                            <p>Nombre de Actividad: </p> <b>{{activity.name}}</b>
                        </div>
                        <div class="col-6">
                            <p>Cantidad de Preguntas: </p> <b>{{activity.module.questions.length}}</b>
                        </div>
                        <div class="col-12 mt-3">
                            <b>Descripción:</b>
                            <textarea class="form-control-plaintext" v-model="activity.description" readonly></textarea>
                        </div>
                    </div>
                    <activity-questionary v-if="activity.activity_type=='CUESTIONARIO_UNICA_RTA' || activity.activity_type =='CUESTIONARIO'" v-bind:playing="true" v-bind:module="activity.module" v-bind:disabled="activity.interaction.state>1" :type_user="type_user"></activity-questionary>
                    <activity-complete-sentence v-if="activity.activity_type=='COMPLETAR_ORACION'" v-bind:playing="true" v-bind:module="activity.module" v-bind:disabled="activity.interaction.state>1"></activity-complete-sentence>
                    <activity-relationship v-if="activity.activity_type=='RELACION'" v-bind:playing="true" v-bind:module="activity.module" v-bind:disabled="activity.interaction.state>1"></activity-relationship>
                    <activity-crossword v-if="activity.activity_type=='CRUCIGRAMA'" v-bind:playing="true" v-bind:module="activity.module" v-bind:disabled="activity.interaction.state>1"></activity-crossword>
                    <div class="activity_response-button">
                        <button class="btn btn-primary" v-if="activity.interaction.state==1" @click="SaveResponseEvent(activity)">Enviar respuestas</button>
                    </div>
                    <div v-if="count_attemp >= 3">
                        <p>Intentos excedidos</p>
                    </div>
                    <div v-if="attempt === false && activity.interaction.state > 1">
                        <button class="btn btn-primary col-md-3" v-on:click="registerAttemp(activity)">Registrar Intento</button>
                    </div>

                    <div class="activity_response-button" v-if="activity.interaction.state==3">
                        Calificación: <span class="activity_score" >{{activity.interaction.score}}<small>/5</small></span>
                    </div>
                </div>
            </div>

            <div class="card-body" v-else-if="activeClass === 2">
                <table class="table table-striped table-hover" v-if="type_user === 3">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(files, key) in dataFiles" :key="key">
                            <td>{{files.name}}</td>
                            <td>
                                <a :href="files.url" :download="files.name" target="_blank" class="btn btn-primary">Descargar</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <button class="btn btn-primary col-md-3" v-on:click="backPage">Volver</button>
        <!-- Modal Cargue de documentos -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Carge de documentos</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>Subir Documento</label>
                            <input type="file" class="form-control-file" id="exampleFormControlFile1" v-on:change="getFile">
                        </div>
                        <div class="form-group">
                            <label>Nombre de Archivo</label>
                            <input type="text" class="form-control" v-model="fileName">
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary" v-on:click="saveFile">Guardar Cambios</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBUwPOBHWgSv10yWDO0VX_UCCOfHZ3jKYE",
    authDomain: "liv4t-skool.firebaseapp.com",
    databaseURL: "https://liv4t-skool.firebaseio.com",
    projectId: "liv4t-skool",
    storageBucket: "liv4t-skool.appspot.com",
    messagingSenderId: "346718353628",
    appId: "1:346718353628:web:abc0666c41b66fa472dc19",
    measurementId: "G-7L14TG5RRZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default {
    props:['id_achievement','id_class','id_area','type_user','id_bimestre','id_workshop','backPage','id_user'],
    data() {
        return {
            course:[],
            activeClass:1,
            bimestres:[],
            file:null,
            loading:false,
            urlFile:null,
            fileName:null,
            dataFiles:[],
            attempt:false,
            count_attemp: null
        };
    },
    watch:{
        id_class: function(newVal){
            if(newVal){
                this.getData();
            }
        }
    },
    mounted(){
        if(this.id_class !== null){
            this.getData();
            this.getFiles();
            axios.get('bimestres').then((response)=>{
                this.bimestres = response.data;
            });
        }
    },
    methods: {
        getFiles(){
            if(this.type_user === 2){
                axios.get('filesWork').then((response) => {
                    this.dataFiles = response.data;
                });
            }else if(this.type_user === 3){
                axios.get(`getFilesStudents/${this.id_class}/${this.id_workshop}`).then((response)=>{
                    this.dataFiles = response.data
                })
            }
        },
        getData(){


            axios.get(`/api/teacher/module/${this.id_achievement}/class/${this.id_class}`).then((response) => {
                this.course=response.data;
                this.course.id_area = this.id_area;
                this.course.id_bimestre = this.id_bimestre;
                if(this.course.content.length==0)
                {
                    this.course.content=[
                        {
                            content_type:'YOUTUBE',
                            content:'',
                            description:''
                        },
                        {
                            content_type:'LINK',
                            content:'',
                            description:''
                        },
                        {
                            content_type:'DOCUMENT',
                            content:'',
                            description:''
                        }
                    ];
                }
                if(this.course.activities.length>0)
                {
                    this.course.activities.forEach(act=>{
                        axios.get(`answerLite/${act.id}`).then((response)=>{
                            let data = response.data;

                            data.forEach((el)=>{
                                axios.put(`/api/student/module/${this.id_achievement}/class/${this.id_class}/activity/${act.id}/interaction`,{
                                    activity_type: el.activity_type,
                                    delivery_max_date: el.delivery_max_date,
                                    description: el.description,
                                    feedback_date: el.feedback_date,
                                    id_student: this.id_user,
                                    id: el.id,
                                    id_achievement: el.id_achievement,
                                    id_indicator: el.id_indicator,
                                    interaction: JSON.parse(el.interaction),
                                    is_required: el.is_required,
                                    module: JSON.parse(el.module),
                                    name: el.name,
                                    rules: el.rules,
                                    state: el.state,
                                    updated_user: el.updated_user,
                                }).then((response)=>{
                                    console.log(response.data);
                                })
                            })
                        })

                        act.delivery_max_date=act.delivery_max_date ? act.delivery_max_date && delivery_max_date.replace(" ","T") : '';
                        act.feedback_date=act.feedback_date.replace(" ","T");
                        this.GetIndicatorsEvent(act);
                    });
                }
            });
        },

        changeTab(data){
            this.activeClass = data;
        },
        saveData(){
            axios.put(`/api/teacher/module/${this.course.id_weekly_plan}/class`,this.course).then((response) => {
                toastr.success("Clases actualizadas correctamente");
            },(error)=>{console.log(error);toastr.error("ERROR:Por favor valide que la información esta completa");});
        },

        getFile(e){
            this.file = e.target.files[0];
        },

        registerAttemp(activity){
            axios.get(`attemps/${activity.id}`).then((response)=>{
                this.count_attemp = response.data.attemps ? parseInt(response.data.attemps) : 0;
            });
            this.attempt = true;
        },

        saveAttemp(activity){
            let total_attemps = 1
            let suma = this.count_attemp + total_attemps

            axios.post('attemps',{
                activity_type: activity.activity_type,
                delivery_max_date: activity.delivery_max_date,
                description: activity.description,
                feedback_date: activity.feedback_date,
                id_student: this.id_user,
                id_activity: activity.id,
                id_achievement: activity.id_achievement,
                id_indicator: activity.id_indicator,
                interaction: JSON.stringify(activity.interaction),
                is_required: activity.is_required,
                module: JSON.stringify(activity.module),
                name: activity.name,
                rules: activity.rules,
                state: activity.state,
                updated_user: activity.updated_user,
                attemps: suma
            }).then((response)=>{
                toastr.success(response.data);
            }).catch((error)=>{
                toastr.error("Intenta de nuevo mas tarde");
            })
        },

        saveFile(){
            let storageRef = firebase.storage().ref();
            let id_activity = this.id_class;
            let id_workshop = this.id_workshop;
            let nameFile = this.fileName;
            let imageRef = storageRef.child(`images/${this.file.name}`);

            imageRef.put(this.file).then(function(snapshot) {
                snapshot.ref.getDownloadURL().then(url=>{
                    axios.post(`filesWork`,{
                        url: url,
                        name:nameFile,
                        id_activity: id_activity,
                        id_workshop: id_workshop,
                    }).then((response)=>{
                        toastr.success(response.data);
                    }).catch((error)=>{
                        console.log(error);
                        toastr.error("Error, intenta de nuevo mas tarde")
                    })
                });
            });

            $('#exampleModal').modal('hide');
            this.getFiles();
        },

        deleteFile(data){
            if(window.confirm(`Seguro que desea eliminar el documento ${data.name} ?`)){
                axios.delete(`filesWork/${data.id}`).then((response)=>{
                    toastr.success(response.data);
                    this.getFiles();
                }).catch((error)=>{
                    toastr.error("Intenta de nuevo mas tarde");
                    console.log(error);
                })
            }
            console.log(data);
        },
        SaveResponseEvent(activity)
        {
            axios.put(`/api/student/module/${this.id_achievement}/class/${this.id_class}/activity/${activity.id}/interaction`,activity).then(
                response => {
                    toastr.success("Actividad enviada correctamente");
                },error => {
                    axios.post('answerLite',{
                        activity_type: activity.activity_type,
                        delivery_max_date: activity.delivery_max_date,
                        description: activity.description,
                        feedback_date: activity.feedback_date,
                        id_student: this.id_user,
                        id_activity: activity.id,
                        id_achievement: activity.id_achievement,
                        id_indicator: activity.id_indicator,
                        interaction: JSON.stringify(activity.interaction),
                        is_required: activity.is_required,
                        module: JSON.stringify(activity.module),
                        name: activity.name,
                        rules: activity.rules,
                        state: activity.state,
                        updated_user: activity.updated_user,
                    }).then((response)=>{
                        console.log(response.data)
                        toastr.success('Actividad guardada de forma local, vuelve mas tarde para observar tus resultados');
                    }).catch((error)=>{
                        toastr.error("Intenta de nuevo mas tarde");
                    })
                }
            );
        }
    },

};
</script>
