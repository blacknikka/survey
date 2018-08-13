<template>
  <div class="container">
    <div class="submit-button-container">
      <button type="button" name="submit-button" @click="ButtonPushed">
        <span class="button-text">{{text}}</span>
      </button>
    </div>
  </div>
</template>

<script>
import Dbg from '../Util/Debug';

export default {
  props: {
    text: {
      type: String,
    },
  },
  data() {
    return {};
  },
  methods: {
    ButtonPushed() {
      Dbg.console('clicked');
      this.$emit('submit-event');
    },
  },
};
</script>

<style scoped>
.container {
  padding: 10px;
  background-color: rgb(128, 206, 125);
  display: flex;
  flex-direction: column;
}
.text-area {
  height: 100px;
}
.button-text {
  font-size: 20px;
}
.title {
  font-size: 20px;
}
.subject {
  font-size: 15px;
  font-weight: bold;
}
</style>
