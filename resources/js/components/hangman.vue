<template>
  <hangman-game :words="words" :show-play-again="false" :lang="ES" @gameFinished="gameFinished"/>
</template>
<script>
import "vue-games";
export default {
  data() {
    return {
      words: ["Pera", "Manzana", "Tomate", "Cereza", "Mango"]
    };
  },

  methods: {
    gameFinished: function(word, lose) {
      console.log("game finished!!!");
      console.log("user was guessing word:", word);
      console.log("she/he/it lost?", lose);
    }
  }
};
</script>
<style>
.word-blankletter[data-v-b9783970] {
  background-color: black;
}
</style>