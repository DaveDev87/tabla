import { describe, it, expect } from 'vitest'

import { mount, shallowMount } from '@vue/test-utils'
import DataTable from '../DataTable.vue'

describe('DataTable', () => {

    it('renders title properly', () => {
        const wrapper = shallowMount(DataTable, {
            props: {
                title: "Colecciones",
                header: []
            }
        })
        expect(wrapper.text()).toMatch("Colecciones")

    })

    it('renders properly', () => {
        const data = [{
            "access_group_name": "Abono",
            "access_group_id": 1,
            "total_uses": 0,
            "sessions": [
                {
                    "name": "01-ABONO",
                    "id": 19
                }
            ],
            "event_id": 1,
            "structure_decode": false,
            "name": "TKT CE ABONO 95",
            "modified": "2017-05-30T17:42:27.000Z",
            "id": 78,
            "basic_product_id": 27
        }, {
            "access_group_name": "Viernes",
            "access_group_id": 7,
            "total_uses": 0,
            "sessions": [
                {
                    "name": "03-VIERNES",
                    "id": 21
                }
            ],
            "event_id": 1,
            "structure_decode": false,
            "name": "TKM SE VIERNES INV",
            "modified": "2017-05-30T17:42:27.000Z",
            "id": 127,
            "basic_product_id": 29
        }];
        const headers = [
            { id: 1, title: "Name", key: "name" }
        ]

        const wrapper = mount(DataTable, {
            props: {
                headers,
                data,
                loading: true
            }
        })

        expect(wrapper).toBeTruthy();

    })
})
