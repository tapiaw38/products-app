import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/ProductStore'

const useProduct = () => {
    const productStore = useProductStore()

    // Store state
    const { products, categories } = storeToRefs(productStore)

    // Store actions
    const loadProducts = async() => {
        const res = await productStore.loadProducts()
        return res
    }

    const loadCategories = async() => {
        const res = await productStore.loadCategories()
        return res
    }

    const searchProductsByTerms = (terms = '') => {
        return productStore.searchProductsByTerms(terms)
    }

    return {
        loadProducts,
        loadCategories,
        searchProductsByTerms,
        products: computed({
            get: () => products.value,
            set: (value) => (products.value = value),
        }),
        categories: computed({
            get: () => categories.value,
            set: (value) => (categories.value = value),
        })
    }
}

export default useProduct
