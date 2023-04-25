<?php

use App\Message;
use App\User;
use App\Events\MessagePosted;
use App\Exports\ProductsExport;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Excel;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::group(['middleware' => 'auth', function () {
//add all your routes here
Route::get('/ciclos', function () {
    return view('homeCiclos');
});
Route::middleware('auth')->get('/user', function () {
    return view('user');
});
Route::post('sendEmailHome', 'TestingController@sendEmailHome')->name('sendEmailHome');
Route::middleware('auth')->get('/board', function () {
    return view('welcome');
});
Route::middleware('auth')->get('/memoria', function () {
    return view('memory');
});
Route::middleware('auth')->get('/task', function () {
    return view('class');
});
Route::middleware('auth')->get('/resume', function () {
    return view('resume');
});
Route::middleware('auth')->get('/class', function () {
    return view('class');
});
Route::middleware('auth')->get('/Clases', function () {
    return view('clasesSt');
});
Route::middleware('auth')->get('/notas_d', function () {
    return view('notasDocente');
});
Route::middleware('auth')->get('/actividad_docente', function () {
    return view('actividadVD');
});
// Route::get('/board', function () {
//     return view('board');
// });
// Route::get('/boards', function () {
//      return view('dboard');
// });

Route::middleware('auth')->get('/free', function () {
    return view('free');
});
Route::middleware('auth')->get('/freeUnit', function () {
    return view('freeU');
});
Route::get('/gracias', function () {
    return view('home');
});
Route::middleware('auth')->get('/course/{id_area}/{id_classroom}', function (String $id_area, String $id_classroom) {
    return view('course')->with('id_area', $id_area)->with('id_classroom', $id_classroom);
});
Route::middleware('auth')->get('/duplicar/{id_area}/{id_classroom}', function (String $id_area, String $id_classroom) {
    return view('duplicarGeneral')->with('id_area', $id_area)->with('id_classroom', $id_classroom);
});
Route::middleware('auth')->get('/duplicar-semana/', function () {
    return view('duplicarSemana');
});
Route::middleware('auth')->get('/crear_semana/{id_area}/{id_classroom}', function (String $id_area, String $id_classroom) {
    return view('semanal')->with('id_area', $id_area)->with('id_classroom', $id_classroom);
});
Route::middleware('auth')->get('/act_semana/{id_area}/{id_classroom}', function (String $id_area, String $id_classroom) {
    return view('semanalAct')->with('id_area', $id_area)->with('id_classroom', $id_classroom);
});

Route::middleware('auth')->get('/unit', function () {
    return view('unit');
});
Route::middleware('auth')->get('/payments', function () {
    return view('car');
});
Route::middleware('auth')->get('/ccourse', function () {
    return view('list');
});
Route::middleware('auth')->get('/listactivity', function () {
    return view('lista');
});
Route::middleware('auth')->get('/actividad_g', function () {
    return view('actividadgd');
});
Route::middleware('auth')->get('/sincro', function () {
    return view('sincro');
});
Route::middleware('auth')->get('/evaluation', function () {
    return view('evaluation');
});
Route::middleware('auth')->get('/vcourse', function () {
    return view('view');
});

Route::middleware('auth')->get('/consult', function () {
    return view('consult');
});
Route::middleware('auth')->get('/manual', function () {
    return view('cuestions');
});
Route::middleware('auth')->get('/mycourse', function () {
    return view('mycourse');
});
Route::middleware('auth')->get('/mycourses', function () {
    return view('mycourses');
});
Route::middleware('auth')->get('/courseSt', function () {
    return view('coursesSt');
});
Route::middleware('auth')->get('/calificationSt', function () {
    return view('calificationSt');
});
Route::middleware('auth')->get('/activitySt', function () {
    return view('activitySt');
});
Route::middleware('auth')->get('/calification', function () {
    return view('listevaluationSt');
});
Route::middleware('auth')->get('/plan', function () {
    return view('plan');
});
Route::middleware('auth')->get('/changePassword', function () {
    return view('changepassword');
});
Route::get('/miPerfil/{id_student}', function (String $id_student) {
    return view('perfil')->with('id_student', $id_student);
});

Route::middleware('auth')->get('/resetPass', function () {
    return view('resetPass');
});

Route::middleware('auth')->get('/trivia', function () {
    return view('trivia');
});
Route::middleware('auth')->get('/triviaimg', function () {
    return view('triviaimg');
});
Route::middleware('auth')->get('/quiz', function () {
    return view('quizopen');
});
Route::middleware('auth')->get('/sentence', function () {
    return view('quiz');
});
Route::middleware('auth')->get('/mensajes', function () {
    return view('mensajes');
});
Route::middleware('auth')->get('/Actividad', function () {
    return view('activ');
});
Route::middleware('auth')->get('/notas', function () {
    return view('notas');
});
Route::middleware('auth')->get('/boletin', function () {
    return view('boletin');
});
Route::middleware('auth')->get('/calendar', function () {
    return view('calendar')->with('type_user', Auth::user()->type_user);
});
Route::middleware('auth')->get('/calendario', function () {
    return view('calendar')->with('type_user', Auth::user()->type_user);
});
Route::middleware('auth')->get('/estudiante/calendario', function () {
    return view('studentCalendar')->with('type_user', Auth::user()->type_user);
});
Route::middleware('auth')->get('/perfil_d', function () {
    return view('perfild');
});
Route::middleware('auth')->get('/anuncio_d', function () {
    return view('anunciod');
});
Route::middleware('auth')->get('/anuncio_mc', function () {
    return view('anunciomc');
});
Route::middleware('auth')->get('/inicio', function () {
    return view('inicio');
});

Route::middleware('auth')->get('/materiasEst', function () {
    return view('materiasEstudiantes');
});

Route::middleware('auth')->get('/inscripcion-documentos', function () {
    return view('inscripcionDocumentos');
});
Route::middleware('auth')->get('/bienvenido', function () {
    return view('inicio');
});
Route::middleware('auth')->get('/juegos', function () {
    return view('juegos');
});
Route::middleware('auth')->get('/redactar', function () {
    return view('redactar');
});
Route::middleware('auth')->get('/vmensaje', function () {
    return view('vistamensaje');
});
Route::middleware('auth')->get('/clases_d', function () {
    return view('clasesDocente');
});

Route::middleware('auth')->get('/crear_clase/{id_area}/{id_classroom}', function (String $id_area, String $id_classroom) {
    return view('crearClase')->with('id_area', $id_area)->with('id_classroom', $id_classroom);
});
Route::middleware('auth')->get('/editar_clase/{id_class}/{id_area}/{id_classroom}', function (String $id_class, String $id_area, String $id_classroom) {
    return view('editarClase')->with('id_class', $id_class)->with('id_area', $id_area)->with('id_classroom', $id_classroom);
});

Route::middleware('auth')->get('/general_adm', function () {
    return view('cursosAdm');
});

Route::middleware('auth')->get('/semana_adm', function () {
    return view('semanaAdm');
});
Route::middleware('auth')->get('/planificacion', function () {
    return view('vplanAdm');
});
Route::middleware('auth')->get('/vclases_adm', function () {
    return view('vclasesAdm');
});
Route::middleware('auth')->get('/planeacion', function () {
    return view('planificacionAdm');
});
Route::middleware('auth')->get('/plan_adm', function () {
    return view('planAdm');
});
Route::middleware('auth')->get('/estudiante_adm', function () {
    return view('estudianteAdm');
});
Route::middleware('auth')->get('/docente_adm', function () {
    return view('docenteAdm');
});
Route::middleware('auth')->get('/reportes', function () {
    return view('reportesAdm');
});
Route::middleware('auth')->get('/instituciones_adm', function () {
    return view('institucionesAdm');
});
Route::middleware('auth')->get('/instituciones_crear', function () {
    return view('crearInstitucion');
});
Route::middleware('auth')->get('/perfil_asignar', function () {
    return view('asignarPerfil');
});
Route::middleware('auth')->get('/docente_asignar', function () {
    return view('asignarDocente');
});
Route::middleware('auth')->get('/estudiante_asignar', function () {
    return view('asignarEstudiante');
});
Route::middleware('auth')->get('/coordinador_adm', function () {
    return view('coordinadorAdm');
});
Route::middleware('auth')->get('/salon_adm', function () {
    return view('salonAdm');
});
Route::middleware('auth')->get('/asistencia', function () {
    return view('asistencia');
});
Route::get('/matricula', function () {
    return view('matricula');
});

Route::middleware('auth')->get('/porcentaje/{id_area}/{id_classroom}', function (String $id_area, String $id_classroom) {
    return view('porcentajeNotas')->with('id_area', $id_area)->with('id_classroom', $id_classroom);
});
Route::middleware('auth')->get('/chat', 'HomeController@CreateGroup')->name('chat');
// Lessons
Route::middleware('auth')->delete('lessons/destroy', 'LessonsController@massDestroy')->name('lessons.massDestroy');
Route::resource('lessons', 'LessonsController');

// School Classes
Route::middleware('auth')->delete('school-classes/destroy', 'SchoolClassesController@massDestroy')->name('school-classes.massDestroy');
Route::resource('school-classes', 'SchoolClassesController');

Route::get('horario', 'CalendarController@index')->name('calendar.index');
Route::put('/changePassword', 'UserController@changePassword')->name('changePassword');


Route::middleware('auth')->get('showUser', 'UserController@show')->name('users_save');
Route::middleware('auth')->post('img_user', 'UserController@uploadFile')->name('img_user');
Route::get('getStudents/{id}', 'UserController@getStudents');
Route::middleware('auth')->get('getStudentsByClassroom', 'UserController@getStudentsByClassroom');

Route::middleware('auth')->post('savePrintDoc', 'HomeController@savePrintDoc')->name('savePrintDoc');
Route::get('downloadFile', 'HomeController@downloadFile')->name('downloadFile');


Route::middleware('auth')->get('info_user', 'UserController@show')->name('info_user');
Route::middleware('auth')->get('coursePlanification/{id_area}/{id_classroom}', 'CoursesController@index');
Route::middleware('auth')->get('GetCourses', 'CourseController@GetCourses');
Route::middleware('auth')->get('GetCategories', 'CategoryController@GetCategories');
Route::middleware('auth')->get('GetTypeU', 'CategoryController@GetTypeU');
Route::middleware('auth')->get('GetSubcategories/{id}', 'CategoryController@GetSubcategories');
/* Get unit and topic */
Route::get('GetUnits/{id}', 'courseController@GetUnits');
Route::get('GetTopics/{id}', 'courseController@GetTopics');
//Route::get('/home', 'HomeController@index')->name('home');
Route::get('testsendemail/{email}', 'TestingController@sendemail');
Auth::routes();

Route::resource('activities', 'ActivitiesController', ['except' => 'show', 'create', 'edit']);;
Route::resource('types', 'TypeUserController', ['except' => 'show', 'create', 'edit']);;
Route::resource('tasks', 'TaskController', ['except' => 'show', 'create', 'edit']);;
Route::resource('categories', 'CategoryController', ['except' => 'show', 'create', 'edit']);;
Route::resource('users', 'UserController', ['except' => 'show', 'create', 'edit']);;
Route::resource('resumes', 'ResumeController', ['except' => 'show', 'create', 'edit']);;
Route::resource('courses', 'courseController', ['except' => 'show', 'create', 'edit']);
Route::resource('Courses', 'CoursesController', ['except' => 'show', 'create', 'edit']);
Route::delete('CoursesTrimDelete/{id_quaterly}','CoursesController@destroyTrim');
Route::resource('Class', 'ClassController', ['except' => 'show', 'create', 'edit']);
Route::get('GetClass', 'ClassController@getClass');
Route::get('showClass/{id}', 'ClassController@show')->name('showClass');
Route::get('editClass/{id}', 'ClassController@findClass')->name('editClass');
Route::get('GetNameArea/{id_area}/{id_classroom}', 'ClassController@getNameArea')->name('GetNameArea');
Route::get('getActivity/{id_1}/{id_2}', 'ActivityController@indexActivityByArea')->name('getActivity');
Route::get('getActivityById/{id}', 'ActivityController@getActivityById')->name('getActivityById');
Route::resource('Activity', 'ActivityController', ['except' => 'show', 'create', 'edit']);
Route::get('trivia/getAllQuestions/{id}', 'ActivityController@getAllQuestions');
Route::get('trivia/{id}', 'ActivityController@activityId');
Route::post('actividad_d/Activity', 'ActivityController@store');
Route::get('showTrivia/{id}', 'ActivityController@showTrivia');



Route::post('createEvent', 'EventsController@createEvent')->name('createEvent');
Route::get('/getAllEvents', 'EventsController@indexEvents')->name('getAllEvents');
Route::get('editEvent/{id}', 'EventsController@findEvent')->name('editEvent');
Route::put('updateEvent', 'EventsController@updateEvent')->name('updateEvent');
Route::get('deleteEvent/{id}', 'EventsController@destroy')->name('deleteEvent');

Route::middleware('auth')->get('/actividad_d/{id}', 'ClassController@activityWeekId')->name('actividad_d');
Route::middleware('auth')->get('/actividad_d/getClass/{id}', 'ClassController@getClassId')->name('getClass');
Route::post('courseWeekly', 'CoursesController@courseWeekly')->name('courseWeekly');
Route::get('GetArearByUser', 'CoursesController@getAreaByUser')->name('GetArearByUser');

// Rutas capturar actividades y entregas

Route::get('getAllActivitiesUser', 'ActivityController@getAllActivitiesRepositories')->name('getAllActivitiesUser');


Route::get('getEvenNearStudent/{id_area}/{id_classroom}', 'EventsController@eventNearStudent')->name('getEvenNearStudent');

Route::get('GetWeek', 'CoursesController@getWeek');
Route::get('editGetWeek/{id_area}/{id_classroom}', 'CoursesController@editGetWeek')->name('editGetWeek');
Route::get('editGetWeek/{id_area}/{id_classroom}/{id_bimestre}', 'CoursesController@editGetWeekTeacher');
Route::get('editOneWeek/{id_area}/{id_classroom}', 'CoursesController@editOneWeek')->name('editOneWeek');
Route::get('viewGetWeek/{id_area}/{id_classrom}/{id_bimestre}', 'CoursesController@viewGetWeek')->name('viewGetWeek');
Route::get('showWeek/{id}', 'CoursesController@showWeek');
Route::put('updateCourseWeekly', 'CoursesController@updateCourseWeekly');
Route::delete('destroyCourseWeekly/{id_course_weekly}', 'CoursesController@destroyCourseWeekly');
Route::resource('course_unit', 'Course_unitController', ['except' => 'show', 'create', 'edit']);;
Route::get('/home', 'HomeController@index')->name('home');
Route::post('/SaveTerms', 'HomeController@UserTerms')->name('SaveTerms');
Route::get('/getTerms', 'HomeController@getUserTerms')->name('getTerms');
Route::delete('/deleteWeekly/{id_weekly_plan}','CoursesController@deleteWeekly');

//Almacenar las notas
Route::post('saveIndicator', 'ScoreController@saveIndicator')->name('saveIndicator');
Route::get('getIndicator/{id}', 'ScoreController@getIndicator')->name('getIndicator');
Route::post('saveScore', 'ScoreController@store')->name('saveScore');
Route::get('StudentsByArea/{id_1}/{id_2}', 'ScoreController@getStudentByArea')->name('StudentsByArea');
Route::post('deleteIndicator', 'ScoreController@deleteIndicator')->name('deleteIndicator');

// Chat
Route::resource('groups', 'GroupController');

Route::resource('conversations', 'ConversationController');

/* Capturar los mensahe de una conversacion */
Route::get('conversation/{id}', 'ConversationController@getConversation')->name('conversation');

Route::post('fileUpload', 'ConversationController@uploadFile')->name('fileUpload');


Route::post('fileDocument', 'ClassController@uploadFile')->name('fileDocument');
// actualizar documentos de las clases
Route::post('fileDocumentUpdate', 'ClassController@uploadFileUpdate')->name('fileDocumentUpdate');
// Actualizar una clase
Route::put('updateClass', 'ClassController@updateClass')->name('updateClass');

// Save audio Blop
Route::post('fileUploadAudio', 'ConversationController@saveAudio')->name('fileUploadAudio');

//Rutas foro

Route::get('/questions', 'QuestionController@index')->name('questions');

Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');

// Route::resource('/questions_source', 'QuestionController');
Route::get('createQuestion', 'QuestionController@create')->name('createQuestion');

Route::post('storeQuestion', 'QuestionController@store')->name('storeQuestion');
Route::get('showQuestion/{id}', 'QuestionController@show')->name('showQuestion');

Route::get('editQuestion/{id}', 'QuestionController@edit')->name('editQuestion');
Route::post('updateQuestion', 'QuestionController@update')->name('updateQuestion');

Route::post('deleteQuestion/{id}', 'QuestionController@destroy')->name('deleteQuestion');
// route set for all answer for a particular question
// ---------------------------------------------------
Route::resource('/questions.answers', 'AnswerController')->except(['index', 'create', 'show']);

Route::post('storeAnswer', 'AnswerController@store')->name('storeAnswer');

/* Rutas de la mesajería
     */
Route::post('sendMessages', 'MessagingController@store')->name('sendMessages');
Route::put('updateMessages', 'MessagingController@update')->name('updateMessages');
Route::get('getReceivedMessage', 'MessagingController@showReceivedMessage')->name('showReceivedMessage');
Route::get('getSentMessage', 'MessagingController@showSentMessage')->name('showSentMessage');
Route::get('getMessage/{id}', 'MessagingController@showMessage')->name('getMessage');
Route::middleware('auth')->get('/enviados', function () {
    return view('mensajeEnv');
});
/* Rutas del administrador
     */

Route::get('getUsers', 'AdministratorController@indexUsers')->name('getUsers');
Route::get('getStudents', 'AdministratorController@getStudents')->name('getStudents');
Route::get('getParents','AdministratorController@getParents');
Route::get('getCoords', 'AdministratorController@indexCoords')->name('getCoords');
Route::get('getTeachers', 'AdministratorController@indexTeachers')->name('getTeachers');
Route::get('getUsersAssigned', 'AdministratorController@indexStudentsTeachersAssigned')->name('getUsersAssigned');
Route::post('assignStudents', 'AdministratorController@assignStudents')->name('assignStudents');
Route::post('assignTeachers', 'AdministratorController@assignTeachers')->name('assignTeachers');
Route::get('getState', 'AdministratorController@getAllState')->name('getState');
Route::get('getInstitution', 'AdministratorController@indexInstitution')->name('getInstitution');
Route::get('getSections', 'AdministratorController@getSections')->name('getSections');
Route::get('getCity/{id}', 'AdministratorController@findCity')->name('getCity');
Route::post('createInstitution', 'AdministratorController@createInstitution')->name('createInstitution');
Route::get('findInstitution/{id}', 'AdministratorController@findInstitution')->name('findInstitution');
Route::put('updateInstitution', 'AdministratorController@updateInstitution')->name('updateInstitution');
Route::post('createGrade', 'AdministratorController@createGrade')->name('createGrade');
Route::post('createClassroom', 'AdministratorController@createClassroom')->name('createClassroom');
Route::post('createArea', 'AdministratorController@createArea')->name('createArea');
Route::get('getGrade', 'AdministratorController@findGrade')->name('getGrade');
Route::get('getArea', 'AdministratorController@findArea')->name('getArea');
Route::get('getClassroom', 'AdministratorController@findClassroom')->name('getClassroom');


// route set for favorite answer
// -------------------------------
Route::post('/answers/{answer}/accept', 'AcceptAnswerController')->name('answers.accept');

// route set for favorite question mark
// -----------------------------------

Route::post('/questions/{question}/favorite', 'FavoriteQuestionController@store')->name('questions.favorite');
Route::delete('/questions/{question}/favorite', 'FavoriteQuestionController@destroy')->name('questions.favorite');

// voting the question
// --------------------

Route::post('/questions/{question}/vote', 'VoteQuestionController')->name('questions.vote');

// voting the answer
// --------------------
Route::post('/answers/{answer}/vote', 'VoteAnswerController')->name('answers.vote');

// excel
Route::get('/excel', function () {
    return Excel::download(new ProductsExport(2020), 'users.xlsx');
});
// chart
Route::get('chart', 'UserChartController@index');

//pdf
Route::get('pdfview', array('as' => 'pdfview', 'uses' => 'BestInterviewQuestionController@pdfview'));

//importacion profesores
$router->get('import', 'ImportController@importTeacherClassroom');
//importacion estudiantes
$router->get('importStudent', 'ImportController@importStudentClassroom');
// Carga masiva usuario
$router->get('importUsers', 'ImportController@importUsers');
Route::post('documentoimp','ImportController@uploadFiles');
Route::post('uploadFileAssignStudent','ImportController@uploadFileAssignStudent');
Route::post('uploadFileAssignTeachers','ImportController@uploadFileAssignTeachers');

Route::middleware('auth')->get('/importar_adm', function () {
    return view('imports.importB');
});
// }]);
// Modulo del repositorio de clases

Route::middleware('auth')->get('/repository', function () {
    return view('repository');
});
Route::middleware('auth')->get('/createrepository', function () {
    return view('repositoryCreate');
});
Route::middleware('auth')->get('/repository/students/{id_repo}', function (String $id_repo) {
    return view('repositoryStudents')->with('id_repo', $id_repo);
});
Route::middleware('auth')->get('/repository/comments/{id_student}/{id_repo}', function (String $id_student, String $id_repo) {
    return view('repositoryComments')->with('id_student', $id_student)->with('id_repo', $id_repo);
});
Route::middleware('auth')->get('/repository/student/comment/{id_repo}', function (String $id_repo) {
    return view('repositoryStudentComments')->with('id_repo', $id_repo);
});
Route::middleware('auth')->get('/repository/student', function () {
    return view('repositoryStudentView');
});
Route::middleware('auth')->get('/repository/student/upload/{id_repo}', function (String $id_repo) {
    return view('repositoryStudentUpload')->with('id_repo', $id_repo);
});
Route::post('/saveRepository', 'RepositoryController@store')->name('saveRepository');
Route::get('/getRepository/{id_area}/{id_classroom}', 'RepositoryController@show')->name('getRepository');
Route::get('/getRepoStudent/{id_area}/{id_classroom}', 'RepositoryController@showStudent')->name('getRepositoryStudent');
Route::get('/getRepositoryStudents/{id_repo}', 'RepositoryController@showRepositoryStudents')->name('getRepositoryStudents');
Route::get('/showRepository/{id_repo}', 'RepositoryController@showRepository')->name('showRepository');
Route::get('/showRepositoryComments/{id_student}/{id_repo}', 'RepositoryController@showRepositoryComments')->name('showRepositoryComments');
Route::get('/showRepositoryCommentsStudents/{id_repo}', 'RepositoryController@showRepositoryCommentsStudents')->name('showRepositoryCommentsStudents');
Route::get('/api/repository/student', 'RepositoryController@getPendingRepositories');

Route::post('/saveRepoComment', 'RepositoryController@storeRepositoryComment')->name('saveRepoComment');
Route::post('/saveRepoStUpload', 'RepositoryController@storeRepositoryStudent')->name('saveRepoStUpload');

/*login personalizado permite verificar suscripcion*/
Route::get('/', function () {
    return view('home');
});
Route::get('/loginNew', function () {
    return view('auth.login');
})->name('loginNew');
Route::get('/registerNew', function () {
    return view('auth.register');
})->name('registerNew');
Route::post('/login2', 'UserController@loginWeb')->name('login2');
Route::post('/resetPassword', 'UserController@resetPassword')->name('resetPassword');
Route::post('users_save', 'UserController@store')->name('users_save');
Route::get('Courses_save', 'CoursesController@storeNew')->name('Courses_save');
Route::get('/logout2', 'UserController@logOut')->name('logout2');
Route::post('/login/client/web', 'UserController@loginClientWeb')->name('login_client_web');


//CONTROLLERS CLIENT
Route::middleware('auth')->get('/cliente/cuenta', function () {
    return view('clientAccount');
});
Route::middleware('auth')->get('/cliente/estudiantes', function () {
    return view('clientStudents');
});
Route::middleware('auth')->get('/cliente/planes', function () {
    return view('clientPlans');
});
Route::middleware('auth')->get('/cliente/creditos', function () {
    return view('clientCredits');
});

//LECTIVAS
//Módulo de electivas usuario Administrador
Route::middleware('auth')->get('/admin/lectives', function () {
    return view('lectivesAdm');
});
Route::middleware('auth')->get('/admin/lectives-teacher', function () {
    return view('lectivesAdmAssingTeacher');
});
//Módulo de electivas usuario Docente
Route::middleware('auth')->get('/teacher/lectives/planning', function () {
    return view('lectivesTeacherPlanning');
});
Route::middleware('auth')->get('/teacher/lectives/planning/{id_lective_planification}', function (int $id_lective_planification) {
    return view('lectivesTeacherPlanningEdit')->with('id_lective_planification', $id_lective_planification);
});
Route::middleware('auth')->get('/teacher/lectives/planning/{id_lective_planification}/indicators', function (int $id_lective_planification) {
    return view('lectivesTeacherIndicators')->with('id_lective_planification', $id_lective_planification);
});

Route::middleware('auth')->get('/teacher/lectives/planning/{id_lective_planification}/weekly', function (int $id_lective_planification) {
    return view('lectivesTeacherWeekly')->with('id_lective_planification', $id_lective_planification);
});

Route::middleware('auth')->get('/teacher/lectives/planning/{id_lective_planification}/weekly/{id_weekly_plan}/course', function (int $id_lective_planification, int $id_weekly_plan) {
    return view('lectivesTeacherCoursesEdit')->with('id_lective_planification', $id_lective_planification)->with('id_weekly_plan', $id_weekly_plan);
});
Route::middleware('auth')->get('/teacher/lectives/planning/{id_lective_planification}/weekly/{id_weekly_plan}/course/{id_course}/activities', function (int $id_lective_planification, int $id_weekly_plan, $id_course) {
    return view('lectivesTeacherActivity')->with('id_lective_planification', $id_lective_planification)->with('id_weekly_plan', $id_weekly_plan)->with('id_course', $id_course);
});

Route::middleware('auth')->get('/teacher/lectives/activities', function () {
    return view('lectivesTeacherActivities');
});


Route::middleware('auth')->get('/teacher/lectives/courses', function () {
    return view('lectivesTeacherCourses');
});
Route::middleware('auth')->get('/teacher/lectives/students', function () {
    return view('lectivesTeacherStudents');
});

Route::middleware('auth')->get('/teacher/lectives/notes', function () {
    return view('lectivesTeacherNotes');
});
Route::middleware('auth')->get('/teacher/lectives/board', function () {
    return view('lectivesTeacherBoard');
});
//Módulo de electivas usuario Estudiante
Route::middleware('auth')->get('/student/lectives/courses', function () {
    return view('lectivesStudentCourses');
});

Route::middleware('auth')->get('/student/lectives/activities', function () {
    return view('lectivesStudentActivities');
});

/* LEADS */
Route::post('saveLead', 'ClienteController@saveLead')->name('saveLead');
Route::post('saveLeadFiles', 'ClienteController@uploadFile')->name('saveLeadFiles');


// CLASES
Route::get('GetNameWeekly/{id_class}', 'ClassController@getWeeklyName')->name('GetNameWeekly');

Route::middleware('auth')->get('/docente/clases', function () {
    return view('teacherCourses');
});
Route::get('/admin/modulo/{id_module}', function (int $id_module) {
    return view('adminModule')->with('id_module', $id_module);
});

Route::middleware('auth')->get('/docente/modulo/{id_module}', function (int $id_module) {
    return view('teacherModule')->with('id_module', $id_module);
});

Route::middleware('auth')->get('/docente/modulo/{id_module}/clase/nueva', function (int $id_module) {
    return view('teacherCourse')->with('id_module', $id_module)->with('id_class', 0);
});

Route::middleware('auth')->get('/docente/modulo/{id_module}/clase/{id_class}', function (int $id_module, int $id_class) {
    return view('teacherCourse')->with('id_module', $id_module)->with('id_class', $id_class);
});

Route::middleware('auth')->get('/docente/estudiantes', function () {
    return view('teacherStudents');
});

Route::middleware('auth')->get('/docente/area/{id_area}/curso/{id_classroom}/estudiante/{id_student}', function (int $id_area, int $id_classroom, int $id_student) {
    return view('teacherStudent')->with('id_area', $id_area)->with('id_classroom', $id_classroom)->with('id_student', $id_student);
});

Route::middleware('auth')->get('/docente/area/{id_area}/curso/{id_classroom}/estudiante/{id_student}/modulo/{id_module}', function (int $id_area, int $id_classroom, int $id_student, int $id_module) {
    return view('teacherStudent')->with('id_area', $id_area)->with('id_classroom', $id_classroom)->with('id_student', $id_student)->with('id_module', $id_module);
});

Route::middleware('auth')->get('/docente/area/{id_area}/curso/{id_classroom}/estudiante/{id_student}/modulo/{id_module}/clase/{id_class}', function (int $id_area, int $id_classroom, int $id_student, int $id_module, int $id_class) {
    return view('teacherStudent')->with('id_area', $id_area)->with('id_classroom', $id_classroom)->with('id_student', $id_student)->with('id_module', $id_module)->with('id_class', $id_class);
});


Route::middleware('auth')->get('/estudiante/clases', function () {
    return view('studentCourses');
});

Route::middleware('auth')->get('/estudiante/modulo/{id_module}', function (int $id_module) {
    return view('studentModule')->with('id_module', $id_module);
});

Route::middleware('auth')->get('/estudiante/modulo/{id_module}/clase/nueva', function (int $id_module) {
    return view('studentCourse')->with('id_module', $id_module)->with('id_class', 0);
});

Route::middleware('auth')->get('/estudiante/modulo/{id_module}/clase/{id_class}', function (int $id_module, int $id_class) {
    return view('studentCourse')->with('id_module', $id_module)->with('id_class', $id_class);
});

Route::middleware('auth')->get('/admin/clases', function () {
    return view('adminCourses');
});


//CONTROLLERS PURCHASE
Route::middleware('auth')->get('/compra/pagar/resultado/payu', 'PurchasedController@payResultPayu');
Route::middleware('auth')->get('/compra/pagar/resultado/mercadopago', 'PurchasedController@payResultMercadopago');
Route::middleware('auth')->get('/compra/pagar/payu/{data_string}', 'PurchasedController@payPayu');
Route::middleware('auth')->get('/compra/pagar/mercadopago/{data_string}', 'PurchasedController@payMercadopago');


Route::get('/compra/plan', function () {
    return view('purchasePlan')->with('voucher', '');
});
Route::get('/compra/plan/v/{voucher}', function (string $voucher) {
    return view('purchasePlan')->with('voucher', $voucher);
});
Route::get('/compra/plan/{plan_type}/modulo/{module_id}/ingresar/p/{payment_code}', function (string $plan_type, int $module_id, String $payment_code) {
    return view('purchaseModuleLogin')->with('plan_type', $plan_type)->with('module_id', $module_id)->with('voucher', '')->with('payment_code', $payment_code);
});
Route::get('/compra/plan/{plan_type}/modulo/{module_id}/ingresar/v/{voucher}/p/{payment_code}', function (string $plan_type, string $voucher, int $module_id, String $payment_code) {
    return view('purchaseModuleLogin')->with('plan_type', $plan_type)->with('module_id', $module_id)->with('voucher', $voucher)->with('payment_code', $payment_code);
});
Route::get('/compra/plan/{plan_type}/area/{area_id}/ingresar/p/{payment_code}', function (string $plan_type, int $area_id, String $payment_code) {
    return view('purchaseAreaLogin')->with('plan_type', $plan_type)->with('area_id', $area_id)->with('voucher', '')->with('payment_code', $payment_code);
});
Route::get('/compra/plan/{plan_type}/area/{area_id}/ingresar/v/{voucher}/p/{payment_code}', function (string $plan_type, string $voucher, int $area_id, String $payment_code) {
    return view('purchaseAreaLogin')->with('plan_type', $plan_type)->with('area_id', $area_id)->with('voucher', $voucher)->with('payment_code', $payment_code);
});
Route::get('/compra/plan/{plan_type}/cop/{pago_pesos}/usd/{pago_usd}/ingresar/p/{payment_code}', function (string $plan_type, String $pago_pesos, String $pago_usd, String $payment_code) {
    return view('purchasePlanLogin')->with('plan_type', $plan_type)->with('pago_pesos', $pago_pesos)->with('pago_usd', $pago_usd)->with('voucher', '')->with('payment_code', $payment_code);
});
Route::get('/compra/plan/{plan_type}/ingresar/v/{voucher}', function (string $plan_type, string $voucher, String $payment_code) {
    return view('purchasePlanLogin')->with('plan_type', $plan_type)->with('voucher', $voucher)->with('payment_code', $payment_code);
});
Route::get('/compra/plan/{plan_type}/modulo/{module_id}/resumen', function (string $plan_type, int $module_id) {
    return view('purchaseModuleResume')->with('plan_type', $plan_type)->with('module_id', $module_id)->with('voucher', '');
});
Route::get('/compra/plan/{plan_type}/modulo/{module_id}/resumen/v/{voucher}', function (string $plan_type, int $module_id, string $voucher) {
    return view('purchaseModuleResume')->with('plan_type', $plan_type)->with('module_id', $module_id)->with('voucher', $voucher);
});
Route::get('/compra/plan/{plan_type}/area/{area_id}/resumen', function (string $plan_type, int $area_id) {
    return view('purchaseAreaResume')->with('plan_type', $plan_type)->with('area_id', $area_id)->with('voucher', '');
});
Route::get('/compra/plan/{plan_type}/area/{area_id}/resumen/v/{voucher}', function (string $plan_type, int $area_id, string $voucher) {
    return view('purchaseAreaResume')->with('plan_type', $plan_type)->with('area_id', $area_id)->with('voucher', $voucher);
});
Route::get('/compra/plan/{plan_type}/resumen', function (string $plan_type) {
    return view('purchasePlanResume')->with('plan_type', $plan_type)->with('voucher', '');
});
Route::get('/compra/plan/{plan_type}/resumen/v/{voucher}', function (string $plan_type, string $voucher) {
    return view('purchasePlanResume')->with('plan_type', $plan_type)->with('voucher', $voucher);
});

Route::get('/compra/plan/{plan_type}/tutoria/ingresar/p/{payment_code}', function (string $plan_type,  String $payment_code) {
    return view('purchaseTutorialLogin')->with('plan_type', $plan_type)->with('voucher', '')->with('payment_code', $payment_code);
});
Route::get('/compra/plan/{plan_type}/tutoria/ingresar/v/{voucher}/p/{payment_code}', function (string $plan_type, string $voucher,  String $payment_code) {
    return view('purchaseTutorialLogin')->with('plan_type', $plan_type)->with('voucher', $voucher)->with('payment_code', $payment_code);
});

Route::get('/compra/plan/{plan_type}/tutoria/{group_name}/{area_id}/{schedulearea_id}/{time_index}/resumen', function (String $plan_type, String $group_name, int $area_id, int $schedulearea_id, int $time_index) {
    return view('purchaseTutorialResume')->with('voucher', '')->with('plan_type', $plan_type)->with('area_id', $area_id)->with('group_name', $group_name)->with('schedulearea_id', $schedulearea_id)->with('time_index', $time_index);
});
Route::get('/compra/plan/{plan_type}/tutoria/{group_name}/{area_id}/{schedulearea_id}/{time_index}/resumen', function (String $plan_type, String $group_name, int $area_id, int $schedulearea_id, int $time_index) {
    return view('purchaseTutorialResume')->with('voucher', '')->with('plan_type', $plan_type)->with('area_id', $area_id)->with('group_name', $group_name)->with('schedulearea_id', $schedulearea_id)->with('time_index', $time_index);
});
Route::get('/compra/plan/{plan_type}/tutoria/{group_name}/{area_id}/{schedulearea_id}/{time_index}/resumen/v/{voucher}', function (String $plan_type, String $group_name, int $area_id, int $schedulearea_id, int $time_index, String $voucher) {
    return view('purchaseTutorialResume')->with('voucher', $voucher)->with('plan_type', $plan_type)->with('area_id', $area_id)->with('group_name', $group_name)->with('schedulearea_id', $schedulearea_id)->with('time_index', $time_index);
});
Route::get('/compra/plan/{plan_type}/tutoria/{group_name}/{area_id}/{schedulearea_id}/{time_index}/resumen/v/{voucher}', function (String $plan_type, String $group_name, int $area_id, int $schedulearea_id, int $time_index, String $voucher) {
    return view('purchaseTutorialResume')->with('voucher', $voucher)->with('plan_type', $plan_type)->with('area_id', $area_id)->with('group_name', $group_name)->with('schedulearea_id', $schedulearea_id)->with('time_index', $time_index);
});



//api rest
Route::get('/api/achievement/{id_achievement}/indicator', 'IndicatorController@getByAchievement');
Route::put('/api/teacher/activity/{id_activity}/student/{id_student}/score', 'ActivityController@saveTeacherScore');
Route::get('/api/teacher/module/{id_module}/class/{id_course}', 'ClassController@getCourse');
Route::put('/api/teacher/module/{id_module}/class', 'ClassController@saveCourse');
Route::put('/api/student/module/{id_module}/class/{id_course}/resource/{id_resource}/interaction', 'ClassController@saveCourseContentInteraction');
Route::put('/api/student/module/{id_module}/class/{id_course}/activity/{id_activity}/interaction', 'ClassController@saveActivityInteraction');
Route::put('/api/student/module/{id_module}/class/{id_course}/activity/{id_activity}/question/{id_question}/response', 'ClassController@saveActivityQuestionResponse');
Route::post('/api/file/upload/editor-content', 'UploadController@uploadEditorContent');
Route::put('/api/admin/module/{id_module}/class/{id_course}/{state}', 'ClassController@updateClassEnableEdition');
Route::get('/api/student/activity', 'ActivityController@getByCurrentStudent');
Route::get('/api/student/event', 'EventsController@studentEvents');
Route::get('/api/teacher/area/{area_id}/classroom/{classroom_id}/student', 'CalificationController@getAllStudents');
Route::get('/api/teacher/area/{area_id}/classroom/{classroom_id}/student/{student_id}', 'CalificationController@getByStudent');
Route::get('/api/teacher/area/{area_id}/classroom/{classroom_id}/student/{student_id}/module', 'CalificationController@getAllModules');
Route::get('/api/teacher/area/{area_id}/classroom/{classroom_id}/student/{student_id}/module/{module_id}/class', 'CalificationController@getAllClasses');
Route::get('/api/student/{student_id}', 'StudentController@get');
Route::get('/api/teacher/area/{area_id}/classroom/{classroom_id}/student/{student_id}/module/{module_id}/class/{class_id}', 'CalificationController@getByClass');
Route::get('/api/event/today', 'EventsController@todayEvents');



Route::get('/api/lectives', 'LectivesController@getLectives');
Route::get('/api/lectives/planification/{id_lective_planification}', 'LectivesController@getPlanificationDetail');
Route::put('/api/lectives/planification', 'LectivesController@savePlanificationDetail');
Route::put('/api/lectives/planification/{id_lective_planification}/weekly', 'LectivesController@saveWeeklyPlanification');
Route::get('/api/lectives/planification/{id_lective_planification}/weekly/{id_weekly_plan}/course', 'LectivesController@getWeeklyPlanificationDetail');
Route::put('/api/lectives/planification/{id_lective_planification}/weekly/{id_weekly_plan}/course', 'LectivesController@saveWeeklyPlanificationDetail');
Route::get('/api/lectives/planification/{id_lective_planification}/student', 'LectivesController@getPlanificationStudents');
Route::put('/api/lectives/planification/{id_lective_planification}/student', 'LectivesController@addStudents');
Route::delete('/api/lectives/planification/{id_lective_planification}/student/{id_student}', 'LectivesController@removeStudent');
Route::get('/api/lectives/student/find/{content}', 'LectivesController@findStudents');
Route::get('/api/lectives/planification/{id_lective_planification}/achievement/{id_lective_achievement}', 'LectivesController@getIndicatorByPlanificationAchievement');
Route::put('/api/lectives/planification/{id_lective_planification}/achievement', 'LectivesController@saveIndicator');
Route::put('/api/lectives/planification/{id_lective_planification}/achievement/{id_lective_indicator}', 'LectivesController@updateIndicator');
Route::delete('/api/lectives/planification/{id_lective_planification}/indicator/{id_lective_indicator}', 'LectivesController@removeIndicator');
Route::get('/api/lectives/planification/{id_lective_planification}/weekly/{id_weekly_plan}/course/{id_class}', 'LectivesController@getCourse');
Route::put('/api/lectives/planification/{id_lective_planification}/weekly/{id_weekly_plan}/course/{id_class}/activity', 'LectivesController@saveActivity');
Route::get('/api/lectives/planification/{id_lective_planification}/weekly/{id_weekly_plan}/course/{id_class}/activity', 'LectivesController@getActivities');
Route::get('/api/lectives/planification/{id_lective_planification}/activities', 'LectivesController@getActivitiesByPlan');
Route::put('/api/lectives/planification/{id_lective_planification}/weekly/{id_weekly_plan}/course/{id_class}/activity/{id_activity}/module/ENCUESTA_UNICA_RTA/question/{id_question}', 'QuestionController@responseQuestiononLective');
Route::put('/api/planification/copy', 'CoursesController@copyInformation');


Route::get('/api/customer', 'CustomerController@all');
Route::get('/api/customer-plan', 'CustomerPlanController@all');
Route::get('/api/customer-plan/type/{type}', 'CustomerPlanController@allByType');
Route::get('/api/customer-plan/type/{type}/grade/{grade}', 'CustomerPlanController@getByTypeAndGrade');
Route::get('/api/customer-plan/state/ACTIVE', 'CustomerPlanController@allActive');
Route::get('/api/customer/{id}', 'CustomerController@get');
Route::put('/api/customer/{id}', 'CustomerController@update');
Route::post('/api/customer', 'CustomerController@addCustomer');
Route::delete('/api/customer/{id}', 'CustomerController@delete');
Route::post('/api/payment/confirmation/payu', 'PurchasedController@payConfirmationPayu');
Route::post('/api/payment/confirmation/mercadopago', 'PurchasedController@payConfirmationMercadopago');
Route::get('/api/payment/confirmation/mercadopago', 'PurchasedController@payConfirmationMercadopago');

Route::get('/api/document-type', 'DocumentTypeController@all');
Route::get('/api/document-type/state/ACTIVE', 'DocumentTypeController@allActive');
Route::get('/api/document-type/{id}', 'DocumentTypeController@get');
Route::put('/api/document-type/{id}', 'DocumentTypeController@update');
Route::post('/api/document-type', 'DocumentTypeController@insert');
Route::delete('/api/document-type/{id}', 'DocumentTypeController@delete');

Route::get('/getActivitiesTeacher/{id_area}/{id_classroom}','ActivityController@getActivitiesTeacher');

Route::resource('piar', 'PIARController');
Route::get('getPIARStudents', 'PIARController@getPIARStudents');
Route::get('PIARStudentsByArea/{id_1}/{id_2}', 'PIARController@getPIARStudentsArea');

Route::middleware('auth')->get('/planClass', function () {
    return view('planclass');
});

Route::middleware('auth')->get('/clasesTeacher', function () {
    return view('clasesTeacher');
});

//Refuerzo Escolar
Route::get('/plan_estudio', function () {
    return view('menuhome')->with('plan', $_GET['plan'] ?? '');
});
Route::get('getAllGrades', 'AdministratorController@getAllGrades')->name('getAllGrades');
Route::get('getAllClass', 'ClassController@getAllClass');
Route::get('/modulo_clases/{id_weekly}', function (String $id_weekly) {
    return view('homeClassModul')->with('id_weekly', $id_weekly)->with('plan', isset($_GET['plan']) ? $_GET['plan'] : '');
});

Route::get('/modulo_clases/{id_weekly}', function (String $id_weekly) {
    return view('homeClassModul')->with('id_weekly', $id_weekly)->with('plan', isset($_GET['plan']) ? $_GET['plan'] : '');
});
Route::get('findClassByModule/{id}', 'LandingController@findClassByModule')->name('findClassByModule');
Route::get('findWeeklyById/{id}', 'LandingController@findWeeklyById')->name('findWeeklyById');

Route::get('/modulos_home/{id_area}/{id_grade}', function (String $id_area, String $id_grade) {
    return view('homeModulos')->with('id_area', $id_area)->with('id_grade', $id_grade)->with('plan', isset($_GET['plan']) ? $_GET['plan'] : '');
});
Route::get('findClassroomByGrade/{id}', 'LandingController@findClassroomByGrade')->name('findClassroomByGrade');
Route::get('findAreaById/{id}', 'LandingController@findAreaById')->name('findAreaById');

Route::resource('bimestres','BimestreController');
Route::get('/bimestre', function () {
    return view('bimestre');
});

Route::get('contratoEducativo/{motherName}/{fatherName}/{ccMother}/{ccFather}/{ccOther}','CalificationController@educativeContract')->name('contratoEducativo');
Route::get('/contrato-educativo', function () {
    return view('contratoEducativo');
});

Route::get('/trimestre/{id_area}/{id_classroom}', function (String $id_area, String $id_classroom) {
    return view('trimestre')->with('id_area', $id_area)->with('id_classroom', $id_classroom);
});

Route::get('/notesStudentsADM', function(){
    return view('notasADM');
});

Route::get('/deleteUser', function(){
    return view('deleteUser');
});
Route::get('getAllUsersPaginated', 'UserController@getAllUsersPaginated');
Route::get('specificUser/{name}','UserController@specificUser');

Route::resource('progressAdminStudent','ProgressStudentAdminController');

Route::post('assignCoord','AdministratorController@assignCoord');

//Observer
Route::resource('/observer', 'ObserverController');
Route::get('/dataUsers', 'ObserverController@getDataParentsStudents');
Route::get('getParents/{parent_id}', 'UserController@getParents');
Route::middleware('auth')->get('/pariente_asignar', function () {
    return view('asignarPariente');
});
Route::put('assignParent/{user_id}','AdministratorController@assignParent');

Route::middleware('auth')->get('/getParentsObserver', function () {
    return view('/getParentsObserver');
});
Route::get('/dataObserver', 'ParentsController@getDataObserverStudents');

Route::get('getStudentsByGrade/{grade_id}','ChangeGradeController@getStudentsByGrade');

Route::middleware('auth')->get('/changeGrade', function () {
    return view('changeGrade');
});

Route::put('savePromGrade/{id_student}','ChangeGradeController@savePromGrade');
Route::get('/api/student/{student_id}/calification-report', 'CalificationController@generateTemplateCalification');
Route::get('getDataUser','UserController@getUser');

Route::resource('paymentRegistration','VerifyRegistrationController');
Route::get('getPaymentAproved','VerifyRegistrationController@getPaymentAproved');

Route::middleware('auth')->get('/verifyRegister', function () {
    return view('verifyRegistration');
});

Route::get('getWorkShop/{id_bimestre}/{id_area}/{id_classroom}','WorkshopController@getActivityByBimestre');

Route::resource('filesWork','FilesWorkshopController');
Route::get('getFilesStudents/{id_activity}/{id_workshop}','FilesWorkshopController@getFilesStudents');

Route::resource('AssignNote','AssignNoteController');
Route::get('/AssignNote/{id_student}/{id_area}','AssignNoteController@show');
Route::get('/assignNote/{id}','AssignNoteController@getAssignNote');
Route::get('/getConectionbyId/{id}','UserController@getConectionbyId');
Route::middleware('auth')->get('payPlan', function(){
    return view('payPlan');
});

//Paypal pay
Route::middleware('auth')->get('/compra/pagar/paypal/{data_string}', 'PaypalPaymentController@payPaypal');
Route::middleware('auth')->get('/compra/pagar/plan/paypal/{data_string}', 'PaypalPaymentController@payPaypalPlan');
Route::middleware('auth')->get('/compra/currencyExchange', 'PaypalPaymentController@currencyExchange');

Route::middleware('auth')->get('/admin-boletin', function(){
    return view('adminBoletin');
});
Route::middleware('auth')->get('/admin-students', function(){
    return view('adminStudents');
});
Route::get('/extra_ef', function () {
    return view('CatExtraEF');
});
Route::get('/extra_ea', function () {
    return view('CatExtraEA');
});
Route::get('class_extra/{id_cat}', function (String $id_cat) {
    return view('ClassExtra')->with('id_cat', $id_cat);
});
Route::get('/extra_view/{id_cat}/{id_class}', function (String $id_cat, String $id_class) {
    return view('viewClassExtra')->with('id_cat', $id_cat)->with('id_class', $id_class);
});
Route::post('createExtra', 'AdministratorController@createExtra')->name('createExtra');
Route::get('getExtra', 'AdministratorController@findExtra')->name('getExtra');
Route::post('createCatExtra', 'AdministratorController@createCatExtra')->name('createCatExtra');
Route::get('findCatExtra/{id}', 'AdministratorController@findCatExtra')->name('findCatExtra');
Route::get('findCatName/{id}', 'AdministratorController@findCatName')->name('findCatName');
Route::get('showClassExtra/{id}', 'ClassController@showClassExtra')->name('showClassExtra');
Route::get('showExtraById/{id}', 'ClassController@showExtraById')->name('showExtraById');

Route::post('saveClassExtra', 'ClassController@saveClassExtra')->name('saveClassExtra');
Route::put('updateClassExtra', 'ClassController@updateClassExtra')->name('updateClassExtra');

Route::get('/extra_crear/{id_cat}', function (String $id_cat) {
    return view('cClassExtra')->with('id_cat', $id_cat);
});
Route::get('/extra_edit/{id_cat}/{id_class}', function (String $id_cat, String $id_class) {
    return view('editClassExtra')->with('id_cat', $id_cat)->with('id_class', $id_class);
});
Route::middleware('auth')->put('updateStatusStudent','ClassroomStudentController@updateStatus');
Route::middleware('auth')->get('getStatusStudent','ClassroomStudentController@getStatus');
