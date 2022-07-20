<template>
  <div id="app">
    <div class="">
      <div class="row">
        <div class="left">
          <ul>
            <a href="/estudiante/calendario">
              <li class="item-menu">
                <!-- <img
                        width="35px"
                        src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/HORARIO_narnja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                        alt
                /> -->
                <span class="menu">Calendario</span>
              </li>
            </a>
            <div class="dropdown">
              <a>
                <li class="item-menu">
                  <!-- <img
                    width="35px"
                    src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ANUNCIOS_naranja.png?alt=media&token=539c1428-c480-43bf-a132-73be35386940"
                    alt
                  /> -->
                  <span
                    class="menu"
                  >Comunicaciones&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <div class="dropdown-content">
                    <a href="/mensajes">
                      <!-- <img
                        width="35px"
                        src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MENSAJES_naranja.png?alt=media&token=f76f98f1-1c57-469b-a839-d98e64651818"
                        alt
                      /> -->
                      Mensajes
                    </a>

                    <!-- <a href="/horario">
                                            <img
                                                width="35px"
                                                src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/HORARIO_narnja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                                                alt
                                            />
                                            Mi horario
                    </a>-->
                    <a href="/questions">
                      <!-- <img
                        width="35px"
                        src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/FOROS_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                        alt
                      /> -->
                      Foro
                    </a>
                    <a href="/chat">
                      <!-- <img
                        width="35px"
                        src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/FOROS_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                        alt
                      /> -->
                      Chat
                    </a>
                  </div>
                </li>
              </a>
            </div>
            <div class="dropdown2">
              <a href="/materiasEst">
                <li class="item-menu">
                  <!-- <img
                    width="35px"
                    src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MIS-CURSOS.png?alt=media&token=47515df0-5b95-48b4-bb08-10257108169b"
                    alt
                  /> -->
                  <span
                    class="menu"
                  >Mis clases&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <!-- <div class="dropdown2-content"> -->
                    <!-- <a href="/estudiante/clases">
                      <img
                        width="35px"
                        src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/TAREAS_naranja.png?alt=media&token=0ffb3c21-349a-4615-b57c-50dac3db8285"
                        alt
                      />
                      Mis materias
                    </a> -->
                    <!-- <a href="/Actividad">
                      <img
                        width="35px"
                        src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ACTIVIDADES_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                        alt
                      />
                      Mis actividades
                    </a> -->
                    <!-- <a href="/juegos">
                      <img
                        width="35px"
                        src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MIS-CURSOS.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                        alt
                      />
                      Juegos
                    </a>-->
                    <!-- <a href="/repository/student">
                      <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/NOTAS_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad" alt/>
                      Entregas
                    </a> -->
                    <!-- <a href="/board">
                      <img
                        width="35px"
                        src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/NOTAS_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                        alt
                      />
                      Pizarra
                    </a> -->
                    <!-- <a href="/notas_d">
                                            <img
                                                width="35px"
                                                src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/NOTAS_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                                                alt
                                            />
                                            Notas
                                        </a>
                                        <a href="/boletin">
                                            <img
                                                width="35px"
                                                src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/BOLETIN_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                                                alt
                                            />
                                            Boletín de notas
                    </a>-->
                  <!-- </div> -->
                </li>
              </a>
            </div>
            <div class="dropdown">
              <a>
                <li class="item-menu">                
                  <span
                    class="menu"
                  >Clases Extracurriculares&nbsp;&nbsp;&nbsp;</span>
                  <div class="dropdown-content">
                    <a href="/extra_ea">                      
                      Educación Artistica
                    </a>

                    <a href="/extra_ef">                
                      Educación Física
                    </a>                    
                  </div>
                </li>
              </a>
            </div>
            <a v-if="validation === true" :href="`/api/student/${user.id}/calification-report`" target="_blank">
              <li class="item-menu" style="margin-top: 9%;">
                <!-- <img
                        width="35px"
                        src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/HORARIO_narnja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                        alt
                /> -->
                <span class="menu">Boletín</span>
              </li>
            </a>
            
            <!-- <div class="dropdown2">
              <a>
                <li class="item-menu">
                  <img
                    width="35px"
                    src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/TAREAS_naranja.png?alt=media&token=0ffb3c21-349a-4615-b57c-50dac3db8285"
                    alt
                  />
                  <span class="menu">Mis Electivas</span>
                  <div class="dropdown2-content">
                    <a href="/student/lectives/courses">
                      <img
                        width="35px"
                        src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ACTIVIDADES_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                        alt
                      />Mis clases
                    </a>
                   <a href="/student/lectives/activities">
                      <img
                        width="35px"
                        src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ACTIVIDADES_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                        alt
                      />Mis actividades
                    </a>
                    <a href="/board">
                      <img
                        width="35px"
                        src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/NOTAS_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                        alt
                      />Pizarra
                    </a>
                  </div>
                </li>
              </a>
            </div> -->
            <!-- <a href="/mensajes">
              <li class="item-menu">
                <img
                        width="35px"
                        src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/sicologia_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                        alt
                      />
                       <span class="menu"> Psicología</span>

              </li>
            </a> -->
            <!-- <a href="/manual">
              <li class="item-menu">
                <img
                  width="35px"
                  src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MANUAL-DE-USUARIO_naranja.png?alt=media&token=bd2488fb-e121-432d-afd2-f223fcc0f29e"
                  alt
                />
                <span class="menu">Manual de usuario</span>
              </li>
            </a> -->                        
            <a href="/inscripcion-documentos">
              <li class="item-menu" style="margin-top: 9%;">
                <p style="margin-top:-9px; margin-bottom:-29px; margin-left: 0.5rem;">                  
                  Cargue de
                  <br>
                </p>
                <p style=" margin-left: 0.5rem;">
                  Documentos                
                </p>
              </li>
            </a>
            <a href="/contrato-educativo">
              <li class="item-menu" style="margin-top: 9%;">
                <p style="margin-top:-9px; margin-bottom:-29px; margin-left: 0.5rem;">                  
                  Contrato
                  <br>
                </p>
                <p style=" margin-left: 0.5rem;">
                  Estudiantil                
                </p>
              </li>
            </a>            
          </ul>
          <div class="text-center">
            <a href="#" @click.prevent="logout" class="btn btn-warning">X Salir</a>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      validation:false,
      user: {}
    }
  },
  mounted(){
    axios.get('getDataUser').then(async (response)=>{   
      this.user = response.data;   
      axios.get(`paymentRegistration/${response.data.id}`).then((response)=>{
          let payment = response.data;          
          payment.forEach(element => {
              if(element.status === 1){
                this.validation = true;
              }else{
                this.validation = false;
              }
          });
      })
    });        
  },
  methods: {    
    logout: function () {
      axios
        .post("logout")
        .then((response) => {
          if (response.status === 302 || 401) {
            window.location.href = "/login";
          } else {
            // throw error and go to catch block
          }
        })
        .catch((error) => {});
    },
  },
};
</script>

