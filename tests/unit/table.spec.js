import { shallowMount } from '@vue/test-utils';
import Table from '@/components/Table.vue';

describe('Card Table setup', () => {
  it('Renders a table top', () => {
    const wrapper = shallowMount(Table, {});
    expect(wrapper.text()).toMatch('Howdy!');
  });
});
