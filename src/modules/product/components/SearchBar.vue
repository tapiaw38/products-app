<script setup>
import { ref, defineEmits } from 'vue';
import InputText from 'primevue/inputtext';

const emits = defineEmits(['search']);

let searchValue = ref('');

</script>

<template>
    <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText @input="() => emits('search', searchValue)" v-model="searchValue" placeholder="Buscar" />
    </span>
</template>

<style scoped></style>
