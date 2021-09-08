/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require("./bootstrap");
window.Vue = require("vue");
window.Bus = new Vue();
window.toastr = require("toastr");
import CKEditor from "@ckeditor/ckeditor5-vue";
//import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap-vue/dist/bootstrap-vue.css";
import Game from "./components/Game";
import store from "./vuex/store";

// the main entrance
/* eslint-disable no-new */

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component("example-component", require("./components/ExampleComponent.vue").default);
// Vue.component('task-component', require('./components/TaskComponent.vue').default);
Vue.component("category-component", require("./components/CategoryComponent.vue").default);

Vue.component("select2", require("./components/Select2.vue").default);
Vue.component("user-component", require("./components/Usercomponent.vue").default);
Vue.component("type-component", require("./components/TypeUserComponent.vue").default);
Vue.component("resume-component", require("./components/ResumeComponent.vue").default);
Vue.component("checkbox", require("./components/Checkbox.vue").default);
Vue.component("class-component", require("./components/ClassComponent.vue").default);
Vue.component("blog-component", require("./components/BlogComponent.vue").default);
Vue.component("draw-c", require("./components/draw.vue").default);

Vue.component("home", require("./components/home.vue").default);
Vue.component("board", require("./components/board.vue").default);
Vue.component("footers", require("./components/footer.vue").default);
Vue.component("unit-class", require("./components/unitComponent.vue").default);
Vue.component("free-component", require("./components/freeComponent.vue").default);
Vue.component("freeu-component", require("./components/freeUnitComponent.vue").default);
Vue.component("course-component", () => import ("./components/courseComponent.vue"));
Vue.component("course-trimestre-component", () => import ("./components/courseTrimestreComponent.vue"));
Vue.component("course-view", require("./components/CourseView.vue").default);
Vue.component("semanal-component", require("./components/courseSemanalComponet.vue").default);
Vue.component("semanalact-component", require("./components/courseSemanalAct.vue").default);
Vue.component("list-component", require("./components/listClassComponent.vue").default);
Vue.component("list-activity", require("./components/listActivity.vue").default);
Vue.component("actividad-docente", require("./components/ActividadDocente.vue").default);
Vue.component("sincro-component", require("./components/SincroEvent.vue").default);
Vue.component("cuestionario-component", require("./components/Cuestionario.vue").default);
Vue.component("hangman-component", require("./components/hangman.vue").default);
Vue.component("evaluation-component", require("./components/EvaluationComponent.vue").default);
Vue.component("activ-component", require("./components/ActivityComponent.vue").default);
Vue.component("mycourse-component", require("./components/MyCourseComponent.vue").default);
Vue.component("consult-component", require("./components/ConsultComponent.vue").default);
Vue.component("frecuent-cuestions", require("./components/FrecuentCuestions.vue").default);
Vue.component("register-component", require("./components/RegisterComponent.vue").default);
Vue.component("mycourses-component", require("./components/MyCoursesComponent.vue").default);
Vue.component("coursest-component", require("./components/CoursesStComponent.vue").default);
Vue.component("evaluationst-component", require("./components/EvaluationStComponent.vue").default);
Vue.component("activityst-component", require("./components/ActivityStComponent.vue").default);
Vue.component("listevaluationst-component", require("./components/listevaluationStComponent.vue").default);
Vue.component("plan-component", require("./components/PlanComponent.vue").default);
Vue.component("changepassword-component", require("./components/changepassword.vue").default);
Vue.component("perfil-component", require("./components/PerfilComponent.vue").default);
Vue.component("TextInput", require("./components/TextInput.vue").default);

