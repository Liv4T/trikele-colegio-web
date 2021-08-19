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
use App\Classs;
use Illuminate\Support\Facades\Auth;
use App\Weekly;
use Illuminate\Support\Facades\DB;
use App\User;
use Illuminate\Http\Request;

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
}
