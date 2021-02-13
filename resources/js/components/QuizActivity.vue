<template>
  <!--container-->
  <div class="container mx-auto">
    <!--questionBox-->
    <div class="questionBox" id="app">
      <!-- transition -->
      <transition
        :duration="{ enter: 500, leave: 300 }"
        enter-active-class="animated zoomIn"
        leave-active-class="animated zoomOut"
        mode="out-in"
      >
        <!--qusetionContainer-->
        <div
          class="questionContainer"
          v-if="questionIndex < quiz.questions.length"
          v-bind:key="questionIndex"
        >
          <header>
            <h1 class="title is-6">Trivia Imagenes</h1>
            <!--progress-->
            <div class="progressContainer">
              <progress
                class="progress is-info is-small"
                :value="
                                    (questionIndex / quiz.questions.length) *
                                        100
                                "
                max="100"
              >
                {{
                (questionIndex / quiz.questions.length) *
                100
                }}%
              </progress>
              <p>
                {{
                (questionIndex / quiz.questions.length) *
                100
                }}% complete
              </p>
            </div>
            <!--/progress-->
          </header>

          <!-- questionTitle -->
          <img class="titleContainer title" width="200px" :src="quiz.questions[questionIndex].text" />
          <!-- quizOptions -->
          <div class="optionContainer">
            <div
              class="option"
              v-for="(response, index) in quiz.questions[
                                questionIndex
                            ].responses"
              @click="selectOption(index)"
              :class="{
                                'is-selected':
                                    userResponses[questionIndex] == index
                            }"
              :key="index"
            >
              {{ index | charIndex }}.
              {{ response.text }}
            </div>
          </div>

          <!--quizFooter: navigation and progress-->
          <footer class="questionFooter">
            <!--pagination-->
            <nav class="pagination" role="navigation" aria-label="pagination">
              <!-- back button -->
              <a class="button" v-on:click="prev()" :disabled="questionIndex < 1">Back</a>

              <!-- next button -->
              <a
                class="button"
                :class="
                                    userResponses[questionIndex] == null
                                        ? ''
                                        : 'is-active'
                                "
                v-on:click="next()"
                :disabled="
                                    questionIndex >= quiz.questions.length
                                "
              >
                {{
                userResponses[questionIndex] == null
                ? "Skip"
                : "Next"
                }}
              </a>
            </nav>
            <!--/pagination-->
          </footer>
          <!--/quizFooter-->
        </div>
        <!--/questionContainer-->

        <!--quizCompletedResult-->
        <div
          v-if="questionIndex >= quiz.questions.length"
          v-bind:key="questionIndex"
          class="quizCompleted has-text-centered"
        >
          <!-- quizCompletedIcon: Achievement Icon -->
          <span class="icon">
            <i
              class="fa"
              :class="
                                score() > 3
                                    ? 'fa-laugh is-active'
                                    : 'fa-times-circle'
                            "
            ></i>
          </span>

          <!--resultTitleBlock-->
          <h2 class="title">
            You did
            {{
            score() > 4
            ? "an amazing"
            : score() < 1
            ? "a nice"
            : "a good"
            }}
            job!
          </h2>
          <p class="subtitle">
            Total score: {{ score() }} /
            {{ quiz.questions.length }}
          </p>
          <br />
          <a class="button" href="/juegos">
            Volver
            <i class="fa fa-refresh"></i>
          </a>
          <!--/resultTitleBlock-->
        </div>
        <!--/quizCompetedResult-->
      </transition>
    </div>
    <!--/questionBox-->
  </div>
  <!--/container-->
