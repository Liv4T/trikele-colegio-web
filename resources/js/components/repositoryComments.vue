<template>
    <div>
        <!-- <div class="back"> -->
        <div>  
            <div class="row">
                <div class="col-md-11 mx-auto">
                    <div class="custom-card text-center">
                        <h3 class="card-header fondo">
                            Entrega {{ nameRepo }}  <br />
                            Estudiante {{ nameStudent }}
                        </h3>

                            <form-wizard
                                title
                                subtitle
                                color="#ffc107"
                                next-button-text="Siguiente"
                                back-button-text="Atrás"
                                finish-button-text="Enviar comentario"
                                @on-complete="createComment"
                            >
                                <tab-content title="Comentario">
                                    <div class="form-group row mx-auto">
                                            <div class="col-md-6">
                                                 <label for="name">Nombre</label>
                                            <div>
                                                <input
                                                type="text"
                                                name="objetive1"
                                                class="form-control"
                                                v-model="name"
                                                required
                                                />
                                            </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="name">Archivo</label>
                                                    <br />
                                                    <a  :href="nameFile"
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                            <i class="fas fa-file-download fa-2x" style="color: grey;"></i>
                                                            <span style="color:grey">Descargar</span>
                                                    </a>
                                                </div>
                                    </div>
                                    <div class="form-group row mx-auto">
                                        <div class="col">
                                            <label for="name"
                                                >Retroalimentación</label
                                            >
                                            <textarea
                                                name="competences"
                                                class="form-control"
                                                v-model="retro"
                                                placeholder=""
                                                required
                                            ></textarea>

                                        </div>
                                    </div>
                                     <div class="form-group  mx-auto" >
                                          <label for="name">Grabar nota de voz</label>
              <select
                class="hidden"
                name="listaDeDispositivos"
                id="listaDeDispositivos"
                v-model="listaDeDispositivos"
                hidden
              ></select>
              <p id="duracion"></p>

              <button class="btn btn-link" id="btnComenzarGrabacion" @click="comenzarAGrabar">
                <i class="fas fa-microphone-alt"></i>
              </button>

              <button
                class="btn btn-link fas fa-stop-circle"
                id="btnDetenerGrabacion"
                @click="detenerGrabacion"
              ></button>
                 <a  v-show="uploadBlobFile!=null"  :href="uploadBlobFile"
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                            <i class="fas fa-file-download fa-2x" style="color: grey;"></i>
                                                            <span style="color:grey">Descargar</span>
                                                    </a>
            </div>
                                    <div class="form-group row mx-auto">
                                        <div class="col">
                                            <label for="name">Archivo</label>
                                            <button class="form-control"  @click="click1">Seleccione un archivo</button>
                                            <input type="file" ref="input1"
                                                style="display: none"
                                                @change="previewImage"  >
                                            <div v-if="message!='' && message!=null">
                                                <span style="color:green; font-size:20px">Archivo cargado con exito nombre:{{ message }} </span>

                                            </div>
                                            <div v-if="message==null">
                                                <span style="color:red; font-size:18px">Espere estamos cargando su archivo</span>

                                            </div>
                                        </div>
                                    </div>
                                </tab-content>
                                    <div v-if="backToPage" class="float-left">
                                      <a v-on:click="backToPage" class="btn btn-warning ">Volver</a>
                                    </div>

                            </form-wizard>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
