<template>
    <img v-if="type === 'id'" class="w-4 mr-2 select-none" src="../assets/icons/id.svg" alt="" srcset="">
    <img v-if="type === 'text'" class="w-4 mr-2 select-none" src="../assets/icons/text.svg" alt="" srcset="">
    <img v-if="type === 'date'" class="w-4 mr-2 select-none" src="../assets/icons/date.svg" alt="" srcset="">
    <img v-if="type === 'bool'" class="w-4 mr-2 select-none" src="../assets/icons/bool.svg" alt="" srcset="">
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            required: true
        }
    }
}
</script>