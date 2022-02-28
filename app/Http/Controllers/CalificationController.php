<?php

namespace App\Http\Controllers;

use App\Activity;
use App\ActivityCompleteSentence;
use App\ActivityCompleteSentenceInteraction;
use App\ActivityCrossword;
use App\ActivityCrosswordInteraction;
use App\ActivityInteraction;
use App\ActivityQuestion;
use App\ActivityQuestionInteraction;
use App\ActivityRelationship;
use App\ActivityRelationshipInteraction;
use App\ClassContent;
use App\Classroom;
use App\ClassroomStudent;
use App\Grade;
use App\Classs;
use App\AssignNote;
use App\Area;
use Illuminate\Support\Facades\Auth;
use App\Weekly;
use Illuminate\Support\Facades\DB;
use App\User;
use Illuminate\Http\Request;
use App\ConfigurationParameter;
use App\Period;
use CalificationHelper;

class CalificationController extends Controller
{
    public function getAllStudents(int $area_id,int $classroom_id)
    {
        $auth = Auth::user();

        if(!isset($auth)) return  response()->json([]);

        $weekly_plans=Weekly::where('id_classroom',$classroom_id)->where('id_area',$area_id)->get();

        $students=DB::table('classroom_student')
                    ->join('users', 'users.id', '=', 'classroom_student.id_user')
                    ->select('users.id as user_id','users.name as user_name','users.last_name as user_lastname', 'users.picture as user_picture', 'users.email as user_email')
                    ->where('classroom_student.id_classroom', $classroom_id)
                    ->orderBy('users.last_name')
                    ->get();

        foreach ($students as $key_student => $student) {

            $progress=0;
            $score=0;
            $activities_pending=0;

            $weekly_plans_with_score=0;
            $weekly_plans_with_progress=0;


            foreach ($weekly_plans as $weekly_plan) {

                $_progress=  DB::select('call obtener_progreso_modulo(?,?)',[$weekly_plan->id, $student->user_id])[0]->porcentaje;

                if($_progress>-1)
                {
                    $weekly_plans_with_progress++;
                    $progress+=$_progress;
                }


                $activities=DB::table('class')
                            ->join('activity', 'activity.id_class', '=', 'class.id')
                            ->where('class.id_weekly_plan', $weekly_plan->id)
                            ->where('activity.deleted', 0)
                            ->where('activity.state', 1)
                            ->get();

                if(count($activities)>0)
                {
                    $weekly_plans_with_score++;
                    $score+=  DB::select('call obtener_calificacion_modulo(?,?)',[$weekly_plan->id, $student->user_id])[0]->calificacion;

                    $activities_interaction=DB::table('class')
                        ->join('activity', 'activity.id_class', '=', 'class.id')
                        ->join('activity_interaction', 'activity_interaction.id_activity', '=', 'activity.id')
                        ->where('class.id_weekly_plan', $weekly_plan->id)
                        ->where('activity.deleted', 0)
                        ->where('activity.state', 1)
                        ->where('activity_interaction.deleted', 0)
                        ->where('activity_interaction.id_student', $student->user_id)//pendientes de calificacion
                        ->where('activity_interaction.state', 2)
                        ->get();

                    $activities_pending+=count($activities_interaction);
                }



            }

            $students[$key_student]->progress = round(($weekly_plans_with_progress>0)?($progress/$weekly_plans_with_progress):-1,2);

            $students[$key_student]->score =round(($weekly_plans_with_score>0)?($score/$weekly_plans_with_score):-1,2);

            $students[$key_student]->score_base=5;

            $students[$key_student]->pending_calification =$activities_pending;
        }
        //DB::select('call obtener_progreso_clase(?,?)',[$clase[$key]->id, $user->id])[0]->porcentaje;

        return  response()->json($students);


    }
    public function getByStudent(int $area_id,int $classroom_id,int $id_student)
    {
        $auth = Auth::user();

        if(!isset($auth)) return  response()->json([]);

        $student=User::find($id_student);

        $weekly_plans=Weekly::where('id_classroom',$classroom_id)->where('id_area',$area_id)->get();


            $progress=0;
            $score=0;
            $activities_pending=0;

            $weekly_plans_with_score=0;
            $weekly_plans_with_progress=0;


            foreach ($weekly_plans as $weekly_plan) {

                $_progress=  DB::select('call obtener_progreso_modulo(?,?)',[$weekly_plan->id, $student->id])[0]->porcentaje;

                if($_progress>-1)
                {
                    $weekly_plans_with_progress++;
                    $progress+=$_progress;
                }

                $activities=DB::table('class')
                            ->join('activity', 'activity.id_class', '=', 'class.id')
                            ->where('class.id_weekly_plan', $weekly_plan->id)
                            ->where('activity.deleted', 0)
                            ->where('activity.state', 1)
                            ->get();

                if(count($activities)>0)
                {
                    $weekly_plans_with_score++;
                    $score+=  DB::select('call obtener_calificacion_modulo(?,?)',[$weekly_plan->id, $id_student])[0]->calificacion;

                    $activities_interaction=DB::table('class')
                        ->join('activity', 'activity.id_class', '=', 'class.id')
                        ->join('activity_interaction', 'activity_interaction.id_activity', '=', 'activity.id')
                        ->where('class.id_weekly_plan', $weekly_plan->id)
                        ->where('activity.deleted', 0)
                        ->where('activity.state', 1)
                        ->where('activity_interaction.deleted', 0)
                        ->where('activity_interaction.id_student', $id_student)//pendientes de calificacion
                        ->where('activity_interaction.state', 2)
                        ->get();

                    $activities_pending+=count($activities_interaction);
                }



            }

            $student->progress = round(($weekly_plans_with_progress>0)?($progress/$weekly_plans_with_progress):-1,2);

            $student->score =round(($weekly_plans_with_score>0)?($score/$weekly_plans_with_score):-1,2);

            $student->score_base=5;

            $student->pending_calification =$activities_pending;

        return  response()->json($student);


    }
    public function getAllModules(int $area_id,int $classroom_id,int $student_id){
        $auth = Auth::user();

        if(!isset($auth)) return  response()->json([]);


        $weekly_plans=Weekly::where('id_classroom',$classroom_id)->where('id_area',$area_id)->get();

        foreach ($weekly_plans as $key_weekly_plan => $weekly_plan) {
            $score=-1;
            $activities_interaction=[];
            $progress=  DB::select('call obtener_progreso_modulo(?,?)',[$weekly_plan->id, $student_id])[0]->porcentaje;

            $activities=DB::table('class')
                ->join('activity', 'activity.id_class', '=', 'class.id')
                ->where('class.id_weekly_plan', $weekly_plan->id)
                ->where('activity.deleted', 0)
                ->where('activity.state', 1)
                ->get();

            if(count($activities)>0)
            {
                $score=  DB::select('call obtener_calificacion_modulo(?,?)',[$weekly_plan->id, $student_id])[0]->calificacion;
                $activities_interaction=DB::table('class')
                ->join('activity', 'activity.id_class', '=', 'class.id')
                ->join('activity_interaction', 'activity_interaction.id_activity', '=', 'activity.id')
                ->where('class.id_weekly_plan', $weekly_plan->id)
                ->where('activity.deleted', 0)
                ->where('activity.state', 1)
                ->where('activity_interaction.deleted', 0)
                ->where('activity_interaction.id_student', $student_id)//pendientes de calificacion
                ->where('activity_interaction.state', 2)
                ->get();

            }





            $weekly_plans[$key_weekly_plan]->progress = $progress;
            $weekly_plans[$key_weekly_plan]->score = $score;
            $weekly_plans[$key_weekly_plan]->pending_calification = count($activities_interaction);



        }


        return  response()->json($weekly_plans);
    }
    public function getAllClasses(int $area_id,int $classroom_id,int $student_id,int $id_module){
        $auth = Auth::user();

        if(!isset($auth)) return  response()->json([]);


            $classes=Classs::where('id_weekly_plan',$id_module)->get();

            foreach ($classes as $key_class => $class) {
                $progress=  DB::select('call obtener_progreso_clase(?,?)',[$class->id, $student_id])[0]->porcentaje;
                $score=  DB::select('call obtener_calificacion_clase(?,?)',[$class->id, $student_id])[0]->calificacion;


                $activities_interaction=DB::table('class')
                        ->join('activity', 'activity.id_class', '=', 'class.id')
                        ->join('activity_interaction', 'activity_interaction.id_activity', '=', 'activity.id')
                        ->where('class.id', $class->id)
                        ->where('activity.deleted', 0)
                        ->where('activity.state', 1)
                        ->where('activity_interaction.deleted', 0)
                        ->where('activity_interaction.id_student', $student_id)//pendientes de calificacion
                        ->where('activity_interaction.state', 2)
                        ->get();


                        $classes[$key_class]->progress = $progress;
                        $classes[$key_class]->score = $score;
                        $classes[$key_class]->score_base = 5;
                        $classes[$key_class]->pending_calification = count($activities_interaction);

            }




        return  response()->json($classes);
    }

