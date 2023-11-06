<script setup>
import { ref, defineEmits } from 'vue';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';

const emits = defineEmits(['countProduct']);

let countProduct = ref(0);

const updateCountProduct = (value) => {
    if (value === '') {
        countProduct.value = 0;
    } else {
        countProduct.value = parseInt(value);
    }
};


</script>

<template>
    <div>
        <Button
            @click="() => updateCountProduct(countProduct > 0 ? countProduct - 1 : 0)"
            label=""
            icon="pi pi-minus"
            class="p-button-text px-2 m-0"
        />
        <InputNumber
            class="w-100"
            :min="1"
            :showButtons="false"
            :inputStyle="{ width: '3rem' }"
            :inputClass="countProduct === 0 ? 'bg-danger' : ''"
            v-model="countProduct"
            @input="updateCountProduct($event.target.value)"
        />
        <Button
            @click="() => updateCountProduct(countProduct + 1)"
            label=""
            icon="pi pi-plus"
            class="p-button-text px-2"
        />
        <Button
            @click="emits('countProduct', countProduct), (countProduct = 0)"
            label="Agregar al carrito"
            icon="pi pi-shopping-cart"
            class="w-100"
        />
    </div>
</template>

<style scoped></style>
