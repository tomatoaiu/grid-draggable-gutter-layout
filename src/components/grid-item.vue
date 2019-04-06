<template>
  <div :style="style">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class GirdItem extends Vue {
  @Prop(Number) readonly gridRow!: number;
  @Prop(Number) readonly gridColumn!: number;

  get style() {
    return {
      "grid-row": this.gridRow,
      "grid-column": this.gridColumn
    };
  }
}
</script>