    public function educativeContract(String $motherName, String $fatherName, String $ccFather, String $ccMother, String $ccOther){           
        $html=" <h1 style='margin-left:22%'>MATRICULA 2021 – 2022</h1>
            <h1 style='margin-left:10%'>CONTRATO DE SERVICIO EDUCATIVO</h1>

            <p style='margin-bottom: 3%;'>Entre los suscritos a saber <strong>".$motherName."</strong> y <strong>".$fatherName."</strong>
            mayores de edad, vecinos y residentes en Bogotá D.C., identificados como aparece al pie de sus firmas,
            responsables designados del alumno: ___________________________ de la clase, _________ y el Representante Legal ______________________ del establecimiento educativo denominado COLEGIO TRIKELE, 
            con licencia de funcionamiento expedida por la Secretaria de Educación de Chía, 
            en la resolución No. 1123 del 13 de abril de 2021,
            suscribimos el presente contrato de SERVICIO EDUCATIVO,
            el cual se regirá por las siguientes cláusulas:</p>

            <h3><strong>PRIMERA - OBJETO:</strong></h3>                    
            <p style='margin-bottom: 3%;'>Con base en la Constitución Política de Colombia que señala como responsabilidad de la familia la educación 
            y en atención a las disposiciones establecidas en la ley 115 de 1994, 
            en particular en sus artículos 95 y 201, las partes, 
            mediante el presente contrato, adquieren derechos y contraen obligaciones, 
            todos ellos teniendo como fin la formación del alumno, 
            de tal forma que se favorezca el desarrollo de su personalidad, 
            se le dé acceso a la cultura, al logro del conocimiento científico y técnico preservando siempre los valores éticos y morales 
            que deben orientar su futuro como ciudadano.</p>

            <h3><strong>SEGUNDA - OBLIGACIONES DEL COLEGIO: </strong></h3>                    
            <p>Constituyen obligaciones esenciales del COLEGIO, para el logro de los fines propuestos, las siguientes:</p>        
            <p>1. En cumplimiento de las normas legales vigentes, y de aquellas que lo autoricen expresamente, impartir, a través de su personal docente, la enseñanza de las asignaturas previstas en el Plan Educativo, dentro de los niveles básica secundaria y educación media académica de adultos con los siguientes objetivos: </p>                
            <p>a) Presentar los programas del proyecto de educativo y del establecimiento.</p>                
            <p>b) Aplicar los programas y respetar los objetivos contenidos en el proyecto educativo y de establecimiento. </p>                
            <p>c) Asegurar una evaluación y un seguimiento personalizado del alumno.</p>                    
            <p>d) Informar a los padres cualquier dificultad importante concerniente al alumno. </p>
            <p>e) Hacer respetar los valores tal como están definidos en las instrucciones oficiales: respetar a los demás, respetar los bienes y el espíritu de solidaridad, entre otros. </p>
            <p>f) Mantener el diálogo con las familias en lo relacionado con el seguimiento de los alumnos. g) Promover y valorar las diferentes lenguas y culturas. </p>
            <p>h) Informar a los padres sobre el funcionamiento del establecimiento. </p>
            <p>2. Velar porque el personal docente a su servicio reúna los requisitos académicos necesarios para el logro de los objetivos señalados. </p>
            <p>3. Velar por la existencia de un respeto mutuo entre todos los miembros de la comunidad escolar (Directivas, profesores, personal administrativo, logístico y alumnos). </p>
            <p>4. Garantizar la promoción del alumno a los niveles superiores cuando éste cumpla los requisitos académicos establecidos o que se establezcan y sus padres y/o acudientes hayan observado las obligaciones del presente contrato.</p>
            <p>5. Respetar y hacer cumplir el reglamento interno del COLEGIO.</p>
            <p style='margin-bottom: 3%;'>6. Certificar, cuando le sea solicitado, sobre el cumplimiento académico del alumno, indicándole grado aprobado y las notas obtenidas, sin perjuicio de lo establecido en el numeral 9 de la cláusula siguiente.</p>
                
            <h3><strong>TERCERA - OBLIGACIONES DE LOS RESPONSABLES LEGALES y/o FINANCIEROS:</strong></h3>                    
            <p>serán tenidas como obligaciones esenciales de los responsables legales y/o financieros del alumno las siguientes: </p>
            <p>1. Asistir a las reuniones periódicas de información y responder a las convocatorias de los profesores y/o del equipo de dirección. </p>
            <p>2. Estar al corriente de la evolución de los resultados del alumno y asistir a las jornadas de entrega de notas de evaluación.</p>
            <p>3. Leer con atención y respetar el reglamento del COLEGIO.</p>
            <p>4. Velar por el cumplimiento, por parte del alumno, del reglamento interno del COLEGIO</p>
            <p>5. Informar al colegio sobre situaciones que pudieran estar impidiendo el buen desempeño escolar del alumno (enfermedad, accidente, problemas familiares graves).</p>
            <p>6. Participar en la vida de colegio, estando presentes en las diferentes manifestaciones culturales. </p>
            <p>7. Promover y valorar las diferentes lenguas y culturas. </p>
            <p>8. Informar al COLEGIO todo cambio de dirección y/o número telefónico.</p>
            <p style='margin-bottom: 3%;'>9. Pagar los gastos de escolaridad dentro de los plazos establecidos. El no pago impide la obtención de las calificaciones trimestrales o anuales, así como la reinscripción del alumno para el año escolar siguiente. </p>

            <h3><strong>CUARTA- DERECHO DEL COLEGIO:</strong></h3>                    
            <p>1. Realizar evaluaciones periódicas a los alumnos a fin de determinar el estado de su desarrollo formativo y cognoscitivo con relación a los indicadores del logro propuesto en el grado respectivo. </p>
            <p>2. Recomendar a los responsables legales y/o financieros la reorientación del alumno hacia otro tipo de escolaridad, cuando determine que al mismo se le dificulta el aprendizaje dentro del sistema bicultural ofrecido por el COLEGIO.</p>
            <p>3. Abstenerse de renovar el presente contrato cuando el alumno no alcance los objetivos propuestos para el nivel correspondiente o cancelarlo, de manera unilateral, cuando sobrevengan actos de indisciplina, o incumplimiento reiterado del reglamento interno del COLEGIO.</p>
            <p>4. Percibir oportunamente, como contraprestación al servicio que presta, los costos de matrícula y pensión establecidos calculados con base en las disposiciones vigentes. </p>
            <p style='margin-bottom: 3%;'>5. Abstenerse de renovar el presente contrato, o de suscribir uno nuevo para el siguiente año escolar, cuando los padres y/o responsables financieros no se encuentren a paz y salvo en el pago de las cuotas de que trata la cláusula sexta del presente contrato.</p>

            <h3><strong>QUINTA - DERECHOS DE LOS RESPONBLES LEGALES y/o FINANCIEROS: </strong></h3>                    
            <p>1. Obtener información suficiente sobre los avances y resultado del proceso pedagógico del alumno.</p>
            <p>2. A matricular al alumno en el nivel superior que le corresponda cuando éste haya cumplido con los requisitos académicos preestablecidos y cuando se hayan cumplido con las obligaciones establecidas en este contrato. </p>
            <p style='margin-bottom: 3%;'>3. A elegir y ser elegidos representantes de los padres, en los consejos de directivos del COLEGIO, de conformidad con la reglamentación expedida para tal efecto por el COLEGIO.</p>

            <h3><strong>SEXTA - OBLIGACIONES PECUNIARIAS: </strong></h3>                    
            <p>Los responsables legales y/o financieros se comprometen a la suscripción del presente contrato, </p>
            <p>a cancelar como contraprestación al servicio educativo que se le prestará al alumno la suma correspondiente al grado reestudio del mismo a partir del mes de _________ de ________, </p>
            <p style='margin-bottom: 3%;'>pagaderas anticipadamente dentro de los cinco (5) primeros días calendario de cada mes, 
            y conforme al procedimiento establecido por EL COLEGIO. 
            La cuota mensual a la que se hace referencia corresponde a la tarifa que se ha fijado en concordancia con lo establecido en la resolución Nº 1123 del 13 de abril de 2021. 
            Sin perjuicio de lo anterior, 
            EL COLEGIO aplicará las normas que modifiquen o adicionen la reglamentación relativa a los costos escolares.</p>

            <h3><strong>PARAGRAFO PRIMERO: </strong></h3>
            <p style='margin-bottom: 6%;'>El valor del contrato estará determinado por los costos educativos aprobados en la resolución 1123 del 13 de abril de 2021,
            por concepto de matrícula y pensión para el grado de _____ por el valor de _________,
            como los cobros por concepto de carné y seguro estudiantil por un valor de $15.000 y $85.000 respectivamente.
            Cualquier retardo en el pago anterior dará derecho al COLEGIO para exigir el pago de un interés por la mora establecida equivalente a la tasa máxima legal fijada por las autoridades competentes. 
            El presente derecho subsistirá aún en el caso de haber recibido EL COLEGIO, 
            o la entidad bancaria delegada para el efecto, sin el debido recargo, 
            el pago de la cuota o cuotas de manera extemporánea. </p>

            <h3><strong>PARAGRAFO SEGUNDO: </strong></h3>
            <p style='margin-bottom: 3%;'>Los responsables legales y/o financieros del presente contrato autorizan al COLEGIO de manera libre, 
            expresa e irrevocable para que obtenga de cualquier fuente, 
            reporte y actualice a cualquier banco de datos, 
            las informaciones y referencias relativas a su persona, nombres, apellidos y documento de identificación, 
            a su comportamiento y crédito comercial, 
            hábitos de pago y en general al cumplimiento de sus obligaciones pecuniarias. </p>

            <h3><strong>PARAGRAFO TERCERO: </strong></h3>
            <p style='margin-bottom: 3%;'>Si los responsables legales y/o financieros optan por cancelar en un solo contado, hasta el treinta (30) de _________ de 2021,
            la totalidad de las _____ (____) cuotas indicadas,
            podrá deducir de las mismas un diez por ciento (10%) del total.</p>

            <h3><strong>PARAGRAFO CUARTO: </strong></h3>
            <p style='margin-bottom: 3%;'>Sin perjuicio de las acciones legales que pueda promover el COLEGIO tendientes al recaudo de las cuotas impagadas, 
            éste podrá dar por terminado de manera unilateral, 
            el presente contrato cuando los responsables legales y/o 
            financieros de los alumnos matriculado incurran en mora de cancelar hasta tres cuotas seguidas.</p>


            <h3><strong>PARAGRAFO QUINTO: </strong></h3>
            <p>El valor pagado por matrícula, únicamente será reintegrado si al inicio del año escolar 
            <p style='margin-bottom: 3%;'>(mes de ________),por razones de cambio de sede de trabajo los padres se trasladan a vivir fuera de la ciudad de Bogotá, 
            Chía o por razones de fuerza mayor.</p>

            <h3><strong>SEXTA - VIGENCIA:</strong></h3>
            <p style='margin-bottom: 5%;'>El presente contrato entrará en vigor al momento de su firma, 
            previa la cancelación por parte de los responsables legales y/o 
            financieros del valor correspondiente a la matrícula y de los demás gastos indicados en la orden de pago matrícula 
            correspondiente.</p>
                    
            <h3><strong>SÉPTIMA - RENOVACIÓN: </strong></h3>
            <p style='margin-bottom: 50%;'>El presente contrato podrá ser renovado, de año en año, sin perjuicio del incremento en los costos de matrícula y pensión, 
            si quienes lo suscriben han dado cumplimiento a las obligaciones contenidas en las cláusulas tercera y sexta aquí contenidas y además según el caso, 
            puede ser promovido a un nivel a superior.</p>
                                      
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <p style='margin-bottom: 10%;'>Firmado en Bogotá D.C., a los _______ de ___________ de 2021.</p>

            <p style='margin-bottom: 4%;'>Rectora</p>
            <p>_________________________________</p>

            <p style='margin-bottom: 15%;'><strong>PAOLA GARCÍA CASTILLO</strong></p>

            <p style='margin-bottom: 12%;'><strong>RESPONSABLES LEGALES</strong></p>

            <table style='margin-bottom: 25%;'>
                <thead>
                    <tr>
                        <th>PADRE</th>
                        <th>MADRE</th>
                        <th>OTRO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>CC:".$ccFather."</td>
                        <td>CC:".$ccMother."</td>
                        <td>CC:".$ccOther."</td>
                    </tr>
                </tbody>
            </table>

            <p>____________________________</p>
            <p style='margin-bottom: 20%;'>FIRMA</p>

            <h3 style='margin-bottom: 5%;'><strong>RESPONSABLES FINANCIEROS </strong></h3>
            <h3 style='margin-bottom: 6%;'><strong>Nombre y Apellidos</strong></h3>
            <p>_______________________________</p>
            <p>C.C No. </p>
        ";

        $mpdf = new \Mpdf\Mpdf(['setAutoTopMargin' => 'stretch']);

        $mpdf->WriteHTML($html);

        $temp = tmpfile();
        $path_temp = tempnam(sys_get_temp_dir(), 'prefix');
        $filename=$path_temp.uniqid();
    
        $mpdf->Output( $filename);

        return response()->make(file_get_contents($filename), 200, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'download; filename="Contrato Educativo.pdf"'
        ]);
    }

    public function getByClass(int $area_id,int $classroom_id,int $student_id,int $module_id,int $class_id){
        $auth = Auth::user();

        if(!isset($auth)) return  response()->json([]);

        $class=Classs::find($class_id);

        $class->content=DB::table('class_content')
                            ->leftJoin('class_content_interaction',function($leftJoin)use($student_id){
                               $leftJoin->on( 'class_content.id', '=', 'class_content_interaction.id_class_content')->where('class_content_interaction.deleted',0)->where('id_student',$student_id);
                            })
                            ->where('class_content.id_class', $class_id)
                            ->where('class_content.deleted', 0)
                            ->select('class_content.*','class_content_interaction.updated_at as date_interaction')
                            ->get();


        $class->activities=DB::table('activity')
                            ->leftJoin('activity_interaction',function($leftJoin)use($student_id){
                               $leftJoin->on( 'activity.id', '=', 'activity_interaction.id_activity')->where('activity_interaction.deleted',0)->where('id_student',$student_id);
                            })
                            ->where('activity.id_class', $class_id)
                            ->where('activity.deleted', 0)
                            ->select('activity.*','activity_interaction.latest_access_date as date_interaction','activity_interaction.score as score','activity_interaction.state as state_interaction')
                            ->get();


        foreach ($class->activities as $key_activity => $activity) {

            $module=[];

            if($activity->activity_type=='CUESTIONARIO')
            {

                $module=[
                    'questions'=>[]
                ];

                $activity_questions=ActivityQuestion::where('id_activity',$activity->id)->where('deleted',0)->get();

                foreach($activity_questions as $i_question => $question) {
                    $student_response=[];
                    $response='';

                    $student_response=ActivityQuestionInteraction::where('id_activity_question',$question->id)->where('id_student',$student_id)->where('deleted',0)->first();

                    if(!isset($student_response))
                    {
                        $student_response=['response'=>-1];
                    }
                    else{
                        $response=$student_response->response;
                    }


                    array_push($module['questions'],[
                        'id'=>$question->id,
                        'question'=>$question->question,
                        'type_question'=>$question->type_question,
                        'options'=>json_decode($question->content),
                        'valid_answer_index'=>json_decode($question->correct_answer),
                        'justify'=>$question->justify,
                        'state'=>$question->state,
                        'student_response'=>$student_response,
                        'response'=>$response
                    ]);
                }
            }


            if($activity->activity_type=='COMPLETAR_ORACION')
            {

                $module=[
                    'sentences'=>[]
                ];


                $activity_sentences=ActivityCompleteSentence::where('id_activity',$activity->id)->where('deleted',0)->get();

                foreach($activity_sentences as $sentence) {
                    $student_response=[];

                    $model_student_response=ActivityCompleteSentenceInteraction::where('id_activity_complete_sentence',$sentence->id)->where('id_student',$student_id)->where('deleted',0)->first();

                    if(!isset($model_student_response))
                    {
                        $student_response=[];
                    }
                    else{
                        $student_response=json_decode($model_student_response->response);
                    }


                    $sentence_content=json_decode($sentence->content,true);

                    $sentence_content['id']=$sentence->id;
                    $sentence_content['state']=$sentence->state;
                    $sentence_content['student_response']=$student_response;

                    array_push($module['sentences'],$sentence_content);
                }
            }


            if($activity->activity_type=='RELACION')
            {

                $module=[];

                $activity_relationship=ActivityRelationship::where('id_activity',$activity->id)->where('deleted',0)->first();

                if(isset($activity_relationship))
                {
                    $student_response=null;

                        $student_response=ActivityRelationshipInteraction::where('id_activity_relationship',$activity_relationship->id)->where('id_student',$student_id)->where('deleted',0)->first();

                        if(!isset($student_response))
                        {
                            $student_response=null;
                        }

                    $module=json_decode($activity_relationship->content,true);

                    $module['id']=$activity_relationship->id;
                    $module['state']=$activity_relationship->state;
                    if(isset($student_response))
                    {
                        $module['student_response']=json_decode($student_response->response);
                    }


                }


            }

            if($activity->activity_type=='CRUCIGRAMA')
            {

                $module=[];


                $activity_crossword=ActivityCrossword::where('id_activity',$activity->id)->where('deleted',0)->first();

                if(isset($activity_crossword))
                {
                    $student_response=null;

                        $student_response=ActivityCrosswordInteraction::where('id_activity_crossword',$activity_crossword->id)->where('id_student',$student_id)->where('deleted',0)->first();

                        if(!isset($student_response))
                        {
                            $student_response=null;
                        }

                    $module=json_decode($activity_crossword->content,true);

                    $module['id']=$activity_crossword->id;
                    $module['state']=$activity_crossword->state;

                    if(isset($student_response))
                    {
                        $module['words']=json_decode($student_response->response);
                    }


                }


            }


            $class->activities[$key_activity]->module=$module;

        }


        return  response()->json($class);
    }

    public function generateTemplateCalification(int $student_id){
        try{
            $templatePath=ConfigurationParameter::where('code','TEMPLATE_NOTESHEET_PATH')->first();
            $templatePathA=ConfigurationParameter::where('code','TEMPLATE_NOTESHEET_CALENDAR_A_PATH')->first();
            $templateHeader=ConfigurationParameter::where('code','TEMPLATE_NOTESHEET_HEADER')->first();
            $templateFooter=ConfigurationParameter::where('code','TEMPLATE_NOTESHEET_FOOTER')->first();

            if(!isset($templatePath)||!isset($templateHeader)||!isset($templateFooter)||!isset($templatePathA))  return;

            $user=User::find($student_id);   

            if($user->calendar === 'A'){                
                $explode_name=explode('/',$templatePathA->content);
            }else{                
                $explode_name=explode('/',$templatePath->content);
            }

            $short_name=$explode_name[count($explode_name)-1];

            if($user->calendar === 'A'){
                $file_path=str_replace($short_name,"",$templatePathA->content);
            }else{
                $file_path=str_replace($short_name,"",$templatePath->content);
            }          

            $short_name=str_replace(".html","",$short_name);

            if($user->calendar === 'A'){                
                $filename=public_path().$templatePathA->content;
            }else{                
                $filename=public_path().$templatePath->content;
            }

            $html=file_get_contents($filename);

            $current_date=date('Y-m-d H:i:s');

            $classroom_student = ClassroomStudent::where('id_user',$user->id)->first();
            $classroom = Classroom::where('id',$classroom_student->id_classroom)->first();
            $grade = Grade::where('id',$classroom->id_grade)->first();
            $cycle = '';
            
            switch ($grade->name) {
                case 'Primero':
                    $cycle = 'I';
                    break;

                case 'Segundo':
                    $cycle = 'I';
                    break;
        
                case 'Tercero':
                    $cycle = 'I';
                    break;    
        
                case 'Cuarto':
                    $cycle = 'II';
                    break;
                
                case 'Quinto':
                    $cycle = 'II';
                    break;
        
                case 'Sexto':
                    $cycle = 'III';
                    break;

                case 'Septimo':
                    $cycle = 'III';
                    break;

                case 'Octavo':
                    $cycle = 'IV';
                    break;

                case 'Noveno':
                    $cycle = 'IV';
                    break;

                case 'Decimo':
                    $cycle = 'V';
                    break;

                case 'Onceavo':
                    $cycle = 'VI';
                    break;
                default:
                    # code...
                    break;
            }

            $html=str_replace("[STUDENT_NAME]",$user->name." ".$user->last_name,$html);            
            $html=str_replace("[STUDENT_CODE]",$user->id_number,$html);
            $html=str_replace("[REPORT_DATE]",$current_date,$html);
            $html=str_replace("[GRADE_NAME]",$grade->name,$html);
            if($user->calendar === 'CICLOS'){
                $html=str_replace("[CYCLE]", $cycle,$html);
            }

            $table_html='';        

            //get notes by period

            $califications = array();
            $data = AssignNote::where('id_student',$student_id)->get();
            $countArray = 0;        

            if(count($data) > 0){
                foreach ($data as $dt){
                    $area = Area::where('id',$dt->id_area)->first();                              
                    if(isset($califications[0]) && $califications[$countArray]['subject'] !== $area->name){                                        
                        $countArray ++;            
                        $califications[$countArray]['onep'] = 'P';
                        $califications[$countArray]['twop'] = 'P';
                        $califications[$countArray]['threep'] = 'P';
                        $califications[$countArray]['fourp'] = 'P';
                        $califications[$countArray]['def'] = 'P';
                
                    }
                    $califications[$countArray]['subject']= $area->name;
                    switch ($califications[$countArray]['subject']) {
                        case 'Español':
                            $califications[$countArray]['area_name'] = 'HUMANIDADES';
                            break;
    
                        case 'Ingles':
                            $califications[$countArray]['area_name'] = 'HUMANIDADES';
                            break;
                        
                        case 'Ciencias naturales y biología':
                            $califications[$countArray]['area_name'] = 'C. NATURALES Y EDU. AMBIENTAL';
                            break;
    
                        case 'Física':
                            $califications[$countArray]['area_name'] = 'C. NATURALES Y EDU. AMBIENTAL';
                            break;
    
                        case 'Química':
                            $califications[$countArray]['area_name'] = 'C. NATURALES Y EDU. AMBIENTAL';
                            break;
    
                        case 'Matemáticas':
                            $califications[$countArray]['area_name'] = 'MATEMÁTICAS';
                            break;
    
                        case 'Ciencias sociales':
                            $califications[$countArray]['area_name'] = 'CIENCIAS SOCIALES';
                            break;
    
                        default:
                            $califications[$countArray]['area_name'] = $area->name;
                            break;
                    }
    
                    if($dt->id_bimestre === 1){
                        $califications[$countArray]['onep'] = $dt->note;
                    }else if($dt->id_bimestre === 2){                
                        $califications[$countArray]['twop'] = $dt->note;
                    }
                    else if($dt->id_bimestre === 3){
                        $califications[$countArray]['threep'] = $dt->note;
                    }else if($dt->id_bimestre === 4){
                        $califications[$countArray]['fourp'] = $dt->note;
                    }else if($dt->asignNote === 'final'){
                        $califications[$countArray]['def'] = $dt->note;
                    }       
                }
            }else{
                for ($i=0; $i < 9; $i++) { 
                    $countArray = $i;

                    $califications[$countArray]['onep'] = 'P';
                    $califications[$countArray]['twop'] = 'P';
                    $califications[$countArray]['threep'] = 'P';
                    $califications[$countArray]['fourp'] = 'P';
                    $califications[$countArray]['def'] = 'P';

                    switch ($i) {
                        case 0:
                            $califications[$countArray]['area_name'] = 'HUMANIDADES';
                            $califications[$countArray]['subject']= 'Español';

                            break;
                    
                        case 1:
                            $califications[$countArray]['area_name'] = 'HUMANIDADES';
                            $califications[$countArray]['subject']= 'Ingles';
                            break;
                        
                        case 2:
                            
                            $califications[$countArray]['area_name'] = 'C. NATURALES Y EDU. AMBIENTAL';
                            $califications[$countArray]['subject']= 'Ciencias Naturales y Biología';
                            break;

                        case 3:
                            
                            $califications[$countArray]['area_name'] = 'C. NATURALES Y EDU. AMBIENTAL';
                            $califications[$countArray]['subject']= 'Química';
                            break;
        
                        case 4:
                        
                            $califications[$countArray]['area_name'] = 'C. NATURALES Y EDU. AMBIENTAL';
                            $califications[$countArray]['subject']= 'Física';
                            break;
        
                        case 5:
                            
                            $califications[$countArray]['area_name'] = 'MATEMÁTICAS';
                            $califications[$countArray]['subject']= 'Matemáticas';
                            break;
                                
                        case 6:
                            
                            $califications[$countArray]['area_name'] = 'CIENCIAS SOCIALES';
                            $califications[$countArray]['subject']= 'Ciencias Sociales';
                            break;

                        case 7:
                        
                            $califications[$countArray]['area_name'] = 'ED. FÍSICA';
                            $califications[$countArray]['subject']= 'Ed. Física';
                            break;

                        case 8:
                    
                            $califications[$countArray]['area_name'] = 'TECNOLOGÍA';
                            $califications[$countArray]['subject']= 'Tecnología';
                            break;

                        case 9:
                    
                            $califications[$countArray]['area_name'] = 'ARTE';
                            $califications[$countArray]['subject']= 'ARTE';
                            break;
        
                        default:
                            # code...
                            break;
                    }
                }
            }        
            $table_html.='<tr>';
                $table_html.=' <td style="height:10px" colspan="6"></td>';
            $table_html.='</tr>';
            $table_html.='<tr class="row_note">';
                $table_html.='<td>Area</td>';
                $table_html.='<td>Materia</td>';
                $table_html.='<td>1P</td>';
                $table_html.='<td>2P</td>';
                $table_html.='<td>3P</td>';
                $table_html.='<td>4P</td>';
                $table_html.='<td>DEF</td>';
            $table_html.='</tr>';                
            foreach ($califications as $row) {                
                $table_html.='<tr>';
                    $table_html.='<td class="td_note">'.$row['area_name'].'</td>';
                    $table_html.='<td class="note_detail">'.$row['subject'].'</td>';
                    if(isset($row['onep']) || isset($row['twop']) || isset($row['threep']) || isset($row['fourp']) )
                    {                    
                        $table_html.='<td class="note_detail">'.$row['onep'].'</td>';
                        $table_html.='<td class="note_detail">'.$row['twop'].'</td>';
                        $table_html.='<td class="note_detail">'.$row['threep'].'</td>';
                        $table_html.='<td class="note_detail">'.$row['fourp'].'</td>';
                    }else{
                        $table_html.='<td class="note_detail">P</td>';
                        $table_html.='<td class="note_detail">P</td>';
                        $table_html.='<td class="note_detail">P</td>';
                        $table_html.='<td class="note_detail">P</td>';
                    }                    
                    $table_html.='<td class="note_detail">'.$row['def'].'</td>';
                $table_html.='</tr>';                    
            }

            $html=str_replace("[DATA]",$table_html,$html);

            $mpdf = new \Mpdf\Mpdf([        
                'mode' => 'utf-8', 
                'format' => [150, 236],
                'margin_header' => 0,                
                'margin_left' => 0,
                'margin_right' => 0,
                'margin_footer' => 0,
            ]);        

            $mpdf->SetHTMLHeader('<img src="data:image/png;base64,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"/>');

            $mpdf->SetHTMLFooter('<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACfgAAAO8CAYAAAAfvUdpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAALiMAAC4jAXilP3YAAJ3gSURBVHhe7NxdbuPKmqZRD6YmUJd93UPoWfR9AT3sui2g0dXWyeBOZuQri5T4Ez9rAQ9QZztIOyVZtPgF6gsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICz/Pv//jd9BwAAAAAAAAAAAIdKm9V0fQAAAAAAAAAAAAwubR7TeAEAAAAAAAAA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jdrReiV/rsbW+lvje51Vd83WOZfi165hbXxNyT9SAwAA+OP1t7XjrUfaAAMAbuuvBocQA/AoZaMmjU1eY+3mfavUSGOtM2LPqFlsjU+Wauyp/9d31Y4aRVur2FuvOLKmYkSN1p56czkj1rdWY63+njXsyWmNqLHV2py96+mp01trzogarSuua3S92lLtPXMu5SzN1aunRm9MOl+sjU+OrmNtvEdbI9zA/hlvzydbYucs1Thau0fPHGmN6VxrLWYtPxlZr2d9c+NruXut1R0x71KNvWO9RtSonb2mLfW3xG51Zu0lW+dcil+7hrXxHiNqAAAAf7z+vna87UgbYADAbf3V4BBiAB7ld5NmaazetE9GxxWj6/bGFVvj58zVOVL/P99VO+vUNWrT2N51TY5cV21Undqeemkdo9a2VmdtjpK/FldsiV0yqs4WS3NuWc+oOktG1Smuuq7J6HrF0lr3zLlUa0+9Vk+dtZjeGul8rafGXMzS2BZtnXDz+me8Pd/qjVuzVGdE/TW9c9TrrP97yVpcT43WyHo965sbX8vda63uiDmX5tg71mtEjWJUraU6vXP0xh1xdv1k65xL8UuP0dLYFqPqAAAA//X6O9tx+pE2wQCA22qbHFIMwONMGzVz51/qTfukN6YnrtYbf+b8W3OSuTpH6v/nu2pHnTq/Vsb3rmty5Lpqo+rU9tRL6xi1trU6PXOUGlti09gWo+psNTfnlvUsxW6ps2RUneKq65qMrlcsrXXPnEu19tRr9dZZiuvNT+drazFra+iZY02q09y07moOKXXS2BZLdUbUX9M7R73OPTlJb53ayHo965sb3zpXr541pfNbLV3X0lg6v9XIOiNqLdXpqT9qHWveMUdr65xL8UuP09LYFqPqAAAAf3v9re049UibYADAbaVmhxQH8Ci/GzXx/Ot/6w36ZIpL54tSP40t6c05c/49ea25Okfq/+d7amOdOrdWx+xd1+TIddVG1antqZfWMWpta3W2zFFqrdXbUnPOqDpbzc27ZS1La18a22JUneKq65qcUXOyVHfPfEu19tRr9daZi9uSn87X1mKW5loa22KuTnXDuqs5pNRJY1ss1RlRf82WOcpae3PWYnvr1EbW61nf3PjWuXr1rCmd32rpupbG0vmtRtYZUWupzlr9UWvo8c65iq3zLcUvrX9pbItRdQAAgOz197bj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"/>');

            $mpdf->WriteHTML($html);

            $temp = tmpfile();
            $path_temp = tempnam(sys_get_temp_dir(), 'prefix');
            $filename=$path_temp.uniqid();
            //$mpdf->Output(public_path().$file_path.'/test_'.$short_name.'.pdf');
            $mpdf->Output($filename);


            return response()->make(file_get_contents($filename), 200, [
                'Content-Type' => 'application/pdf',
                'Content-Disposition' => 'inline; filename="'.$user->id_number.'_'.$current_date.'.pdf"'
            ]);
        }catch(Throwable $th) {
            return false;
        }
    }
}
