<template>
  <div class="container">
    <div class="title">
      {{question.Question}}
    </div>
    <div class="subject">
      {{question.Subject}}
    </div>
    <span v-for="(item, index) in question.Answer" :key="index">
      <input type="checkbox" :name="question.Question" :value="item">
      <span class="ckeck-box-content">
        {{item}}
      </span>
    </span>
  </div>
</template>

<script>
import Dbg from '../Util/Debug';

export default {
  props: {
    question: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  mounted() {
    Dbg.console(this.list);
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
.ckeck-box-content {
  margin-left: 5px;
}
.title {
  font-size: 20px;
}
.subject {
  font-size: 15px;
  font-weight: bold;
}
</style>
