import { shallowMount } from "@vue/test-utils";
import Component from "@/components/grid-item.vue";

describe("GirdItem.vue", () => {
  it("renders a div", () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.contains("div")).toBe(true);
  });
});
