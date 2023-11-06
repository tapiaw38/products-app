<script setup>
import { RouterView } from 'vue-router'
import NavbarApp from '@/shared/components/NavbarApp.vue'
</script>

<template>
    <NavbarApp />
    <main><RouterView /></main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap');
body {
    font-family: 'Montserrat', sans-serif;
    padding: 0 !important;
    margin: 0 !important;
}
</style>
