<template>
  <div class="container">
    <div class="title">
      {{question.Question}}
    </div>
    <div class="subject">
      {{question.Subject}}
    </div>
    <span v-for="(item, index) in question.Answer" :key="index">
      <!-- eslint-disable-next-line max-len -->
      <input type="radio" :name="question.Question" :value="item" @input="edit($event)">
      <span class="radio-button-content">
        {{item}}
      </span>
    </span>
    <div>{{checkresult}}</div>
  </div>
</template>

<script>
// import Dbg from '../Util/Debug';

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
    return {
      checkresult: '',
    };
  },
  mounted() {
    // Dbg.console(this.list);
  },
  // computed: {
  //   selectedName: {
  //     get: function() {
  //       return this.$store.state.InputData[this.question.Question];
  //     },
  //     set: function(val) {
  //       this.$store.commit('UpdateByName', {
  //         name: this.question.Question,
  //         data: val.target.value,
  //       });
  //     },
  //   },
  // },
  methods: {
    edit(e) {
      this.$store.commit('UpdateByName', {
        name: this.question.Question,
        data: e.target.value,
      });

      this.checkresult = e.target.value;
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
.radio-button-content {
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
