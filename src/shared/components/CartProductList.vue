<script setup>
import useCart from '@/modules/product/composables/useCart'
import useFormat from '@/shared/composables/useFormat'
import Button from 'primevue/button'

const {
    cartIsEmpty,
    groupedProducts,
    groupCountProducts,
    clearCart,
    removeItem,
    totalGroupPrice,
    totalPrice
} = useCart()
const { formatPriceInUSD } = useFormat()

const shortName = (name) => {
    if (name.length > 15) {
        return name.substring(0, 15) + '...'
    } else {
        return name
    }
}
</script>

<template>
    <div v-if="!cartIsEmpty" class="border-round shadow-4 p-2 bg-white">
        <div v-for="(items, id) in groupedProducts" :key="id">
            <div class="flex flex-wrap p-2 align-items-center gap-3">
                <img
                    class="w-2rem shadow-2 flex-shrink-0 border-round"
                    :src="items[0].image"
                    :alt="items[0].title"
                />
                <div class="flex-1 flex flex-column gap-2">
                    <span class="font-bold text-sm">{{ shortName(items[0].title) }}</span>
                    <div class="flex align-items-center gap-2">
                        <i class="pi pi-tag text-sm"></i>
                        <span>{{ items[0].category }}</span>
                    </div>
                </div>
                <div>
                    <span class="font-bold text-900 text-sm"> x{{ groupCountProducts(id) }}</span>
                    <span class="font-bold text-900 text-sm ml-2">{{
                        formatPriceInUSD(totalGroupPrice(id))
                    }}</span>
                </div>
                <div>
                    <Button
                        label=""
                        icon="pi pi-trash"
                        class="p-button-danger"
                        @click="removeItem(items[0].id)"
                    />
                </div>
            </div>
        </div>
        <div class="p-2">
            <div class="flex justify-content-between gap-2">
                <span class="font-bold text-900 text-sm">Total</span>
                <span class="font-bold text-900 text-sm">{{
                    formatPriceInUSD(totalPrice)
                }}</span>
            </div>
            <div class="flex justify-content-end my-2">
                <Button label="Limpiar" class="p-button-danger" @click="clearCart" />
            </div>
        </div>
    </div>
    <div v-else class="border-round shadow-4 p-2 bg-white">
        <span class="font-bold text-900 text-sm">No hay productos en el carrito</span>
    </div>
</template>

<style scoped></style>
