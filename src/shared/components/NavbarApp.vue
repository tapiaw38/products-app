<script setup>
import { RouterLink } from 'vue-router'
import useCart from '@/modules/product/composables/useCart'
import useToggle from '../../shared/composables/useToggle'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import CartProductList from './CartProductList.vue'

const { totalCartItems } = useCart()
const { isVisible: isCartVisible, toggle: toggleCart } = useToggle()

const items = [
    {
        label: 'Inicio',
        route: '/',
        icon: 'pi pi-fw pi-home'
    },
    {
        label: 'Productos',
        route: '/products',
        icon: 'pi pi-fw pi-shopping-bag'
    }
]
</script>

<template>
    <div class="relative">
        <Menubar :model="items">
            <template #item="{ label, item, props }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
            </template>
            <template #end>
                <div class="flex-row relative">
                    <div>
                        <Button
                            @click="toggleCart"
                            label=""
                            icon="pi pi-shopping-cart"
                            :badge="String(totalCartItems)"
                            badgeClass="p-badge-info"
                        />
                    </div>
                </div>
            </template>
        </Menubar>
        <CartProductList v-if="isCartVisible" class="absolute cart-product-list" />
    </div>
</template>

<style scoped>
.cart-product-list {
    right: 0%;
    top: 100%;
    z-index: 999999;
}
</style>
