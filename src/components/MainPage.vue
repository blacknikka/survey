<template>
  <div class="mainpage">
    <div class="container">
      <h1>{{title}}</h1>
      <questions :question="list" ref="submit" />
      <!-- eslint-disable-next-line max-len -->
      <submit-button class="submit-container" text="submit" @submit-event="SubmitedEvent" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Question from '../Question/question.json';
import SubmitButton from './SubmitButton';
// import Dbg from '../Util/Debug';

import Questions from './Questions';

Vue.component('questions', Questions);
Vue.component('submit-button', SubmitButton);

export default {
  data() {
    return {
      list: [],
      title: '',
    };
  },
  mounted() {
    // Question.forEach((element) => {
    //   this.list.push(element);
    // });
    this.list = Question.data;
    this.title = Question.title;
  },
  methods: {
    SubmitedEvent() {
      this.$store.dispatch('SubmitToServer');
    },
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
.mainpage {
  width: 50%;
  padding-right: 25%;
  padding-left: 25%;
}
.container {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}
.submit-container {
  margin: 2px;
}
</style>
