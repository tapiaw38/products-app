import { defineStore } from 'pinia'
import { groupBy } from 'lodash'

export const useCartStore = defineStore('cart', {
    state: () => ({
        cartProducts: [],
        error: null,
        loading: false
    }),

    getters: {
        totalCartItems: (state) => state.cartProducts.length || 0,
        cartIsEmpty: (state) => state.totalCartItems === 0,
        groupedProducts: (state) => groupBy(state.cartProducts, (product) => product.id),
        groupCountProducts: (state) => (id) => state.groupedProducts[id].length,
        totalGroupPrice: (state) => (id) =>
            state.groupedProducts[id].reduce((acc, curr) => acc + curr.price, 0),
        totalPrice: (state) => state.cartProducts.reduce((acc, curr) => acc + curr.price, 0)
    },

    actions: {
        addToCart(product) {
            this.cartProducts = [...this.cartProducts, product]
        },
        removeItem(itemId) {
            this.cartProducts = this.cartProducts.filter((product) => product.id !== itemId)
        }
    }
})
