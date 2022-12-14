<template>
    <button @click="increment">Klicka här!</button>
    <h4>{{ value }}</h4>
</template>
<script>
export default {
    name: 'counterComponent',
    data() {
        return {
            value: 0
        }
    },
    methods: {
        increment() {
            this.value++;
        }
    }
}
</script>