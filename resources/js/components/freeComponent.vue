<template>
<auto-responsive>
  <head>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/solid.css"
      integrity="sha384-ioUrHig76ITq4aEJ67dHzTvqjsAP/7IzgwE7lgJcg2r7BRNGYSK0LwSmROzYtgzs"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/brands.css"
      integrity="sha384-i2PyM6FMpVnxjRPi0KW/xIS7hkeSznkllv+Hx/MtYDaHA5VcF0yL3KVlvzp8bWjQ"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/fontawesome.css"
      integrity="sha384-sri+NftO+0hcisDKgr287Y/1LVnInHJ1l+XC7+FOabmTTIK0HnE2ID+xxvJ21c5J"
      crossorigin="anonymous"
    />
  </head>
  <div class="back">
    <div class="row">
      <div class="col-md-11 mx-auto">
        <div class="custom-card text-center">
          <h3 class="card-header">Curso</h3>
          <form class="needs-validation" novalidate>
            <form-wizard title subtitle>
              <tab-content>
                <div class="card-body">
                  <div class="form-group row">
                    <div class="col">
                      <label for>Categorias</label>
                      <select2
                        :options="categories"
                        v-model="Category"
                        @input="getSubcategories"
                        required
                      ></select2>
                    </div>
                    <div class="col">
                      <label for>Subcategorias</label>
                      <select2 :options="subcategories" v-model="newId_subcategories" required></select2>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col">
                      <label for="name">Nombre del curso</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="subject">Intensidad horaria acompañamiento dirigido</label>
                      <input
                        type="text"
                        name="subject"
                        class="form-control"
                        v-model="newIntensityAC"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="subject">Intensidad horaria trabajo autónomo</label>
                      <input
                        type="text"
                        name="subject"
                        class="form-control"
                        v-model="newIntensityTA"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for>Metodología</label>
                      <select2 :options="myOptions" v-model="metodology" required></select2>
                    </div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Bienvenida</strong>
                      <a
                        tabindex="0"
                        class="badge badge-info"
                        role="button"
                        data-toggle="popover"
                        data-trigger="focus"
                        title="Bienvenida"
                        data-content="Es un texto redactado de manera cordial, cálida, precisa y breve cumpliendo como objetivo dar la bienvenida al curso e invitar al estudiante a su recorrido y cumplimiento de los objetivos propuestos."
                      >
                        <i class="fas fa-question"></i>
                      </a>
                    </div>
                    <textarea name="welcome" class="form-control" v-model="newWelcome" required></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Presentación del tutor</strong>
                      <a
                        tabindex="0"
                        class="badge badge-info"
                        role="button"
                        data-toggle="popover"
                        data-trigger="focus"
                        title="Presentación del tutor"
                        data-content="Se refiere al espacio en el cual se da a conocer los aspectos generales del autor/tutor del curso, trayectoria, experiencia y aspectos relevantes que generen credibilidad y calidad."
                      >
                        <i class="fas fa-question"></i>
                      </a>
                    </div>
                    <textarea
                      name="intentioned"
                      class="form-control"
                      v-model="newPresentation"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Intencion educativa</strong>
                      <a
                        tabindex="0"
                        class="badge badge-info"
                        role="button"
                        data-toggle="popover"
                        data-trigger="focus"
                        title="Intencion educativa"
                        data-content="Se refiere al espacio en el cual se da a conocer el proposito y objetivos del curso; debe ser escrita mediante un texto corto."
                      >
                        <i class="fas fa-question"></i>
                      </a>
                    </div>
                    <textarea
                      name="intentioned"
                      class="form-control"
                      v-model="newIntention"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Competencias</strong>
                      <a
                        tabindex="0"
                        class="badge badge-info"
                        role="button"
                        data-toggle="popover"
                        data-trigger="focus"
                        title="Competencias"
                        data-content="Competencias conceptuales, procedimentales y actitudinales."
                      >
                        <i class="fas fa-question"></i>
                      </a>
                    </div>
                    <textarea
                      name="competences"
                      class="form-control"
                      v-model="newCompetences"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Logros</strong>
                      <a
                        tabindex="0"
                        class="badge badge-info"
                        role="button"
                        data-toggle="popover"
                        data-trigger="focus"
                        title="Logros"
                        data-content="Los logros se conciben como las metas a alcanzar al culminar el curso."
                      >
                        <i class="fas fa-question"></i>
                      </a>
                    </div>
                    <textarea
                      name="achievement"
                      class="form-control"
                      v-model="newAchievement"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Indicadores de Logro</strong>
                      <a
                        tabindex="0"
                        class="badge badge-info"
                        role="button"
                        data-toggle="popover"
                        data-trigger="focus"
                        title="Indicadores de Logro"
                        data-content="Los indicadores deben ser medibles y observables a través de los desempeños y correspondientes con la formulación de cada logro."
                      >
                        <i class="fas fa-question"></i>
                      </a>
                    </div>
                    <textarea name="gold" class="form-control" v-model="newIndicatorA" required></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Mapa tematico</strong>
                      <a
                        tabindex="0"
                        class="badge badge-info"
                        role="button"
                        data-toggle="popover"
                        data-trigger="focus"
                        title="Mapa tematico"
                        data-content="Consiste en una representacion grafica, clara, precisa y sintetica de los temas que componen el modulo de aprendizaje."
                      >
                        <i class="fas fa-question"></i>
                      </a>
                    </div>
                    <input
                      type="file"
                      name="picture2"
                      class="form-control"
                      accept="image/*"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Metodologia general del curso</strong>
                      <a
                        tabindex="0"
                        class="badge badge-info"
                        role="button"
                        data-toggle="popover"
                        data-trigger="focus"
                        title="Metodologia general del curso"
                        data-content="Debe contener la descripcion de la metodologia, las estrategias de aprendizaje, herramientas de interaccion y explicacion de acceso a los mismos y las reglas de convivencia virtual del curso."
                      >
                        <i class="fas fa-question"></i>
                      </a>
                    </div>
                    <textarea
                      name="metodology"
                      class="form-control"
                      v-model="newMethodologyG"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Descripción de las guías de actividades</strong>
                      <a
                        tabindex="0"
                        class="badge badge-info"
                        role="button"
                        data-toggle="popover"
                        data-trigger="focus"
                        title="Descripción de las guías de actividades"
                        data-content="Descripción general de las actividades que se van a desarrollar en las unidades"
                      >
                        <i class="fas fa-question"></i>
                      </a>
                    </div>
                    <textarea name="objects" class="form-control" v-model="newDescription" required></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Descripción de los objetos de evaluativos</strong>
                      <a
                        tabindex="0"
                        class="badge badge-info"
                        role="button"
                        data-toggle="popover"
                        data-trigger="focus"
                        title="Descripción de los objetos de evaluativos"
                        data-content="Descripción general de los objetos evaluativos en las actividades planteadas (vClass, Foro, Screen Casts, Webinars) que se van a desarrollar en las unidades"
                      >
                        <i class="fas fa-question"></i>
                      </a>
                    </div>
                    <textarea
                      name="objects"
                      class="form-control"
                      v-model="newDescriptionO"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="modal-footer">
                    <input
                      type="submit"
                      @click.prevent="createCourses"
                      class="btn btn-primary"
                      value="Guardar"
                    />
                  </div>
                </div>
              </tab-content>
              <tab-content title="Unidad 1">
                <div class="form-group mx-auto col-md-6">
                  <strong>Nombre de la unidad (1)</strong>
                  <input type="text" name="name" class="form-control" v-model="newName1" required />
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>

                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Presentación de la unidad</strong>
                    <a
                      tabindex="0"
                      class="badge badge-info"
                      role="button"
                      data-toggle="popover"
                      data-trigger="focus"
                      title="Presentación de la unidad"
                      data-content=" Se refiere al espacio en el cual se da a conocer el proposito de la unidad; debe ser escrita mediante un texto corto."
                    >
                      <i class="fas fa-question"></i>
                    </a>
                  </div>
                  <textarea name="welcome" class="form-control" v-model="newPresentationU" required></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Conocimientos, habilidades y requisitos para el desarrollo de la unidad</strong>
                    <a
                      tabindex="0"
                      class="badge badge-info"
                      role="button"
                      data-toggle="popover"
                      data-trigger="focus"
                      title="Conocimientos, habilidades y requisitos"
                      data-content="Se presentan los conocimientos previos al aprendizaje que corresponden al desarrollo de la unidad"
                    >
                      <i class="fas fa-question"></i>
                    </a>
                  </div>
                  <textarea name="welcome" class="form-control" v-model="newHability" required></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div align="center">
                  <strong>Competencias (Especificas y transversales)</strong>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <label for="name">Competencias Especificas</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CE 1."
                      v-model="newCompetences_E1"
                      required
                    />
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CE 2."
                      v-model="newCompetences_E2"
                      required
                    />
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CE 3."
                      v-model="newCompetences_E3"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col">
                    <label for="name">Competencias transversales</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CT 1."
                      v-model="newCompetences_T1"
                      required
                    />
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CT 2."
                      v-model="newCompetences_T2"
                      required
                    />
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CT 3."
                      v-model="newCompetences_T3"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Aprenda preguntandose preguntas</strong>
                    <a
                      tabindex="0"
                      class="badge badge-info"
                      role="button"
                      data-toggle="popover"
                      data-trigger="focus"
                      title="Aprenda preguntandose preguntas"
                      data-content="En este espacio se hace una invitacion al estudiante para que este realice preguntas que el desearia que resolviera con el tema o programa a cursar."
                    >
                      <i class="fas fa-question"></i>
                    </a>
                  </div>
                  <textarea name="welcome" class="form-control" v-model="newQuestion" required></textarea>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Aprenda alistándose</strong>
                    <a
                      tabindex="0"
                      class="badge badge-info"
                      role="button"
                      data-toggle="popover"
                      data-trigger="focus"
                      title="Aprenda alistándose"
                      data-content="Redacte un problema, caso, entre otros que le sirvan al estudiante como reflexion y diagnostico de sus competencias actuales y le motivaran en su proceso de formacion."
                    >
                      <i class="fas fa-question"></i>
                    </a>
                  </div>
                  <textarea name="intentioned" class="form-control" v-model="newReady" required></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div align="center">
                  <strong>Aprenda de las fuentes</strong>
                </div>
                <div class="form-group row mx-auto" v-for="(input,k) in inputs" :key="k">
                  <div class="col-md-6">
                    <label for="name">Tema</label>
                    <span>
                      <a
                        href="#"
                        class="badge badge-danger"
                        @click.prevent="remove(k)"
                        v-show="k || ( !k && inputs.length > 1)"
                      >-</a>
                      <a
                        href="#"
                        class="badge badge-primary"
                        @click.prevent="add(k)"
                        v-show="k == inputs.length-1"
                      >+</a>
                    </span>
                    <div>
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="newTopic"
                        placeholder="Nombre del Tema"
                        required
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <label for="name">Contenido</label>
                    <textarea
                      name="competences"
                      class="form-control"
                      v-model="newContent"
                      placeholder="Es la explicacion o sintesis de la tematica a abordar en la unidad de estudio."
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group row" v-for="(input,k) in inputs1" :key="k">
                  <div class="col-md-6">
                    <label for="name">Master class (MC)</label>
                    <span>
                      <a
                        href="#"
                        class="badge badge-danger"
                        @click.prevent="remove1(k)"
                        v-show="k || ( !k && inputs1.length > 1)"
                      >-</a>
                      <a
                        href="#"
                        class="badge badge-primary"
                        @click.prevent="add1(k)"
                        v-show="k == inputs1.length-1"
                      >+</a>
                    </span>
                    <div>
                      <input
                        type="text"
                        name="objetive"
                        class="form-control"
                        v-model="newNameM"
                        placeholder="Nombre de la clase"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="name">Video MC</label>
                    <input
                      type="file"
                      name="picture"
                      class="form-control"
                      accept="image/*"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group row mx-auto">
                  <div class="col-md-6" v-for="(input,k) in inputs2" :key="k">
                    <label for="name">Video de apoyo</label>
                    <span>
                      <a
                        href="#"
                        class="badge badge-danger"
                        @click.prevent="remove2(k)"
                        v-show="k || ( !k && inputs2.length > 1)"
                      >-</a>
                      <a
                        href="#"
                        class="badge badge-primary"
                        @click.prevent="add2(k)"
                        v-show="k == inputs2.length-1"
                      >+</a>
                    </span>
                    <input
                      type="text"
                      name="objetive1"
                      class="form-control"
                      v-model="newNameV"
                      placeholder="Nombre del Video"
                      required
                    />
                    <input
                      type="file"
                      name="picture2"
                      class="form-control"
                      accept="image/*"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col">
                    <label for="name">Bibliografia complementaria</label>
                    <textarea
                      name="competences"
                      class="form-control"
                      v-model="newBibliography"
                      placeholder="Competencias conceptuales, procedimentales y actitudinales"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Aprenda haciendo</strong>
                    <a
                      tabindex="0"
                      class="badge badge-info"
                      role="button"
                      data-toggle="popover"
                      data-trigger="focus"
                      title="Aprenda haciendo"
                      data-content="Aquí se mencionan las actividades de la unidad. NOTA: Es imprescindible en los cursos Especializados, que una actividad de cualquiera de las tres (3) unidades del curso, sea un Ensayo, que esté relacionado con el espacio académico, con una extensión máxima de ocho (8) páginas que incluye la introducción, el desarrollo, las conclusiones y las fuentes bibliográficas con normas APA."
                    >
                      <i class="fas fa-question"></i>
                    </a>
                  </div>
                  <textarea name="doing" class="form-control" v-model="newDoing" required></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Aprenda poniéndose retos</strong>
                    <a
                      tabindex="0"
                      class="badge badge-info"
                      role="button"
                      data-toggle="popover"
                      data-trigger="focus"
                      title="Aprenda poniéndose retos"
                      data-content="Colocar una situación extrema (real o ficticia) en la cual el estudiante proponga soluciones con los conocimientos, habilidades y actitudes adquiridas en el curso."
                    >
                      <i class="fas fa-question"></i>
                    </a>
                  </div>
                  <textarea name="map" class="form-control" v-model="newChallenge" required></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Aprenda proyectándose</strong>
                    <a
                      tabindex="0"
                      class="badge badge-info"
                      role="button"
                      data-toggle="popover"
                      data-trigger="focus"
                      title="Aprenda proyectándose"
                      data-content="Redacte una situación problémica que se presenta en una entidad o comunidad relacionada con el tema tratado,  y bajo el esquema de consultor,  el estudiante deberá proponer las soluciones y mejoras a que haya lugar. "
                    >
                      <i class="fas fa-question"></i>
                    </a>
                  </div>
                  <textarea name="metodology" class="form-control" v-model="newProjecting" required></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="modal-footer">
                  <input
                    type="submit"
                    @click.prevent="createCourseUnit"
                    class="btn btn-primary"
                    value="Guardar"
                  />
                </div>
              </tab-content>
              <tab-content title="Unidad 2">
                <div class="form-group mx-auto col-md-6">
                  <strong>Nombre de la unidad (2)</strong>
                  <input type="text" name="name" class="form-control" v-model="newName1" required />
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Presentación de la unidad</strong>
                    <a
                      tabindex="0"
                      class="badge badge-info"
                      role="button"
                      data-toggle="popover"
                      data-trigger="focus"
                      title="Presentación de la unidad"
                      data-content=" Se refiere al espacio en el cual se da a conocer el proposito de la unidad; debe ser escrita mediante un texto corto."
                    >
                      <i class="fas fa-question"></i>
                    </a>
                  </div>
                  <textarea name="welcome" class="form-control" v-model="newPresentationU" required></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Conocimientos, habilidades y requisitos para el desarrollo de la unidad</strong>
                    <a
                      tabindex="0"
                      class="badge badge-info"
                      role="button"
                      data-toggle="popover"
                      data-trigger="focus"
                      title="Conocimientos, habilidades y requisitos"
                      data-content="Se presentan los conocimientos previos al aprendizaje que corresponden al desarrollo de la unidad"
                    >
                      <i class="fas fa-question"></i>
                    </a>
                  </div>
                  <textarea name="welcome" class="form-control" v-model="newHability" required></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div align="center">
                  <strong>Competencias (Especificas y transversales)</strong>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <label for="name">Competencias Especificas</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CE 1."
                      v-model="newCompetences_E1"
                      required
                    />
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CE 2."
                      v-model="newCompetences_E2"
                      required
                    />
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CE 3."
                      v-model="newCompetences_E3"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col">
                    <label for="name">Competencias transversales</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CT 1."
                      v-model="newCompetences_T1"
                      required
                    />
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CT 2."
                      v-model="newCompetences_T2"
                      required
                    />
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CT 3."
                      v-model="newCompetences_T3"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Aprenda preguntandose preguntas</strong>
                    <a
                      tabindex="0"
                      class="badge badge-info"
                      role="button"
                      data-toggle="popover"
                      data-trigger="focus"
                      title="Aprenda preguntandose preguntas"
                      data-content="En este espacio se hace una invitacion al estudiante para que este realice preguntas que el desearia que resolviera con el tema o programa a cursar."
                    >
                      <i class="fas fa-question"></i>
                    </a>
                  </div>
                  <textarea name="welcome" class="form-control" v-model="newQuestion" required></textarea>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Aprenda alistándose</strong>
                    <a
                      tabindex="0"
                      class="badge badge-info"
                      role="button"
                      data-toggle="popover"
                      data-trigger="focus"
                      title="Aprenda alistándose"
                      data-content="Redacte un problema, caso, entre otros que le sirvan al estudiante como reflexion y diagnostico de sus competencias actuales y le motivaran en su proceso de formacion."
                    >
                      <i class="fas fa-question"></i>
                    </a>
                  </div>
                  <textarea name="intentioned" class="form-control" v-model="newReady" required></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div align="center">
                  <strong>Aprenda de las fuentes</strong>
                </div>
                <div class="form-group row mx-auto" v-for="(input,k) in inputs3" :key="k">
                  <div class="col-md-6">
                    <label for="name">Tema</label>
                    <span>
                      <a
                        href="#"
                        class="badge badge-danger"
                        @click.prevent="remove3(k)"
                        v-show="k || ( !k && inputs3.length > 1)"
                      >-</a>
                      <a
                        href="#"
                        class="badge badge-primary"
                        @click.prevent="add3(k)"
                        v-show="k == inputs3.length-1"
                      >+</a>
                    </span>
                    <div>
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="newTopic"
                        placeholder="Nombre del Tema"
                        required
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <label for="name">Contenido</label>
                    <textarea
                      name="competences"
                      class="form-control"
                      v-model="newContent"
                      placeholder="Es la explicacion o sintesis de la tematica a abordar en la unidad de estudio."
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group row" v-for="(input,k) in inputs4" :key="k">
                  <div class="col-md-6">
                    <label for="name">Master class (MC)</label>
                    <span>
                      <a
                        href="#"
                        class="badge badge-danger"
                        @click.prevent="remove4(k)"
                        v-show="k || ( !k && inputs4.length > 1)"
                      >-</a>
                      <a
                        href="#"
                        class="badge badge-primary"
                        @click.prevent="add4(k)"
                        v-show="k == inputs4.length-1"
                      >+</a>
                    </span>
                    <div>
                      <input
                        type="text"
                        name="objetive"
                        class="form-control"
                        v-model="newNameM"
                        placeholder="Nombre de la clase"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="name">Video MC</label>
                    <input
                      type="file"
                      name="picture"
                      class="form-control"
                      accept="image/*"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group row mx-auto">
                  <div class="col-md-6" v-for="(input,k) in inputs5" :key="k">
                    <label for="name">Video de apoyo</label>
                    <span>
                      <a
                        href="#"
                        class="badge badge-danger"
                        @click.prevent="remove5(k)"
                        v-show="k || ( !k && inputs5.length > 1)"
                      >-</a>
                      <a
                        href="#"
                        class="badge badge-primary"
                        @click.prevent="add5(k)"
                        v-show="k == inputs5.length-1"
                      >+</a>
                    </span>
                    <input
                      type="text"
                      name="objetive1"
                      class="form-control"
                      v-model="newNameV"
                      placeholder="Nombre del Video"
                      required
                    />
                    <input
                      type="file"
                      name="picture2"
                      class="form-control"
                      accept="image/*"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col">
                    <label for="name">Bibliografia complementaria</label>
                    <textarea
                      name="competences"
                      class="form-control"
                      v-model="newBibliography"
                      placeholder="Competencias conceptuales, procedimentales y actitudinales"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Aprenda haciendo</strong>
                    <a
                      tabindex="0"
                      class="badge badge-info"
                      role="button"
                      data-toggle="popover"
                      data-trigger="focus"
                      title="Aprenda haciendo"
                      data-content="Aquí se mencionan las actividades de la unidad. NOTA: Es imprescindible en los cursos Especializados, que una actividad de cualquiera de las tres (3) unidades del curso, sea un Ensayo, que esté relacionado con el espacio académico, con una extensión máxima de ocho (8) páginas que incluye la introducción, el desarrollo, las conclusiones y las fuentes bibliográficas con normas APA."
                    >
                      <i class="fas fa-question"></i>
                    </a>
                  </div>
                  <textarea name="doing" class="form-control" v-model="newDoing" required></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Aprenda poniéndose retos</strong>
                    <a
                      tabindex="0"
                      class="badge badge-info"
                      role="button"
                      data-toggle="popover"
                      data-trigger="focus"
                      title="Aprenda poniéndose retos"
                      data-content="Colocar una situación extrema (real o ficticia) en la cual el estudiante proponga soluciones con los conocimientos, habilidades y actitudes adquiridas en el curso."
                    >
                      <i class="fas fa-question"></i>
                    </a>
                  </div>
                  <textarea name="map" class="form-control" v-model="newChallenge" required></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Aprenda proyectándose</strong>
                    <a
                      tabindex="0"
                      class="badge badge-info"
                      role="button"
                      data-toggle="popover"
                      data-trigger="focus"
                      title="Aprenda proyectándose"
                      data-content="Redacte una situación problémica que se presenta en una entidad o comunidad relacionada con el tema tratado,  y bajo el esquema de consultor,  el estudiante deberá proponer las soluciones y mejoras a que haya lugar. "
                    >
                      <i class="fas fa-question"></i>
                    </a>
                  </div>
                  <textarea name="metodology" class="form-control" v-model="newProjecting" required></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="modal-footer">
                  <input
                    type="submit"
                    @click.prevent="createCourseUnit"
                    class="btn btn-primary"
                    value="Guardar"
                  />
                </div>
              </tab-content>
            </form-wizard>
          </form>
        </div>
      </div>
    </div>
  </div>
