<template>
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="left">
                    <ul>
                        <div class="dropdown">
                            <a>
                                <li class="item-menu">
                                    <span class="menu letra-boldfont">COMUNICACIONES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <div class="dropdown-content">
                                        <a href="/mensajes"> Mensajes</a>

                                        <a href="/questions"> Foro </a>
                                        <a href="/chat"> Chat </a>
                                        <a href="/list/proceedings/parents"> Actas Padres </a>
                                        <a href="/list/proceedings/general"> Actas Generales </a>
                                    </div>
                                </li>
                            </a>
                        </div>
                        <a href="/calendar" class="">
                            <li class="item-menu">
                                <span class="menu letra-boldfont">CALENDARIO</span>
                            </li>
                        </a>
                        <a href="/clasesTeacher" class="">
                            <li class="item-menu letra-boldfont">
                                <p style="margin-top:-9px; margin-bottom:-29px; margin-left:1rem;">
                                    PLANIFICACION
                                <br>
                                </p>
                                <p style="margin-left:1rem;">
                                    GENERAL
                                </p>
                            </li>
                        </a>
                        <a href="/planClass" class="">
                            <li class="item-menu letra-boldfont">
                                <p style="margin-top:-9px; margin-bottom:-29px; margin-left:1rem;">
                                    PLANIFICACION
                                </p>
                                <p style="margin-left:1rem;">
                                    CLASES
                                </p>
                            </li>
                        </a>
                        <div class="dropdown">
                          <a>
                            <li class="item-menu">                                            
                              <span
                                class="menu"
                              >CLASE EXTRACURRICULAR</span>
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
                        <a href="/docente/estudiantes">
                          <li class="item-menu">
                              <span class="menu letra-boldfont">MIS ESTUDIANTES</span>
                          </li>
                        </a>
                        <a href="/observer">
                          <li class="item-menu">
                            <span class="menu letra-boldfont">OBSERVADOR</span>
                          </li>
                         
                        </a>
                        <!-- <div class="dropdown2">
                            <a>
                                <li class="item-menu">
                                    <span class="menu">ACADÉMICO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <div class="dropdown2-content"> -->
                                        <!-- <a href="/duplicar-semana"> Duplicar </a>
                                        <a href="/duplicarGeneral"> Duplicar Planificación General </a> -->
                                        <!-- <a href="/resportSendParents"> Reporte Mensual Padres&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </a> -->
                                        <a href="/board">
                                        <li class="item-menu">
                                            <span class="menu letra-boldfont">PIZARRA</span>
                                        </li>

                                        </a>
                                        <!-- <a href="/duplicar-semana/"> Duplicar ciclo </a> -->
                                    <!-- </div>
                                </li>
                            </a> -->
                        <!-- </div> -->
                        <!-- <a href="/observer">
                            <li class="item-menu">
                                <span class="menu">OBSERVADOR</span>
                            </li>
                        </a> -->
                        <div class="dropdown2">
                            <a>
                                <li id="electivas" class="item-menu">
                                    <span class="menu letra-boldfont">ELECTIVAS</span>
                                    <div class="dropdown2-content letra-boldfont">
                                        <a href="/teacher/lectives/planning"> Planificación </a>

                                        <a href="/teacher/lectives/courses"> Mis clases </a>

                                        <a href="/teacher/lectives/students"> Mis alumnos </a>

                                        <a href="/teacher/lectives/activities"> Mis actividades </a>

                                        <!-- <a href="/teacher/lectives/notes"> Notas</a> -->
                                    </div>
                                </li>
                            </a>
                        </div>

                        <a href="/manual">
                            <li class="item-menu">
                                <span class="menu letra-boldfont">MANUAL DE USUARIO</span>
                            </li>
                        </a>

                        <a href="../../uploads/Terminos _Condiciones_liv4t.pdf" target="_blank">
                            <li class="item-menu">
                                <span class="menu">Términos y condiciones</span>
                            </li>
                        </a>
                    </ul>
                    <!-- <div class="text-center">
                        <a href="/chat" class="btn btn-warning letra-poppins-bold mg-btn" style="background-color: #e26100; border-color: #e26100"><h4>CHAT</h4> </a> <br />
                        <a href="/questions" class="btn btn-warning letra-poppins-bold mg-btn" style="background-color: #e26100; border-color: #e26100"><h4>FOROS</h4> </a><br />
                        <a href="/mensajes" class="btn btn-warning letra-poppins-bold mg-btn" style="background-color: #e26100; border-color: #e26100"><h4>MENSAJES</h4> </a><br />
                    </div> -->
                    <div class="text-center">
                        <a href="#" @click.prevent="logout" class="btn btn-warning letra-boldfont">X Salir</a>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    logout: function () {
      axios
        .post("/logout")
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
