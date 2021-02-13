<template>
  <div>
    <div class="panel panel-primary">
      <div class="panel-heading" id="accordion">
        <h4>{{ group.name }}</h4>

        <!-- <div class="btn-group pull-right">
                    <a
                        type="button"
                        class="btn btn-default btn-xs"
                        data-toggle="collapse"
                        data-parent="#accordion-"
                        :href="'#collapseOne-' + group.id"
                    >
                        <span class="glyphicon glyphicon-chevron-down"></span>
                    </a>
        </div>-->
      </div>
      <div class="panel-collapse" :id="'collapseOne-' + group.id">
        <div class="panel-body chat-panel msg_container_base" id="messages">
          <span v-for="conversation in conversations">
            <div v-if="user_auth == conversation.user_id" class="row msg_container base_sent">
              <div v-if="conversation.type == 1" class="col-md-10 col-xs-10">
                <div class="messages msg_sent">
                  <p>{{ conversation.message }}</p>
                  <time>
                    {{ conversation.user.name }} •
                    <strong>{{ conversation.created_at }}</strong>
                  </time>
                </div>
              </div>
              <div v-if="conversation.type == 4" class="col-md-10 col-xs-10">
                <div class="messages msg_sent">
                  <a :href="conversation.message" download>
                    <img :src="conversation.message" style="max-width: 200px;" />
                    <!-- {{ message.file_name }} -->
                  </a>
                  <time>
                    {{ conversation.user.name }} •
                    <strong>{{ conversation.created_at }}</strong>
                  </time>
                </div>
              </div>
              <div v-if="conversation.type == 2" class="col-md-10 col-xs-10">
                <div class="messages msg_sent">
                  <a :href="conversation.message" download>
                    <a style="color:grey" :href="conversation.file_path" download>
                      <i style="color:grey" class="fas fa-file-pdf fa-2x"></i>
                      Descargar
                      <!-- {{ conversation.file_name }} -->
                    </a>
                  </a>

                  <time>
                    {{ conversation.user.name }} •
                    <strong>{{ conversation.created_at }}</strong>
                  </time>
                </div>
              </div>
              <div v-if="conversation.type == 3" class="col-md-10 col-xs-10">
                <div class="messages msg_sent">
                  <a :href="conversation.message" download>
                    <a :href="conversation.file_path" download>
                      <i class="fas fa-file-word fa-2x" style="color: grey;"></i>
                      <span style="color:grey">Descargar</span>
                      <!-- {{ conversation.file_name }} -->
                    </a>
                  </a>
                  <time>
                    {{ conversation.user.name }} •
                    <strong>{{ conversation.created_at }}</strong>
                  </time>
                </div>
              </div>
              <div v-if="conversation.type == 5" class="col-md-10 col-xs-10">
                <div class="messages msg_sent">
                  <a :href="conversation.file_path" download>
                    <audio controls style="height:50px;">
                      <source :src="conversation.message" type="audio/mpeg" />
                    </audio>
                  </a>
                  <time>
                    {{ conversation.user.name }} •
                    <strong>{{ conversation.created_at }}</strong>
                  </time>
                </div>
              </div>
              <div class="col-md-2 col-xs-2 avatar">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/bd-img.appspot.com/o/Perfil-gral1.jpg?alt=media&token=f91c5a48-1b1d-4bfe-b63f-7e5acad0de7a"
                  class="img-responsive"
                />
              </div>
            </div>
            <!-- <span>{{ user+"---"+conversation.user_id }}</span> -->
            <div v-if="user_auth != conversation.user_id" class="row msg_container base_receive">
              <div class="col-md-2 col-xs-2 avatar">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/bd-img.appspot.com/o/Perfil-gral1.jpg?alt=media&token=f91c5a48-1b1d-4bfe-b63f-7e5acad0de7a"
                  class="recive img-responsive"
                />
              </div>
              <div v-if="conversation.type == 1" class="col-md-10 col-xs-10">
                <div class="messages msg_receive">
                  <p>{{ conversation.message }}</p>
                  <div class="msg_sent">
                    <time>
                      {{ conversation.user.name }} •
                      <strong>{{ conversation.created_at }}</strong>
                    </time>
                  </div>
                </div>
              </div>
              <div v-if="conversation.type == 4" class="col-md-10 col-xs-10">
                <div class="messages msg_receive">
                  <a :href="conversation.message" download>
                    <img :src="conversation.message" style="max-width: 200px;" />
                    <!-- {{ message.file_name }} -->
                  </a>
                  <div class="msg_sent">
                    <time>
                      {{ conversation.user.name }} •
                      <strong>{{ conversation.created_at }}</strong>
                    </time>
                  </div>
                </div>
              </div>
              <div v-if="conversation.type == 2" class="col-md-10 col-xs-10">
                <div class="messages msg_receive">
                  <a :href="conversation.message" download>
                    <a style="color:grey" :href="conversation.file_path" download>
                      <i style="color:grey" class="fas fa-file-pdf fa-2x"></i>
                      Descargar
                      <!-- {{ conversation.file_name }} -->
                    </a>
                  </a>
                  <div class="msg_sent">
                    <time>
                      {{ conversation.user.name }} •
                      <strong>{{ conversation.created_at }}</strong>
                    </time>
                  </div>
                </div>
              </div>
              <div v-if="conversation.type == 3" class="col-md-10 col-xs-10">
                <div class="messages msg_receive">
                  <a :href="conversation.message" download>
                    <a :href="conversation.file_path" download>
                      <i class="fas fa-file-word fa-2x" style="color: grey;"></i>
                      <span style="color:grey">Descargar</span>
                      <!-- {{ conversation.file_name }} -->
                    </a>
                  </a>
                  <div class="msg_sent">
                    <time>
                      {{ conversation.user.name }} •
                      <strong>{{ conversation.created_at }}</strong>
                    </time>
                  </div>
                </div>
              </div>
              <div v-if="conversation.type == 5" class="col-md-10 col-xs-10">
                <div class="messages msg_receive">
                  <a :href="conversation.file_path" download>
                    <audio controls style="height:50px;">
                      <source :src="conversation.message" type="audio/mpeg" />
                    </audio>
                  </a>
                  <div class="msg_sent">
                    <time>
                      {{ conversation.user.name }} •
                      <strong>{{ conversation.created_at }}</strong>
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
      <div class="panel-footer">
        <div class="input-group">
          <!--input id="btn-input" type="text" class="form-control input-lg" placeholder="Type your message here..." v-model="message" @keyup.enter="store()" autofocus /-->
          <div class="wrapper">
            <textarea class="regular-input" v-model="input" id="area"></textarea>
            <emoji-picker @emoji="append" :search="search">
              <div
                class="emoji-invoker"
                slot="emoji-invoker"
                slot-scope="{ events: { click: clickEvent } }"
                @click.stop="clickEvent"
              >
                <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"
                  />
                </svg>
              </div>

              <div slot="emoji-picker" slot-scope="{ emojis, insert, display }">
                <div class="emoji-picker">
                  <div class="emoji-picker__search">
                    <input type="text" v-model="search" v-focus />
                  </div>
                  <div>
                    <div
                      v-for="(emojiGroup,
                                            category) in emojis"
                      :key="category"
                    >
                      <h5>{{ category }}</h5>
                      <div class="emojis">
                        <span
                          v-for="(emoji,
                                                    emojiName) in emojiGroup"
                          :key="emojiName"
                          @click="insert(emoji)"
                          :title="emojiName"
                        >{{ emoji }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </emoji-picker>
            <div class="emoji-invoker2" slot="emoji-invoker2">
              <!-- <input type="file" id="file" name="filetest" class="inputfile" @click="callFunction" /> -->
              <input
                type="file"
                class="inputfiles"
                :name="'file-' + group.id"
                :id="'file-' + group.id"
                @change="onFileChange"
              />
              <!-- <button @click="callFunction">
              <i class="fas fa-paperclip"></i>
              </button>-->
              <label :for="'file-' + group.id">
                <i class="fas fa-paperclip"></i>
              </label>
            </div>
            <div class="emoji-invoker3" slot="emoji-invoker3">
              <select
                class="hidden"
                name="listaDeDispositivos"
                id="listaDeDispositivos"
                v-model="listaDeDispositivos"
              ></select>
              <br />
              <br />
              <p id="duracion"></p>
              <br />

              <button class="btn btn-link" id="btnComenzarGrabacion" @click="comenzarAGrabar">
                <i class="fas fa-microphone-alt"></i>
              </button>

              <button
                class="btn btn-link fas fa-stop-circle"
                id="btnDetenerGrabacion"
                @click="detenerGrabacion"
              ></button>
            </div>
          </div>

          <span class="input-group-btn">
            <button class="btn btn-info btn-lg" id="btn-chat" @click.prevent="store()">Enviar</button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Get the input field
$("#area").keypress(function (event) {
  if (event.keyCode == 13) {
    console.log("enter");
    $("#btn-chat").click();
  }
});
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

  // Comienza a grabar el audio con el dispositivo seleccionado
  //   const comenzarAGrabar = () => {
  //     if (!$listaDeDispositivos.options.length)
  //       return alert("No hay dispositivos");
  //     // No permitir que se grabe doblemente
  //     if (mediaRecorder) return alert("Ya se está grabando");

  //     navigator.mediaDevices
  //       .getUserMedia({
  //         audio: {
  //           deviceId: $listaDeDispositivos.value,
  //         },
  //       })
  //       .then((stream) => {
  //         // Comenzar a grabar con el stream
  //         mediaRecorder = new MediaRecorder(stream);
  //         mediaRecorder.start();
  //         comenzarAContar();
  //         // En el arreglo pondremos los datos que traiga el evento dataavailable
  //         const fragmentosDeAudio = [];
  //         // Escuchar cuando haya datos disponibles
  //         mediaRecorder.addEventListener("dataavailable", (evento) => {
  //           // Y agregarlos a los fragmentos
  //           fragmentosDeAudio.push(evento.data);
  //         });
  //         // Cuando se detenga (haciendo click en el botón) se ejecuta esto
  //         mediaRecorder.addEventListener("stop", () => {
  //           // Detener el stream
  //           stream.getTracks().forEach((track) => track.stop());
  //           // Detener la cuenta regresiva
  //           detenerConteo();
  //           // Convertir los fragmentos a un objeto binario
  //           const blobAudio = new Blob(fragmentosDeAudio);

  //           // Crear una URL o enlace para descargar
  //           const urlParaDescargar = URL.createObjectURL(blobAudio);
  //           // Crear un elemento <a> invisible para descargar el audio
  //           console.log("va a descargar" + urlParaDescargar);
  //           let a = document.createElement("a");
  //           document.body.appendChild(a);
  //           a.style = "display: block";
  //           a.href = urlParaDescargar;
  //           a.download = "grabacion.mp3";
  //           // Hacer click en el enlace
  //           console.log("descargo" + urlParaDescargar);
  //           a.click();
  //           // Y remover el objeto
  //           //   window.URL.revokeObjectURL(urlParaDescargar);
  //         });
  //       })
  //       .catch((error) => {
  //         // Aquí maneja el error, tal vez no dieron permiso
  //         console.log(error);
  //       });
  //   };

  //   const detenerConteo = () => {
  //     clearInterval(idIntervalo);
  //     tiempoInicio = null;
  //     $duracion.textContent = "";
  //   };

  //   const detenerGrabacion = () => {
  //     if (!mediaRecorder) return alert("No se está grabando");
  //     mediaRecorder.stop();
  //     mediaRecorder = null;
  //   };

  //   $btnComenzarGrabacion.addEventListener("click", comenzarAGrabar);
  //   $btnDetenerGrabacion.addEventListener("click", detenerGrabacion);

  // Cuando ya hemos configurado lo necesario allá arriba llenamos la lista

  llenarLista();
};
// Esperar a que el documento esté listo...
document.addEventListener("DOMContentLoaded", init);
import EmojiPicker from "vue-emoji-picker";

