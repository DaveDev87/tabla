<template>
    <main class="bg-slate-100 px-20 py-10">
        <section>
            <h1 class="text-3xl my-2">{{ title }}</h1>
            <input class="my-2 py-3 px-4 rounded-3xl w-1/2 bg-slate-50 focus:outline-none shadow focus:shadow-md" placeholder="Search"
                type="text">
        </section>
        <table class="w-full">
            <!-- Headers -->
            <tr>
                <th v-for="header in headers" class="text-left p-2 text-sm hover:bg-slate-200 cursor-pointer">
                    <div class="flex">
                        <Icon :type="header.type" />
                        <span>
                            {{ header.title }}
                        </span>
                    </div>
                </th>
            </tr>
            <!-- Body -->
            <tr v-for="(row) in data" class="transition duration-[50ms] ease-in hover:bg-slate-200  cursor-pointer">
                <td v-for="item in headers" class="text-left py-4 pl-2 text-sm">{{ row[item.key] }}</td>
            </tr>
        </table>
    </main>
</template>

<script>
import Icon from './Icon.vue'
export default {
    name: "datatable",
    props: {
        title: {
            type: String,
        },
        data: {
            type: Array,
            default: null
        },
        headers: {
            type: Array,
            required: true
        },
        loading: {
            type: Boolean,
            default: true
        }
    },
    components: {
        Icon
    }
}
</script>