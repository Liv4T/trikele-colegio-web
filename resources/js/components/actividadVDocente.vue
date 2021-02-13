<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">Mis actividades</h3>
          <div class="card-body">
            <table class="table table-responsive-xl table-hover table-striped center">
              <tbody v-for="(area,t) in areas" :key="t">
                <tr
                  data-toggle="collapse"
                  :data-target="'#accordion'+t"
                  class="clickable"
                  @click="semanas(area.id, area.id_classroom)"
                >
                  <td>{{ area.text}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <div :id="'accordion'+t" class="collapse">
                      <table class="table table-responsive table-hover table-striped center">
                        <thead>
                          <tr>
                            <th>Nombre de la materia</th>
                            <th>Tipo de Actividad</th>
                            <th>Fecha de entrega límite</th>
                            <th>Fecha de retroalimentación</th>
                            <th>Estado</th>
                            <th colspan="1">&nbsp;</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(actividad, k) in activities" :key="k">
                            <td>{{actividad.activity_name }}</td>
                            <td>{{ actividad.activity_type }}</td>
                            <td>{{actividad.deliver_date}}</td>
                            <td>{{actividad.feedback_date}}</td>
                            <td>{{actividad.activity_state==2?'PÚBLICADA':'BORRADOR'}}</td>
                            <td width="10px">
                              <a
                                class="btn btn-warning btn-sm"
                                v-on:click.prevent="editNames(actividad.id)"
                              >
                                <i class="fa fa-eye"></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="modal fade" id="editu">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="card">
              <h3 class="card-header fondo text-center">
                Actividad
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </h3>
              <div class="card-body">
                <div class="accordion" id="accordionExample">
                  <div class="card">
                    <div class="card-header" id="headingOne">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >Descripción de la actividad</button>
                      </h2>
                    </div>
                    <div
                      id="collapseOne"
                      class="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">{{descripcion}}</div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingTwo">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >Logro</button>
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      class="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">{{ logro }}</div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingThree">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >Fecha de entrega</button>
                      </h2>
                    </div>
                    <div
                      id="collapseThree"
                      class="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">{{ fechaE }}</div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingFour">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >Fecha retroalimentación</button>
                      </h2>
                    </div>
                    <div
                      id="collapseFour"
                      class="collapse"
                      aria-labelledby="headingFour"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">{{ fechaR }}</div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingFive">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >Formulario</button>
                      </h2>
                    </div>
                    <div
                      id="collapseFive"
                      class="collapse"
                      aria-labelledby="headingFive"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                          <template v-if="activity.activity_type=='complete_sentence'">
                            <div v-for="(question, k) in formulario" :key="k">
                                <div class="form-group row mx-auto">
                                    <label for="name">Pregunta {{ k+1 }}</label>
                                    <input
                                    type="text"
                                    name="objetive1"
                                    class="form-control"
                                    v-model="question.questions"
                                    disabled
                                    />
                                </div>
                                <div
                                    class="form-group row"
                                    v-for="(res, t) in question.responses"
                                    :key="t"
                                >
                                    <div class="col" v-if="res.correct==true">
                                    <label>Respuesta Correcta</label>
                                    <input
                                        type="text"
                                        name="objetive1"
                                        class="form-control"
                                        v-model="res.answer"
                                        disabled
                                    />
                                    </div>
                                    <div class="col" v-else>
                                    <label for>Opción {{ t+1 }}</label>
                                    <input
                                        type="text"
                                        name="objetive1"
                                        class="form-control"
                                        v-model="res.answer"
                                        disabled
                                    />
                                    </div>
                                </div>
                            </div>
                          </template>
                        <activity-teacher-complete-sentence  :previewMode="true"  v-bind:data="activity.content" v-if="activity.activity_type == 'complete_sentence'"></activity-teacher-complete-sentence>
                        <activity-teacher-open-question :previewMode="true"    v-bind:data="activity.content"  v-if="activity.activity_type == 'questionary_open_questions'"></activity-teacher-open-question>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
      activities: [],
      activity: [],
      formulario: [],
      descripcion: "",
      logro: "",
      fechaE: "",
      fechaR: "",
      id_act: "",
      id_t: "",
      areas: [],
      errors: [],
    };
  },
  created() {},
  mounted() {
    var url = "GetArearByUser";
    axios.get(url).then((response) => {
      this.areas = response.data;
    });

    console.log("Component mounted.");
  },
  methods: {
    semanas(id, classroom) {
      var urlr = "getActivity/" + id + "/" + classroom;
      axios.get(urlr).then((response) => {
        this.activities = response.data;
      });
    },
    editNames(actividad) {
      var urlr = "getActivityById/" + actividad;
      axios.get(urlr).then((response) => {
        this.activity = response.data;

        this.id_act = this.activity.id;
        this.descripcion = this.activity.activity_desc;
        this.logro = this.activity.achievement_data.achievement;
        this.fechaE = this.activity.deliver_date;
        this.fechaR = this.activity.feedback_date;
      });
      var urls = "showTrivia/" + actividad;
      axios.get(urls).then((response) => {
        this.formulario = response.data;
        console.log(this.formulario);
      });

      $("#editu").modal("show");
    },
  },
};
</script>
<style>
.background2 {
  background: url(../assets/img/Fondo5.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
}
</style>
