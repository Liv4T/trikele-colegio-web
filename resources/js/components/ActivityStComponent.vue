<template>
  <div class="back">
    <div class="row">
      <div class="col-md-10 mx-auto">
        <div class="card">
          <h3 class="card-header fondo text-center">Actividad {{ actividad }}</h3>
          <div class="card-body">
            <parallax-container class="horizontal-card centered-card" style="height:250px">
              <parallax-element class="background-image" :parallaxStrength="1" :type="'rotation'">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/SLIDER1.jpg?alt=media&token=58ecdc81-2d81-4996-aeeb-8d9c34c15072"
                  width="auto"
                />
              </parallax-element>
              <div class="texttrivia">
                <div align="center">
                  <h5>Ahora vamos a ver cuanto sabes</h5>
                  <a href="/trivia" class="btn btn-warning">Jugar</a>
                </div>
              </div>
            </parallax-container>
            <div class="accordion" id="accordionExample">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >Descripción de la actividad</button>
                  </h2>
                </div>
                <div
                  id="collapseOne"
                  class="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">{{descripcion}}</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >Logro</button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">{{ logro }}</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >Fecha de entrega</button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">{{ fechaE }}</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingFour">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >Fecha retroalimentación</button>
                  </h2>
                </div>
                <div
                  id="collapseFour"
                  class="collapse"
                  aria-labelledby="headingFour"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">{{ fechaR }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activities: [],
      descripcion: "",
      logro: "",
      fechaE: "",
      fechaR: ""
    };
  },
  mounted() {
    console.log("mounted");
    var urlr = "Activity";
    axios.get(urlr).then(response => {
      this.activities = response.data;
      console.log(this.activities.length);
      for (let i = 0; i < this.activities.length; i++) {
        this.descripcion = this.activities[i].activity_desc;
        this.logro = this.activities[i].achievement;
        this.fechaE = this.activities[i].deliver_date;
        this.fechaR = this.activities[i].feedback_date;
      }
    });
  },
  methods: {
    inputEvent(e) {
      console.log(e);
    }
  }
};
</script>
<style>
.texttrivia {
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  color: black;
  font-family: "Century Gothic";
  font-weight: bold;
}
</style>
