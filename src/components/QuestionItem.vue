<template>
  <div class="container">
    <!-- eslint-disable-next-line max-len -->
    <radio-button v-if="qlist.Type === 'SelectOne'" :question="qlist" />
    <check-box v-if="qlist.Type === 'SelectMulti'" :question="qlist" />
    <text-box v-if="qlist.Type === 'WriteAny'" :question="qlist" />
  </div>
</template>

<script>
import Vue from 'vue';
import RadioButton from './RadioButton';
import CheckBox from './CheckBox';
import TextBox from './TextBox';
// import Dbg from '../Util/Debug';

Vue.component('radio-button', RadioButton);
Vue.component('check-box', CheckBox);
Vue.component('text-box', TextBox);

export default {
  props: {
    qlist: {
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
    // this.question.every(d => this.list.push(d));
    // Dbg.console(this.qlist);
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
