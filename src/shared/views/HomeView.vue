<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="container">
        <h1>INICIO</h1>
        <RouterLink to="/products">Ir al listado de productos</RouterLink>
    </div>
</template>

<style scoped>
.container {
    margin-top: 2rem;
    text-align: center;
}
</style>