Vue.component("resetpass", require("./components/ResetPassComponent.vue").default);
Vue.component("trivia-component", require("./components/TriviaComponent.vue").default);
Vue.component("quiz-component", require("./components/QuizActivity.vue").default);
Vue.component("complete-component", require("./components/CompleteSentence.vue").default);
Vue.component("open-component", require("./components/QuizOpen.vue").default);
Vue.component("menu-lateral", require("./components/menulateral.vue").default);
Vue.component("mensajes-component",  () => import ("./components/mensajes.vue"));
Vue.component("mensajesenv-component", require("./components/mensajesEnv.vue").default);
Vue.component("actividad-component", require("./components/tareas.vue").default);
Vue.component("notas-component", require("./components/notas.vue").default);
Vue.component("boletin-component", require("./components/boletin.vue").default);
Vue.component("menu-docente", () => import ("./components/menudocente.vue"));
Vue.component("menu-docente-2", () => import ("./components/menudocente2.vue"));
Vue.component("perfil-docente", require("./components/perfildocente.vue").default);
Vue.component("anuncio-docente", require("./components/anunciodocente.vue").default);
Vue.component("actividadg-docente",  () => import ("./components/actividadGDocente.vue"));
Vue.component("anunciomc-component", require("./components/anunciomc.vue").default);
Vue.component("calendar-component", require("./components/calendarComponent.vue").default);
Vue.component("student-calendar-component", require("./components/studentCalendarComponent.vue").default);
Vue.component("redactar-component", require("./components/redactar.vue").default);
Vue.component("vmensaje-component", require("./components/vistamensaje.vue").default);

Vue.component("duplicarsemana-component", require("./components/duplicarSemana.vue").default);
Vue.component("game-component", require("./components/Game.vue").default);
Vue.component("juegos-component", require("./components/juegos.vue").default);
Vue.component("groups", require("./components/Groups.vue").default);
Vue.component("create-group", require("./components/CreateGroup.vue").default);
Vue.component("group-chat", require("./components/GroupChat.vue").default);
Vue.component("clasesst-component", require("./components/clasesSt.vue").default);
Vue.component("notasd-component", require("./components/notasDocente.vue").default);
Vue.component("actividadvd-component", require("./components/actividadVDocente.vue").default);
Vue.component("clasesd-component",()=>import("./components/clasesDocente.vue"));
Vue.component("crearc-component", require("./components/crearClase.vue").default);
Vue.component("editarc-component", require("./components/editarClase.vue").default);



Vue.component("bienvenida-estudiantes",() => import("./components/Bienvenida.vue"));
Vue.component("inicio-component", () => import("./components/inicio.vue"));
Vue.component("inscripcion-documentos",() => import("./components/formInscription.vue"));
Vue.component("ciclos-component", ()=>import("./components/homeCiclos.vue"));
Vue.component("userinfo", ()=>import("./components/UserInfo"));
Vue.component("answer", ()=>import("./components/Answer"));
Vue.component("favoritequestion", ()=>import("./components/FavoriteQuestion"));
Vue.component("porcentaje-component", ()=>import("./components/porcentajeNotas.vue"));
Vue.component("acceptanswer", ()=>import("./components/AcceptAnswer"));
Vue.component("answervote", ()=>import("./components/AnswerVote"));
Vue.component("questionvote", ()=>import("./components/QuestionVote"));
Vue.component("emoji-text", ()=>import("./components/text-emoji.vue"));

Vue.component("estudiante-adm", ()=>import("./components/estudianteAdm.vue"));
Vue.component("docente-adm", ()=>import("./components/docenteAdm.vue"));
Vue.component("cursos-adm", ()=>import("./components/cursosAdm.vue"));
Vue.component("semana-adm", ()=>import("./components/semanaAdm.vue"));
Vue.component("plan-adm", ()=>import("./components/planAdm.vue"));
Vue.component("planificacion-adm", ()=>import("./components/planificacionAdm.vue"));
Vue.component("vplan-adm", ()=>import("./components/vplanAdm.vue"));
Vue.component("reportes-adm", ()=>import("./components/reportesAdm.vue"));
Vue.component("menu-adm", ()=>import("./components/menuAdm.vue"));
Vue.component("chart-adm", ()=>import("./components/chart.vue"));
Vue.component("vclases-adm", ()=>import("./components/clases_adm.vue"));
Vue.component("institu-adm", ()=>import("./components/institucionesAdm.vue"));
Vue.component("cinstitu-adm", ()=>import("./components/crearInstituciones.vue"));
Vue.component("coordinador-adm", ()=>import("./components/coordinadorAdm.vue"));
Vue.component("modal-coord", ()=>import("./components/modalCoordAdm.vue"));
Vue.component("salon-adm", ()=>import("./components/salonAdm.vue"));
Vue.component("matricula", ()=>import("./components/matricula.vue"));
Vue.component("aperfil-adm", ()=>import("./components/AsignarPerfil.vue"));
Vue.component("adocente-adm", ()=>import("./components/asignarDocente.vue"));
Vue.component("aestudiante-adm", ()=>import("./components/asignarEstudiante.vue"));
Vue.component("importar-adm", ()=>import("./components/importAdm.vue"));
Vue.component("asistencia-adm", () => import("./components/asistencia.vue"));


