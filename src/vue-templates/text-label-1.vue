<template id='page-label'>
  <label v-bind:for="id" class="page__label">
    <input
      ref="input"
      v-bind:type="type"
      v-bind:value="answer"
      v-bind:id="id"
      v-bind:name="name"
      class="page__check"
    />
<<<<<<< HEAD
    <span class="page__check-custom"></span>
    <span class="page__check-custom-2"></span>
    <span class="page__label-bg"></span>
    <span class="page__answer"><slot></slot></span>

=======
    <span class="page__answer">{{ answer }}</span>
    <span class="page__check-custom"></span>
    <span class="page__check-custom-2"></span>
>>>>>>> bb8fdb96a89fc4409e0473734d95b6648959f642
  </label>
</template>

<script>
var textLabel = {
  inheritAttrs: false,
  props: {
    type: String,
    id: String,
    name: String,
    answer: String,
    src: String,
  },
  template: "#page-label",
  mounted() {
    if (this.type == "radio") {
      function handler() {
        quiz.switchToNext();
      }
      this.$refs.input.addEventListener("click", handler);
    }
  },
};
<<<<<<< HEAD
=======

>>>>>>> bb8fdb96a89fc4409e0473734d95b6648959f642
export default {
  name: "page-label",
  props: ["type", "id", "name", "answer"],
  components: {
    textLabel,
  },
  mounted() {
  
    if (this.type == "radio") {
      function handler() {
        quiz.switchToNext();
      }
      this.$refs.input.addEventListener("click", handler);
    }
  }
};
</script>