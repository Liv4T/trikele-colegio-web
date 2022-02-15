<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="left">
          <ul>
            <a href="/perfil_d">
              <li class="item-menu">
                <img
                  width="35px"
                  src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0"
                  alt
                />
                <span class="menu">Mi perfil</span>
              </li>
            </a>
            <div class="dropdown">
              <a>
                <li class="item-menu">
                  <img
                    width="35px"
                    src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ANUNCIOS_naranja.png?alt=media&token=539c1428-c480-43bf-a132-73be35386940"
                    alt
                  />
                  <span
                    class="menu"
                  >Administrativo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <div class="dropdown-content">
                    <a href="/instituciones_adm">
                      <img
                        width="35px"
                        src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ACTIVIDADES_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                        alt
                      />
                      Crear Instituciones
                    </a>
                    <a href="/general_adm">
                      <img
                        width="35px"
                        src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MIS-CURSOS.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                        alt
                      />
                      Crear Salones
                    </a>
                    <a href="/coordinador_adm">
                      <img
                        width="35px"
                        src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MIS-CURSOS.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                        alt
                      />
                      Crear Coordinador
                    </a>
                    <a href="/salon_adm">
                      <img
                        width="35px"
                        src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MIS-CURSOS.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                        alt
                      />
                      Crear Usuarios
                    </a>
                  </div>
                </li>
              </a>
            </div>
            <div class="dropdown1">
              <a>
                <li class="item-menu">
                  <img
                    width="35px"
                    src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ANUNCIOS_naranja.png?alt=media&token=539c1428-c480-43bf-a132-73be35386940"
                    alt
                  />
                  <span
                    class="menu"
                  >Comunicaciones&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <div class="dropdown1-content">
                    <a href="/mensajes">
                      <img
                        width="35px"
                        src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MENSAJES_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                        alt
                      />
                      Mensajes
                    </a>
                    <a href="/calendar">
                      <img
                        width="35px"
                        src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ANUNCIOS_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                        alt
                      />
                      Calendario
                    </a>
                    <a href="/questions">
                      <img
                        width="35px"
                        src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/FOROS_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                        alt
                      />
                      Foro
                    </a>
                    <a href="/chat">
                      <img
                        width="35px"
                        src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/FOROS_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                        alt
                      />
                      Chat
                    </a>
                    <a href="/mensajes">
                      <img
                        width="35px"
                        src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/sicologia_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                        alt
                      />
                      Psicología
                    </a>
                  </div>
                </li>
              </a>
            </div>
            <div class="dropdown2">
              <a>
                <li class="item-menu">
                  <img
                    width="35px"
                    src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ANUNCIOS_naranja.png?alt=media&token=539c1428-c480-43bf-a132-73be35386940"
                    alt
                  />
                  <span
                    class="menu"
                  >Académico&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <div class="dropdown2-content">
                    <a href="/planificacion">
                      <img
                        width="35px"
                        src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MIS-CURSOS.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                        alt
                      />
                      Planificación General
                    </a>
                    <a href="/docente/clases">
                      <img
                        width="35px"
                        src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MIS-CURSOS.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                        alt
                      />
                      Ciclos y clases
                    </a>

                    <a href="/bimestre">
                      <img
                        width="35px"
                        src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MIS-CURSOS.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                        alt
                      />
                      Bimestres
                    </a>

                    <a href="/notas_d">
                      <img
                        width="35px"
                        src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/NOTAS_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                        alt
                      />
                      Notas
                    </a>

                    <a href="/notesStudentsADM">
                      <img
                        width="35px"
                        src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/NOTAS_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                        alt
                      />
                      Progreso Estudiantes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </a>
                    
                    
                  </div>
                </li>
              </a>
            </div>
            <a href="/admin-boletin">
              <li class="item-menu">
                <img
                  width="35px"
                  src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0"
                  alt
                />
                <span class="menu">Boletin Estudiante</span>
              </li>
            </a>
            <div class="dropdown2">
              <a>
                <li class="item-menu">
                  <img
                    width="35px"
                    src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ANUNCIOS_naranja.png?alt=media&token=539c1428-c480-43bf-a132-73be35386940"
                    alt
                  />
                  <span class="menu">Electivas</span>
                  <div class="dropdown2-content">
                    <a href="/teacher/lectives/planning">
                      <img
                        width="35px"
                        src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MIS-CURSOS.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                        alt
                      />
                      Administrar Electivas
                    </a>
                    <a href="/teacher/lectives/courses">
                      <img
                        width="35px"
                        src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ACTIVIDADES_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                        alt
                      />Clases lectivas
                    </a>

                  </div>
                </li>
              </a>
            </div>
            <a href="/deleteUser">
              <li class="item-menu">
                <img
                  width="35px"
                  src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0"
                  alt
                />
                <span class="menu">Usuarios</span>
              </li>
            </a>
            <a href="/changeGrade">
              <li class="item-menu">
                <img
                  width="35px"
                  src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ANUNCIOS_naranja.png?alt=media&token=539c1428-c480-43bf-a132-73be35386940"
                  alt
                />
                <span class="menu">Promoción</span>
              </li>
            </a>
            <!-- <div class="dropdown">
              <a href="/actividad_g">
                <li class="item-menu">
                  <img
                    width="35px"
                    src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MIS-CURSOS.png?alt=media&token=47515df0-5b95-48b4-bb08-10257108169b"
                    alt
                  />
                  <span class="menu">
                    Mis
                    cursos&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>

                  <div class="dropdown-content">
                    <a href="/clases_d">Mis clases</a>
                    <a href="/actividad_docente">Mis actividades</a>
                  </div>
                </li>
              </a>
            </div>-->
            <!-- <a href="/actividad_docente">
              <li class="item-menu">
                <img
                  width="35px"
                  src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ACTIVIDADES.png?alt=media&token=b93a5b80-b4e2-48bb-ba48-4e90f501c819"
                  alt
                />
                <span class="menu">Mis actividades</span>
              </li>
            </a>-->
            <!-- <a href="/questions">
              <li class="item-menu">
                <img
                  width="35px"
                  src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/FOROS_naranja.png?alt=media&token=654f02ee-8e8a-491d-a622-cfef4a21db43"
                  alt
                />
                <span class="menu">Foros</span>
              </li>
            </a>-->
            <!-- <a href="/notas_d">
              <li class="item-menu">
                <img
                  width="35px"
                  src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/NOTAS_naranja.png?alt=media&token=c268d6cf-2df8-4192-bdb4-81b05ed01473"
                  alt
                />
                <span class="menu">Notas</span>
              </li>
            </a>
            <a href="/boletin">
              <li class="item-menu">
                <img
                  width="35px"
                  src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/BOLETIN_naranja.png?alt=media&token=fd0dd306-5010-47a2-b43e-195c8d170bb2"
                  alt
                />
                <span class="menu">Boletín de notas</span>
              </li>
            </a>-->
            <!-- <a href="/cuestions">
              <li class="item-menu">
                <img
                  width="35px"
                  src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MANUAL-DE-USUARIO.png?alt=media&token=f45a42fb-6ce7-4778-9612-8da4892bd802"
                  alt
                />
                <span class="menu">Observador</span>
              </li>
            </a>-->
            <!-- <a href="#">
              <li class="item-menu">
                <img
                  width="35px"
                  src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/sicologia_naranja.png?alt=media&token=3c495a25-1349-4b16-920d-126eed308186"
                  alt
                />
                <span class="menu">Psicología</span>
              </li>
            </a>-->
            <!-- <a href="#">
              <li class="item-menu">
                <img
                  width="35px"
                  src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MANUAL-DE-USUARIO_naranja.png?alt=media&token=bd2488fb-e121-432d-afd2-f223fcc0f29e"
                  alt
                />
                <span class="menu">Notificación a padres</span>
              </li>
            </a>-->
            <a href="/reportes">
              <li class="item-menu">
                <img
                  width="35px"
                  src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MANUAL-DE-USUARIO_naranja.png?alt=media&token=bd2488fb-e121-432d-afd2-f223fcc0f29e"
                  alt
                />
                <span class="menu">Mis reportes</span>
              </li>
            </a>
            <a href="../../uploads/Terminos _Condiciones_liv4t.pdf" target="_blank">
              <li class="item-menu">
                <span class="menu">Términos y condiciones</span>
              </li>
            </a>
            <!-- <a href="/manual">
              <li class="item-menu">
                <img
                  width="35px"
                  src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MANUAL-DE-USUARIO_naranja.png?alt=media&token=bd2488fb-e121-432d-afd2-f223fcc0f29e"
                  alt
                />
                <span class="menu">Manual de usuario</span>
              </li>
            </a>-->
            <!-- <a href="/chat">
              <li class="item-menu">
                <img
                  width="35px"
                  src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MANUAL-DE-USUARIO_naranja.png?alt=media&token=bd2488fb-e121-432d-afd2-f223fcc0f29e"
                  alt
                />
                <span class="menu">Chat</span>
              </li>
            </a>-->
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
.left li {
  width: auto;
  height: 60px;
  line-height: 50px;
  padding-left: 18px;
}
.left li:hover {
  background: #278080;
  color: white;
}

.left .item-menu {
  height: 50px;
  overflow: hidden;
  color: black;
}
.left a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
span.menu {
  padding-left: 17px;
  color: white;
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

.dropdown-content a:hover {
  background: #278080;
  color: white;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown1 {
  position: relative;
}

.dropdown1-content {
  display: none;
  position: absolute;
  background-color: #f5f5f5;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown1-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown1-content a:hover {
  background: #278080;
  color: white;
}

.dropdown1:hover .dropdown1-content {
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
  background: #278080;
  color: white;
}

.dropdown2:hover .dropdown2-content {
  display: block;
}
</style>