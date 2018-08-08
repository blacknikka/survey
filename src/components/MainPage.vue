<template>
  <div class="mainpage">
    <radio-button :list="list" />
  </div>
</template>

<script>
import Vue from 'vue';
import RadioButton from './RadioButton';
import Question from '../Question/question.json';
import Dbg from '../Util/Debug';

Vue.component('radio-button', RadioButton);

export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    const json = Question.Question1;
    Dbg.console(json);

    json.Answer.every(d => this.list.push(d));
  },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
