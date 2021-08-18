<template>
    <div>
        <div>
            <div class="row">
                <div class="col-md-11 mx-auto">
                    <div class="custom-card text-center">
                        <h5 class="card-header fondo">
                            {{ weekly_plan.name }}
                        </h5>
                        <span
                            class="classroom-label"
                            style="font-size: 1.5em;"
                            >{{ nameArea }}</span
                        >
                    </div>
                    <div class="row" v-if="link_event">
                        <div class="col-12">
                            <b>Clase presencial:</b>
                        </div>
                    </div>
                    <div class="row" v-if="link_event">
                        <div class="col-md-6">
                            {{ name_event +" Fecha y hora: " +hour_event}}
                        </div>
                        <div class="col-md-6">
                              <a
                                class="btn btn-warning float-right"
                                :href="link_event"
                                target="_blank"
                                rel="noopener noreferrer"
                                >Ir a la clase</a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12"></div>
                        <div class="col-12">
                            <div class="progress">
                                <div
                                    class="progress-bar"
                                    style="background-color:#f79d52"
                                    v-bind:style="{
                                        width: course.progress + '%'
                                    }"
                                ></div>
                            </div>
                            {{ course.progress }}%
                        </div>
                    </div>

                    <div class="div-classes">
                        <div class="div-class">
                            <div class="title row">
                                <div class="col-8">
                                    <b>Clase:</b>
                                    <input
                                        type="text"
                                        class="form-control-plaintext"
                                        v-model="course.name"
                                        readonly
                                    />
                                </div>
                                <div class="col-4">
                                    <b>Intensidad:</b>
                                    <input
                                        type="number"
                                        class="form-control-plaintext"
                                        v-model="course.hourly_intensity"
                                        readonly
                                    />
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
                                <div
                                    class="col-10 div-resource"
                                    style="border-radius:8px;"
                                    v-if="item_content.content !='' && item_content.content !=null"
                                    v-bind:key="key_c"
                                >

                                    <h4
                                        style="color:#f79d52"
                                        v-if="
                                            item_content.content_type ===
                                                'DOCUMENT'
                                        "
                                    >
                                        Documento
                                    </h4>
                                    <h4
                                        style="color:#f79d52"
                                        v-else-if="
                                            item_content.content_type === 'LINK'
                                        "
                                    >
                                        Enlace
                                    </h4>
                                    <h4
                                        style="color:#f79d52"
                                        v-else-if="
                                            item_content.content_type ===
                                                'VIDEO'
                                        "
                                    >
                                        Video
                                    </h4>
                                     <h4
                                        style="color:#f79d52"
                                        v-else-if="
                                            item_content.content_type ===
                                                'YOUTUBE'
                                        "
                                    >
                                        Video
                                    </h4>
                                    <div class="form-item">
                                        <input
                                            class="form-control-plaintext"
                                            type="text"
                                            v-model="item_content.description"
                                            readonly
                                        />
                                    </div>
                                    <div class="form-item">
                                        <div class="form-button">                                                                                      
                                            <a
                                                class="btn btn-primary"
                                                v-if="
                                                    item_content.content_type ==='DOCUMENT'
                                                "
                                                v-on:click="
                                                    openDocument(item_content)
                                                "
                                                >Leer documento</a
                                            >
                                            <a
                                                class="btn btn-primary"
                                                v-if="
                                                    item_content.content_type === 'LINK'
                                                "
                                                v-on:click="
                                                    openLink(item_content)
                                                "
                                                 target="_blank"
                                                >Vamos a trabajar</a
                                            >
                                            <video
                                                id="vid"
                                                @playing="
                                                    playVideo(item_content)
                                                "
                                                v-if="
                                                    item_content.content_type ==='VIDEO'
                                                "
                                                controls
                                            >
                                                <source
                                                    v-bind:src="
                                                        item_content.content
                                                    "
                                                    type="video/mp4"
                                                />
                                            </video>
                                            <iframe v-if="item_content.content_type ==='YOUTUBE'" class="container_youtube"  v-bind:src="resolveYoutubeLink(item_content.content)" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                            </iframe>

                                        </div>
                                    </div>

                                </div>
                                 </template>
                            </div>
                            <div
                                class="row justify-content-center margin-top-50"
                                v-for="(act, key_a) in course.activities"
                                v-bind:key="key_a"
                            >
                                <div class="col-10">
                                    <div class="card">
                                        <div class="card-header card-title">
                                            <h5 style="color:#f79d52">
                                                Actividad N°{{ key_a + 1 }} :
                                                {{ act.name }}
                                            </h5>
                                            <button
                                                class="btn btn-primary"
                                                v-if="
                                                    act.interaction.state<3 &&
                                                        activity.id != act.id
                                                "
                                                @click.prevent="
                                                    openActivity(key_a)
                                                "
                                            >
                                                {{act.interaction.state==2?'Esperando calificación':'Presentar'}}
                                            </button>

                                            <button
                                                class="btn btn-warning"
                                                v-if="activity.id == act.id"
                                                @click.prevent="closeQuestion()"
                                            >
                                                Cancelar
                                            </button>
                                            <button
                                                class="btn btn-primary"
                                                v-if="
                                                  act.interaction.state==3 &&
                                                        activity.id != act.id
                                                "
                                                @click.prevent="
                                                    openFeedback(key_a)
                                                "
                                            >
                                                Ver retroalimentación
                                            </button>
                                        </div>
                                        <div
                                            class="card-body"
                                            v-if="activity.id == act.id"
                                        >
                                            <div class="row">
                                                <div class="col-12">
                                                    <b>Descripción:</b>
                                                    <textarea
                                                        class="form-control-plaintext"
                                                        v-model="
                                                            activity.description
                                                        "
                                                        readonly
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <activity-questionary v-if="activity.activity_type=='CUESTIONARIO'" v-bind:playing="true" v-bind:module="activity.module" v-bind:disabled="activity.interaction.state>1"></activity-questionary>
                                            <activity-complete-sentence v-if="activity.activity_type=='COMPLETAR_ORACION'" v-bind:playing="true" v-bind:module="activity.module" v-bind:disabled="activity.interaction.state>1"></activity-complete-sentence>
                                            <activity-relationship v-if="activity.activity_type=='RELACION'" v-bind:playing="true" v-bind:module="activity.module" v-bind:disabled="activity.interaction.state>1"></activity-relationship>
                                            <activity-crossword v-if="activity.activity_type=='CRUCIGRAMA'" v-bind:playing="true" v-bind:module="activity.module" v-bind:disabled="activity.interaction.state>1"></activity-crossword>
                                            <div class="activity_response-button">
                                                <button class="btn btn-primary" v-if="activity.interaction.state==1" @click="SaveResponseEvent(activity)">Enviar respuestas</button>

                                            </div>
                                            <div v-if="activity.interaction.state==3">Calificación: <span class="activity_score" >{{activity.interaction.score}}<small>/5</small></span></div>
                                        </div>
                                    </div>
                                </div>
                                <!--card -->
                            </div>
                        </div>
                    </div>
                    <div class="div-weekly-plan-btn-save">
                        <a
                            class="btn btn-warning"
                            v-on:click="returnPage"
                            >Regresar</a
                        >
                        <!-- <a
                            class="btn btn-primary float-right"
                            v-show="
                                course.progress == 100 &&
                                    course.next_class != false
                            "
                            :href="
                                '/estudiante/modulo/' +
                                    id_module +
                                    '/clase/' +
                                    course.next_class
                            "
                            >Continuar</a
                        > -->
                        <!-- <a
                            class="btn btn-primary float-right"
                            v-show="
                                course.progress == 100 &&
                                    course.next_class == false
                            "
                            :href="'/encuesta_estudiante/' + id_module"
                            >Continuar</a
                        > -->
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
import downloadjs from 'downloadjs';
Vue.use(VueFormWizard);
export default {
    props: ["id_module", "id_class", "returnPage"],
    data() {
        return {
            is_loading: false,
            weekly_plan: {},
            errors: [],
            weekly_plan_detail: [],
            nameArea: "",
            course: {
                content: [
                    {
                        content_type: "DOCUMENT",
                        content: "",
                        description: ""
                    },
                    {
                        content_type: "LINK",
                        content: "",
                        description: ""
                    },
                    {
                        content_type: "VIDEO",
                        content: "",
                        description: ""
                    },
                    {
                        content_type: "YOUTUBE",
                        content: "",
                        description: ""
                    }
                ],
                activities: [],
                description: "",
                hourly_intensity: 0,
                name: "",
                progress: 0
            },
            achievements: [],
            activity: {},
            name_event:"",
            hour_event:"",
            link_event:"",
            id_area:"",
            id_classroom:""
        };
    },
    mounted() {
        axios.get(`/showClass/${this.id_module}`).then(response => {
            this.achievements = response.data.achievements;

            this.nameArea = `${response.data.area.name} ${response.data.classroom.name}`;
            this.id_area= `${response.data.area.id}/${response.data.classroom.id} `;


           axios.get(`/getEvenNearStudent/${this.id_area}`).then(response => {
                this.name_event= response.data.name;
                this.hour_event= response.data.date_from;
                this.link_event= response.data.url
        });

        });
        axios.get(`/GetNameWeekly/${this.id_module}`).then(response => {
            this.weekly_plan = { name: response.data };
        });


        this.getCourseData();

    },
    methods: {
        selectOption(id_question, ix_option, question) {
            if (
                this.activity.interaction &&
                this.activity.interaction.state == 2
            ) {
                return;
            }

            axios
                .put(
                    `/api/student/module/${this.id_module}/class/${this.id_class}/activity/${this.activity.id}/question/${id_question}/response`,
                    { id_option: ix_option }
                )
                .then(response => {
                    question.student_response = { response: ix_option };

                    this.completeQuestion();
                });
        },
        completeQuestion() {
            let complete = false;
            this.activity.module.questions.forEach(q => {
                complete =
                    q.student_response && q.student_response.response != null;
            });

            this.activity.completed = complete;
        },
        openDocument(resource) {                
            let data = resource.content.split('://');                
            let documentDownloaded = `https://${data[1]}`;
            try {
                downloadjs(documentDownloaded);
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
        saveInteraction(resource) {
            axios
                .get(
                    `/api/student/module/${this.id_module}/class/${this.id_class}/resource/${resource.id}/interaction`
                )
                .then(response => {
                    //this.getCourseData();
                });
        },
        getCourseData() {
            if (this.id_class != 0) {
                axios
                    .get(
                        `/api/teacher/module/${this.id_module}/class/${this.id_class}`
                    )
                    .then(response => {
                        this.course = response.data;

                        if (this.course.content.length == 0) {
                            this.course.content = [
                                {
                                    content_type: "DOCUMENT",
                                    content: "",
                                    description: ""
                                },
                                {
                                    content_type: "LINK",
                                    content: "",
                                    description: ""
                                },
                                {
                                    content_type: "VIDEO",
                                    content: "",
                                    description: ""
                                },
                                {
                                    content_type: "YOUTUBE",
                                    content: "",
                                    description: ""
                                }
                            ];
                        }
                    });
            }
        },
        openActivity(id_activity) {
            this.activity = this.course.activities[id_activity];
            console.log(this.activity);
/*
            axios
                .put(
                    `/api/student/module/${this.id_module}/class/${this.id_class}/activity/${this.activity.id}/interaction`
                )
                .then(response => {});

            this.completeQuestion();*/
        },
        openFeedback(id_activity) {
            this.activity = this.course.activities[id_activity];
              console.log(this.activity);

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
        closeQuestion() {
            this.activity = {};

            //activate class
        },
        finalizeActivityQuestion() {
            axios
                .put(
                    `/api/student/module/${this.id_module}/class/${this.id_class}/activity/${this.activity.id}/interaction`,
                    { is_qualified: 1, qualified_date: new Date() }
                )
                .then(response => {
                    this.getCourseData();
                    this.closeQuestion();
                });
        },
        // returnPage() {
        //     window.location = `/estudiante/modulo/${this.id_module}`;
        // },
        addResource(resource_type) {
            this.course.content.push({
                content_type: resource_type,
                content: "",
                description: ""
            });
        },
        removeResource(index) {
            this.course.content.splice(index, 1);
        },
        removeActivity(index) {
            this.course.activities.splice(index, 1);
        },
        addActivity() {
            this.course.activities.push({
                name: "",
                description: "",
                activity_type: "",
                id_achievement: "",
                module: {},
                is_required: 1
            });
        },
        removeQuestion(activity, index) {
            activity.module.questions.splice(index, 1);
        },
        saveData() {
            axios
                .put(`/api/teacher/module/${this.id_module}/class`, this.course)
                .then(
                    response => {
                        // this.getPlanificationEvent(this.id_lective_planification);
                        toastr.success("Clases actualizadas correctamente");
                        // this.returnPage();
                    },
                    error => {
                        console.log(error);
                        toastr.error(
                            "ERROR:Por favor valide que la información esta completa"
                        );
                    }
                );
        },
        selectActivityType(activity) {
            switch (activity.activity_type) {
                case "CUESTIONARIO_UNICA_RTA":
                    activity.module = {
                        questions: [
                            {
                                question: "",
                                type_question: "SIMPLE_RTA",
                                options: [
                                    {
                                        content: ""
                                    },
                                    {
                                        content: ""
                                    }
                                ],
                                valid_answer_index: 0,
                                justify: ""
                            }
                        ]
                    };
                    break;
            }
        },
        AddQuestion(activity) {
            activity.module.questions.push({
                question: "",
                type_question: "SIMPLE_RTA",
                options: [
                    {
                        content: ""
                    },
                    {
                        content: ""
                    }
                ],
                valid_answer_index: 0,
                justify: ""
            });
        },
        AddOptionOnQuestion(activity, index) {
            activity.module.questions[index].options.push({
                content: ""
            });
        },
        RemoveOptionOnQuestion(activity, index_question, index) {
            activity.module.questions[index_question].options.splice(index, 1);
        },
        onFileChange(file, item_index) {
            console.log(item_index);
            this.is_loading = true;

            let files = file.target.files || file.dataTransfer.files;
            let data = new FormData();
            if (files.length > 0) {
                this.course.content[item_index].progress_bar_percent = 10;
                console.log("evento");
                this.initLoading(item_index, 20);
                let file = files[0];
                let _fileNameSplit = file.name.split(".");

                // if uploaded file is valid with validation rules
                let file_extension = _fileNameSplit[_fileNameSplit.length - 1];
                let file_name = file.name.replace(`.${file_extension}`, "");

                data.append("file", files[0]);
                data.append("name", file_name);
                data.append("count", `-class-${item_index}`);

                axios
                    .post("/fileDocument", data)
                    .then(response => {
                        this.course.content[item_index].content = `${
                            window.location.origin
                        }/uploads/clases/${file_name
                            .split(" ")
                            .join("_")}-class-${item_index}.${file_extension}`;
                        this.stopLooading(item_index);
                    })
                    .catch(err => {
                        this.stopLooading(item_index);
                    });
            } else {
                this.stopLooading(item_index);
            }
        },
        initLoading(item_index, percent) {
            if (
                this.course.content[item_index].progress_bar_percent != 0 &&
                this.course.content[item_index].progress_bar_percent <
                    percent &&
                percent < 100
            ) {
                this.course.content[item_index].progress_bar_percent =
                    this.course.content[item_index].progress_bar_percent + 20;
                setTimeout(() => {
                    this.initLoading(item_index, percent + 20);
                }, 2000);
            }
        },
        stopLooading(item_index) {
            this.course.content[item_index].progress_bar_percent = 100;

            setTimeout(() => {
                this.course.content[item_index].progress_bar_percent = 0;
                this.is_loading = false;
            }, 500);
        },
        resolveYoutubeLink(link_youtube)
        {
            if(!link_youtube.includes('/')) return link_youtube;

            let split_link=link_youtube.split('/');

            let split_simple_link=split_link[split_link.length-1].split('&')[0].split('=');

            return 'https://www.youtube.com/embed/'+split_simple_link[split_simple_link.length-1];
        },
        SaveResponseEvent(activity)
        {

            console.log(activity);

            axios
                .put(`/api/student/module/${this.id_module}/class/${this.id_class}/activity/${activity.id}/interaction`,activity)
                .then(
                    response => {
                        // this.getPlanificationEvent(this.id_lective_planification);
                        toastr.success("Actividad enviada correctamente");
                        location.reload();
                    },
                    error => {
                        console.log(error);
                        toastr.error(
                            "ERROR:Por favor valide que la información esta completa"
                        );
                    }
                );
        }
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
