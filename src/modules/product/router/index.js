export default {
    component: () => import(/* webpackChunkName: "producLayout" */ '../layouts/ProductLayout.vue'),
    children: [
        {
            path: '',
            name: 'productList',
            component: () =>
                import(/* webpackChunkName: "productListView" */ '../views/ProductListView.vue')
        }
    ]
}
