<template>
  <div class="b">
    <div class="custom-card text-center">
      <h3 class="card-header">Evaluación</h3>
      <div class="card-body">
        <div class="form-group row">
          <div class="col">
            <label for>Nombre del curso</label>
            <select2 :options="courses" v-model="newName" required></select2>
          </div>
          <div class="col">
            <label for>Fase en la que se utiliza la rubrica</label>
            <input class="form-control" type="text" v-model="newFase1" name id />
          </div>
        </div>
        <div class="form-group row">
          <div class="col">
            <label for>Actividad</label>
            <select2 :options="activity" v-model="newActivity" required></select2>
          </div>
          <div class="col">
            <label for>Fase especifica que se evalua</label>
            <input class="form-control" type="text" v-model="newFase2" name id />
          </div>
        </div>
        <div class="form-group row">
          <div class="col">
            <label for>Fecha límite de entrega</label>
            <input class="form-control" v-model="newLast_date" type="date" name id />
          </div>
          <div class="col">
            <label for>Fecha real de entrega</label>
            <input class="form-control" type="date" v-model="newDate" name id />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-md-6">
            <label for>Nombre del estudiante</label>
            <select2 :options="newDate" v-model="newId_student" required></select2>
          </div>
        </div>
        <!--Foro-------------------------------------------------------------------->
        <div v-show="newActivity=='Foro'" class="Foro">
          <table class="table table-responsive table-hover table-striped" style="border:double;">
            <thead style="background-color:coral;">
              <tr>
                <th>Aspectos a evaluar</th>
                <th>Competente sobresaliente(10)</th>
                <th>Competente avanzado(9)</th>
                <th>Competente intermedio(8)</th>
                <th>Competente basico(7)</th>
                <th>No aprobado(6)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Actitud firme ante su postura</strong>
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newActitud1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  La actitud ante su postura se mantuvo firme durante todo el foro
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck1"
                      v-model="newActitud10"
                    />
                    <label class="custom-control-label" for="gridCheck1">10</label>
                  </div>
                </td>
                <td>
                  La actitud ante su postura fue firme el 75% del tiempo del foro
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck2"
                      v-model="newActitud9"
                    />
                    <label class="custom-control-label" for="gridCheck2">9</label>
                  </div>
                </td>
                <td>
                  La actitud ante su postura fue firme el 50% del tiempo del foro
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck3"
                      v-model="newActitud8"
                    />
                    <label class="custom-control-label" for="gridCheck3">8</label>
                  </div>
                </td>
                <td>
                  La actitud ante su postura fue firme menos del 50% del tiempo del foro
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck4"
                      v-model="newActitud7"
                    />
                    <label class="custom-control-label" for="gridCheck4">7</label>
                  </div>
                </td>
                <td>
                  No mantuvo firmeza ante su postura durante el foro
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck5"
                      v-model="newActitud6"
                    />
                    <label class="custom-control-label" for="gridCheck5">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Capacidad de escuchar a sus compañeros</strong>
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newCapacity1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Escuchó a sus compañeros atentamente y analizó sus argumentos
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck6"
                      v-model="newCapacity10"
                    />
                    <label class="custom-control-label" for="gridCheck6">10</label>
                  </div>
                </td>
                <td>
                  Escuchó a sus compañeros y analizó sus argumentos
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck7"
                      v-model="newCapacity9"
                    />
                    <label class="custom-control-label" for="gridCheck7">9</label>
                  </div>
                </td>
                <td>
                  Escuchó a sus Compañeros, pero se distrajo en ocasiones y no analizó sus argumentos
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck8"
                      v-model="newCapacity8"
                    />
                    <label class="custom-control-label" for="gridCheck8">8</label>
                  </div>
                </td>
                <td>
                  Escuchó a sus compañeros, pero se distrajo más de la mitad del tiempo del foro y no analizó sus argumentos
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck9"
                      v-model="newCapacity7"
                    />
                    <label class="custom-control-label" for="gridCheck9">7</label>
                  </div>
                </td>
                <td>
                  No escuchó a sus compañeros ni analizó sus argumentos
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck10"
                      v-model="newCapacity6"
                    />
                    <label class="custom-control-label" for="gridCheck10">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Respeto hacia los demás compañeros</strong>
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newRespect1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Todo el tiempo se mostró respetuoso hacia los demás y pidió respeto en las ocasiones que así lo requieran
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck11"
                      v-model="newRespect10"
                    />
                    <label class="custom-control-label" for="gridCheck11">10</label>
                  </div>
                </td>
                <td>
                  Se mostró respetuoso hacia los demás todo el tiempo
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck12"
                      v-model="newRespect9"
                    />
                    <label class="custom-control-label" for="gridCheck12">9</label>
                  </div>
                </td>
                <td>
                  El 50% del tiempo se mostró respetuoso hacia los demás
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck13"
                      v-model="newRespect8"
                    />
                    <label class="custom-control-label" for="gridCheck13">8</label>
                  </div>
                </td>
                <td>
                  Más del 50% del tiempo no mostró respeto hacia lo demás
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck14"
                      v-model="newRespect7"
                    />
                    <label class="custom-control-label" for="gridCheck14">7</label>
                  </div>
                </td>
                <td>
                  Nunca mostró respeto hacia los demás
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck15"
                      v-model="newRespect6"
                    />
                    <label class="custom-control-label" for="gridCheck15">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Respeto del uso de la palabra</strong>
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newRWord1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Siempre esperó su turno para hacer uso de la palabra y lo solicitó con respeto y orden
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck16"
                      v-model="newRWord10"
                    />
                    <label class="custom-control-label" for="gridCheck16">10</label>
                  </div>
                </td>
                <td>
                  Siempre esperó su turno para hacer uso de la palabra, lo solicitó con respeto, pero no con orden
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck17"
                      v-model="newRWord9"
                    />
                    <label class="custom-control-label" for="gridCheck17">9</label>
                  </div>
                </td>
                <td>
                  Siempre esperó su turno para hacer uso de la palabra pero no lo solicitó con respeto ni orden
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck18"
                      v-model="newRWord8"
                    />
                    <label class="custom-control-label" for="gridCheck18">8</label>
                  </div>
                </td>
                <td>
                  En más de 3 ocasiones no esperó su turno para hacer uso de la palabra y no lo solicitó con orden
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck19"
                      v-model="newRWord7"
                    />
                    <label class="custom-control-label" for="gridCheck19">7</label>
                  </div>
                </td>
                <td>
                  Siempre interrumpió a los demás para hacer uso de la palabra, no lo hizo con orden ni respeto
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck20"
                      v-model="newRWord6"
                    />
                    <label class="custom-control-label" for="gridCheck20">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Vocabulario utilizado</strong>
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newVocabulary1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  El vocabulario utilizado fue sobresaliente
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck21"
                      v-model="newVocabulary10"
                    />
                    <label class="custom-control-label" for="gridCheck21">10</label>
                  </div>
                </td>
                <td>
                  El vocabulario utilizado fue el correcto
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck22"
                      v-model="newVocabulary9"
                    />
                    <label class="custom-control-label" for="gridCheck22">9</label>
                  </div>
                </td>
                <td>
                  El vocabulario utilizado fue incorrecto en 2 ó 3 ocasiones
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck23"
                      v-model="newVocabulary8"
                    />
                    <label class="custom-control-label" for="gridCheck23">8</label>
                  </div>
                </td>
                <td>
                  El vocabulario utilizado fue incorrecto en más de 3 ocasiones
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck24"
                      v-model="newVocabulary7"
                    />
                    <label class="custom-control-label" for="gridCheck24">7</label>
                  </div>
                </td>
                <td>
                  El vocabulario utilizado no fue el adecuado
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck25"
                      v-model="newVocabulary6"
                    />
                    <label class="custom-control-label" for="gridCheck25">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Fluidez de las ideas</strong>
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newFluid1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Durante todo el foro mostro fluidez y coherencia en las ideas planteadas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck26"
                      v-model="newFluid10"
                    />
                    <label class="custom-control-label" for="gridCheck26">10</label>
                  </div>
                </td>
                <td>
                  Durante el 75% del foro mostro fluidez y coherencia de las ideas planteadas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck27"
                      v-model="newFluid9"
                    />
                    <label class="custom-control-label" for="gridCheck27">9</label>
                  </div>
                </td>
                <td>
                  Durante el 50% del foro mostro fluidez y coherencia de las ideas planteadas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck28"
                      v-model="newFluid8"
                    />
                    <label class="custom-control-label" for="gridCheck28">8</label>
                  </div>
                </td>
                <td>
                  Durante menos del 50% del foro mostro fluidez y coherencia en las ideas planteadas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck29"
                      v-model="newFluid7"
                    />
                    <label class="custom-control-label" for="gridCheck29">7</label>
                  </div>
                </td>
                <td>
                  Nunca mostró fluidez y coherencia con las ideas planteadas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck30"
                      v-model="newFluid6"
                    />
                    <label class="custom-control-label" for="gridCheck30">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Argumentación y sustento de las ideas</strong>
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newArgument1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Todas las ideas expuestas fueron argumentadas y sustentadas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck31"
                      v-model="newArgument10"
                    />
                    <label class="custom-control-label" for="gridCheck31">10</label>
                  </div>
                </td>
                <td>
                  Una de las ideas argumentada no fue sustentada
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck32"
                      v-model="newArgument9"
                    />
                    <label class="custom-control-label" for="gridCheck32">9</label>
                  </div>
                </td>
                <td>
                  Dos de las ideas argumentadas no fueron sustentadas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck33"
                      v-model="newArgument8"
                    />
                    <label class="custom-control-label" for="gridCheck33">8</label>
                  </div>
                </td>
                <td>
                  Más de tres de las ideas argumentadas no fueron sustentadas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck34"
                      v-model="newArgument7"
                    />
                    <label class="custom-control-label" for="gridCheck34">7</label>
                  </div>
                </td>
                <td>
                  Ninguna de las ideas argumentadas fue sustentada
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck35"
                      v-model="newArgument6"
                    />
                    <label class="custom-control-label" for="gridCheck35">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Conocimiento y dominio del tema</strong>
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newCono1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Mostró conocimiento profundo y dominio total del tema
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck36"
                      v-model="newCono10"
                    />
                    <label class="custom-control-label" for="gridCheck36">10</label>
                  </div>
                </td>
                <td>
                  Mostro conocimiento y dominio del tema
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck37"
                      v-model="newCono9"
                    />
                    <label class="custom-control-label" for="gridCheck37">9</label>
                  </div>
                </td>
                <td>
                  El conocimiento y dominio del tema fue regular
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck38"
                      v-model="newCono8"
                    />
                    <label class="custom-control-label" for="gridCheck38">8</label>
                  </div>
                </td>
                <td>
                  El conocimiento y dominio del tema fue malo
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck39"
                      v-model="newCono7"
                    />
                    <label class="custom-control-label" for="gridCheck39">7</label>
                  </div>
                </td>
                <td>
                  No mostró conocimiento ni dominio del tema
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck40"
                      v-model="newCono6"
                    />
                    <label class="custom-control-label" for="gridCheck40">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Hizo referencias o se apoyó citando a varios autores</strong>
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newRefe1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Citó más de 3 referencias relevantes durante su participación
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck41"
                      v-model="newRefe10"
                    />
                    <label class="custom-control-label" for="gridCheck41">10</label>
                  </div>
                </td>
                <td>
                  Citó tres referencias relevantes durante su participación
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck42"
                      v-model="newRefe9"
                    />
                    <label class="custom-control-label" for="gridCheck42">9</label>
                  </div>
                </td>
                <td>
                  Citó dos referencias relevantes durante su participación y solo una fue relevante
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck43"
                      v-model="newRefe8"
                    />
                    <label class="custom-control-label" for="gridCheck43">8</label>
                  </div>
                </td>
                <td>
                  Citó sólo una referencia durante su participación y no fue relevante
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck44"
                      v-model="newRefe7"
                    />
                    <label class="custom-control-label" for="gridCheck44">7</label>
                  </div>
                </td>
                <td>
                  No citó durante su participación
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck45"
                      v-model="newRefe6"
                    />
                    <label class="custom-control-label" for="gridCheck45">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Tono de voz empleado</strong>
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newTono1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Siempre utilizo un tono de voz adecuado, le dio matiz según se requiera
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck46"
                      v-model="newTono10"
                    />
                    <label class="custom-control-label" for="gridCheck46">10</label>
                  </div>
                </td>
                <td>
                  Siempre utilizo un tono de voz adecuado
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck47"
                      v-model="newTono9"
                    />
                    <label class="custom-control-label" for="gridCheck47">9</label>
                  </div>
                </td>
                <td>
                  En 1 o 2 ocasiones no utilizo el tono de voz adecuado
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck48"
                      v-model="newTono8"
                    />
                    <label class="custom-control-label" for="gridCheck48">8</label>
                  </div>
                </td>
                <td>
                  En tres o más ocasiones no utilizo el tono de voz adecuado
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck49"
                      v-model="newTono7"
                    />
                    <label class="custom-control-label" for="gridCheck49">7</label>
                  </div>
                </td>
                <td>
                  Nunca utilizó el tono de voz adecuado
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck50"
                      v-model="newTono6"
                    />
                    <label class="custom-control-label" for="gridCheck50">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Las conclusiones superan los argumentos</strong>
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newConclus1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Las conclusiones del foro superaron los argumentos planteados
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck51"
                      v-model="newConclus10"
                    />
                    <label class="custom-control-label" for="gridCheck51">10</label>
                  </div>
                </td>
                <td>
                  Las conclusiones del foro estuvieron a la par de los argumentos
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck52"
                      v-model="newConclus9"
                    />
                    <label class="custom-control-label" for="gridCheck52">9</label>
                  </div>
                </td>
                <td>
                  Las conclusiones del foro mostraron un nivel de síntesis y análisis menor al de los argumentos planteados
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck53"
                      v-model="newConclus8"
                    />
                    <label class="custom-control-label" for="gridCheck53">8</label>
                  </div>
                </td>
                <td>
                  Las conclusiones de foro mostraron un nivel de síntesis y análisis menor al de los argumentos planteados y no mostraron relación con el tema
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck54"
                      v-model="newConclus7"
                    />
                    <label class="custom-control-label" for="gridCheck54">7</label>
                  </div>
                </td>
                <td>
                  No hubo conclusiones
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck55"
                      v-model="newConclus6"
                    />
                    <label class="custom-control-label" for="gridCheck55">6</label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="form-group row">
            <div class="col">
              <label for>Subtotal por escala de evaluacion</label>
              <input class="form-control" type="text" v-model="newSubtotal" name id />
            </div>
            <div class="col">
              <label for>Evaluación final del ejercicio</label>
              <input class="form-control" v-model="newTotal" type="text" name id />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-6">
              <label for>Observaciones</label>
              <input class="form-control" v-model="newObservation" type="text" name id />
            </div>
          </div>
          <div class="modal-footer">
            <input type="submit" @click.prevent class="btn btn-primary" value="Guardar" />
          </div>
        </div>
        <!--Ensayo------------------------------------------------------------------------>
        <div v-if="newActivity=='Ensayo'" class="Ensayo">
          <table class="table table-responsive table-hover table-striped" style="border:double;">
            <thead style="background-color:coral;">
              <tr>
                <th>Aspectos a evaluar</th>
                <th>Competente sobresaliente(10)</th>
                <th>Competente avanzado(9)</th>
                <th>Competente intermedio(8)</th>
                <th>Competente basico(7)</th>
                <th>No aprobado(6)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Extensión del ensayo</strong>
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newExten1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Cumple con las especificaciones acordadas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck56"
                      v-model="newExten10"
                    />
                    <label class="custom-control-label" for="gridCheck56">10</label>
                  </div>
                </td>
                <td>
                  Se excede o le falta 1 hoja
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck57"
                      v-model="newExten9"
                    />
                    <label class="custom-control-label" for="gridCheck57">9</label>
                  </div>
                </td>
                <td>
                  Se excede o le faltan 2 hojas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck58"
                      v-model="newExten8"
                    />
                    <label class="custom-control-label" for="gridCheck58">8</label>
                  </div>
                </td>
                <td>
                  Se excede o le faltan 3 hojas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck59"
                      v-model="newExten7"
                    />
                    <label class="custom-control-label" for="gridCheck59">7</label>
                  </div>
                </td>
                <td>
                  No cumple con la extensión determinada, queda muy por abajo del límite predeterminado
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck60"
                      v-model="newExten6"
                    />
                    <label class="custom-control-label" for="gridCheck60">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Ideas principales</strong>
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newIdea1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Muestra todos los elementos cruciales del tema
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck61"
                      v-model="newIdea10"
                    />
                    <label class="custom-control-label" for="gridCheck61">10</label>
                  </div>
                </td>
                <td>
                  Muestra la mayoría de los elementos cruciales del tema
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck62"
                      v-model="newIdea9"
                    />
                    <label class="custom-control-label" for="gridCheck62">9</label>
                  </div>
                </td>
                <td>
                  Muestra el 50% de los elementos cruciales del tema
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck63"
                      v-model="newIdea8"
                    />
                    <label class="custom-control-label" for="gridCheck63">8</label>
                  </div>
                </td>
                <td>
                  Muestra menos del 50% de los elementos cruciales del tema
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck64"
                      v-model="newIdea7"
                    />
                    <label class="custom-control-label" for="gridCheck64">7</label>
                  </div>
                </td>
                <td>
                  No muestra ninguno de los elementos cruciales del tema
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck65"
                      v-model="newIdea6"
                    />
                    <label class="custom-control-label" for="gridCheck65">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Desarrollo proporcional del cuerpo del ensayo y relación con el tema</strong>
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newDesa1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  La introducción, desarrollo y conclusiones son proporcionales y relacionadas con el tema
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck66"
                      v-model="newDesa10"
                    />
                    <label class="custom-control-label" for="gridCheck66">10</label>
                  </div>
                </td>
                <td>
                  La introducción se excede en proporción con el desarrollo y las conclusiones, las tres tienen relación con el tema
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck67"
                      v-model="newDesa9"
                    />
                    <label class="custom-control-label" for="gridCheck67">9</label>
                  </div>
                </td>
                <td>
                  La introducción y desarrollo tienen una proporción adecuada y relación con el tema, pero las conclusiones no
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck68"
                      v-model="newDesa8"
                    />
                    <label class="custom-control-label" for="gridCheck68">8</label>
                  </div>
                </td>
                <td>
                  La introducción, desarrollo y conclusiones no tiene una proporción adecuada y tienen poca relación con el tema
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck69"
                      v-model="newDesa7"
                    />
                    <label class="custom-control-label" for="gridCheck69">7</label>
                  </div>
                </td>
                <td>
                  Introducción, desarrollo y conclusiones no tienen una proporción adecuada entre ellas y no tienen relación con el tema
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck70"
                      v-model="newDesa6"
                    />
                    <label class="custom-control-label" for="gridCheck70">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Claridad en la posición ante la problemática</strong>
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newClari1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Expone con claridad su posición ante las problemáticas, resalta posturas antagónicas y las relaciona de forma correcta
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck71"
                      v-model="newClari10"
                    />
                    <label class="custom-control-label" for="gridCheck71">10</label>
                  </div>
                </td>
                <td>
                  Expone con claridad su posición ante las problemáticas y resalta posturas antagónicas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck72"
                      v-model="newClari9"
                    />
                    <label class="custom-control-label" for="gridCheck72">9</label>
                  </div>
                </td>
                <td>
                  Expone con claridad su posición ante las problemáticas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck73"
                      v-model="newClari8"
                    />
                    <label class="custom-control-label" for="gridCheck73">8</label>
                  </div>
                </td>
                <td>
                  La exposición de su posición ante las problemáticas es confusa
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck74"
                      v-model="newClari7"
                    />
                    <label class="custom-control-label" for="gridCheck74">7</label>
                  </div>
                </td>
                <td>
                  No tiene una posición ante las problemáticas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck75"
                      v-model="newClari6"
                    />
                    <label class="custom-control-label" for="gridCheck75">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Citas y referencias</strong>
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newCita1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Realiza citas y referencias de manera correcta
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck76"
                      v-model="newCita10"
                    />
                    <label class="custom-control-label" for="gridCheck76">10</label>
                  </div>
                </td>
                <td>
                  Las citas y referencias presentan 1 ó 2 errores
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck77"
                      v-model="newCita9"
                    />
                    <label class="custom-control-label" for="gridCheck77">9</label>
                  </div>
                </td>
                <td>
                  Las citas y referencias presentan 3 ó 4 errores
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck78"
                      v-model="newCita8"
                    />
                    <label class="custom-control-label" for="gridCheck78">8</label>
                  </div>
                </td>
                <td>
                  Hace citas y referencias de manera incorrecta
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck79"
                      v-model="newCita7"
                    />
                    <label class="custom-control-label" for="gridCheck79">7</label>
                  </div>
                </td>
                <td>
                  No hace citas ni referencias
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck80"
                      v-model="newCita6"
                    />
                    <label class="custom-control-label" for="gridCheck80">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Gramática, redacción y ortografía</strong>
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newGrama1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  No presenta errores
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck81"
                      v-model="newGrama10"
                    />
                    <label class="custom-control-label" for="gridCheck81">10</label>
                  </div>
                </td>
                <td>
                  Presenta 1 ó 2 errores
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck82"
                      v-model="newGrama9"
                    />
                    <label class="custom-control-label" for="gridCheck82">9</label>
                  </div>
                </td>
                <td>
                  Presenta 3 ó 4 errores
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck83"
                      v-model="newGrama8"
                    />
                    <label class="custom-control-label" for="gridCheck83">8</label>
                  </div>
                </td>
                <td>
                  Presenta más de 4 errores
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck84"
                      v-model="newGrama7"
                    />
                    <label class="custom-control-label" for="gridCheck84">7</label>
                  </div>
                </td>
                <td>
                  La gramática, redacción y ortografía presenta errores en todo el desarrollo del trabajo
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck85"
                      v-model="newGrama6"
                    />
                    <label class="custom-control-label" for="gridCheck85">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Fuentes de información</strong>
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newFuente1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Respeta el orden alfabético y presenta todos los elementos solicitados
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck86"
                      v-model="newFuente10"
                    />
                    <label class="custom-control-label" for="gridCheck86">10</label>
                  </div>
                </td>
                <td>
                  Respeta el orden alfabético y presenta el 75% de los elementos solicitados
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck87"
                      v-model="newFuente9"
                    />
                    <label class="custom-control-label" for="gridCheck87">9</label>
                  </div>
                </td>
                <td>
                  Respeta el orden alfabético y presenta el 50% de los elementos solicitados
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck88"
                      v-model="newFuente8"
                    />
                    <label class="custom-control-label" for="gridCheck88">8</label>
                  </div>
                </td>
                <td>
                  No respeta el orden alfabético y presenta menos del 50% de los elementos solicitados
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck89"
                      v-model="newFuente7"
                    />
                    <label class="custom-control-label" for="gridCheck89">7</label>
                  </div>
                </td>
                <td>
                  No presenta las fuentes de información
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck90"
                      v-model="newFuente6"
                    />
                    <label class="custom-control-label" for="gridCheck90">6</label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="form-group row">
            <div class="col">
              <label for>Subtotal por escala de evaluación</label>
              <input class="form-control" v-model="newSubtotal" type="text" name id />
            </div>
            <div class="col">
              <label for>Evaluación final del ejercicio</label>
              <input class="form-control" v-model="newTotal" type="text" name id />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-6">
              <label for>Observaciones</label>
              <input class="form-control" v-model="newObservation" type="text" name id />
            </div>
          </div>
          <div class="modal-footer">
            <input type="submit" @click.prevent class="btn btn-primary" value="Guardar" />
          </div>
        </div>
        <!--Mapa Conceptual------------------------------------------------------------------>
        <div v-show="newActivity=='Mapa Conceptual'" class="Mapa Conceptual">
          <table class="table table-responsive table-hover table-striped" style="border:double;">
            <thead style="background-color:coral;">
              <th>Aspectos a evaluar</th>
              <th>Competente sobresaliente(10)</th>
              <th>Competente avanzado(9)</th>
              <th>Competente intermedio(8)</th>
              <th>Competente basico(7)</th>
              <th>No aprobado(6)</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Exposición de los aspectos más importantes</strong>
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newContent1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Contiene todos los aspectos importantes del tema o temas, expuestos de forma clara y ordenada
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck91"
                      v-model="newContent10"
                    />
                    <label class="custom-control-label" for="gridCheck91">10</label>
                  </div>
                </td>
                <td>
                  Contiene un 75 % de los aspectos más importantes del tema o temas, están expuestos de forma clara y ordenada
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck92"
                      v-model="newContent9"
                    />
                    <label class="custom-control-label" for="gridCheck92">9</label>
                  </div>
                </td>
                <td>
                  Contiene un 75% de los aspectos más importantes del tema y no se encuentran en forma ordenada y clara
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck93"
                      v-model="newContent8"
                    />
                    <label class="custom-control-label" for="gridCheck93">8</label>
                  </div>
                </td>
                <td>
                  Contiene solo un 50% de los aspectos más importantes del tema y no se encuentran expuestos en forma clara y ordenada
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck94"
                      v-model="newContent7"
                    />
                    <label class="custom-control-label" for="gridCheck94">7</label>
                  </div>
                </td>
                <td>
                  Contiene menos del 50% de los aspectos mas importantes del tema y no se encuentran expuestos en forma clara y ordenada
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck95"
                      v-model="newContent6"
                    />
                    <label class="custom-control-label" for="gridCheck95">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Presenta Jerarquías</strong>
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newJera1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Presenta en todos los conceptos jerarquías de tercer nivel (procesamient o de pensamiento)
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck96"
                      v-model="newJera10"
                    />
                    <label class="custom-control-label" for="gridCheck96">10</label>
                  </div>
                </td>
                <td>
                  Presenta en un 75% de los conceptos jerarquías de tercer nivel (mapas organizadores tareas específicas)
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck97"
                      v-model="newJera9"
                    />
                    <label class="custom-control-label" for="gridCheck97">9</label>
                  </div>
                </td>
                <td>
                  Solo contiene en un 50% de los conceptos jerarquías de tercer nivel (redes de lluvias de ideas)
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck98"
                      v-model="newJera8"
                    />
                    <label class="custom-control-label" for="gridCheck98">8</label>
                  </div>
                </td>
                <td>
                  No contiene jerarquías de tercer nivel
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck99"
                      v-model="newJera7"
                    />
                    <label class="custom-control-label" for="gridCheck99">7</label>
                  </div>
                </td>
                <td>
                  Contiene jerarquías de primer segundo orden
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck100"
                      v-model="newJera6"
                    />
                    <label class="custom-control-label" for="gridCheck96">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Ejemplos</strong>
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newExamp1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Propone ejemplos claros y relacionados con el tema, además sus ideas son innovadoras
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck101"
                      v-model="newExamp10"
                    />
                    <label class="custom-control-label" for="gridCheck101">10</label>
                  </div>
                </td>
                <td>
                  Propone ejemplos claros y relacionados con el tema , pero no aporta ideas nuevas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck102"
                      v-model="newExamp9"
                    />
                    <label class="custom-control-label" for="gridCheck102">9</label>
                  </div>
                </td>
                <td>
                  Propone ejemplos claros pero no todos son relacionados con el tema
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck103"
                      v-model="newExamp8"
                    />
                    <label class="custom-control-label" for="gridCheck103">8</label>
                  </div>
                </td>
                <td>
                  Propone ejemplos claros pero que no están relacionados con el tema
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck104"
                      v-model="newExamp7"
                    />
                    <label class="custom-control-label" for="gridCheck104">7</label>
                  </div>
                </td>
                <td>
                  Los ejemplos propuestos no son claro ni relacionados con el tema
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck105"
                      v-model="newExamp6"
                    />
                    <label class="custom-control-label" for="gridCheck105">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Tipos de uniones</strong>
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newUnion1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Todos los conceptos que así lo requieren presentan uniones cruzadas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck106"
                      v-model="newUnion10"
                    />
                    <label class="custom-control-label" for="gridCheck106">10</label>
                  </div>
                </td>
                <td>
                  Un 75% de los conceptos que así lo requieren presentan uniones cruzadas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck107"
                      v-model="newUnion9"
                    />
                    <label class="custom-control-label" for="gridCheck107">9</label>
                  </div>
                </td>
                <td>
                  Solo un 50% de los conceptos que requieren uniones cruzadas las tienen
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck108"
                      v-model="newUnion8"
                    />
                    <label class="custom-control-label" for="gridCheck108">8</label>
                  </div>
                </td>
                <td>
                  Menos del 50% de los conceptos que requieren uniones cruzadas las tienen
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck109"
                      v-model="newUnion7"
                    />
                    <label class="custom-control-label" for="gridCheck109">7</label>
                  </div>
                </td>
                <td>
                  No hay uniones cruzadas en los conceptos presentados
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck110"
                      v-model="newUnion6"
                    />
                    <label class="custom-control-label" for="gridCheck110">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Proposiciones</strong>
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newPropo1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Las ideas principales presentan proposiciones
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck111"
                      v-model="newPropo10"
                    />
                    <label class="custom-control-label" for="gridCheck111">10</label>
                  </div>
                </td>
                <td>
                  El 75% de las ideas principales presentan proposiciones
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck112"
                      v-model="newPropo9"
                    />
                    <label class="custom-control-label" for="gridCheck112">9</label>
                  </div>
                </td>
                <td>
                  Solo un 50% de los conceptos que requieren uniones cruzadas las tienen
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck113"
                      v-model="newPropo8"
                    />
                    <label class="custom-control-label" for="gridCheck113">8</label>
                  </div>
                </td>
                <td>
                  Menos del 50% de las ideas principales presentan proposiciones
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck114"
                      v-model="newPropo7"
                    />
                    <label class="custom-control-label" for="gridCheck111">7</label>
                  </div>
                </td>
                <td>
                  No hay conexiones adecuadas o correctas entre los conceptos
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck115"
                      v-model="newPropo6"
                    />
                    <label class="custom-control-label" for="gridCheck115">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Conexión de conceptos</strong>
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newConex1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Todos los conceptos presentan una conexión adecuada con el o los siguiente
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck116"
                      v-model="newConex10"
                    />
                    <label class="custom-control-label" for="gridCheck116">10</label>
                  </div>
                </td>
                <td>
                  Un 75% de los conceptos presentan una conexión adecuada con él o los siguiente
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck117"
                      v-model="newConex9"
                    />
                    <label class="custom-control-label" for="gridCheck117">9</label>
                  </div>
                </td>
                <td>
                  Un 50% de los conceptos presentan una conexión adecuada con el o los siguientes
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck118"
                      v-model="newConex8"
                    />
                    <label class="custom-control-label" for="gridCheck118">8</label>
                  </div>
                </td>
                <td>
                  Menos del 50% de los conceptos presentan una conexión adecuada con el o los siguientes
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck119"
                      v-model="newConex7"
                    />
                    <label class="custom-control-label" for="gridCheck119">7</label>
                  </div>
                </td>
                <td>
                  No hay conexiones adecuadas o correctas entre los conceptos
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck120"
                      v-model="newConex6"
                    />
                    <label class="custom-control-label" for="gridCheck120">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Enlaces</strong>
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newEnla1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Utiliza palabras en un 100% de los enlaces entre los conceptos y todas concuerdan con el tipo de relación
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck121"
                      v-model="newEnla10"
                    />
                    <label class="custom-control-label" for="gridCheck121">10</label>
                  </div>
                </td>
                <td>
                  Utiliza palabras en un 75% de los enlaces entre los conceptos y todas concuerdan con el tipo de relación
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck122"
                      v-model="newEnla9"
                    />
                    <label class="custom-control-label" for="gridCheck122">9</label>
                  </div>
                </td>
                <td>
                  Utiliza palabras en un 50% de los enlaces entre conceptos y algunas de ellas no concuerdan con el tipo de relación
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck123"
                      v-model="newEnla8"
                    />
                    <label class="custom-control-label" for="gridCheck123">8</label>
                  </div>
                </td>
                <td>
                  Utiliza palabras en menos del 50% de los enlaces entre conceptos y estas no concuerdan con el tipo de relación
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck124"
                      v-model="newEnla7"
                    />
                    <label class="custom-control-label" for="gridCheck124">7</label>
                  </div>
                </td>
                <td>
                  No utiliza palabras en los enlaces entre los conceptos
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck125"
                      v-model="newEnla6"
                    />
                    <label class="custom-control-label" for="gridCheck125">6</label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="form-group row">
            <div class="col">
              <label for>Subtotal por escala de evaluación</label>
              <input class="form-control" v-model="newSubtotal" type="text" name id />
            </div>
            <div class="col">
              <label for>Evaluación final del ejercicio</label>
              <input class="form-control" v-model="newTotal" type="text" name id />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-6">
              <label for>Observaciones</label>
              <input class="form-control" v-model="newObservation" type="text" name id />
            </div>
          </div>
          <div class="modal-footer">
            <input type="submit" @click.prevent class="btn btn-primary" value="Guardar" />
          </div>
        </div>
        <!--Cuestionario-------------------------------------------------------------------->
        <div v-show="newActivity=='Cuestionario'" class="Cuestionario">
          <table class="table table-responsive table-hover table-striped" style="border:double;">
            <thead style="background-color:coral;">
              <th>Aspectos a evaluar</th>
              <th>Competente sobresaliente(10)</th>
              <th>Competente avanzado(9)</th>
              <th>Competente intermedio(8)</th>
              <th>Competente basico(7)</th>
              <th>No aprobado(6)</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Precisión y calidad de las respuestas</strong>
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newPreci1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Todas las respuestas desarrollan el tema a cabalidad, responden exactamente a lo que se cuestiona y dan una idea clara y precisa del tema que se aborda
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck126"
                      v-model="newPreci10"
                    />
                    <label class="custom-control-label" for="gridCheck126">10</label>
                  </div>
                </td>
                <td>
                  Casi todas las respuestas desarrollan el tema a cabalidad, responden exactamente a lo que se cuestiona y dan una idea clara y precisa del tema que se aborda
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck127"
                      v-model="newPreci9"
                    />
                    <label class="custom-control-label" for="gridCheck127">9</label>
                  </div>
                </td>
                <td>
                  La mayoría de las respuestas desarrollan el tema a cabalidad, responden exactamente a lo que se cuestiona y dan una idea clara y precisa del tema que se aborda
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck128"
                      v-model="newPreci8"
                    />
                    <label class="custom-control-label" for="gridCheck128">8</label>
                  </div>
                </td>
                <td>
                  Sólo pocas de las respuestas desarrollan el tema a cabalidad, responden exactamente a lo que se cuestiona y dan una idea clara y precisa del tema que se aborda
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck129"
                      v-model="newPreci7"
                    />
                    <label class="custom-control-label" for="gridCheck129">7</label>
                  </div>
                </td>
                <td>
                  a mayoría de las respuestas no desarrollan el tema a cabalidad o responden exactamente a lo que se cuestiona y dan una idea clara y precisa del tema que se aborda
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck130"
                      v-model="newPreci6"
                    />
                    <label class="custom-control-label" for="gridCheck130">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Confiabilidad de las fuentes</strong>
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newConfi1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  La totalidad de las respuestas además de ser correctas están documentadas en fuentes confiables de textos y/o autores reconocida autoridad en el tema a tratar
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck131"
                      v-model="newConfi10"
                    />
                    <label class="custom-control-label" for="gridCheck131">10</label>
                  </div>
                </td>
                <td>
                  La mayoría de las respuestas además de ser correctas están documentadas en fuentes confiables de textos y/o autores reconocida autoridad en el tema a tratar
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck132"
                      v-model="newConfi9"
                    />
                    <label class="custom-control-label" for="gridCheck132">9</label>
                  </div>
                </td>
                <td>
                  La mayoría de las respuestas además de ser correctas están documentadas en fuentes de libros o ligas de procedencia desconocida
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck133"
                      v-model="newConfi8"
                    />
                    <label class="custom-control-label" for="gridCheck133">8</label>
                  </div>
                </td>
                <td>
                  Se citan fuentes diversas y algunas de dudosa procedencia o son incorrectas pues, no se puede acceder a ellas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck134"
                      v-model="newConfi7"
                    />
                    <label class="custom-control-label" for="gridCheck134">7</label>
                  </div>
                </td>
                <td>
                  Sólo se cita fuentes de dudosa procedencia como: rincón del vago y /o no se puede acceder a ellas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck135"
                      v-model="newConfi6"
                    />
                    <label class="custom-control-label" for="gridCheck135">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Cumplimiento a cabalidad del ejercicio</strong>
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newCumpli1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Respondió todas las preguntas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck136"
                      v-model="newCumpli10"
                    />
                    <label class="custom-control-label" for="gridCheck136">10</label>
                  </div>
                </td>
                <td>
                  Respondió por lo menos el 90% de las preguntas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck137"
                      v-model="newCumpli9"
                    />
                    <label class="custom-control-label" for="gridCheck137">9</label>
                  </div>
                </td>
                <td>
                  Respondió por lo menos el 80% de las preguntas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck138"
                      v-model="newCumpli8"
                    />
                    <label class="custom-control-label" for="gridCheck138">8</label>
                  </div>
                </td>
                <td>
                  Respondió por lo menos el 70% de las preguntas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck139"
                      v-model="newCumpli7"
                    />
                    <label class="custom-control-label" for="gridCheck139">7</label>
                  </div>
                </td>
                <td>
                  Respondió por lo menos del 70% de las preguntas o varias de las respuestas estaban mal
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck140"
                      v-model="newCumpli6"
                    />
                    <label class="custom-control-label" for="gridCheck140">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Ortografía y puntuación</strong>
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newOrtog1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  El alumno presenta un texto sin faltas de ortografía y con una puntuación correcta, de tal forma que el escrito es claro y fluido para leerse
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck141"
                      v-model="newOrtog10"
                    />
                    <label class="custom-control-label" for="gridCheck141">10</label>
                  </div>
                </td>
                <td>
                  El alumno presenta un texto con escasas faltas de ortografía y de puntuación (menos de 5 faltas), de tal forma que el escrito es claro y fluido para leerse
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck142"
                      v-model="newOrtog9"
                    />
                    <label class="custom-control-label" for="gridCheck142">9</label>
                  </div>
                </td>
                <td>
                  El alumno presenta un texto con varias faltas de ortografía y de puntuación (más de 10 faltas)
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck143"
                      v-model="newOrtog8"
                    />
                    <label class="custom-control-label" for="gridCheck143">8</label>
                  </div>
                </td>
                <td>
                  El alumno presenta un texto con numerosas faltas de ortografía y de puntuación, de tal forma que el escrito no es claro ni fluido de leerse
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck144"
                      v-model="newOrtog7"
                    />
                    <label class="custom-control-label" for="gridCheck144">7</label>
                  </div>
                </td>
                <td>
                  No hay uniones cruzadas en los conceptos presentados
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck145"
                      v-model="newOrtog6"
                    />
                    <label class="custom-control-label" for="gridCheck145">6</label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="form-group row">
            <div class="col">
              <label for>Subtotal por escala de evaluación</label>
              <input class="form-control" v-model="newSubtotal" type="text" name id />
            </div>
            <div class="col">
              <label for>Evaluación final del ejercicio</label>
              <input class="form-control" v-model="newTotal" type="text" name id />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-6">
              <label for>Observaciones</label>
              <input class="form-control" v-model="newObservation" type="text" name id />
            </div>
          </div>
          <div class="modal-footer">
            <input type="submit" @click.prevent class="btn btn-primary" value="Guardar" />
          </div>
        </div>
        <!--Estudio Caso-------------------------------------------------------------->
        <div v-show="newActivity=='Estudio de Caso'" class="Estudio de caso">
          <table class="table table-responsive table-hover table-striped" style="border:double;">
            <thead style="background-color:coral;">
              <th>Aspectos a evaluar</th>
              <th>Competente sobresaliente(10)</th>
              <th>Competente avanzado(9)</th>
              <th>Competente intermedio(8)</th>
              <th>Competente basico(7)</th>
              <th>No aprobado(6)</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Definición del problema</strong>
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newDefi1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  El problema planteado está muy bien definido y delimitado
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck146"
                      v-model="newDefi10"
                    />
                    <label class="custom-control-label" for="gridCheck146">10</label>
                  </div>
                </td>
                <td>
                  El problema planteado esta bien definido y delimitado
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck147"
                      v-model="newDefi9"
                    />
                    <label class="custom-control-label" for="gridCheck147">9</label>
                  </div>
                </td>
                <td>
                  El problema planteado está definido delimitado manera regular
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck148"
                      v-model="newDefi8"
                    />
                    <label class="custom-control-label" for="gridCheck148">8</label>
                  </div>
                </td>
                <td>
                  El problema planteado está mal definido y delimitado
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck149"
                      v-model="newDefi7"
                    />
                    <label class="custom-control-label" for="gridCheck149">7</label>
                  </div>
                </td>
                <td>
                  No hay definición ni delimitación del problema planteado
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck150"
                      v-model="newDefi6"
                    />
                    <label class="custom-control-label" for="gridCheck150">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  Información
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newInfo1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  La información obtenida fue relevante, documentada y de campo
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck151"
                      v-model="newInfo10"
                    />
                    <label class="custom-control-label" for="gridCheck151">10</label>
                  </div>
                </td>
                <td>
                  La información obtenida fue relevante y documentada, pero no de campo
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck152"
                      v-model="newInfo9"
                    />
                    <label class="custom-control-label" for="gridCheck152">9</label>
                  </div>
                </td>
                <td>
                  La información obtenida fue relevante pero mal documentada y no fue de campo
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck153"
                      v-model="newInfo8"
                    />
                    <label class="custom-control-label" for="gridCheck153">8</label>
                  </div>
                </td>
                <td>
                  La información obtenida fue poco relevante, mal documentada y no fue de campo
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck154"
                      v-model="newInfo7"
                    />
                    <label class="custom-control-label" for="gridCheck154">7</label>
                  </div>
                </td>
                <td>
                  La información obtenida no fue relevante, sin relación con el tema
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck155"
                      v-model="newInfo6"
                    />
                    <label class="custom-control-label" for="gridCheck155">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  Soluciones
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newSolu1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Las soluciones consideradas fueron excelentes
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck156"
                      v-model="newSolu10"
                    />
                    <label class="custom-control-label" for="gridCheck156">10</label>
                  </div>
                </td>
                <td>
                  Las soluciones consideradas fueron muy buenas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck157"
                      v-model="newSolu9"
                    />
                    <label class="custom-control-label" for="gridCheck157">9</label>
                  </div>
                </td>
                <td>
                  Las soluciones consideradas fueron buenas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck158"
                      v-model="newSolu8"
                    />
                    <label class="custom-control-label" for="gridCheck158">8</label>
                  </div>
                </td>
                <td>
                  Las soluciones consideradas fueron regulares
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck159"
                      v-model="newSolu7"
                    />
                    <label class="custom-control-label" for="gridCheck159">7</label>
                  </div>
                </td>
                <td>
                  No hubo soluciones
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck160"
                      v-model="newSolu6"
                    />
                    <label class="custom-control-label" for="gridCheck160">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  Estrategias
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newEstra1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Presentó más estrategias de las solicitadas y son excelentes
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck161"
                      v-model="newEstra10"
                    />
                    <label class="custom-control-label" for="gridCheck161">10</label>
                  </div>
                </td>
                <td>
                  Presentó las estrategias solicitadas y son muy buenas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck162"
                      v-model="newEstra9"
                    />
                    <label class="custom-control-label" for="gridCheck162">9</label>
                  </div>
                </td>
                <td>
                  Presento las estrategias solicitadas y son buenas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck163"
                      v-model="newEstra8"
                    />
                    <label class="custom-control-label" for="gridCheck163">8</label>
                  </div>
                </td>
                <td>
                  Presentó las estrategias solicitadas y son regulares
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck164"
                      v-model="newEstra7"
                    />
                    <label class="custom-control-label" for="gridCheck164">7</label>
                  </div>
                </td>
                <td>
                  No presentó estrategias
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck165"
                      v-model="newEstra6"
                    />
                    <label class="custom-control-label" for="gridCheck165">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  Trabajo colaborativo
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newWork1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Se involucró en todos los procesos y niveles del trabajo
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck166"
                      v-model="newWork10"
                    />
                    <label class="custom-control-label" for="gridCheck166">10</label>
                  </div>
                </td>
                <td>
                  Se involucró en el 75% de los procesos y niveles de trabajo
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck167"
                      v-model="newWork9"
                    />
                    <label class="custom-control-label" for="gridCheck167">9</label>
                  </div>
                </td>
                <td>
                  Se involucró en un 50% de los procesos y niveles de trabajo
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck168"
                      v-model="newWork8"
                    />
                    <label class="custom-control-label" for="gridCheck168">8</label>
                  </div>
                </td>
                <td>
                  Se involucró en menos del 50% de los procesos y niveles de trabajo
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck169"
                      v-model="newWork7"
                    />
                    <label class="custom-control-label" for="gridCheck169">7</label>
                  </div>
                </td>
                <td>
                  No se involucró en el trabajo o su participación fue mínima
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck170"
                      v-model="newWork6"
                    />
                    <label class="custom-control-label" for="gridCheck170">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  Detección de fortalezas y debilidades
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newForta1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Detectaron fortalezas y debilidades, que fueron corregidas y mantenidas respectivamente
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck171"
                      v-model="newForta10"
                    />
                    <label class="custom-control-label" for="gridCheck171">10</label>
                  </div>
                </td>
                <td>
                  Detectaron fortalezas y debilidades, estas últimas fueron corregidas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck172"
                      v-model="newForta9"
                    />
                    <label class="custom-control-label" for="gridCheck172">9</label>
                  </div>
                </td>
                <td>
                  Detectaron fortalezas y debilidades, sin embargo no fueron mantenidas ni corregidas respectivamente
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck173"
                      v-model="newForta8"
                    />
                    <label class="custom-control-label" for="gridCheck173">8</label>
                  </div>
                </td>
                <td>
                  No se detectaron todas las fortalezas y debilidades
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck174"
                      v-model="newForta7"
                    />
                    <label class="custom-control-label" for="gridCheck174">7</label>
                  </div>
                </td>
                <td>
                  No detectaron fortalezas ni debilidades
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck175"
                      v-model="newForta6"
                    />
                    <label class="custom-control-label" for="gridCheck175">6</label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="form-group row">
            <div class="col">
              <label for>Subtotal por escala de evaluación</label>
              <input class="form-control" v-model="newSubtotal" type="text" name id />
            </div>
            <div class="col">
              <label for>Evaluación final del ejercicio</label>
              <input class="form-control" v-model="newTotal" type="text" name id />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-6">
              <label for>Observaciones</label>
              <input class="form-control" v-model="newObservation" type="text" name id />
            </div>
          </div>
          <div class="modal-footer">
            <input type="submit" @click.prevent class="btn btn-primary" value="Guardar" />
          </div>
        </div>
        <!--Chat---------------------------------------------------------------------------------->
        <div v-show="newActivity=='Chat'" class="Chat">
          <table class="table table-responsive table-hover table-striped" style="border:double;">
            <thead style="background-color:coral;">
              <th>Aspectos a evaluar</th>
              <th>Competente sobresaliente(10)</th>
              <th>Competente avanzado(9)</th>
              <th>Competente intermedio(8)</th>
              <th>Competente basico(7)</th>
              <th>No aprobado(6)</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  Actitud firme ante su postura
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newActi1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  La actitud ante su postura se mantuvo firme durante todo el chat
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck176"
                      v-model="newActi10"
                    />
                    <label class="custom-control-label" for="gridCheck176">10</label>
                  </div>
                </td>
                <td>
                  La actitud ante su postura fue firme el 75% del tiempo del chat
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck177"
                      v-model="newActi9"
                    />
                    <label class="custom-control-label" for="gridCheck177">9</label>
                  </div>
                </td>
                <td>
                  La actitud ante su postura fue firme el 50% del tiempo del chat
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck178"
                      v-model="newActi8"
                    />
                    <label class="custom-control-label" for="gridCheck178">8</label>
                  </div>
                </td>
                <td>
                  La actitud ante su postura fue firme menos del 50% del tiempo del chat
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck179"
                      v-model="newActi7"
                    />
                    <label class="custom-control-label" for="gridCheck179">7</label>
                  </div>
                </td>
                <td>
                  No mantuvo firmeza ante su postura durante el chat
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck180"
                      v-model="newActi6"
                    />
                    <label class="custom-control-label" for="gridCheck180">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  Capacidad de escuchar a sus compañeros
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newCapaci1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Escuchó a sus compañeros atentamente y analizó sus argumentos
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck181"
                      v-model="newCapaci10"
                    />
                    <label class="custom-control-label" for="gridCheck181">10</label>
                  </div>
                </td>
                <td>
                  Escuchó a sus compañeros y analizó sus argumentos
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck182"
                      v-model="newCapaci9"
                    />
                    <label class="custom-control-label" for="gridCheck182">9</label>
                  </div>
                </td>
                <td>
                  Escuchó a sus Compañeros, pero se distrajo en ocasiones y no analizó sus argumentos
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck183"
                      v-model="newCapaci8"
                    />
                    <label class="custom-control-label" for="gridCheck183">8</label>
                  </div>
                </td>
                <td>
                  Escuchó a sus compañeros, pero se distrajo más de la mitad del tiempo del chat y no analizó sus argumentos
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck184"
                      v-model="newCapaci7"
                    />
                    <label class="custom-control-label" for="gridCheck184">7</label>
                  </div>
                </td>
                <td>
                  No escuchó a sus compañeros ni analizó sus argumentos
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck185"
                      v-model="newCapaci6"
                    />
                    <label class="custom-control-label" for="gridCheck185">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  Respeto hacia los demás compañeros
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newRespec1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Todo el tiempo se mostró respetuoso hacia los demás y pidió respeto en las ocasiones que así lo requieran
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck186"
                      v-model="newRespec10"
                    />
                    <label class="custom-control-label" for="gridCheck186">10</label>
                  </div>
                </td>
                <td>
                  Se mostró respetuoso hacia los demás todo el tiempo
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck187"
                      v-model="newRespec9"
                    />
                    <label class="custom-control-label" for="gridCheck187">9</label>
                  </div>
                </td>
                <td>
                  El 50% del tiempo se mostró respetuoso hacia los demás
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck188"
                      v-model="newRespec8"
                    />
                    <label class="custom-control-label" for="gridCheck188">8</label>
                  </div>
                </td>
                <td>
                  Más del 50% del tiempo no mostró respeto hacia lo demás
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck189"
                      v-model="newRespec7"
                    />
                    <label class="custom-control-label" for="gridCheck189">7</label>
                  </div>
                </td>
                <td>
                  Nunca mostró respeto hacia los demás
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck190"
                      v-model="newRespec6"
                    />
                    <label class="custom-control-label" for="gridCheck190">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  Respeto del uso de la palabra
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newRespep1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Siempre esperó su turno para hacer uso de la palabra y lo solicitó con respeto y orden
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck191"
                      v-model="newRespep10"
                    />
                    <label class="custom-control-label" for="gridCheck191">10</label>
                  </div>
                </td>
                <td>
                  Siempre esperó su turno para hacer uso de la palabra, lo solicitó con respeto, pero no con orden
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck192"
                      v-model="newRespep9"
                    />
                    <label class="custom-control-label" for="gridCheck192">9</label>
                  </div>
                </td>
                <td>
                  Siempre esperó su turno para hacer uso de la palabra pero no lo solicitó con respeto ni orden
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck193"
                      v-model="newRespep8"
                    />
                    <label class="custom-control-label" for="gridCheck193">8</label>
                  </div>
                </td>
                <td>
                  En más de 3 ocasiones no esperó su turno para hacer uso de la palabra y no lo solicitó con orden
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck194"
                      v-model="newRespep7"
                    />
                    <label class="custom-control-label" for="gridCheck194">7</label>
                  </div>
                </td>
                <td>
                  Siempre interrumpió a los demás para hacer uso de la palabra, no lo hizo con orden ni respeto
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck195"
                      v-model="newRespep6"
                    />
                    <label class="custom-control-label" for="gridCheck195">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  Vocabulario utilizado
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newVoca1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  El vocabulario utilizado fue sobresaliente
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck196"
                      v-model="newVoca10"
                    />
                    <label class="custom-control-label" for="gridCheck196">10</label>
                  </div>
                </td>
                <td>
                  El vocabulario utilizado fue el correcto
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck197"
                      v-model="newVoca9"
                    />
                    <label class="custom-control-label" for="gridCheck197">9</label>
                  </div>
                </td>
                <td>
                  El vocabulario utilizado fue incorrecto en 2 ó 3 ocasiones
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck198"
                      v-model="newVoca8"
                    />
                    <label class="custom-control-label" for="gridCheck198">8</label>
                  </div>
                </td>
                <td>
                  El vocabulario utilizado fue incorrecto en más de 3 ocasiones
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck199"
                      v-model="newVoca7"
                    />
                    <label class="custom-control-label" for="gridCheck199">7</label>
                  </div>
                </td>
                <td>
                  El vocabulario utilizado no fue el adecuado
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck200"
                      v-model="newVoca6"
                    />
                    <label class="custom-control-label" for="gridCheck200">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  Fluidez de las ideas
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newFlui1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Durante todo el chat mostro fluidez y coherencia en las ideas planteadas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck201"
                      v-model="newFlui10"
                    />
                    <label class="custom-control-label" for="gridCheck201">10</label>
                  </div>
                </td>
                <td>
                  Durante el 75% del chat mostro fluidez y coherencia de las ideas planteadas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck202"
                      v-model="newFlui9"
                    />
                    <label class="custom-control-label" for="gridCheck202">9</label>
                  </div>
                </td>
                <td>
                  Durante el 50% del chat mostro fluidez y coherencia de las ideas planteadas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck203"
                      v-model="newFlui8"
                    />
                    <label class="custom-control-label" for="gridCheck203">8</label>
                  </div>
                </td>
                <td>
                  Durante menos del 50% del chat mostro fluidez y coherencia en las ideas planteadas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck204"
                      v-model="newFluid7"
                    />
                    <label class="custom-control-label" for="gridCheck204">7</label>
                  </div>
                </td>
                <td>
                  Nunca mostró fluidez y coherencia con las ideas planteadas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck205"
                      v-model="newFlui6"
                    />
                    <label class="custom-control-label" for="gridCheck205">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  Argumentación y sustento de las ideas
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newArgu1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Todas las ideas expuestas fueron argumentadas y sustentadas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck206"
                      v-model="newArgu10"
                    />
                    <label class="custom-control-label" for="gridCheck206">10</label>
                  </div>
                </td>
                <td>
                  Una de las ideas argumentada no fue sustentada
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck207"
                      v-model="newArgu9"
                    />
                    <label class="custom-control-label" for="gridCheck207">9</label>
                  </div>
                </td>
                <td>
                  Dos de las ideas argumentadas no fueron sustentadas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck208"
                      v-model="newArgu8"
                    />
                    <label class="custom-control-label" for="gridCheck208">8</label>
                  </div>
                </td>
                <td>
                  Más de tres de las ideas argumentadas no fueron sustentadas
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck209"
                      v-model="newArgu7"
                    />
                    <label class="custom-control-label" for="gridCheck209">7</label>
                  </div>
                </td>
                <td>
                  Ninguna de las ideas argumentadas fue sustentada
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck210"
                      v-model="newArgu6"
                    />
                    <label class="custom-control-label" for="gridCheck210">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  Conocimiento y dominio del tema
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newConoc1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Mostró conocimiento profundo y dominio total del tema
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck211"
                      v-model="newConoc10"
                    />
                    <label class="custom-control-label" for="gridCheck211">10</label>
                  </div>
                </td>
                <td>
                  Mostro conocimiento y dominio del tema
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck212"
                      v-model="newConoc9"
                    />
                    <label class="custom-control-label" for="gridCheck212">9</label>
                  </div>
                </td>
                <td>
                  El conocimiento y dominio del tema fue regular
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck213"
                      v-model="newConoc8"
                    />
                    <label class="custom-control-label" for="gridCheck213">8</label>
                  </div>
                </td>
                <td>
                  El conocimiento y dominio del tema fue malo
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck214"
                      v-model="newConoc7"
                    />
                    <label class="custom-control-label" for="gridCheck214">7</label>
                  </div>
                </td>
                <td>
                  No mostró conocimiento ni dominio del tema
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck215"
                      v-model="newConoc6"
                    />
                    <label class="custom-control-label" for="gridCheck215">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  Hizo referencias o se apoyó citando a varios autores
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newRefer1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Citó más de 3 referencias relevantes durante su participación
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck216"
                      v-model="newRefer10"
                    />
                    <label class="custom-control-label" for="gridCheck216">10</label>
                  </div>
                </td>
                <td>
                  Citó tres referencias relevantes durante su participación
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck217"
                      v-model="newRefer9"
                    />
                    <label class="custom-control-label" for="gridCheck217">9</label>
                  </div>
                </td>
                <td>
                  Citó dos referencias relevantes durante su participación y solo una fue relevante
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck218"
                      v-model="newRefer8"
                    />
                    <label class="custom-control-label" for="gridCheck218">8</label>
                  </div>
                </td>
                <td>
                  Citó sólo una referencia durante su participación y no fue relevante
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck219"
                      v-model="newRefer7"
                    />
                    <label class="custom-control-label" for="gridCheck219">7</label>
                  </div>
                </td>
                <td>
                  No citó durante su participación
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck220"
                      v-model="newRefer6"
                    />
                    <label class="custom-control-label" for="gridCheck220">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  Tono de voz empleado
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newVoz1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Siempre utilizo un tono de voz adecuado, le dio matiz según se requiera
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck221"
                      v-model="newVoz10"
                    />
                    <label class="custom-control-label" for="gridCheck221">10</label>
                  </div>
                </td>
                <td>
                  Siempre utilizo un tono de voz adecuado
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck222"
                      v-model="newVoz9"
                    />
                    <label class="custom-control-label" for="gridCheck222">9</label>
                  </div>
                </td>
                <td>
                  En 1 o 2 ocasiones no utilizo el tono de voz adecuado
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck223"
                      v-model="newVoz8"
                    />
                    <label class="custom-control-label" for="gridCheck223">8</label>
                  </div>
                </td>
                <td>
                  En tres o más ocasiones no utilizo el tono de voz adecuado
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck224"
                      v-model="newVoz7"
                    />
                    <label class="custom-control-label" for="gridCheck224">7</label>
                  </div>
                </td>
                <td>
                  Nunca utilizó el tono de voz adecuado
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck225"
                      v-model="newVoz6"
                    />
                    <label class="custom-control-label" for="gridCheck225">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  Las conclusiones superan los argumentos
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newConclu1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Las conclusiones del chat superaron los argumentos planteados
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck226"
                      v-model="newConclu10"
                    />
                    <label class="custom-control-label" for="gridCheck226">10</label>
                  </div>
                </td>
                <td>
                  Las conclusiones del chat estuvieron a la par de los argumentos
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck227"
                      v-model="newConclu9"
                    />
                    <label class="custom-control-label" for="gridCheck227">9</label>
                  </div>
                </td>
                <td>
                  Las conclusiones del chat mostraron un nivel de síntesis y análisis menor al de los argumentos planteados
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck228"
                      v-model="newConclu8"
                    />
                    <label class="custom-control-label" for="gridCheck228">8</label>
                  </div>
                </td>
                <td>
                  Las conclusiones de chat mostraron un nivel de síntesis y análisis menor al de los argumentos planteados y no mostraron relación con el tema
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck229"
                      v-model="newConclu7"
                    />
                    <label class="custom-control-label" for="gridCheck229">7</label>
                  </div>
                </td>
                <td>
                  No hubo conclusiones
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck230"
                      v-model="newConclu6"
                    />
                    <label class="custom-control-label" for="gridCheck230">6</label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="form-group row">
            <div class="col">
              <label for>Subtotal por escala de evaluación</label>
              <input class="form-control" v-model="newSubtotal" type="text" name id />
            </div>
            <div class="col">
              <label for>Evaluación final del ejercicio</label>
              <input class="form-control" v-model="newTotal" type="text" name id />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-6">
              <label for>Observaciones</label>
              <input class="form-control" v-model="newObservation" type="text" name id />
            </div>
          </div>
          <div class="modal-footer">
            <input type="submit" @click.prevent class="btn btn-primary" value="Guardar" />
          </div>
        </div>
        <!--Ejercicios--------------------------------------------------------------------->
        <div v-show="newActivity=='Ejercicios'" class="Ejercicios">
          <table class="table table-responsive table-hover table-striped" style="border:double;">
            <thead style="background-color:coral;">
              <th>Aspectos a evaluar</th>
              <th>Competente sobresaliente(10)</th>
              <th>Competente avanzado(9)</th>
              <th>Competente intermedio(8)</th>
              <th>Competente basico(7)</th>
              <th>No aprobado(6)</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  Cantidad de ejercicios resueltos
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newEjer1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Presenta del 90% al total de ejercicios resueltos
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck231"
                      v-model="newEjer10"
                    />
                    <label class="custom-control-label" for="gridCheck231">10</label>
                  </div>
                </td>
                <td>
                  Presenta del 80% al 90% de ejercicios resueltos
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck232"
                      v-model="newEjer9"
                    />
                    <label class="custom-control-label" for="gridCheck232">9</label>
                  </div>
                </td>
                <td>
                  Presenta del 70% al 80% de ejercicios resueltos
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck233"
                      v-model="newEjer8"
                    />
                    <label class="custom-control-label" for="gridCheck233">8</label>
                  </div>
                </td>
                <td>
                  Presenta del 60% al 70% de ejercicios o problemas resueltos
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck234"
                      v-model="newEjer7"
                    />
                    <label class="custom-control-label" for="gridCheck234">7</label>
                  </div>
                </td>
                <td>
                  Presenta menos del 60% de ejercicios resueltos
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck235"
                      v-model="newEjer6"
                    />
                    <label class="custom-control-label" for="gridCheck235">6</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  Procedimiento y resultado de los ejercicios resueltos
                  <br />
                  <div class="custom-control-inline">
                    <input
                      minlength="1"
                      maxlength="2"
                      size="4"
                      type="text"
                      v-model="newProce1"
                      placeholder="%"
                    />
                  </div>
                </td>
                <td>
                  Desarrolla el procedimiento detallada y organizadamente y obtiene el resultado correcto
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck236"
                      v-model="newProce10"
                    />
                    <label class="custom-control-label" for="gridCheck236">10</label>
                  </div>
                </td>
                <td>
                  Desarrolla el procedimiento aceptablemente, pero con mediana organización y obtiene el resultado correcto
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck237"
                      v-model="newProce9"
                    />
                    <label class="custom-control-label" for="gridCheck237">9</label>
                  </div>
                </td>
                <td>
                  Desarrolla el procedimiento aceptablemente, con poca o nula organización y obtiene el resultado correcto
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck238"
                      v-model="newProce8"
                    />
                    <label class="custom-control-label" for="gridCheck238">8</label>
                  </div>
                </td>
                <td>
                  Desarrolla el procedimiento de forma regular, con poca o nula organización y obtiene el resultado correcto
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck239"
                      v-model="newProce7"
                    />
                    <label class="custom-control-label" for="gridCheck239">7</label>
                  </div>
                </td>
                <td>
                  No desarrolla el procedimiento en forma clara y el resultado es incorrecto
                  <br />
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="gridCheck240"
                      v-model="newProce6"
                    />
                    <label class="custom-control-label" for="gridCheck240">6</label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="form-group row">
            <div class="col">
              <label for>Subtotal por escala de evaluación</label>
              <input class="form-control" v-model="newSubtotal" type="text" name id />
            </div>
            <div class="col">
              <label for>Evaluación final del ejercicio</label>
              <input class="form-control" v-model="newTotal" type="text" name id />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-6">
              <label for>Observaciones</label>
              <input class="form-control" v-model="newObservation" type="text" name id />
            </div>
          </div>
          <div class="modal-footer">
            <input type="submit" @click.prevent class="btn btn-primary" value="Guardar" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activity: [
        "Foro",
        "Ensayo",
        "Cuestionario",
        "Mapa Conceptual",
        "Estudio de Caso",
        "Chat",
        "Ejercicios"
      ],
      courses: [],
      TypeUsers: [],
      classes: [],
      newTotal: "",
      newName: "",
      newActivity: "",
      newSubtotal: "",
      newObservation: "",
      newFase1: "",
      newFase2: "",
      newId_student: "",
      newId_Teacher: "",
      newLast_date: "",
      newDate: "",
      newActitud1: "",
      newActitud10: "",
      newActitud9: "",
      newActitud8: "",
      newActitud7: "",
      newActitud6: "",
      newCapacity1: "",
      newCapacity10: "",
      newCapacity9: "",
      newCapacity8: "",
      newCapacity7: "",
      newCapacity6: "",
      newRespect1: "",
      newRespect10: "",
      newRespect9: "",
      newRespect8: "",
      newRespect7: "",
      newRespect6: "",
      newRWord1: "",
      newRWord10: "",
      newRWord9: "",
      newRWord8: "",
      newRWord7: "",
      newRWord6: "",
      newVocabulary1: "",
      newVocabulary10: "",
      newVocabulary9: "",
      newVocabulary8: "",
      newVocabulary7: "",
      newVocabulary6: "",
      newFluid1: "",
      newFluid10: "",
      newFluid9: "",
      newFluid8: "",
      newFluid7: "",
      newFluid6: "",
      newArgument1: "",
      newArgument10: "",
      newArgument9: "",
      newArgument8: "",
      newArgument7: "",
      newArgument6: "",
      newCono1: "",
      newCono10: "",
      newCono9: "",
      newCono8: "",
      newCono7: "",
      newCono6: "",
      newRefe1: "",
      newRefe10: "",
      newRefe9: "",
      newRefe8: "",
      newRefe7: "",
      newRefe6: "",
      newTono1: "",
      newTono10: "",
      newTono9: "",
      newTono8: "",
      newTono7: "",
      newTono6: "",
      newConclus1: "",
      newConclus10: "",
      newConclus9: "",
      newConclus8: "",
      newConclus7: "",
      newConclus6: "",
      newExten1: "",
      newExten10: "",
      newExten9: "",
      newExten8: "",
      newExten7: "",
      newExten6: "",
      newIdea1: "",
      newIdea10: "",
      newIdea9: "",
      newIdea8: "",
      newIdea7: "",
      newIdea6: "",
      newDesa1: "",
      newDesa10: "",
      newDesa9: "",
      newDesa8: "",
      newDesa7: "",
      newDesa6: "",
      newClari1: "",
      newClari10: "",
      newClari9: "",
      newClari8: "",
      newClari7: "",
      newClari6: "",
      newCita1: "",
      newCita10: "",
      newCita9: "",
      newCita8: "",
      newCita7: "",
      newCita6: "",
      newGrama1: "",
      newGrama10: "",
      newGrama9: "",
      newGrama8: "",
      newGrama7: "",
      newGrama6: "",
      newFuente1: "",
      newFuente10: "",
      newFuente9: "",
      newFuente8: "",
      newFuente7: "",
      newFuente6: "",
      newContent1: "",
      newContent10: "",
      newContent9: "",
      newContent8: "",
      newContent7: "",
      newContent6: "",
      newJera1: "",
      newJera10: "",
      newJera9: "",
      newJera8: "",
      newJera7: "",
      newJera6: "",
      newExamp1: "",
      newExamp10: "",
      newExamp9: "",
      newExamp8: "",
      newExamp7: "",
      newExamp6: "",
      newUnion1: "",
      newUnion10: "",
      newUnion9: "",
      newUnion8: "",
      newUnion7: "",
      newUnion6: "",
      newPropo1: "",
      newPropo10: "",
      newPropo9: "",
      newPropo8: "",
      newPropo7: "",
      newPropo6: "",
      newConex1: "",
      newConex10: "",
      newConex9: "",
      newConex8: "",
      newConex7: "",
      newConex6: "",
      newEnla1: "",
      newEnla10: "",
      newEnla9: "",
      newEnla8: "",
      newEnla7: "",
      newEnla6: "",
      newPreci1: "",
      newPreci10: "",
      newPreci9: "",
      newPreci8: "",
      newPreci7: "",
      newPreci6: "",
      newConfi1: "",
      newConfi10: "",
      newConfi9: "",
      newConfi8: "",
      newConfi7: "",
      newConfi6: "",
      newCumpli1: "",
      newCumpli10: "",
      newCumpli9: "",
      newCumpli8: "",
      newCumpli7: "",
      newCumpli6: "",
      newOrtog1: "",
      newOrtog10: "",
      newOrtog9: "",
      newOrtog8: "",
      newOrtog7: "",
      newOrtog6: "",
      newDefi1: "",
      newDefi10: "",
      newDefi9: "",
      newDefi8: "",
      newDefi7: "",
      newDefi6: "",
      newInfo1: "",
      newInfo10: "",
      newInfo9: "",
      newInfo8: "",
      newInfo7: "",
      newInfo6: "",
      newSolu1: "",
      newSolu10: "",
      newSolu9: "",
      newSolu8: "",
      newSolu7: "",
      newSolu6: "",
      newEstra1: "",
      newEstra10: "",
      newEstra9: "",
      newEstra8: "",
      newEstra7: "",
      newEstra6: "",
      newWork1: "",
      newWork10: "",
      newWork9: "",
      newWork8: "",
      newWork7: "",
      newWork6: "",
      newForta1: "",
      newForta10: "",
      newForta9: "",
      newForta8: "",
      newForta7: "",
      newForta6: "",
      newActi1: "",
      newActi10: "",
      newActi9: "",
      newActi8: "",
      newActi7: "",
      newActi6: "",
      newCapaci1: "",
      newCapaci10: "",
      newCapaci9: "",
      newCapaci8: "",
      newCapaci7: "",
      newCapaci6: "",
      newRespec1: "",
      newRespec10: "",
      newRespec9: "",
      newRespec8: "",
      newRespec7: "",
      newRespec6: "",
      newRespep1: "",
      newRespep10: "",
      newRespep9: "",
      newRespep8: "",
      newRespep7: "",
      newRespep6: "",
      newVoca1: "",
      newVoca10: "",
      newVoca9: "",
      newVoca8: "",
      newVoca7: "",
      newVoca6: "",
      newFlui1: "",
      newFlui10: "",
      newFlui9: "",
      newFlui8: "",
      newFlui7: "",
      newFlui6: "",
      newArgu1: "",
      newArgu10: "",
      newArgu9: "",
      newArgu8: "",
      newArgu7: "",
      newArgu6: "",
      newConoc1: "",
      newConoc10: "",
      newConoc9: "",
      newConoc8: "",
      newConoc7: "",
      newConoc6: "",
      newRefer1: "",
      newRefer10: "",
      newRefer9: "",
      newRefer8: "",
      newRefer7: "",
      newRefer6: "",
      newVoz1: "",
      newVoz10: "",
      newVoz9: "",
      newVoz8: "",
      newVoz7: "",
      newVoz6: "",
      newConclu1: "",
      newConclu10: "",
      newConclu9: "",
      newConclu8: "",
      newConclu7: "",
      newConclu6: "",
      newEjer1: "",
      newEjer10: "",
      newEjer9: "",
      newEjer8: "",
      newEjer7: "",
      newEjer6: "",
      newProce1: "",
      newProce10: "",
      newProce9: "",
      newProce8: "",
      newProce7: "",
      newProce6: "",

      fillC: {
        id: "",
        name: "",
        fase1: "",
        id_student: "",
        id_teacher: "",
        id_course: "",
        fase2: "",
        last_date: "",
        date: "",
        competente10: "",
        competente9: "",
        competente8: "",
        competente7: "",
        competente6: "",
        subtotal: "",
        total: "",
        observation: ""
      },
      errors: []
    };
  },
  created() {},
  computed: {},
  mounted() {
    console.log("Component mounted.");
    var urlsel = "GetCourses";
    axios.get(urlsel).then(response => {
      this.courses = response.data;
    });
  },
  methods: {
    //metodos del CRUD

    createResumes() {
      var url = "resumes";
      this.newId_user = 36;
      axios
        .post(url, {
          id_user: this.newId_user,
          description: this.newDescription,
          language: this.newLanguage,
          institutionB: this.newInstitutionB,
          institutionT: this.newInstitutionT,
          institutionP: this.newInstitutionP,
          institutionE: this.newInstitutionE,
          institutionM: this.newInstitutionM,
          institutionD: this.newInstitutionD,
          institutionO: this.newInstitutionO,
          dateB: this.newDateB,
          dateT: this.newDateT,
          dateP: this.newDateP,
          dateE: this.newDateE,
          dateM: this.newDateM,
          dateD: this.newDateD,
          dateO: this.newDateE,
          countryB: this.newCountryB,
          countryT: this.newCountryT,
          countryP: this.newCountryP,
          countryE: this.newCountryE,
          countryM: this.newCountryM,
          countryD: this.newCountryO,
          countryO: this.newCountryO,
          jobTitle: this.newJobtitle,
          jobTitle1: this.newJobtitle1,
          jobTitle2: this.newJobtitle2,
          company: this.newCompany,
          company1: this.newCompany1,
          company2: this.newCompany2,
          time: this.newTime,
          time1: this.newTime1,
          time2: this.newTime2,
          other: this.newOther
        })
        .then(response => {
          this.getResumes();
          this.newDescription = "";
          this.newId_user = "";
          this.newLanguage = "";
          this.newInstitutionB = "";
          this.newInstitutionT = "";
          this.newInstitutionP = "";
          this.newInstitutionE = "";
          this.newInstitutionM = "";
          this.newInstitutionD = "";
          this.newInstitutionO = "";
          this.newDateB = "";
          this.newDateT = "";
          this.newDateP = "";
          this.newDateE = "";
          this.newDateM = "";
          this.newDateD = "";
          this.newDateE = "";
          this.newCountryB = "";
          this.newCountryT = "";
          this.newCountryP = "";
          this.newCountryE = "";
          this.newCountryM = "";
          this.newCountryO = "";
          this.newCountryO = "";
          this.newJobtitle = "";
          this.newJobtitle2 = "";
          this.newJobtitle2 = "";
          this.newCompany = "";
          this.newCompany1 = "";
          this.newCompany2 = "";
          this.newTime = "";
          this.newTime1 = "";
          this.newTime2 = "";
          this.newOther = "";
          this.errors = [];
          toastr.success("Nuevo resume Creado con exito");
        })
        .catch(error => {
          this.errors = error.response.data;
        });
    }
  }
};
</script>
<style>

</style>

