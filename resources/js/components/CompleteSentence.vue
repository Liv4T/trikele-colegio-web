<template>
  <div class="back">
    <div class="row">
      <div class="col-md-10 mx-auto">
        <div class="custom-card">
          <h3 class="card-header text-center">Completar Oración</h3>
          <form class="needs-validation" novalidate>
            <div class="card-body">
              <h3>Complete the following sentence.</h3>
              <br />
              <div class="form-group mx-auto">
                <span>
                  I
                  <input
                    type="text"
                    class="sentence"
                    placeholder="Respuesta 1"
                    disabled
                    v-model="newActivity1"
                  /> in the morning at 6:00 am then, i
                  <input
                    type="text"
                    class="sentence"
                    placeholder="Respuesta 2"
                    disabled
                    v-model="newActivity2"
                  /> before
                  <input
                    type="text"
                    class="sentence"
                    placeholder="Respuesta 3"
                    disabled
                    v-model="newActivity3"
                  /> go down to take the sandwich made by my mom.
                </span>
              </div>
              <br />
              <br />
              <!-- <div class="form-group row mx-auto"> -->
              <div class="form-group row">
                <div class="col-md-2 columna">
                  <label>Respuesta 1</label>
                </div>
                <div class="col-md-3 columna">
                  <input
                    type="text"
                    name="activity"
                    class="form-control sentence"
                    v-model="newActivity1"
                  />
                </div>
                <div class="invalid-feedback">Please fill out this field</div>
              </div>
              <div class="form-group row">
                <div class="col-md-2 columna">
                  <label>Respuesta 2</label>
                </div>
                <div class="col-md-3 columna">
                  <input
                    type="text"
                    name="activity"
                    class="form-control sentence"
                    v-model="newActivity2"
                  />
                </div>
                <div class="invalid-feedback">Please fill out this field</div>
              </div>
              <div class="form-group row">
                <div class="col-md-2 columna">
                  <label>Respuesta 3</label>
                </div>
                <div class="col-md-3 columna">
                  <input
                    type="text"
                    name="activity"
                    class="form-control sentence"
                    v-model="newActivity3"
                  />
                </div>
                <div class="invalid-feedback">Please fill out this field</div>
              </div>
              <div style="position: absolute; left:800px; top:160px; z-index:100;" class="back">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/gif.gif?alt=media&token=3d28491b-3d8d-4333-9858-0ae942cd185e"
                  width="308px"
                  alt
                />
              </div>
              <!-- <div align="center">
                    <img src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/gif.gif?alt=media&token=3d28491b-3d8d-4333-9858-0ae942cd185e" alt="">
              </div>-->

              <!-- </div> -->
            </div>

            <div class="modal-footer">
              <a href="/juegos" class="btn btn-warning float-right">Volver</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
(function() {
  "use strict";
  window.addEventListener(
    "load",
    function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener(
          "submit",
          function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

export default {
  data() {
    return {
      inputs: [
        {
          name: ""
        }
      ],
      inputs1: [
        {
          name: ""
        }
      ],
      newActivity1: "",
      newActivity2: "",
      newActivity3: "",
      Uoptions: ["3", "4"],
      subcategories: [],
      TypeUsers: [],
      classes: [],
      myOptions: ["On-Line", "Virtual"],
      newDescription: "",
      newName: "",
      newId_subcategories: "",
      newSubject: "",
      newObjetive: "",
      newFromW: "",
      newToW: "",
      newFromH: "",
      newToH: "",
      newQuiz: "",
      newIndicator: "",
      newPercent: "",
      newLocal: "",
      newRegional: "",
      newContry: "",
      newWorld: "",
      newId_user: "",
      fillC: {
        id: "",
        name: "",
        description: "",
        id_user: "",
        id_category: "",
        id_subcategory: "",
        subject: "",
        objetive: "",
        fromW: "",
        toW: "",
        fromH: "",
        toH: "",
        quiz: "",
        indicator: "",
        percent: "",
        local: "",
        regional: "",
        world: ""
      },
      errors: []
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style>
.sentence {
  border: 0cm;
  border-radius: 10px;
  background: #dee9f3;
  text-align: center;
}
.columna {
  padding: 0px;
}
</style>
