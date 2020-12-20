<template id='img-label'>
  <label v-bind:for="id" class="page__img-label">
    <input
      ref="input"
      v-bind:type="type"
      v-bind:name="name"
      v-bind:id="id"
      v-bind:value="answer"
      class="page__check"
    />
    <div class="img-label__wrapp">
      <img v-bind:src="src" v-bind:alt="answer" class="img-label__img" />
    </div>
    <span class="img-label__answer">{{ answer }}</span>
  </label>
</template>

<script>
var imgLabel = {
  inheritAttrs: false,
  props: {
    type: String,
    id: String,
    name: String,
    answer: String,
    src: String,
  },
  template: "#img-label",
  mounted() {
    if (this.type == "radio") {
      function handler() {
        quiz.switchToNext();
      }
      this.$refs.input.addEventListener("click", handler);
    }
  },
};

export default {
  name: "img-label",
  props: ["type", "id", "name", "answer", "src"],
  components: {
    imgLabel,
  },
  mounted() {
    if (this.type == "radio") {
      function handler() {
        quiz.switchToNext();
      }
      this.$refs.input.addEventListener("click", handler);
    }
  },
};
</script>




