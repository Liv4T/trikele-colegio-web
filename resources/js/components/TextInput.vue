<template>
  <div class="input-field" :class="{ focus }">
    <!-- add class when focus is true -->
    <input
      type="text"
      v-model="value"
      :placeholder="placeholder"
      @focus="inputEvent"
      @focusout="inputEvent"
      @keyup="inputEvent"
    />
    <!-- notice the new event listeners -->
  </div>
</template>

<script>
export default {
  props: ["placeholder", "value"],
  data() {
    return {
      focus: false
    };
  },
  methods: {
    inputEvent(e) {
      console.log(e);
      this.$emit("inputEvent", e);
      if ((e.type == "focus" || e.type == "keyup") && this.value.length > 0) {
        // activate the effect
        this.focus = true;
      } else {
        this.focus = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$primary: rgb(92, 91, 91);
$accent: #d34747;

.input-field {
  position: relative;
  padding: 5px 0;

  &::before,
  &::after {
    content: " ";
    position: absolute;
    bottom: 0;
    border-bottom: 2px $primary solid;
    transition: 0.3s;
  }

  &::after {
    left: 50%;
    right: 50%;
    border-bottom: 2px $accent solid;
  }

  &::before,
  &.focus::after {
    left: 0;
    right: 0;
  }

  input[type="text"] {
    border: 0;
    outline: 0;
    background-color: transparent;
    font-family: "Segoe UI", "San Francisco", "Roboto", sans-serif;
    font-size: 1em;
    width: 100%;
    color: $primary;
  }
}

::placeholder {
  color: rgb(92, 91, 91);
}
</style>