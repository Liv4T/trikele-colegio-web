
<template>
  <div class="back">
       <div class="row">
        <div class="col-md-11 mx-auto">
    <div class="row">
      <div class="text-center font-weight-black">
        <h1>Upload a photo</h1>
      </div>
    </div>


    <div class="row">
      <div  class="md6 offset-sm3" >
       <div>
         <div >
           <button @click="click1">choose photo</button>
           <input type="file" ref="input1"
            style="display: none"
            @change="previewImage"  >
         </div>

       <div v-if="message!='' && message!=null">
          <span>Archivo cargado con exito nombre:{{ message }} </span>
       <br>
       </div>
        <div v-if="message==null">
          <span>Espere estamos cargando su archivo</span>
       <br>
       </div>

       </div>
       </div>
    </div>
        </div>
       </div>
  </div>
</template>


<script>
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
export default {
  data () {
    return {
      caption : '',
      img1: '',
      imageData: null,
      message:""
    }
  },
  methods: {

    create () {

      const post = {
        photo: this.img1,
        caption: this.caption
      }
      firebase.database().ref('PhotoGallery').push(post)
      .then((response) => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
    },
  click1() {
  this.$refs.input1.click()
},
previewImage(event) {
  this.uploadValue=0;
  this.img1=null;
  this.imageData = event.target.files[0];
  this.message=null;
  this.onUpload()
},
onUpload(){
  this.img1=null;
  const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
  storageRef.on(`state_changed`,snapshot=>{
  this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
    }, error=>{console.log(error.message)},
  ()=>{this.uploadValue=100;
      storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.img1 =url;
          this.message=this.imageData.name;
          console.log(this.img1)
        });
      }
    );
 },
  }
}
</script>
