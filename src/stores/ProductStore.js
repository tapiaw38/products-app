import { defineStore } from 'pinia'
import api from '../shared/api/api'

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [],
        categories: [],
        error: null,
        loading: false
    }),

    getters: {},

    actions: {
        async loadProducts() {
            this.loading = true
            try {
                const { data } = await api.get('/products')
                this.products = [...data, ...this.products]
                return { ok: true }
            } catch (error) {
                this.error = error
                return { ok: false, message: error.message }
            } finally {
                this.loading = false
            }
        },
        async loadCategories() {
            this.loading = true
            try {
                const { data } = await api.get('/products/categories')
                this.categories = [...data, ...this.categories]
                return { ok: true }
            } catch (error) {
                this.error = error
                return { ok: false, message: error.message }
            } finally {
                this.loading = false
            }
        },
        searchProductsByTerms(terms = '') {
            return this.products.filter((product) => {
                return (
                    product.title.toLowerCase().includes(terms.toLowerCase()) ||
                    product.category.toLowerCase().includes(terms.toLowerCase())
                )
            })
        }
    }
})
