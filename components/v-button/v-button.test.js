import { describe, it, vi} from "vitest";
import { mount } from "@vue/test-utils";

import VButton from "./v-button.vue";



describe('v-button', () => {
  it('should call toggle state function', async () => {
    const wrapper = mount(VButton);
    const spy = vi.spyOn(wrapper.vm, 'toggleState');

    await wrapper.trigger('click');

    expect(spy).toHaveBeenCalled()
  });
})