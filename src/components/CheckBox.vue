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
      <input type="checkbox" :name="question.Question" :value="item" @input="edit($event, index)">
      <span class="ckeck-box-content">
        {{item}}
      </span>
    </span>
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
      checkresult: {},
    };
  },
  mounted() {
    // Dbg.console(this.list);
    this.commit();
  },
  created() {
    // init object.
    for (
      let index = 0, max = this.question.Answer.length;
      index < max;
      index++
    ) {
      this.checkresult[this.question.Answer[index]] = false;
    }

    // this.checkresult = new Array(this.question.Answer.length);
    // this.checkresult.forEach(x => {
    //   Dbg.console(x);
    //   this.checkresult[x] = false;
    // });
  },
  methods: {
    edit(e) {
      this.checkresult[e.target.value] = e.target.checked;

      this.commit();
    },
    commit() {
      this.$store.commit('UpdateByName', {
        name: this.question.Question,
        data: this.checkresult,
      });
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
