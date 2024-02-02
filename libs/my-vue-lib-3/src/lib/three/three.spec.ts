import { mount } from '@vue/test-utils';
import Three from './three.vue';

describe('Three', () => {
  it('renders properly', () => {
    const wrapper = mount(Three, {});
    expect(wrapper.text()).toContain('Welcome to Three');
  });
});
