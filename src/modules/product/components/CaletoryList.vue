<script setup>
import { defineProps, defineEmits } from 'vue';
import Tag from 'primevue/tag'

const { categories } = defineProps({
    categories: {
        type: Array,
        required: true,
        default: () => []
    }
})

const emits = defineEmits(['categorySelected'])

</script>

<template>
    <p>Categorias</p>
    <div class="flex-row">
        <Tag
            class="m-1 cursor-pointer"
            v-for="category in categories"
            :key="category"
            :value="category"
            @click="() => emits('categorySelected', category)"
        />
    </div>
</template>

<style scoped></style>