</auto-responsive>
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
$(function() {
  // Get the form fields and hidden div
  var checkbox = $("#gridCheck1");
  var hidden = $("#hidden_fields1");

  hidden.hide();

  checkbox.change(function() {
    if (checkbox.is(":checked")) {
      // Show the hidden fields.
      hidden.show();
    } else {
      hidden.hide();
    }
  });
});
import AutoResponsive from "autoresponsive-vue";
import VueFormWizard from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
Vue.use(VueFormWizard);
Vue.use(AutoResponsive);

export default {
  data() {
    return {
      inputs: [
        {
          name: ""
        }
      ],
      inputs1: [
        {
          name: ""
        }
      ],
      inputs2: [
        {
          name: ""
        }
      ],
      inputs3: [
        {
          name: ""
        }
      ],
      inputs4: [
        {
          name: ""
        }
      ],
      inputs5: [
        {
          name: ""
        }
      ],
      inputs6: [
        {
          name: ""
        }
      ],
      inputs7: [
        {
          name: ""
        }
      ],
      inputs8: [
        {
          name: ""
        }
      ],
      inputs9: [
        {
          name: ""
        }
      ],
      inputs10: [
        {
          name: ""
        }
      ],
      inputs11: [
        {
          name: ""
        }
      ],
      inputs12: [
        {
          name: ""
        }
      ],
      inputs13: [
        {
          name: ""
        }
      ],
      inputs14: [
        {
          name: ""
        }
      ],
      inputs15: [
        {
          name: ""
        }
      ],
      inputs16: [
        {
          name: ""
        }
      ],
      inputs17: [
        {
          name: ""
        }
      ],
      inputs18: [
        {
          name: ""
        }
      ],
      inputs19: [
        {
          name: ""
        }
      ],
      inputs20: [
        {
          name: ""
        }
      ],
      categories: [],
      subcategories: [],
      TypeUsers: [],
      classes: [],
      myOptions: ["e-learning", "b-learning"],
      newDescription: "",
      newName: "",
      newId_category: "",
      newId_subcategories: "",
      newMethodologyG: "",
      newType: "",
      newIntensityAC: "",
      newIndicatorA: "",
      newIntensityTA: "",
      newWelcome: "",
      newPresentation: "",
      newIntention: "",
      newCompetences: "",
      newAchievement: "",
      newMap: "",
      newDescriptionO: "",
      metodology: "",
      newState: "",
      newPublish: "",
      fillC: {
        id: "",
        name: "",
        description: "",
        id_user: "",
        id_category: "",
        id_subcategory: "",
        intensityAC: "",
        intensityTA: "",
        methodology: "",
        methodologyG: "",
        welcome: "",
        presentation: "",
        intention: "",
        competences: "",
        achievement: "",
        indicatorA: "",
        map: "",
        type: "",
        descriptionO: "",
        state: "",
        publish: ""
      },
      newName1: "",
      newId_subcategories: "",
      newId_category: "",
      newId_course: "",
      newPresentationU: "",
      newHability: "",
      newCompetences_E1: "",
      newCompetences_E2: "",
      newCompetences_E3: "",
      newCompetences_T1: "",
      newCompetences_T2: "",
      newCompetences_T3: "",
      newResult_1: "",
      newResult_2: "",
      newResult_3: "",
      newResult_4: "",
      newCompeR11: "",
      newCompeR12: "",
      newCompeR13: "",
      newCompeR21: "",
      newCompeR22: "",
      newCompeR23: "",
      newCompeR31: "",
      newCompeR32: "",
      newCompeR33: "",
      newCompeR41: "",
      newCompeR42: "",
      newCompeR43: "",
      newQuestion: "",
      newReady: "",
      newContent: "",
      newMaster: "",
      newVideo: "",
      newBibliography: "",
      newDoing: "",
      newChallenge: "",
      newProjecting: "",
      newTopic: "",
      newNameM: "",
      newNameV: "",
      newUnit: "",
      fillU: {
        id: "",
        unit: "",
        name: "",
        type: "",
        id_course: "",
        presentation: "",
        hability: "",
        competences_e1: "",
        competences_e2: "",
        competences_e3: "",
        competences_t1: "",
        competences_t2: "",
        competences_t3: "",
        result1: "",
        result2: "",
        result3: "",
        result4: "",
        comper11: "",
        comper12: "",
        comper13: "",
        comper21: "",
        comper22: "",
        comper23: "",
        comper31: "",
        comper32: "",
        comper33: "",
        comper41: "",
        comper42: "",
        comper43: "",
        question: "",
        ready: "",
        content: "",
        master: "",
        video: "",
        bibliography: "",
        doing: "",
        challenge: "",
        projecting: "",
        topic: "",
        nameM: "",
        nameV: ""
      },
      errors: []
    };
  },
  mounted() {
    var urlsel = "GetCategories";
    axios.get(urlsel).then(response => {
      this.categories = response.data;
    });
    var urlsel = "GetTypeU";
    axios.get(urlsel).then(response => {
      this.TypeUsers = response.data;
    });
    console.log("Component mounted.");
  },
  methods: {
    getCourses() {
      var urlr = "courses";
      axios.get(urlr).then(response => {
        this.course = response.data;
      });
    },
    add(index) {
      this.inputs.push({ name: "" });
    },
    remove(index) {
      this.inputs.splice(index, 1);
    },
    add1(index) {
      this.inputs1.push({ name: "" });
    },
    remove1(index) {
      this.inputs1.splice(index, 1);
    },
    add2(index) {
      this.inputs2.push({ name: "" });
    },
    remove2(index) {
      this.inputs2.splice(index, 1);
    },
    add3(index) {
      this.inputs3.push({ name: "" });
    },
    remove3(index) {
      this.inputs3.splice(index, 1);
    },
    add4(index) {
      this.inputs4.push({ name: "" });
    },
    remove4(index) {
      this.inputs4.splice(index, 1);
    },
    add5(index) {
      this.inputs5.push({ name: "" });
    },
    remove5(index) {
      this.inputs5.splice(index, 1);
    },
    add6(index) {
      this.inputs6.push({ name: "" });
    },
    remove6(index) {
      this.inputs6.splice(index, 1);
    },
    add7(index) {
      this.inputs7.push({ name: "" });
    },
    remove7(index) {
      this.inputs7.splice(index, 1);
    },
    add8(index) {
      this.inputs8.push({ name: "" });
    },
    remove8(index) {
      this.inputs8.splice(index, 1);
    },
    add9(index) {
      this.inputs9.push({ name: "" });
    },
    remove9(index) {
      this.inputs9.splice(index, 1);
    },
    add10(index) {
      this.inputs10.push({ name: "" });
    },
    remove10(index) {
      this.inputs10.splice(index, 1);
    },
    add11(index) {
      this.inputs11.push({ name: "" });
    },
    remove11(index) {
      this.inputs11.splice(index, 1);
    },
    add12(index) {
      this.inputs12.push({ name: "" });
    },
    remove12(index) {
      this.inputs12.splice(index, 1);
    },
    add13(index) {
      this.inputs13.push({ name: "" });
    },
    remove13(index) {
      this.inputs13.splice(index, 1);
    },
    add14(index) {
      this.inputs14.push({ name: "" });
    },
    remove14(index) {
      this.inputs14.splice(index, 1);
    },
    remove15(index) {
      this.inputs15.splice(index, 1);
    },
    add15(index) {
      this.inputs15.push({ name: "" });
    },
    remove16(index) {
      this.inputs16.splice(index, 1);
    },
    add16(index) {
      this.inputs16.push({ name: "" });
    },
    remove17(index) {
      this.inputs17.splice(index, 1);
    },
    add17(index) {
      this.inputs17.push({ name: "" });
    },
    remove18(index) {
      this.inputs18.splice(index, 1);
    },
    add18(index) {
      this.inputs18.push({ name: "" });
    },
    remove19(index) {
      this.inputs19.splice(index, 1);
    },
    add19(index) {
      this.inputs19.push({ name: "" });
    },
    remove20(index) {
      this.inputs20.splice(index, 1);
    },
    add20(index) {
      this.inputs20.push({ name: "" });
    },
    deleteClasses(clas) {
      var url = "classes/" + clas.id;
      axios.delete(url).then(response => {
        // eliminar
        this.getClasses(); //lista
        toastr.success("Successfully removed"); //mensaje
      });
    },
    createCourses() {
      var url = "courses";
      this.newId_user = 36;
      this.newType = "free";
      this.newState = "up";
      this.newPublish = "not publish";
      axios
        .post(url, {
          id_user: this.newId_user,
          description: this.newDescription,
          name: this.newName,
          id_category: this.Category,
          id_subcategory: this.newId_subcategories,
          intensityAC: this.newIntensityAC,
          methodology: this.metodology,
          welcome: this.newWelcome,
          presentation: this.newPresentation,
          intention: this.newIntention,
          competences: this.newCompetences,
          achievement: this.newAchievement,
          indicatorA: this.newIndicatorA,
          map: this.newMap,
          methodologyG: this.newMethodologyG,
          type: this.newType,
          descriptionO: this.newDescriptionO,
          intensityTA: this.newIntensityTA,
          state: this.newState,
          publish: this.newPublish
        })
        .then(response => {
          this.getCourses();
          /*this.newDescription = "";
          this.newId_user = "";
          this.newName = "";
          this.newId_subcategories = "";
          this.newIntensityAC = "";
          this.newIntensityTA = "";
          this.newMethodologyG = "";
          this.newType = "";
          this.newWelcome = "";
          this.newPresentation = "";
          this.newIndicatorA = "";
          this.newMap = "";
          this.newCompetences = "";
          this.newIntention = "";
          this.newDescriptionO = "";*/
          this.errors = [];

          toastr.success("Nuevo curso creado exitosamente");
        })
        .catch(error => {
          this.errors = error.response.data;
        });
    },
    createCourseUnit() {
      var url = "course_unit";
      this.newId_course = 36;
      this.newType = "free";
      this.newUnit = "1";
      axios
        .post(url, {
          id_course: this.newId_course,
          name: this.newName1,
          presentation: this.newPresentationU,
          hability: this.newHability,
          competences_e1: this.newCompetences_E1,
          competences_e2: this.newCompetences_E2,
          competences_e3: this.newCompetences_E3,
          competences_t1: this.newCompetences_T1,
          competences_t2: this.newCompetences_T2,
          competences_t3: this.newCompetences_T3,
          result1: this.newResult_1,
          result2: this.newResult_2,
          result3: this.newResult_3,
          result4: this.newResult_4,
          comper11: this.newCompeR11,
          comper12: this.newCompeR12,
          comper13: this.newCompeR13,
          comper21: this.newCompeR21,
          comper22: this.newCompeR22,
          comper23: this.newCompeR23,
          comper31: this.newCompeR31,
          comper32: this.newCompeR31,
          comper33: this.newCompeR33,
          comper41: this.newCompeR41,
          comper42: this.newCompeR42,
          comper43: this.newCompeR43,
          question: this.newQuestion,
          content: this.newContent,
          master: this.newMaster,
          video: this.newVideo,
          nameM: this.newNameM,
          nameV: this.newNameV,
          bibliography: this.newBibliography,
          doing: this.newDoing,
          challenge: this.newChallenge,
          projecting: this.newProjecting,
          topic: this.newTopic,
          unit: this.newUnit,
          ready: this.newReady,
          type: this.newType
        })
        .then(response => {
          this.getCourses();
          this.newName1 = "";
          this.newPresentationU = "";
          this.newHability = "";
          this.newCompetences_E1 = "";
          this.newCompetences_E2 = "";
          this.newCompetences_E3 = "";
          this.newCompetences_T1 = "";
          this.newCompetences_T2 = "";
          this.newCompetences_T3 = "";
          this.newResult_1 = "";
          this.newResult_2 = "";
          this.newResult_3 = "";
          this.newResult_4 = "";
          this.newCompeR11 = "";
          this.newCompeR12 = "";
          this.newCompeR13 = "";
          this.newCompeR21 = "";
          this.newCompeR22 = "";
          this.newCompeR23 = "";
          this.newCompeR31 = "";
          this.newCompeR31 = "";
          this.newCompeR33 = "";
          this.newCompeR41 = "";
          this.newCompeR42 = "";
          this.newCompeR43 = "";
          this.newQuestion = "";
          this.newContent = "";
          this.newMaster = "";
          this.newVideo = "";
          this.newNameM = "";
          this.newNameV = "";
          this.newBibliography = "";
          this.newDoing = "";
          this.newChallenge = "";
          this.newProjecting = "";
          this.newTopic = "";
          this.newUnit = "";
          this.newType = "";
          this.newReady = "";
          /*this.newDescription = "";
          this.newId_user = "";
          this.newName = "";
          this.newId_subcategories = "";
          this.newIntensityAC = "";
          this.newIntensityTA = "";
          this.newMethodologyG = "";
          this.newType = "";
          this.newWelcome = "";
          this.newPresentation = "";
          this.newIndicatorA = "";
          this.newMap = "";
          this.newCompetences = "";
          this.newIntention = "";
          this.newDescriptionO = "";*/
          this.errors = [];

          toastr.success("Nueva unidad guardada exitosamente");
        })
        .catch(error => {
          this.errors = error.response.data;
        });
    },
    getSubcategories() {
      var urlse = "GetSubcategories/" + this.Category;
      axios.get(urlse).then(response => {
        this.subcategories = response.data;
      });
    }
  }
};
</script>
<style>
</style>