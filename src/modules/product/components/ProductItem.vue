<script setup>
import { defineProps } from 'vue'
import Card from 'primevue/card'

const { productTitle } = defineProps({
    productTitle: {
        type: String,
        required: true
    },
    productPrice: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
        required: true
    }
})
</script>

<template>
    <Card class="mx-auto">
        <template #header> </template>
        <template #title> {{ productTitle }} </template>
        <template #subtitle> {{ productPrice }} </template>
        <template #content>
            <div class="flex-row">
                <div class="col">
                    <div class="image-container">
                        <img alt="product" class="" :src="productImage" style="width: 12rem" />
                    </div>
                    <p class="mt-2">
                        {{ productDescription }}
                    </p>
                </div>
            </div>
        </template>
    </Card>
</template>

<style scoped>
.image-container {
    display: flex;
    justify-content: center;
}
</style>
