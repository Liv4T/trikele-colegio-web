<template>
    <div>
        <div class="back">
            <div class="row">
                <div class="col-md-11 mx-auto">
                    <div class="custom-card text-center">
                        <h3 class="card-header fondo">
                            Entrega {{ nameRepo }}
                        </h3>
                        <br />
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

                                                <label for="name">Archivo del estudiante</label> <br />
                                                 <a  :href="fileStudent"
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
                                                disabled
                                            ></textarea>

                                        </div>
                                    </div>
                                    <div class="form-group row mx-auto">
                                          <div class="col-md-6" v-show="audioComment!=null" >
                                               <label for="name"
                                                >Nota de voz</label
                                            > <br />
                                            <a  :href="audioComment"
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                    <i class="fas fa-file-download fa-2x" style="color: grey;"></i>
                                                    <span style="color:grey">Descargar</span>
                                            </a>
                                        </div>
                                        <div class="col-md-6" v-show="fileComment!=null">
                                             <label for="name"
                                                >Archivo del docente</label
                                            > <br />
                                            <a
                                                :href="fileComment"
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                    <i class="fas fa-file-download fa-2x" style="color: grey;"></i>
                                                    <span style="color:grey">Descargar</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <a href="/repository/student" class="btn btn-warning float-right">Volver</a>
                                    </div>
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
      name: "",
      retro: "",
      newdate: "",
      nameRepo: "",
      fileComment:null,
      audioComment:null,
      errors: [],
      fileStudent: "",
    };
  },
  mounted() {
      var url = window.location.origin + "/showRepositoryCommentsStudents/" + this.id_repo;
    axios.get(url).then((response) => {
      this.myOptions = response.data;
      this.myOptions.forEach(element => {
           this.name= element.name_file_student;
           this.nameRepo= element.name_repo;
           this.retro= element.comment;
           this.fileStudent= element.file_student;
           this.fileComment= element.file_teacher;
           this.audioComment= element.audio_teacher;

      });

    });
  },
  methods: {
    getMenu() {
      window.location = "/repository/students/"+this.id_repo;
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
