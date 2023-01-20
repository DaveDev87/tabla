import { describe, it, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import Icon from '../Icon.vue';

describe("Icon", () => {
    it.each(["text", "id", "bool", "date"])("Given prop: %s, renders svg icon", (value) => {
        const wrapper = shallowMount(Icon, {
            props: {
                type: value
            }
        })
        expect(wrapper.find("img").exists()).toBeTruthy()

    })
})