Vue.component("duplicar-component",  () => import ("./components/duplicarGeneral.vue"));

//activities
Vue.component("activity-questionary", ()=>import("./components/activityQuestionaryComponent.vue"));
Vue.component("activity-complete-sentence", ()=>import("./components/activityCompleteSentenceComponent.vue"));
Vue.component("activity-crossword", ()=>import("./components/activityCrosswordComponent.vue"));
Vue.component("activity-relationship", ()=>import("./components/activityRelationshipComponent.vue"));

Vue.component("activity-student-play-component", ()=>import("./components/activityStudentPlayComponent.vue"));
Vue.component("editor-component", () => import("./components/editorComponent.vue"));
Vue.component("process-ribbon-component", () =>   import("./components/processRibbonComponent.vue"));

Vue.component("lectives-adm", () => import ("./components/lectivesAdmComponent.vue"));
Vue.component("lectives-adm-assing-teacher", () => import ("./components/lectivesAdmAssingTeacherComponent.vue"));
Vue.component("lectives-student-activities", () => import ("./components/lectivesStudentActivitiesComponent.vue"));
Vue.component("lectives-student-courses", () => import ("./components/lectivesStudentCoursesComponent.vue"));
Vue.component("lectives-teacher-planning", () => import ("./components/lectivesTeacherPlanningComponent.vue"));
Vue.component("lectives-teacher-planning-edit", () => import ("./components/lectivesTeacherPlanningEditComponent.vue"));
Vue.component("lectives-teacher-indicators", () => import ("./components/lectivesTeacherIndicatorsComponent.vue"));
Vue.component("lectives-teacher-weekly", () => import ("./components/lectivesTeacherWeeklyComponent.vue"));
Vue.component("lectives-teacher-courses", () => import ("./components/lectivesTeacherCoursesComponent.vue"));
Vue.component("lectives-teacher-courses-edit", () => import ("./components/lectivesTeacherCoursesEditComponent.vue"));
Vue.component("lectives-teacher-activities", () => import ("./components/lectivesTeacherActivitiesComponent.vue"));
Vue.component("lectives-teacher-activity", () => import ("./components/lectivesTeacherActivityComponent.vue"));
Vue.component("lectives-teacher-board", () => import ("./components/lectivesTeacherBoardComponent.vue"));
Vue.component("lectives-teacher-students", () => import ("./components/lectivesTeacherStudentsComponent.vue"));

Vue.component("lectives-teacher-notes", () => import ("./components/lectivesTeacherNotesComponent.vue"));


Vue.component("repository-component", () => import("./components/repositoryComponent.vue"));
Vue.component("create-repository", () => import("./components/repositoryCreate.vue"));
Vue.component("repository-students", () => import("./components/repositoryStudents.vue"));
Vue.component("repository-comments", () => import("./components/repositoryComments.vue"));
Vue.component("student-comments", () => import("./components/repositoryStudentComments.vue"));

Vue.component("memory-create", () => import("./components/crearMemoria.vue"));

