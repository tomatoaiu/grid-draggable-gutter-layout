<template>
  <div id="app">
    <grid-draggable-gutter-layout :grid="grid" :row="2" :col="2">
      <template v-for="(item, index) of grid" #[item.name]>
        <div :key="index">{{ item.name }}</div>
      </template>
    </grid-draggable-gutter-layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import GridDraggableGutterLayout from "./components/grid-draggable-gutter-layout.vue";

export default Vue.extend({
  name: "app",
  components: {
    GridDraggableGutterLayout
  },
  data() {
    return {
      grid: [
        {
          name: "row-1-col-1",
          row: 1,
          col: 1
        },
        {
          name: "row-1-col-2",
          row: 1,
          col: 2
        },
        {
          name: "row-2-col-1",
          row: 2,
          col: 1
        },
        {
          name: "row-2-col-2",
          row: 2,
          col: 2
        }
      ]
    };
  }
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