const init = () => {
  const tieneSoporteUserMedia = () =>
    navigator.mediaDevices ? navigator.mediaDevices.getUserMedia : null;
  // Si no soporta...
  // Amable aviso para que el mundo comience a usar navegadores decentes ;)
  if (typeof MediaRecorder === "undefined" || !tieneSoporteUserMedia())
    return console.log(
      "Tu navegador web no cumple los requisitos; por favor, actualiza a un navegador como Firefox o Google Chrome"
    );

  // Declaración de elementos del DOM
  const $listaDeDispositivos = document.querySelector("#listaDeDispositivos"),
    $duracion = document.querySelector("#duracion"),
    $btnComenzarGrabacion = document.querySelector("#btnComenzarGrabacion"),
    $btnDetenerGrabacion = document.querySelector("#btnDetenerGrabacion");

  // Algunas funciones útiles
  const limpiarSelect = () => {
    for (let x = $listaDeDispositivos.options.length - 1; x >= 0; x--) {
      $listaDeDispositivos.options.remove(x);
    }
  };

  const segundosATiempo = (numeroDeSegundos) => {
    let horas = Math.floor(numeroDeSegundos / 60 / 60);
    numeroDeSegundos -= horas * 60 * 60;
    let minutos = Math.floor(numeroDeSegundos / 60);
    numeroDeSegundos -= minutos * 60;
    numeroDeSegundos = parseInt(numeroDeSegundos);
    if (horas < 10) horas = "0" + horas;
    if (minutos < 10) minutos = "0" + minutos;
    if (numeroDeSegundos < 10) numeroDeSegundos = "0" + numeroDeSegundos;

    return `${horas}:${minutos}:${numeroDeSegundos}`;
  };
  // Variables "globales"
  let tiempoInicio, mediaRecorder, idIntervalo;
  const refrescar = () => {
    $duracion.textContent = segundosATiempo((Date.now() - tiempoInicio) / 1000);
  };
  // Consulta la lista de dispositivos de entrada de audio y llena el select
  const llenarLista = () => {
    navigator.mediaDevices.enumerateDevices().then((dispositivos) => {
      limpiarSelect();
      dispositivos.forEach((dispositivo, indice) => {
        if (dispositivo.kind === "audioinput") {
          const $opcion = document.createElement("option");
          // Firefox no trae nada con label, que viva la privacidad
          // y que muera la compatibilidad
          $opcion.text = dispositivo.label || `Dispositivo ${indice + 1}`;
          $opcion.value = dispositivo.deviceId;
          $listaDeDispositivos.appendChild($opcion);
        }
      });
    });
  };
  // Ayudante para la duración; no ayuda en nada pero muestra algo informativo
  const comenzarAContar = () => {
    tiempoInicio = Date.now();
    idIntervalo = setInterval(refrescar, 500);
  };
   llenarLista();
};
import VueFormWizard from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import firebase from 'firebase';
 var firebaseConfig = {
            apiKey: "AIzaSyBUwPOBHWgSv10yWDO0VX_UCCOfHZ3jKYE",
            authDomain: "liv4t-skool.firebaseapp.com",
            databaseURL: "https://liv4t-skool.firebaseio.com",
            projectId: "liv4t-skool",
            storageBucket: "liv4t-skool.appspot.com",
            messagingSenderId: "346718353628",
            appId: "1:346718353628:web:abc0666c41b66fa472dc19",
            measurementId: "G-7L14TG5RRZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
Vue.use(VueFormWizard);
export default {
  props: ["id_repo","id_student","backToPage"],
  data() {
    return {
      myOptions: [],
      name: "",
      retro: "",
      newdate: "",
      nameRepo: "",
      nameStudent:"",
      errors: [],
      nameFile: '',
      uploadFile: '',
      uploadBlobFile:null,
      imageData: null,
      message:"",
       listaDeDispositivos: document.querySelector("#listaDeDispositivos"),
      duracion: document.querySelector("#duracion"),
      tiempoInicio: "",
      mediaRecorder: "",
      idIntervalo: "",
    };
  },
  mounted() {
      var url = window.location.origin + "/showRepositoryComments/" +this.id_student +'/' + this.id_repo;
    axios.get(url).then((response) => {
      this.myOptions = response.data;
      this.myOptions.forEach(element => {
           this.name= element.name;
           this.description= element.description;
           this.nameFile= element.file;
           this.nameRepo= element.name_repo;
           this.nameStudent= element.name_student;
           this.retro=element.comment;

      });

    });
  },
  methods: {
    getMenu() {
      window.location = "/repository/students/"+this.id_repo;
    },
    onResult(data) {
      console.log("The blob data:", data);
      console.log("Downloadable audio", window.URL.createObjectURL(data));
      this.audio = data;
    },
    comenzarAGrabar() {
      //   if (!this.listaDeDispositivos.options.length)
      //     return alert("No hay dispositivos");
      // No permitir que se grabe doblemente
      if (this.mediaRecorder) return alert("Ya se está grabando");

      navigator.mediaDevices
        .getUserMedia({
          audio: {
            deviceId: this.listaDeDispositivos,
          },
        })
        .then((stream) => {
          // Comenzar a grabar con el stream
          this.mediaRecorder = new MediaRecorder(stream);
          this.mediaRecorder.start();
          this.comenzarAContar();
          // En el arreglo pondremos los datos que traiga el evento dataavailable
          const fragmentosDeAudio = [];
          // Escuchar cuando haya datos disponibles
          this.mediaRecorder.addEventListener("dataavailable", (evento) => {
            // Y agregarlos a los fragmentos
            fragmentosDeAudio.push(evento.data);
          });
          // Cuando se detenga (haciendo click en el botón) se ejecuta esto
          this.mediaRecorder.addEventListener("stop", () => {
            // Detener el stream
            stream.getTracks().forEach((track) => track.stop());
            // Detener la cuenta regresiva
            this.detenerConteo();
            // Convertir los fragmentos a un objeto binario
            const blobAudio = new Blob(fragmentosDeAudio);
            let date = Date.now();
            var name_blob = "audio_" + date + ".mp3"; //name file upload
            var file = blobAudio // use the Blob or File API
            const ref=firebase.storage().ref(name_blob).put(file);
            ref.on(`state_changed`,snapshot=>{
                ref.snapshot.ref.getDownloadURL().then((url)=>{
                this.uploadBlobFile =url;
                // console.log(this.uploadBlobFile)
                });
            });

          });
        })
        .catch((error) => {
          // Aquí maneja el error, tal vez no dieron permiso
          console.log(error);
        });
    },
    comenzarAContar() {
      this.tiempoInicio = Date.now();
      this.idIntervalo = setInterval(this.refrescar(), 500);
    },
    refrescar() {
      this.duracion = this.segundosATiempo(
        (Date.now() - this.tiempoInicio) / 1000
      );
    },
    segundosATiempo(numeroDeSegundos) {
      let horas = Math.floor(numeroDeSegundos / 60 / 60);
      numeroDeSegundos -= horas * 60 * 60;
      let minutos = Math.floor(numeroDeSegundos / 60);
      numeroDeSegundos -= minutos * 60;
      numeroDeSegundos = parseInt(numeroDeSegundos);
      if (horas < 10) horas = "0" + horas;
      if (minutos < 10) minutos = "0" + minutos;
      if (numeroDeSegundos < 10) numeroDeSegundos = "0" + numeroDeSegundos;

      return `${horas}:${minutos}:${numeroDeSegundos}`;
    },

    detenerConteo() {
      clearInterval(this.idIntervalo);
      this.tiempoInicio = null;
      this.duracion = "";
    },

    detenerGrabacion() {
      if (!this.mediaRecorder) return alert("No se está grabando");
      this.mediaRecorder.stop();
      this.mediaRecorder = null;
    },
    createComment() {
      var url = window.location.origin + "/saveRepoComment";

      axios
        .post(url, {
          //Cursos generales
          id_repository: this.id_repo,
          id_student:this.id_student,
          comment: this.retro,
          file: this.uploadFile,
          audio:this.uploadBlobFile,
        })
        .then((response) => {
          this.errors = [];

          toastr.success("Nuevo comentario creada exitosamente");
          this.getMenu();
        })
        .catch((error) => {
          this.errors = error.response.data;
          toastr.danger("Complete todos los campos requeridos");
        });
    },
    click1() {
    this.$refs.input1.click()
    },
    previewImage(event) {
    this.uploadValue=0;
    this.uploadFile=null;
    this.imageData = event.target.files[0];
    this.message=null;
    this.onUpload()
    },
    onUpload(){
    this.uploadFile=null;
    const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
    storageRef.on(`state_changed`,snapshot=>{
    this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        }, error=>{console.log(error.message)},
    ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
            this.uploadFile =url;
            this.message=this.imageData.name;
            console.log(this.uploadFile)
            });
        }
        );
    },
  },
};
</script>