Vue.component("repo-student", () => import("./components/repositoryStudentView.vue"));
Vue.component("repository-upload", () => import("./components/repositoryStudentUpload.vue"));
Vue.component("test-firebase", () => import("./components/testFirebase.vue"));


//cursos
Vue.component("admin-courses", () => import ("./components/adminCoursesComponent.vue"));
Vue.component("admin-module", () => import ("./components/adminModuleComponent.vue"));
Vue.component("teacher-courses", () => import ("./components/teacherCoursesComponent.vue"));
Vue.component("teacher-module", () => import ("./components/teacherModuleComponent.vue"));
Vue.component("teacher-course", () => import ("./components/teacherCourseComponent.vue"));
Vue.component("student-courses", () => import ("./components/studentCoursesComponent.vue"));
Vue.component("student-module", () => import ("./components/studentModuleComponent.vue"));
Vue.component("student-course", () => import ("./components/studentCourseComponent.vue"));
Vue.component("teacher-students", () => import ("./components/teacherStudentsComponent.vue"));
Vue.component("teacher-student", () => import ("./components/teacherStudentComponent.vue"));
Vue.component("teacher-student-module-select", () => import ("./components/teacherStudentModuleSelectComponent.vue"));
Vue.component("teacher-student-class-select", () => import ("./components/teacherStudentClassSelectComponent.vue"));
Vue.component("teacher-student-class-content", () => import ("./components/teacherStudentClassContentComponent.vue"));
Vue.component("notification-component", () => import ("./components/notificationComponent.vue"));
Vue.use(CKEditor);

Vue.component("purchase-plan", () => import ("./components/purchasePlanComponent.vue"));
Vue.component("purchase-plan-login", () => import ("./components/purchasePlanLoginComponent.vue"));
Vue.component("purchase-module-login", () => import ("./components/purchaseModuleLoginComponent.vue"));
Vue.component("purchase-area-login", () => import ("./components/purchaseAreaLoginComponent.vue"));
Vue.component("purchase-plan-resume", () => import ("./components/purchasePlanResumeComponent.vue"));
Vue.component("purchase-module-resume", () => import ("./components/purchaseModuleResumeComponent.vue"));
Vue.component("purchase-area-resume", () => import ("./components/purchaseAreaResumeComponent.vue"));
Vue.component("purchase-plan-pay-mercadopago-result", () => import ("./components/purchasePlanPayResultMercadopagoComponent.vue"));
Vue.component("purchase-plan-pay-payu-result", () => import ("./components/purchasePlanPayResultPayuComponent.vue"));
Vue.component("purchase-plan-pay-error", () => import ("./components/purchasePlanPayErrorComponent.vue"));
Vue.component("purchase-tutorial-resume", () => import ("./components/purchaseTutorialResumeComponent.vue"));
Vue.component("purchase-tutorial-login", () => import ("./components/purchaseTutorialLoginComponent.vue"));

Vue.component("plan-class-component", ()=>import("./components/planClassComponent.vue"));

Vue.component("activities-teacher-component", ()=>import("./components/ActivitiesTeacher.vue"));

Vue.component("clases-teacher",()=>import("./components/clasesTeacher.vue"));
//Refuerzo Escolar
Vue.component("homeGrados",()=>import("./components/homeGrados.vue"));
Vue.component("home-class",() => import ("./components/homeClassModule.vue"));

Vue.component("home-modulos", () => import ("./components/homeModulos.vue"));
Vue.component("bimestre-component", ()=> import("./components/bimestre.vue"));
Vue.component("bimestre-list-component", ()=> import("./components/bimestreList.vue"));
Vue.component("inicio-materias-component", ()=>import("./components/materiasEstudiantes.vue"));
Vue.component("contrato-educativo", ()=>import("./components/contratoEducativo.vue"));

Vue.component("list-area-component", ()=>import("./components/listAreasAdm.vue"));

Vue.component("student-progress-adm", ()=>import("./components/notasAdminStudets.vue"));
Vue.component("delete-user", ()=>import('./components/deleteUsers.vue'));

const app = new Vue({el: "#app", data: {}, store});
