<template>
  <div class="mainpage">
    <questions :question="list" />
  </div>
</template>

<script>
import Vue from 'vue';
import Question from '../Question/question.json';
// import Dbg from '../Util/Debug';

import Questions from './Questions';

Vue.component('questions', Questions);

export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    // Question.forEach((element) => {
    //   this.list.push(element);
    // });
    this.list = Question;
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
