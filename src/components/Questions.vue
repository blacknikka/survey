<template>
  <div class="container">
    <question-item :qlist="item" v-for="(item, index) in question" :key="index" />
  </div>
</template>

<script>
import Vue from 'vue';
import QuestionItem from './QuestionItem';
// import Dbg from '../Util/Debug';

Vue.component('question-item', QuestionItem);

export default {
  props: {
    question: {
      type: Array,
      default() {
        return {};
      },
    },
  },
  mounted() {
    // this.question.every(d => this.list.push(d));
    // Dbg.console(this.list);
  },
};
</script>

<style scoped>
.container {
  padding: 10px;
  background-color: azure;
  display: flex;
  flex-direction: column;
}
</style>
