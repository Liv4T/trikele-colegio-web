<template>
  <div class="back row justify-content-center">
    <div class="col-sm-10">
      <div class="card text-center">
        <div class="card-header fondo">
          <h4>Calendario</h4>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-6 justify-content">
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn" v-bind:class="{ 'btn-primary': (initialView=='dayGridMonth')  }" @click="changeCalendarView('dayGridMonth')">Mensual</button>
                        <button type="button" class="btn" v-bind:class="{  'btn-primary': (initialView=='timeGridWeek') }" @click="changeCalendarView('timeGridWeek')">Semanal</button>
                    </div>
                </div>
                <div class="col-6">
                    <div class="justify-content">
                         <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="display_activities" @change="displayActivitiesChange()" id="defaultCheck1">
                            <label class="form-check-label" for="defaultCheck1">
                                <span class="dot dot_blue"></span> Actividades
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="display_events" @change="displayEventsChange()" id="defaultCheck2">
                            <label class="form-check-label" for="defaultCheck2">
                                <span class="dot dot_red"></span> Clases presenciales
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <FullCalendar ref="fullCalendar"  :options="calendarOptions" />
                </div>
            </div>
          <div class="row" v-show="type_u==2">
            <a class="btn btn-warning float-right" v-on:click.prevent="createE()">Crear evento</a>
          </div>
          <br />
          <div class="row">
            <div class="col-md-11">
              <div class="row justify-content-center">
                <h4>Clases presenciales</h4>
              </div>
              <div class="row" v-for="(clas, k) in filterPendingEvents(clases)" v-bind:key="k">
                        <div class="col-12">
                            <div class="card">
                                <div class="class-event">
                                    <div class="class-event-info">{{!clas.classroom?'Lectiva ':''}} {{clas.area}} {{clas.classroom?clas.classroom:''}}: {{clas.name}} </div>
                                    <div class="class-event-date">
                                        <div>
                                            <small>Desde:</small>
                                            <span>{{clas.dateFrom|formatDate}}</span>
                                        </div>
                                        <div>
                                            <small>Hasta:</small>
                                            <span>{{clas.dateTo|formatDate}}</span>
                                        </div>
                                    </div>
                                    <div class="class-event-action">
                                        <a class="btn btn-primary" html:type="_blank" :href="clas.hangout">Ir a clase</a>
                                    </div>
                                </div>
                                <div class="class-event-footer ">
                                    <div class="class-event-action">
                                        <button class="btn btn-primary"  v-show="type_u==2" v-on:click.prevent="editE(clas.id)">Editar</button>
                                        <button class="btn btn-danger"  v-show="type_u==2" v-on:click.prevent="viewDelete(clas.id,clas.name)">Eliminar</button>
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
    <div class="modal fade" id="createE">
      <div class="modal-lg modal-dialog">
        <div class="modal-content">
          <form class="needs-validation" v-on:submit.prevent="createEvent" novalidate>
            <div class="modal-header">
              <h4>Crear evento</h4>
              <button type="button" class="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group row justify-content-center">
                <div class="col-md-6">
                  <label for="name">Nombre del evento</label>
                  <input type="text" name="name" class="form-control" v-model="nameEvent" />
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <!-- <div class="col-md-6">
                  <label for="name">Materia</label>
                  <select class="form-control" v-model="materia" required>
                    <option :value="option.id+'/'+option.id_classroom " v-for="option in myOptions">
                      {{
                      option.text
                      }}
                    </option>
                  </select>
                </div> -->
                <div class="col-md-6">
                  <label for="name">Materia</label>
                  <multiselect v-model="materia" :options="myOptions" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Seleccione una o varias" label="text" track-by="id" :preselect-first="true">
                    <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} opciones selecionadas</span></template>
                  </multiselect>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-6">
                  <label for="name">Desde</label>
                  <datetime format="YYYY-MM-DD H:i:s" v-model="desde"></datetime>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="col-md-6">
                  <label for="name">Hasta</label>
                  <datetime format="YYYY-MM-DD H:i:s" v-model="hasta"></datetime>
                  <div class="invalid-feedback"></div>
                </div>
                <div class="col-md-6">
                  <strong for="name">Enlace de Meet</strong>
                  <input type="text" name="name" class="form-control" v-model="nameMeet" />
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
              </div>
              <div class="modal-footer">
                <input type="submit" class="btn btn-warning" value="Guardar" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="modal fade" id="editE">
      <div class="modal-lg modal-dialog">
        <div class="modal-content">
          <form class="needs-validation" v-on:submit.prevent="updateEvent" novalidate>
            <div class="modal-header">
              <h4>Editar evento</h4>
              <button type="button" class="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group row justify-content-center">
                <div class="col-md-6">
                  <label for="name">Nombre del evento</label>
                  <input type="text" name="name" class="form-control" v-model="nameUp" />
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="col-md-6">
                  <label for="name">Materia</label>
                  <select class="form-control" v-model="areaUp" required>
                    <option :value="option.id+'/'+option.id_classroom " v-for="(option,k_option) in myOptions" v-bind:key="k_option">
                      {{
                      option.text
                      }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-6">
                  <label for="name">Desde</label>
                  <datetime format="YYYY-MM-DD H:i:s" v-model="fromUp"></datetime>
                  <div class="invalid-feedback">Por favor ingresa la fecha</div>
                </div>
                <div class="col-md-6">
                  <label for="name">Hasta</label>
                  <datetime format="YYYY-MM-DD H:i:s" v-model="toUp"></datetime>
                  <div class="invalid-feedback"></div>
                </div>
                <div class="col-md-6">
                  <strong for="name">Enlace de Meet</strong>
                  <input type="text" name="name" class="form-control" v-model="meetUp" />
                  <div class="invalid-feedback">Por favor ingrwsa la fecha</div>
                </div>
              </div>
              <div class="modal-footer">
                <input type="submit" class="btn btn-warning" value="Guardar" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="modal fade" id="deleteE">
      <div class="modal-sm modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group row text-center">
              <label for="name">Esta seguro que desea eliminar {{ delName }} ?</label>
            </div>
            <div class="modal-footer">
              <a class="btn btn-danger float-right" href v-on:click.prevent="deleteEvent(delId)">Si</a>
              <a class="btn btn-warning" href v-on:click.prevent="deletE()">Cancelar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import FullCalendar from '@fullcalendar/vue'
import esLocale from '@fullcalendar/core/locales/es';
import dayGridPlugin from '@fullcalendar/daygrid'
import momentPlugin from '@fullcalendar/moment'
import timeGridPlugin from '@fullcalendar/timegrid';
import momentTimezonePlugin from '@fullcalendar/moment-timezone'
import interactionPlugin from '@fullcalendar/interaction'
import moment from 'moment'

moment.tz.setDefault("America/Bogota");
moment.locale('es');

import datetime from "vuejs-datetimepicker";
import Multiselect from "vue-multiselect";
Vue.use(require("vue-moment"));
Vue.component("multiselect", Multiselect);
export default {
  props: ["type_u"],
  data() {
    return {
      display_events:true,
      display_activities:true,
      desde: "",
      hasta: "",
      nameEvent: "",
      nameMeet: "",
      clases: [],
      value:[],
      myOptions:[],
      materia: [],
      meetUp: "",
      nameUp: "",
      fromUp: "",
      toUp: "",
      areaUp: "",
      evenUp: [],
      delId: "",
      delName: "",
      idUp: "",
      lective_planification:{},
      initialView:'dayGridMonth',
      calendarOptions: {
        locale: esLocale,
        plugins: [ dayGridPlugin, interactionPlugin,timeGridPlugin,momentTimezonePlugin,momentPlugin ],
        initialView: 'dayGridMonth',//timeGridWeek
        themeSystem:'bootstrap',
        dateClick: this.handleDateClick,
        timeZone: 'America/Bogota',
        titleFormat: 'D MMMM YYYY',
        events: [],
        eventClick:this.handleEventClick,
        eventDidMount:this.handleEventDidMount
      }
    };
  },
  components: {
    datetime,
    FullCalendar,
    Multiselect
  },
  filters:{
      formatDate:(value)=>{
        if (value) {
            return moment(String(value)).format('DD MMMM YYYY hh:mm a')
        }
      }
  },
  mounted() {
    const fullCalendarApi=this.$refs.fullCalendar.getApi();

    var urlM = window.location.origin + "/getAllEvents";
    axios.get(urlM).then((response) => {
      this.clases = response.data;
      if(this.clases && this.clases.length>0)
        {

            this.clases.forEach(meeting=>{
               fullCalendarApi.addEvent({ title: `${meeting.area} ${meeting.classroom} | Clase ${meeting.name}`, start: meeting.dateFrom,end:meeting.dateTo,description: meeting.name,url:meeting.hangout ,backgroundColor:'red'});
            })

        }
    });
    var url = window.location.origin + "/GetArearByUser";
    axios.get(url).then((response) => {
      this.myOptions = response.data;


        axios.get("/api/lectives").then((response) => {
          this.lective_planification= response.data;


          response.data.forEach(e=>{
              this.myOptions.push({
                  is_lective:true,
                  id:e.lective.id,
                  id_classroom:0,
                  id_planification:e.id_planification,
                  text:`Electiva ${e.lective.name} Trimestre ${e.period_consecutive}`
              });
          });

        });

    });





  },
  methods: {
      filterPendingEvents:(events)=>{
          return events.filter(e=>moment(e.dateTo)>=moment());
      },
      displayActivitiesChange(){
        const fullCalendarApi=this.$refs.fullCalendar.getApi();

          if(this.display_activities)
          {
              /*
               this.clases.forEach(meeting=>{
                fullCalendarApi.addEvent({ title: `${meeting.area} ${meeting.classroom} | Clase ${meeting.name}`, start: meeting.dateFrom,end:meeting.dateTo,description: meeting.name,url:meeting.hangout ,backgroundColor:'red'});
               })*/
          }
          else{
            const currentEvents=  fullCalendarApi.getEvents();
            currentEvents.forEach(event=>{
                if(event.backgroundColor=='blue')
                {
                    event.remove();
                }
            });
          }
      },
      displayEventsChange(){
           const fullCalendarApi=this.$refs.fullCalendar.getApi();

          if(this.display_events)
          {
               this.clases.forEach(meeting=>{
                fullCalendarApi.addEvent({ title: `${meeting.area} ${meeting.classroom} | Clase ${meeting.name}`, start: meeting.dateFrom,end:meeting.dateTo,description: meeting.name,url:meeting.hangout ,backgroundColor:'red'});
               })
          }
          else{
            const currentEvents=  fullCalendarApi.getEvents();
            currentEvents.forEach(event=>{
                if(event.backgroundColor=='red')
                {
                    event.remove();
                }
            });
          }
      },
      handleDateClick(arg){
      //alert('date click! ' + arg.dateStr)
    },
    handleEventClick(info){

        info.jsEvent.preventDefault();

        if (info.event.url) {
            window.open(info.event.url);
        }
    },
    handleEventDidMount(info){
         console.log('PREV');
        /* var tooltip = new Tooltip(info.el, {
            title: info.event.extendedProps.description,
            placement: 'top',
            trigger: 'hover',
            container: 'body'
        });*/

    },
    changeCalendarView(view){
        this.initialView=view;
        this.calendarOptions.initialView=view;
        this.$refs.fullCalendar.getApi().changeView(view);
    },
    getMenu() {
      window.location = "/calendar";
    },
    createE() {
      $("#createE").modal("show");
    },
    editE(id) {
      this.evenUp = [];
      var urlM = window.location.origin + "/editEvent/" + id;
      axios.get(urlM).then((response) => {
        this.evenUp = response.data;
        this.nameUp = this.evenUp.name;
        this.areaUp = this.evenUp.id_area + "/" + this.evenUp.id_classroom;
        this.fromUp = this.evenUp.date_from;
        this.toUp = this.evenUp.date_to;
        this.meetUp = this.evenUp.url;
        this.idUp = id;
      });
      $("#editE").modal("show");
    },
    deletE() {
      $("#deleteE").modal("hide");
    },
    deleteEvent(id) {
      var url = "deleteEvent/" + id;
      axios.get(url).then((response) => {
        toastr.success("Eliminado exitosamente"); //mensaje
        // eliminamos
        this.getMenu(); //listamos

      });
    },
    viewDelete(id, name) {
      this.delName = name;
      this.delId = id;
      $("#deleteE").modal("show");
    },
    createEvent() {
      var url = "createEvent";
      if (this.materia.length >= 1) {
        console.log(this.materia);
        for (let i = 0; i < this.materia.length; i++) {

          axios
            .post(url, {
              //Cursos generales
              name: this.nameEvent,
              startDateTime: this.desde,
              endDateTime: this.hasta,
              id_area: this.materia[i].id,
              id_classroom: this.materia[i].id_classroom,
              url: this.nameMeet,
            })
            .then((response) => {
              toastr.success("Nuevo evento creado exitosamente");
              this.getMenu();

            })
            .catch((error) => {});

        }
      }
    },
    updateEvent() {
      var url = "updateEvent";

      axios
        .put(url, {
          //Cursos generales
          id: this.idUp,
          name: this.nameUp,
          startDateTime: this.fromUp,
          endDateTime: this.toUp,
          id_area: this.areaUp,
          url: this.meetUp,
        })
        .then((response) => {
          this.getMenu();
          toastr.success("Evento actualizado exitosamente");
        })
        .catch((error) => {});
    },
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.back-calendar {
  padding-left: 290px;
}
.class-event{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px;
}
.class-event-info{
    font-size: 1.2em;
    font-weight: 600;
    max-width: 280px;
    text-align: left;
}

.class-event-date{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
.class-event-date>div{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
}
.class-event-date>div>small{
    font-size:0.8em;
}
.class-event-date>div>span{
    font-size:1em;

}
.class-event-footer{
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
}
.class-event-action{
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 10px;
}
.class-event-action button{
    margin-right: 5px;
}
.justify-content{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
}
.dot {
  height: 8px;
  width: 8px;
  border-radius: 50%;
  display: inline-block;
}
.dot_blue{
    background-color: #3788d8;
}
.dot_red{
    background-color: #d8374d;
}
</style>
