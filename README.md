# grid-draggable-gutter-layout
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Ftomatoaiu%2Fgrid-draggable-gutter-layout.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Ftomatoaiu%2Fgrid-draggable-gutter-layout?ref=badge_shield)

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
          name: "row-1-col-1"
        },
        {
          name: "row-1-col-2"
        },
        {
          name: "row-2-col-1"
        },
        {
          name: "row-2-col-2"
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


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Ftomatoaiu%2Fgrid-draggable-gutter-layout.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Ftomatoaiu%2Fgrid-draggable-gutter-layout?ref=badge_large)