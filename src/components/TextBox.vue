<template>
  <div class="container">
    <div class="title">
      {{question.Question}}
    </div>
    <div class="subject">
      {{question.Subject}}
    </div>
    <textarea class="text-area" @input="edit($event)"></textarea>
    <div>{{input}}</div>
  </div>
</template>

<script>
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
      input: '',
    };
  },
  created() {
    this.commit();
  },
  methods: {
    edit(e) {
      this.input = e.target.value;

      this.commit();
    },
    commit() {
      this.$store.commit('UpdateByName', {
        name: this.question.Question,
        data: this.input,
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
.text-area {
  height: 100px;
}
.title {
  font-size: 20px;
}
.subject {
  font-size: 15px;
  font-weight: bold;
}
</style>
