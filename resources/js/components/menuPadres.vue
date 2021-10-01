<template>
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="left">
                    <ul>                        
                        <div class="dropdown">
                            <a>
                                <li class="item-menu">
                                    <img width="35px"
                                        src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ANUNCIOS_naranja.png?alt=media&token=539c1428-c480-43bf-a132-73be35386940"
                                        alt />
                                    <span
                                        class="menu">Comunicaciones&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <div class="dropdown-content">
                                        <a href="/mensajes">
                                            <img width="35px"
                                                src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MENSAJES_naranja.png?alt=media&token=f76f98f1-1c57-469b-a839-d98e64651818"
                                                alt />
                                            Mensajes
                                        </a>                                        
                                        <a href="/questions">
                                            <img width="35px"
                                                src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/FOROS_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                                                alt />
                                            Foro
                                        </a>
                                        <a href="/chat">
                                            <img width="35px"
                                                src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/FOROS_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                                                alt />
                                            Chat
                                        </a>                                        
                                    </div>
                                </li>
                            </a>
                        </div>         
                        <a href="/estudiante/calendario">
                            <li class="item-menu">
                                <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/HORARIO_narnja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad" alt/>
                                <span class="menu">Calendario</span>
                            </li>
                        </a>
                        <a href="/notasParents">
                            <li class="item-menu">
                                <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/HORARIO_narnja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad" alt/>
                                <span class="menu">Académico</span>
                            </li>
                        </a>
                        <a href="/monthlyReport">
                            <li class="item-menu">
                                <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/HORARIO_narnja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad" alt/>
                                <span class="menu">Reporte Mensual</span>
                            </li>
                        </a>     
                        <a href="/list/proceedings/parents">
                            <li class="item-menu">
                                <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/NOTAS_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad" alt/>                  
                                <span class="menu">Actas</span>
                            </li>
                        </a>          
                        <a href="/getParentsObserver">
                            <li class="item-menu">
                                <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MIS-CURSOS.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad" alt/>
                                <span class="menu">Observador</span>
                            </li>
                        </a>                                                
                        <a href="/manual">
                            <li class="item-menu">    
                                <img width="50px"
                                    height="150px"
                                    src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MANUAL-DE-USUARIO_naranja.png?alt=media&token=bd2488fb-e121-432d-afd2-f223fcc0f29e"
                                    alt />
                                <span class="badge text-wrap" style="width: 6rem; font-size: 13px">
                                    PEI
                                    Y Manual de Convivencia
                                </span>
                            </li>
                        </a>
                        <a href="../../uploads/Terminos _Condiciones_liv4t.pdf" target="_blank">
                            <li class="item-menu">
                                <span class="menu">Términos y condiciones</span>
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
