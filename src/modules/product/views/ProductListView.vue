<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import useProduct from '../composables/useProduct'
import useCart from '../composables/useCart'
import useFormat from '@/shared/composables/useFormat'
import useToggle from '@/shared/composables/useToggle'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Dialog from 'primevue/dialog'
import ProductItem from '../components/ProductItem.vue'
import SearchBar from '../components/SearchBar.vue'
import CaletoryList from '../components/CaletoryList.vue'
import CartControlButtons from '../components/CartControlButtons.vue'

const { products, categories, loadProducts, loadCategories, loading, searchProductsByTerms } =
    useProduct()
const { formatPriceInUSD } = useFormat()
const { isVisible: isModalVisible, open: openModal, close: closeModal } = useToggle()
const { addToCart } = useCart()

let productSelected = ref({})

const openProductModal = (product) => {
    productSelected.value = product
    openModal()
}

let searchProductTerm = ref('')

const productsByTerms = computed(() => searchProductsByTerms(searchProductTerm.value))

const searchProductValue = (searchValue) => {
    searchProductTerm.value = searchValue
}

const categorySelected = (category) => {
    searchProductTerm.value = category
}

const addProductToCart = (count, product) => {
    count = parseInt(count)

    for (let index = 0; index < count; index++) {
        addToCart(product)
    }

    closeModal()
}

onMounted(async () => {
    const { ok: okCategories } = await loadCategories()
    if (!okCategories) return

    const { ok: okProducts } = await loadProducts()
    if (!okProducts) return
})

onBeforeUnmount(() => {
    products.value = []
    categories.value = []
})
</script>

<template>
    <div class="container">
        <h3>Lista de Productos</h3>
        <div v-if="!loading" class="flex-column my-4">
            <CaletoryList @category-selected="categorySelected" :categories="categories" />
        </div>
        <div v-else style="font-size: 3rem" class="pi pi-spin pi-spinner"></div>
        <div class="flex-column">
            <SearchBar @search="searchProductValue" />
            <div v-if="!loading" class="col datatable-container">
                <DataTable
                    :value="productsByTerms"
                    paginator
                    :rows="5"
                    :rowsPerPageOptions="[5, 10, 20, 50]"
                    tableStyle="min-width: 50rem"
                >
                    <Column header="Nombre" style="width: 25%">
                        <template #body="slotProps">
                            <span
                                @click="openProductModal(slotProps.data)"
                                class="font-bold link"
                                >{{ slotProps.data.title }}</span
                            >
                        </template>
                    </Column>
                    <Column header="Image" style="width: 10%">
                        <template #body="slotProps">
                            <img
                                :src="slotProps.data.image"
                                :alt="slotProps.data.image"
                                class="w-4rem shadow-2 border-round p-2"
                            />
                        </template>
                    </Column>
                    <Column field="price" header="Precio" style="width: 10%">
                        <template #body="slotProps">
                            {{ formatPriceInUSD(slotProps.data.price) }}
                        </template>
                    </Column>
                    <Column field="category" header="Categoria" style="width: 15%"></Column>
                </DataTable>
            </div>
            <div v-else style="font-size: 3rem" class="pi pi-spin pi-spinner"></div>
        </div>
        <Dialog
            v-model:visible="isModalVisible"
            modal
            header="Producto"
            :style="{ width: '32rem' }"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
        >
            <template #header>
                <div class="inline-flex align-items-center justify-content-center gap-2">
                    <span class="font-bold white-space-nowrap"></span>
                </div>
            </template>
            <div class="flex-column">
                <ProductItem
                    :productTitle="productSelected.title"
                    :productPrice="formatPriceInUSD(productSelected.price)"
                    :productDescription="productSelected.description"
                    :productImage="productSelected.image"
                />
            </div>
            <template #footer>
                <CartControlButtons
                    @count-product="addProductToCart($event, productSelected)"
                />
            </template>
        </Dialog>
    </div>
</template>

<style scoped>
.container {
    margin: 2rem;
    text-align: center;
}

.datatable-container {
    margin: 0 auto;
    width: 80%;
}

.link {
    cursor: pointer;
    color: #007bff;
    text-decoration: underline;
}
</style>
