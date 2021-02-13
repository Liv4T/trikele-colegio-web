<template>
    <div>
        <div class="back">
            <div class="row">
                <div class="col-md-11 mx-auto">
                    <div class="custom-card text-center">
                        <h3 class="card-header fondo">Mis clases - Electiva {{planification.lective.name}} Trimestre {{planification.period_consecutive}}</h3>
                    </div>
                    <div class="div-weekly-plan">
                        <div>
                            <label>Ciclo:</label>
                            <textarea class="form-control" cols="60" readonly>{{weekly_plan.name}}</textarea>
                        </div>
                        <div>
                            <label>Observación:</label>
                            <textarea class="form-control" cols="60" readonly>{{weekly_plan.observation}}</textarea>
                        </div>
                       
                    </div>
                    <div class="div-classes">
                        <div class="div-class"  v-for="(item,key_d) in weekly_plan_detail" >
                            <h3>Clase {{key_d+1}}</h3>
                            <div class="title">
                              <div>
                                    <label><span class="required">*</span>Nombre:</label>
                                    <textarea class="form-control" cols="40" v-model="item.name"></textarea>
                                </div>
                                <div>
                                    <label><span class="required">*</span>Descripción:</label>
                                    <textarea class="form-control" cols="40" v-model="item.description"></textarea>
                                </div>
                                   <div>
                                    <label><span class="required">*</span>Intensidad:</label>
                                    <input type="number" class="form-control" v-model="item.hourly_intensity" />
                                </div>
                            </div>
                            <div class="content">
                                <div class="div-resource" v-for="(item_content,key_c) in item.content" >
                                    <span class="closed-icon" v-on:click="removeResource(key_d,key_c)"><i v-if="key_c>2" class="fa fa-minus" ></i></span>
                                    <h4 v-if="item_content.content_type === 'DOCUMENT'">Documento</h4>
                                    <h4 v-else-if="item_content.content_type === 'LINK'">Enlace</h4>
                                    <h4 v-else-if="item_content.content_type === 'VIDEO'">Enlace Video (Youtube)</h4>
                                    <div class="form-item">
                                        <label>Descripción</label>
                                        <input class="form-control" type="text" v-model="item_content.description" />
                                    </div>
                                     <div class="form-item">
                                        <label v-if="item_content.content_type === 'DOCUMENT'">Archivo</label>
                                        <label v-else-if="item_content.content_type === 'LINK'">Enlace</label>
                                        <label v-else-if="item_content.content_type === 'VIDEO'">Enlace</label>
                                        <input v-if="item_content.content_type === 'DOCUMENT'" class="form-control" type="file" @change="onFileChange($event,key_d,key_c)" />
                                        <a v-if="item_content.content_type === 'DOCUMENT' && item_content.content!=''" v-bind:href="item_content.content" target="_blank">{{item_content.description}}</a>
                                        <input  v-if="item_content.content_type !== 'DOCUMENT'" class="form-control" type="text" v-model="item_content.content" />
                                    </div>
                                    
                                </div>
                                 <div class="div-resource"   >
                                    <div class="form-item">
                                        <span v-on:click="addResource(key_d,'DOCUMENT')">+ Agregar Documento</span>
                                        <span v-on:click="addResource(key_d,'LINK')">+ Agregar Enlace</span>
                                        <span v-on:click="addResource(key_d,'VIDEO')">+ Agregar Video</span>
                                    </div>
                                   
                                    
                                </div>
                              
                            </div>
                            <hr />
                        </div>
                        
                    </div>
                    <div class="div-weekly-plan-btn-save">
                        <button class="btn btn-warning" v-on:click="saveData()">Guardar y enviar</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