</template>
<script>
var quiz = {
    user: "Dave",
    questions: [
      {
        text:
          "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/burrito_Mesa%20de%20trabajo%201.jpg?alt=media&token=e1fdac4b-4659-4723-8c4b-6dbc749df0e6",
        responses: [
          { text: "Toro" },
          { text: "Burro", correct: true },
          { text: "Gallo" },
          { text: "Ninguna de las anteriores" }
        ]
      },
      {
        text:
          "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/gallito_Mesa%20de%20trabajo%201.jpg?alt=media&token=bf1dec33-5923-46fc-bc82-198c19eb75a1",
        responses: [
          { text: "Gallo", correct: true },
          { text: "Pato" },
          { text: "Toro" },
          { text: "Vaca" }
        ]
      },
      {
        text:
          "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ovejita_Mesa%20de%20trabajo%201.jpg?alt=media&token=3a0b3dad-86b9-4c26-867f-c74c3447edf3",
        responses: [
          { text: "Pollo" },
          { text: "Oveja", correct: true },
          { text: "Toro" },
          { text: "Burro" }
        ]
      },
      {
        text:
          "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/pollito_Mesa%20de%20trabajo%201.jpg?alt=media&token=8f8f3b7f-f5e3-45bd-b8f9-94f79f3f972e",
        responses: [
          { text: "Pollo", correct: true },
          { text: "Gallina" },
          {
            text: "Oveja"
          },
          { text: "Ninguna de las anteriores" }
        ]
      },
      {
        text:
          "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/perrito_Mesa%20de%20trabajo%201.jpg?alt=media&token=7a23cff8-a55b-4279-9d97-e511e0dff737",
        responses: [
          { text: "Gato" },
          {
            text: "Toro"
          },
          {
            text: "Perro",
            correct: true
          },
          { text: "Pollo" }
        ]
      }
    ]
  },
  userResponseSkelaton = Array(quiz.questions.length).fill(null);

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
$trans_duration: 0.3s;
$primary_color: #3d5afe;

@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");

.button {
  transition: $trans_duration;
}
.title,
.subtitle {
  font-family: Montserrat, sans-serif;
  font-weight: normal;
}
.animated {
  transition-duration: $trans_duration/2;
}

.container {
  margin: 0 0.5rem;
}

.questionBox {
  //   max-width: 65rem;
  width: auto;
  min-height: 40rem;

  background: #fafafa;
  position: relative;
  display: flex;

  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  header {
    background: rgba(0, 0, 0, 0.025);
    padding: 1.5rem;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    h1 {
      font-weight: bold;
      margin-bottom: 1rem !important;
    }
    .progressContainer {
      width: auto;
      margin: 0 auto;

      > progress {
        margin: 0;
        border-radius: 5rem;
        overflow: hidden;
        border: none;
        width: -webkit-fill-available;

        color: $primary_color;
        &::-moz-progress-bar {
          background: $primary_color;
        }
        &::-webkit-progress-value {
          background: $primary_color;
        }
      }
      > p {
        margin: 0;
        margin-top: 0.5rem;
      }
    }
  }
  .titleContainer {
    text-align: center;
    margin: 0 auto;
    padding: 1.5rem;
  }

  .quizForm {
    display: block;
    white-space: normal;

    height: 100%;
    width: 100%;

    .quizFormContainer {
      height: 100%;
      margin: 15px 18px;

      .field-label {
        text-align: left;
        margin-bottom: 0.5rem;
      }
    }
  }
  .quizCompleted {
    width: 100%;
    padding: 1rem;
    text-align: center;

    > .icon {
      color: #5286ff;
      font-size: 5rem;

      .is-active {
        color: #00e676;
      }
    }
  }
  .questionContainer {
    white-space: normal;

    height: auto;
    width: auto;

    .optionContainer {
      margin-top: 12px;
      flex-grow: 1;
      .option {
        border-radius: 290486px;
        padding: 9px 18px;
        margin: 0 18px;
        margin-bottom: 12px;
        transition: $trans_duration;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.05);
        color: rgba(0, 0, 0, 0.85);
        border: transparent 1px solid;

        &.is-selected {
          border-color: rgba(black, 0.25);
          background-color: white;
        }
        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
        &:active {
          transform: scaleX(0.9);
        }
      }
    }

    .questionFooter {
      background: rgba(0, 0, 0, 0.025);
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      width: 100%;
      align-self: flex-end;

      .pagination {
        //padding: 10px 15px;
        margin: 15px 25px;
      }
    }
  }
}
.pagination {
  display: flex;
  justify-content: space-between;
}
.button {
  padding: 0.5rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 5rem;
  margin: 0 0.25rem;
  background-color: #ffc107;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background-color: #ffc107;
    border-color: rgba(0, 0, 0, 0.25);
  }
  &.is-active {
    background-color: #ffc107;
    color: rgb(17, 16, 16);
    border-color: transparent;

    &:hover {
      background: darken($primary_color, 10%);
    }
  }
}

@media screen {
  .questionBox {
    align-items: center;
    justify-content: center;

    .questionContainer {
      display: flex;
      flex-direction: column;
    }
  }
}

@media screen {
  .sidebar {
    height: auto !important;
    border-radius: 6px 6px 0px 0px;
  }
}
</style>
