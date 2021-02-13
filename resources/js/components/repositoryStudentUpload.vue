<template>
    <div>
        <div class="back">
            <div class="row">
                <div class="col-md-11 mx-auto">
                    <div class="custom-card text-center">
                        <h3 class="card-header fondo">
                            Entrega Nombre
                        </h3>
                        <form-wizard
                                title
                                subtitle
                                color="#ffc107"
                                next-button-text="Siguiente"
                                back-button-text="Atrás"
                                finish-button-text="Enviar tarea"
                                @on-complete="createupload"
                        >
                            <tab-content title="Cargar entrega">
                                <div class="form-group row mx-auto">
                                    <div class="col-md-6">
                                        <label for="name">*Título</label>
                                        <div>
                                            <input
                                            type="text"
                                            name="objetive1"
                                            class="form-control"
                                            v-model="nameUnit"
                                            required
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="name">*Instrucciones</label>
                                        <textarea
                                            name="competences"
                                            class="form-control"
                                            v-model="description"
                                            placeholder="Es la explicacion o sintesis de la clase."
                                            required
                                        ></textarea>
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <div align="center">
                                            <div class="col-md-6">

                              <a  :href="nameFile"
                              target="_blank"
                              rel="noopener noreferrer">
                                <i class="fas fa-file-download fa-2x" style="color: grey;"></i>
                                <span style="color:grey">Descargar</span>
                            </a>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6">
                                            <label for="name">
                                            Nombre
                                            </label>
                                            <input type="text" name="objetive1" class="form-control" v-model="name" />
                                        </div>
                                        <div class="col-md-6">
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
                                <div class="float-left">
                                        <a href="/repository/student" class="btn btn-warning ">Volver</a>
                                </div>
                            </form-wizard>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

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
  props: ["id_repo"],
  data() {
    return {
      myOptions: [],
      nameUnit: "",
      description: "",
      newdate: "",
      nameArea: "",
      errors: [],
      nameFile: '',
      fileUpload: '',
      name:"",
      imageData: null,
      message:""
    };
  },
  mounted() {
    var url = window.location.origin + "/showRepository/" + this.id_repo;
    axios.get(url).then((response) => {
      this.myOptions = response.data;
      this.myOptions.forEach(element => {
           this.nameUnit= element.name;
           this.description= element.description;
           this.nameFile= element.file;
      });

    });
  },
  methods: {
    getMenu() {
      window.location = "/repository/student";
    },
    createupload() {
      var url = window.location.origin + "/saveRepoStUpload";

      axios
        .post(url, {
          //Cursos generales
          id_repository:this.id_repo,
          name: this.name,
          file: this.fileUpload,
        })
        .then((response) => {
          this.errors = [];

          toastr.success("Nueva tarea creada exitosamente");
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
    this.fileUpload=null;
    this.imageData = event.target.files[0];
    this.message=null;
    this.onUpload()
    },
    onUpload(){
    this.fileUpload=null;
    const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
    storageRef.on(`state_changed`,snapshot=>{
    this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        }, error=>{console.log(error.message)},
    ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
            this.fileUpload =url;
            this.message=this.imageData.name;
            console.log(this.fileUpload)
            });
        }
        );
    },
  },
};
</script>
<style></style>
