<template>
    <!-- Modal -->
    
    <div class="div-classes">
        <div class="div-class">
            <div class="title row">
                <div class="col-12">
                    <b>Clases:</b>
                    <input type="text" class="form-control-plaintext" v-model="course.name" readonly/>
                </div>
            </div>
            <div class="row" v-if="course.url_class">
                <div class="col-12">
                    <b>Asistencia a Clases:</b>
                </div>
            </div>
            <div class="row" v-if="course.url_class">
                <div class="col-md-6">
                    {{ course.name + 'Fecha y Hora' +course.date_init_class}}
                </div>
                <div class="col-md-6">
                    <a class="btn btn-warning float-right" :href="course.url_class" target="_blank" rel="noopener noreferrer">
                        Ir a Clase
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <b>Descripción:</b>
                    <textarea
                        class="form-control-plaintext"
                        cols="40"
                        rows="4"
                        v-model="course.description"
                        readonly
                    ></textarea>
                </div>                               
            </div>
            <div class="row">
                <div class="col-12">
                    <b>Recursos:</b>
                </div>
            </div>
            <div class="row justify-content-center">
                <template v-for="(item_content,key_c) in course.content">
                    <div class="col-10 div-resource" style="border-radius:8px;" v-if="item_content.content !='' && item_content.content !=null" v-bind:key="key_c">
                        <h4 style="color:#f79d52" v-if=" item_content.content_type === 'DOCUMENT'">
                            Documento
                        </h4>
                                        
                        <h4 style="color:#f79d52" v-else-if=" item_content.content_type === 'LINK' ">
                            Link
                        </h4>
                                        
                        <h4 style="color:#f79d52" v-else-if=" item_content.content_type === 'VIDEO'">
                            Video
                        </h4>
                                
                        <h4 style="color:#f79d52" v-else-if=" item_content.content_type === 'YOUTUBE'">
                            Video
                        </h4>
                                        
                        <div class="form-item">
                            <input class="form-control-plaintext" type="text" v-model="item_content.description" readonly/>
                        </div>
                        
                        <div class="form-item">
                            <div class="form-button">
                                <a class="btn btn-primary" v-if=" item_content.content_type ==='DOCUMENT'" v-on:click=" openDocument(item_content)">
                                    Leer Documento
                                </a>
                                                
                                <a class="btn btn-primary" v-if=" item_content.content_type === 'LINK' " v-on:click=" openLink(item_content)" target="_blank">
                                    Ir a Trabajar
                                </a>
                                                
                                <video id="vid" @playing="playVideo(item_content)" v-if=" item_content.content_type ==='VIDEO' " controls>
                                    <source v-bind:src="item_content.content" type="video/mp4"/>
                                </video>
                                                
                                <iframe v-if="item_content.content_type ==='YOUTUBE'" class="container_youtube"  v-bind:src="resolveYoutubeLink(item_content.content)" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
            <div class="row justify-content-center margin-top-50" v-for="(act, key_a) in course.activities" v-bind:key="key_a">
                <div class="col-10">
                    <div class="card">
                        <div class="card-header card-title">
                            <h5 style="color:#f79d52">
                                Actividad N°{{ key_a + 1 }} :
                                {{ act.name }}
                            </h5>
                            <button class="btn btn-primary" v-if="act.interaction && act.interaction.state<3 && activity.id != act.id" @click.prevent="openActivity(key_a)">
                                {{act.interaction && act.interaction.state==2?'Esperando calificación':'Presentar'}}
                            </button>

                            <button class="btn btn-warning" v-if="activity.id == act.id" @click.prevent="closeQuestion()">
                                Cancelar
                            </button>
                                                
                            <button class="btn btn-primary" v-if=" act.interaction && act.interaction.state==3 && activity.id != act.id" @click.prevent="openFeedback(key_a)">
                                Retroalimentación
                            </button>
                        </div>
                        <div class="card-body" v-if="activity.id == act.id">
                            <div class="row">
                                <div class="col-12">
                                    <b>Descripción:</b>
                                    <textarea
                                        v-if="activity.description"
                                        class="form-control-plaintext"
                                        v-model="activity.description"
                                        readonly
                                    ></textarea>
                                    <textarea
                                        v-else
                                        class="form-control-plaintext"
                                        v-model="act.description"
                                        readonly
                                    ></textarea>
                                </div>
                            </div>
                            <activity-questionary v-if="act.activity_type=='CUESTIONARIO'" v-bind:playing="true" v-bind:module="act.module" v-bind:disabled="act.interaction && act.interaction.state>1"></activity-questionary>
                            <activity-complete-sentence v-if="act.activity_type=='COMPLETAR_ORACION'" v-bind:playing="true" v-bind:module="act.module" v-bind:disabled="act.interaction && act.interaction.state>1"></activity-complete-sentence>
                            <activity-relationship v-if="act.activity_type=='RELACION'" v-bind:playing="true" v-bind:module="act.module" v-bind:disabled="act.interaction && act.interaction.state>1"></activity-relationship>
                            <activity-crossword v-if="act.activity_type=='CRUCIGRAMA'" v-bind:playing="true" v-bind:module="act.module" v-bind:disabled="act.interaction && act.interaction.state>1"></activity-crossword>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a v-on:click="backPreview" class="btn btn-primary">Volver</a>
    </div>              
