<template>
    <h4>{{ result }}</h4>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
import { SortFunction } from './SortFunction'
const props = defineProps({
    firstWord: { type: String, required: true },
    secondWord: { type: String, required: true } 
})

let result = SortFunction(props.firstWord, props.secondWord)

</script>
