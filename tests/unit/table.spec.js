import Vue from 'vue';
import Vuetify from 'vuetify';

import { mount, createLocalVue } from '@vue/test-utils';
import Table from '@/components/Table.vue';

const localVue = createLocalVue();

describe('Card Table setup', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it('Renders a table top', () => {
    const wrapper = mount(Table, {});
    expect(wrapper.text()).toMatch('Howdy!');
  });
});