</template>
<script>
export default {
    props:["course","backPreview"],
    data() {
        return {
            activity:{}
        };
    },
    
    mounted() {
        console.log(this.course)
    },
    methods: {
        openDocument(resource) {
            try {
                this.saveInteraction(resource);
                window.open(resource.content);
            } catch {}
        },
        openLink(resource) {
            try {
                this.saveInteraction(resource);
                window.open(resource.content);
            } catch {}
        },
        playVideo(resource) {
            this.saveInteraction(resource);
        },
        resolveYoutubeLink(link_youtube)
        {
            if(!link_youtube.includes('/')) return link_youtube;

            let split_link=link_youtube.split('/');

            let split_simple_link=split_link[split_link.length-1].split('&')[0].split('=');

            return 'https://www.youtube.com/embed/'+split_simple_link[split_simple_link.length-1];
        },

        openActivity(id_activity) {
            this.activity = this.course.activities[id_activity];
        },
        closeQuestion() {
            this.activity = {};
        },
        openFeedback(id_activity) {
            this.activity = this.course.activities[id_activity];

            if ("CUESTIONARIO_UNICA_RTA" == this.activity.activity_type) {
                this.activity.correct_answers = 0;
                this.course.activities[id_activity].module.questions.forEach(
                    e => {
                        if (
                            e.student_response.response > -1 &&
                            e.student_response.is_correct == "S"
                        ) {
                            this.activity.correct_answers++;
                        }
                    }
                );
            }
        },
    }
};
</script>
<style>
.div-weekly-plan {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px;
}

.div-weekly-plan label {
    font-size: 1.2em;
    font-weight: 700;
}
.div-classes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
}
.div-class {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 5px;
}
.div-class > .title {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.div-class > .content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 30px;
    flex-wrap: wrap;
}
.required {
    color: red;
}
.div-resource {
    padding: 30px;
    background-color: #e9ecefb5;
    margin: 5px;
}
.div-resource .form-item {
    width: 100%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.div-resource .form-item > a {
    color: #007bff;
}
.div-resource .form-item > a:visited {
    color: #007bff;
}
.div-resource .form-item > span {
    padding: 10px;
    font-size: 1.2em;
    color: #233d68;
    font-weight: 700;
    border: 1px solid #233d68;
    border-radius: 5px;
    margin: 5px;
}
.div-resource .form-item > span.blue {
    padding: 10px;
    background-color: #edf8ff;
    font-size: 1.2em;
    color: #233d68;
    font-weight: 700;
    border: 1px solid #233d68;
    border-radius: 5px;
    margin: 5px;
}
.div-resource .form-item > span:hover {
    background-color: white;
    cursor: pointer;
}
.div-resource .form-item > .form-button {
    width: 100%;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
.div-resource .form-item > .form-button > button {
    width: 50%;
}
.div-weekly-plan-btn-save {
    display: flex;
    padding: 50px;
    justify-content: space-between;
    flex-direction: row;
}
.closed-icon {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    cursor: pointer;
    color: #233d68;
}
.margin-top-50 {
    margin-top: 50px;
}
.row {
    margin: 10px 0px;
}
.question {
    background-color: #e9ecefb5;
}
.div-icon-add {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.icon-remove {
    background-color: #f2f2f2;
    height: 30px;
    width: 40px;
    border: 2px solid #8f8f8f;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: default;

    font-weight: 900;
    background-color: #ffc107;
    color: white;
    border-color: #ffc107;
}
.icon-remove:hover {
    color: #ffc107;
    background-color: white;
    border-color: #ffc107;
}
.icon-add {
    background-color: #233d68;
    height: 30px;
    width: 40px;
    border: 2px solid #233d68;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: default;

    font-weight: 900;
    color: white;
}
.icon-add:hover {
    color: #233d68;
    background-color: white;
    border-color: #233d68;
}
.card-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.card-title > h5 {
    width: 50%;
}
.div-check {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
}
.progress {
    width: 100%;
    display: flex;
    justify-content: flex-start;
}
.q-option {
    background-color: white;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 5px;
    border: 1px solid #f2f2f2;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.q-option:hover {
    background-color: #ffe7a0;
    cursor: pointer;
}
.q-option-checked {
    background-color: #007bff !important;
    color: white;
    box-shadow: none;
}
.span-solution {
    margin-top: 20px;
    font-size: 1.8em;
}
.html-content {
    padding: 10px;
    margin-top: 20px;
    background-color: rgba(255, 255, 255, 1);
}
.container_youtube{
    width: 100%;
    height: 500px !important;
}
.activity_response-button{
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
}
.activity_score{
    font-size: 1.5em;
}
</style>
