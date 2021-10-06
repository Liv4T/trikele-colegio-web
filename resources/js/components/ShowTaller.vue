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
                        <activity-questionary v-if="activity.activity_type=='CUESTIONARIO' || activity.activity_type == 'CUESTIONARIO_UNICA_RTA'" v-bind:module="activity.module" v-bind:disabled="activity.interaction.state>1"></activity-questionary>
                        <activity-complete-sentence v-if="activity.activity_type=='COMPLETAR_ORACION'" v-bind:module="activity.module" v-bind:disabled="activity.interaction.state>1"></activity-complete-sentence>
                        <activity-relationship v-if="activity.activity_type=='RELACION'" v-bind:module="activity.module" v-bind:disabled="activity.interaction.state>1"></activity-relationship>
                        <activity-crossword v-if="activity.activity_type=='CRUCIGRAMA'" v-bind:module="activity.module" v-bind:disabled="activity.interaction.state>1"></activity-crossword>
                    </div>

                    <button class="btn btn-primary col-md-3" v-on:click="saveData">Guardar</button>    
                </div>                
                <div v-else-if="activeClass === 2">                
                    <div class="card-body">
                        <label>Subir Documento</label>
                        <input type="file" class="form-control-file" id="exampleFormControlFile1" v-on:change="getFile">

                        <button class="btn btn-primary col-md-3 mt-2" v-on:click="saveFile">Guardar</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-else-if="type_user === 3">
            <div v-for="(activity,key_a) in course.activities" v-bind:key="key_a">
                <div class="card-body" v-if="activeClass === 1">
                    <div class="row">
                        <div class="col-12">
                            <b>Descripción:</b>
                            <textarea class="form-control-plaintext" v-model="activity.description" readonly></textarea>
                        </div>
                    </div>
                    <activity-questionary v-if="activity.activity_type=='CUESTIONARIO_UNICA_RTA' || activity.activity_type =='CUESTIONARIO'" v-bind:playing="true" v-bind:module="activity.module" v-bind:disabled="activity.interaction.state>1"></activity-questionary>
                    <activity-complete-sentence v-if="activity.activity_type=='COMPLETAR_ORACION'" v-bind:playing="true" v-bind:module="activity.module" v-bind:disabled="activity.interaction.state>1"></activity-complete-sentence>
                    <activity-relationship v-if="activity.activity_type=='RELACION'" v-bind:playing="true" v-bind:module="activity.module" v-bind:disabled="activity.interaction.state>1"></activity-relationship>
                    <activity-crossword v-if="activity.activity_type=='CRUCIGRAMA'" v-bind:playing="true" v-bind:module="activity.module" v-bind:disabled="activity.interaction.state>1"></activity-crossword>
                    <div class="activity_response-button">
                        <button class="btn btn-primary" v-if="activity.interaction.state==1" @click="SaveResponseEvent(activity)">Enviar respuestas</button>

                    </div>
                    <div v-if="activity.interaction.state==3">
                        Calificación: <span class="activity_score" >{{activity.interaction.score}}<small>/5</small></span>
                    </div>
                </div>
                <div class="card-body" v-else-if="activeClass === 2">
                    
                </div>
            </div>
        </div>
        <button class="btn btn-primary col-md-3" v-on:click="backPage">Volver</button>            
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
    props:['id_achievement','id_class','type_user','id_bimestre','id_workshop','backPage'],
    data() {
        return {
            course:[], 
            activeClass:1,
            bimestres:[],
            file:null,
            loading:false,
            urlFile:null,
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
            axios.get('bimestres').then((response)=>{            
                this.bimestres = response.data;
            });
        }        
    },
    methods: {
        getData(){
            axios.get(`/api/teacher/module/${this.id_achievement}/class/${this.id_class}`).then((response) => {
                this.course=response.data;                    
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

        saveFile(){
            let storageRef = firebase.storage().ref();
            let id = this.id_workshop;
            let imageRef = storageRef.child(`images/${this.file.name}`);            
            
            imageRef.put(this.file).then(function(snapshot) {                
                snapshot.ref.getDownloadURL().then(url=>{
                    axios.post(`saveUrlFile/${id}`,{url: url}).then((response)=>{
                        toastr.success("Url actualizada correctamente");
                    }).catch((error)=>{
                        console.log(error);
                        toastr.error("Error, intenta de nuevo mas tarde")
                    })
                });
            });            
        }
    },
    
};
</script>