export default {
  props: ["group", "user_auth"],
  components: { EmojiPicker },
  data() {
    return {
      conversations: [],
      input: "",
      search: "",
      group_id: this.group.id,
      user: window.user,
      type: 4,
      allowedExtensions: [
        "pdf",
        "jpg",
        "jpeg",
        "png",
        "docx",
        "mp3",
        "audio/mpeg",
      ],
      audio: "",
      listaDeDispositivos: document.querySelector("#listaDeDispositivos"),
      duracion: document.querySelector("#duracion"),
      tiempoInicio: "",
      mediaRecorder: "",
      idIntervalo: "",
      //  grupo: '',
    };
  },
  created() {
    this.listenForNewMessage();
  },

  mounted() {
    setInterval(() => {
      this.listenForNewMessage();
    }, 15000);
    this.llenarLista();
  },

  methods: {
    store() {
      axios
        .post("/conversations", {
          message: this.input,
          group_id: this.group.id,
          type: 1,
        })
        .then((response) => {
          this.message = "";
          this.input = "";
          this.conversations.push(response.data);
          $("#messages").animate({ scrollTop: $(document).height() }, "slow");
        });
    },
    pulsar(e) {
      if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        console.log("enter");
        axios
          .post("/conversations", {
            message: this.input,
            group_id: this.group.id,
            type: 1,
          })
          .then((response) => {
            this.message = "";
            this.input = "";
            this.conversations.push(response.data);
            $("#messages").animate({ scrollTop: $(document).height() }, "slow");
          });
      }
    },
    onFileChange(file) {
      console.log(file);
      let files = file.target.files || file.dataTransfer.files;
      let data = new FormData();
      if (files.length > 0) {
        let file = files[0];
        let filename = file.name;
        let filesize = file.size;
        let extension = this.findExtension(filename);
        // this.input += file.name;
        if (extension == "pdf") {
          this.type = 2;
        }
        if (extension == "docx") {
          this.type = 3;
        }
        if (extension == "mp3") {
          this.type = 5;
        }

        // if uploaded file is valid with validation rules
        if (this.validateFile(filesize, extension)) {
          data.append("file", files[0]);
          data.append("type", this.type);
          data.append("group_id", this.group.id);

          axios.post("/fileUpload", data).then((response) => {
            this.emitMessage(response);
          });
        }
      }
    },

    listenForNewMessage() {
      axios.get("/conversation/" + this.group_id).then((response) => {
        this.conversations = response.data;
      });
    },
    onResult(data) {
      console.log("The blob data:", data);
      console.log("Downloadable audio", window.URL.createObjectURL(data));
      this.audio = data;
    },
    append(emoji) {
      this.input += emoji;
    },
    /**
     * show error messages
     * @param  {string} title
     * @param  {string} message
     * @return {void}
     */ showError(title, message) {
      swal({
        title: title,
        text: message,
        type: "error",
        confirmButtonText: "Ok",
      });
    },
    /**
     * find extension of uploaded file
     * @param  {string} filename
     * @return {string}
     */
    findExtension(filename) {
      return filename.split(".").pop().toLowerCase();
    },
    /**
     * to validate file size
     * @param  {integer} filesize
     * @return {boolean}
     */
    validateSize(filesize) {
      // 2*1024*1024 = 2097152 = 2mb
      if (filesize > 2097152) {
        this.title = "File size limit exceed!";
        this.message = "Please upload file less than 2MB.";
        this.showError(this.title, this.message);
        return false;
      }
      return true;
    },
    /**
     * to validate file extension
     * @param  {string} extension
     * @return {bolean}
     */
    validateExtension(extension) {
      if ($.inArray(extension, this.allowedExtensions) !== -1) {
        return true;
      } else {
        this.title = "Invalid file!";
        this.message = "Please upload jpg,png,pdf or doc file only.";
        this.showError(this.title, this.message);
        return false;
      }
    },
    /**
     * validate file
     * @param  {integer} filesize
     * @param  {string} extension
     * @return {boolean}
     */
    validateFile(filesize, extension) {
      if (this.validateSize(filesize) && this.validateExtension(extension)) {
        return true;
      } else {
        return false;
      }
    },
    emitMessage(response) {
      let message = response.data.output.message;
      let user = response.data.output.user;
      if (message) {
        this.$emit("messagesent", {
          message: message.message,
          user: user.name,
          time: message.created_at,
          image_path: $("#default_image").val(), //user.image_path,
          type: message.type,
          file_path: message.file_path,
          file_name: message.file_name,
        });
        console.log(message.file_path);
      }
    },
    chooseFile() {
      $("#file").click();
    },
    callFunction: function (event) {
      var id = event.target.getAttribute("data-group-id");
      console.log(this.group);
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
            let data = new FormData();
            this.type = 5;
            data.append("audio", blobAudio);
            data.append("type", this.type);
            data.append("group_id", this.group.id);

            axios.post("/fileUploadAudio", data).then((response) => {});
            // Crear una URL o enlace para descargar
            // const urlParaDescargar = URL.createObjectURL(blobAudio);
            // Crear un elemento <a> invisible para descargar el audio
            // console.log("va a descargar" + urlParaDescargar);
            // let a = document.createElement("a");
            // document.body.appendChild(a);
            // a.style = "display: block";
            // a.href = urlParaDescargar;
            // a.download = "grabacion.mp3";
            // Hacer click en el enlace
            // console.log("descargo" + urlParaDescargar);
            // var file = {};
            // Y remover el objeto
            //   window.URL.revokeObjectURL(urlParaDescargar);
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
    // llenarLista() {
    //   navigator.mediaDevices.enumerateDevices().then((dispositivos) => {
    //     this.limpiarSelect();
    //     dispositivos.forEach((dispositivo, indice) => {
    //       if (dispositivo.kind === "audioinput") {
    //         const $opcion = document.createElement("option");
    //         // Firefox no trae nada con label, que viva la privacidad
    //         // y que muera la compatibilidad
    //         $opcion.text = dispositivo.label || `Dispositivo ${indice + 1}`;
    //         $opcion.value = dispositivo.deviceId;
    //         this.listaDeDispositivos.appendChild($opcion);
    //       }
    //     });
    //   });
    // },
    // limpiarSelect() {
    //   for (let x = this.listaDeDispositivos.options.length - 1; x >= 0; x--) {
    //     this.listaDeDispositivos.options.remove(x);
    //   }
    // },
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
};
</script>
<style>
.col-md-2,
.col-md-10 {
  padding: 0;
}
.panel {
  margin-bottom: 0px;
}
.chat-window {
  bottom: 0;
  position: fixed;
  float: right;
  margin-left: 10px;
}
.chat-window > div > .panel {
  border-radius: 5px 5px 0 0;
}
.icon_minim {
  padding: 2px 10px;
}
.msg_container_base {
  background: #eeeeee;
  padding: 0 10px 10px;
  max-height: 300px;
  overflow-x: hidden;
}
.top-bar {
  background: #666;
  color: white;
  padding: 10px;
  position: relative;
  overflow: hidden;
}
.msg_receive {
  padding-left: 0;
  margin-left: 0;
}
.msg_sent {
  padding-bottom: 20px !important;
  margin-right: 0;
}
.messages {
  background: white;
  padding: 10px;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  max-width: 100%;
}
.messages.msg_receive {
  background: rgb(253, 241, 227);
}
.messages > p {
  font-size: 13px;
  margin: 0 0 0.2rem 0;
}
.messages > p {
  font-size: 13px;
  margin: 0 0 0.2rem 0;
}
.messages > time {
  font-size: 11px;
  color: rgb(117, 111, 111);
}
.msg_container {
  padding: 10px;
  overflow: hidden;
  display: flex;
}
.img-responsive {
  display: block;
  width: 55px;
}
.avatar {
  position: relative;
}
.base_receive > .avatar:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-left-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
}
.base_sent {
  justify-content: flex-end;
  align-items: flex-start;
}
.base_sent > .avatar:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 0;
  border-right-color: transparent;
  border-top-color: transparent;
  box-shadow: 1px 1px 2px rgba(black, 0.2);
  background: rgb(179, 183, 185);
}