(function() {
    "use strict";
    window.addEventListener(
        "load",
        function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName("needs-validation");
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener(
                    "submit",
                    function(event) {
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

import VueFormWizard from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
Vue.use(VueFormWizard);
export default {
    props: ["id_lective_planification", "id_weekly_plan"],
    data() {
        return {
            myOptions: [],
            nameUnit: "",
            description: "",
            nameFile: "",
            nameUrl: "",
            nameUrl1: "",
            nameUrl2: "",
            newDocument: [],
            newDocument1: [],
            newDocument2: [],
            semanal: false,
            newVideo: [],
            newVideo1: [],
            newVideo2: [],
            messageVideo: "",
            messageVideo1: "",
            messageVideo2: "",
            numero: "",
            nameArea: "",
            planification:{lective:{}},
            errors: [],
            weekly_plan:{},
            weekly_plan_detail:[]
        };
    },
    mounted() {
         axios.get(`/api/lectives/planification/${this.id_lective_planification}`).then((response) => {

            this.planification = response.data;

            //find weekly_plan
            this.weekly_plan=this.planification.weeklies.find(e=>e.id==this.id_weekly_plan);

        });

        
        axios.get(`/api/lectives/planification/${this.id_lective_planification}/weekly/${this.id_weekly_plan}/course`).then((response) => {


             this.weekly_plan_detail = response.data;

             this.weekly_plan_detail.push({
                    'name':'',
                    'description':'',
                    'hourly_intensity':0,
                    'state':1,
                    'content':[
                        {
                            'content_type':'DOCUMENT',
                            'content':'',
                            'description':''
                        },
                        {
                            'content_type':'LINK',
                            'content':'',
                            'description':''
                        },
                        {
                            'content_type':'VIDEO',
                            'content':'',
                            'description':''
                        }
                    ]
                });

        });



    },
    methods: {
        returnPage() {
            window.location = "/teacher/lectives/courses";
        },
        addResource(index,resource_type){
            this.weekly_plan_detail[index].content.push({
                'content_type':resource_type,
                'content':'',
                'description':''
            });
        },
        removeResource(ix_weekly_plan,index){
           this.weekly_plan_detail[ix_weekly_plan].content.splice(index,1)
        },
        saveData(){

            this.weekly_plan_detail.forEach(e=>{
                if(e.name && !e.id_class)
                {
                    e.id_class=0;
                }

                    e.content.forEach(c=>{ 
                        if(e.description && !e.id_content)
                        {
                            e.id_content=0;
                        }
                    });
                
            });

             axios.put(`/api/lectives/planification/${this.id_lective_planification}/weekly/${this.id_weekly_plan}/course`,this.weekly_plan_detail).then((response) => {
             
               // this.getPlanificationEvent(this.id_lective_planification);
                toastr.success("Clases actualizadas correctamente");
                this.returnPage();
            });
        },
        onFileChange(file,id_weekly_content,item_index) {


            let files = file.target.files || file.dataTransfer.files;
            let data = new FormData();
            if (files.length > 0) {
                let file = files[0];

                // if uploaded file is valid with validation rules

                data.append("file", files[0]);
                data.append("name", this.weekly_plan_detail[id_weekly_content].content[item_index].description.split(' ').join('_'));
                data.append("count", `-lective-class-${id_weekly_content}-${item_index}`);
          
                let _fileNameSplit=file.name.split(".");
                axios.post("/fileDocument", data).then(response => {
                   this.weekly_plan_detail[id_weekly_content].content[item_index].content=`${window.location.origin}/uploads/clases/${this.weekly_plan_detail[id_weekly_content].content[item_index].description.split(' ').join('_')}-lective-class-${id_weekly_content}-${item_index}.${_fileNameSplit[_fileNameSplit.length-1]}`;
                });
            }
        },
        onFlieChange1(file) {
            let files = file.target.files || file.dataTransfer.files;
            let data = new FormData();
            if (files.length > 0) {
                let file = files[0];

                // if uploaded file is valid with validation rules

                data.append("file", files[0]);
                data.append("name", this.nameUnit);
                data.append("count", 2);
                this.newDocument1 = data;

                axios.post("/fileDocument", data).then(response => {
                  //  this.emitMessage(response);
                  console.log(response.data);
                });
            }
        },
        onFlieChange2(file) {
            let files = file.target.files || file.dataTransfer.files;
            let data = new FormData();
            if (files.length > 0) {
                let file = files[0];

                // if uploaded file is valid with validation rules

                data.append("file", files[0]);
                data.append("name", this.nameUnit);
                data.append("count", 3);
                this.newDocument2 = data;

                axios.post("/fileDocument", data).then(response => {
                    this.emitMessage(response);
                });
            }
        },
        videoFile(file) {
            let files = file.target.files || file.dataTransfer.files;
            let data = new FormData();
            if (files.length > 0) {
                let file = files[0];
                this.messageVideo = "Espere estamos cargando el video";
                // if uploaded file is valid with validation rules

                data.append("file", files[0]);
                data.append("name", this.nameUnit);
                data.append("count", 1);
                this.newVideo = data;

                axios.post("/fileDocument", data).then(response => {
                    console.log(response.data);

                    if (response.data == "ok") {
                        this.messageVideo = "Video cargado";
                    } else {
                        this.messageVideo =
                            "El video excede el límite, por favor reducir su peso";
                    }
                });
            }
        },
        videoFile1(file) {
            let files = file.target.files || file.dataTransfer.files;
            let data = new FormData();
            if (files.length > 0) {
                let file = files[0];
                this.messageVideo1 = "Espere estamos cargando el video";
                // if uploaded file is valid with validation rules

                data.append("file", files[0]);
                data.append("name", this.nameUnit);
                data.append("count", 2);
                this.newVideo1 = data;

                axios.post("/fileDocument", data).then(response => {
                    console.log(response.data);

                    if (response.data == "ok") {
                        this.messageVideo1 = "Video cargado";
                    } else {
                        this.messageVideo1 =
                            "El video excede el límite, por favor reducir su peso";
                    }
                });
            }
        },
        videoFile2(file) {
            let files = file.target.files || file.dataTransfer.files;
            let data = new FormData();
            if (files.length > 0) {
                let file = files[0];
                this.messageVideo2 = "Espere estamos cargando el video";
                // if uploaded file is valid with validation rules

                data.append("file", files[0]);
                data.append("name", this.nameUnit);
                data.append("count", 3);
                this.newVideo2 = data;

                axios.post("/fileDocument", data).then(response => {
                    console.log(response.data);

                    if (response.data == "ok") {
                        this.messageVideo2 = "Video cargado";
                    } else {
                        this.messageVideo2 =
                            "El video excede el límite, por favor reducir su peso";
                    }
                });
            }
        }
    }
};
</script>
<style>
.div-weekly-plan{
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    padding:10px;
}

.div-weekly-plan label{
    font-size:1.2em;
    font-weight:700;
}
.div-classes{
    display: flex;
    flex-direction: column;
    justify-content:center;
    padding:5px;
}
.div-class{
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    padding:5px;
}
.div-class>.title{
    display: flex;
    flex-direction: row;
    justify-content:space-around;
}

.div-class>.content{
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    margin-top:30px;
    flex-wrap: wrap;
}
.required{
    color:Red;
}
.div-resource{
    display:flex;
    flex-direction:column;
    align-items: center;
    padding:30px;
    background-color:#f2f2f2;
    margin:10px;
    max-width:400px;
    min-width:350px;
}
.div-resource .form-item{
    width:100%;
    padding:5px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
}
.div-resource .form-item>a{
    color:#007bff;
}
.div-resource .form-item>a:visited{
    color:#007bff;
}
.div-resource .form-item>span{
    padding:10px;
    font-size:1.2em;
    color:#b4b4b4;
    font-weight:700;
    border:1px solid #b4b4b4;
    border-radius:5px;
    margin:5px
}
.div-resource .form-item>span:hover{
    background-color:white;
    cursor:pointer;
}
.div-weekly-plan-btn-save{
    display:flex;
    padding:50px;
    justify-content:flex-end;
     flex-direction:row;

}
.closed-icon{
    width:100%;
    display:flex;
    justify-content:flex-end;
    flex-direction:row;
}
</style>
