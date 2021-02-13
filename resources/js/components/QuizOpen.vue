<template>
  <!--container-->
  <div class="back">
    <div class="row">
      <div class="col-md-8 mx-auto">
        <div class="custom-card text-center">
          <h3 class="card-header">Cuestionario preguntas abiertas</h3>

          <div class="card-body">
            <div class="text-center">
              <h5>¿Qué planes tiene para el año próximo?</h5>
            </div>
            <div class="form-group row mx-auto">
              <textarea name="welcome" class="form-control" required></textarea>
              <div class="emoji-invoker2" slot="emoji-invoker2">
                <input type="file" class="inputfiles" name="file" id="file" @change="onFlieChange" />
                <label for="file">
                  <i class="fas fa-paperclip"></i>
                </label>
              </div>
              <div class="invalid-feedback">Please fill out this field</div>
            </div>
            <div class="text-center">
              <h5>¿Qué tipo de objetivos se plantea constantemente?</h5>
            </div>
            <div class="form-group row mx-auto">
              <textarea name="welcome" class="form-control" required></textarea>
              <div class="emoji-invoker3" slot="emoji-invoker3">
                <input type="file" class="inputfiles" name="file" id="file" @change="onFlieChange" />
                <label for="file">
                  <i class="fas fa-paperclip"></i>
                </label>
              </div>
              <div class="invalid-feedback">Please fill out this field</div>
            </div>
            <div class="text-center">
              <h5>¿Cómo describiría su vida deportiva?</h5>
            </div>
            <div class="form-group row mx-auto">
              <textarea name="welcome" class="form-control" required></textarea>
              <div class="emoji-invoker4" slot="emoji-invoker4">
                <input type="file" class="inputfiles" name="file" id="file" @change="onFlieChange" />
                <label for="file">
                  <i class="fas fa-paperclip"></i>
                </label>
              </div>
              <div class="invalid-feedback">Please fill out this field</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--/container-->
</template>
<script>
export default {
  data() {
    return {
      quiz: quiz,
      questionIndex: 0,
      userResponses: userResponseSkelaton,
      isActive: false
    };
  },
  filters: {
    charIndex: function(i) {
      return String.fromCharCode(97 + i);
    }
  },
  methods: {
    restart: function() {
      this.questionIndex = 0;
      this.userResponses = Array(this.quiz.questions.length).fill(null);
    },
    selectOption: function(index) {
      Vue.set(this.userResponses, this.questionIndex, index);
      //console.log(this.userResponses);
    },
    next: function() {
      if (this.questionIndex < this.quiz.questions.length) this.questionIndex++;
    },

    prev: function() {
      if (this.quiz.questions.length > 0) this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function() {
      var score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
          typeof this.quiz.questions[i].responses[this.userResponses[i]] !==
            "undefined" &&
          this.quiz.questions[i].responses[this.userResponses[i]].correct
        ) {
          score = score + 1;
        }
      }
      return score;

      //return this.userResponses.filter(function(val) { return val }).length;
    }
  }
};
</script>
<style lang="scss">
.inputfiles {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.inputfiles + label {
  font-size: 1.25em;
  font-weight: 900;
  color: #b1b1b1;
  display: inline-block;
}

.inputfiles:focus + label,
.inputfiles + label:hover {
  background-color: white;
}
.inputfiles + label {
  cursor: pointer; /* "hand" cursor */
}

.emoji-invoker2 {
  position: absolute;
  top: 7.3rem;
  right: 2.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
}
.emoji-invoker3 {
  position: absolute;
  top: 14.4rem;
  right: 2.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
}
.emoji-invoker4 {
  position: absolute;
  top: 21.5rem;
  right: 2.5rem;
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
</style>
