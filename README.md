# grid-draggable-gutter-layout
> css grid layout + dragging gutter

## Usage
```html
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
import GridDraggableGutterLayout from "grid-draggable-gutter-layout";

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
```


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
