import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/CartStore'

const useCart = () => {
    const cartStore = useCartStore()

    // Store state
    const {
        cartProducts,
        totalCartItems,
        groupedProducts,
        cartIsEmpty,
        groupCountProducts,
        totalGroupPrice,
        totalPrice
    } = storeToRefs(cartStore)

    // Store actions
    const addToCart = (product) => {
        cartStore.addToCart(product)
    }

    const removeItem = (itemId) => {
        cartStore.removeItem(itemId)
    }

    const clearCart = () => {
        cartStore.$reset()
    }

    return {
        addToCart,
        removeItem,
        clearCart,
        cartProducts: computed({
            get: () => cartProducts.value,
            set: (value) => (cartProducts.value = value)
        }),
        groupedProducts: computed(() => groupedProducts.value),
        totalCartItems: computed(() => totalCartItems.value),
        cartIsEmpty: computed(() => cartIsEmpty.value),
        groupCountProducts: computed(() => groupCountProducts.value),
        totalGroupPrice: computed(() => totalGroupPrice.value),
        totalPrice: computed(() => totalPrice.value)
    }
}

export default useCart
