import { shallowMount } from "@vue/test-utils";
import Component from "@/components/grid-draggable-gutter-layout.vue";

describe("GridDraggableGutterLayout.vue", () => {
  it("renders a div", () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.contains("div")).toBe(true);
  });
});
