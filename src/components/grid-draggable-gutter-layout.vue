<template>
  <div :style="style" ref="grid">
    <grid-item
      v-for="(item, index) of grid"
      :key="index"
      :grid-row="item.row"
      :grid-column="item.col"
    >
      <slot :name="`row-${item.row}-col-${item.col}`"></slot>
    </grid-item>
  </div>
</template>

<script lang="ts">
import GridItem from "./grid-item.vue";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  components: { GridItem }
})
export default class GridDraggableGutterLayout extends Vue {
  width: number = 200;
  height: number = 600;

  @Prop(Array) readonly grid!: [];
  @Prop(Number) readonly row!: number;
  @Prop(Number) readonly col!: number;

  get cols() {
    return this.divide(this.width, this.col);
  }

  get rows() {
    return this.divide(this.height, this.row);
  }

  get style() {
    return {
      display: "grid",
      width: this.width,
      height: this.height,
      "grid-template-rows": this.rows,
      "grid-template-columns": this.cols
    };
  }

  mounted() {
    const grid: Element = this.$refs["grid"] as Element;
    this.width = grid.clientWidth as number;
    this.height = grid.clientHeight as number;
  }

  divide(total: number, num: number): string {
    if (total && num) {
      const div = total / num;
      let res = "";
      for (let i = 0; i < num - 1; i++) {
        res += `${div}px `;
      }
      res += `${div}px`;
      return res;
    } else {
      return "100px 100px";
    }
  }
}
</script>