<style>
.left {
  width: 225px;
  height: auto;
  background: #f5f5f5;
  white-space: nowrap;
  transition: width 0.5s;
  position: absolute;
  z-index: 1;
}
.left ul {
  padding: 0;
  list-style-type: none;
  text-align: left;
}
.mg-btn {
  margin: 10px;
  min-width: 165px;
}
.left li {
  width: auto;
  height: 60px;
  line-height: 50px;
  padding-left: 18px;
}
.left li:hover {
  background: #09708C;
  color: white;
}

.left .item-menu {
  height: 50px;
  overflow: hidden;
  color: white;
}
.left a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
span.menu {
  padding-left: 17px;
}
.t_search {
  color: rgb(200, 200, 200);
  height: 35px;
  margin-left: 15px;
  width: 190px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f5f5f5;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.left li {
  background: #09708C;
  margin: 8px;
  border-radius: 5px;
}
.left #electivas {
  margin: 8px;
}

.dropdown-content a:hover {
  background: #09708C;
  color: white;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown2 {
  position: relative;
}

.dropdown2-content {
  display: none;
  position: absolute;
  background-color: #f5f5f5;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown2-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown2-content a:hover {
  background: #09708C;
  color: white;
}

.dropdown2:hover .dropdown2-content {
  display: block;
}
</style>
