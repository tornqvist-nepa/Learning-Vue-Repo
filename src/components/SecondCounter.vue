<template>
    <button @click="increment">Klicka här!</button>
    <h4>{{ value }}</h4>
</template>
<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
    startValue: Number
})
let value = ref(props.startValue)

function increment() {
  value.value++
}
</script>