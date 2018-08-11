<template>
  <div class="container">
    <span v-for="(item, index) in list" :key="index">
      <input type="radio" :name="name" :value="item">{{item}}
    </span>
  </div>
</template>

<script>
import Dbg from '../Util/Debug';

export default {
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    name: {
      type: String,
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
</style>
