<template>
  <div class="container">
    <li v-for="(item, index) in list" :id="item.id" :key="index">{{item}}</li>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
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