.msg_sent > time {
  float: right;
  font-size: 10px;
}

.msg_container_base::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}

.msg_container_base::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

.msg_container_base::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}

.btn-group.dropup {
  position: fixed;
  left: 0px;
  bottom: 0;
}
.wrapper {
  position: relative;
  display: inline-block;
}

.regular-input {
  padding: 0.5rem 1rem;
  border-radius: 3px;
  border: 1px solid #ccc;
  width: 30rem;
  height: 12rem;
  outline: none;
}

.regular-input:focus {
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
}

.emoji-invoker {
  position: absolute;
  top: 0.5rem;
  right: 0.9rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
}
.emoji-invoker:hover {
  transform: scale(1.1);
}
.emoji-invoker > svg {
  fill: #b1c6d0;
}

.emoji-picker {
  top: 0px;
  left: 300px;
  position: absolute;
  z-index: 1;
  font-family: Montserrat;
  border: 1px solid #ccc;
  width: 15rem;
  height: 20rem;
  overflow: scroll;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 1px 1px 8px #c7dbe6;
}
.emoji-picker__search {
  display: flex;
}
.emoji-picker__search > input {
  flex: 1;
  border-radius: 10rem;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  outline: none;
}
.emoji-picker h5 {
  margin-bottom: 0;
  color: #b1b1b1;
  text-transform: uppercase;
  font-size: 0.8rem;
  cursor: default;
}
.emoji-picker .emojis {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.emoji-picker .emojis:after {
  content: "";
  flex: auto;
}
.emoji-picker .emojis span {
  padding: 0.2rem;
  cursor: pointer;
  border-radius: 5px;
}
.emoji-picker .emojis span:hover {
  background: #ececec;
  cursor: pointer;
}
.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.inputfile + label {
  font-size: 1.25em;
  font-weight: 900;
  color: #b1b1b1;
  display: inline-block;
}

.inputfile:focus + label,
.inputfile + label:hover {
  background-color: white;
}
.inputfile + label {
  cursor: pointer; /* "hand" cursor */
}
.emoji-invoker2 {
  position: absolute;
  top: 0.5rem;
  right: 2.9rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
}
.panel-primary > .panel-heading {
  color: #fff;
  background-color: #278080;
  border-color: #278080;
}
.panel-footer {
  padding: 10px 15px;
  background-color: #e8e5e5;
  border-top: 1px solid #e8e5e5;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.btn-info {
  color: #fff;
  background: linear-gradient(
    0deg,
    rgb(36, 138, 146) 0%,
    rgb(197, 229, 232) 100%
  );
}
.recive {
  width: 55px;
  float: right;
}
.emoji-invoker3 {
  position: absolute;
  top: 1.9rem;
  right: 3.6rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
}
.audio:not(.md-image).audio-p {
  height: 100px;
}
</style>
